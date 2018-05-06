//---------------------------------------------
// API

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
function highlight(data, $elems) {
    var $elems = findBy(data, $elems)

    if (data.reset) {
        data.clear = true;
        data.show = true;
    }

    if (data.clear) {
        // Clear all the colours
        $elems.each((i, elem) => {
            clearColours($(elem));
        })
    }

    if (data.colour === true) {
        // Default Colour
        data.colour = 'FF0';
    } else if (data.colour) {
        $elems.each((i, elem) => {
            addColour($(elem), data.colour);
        })
    }


    if (data.hide) {
        $elems.hide();
    } else if (data.show) {
        $elems.show();
    }

    return $elems;
}

// Jquery Plugin
$.fn.highlight = function(data) {
    return highlight(data, $(this));
};

function clear() {
    highlight({clear: true})
}

function reset() {
    highlight({reset: true})
}


//---------------------------------------------

function intToDigitHex(string, digits) {
    return parseInt(string, 10).toString(16).padStart(digits, "0");
}

// Note: http://musclesoft.github.io/jquery-connections/
//       https://github.com/musclesoft/jquery-connections/wiki/API
function expandColour(colour) {
    if (!colour) {
        colour = 'FF0';
    }

    // Convert named colours
    if (!colour.match(/[0-9a-fA-F]{3,8}/)) {
        var $probe = $('<div>').css({ color: colour, display: 'none', });
        $('body').append($probe);

        var rgba = $probe.css('color');
        $probe.remove();
        if (!rgba) {
            throw 'Invalid Colour';
        }

        var match = rgba.match(/rgba?\(([0-9]+), ([0-9]+), ([0-9]+)(?:, ([0-9]+))?\)/);
        if (!match) {
            throw `Unknown colour result "${colour}"" >> "${rgba}"`;
        }

        // Ignore the alpha
        colour = intToDigitHex(match[1], 2) + intToDigitHex(match[2], 2) + intToDigitHex(match[3], 2);
    }

    if (colour.length == 3) {
        return colour[0].repeat(2) + colour[1].repeat(2) + colour[2].repeat(2);
    } else if (colour.length == 4) {
        // Ignore the alpha
        return colour[0].repeat(2) + colour[1].repeat(2) + colour[2].repeat(2);
    } else if (colour.length == 6) {
        return colour;
    } else if (colour.length == 8) {
        return colour;
    }
}

function addColour($elem, colour) {
    var colours = $elem.attr('data-colours');
    colours = _.compact(_.split(colours, ' '));

    colours.unshift(expandColour(colour));
    colours = _.uniq(colours);

    // Max number of highlights
    if (colours.length >= 4) {
        colours = colours.slice(0, 3);
    }

    // Add Opacity(Alpha) if it doesn;t have it
    use_colours = _.map(colours, (colour) => {
        if (colour.length < 8) {
            return colour + '85';
        }
        return colour;
    });

    var gradient;
    if (use_colours.length == 1) {
        gradient = `#${use_colours[0]}`;
    } else if (use_colours.length == 2) {
        gradient = `linear-gradient(80deg, #${use_colours[0]} 45%, #${use_colours[1]} 55%)`;
    } else if (use_colours.length == 3) {
        gradient = `linear-gradient(80deg, #${use_colours[0]} 30%, #${use_colours[1]} 35%, #${use_colours[1]} 65%, #${use_colours[2]} 70%)`;
    }

    $elem.attr('data-colours', _.join(colours, ' '));
    $elem.css({
        background: gradient,
    });
}

function clearColours($elem) {
    $elem.attr('data-colours', '');
    $elem.css({
        background: '',
    });
}

function findBy(data, $elems) {
    var $all;
    if ($elems) {
        $all = $elems;
    } else {
        $all = $('.equipment');
    }

    //---------------------------
    // Traits
    if (data.trait) {
        $all = $all.filter(`[data-traits*=" ${data.trait} "]`);
    }
    if (data.trait_group) {
        $all = $all.filter(`[data-trait-groups*=" ${data.trait_group} "]`);
    }
    if (data.is_main === true) {
        $all = $all.filter(`.equipment-main`);
    } else if (data.is_main === false) {
        $all = $all.not(`.equipment-main`);
    }
    if (data.is_dup === true) {
        $all = $all.filter(`.equipment-dup`);
    } else if (data.is_dup === false) {
        $all = $all.not(`.equipment-dup`);
    }
    if (data.is_strange === true) {
        $all = $all.filter(`[data-traits*="strange"]`);
    } else if (data.is_strange === false) {
        $all = $all.not(`[data-traits*="strange"]`);
    }

    //---------------------------
    // Stats
    if (data.damage) {
        $all = $all.filter(`[data-damage*=" ${data.damage} "]`);
    }

    //--------------------
    // Which weapon Groups
    if (data.category) {
        $all = $all.filter(`[data-parent-category="${data.category}"]`);
    }
    if (data.subcategory) {
        $all = $all.filter(`[data-parent-subcategory="${data.subcategory}"]`);
    }
    if (data.difficulty) {
        $all = $all.filter(`[data-parent-difficulty="${data.difficulty}"]`);
    }

    if (data.filter) {
        $all = $all.filter((index, elem) => {
            $elem = $(elem);

            // Run the user filter
            return data.filter(getEquipmentData($elem));
        })
    }


    return $all;
}


function getEquipmentData($elem) {
    var id = $elem.attr('data-equipment');
    var category = $elem.attr('data-parent-category')
    var subcategory = $elem.attr('data-parent-subcategory')
    var difficulty = $elem.attr('data-parent-difficulty')

    return {
        category,
        subcategory,
        difficulty,
        equipment: EQUIPMENT[id],
        $elem,
    };
}









function findGroup(trait) {
    return _.findKey(TRAIT_GROUPINGS, (data, group) => {
        return data.traits.includes(trait);
    });
}









$(init);

function init() {
    isCopying = false;

    function onCtrl(event) {
        isCopying = event.altKey;

        if (isCopying) {
            $('body').addClass('is-copying');
        } else {
            $('body').removeClass('is-copying');
        }
    }

    $(document).keyup(onCtrl);
    $(document).keydown(onCtrl);

    equipmentTemplate = _.template($("#equipmentTemplate").html());
    categoryTemplate = _.template($("#categoryTemplate").html());

    CATEGORIES.map((category) => {
        createCategory(category);
    })

    // Create a full category mapping
    category_mapping = {};
    id_mapping = {};
    EQUIPMENT.map((equipment) => {
        if (!equipment.name) {
            equipment.name = equipment.id;
        }

        if (equipment.variant) {
            var basis = _.find(EQUIPMENT, (candidate) => {
                return candidate.id == equipment.variant;
            });
            if (!basis) {
                throw `Cannot find original for variant ${equipment.id} >> ${equipment.variant}`;
            }

            // Update all the fields that haven't been overwritten
            // Warning! avoid circular references, don't copy over the variants
            _.defaults(equipment, _.omit(basis, [
                'variants',
            ]));

            // Mark the source as having a variant
            if (!basis.variants) {
                basis.variants = [];
            }
            basis.variants.push(equipment)
            basis.hasDups = true;
        }

        if (equipment.stats === undefined) {
            equipment.stats = {}
        }

        equipment.stats.crit = equipment.stats.crit || 20;
        equipment.stats.crit_mult = equipment.stats.crit_mult || 1;

        if (equipment.stats.on_crit) {
            var crit_uses = equipment.stats.on_crit.split('/');
            _.each(crit_uses, (use) => {
                equipment.more_traits['on_crit_' + use] = true;
            })
        }

        id_mapping[equipment.id] = equipment;

        var real_categories = _.filter(equipment.categories, (full_category) => {
            var [cat_key, unused, unused] = _.split(full_category, '-');
            var category = _.find(CATEGORIES, (data) => data.id == cat_key);
            if (!category) {
                throw `Category not Found: ${cat_key} from ${equipment.id}`;
            }

            return !category.secondary;
        });


        // Base formatting
        _.defaults(equipment, {
            name: equipment.id,
            // Main traits, visible right away
            traits: {},
            // Hidden traits
            more_traits: {},
            // Damage types
            damages: {},
            aliases: {},

            // Specials
            variant: false,
            variants: [],
        })
        equipment.hasDups = equipment.hasDups || real_categories.length > 1 || !!equipment.variant;

        equipment.all_traits = _.extend({}, equipment.more_traits, equipment.traits, equipment.damages);

        // Figure out the trait groups this belongs to
        equipment.trait_groups = {};
        _.each(TRAIT_GROUPINGS, (trait_group, trait_group_name) => {
            var intersection = _.intersection(trait_group.traits, Object.keys(equipment.all_traits));
            if (intersection.length >= 1) {
                equipment.trait_groups[trait_group_name] = trait_group.colour;
            }
        })


    });


    // Second Pass: actually create the data
    EQUIPMENT.map((equipment) => {
        var is_main = false;
        if (main_weapons[equipment.id]) {
            // Count which weapons we've already checked off (for errors)
            delete main_weapons[equipment.id];
            is_main = true;
        }

        var is_dup = false;

        // Setup the Equipment in each category
        equipment.categories.map((category) => {
            var keys  = _.split(category, '-');

            name = equipment['name'];

            names = equipment['visible_names'];
            if (names && names[keys[0]]) {
                name = `${names[keys[0]]} (${name})`;
            }

            // Create the actual element we're linking to
            var $source = createEquipment({
                category,
                equipment,
                name,
                is_dup,
                is_main,
            });

            // Mark the next copy of the weapon as a duplicate
            if (!is_dup) {
                is_dup = true;
            }
        });
    });

    // Ensure all hidden items were removed
    if (Object.keys(main_weapons).length) {
        throw 'Main Items Left: ' + Object.keys(main_weapons);
    }

    onstart();
}

function createEquipment(data) {
    var base_equipment = data.equipment;
    var category = data.category;

    var [cat_key, sub_key, group_key] = _.split(category, '-');

    var $elem = $(equipmentTemplate(_.extend({
        category: cat_key,
        subcategory: sub_key,
        difficulty: group_key,
        visible_name: data.name,
        is_dup: data.is_dup,
        is_main: data.is_main,
        stats: data.equipment.stats,
    }, base_equipment)));

    $elem.on('click', function onClick(event) {
        var $info =$elem.find('.info')
        if ($info.hasClass('hide')) {
            $info.toggleClass('hide');
        } else if (!$info.hasClass('expand')) {
            $info.toggleClass('expand');
        } else {
            $info.toggleClass('expand hide');
        }
    });


    var $category_group = $(`[data-category=${category}]`);
    if (!$category_group.length) {
        throw `Invalid Category (${category}) for equipment (${base_equipment.id})`;
    }

    $category_group.append($elem);

    return $elem;
}

function createCategory(data) {
    if (!data.title) {
        data.title = data.id;
    }

    var $elem = $(categoryTemplate(data));

    $elem.data('equipment', data);
    $('body').append($elem);

    return $elem;

}










