const TRAIT_GROUPINGS = {
defensive: {
    colour: 'green',
    traits: [
    'block',
    ],
},
penalties: {
    colour: 'red',
    traits: [
    'slow_recovery',
    'unbalancing',
    'fragile',
    'heavy', // Simply means it weights a lot, so you can't carry much
    'long',
    'improvised',
    ],
},
requirements: {
    colour: 'black',
    traits: [
    'massive',
    ],
},
specialized: {
    colour: 'darkslategray',
    traits: [
    'specialized',
    'brace',
    'charging',
    'dismount',
    'subdual',
    'subdual_optional',
    ],
},

offensive: {
    colour: 'orange',
    traits: [
    'brutal',
    'deadly',
    'hard_hitting',
    'wounding',
    // Ranges
    'powerful',
    ],
},
ap: {
    colour: 'violet',
    traits: [
    'ap',
    'ap_shield',
    'ap_flesh',
    ],
},
type: {
    colour: '',
    traits: [
    'finesse',
    'melee',
    'projectile',
    'thrown',
    'reach',
    'double',
    'light',
    'glove',
    'versatile',
    'unthreatening',
    ],
},

skills: {
    colour: 'powderblue',
    traits: [
    'hidden',
    'performance',
    'intimidating',
    ],
},

maneuver: {
    colour: 'skyblue',
    traits: [
    'distracting',

    'vs_environment',
    'plant_cutter',
    'entangle',
    'trip',
    'hooked',
    'distract',
    'grapple',
    'locking',
    'disarm',
    'sunder',
    'battering',

    'on_crit_disarm',
    'on_crit_feint',
    'on_crit_grapple',
    'on_crit_cleave',
    'on_crit_pull',
    'on_crit_distracting',
    ],
},
};
