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
},
{
    id: 'truncheon',
    categories: [
        'hammers-clubs-exotic',
        'polearms-staves-martial',
        'monk-allowed-martial',
    ],
    traits: {
        subdual: true,
    },
    more_traits: {
        twin: true,
    },
    damages: {
        subdual: true,
        bludgeoning: true,
    },
    upgrades: [
        'jitte',
    ],
    aliases: {
        'baton': '',
        'blackjack': '',
        'Tonfa': 'Japan',
        'Tekkan': 'Japan',
    },
},
{
    id: 'greatclub',
    categories: [
        'hammers-clubs-martial',
    ],
    traits: {
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
},
{
    id: 'greathammer',
    categories: [
        'hammers--exotic',
    ],
    traits: {
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
},
]);
