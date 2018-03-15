/*
Sword bias:
- crit range
*/
EQUIPMENT = EQUIPMENT.concat([
{
    id: 'dagger',
    categories: [
        'blades--basic',
        'thrown-sharp-basic',
        'close--basic',
        'druid-starter-basic',
        'monk-starter-basic',
    ],
    visible_names: {
        druid: 'athame',
    },
    traits: {
        'light': true,
        thrown: true,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'shortsword',
        'dagger_hidden',
        'stiletto',
        'kunai',
        'parrying_dagger',
    ],
    aliases: {
        'Dirk': '',
        'Khanjar': 'Indian',
        'Janbiya': 'Arabic',
        'Knife': '',
        'Shiv': 'Improvised',
        'Tanto': 'Japan',
        'Kaiken': 'Japan',
        'Haladie': 'Syria, Indian',
        'Anelaces': '',
        'Poignard': '',
        'Rondel': '',
        'Pesh Kabz': 'Indian',
        'Karda': 'Nepal', //Chakmak: https://www.kukriblades.com/chakmak-karda-knife/
        'Bichuwa': 'Indian',
        'Kris': '', // Foci?
        'Athame': 'Celtic, Wiccan', // Foci
        'Phurba': 'Buddhist', // Foci
        'Kīla': 'Buddhist', // Foci
    },
    stats: {
        // Score: 1 (1 thrown, 1 light, -1 damage)
        damage: '1d4',
        crit: ''
    },
},
{
    id: 'dagger_hidden',
    // Proficiencies for anything a dagger has
    // Its basically a mod
    categories: [
        'blades--basic',
    ],
    visible_names: {
        monk: 'Lungchuan Tamo',
    },
    traits: {
        'light': true,
    },
    more_traits: {
        hidden: true,
        strange: true,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Switchblade': '',
        'Balisong': '',
        'Butterfly Knife': '',
        'Fan Knife': '',
    },
    stats: {
        // Score: 1 (1 thrown, 1 light, -1 damage)
        damage: '1d4',
        crit: ''
    },
},
{
    // Suggestion: Make light
    id: 'shortsword',
    categories: [
        'blades--martial',
    ],
    traits: {
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'longsword',
        'sword_breaker',
    ],
    aliases: {
        'Wakizashi': 'Japan',
        'Gladius': 'Roman',
        'Kodachi': 'Japan',
        'Kalis': 'Filipino',
        'Xiphos': 'Greek',
        'Cinquedea': 'Italy',
        'Dogslicer': 'Goblin',
    },
    stats: {
        // Score: 2 (1 light, 1 crit range)
        damage: '1d6',
        crit: '19+'
    },
},
{
    id: 'longsword',
    categories: [
        'blades--martial',
    ],
    traits: {
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
        'greatsword',
    ],
    aliases: {
        'Jian': 'China',
        'Kampilan': 'Filipino',
        'Katana': 'Japan',
        'Bastard Sword': '',
        'Hwangduaedo': 'Korean',
        'Makhaira': 'Greek',
        'Khanda': 'Indian',
        'Takoba': 'Africa',
        'Ida': 'African',
        'Longblade': 'Elf',
    },
    stats: {
        // Score: 2 (1 damage, 1 crit range)
        damage: '1d8',
        crit: '19+'
    },
},
{
    id: 'greatsword',
    categories: [
        'blades--exotic',
    ],
    traits: {
    },
    more_traits: {
        '2h': true,
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Nodachi': 'Japan',
        'Odachi': 'Japan',
        'Flamberge': 'German',
        'Zweihander': 'German',
        'Full Sword': '',
        'Claymore': 'Scottish',
        'Zanbatō': 'Japan',
        'Changdao': 'China',
        'Temple Sword': '',
    },
    stats: {
        // Score: 4 (3 damage, 1 crit range, -1 two handed, 1 special)
        damage: '2d6',
        crit: '19+',
        special: 'cleave on crit'
    },
},
{
    id: 'rapier',
    categories: [
        'blades--martial',
    ],
    traits: {
    },
    more_traits: {
        finesse: true,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Cavalier Rapier': '',
        'Bilbo': 'Spanish, Naval',
        'War Rapier': '',
        'Estoc': '',
        'Thinblade': 'Elf',
        'Cane Sword': 'Hidden',
    },
    stats: {
        // Score: 2 (2 crit range)
        damage: '1d6',
        crit: '18+'
    },
},

//-----------------------------------
// Special
{
    // Suggestion: Is there a reason this is a special weapon instead of just a short sword?
    id: 'twin_blades',
    categories: [
        'blades--exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        twin: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Butterfly Sword': 'China',
        'Dragonsplit': '',
        'Deer Horn Knife': 'China',
    },
    stats: {
        // Score: 4 (1 crit range, 2 double, 1 special)
        damage: '1d6',
        crit: '19+',
        special: 'When wielding a pair of twin-blades, can attack with both using a standard attack'
    },
},
{
    id: 'double_sword',
    categories: [
        'blades--exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        double: true,
    },
    more_traits: {
    },
    damages: {
        slashing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Cicada Wing Sword': 'China',
        'Chan Zi dao': 'China',
    }, 
    stats: {
        // Score: 4 (1 crit range, 2 double, 1 special)
        damage: '1d6',
        crit: '19+',
        special: 'critical hits allow you to roll 1 additional attack with the other side of the weapon'
    },
},
{
    id: 'bayonet',
    categories: [
        'blades--basic',
    ],
    traits: {
        'mod': 'crossbows, thruster, prodd',
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
    stats: {
        // Score: 1 (1 attachment)
        damage: '1d6',
        crit: ''
    },
},
{
    id: 'parrying_dagger',
    categories: [
        'blades--exotic',
    ],
    traits: {
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
        'Sai': 'Japan',
        'Trident Dagger': '',
        'Main Gauche': '',
        'Broadblade Shortsword': '',
    },
    stats: {
        // Score: 4 (-1 damage, 1 light, 1 thrown, 2 special, 1 defend)
        damage: '1d4',
        crit: '',
        special: 'improved disarm'
    },
},
{
    id: 'sword_breaker',
    categories: [
        'blades--exotic',
    ],
    traits: {
        sunder_blades: true,
        disarm_blades: true,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
        'Sword Catcher': 'Gnome',
    }, 
    stats: {
        // Score: 3 (-1 damage, 2 special, 2 special)
        damage: '1d6',
        crit: '19+',
        specia: 'improved disarm, improved sunder'
    },
},


//-----------------------------------------
// Monk
{
    id: 'karambit',
    categories: [
        'monk-allowed-basic',
        'sickles--basic',
    ],
    variant: 'dagger_hidden',
    traits: {
    },
    more_traits: {
        strange: true,
    },
    upgrades: [
    ],
    damages: {
        slashing: true,
    },
    aliases: {
        'Karambit': 'Indonesia',
    },
    stats: {
        // Score: 1 (1 light, -1 damage, 1 crit range)
        damage: '1d4',
        crit: '19+'
    },
},

//-----------------------------------------
// Sickles
{
    id: 'sickle',
    categories: [
        'sickles--martial',
        'druid-starter-martial',
        'monk-allowed-martial',
    ],
    traits: {
        light: true,
    },
    more_traits: {
        finesse: true,
    },
    upgrades: [
        'raptor_sickle'
    ],
    damages: {
        slashing: true,
    },
    aliases: {
        'Kama': 'Japan',
        'Falx': '',
        'Cutlass': '',
        "Zashi'scain": '',
        'Trumbash': 'Mangbetu',
        'Kujang': 'Indonesia',
        'Boline': 'Wiccan', // Foci?
    },
    stats: {
        // Score: 2 (-1 damage, 1 light, 1 crit range and crit)
        damage: '1d4',
        crit: '19+ x2'
    },
},
{
    id: 'raptor_sickle',
    categories: [
        'sickles--exotic',
        'monk-allowed-exotic',
    ],
    traits: {
        light: true,
        disarm: 4,
    },
    more_traits: {
        finesse: true,
    },
    upgrades: [
    ],
    damages: {
        slashing: true,
    },
    aliases: {
        'Chicken Saber': 'China',
        'Raptor Saber': 'China',
        'Raptor Sickle': 'China',
    },
    stats: {
        // Score: 4 (1 damage, 1 light, 1 disarm, 1 crit range)
        damage: '1d8',
        crit: '19+',
        special: 'critical hits allow you to roll 1 additional attack with the other side of the weapon'
    },
},
{
    id: 'scimitar',
    categories: [
        'sickles--martial',
        'druid-allowed-martial',
    ],
    traits: {
    },
    more_traits: {
        finesse: true,
    },
    upgrades: [
        'khopesh',
        'great_scimitar',
    ],
    damages: {
        slashing: true,
    },
    aliases: {
        'Saber': '',
        'Falchion': '',
        'Shamshir': 'Persian',
        'Kopis': 'Greek',
        'Falcata': 'Celtic',
        'Yatagan': 'Turkish (Ottoman)',
        'Dao': 'China',
        'Sablja (Сабля)': 'Russian',
        'Kyu Gunto': 'Japan',
        'Kaiguntō': 'Japan (Naval)',
        'Tulwar': 'Indian',
        'Sica': '',
        'Nimcha': 'Africa',
        'Saif': 'Arabic',
        'Hadhafang': 'Elf',
        'Akrafena': 'Ashanti',
        'Tanmogayi': 'African',
        'Lightblade': 'Elf',
        'Sawtooth Saber': '',
        'Skallagrim': 'Modern Variant',
    },
    stats: {
        // Score: 2 (2 crit range, 2 double, 1 special)
        damage: '1d6',
        crit: '18+'
    },
},
{
    id: 'great_scimitar',
    categories: [
        'sickles--exotic',
        'druid-allowed-exotic',
    ],
    traits: {
        // Sickles have a lower damage, but higher crit?
        '2H': true,
    },
    more_traits: {
        finesse: true,
    },
    upgrades: [
    ],
    damages: {
        slashing: true,
    },
    aliases: {
        'Kora': 'Indian (Nepal)',
        'Dai Dao': 'China',
        'Great Scythe': 'Fantasy',
        'Great Sickle': 'Fantasy',
        'Great Shotel': 'Fantasy',
        'Great Falchion': 'Fantasy',
        'Courtblade': 'Elf',
    },
    stats: {
        // Score: 4 (4 crit (range and multiplier), -1 twohanded, 1 damage)
        damage: '1d8',
        crit: '18+ x2'
    },
},
{
    id: 'khopesh',
    categories: [
        'sickles--exotic',
        'monk-allowed-exotic',
        'druid-allowed-exotic',
    ],
    traits: {
        ap_shield: 2,
    },
    more_traits: {
        finesse: true,
    },
    upgrades: [
    ],
    damages: {
        slashing: true,
    },
    aliases: {
        'Khopesh': 'Egyptian',
        'Shotel': 'Ethiopia',
        'Makraka': 'African',
        'Ngulu': 'African',
        'Hook Sword': 'China',
        'Tiger Hook': 'China',
        'Shuang you': 'China',
    },
    stats: {
        // Score: 4 (1 damage, 1 ap, 1 crit range, 1 special)
        damage: '1d8',
        crit: '19+',
        special: 'attempt to disarm on crit'
    },
},
]);
