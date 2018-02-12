EQUIPMENT = EQUIPMENT.concat([
{
    id: 'whip',
    categories: [
        'chains-whips-martial',
    ],
    traits: {
        trip: true,
        disarm: true,
        reach: "0-15'",
        finesse: true,
    },
    more_traits: {
        unthreatening: true,
        '1H': true,
    },
    damages: {
        bludgeoning: true,
        subdual: true,
    },
    upgrades: [
        'long_whip',
        'rope_dart',
    ],
    aliases: {
        "Cat'o Nine Tails": '',
    },
},
{
    id: 'rope_dart',
    categories: [
        'chains-whips-exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        trip: true,
        distracting: true,
        reach: "0-15'",
        finesse: true,
        '2H': true,
    },
    more_traits: {
        unthreatening: true,
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Kyoketsu Shoge': 'Japan',
        'Nine-Section Whip': 'Japan',
        'Ribbon Dagger': '',
        'Whip Dagger': '',
        'Chain whip': '',
    },
},
{
    id: 'war_whip',
    categories: [
        'chains-whips-martial',
    ],
    traits: {
        '2H': true,
        reach: "0-10'",
        finesse: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
        'urumi',
    ],
    aliases: {
        'Heavy Whip': '',
        'War Whip': '',
        'Chain Flogger': '',
    },
},
{
    id: 'urumi',
    categories: [
        'chains-whips-exotic',
    ],
    traits: {
        ap: 'shield',
        reach: "0-10'",
        finesse: true,
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Urumi': 'Indian',
    },
},
{
    id: 'long_whip',
    categories: [
        'chains-whips-exotic',
    ],
    traits: {
        trip: true,
        disarm: true,
        reach: "5-20'",
        finesse: true,
    },
    more_traits: {
        unthreatening: true,
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
    },
},
{
    id: 'braid_whip',
    categories: [
        'chains-whips-exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        reach: "0-10'",
        finesse: true,
        limb: 'hair',
    },
    more_traits: {
        unthreatening: true,
        strange: true,
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Braid Whip': '',
        'Braid Knife': 'Halfling',
    },
},
{
    id: 'grappling_whip',
    categories: [
        'chains-whips-exotic',
    ],
    traits: {
        ability: true,
        skilled_climb: 2,
    },
    more_traits: {
        strange: true,
    },
    damages: {
    },
    upgrades: [
    ],
    aliases: {
    },
},
{
    id: 'grappling_hook',
    categories: [
        'chains-whips-martial',
    ],
    traits: {
        climb: 1,
        // skilled_climb also grants to Hit bonuses e.g. when thrown one
        // (For all such items)
        skilled_climb: 2,
        weak_dmg: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Flying Talon': 'Japan',
        'Flying Claw': 'Japan',
        'Kaginawa': 'Japan',
        'Lynxpaw': '',
    },
},


]);
