---
title: "How to Set Water Hardness on a Control Valve"
seoTitle: "How to Set Hardness on a Water Softener: 5 Critical Checks"
seoDescription: "Set hardness on a water softener in grains per gallon, not ppm, add the iron allowance and check the clock. A units slip changes salt use 17-fold."
excerpt: "The hardness number on a softener's control valve decides how often it regenerates, and nothing else. Enter it in the wrong units and the valve is off by a factor of 17.1 in one direction or the other. This guide covers the conversion, the iron allowance two manufacturers publish, the clock that decides when regeneration actually runs, entry sequences for common valve families, and when to reprogram."
date: "2026-09-26"
author: "Irfan Nasim"
category: "Installation and Setup"
featuredImage: "https://images.pexels.com/photos/29226621/pexels-photo-29226621.jpeg"
ogImageAlt: "Gloved lab technician drawing a sample from a brown sample bottle for analysis on a laboratory bench"
faqs:
  - question: "What should I set my water softener hardness to?"
    answer: "Set it to your untreated water's hardness in grains per gallon, plus the allowance your manual gives for dissolved iron. If your test is in mg/L or ppm, divide by 17.1 first. For example, 342 mg/L is 20 gpg. With 1 ppm of ferrous iron and a manual that adds 5 gpg per ppm, you would enter 25."
  - question: "Is the water softener hardness setting in ppm or grains?"
    answer: "Most US residential valves take grains per gallon. The screen usually shows gr, grn or gpg next to the number. Some valves can be switched to metric units and then expect mg/L. Check the unit label on the screen before entering anything, because the two differ by a factor of 17.1."
  - question: "Does a higher hardness setting make water softer?"
    answer: "No. The setting only changes how many gallons the valve lets through before it regenerates. Water-Right's manual states that adjusting the number only affects regeneration frequency and does not change the hardness of the treated water. Setting it higher than your water just uses more salt and water."
  - question: "What happens if the hardness setting on a water softener is too low?"
    answer: "The valve thinks each gallon uses less capacity than it does, so it waits too long to regenerate. The resin runs out before regeneration and hard water gets through, usually in the last day or two of each cycle. This is one of the common causes of water that is still hard after installation."
  - question: "How much should I add to the hardness setting for iron?"
    answer: "Use the figure in your own softener's manual. Published allowances differ. A.O. Smith says to add 5 grains per gallon for every 1 ppm of ferrous iron, and Hellenbrand says to add 3 grains per ppm. Only dissolved ferrous iron counts. Oxidized iron needs a filter, not a higher setting."
  - question: "When should I change my water softener hardness setting?"
    answer: "Change it when you have a new test result, when you move into a house with an existing softener, when your city changes or blends its water source, when a well's hardness shifts by season, or when you add or remove a treatment stage ahead of the softener, such as an acid neutralizer."
---

To **set hardness on a water softener**, enter your untreated water's hardness in **grains per gallon (gpg)**, not ppm or mg/L, and add the iron allowance your manual gives. Divide a ppm or mg/L result by 17.1 to get gpg. Then check that the valve's clock and regeneration time are right, because they decide when the regeneration actually happens.

The hardness number does one job. It tells the valve how many gallons it can soften before the resin is used up. Get the units wrong and that count is off by a factor of 17.1, one way or the other.

## The Units Error That Changes Salt Use 17-Fold

![Hardness entry error for 342 mg/L water: 342 in a gpg field gives 70 gallons per cycle, 20 gpg gives 1,200, 20 in a mg/L field 20,500](/diagrams/water-softener-hardness-setting-ppm-vs-gpg-error.svg "Same water, same softener: only the units of the entry change")

Lab reports usually give hardness in **mg/L as calcium carbonate**, which for water is the same as ppm. Most US softener valves want **grains per gallon**. One grain per gallon is 17.1 mg/L, and that factor is where the damage comes from. [Water hardness units: gpg, ppm and mg/L](/blog/water-hardness-units-gpg-ppm/) explains where it comes from.

Take water that tests at 342 mg/L, which is 20 gpg. Suppose the softener has 24,000 grains of usable capacity. That is an illustrative figure; yours depends on the resin volume and salt dose.

- **Typed correctly as 20 gpg**, the valve allows 24,000 ÷ 20 = **1,200 gallons** between regenerations.
- **The lab number, 342, typed into a gpg field**, and the valve allows about **70 gallons**. It regenerates 17 times as often as it needs to. A demand-initiated valve usually runs at most one regeneration a night at its set time, so in practice it regenerates every night, using the salt and water of a full cycle each time. This is the first thing to check in [why a water softener uses too much salt](/blog/water-softener-using-too-much-salt/).
- **Grains typed into a metric field**, where the valve expects mg/L, turns 20 into about 1.2 gpg. The valve allows about **20,500 gallons**. It runs out long before it regenerates, and you get hard water for most of each cycle.

The screen almost always shows the unit next to the number: *gr*, *grn* or *gpg* for grains, or *mg/L* or *ppm* on valves set to metric units. Read that label before you touch the arrows. [A.O. Smith's owner's manual](https://www.aosmithatlowes.com/media/1670/ao-wh-soft-300_ownersmanual.pdf) prints its worked examples in both units side by side for exactly this reason.

## What the Hardness Setting Does and Does Not Change

It is tempting to set a higher number "to be safe," or to think the number sets how soft the water comes out. It does neither. [Water-Right's installation manual](https://www.water-right.com/wp-content/uploads/2023/08/Water-Right-IM-IMP-Softener-Manual.pdf) puts it plainly: adjusting the number "will only impact the frequency of regeneration and will not alter or affect the hardness of the water treated by the unit."

So the trade-offs are:

- **Set too low:** the valve waits too long, the resin runs out, and hard water gets through before the next regeneration.
- **Set too high:** the water is no softer, but the valve regenerates early. Every early regeneration costs a full salt dose and the water to rinse it.
- **Set right:** it regenerates when the bed is nearly used up, with the reserve the valve holds back for the next day's water.

The same manual also calls the number the "actual compensated hardness" of the water, meaning hardness with adjustments for other ions the resin removes. It expects an installer to set it from an on-site water analysis. The next section shows how that number is built.

## How to Set Hardness on a Water Softener: Working Out the Number

![Steps to set hardness on a water softener: convert mg/L to gpg, add the iron allowance, use hardness after a neutralizer, take the highest value](/diagrams/water-softener-compensated-hardness-setting-steps.svg "Carry one number through five checks, then enter it in grains per gallon")

### Start with a real hardness result

Use a lab report or a titration drop test of **untreated** water, taken from a tap ahead of the softener. A strip test gives you a band, not a number. That is fine for checking whether soft water is coming out, but too coarse to program from. A city's annual water quality report gives a range across the whole system. If you use it, take the top of the range.

### Convert to grains per gallon

mg/L ÷ 17.1 = gpg. Round to the nearest whole number. Most valves step in whole grains.

### Add the iron allowance

Dissolved (ferrous) iron uses up exchange capacity faster than hardness does, so manufacturers add an allowance to the hardness number. The allowance is not the same in every manual:

| Manufacturer's manual | Allowance per 1 ppm of iron | 20 gpg water with 1 ppm iron |
|---|---|---|
| A.O. Smith | add 5 gpg per ppm of ferrous iron (86 mg/L in metric units) | enter 25 |
| [Hellenbrand](https://www.hellenbrand.com/wp-content/uploads/2015/11/Manual-Owners-H125-Super-HP-109122.pdf) | add 3 grains per ppm of iron | enter 23 |

Use the figure from your own unit's manual. If the manual gives none, ask the manufacturer rather than borrowing another brand's number.

This allowance applies only to **dissolved** iron in water that comes out of the tap clear. A.O. Smith is explicit that ferrous iron is the only type a softener can treat. Ferric (already oxidized) iron will foul the resin and should be filtered out before the softener. There is also an upper limit. Water-Right's specification table lists a maximum of 1.0 ppm of iron for its units. Above what your manual allows, a bigger number does not help, and you need an iron filter. How iron affects the choice of softener in the first place is in [how iron changes water softener sizing](/blog/how-iron-changes-water-softener-sizing/).

### Use the hardness that actually reaches the softener

An acid neutralizer ahead of the softener dissolves calcite into the water. That raises the hardness the softener sees. If you have one, take the hardness sample **after the neutralizer**, not at the well. The same rule applies to any stage that changes the water before the softener.

### Use the highest value you have

Hardness is not fixed. Wells can change with the season and with pumping, and many city systems blend sources. Program the highest value you have measured. If your supply changes a lot, retest when the source changes. [Why water hardness changes](/blog/why-water-hardness-changes/) covers the causes.

## Entry Sequences for Common Valve Families

Button names differ, but most residential valves keep hardness in an installer menu, with the day override and regeneration time next to it. These are the sequences as the manufacturers publish them. Confirm them against the manual for your exact model before relying on them.

| Valve family | How to reach the hardness setting | What comes next in the same menu |
|---|---|---|
| **Water-Right Impression series** | Hold **NEXT** and **+** together for 3 seconds. The hardness screen shows grains per gallon, adjustable from 1 to 150 (factory default 20) | Day override (default 12 days), then regeneration hour and minutes |
| **Hellenbrand residential controls** | Press the two installer buttons together for 3 seconds. Hardness is in grains (factory setting 20) | Day override (factory setting 14 days), then regeneration hour and minutes |
| **Pentair whole-house softening system** (retail model) | In the installer level, **SCROLL** past unit size to "WATER HARD: 20 GRN" and set it with the arrows (range 1 to 99) | Salt level, time of day, then an optional advanced menu with regeneration time (2 a.m. default), reserve and day override |
| **Controls set up by gallons instead of hardness** | Some sellers configure the control to ask for gallons between regenerations. You then do the division yourself: usable capacity ÷ hardness, minus a reserve | Day override and regeneration time |

That last row matters for the units problem. A valve that takes gallons has no hardness field at all. The same mistake happens in your calculation instead. Dividing 24,000 grains by 342 instead of by 20 gives you 70 gallons just as surely as typing 342 into the valve.

Other families, such as Fleck and Autotrol controls, use their own button combinations and may split settings between a user menu and a master menu. Their manuals list them. Do not guess key combinations on a master menu. Some of those screens change cycle times and capacity, not just hardness.

## The Clock Decides When Regeneration Happens

The hardness setting decides **whether** tonight is a regeneration night. The clock and the regeneration time decide **when** it runs. Most valves ship set to around 2 a.m., when nobody is drawing water.

If the valve's clock is wrong, that 2 a.m. regeneration can start while someone is showering. During regeneration, most single-tank valves send untreated water to the house through an internal bypass, so you get a burst of hard water right when you are using the most of it. Three things commonly throw the clock off:

- **Power outages.** Many valves keep the time only for a limited period without power. Water-Right's display flashes the time after an extended outage so you know to reset it.
- **Daylight saving time.** Hellenbrand's manual reminds owners to reset for it. A one-hour shift is usually harmless unless your household starts early.
- **Never being set at all** after installation. The valve then counts from the moment it was plugged in.

The **day override** is the other half. It forces a regeneration after a set number of days even if the gallons have not run out. That keeps a lightly used bed from sitting too long, especially on well water. Leave it at the factory value unless you have a reason to change it.

## When to Reprogram

Reset the hardness setting when any of these happen:

- **You get a new test result** that differs from what is programmed.
- **You move into a house with an existing softener.** The setting reflects a previous owner's water test, if it reflects anything at all.
- **Your city announces a source change or blend.** A switch between groundwater and surface water can move hardness a long way.
- **Your well's hardness shifts** between wet and dry seasons. Program the high season or retest each season.
- **You add or remove a stage ahead of the softener,** such as a neutralizer or an iron filter.
- **A symptom appears.** Hard water near the end of each cycle points to a setting that is too low. Salt use well above expectation points to one that is too high or entered in the wrong units.

## Check the Entry Against the Display

Many valves show **gallons remaining** until the next regeneration on their main screen. After you save the hardness, that number is the quickest way to catch a units error before it costs anything.

Roughly, gallons remaining right after a regeneration should equal the softener's usable capacity divided by the hardness you entered, minus the reserve the valve holds back. You do not need the exact figure. You only need to know whether it is in the right range:

- **A few dozen gallons** on a whole-house unit means the number entered is far too high. That is usually a mg/L figure typed into a grains field.
- **Tens of thousands of gallons** means it is far too low. Look for a grains figure in a metric field, or a hardness that was never changed from a very low value.
- **A few hundred to a couple of thousand gallons** is typical for household softeners on moderately hard water.

Then watch it for a week. Divide the gallons the display says were used by the number of days, and compare that with your household's water use. If the valve counts far more water than the house could be using, the problem is not the hardness setting. Look for a leak, a running toilet, or outdoor lines on the softened side.
## What the Hardness Setting Cannot Fix

A correct number cannot rescue a softener that is too small for the household. It then has to regenerate so often that it runs out between cycles anyway. It cannot make a softener remove iron beyond what the manual allows, or treat oxidized iron, manganese, sediment or bacteria. It also cannot fix a unit that is not drawing brine: a perfect setting on a valve that does not regenerate still delivers hard water.

Set the number, write it on the brine tank lid with the test date, and retest in a month. If the treated water tests soft right up to the night before a regeneration, your hardness setting is correct.
