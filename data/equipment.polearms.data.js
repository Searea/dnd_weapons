EQUIPMENT = EQUIPMENT.concat([
{
    id: 'quarterstaff',
    categories: [
        'polearms-staves-basic',
        'monk-allowed-basic',
        'druid-allowed-basic',
    ],
    traits: {
        'double': true,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'longstaff',
        'lantern_staff',
    ],
    aliases: {
        'Jo': 'Japan',
        'Shillelagh': 'Irish',
    },
},
{
    id: 'longstaff',
    categories: [
        'polearms-staves-martial',
        'monk-allowed-martial',
    ],
    traits: {
        blocking: true,
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'feather_staff',
    ],
    aliases: {
        'Bo': 'Japan',
    },
},
{
    id: 'slingstaff',
    categories: [
        'polearms-staves-martial',
        'thrown-rocks-exotic',
        'druid-allowed-martial',
    ],
    traits: {
        ranged: true,
    },
    more_traits: {
        ammo: 'grenades, stones',
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
    id: 'lantern_staff',
    categories: [
        'polearms-staves-exotic',
        'druid-allowed-exotic',
    ],
    traits: {
        double: true,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
        fire: true
    },
    upgrades: [
    ],
    aliases: {
    },
},
{
    id: 'feather_staff',
    categories: [
        'polearms-staves-exotic',
    ],
    traits: {
        hidden: 'as staff',
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Brandistock': 'Italy',
    },
},
//---------------------------------------
// Spears
{
    id: 'spear',
    categories: [
        'polearms-spears-basic',
        'druid-allowed-basic',
    ],
    traits: {
    },
    more_traits: {
        '1H': true,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'longspear',
        'trident',
        'greatspear',
    ],
    aliases: {
        'Yari': 'Japan',
        'Qiang': 'China',
        'Hasta': 'Roman',
        'Tepoztopilli': 'Aztec',
        'Taiha': '',
        'Sibat': 'Filippino',
        'Ox-Tongue Spear': '',
        'Swordstav': 'Swiss',
        'Omi Yari': '',

        // Could be its own "Boar Spears"
        'Bohemian Earspoon': '',
        'Bear Spear': '',
        'Spontoon': '',
        'Boar Spear': '',
    },
},
{
    id: 'longspear',
    categories: [
        'polearms-spears-martial',
    ],
    traits: {
        reach: "10'",
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'pike',
        'spetum',
    ],
    aliases: {
        'light pike': '',
        'light lance': '',
    },
},
{
    id: 'stiletto',
    categories: [
        'close--martial',
        'monk-allowed-martial',

        'blades--exotic',
        'thrown-sharp-martial',
    ],
    visible_names: {
        'blades': 'long knife',
        'thrown': 'long knife',
        'monk': 'siangham',
    },
    traits: {
        light: true,
        thrown: true,
        wounding: '?',
        ap: '?',
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Stiletto': '',
        'Siangham': 'Malaysia, Kuntao',
        'Iron Brush': 'China',
        'Gandasa': 'Indian',
        'Stake': 'Improvised',
        'Fiji Fork': '',
        'Quadrens': 'Roman',
        'Long Knife': 'Drow',
    },
},
{
    id: 'pike',
    categories: [
        'polearms-spears-martial',
    ],
    traits: {
        // Maybe 15-20 ? or just 15
        // Maybe if you have exotic prof you get 20'
        reach: "15-20'",
    },
    more_traits: {
        strange: true,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Awlpike': '',
    },
},
{
    id: 'lance',
    categories: [
        'polearms-spears-martial',
    ],
    traits: {
        reach: "10'",
        charging: true,
    },
    more_traits: {
        dive: 2,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'great_lance',
    ],
    aliases: {
        'heavy lance': '',

        // Often has feather fall as a magic effect
        'Swooping Lance': '',
        'Flying Lance': '',
    },
},
{
    id: 'shortspear',
    categories: [
        'polearms-spears-martial',
    ],
    traits: {
        light: true,
        thrown: true,
    },
    more_traits: {
        '1H': true,
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
    id: 'great_lance',
    categories: [
        'polearms-spears-exotic',
    ],
    traits: {
        reach: "10'",
        charging: true,
        'keep?': true,
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
    id: 'trident',
    categories: [
        'polearms-spears-exotic',
        'monk-allowed-exotic',
    ],
    visible_names: {
        'monk': 'Tiger Spear',
    },
    traits: {
        aquatic: true,
        thrown: true,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Pitchfork': 'Improvised',
        'Military Fork': '',
        'Tiger Spear': 'China',
        'Tiger Fork': 'China',
    },
},
{
    id: 'greatspear',
    categories: [
        'polearms-spears-exotic',
    ],
    traits: {
        'vs charge': '',
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
    id: 'spetum',
    categories: [
        'polearms-spears-exotic',
    ],
    traits: {
        'reach': "10'",
        block: 'blades',
        disarm: true,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Corseque': '',
        'Ranseur': '',
        'Partisan': '',
        'Winged Spear': '',
        'Jumonji Yari': 'Japan',
    },
},


//------------------------------------
// Javelins
{
    id: 'javelin',
    categories: [
        'polearms-spears-martial',
        'thrown-sharp-martial',
        'druid-allowed-martial',
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
        'pilum',
        'spear_thrower',
    ],
    aliases: {
        'Verutum': 'Roman',
        'Harpoon': '',
    },
},
{
    id: 'pilum',
    categories: [
        'polearms-spears-exotic',
    ],
    traits: {
        'shieldbreaker': true,
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
    },
},

//------------------------------------
// Polearms
{
    id: 'war_scythe',
    categories: [
        'polearms--basic',
        'sickles--basic',
        'druid-allowed-basic',
    ],
    traits: {
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
        'glaive',
    ],
    aliases: {
    },
},
{
    id: 'glaive',
    categories: [
        'polearms--martial',
        'sickles--martial',
    ],
    traits: {
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Guan Dao': 'China',
        'Naginata': 'Japan',
        'Glaive': 'Welsh',
        'Sovnya (Совня)': 'Russia',
        'Fauchard': 'France',
        'Great Scythe': '',
        'Woldo': 'Korean',
    },
},
{
    id: 'halberd',
    categories: [
        'polearms--martial',
        'axes-axes-martial',
    ],
    traits: {
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Bardiche': '',
        'Pole-Axe': '',
        'PollAxe': '',
        'Longaxe': 'Dwarven',
        'Bec de Faucon': 'French',
        'Voulge': '',
        'Lochaber Axe': 'Scotland',
        'Danish Axe': 'Danish',
        'Sparth Axe': '',
    },
},
{
    id: 'wolf_tooth_club',
    categories: [
        'polearms--martial',
        'hammers-clubs-martial',
    ],
    traits: {
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Planson': '',
        "Monk's Cudgel": '',
        'Wolf Tooth Club': '',
        'Tetsubo': 'Japan',
    },
},
{
    id: 'lucerne_hammer',
    categories: [
        'polearms--martial',
        'axes-picks-exotic',
    ],
    traits: {
        ap: 3,
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Bec de Corbin': 'French',
        "Horseman's Pick": '',
    },
},
{
    id: 'pole_flail',
    categories: [
        'chains-flails-exotic',
        'polearms--exotic',
    ],
    traits: {
        ap_shield: 3,
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
        'three_section_staff',
    ],
    aliases: {
        'Two Section Staff': 'China',
        'Chang Xiao Bang': 'China',
    },
},
{
    id: 'man_catcher',
    categories: [
        'polearms--exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        'reach': "10'",
        'grapple': true,
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    upgrades: [
    ],
    aliases: {
        'Pincer Staff': '',
        'Sasumata': 'Japan',
        'Tsukubo': 'Japan',
        "Monk's Spade": '', // Monk
        'Lajatang': '', //Monk
        'Shaolin Spade': '', //Monk
        'Pinning Pole': ''
    },
},
{
    id: 'cloth_catcher',
    categories: [
        'polearms--martial',
    ],
    traits: {
        'reach': "10'",
        'grapple': 'cloth 4',
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Soderagami': 'Japan',
        'Entangling Pole': '',
    },
},
{
    id: 'billhook',
    categories: [
        'polearms--exotic',
    ],
    traits: {
        'reach': "10'",
        'dismounting': true,
    },
    more_traits: {
        applied_to: 'long_spear, halberd, glaive'
    },
    damages: {
    },
    upgrades: [
    ],
    aliases: {
        'Bill': '',
        'Hooked Spear': '',
        'Guisarme': '',
        '*-Guisarme': '', // Attachment for other spears perhaps? (then you have flavour)
        'Kama Yari': 'Japan',
        'Hooked Hammer': 'Gnome', // But with a hammer specifically?
    },
},
]);
