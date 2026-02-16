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

3. Zone
   - Is associated with collection of nodes that are accessible without leaving a zone. Ie fare zone at X station
   - Is limited to a single station, usually bounded by fare gates

4. Path Node

# SCRATCHPAD

Routes are classes that are instantiated with limitations, they self path from A->B and resolve to traversable collections of subnodes

# SCRATCHPAD ENDS
