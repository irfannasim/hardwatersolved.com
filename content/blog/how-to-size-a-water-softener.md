---
title: "How to Calculate the Right Water Softener Size"
seoTitle: "How to Size a Water Softener: 6 Steps, Fully Worked Math"
seoDescription: "How to size a water softener: hardness × measured gallons = daily grains. Then set cycle length, reserve, salt dose and peak flow, all worked longhand."
excerpt: "Most sizing charts multiply people by 75 gallons a day, multiply by hardness, then match the result to the number on the box. Both inputs push the answer too big. Measured indoor use averages 58.6 gallons per person, and the number on the box is capacity at maximum salt. This guide works the full calculation longhand, from hardness to resin volume to peak flow, so you can check every figure yourself, and includes a worksheet to fill in with your own numbers."
date: "2026-09-26"
author: "Irfan Nasim"
category: "Sizing and Buying"
featuredImage: "https://images.pexels.com/photos/6962993/pexels-photo-6962993.jpeg"
ogImageAlt: "Person writing calculations in a notebook beside a desk calculator and laptop"
faqs:
  - question: "What size water softener do I need for a family of 4?"
    answer: "It depends on your hardness and measured water use more than on headcount. At 15 gpg and a measured 230 gallons a day, a family of four removes about 3,450 grains a day. One cubic foot of resin at a 6 lb salt dose (about 22,930 grains on one manufacturer's table) lasts about 6.6 days, or about 5.6 with a day of reserve. That is a unit sold as a 32,000-grain softener. The common 75-gallon chart method would point the same family to 48,000 grains."
  - question: "How many gallons of water does a person use per day for softener sizing?"
    answer: "Use your own meter or bills if you can. The Water Research Foundation's 2016 end-use study measured an average of 58.6 gallons per person per day indoors, down from 69.3 in 1999, and about 36.7 in homes with high-efficiency fixtures. Many sizing charts still use 75 gallons, which oversizes most modern households. Size on indoor use only if outdoor taps bypass the softener."
  - question: "How do I calculate grains per day for a water softener?"
    answer: "Multiply hardness in grains per gallon by gallons used per day. If your report gives mg/L or ppm, divide by 17.1 to get gpg first. If there is dissolved iron, add your manual's allowance, typically 3 to 4 gpg for each ppm of iron. For example, 15 gpg × 230 gallons a day = 3,450 grains a day."
  - question: "How often should a correctly sized water softener regenerate?"
    answer: "Aim for about every 3 to 7 days on clean water and about every 3 days on water with iron. Much shorter than that and you waste water on backwash and rinse. Much longer and the bed sits idle, and a day override may force a regeneration before the capacity is used. Penn State Extension's worked example lands at 6 to 7 days."
  - question: "Is it better to oversize or undersize a water softener?"
    answer: "Slightly oversize the resin and then program an efficient salt dose. An undersized bed regenerates too often and can run out between regenerations on heavy days. A modestly larger bed set to a low salt dose is efficient and still cycles within a week. Buying a much larger bed and running it at its maximum rated capacity is the worst option, because it wastes salt and leaves the resin idle."
  - question: "Do I need to size a water softener for flow rate as well as capacity?"
    answer: "Yes. Capacity decides how long the softener lasts between regenerations. Flow rate decides whether it can keep up when several fixtures run at once. Check the spec sheet's service flow at a stated pressure drop against your household's realistic peak demand. Two showers, a washing machine and a kitchen tap together can approach 9 gpm."
---

**How to size a water softener:** multiply your hardness in grains per gallon by the gallons your household actually uses each day. That gives the grains the softener must remove daily. Multiply that by the number of days you want between regenerations, plus a day of reserve, and divide by the resin's capacity at an efficient salt dose. The result is the resin volume you need. Finally, check that volume against your peak flow.

Every step is shown below with the arithmetic written out, so you can check it rather than take a chart's word for it. Two inputs differ from most sizing charts, and both matter. We use **measured** water use rather than the industry's 75 gallons per person, and **resin capacity at the salt dose you will run** rather than the number printed on the box.

## How to Size a Water Softener: The Six Steps at a Glance

![Six-step water softener sizing calculation worked for a four-person household at 15 gpg, ending at one cubic foot of resin and a flow check](/diagrams/water-softener-sizing-calculation-chain-worked-example.svg "Each step feeds the next. Change an input and redo the chain from that step down.")

1. **Hardness**, in gpg, plus an allowance for iron.
2. **Daily water use**, measured, indoors only.
3. **Daily load** = hardness × gallons.
4. **Required capacity** = daily load × (days between regenerations + 1 day of reserve).
5. **Resin volume** = required capacity ÷ capacity per cubic foot at your chosen salt dose.
6. **Peak flow check** against the unit's rated service flow.

The worked example runs through all six for one household. Then there is a worksheet for your own numbers.

## Step 1: Get the Hardness Figure Right

Use a lab report or a drop-titration kit, not a strip. The whole calculation scales with this number. A strip that reads 10 gpg on 15 gpg water undersizes the softener by a third.

- **Convert units if needed.** mg/L and ppm as CaCO₃ ÷ 17.1 = gpg. 256 mg/L is 15 gpg.
- **Add iron if you are on a well.** Softener manuals add 3 to 4 gpg of hardness for each ppm of dissolved iron. At 1 ppm of iron and a multiplier of 4, 15 gpg becomes 19 gpg. The multipliers and three worked well examples are in [how iron changes water softener sizing](/blog/how-iron-changes-water-softener-sizing/).
- **Add neutralizer hardness if you have one.** A calcite neutralizer ahead of the softener adds hardness. Measure after the neutralizer, not at the well.
- **Use the high reading if your supply varies.** Wells and blended city supplies change with the season. Size on the harder season.

**Worked example:** a city supply, lab report 256 mg/L as CaCO₃ → **15 gpg**, no iron.

## Step 2: Measure Your Water Use Instead of Assuming 75 Gallons

![Hand testing the water running from a chrome bathtub mixer tap, one of the daily indoor uses a softener has to treat](https://images.pexels.com/photos/8926132/pexels-photo-8926132.jpeg)

This is the step where standard sizing goes wrong. The 75-gallons-per-person figure is still used in dealer charts, and even in Penn State Extension's [water softening guide](https://extension.psu.edu/water-softening), whose worked example uses 75 gallons for a family of four. Measured use is lower, and it has been falling:

| Source | Indoor gallons per person per day |
|---|---|
| Sizing-chart default | 75 |
| Residential End Uses of Water, 1999 | 69.3 |
| Residential End Uses of Water, 2016 | **58.6** |
| Homes with high-efficiency fixtures (same study) | 36.7 |

The 2016 figures come from the Water Research Foundation's [Residential End Uses of Water, Version 2](https://www.circleofblue.org/wp-content/uploads/2016/04/WRF_REU2016.pdf) executive report. It metered actual households and found indoor use per person had fallen 15.4 percent since 1999.

![Bar chart of water softener sizing daily grain load for four people at 15 gpg under 75, 69.3, 58.6 and 36.7 gallons per person per day](/diagrams/water-softener-sizing-gallons-per-person-assumption-comparison.svg "The gallons-per-person assumption alone can move the answer by half.")

**How to get your own number, best first:**

1. **Read the water meter.** Note the reading at the same time on two days a week apart, with no irrigation or pool filling in between. Divide by 7.
2. **Use winter water bills.** Winter bills contain little outdoor use. Many utilities bill in hundred cubic feet (CCF), and 1 CCF = 748 gallons. Divide the billed gallons by the days in the billing period.
3. **On a private well with no meter,** use 58.6 gallons per person as a starting point. Use less if the house has low-flow fixtures and a front-loading washer, and more if there are teenagers who take long showers.

**Size on indoor use only** if outside taps bypass the softener, which they normally should.

**Worked example:** four people. The meter shows 1,610 gallons over 7 days with no irrigation → **230 gallons a day**, about 57.5 per person.

## Step 3: Daily Load

**Daily load (grains/day) = hardness (gpg) × gallons per day**

**Worked example:** 15 × 230 = **3,450 grains a day**.

For comparison, the chart method gives 4 × 75 × 15 = 4,500 grains a day, about 30 percent more before any other rounding.

## Step 4: Choose the Cycle Length and Reserve

The softener has to carry the daily load from one regeneration to the next, plus a margin for heavy days.

- **Days between regenerations.** On clean water, aim for 3 to 7 days. On iron water, aim for about 3. Much shorter cycles waste backwash and rinse water. Much longer ones leave the bed standing in still water.
- **Reserve.** Metered valves hold back capacity so a heavy evening does not run the bed dry before the overnight regeneration. One day's use is the usual rule, and many valves estimate it automatically from recent history. [How much reserve capacity a softener needs](/blog/water-softener-reserve-capacity/) covers when to set more or less.

**Required capacity = daily load × (target days + 1)**

**Worked example:** target 5 days → 3,450 × 6 = **20,700 grains**.

## Step 5: Convert to Resin Volume at a Salt Dose You Will Actually Use

This is where the number on the box misleads. A softener's capacity depends on how much salt it uses per regeneration. The [Hellenbrand residential softener manual](https://www.hellenbrand.com/wp-content/uploads/2015/10/Manual-Owners-PM6-800198.pdf) publishes its full table per cubic foot of resin:

| Salt setting | Salt per cu ft | Capacity per cu ft | Grains per lb of salt |
|---|---|---|---|
| Efficient | 3.3 lb | 13,952 | 4,228 |
| **Low (factory default)** | **6 lb** | **22,930** | **3,822** |
| Medium | 10 lb | 28,060 | 2,806 |
| High | 15 lb | 32,310 | 2,154 |

The grain rating on a softener, such as "32,000," is normally the high-salt figure. Sizing against it assumes you will run the least efficient setting. Size against the low or efficient row instead. The gap between the two figures is set out in [advertised vs usable softener capacity](/blog/advertised-vs-usable-softener-capacity/). Why the rating is quoted this way, and what it costs, is covered in [is a higher grain rating always better](/blog/is-a-higher-grain-rating-always-better/).

**Resin volume (cu ft) = required capacity ÷ capacity per cu ft at your dose**

**Worked example:** 20,700 ÷ 22,930 = **0.90 cu ft** → round up to **1 cu ft**.

Now check the result against the table. One cubic foot at 6 lb gives 22,930 grains ÷ 3,450 = **6.6 days**, or about **5.6 days** once the valve keeps a day in reserve. That is inside the 3-to-7-day target.

Salt use follows directly: 3,450 grains a day × 365 ÷ 3,822 grains per lb = **about 330 lb of salt a year**.

## Step 6: Check Peak Flow

Capacity is how long the softener lasts. Flow is whether it keeps up at 7 a.m. The two are separate checks, and a bed can pass one and fail the other. The detail is in [grain capacity vs peak flow rate](/blog/grain-capacity-vs-peak-flow-rate/).

1. **Estimate your realistic peak.** Add up the fixtures that really do run together. Two showers at about 2 gpm each, a washing machine at about 3 gpm and a kitchen tap at about 1.5 gpm add up to roughly 8.5 to 9 gpm.
2. **Compare it with the spec sheet's service flow** at a stated pressure drop. Hellenbrand lists **13.0 gpm** for its 1 cu ft unit at a 15 psi drop, 14.1 for 1.5 cu ft and 18.2 for 2 cu ft. What that drop means at your taps is explained in [how pressure drop affects softener sizing](/blog/water-softener-pressure-drop/).
3. **If peak demand exceeds the rated flow,** step up the resin volume or tank diameter even though capacity did not require it. Then lower the salt dose so the bigger bed still cycles within a week.

**Worked example:** peak about 9 gpm against 13.0 gpm rated. **The 1 cu ft unit passes.**

## The Full Calculation, Side by Side With the Chart Method

| | Chart method | Measured method |
|---|---|---|
| Gallons per person | 75 (assumed) | 57.5 (metered) |
| Daily load | 4 × 75 × 15 = 4,500 | 15 × 230 = 3,450 |
| Days of capacity | 7 | 5 + 1 reserve |
| Grains required | 31,500 | 20,700 |
| Matched against | Box rating (high salt) | Capacity at 6 lb/cu ft |
| Result | "32,000 is too tight, buy a 48,000" (1.5 cu ft) | 1 cu ft, run at 6 lb |
| Salt a year for this household | about 585 lb (high setting) | about 330 lb (low setting) |

The chart method is not wrong arithmetic. Each input leans toward a bigger answer, and the leans add up: more gallons, more days, then a capacity figure that assumes maximum salt. Without measuring anything, it lands one size up.

The salt figure in the chart column assumes the larger unit runs at the high setting its rating is based on. At the household's real 3,450 grains a day, that is 3,450 × 365 ÷ 2,154 grains per lb, **about 585 lb a year**, against about 330 lb at the low setting. If the larger unit is programmed to the low setting instead, its salt use drops to match. Whatever size you end up with, check the salt setting at installation.

## Your Worksheet

Fill in the right-hand column from your own tests and meter readings:

| Step | Formula | Your number |
|---|---|---|
| A. Hardness | Lab or drop kit, in gpg (mg/L ÷ 17.1) | |
| B. Iron allowance | Iron ppm × your manual's multiplier (3–4) | |
| C. Compensated hardness | A + B | |
| D. Gallons per day | Meter or winter bill ÷ days, indoor only | |
| E. Daily load | C × D | |
| F. Days between regenerations | 3–7 clean water, about 3 with iron | |
| G. Required capacity | E × (F + 1) | |
| H. Capacity per cu ft at your dose | From the manufacturer's table (about 22,930 at 6 lb on the table above) | |
| I. Resin volume | G ÷ H, round up to the next size sold | |
| J. Actual days per cycle | (I × H) ÷ E, minus 1 for reserve | |
| K. Salt a year | E × 365 ÷ (grains per lb at your dose) | |
| L. Peak flow check | Your peak gpm ≤ rated service flow? | |

If line J comes out above 7 days, choose a smaller bed or a lower dose. If it comes out under 3, choose a bigger bed. With iron, keep it near 3.

## When the Calculation Changes

- **Iron or manganese.** Use compensated hardness, keep cycles short, and do not use the high-efficiency setting if your manual limits it to clean water. Hellenbrand limits its efficient setting to water with iron under 0.5 ppm.
- **An acid neutralizer upstream.** Re-measure hardness after it, because the neutralizer adds hardness.
- **A low-yield well.** Backwash flow, not capacity, may decide the tank size. See [sizing a softener for a low-yield well](/blog/sizing-a-softener-for-a-low-yield-well/).
- **Outdoor taps on the softened side.** Add irrigation gallons to line D, or better, re-plumb them to bypass.
- **A growing household.** Choose resin for the next few years, then program a low dose now and a higher one later, rather than buying a bed that will sit idle for years. If the house has already grown, [resizing a softener after adding a bathroom](/blog/resizing-a-softener-after-adding-a-bathroom/) reruns the check.
- **Water already soft enough.** If the calculation gives a tiny load, question whether you need a whole-house softener at all. [Do you need a whole-house water softener](/blog/do-you-need-a-whole-house-water-softener/) sets out where that line falls.

## What Correct Sizing Cannot Do

- **It cannot make a softener treat contaminants it does not remove.** Sizing is about hardness. Bacteria, nitrate, arsenic and most other health concerns need different equipment.
- **It cannot fix a wrong valve setting.** Program the valve with the compensated hardness from line C, not the raw figure.
- **It cannot replace a follow-up test.** After a month, test the outlet the morning after a regeneration and the evening before the next. Log gallons per cycle. Real use always differs a little from the estimate, and the valve settings are there to correct for it.

## Related Sizing Guides

- [What grain capacity means](/blog/what-does-grain-capacity-mean/): what the number on the box measures, and at what salt dose.
- [Signs a water softener is undersized](/blog/signs-a-water-softener-is-undersized/): the symptoms that point to too little resin rather than a fault.
- [Can a water softener be too large?](/blog/can-a-water-softener-be-too-large/): what goes wrong with an oversized bed, and how to program around it.
- [Point-of-entry vs point-of-use softening](/blog/point-of-entry-vs-point-of-use-water-softening/): whether you need a whole-house unit at all, or just one at a fixture.
- [How a whole-house water softener works](/blog/how-does-a-whole-house-water-softener-work/): the ion exchange and regeneration behind every figure above.
