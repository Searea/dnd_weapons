EQUIPMENT = EQUIPMENT.concat([
{
    id: 'whip',
    categories: [
        'chains-whips-martial',
    ],
    traits: {
        trip: 2,
        disarm: 2,
        reach: "0'-15'",
        light: true,
    },
    more_traits: {
        finesse: true,
        provoking: true,
        unthreatening: true,
        masterwork: [
            'unprovoking'
        ],
    },
    damages: {
        bludgeoning: true,
        subdual: true,
    },
    aliases: {
        "Cat'o Nine Tails": '',
    },
    stats: {
        // Score: 3.25 (2 reach, -1 provoke, 1 maneuver, 1 light)
        damage: '1d6',
    }
},
{
    id: 'rope_dart',
    categories: [
        'chains-whips-exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        trip: 2,
        feint: 2,
        reach: "0'-15'",
        '2H': true,
    },
    more_traits: {
        finesse: true,
        unthreatening: true,
        provoking: true,
        masterwork: [
            'unprovoking'
        ],
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'Kyoketsu Shoge': 'Japan',
        'Nine-Section Whip': 'Japan',
        'Ribbon Dagger': '',
        'Whip Dagger': '',
        'Chain whip': '',
    },
    stats: {
        // Score: 3.25 (1 damage, 2 reach, -1 2h, -1 provoking, 0.5 trip, 0.5 distracting, 1 crit range, 0.25 finesse)
        damage: '1d8',
        crit: 19,
        on_crit: 'distracting', // feint or distract vs everyone in reach (allies can use too)
    }
},
{
    id: 'war_whip',
    categories: [
        'chains-whips-martial',
    ],
    traits: {
        reach: "0'-10'",
    },
    more_traits: {
        finesse: true,
        unthreatening: true,
    },
    damages: {
        slashing: true,
    },
    aliases: {
        'Heavy Whip': '',
        'War Whip': '',
        'Chain Flogger': '',
    },
    stats: {
        // Score: 2.25 (1 damage, 1.5 reach, 0.25 finesse, -0.5 unthreatening)
        damage: '1d8',
    }
},
{
    id: 'urumi',
    categories: [
        'chains-whips-exotic',
    ],
    traits: {
        reach: "0-10'",
        ap_shield: 2,
    },
    more_traits: {
        finesse: true,
        unthreatening: true,
    },
    damages: {
        slashing: true,
    },
    aliases: {
        'Urumi': 'Indian',
        'Whip Sword': 'Fantasy',
    },
    stats: {
        // Score: 4.25 (2 damage, 1.5 reach, 0.25 finesse, -0.5 unthreatening, 1 ap)
        damage: '1d10',
    }
},
{
    id: 'long_whip',
    categories: [
        'chains-whips-exotic',
    ],
    traits: {
        trip: 2,
        disarm: 2,
        reach: "10'-20'",
        pull: 2,
    },
    more_traits: {
        finesse: true,
        unthreatening: true,
        ranged: true,
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
    },
    stats: {
        // Score: 4 (1.5 maneuver, 0.25 finesse, -0.5 unthreatening, 1.5 reach, 0.75 on-crit, 0.5 drag)
        damage: '1d6',
        on_crit: 'trip/disarm/pull',
    }
},
{
    id: 'braid_whip',
    categories: [
        'chains-whips-exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        reach: "0-10'",
        limb: 'hair',
    },
    more_traits: {
        finesse: true,
        unthreatening: true,
        strange: true,
    },
    damages: {
        slashing: true,
    },
    aliases: {
        'Braid Whip': '',
        'Braid Knife': 'Halfling',
    },
    // TODO::
},
{
    id: 'grappling_whip',
    categories: [
        'chains-whips-exotic',
    ],
    traits: {
        ability: true,
        skilled_rope: 2, // TODO:: rebalance
        // Grappling Whip
        //    Gain +5 if you use the whip as a grappling hook (to Hit)
        // Brachiate: (Whip or Long Whip Only)
        //    Gain +5 to Jump checks (High or Long) if you're in a place with a ceiling your whip can reach
        //    Gain +2 while using the whip to climb
    },
    more_traits: {
        strange: true,
    },
    damages: {
    },
    aliases: {
    },
},
{
    id: 'grappling_hook',
    categories: [
        'chains-whips-martial',
    ],
    traits: {
        rope: true,
        // skilled_climb also grants to Hit bonuses e.g. when thrown one
        // (For all such items)
        skilled_rope: 2,
        weak_dmg: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    aliases: {
        'Flying Talon': 'Japan',
        'Flying Claw': 'Japan',
        'Kaginawa': 'Japan',
        'Lynxpaw': '',
    },
},
]);
