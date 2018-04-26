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
        finesseable: true,
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
        // Score: 1.5 (0.5 thrown, 1 light, -1 damage, 1 crit range)
        damage: '1d4',
        crit: 19
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
        finesse: true,
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
        // Score: 1.75 (0.5 thrown, 1 light, -1 damage, 1 crit range, 0.25 ability bonus (coneal))
        damage: '1d4',
        crit: 19
    },
},
{
    // Suggestion: Make light
    id: 'shortsword',
    categories: [
        'blades--martial',
    ],
    traits: {
        light: true,
    },
    more_traits: {
    },
    damages: {
        piercing: true,
    },
    upgrades: [
        'longsword',
    ],
    aliases: {
        'Wakizashi': 'Japan',
        'Gladius': 'Roman',
        'Kodachi': 'Japan',
        'Kalis': 'Filipino',
        'Xiphos': 'Greek',
        'Cinquedea': 'Italy',
        'Dogslicer': 'Goblin',
        'Butterfly Sword': 'China',
        'Dragonsplit': '',
        'Deer Horn Knife': 'China',
    },
    stats: {
        // Score: 2 (1 light, 1 crit range)
        damage: '1d6',
        crit: 19
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
        'Maquahuitl': 'Aztec',
    },
    stats: {
        // Score: 2 (1 damage, 1 crit range)
        damage: '1d8',
        crit: 19
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
        // Score: 3 (3 damage, 1 crit range, -1 two handed)
        damage: '2d6',
        crit: 19
    },
},
{
    id: 'rapier',
    categories: [
        'blades--martial',
    ],
    traits: {
        feint: 2,
        finesse: true,
    },
    more_traits: {
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
        // Score: 2.25 (1 crit range, 0.25 Finesse, 1 special)
        damage: '1d6',
        crit: 19,
        on_crit: 'feint',
    },
},

//-----------------------------------
// Special
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
        // Score: 4 (1 damage, 1 crit range, 1 double)
        damage: '1d8',
        crit: 19,
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
        light: true,
    },
    damages: {
        piercing: true,
    },
    upgrades: [
    ],
    aliases: {
    },
    stats: {
        // Score: 1.5 (1.5 attachment, 1 light, -1 damage)
        damage: '1d4',
        crit: 20
    },
},
{
    id: 'parrying_dagger',
    categories: [
        'blades--exotic',
    ],
    traits: {
        block_blades: true,
        shield_blades: 1,
        disarm_blades: 2,
        light: true
    },
    more_traits: {
        finesse: true,
        masterwork: [
            'sunder' // All disarm work for sunder as well
        ]
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
        'Sword Breaker': '',
        'Sword Catcher': 'Gnome',
        'Seven branched sword': 'China',

    },
    stats: {
        // Score: 3 (-1 damage, 1 light, 1 special, 1 defend, 1 crit range)
        damage: '1d4',
        crit: 19,
        special: 'improved disarm',
        on_crit: 'disarm',
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
},

//-----------------------------------------
// Sickle
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
        // Score: 2 (1 light, 1 crit mult)
        damage: '1d6',
        crit_mult: 3,
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
        'Chicken Saber': 'China',
        'Raptor Saber': 'China',
        'Raptor Sickle': 'China',
    },
    stats: {
        // Score: 3 (1 light, 1 disarm, 1 ap)
        damage: '1d6',
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
        // Score: 2.25 (1 crit range, 1 on-crit, 0.25 finesse)
        damage: '1d6',
        crit: 19,
        on_crit: 'cleave',
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
        // Score: 3.25 (1 crit range, -1 2h, 2 damage, 1 on-crit, 0.25 finesse)
        damage: '1d10',
        crit: 19,
        on_crit: 'cleave',
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
        // Score: 3.75 (1 damage, 1 ap, 1 crit range, 0.5 special, 0.25 finesse)
        // TODO:: OP
        damage: '1d8',
        crit: 19,
        on_crit: 'disarm',
    },
},
]);
