const CATEGORIES = [
{
    id: 'axes',
    subcategories: [
        {
            subtitle: 'Axes',
            subid: 'axes',
        },
        {
            subtitle: 'Picks',
            subid: 'picks',
        },
    ],
},
{
    id: 'hammers',
    subcategories: [
        {
            subtitle: 'Clubs',
            subid: 'clubs',
        },
        {
            subtitle: '',
            subid: '',
        },
    ],
},
{
    id: 'close',
    subcategories: [
        {
            subtitle: '',
            subid: '',
        },
        {
            subtitle: 'Limb',
            subid: 'limb',
        },
        {
            subtitle: 'Fans',
            subid: 'fans',
        },
    ],
},
{
    id: 'chains',
    subcategories: [
        {
            subtitle: '',
            subid: '',
        },
        {
            subtitle: 'Flails',
            subid: 'flails',
        },
        {
            subtitle: 'Whip',
            subid: 'whips',
            isolated: true,
        },
    ],
},
{
    id: 'blades',
    subcategories: [
        {
            subtitle: '',
            subid: '',
        },
    ],
},
{
    id: 'sickles',
    subcategories: [
        {
            subtitle: '',
            subid: '',
        },
    ],
},
{
    id: 'polearms',
    subcategories: [
        {
            subtitle: '',
            subid: '',
        },
        {
            subtitle: 'Spear',
            subid: 'spears',
            isolated: true,
        },
        {
            subtitle: 'Staves',
            subid: 'staves',
            isolated: true,
        },
    ],
},
{
    id: 'bows',
    subcategories: [
        {
            subtitle: '',
            subid: 'bows',
        },
        {
            subtitle: 'Blowguns',
            subid: 'blowguns',
        },
        {
            subtitle: 'crossbows',
            subid: 'crossbows',
            isolated: true,
        },
    ],
},
{
    id: 'thrown',
    subcategories: [
        {
            subtitle: 'Rocks',
            subid: 'rocks',
            isolated: true,
        },
        {
            subtitle: 'Sharp',
            subid: 'sharp',
            isolated: true,
        },
    ],
},


//-----------------------------------------------
// Special
{
    id: 'natural',
    subcategories: [
        {
            subtitle: '',
            subid: '',
        },
    ],
},
//----------------------------------------
// Duplicates
{
    id: 'druid',
    secondary: true,
    subcategories: [
        {
            subtitle: 'starter',
            subid: 'starter',
        },
        {
            subtitle: 'Allowed',
            subid: 'allowed',
        },
    ],
},
{
    id: 'monk',
    secondary: true,
    subcategories: [
        {
            subtitle: 'starter',
            subid: 'starter',
        },
        {
            subtitle: 'Allowed',
            subid: 'allowed',
        },
    ],
},
//-----------------------------------------------
// Defense
{
    id: 'shields',
    subcategories: [
        {
            subtitle: '',
            subid: '',
        },
    ],
},








];



_main_weapons = [
    // 1d4
    'dagger',

    // Note: Great Club is the only non-exotic great weapon...
    // Note: quarterstaff is the only non-exotic double weapon...

    // 1d6           // 1d8, 1d0  // 2d4 << 1d12, 2d6, brutal 1d12
    'shortsword',    'longsword', 'greatsword',
    'light_pick',    'heavy_pick', 'greatpick',
    'handaxe',       'heavy_axe', 'greataxe',
    'light_hammer',  'heavy_hammer', 'greathammer',
    'sickle',        'scimitar', 'great_scimitar',
    'shortspear',    'spear', 'greatspear',
    'light_flail',   'heavy_flail', 'greatflail',

                     'club', 'greatclub',
    'steel_fan',     'war_fan',
                     'quarterstaff',
];
main_weapons = _main_weapons.reduce((map, obj) => {
    map[obj] = true;
    return map;
}, {});
