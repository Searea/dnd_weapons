EQUIPMENT = EQUIPMENT.concat([
{
    id: 'light_flail',
    categories: [
        'chains-flails-martial',
    ],
    traits: {
        'ap_shield': 2,
    },
    more_traits: {
        light: true,
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'heavy_flail',
    ],
    aliases: {
        'Chigiriki': 'Japan',
    },
    stats: {
        // Score: 2 (1 ap, 1 light)
        damage: '1d6',
    }
},
{
    id: 'heavy_flail',
    categories: [
        'chains-flails-martial',
    ],
    traits: {
        'ap_shield': 4,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'greatflail',
    ],
    aliases: {
    },
    stats: {
        //Score: 3 (2 ap, 1 damage)
        damage: '1d8',
    }
},
{
    id: 'greatflail',
    categories: [
        'chains-flails-exotic',
    ],
    traits: {
        'ap_shield': 6,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
    },
    stats: {
        // Score: 4 (-1 2h, 3 ap, 2 damage)
        damage: '1d10',
    }
},
{
    id: 'three_section_staff',
    categories: [
        'chains-flails-exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        'ap_shield': 2,
        'reach': "0'-10'",
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
    },
    stats: {
        // Score: 3.5 (1 ap, 1.5 reach, 1 damage)
        damage: '1d8',
    }
},
//-----------------------------
// Chains
{
    id: 'light_chain',
    categories: [
        'chains--martial',
    ],
    traits: {
        grapple: 2,
        light: true,
        masterwork: [
            'fire'
        ],
    },
    more_traits: {
        finesse: true
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'war_chain',
    ],
    aliases: {
        'Kusari-Fundo': 'Japan',
        'Bladed Scarf': 'Hidden', // Slashing
        'Fire Poi': 'Masterwork',
        'Battle Poi': 'Masterwork',
    },
    stats: {
        // Score 2 (0.5 grapple, 1 light, 0.5 on-crit)
        damage: '1d6',
        on_crit: 'grapple'
    }
},
{
    id: 'war_chain',
    categories: [
        'chains--exotic',
    ],
    traits: {
        trip: true,
        reach: "0'-10'",
        '2h': true,
        disarm: 2,
        masterwork: [
            'fire'
        ],
    },
    more_traits: {
        // 2H but no strength bonus for 2 hands
        // Add a trait for that
        unwieldy: true,
        finesse: true,
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Spiked Chain': '',
        'Chain Hammer': '',
        'Surujin': 'Japan',
        'Meteor Hammer': 'China',
        'Kusarigama': 'Japan',
        "Dragon's Fist": '',
        'Fire Poi': 'Masterwork',
        'Battle Poi': 'Masterwork',
    },
    stats: {
        // Score: 2.75 (-1.5 2h, 2 reach, 0.25 finesse, 1 damage, 0.5 trip, 0.5 disarm)
        damage: '2d4'
    }
},
{
    id: 'ball_chain',
    categories: [
        'chains--exotic',
    ],
    traits: {
        flying: true,
        limb: true,
    },
    more_traits: {
        strange: true,
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Ball & Chain': '',
    },
    // TODO:: stats
},
{
    id: 'nunchaku',
    categories: [
        'chains--martial',
        'monk-allowed-martial',
    ],
    traits: {
        light: true,
        disarm: 4,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'heavy_nunchaku',
    ],
    aliases: {
        'Nunchaku': 'Japan',
    },
    stats: {
        // Score: 2.5 (1 light, 1 disarm, 0.5 on-crit)
        damage: '1d6',
        on_crit: 'disarm',
    }
},
{
    id: 'heavy_nunchaku',
    categories: [
        'chains--exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        disarm: 4,
        '2h': true,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Heavy Nunchaku': 'Japan',
        'Flindbar': 'Gnoll',
    },
    stats: {
        // Score: 3.5 (2 damage, 1 disarm, 0.5 on-crit, -1 2h, 1 crit range)
        damage: '1d10',
        on_crit: 'disarm',
        crit: 19,
    }
},
]);
