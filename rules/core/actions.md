# Time in Combat


!defn_table!
turn: a specific characters time to go, each creature involved will usually get one `turn` in a `round`
    Some rare creatures are given multiple `turns` in one `round`. Some rare abilities will grant you a `turn` in the middle of another `round`
round: a `round` involves approximatelly 6 seconds, with every creature taking a turn.






## Actions {#action}

For a single round a character gets the following actions, most of which can only be used on their turn.

 * 1 [Full-Round Action](action:full-round) ([Standard](action:standard) + [Move](action:move))
 * 1 [Swift Action](action:swift)
 * A reasonable amount of [Free Actions](action:free)

All actions can be downgraded, using more time to do them.

!defn_table!
Free:       ∞
Immediate:  -
Swift:      -
Move:       Swift
Standard:   Move
Full-Round: Standard + Move
Surprise:   Standard
Attack:     -

Some actions have a specific name (listed below) as those are the most commonly used ones. However some abilities take longer to do, in that case they are usually listed in `rounds`. An action which takes 1 round starts right away, and is finished the next time the character acts,

!alert! info
     As long actions can sometimes be started in the middle of your turn (rarely), if you've done 1 move action then begin a 1 round action it is completed at the beginning of your next turn + 1 move action
!endalert!


### Surprise {#actions:surprise}

TODO: This should be a condition (Lose a Movement Action)

When surprised a player no longer gets all their actions, being able to react only with a single standard action. (Remember Standard actions can be traded down)

 * 1 [Standard](action:standard) action
 * 1 [Swift Action](action:swift)
 * A reasonable amount of [Free Actions](action:free)

However they can still start a Full-Round action as they would normally (finishing its resolution next round)



### Reaction {#action:reaction}

A reaction is used in response to an opponent's action. Usually trying to oppose them in some way

You can gain bonus reactions using [Combat Reflexes](feat:combat-reflexes)

If the character is unaware of an action, it cannot trigger a reaction. (This includes surprise, flatfooted, invisibility, helpless, etc)

* [Attack of Opportunity](attack:provoke)
* [Counterspelling](magic:counterspell)
* [Freeform Initiative](initiative:freeform)
* [Immediate Actions](action:immediate) (costs both a reaction and a swift action)

!alert! info
    Reactions are often called "Attacks of Opportunity" (AoO) in D&D 3.5, thus anything which uses, grants, or is an AoO is a reaction.
    In this text AoO refers to a specific type of reaction, when a character performs an action in combat that creates an opening (provokes)
!endalert!

!alert! info
    In 5e texts, any abilities which take a "Reaction" would usually be this type of action. However some of them are better converted to [Immediate Actions](action:immediate).
    Finally some abilities are meant to act more like a counter, expending no time. Then they are better converted as "free" Reactions (not costing a reaction to use)
!endalert!


### Move Action {#action:move}

An non-offensive action, physically moving around, pulling out weapons, grabbing things of your belt, etc


### Draw Action {#action:draw}

A type of Move action which is used to draw a weapon or tool. Certain Locations (Belt, Sheathes, etc) allow you to pull items out as a Draw Action (Listed in the item Description)

If you have at least [BaB](char:BaB) +1 or higher you can perform a Draw Action as part of any [movement](action:movement), or as part of an [Attack](action:attack) for ranged weapons


#### Sheathe Action {#action:sheathe}

A type of Move action which is used to put away a weapon or tool. Unless otherwise specified: Any location which allows you to perform a [Draw Action](action:draw) requires a Sheathe action to put an item back in.


### Movement {#action:movement}

Consuming a [Move Action](action:move) you can gain your Speed worth of movement, which can then be spent on any movement actions: walking, swimming, jumping, flying, crawling, etc. See the [Combat Section](combat:move)



### Standard Action {#action:standard}

The most common action usually of an offensive nature. Takes slightly longer than a movement action, meaning you can usually only do 1 major thing per turn.



### Full-Round Action {#action:full-round}

Any action which requires an entire turn to complete.

!alert! warning
    This is poorly named, because unlike a 1 Round action a Full-Round action only takes 1 Turn. Its better named a **Full-Turn Action**
!endalert!



### Attack Action {#action:attack}

An umbrella category for offensive actions, this includes things like: attacking with a weapons, or any [Maneuvers](combat:maneuvers) (grappling, pushing, tripping, etc).

 * using a [Standard Action](action:standard) (Standard Attack) to get your primary attack
 * using a [Full Round](action:full-round) (Full Attack) to gain multiple attacks,
 * as a [Reaction](action:reaction) when an opponent provokes an [Attack of Opportunity](combat:aoo)
 * using both weapons while [Two-Weapon-Fighting](combat:twf)


!alert! warning
    Most ways of getting another attack action have an increasing penalty to further attacks. All Attacking actions retain this penalty, usually affecting the first d20 roll required.
!endalert!



### Swift Action {#action:swift}

A swift action consumes a very small amount of time, but represents a larger expenditure of effort than a free action. You can perform one swift action per turn without affecting your ability to perform other actions.

You can perform one swift action per turn.

!alert! info
    In 5e texts, any abilities which take a "Bonus Action" would usually be converted to Swift Actions.
!endalert!

#### Immediate Action {#action:immediate}

You can use your swift action even when its not your turn. Abilities which can be used in such a manner will be labelled as "Immediate Actions".

If you use an immediate ability on your turn, it acts like a [swift action](action:swift). Otherwise it also requires a [Reaction](action:reaction) to use on your opponent's turn.



### Free Action {#action:free}

Free actions don't take any time at all, though there may be limits to the number of free actions you can perform in a turn. Free actions rarely incur attacks of opportunity. Some common free actions are described below.

Free actions can be used before and after any other actions, even during a [Reaction](action:reaction)


