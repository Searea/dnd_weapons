EQUIPMENT = EQUIPMENT.concat([
{
    id: 'bite',
    categories: [
        'natural--basic',
    ],
    traits: {
    },
    more_traits: {
        extra_feats: [
            'poison', // Bonus DC increase? or just make it more likely for monsters?
            'improved grab',
                'blood drain (pin)', // Constitution
                'inject (pin)', // Venom
            'swallow',
                'horrific gorging', // upgrade of swallow
                'fast swallow',
            'snatch',

            'attach',
                'latching horror', // Upgrade to attach
        ],
    },
    stats: {
        damage: '1d6',
    },
    damages: {
        slashing: true,
        bludgeoning: true,
        piercing: true,
        multi_dmg: true,
    },
    aliases: {
        'tooth': '',
    },
},
{
    // Like Sickles?
    id: 'claw',
    categories: [
        'natural--martial',
    ],
    traits: {
        paired: true,
    },
    more_traits: {
        extra_feats: [
            'rend',
                'cooperative rend',
                'great rend',
            'rake (grapple)', // Note: "Grapple" attacks just allow the orignal attack to be used in grapple
        ],
        blade: true,
    },
    stats: {
        damage: '1d4',
    },
    damages: {
        slashing: true,
        piercing: true,
        multi_dmg: true,
    },
    aliases: {
    },
},
{
    // Like Spears? or Pick
    id: 'gore',
    categories: [
        'natural--martial',
    ],
    traits: {
        charging: true, // x2 damage on charge
    },
    more_traits: {
        extra_feats: [
            'impaling charge', // Free grapple if charge hits
        ],
    },
    stats: {
        damage: '1d6',
    },
    damages: {
        piercing: true,
    },
    aliases: {
        'horn': '',
        'tusk': '',
    },
},
{
    // Like Hammers?
    id: 'slam',
    categories: [
        'natural--martial',
    ],
    traits: {
    },
    more_traits: {
        extra_feats: [
            'engulf',
            'constrict (grapple)', // Note: "Grapple" attacks just allow the orignal attack to be used in grapple
            'smother',
            'strangle', // Merge with Smother?
        ],
        shove: 'crit?',
    },
    stats: {
        damage: '1d4',
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'slap': '',
    },
},
{
    // Like Spears? or Pick
    id: 'sting',
    categories: [
        'natural--martial',
    ],
    traits: {
    },
    more_traits: {
        extra_feats: [
            'poison', // Bonus DC increase? or just make it more likely for monsters?
        ],
        blade: true,
    },
    stats: {
        damage: '1d4',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    id: 'unarmed',
    categories: [
        'natural--martial',
    ],
    traits: {
    },
    more_traits: {
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
    },
},
//---------------------------
{
    id: 'pincer',
    categories: [
        'natural--exotic',
    ],
    traits: {
        primary: true,
        paired: true,
        ap: 'heavy',
    },
    more_traits: {
        extra_feats: [
            'sonic cavitation', // Sonic Damage, + Stun
        ],
    },
    stats: {
        damage: '1d6',
    },
    damages: {
        piercing: true,
    },
    aliases: {
    },
},
{
    // Like Whips? or Chains?
    id: 'tail_slap',
    categories: [
        'natural--exotic',
    ],
    traits: {
        secondary: true,
    },
    more_traits: {
        trip: true, // On crit?
        // like a whip? provokes, but great range?
        // Like a chain? better reach?
        extra_feats: [
            'iron_tail', // Increases damage
            'constrict (grapple)', // Note: "Grapple" attacks just allow the orignal attack to be used in grapple
            'smother',
            'strangle',
        ],
    },
    stats: {
        damage: '1d6',
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
    },
},
{
    // Like Fans?
    id: 'wing',
    categories: [
        'natural--exotic',
    ],
    traits: {
        paired: true,
        secondary: true,
    },
    more_traits: {
        extra_feats: [
            'armoured_wings', // Wings act as Shield, Block (X)
        ],
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
    },
},
{
    // Like Whips? Chains?
    id: 'tentacle',
    categories: [
        'natural--exotic',
    ],
    traits: {
        secondary: true,
    },
    more_traits: {
        unlimited: true,
        extra_feats: [
            'improved grab?',
            'constrict (grapple)', // Note: "Grapple" attacks just allow the orignal attack to be used in grapple
            'attach',
                'latching horror', // Upgrade to attach
            'smother',
            'strangle',
        ],
    },
    stats: {
        damage: '1d4',
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
    },
},
{
    // Like Sickles?
    id: 'talon',
    categories: [
        'natural--exotic',
    ],
    traits: {
        paired: true,
        secondary: true,
    },
    more_traits: {
        extra_feats: [
            'improved grab',
            'attach',
                'latching horror', // Upgrade to attach
            'snatch',
        ],
    },
    stats: {
        damage: '1d4',
    },
    damages: {
        slashing: true,
    },
    aliases: {
    },
},
{
    // Like Hammers?
    id: 'kick',
    categories: [
        'natural--exotic',
    ],
    traits: {
        secondary: true,
    },
    more_traits: {
        shove: true, // On crit?
        trample: true, // on crit?
        extra_feats: [
            'stunning_blow', // Stun on crit?
        ],
    },
    stats: {
        damage: '1d4',
    },
    damages: {
        bludgeoning: true,
    },
    aliases: {
        'hooves': '',
    },
},
]);
