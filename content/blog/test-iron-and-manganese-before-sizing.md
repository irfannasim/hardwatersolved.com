---
title: "Test Iron and Manganese Before Sizing a Softener"
seoTitle: "Test Iron Before Sizing a Water Softener: 3 Costly Traps"
seoDescription: "Test iron before sizing a water softener: every 1 ppm consumes capacity like about 4 grains of hardness, and how you draw the sample decides the number."
excerpt: "A softener sized on hardness alone is undersized on any well that carries iron. This is the compensated hardness formula with worked examples, the conversion factors for ferrous and ferric iron and for manganese, and the sampling trap that makes a lab result read low before it ever reaches the bench."
date: "2026-09-15"
author: "Irfan Nasim"
category: "Well Water"
featuredImage: "https://images.pexels.com/photos/17882785/pexels-photo-17882785.jpeg"
ogImageAlt: "Water running from a rusted pipe over mineral deposits, the visible result of iron that was never measured before a softener was sized"
faqs:
  - question: "How much hardness does 1 ppm of iron add to a softener setting?"
    answer: "The industry convention is that 1 ppm of clear-water ferrous iron behaves like about 4 grains per gallon of hardness for capacity purposes. Some manufacturers use 3 and some use 5, and for red-water ferric iron the figure commonly doubles to around 8 gpg per ppm. The spread matters less than the principle: iron is not free capacity. Use the factor in your own valve's manual if it states one, because that is the number the warranty is written against."
  - question: "Can a water softener remove iron from well water?"
    answer: "It removes dissolved ferrous iron, within limits, because ferrous iron carries a positive charge and the resin exchanges it like calcium. It does not remove oxidised ferric iron, iron bacteria or iron bound up with tannins, and sending any of those into a resin bed causes fouling. Extension guidance places ion exchange inside its comfort zone at roughly under 5 mg/L of dissolved iron, with a neutral-or-above pH, and pre-oxidised iron treated as actively damaging."
  - question: "What is the difference between ferrous and ferric iron?"
    answer: "Ferrous iron is dissolved and invisible: water is clear at the tap and turns orange in the glass over several minutes as it meets air. Ferric iron is already oxidised into rust particles, so the water looks orange or has visible specks the moment it is drawn. The same well can deliver both, and the split changes the treatment: ferrous can go to a softener at low concentrations, ferric needs filtration ahead of one."
  - question: "Does manganese affect water softener sizing too?"
    answer: "Yes, and by more per ppm than iron. Manganese is harder to exchange and harder to strip off the resin during regeneration, so common compensation factors run from about 6 to 8 gpg per ppm — higher than the 4 used for ferrous iron. It also shows up at much lower concentrations, with the EPA secondary standard set at 0.05 mg/L, so a level that looks trivially small on a lab report can still stain fixtures black and shorten resin life."
  - question: "Why did my well water softener fail after two years?"
    answer: "The most common cause is iron fouling from iron that was never measured. Iron oxide coats the resin beads and blocks exchange sites, so capacity falls steadily, the water starts breaking through early, and by the time it is obvious the bed is often past recovery. The second most common cause is a hardness setting entered without iron compensation, which makes the unit regenerate too rarely and lets iron sit on the resin between cycles."
  - question: "How do I collect a water sample for an iron test?"
    answer: "Draw from a tap as close to the wellhead as you can reach, ahead of any treatment. Run it until the temperature is steady, then fill the bottle to the very top and cap it immediately so there is almost no air in the headspace. Deliver it to the lab the same day. If you want to know the ferrous-versus-ferric split, ask the lab for a filtered dissolved iron and an unfiltered total iron on the same sample — the gap between the two numbers is the part that has already oxidised."
---

Test iron before sizing a water softener because iron consumes exchange capacity without appearing in a hardness result. The working convention is that every 1 ppm of dissolved iron behaves like roughly 4 grains per gallon of hardness, and manganese behaves like 6 to 8 gpg per ppm. A well at 15 gpg with 2 ppm of iron is not a 15 gpg job — it is a 23 gpg job, and a system sized for 15 will run out early every cycle and foul its resin doing it.

That single arithmetic correction is why so many well softeners fail inside two years. This page gives you the compensation formula with worked examples, the conversion factors for each form of iron, the sampling trap that makes lab results read low before they reach the bench, and the thresholds where iron stops being a sizing adjustment and starts needing its own filter.

## The Compensated Hardness Formula, With Worked Examples

Compensated hardness is the number you actually program into the softener and size the resin bed against. It is total hardness plus an allowance for every other cation the resin will have to handle.

**Compensated hardness (gpg) = total hardness (gpg) + (4 × ferrous iron in ppm) + (8 × ferric iron in ppm) + (6 to 8 × manganese in ppm)**

Manufacturers differ on the multipliers. Some use 3 for iron, some use 5; manganese is commonly quoted at 6 or 8. If your control valve's manual states factors, use those, because that is what the warranty is written against. Where it does not, the figures above are the widely used defaults and they err toward safety.

Three worked cases:

| Case | Raw numbers | Working | Compensated hardness |
|---|---|---|---|
| Suburban well, light iron | 12 gpg, 0.4 ppm ferrous iron, no manganese | 12 + (4 × 0.4) | **13.6 gpg** |
| Bedrock well, real iron | 15 gpg, 2.0 ppm ferrous iron, 0.1 ppm manganese | 15 + (4 × 2.0) + (6 × 0.1) | **23.6 gpg** |
| Iron-heavy well, partly oxidised | 18 gpg, 1.5 ppm ferrous, 1.5 ppm ferric, 0.3 ppm manganese | 18 + (4 × 1.5) + (8 × 1.5) + (6 × 0.3) | **37.8 gpg** |

Read the first row and the third row together. The first case can be rounded off and ignored; 0.4 ppm of iron adds less than 2 gpg and any sensible reserve absorbs it. The third case has **more than doubled** the number the softener has to be sized against, and it is also past the point where a softener should be taking the iron at all — which is the subject of a later section.

The middle case is the dangerous one, because nothing about it looks alarming. Two ppm of iron makes water that tastes faintly metallic and stains a toilet bowl slowly. It does not look like a 57% increase in softening load, but that is what it is. If you have not yet measured your hardness range across a season, start with [how to test hardness in private well water](/blog/how-to-test-well-water-hardness/) — the compensation is applied to the *high* end of that range, not the average.

## Why You Test Iron Before Sizing a Water Softener

![Corroded sink and fittings stained by iron in untreated well water](https://images.pexels.com/photos/6275397/pexels-photo-6275397.jpeg)

A softener works by cation exchange. The resin holds sodium ions loosely and swaps them for anything with a stronger affinity that comes past. Calcium and magnesium are the intended targets, but the resin does not know that. Dissolved ferrous iron carries a 2+ charge, behaves chemically much like calcium and magnesium, and is taken up the same way. [EPA's WaterSense overview of cation exchange softeners](https://www.epa.gov/watersense/cation-exchange-water-softeners) describes the mechanism, and the mechanism is exactly why the selectivity cannot be turned off.

So iron occupies exchange sites. Those sites are then unavailable for hardness, which is why the practical effect is a loss of capacity rather than a separate problem. If the softener is programmed for hardness only, three things follow:

- The valve counts gallons against a capacity figure it will not actually achieve, so **breakthrough happens before the scheduled regeneration**.
- Because it regenerates too rarely, **iron sits on the resin longer** between brine cycles, with more time to oxidise in place.
- Oxidised iron does not come off in a normal brine rinse. It accumulates. Capacity falls further, breakthrough gets earlier, and the loop tightens.

This is the difference between an undersized softener and a failing one. An undersized softener runs out early and then recovers fully on the next regeneration. An iron-fouled softener runs out early and recovers a little less each time.

## The Sampling Trap: Ferrous, Ferric and What the Bottle Does

![Laboratory technician transferring a water sample for iron analysis](https://images.pexels.com/photos/16998380/pexels-photo-16998380.jpeg)

Here is the trap that makes iron results unreliable even when the lab is competent: **the sample changes between the tap and the bench**.

Deep groundwater is usually low in oxygen, so iron sits in the dissolved ferrous state. Water drawn from such a well is clear in the glass and turns orange over the following minutes as oxygen converts ferrous iron to insoluble ferric hydroxide. Those particles then settle. If a sample sits in a partly filled bottle for a day before analysis, some of the iron has left solution and stuck to the bottle wall. A dissolved-iron test on that sample reads low.

The countermeasures are all about air and time:

- **Sample close to the wellhead**, ahead of the pressure tank where practical. Pressure tanks introduce air and give the reaction somewhere to happen.
- **Fill the bottle to the brim** and cap immediately. Headspace air is the reagent you are trying to exclude.
- **Deliver the same day.** Iron is not a test to post on a Friday.
- **Ask for both numbers.** A filtered sample gives dissolved iron; an unfiltered sample gives total iron. The difference between them is the fraction that has already oxidised in your plumbing — and that fraction is the part a softener cannot handle.

That dissolved-versus-total pair is the most useful thing on a well water report, and most homeowners never request it. Without it you know how much iron you have but not which kind, and the treatment differs completely between the two. Penn State Extension's [guidance on iron and manganese in private water systems](https://extension.psu.edu/iron-and-manganese-in-private-water-systems) sets out how the forms differ and which treatments match which concentration band.

One field check costs nothing. Draw a glass of cold water and set it on a white surface. If it is clear at first and goes orange with a settling haze over ten to thirty minutes, you have ferrous iron. If it is tinted or has visible specks immediately, some of it is already ferric. If it stays clear for an hour and still stains fixtures, look at tannins or at iron bacteria rather than at plain dissolved iron.

## Manganese Is Not a Rounding Error

![Dark rust-coloured staining spreading across a white surface, the signature of manganese and iron in untreated water](https://images.pexels.com/photos/35028964/pexels-photo-35028964.jpeg)

Manganese gets skipped because the numbers look small. The EPA secondary standard is 0.05 mg/L, fifty micrograms per litre, which reads like a trace. It is not, for two reasons.

**It punches above its weight on the resin.** Manganese is held more tightly than calcium and is stripped less completely during regeneration, which is why the compensation factors quoted for it run higher than for iron — commonly 6 to 8 gpg per ppm against 4 for ferrous iron. Residual manganese left on the bed after brining accumulates in the same way iron does.

**Its visible signature is different from iron's.** Iron stains orange to reddish-brown. Manganese stains black to dark brown, and it favours places where water sits: the back of a toilet cistern, the inside of a dishwasher, the bottom of a kettle. A house with black specks in the ice and brown-black smudges in the toilet tank usually has manganese, whatever the iron number says.

Manganese also sits on the boundary between an aesthetic and a health parameter. [EPA's secondary drinking water standards](https://www.epa.gov/sdwa/secondary-drinking-water-standards-guidance-nuisance-chemicals) treat the 0.05 mg/L figure as a nuisance-level guideline for staining and taste, while separate health advisory values exist at higher concentrations. That is a reason to measure it rather than assume, particularly on a well serving small children.

## Where Iron Stops Being a Sizing Adjustment

Past a certain point, compensating the hardness setting is the wrong answer and the iron needs removing before it reaches the resin. The bands below are the ones extension services and equipment guidance converge on:

| Condition | What it means for the softener |
|---|---|
| Dissolved iron under about 0.3 ppm | Below the staining threshold. Compensate and move on |
| 0.3 to 2 ppm dissolved, pH above 6.7 | A softener can carry it. Compensate the setting, regenerate on the shorter side, use a resin cleaner periodically |
| 2 to 5 ppm dissolved | Upper limit of sensible practice. A softener will work but an iron filter ahead of it will pay for itself in resin life |
| Above 5 ppm dissolved | Iron filtration first, softener second. This is outside what ion exchange should be asked to do |
| Any significant ferric iron | Filtration first, regardless of concentration. Oxidised iron does not exchange; it just fouls |
| Iron bacteria present | Neither. Disinfect first, then treat. A softener installed into this will become a culture vessel |
| pH below about 6.7 with iron | Correct the pH first, because low pH changes both the iron chemistry and the corrosion picture |

Penn State Extension's [water softening guidance](https://extension.psu.edu/water-softening) describes broadly this envelope for ion exchange on private systems. The geology that puts the iron and the hardness there in the first place is covered in [why well water is often hard](/blog/why-is-well-water-hard/). The last two rows are the ones that get ignored most often, and the last one connects to a separate and expensive problem — acidic water that is softened without being neutralised can corrode plumbing faster, which is worked through in [reading pH and hardness together](/blog/interpreting-ph-and-hardness-together/).

## What a Fouled Resin Bed Actually Looks Like

![Old iron pipe and valve heavily coated with corrosion product, the same deposit that accumulates on softener resin](https://images.pexels.com/photos/35016079/pexels-photo-35016079.jpeg)

If you open the top of a softener that has been running on untested iron water for a couple of years, the resin is the colour of the problem. Healthy cation resin is amber to honey-coloured, translucent, and the beads pour like coarse sand. Iron-fouled resin is rust-brown to near-black, the beads clump rather than pour, and the bed has lost its uniform appearance.

The symptoms arrive in a recognisable order, and recognising them early is the difference between a resin cleaner fixing it and a rebed:

1. **Capacity slips quietly.** Regenerations still happen on schedule but hardness starts appearing near the end of each cycle. Easy to blame on salt.
2. **Breakthrough moves earlier.** The window of soft water shortens month by month rather than staying constant.
3. **Rusty water after regeneration.** The brine cycle dislodges some accumulated iron and sends it into the house. This is often the first thing the household actually notices.
4. **Pressure drop across the unit.** Fouling plus channelling restricts flow.
5. **Capacity does not recover after a manual regeneration.** At this stage, an iron-specific resin cleaner may recover part of it. Often it will not.

The maintenance answer for a softener that legitimately carries some iron is a resin cleaner used on a regular schedule — not once the water goes bad. Dosed into the brine well every few weeks, it keeps iron from setting. Used as a rescue after two years of neglect, it mostly disappoints.

## Ordering the Iron Test and Applying the Result

Ask the laboratory for these five, drawn from the same sample: **total hardness, dissolved (filtered) iron, total (unfiltered) iron, manganese, and pH with alkalinity**. Tannins are worth adding if your water carries any yellow tint. Request hardness reported as mg/L as CaCO₃ and convert it yourself using [the gpg, ppm and mg/L conversions](/blog/water-hardness-units-gpg-ppm/), because equipment manuals and lab reports do not reliably use the same unit.

Then apply the numbers in this order:

1. **Decide whether iron needs its own stage** using the threshold table above. Do this before any sizing arithmetic, because the answer changes what the softener sees.
2. **If an iron filter goes in front**, size the softener on hardness plus a small residual iron allowance, not the raw figure. The filter is doing the heavy work.
3. **If the softener is carrying the iron**, calculate compensated hardness with the formula, using the high end of your seasonal hardness range.
4. **Program the valve with the compensated figure**, plus a small reserve. Do not enter raw hardness and assume the reserve will cover the iron; it will not, and the two allowances are for different things.
5. **Write the numbers and the date on a label inside the softener cabinet.** The next person to service it — possibly you, five years from now — will otherwise have no idea what the setting was based on.

The one-sentence version: iron is capacity you are paying for twice, once when it fills exchange sites and again when it shortens the life of the bed. Measuring it costs about the price of one bag of salt. Not measuring it has an established habit of costing a resin replacement.
