## Ludum Dare 44

Theme: Your Life is Currency

Pitch: You're the AI of a starship in a convoy that's just been ransacked by a police force. Make your way out of range of the thieves by collecting and converting the wreckage around you - and eventually, some of your own systems - into fuel for the journey.

### Mechanics

-   Movement: Moving implied by scrolling starfield. Debris comes into view as well. Inertia keeps you moving unless you actively change direction.
-   Collecting: Come to a stop near an item to collect it. Need to stay still for X seconds to collect an item.
-   Conversion: Use any collected or operational systems as fuel or ammo.
-   ~~Combat: Fight off or run away from enemies that get too close.~~ (Cut for time.)
-   Goal: Reach a given point and send word of the attack to your home base.

### To Build

-   Ship = collection of Segments:
    -   Bridge
    -   Databanks
    -   Shields
    -   Weapons
    -   Cargo
    -   Engines
    -   Quarters
    -   Sensors
-   Debris
    -   Same Segments as above, most broken but some intact
    -   Debris placement (seed-based random?)
-   UI
    -   Segment value
    -   Segment purpose
    -   Goal direction
    -   Collision warning
