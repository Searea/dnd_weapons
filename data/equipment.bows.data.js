EQUIPMENT = EQUIPMENT.concat([
{
    id: 'shortbow',
    categories: [
        'bows-bows-martial',
        'druid-allowed-martial',
    ],
    traits: {
    },
    more_traits: {
        ammo: 'arrows',
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Hunting Bow': '',
        'Hankyu': 'Japan',
    },
},
{
    id: 'longbow',
    categories: [
        'bows-bows-martial',
    ],
    traits: {
    },
    more_traits: {
        ammo: 'arrows',
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Daikyu': 'Japan',
    },
},
{
    id: 'composite_bow',
    name: 'composite (short/long)',
    categories: [
        'bows-bows-martial',
    ],
    traits: {
        'Mighty': 5,
    },
    more_traits: {
        ammo: 'arrows',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'compound_bow',
    name: 'compound (short/long)',
    categories: [
        'bows-bows-exotic',
    ],
    traits: {
        'Mighty': 5,
        adjustable: true
    },
    more_traits: {
        ammo: 'arrows',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},

{
    id: 'greatbow',
    categories: [
        'bows-bows-exotic',
    ],
    traits: {
    },
    more_traits: {
        ammo: 'arrows',
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Hornbow': 'Orc',
    },
},
{
    id: 'footbow',
    categories: [
        'bows-bows-exotic',
    ],
    traits: {
        flight: true,
    },
    more_traits: {
        ammo: 'arrows',
        strange: true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Footbow': 'Raptoran',
    },
},
{
    id: 'grapple_shot',
    categories: [
        'bows-bows-exotic',
        'bows-crossbows-martial',
    ],
    traits: {
        ability: true,
        skilled_rope: true,
    },
    more_traits: {
    },
    damages: {
    },
    aliases: {
    },
},

//---------------------------------------------------
// Crossbows
{
    id: 'light_crossbow',
    categories: [
        'bows-crossbows-basic',
    ],
    traits: {
    },
    more_traits: {
        ammo: 'bolts',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'heavy_crossbow',
    categories: [
        'bows-crossbows-basic',
    ],
    traits: {
        ap: 2,
    },
    more_traits: {
        ammo: 'bolts',
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Arbalest': '',
    },
},
{
    id: 'composite_crossbow',
    name: 'composite (l/h)',
    categories: [
        'bows-crossbows-martial',
    ],
    traits: {
        'Mighty': 5,
    },
    more_traits: {
        ammo: 'bolts',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'repeater_crossbow',
    name: 'repeater (l/h)',
    categories: [
        'bows-crossbows-martial',
    ],
    traits: {
        fast_reload: true,
    },
    more_traits: {
        ammo: 'bolts',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'compound_crossbow',
    name: 'compound (l/h)',
    categories: [
        'bows-crossbows-exotic',
    ],
    traits: {
        'Mighty': 5,
        adjustable: true
    },
    more_traits: {
        ammo: 'bolts',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'hand_crossbow',
    categories: [
        'bows-crossbows-martial',
    ],
    traits: {
    },
    more_traits: {
        ammo: 'bolts',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'double_crossbow',
    categories: [
        'bows-crossbows-exotic',
    ],
    traits: {
    },
    more_traits: {
        ammo: 'bolts',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'great_crossbow',
    categories: [
        'bows-crossbows-exotic',
    ],
    traits: {
        ap: 4,
    },
    more_traits: {
        ammo: 'bolts',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},

//------------------------------------------------
// Special
{
    id: 'prodd',
    categories: [
        'bows-crossbows-martial',
    ],
    traits: {
        ammo: 'stones',
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
    },
},
{
    id: 'heavy_prodd',
    categories: [
        'bows-crossbows-exotic',
    ],
    traits: {
        ammo: 'stones, grenades',
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'Flask Thruster': '',
    },
},
{
    id: 'dart_thruster',
    categories: [
        'bows-crossbows-martial',
    ],
    traits: {
        ammo: 'darts',
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'wrist_launcher',
    categories: [
        'bows-crossbows-exotic',
        'close-limb-martial',
    ],
    traits: {
        ammo: 'darts',
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Spring Dart Glove': '',
    },
},
//---------------------------------------
// Blowguns
{
    id: 'blowgun',
    categories: [
        'bows-blowguns-martial',
    ],
    traits: {
        ammo: 'needles',
    },
    more_traits: {
        sniping: true,
        con_dmg: true, // Use constitution (akak lung capacity?)
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Fukiya': 'Japan',
    },
},
{
    id: 'greater_blowgun',
    categories: [
        'bows-blowguns-martial',
    ],
    traits: {
        ammo: 'darts',
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'sand_tube',
    categories: [
        'bows-blowguns-exotic',
    ],
    traits: {
        ammo: 'sand',
        dazzling: true,
        poison: true,
    },
    more_traits: {
        // Fort 12 or be Dazzled
        // 15 foot Cone
        // Full Round reload, or stnd with rapid reload (which doesn't need to choose a weapon group)
        // only 1 use of poison needed
    },
    damages: {
        poison: true,
    },
    aliases: {
    },
},

]);
