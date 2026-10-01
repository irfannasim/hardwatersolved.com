---
title: "Why a Water Softener Keeps Losing Its Settings"
seoTitle: "Water Softener Loses Settings? The Proven 7-Step Fix"
seoDescription: "Water softener loses settings after every outage? Its clock backup is dead. Identify the part by valve brand, replace it, then run a 7-step post-outage check."
excerpt: "The power blinked for ten minutes last night and the softener is flashing 12:00 again. On most modern control valves the hardness, capacity and salt settings are stored permanently; what gets lost is the clock, and the clock is kept alive through an outage by a small backup part most owners never know exists. When that part dies, every flicker resets the time, and a softener that regenerates at the wrong hour quietly sends hard water to the house when everyone is showering."
date: "2026-09-24"
updatedDate: "2026-09-25"
author: "Irfan Nasim"
category: "Softener Troubleshooting"
featuredImage: "https://images.pexels.com/photos/38171184/pexels-photo-38171184.jpeg"
ogImageAlt: "Close-up of a home circuit breaker panel with orange toggle switches, the power supply whose brief interruptions reset a softener clock once its backup has died"
faqs:
  - question: "Why does my water softener keep losing its settings?"
    answer: "Usually it is only losing the time of day, not the programming. Most electronic valves store hardness, capacity and salt settings in permanent memory and use a small backup, a coin cell battery on Clack WS1 valves or a battery-free reserve on Fleck SXT and Autotrol Logix controls, to keep the clock running during an outage. When that backup fails, even a short power blip resets the clock. If the hardness and capacity values themselves are being wiped, that points to a control board fault or an accidental reset, not the backup."
  - question: "Do water softeners have a battery?"
    answer: "Some do. Clack's WS1 manual states the control has a non-rechargeable, replaceable 3 volt lithium coin cell, type 2032, that keeps time for up to 8 hours without power. Pentair's Fleck 5600SXT manual describes integral power backup that keeps time for at least 8 hours, and Autotrol's Logix 740/760 manual describes battery-free time retention for a minimum of 8 hours. GE says its softeners keep settings and time for 24 hours. Older mechanical timers have no backup at all."
  - question: "What should I check on my water softener after a power outage?"
    answer: "Check the time of day including AM or PM, the regeneration time, the hardness setting, the capacity or salt setting, and whether the valve is in service or stopped partway through a regeneration. Then check days since last regeneration or volume remaining, and test a cold tap the following day. A Fleck SXT resumes an interrupted regeneration when power returns and queues any regeneration it missed, so a cycle may run a day later than usual."
  - question: "How long does a water softener keep time without power?"
    answer: "It depends on the control. Clack WS1, Fleck 5600SXT and Autotrol Logix 740/760 manuals each specify about 8 hours as the design figure, and GE states 24 hours for its softeners. On a Clack valve, the manual says that if an outage shorter than 8 hours leaves the time flashing, the battery should be replaced."
  - question: "Can a power outage damage a water softener?"
    answer: "An outage on its own rarely damages anything, but it can leave the valve in a regeneration position. Fleck's manual notes that a valve which loses power during regeneration stays where it is until power returns, which can mean water running to the drain. Surges when power is restored are a separate risk to the control board and power adapter, which is why a surge protector or small UPS is worth considering where outages are frequent."
---

When a **water softener loses settings** after every power cut, it is almost always losing only the time of day. Most modern control valves store hardness, capacity and salt settings permanently; a small backup part keeps the clock running for roughly 8 to 24 hours. Once that part fails, every blip resets the clock and regeneration drifts to the wrong hour.

Sometimes the fix is a few-dollar coin cell; sometimes the backup is built into the controller. The hard part is that most owner's manuals barely mention the backup exists, so people reprogram the unit after every storm without knowing there is a part to replace.

## Settings or Clock: What Your Softener Actually Forgets

Before looking for a failed part, work out which of two very different problems you have.

**Only the time is wrong.** The display flashes, shows 12:00, or shows a time that is behind by roughly the length of the outage. Hardness, capacity and salt settings are unchanged. This is the backup problem, and it is the common one.

**The programming itself has changed.** The hardness has gone back to a default number, the capacity is different, the regeneration time is 2:00 AM when you had set something else. That is not a backup failure on most current valves, because the manufacturers store those values in memory that does not need power at all:

- Pentair's [Fleck 5600SXT service manual](https://www.pentair.com/content/dam/extranet/web/nam/fleck/manuals/42684-fleck-5600sxt-downflow-manual.pdf) says system configuration settings are "stored in a non-volatile memory and are stored indefinitely with or without line power".
- The Autotrol Logix 740/760 manual says all programmed parameters are held in static memory "and will not be lost in the event of a power failure", separately from the time and day.
- Clack's WS1 manual says that once the battery is depleted, "the only item that needs to be reset is the time of day; other values are permanently stored in the nonvolatile memory."

So if your hardness setting keeps disappearing, skip ahead to the section on real memory loss. If it is the clock, keep reading.

## Water Softener Loses Settings? Find the Backup by Valve Family

This is the table the manuals do not give you in one place. It lists what each common control uses to keep time, how long it is designed to last, and what you actually replace when it fails.

| Control valve | Backup type (per manufacturer) | Design hold time | What you replace |
|---|---|---|---|
| Clack WS1 / WS1.25 | Non-rechargeable 3 V lithium coin cell, type 2032 | Up to 8 hours | The coin cell (CR2032), behind the front cover |
| Fleck 5600SXT | "Integral power backup", not described as a battery | At least 8 hours | Not listed as a separate part; the SXT timer/powerhead is the serviceable unit (downflow manual lists 62096-01 to -04 metered and 62097-01/-02 time clock powerheads) |
| Autotrol Logix 740 / 760 | "Battery-free" time retention in dynamic memory | Minimum 8 hours "depending on the installation" | The controller (parts list gives 1242146 for the 740 and 1242163 for the 760, 60 Hz; confirm with a dealer, as the same list also prints 1242146 against an overlay) |
| GE retail softeners | Not specified | 24 hours for settings and time | Contact GE; no separate part listed |
| Mechanical clock timers | None | Zero; the clock motor stops when power stops | Nothing to replace; reset the clock after every outage |

The GE figure comes from GE Appliances' own [power outage memory](https://products.geappliances.com/appliance/gea-support-search-content?contentId=21025) note, which says the control keeps settings and time for 24 hours and that all other settings survive beyond that. The other three rows come from the service manuals cited in this article.

**What the table tells you in practice:**

- On a **Clack** valve the fix is a coin cell costing a few dollars, and Clack's own [WS1 operation manual](https://www.clackcorp.com/wp-content/uploads/2025/10/V3115_WS1_1.25.pdf) gives the test: "If a power outage lasts less than 8 hours and the time of day flashes on and off, the non-rechargeable battery should be replaced."
- On a **Fleck SXT** or **Autotrol Logix**, the backup is built into the electronics. A reserve that no longer carries the clock through short outages is a controller or timer replacement, which is a bigger decision. Many owners with infrequent outages simply live with resetting the clock.
- On a **mechanical timer**, there is nothing wrong. Fleck's troubleshooting table lists "Power failure" as a reason a conditioner fails to regenerate, with the correction "Reset time of day". That is the whole fix.

**Softeners sold under a dealer or store brand** often use one of these valves under a different label. The valve maker's name is usually moulded into the valve body or printed on the circuit board behind the cover, and that tells you which row applies.

## How to Tell a Dead Backup From a Long Outage

A flashing clock does not prove the backup failed. Two things muddy it.

**Fleck flashes after any outage.** The SXT manual says the time of day flashes whenever there has been a power failure, and you press any button to stop it. So on a Fleck, check whether the *time is correct*, not whether it is flashing. Correct time, flashing: the backup worked. Wrong time: it did not.

**Outages longer than the design figure are expected to reset the clock.** If the power was off for ten hours, an 8-hour reserve was never going to hold.

**A simple test you can run yourself.** Note the time on the display, unplug the power adapter for 15 minutes, then plug it back in.

| Result after 15 minutes unplugged | Meaning |
|---|---|
| Clock correct (may be flashing) | Backup working. Your resets came from long outages |
| Clock reset to 12:00 or a default | Backup dead or missing. Replace it (Clack) or plan for a controller (Fleck SXT, Autotrol) |
| Clock stopped at the moment you unplugged | Mechanical timer or no backup fitted |
| Programming values also changed | Not the backup. See the memory section below |

Do this with the valve in service, never during a regeneration. Fleck's manual is explicit that if power fails during regeneration, the valve stays in its current position until power is restored, which can leave water running to the drain.

## Replacing the Coin Cell on a Clack Valve

Clack's manual shows the battery seated on the control behind the front cover, with the instruction: "When replacing the battery, align positives and push down to fully seat." The specified cell is a 3 volt lithium coin cell, type 2032, which is sold as CR2032 almost everywhere batteries are.

1. **Note the current time and settings** by photographing each display screen. They are stored permanently, but a record costs nothing.
2. **Remove the front cover** of the control.
3. **Find the coin cell** in its holder and note which way the positive face points.
4. **Slide out the old cell** and push the new one down until it is fully seated, positive facing the same way.
5. **Refit the cover**, set the time of day, and repeat the 15-minute unplug test to confirm it now holds.

**Keep the old and new cells away from children.** Clack's service manual carries a specific ingestion warning: a swallowed coin battery can cause internal chemical burns in as little as two hours. Dispose of the old one straight away.

## When the Settings Really Are Being Lost

If hardness, capacity or regeneration time are changing, look at these causes, roughly in order of likelihood.

**Someone reset it.** A Fleck SXT has a soft reset, holding Extra Cycle and Down for 25 seconds, which the manual says "resets all parameters to the system default values". Holding Extra Cycle while powering up performs a master reset. Children, a cleaner leaning on the keypad, or a well-meaning visitor can trigger either.

**The supply voltage is low or unstable.** Clack's manual describes a regeneration test that appears when voltage at the control falls below about 14 V, and a low-voltage display below about 12 V. A failing plug-in adapter can cause erratic behaviour that looks like forgotten settings.

**The control board memory has failed.** Fleck's error code table lists control board memory failure as error 3; the recovery is a master reset, reprogramming and a manual regeneration, with a call to technical support if the error comes back. If you see a code, decode it with [the water softener error code table](/blog/water-softener-error-code-or-blank-display/) before buying anything.

**You are looking at a different screen.** Some controls alternate between time, days remaining and gallons remaining. A number that looks like a changed hardness setting may be a capacity countdown.

## Why a Wrong Clock Causes Hard Water at the Worst Time

A softener that has lost its clock still regenerates. It just does it at the wrong hour, and that matters more than it sounds.

Clack's manual states the reason directly: a system is set to regenerate "when a household is asleep" because "if there is a demand for water when the system is regenerating, untreated water will be used." A single-tank softener cannot soften while it is backwashing and brining.

**How that plays out after an outage.** The power drops at 3:00 in the afternoon and the backup is dead. The clock restarts at 12:00. From then on it believes 3:00 PM is midnight, so the 2:00 AM regeneration now runs around 5:00 in the afternoon. That is dinner, dishes and showers, all on hard water, for up to two hours, every time it regenerates. Nothing on the display looks wrong unless you notice the time.

![Timeline showing how a water softener that loses its clock settings in a 3 PM outage shifts its 2 AM regeneration to about 5 PM](/diagrams/water-softener-clock-reset-regeneration-time-shift.svg "A reset clock moves the 2 AM regeneration to 5 PM, into peak water use")

**The AM/PM trap.** Many controls toggle AM and PM as the hour passes 12. A clock set to 7:00 when it is 7:00 PM puts every regeneration twelve hours out: a 2:00 AM regeneration runs at 2:00 PM, in the middle of the day, when someone at home may be running water.

**The quieter cost.** Hard water sent to the water heater during a daytime regeneration stays there. Nobody sees scale form, and the softener gets blamed months later for "not working". If you want to confirm when your unit regenerates, [why a water softener will not regenerate](/blog/water-softener-will-not-regenerate/) walks through reading the regeneration schedule and history.

**A missed regeneration shifts too.** Fleck's SXT will not start a regeneration without line power. If an outage makes it miss one, it queues it for the next time the clock reaches the regeneration time, "typically... one day after it was originally scheduled." The manual suggests setting enough reserve capacity to cover that delay where outages are common.

## The 7-Step Post-Outage Checklist

Run this after any outage long enough that the lights went off, even if the display looks normal.

1. **Time of day, including AM/PM.** Compare against your phone. This is the one item every control can lose.
2. **Regeneration time.** Confirm it is still set to a low-use hour, usually the small hours of the morning.
3. **Hardness setting.** It should match your last test in grains per gallon. If it has reverted, see the memory section above. If you have never tested, [how to test water hardness at home](/blog/how-to-test-water-hardness-at-home/) covers the methods.
4. **Capacity or salt setting.** Compare with your photograph or the installer's sticker inside the cover.
5. **Cycle position.** The display should show normal service, not a regeneration step. Fleck resumes an interrupted regeneration from the point where power failed; Clack's troubleshooting table says it finishes the remaining regeneration time when power returns. If the valve is sitting in a regeneration step with water running to drain and not advancing, bypass it and see [why a softener is stuck in regeneration](/blog/water-softener-stuck-in-regeneration/).
6. **Days since regeneration or volume remaining.** Fleck stores the remaining volume when power fails but does not count water used during the outage. Autotrol's manual says its controller "will not track water usage" during a power failure. If the outage was long and water was used (from a well with a generator, for example), start a manual regeneration so the bed is not running on an optimistic count.
7. **Test a cold tap the next day.** A reading at or near zero confirms everything above worked.

If you want to do the manual regeneration properly and use it as a check at the same time, [how to manually regenerate a water softener](/blog/how-to-manually-regenerate-a-water-softener/) covers what to watch at each stage.

## Keeping It From Happening Again

**Use an uninterrupted outlet.** Both the Fleck and Clack installation sections tell installers to be certain the outlet is uninterrupted. A softener plugged into a switched outlet, or sharing a circuit with something that trips often, gets far more outages than the house does.

**Consider a surge protector or small UPS where outages are frequent.** A softener control draws very little power, so a small unit can carry it through the short blips that cause most clock resets. This is a convenience, not a requirement, and it does not replace a dead internal backup.

**Put the settings somewhere you can find them.** A photo of each settings screen on your phone, or a label inside the cover, turns a confusing reset into a five-minute job.

**Check the clock at each daylight saving change.** Clack's manual lists daylight saving changes alongside outages as the times the clock needs setting. It is a convenient twice-yearly reminder to glance at everything else too.

## What This Fix Will Not Solve

- **Hard water with the clock correct.** A softener with accurate time and settings that still delivers hard water has a regeneration, brine or resin fault, not a memory problem.
- **A blank display.** No display at all is a power chain or board problem, covered in the error code guide linked above.
- **A controller that resets while powered.** A control that reboots or forgets settings with the power on has a failing board or adapter. A new coin cell will not help.

A water softener that loses settings after every outage is nearly always a clock without a working backup. Identify the valve, replace the coin cell if it has one, decide whether a Fleck or Autotrol controller is worth replacing for your outage frequency, and run the seven-step check after every storm. That last habit is what keeps the regeneration where it belongs: in the middle of the night, when nobody is using water.
