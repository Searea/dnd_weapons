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

// TODO:: Adjust axes with a malus to hit to match with sword's score

/*
Axe bias:
- High damage
- Average dice
- Less hit (?)
*/
EQUIPMENT = EQUIPMENT.concat([
{
    // Suggestion: Maybe seperate handaxe and throwing axe so that axes/picks have a basic weapon
    id: 'handaxe',
    categories: [
        'axes-axes-martial',
        'thrown-sharp-martial',
        'monk-allowed-martial',
    ],
    traits: {
        thrown: true,
        breaching: true,
        light: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
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
    stats: {
        // Throwing Axe
        // Score: 2 (0.5 thrown, 0.5 breach, 1 light)
        damage: '1d6',
    },
},
{
    id: 'heavy_axe',
    categories: [
        'axes-axes-martial',
    ],
    traits: {
        breaching: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    aliases: {
        'Battle Axe': '',
        'Saddle Axe': '',
        'Tabarzin': 'Persian',
        'Bhuj': 'Indian', // Has a Gandasa in the handle
    },
    stats: {
        // Score: 2.5 (1 damage, 1 crit damage, 0.5 breech)
        damage: '1d8',
        crit_mult: 3,
    },
},
{
    id: 'greataxe',
    categories: [
        'axes-axes-exotic',
    ],
    traits: {
        '2h': true,
        breaching: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    aliases: {
    },
    stats: {
        // Score: 3.5 (3 damage, 1 crit damage, -1 twohanded, 0.5 breech)
        damage: '1d12',
        crit_mult: 3,
    },
},

// Gandasa (Axe) often comes with Bhuj (Stiletto)

//-----------------------------------------------------
// Picks
{
    id: 'light_pick',
    categories: [
        'axes-picks-martial',
    ],
    traits: {
        light: true,
        ap: 4,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
    stats: {
        // Score: 3 (1 light, 2 ap)
        damage: '1d6'
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
        ap: 4,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'War Pick': '',
        'Morning Star': '',
        'Warhammer': '',
        'Maul': '',
        'Battlepick': 'Gnome',
        'Kalinga Headhunter Axe': 'Filipino',
    },
    stats: {
        // Score: 3 (1 damage, 2 ap)
        damage: '1d8'
    },
},
{
    id: 'greatpick',
    categories: [
        'axes-picks-exotic',
    ],
    traits: {
        '2h': true,
        ap: 6,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
    stats: {
        // Score: 5 (3 damage, 3 ap, -1 twohanded)
        damage: '1d12'
    },
},

//---------------------------------------------------------
// Special
{
    // Suggestion: Make this light?
    id: 'ice_axe',
    categories: [
        'axes-axes-exotic',
    ],
    traits: {
    },
    more_traits: {
        climb: 1,
        skilled_climb: 4,
        grapple: 2,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Boarding Axe': 'Naval',
    },
    stats: {
        // Score: 4 (1 light, 1 climb, 0.5 on_crit, 2 crit range, -1 damage, 0.5 grapple)
        damage: '1d4',
        crit: 18,
        on_crit: 'grapple',
    },
},
{
    id: 'buckler_axe',
    categories: [
        'axes-axes-exotic',
        'shields--exotic',
    ],
    traits: {
        shield: 1,
        breaching: true,
    },
    more_traits: {
        strange: true,
    },
    damages: {
        slashing: true,
    },
    aliases: {
        'Buckler Axe': 'Dwarven',
    },
    stats: {
        // Score: 3.5 (1 damage, 1 shield, 1 crit damage, 0.5 breach)
        damage: '1d8',
        crit_mult: 3
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
        breaching: true,
    },
    more_traits: {
        ranged: true, // thrown only
    },
    damages: {
        slashing: true,
    },
    aliases: {
        'Double Axehead': 'Orc',
    },
    stats: {
        // Score: 4 (2 damage, 1 crit damage, 0.5 breach, 0.5 powerful, 0.5 thrown, -0.5 ranged)
        damage: '1d10',
        crit_mult: 3,
    },
},
{
    // Suggestion: Increase the AP to further differentiate it from a light pick?
    id: 'kpinga',
    categories: [
        'axes-axes-exotic',
        'thrown-sharp-exotic',
    ],
    traits: {
        light: true,
        thrown: true,
        ap_shield: 4,
        // The size of this weapon was a huge plus on the battlefield, because even if it was thrown into a shield, it was long enough that it could roll over the edge and still strike the target.
    },
    more_traits: {
        ranged: true, // thrown only
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Kpinga': 'African (Zande)',
        'Hunga Munga': 'African',
        'Mambele': 'African (Mangbetu)',
    },
    stats: {
        // Score: 4 (1 damage, 2 ap, 0.5 thrown, 1 light, -0.5 ranged)
        damage: '1d8',
    },
},

]);
