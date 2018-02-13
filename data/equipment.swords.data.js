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
},
{
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
},

//-----------------------------------
// Special
{
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
},
]);
