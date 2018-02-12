//---------------------------------------------
// API


function highlight(data) {
    var $elems = findBy(data)

    if (data.reset) {
        data.clear = true;
        data.show = true;
    }

    if (data.clear) {
        // Clear all the colours
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

    } else if (data.show) {

    }

    // Highlight
    $elems.css({
        background: data.colour,
    });

    return $elems;
}

function clear() {
    highlight({clear: true})
}

function reset() {
    highlight({reset: true})
}

function showConnections() {
    $('body').removeClass('hideConnections');
    $('.relation').css({display: ''});
}
function hideConnections() {
    $('body').addClass('hideConnections');
    $('.relation').css({display: 'none'});
}


//---------------------------------------------

// Note: http://musclesoft.github.io/jquery-connections/
//       https://github.com/musclesoft/jquery-connections/wiki/API


onstart = function() {
    highlight({colour: '90ee90', trait: 'bludgeoning'});
    highlight({colour: 'ffa07a', trait: 'piercing'});
    highlight({colour: 'add8e6', trait: 'slashing'});
}


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
        colour = parseInt(match[1], 10).toString(16) + parseInt(match[2], 10).toString(16) + parseInt(match[3], 10).toString(16);
    }

    if (colour.length == 3) {
        return colour[0].repeat(2) + colour[1].repeat(2) + colour[2].repeat(2);
    } else if (colour.length == 4) {
        // Ignore the alpha
        return colour[0].repeat(2) + colour[1].repeat(2) + colour[2].repeat(2);
    } else if (colour.length == 6) {
        return colour;
    } else if (colour.length == 8) {
        return colour.substr(0, 6);
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

    var gradient;
    if (colours.length == 1) {
        gradient = `#${colours[0]}70`;
    } else if (colours.length == 2) {
        gradient = `linear-gradient(80deg, #${colours[0]}70 45%, #${colours[1]}70 55%)`;
    } else if (colours.length == 3) {
        gradient = `linear-gradient(80deg, #${colours[0]}70 30%, #${colours[1]}70 35%, #${colours[1]}70 65%, #${colours[2]}70 70%)`;
    }

    $elem.attr('data-colours', _.join(colours, ' '));
    $elem.css({
        background: gradient,
    });
}

function findBy(data) {
    var $all = $('.equipment');

    //---------------------------
    // Traits
    if (data.trait) {
        $all = $all.filter(`[data-traits*="${data.trait}"]`);
    }
    if (data.trait_group) {
        $all = $all.filter(`[data-trait-groups*="${data.trait_group}"]`);
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

    var connections = [];

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

        id_mapping[equipment.id] = equipment;
        equipment.outputs = {};

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
        _.each(equipment.all_traits, (value, key) => {

            var group = findGroup(key);
            if (!group) {
                return;
            }
            var colour = TRAIT_GROUPINGS[group].colour;

            equipment.trait_groups[group] = colour;
        });
    });


    // Second Pass: actually create the data
    EQUIPMENT.map((equipment) => {
        if (!hidden_items[equipment.id] && only_show) {
            return;
        } else if (hidden_items[equipment.id] && only_show) {
            delete hidden_items[equipment.id];
        } else if (hidden_items[equipment.id]) {
            delete hidden_items[equipment.id];
            return;
        }

        var is_dup = false;

        // Setup the Equipment in each category
        equipment.categories.map((category) => {
            if (is_dup) {
                // return;
            } else {
                is_dup = true;
            }

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
            });

            equipment.outputs[category] = $source;

            // Create the Deep mapping
            var listing = _.get(category_mapping, keys);
            if (!listing) {
                listing = [];
                _.set(category_mapping, keys, listing);
            }
            listing.push(equipment);

            // prep the connections
            if (!equipment.upgrades) {
                return;
            }

            equipment.upgrades.map((upgrade) => {
                connections.push({
                    $source,
                    from_id: equipment.id,
                    keys,
                    to_id: upgrade,
                });
            });
        });
    });

    // Ensure all hidden items were removed
    if (Object.keys(hidden_items).length) {
        throw 'Hidden Items Left: ' + Object.keys(hidden_items);
    }


    // Create the connections

    var tree = [];

    connections.map((connection) => {
        var from = id_mapping[connection.from_id];
        var to = id_mapping[connection.to_id];

        if (!to) {
            throw `Missing Upgrade ${connection.from_id} >> ${connection.to_id}`;
        }

        var $source = connection.$source;

        _.map(to.outputs, ($target, category) => {
            var keys  = _.split(category, '-');
            if (keys[0] != connection.keys[0]) {
                // This is too big of a link
                return;
            }

            var sameLevel = false;
            if (keys[2] == 'basic') {
                sameLevel = true;
            }

            // Yay! make a connection
            tree.push({
                from: $source,
                to: $target,
                sameLevel: sameLevel,
            })
            connectEquipment($source, $target, sameLevel);
        });
    });

    onstart();
}

function connectEquipment($start, $end, sameLevel) {
    var $endMagnets;
    if (sameLevel) {
        $endMagnets = $end.find('.magnet-right')
    } else {
        $endMagnets = $end.find('.magnet-left')
    }

    var $startMagnets = $start.find('.magnet-right');

    // Now find the first unused magnet
    var $endMagnet = $endMagnets.find('.magnet:not(.target)');
    if ($endMagnet.length == 0) {
        // Grab the middle one then...
        $endMagnet = $endMagnets.second();
    } else {
        // Grab the first unused
        $endMagnet = $endMagnet.first();
    }

    // Now find the first unused magnet
    var $startMagnet = $startMagnets.find('.magnet:not(.target)');
    if ($startMagnet.length == 0) {
        // Grab the middle one then...
        $startMagnet = $($startMagnets[1]);
    } else {
        // Grab the first unused
        $startMagnet = $startMagnet.first();
    }

    $endMagnet.addClass('target');
    $startMagnet.addClass('target');

    $startMagnet.connections({
        to: $endMagnet,
        class: 'relation',
    });
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


    // $elem.draggable({
    //     tolerance: "pointer",
    //     helper: 'clone',
    //     start: function startDrag(event, ui) {
    //     var $source = $(this);
    //     $source.addClass('is-moving');
    //     },
    //     stop: function startDrag(event, ui) {
    //     var $source = $(this);
    //     $source.removeClass('is-moving');
    //     }
    // });
    var $category_group = $(`[data-category=${category}`);
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
    var $groups = $elem.find('.group')

    // $groups.droppable({
    //     cursor: 'move',
    //     axis: 'x',
    //     drop: function drop(event, ui) {
    //         var $origEquip = ui.draggable;
    //         var $target = $(event.target);
    //         var $source = $origEquip.parents('.group').first();

    //         var sourceCategory = $source.attr('data-category');
    //         var targetCategory = $target.attr('data-category');

    //         // Ensure moving between categories does nothing (just sorts)
    //         if (sourceCategory === targetCategory) {
    //             return;
    //         }

    //         // Also ensure we don't create duplicates

    //         var equipment_id = $origEquip.attr('data-equipment')
    //         var equipment = id_mapping[equipment_id];

    //         var targetArray = _.get(category_mapping, _.split(targetCategory, '-'));

    //         // Update the actual Data
    //         if (!isCopying) {
    //             _.remove(equipment.categories, sourceCategory);
    //             var sourceArray = _.get(category_mapping, _.split(sourceCategory, '-'));
    //             _.remove(sourceArray, equipment);
    //         }
    //         _.add(equipment.categories, targetCategory);
    //         targetArray.push(equipment);

    //         // Now update the visible data, replacing the old ones
    //         $origEquip.remove();

    //         if (isCopying) {
    //             createEquipment({
    //                 equipment,
    //                 category: sourceCategory,
    //             });
    //         }
    //         createEquipment({
    //             equipment,
    //             category: targetCategory,
    //         });
    //     },
    // });

    $elem.data('equipment', data);
    $('body').append($elem);

    return $elem;

}







//---------------------------------------------
// API























