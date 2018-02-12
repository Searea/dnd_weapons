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
},
{
    id: 'three_section_staff',
    categories: [
        'chains-flails-exotic',
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
},
//-----------------------------
// Chains
{
    id: 'light_chain',
    categories: [
        'chains--martial',
    ],
    traits: {
        light: true,
        grapple: '+2, free on crit',
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
        slashing: true,
    },
    upgrades: [
        'war_chain',
    ],
    aliases: {
        'Kusari-Fundo': 'Japan',
        'Bladed Scarf': 'Hidden', // Slashing
    },
},
{
    id: 'war_chain',
    categories: [
        'chains--exotic',
    ],
    traits: {
        trip: true,
        reach: "10'",
    },
    more_traits: {
        // 2H but no strength bonus for 2 hands
        // Add a trait for that
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Spiked Chain': '',
    },
},
{
    id: 'fire_chain',
    categories: [
        'chains--exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        reach: "10'",
        fire: true,
    },
    more_traits: {
        strange: true,
    },
    damages: {
        fire: true,
        // Extinguished as a full round action (in sand or water)
        // Acts as a lit torch
        // Can be lit as a standard action
    },
    upgrades: [
    ],
    aliases: {
        'Fire Poi': '',
        'Battle Poi': '',
    },
},
{
    id: 'chain_hammer',
    categories: [
        'chains--martial',
        'monk-allowed-martial',
    ],
    traits: {
        reach: "10'",
        double: true,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Surujin': 'Japan',
        'Meteor Hammer': 'China',
        'Kusarigama': 'Japan',
        "Dragon's Fist": '',
    },
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
},
{
    id: 'nunchucks',
    categories: [
        'chains--martial',
        'monk-allowed-martial',
    ],
    traits: {
        light: true,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'heavy_nunchucks',
    ],
    aliases: {
        'Nunchucks': 'Japan',
    },
},
{
    id: 'heavy_nunchucks',
    categories: [
        'chains--exotic',
        'monk-allowed-exotic',
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
        'Heavy Nunchucks': 'Japan',
        'Flindbar': 'Gnoll',
    },
},
]);
