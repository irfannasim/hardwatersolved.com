---
title: "Softener Display Blank or Showing an Error Code"
seoTitle: "Water Softener Error Code Guide: 6 Brands, 1 Simple Table"
seoDescription: "Every water softener error code falls into a few fault families. Match your Fleck, Clack, Autotrol, GE, Whirlpool or Culligan code, then run the right checks."
excerpt: "Every softener brand invents its own codes, and most owner's manuals explain them in a single line that tells you almost nothing. Underneath, though, the faults are the same handful on every valve — a motor that cannot move, a sensor that cannot see, a memory that has been scrambled, a meter that has stopped counting. This guide maps codes from six manufacturers onto those shared families using the manufacturers' own manuals, says plainly where a code could not be verified, and covers the display that shows nothing at all."
date: "2026-09-23"
author: "Irfan Nasim"
category: "Softener Troubleshooting"
featuredImage: "https://images.pexels.com/photos/10699352/pexels-photo-10699352.jpeg"
ogImageAlt: "Technician repairing an electronic circuit board with hand tools on a workbench, the kind of control board that generates a water softener error code"
faqs:
  - question: "What does an error code on a water softener mean?"
    answer: "It means the control has detected that something in the valve or electronics did not behave as expected, usually that the motor could not move the valve to the next position in time, the position sensor gave an unexpected reading, the stored settings were corrupted, or the meter or regeneration schedule is not working. The code numbers differ by manufacturer, but the underlying faults fall into those few families, which is what makes them diagnosable."
  - question: "How do I reset a water softener error code?"
    answer: "Most controls clear a code by removing power briefly or by a button sequence, and the code returns if the fault is still there. Clack WS1 valves reset by unplugging the power jack at the board or holding NEXT and REGEN for three seconds. Culligan Gold Series controls reset by holding Program for ten seconds. Autotrol Logix Err 1 clears by pressing UP. GE and Whirlpool cabinet units clear by unplugging, correcting the fault, and plugging back in, and the code reappears within minutes if the fault remains."
  - question: "Why is my water softener display blank?"
    answer: "Usually because no power is reaching the control: a tripped breaker, a GFCI that has tripped, a switched outlet that has been turned off, or a failed plug-in transformer. If the outlet is live and the transformer is delivering power, the circuit board itself may have failed. A blank display is not an error code, and the softener will not regenerate while it is dark, although it will keep supplying soft water until its remaining capacity is used up."
  - question: "What does Err 3 mean on a water softener?"
    answer: "It depends on the brand. On an Autotrol Logix 740/760 it means the control does not know the position of the camshaft and is rotating it to find home, which is normal for up to about two minutes after power-up. On a Culligan Gold Series control it means incorrect cycle position. On a Whirlpool WHES40 it is grouped with codes pointing to the position switch, its wiring, a high-torque valve or the motor. On a Fleck 5600SXT, code 3 is a control board memory error."
  - question: "Is it safe to keep using a water softener with an error code?"
    answer: "It is safe to use the water, but you may not be getting softened water, and if the valve stopped mid-cycle it may be sending water to the drain. Check whether the drain is running. If it is, or if you are unsure, put the softener into bypass until the fault is fixed. Some controls also lock their buttons while a code is showing; GE's GXSH40V manual says every button except PROGRAM is inoperable while an error code is displayed."
  - question: "Can I fix a water softener error code myself?"
    answer: "Often, yes. Codes caused by a power interruption, a loose connector, a dirty optical sensor or wrong programming are within reach of a careful homeowner using the manufacturer's recovery steps. Codes that return immediately after a reset, or that point to the motor, drive gears, piston or circuit board, usually need a replacement part, and swapping the piston or board is where a technician starts to earn their fee."
---

A **water softener error code** is manufacturer-specific, but the faults behind it are not. Nearly every code on every brand falls into one of four families: the motor could not move the valve in time, the position sensor gave an unexpected reading, the stored settings were lost or corrupted, or the meter or regeneration schedule has stopped working. Identify the family, then run the checks for that family.

A blank display is a separate case — it is not a code, it is the absence of power or a working board — and it has its own section below.

## The Four Fault Families Behind Every Water Softener Error Code

Control valves from different manufacturers look nothing alike, but electronically they all do the same job. A motor moves a piston, camshaft or rotor. A sensor — a microswitch, an optical reader or a position switch — tells the board where that part has got to. The board stores the programming and counts water through a meter. When any link in that chain misbehaves, the board raises a code.

| Fault family | What the control detected | What usually causes it |
|---|---|---|
| **Motor or drive stall** | The motor ran but the valve did not reach the next position in the time allowed, or the motor did not start or stop | Seized or failed motor, stripped gear, piston binding on iron or debris, loose motor wiring |
| **Position sensor** | The valve reported a position the control did not expect, or no position at all | Dirty optical sensor or label, faulty cam switch, loose sensor cable |
| **Memory or configuration** | Stored settings are corrupt or do not match the hardware | Power disturbance, board fault, wrong valve or control type selected |
| **Meter or regeneration overdue** | No water counted, or no regeneration for too long | Stalled meter turbine, meter cable disconnected, bypass left on, programming |

A fifth, smaller group covers **power-supply mismatches** (the wrong frequency or a failing transformer) and **brine alerts** on controls with a brine sensor. Both appear in the table below where manufacturers document them.

## The Cross-Manufacturer Error Code Table

![Close-up of a green printed circuit board with rows of electronic components, the kind of controller board whose diagnostics generate a softener error code](https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg)

Every entry below comes from a manufacturer's own manual for the named model, not from forum posts or parts-seller summaries. Codes vary between models from the same manufacturer, so treat each row as valid for the model listed, and confirm against your own manual.

| Brand and model | Code | Manufacturer's meaning | Fault family |
|---|---|---|---|
| **Fleck 5600SXT** | 0 | Cam sense error: the valve drive took longer than 6 minutes to advance to the next regeneration position | Motor or drive stall |
| | 1 | Cycle step error: the control experienced an unexpected cycle input | Position sensor |
| | 2 | Regen failure: no regeneration for more than 99 days (7 days in day-of-week mode) | Meter or regeneration overdue |
| | 3 | Memory error: control board memory failure | Memory or configuration |
| **Clack WS1 / WS1.25** | 101, 1001 or E1 | Unable to recognise start of regeneration | Position sensor |
| | 102, 1002 or E2 | Unexpected stall | Motor or drive stall |
| | 103, 1003 or E3 | Motor ran too long, timed out trying to reach next cycle position | Motor or drive stall |
| | 104 or 1004 | Motor ran too long, timed out trying to reach home position | Motor or drive stall |
| | 106 / 1006, 107 / 1007 | Accessory (MAV/NHWB) valve could not find its park position | Motor or drive stall, accessory valve |
| **Autotrol Logix 740/760** | Err 1 | Power connected and control not sure of the state of operation | Memory or configuration |
| | Err 2 | Controller power does not match 50 or 60 Hz | Power supply |
| | Err 3 | Controller does not know the camshaft position; camshaft rotating to find home | Position sensor (or drive, if the camshaft is not turning) |
| **Culligan Gold Series (Accusoft Plus)** | ERR 1 | Motor failure to start | Motor or drive stall |
| | ERR 2 | Motor failure to stop | Motor or drive stall |
| | ERR 3 | Incorrect cycle position | Position sensor |
| | ERR 4 | Control type does not match the valve detected | Memory or configuration |
| | CHECK SALT | Aqua-Sensor detected no brine during brine rinse | Brine alert |
| **Whirlpool WHES40** | Err 1, 3, 4 (shown as E1, E3, E4) | Wiring harness or connection to position switch, switch fault, valve defect causing high torque, or motor inoperative | Motor, drive or position sensor |
| | Err 5 (E5) | Electronic control fault | Memory or configuration (board) |
| **GE GXSH40V** | "Err" (no number) | Electrical problem with the system | Any — see below |

**Sources:** Pentair's [Fleck 5600SXT service manual](https://www.pentair.com/content/dam/extranet/web/nam/fleck/manuals/42683-fleck-5600sxt-upflow-manual.pdf); Clack's WS1 and WS1.25 drawings and service manual; Pentair's [Autotrol 740/760 service manual](https://www.pentair.com/content/dam/extranet/web/nam/autotrol/manuals/3003714-autotrol-740-760-255-performa-268-manual.pdf); Culligan's [Gold Series softener owner's guide](https://www.culligan.com/wp-content/uploads/2019/07pdf/Gold_Softener_01018854.pdf); Whirlpool's WHES40 installation and operation manual; GE's GXSH40V owner's manual.

**Notice the overlap.** "Err 3" means a position problem on Autotrol and Culligan, a position-switch-or-motor group on Whirlpool, and on Fleck the digit 3 means memory. That is exactly why a code number on its own, without the brand and model, is close to meaningless — and why searching for "error 3" returns contradictory answers.

## What This Table Does Not Cover, and Why

Honesty about the gaps matters more here than completeness, because a wrong code meaning sends people to replace the wrong part.

- **GE numbered codes.** The GXSH40V owner's manual documents a single flashing "Err", with the blue indicator light flashing four times a second and an alarm every 30 seconds between 8 a.m. and 8 p.m. Numbered GE meanings circulate online, but we could not find them in GE's own documentation, so they are not listed.
- **Culligan HE series.** Current HE owner's guides show text messages rather than numbers — the home screen reads PROBLEM FOUND, and scrolling shows the specific error, such as "Pos Sensor Err". The guides do not publish the complete list; they direct owners to a Culligan dealer.
- **Other Fleck, Clack and Autotrol controls.** Fleck's 2510SXT, 5810/5812 and 9100 series, Clack's WS1.5 and WS2, and Autotrol's 742/762 and newer controls have their own tables. The families are consistent, but do not assume the numbers transfer.
- **Whirlpool models other than the WHES40 family**, and other retail brands built by contract manufacturers, may use different codes even where the cabinet looks similar.

If your code is not in the table, the family approach still works: read your manual's one-line description, decide whether it describes the motor, the sensor, the memory or the meter, and use the matching section below.

## Blank Display: Work the Power Chain First

![Residential switchboard with circuit breakers and wiring on a white wall, where a tripped breaker is a common reason for a blank water softener display](https://images.pexels.com/photos/5767595/pexels-photo-5767595.jpeg)

A dark display is not a code. It means the board is not powered or cannot drive its screen. It is also the easiest electronic fault to fix, because most of the time nothing inside the softener is wrong.

**Work outward from the wall:**

1. **The breaker or fuse.** Softeners share circuits with basement and garage equipment. Whirlpool's WHES40 troubleshooting lists blown fuses and tripped circuit breakers among the causes of a blank display.
2. **A GFCI outlet upstream** that has tripped and taken the softener outlet with it.
3. **A switched outlet.** Culligan's guides specifically tell owners to make sure the outlet is not controlled by a wall switch that has been turned off.
4. **The transformer.** Most controls run on low voltage from a plug-in transformer. A lamp working in the outlet does not prove the transformer is delivering power; if you have a meter, check its output against the rating printed on it.
5. **The cable and plug at the board.** A cable pulled half out of its socket gives exactly the same blank screen as a dead board.
6. **The board itself.** Only once everything above is confirmed. Whirlpool's table does list a defective electronic control board, but alongside the transformer and household power causes, not instead of them.

**What happens while it is dark.** Fleck's SXT manual says that during a power failure the display and motor shut down while the control keeps time for at least 48 hours. GE's GXSH40V holds its settings for up to 24 hours, shows a blank display during the outage, and will not regenerate until power returns. A blank softener keeps delivering soft water only until its remaining capacity runs out.

**After power returns**, a flashing clock is normal on most controls and simply needs the time of day set.

## Motor and Drive Stall Codes: What to Check

This family includes Fleck 0, Clack 102–104, Culligan ERR 1 and ERR 2, and Whirlpool's position-switch-or-motor group.

**Check whether the drain is running first.** A valve that stalled mid-cycle may be parked in backwash. If water is flowing to the drain, put the softener in bypass before anything else. The cost of leaving it is worked out in [why a water softener keeps draining](/blog/water-softener-constantly-draining/).

**Then work through the manufacturers' own recovery steps:**

- **Fleck:** unplug, examine the powerhead, verify the motor and drive train are in good condition and assembled properly, and check that the piston travels freely. Plug back in: the unit should cycle to the next valve position and stop.
- **Clack:** check the piston and spacer stack for foreign matter, confirm the motor is fully inserted to engage the pinion, and look for broken or disconnected motor wires, a damaged drive gear, or a drive bracket out of alignment.
- **Culligan Gold:** the control tries to start the motor three times, 70 seconds each with a 60-second rest, before it raises the code — so by the time you see ERR 1, it has already retried.

**The pattern that matters most:** a stall code that returns at the same step every time points to a mechanical fault at that position, usually a binding piston. The full isolation sequence — listening for the motor, watching the cam, checking the sensor, and knowing when to stop forcing it — is in [why a water softener is stuck in regeneration](/blog/water-softener-stuck-in-regeneration/).

## Position Sensor Codes: What to Check

![Macro view of microchips and surface components on an electronic circuit board, illustrating the sensor and controller circuitry that reports a softener valve's position](https://images.pexels.com/photos/36169774/pexels-photo-36169774.jpeg)

This family includes Fleck 1, Clack 101, Autotrol Err 3, Culligan ERR 3 and "Pos Sensor Err".

**Give it time on power-up.** Autotrol's manual says the camshaft may take one to two minutes to return home after power is applied, and that Err 3 shows until it does. An Err 3 that clears by itself within a couple of minutes of a power cut is not a fault.

**If it does not clear:**

- **Autotrol:** if the camshaft is not turning, check that the motor is connected, the wire harness is connected at both ends, the optical sensor is connected and in place, and the motor gear has engaged the cam gear. If the camshaft turns for more than five minutes, check the optical sensor and look for dirt clogging the cam slots.
- **Fleck:** verify that all cam switches are connected to the circuit board and functioning properly.
- **Clack:** a dirty or damaged drive gear label is listed among the causes. The optical reader relies on it.

**Safe to do yourself:** reseat connectors, wipe dust from an optical wheel or label with a dry cloth, and make sure the sensor sits firmly in its clip. **Not safe:** bending switch arms or cleaning optics with solvent.

## Memory and Configuration Codes: What to Check

This family includes Fleck 3, Autotrol Err 1, Culligan ERR 4 and Whirlpool Err 5.

**Autotrol Err 1** is the mildest: the manual's fix is to press the UP arrow, and the control should reset.

**Fleck 3** means a control board memory failure. The recovery is to check the cam switch connections, then enter Master Programming and verify that the valve type and system type match the unit. If the code persists, Fleck calls for a master reset and full reconfiguration before replacing the board.

**Culligan ERR 4** means the control type selected does not match the valve detected, typically after a board replacement or a setting change.

**Write down your settings before any reset.** A master reset returns the control to factory defaults. Hardness, capacity, regeneration time and day override all need re-entering, and a softener reset without them may regenerate at the wrong time or not at all — the problem covered in [why a water softener will not regenerate](/blog/water-softener-will-not-regenerate/).

## Meter, Regeneration and Brine Alerts

**Fleck 2** — no regeneration in 99 days — is the control noticing that something upstream of the drive has stopped. Fleck's recovery: run a manual regeneration to reset the code, then confirm the meter is measuring flow by running water and watching for the flow indicator on the display. If it is not, check the meter cable and the meter itself, and verify capacity, day override and meter settings in Master Programming.

**Culligan CHECK SALT** means the Aqua-Sensor saw no brine during brine rinse. The alert clears only after a successful regeneration. Before calling anyone, check for the simplest cause of no brine — a hardened crust of salt with an empty space below it, described in [how to identify and break a salt bridge](/blog/water-softener-salt-bridge/).

## Resetting a Code Properly

![Digital multimeter lying beside electrical tools and circuit breakers, the kind of basic test gear used to confirm power before resetting a softener control](https://images.pexels.com/photos/6349399/pexels-photo-6349399.jpeg)

A reset clears the display, not the fault. The test is whether the code comes back.

| Control | Reset method in the manual | How long before it returns if unfixed |
|---|---|---|
| Fleck 5600SXT | Depends on code: unplug and replug (0, 1), manual regeneration (2), master reset (3) | Next attempted step change |
| Clack WS1 | Unplug the power jack at the board and replug, or hold NEXT and REGEN for 3 seconds (SET and DOWN on TC models) | Next step change |
| Autotrol Logix 740/760 | Err 1: press UP. Err 2: disconnect and reconnect power | Immediately, if the cause remains |
| Culligan Gold | Hold Program for 10 seconds | The board re-checks and redisplays at once |
| GE GXSH40V | Unplug the transformer, correct the problem, plug back in | About 6 minutes |
| Whirlpool WHES40 | Unplug, correct the defect, plug back in | Several minutes |

**Resetting the same code over and over is not a repair.** Each stall retry heats the motor and loads the gears. If a code returns after one honest reset and the family checks above, it needs a part.

## When an Error Code Means a Service Call

![Electrician examining a residential fuse box indoors, the point at which a persistent softener error code becomes a job for a trained technician](https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg)

A water softener error code tells you where to look; it does not always mean you should be the one looking. The reasonable line:

- **Do it yourself:** power chain faults, a flashing clock, Autotrol Err 1, an Err 3 that clears after power-up, reseating connectors, cleaning optical labels, reprogramming after a memory error.
- **Consider help:** a stall code at the same step every time (piston or seal stack), a stripped gear, a board replacement, or any code on a dealer-serviced system where the manual directs you to the dealer — Culligan's HE guides do exactly that.

What to tell the technician is worth more than the code itself: brand and model, the exact code, which step the valve was on, whether the motor hums, and whether the drain is running. The judgement on when a softener job crosses into professional territory is laid out in [when to call a water softener technician](/blog/when-to-call-a-water-softener-technician/).

Any water softener error code becomes manageable once you stop reading it as a number and start reading it as a family. Motor, sensor, memory or meter — the brand changes the label, not the physics, and the checks for each family are the same on almost every valve on the market.
