EQUIPMENT = EQUIPMENT.concat([
{
    id: 'quarterstaff',
    categories: [
        'polearms-staves-basic',
        'monk-allowed-basic',
        'druid-allowed-basic',
    ],
    traits: {
        double: true,
        defensive: true,    // Bonus AC when defensive stance
    },
    more_traits: {
        masterwork: [
            'fire'
        ],
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'Jo': 'Japan',
        'Shillelagh': 'Irish',
    },
    stats: {
        // Score: 1.5 (1 double, 0.5 defensive)
        damage: '1d6',
    }
},
{
    id: 'shortstaff',
    categories: [
        'polearms-staves-martial',
        'monk-allowed-martial',
        'druid-allowed-martial',
    ],
    traits: {
        defensive: true,
        finessable: true,
        grapple: 2,
    },
    more_traits: {
    },
    aliases: {
        'Hanbo': 'Japan',
        'Cane': '<Improvised>',
        'Dang Bong': 'China',
    },
    stats: {
        // Score: 2.25 (1 damage, 0.5 defensive, 0.5 grapple, 0.25 finesse)
        damage: '1d8',
    },
},
{
    id: 'longstaff',
    categories: [
        'polearms-staves-martial',
        'monk-allowed-martial',
    ],
    traits: {
        reach: "10'",
        double: true,
        defensive_flank: true,   // Can't be flanked when defensive stance
    },
    more_traits: {
        masterwork: [
            'fire'
        ],
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'Bo': 'Japan',
    },
    stats: {
        // Score: 2 (1 defensive, 1 double)
        damage: '1d6',
    }
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
        defensive: true,
        double: true,
    },
    more_traits: {
        ammo: 'grenades, stones',
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
    },
    stats: {
        // Score: 2 (1 double, 0.5 defensive, 0.5 ranged)
        damage: '1d6/???', // TODO:: ranged damage
    }
},
{
    id: 'feather_staff',
    categories: [
        'polearms-staves-exotic',
    ],
    traits: {
        double: true,
        block_blades: true,
        defensive: true,
    },
    more_traits: {
        hidden: 'as staff',
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Brandistock': 'Italy',
    },
    stats: {
        // Score: 3 (1 double, 1 damage, 0.5 block, 0.5 defensive)
        damage: '1d8',
    }
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
        bracing: true,    // Double against charge
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
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
        'Thrusting Spear': '',
    },
    stats: {
        // Score: 1.5 (1 damage, 0.5 brace)
        damage: '1d8',
    }
},
{
    id: 'longspear',
    categories: [
        'polearms-spears-martial',
    ],
    traits: {
        reach: "10'",
        bracing: true,    // Attacks of opportunity work for this
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'light pike': '',
        'light lance': '',
    },
    stats: {
        // Score: 2 (2 damage, 0.5 brace, 0.5 brace/reach, -1 2h)
        damage: '1d10',
    }
},
{
    id: 'stiletto',
    categories: [
        'close--martial',
        'monk-allowed-martial',
        'polearms-spears-martial',
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
        wounding: 2,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Stiletto': '',
        'Siangham': 'Malaysia, Kuntao',
        'Iron Brush': 'China',
        'Gandasa': 'Indian',
        'Stake': '<Improvised>',
        'Fiji Fork': '',
        'Quadrens': 'Roman',
        'Long Knife': 'Drow',
    },
    stats: {
        // Score: 2.5 (0.5 thrown, 1 light, 1 ap)
        damage: '1d6',
    }
},
{
    id: 'pike',
    categories: [
        'polearms-spears-exotic',
    ],
    traits: {
        // Maybe 15-20 ? or just 15
        // Maybe if you have exotic prof you get 20'
        reach: "15'-20'",
        brace: true,
    },
    more_traits: {
        strange: true,
        '2H': true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Awlpike': '',
        'Sarissa': 'Greek',
    },
    stats: {
        // Score: 3 (2 damage, 1.5 reach, 0.5 brace, -1 2h)
        damage: '1d10',
    }
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
        dive: 2,    // Overlap with charge?
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'heavy lance': '',

        // Often has feather fall as a magic effect
        'Swooping Lance': '',
        'Flying Lance': '',
    },
    stats: {
        // Score: 2 (1 damage, 1 charging)
        damage: '2d4',
    }
},
{
    id: 'great_lance',
    categories: [
        'polearms-spears-exotic',
    ],
    traits: {
        reach: "10'",
        charging: true,
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Jousting Lance': 'Europe',
    },
    stats: {
        // Score: 3 (3 damage, 1 charging, -1 2h)
        damage: '2d6',
    }
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
        wounding: true, // Ussually barbed
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Military Fork': '',
        'Tiger Spear': 'China',
        'Tiger Fork': 'China',
    },
    stats: {
        // Score: 3.5 (1 damage, 0.5 thrown, 1 crit multiplier, 1 ap)
        damage: '1d8',
        crit_mult: 3,
    }
},
{
    id: 'greatspear',
    categories: [
        'polearms-spears-exotic',
    ],
    traits: {
        bracing: true,
        impeding_brace: true, // Stops them right outside your reach if hit
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Bohemian Earspoon': '',
        'Bear Spear': '',
        'Spontoon': '',
        'Boar Spear': '',
    },
    stats: {
        // Score: 3 (2 damage, -1 2H, 0.5 brace, 0.5 impede)
        damage: '1d12',
    }
},
{
    id: 'spetum',
    categories: [
        'polearms-spears-exotic',
    ],
    traits: {
        reach: "10'",
        ap_shield: 2,
        trip: 4,
        disarm: 4,
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Corseque': '',
        'Ranseur': '',
        'Partisan': '',
        'Winged Spear': '',
        'Jumonji Yari': 'Japan',
    },
    stats: {
        // Score: 3 (1 damage, 1 ap, 2 skill, -1 2H)
        damage: '1d8',
    }
},

//------------------------------------
// Javelins
{
    id: 'shortspear',
    categories: [
        'polearms-spears-martial',
    ],
    traits: {
        light: true,
        thrown: true,
        brace: true,
    },
    more_traits: {
        '1H': true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Throwing Spear': '',
    },
    stats: {
        // Score: 2 (0.5 thrown, 1 light, 1 brace)
        damage: '1d6',
    }
},
{
    id: 'javelin',
    categories: [
        'polearms-spears-martial',
        'thrown-sharp-martial',
        'druid-allowed-martial',
    ],
    traits: {
        thrown: true,   // thrown only
        bracing: true,  // ranged brace
    },
    more_traits: {
        range: 30,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Verutum': 'Roman',
        'Harpoon': '',
    },
    stats: {
        // Score: 2 (1 damage, 0.5 thrown, -0.5 ranged, 0.5 brace, 0.5 range)
        damage: '1d8',
    }
},
{
    id: 'pilum',
    categories: [
        'polearms-spears-exotic',
        'thrown-sharp-exotic',
    ],
    traits: {
        shieldbreaker: true,    // breaks x durability on shield regardless of block
        ap_shield: 2,
        bracing: true,
    },
    more_traits: {
        range: 30,
        one_use: true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
    stats: {
        // Score: 2.5 (0.5 break, 2 ap, 0.5 thrown, -0.5 ranged, 0.5 brace, 0.5 range)
        damage: '1d6',
    }
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
        '2H': true,
    },
    damages: {
        slashing: true,
    },
    aliases: {
    },
    stats: {
        // Stats: 1 (2 damage, -1 2H)
        damage: '1d10',
    }
},
{
    id: 'glaive',
    categories: [
        'polearms--martial',
        'sickles--martial',
    ],
    traits: {
        reach: "10'",
        ap_flesh: 2,
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        slashing: true,
    },
    aliases: {
        'Guan Dao': 'China',
        'Naginata': 'Japan',
        'Glaive': 'Welsh',
        'Sovnya (Совня)': 'Russia',
        'Fauchard': 'France',
        'Great Scythe': '',
        'Woldo': 'Korean',
    },
    stats: {
        // Score: 2.5 (0.5 on-crit, 1 ap, 2 damage, -1 2H)
        damage: '1d10',
        on_crit: 'cleave',
    }
},
{
    id: 'halberd',
    categories: [
        'polearms--martial',
        'axes-axes-martial',
    ],
    traits: {
        reach: "10'",
        breaching: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
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
    stats: {
        // Score: 2.5 (2 damage, -1 2H, 1 crit, 0.5 breach)
        damage: '1d10',
        crit_mult: 3,
    }
},
{
    id: 'wolf_tooth_club',
    categories: [
        'polearms--martial',
        'hammers-clubs-martial',
    ],
    traits: {
        reach: "10'",
        knockback: 2,
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'Planson': '',
        "Monk's Cudgel": '',
        'Wolf Tooth Club': '',
        'Tetsubo': 'Japan',
    },
    stats: {
        // Score: 2 (2 damage, -1 2H, 0.5 on-crit, 0.5 knockback)
        damage: '1d10',
        on_crit: 'knockback',
    }
},
{
    id: 'horseman_pick',
    categories: [
        'polearms--exotic',
        'axes-picks-exotic',
    ],
    traits: {
        ap: 4,
        reach: "10'",
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'Bec de Corbin': 'French',
        "Horseman's Pick": '',
        'Lucerne Hammer': '',
    },
    stats: {
        // Score: 3 (2 damage, -1 2H, 2 ap)
        damage: '1d10',
    }
},
{
    id: 'pole_flail',
    categories: [
        'chains-flails-exotic',
        'polearms--exotic',
    ],
    traits: {
        ap_shield: 4,
        reach: "10'",
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'Two Section Staff': 'China',
        'Chang Xiao Bang': 'China',
    },
    stats: {
        // Score: 3 (2 damage, -1 2H, 2 ap)
        damage: '1d10',
    }
},
{
    id: 'man_catcher',
    categories: [
        'polearms--exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        reach: "10'",
        grapple: 4,
        impede: true,
        subdual: true,
    },
    more_traits: {
        '2H': true,
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'Pincer Staff': '',
        'Sasumata': 'Japan',
        'Tsukubo': 'Japan',
        "Monk's Spade": '', // Monk
        'Lajatang': '', //Monk
        'Shaolin Spade': '', //Monk
        'Pinning Pole': '',
        'Soderagami': 'Japan',
        'Entangling Pole': '',
    },
    stats: {
        // Score: 2.5 (-1 2H, 1 damage, 1 grapple, 1 impede, 0.5 on-crit)
        damage: '1d8',
        on_crit: 'impede',
    }
},
{
    id: 'billhook',
    categories: [
        'polearms--exotic',
    ],
    traits: {
        'reach': "10'",
        'dismounting': true,
        strange: true,
    },
    more_traits: {
        applied_to: 'long_spear, halberd, glaive'
    },
    damages: {
    },
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
