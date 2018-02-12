EQUIPMENT = EQUIPMENT.concat([
{
    id: 'light_sling',
    categories: [
        'thrown-rocks-basic',
    ],
    traits: {
        light: true,
        ammo: 'stones',
    },
    more_traits: {
        thrown: true, // This is "thrown" even though it uses ammo, as you get to add strength to damage
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'war_sling',
    ],
    aliases: {
    },
},
{
    id: 'war_sling',
    categories: [
        'thrown-rocks-martial',
    ],
    traits: {
        ammo: 'stones',
    },
    more_traits: {
        thrown: true, // This is "thrown" even though it uses ammo, as you get to add strength to damage
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
    id: 'dart',
    categories: [
        'thrown-sharp-martial',
        'druid-allowed-martial',
    ],
    traits: {
        is_ammo: true,
        thrown: true,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'spear_thrower',
    ],
    aliases: {
        'Fletched Dart': '',
    },
},
{
    id: 'boomerang',
    categories: [
        'thrown-rocks-exotic',
    ],
    traits: {
        thrown: true,
    },
    more_traits: {
        poor_melee: true,
        strange: true,
    },
    damages: {
        bludgeoning: true,
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Bladed Boomerang': '', // Slashing
        'Chakram': 'China', // Slashing
    },
},
{
    id: 'kunai',
    categories: [
        'thrown-sharp-martial',
    ],
    traits: {
        thrown: true,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'kpinga',
    ],
    aliases: {
        'Shuriken': '',
    },
    variant: 'dagger',
},

//------------------------------
// Special Thrown
{
    id: 'bola',
    categories: [
        'chains--exotic',
        'thrown-rocks-martial',
    ],
    traits: {
        trip: true,
    },
    more_traits: {
        thrown: true,
        // Rope can be attached
    },
    damages: {
    },
    upgrades: [
    ],
    aliases: {
        'Manriki-Gusari': 'Japan',
        'Bola': 'Spanish',
        'Lasso': '',
    },
},
{
    id: 'net',
    categories: [
        'thrown-rocks-martial',
    ],
    traits: {
        entangling: true,
    },
    more_traits: {
        thrown: true,
    },
    damages: {
    },
    upgrades: [
    ],
    aliases: {
    },
},
{
    id: 'spear_thrower',
    categories: [
        'thrown-sharp-exotic',
    ],
    traits: {
        ammo: 'javelin, dart',
    },
    more_traits: {
        thrown: true,
        // mighty?: true,
        // powerful?: true,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Atlatl': 'North American',
        'Kestros': 'Greek',
        'Spear Sling': '',
        'Amentum': 'Greek',
    },
},
{
    id: 'light_shotput',
    categories: [
        'thrown-rocks-martial',
    ],
    traits: {
        powerful: true,
        light: true,
    },
    more_traits: {
        thrown: true,
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'shotput',
    ],
    aliases: {
        'Light Shotput': 'Orc',
    },
},
{
    id: 'shotput',
    categories: [
        'thrown-rocks-exotic',
    ],
    traits: {
        powerful: true,
        heavy: true,
    },
    more_traits: {
        thrown: true,
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Heavy Shotput': 'Orc',
    },
},

//------------------------------
// Special (Alchemical)
/*
{
    id: 'caltrop',
    categories: [
    ],
    aliases: {
        'Makibishi': 'Japan',
    },
},

*/
]);
