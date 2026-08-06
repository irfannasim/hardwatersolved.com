import fs from 'fs';
import path from 'path';
import https from 'https';

const CACHE_DIR = path.join(process.cwd(), 'public', 'images', 'pexels');

// Ensure directory exists
if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Function to find all pexels URLs in a file
function extractPexelsUrls(content) {
    const regex = /https:\/\/images\.pexels\.com\/photos\/[0-9]+\/pexels-photo-[a-zA-Z0-9-]+\.(jpeg|jpg|png)/g;
    const matches = content.match(regex);
    return matches ? [...new Set(matches)] : [];
}

// Recursively find all files
function getAllFiles(dir, extList) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath, extList));
        } else {
            const ext = path.extname(file);
            if (extList.includes(ext)) {
                results.push(filePath);
            }
        }
    }
    return results;
}

const downloadImage = (url, dest) => {
    return new Promise((resolve, reject) => {
        // Download optimized 1200px width version to save space
        const fetchUrl = `${url}?auto=compress&cs=tinysrgb&fit=crop&q=80&w=1200`;
        
        https.get(fetchUrl, (response) => {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                // Follow redirect
                https.get(response.headers.location, (res) => {
                    const file = fs.createWriteStream(dest);
                    res.pipe(file);
                    file.on('finish', () => {
                        file.close(resolve);
                    });
                }).on('error', (err) => {
                    fs.unlink(dest, () => reject(err));
                });
            } else {
                reject(new Error(`Failed to download image: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function main() {
    console.log('Scanning for external images...');
    
    const files = [
        ...getAllFiles(path.join(process.cwd(), 'content'), ['.md']),
        ...getAllFiles(path.join(process.cwd(), 'app'), ['.tsx', '.ts'])
    ];

    const allUrls = new Set();
    
    for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const urls = extractPexelsUrls(content);
        urls.forEach(url => allUrls.add(url));
    }

    console.log(`Found ${allUrls.size} unique Pexels images.`);

    for (const url of allUrls) {
        const urlObj = new URL(url);
        const filename = urlObj.pathname.substring(urlObj.pathname.lastIndexOf('/') + 1);
        const dest = path.join(CACHE_DIR, filename);

        if (fs.existsSync(dest)) {
            console.log(`[SKIP] Already exists: ${filename}`);
        } else {
            console.log(`[DOWNLOAD] Fetching: ${filename}`);
            try {
                await downloadImage(url, dest);
                console.log(`[SUCCESS] Downloaded: ${filename}`);
            } catch (err) {
                console.error(`[ERROR] Failed to download ${filename}:`, err.message);
            }
        }
    }
    
    console.log('Image download process complete!');
}

main().catch(console.error);