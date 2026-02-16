# ZRoute Documentation

### Theoretical:

System should support routing based on price, train times, movement speed, expected delays, accessibility

### Practical:

System could be node based with accumulation of route flags, prices, times etc

Structure:

1. Locale
   - Contains Stations
   - Contains Lines / Paths / Routes / Ways (Name TBD)
   - Has Edge nodes for locale transfers
   - Has identifiers and geo borders
   - Has country ID

2. Station
   - Contains Entrances/Exit nodes
   - Contains Fare Zones
   - Has identifiers

3. Zone (Not Fare zone, physical area)
   - Is associated with collection of nodes that are accessible without leaving a zone. Ie fare zone at X station
   - Is limited to a single station, usually bounded by fare gates

4. Path Node
   - Has identifying properties
   - Is the core of the system
   - Its presence allows for inferences about the containing structure, ie stairs node in station may mean not accessible.
   - Has a traverse callback method that is given the existing cumulative route and can offer an append. Ie if moving into a fare zone the fare gate node would be able to see the entire route to that point and would know if it needed to say "cost = fare" or "cost = transfer" (approximation)

5. Route
   - Contains an ordered list of path nodes with traverse timestamps

# SCRATCHPAD

Routes are classes that are instantiated with limitations, they self path from A->B and resolve to traversable collections of subnodes

# SCRATCHPAD ENDS
