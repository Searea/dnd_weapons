const CATEGORIES = [
{
    id: 'stones',
    subcategories: [
        {
            subtitle: 'Hammers',
            subid: 'hammer',
        },
        {
            subtitle: 'Effect',
            subid: 'effect',
        },
        {
            subtitle: 'Shotput',
            subid: 'shotput',
        },
        {
            subtitle: 'Stone-Ammo',
            subid: 'stone_ammo',
        },
        {
            subtitle: 'Grenade',
            subid: 'grenade',
        },
        {
            subtitle: 'Slings',
            subid: 'sling',
        },
    ],
},
{
    id: 'sharp',
    subcategories: [
        {
            subtitle: 'Daggers',
            subid: 'dagger',
        },
        {
            subtitle: 'Javelin',
            subid: 'javelin',
        },
        {
            subtitle: 'Axes',
            subid: 'axes',
        },
    ],
},
{
    id: 'shuriken',
    subcategories: [
        {
            subtitle: '',
            subid: 'shuriken',
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
    ],
},
{
    id: 'crossbows',
    subcategories: [
        {
            subtitle: 'crossbows',
            subid: 'crossbows',
        },
        {
            subtitle: 'bolts',
            subid: 'bolt_ammo',
        },
        {
            subtitle: 'bolts',
            subid: 'dart_ammo',
        },
        {
            subtitle: 'bolts',
            subid: 'dart_ammo',
        },
    ],
},
];

const CATEGORY_BY_SUBCATEGORY = (_.chain(CATEGORIES)
    .map((category_info, category) => {
        return _.map(category_info.subcategories, (subcategory_info) => {
            return {
                sub: subcategory_info.subid,
                cat: category_info.id,
            };
        });
    })
    .flatten()
    .keyBy('sub')
    .mapValues((data, key) => data.cat)
    .value()
);
console.log(CATEGORY_BY_SUBCATEGORY)




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
