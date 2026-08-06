
/**
 * Utility to optimize Pexels image URLs by appending resizing and formatting parameters.
 * Pexels supports various parameters to serve smaller, optimized images.
 */
export function getOptimizedPexelsUrl(url: string, width: number = 1200) {
  if (!url || !url.includes('pexels.com')) return url;

  if (process.env.NODE_ENV === 'production') {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
      // In production, we've downloaded these to public/images/pexels/
      return `/images/pexels/${filename}`;
    } catch {
      // Fallback if URL parsing fails
    }
  }

  // Development mode: serve from Pexels with optimizations
  // Check if URL already has parameters
  const separator = url.includes('?') ? '&' : '?';
  
  // auto=format: Serves WebP/AVIF if supported
  // fit=crop: Crops to the requested dimensions
  // q=80: Good balance of quality and size
  // w: Requested width
  // h: Calculated height (Pexels will maintain aspect ratio if only w is provided)
  
  // If the URL already has w= or h=, we should replace them or just return it if it looks optimized
  if (url.includes('w=') || url.includes('width=')) return url;

  return `${url}${separator}auto=compress&cs=tinysrgb&fit=crop&q=80&w=${width}`;
}
