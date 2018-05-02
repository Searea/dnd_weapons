const TRAIT_GROUPINGS = {
defensive: {
    // colour: 'green',
    traits: [
    'block',
    'block_blades',
    'shield_blades',
    ],
},
penalties: {
    colour: 'black',
    traits: [
    'slow_recovery',
    'unbalancing',
    'fragile',
    'heavy', // Simply means it weights a lot, so you can't carry much
    'long',
    'improvised',
    'provoking',
    'unthreatening',
    'massive',
    ],
},
specialized: {
    colour: 'orange',
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
    colour: '',
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
    // colour: 'violet',
    traits: [
    'ap',
    'ap_shield',
    'ap_flesh',
    'breaching',
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
ranged: {
    colour: '',
    traits: [
    'projectile',
    'thrown',
    'provoking',
    'ammo',
    'ranged',
    ],
},

skills: {
    colour: '#7090F0',
    traits: [
    'hidden',
    'intimidating',
    'climb',
    'skilled_climb',
    'skilled_rope',
    'rope',
    'breaching',
    ],
},
stun: {
    colour: '',
    traits: [
        'subdual',
        'subdual_optional',
    ],
},

maneuver: {
    // colour: 'skyblue',
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
    'knockback',

    'on_crit_disarm',
    'on_crit_feint',
    'on_crit_grapple',
    'on_crit_cleave',
    'on_crit_pull',
    'on_crit_distracting',
    'on_crit_knockback'
    ],
},
};
