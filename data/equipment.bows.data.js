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
    upgrades: [
        'longbow',
        'composite_bow',
    ],
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
    upgrades: [
        'greatbow',
        'composite_bow',
    ],
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
    upgrades: [
    ],
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
    upgrades: [
    ],
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
    upgrades: [
    ],
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
    upgrades: [
    ],
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
        skilled_climb: 2,
    },
    more_traits: {
    },
    damages: {
    },
    upgrades: [
    ],
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
    upgrades: [
        'heavy_crossbow',
        'repeater_crossbow',
        'composite_crossbow',
    ],
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
    upgrades: [
        'great_crossbow',
        'repeater_crossbow',
        'composite_crossbow',
    ],
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
    upgrades: [
        'compound_crossbow',
    ],
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
    upgrades: [
    ],
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
    upgrades: [
    ],
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
    upgrades: [
    ],
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
    upgrades: [
    ],
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
    upgrades: [
    ],
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
    upgrades: [
        'heavy_prodd',
    ],
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
    upgrades: [
    ],
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
    upgrades: [
        'wrist_launcher',
    ],
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
    upgrades: [
    ],
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
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
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
    upgrades: [
    ],
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
    upgrades: [
    ],
    aliases: {
    },
},

]);
