/*
# Breaching

Urban combat is much more common than it used to be, especially with anti-insurgency suppression and targeted rescue/kill operations.

An infantry company may all have to perform breaching or they may have a special unit for breaching, but in these scenarios an axe has much more utility and versatility as a tool than a knife.

Axes were often standard issue to the Ranger Corps, for survival purposes

# Close Quarters Combat

An axe also has more reach and requires less dexterity than a knife, which can be useful with less training where visibility is low and corners are common. It can also cause more damage with a glancing blow and can be reversed to cause the same puncture damage with less force due to levering action with the handle.



# Braching Notes:

Explosive breaching includes using nonelectrical demolition systems; ballistic breaching includes using direct fire weapons; and mechanical breaching includes using crowbars, axes, saws, hooligan's tools, and sledgehammers.


Picks: Breaching (Stone)
Axes: Breaching (Wood)

*/
EQUIPMENT = EQUIPMENT.concat([
{
    id: 'handaxe',
    categories: [
        'axes-axes-martial',
        'thrown-sharp-martial',
        'monk-allowed-martial',
    ],
    traits: {
        'light': true,
        throwning: true,
    },
    more_traits: {
        twin: true,
    },
    damages: {
        slashing: true,
    },
    upgrades: [
        'double_axehead',
        'heavy_axe',
    ],
    aliases: {
        'Kukri': 'Nepal',
        'Tomahawk': 'Native American',
        'thrown Axe': '',
        'Machete': '',
        'Bolo': 'Filipino',
        'Parang': 'Malay',
        'Golok': 'Indonesia',
        'War Cleaver': '',
        'Cleaver': 'Improvised',
        'Francesca': 'Franks, Germanic',
        'Hand Adze': 'Improvised',
        'Adze': 'Improvised',
        'Mattock': 'Improvised',
    },
},
{
    id: 'heavy_axe',
    categories: [
        'axes-axes-martial',
    ],
    traits: {
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
        'greataxe',
    ],
    aliases: {
        'Battle Axe': '',
        'Saddle Axe': '',
        'Tabarzin': 'Persian',
        'Bhuj': 'Indian', // Has a Gandasa in the handle
    },
},
{
    id: 'greataxe',
    categories: [
        'axes-axes-exotic',
    ],
    traits: {
        '2h': true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
    },
},

// Gandasa (Axe) often comes with Bhuj (Stiletto)

//-----------------------------------------------------
// Picks
{
    id: 'light_pick',
    categories: [
        'axes-picks-martial',
        'thrown-sharp-martial',
    ],
    traits: {
        light: true,
        throwning: true,
        'ap': 2,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'heavy_pick',
    ],
    aliases: {
    },
},
{
    id: 'heavy_pick',
    categories: [
        'axes-picks-martial',
        'hammers--exotic',
    ],
    visible_names: {
        'hammers': 'morning star',
    },
    traits: {
        'ap': 4,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'greatpick',
    ],
    aliases: {
        'War Pick': '',
        'Morning Star': '',
        'Warhammer': '',
        'Maul': '',
        'Battlepick': 'Gnome',
    },
},
{
    id: 'greatpick',
    categories: [
        'axes-picks-exotic',
    ],
    traits: {
        '2h': true,
        'ap': 6,
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

//---------------------------------------------------------
// Special
{
    id: 'ice_axe',
    categories: [
        'axes-axes-exotic',
    ],
    traits: {
    },
    more_traits: {
        climb: 1,
        skilled_climb: 4
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Boarding Axe': 'Naval',
    },
},
{
    id: 'buckler_axe',
    categories: [
        'axes-axes-exotic',
        'shields--exotic',
    ],
    traits: {
    },
    more_traits: {
        strange: true,
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Buckler Axe': 'Dwarven',
    },
},
{
    id: 'double_axehead',
    categories: [
        'axes-axes-exotic',
        'thrown-sharp-exotic',
    ],
    traits: {
        thrown: true,
        powerful: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Double Axehead': 'Orc',
    },
},
{
    id: 'kpinga',
    categories: [
        'axes-axes-exotic',
        'thrown-sharp-exotic',
    ],
    traits: {
        light: true,
        thrown: true,
        ap_shield: 2,
        // The size of this weapon was a huge plus on the battlefield, because even if it was thrown into a shield, it was long enough that it could roll over the edge and still strike the target.
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Kpinga': 'African (Zande)',
        'Hunga Munga': 'African',
        'Mambele': 'African (Mangbetu)',
    },
},

]);
