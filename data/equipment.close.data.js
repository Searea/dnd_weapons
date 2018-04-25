EQUIPMENT = EQUIPMENT.concat([
{
    // Maybe limb weapons could be part of the "Natural Weapons Tree"
    id: 'hook',
    categories: [
        'close-limb-basic',
        'sickles--basic',
    ],
    traits: {
    },
    more_traits: {
        limb: true,
        strange: true,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Stump Knife': '',
    },
},
{
    id: 'guantlet',
    categories: [
        'close-limb-martial',
        'monk-allowed-martial',
    ],
    traits: {
    },
    more_traits: {
        limb: true,
    },
    damages: {
        bludgeoning: true,
        slashing: true,
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Cestus': '',
        'Stump Knife': '',
        'Bladed Guantlet': '',
        'Spiked Guantlet': '',
        'Wrist Blade': "Assassin's Creed",
        'Claw Bracer': '',
    },
},
{
    id: 'knuckleduster',
    categories: [
        'close--martial',
        'monk-allowed-martial',
    ],
    traits: {
        unarmed: "+1 dmg",
    },
    more_traits: {
    },
    damages: {
        piercing: true,
        bludgeoning: true,
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Brass Knuckles': '',
        'Knuckleduster': '',
        'Tekko': 'Japan',
        'Nekode (Cat Claws)': 'Japan',
        'Bagh Nakh (Tiger Claw)': 'Indian',
        'Katar': 'Indian',
        'Tribladed Katar': 'Indian',
        'Maniple': '',
        'Pata': '',
        'Push_dagger': '',
        'Emei Piercer': ''
    },
},
//--------------------------------------------------
// Fans
{
    id: 'steel_fan',
    categories: [
        'close-fans-martial',
        'monk-allowed-martial',
    ],
    traits: {
        light: true,
        block: 'light_thrown, lightning',
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'hidden_fan',
        'war_fan',
    ],
    aliases: {
        'Tessen': 'Japan',
    },
},
{
    id: 'war_fan',
    categories: [
        'close-fans-exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        block: 'arrows, light_thrown',
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Gunbai': 'Japan',
    },
},
{
    id: 'hidden_fan',
    categories: [
        'close-fans-martial',
        'monk-allowed-martial',
    ],
    traits: {
        hidden: true,
    },
    more_traits: {
        strange: true,
        poisoned: '?',
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Gunsen': 'Japan',
    },
},



//---------------------------------------------
// Special
{
    id: 'blade_boot',
    categories: [
        'close-limb-exotic',
    ],
    traits: {
    },
    more_traits: {
        limb: true,
    },
    damages: {
        dive: true,
        slashing: true,
        strange: true,
    },
    upgrades: [
    ],
    aliases: {
        'Foot Blade': '',
        'Shoe Knife': 'KGB',
        'Foot Spike': '',
    },
},
{
    id: 'weighted_sleeve',
    categories: [
        'close-limb-exotic',
        'hammers-clubs-exotic',
    ],
    traits: {
        hidden: true,
    },
    more_traits: {
        limb: true,
    },
    damages: {
        bludgeoning: true,
        strange: true,
    },
    upgrades: [
    ],
    aliases: {
    },
},
{
    id: 'garrote',
    categories: [
        'close--martial',
    ],
    traits: {
    },
    more_traits: {
    },
    damages: {
    },
    upgrades: [
        'locked_garrote',
    ],
    aliases: {
        'Garrote': 'Spanish',
        'Wire': '',
        'Cord': '',
        'Chain': 'Improvised',
        'Piano Wire': 'Improvised',
        'Fishing Line': 'Improvised',
    },
},
{
    id: 'locked_garrote',
    categories: [
        'close--exotic',
    ],
    traits: {
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
{
    id: 'poison_ring',
    categories: [
        'close-limb-exotic',
    ],
    traits: {
    },
    more_traits: {
        limb: true,
        strange: true,
    },
    damages: {
        poison: true,
        piercing: true, //But 0
    },
    upgrades: [
    ],
    aliases: {
        'Kakute': 'Japan',
    },
},
{
    id: 'quickblade',
    categories: [
        'close-limb-exotic',
    ],
    traits: {
        // Swift action to sheathe
        quickdraw: true,
        quicksheathe: true,
    },
    more_traits: {
        limb: true,
        strange: true,
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Quickrazor': 'Gnome',
    },
},
{
    id: 'natural_attachment',
    categories: [
        'close-limb-exotic',
        'natural--exotic',
    ],
    traits: {
        limb: true,
        double_prof: 'natural, close'
    },
    more_traits: {
        strange: true,
        slashing: true,
        bludgeoning: true,
    },
    aliases: {
        'Tail Blade': '',
        'Tail Club': '',
        'Wing Blade': '',
    },
},
]);
