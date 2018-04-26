
// API helpdocs duplicated here
/**
 * highlight({ ... });
 *
 * # Effects:
 * options.reset    Tries to clear colours and show things
 * options.clear    Clears colours
 * options.show     Shows things
 * options.hide     Hides things
 * options.colour   Sets the color (3 digit hex, 4 digit hex with alpha, or 6-8 digit hex codes) no need for the #
                    e.g. colour: '335', 'FF4', '99F8', 'FEFE90'
 *
 * Selectors:
 * options.trait:   a specific trait it must have (only one at a time right now, no AND/OR)
 * options.trait_group:   a specific trait group (See traits.data.js). These are usually represented by a small coloured dot as well
 *
 * options.is_main     Whether this is one of the main weapons
 * options.is_strange  Whether this is one of the strange weapons
 * options.is_dup      Selects all the second copies of a duplicate weapon (true: selects all copies, false: selects all primaries)
 *
 * options.category     First category key
 * options.subcategory  Second Category key
 * options.difficulty   Final Categoru Key (martial, basic, exotic)
 *
 * options.filter       Runs a custom filter function on the equipment data
 *
 */

onstart = function() {
    highlight({reset: true});

    // Damage Types
    // highlight({colour: '90ee90', trait: 'bludgeoning'});
    // highlight({colour: 'ffa07a', trait: 'piercing'});
    // highlight({colour: 'add8e6', trait: 'slashing'});

    highlight({colour: 'green', trait_group: 'defensive'})
    highlight({colour: 'violet', trait_group: 'ap'})
    highlight({colour: 'skyblue', trait_group: 'maneuver'})

    // Damage
    // highlight({colour: 'FFDDDD', damage: '1d4'})
    // highlight({colour: 'FFAA88', damage: '1d6'})
    // highlight({colour: 'FF4466', damage: '1d8'})
    // highlight({colour: 'FF4466', damage: '2d4'})
    // highlight({colour: 'FF0000', damage: '1d10'})
    // highlight({colour: 'FF0000', damage: '1d12'})
    // highlight({colour: 'FF0000', damage: '2d6'})


    // Work with the basic weapons
    // Light, 1H, 2H
    // highlight({
    //     hide: true,
    //     is_main: false,
    // });
    hideConnections();
}


