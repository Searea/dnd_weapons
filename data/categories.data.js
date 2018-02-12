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



only_show = false;
_hidden_items = [
    // 1d4
    'dagger',

    // crit range: 19-20, 18-20
    // crit Mult:  x3, x4
    // Damage Dice ++
    // Specific Ability (AP X, AP Shield X)
    // Crit Ability (Crit Maneuver X)
        // Maybe also a bonus on the crit?
        // If Maneuver isn't opposed, allow nat 20?
    // General Ability (Maneuver X)


    // Note: Great Club & Greatsword are the only non-exotic ones...

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
                     /*'shortstaff'*/, 'quarterstaff',
];
hidden_items = _hidden_items.reduce((map, obj) => {
    map[obj] = true;
    return map;
}, {});

hidden_items = false
// only_show = true
