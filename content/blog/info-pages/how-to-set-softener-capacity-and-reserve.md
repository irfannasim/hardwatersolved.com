---
title: "How to Set Capacity and Reserve on a Water Softener"
seoTitle: "Set Water Softener Capacity and Reserve: 2 Proven Steps"
seoDescription: "Set water softener capacity from your salt dose, not the box rating, then set a reserve from your heaviest normal day. Worked example and valve steps."
excerpt: "Capacity and reserve are entered in the same programming session and the valve combines them into one number: how many gallons it lets you use before it regenerates. Capacity has to be the grains your resin delivers at the salt dose you chose, not the rating on the box. Reserve has to cover the water you use between the valve's nightly check and the next one. Get either wrong and the house runs out of soft water on a schedule. Here is how the two fit together and how to enter them on common valves."
date: "2026-09-26"
author: "Irfan Nasim"
category: "Installation and Setup"
featuredImage: "https://images.pexels.com/photos/5524292/pexels-photo-5524292.jpeg"
ogImageAlt: "White farmhouse kitchen sink with a brushed nickel pull-down faucet under a bright window, one of the daily draws a softener's reserve has to cover"
faqs:
  - question: "What capacity should I enter on my water softener?"
    answer: "The grains of hardness your resin removes at the salt dose you programmed, not the number on the box. Multiply the resin volume in cubic feet by the capacity per cubic foot at your dose. Standard resin gives roughly 21,000 grains per cubic foot at 6 lb of salt, 26,000 at 9 lb, 29,000 at 12 lb and 31,000 at 15 lb. A 1.5 cubic foot unit at 9 lb per cubic foot is about 39,000 grains, not 48,000."
  - question: "What should the reserve be set to on a water softener?"
    answer: "Enough gallons to cover your heaviest normal day, because a delayed valve checks only once a night. A simple starting point is the rule in Pentair's softener manual: number of people times 70 gallons, so 280 gallons for four people. Then check it against a couple of weeks of meter readings and raise it if you ever get hard water on busy days."
  - question: "Is a 25 or 30 percent reserve correct?"
    answer: "It can be, but only by coincidence. A percentage reserve scales with capacity, not with your household. Fleck's manual notes that if you change the capacity or hardness, a percentage reserve changes with it. A large softener in a small house ends up holding back far more than a day's use, and a small softener in a busy house holds back too little. A fixed number of gallons or a learning reserve is usually more accurate."
  - question: "What happens if I enter the box rating as the capacity?"
    answer: "The valve believes the resin lasts longer than it does. In a worked example with a 1.5 cubic foot softener programmed for 9 lb per cubic foot, entering 48,000 grains instead of 39,000 makes the valve count 3,200 gallons per cycle when the resin is used up at 2,600. At 300 gallons a day, about 400 gallons of hard water reach the house before it regenerates, every cycle."
  - question: "Do I need to regenerate after changing capacity or reserve?"
    answer: "It is a good idea. Some valves keep counting the current cycle on the old numbers. Pentair's whole-house softener manual says new settings do not become active until the unit completes a regeneration, and recommends a manual regeneration to activate them. After it, watch the gallons-remaining display for a day to confirm the new count."
  - question: "Can the reserve be set to zero?"
    answer: "Only on a valve that regenerates immediately when capacity runs out, such as a twin-tank system, or a single tank using a hybrid setting that regenerates after a few idle minutes at zero. On a delayed single-tank valve, a zero reserve means running out of soft water before the nightly check on most cycles."
---

To **set water softener capacity** correctly, enter the grains your resin actually removes at the salt dose you programmed, not the grain rating on the box. Then set the **reserve** to cover your heaviest normal day of water use. The valve divides capacity by hardness to get gallons, subtracts the reserve, and counts down. For a 1.5 cubic foot softener at 9 lb of salt per cubic foot on 15 gpg water, that is **39,000 grains**, **2,600 gallons**, and a reserve of about **280 gallons** for four people.

These two settings are usually taught separately, which is how the most common programming error survives. They are entered in the same session and the valve combines them into a single gallon count, so they have to be set together.

## How the Valve Uses the Two Numbers

Fleck's [5600SXT service manual](https://www.pentair.com/content/dam/extranet/web/nam/fleck/manuals/42684-fleck-5600sxt-downflow-manual.pdf) describes the calculation in one line: the control "calculates the system capacity by dividing the unit capacity... by the feed water hardness and subtracting the reserve." Every metered valve does a version of this:

1. **Capacity in grains ÷ hardness in gpg = gallons of soft water per cycle.**
2. **Gallons per cycle − reserve = gallons the house can use freely.**
3. Each night at the regeneration time, a delayed valve checks the gallons left. **Below the reserve, it regenerates tonight.** Above it, it keeps counting.

![Flow of water softener programming: resin volume times capacity per cubic foot gives the capacity entry, divided by hardness gives gallons, minus the reserve sets the nightly regeneration check](/diagrams/water-softener-capacity-reserve-programming-chain.svg "Capacity and reserve end up as one gallon count; an error in either shows up as hard water")

Capacity decides the total. Hardness converts it to gallons. Reserve decides on which night the valve acts. The hardness entry is covered in [how to set hardness on a water softener](/blog/how-to-set-hardness-on-a-water-softener/). This page covers the other two.

## Set Water Softener Capacity From the Salt Dose, Not the Box

The number on the box is a resin volume in disguise. A "48,000-grain" softener holds about 1.5 cubic feet of resin, and 48,000 is roughly what that resin removes at a heavy salt dose. Program the valve for an efficient dose and the resin delivers less per cycle. The capacity entry has to match the dose.

The design figures published in *Water Conditioning & Purification* put standard resin at about [21,000 grains per cubic foot at 6 lb of salt and 31,000 at 15 lb](https://wcponline.com/2004/03/14/learn-right-first-time-guidelines-designing-water-softeners/):

| Salt per cubic foot of resin | Capacity per cubic foot | 1.0 cu ft | 1.5 cu ft | 2.0 cu ft |
|---|---|---|---|---|
| 6 lb | ~21,000 grains | 21,000 | 31,500 | 42,000 |
| 9 lb | ~26,000 grains | 26,000 | 39,000 | 52,000 |
| 12 lb | ~29,000 grains | 29,000 | 43,500 | 58,000 |
| 15 lb | ~31,000 grains | 31,000 | 46,500 | 62,000 |

To use it:

1. **Find the resin volume** on the tank label or spec sheet.
2. **Find the salt per regeneration** in the valve settings, then divide by the resin volume. A 13.5 lb setting on 1.5 cubic feet is 9 lb per cubic foot.
3. **Read across the table** to the capacity. That is the number to enter.
4. **Prefer your manufacturer's figure if it gives one.** Clack's [WS1 manual](https://www.clackcorp.com/wp-content/uploads/2025/10/V3115_WS1_1.25.pdf) asks for "the ion exchange capacity in grains of hardness as calcium carbonate for the system based on test data" at the next step after the salt. Many system makers print their capacity at each salt setting on the spec sheet.

Why the box number is not just a small error is covered in detail in [advertised vs usable water softener capacity](/blog/advertised-vs-usable-softener-capacity/). For programming, the only rule is: **capacity at your dose**.

## The Box-Rating Error, Traced Through One Cycle

Take the worked example: 1.5 cubic feet, 13.5 lb of salt (9 lb per cubic foot), 15 gpg water, four people using 300 gallons a day, and a 280-gallon reserve.

| | Capacity entered | Gallons the valve counts | When it regenerates | What the resin actually gives |
|---|---|---|---|---|
| **Correct** | 39,000 | 2,600 | Night 8, with 200 gallons left | 2,600 gallons, soft to the end |
| **Box rating** | 48,000 | 3,200 | Night 10, with 200 gallons "left" | 2,600 gallons, then hard water |

![Chart of soft water left in a softener's resin by day: the correct capacity regenerates on night 8, while the 48,000 box rating waits until night 10 after the resin ran out on day 8.7](/diagrams/softener-capacity-entry-error-gallon-countdown.svg "The valve trusts the capacity you enter; the resin does not")

With the box rating entered, the resin runs out around day 8.7, and the house receives about **400 gallons of hard water** before the valve regenerates on night 10. That happens every cycle, on a schedule, with nothing wrong with the softener. It is one of the commonest reasons for hard water that returns shortly before each regeneration. A bigger reserve would hide it, at the cost of regenerating early every cycle. The fix is the capacity entry.

The error runs the other way too. Entering a capacity below the real one makes the valve regenerate early and waste salt, though the water stays soft.

## Setting the Reserve in the Same Session

Once capacity is right, the reserve answers one question: **how much water might the house use between tonight's check and tomorrow night's?** If that much is not left at the check, regenerate now.

Valves offer three formats:

- **Fixed gallons.** The clearest. Pentair's [whole-house softener manual](https://www.pentair.com/content/dam/extranet/web/nam/pentair/manuals/37297-whole-house-water-softener-iom.pdf) gives a starting rule: people × 70 gallons per day, "3 people X 70 gallons per day = 210 gallons (suggested reserve capacity)". Fleck allows a fixed reserve up to half the calculated capacity, and Pentair up to 70 percent.
- **Percentage (safety factor).** Fleck calls it SF. Its manual warns that because the value is a percentage, "any change to the unit capacity or feedwater hardness that changes the calculated system capacity will result in a corresponding change to the reserve volume." A 25 percent reserve on 2,600 gallons is 650 gallons, more than two days of use for the example household.
- **Variable or learning.** Pentair's variable reserve starts at 25 percent and adjusts to recorded daily use. Clack's AUTO setting estimates each weekday's reserve from "the maximum value stored for the last 3 non-trivial water usages" for that day of the week.

### Which to choose

| Situation | Reserve setting |
|---|---|
| Regular household, you know roughly how much it uses | Fixed gallons: people × 70, then check against the meter |
| Use varies a lot by weekday (weekend guests, laundry day) | Learning reserve, if the valve has one |
| Softener much larger than the household needs | Fixed gallons. A percentage holds back far too much |
| Twin tank, immediate regeneration | Only the water used during regeneration, if soft-water rinsing is used |

The detailed method, a two-week meter log that finds your heaviest normal day, is in [how much reserve capacity a softener needs](/blog/water-softener-reserve-capacity/). What matters here is the relationship. **Reserve is subtracted from the capacity you entered.** A correct reserve on a wrong capacity still fails.

## Entering the Numbers on Three Valve Families

**Clack WS1.** In OEM softener setup, Step 4S is the capacity in grains, Step 5S the pounds of salt, and Step 7S the Volume Capacity. Set Volume Capacity to **AUTO** and the valve calculates gallons and estimates the reserve itself. Enter a specific number of gallons instead and, the manual says, "reserve capacity is zero unless the value is manually set", meaning you have built the reserve into a lower number yourself.

**Fleck 5600SXT.** In master programming, set the **Unit Capacity** in grains, then **Reserve Selection**: RC for a fixed reserve in gallons, SF for a percentage, or a variable reserve. The fixed value is then entered in user programming. Hardness is entered separately, and the valve does the division. The twin-tank 9100SXT uses the same SXT controls, but its reserve shrinks to the water one regeneration uses, a trade-off the [Fleck 9100SXT review costs out against a single 5600SXT of equal capacity](/blog/fleck-9100sxt-review/).

**Pentair whole-house systems.** Capacity is not entered in grains. You choose the **unit size** (1.0, 1.5 or 2.0) and the **salt level** (Low, Medium or High), and the control sets capacity to match. The reserve is in the advanced menu: variable by default, or fixed in 10-gallon steps.

On any valve, record the old values before you start.

## Two Checks After You Enter Them

1. **Run a regeneration, or know when the new values take effect.** Pentair's manual is explicit: "If you DO NOT manually regenerate the system, the settings WILL NOT become active until the unit has completed the next scheduled regeneration."
2. **Read the gallons remaining the next morning.** It should start at capacity ÷ hardness and fall by roughly one day's use. On the example, 2,600 falling to about 2,300. If it starts at 3,200, the old capacity is still in place.

Clack valves also store daily water use for the last 63 days. That history is the fastest way to check whether the reserve covers your real heaviest day.

## When to Change Them Again

- **The salt dose changes.** Every dose change needs a new capacity entry. Pentair-style valves do this themselves. Grain-entry valves do not. Choosing the dose itself is covered in [how to set the salt dose on a water softener](/blog/how-to-set-the-salt-dose-on-a-water-softener/).
- **The water changes.** Hardness goes up, or iron appears. Iron is handled through the hardness entry, but it also shortens how far the capacity goes.
- **The household changes.** A new baby, a teenager, a lodger, a home office. Revisit the reserve.
- **The resin ages.** Older or fouled resin delivers less than the table. If hard water starts appearing near the end of cycles in a house whose use has not changed, lower the capacity entry or test the resin.

## What These Settings Cannot Fix

- **They do not add capacity.** They only tell the valve how much it has. If the resin is too small for the household, correct settings will show it as frequent regeneration.
- **They do not fix flow.** Capacity and reserve are about volume over days. Pressure drop during two showers is a sizing question.
- **They do not fix bypassed water.** Water drawn during regeneration, a leaking bypass valve or an unsoftened branch line is hard whatever the settings.
- **They cannot remove what a softener does not remove.** Correct programming delivers softened water. It does nothing for bacteria, nitrate, lead or most other contaminants.

Enter capacity at your salt dose. Set the reserve to your heaviest normal day. Then check the gallon count the next morning.
