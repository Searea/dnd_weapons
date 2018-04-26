EQUIPMENT = EQUIPMENT.concat([
{
    id: 'club',
    categories: [
        'hammers-clubs-basic',
        'monk-allowed-basic',
        'druid-allowed-basic',
        'polearms-staves-martial',
    ],
    visible_names: {
        'polearms': 'shortstaff',
    },
    traits: {
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'sap',
        'greatclub',
    ],
    aliases: {
        'Cudgel': '',
        'Bludgeon': '',
        'Cosh': 'Naval',
        'Bat': '',
        'Eku': 'Japan',
        'Paddle': 'Improvised',
        'Oar': 'Improvised',
        'Mere': 'Māori',
        'Patu': 'Māori',
        'Shillelagh': 'Irish',
        'Waster': 'Europe',
        'Bokken': 'Japan',
        'Kanabō': 'Japan',
        'Wahaika': 'Māori',

        // Staffs:
        'Hanbo': 'Japan',
        'Cane': 'Improvised',
        'Dang Bong': 'China',
    },
    stats: {
        // Score: 0.5 (0.5 on-crit)
        damage: '1d6',
        on_crit: 'knockback'
    }
},
{
    id: 'sap',
    categories: [
        'hammers-clubs-martial',
    ],
    traits: {
        subdual: true,
    },
    more_traits: {
    },
    damages: {
        subdual: true,
        bludgeoning: true,
    },
    upgrades: [
        'truncheon',
    ],
    aliases: {
    },
    stats: {
        // Score: 2 (1 damage, 1 crit-range)
        damage: '1d8',
        crit: 19,
    }
},
{
    id: 'greatclub',
    categories: [
        'hammers-clubs-martial',
    ],
    traits: {
        '2h': true,
        knockback: 4,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Tigerskull Club': '',
        'Giant Mallet': '',
        'Ōtsuchi': 'Japan',
        'Terbutje': 'Aztec',
        'Suburito': 'Japan',
    },
    stats: {
        // Score: 2.5 (2 damage, -1 2h, 0.5 on-crit, 1 maneuver)
        damage: '1d10',
        on_crit: 'knockback',
    }
},

//--------------------------------------------------------
// Mauls

{
    id: 'light_hammer',
    categories: [
        'thrown-rocks-martial',
        'hammers--martial',
    ],
    traits: {
        light: true,
        thrown: true,
        ap: 2,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'heavy_hammer',
        'heavy_pick',
    ],
    aliases: {
        'Light Mace': '',
        'thrown Hammer': '',
    },
    stats: {
        // Score: 2.5 (1 light, 0.5 thrown, 1 ap)
        damage: '1d6',
    }
},
{
    id: 'heavy_hammer',
    categories: [
        'hammers--martial',
    ],
    traits: {
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
        ap: 2,
    },
    upgrades: [
        'greathammer',
    ],
    aliases: {
        'Heavy Mace': '',
        'Battle Hammer': '',
        'War Hammer': '',
        'War Mace': '',
        'Flanged Mace': '',
        'Shishpar': 'Indian',
    },
    stats: {
        // Score: 2.5 (1 damage, 0.5 on-crit, 1 ap)
        damage: '1d8',
        on_crit: 'knockback',
    }
},
{
    id: 'greathammer',
    categories: [
        'hammers--exotic',
    ],
    traits: {
        '2h': true,
        ap: 3,
        knockback: 2,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Sledgehammer': '',
        'Earth Breaker': '',
        'Great Hammer': 'Goliath',
        'Great Maul': '',
        'Great Mace': '',
    }, 
    stats: {
        // Score: 4.5 (3 damage, 1.5 ap, 1 knockback, -1 2h)
        damage: '1d12',
        on_crit: 'knockback',
    }
},
{
    id: 'truncheon',
    categories: [
        'hammers-clubs-exotic',
        'polearms-staves-martial',
        'monk-allowed-exotic',
    ],
    traits: {
        subdual: true,
        disarm_blades: 2,
        light: true
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Jitte': 'Japan',
        'Hachiwari': 'Japan',
        'Kabutowari': 'Japan',
        'Ekrund Rod': 'Dwarven',
        'Truncheon': '',
        'baton': '',
        'blackjack': '',
        'Tonfa': 'Japan',
        'Tekkan': 'Japan',
    },
    stats: {
        // Score: 2.5 (1 damage, 0.5 disarm, 1 light, 0.5 on-crit)
        damage: '2d4',
        on_crit: 'disarm',
    },
},
{
    id: 'ram',
    categories: [
        'hammers-clubs-exotic',
    ],
    traits: {
        '2h': true,
        bullrush: 4,
        massive: 16,
        charge: true,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Skull Ram': 'Orc',
        'Portable Ram': '',
    },
    stats: {
        // Score: 3 (2 damage, -1 2h, 1 on-crit, 1 bullrush, -0.05 massive, 0.5 charge)
        damage: '1d10',
        on_crit: 'knockback/splash', // can have both the damage and the knockback
    }
},
]);
