// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    
// @linked    []
// ==/EMEVD==

//----------------------------------------------
// Constructor
//----------------------------------------------
Event(0, Default, function() {
    //-----------------------------------
    // Run for Host and Clients
    //-----------------------------------
    InitializeEvent(0, 200, 0);
    InitializeEvent(0, 230, 0); // Set Eclipse ceremonies
    InitializeEvent(0, 9570, 4500, 3740); // Forked Pale Tongue
    InitializeEvent(1, 9570, 4510, 3750); // Proof of a Concord Well Kept
    
    // Trackers
    InitializeEvent(0, 20003, 0); // No Hit State
    InitializeEvent(0, 20004, 0); // Deathless Run State
    InitializeEvent(0, 20005, 0); // Hitless Run State
    InitializeEvent(0, 20006, 0); // Baseline SpEffects
    
    // Covenant
    InitializeEvent(0, 20007, 0); // Covenant Material Drops - 1
    InitializeEvent(0, 20008, 0); // Covenant Material Drops - 2
    InitializeEvent(0, 20009, 0); // Covenant Consumable Drops
    
    // Masteries
    InitializeEvent(0, 20080, 0); // Masteries
    InitializeEvent(0, 20081, 0); // Masteries - Reset
    
    //--------------------
    // Curses - Add Player Effects
    //--------------------
    InitializeEvent(0, 20010, 25000400, 250001000, 250001010); // Curse of Pride - 10%
    InitializeEvent(1, 20010, 25000401, 250001000, 250001011); // Curse of Pride - 20%
    InitializeEvent(2, 20010, 25000402, 250001000, 250001012); // Curse of Pride - 30%
    InitializeEvent(3, 20010, 25000403, 250001000, 250001013); // Curse of Pride - 40%
    InitializeEvent(4, 20010, 25000404, 250001000, 250001014); // Curse of Pride - 50%
    InitializeEvent(5, 20010, 25000405, 250001000, 250001015); // Curse of Pride - 60%
    InitializeEvent(6, 20010, 25000406, 250001000, 250001016); // Curse of Pride - 70%
    InitializeEvent(7, 20010, 25000407, 250001000, 250001017); // Curse of Pride - 80%
    InitializeEvent(8, 20010, 25000408, 250001000, 250001018); // Curse of Pride - 90%
    InitializeEvent(9, 20010, 25000409, 250001000, 250001019); // Curse of Pride - 100%
    
    InitializeEvent(10, 20010, 25000410, 250001100, 250001110); // Curse of Fortitude - 5%
    InitializeEvent(11, 20010, 25000411, 250001100, 250001111); // Curse of Fortitude - 10%
    InitializeEvent(12, 20010, 25000412, 250001100, 250001112); // Curse of Fortitude - 15%
    InitializeEvent(13, 20010, 25000413, 250001100, 250001113); // Curse of Fortitude - 20%
    InitializeEvent(14, 20010, 25000414, 250001100, 250001114); // Curse of Fortitude - 25%
    InitializeEvent(15, 20010, 25000415, 250001100, 250001115); // Curse of Fortitude - 30%
    InitializeEvent(16, 20010, 25000416, 250001100, 250001116); // Curse of Fortitude - 35%
    InitializeEvent(17, 20010, 25000417, 250001100, 250001117); // Curse of Fortitude - 40%
    InitializeEvent(18, 20010, 25000418, 250001100, 250001118); // Curse of Fortitude - 45%
    InitializeEvent(19, 20010, 25000419, 250001100, 250001119); // Curse of Fortitude - 50%
   
    InitializeEvent(20, 20010, 25000420, 250001300, 250001310); // Curse of Vitality - 10
    InitializeEvent(21, 20010, 25000421, 250001300, 250001311); // Curse of Vitality - 20
    InitializeEvent(22, 20010, 25000422, 250001300, 250001312); // Curse of Vitality - 30
    InitializeEvent(23, 20010, 25000423, 250001300, 250001313); // Curse of Vitality - 40
    InitializeEvent(24, 20010, 25000424, 250001300, 250001314); // Curse of Vitality - 50
    InitializeEvent(25, 20010, 25000425, 250001300, 250001315); // Curse of Vitality - 60
    InitializeEvent(26, 20010, 25000426, 250001300, 250001316); // Curse of Vitality - 70
    InitializeEvent(27, 20010, 25000427, 250001300, 250001317); // Curse of Vitality - 80
    InitializeEvent(28, 20010, 25000428, 250001300, 250001318); // Curse of Vitality - 90
    InitializeEvent(29, 20010, 25000429, 250001300, 250001319); // Curse of Vitality - 100

    InitializeEvent(30, 20010, 25000430, 250001400, 250001410); // Curse of Wrath - 10
    InitializeEvent(31, 20010, 25000431, 250001400, 250001411); // Curse of Wrath - 20
    InitializeEvent(32, 20010, 25000432, 250001400, 250001412); // Curse of Wrath - 30
    InitializeEvent(33, 20010, 25000433, 250001400, 250001413); // Curse of Wrath - 40
    InitializeEvent(34, 20010, 25000434, 250001400, 250001414); // Curse of Wrath - 50
    InitializeEvent(35, 20010, 25000435, 250001400, 250001415); // Curse of Wrath - 60
    InitializeEvent(36, 20010, 25000436, 250001400, 250001416); // Curse of Wrath - 70
    InitializeEvent(37, 20010, 25000437, 250001400, 250001417); // Curse of Wrath - 80
    InitializeEvent(38, 20010, 25000438, 250001400, 250001418); // Curse of Wrath - 90
    InitializeEvent(39, 20010, 25000439, 250001400, 250001419); // Curse of Wrath - 100
    
    InitializeEvent(40, 20010, 25000440, 250001500, 250001510); // Curse of Attraction
    InitializeEvent(41, 20010, 25000450, 250001600, 250001610); // Curse of Obscurity
    InitializeEvent(42, 20010, 25000460, 250001700, 250001710); // Curse of Simplicity
    InitializeEvent(43, 20010, 25000470, 250001800, 250001810); // Curse of Gluttony
    InitializeEvent(44, 20010, 25000480, 250001900, 250001910); // Curse of Frailty
    InitializeEvent(45, 20010, 25000490, 250002000, 250002010); // Curse of Enfeeblement
    InitializeEvent(46, 20010, 25000500, 250002100, 250002110); // Curse of Impermanence
    InitializeEvent(47, 20010, 25000501, 250002200, 250002210); // Curse of Valor
    
    //--------------------
    // Curses - Remove Player Effects
    //--------------------
    InitializeEvent(0, 20020, 25000400, 250001000, 250001010); // Curse of Pride - 10%
    InitializeEvent(1, 20020, 25000401, 250001000, 250001011); // Curse of Pride - 20%
    InitializeEvent(2, 20020, 25000402, 250001000, 250001012); // Curse of Pride - 30%
    InitializeEvent(3, 20020, 25000403, 250001000, 250001013); // Curse of Pride - 40%
    InitializeEvent(4, 20020, 25000404, 250001000, 250001014); // Curse of Pride - 50%
    InitializeEvent(5, 20020, 25000405, 250001000, 250001015); // Curse of Pride - 60%
    InitializeEvent(6, 20020, 25000406, 250001000, 250001016); // Curse of Pride - 70%
    InitializeEvent(7, 20020, 25000407, 250001000, 250001017); // Curse of Pride - 80%
    InitializeEvent(8, 20020, 25000408, 250001000, 250001018); // Curse of Pride - 90%
    InitializeEvent(9, 20020, 25000409, 250001000, 250001019); // Curse of Pride - 100%
    
    InitializeEvent(10, 20020, 25000410, 250001100, 250001110); // Curse of Fortitude - 5%
    InitializeEvent(11, 20020, 25000411, 250001100, 250001111); // Curse of Fortitude - 10%
    InitializeEvent(12, 20020, 25000412, 250001100, 250001112); // Curse of Fortitude - 15%
    InitializeEvent(13, 20020, 25000413, 250001100, 250001113); // Curse of Fortitude - 20%
    InitializeEvent(14, 20020, 25000414, 250001100, 250001114); // Curse of Fortitude - 25%
    InitializeEvent(15, 20020, 25000415, 250001100, 250001115); // Curse of Fortitude - 30%
    InitializeEvent(16, 20020, 25000416, 250001100, 250001116); // Curse of Fortitude - 35%
    InitializeEvent(17, 20020, 25000417, 250001100, 250001117); // Curse of Fortitude - 40%
    InitializeEvent(18, 20020, 25000418, 250001100, 250001118); // Curse of Fortitude - 45%
    InitializeEvent(19, 20020, 25000419, 250001100, 250001119); // Curse of Fortitude - 50%
   
    InitializeEvent(20, 20020, 25000420, 250001300, 250001310); // Curse of Vitality - 10
    InitializeEvent(21, 20020, 25000421, 250001300, 250001311); // Curse of Vitality - 20
    InitializeEvent(22, 20020, 25000422, 250001300, 250001312); // Curse of Vitality - 30
    InitializeEvent(23, 20020, 25000423, 250001300, 250001313); // Curse of Vitality - 40
    InitializeEvent(24, 20020, 25000424, 250001300, 250001314); // Curse of Vitality - 50
    InitializeEvent(25, 20020, 25000425, 250001300, 250001315); // Curse of Vitality - 60
    InitializeEvent(26, 20020, 25000426, 250001300, 250001316); // Curse of Vitality - 70
    InitializeEvent(27, 20020, 25000427, 250001300, 250001317); // Curse of Vitality - 80
    InitializeEvent(28, 20020, 25000428, 250001300, 250001318); // Curse of Vitality - 90
    InitializeEvent(29, 20020, 25000429, 250001300, 250001319); // Curse of Vitality - 100

    InitializeEvent(30, 20020, 25000430, 250001400, 250001410); // Curse of Wrath - 10
    InitializeEvent(31, 20020, 25000431, 250001400, 250001411); // Curse of Wrath - 20
    InitializeEvent(32, 20020, 25000432, 250001400, 250001412); // Curse of Wrath - 30
    InitializeEvent(33, 20020, 25000433, 250001400, 250001413); // Curse of Wrath - 40
    InitializeEvent(34, 20020, 25000434, 250001400, 250001414); // Curse of Wrath - 50
    InitializeEvent(35, 20020, 25000435, 250001400, 250001415); // Curse of Wrath - 60
    InitializeEvent(36, 20020, 25000436, 250001400, 250001416); // Curse of Wrath - 70
    InitializeEvent(37, 20020, 25000437, 250001400, 250001417); // Curse of Wrath - 80
    InitializeEvent(38, 20020, 25000438, 250001400, 250001418); // Curse of Wrath - 90
    InitializeEvent(39, 20020, 25000439, 250001400, 250001419); // Curse of Wrath - 100
    
    InitializeEvent(40, 20020, 25000440, 250001500, 250001510); // Curse of Attraction
    InitializeEvent(41, 20020, 25000450, 250001600, 250001610); // Curse of Obscurity
    InitializeEvent(42, 20020, 25000460, 250001700, 250001710); // Curse of Simplicity
    InitializeEvent(43, 20020, 25000470, 250001800, 250001810); // Curse of Gluttony
    InitializeEvent(44, 20020, 25000480, 250001900, 250001910); // Curse of Frailty
    InitializeEvent(45, 20020, 25000490, 250002000, 250002010); // Curse of Enfeeblement
    InitializeEvent(46, 20020, 25000500, 250002100, 250002110); // Curse of Impermanence
    InitializeEvent(47, 20020, 25000501, 250002200, 250002210); // Curse of Valor
    
    //--------------------
    // Items
    //--------------------
    InitializeEvent(0, 20040, 0); // Crown of the Great Lord
    InitializeEvent(0, 20042, 0); // Pyromancer's Parting Flame
    InitializeEvent(0, 20046, 0); // Illusion - Skeleton Form - Head
    InitializeEvent(0, 20047, 0); // Illusion - Skeleton Form - Body      
    InitializeEvent(0, 20048, 0); // Frostbite Removal
    
    //--------------------
    // Camera Effects
    //--------------------
    InitializeEvent(0, 20045, 160700310, 20001); // Devil's Trumpet
    InitializeEvent(1, 20045, 160700320, 20002); // Moonflower
    InitializeEvent(2, 20045, 160500060, 20000); // Numbness
    
    //--------------------
    // Debug Tools
    //--------------------
    InitializeEvent(0, 20060, 10000); // Event Flag Tool
    InitializeEvent(0, 20061, 10000); // Screenshot Tool
    InitializeEvent(0, 20062, 10000); // Treasure Tool
    InitializeEvent(0, 20063, 10000); // NG+ Tool
    
    //-----------------------------------
    // Run for Host only
    //-----------------------------------
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 2052);
    
    //--------------------
    // Setup
    //--------------------
    InitializeEvent(0, 20001, 0); // Game Flags - Once
    InitializeEvent(0, 20002, 0); // Game Flags - On Load
    
    //--------------------
    // Journey Configuration
    //--------------------
    // Modes
    InitializeEvent(0, 20050, 0); // Standard Mode
    InitializeEvent(0, 20051, 0); // Wanderer Mode
    InitializeEvent(0, 20052, 0); // Mythic Mode
    InitializeEvent(0, 20053, 0); // Starting Location
    InitializeEvent(0, 20054, 0); // Explorer Mode
    
    // Gauntlet Mode
    InitializeEvent(0, 20070, 0); // Gauntlet Mode
    InitializeEvent(0, 20071, 0); // Gauntlet Mode - Set/Endless Gauntlet
    InitializeEvent(0, 20072, 0); // Gauntlet Mode - Random Gauntlet
    InitializeEvent(0, 20073, 0); // Gauntlet Mode - Set/Endless Gauntlet - Reverse
    
    InitializeEvent(0, 20079, 0); // Gauntlet Mode - Reset Progress
    
    //--------------------
    // Boss Revival
    //--------------------
    InitializeEvent(0, 20100, 0); // Corrupted Gundyr
    InitializeEvent(0, 20101, 0); // Vordt
    InitializeEvent(0, 20102, 0); // Curse-rotted Greatwood
    InitializeEvent(0, 20103, 0); // Crystal Sage
    InitializeEvent(0, 20104, 0); // Deacons of the Deep
    InitializeEvent(0, 20105, 0); // Abyss Watchers
    InitializeEvent(0, 20106, 0); // High Lord Wolnir
    InitializeEvent(0, 20107, 0); // Old Demon King
    InitializeEvent(0, 20108, 0); // Pontiff Sulyvahn
    InitializeEvent(0, 20109, 0); // Aldrich
    InitializeEvent(0, 20110, 0); // Yhorm the Giant
    InitializeEvent(0, 20111, 0); // Dancer
    InitializeEvent(0, 20112, 0); // Oceiros
    InitializeEvent(0, 20113, 0); // Dragonslayer Armour
    InitializeEvent(0, 20114, 0); // Ancient Wyvern
    InitializeEvent(0, 20115, 0); // Nameless King
    InitializeEvent(0, 20116, 0); // Champion Gundyr
    InitializeEvent(0, 20117, 0); // Twin Princes
    InitializeEvent(0, 20118, 0); // Soul of Cinder
    InitializeEvent(0, 20119, 0); // Sister Friede
    InitializeEvent(0, 20120, 0); // Lordran Remnants
    InitializeEvent(0, 20121, 0); // Demon Prince
    InitializeEvent(0, 20122, 0); // Darkeater Midir
    InitializeEvent(0, 20123, 0); // Slave Knight Gael
    InitializeEvent(0, 20124, 0); // Halflight
    InitializeEvent(0, 20125, 0); // Champions of Yore
    InitializeEvent(0, 20126, 0); // Prince Dorthinus
    InitializeEvent(0, 20127, 0); // Cathedral Guardian
    InitializeEvent(0, 20128, 0); // Mirror Knight
    InitializeEvent(0, 20129, 0); // Aborr
    InitializeEvent(0, 20130, 0); // Princess Yngvil
    InitializeEvent(0, 20131, 0); // Trio of Explorers
    InitializeEvent(0, 20132, 0); // Twisted Knight
    InitializeEvent(0, 20133, 0); // Fallen Protector
    InitializeEvent(0, 20134, 0); // Titanite Abomination
    InitializeEvent(0, 20135, 0); // The Marauder
    
    // Sin
    InitializeEvent(0, 9004, 9007); // Sin - Check Hostility
    InitializeEvent(0, 9005, 9008); // Sin - Check Hostility
    InitializeEvent(0, 9006, 9009); // Sin - Check Hostility
    InitializeEvent(0, 9000, 9001, 9007, 9008, 9009); // NPC Sin monitor
    InitializeEvent(0, 9002, 9003); // Clear Sin
    InitializeEvent(0, 9010, 0); // Sin - Shrine Handmaid Price Increase
    
    // Boss Defeat - Award Items
    InitializeEvent(0, 970, 13000800, 2000, 0, 0); // Vordt
    InitializeEvent(1, 970, 13000890, 2010, 0, 0); // Dancer
    InitializeEvent(2, 970, 13000830, 2020, 0, 0); // Oceiros
    InitializeEvent(3, 970, 13010800, 2030, 0, 0); // Dragonslayer Armour
    InitializeEvent(9, 970, 13410830, 2040, 0, 0); // Twin Princes
    InitializeEvent(10, 970, 13410860, 2050, 0, 0); // Unused
    InitializeEvent(4, 970, 13100800, 2060, 0, 0); // Curse-rotted Greatwood
    InitializeEvent(5, 970, 13200800, 2070, 0, 0); // Ancient Wyvern
    InitializeEvent(6, 970, 13200850, 2080, 0, 0); // Nameless King
    InitializeEvent(7, 970, 13300850, 2090, 0, 0); // Crystal Sage
    InitializeEvent(8, 970, 13300800, 2100, 0, 0); // Abyss Watchers
    InitializeEvent(11, 970, 13500800, 2110, 0, 0); // Deacons of the Deep
    InitializeEvent(12, 970, 13700850, 2120, 0, 0); // Pontiff Sulyvahn
    InitializeEvent(13, 970, 13700800, 2130, 0, 0); // Aldrich
    InitializeEvent(14, 970, 13800800, 2140, 0, 0); // High Lord Wolnir
    InitializeEvent(15, 970, 13800830, 2150, 0, 0); // Old Demon King
    InitializeEvent(17, 970, 13900800, 2170, 0, 0); // Yhorm
    InitializeEvent(18, 970, 14000800, 2180, 0, 0); // Corrupted Gundyr
    InitializeEvent(19, 970, 14000830, 2190, 0, 0); // Champion Gundyr
    InitializeEvent(20, 970, 14100800, 2200, 0, 0); // Soul of Cinder
    InitializeEvent(21, 970, 14500800, 2300, 0, 0); // Sister Friede
    InitializeEvent(22, 970, 13700870, 2310, 0, 0); // Lordran Remnants
    InitializeEvent(23, 970, 15000800, 2330, 0, 0); // Demon Prince
    InitializeEvent(24, 970, 15100800, 2340, 0, 0); // Halflight
    InitializeEvent(25, 970, 15100850, 2350, 0, 0); // Darkeater Midir
    InitializeEvent(26, 970, 15110800, 2360, 0, 0); // Slave Knight Gael
    InitializeEvent(27, 970, 14500960, 2320, 0, 0); // Prince Dorthinus
    InitializeEvent(28, 970, 13500810, 2370, 0, 0); // Cathedral Guardian
    InitializeEvent(29, 970, 13410870, 2380, 0, 0); // Mirror Knight
    InitializeEvent(30, 970, 13100870, 2390, 0, 0); // Aborr
    InitializeEvent(31, 970, 14500860, 2400, 0, 0); // Princess Yngvil
    InitializeEvent(32, 970, 13200870, 2410, 0, 0); // Trio of Explorers
    InitializeEvent(33, 970, 13010850, 2420, 0, 0); // Twisted Knight
    InitializeEvent(34, 970, 13900860, 2430, 0, 0); // Fallen Protector
    InitializeEvent(35, 970, 13200880, 2440, 0, 0); // Titanite Abomination
    InitializeEvent(36, 970, 14000850, 2450, 0, 0); // The Marauder
    
    // Game Progress Flags
    InitializeEvent(0, 6100, 6100, 13300800);  // Abyss Watcher
    InitializeEvent(1, 6100, 6101, 13900800);  // Yhorm
    InitializeEvent(2, 6100, 6102, 13700800);  // Aldrich
    InitializeEvent(3, 6100, 6103, 13410830);  // Twin Princes
    InitializeEvent(4, 6100, 6104, 14000800);  // Corrupted Gundyr
    InitializeEvent(5, 6100, 6105, 13000800);  // Vordt
    InitializeEvent(6, 6100, 6106, 13300850);  // Crystal Sage
    InitializeEvent(7, 6100, 6107, 13500800);  // Deacons of the Deep
    InitializeEvent(8, 6100, 6108, 13800800);  // High Lord Wolnir
    InitializeEvent(9, 6100, 6109, 13700850);  // Pontiff Sulyvahn
    InitializeEvent(10, 6100, 6110, 13000890); // Dancer
    InitializeEvent(11, 6100, 6111, 13010800); // Dragonslayer Armour
    InitializeEvent(12, 6100, 6112, 110);      // Game Clear
    
    InitializeEvent(0, 702, 0); // Unknown
    InitializeEvent(0, 710, 0); // Warp to Dancer
    
    // Phantoms
    InitializeEvent(0, 9510, 0); // NPC - Sirris
    InitializeEvent(0, 9511, 0); // NPC - Longfinger Kirk
    InitializeEvent(0, 9512, 0); // NPC - Londor Pale Shade
    
    // Gestures
    InitializeEvent(0, 9520, 4410, 8, 9013, 6058);  // Yellowfinger Heysel - Proper bow
    InitializeEvent(0, 9525, 4430, 4, 9005, 6054);  // Londor Pale Shade - Duel bow
    InitializeEvent(0, 9530, 4420, 18, 9020, 6068); // Black Hand Gotthard - By my sword
    InitializeEvent(0, 9540, 15, 9017, 6065);       // Knight Slayer Tsorig - My thanks!
    
    // NPC Flags
    InitializeEvent(0, 9100, 70000007); // Hawkwood
    InitializeEvent(0, 9101, 70000008); // Sirris
    InitializeEvent(0, 9102, 70000012); // Greirat
    InitializeEvent(0, 9103, 70000013); // Orbeck
    InitializeEvent(0, 9104, 70000017); // Irina/Eygon
    InitializeEvent(0, 9105, 70000019, 70000020, 70000021); // Anri
    InitializeEvent(0, 9111, 70000022, 70000023); // Anri
    InitializeEvent(0, 9106, 70000000); // Sirris
    InitializeEvent(0, 9107, 70000001); // Yuria
    InitializeEvent(0, 9108, 70000002); // Yuria
    InitializeEvent(0, 9109, 70000003); // Yuria
    InitializeEvent(0, 9110, 70000004); // Yuria
    InitializeEvent(0, 9112, 70000005); //
    InitializeEvent(0, 9113, 70000030); // Lapp
    InitializeEvent(0, 9114, 70000031); // Shria
    
    // Boss Kill Count Trackers
    InitializeEvent(0, 9120, 74000756, 74000760, 74000760, 1, 1, 1, 0); // Sirris
    InitializeEvent(1, 9120, 74000591, 74000552, 74000592, 3, 3, 3, 0); // 
    InitializeEvent(2, 9120, 74000552, 74000553, 74000592, 3, 3, 6, 0); // Orbeck
    InitializeEvent(3, 9120, 74000303, 74000316, 74000316, 1, 1, 1, 1); // Greirat - Undead Settlement
    InitializeEvent(4, 9120, 74000306, 74000318, 74000318, 1, 1, 1, 1); // Greirat - Irithyll
    InitializeEvent(5, 9120, 74000921, 74000925, 74000925, 1, 1, 1, 1); // 
    InitializeEvent(6, 9120, 74000916, 74000913, 74000913, 1, 1, 1, 1); // 
    InitializeEvent(7, 9120, 73500265, 73500264, 73500264, 1, 1, 1, 0); // 
    
    InitializeEvent(0, 9016, 0); // Player - Cleric Check
    InitializeEvent(0, 9011, 0); // Fire Keeper - Eyes of a Fire Keeper Dialogue
    InitializeEvent(0, 9014, 0); // Hawkwood - Twinkling Dragon Torso Stone
    InitializeEvent(0, 9018, 0); // Hawkwood - Dialogue Flag
    InitializeEvent(0, 9019, 0); // Eygon - Dialogue Flag
    InitializeEvent(0, 9015, 0); // Unknown
    InitializeEvent(0, 6900, 0); // Estus Flask - Maximum Count Monitor
    
    InitializeEvent(0, 9020, 73500300, 1621, 1634, 6951, 35);
    InitializeEvent(1, 9020, 14100511, 14100512, 14100512, 6952, 41);
    InitializeEvent(2, 9020, 14500161, 14500162, 14500162, 6952, 45);
});

//----------------------------------------------
// Deconstructor
//----------------------------------------------
Event(50, Default, function() {
    //-----------------------------------
    // Run for Host and Client
    //-----------------------------------
    // Ceremonies
    //InitializeEvent(0, 231, 0);   // Untended Graves - Ceremony Monitor
    InitializeEvent(0, 232, 0);     // Undead Settlement - Ceremony Monitor
    
    // Misc
    InitializeEvent(0, 701, 0);     // Unknown
    InitializeEvent(0, 740, 0);     // Reset Camera
    
    //-----------------------------------
    // Run for Host only
    //-----------------------------------
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 2052);
    
    InitializeEvent(0, 700, 0);  // Flag Setup
    InitializeEvent(0, 741, 0);  // World - Untended Graves - Area Welcome Message Handler
    InitializeEvent(0, 9012, 0); // Player - Set Gender Flag
    
    // Remove items in NG+
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 6400); // Final Cutscene
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14000100); // Player Start Sequence
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, FAIL, AND_01);
    
    // Items
    RemoveItemFromPlayer(ItemType.Goods, 2123, 1); // Cinders of a Lord
    RemoveItemFromPlayer(ItemType.Goods, 2124, 1); // Cinders of a Lord
    RemoveItemFromPlayer(ItemType.Goods, 2125, 1); // Cinders of a Lord
    RemoveItemFromPlayer(ItemType.Goods, 2126, 1); // Cinders of a Lord
    RemoveItemFromPlayer(ItemType.Goods, 115, 1); // Black Eye Orb
    RemoveItemFromPlayer(ItemType.Goods, 390, 1); // Fire Keeper Soul
    RemoveItemFromPlayer(ItemType.Goods, 490, 8); // Dark Sigil
    RemoveItemFromPlayer(ItemType.Goods, 2117, 1); // Basin of Vows
    RemoveItemFromPlayer(ItemType.Goods, 2135, 1); // Transposing Kiln
    RemoveItemFromPlayer(ItemType.Goods, 2137, 1); // Coiled Sword
    RemoveItemFromPlayer(ItemType.Goods, 2138, 1); // Eyes of a Fire Keeper
    RemoveItemFromPlayer(ItemType.Goods, 2139, 1); // Sword of Avowal
    RemoveItemFromPlayer(ItemType.Goods, 2142, 1); // Hawkwood's Swordgrass
    RemoveItemFromPlayer(ItemType.Goods, 2155, 1); // Contraption Key
    RemoveItemFromPlayer(ItemType.Goods, 2156, 1); // Small Envoy Banner
    RemoveItemFromPlayer(ItemType.Goods, 2158, 1); // Blood of the Dark Soul
    
    // Keys
    RemoveItemFromPlayer(ItemType.Goods, 2001, 1); // Lift Chamber Key
    RemoveItemFromPlayer(ItemType.Goods, 2005, 1); // Small Doll
    RemoveItemFromPlayer(ItemType.Goods, 2007, 1); // Jailbreaker's Key
    RemoveItemFromPlayer(ItemType.Goods, 2008, 1); // Jailer's Key Ring
    RemoveItemFromPlayer(ItemType.Goods, 2009, 1); // Grave Key
    RemoveItemFromPlayer(ItemType.Goods, 2010, 1); // Cell Key
    RemoveItemFromPlayer(ItemType.Goods, 2011, 1); // Dungeon Ground Floor Key
    RemoveItemFromPlayer(ItemType.Goods, 2012, 1); // Old Cell Key
    RemoveItemFromPlayer(ItemType.Goods, 2013, 1); // Forgotten Key
    RemoveItemFromPlayer(ItemType.Goods, 2014, 1); // Grand Archives Key
    RemoveItemFromPlayer(ItemType.Goods, 2015, 1); // Tower Key
    RemoveItemFromPlayer(ItemType.Goods, 2102, 1); // Small Lothric Banner
    RemoveItemFromPlayer(ItemType.Goods, 2065, 1); // Seal of Judgment
    
    // Turn-ins
    RemoveItemFromPlayer(ItemType.Goods, 2103, 1); // Farron Coal
    RemoveItemFromPlayer(ItemType.Goods, 2104, 1); // Sage's Coal
    RemoveItemFromPlayer(ItemType.Goods, 2105, 1); // Giant's Coal
    RemoveItemFromPlayer(ItemType.Goods, 2106, 1); // Profaned Coal
    RemoveItemFromPlayer(ItemType.Goods, 2177, 1); // Angelic Braille Divine Tome
    RemoveItemFromPlayer(ItemType.Goods, 2178, 1); // Heavenly Braille Divine Tome
    RemoveItemFromPlayer(ItemType.Goods, 2119, 1); // Braille Divine Tome of Carim
    RemoveItemFromPlayer(ItemType.Goods, 2120, 1); // Braille Divine Tome of Lothric
    RemoveItemFromPlayer(ItemType.Goods, 2121, 1); // Braille Divine Tome of Sunlight
    RemoveItemFromPlayer(ItemType.Goods, 2144, 1); // Deep Braille Divine Tome
    RemoveItemFromPlayer(ItemType.Goods, 2145, 1); // Londor Braille Divine Tome
    RemoveItemFromPlayer(ItemType.Goods, 2175, 1); // Writhing Tome
    RemoveItemFromPlayer(ItemType.Goods, 2176, 1); // Abyssal Tome
    RemoveItemFromPlayer(ItemType.Goods, 2127, 1); // Great Swamp Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2128, 1); // Carthus Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2129, 1); // Izalith Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2130, 1); // Quelana Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2131, 1); // Grave Warden Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2173, 1); // Profaned Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2132, 1); // Sage's Scroll
    RemoveItemFromPlayer(ItemType.Goods, 2133, 1); // Logan's Scroll
    RemoveItemFromPlayer(ItemType.Goods, 2134, 1); // Crystal Scroll
    RemoveItemFromPlayer(ItemType.Goods, 2140, 1); // Golden Scroll
    RemoveItemFromPlayer(ItemType.Goods, 2002, 1); // Lordvessel
    RemoveItemFromPlayer(ItemType.Goods, 2004, 1); // Tortured Soul
    RemoveItemFromPlayer(ItemType.Goods, 2006, 1); // Smithbox

    SetEventFlag(6400, OFF);
    
    Label0();
});

//----------------------------------------------
// Flag: Is in Own World
//----------------------------------------------
Event(200, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, false);
    SetEventFlag(201, ON);
});

//----------------------------------------------
// World - Set Eclipse Ceremonies
//----------------------------------------------
Event(230, Restart, function() {
    var flag_EclipseActive    = 230;
    var flag_BossKill_Aldrich = 25001010;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_BossKill_Aldrich);
    
    SetMapCeremony(30, 0, 10);
    SetMapCeremony(30, 1, 10);
    SetMapCeremony(34, 1, 10);
    SetMapCeremony(31, 0, 10);
    SetMapCeremony(33, 0, 10);
    SetMapCeremony(35, 0, 10);
    
    SetEventFlag(flag_EclipseActive, ON);
});

//----------------------------------------------
// World - Enable Untended Graves if outside of m40
//----------------------------------------------
Event(231, Restart, function() {
    IfPlayerInoutMap(AND_01, true, 40, 0);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    SetMapCeremony(40, 0, 10);
    EndUnconditionally(EventEndType.End);
});

//----------------------------------------------
// World - Undead Settlement Ceremonies
//----------------------------------------------
Event(232, Default, function() {
    var flag_EclipseActive = 230;
    var flag_InSirrisWorld = 8221;
    
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, flag_InSirrisWorld);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, flag_EclipseActive);
    
    // Default
    SetMapCeremony(31, 0, 0); // Day
    GotoUnconditionally(Label.LABEL1);
    
    // Eclipse
    Label0();
    SetMapCeremony(31, 0, 10); // Eclipse
    GotoUnconditionally(Label.LABEL1);
    
    // Sirris's Version of Undead Settlement
    Label1();
    IfPlayerInoutMap(OR_01, true, 30, 0);
    IfPlayerInoutMap(OR_01, true, 30, 1);
    IfPlayerInoutMap(OR_01, true, 34, 1);
    IfPlayerInoutMap(OR_01, true, 40, 0);
    IfConditionGroup(MAIN, PASS, OR_01);
    WaitFixedTimeFrames(1);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, flag_EclipseActive);
    SetMapCeremony(31, 0, 20); // Dusk
    GotoUnconditionally(Label.LABEL3);
    
    // Sirris's Version of Undead Settlement + Eclipse
    Label2();
    SetMapCeremony(31, 0, 30); // Night
    GotoUnconditionally(Label.LABEL3);
    
    Label3();
    IfPlayerInoutMap(AND_01, false, 30, 0);
    IfPlayerInoutMap(AND_01, false, 30, 1);
    IfPlayerInoutMap(AND_01, false, 34, 1);
    IfPlayerInoutMap(AND_01, false, 40, 0);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Game Progress Flag
//----------------------------------------------
Event(6100, Default, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(X0_4, ON);
});

//----------------------------------------------
// Flag Setup 
//----------------------------------------------
// ClassType enum:
// 0 - Deprived
// 1 - Knight
// 2 - Thief
// 3 - Sentinel
// 4 - Mercenary
// 5 - Wayfarer
// 6 - Assassin
// 7 - Samurai
// 8 - Warrior
// 9 - Bandit
// 10 - Soldier
// 11 - Acolyte
// 12 - Herald
// 13 - Captain
// 14 - Peasant
// 15 - Explorer
// 16 - Brawler
// 17 - Hunter
// 18 - Sorcerer
// 19 - Pyromancer
// 20 - Cleric
// 21 - Priest
// 22 - Heretic
// 23 - Outcast
// 24 - Skeptic
// 25 - Paladin
// 26 - Jester
// 27 - Summoner
// 99 - Accursed
Event(700, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    
    SetCharacterRemainingYoelLevels(5);
    
    SetEventFlag(50006020, ON); // Firelink Shrine Music - Eyes of a Fire Keeper turns this OFF 
    SetEventFlag(9215, ON);     // Firelink Shrine - Lit    
    
    IfPlayersClass(OR_15, 18);
    SkipIfConditionGroupStateUncompiled(1, FAIL, OR_15);
    SetEventFlag(74000587, ON); // Is Sorcerer class
    
    IfPlayersClass(OR_14, 19);
    SkipIfConditionGroupStateUncompiled(1, FAIL, OR_14);
    SetEventFlag(74000465, ON); // Is Pyromancer class
    
    SetEventFlag(50006162, ON); // Deep Braille Divine Tome
    SetEventFlag(50006163, ON); // Londor Braille Divine Tome
    SetEventFlag(73501010, ON); // Siegward - Armor Returned
    SetEventFlag(73501020, ON); // Siegward - Armor Returned
    SetEventFlag(73501030, ON); // Siegward - Armor Returned
    SetEventFlag(73501040, ON); // Siegward - Armor Returned
    SetEventFlag(73501050, ON); // Siegward - Armor Returned
    
    IfGameCycle(OR_13, ComparisonType.GreaterOrEqual, 1);
    SkipIfConditionGroupStateUncompiled(1, FAIL, OR_13);
    SetEventFlag(70000900, ON); // Is in NG+
    
    // NG+ flags
    IfGameCycle(AND_06, ComparisonType.GreaterOrEqual, 6);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    SetEventFlag(56, ON);
    EndUnconditionally(EventEndType.End);
    
    IfGameCycle(AND_05, ComparisonType.Equal, 5);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_05);
    SetEventFlag(55, ON);
    EndUnconditionally(EventEndType.End);
    
    IfGameCycle(AND_04, ComparisonType.Equal, 4);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    SetEventFlag(54, ON);
    EndUnconditionally(EventEndType.End);
    
    IfGameCycle(AND_03, ComparisonType.Equal, 3);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    SetEventFlag(53, ON);
    EndUnconditionally(EventEndType.End);
    
    IfGameCycle(AND_02, ComparisonType.Equal, 2);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    SetEventFlag(52, ON);
    EndUnconditionally(EventEndType.End);
    
    IfGameCycle(AND_01, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    SetEventFlag(51, ON);
    EndUnconditionally(EventEndType.End);
    
    SetEventFlag(50, ON);
    EndUnconditionally(EventEndType.End);
});

//----------------------------------------------
// Unknown
//----------------------------------------------
Event(701, Default, function() {
    SetEventFlag(6000, OFF);
    SetEventFlag(6001, ON);
});

//----------------------------------------------
// Unknown
//----------------------------------------------
Event(702, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 6600);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 6600);
    SetEventFlag(703, ON);
});

//----------------------------------------------
// World - Warp to Dancer
//----------------------------------------------
Event(710, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    
    IfPlayerHasdoesntHaveItem(AND_15, ItemType.Goods, 2014, OwnershipState.Owns); // Grand Archives Key
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_15);
    
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9314); // Aldrich
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9318); // Yhorm
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3702890, 1); // In Aldrich arena
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3902890, 1); // In Yhorm arena
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 4900);
    SetSpeffect(10000, 4901);
    
    GotoIfPlayerInoutMap(Label.LABEL0, true, 37, 0);
    GotoIfPlayerInoutMap(Label.LABEL1, true, 39, 0);
    GotoUnconditionally(Label.LABEL2);
    
    // In m37
    Label0();
    WaitFixedTimeSeconds(3);
    SetEventFlag(13700002, ON); // Aldrich bonfire
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 13000896); // Emma is alive
    IfEventFlag(AND_08, OFF, TargetEventFlagType.EventFlag, 13000890); // Dancer is alive
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_08);
    SkipUnconditionally(1);
    GotoUnconditionally(Label.LABEL2);
    
    // In m39
    Label1();
    GotoIfBatchEventFlags(Label.LABEL19, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1388, 1389); // Siegward flags
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 73900164); // Siegward - Yhorm stage
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1398); // Siegward dead
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 3902890, 1); // In Yhorm arena
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_02);
    GotoIfConditionGroupStateCompiled(Label.LABEL20, PASS, AND_02);
    
    Label19();
    WaitFixedTimeSeconds(3);
    
    Label20();
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 13000896); // Emma is alive
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventFlag, 13000890); // Dancer is alive
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_09);
    SkipUnconditionally(1);
    GotoUnconditionally(Label.LABEL2);
    
    Label2();
    SetEventFlag(711, ON);
    WaitFixedTimeFrames(0);
    ClearSpeffect(10000, 4900);
    ClearSpeffect(10000, 4901);
    EndUnconditionally(EventEndType.End);
});

//----------------------------------------------
// Reset Camera
//----------------------------------------------
Event(740, Default, function() {
    SetNetworkSyncState(Disabled);
    ChangeCamera(-1, -1);
});

//----------------------------------------------
// World - Untended Graves - Area Welcome Message Handler
//----------------------------------------------
Event(741, Default, function() {
    SetEventFlag(74000013, OFF); // In Bonfire Menu
    
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfMapCeremonyState(AND_01, Enabled, 40, 0, 10);
    IfConditionGroup(MAIN, FAIL, AND_01);
    
    SetEventFlag(743, ON);
    
    IfPlayerInoutMap(AND_02, true, 40, 0);
    IfMapCeremonyState(AND_02, Enabled, 40, 0, 10);
    IfPlayerStandingOnHit(AND_03, 4004120);
    IfConditionGroup(AND_02, FAIL, AND_03);
    IfConditionGroup(MAIN, PASS, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Kill - Award Items
//----------------------------------------------
Event(970, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    SkipIfComparison(1, ComparisonType.Equal, X4_4, 0);
    AwardItemsIncludingClients(X4_4);
    
    SetNetworkSyncState(Disabled);
    
    WaitFixedTimeSeconds(5);
    
    SkipIfComparison(1, ComparisonType.Equal, X8_4, 0);
    AwardItemsIncludingClients(X8_4);
    
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    AwardItemsIncludingClients(X12_4);
});

//----------------------------------------------
// Estus Flask - Maximum Count Monitor
//----------------------------------------------
Event(6900, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 170, OwnershipState.DoesntOwn);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 171, OwnershipState.DoesntOwn);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    SetEventFlag(6030, ON);
});

//----------------------------------------------
// NPC - Sirris
//----------------------------------------------
Event(9510, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13500193);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 8240);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(9510, ON);
});

//----------------------------------------------
// NPC - Kirk
//----------------------------------------------
Event(9511, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13500194);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(9511, ON);
});

//----------------------------------------------
// NPC - Londor Pale Shade
//----------------------------------------------
Event(9512, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13700194);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13300184);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(9512, ON);
});

//----------------------------------------------
// Yellowfinger Heysel - Award Gesture
//----------------------------------------------
Event(9520, Restart, function(X0_4, X4_2, X8_4, X12_4) {
    var entity_YellowfingerHeysel = 3300194;
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13304194);
    
    RequestCharacterAICommand(entity_YellowfingerHeysel, 99, 2);
    RequestCharacterAIReplan(entity_YellowfingerHeysel);
    
    IfCharacterHasSpeffect(MAIN, entity_YellowfingerHeysel, X0_4, true, ComparisonType.Equal, 1);
    RequestCharacterAICommand(entity_YellowfingerHeysel, -1, 2);
    RequestCharacterAIReplan(entity_YellowfingerHeysel);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X12_4);
    AwardGestureItem(X4_2, ItemType.Goods, X8_4);
    SetEventFlag(X12_4, ON);
});

//----------------------------------------------
// Londor Pale Shade - Award Gesture
//----------------------------------------------
Event(9525, Restart, function(X0_4, X4_2, X8_4, X12_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13304195); // Londor Pale Shade
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13704192);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14104190);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 13304195);
    RequestCharacterAICommand(3300195, 99, 2);
    RequestCharacterAIReplan(3300195);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 13704192);
    RequestCharacterAICommand(3700192, 99, 2);
    RequestCharacterAIReplan(3700192);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 14104190);
    RequestCharacterAICommand(4100190, 99, 2);
    RequestCharacterAIReplan(4100190);
    
    IfCharacterHasSpeffect(OR_02, 3300195, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 3700192, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 4100191, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 13304195);
    RequestCharacterAICommand(3300195, -1, 2);
    RequestCharacterAIReplan(3300195);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 13704192);
    RequestCharacterAICommand(3700192, -1, 2);
    RequestCharacterAIReplan(3700192);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 14104191);
    RequestCharacterAICommand(4100190, -1, 2);
    RequestCharacterAIReplan(4100190);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X12_4);
    AwardGestureItem(X4_2, ItemType.Goods, X8_4);
    SetEventFlag(X12_4, ON);
});

//----------------------------------------------
// Black Hand Gotthard - Award Gesture
//----------------------------------------------
Event(9530, Restart, function(X0_4, X4_2, X8_4, X12_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13304913);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13704191);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 13304913);
    RequestCharacterAICommand(3300193, 99, 2);
    RequestCharacterAIReplan(3300193);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 13704191);
    RequestCharacterAICommand(3700191, 99, 2);
    RequestCharacterAIReplan(3700191);
    
    IfCharacterHasSpeffect(OR_02, 3300193, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 3700191, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 13304913);
    RequestCharacterAICommand(3300193, -1, 2);
    RequestCharacterAIReplan(3300193);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 13704191);
    RequestCharacterAICommand(3700191, -1, 2);
    RequestCharacterAIReplan(3700191);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X12_4);
    AwardGestureItem(X4_2, ItemType.Goods, X8_4);
    SetEventFlag(X12_4, ON);
});

//----------------------------------------------
// Knight Slayer Tsorig - Award Gesture
//----------------------------------------------
Event(9540, Restart, function(X0_2, X4_4, X8_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13804196);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 13805196);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, 3800196, 20, 1);
    IfCharacterAIState(AND_02, 3800198, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 10000, 3800198, 20, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_03, false);
    IfCharacterHPRatio(AND_03, 10000, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_04, PASS, OR_01);
    IfConditionGroup(AND_04, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, AND_04);
    
    SkipIfConditionGroupStateCompiled(2, FAIL, AND_01);
    RequestCharacterAICommand(3800196, 99, 2);
    RequestCharacterAIReplan(3800196);
    
    SkipIfConditionGroupStateCompiled(2, FAIL, AND_02);
    RequestCharacterAICommand(3800198, 99, 2);
    RequestCharacterAIReplan(3800198);
    
    WaitFixedTimeSeconds(1);
    
    SkipIfConditionGroupStateCompiled(2, FAIL, AND_01);
    RequestCharacterAICommand(3800196, -1, 2);
    RequestCharacterAIReplan(3800196);
    
    SkipIfConditionGroupStateCompiled(2, FAIL, AND_02);
    RequestCharacterAICommand(3800198, -1, 2);
    RequestCharacterAIReplan(3800198);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X8_4);
    AwardGestureItem(X0_2, ItemType.Goods, X4_4);
    SetEventFlag(X8_4, ON);
});

//----------------------------------------------
// Special Covenant Item - Reward Covenant Material
//----------------------------------------------
Event(9570, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(MAIN, 10000, X4_4, true, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(X0_4);
    WaitFixedTimeSeconds(1.5);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Sin System - NPC Sin monitor
//----------------------------------------------
Event(9000, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(X0_4, ON);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(MAIN, FAIL, OR_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Sin System - Clear NPC Sin
//----------------------------------------------
Event(9002, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    SetEventFlag(X0_4, OFF);
    SetEventFlag(70000050, ON);
    SetEventFlag(70000051, ON);
    SetEventFlag(70000052, ON);
    SetEventFlag(70000053, ON);
    SetEventFlag(70000054, ON);
    SetEventFlag(70000055, ON);
    SetEventFlag(70000056, ON);
    SetEventFlag(70000057, ON);
    SetEventFlag(70000058, ON);
    SetEventFlag(70000059, ON);
    SetEventFlag(70000060, ON);
    SetEventFlag(70000061, ON);
    SetEventFlag(70000062, ON);
    SetEventFlag(70000063, ON);
    SetEventFlag(70000064, ON);
    SetEventFlag(70000065, ON);
    SetEventFlag(70000066, ON);
    SetEventFlag(70000067, ON);
    SetEventFlag(70000068, ON);
    SetEventFlag(70000069, ON);
    SetEventFlag(70000070, ON);
    SetEventFlag(70000071, ON);
    SetEventFlag(70000072, ON);
    SetEventFlag(70000073, ON);
    SetEventFlag(70000074, ON);
    SetEventFlag(70000075, ON);
    SetEventFlag(70000076, ON);
    SetEventFlag(70000077, ON);
    SetEventFlag(70000078, ON);
    SetEventFlag(70000079, ON);
    SetEventFlag(70000080, ON);
    SetEventFlag(70000081, ON);
    SetEventFlag(70000082, ON);
    SetEventFlag(70000083, ON);
    SetEventFlag(70000084, ON);
    SetEventFlag(70000085, ON);
    SetEventFlag(70000086, ON);
    SetEventFlag(70000087, ON);
    SetEventFlag(70000088, ON);
    SetEventFlag(70000089, ON);
    SetEventFlag(70000090, ON);
    SetEventFlag(70000091, ON);
    SetEventFlag(70000092, ON);
    SetEventFlag(70000093, ON);
    SetEventFlag(70000094, ON);
    SetEventFlag(70000095, ON);
    SetEventFlag(70000096, ON);
    SetEventFlag(70000097, ON);
    SetEventFlag(70000098, ON);
    SetEventFlag(70000099, ON);
    SetEventFlag(70001073, ON);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Sin - Check Hostility
//----------------------------------------------
Event(9004, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1016);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 70000052);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1036);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 70000053);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1056);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 70000054);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1076);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 70000055);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1096);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 70000056);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1116);
    IfEventFlag(AND_06, OFF, TargetEventFlagType.EventFlag, 70000057);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1136);
    IfEventFlag(AND_07, OFF, TargetEventFlagType.EventFlag, 70000058);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1156);
    IfEventFlag(AND_08, OFF, TargetEventFlagType.EventFlag, 70000059);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 1176);
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventFlag, 70000060);
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 1196);
    IfEventFlag(AND_10, OFF, TargetEventFlagType.EventFlag, 70000061);
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 1216);
    IfEventFlag(AND_11, OFF, TargetEventFlagType.EventFlag, 70000062);
    IfEventFlag(AND_12, ON, TargetEventFlagType.EventFlag, 1236);
    IfEventFlag(AND_12, OFF, TargetEventFlagType.EventFlag, 70000063);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, 1256);
    IfEventFlag(AND_13, OFF, TargetEventFlagType.EventFlag, 70000064);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 1276);
    IfEventFlag(AND_14, OFF, TargetEventFlagType.EventFlag, 70000065);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1296);
    IfEventFlag(AND_15, OFF, TargetEventFlagType.EventFlag, 70000066);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(OR_01, PASS, AND_05);
    IfConditionGroup(OR_01, PASS, AND_06);
    IfConditionGroup(OR_01, PASS, AND_07);
    IfConditionGroup(OR_01, PASS, AND_08);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfConditionGroup(OR_01, PASS, AND_10);
    IfConditionGroup(OR_01, PASS, AND_11);
    IfConditionGroup(OR_01, PASS, AND_12);
    IfConditionGroup(OR_01, PASS, AND_13);
    IfConditionGroup(OR_01, PASS, AND_14);
    IfConditionGroup(OR_01, PASS, AND_15);
    IfConditionGroup(MAIN, PASS, OR_01);
    ClearCompiledConditionGroupState(0);
    SetEventFlag(X0_4, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1016);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 70000052);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1036);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 70000053);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1056);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 70000054);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1076);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 70000055);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1096);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 70000056);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1116);
    IfEventFlag(AND_06, OFF, TargetEventFlagType.EventFlag, 70000057);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1136);
    IfEventFlag(AND_07, OFF, TargetEventFlagType.EventFlag, 70000058);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1156);
    IfEventFlag(AND_08, OFF, TargetEventFlagType.EventFlag, 70000059);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 1176);
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventFlag, 70000060);
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 1196);
    IfEventFlag(AND_10, OFF, TargetEventFlagType.EventFlag, 70000061);
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 1216);
    IfEventFlag(AND_11, OFF, TargetEventFlagType.EventFlag, 70000062);
    IfEventFlag(AND_12, ON, TargetEventFlagType.EventFlag, 1236);
    IfEventFlag(AND_12, OFF, TargetEventFlagType.EventFlag, 70000063);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, 1256);
    IfEventFlag(AND_13, OFF, TargetEventFlagType.EventFlag, 70000064);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 1276);
    IfEventFlag(AND_14, OFF, TargetEventFlagType.EventFlag, 70000065);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1296);
    IfEventFlag(AND_15, OFF, TargetEventFlagType.EventFlag, 70000066);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(OR_01, PASS, AND_05);
    IfConditionGroup(OR_01, PASS, AND_06);
    IfConditionGroup(OR_01, PASS, AND_07);
    IfConditionGroup(OR_01, PASS, AND_08);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfConditionGroup(OR_01, PASS, AND_10);
    IfConditionGroup(OR_01, PASS, AND_11);
    IfConditionGroup(OR_01, PASS, AND_12);
    IfConditionGroup(OR_01, PASS, AND_13);
    IfConditionGroup(OR_01, PASS, AND_14);
    IfConditionGroup(OR_01, PASS, AND_15);
    IfConditionGroup(MAIN, FAIL, OR_01);
    SetEventFlag(X0_4, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Sin - Check Hostility
//----------------------------------------------
Event(9005, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1316);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 70000067);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1336);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 70000068);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1356);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 70000069);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1376);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 70000070);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1396);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 70000071);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1416);
    IfEventFlag(AND_06, OFF, TargetEventFlagType.EventFlag, 70000072);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1436);
    IfEventFlag(AND_07, OFF, TargetEventFlagType.EventFlag, 70000073);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1456);
    IfEventFlag(AND_08, OFF, TargetEventFlagType.EventFlag, 70000074);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 1476);
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventFlag, 70000075);
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 1496);
    IfEventFlag(AND_10, OFF, TargetEventFlagType.EventFlag, 70000076);
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 1516);
    IfEventFlag(AND_11, OFF, TargetEventFlagType.EventFlag, 70000077);
    IfEventFlag(AND_12, ON, TargetEventFlagType.EventFlag, 1536);
    IfEventFlag(AND_12, OFF, TargetEventFlagType.EventFlag, 70000078);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, 1556);
    IfEventFlag(AND_13, OFF, TargetEventFlagType.EventFlag, 70000079);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 1576);
    IfEventFlag(AND_14, OFF, TargetEventFlagType.EventFlag, 70000080);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1596);
    IfEventFlag(AND_15, OFF, TargetEventFlagType.EventFlag, 70000081);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(OR_01, PASS, AND_05);
    IfConditionGroup(OR_01, PASS, AND_06);
    IfConditionGroup(OR_01, PASS, AND_07);
    IfConditionGroup(OR_01, PASS, AND_08);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfConditionGroup(OR_01, PASS, AND_10);
    IfConditionGroup(OR_01, PASS, AND_11);
    IfConditionGroup(OR_01, PASS, AND_12);
    IfConditionGroup(OR_01, PASS, AND_13);
    IfConditionGroup(OR_01, PASS, AND_14);
    IfConditionGroup(OR_01, PASS, AND_15);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(X0_4, ON);
    ClearCompiledConditionGroupState(0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1316);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 70000067);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1336);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 70000068);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1356);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 70000069);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1376);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 70000070);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1396);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 70000071);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1416);
    IfEventFlag(AND_06, OFF, TargetEventFlagType.EventFlag, 70000072);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1436);
    IfEventFlag(AND_07, OFF, TargetEventFlagType.EventFlag, 70000073);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1456);
    IfEventFlag(AND_08, OFF, TargetEventFlagType.EventFlag, 70000074);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 1476);
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventFlag, 70000075);
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 1496);
    IfEventFlag(AND_10, OFF, TargetEventFlagType.EventFlag, 70000076);
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 1516);
    IfEventFlag(AND_11, OFF, TargetEventFlagType.EventFlag, 70000077);
    IfEventFlag(AND_12, ON, TargetEventFlagType.EventFlag, 1536);
    IfEventFlag(AND_12, OFF, TargetEventFlagType.EventFlag, 70000078);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, 1556);
    IfEventFlag(AND_13, OFF, TargetEventFlagType.EventFlag, 70000079);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 1576);
    IfEventFlag(AND_14, OFF, TargetEventFlagType.EventFlag, 70000080);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1596);
    IfEventFlag(AND_15, OFF, TargetEventFlagType.EventFlag, 70000081);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(OR_01, PASS, AND_05);
    IfConditionGroup(OR_01, PASS, AND_06);
    IfConditionGroup(OR_01, PASS, AND_07);
    IfConditionGroup(OR_01, PASS, AND_08);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfConditionGroup(OR_01, PASS, AND_10);
    IfConditionGroup(OR_01, PASS, AND_11);
    IfConditionGroup(OR_01, PASS, AND_12);
    IfConditionGroup(OR_01, PASS, AND_13);
    IfConditionGroup(OR_01, PASS, AND_14);
    IfConditionGroup(OR_01, PASS, AND_15);
    IfConditionGroup(MAIN, FAIL, OR_01);
    SetEventFlag(X0_4, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Sin - Check Hostility
//----------------------------------------------
Event(9006, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1816);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 70001073);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(X0_4, ON);
    ClearCompiledConditionGroupState(0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1816);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 70001073);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(MAIN, FAIL, OR_01);
    SetEventFlag(X0_4, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Sin - Shrine Handmaid Price Increase
//----------------------------------------------
Event(9010, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 70000061);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000295);
    SetEventFlag(74000295, OFF);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000294);
    SetEventFlag(74000294, OFF);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000293);
    SetEventFlag(74000293, OFF);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000292);
    SetEventFlag(74000292, OFF);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000291);
    SetEventFlag(74000291, OFF);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventFlag, 74000290);
    SetEventFlag(74000290, OFF);
    BatchSetNetworkconnectedEventFlags(1195, 1199, OFF);
    SetNetworkconnectedEventFlag(1195, ON);
    GotoUnconditionally(Label.LABEL20);
    Label20();
    SetEventFlag(70000061, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Fire Keeper - Eyes of a Fire Keeper Dialogue
//----------------------------------------------
Event(9011, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 700);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 50006020); // Eyes of a Fire Keeper turned in
    IfConditionGroup(MAIN, PASS, AND_01);
    
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14000110); // Flameless Shrine cutscene
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9307); // Abyss Watchers
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9309); // Twin Princes
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9314); // Aldrich
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9318); // Yhorm
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9307); // Abyss Watchers
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9307); // Abyss Watchers
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9309); // Twin Princes
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9309); // Twin Princes
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9314); // Aldrich
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9314); // Aldrich
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9318); // Yhorm
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9318); // Yhorm
    GotoUnconditionally(Label.LABEL1);
    
    Label0();
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14000110); // Flameless Shrine cutscene
    GotoUnconditionally(Label.LABEL1);
    
    Label1();
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 50006020);  // Eyes of a Fire Keeper turned in
    IfConditionGroup(OR_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    SkipIfConditionGroupStateCompiled(2, FAIL, OR_02);
    SetEventFlag(74000132, OFF);
    EndUnconditionally(EventEndType.Restart);
    
    SetEventFlag(74000132, ON);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Player - Set Gender Flag
//----------------------------------------------
Event(9012, Default, function() {
    IfPlayerGender(MAIN, Gender.Male);
    SetNetworkconnectedEventFlag(9013, ON);
    
    IfPlayerGender(MAIN, Gender.Female);
    SetNetworkconnectedEventFlag(9013, OFF);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Hawkwood - Twinkling Dragon Torso Stone
//----------------------------------------------
Event(9014, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 9014);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 13300761);
    DisplayGenericDialog(13007000, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 0);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 9014);
    SetEventFlag(9014, ON);
});

//----------------------------------------------
// Unknown
//----------------------------------------------
Event(9015, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 70000118);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1126);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9303); // Curse-Rotted Greatwood
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9314); // Aldrich
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(70000118, ON);
});

//----------------------------------------------
// Player - Cleric Check
//----------------------------------------------
Event(9016, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(9017, OFF);
    
    IfPlayersClass(MAIN, 20);
    
    SetEventFlag(9017, ON);
    
    IfPlayersClass(AND_01, 20);
    IfConditionGroup(MAIN, FAIL, AND_01);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Hawkwood - Dialogue Flag
//----------------------------------------------
Event(9018, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 73300202);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13204190); // Summon in m32
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13005710); // Summon in m30
    IfConditionGroup(MAIN, PASS, OR_01);
    
    SetEventFlag(73300202, ON);
});

//----------------------------------------------
// Eygon - Dialogue Flag
//----------------------------------------------
Event(9019, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 74000669);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13304192); // Summon in m33
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13014192); // Summon in m30_1
    IfConditionGroup(MAIN, PASS, OR_01);
    
    SetEventFlag(74000669, ON);
});

//----------------------------------------------
// 
//----------------------------------------------
Event(9020, Default, function(X0_4, X4_4, X8_4, X12_4, X16_1, X17_1) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, X4_4, X8_4);
    
    SetEventFlag(X0_4, OFF);
    
    IfPlayerInoutMap(OR_01, false, X16_1, X17_1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 74000013);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(X0_4, ON);
    
    IfPlayerInoutMap(OR_02, false, X16_1, X17_1);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 74000013);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(MAIN, FAIL, AND_02);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Hawkwood - Flag Check
//----------------------------------------------
Event(9100, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1103);
    SetEventFlag(X0_4, ON);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 1103);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Sirris - Flags
//----------------------------------------------
Event(9101, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfPlayerInoutMap(OR_01, true, 34, 1);
    IfPlayerInoutMap(OR_01, true, 30, 1);
    IfPlayerInoutMap(OR_01, true, 33, 0);
    IfPlayerInoutMap(OR_01, true, 35, 0);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfPlayerInoutMap(Label.LABEL0, true, 34, 1);
    GotoIfPlayerInoutMap(Label.LABEL1, true, 30, 1);
    GotoIfPlayerInoutMap(Label.LABEL2, true, 33, 0);
    GotoIfPlayerInoutMap(Label.LABEL3, true, 35, 0);
    Label0();
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1128);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 73500150);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetEventFlag(X0_4, ON);
    IfPlayerInoutMap(MAIN, false, 34, 1);
    EndUnconditionally(EventEndType.Restart);
    Label1();
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 1128);
    IfConditionGroup(AND_02, PASS, OR_03);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 73500150);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_02);
    SetEventFlag(X0_4, ON);
    IfPlayerInoutMap(MAIN, false, 30, 1);
    EndUnconditionally(EventEndType.Restart);
    Label2();
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 1126);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 1128);
    IfConditionGroup(AND_03, PASS, OR_04);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 73500150);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    SetEventFlag(X0_4, ON);
    IfPlayerInoutMap(MAIN, false, 33, 0);
    EndUnconditionally(EventEndType.Restart);
    Label3();
    IfEventFlag(OR_05, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(OR_05, ON, TargetEventFlagType.EventFlag, 1126);
    IfEventFlag(OR_05, ON, TargetEventFlagType.EventFlag, 1128);
    IfConditionGroup(AND_04, PASS, OR_05);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 73500150);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_04);
    SetEventFlag(X0_4, ON);
    IfPlayerInoutMap(MAIN, false, 35, 0);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Greirat - Quest Stage flags
//----------------------------------------------
Event(9102, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfPlayerInoutMap(OR_01, true, 31, 0); // Undead Settlement
    IfPlayerInoutMap(OR_01, true, 37, 0); // Irithyll
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfPlayerInoutMap(Label.LABEL0, true, 31, 0);
    GotoIfPlayerInoutMap(Label.LABEL1, true, 37, 0);
    
    // Undead Settlement
    Label0();
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1202);
    SetEventFlag(X0_4, ON);
    IfPlayerInoutMap(MAIN, false, 31, 0);
    EndUnconditionally(EventEndType.Restart);
    
    // Irithyll
    Label1();
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1204);
    SetEventFlag(X0_4, ON);
    IfPlayerInoutMap(MAIN, false, 37, 0);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Orbeck - Flags
//----------------------------------------------
Event(9103, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.Restart, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1223);
    SetEventFlag(X0_4, ON);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 1223);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Irina/Eygon - Flags
//----------------------------------------------
Event(9104, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1301); 
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1303);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1295); // "Passive"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1298); // "Killed"
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X0_4, ON);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1301);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1303);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1295); // "Passive"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1298); // "Killed"
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Anri - Flags
//----------------------------------------------
Event(9105, Default, function(X0_4, X4_4, X8_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    SetEventFlag(X8_4, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1341); 
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 9311); // Deacons of the Deep
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfEventFlag(Label.LABEL10, OFF, TargetEventFlagType.EventFlag, 9013);
    SetEventFlag(X0_4, ON);
    GotoUnconditionally(Label.LABEL20);
    Label10();
    SetEventFlag(X4_4, ON);
    GotoUnconditionally(Label.LABEL20);
    Label20();
    SetEventFlag(X8_4, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1341);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 9311);
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Sirris - Flags
//----------------------------------------------
Event(9106, Restart, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1130);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1138);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X0_4, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1130);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 1138);
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Yuria - Flags
//----------------------------------------------
Event(9107, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1042);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1055);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X0_4, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1042);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1055);
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Yuria - Flags
//----------------------------------------------
Event(9108, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1041, 1042);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1055);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X0_4, ON);
    IfBatchEventFlags(AND_02, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1041, 1042);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1055);
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Yuria - Flags
//----------------------------------------------
Event(9109, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1042);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1055);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X0_4, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1042);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1055);
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Yuria - Flags
//----------------------------------------------
Event(9110, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfBatchEventFlags(AND_02, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1041, 1042);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1058);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1056);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfBatchEventFlags(OR_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1043, 1044);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(X0_4, ON);
    IfBatchEventFlags(AND_04, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1041, 1042);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 1058);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 1056);
    IfConditionGroup(AND_04, PASS, OR_04);
    IfConditionGroup(OR_03, PASS, AND_04);
    IfBatchEventFlags(OR_03, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1043, 1044);
    IfConditionGroup(MAIN, FAIL, OR_03);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Anri - Flags
//----------------------------------------------
Event(9111, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1347);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1355);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13700651);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfEventFlag(Label.LABEL10, OFF, TargetEventFlagType.EventFlag, 9013);
    SetEventFlag(X0_4, ON);
    GotoUnconditionally(Label.LABEL20);
    Label10();
    SetEventFlag(X4_4, ON);
    GotoUnconditionally(Label.LABEL20);
    Label20();
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1347);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1355);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 13700651);
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
//
//----------------------------------------------
Event(9112, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 8200);
    SetEventFlag(X0_4, ON);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 8200);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Lapp - Flags
//----------------------------------------------
Event(9113, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfPlayerInoutMap(AND_01, true, 50, 0);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1803, 1804);
    IfPlayerInoutMap(AND_02, true, 51, 0);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1811);
    IfPlayerInoutMap(AND_03, true, 51, 1);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1811);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(X0_4, ON);
    IfPlayerInoutMap(AND_04, true, 50, 0);
    IfBatchEventFlags(AND_04, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1803, 1804);
    IfPlayerInoutMap(AND_05, true, 51, 0);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1811);
    IfPlayerInoutMap(AND_06, true, 51, 1);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1811);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(OR_02, PASS, AND_06);
    IfConditionGroup(MAIN, FAIL, OR_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Shira - Flags
//----------------------------------------------
Event(9114, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1821);
    SetEventFlag(X0_4, ON);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 1821);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Kill Count Tracker
// <trigger flag>, <end flag>, <set flag>, <bits>, <bits>, <threshold>, <compare value>
//----------------------------------------------
Event(9120, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_1, X20_4, X24_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X4_4);
    
    IfMapCeremonyState(AND_01, Disabled, 40, 0, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    // Check bosses
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, X0_4);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9300);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9300);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9301);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9301);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9302);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9302);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9303);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9303);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9304);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9304);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9305);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9305);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9306);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9306);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9307);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9307);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9308);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9308);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9309);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9309);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9311);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9311);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9313);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9313);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9314);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9314);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9315);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9315);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9317);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9317);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9318);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9318);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9319);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9319);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9320);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9320);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9321);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9321);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9322);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9322);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9323);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9323);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9324);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9324);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9325);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9325);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9326);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9326);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9327);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9327);
    GotoIfComparison(Label.LABEL0, ComparisonType.NotEqual, X24_4, 1);
    
    IfBatchEventFlags(AND_02, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 9300, 9309);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9311);
    IfBatchEventFlags(AND_02, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 9313, 9315);
    IfBatchEventFlags(AND_02, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 9317, 9321);
    
    // DLC 1
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 6951);
    IfBatchEventFlags(AND_02, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 9322, 9323);
    
    // DLC 2
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 6952);
    IfBatchEventFlags(AND_02, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 9324, 9327);
    
    IfConditionGroup(OR_01, PASS, AND_02);
    
    Label0();
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfEventFlag(EventEndType.Restart, OFF, TargetEventFlagType.EventFlag, X0_4);
    IncrementEventValue(X8_4, X12_4, X20_4);
    IfEventValue(OR_02, X8_4, X16_1, ComparisonType.Equal, X20_4);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, FAIL, OR_02);
    SetEventFlag(X4_4, ON);
});

//----------------------------------------------
//
//----------------------------------------------
Event(690, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X12_4);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 2);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 2);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 3);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 3);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 4);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 5);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 5);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 6);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 6);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 7);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 7);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 8);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 8);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 9);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 10);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 10);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 11);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 11);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 12);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 12);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 13);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 14);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 15);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 15);
    IfConditionGroup(MAIN, PASS, OR_01);
    IncrementEventValue(X0_4, X4_4, X8_4);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
//
//----------------------------------------------
Event(840, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetEventFlag(X0_4, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 844);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 847);
    RotateCharacter(10000, X8_4, -1, false);
    ForceAnimationPlayback(10000, X4_4, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(10000, SoundType.s_SFX, 123456789);
    WaitFixedTimeSeconds(4);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, -1);
    ForceAnimationPlayback(10000, X12_4, true, false, false, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
//
//----------------------------------------------
Event(870, Default, function(X0_1, X4_4) {
    IfPlayersCovenant(MAIN, X0_1);
    SetEventFlag(X4_4, ON);
    IfPlayersCovenant(AND_01, X0_1);
    IfConditionGroup(MAIN, FAIL, AND_01);
    SetEventFlag(X4_4, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Game Flags - Once
//------------------------------------------------
Event(20001, Default, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 25000099);
    
    var flag_NeverDied           = 25000030;
    var flag_NeverHit            = 25000031;
    var flag_TranspositionActive = 74000171;
    var flag_CoiledSword_Placed  = 14000101;
    
    // Infusion availability
    SetEventFlag(300, ON); 
    SetEventFlag(301, ON); 
    SetEventFlag(302, ON); 
    SetEventFlag(303, ON); 
    
    // Game State
    SetEventFlag(flag_NeverDied, ON);
    SetEventFlag(flag_NeverHit, ON);
    SetEventFlag(flag_TranspositionActive, ON);
    SetEventFlag(flag_CoiledSword_Placed, ON);
    
    // Bonfire Unlocks
    SetEventFlag(13100004, ON); // Undead Settlement
    SetEventFlag(13000000, ON); // High Wall of Lothric

    SetEventFlag(25000099, ON); // Execution flag
});

//------------------------------------------------
// Game Flags - On Load
//------------------------------------------------
Event(20002, Restart, function(X0_4, X4_4) {
    // Random Flag - Used for Flirt/Crow Drop Type
    BatchSetEventFlags(25008900, 25008902, OFF); // Reset
    RandomlySetEventFlagInRange(25008900, 25008902, ON); // Outcome
    
    // Memories
    SetEventFlag(14700000, ON);
    SetEventFlag(15300000, ON);
    SetEventFlag(15400000, ON);
    
    // Reset boss fight status flags used by Phantoms
    SetEventFlag(25001100, OFF);
    SetEventFlag(25001110, OFF);
    
    // Batch Flag Sets
    BatchSetEventFlags(25000011, 25000017, OFF); // Reset NG+ flags
    
    // Conditional Flag Sets
    IfGameCycle(MAIN, ComparisonType.GreaterOrEqual, 1);
    SetEventFlag(25000011, ON); // NG+1
    
    IfGameCycle(MAIN, ComparisonType.GreaterOrEqual, 2);
    SetEventFlag(25000012, ON); // NG+2
    
    IfGameCycle(MAIN, ComparisonType.GreaterOrEqual, 3);
    SetEventFlag(25000013, ON); // NG+3
    
    IfGameCycle(MAIN, ComparisonType.GreaterOrEqual, 4);
    SetEventFlag(25000014, ON); // NG+4
    
    IfGameCycle(MAIN, ComparisonType.GreaterOrEqual, 5);
    SetEventFlag(25000015, ON); // NG+5
    
    IfGameCycle(MAIN, ComparisonType.GreaterOrEqual, 6);
    SetEventFlag(25000016, ON); // NG+6
    
    IfGameCycle(MAIN, ComparisonType.GreaterOrEqual, 7);
    SetEventFlag(25000017, ON); // NG+7
});

//------------------------------------------------
// No Hit State
//------------------------------------------------
Event(20003, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    var flag_WasHit = 25006000;
    
    SetEventFlag(flag_WasHit, OFF);
    
    IfCharacterHasSpeffect(MAIN, 10000, 112060, true, ComparisonType.Equal, 1);

    SetEventFlag(flag_WasHit, ON);
});

//------------------------------------------------
// Deathless Run State
//------------------------------------------------
Event(20004, Default, function() {
    SetNetworkSyncState(Disabled);
    
    var flag_NeverDied = 25000030;
    
    IfCharacterHasSpeffect(MAIN, 10000, 112100, true, ComparisonType.Equal, 1);
    
    SetEventFlag(flag_NeverDied, OFF);
});

//------------------------------------------------
// Hitless Run State
//------------------------------------------------
Event(20005, Default, function() {
    SetNetworkSyncState(Disabled);
    
    var flag_NeverHit = 25000031;
    
    IfCharacterHasSpeffect(MAIN, 10000, 112101, true, ComparisonType.Equal, 1);
    SetEventFlag(flag_NeverHit, OFF);
});

//------------------------------------------------
// Baseline SpEffects
//------------------------------------------------
Event(20006, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    // Kill Tracker
    SkipIfCharacterHasSpEffect(1, 10000, 160010000, true, ComparisonType.Equal, 1); // Skip if already applied
    SetSpEffect(10000, 160010000);
    
    // BB Dodge Toggle - Add SpEffect when enabled
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25009750); // Skip if BB Dodge is not activated
    SkipIfCharacterHasSpEffect(1, 10000, 112414, true, ComparisonType.Equal, 1); // Skip if already applied
    SetSpEffect(10000, 112414);
    
    // BB Dodge Toggle - Clear SpEffect when disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009750); // Skip if BB Dodge is activated
    SkipIfCharacterHasSpEffect(1, 10000, 112414, false, ComparisonType.Equal, 1); // Skip if not applied
    ClearSpEffect(10000, 112414);
    
    EndUnconditionally(EventEndType.Restart);
});


//------------------------------------------------
// Covenant Material Drops
//------------------------------------------------
Event(20007, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpeffect(AND_01, 10000, 160010010, false, ComparisonType.Equal, 1); // Is not in cooldown
    IfCharacterHasSpeffect(AND_01, 10000, 160010001, true, ComparisonType.Equal, 1); // Enemy has died
    IfConditionGroup(MAIN, PASS, AND_01);
    
    // Darkmoon Faithful
    IfCharacterHasSpeffect(OR_01, 10000, 160100102, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160100112, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160100122, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160100132, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160100142, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_01);
    AwardItemsIncludingClients(800011000); 
    SetSpEffect(10000, 160010010);
    
    // Watchdogs of Farron
    IfCharacterHasSpeffect(OR_02, 10000, 160100202, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160100212, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160100222, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160100232, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160100242, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_02);
    AwardItemsIncludingClients(800011010); 
    SetSpEffect(10000, 160010010);
    
    // Aldrich Faithful 
    IfCharacterHasSpeffect(OR_03, 10000, 160100302, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 10000, 160100312, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 10000, 160100322, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 10000, 160100332, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 10000, 160100342, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_03);
    AwardItemsIncludingClients(800011020); 
    SetSpEffect(10000, 160010010);
    
    // Warrior of Sunlight
    IfCharacterHasSpeffect(OR_04, 10000, 160100402, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_04, 10000, 160100412, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_04, 10000, 160100422, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_04, 10000, 160100432, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_04, 10000, 160100442, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_04);
    AwardItemsIncludingClients(800011030); 
    SetSpEffect(10000, 160010010);
    
    // Mound-makers
    IfCharacterHasSpeffect(OR_05, 10000, 160100502, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_05, 10000, 160100512, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_05, 10000, 160100522, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_05, 10000, 160100532, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_05, 10000, 160100542, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_05);
    AwardItemsIncludingClients(800011040); 
    SetSpEffect(10000, 160010010);
    
    // Thieves' Pact
    IfCharacterHasSpeffect(OR_06, 10000, 160100602, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_06, 10000, 160100612, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_06, 10000, 160100622, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_06, 10000, 160100632, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_06, 10000, 160100642, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_06);
    AwardItemsIncludingClients(800011050); 
    SetSpEffect(10000, 160010010);
    
    // Chaos Servant
    IfCharacterHasSpeffect(OR_07, 10000, 160100702, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_07, 10000, 160100712, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_07, 10000, 160100722, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_07, 10000, 160100732, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_07, 10000, 160100742, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_07);
    AwardItemsIncludingClients(800011060); 
    SetSpEffect(10000, 160010010);
    
    // Rosaria's Fingers
    IfCharacterHasSpeffect(OR_08, 10000, 160100802, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_08, 10000, 160100812, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_08, 10000, 160100822, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_08, 10000, 160100832, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_08, 10000, 160100842, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_08);
    AwardItemsIncludingClients(800011070); 
    SetSpEffect(10000, 160010010);
    
    // Spears of the Church
    IfCharacterHasSpeffect(OR_09, 10000, 160101802, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_09, 10000, 160101812, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_09, 10000, 160101822, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_09, 10000, 160101832, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_09, 10000, 160101842, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_09);
    AwardItemsIncludingClients(800011120); 
    SetSpEffect(10000, 160010010);
    
    // Vinheim Scholars 
    IfCharacterHasSpeffect(OR_10, 10000, 160100902, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_10, 10000, 160100912, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_10, 10000, 160100922, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_10, 10000, 160100932, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_10, 10000, 160100942, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_10);
    AwardItemsIncludingClients(800011080); 
    SetSpEffect(10000, 160010010);
    
    // Pilgrims of Dark
    IfCharacterHasSpeffect(OR_11, 10000, 160101002, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_11, 10000, 160101012, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_11, 10000, 160101022, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_11, 10000, 160101032, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_11, 10000, 160101042, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_11);
    AwardItemsIncludingClients(800011090); 
    SetSpEffect(10000, 160010010);
    
    // Way of White
    IfCharacterHasSpeffect(OR_12, 10000, 160101102, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_12, 10000, 160101112, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_12, 10000, 160101122, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_12, 10000, 160101132, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_12, 10000, 160101142, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_12);
    AwardItemsIncludingClients(800011100); 
    SetSpEffect(10000, 160010010);
    
    // Dragon Remnants
    IfCharacterHasSpeffect(OR_13, 10000, 160101202, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_13, 10000, 160101212, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_13, 10000, 160101222, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_13, 10000, 160101232, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_13, 10000, 160101242, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_13);
    AwardItemsIncludingClients(800011110); 
    SetSpEffect(10000, 160010010);
    
    // Blue Sentinels
    IfCharacterHasSpeffect(OR_14, 10000, 160101302, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_14, 10000, 160101312, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_14, 10000, 160101322, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_14, 10000, 160101332, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_14, 10000, 160101342, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_14);
    AwardItemsIncludingClients(800011000); 
    SetSpEffect(10000, 160010010);
    
    // Way of Blue
    IfCharacterHasSpeffect(OR_15, 10000, 160101402, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_15, 10000, 160101412, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_15, 10000, 160101422, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_15, 10000, 160101432, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_15, 10000, 160101442, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_15);
    AwardItemsIncludingClients(800011130); 
    SetSpEffect(10000, 160010010);
    
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Covenant Material Drops
//------------------------------------------------
Event(20008, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpeffect(AND_01, 10000, 160010010, false, ComparisonType.Equal, 1); // Is not in cooldown
    IfCharacterHasSpeffect(AND_01, 10000, 160010001, true, ComparisonType.Equal, 1); // Enemy has died
    IfConditionGroup(MAIN, PASS, AND_01);

    // Company of Champions
    IfCharacterHasSpeffect(OR_01, 10000, 160101502, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160101512, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160101522, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160101532, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160101542, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_01);
    AwardItemsIncludingClients(800011140); 
    SetSpEffect(10000, 160010010);
    
    // Servant of the Rat
    IfCharacterHasSpeffect(OR_02, 10000, 160101602, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160101612, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160101622, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160101632, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160101642, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_02);
    AwardItemsIncludingClients(800011150); 
    SetSpEffect(10000, 160010010);
    
    // Ritualist Pact
    IfCharacterHasSpeffect(OR_03, 10000, 160101702, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 10000, 160101712, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 10000, 160101722, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 10000, 160101732, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 10000, 160101742, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_03);
    AwardItemsIncludingClients(800011160); 
    SetSpEffect(10000, 160010010);
    
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Covenant Consumable Drops
//------------------------------------------------
Event(20009, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpeffect(AND_01, 10000, 160010011, false, ComparisonType.Equal, 1); // Is not in cooldown
    IfCharacterHasSpeffect(AND_01, 10000, 160010001, true, ComparisonType.Equal, 1); // Enemy has died
    IfConditionGroup(MAIN, PASS, AND_01);

    // Thieves' Pact
    IfCharacterHasSpeffect(OR_01, 10000, 160100602, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160100612, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160100622, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160100632, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 160100642, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_01);
    AwardItemsIncludingClients(800020000); 
    SetSpEffect(10000, 160010011);

    // Way of Blue
    IfCharacterHasSpeffect(OR_02, 10000, 160101402, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160101412, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160101422, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160101432, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, 10000, 160101442, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_02);
    AwardItemsIncludingClients(800020010); 
    SetSpEffect(10000, 160010011);

    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Enable Curse
//------------------------------------------------
Event(20010, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    
    // Skip if already added
    SkipIfCharacterHasSpeffect(1, 10000, X4_4, true, ComparisonType.Equal, 1);
    SetSpeffect(10000, X4_4);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009812); // Skip if in Mythic mode
    SkipIfCharacterHasSpeffect(1, 10000, X8_4, true, ComparisonType.Equal, 1);
    SetSpeffect(10000, X8_4);
    
    WaitFixedTimeSeconds(1.0);
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Disable Curse
//------------------------------------------------
Event(20020, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, X0_4);
    
    // Skip if already removed
    SkipIfCharacterHasSpeffect(1, 10000, X4_4, false, ComparisonType.Equal, 1);
    ClearSpeffect(10000, X4_4);
    
    // Skip if already removed
    SkipIfCharacterHasSpeffect(1, 10000, X4_4, false, ComparisonType.Equal, 1);
    ClearSpeffect(10000, X8_4);
    
    WaitFixedTimeSeconds(1.0);
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Pyromancer's Parting Flame - Ascension
//------------------------------------------------
Event(20042, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpeffect(AND_01, 10000, 130134100, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 130134101);
    SetSpeffect(10000, 130134110);
    
    IfCharacterHasSpeffect(AND_01, 10000, 130134100, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ClearSpeffect(10000, 130134101);
    ClearSpeffect(10000, 130134110);
    
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Numbness - Change Camera
//------------------------------------------------
Event(20043, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpeffect(AND_01, X0_4, X4_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCamera(20000, 20000);
    Label0();
    IfCharacterHasSpeffect(AND_02, X0_4, X4_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, FAIL, AND_02);
    ChangeCamera(-1, -1);
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Item - Camera Override
// <trigger speffect>, <camera entry>
//------------------------------------------------
Event(20045, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    
    // Add camera effect if trigger effect is present
    SkipIfCharacterHasSpEffect(1, 10000, X0_4, false, ComparisonType.Equal, 1);
    ChangeCamera(X4_4, X4_4);

    // Remove if trigger effect has been removed
    SkipIfCharacterHasSpEffect(1, 10000, X0_4, true, ComparisonType.Equal, 1);
    ChangeCamera(-1, -1);
    
    // Remove if Cleansing Potion is used
    SkipIfCharacterHasSpEffect(1, 10000, 160701000, false, ComparisonType.Equal, 1);
    ChangeCamera(-1, -1);

    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Skeleton Illusion - Head
//------------------------------------------------
Event(20046, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpeffect(MAIN, 10000, 160703075, true, ComparisonType.Equal, 1);
    
    SetEventFlag(9690, OFF);
    SetEventFlag(9691, OFF);
    SetEventFlag(9692, OFF);
    SetEventFlag(9693, OFF);
    RandomlySetEventFlagInRange(9690, 9693, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 9690);
    SetSpeffect(10000, 160703080);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 9691);
    SetSpeffect(10000, 160703100);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 9692);
    SetSpeffect(10000, 160703120);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 9693);
    SetSpeffect(10000, 160703140);
    
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Skeleton Illusion - Body
//------------------------------------------------
Event(20047, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpeffect(MAIN, 10000, 160703076, true, ComparisonType.Equal, 1);
    
    SetEventFlag(9690, OFF);
    SetEventFlag(9691, OFF);
    SetEventFlag(9692, OFF);
    SetEventFlag(9693, OFF);
    RandomlySetEventFlagInRange(9690, 9693, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 9690);
    SetSpeffect(10000, 160703090);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 9691);
    SetSpeffect(10000, 160703110);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 9692);
    SetSpeffect(10000, 160703130);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 9693);
    SetSpeffect(10000, 160703150);
    
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Frostbite Removal
//------------------------------------------------
Event(20048, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpEffect(OR_01, 10000, 3092, true, ComparisonType.Equal, 1); // If Player uses Rime-blue Moss Clump
    IfCharacterHasSpEffect(OR_01, 10000, 3080, true, ComparisonType.Equal, 1); // If Player uses Divine Blessing
    IfCharacterHasSpEffect(OR_01, 10000, 103508000, true, ComparisonType.Equal, 1); // If Player uses Caressing Tears
    IfConditionGroup(MAIN, PASS, OR_01);
    ClearSpEffect(10000, 180021000); // Clear Frostbite Effects
    WaitFixedTimeSeconds(0.5);
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------------
// Crown of the Great Lord
//------------------------------------------------
Event(20040, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfCharacterHasSpeffect(AND_01, 10000, 160409012, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 490, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetSpeffect(10000, 160409013);
    
    IfCharacterHasSpeffect(OR_01, 10000, 160409012, false, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 10000, 490, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    ClearSpeffect(10000, 160409013);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Standard Mode
//----------------------------------------------
Event(20050, Restart, function() {
    var flag_StandardMode = 25009810;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_StandardMode);
});

//----------------------------------------------
// Wanderer Mode
//----------------------------------------------
Event(20051, Restart, function() {
    var flag_WandererMode = 25009811;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_WandererMode);
    SetEventFlag(25000055, ON); // Disable Reinforcement
    
    // Corrupted Gundyr
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002001);
    SetSpEffect(10000, 260110000);
    
    // Vordt
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002002);
    SetSpEffect(10000, 260110001);
    
    // Curse-rotted Greatwood
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002003);
    SetSpEffect(10000, 260110002);
    
    // Crystal Sage
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002004);
    SetSpEffect(10000, 260110003);
    
    // Deacons
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002005);
    SetSpEffect(10000, 260110004);
    
    // Abyss Watchers
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002006);
    SetSpEffect(10000, 260110005);
    
    // High Lord Wolnir
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002007);
    SetSpEffect(10000, 260110006);
    
    // Old Demon King
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002008);
    SetSpEffect(10000, 260110007);
    
    // Pontiff Sulyvahn
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002009);
    SetSpEffect(10000, 260110008);
    
    // Aldrich
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002010);
    SetSpEffect(10000, 260110009);
    
    // Yhorm
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002011);
    SetSpEffect(10000, 260110010);
    
    // Dancer
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002012);
    SetSpEffect(10000, 260110011);
    
    // Oceiros
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002013);
    SetSpEffect(10000, 260110012);
    
    // Dragonslayer Armour
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002014);
    SetSpEffect(10000, 260110013);
    
    // Ancient Wyvern
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002015);
    SetSpEffect(10000, 260110014);
    
    // Nameless King
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002016);
    SetSpEffect(10000, 260110015);
    
    // Champion Gundyr
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002017);
    SetSpEffect(10000, 260110016);
    
    // Twin Princes
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002018);
    SetSpEffect(10000, 260110017);
    
    // Soul of Cinder
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002019);
    SetSpEffect(10000, 260110018);
    
    // Sister Friede
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002020);
    SetSpEffect(10000, 260110019);
    
    // Lordran Remnants
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002021);
    SetSpEffect(10000, 260110020);
    
    // Demon Prince
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002022);
    SetSpEffect(10000, 260110021);
    
    // Darkeater Midir
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002023);
    SetSpEffect(10000, 260110022);
    
    // Slave Knight Gael
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002024);
    SetSpEffect(10000, 260110023);
    
    // Halflight
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002025);
    SetSpEffect(10000, 260110024);
    
    // Prince Dorthinus
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002026);
    SetSpEffect(10000, 260110025);
    
    // Cathedral Guardian
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002027);
    SetSpEffect(10000, 260110026);
    
    // Mirror Knight
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002028);
    SetSpEffect(10000, 260110027);
    
    // Aborr
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002029);
    SetSpEffect(10000, 260110028);
    
    // Princess Yngvil
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002030);
    SetSpEffect(10000, 260110029);
    
    // Trio of Explorers
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002031);
    SetSpEffect(10000, 260110030);
    
    // Twisted Knight
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002032);
    SetSpEffect(10000, 260110031);
    
    // Fallen Protector
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002033);
    SetSpEffect(10000, 260110032);
    
    // Titanite Abomination
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002034);
    SetSpEffect(10000, 260110033);
    
    // The Marauder
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25002035);
    SetSpEffect(10000, 260110034);
});

//----------------------------------------------
// Mythic Mode
//----------------------------------------------
Event(20052, Restart, function() {
    var flag_MythicMode = 25009812;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_MythicMode);
    SetSpEffect(10000, 250000100);
    SetSpEffect(10000, 250000101);
    SetSpEffect(10000, 250000102);
    SetSpEffect(10000, 250000103);
    SetSpEffect(10000, 250000104);
    SetSpEffect(10000, 250000105);
    SetEventFlag(25000055, ON); // Disable Reinforcement
    SetEventFlag(25000440, ON); // Curse of Attraction
});

//----------------------------------------------
// Starting Location
//----------------------------------------------
Event(20053, Restart, function() {
    var flag_GameConfiguration_Set        = 25009800;
    var flag_Location_UntendedGraves      = 25009820;
    var flag_Location_ArchdragonPeak      = 25009821;
    var flag_Location_FarronKeep          = 25009822;
    var flag_Location_CatacombsOfCarthus  = 25009823;
    var flag_Location_Irithyll            = 25009824;
    var flag_Location_ProfanedCapital     = 25009825;
    var flag_Location_ConsumedKingsGarden = 25009826;
    var flag_Location_LothricCastle       = 25009827;
    var flag_Location_CathedralOfTheDeep  = 25009828;
    var flag_Location_Ariandel            = 25009829;
    var flag_Location_DregHeap            = 25009830;
    var flag_Location_RingedCity          = 25009831;
    var flag_Location_Random              = 25009840;
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 25009801);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_GameConfiguration_Set);
    SetEventFlag(14000000, ON); // Firelink Shrine
    
    // Skip if in Gauntlet mode
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 25009813);
    
    // Random
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, flag_Location_Random);
    BatchSetEventFlags(25009820, 25009831, OFF);
    RandomlySetEventFlagInRange(25009820, 25009831, ON);
    
    // Untended Graves
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventFlag, flag_Location_UntendedGraves);
    SetEventFlag(14000003, ON); // Untended Graves
    WarpPlayer(40, 0, 4000973);
    SetPlayerRespawnPoint(4000973);
    SetMapCeremony(40, 0, 10);
    
    // Archdragon Peak
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_ArchdragonPeak);
    SetEventFlag(13200000, ON); // Archdragon Peak
    WarpPlayer(32, 0, 3200970);
    SetPlayerRespawnPoint(3200970);
    
    // Farron Keep
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_FarronKeep);
    SetEventFlag(13300000, ON); // Halfway Fortress
    WarpPlayer(33, 0, 3300970);
    SetPlayerRespawnPoint(3300970);
    
    // Catacombs of Carthus
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_CatacombsOfCarthus);
    SetEventFlag(13800006, ON); // Catacombs of Carthus
    WarpPlayer(38, 0, 3800976);
    SetPlayerRespawnPoint(3800976);
    
    // Irithyll of the Boreal Valley
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_Irithyll);
    SetEventFlag(13700004, ON); // Central Irithyll
    WarpPlayer(37, 0, 3700974);
    SetPlayerRespawnPoint(3700974);
    
    // Profaned Capital
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_ProfanedCapital);
    SetEventFlag(13900001, ON); // Church of Sin
    WarpPlayer(39, 0, 3900970);
    SetPlayerRespawnPoint(3900970);
    
    // Consumed King's Garden
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_ConsumedKingsGarden);
    SetEventFlag(13000001, ON); // Consumed King's Garden
    WarpPlayer(30, 0, 3000971);
    SetPlayerRespawnPoint(3000971);
    
    // Lothric Castle
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_LothricCastle);
    SetEventFlag(13010000, ON); // Lothric Castle
    WarpPlayer(30, 1, 3010972);
    SetPlayerRespawnPoint(3010972);
    
    // Cathedral of the Deep
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_CathedralOfTheDeep);
    SetEventFlag(13500000, ON); // Cleaning Chapel
    WarpPlayer(35, 0, 3500970);
    SetPlayerRespawnPoint(3500970);
    
    // Frozen Note - Ariandel
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventFlag, 6951);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_Ariandel);
    SetEventFlag(14500001, ON); // Snowfield
    WarpPlayer(45, 0, 4500971);
    SetPlayerRespawnPoint(4500971);
    
    // Dreg Note - Dreg Heap
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventFlag, 6952);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_DregHeap);
    SetEventFlag(15000001, ON); // The Dreg Heap
    WarpPlayer(50, 0, 5000971);
    SetPlayerRespawnPoint(5000971);
    
    // Burning Note - Ringed City
    SkipIfEventFlag(4, OFF, TargetEventFlagType.EventFlag, 6952);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, flag_Location_RingedCity);
    SetEventFlag(15100002, ON); // Mausoleum Lookout
    WarpPlayer(51, 0, 5100972);
    SetPlayerRespawnPoint(5100972);
    
    Label0();
    
    // Skip to Firelink Shrine if in Gauntlet mode
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009813);
    WarpPlayer(40, 0, 4000970); // Firelink Shrine
    
    // Set setup flag
    SetEventFlag(25009801, ON);
});

//----------------------------------------------
// Explorer Mode
//----------------------------------------------
Event(20054, Restart, function() {
    var flag_ExplorerMode = 25009814;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_ExplorerMode);
    
    SetSpEffect(10000, 250000200);
    SetSpEffect(10000, 250000201);
});

//----------------------------------------------
// Gauntlet Mode - Setup
//----------------------------------------------
Event(20070, Restart, function() {
    var flag_GauntletMode             = 25009813;
    var flag_Gauntlet_Setup_Completed = 25009804;
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_GauntletMode);
    
    SetSpEffect(10000, 260120100); // Soul boost
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Gauntlet_Setup_Completed);
    
    AwardItemLot(800002010); // Initial tokens
    SetEventFlag(25009803, ON); // Unlock Memories
    
    // Coals
    SetEventFlag(25009580, ON);
    SetEventFlag(25009581, ON);
    SetEventFlag(25009582, ON);
    SetEventFlag(25009583, ON);
    
    BatchSetEventFlags(53000000, 53002999, ON);
    BatchSetEventFlags(53010000, 53012999, ON);
    BatchSetEventFlags(53100000, 53102999, ON);
    BatchSetEventFlags(53200000, 53202999, ON);
    BatchSetEventFlags(53300000, 53302999, ON);
    BatchSetEventFlags(53410000, 53412999, ON);
    BatchSetEventFlags(53500000, 53502999, ON);
    BatchSetEventFlags(53700000, 53702999, ON);
    BatchSetEventFlags(53800000, 53802999, ON);
    BatchSetEventFlags(53900000, 53902999, ON);
    BatchSetEventFlags(54000000, 54002999, ON);
    BatchSetEventFlags(54100000, 54102999, ON);
    BatchSetEventFlags(54500000, 54502999, ON);
    BatchSetEventFlags(55000000, 55002999, ON);
    BatchSetEventFlags(55100000, 55102999, ON);
    BatchSetEventFlags(55110000, 55112999, ON);
    
    SetEventFlag(flag_Gauntlet_Setup_Completed, ON);

});

//----------------------------------------------
// Gauntlet Mode - Set/Endless Gauntlet
//----------------------------------------------
Event(20071, Restart, function() {
    var flag_GauntletMode     = 25009813;
    var flag_SetGauntlet      = 25003200;
    var flag_EndlessGauntlet  = 25003202;
    var flag_DisableDLCBosses = 25009805;
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_GauntletMode);
    
    // Wait fo trigger
    IfCharacterHasSpEffect(MAIN, 10000, 260120000, true, ComparisonType.Equal, 1);

    // End if neither Set or Endless Gauntlet are ON
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, flag_SetGauntlet);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, flag_EndlessGauntlet);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    
    // Corrupted Gundyr
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002001);  // Already Killed
    SetSpEffect(10000, 260100010);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Vordt
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002002);  // Already Killed
    SetSpEffect(10000, 260100020);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Aborr
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002029);  // Already Killed
    SetSpEffect(10000, 260100300);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Curse-rotted Greatwood
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002003);  // Already Killed
    SetSpEffect(10000, 260100030);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Crystal Sage
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002004);  // Already Killed
    SetSpEffect(10000, 260100040);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Cathedral Guardian
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002027);  // Already Killed
    SetSpEffect(10000, 260100280);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Deacons of the Deep
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002005);  // Already Killed
    SetSpEffect(10000, 260100050);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Abyss Watchers
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002006);  // Already Killed
    SetSpEffect(10000, 260100060);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // High Lord Wolnir
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002007);  // Already Killed
    SetSpEffect(10000, 260100070);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Old Demon King
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002008);  // Already Killed
    SetSpEffect(10000, 260100080);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Pontiff Sulyvahn
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002009);  // Already Killed
    SetSpEffect(10000, 260100090);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Aldrich
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002010);  // Already Killed
    SetSpEffect(10000, 260100100);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Lordran Remnants
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002021);  // Already Killed
    SetSpEffect(10000, 260100210);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Fallen Protector
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002033);  // Already Killed
    SetSpEffect(10000, 260100340);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Yhorm
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002011);  // Already Killed
    SetSpEffect(10000, 260100110);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Dancer
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002012);  // Already Killed
    SetSpEffect(10000, 260100120);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Oceiros
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002013);  // Already Killed
    SetSpEffect(10000, 260100130);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Twisted Knight
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002032);  // Already Killed
    SetSpEffect(10000, 260100330);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Dragonslayer Armour
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002014);  // Already Killed
    SetSpEffect(10000, 260100140);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Mirror Knight
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002028);  // Already Killed
    SetSpEffect(10000, 260100290);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Ancient Wyvern
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002015);  // Already Killed
    SetSpEffect(10000, 260100150);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Titanite Abomination
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002034);  // Already Killed
    SetSpEffect(10000, 260100350);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Trio of Explorers
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002031);  // Already Killed
    SetSpEffect(10000, 260100320);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Nameless King
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002016);  // Already Killed
    SetSpEffect(10000, 260100160);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Champion Gundyr
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002017);  // Already Killed
    SetSpEffect(10000, 260100170);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Twin Princes
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002018);  // Already Killed
    SetSpEffect(10000, 260100180);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // The Marauder
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002035);  // Already Killed
    SetSpEffect(10000, 260100360);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Princess Yngvil
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002030);  // Already Killed
    SetSpEffect(10000, 260100310);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Prince Dorthinus
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002026);  // Already Killed
    SetSpEffect(10000, 260100270);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Sister Friede
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002020);  // Already Killed
    SetSpEffect(10000, 260100200);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Demon Prince
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002022);  // Already Killed
    SetSpEffect(10000, 260100220);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Halflight
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002025);  // Already Killed
    SetSpEffect(10000, 260100250);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Darkeater Midir
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002023);  // Already Killed
    SetSpEffect(10000, 260100230);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Slave Knight Gael
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002024);  // Already Killed
    SetSpEffect(10000, 260100240);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Soul of Cinder
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002019);  // Already Killed
    SetSpEffect(10000, 260100190);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
});

//----------------------------------------------
// Gauntlet Mode - Random Gauntlet
//----------------------------------------------
Event(20072, Restart, function() {
    var flag_GauntletMode = 25009813;
    var flag_RandomOrder  = 25003201;
    var flag_DisableDLCBosses = 25009805;
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_GauntletMode);
    
    // Wait for trigger
    IfCharacterHasSpEffect(MAIN, 10000, 260120010, true, ComparisonType.Equal, 1);
    
    // End if not in Random type
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_RandomOrder);
    
    BatchSetEventFlags(25003001, 25003050, OFF);
    RandomlySetEventFlagInRange(25003001, 25003035, ON);
    
    // Skip next section if DLC bosses are enabled
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, flag_DisableDLCBosses);
    
    // Convert the random flags for the DLC bosses into vanilla ones
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003020); // Sister Friede
    SetEventFlag(25003020, OFF); // Sister Friede
    SetEventFlag(25003014, ON); // Dragonslayer Armour
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003022); // Demon Prince
    SetEventFlag(25003022, OFF); // Demon Prince
    SetEventFlag(25003017, ON); // Champion Gundyr
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003023); // Darkeater Midir
    SetEventFlag(25003023, OFF); // Darkeater Midir
    SetEventFlag(25003018, ON); // Twin Princes
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003024); // Slave Knight Gael
    SetEventFlag(25003024, OFF); // Slave Knight Gael
    SetEventFlag(25003010, ON); // Aldrich
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003025); // Halflight
    SetEventFlag(25003025, OFF); // Halflight
    SetEventFlag(25003008, ON); // Old Demon King
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003026); // Prince Dorthinus
    SetEventFlag(25003026, OFF); // Prince Dorthinus
    SetEventFlag(25003032, ON); // Twisted Knight
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003030); // Princess Yngvil
    SetEventFlag(25003030, OFF); // Princess Yngvil
    SetEventFlag(25003035, ON); // The Marauder
    
    Label0();
    
    // Corrupted Gundyr
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002001);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003001); // Not Selected
    SetSpEffect(10000, 260100010);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Vordt
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002002);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003002); // Not Selected
    SetSpEffect(10000, 260100020);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Curse-rotted Greatwood
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002003);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003003); // Not Selected
    SetSpEffect(10000, 260100030);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Crystal Sage
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002004);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003004); // Not Selected
    SetSpEffect(10000, 260100040);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Deacons of the Deep
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002005);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003005); // Not Selected
    SetSpEffect(10000, 260100050);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Abyss Watchers
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002006);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003006); // Not Selected
    SetSpEffect(10000, 260100060);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // High Lord Wolnir
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002007);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003007); // Not Selected
    SetSpEffect(10000, 260100070);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Old Demon King
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002008);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003008); // Not Selected
    SetSpEffect(10000, 260100080);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Pontiff Sulyvahn
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002009);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003009); // Not Selected
    SetSpEffect(10000, 260100090);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Aldrich
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002010);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003010); // Not Selected
    SetSpEffect(10000, 260100100);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Yhorm
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002011);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003011); // Not Selected
    SetSpEffect(10000, 260100110);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Dancer
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002012);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003012); // Not Selected
    SetSpEffect(10000, 260100120);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Oceiros
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002013);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003013); // Not Selected
    SetSpEffect(10000, 260100130);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Dragonslayer Armour
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002014);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003014); // Not Selected
    SetSpEffect(10000, 260100140);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Ancient Wyvern
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002015);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003015); // Not Selected
    SetSpEffect(10000, 260100150);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Titanite Abomination
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002034);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003034); // Not Selected
    SetSpEffect(10000, 260100350);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Nameless King
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002016);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003016); // Not Selected
    SetSpEffect(10000, 260100160);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Champion Gundyr
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002017);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003017); // Not Selected
    SetSpEffect(10000, 260100170);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Twin Princes
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002018);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003018); // Not Selected
    SetSpEffect(10000, 260100180);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // The Marauder
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002035);  // Already Killed
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25003035);  // Not Selected
    SetSpEffect(10000, 260100360);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Soul of Cinder
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002019);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003019); // Not Selected
    SetSpEffect(10000, 260100190);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Sister Friede
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002020);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003020); // Not Selected
    SetSpEffect(10000, 260100200);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Lordran Remnants
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002021);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003021); // Not Selected
    SetSpEffect(10000, 260100210);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Demon Prince
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002022);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003022); // Not Selected
    SetSpEffect(10000, 260100220);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Darkeater Midir
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002023);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003023); // Not Selected
    SetSpEffect(10000, 260100230);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Slave Knight Gael
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002024);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003024); // Not Selected
    SetSpEffect(10000, 260100240);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Halflight
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002025);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003025); // Not Selected
    SetSpEffect(10000, 260100250);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Prince Dorthinus
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002026);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003026); // Not Selected
    SetSpEffect(10000, 260100270);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Cathedral Guardian
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002027);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003027); // Not Selected
    SetSpEffect(10000, 260100280);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Mirror Knight
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002028);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003028); // Not Selected
    SetSpEffect(10000, 260100290);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Aborr
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002029);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003029); // Not Selected
    SetSpEffect(10000, 260100300);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Princess Yngvil
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002030);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003030); // Not Selected
    SetSpEffect(10000, 260100310);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Trio of Explorers
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002031);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003031); // Not Selected
    SetSpEffect(10000, 260100320);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Twisted Knight
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002032);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003032); // Not Selected
    SetSpEffect(10000, 260100330);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Fallen Protector
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25002033);  // Already Killed
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25003033); // Not Selected
    SetSpEffect(10000, 260100340);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Restart process if selection was already killed.
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Gauntlet Mode - Reverse Set/Endless Gauntlet
//----------------------------------------------
Event(20073, Restart, function() {
    var flag_GauntletMode   = 25009813;
    var flag_SetReverse     = 25003203;
    var flag_EndlessReverse = 25003204;
    var flag_DisableDLCBosses = 25009805;
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_GauntletMode);
    
    // Wait for trigger
    IfCharacterHasSpEffect(MAIN, 10000, 260120000, true, ComparisonType.Equal, 1);

    // End if neither Set or Endless Gauntlet are ON
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, flag_SetReverse);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, flag_EndlessReverse);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    
    // Soul of Cinder
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002019);  // Already Killed
    SetSpEffect(10000, 260100190);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Slave Knight Gael
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002024);  // Already Killed
    SetSpEffect(10000, 260100240);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Darkeater Midir
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002023);  // Already Killed
    SetSpEffect(10000, 260100230);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Halflight
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002025);  // Already Killed
    SetSpEffect(10000, 260100250);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Demon Prince
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002022);  // Already Killed
    SetSpEffect(10000, 260100220);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Sister Friede
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002020);  // Already Killed
    SetSpEffect(10000, 260100200);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Prince Dorthinus
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002026);  // Already Killed
    SetSpEffect(10000, 260100270);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Princess Yngvil
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, flag_DisableDLCBosses); // Skip if DLC bosses disabled
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002030);  // Already Killed
    SetSpEffect(10000, 260100310);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // The Marauder
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002035);  // Already Killed
    SetSpEffect(10000, 260100360);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Twin Princes
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002018);  // Already Killed
    SetSpEffect(10000, 260100180);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Champion Gundyr
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002017);  // Already Killed
    SetSpEffect(10000, 260100170);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Nameless King
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002016);  // Already Killed
    SetSpEffect(10000, 260100160);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Trio of Explorers
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002031);  // Already Killed
    SetSpEffect(10000, 260100320);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Titanite Abomination
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002034);  // Already Killed
    SetSpEffect(10000, 260100350);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Ancient Wyvern
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002015);  // Already Killed
    SetSpEffect(10000, 260100150);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Mirror Knight
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002028);  // Already Killed
    SetSpEffect(10000, 260100290);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Dragonslayer Armour
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002014);  // Already Killed
    SetSpEffect(10000, 260100140);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Twisted Knight
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002032);  // Already Killed
    SetSpEffect(10000, 260100330);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Oceiros
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002013);  // Already Killed
    SetSpEffect(10000, 260100130);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Dancer
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002012);  // Already Killed
    SetSpEffect(10000, 260100120);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Yhorm
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002011);  // Already Killed
    SetSpEffect(10000, 260100110);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Fallen Protector
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002033);  // Already Killed
    SetSpEffect(10000, 260100340);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Lordran Remnants
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002021);  // Already Killed
    SetSpEffect(10000, 260100210);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Aldrich
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002010);  // Already Killed
    SetSpEffect(10000, 260100100);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Pontiff Sulyvahn
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002009);  // Already Killed
    SetSpEffect(10000, 260100090);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Old Demon King
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002008);  // Already Killed
    SetSpEffect(10000, 260100080);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // High Lord Wolnir
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002007);  // Already Killed
    SetSpEffect(10000, 260100070);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Abyss Watchers
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002006);  // Already Killed
    SetSpEffect(10000, 260100060);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Deacons of the Deep
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002005);  // Already Killed
    SetSpEffect(10000, 260100050);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Cathedral Guardian
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002027);  // Already Killed
    SetSpEffect(10000, 260100280);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Crystal Sage
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002004);  // Already Killed
    SetSpEffect(10000, 260100040);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Curse-rotted Greatwood
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002003);  // Already Killed
    SetSpEffect(10000, 260100030);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Aborr
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002029);  // Already Killed
    SetSpEffect(10000, 260100300);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Vordt
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002002);  // Already Killed
    SetSpEffect(10000, 260100020);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
    // Corrupted Gundyr
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25002001);  // Already Killed
    SetSpEffect(10000, 260100010);
    WaitFixedTimeSeconds(5.0); // Stall execution temporarily
    
});

//----------------------------------------------
// Gauntlet Mode - Reset Progress
//----------------------------------------------
Event(20079, Restart, function() {
    var flag_GauntletMode = 25009813;
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_GauntletMode);
    
    IfCharacterHasSpEffect(MAIN, 10000, 260120020, true, ComparisonType.Equal, 1);
    
    BatchSetEventFlags(25002000, 25002050, OFF);
});


//----------------------------------------------
// Masteries
//----------------------------------------------
Event(20080, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    var flag_Mastery_Vigor        = 25007010;
    var flag_Mastery_Attunement   = 25007020;
    var flag_Mastery_Endurance    = 25007030;
    var flag_Mastery_Vitality     = 25007040;
    var flag_Mastery_Strength     = 25007050;
    var flag_Mastery_Dexterity    = 25007060;
    var flag_Mastery_Intelligence = 25007070;
    var flag_Mastery_Faith        = 25007080;
    var flag_Mastery_Luck         = 25007090;
    
    // Vigor
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Vigor);
    SetSpEffect(10000, 260130000);
    
    // Attunement
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Attunement);
    SetSpEffect(10000, 260130010);
    
    // Endurance
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Endurance);
    SetSpEffect(10000, 260130020);
    
    // Vitality
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Vitality);
    SetSpEffect(10000, 260130030);
    
    // Strength
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Strength);
    SetSpEffect(10000, 260130040);
    
    // Dexterity
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Dexterity);
    SetSpEffect(10000, 260130050);
    
    // Intelligence
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Intelligence);
    SetSpEffect(10000, 260130060);
    
    // Faith
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Faith);
    SetSpEffect(10000, 260130070);
    
    // Luck
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, flag_Mastery_Luck);
    SetSpEffect(10000, 260130080);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Masteries - Reset Progress
//----------------------------------------------
Event(20081, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 2052);
    
    var flag_ResetMasteries       = 25007000;
    var flag_Mastery_Vigor        = 25007010;
    var flag_Mastery_Attunement   = 25007020;
    var flag_Mastery_Endurance    = 25007030;
    var flag_Mastery_Vitality     = 25007040;
    var flag_Mastery_Strength     = 25007050;
    var flag_Mastery_Dexterity    = 25007060;
    var flag_Mastery_Intelligence = 25007070;
    var flag_Mastery_Faith        = 25007080;
    var flag_Mastery_Luck         = 25007090;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_ResetMasteries)
    
    SetEventFlag(flag_ResetMasteries, OFF);
    SetEventFlag(flag_Mastery_Vigor, OFF);
    SetEventFlag(flag_Mastery_Attunement, OFF);
    SetEventFlag(flag_Mastery_Endurance, OFF);
    SetEventFlag(flag_Mastery_Vitality, OFF);
    SetEventFlag(flag_Mastery_Strength, OFF);
    SetEventFlag(flag_Mastery_Dexterity, OFF);
    SetEventFlag(flag_Mastery_Intelligence, OFF);
    SetEventFlag(flag_Mastery_Faith, OFF);
    SetEventFlag(flag_Mastery_Luck, OFF);
});

//----------------------------------------------
// Script Tool
//----------------------------------------------
Event(20060, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(AND_01, X0_4, 160710000, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(25000020, ON); // Debug flag
    SetEventFlag(13800196, OFF);
    
    ChangeCharacterEnableState(4000899, Enabled);
    SetCharacterAnimationState(4000899, Enabled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Screenshot Tool
//----------------------------------------------
Event(20061, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(AND_01, X0_4, 160710107, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WarpPlayer(40, 0, 4000986);
    SetMapCeremony(40, 0, 10);
    
    SetEventFlag(25008800, ON);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Treasure Tool
//----------------------------------------------
Event(20062, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(AND_01, X0_4, 160710108, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    BatchSetEventFlags(53000000, 53002999, OFF);
    BatchSetEventFlags(53010000, 53012999, OFF);
    BatchSetEventFlags(53100000, 53102999, OFF);
    BatchSetEventFlags(53200000, 53202999, OFF);
    BatchSetEventFlags(53300000, 53302999, OFF);
    BatchSetEventFlags(53410000, 53412999, OFF);
    BatchSetEventFlags(53500000, 53502999, OFF);
    BatchSetEventFlags(53700000, 53702999, OFF);
    BatchSetEventFlags(53800000, 53802999, OFF);
    BatchSetEventFlags(53900000, 53902999, OFF);
    BatchSetEventFlags(54000000, 54002999, OFF);
    BatchSetEventFlags(54100000, 54102999, OFF);
    BatchSetEventFlags(54500000, 54502999, OFF);
    BatchSetEventFlags(55000000, 55002999, OFF);
    BatchSetEventFlags(55100000, 55102999, OFF);
    BatchSetEventFlags(55110000, 55112999, OFF);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// NG+ Tool
//----------------------------------------------
Event(20063, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(AND_01, X0_4, 160710109, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(74000012, ON);
    SetEventFlag(14005617, OFF);
    
    EndUnconditionally(EventEndType.Restart);
});


//----------------------------------------------
// Boss Revival - Corrupted Gundyr
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20100, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100010, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001001);
    
    SetEventFlag(14000800, 0);
    SetEventFlag(9319, 0);
    SetEventFlag(6319, 0);               
    
    //SetPlayerRespawnPoint(4002970);
    SetMapCeremony(40, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(40, 0, 4000980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001001);
    DisplayEpitaphMessage(99030100);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Vordt
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20101, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100020, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001002);
    
    SetEventFlag(13000800, 0);
    SetEventFlag(9301, 0);
    SetEventFlag(6301, 0);
    
    //SetPlayerRespawnPoint(3002958);
    //SetMapCeremony(30, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(30, 0, 3000982);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001002);
    DisplayEpitaphMessage(99030101);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Curse-rotted Greatwood
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20102, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100030, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001003);
    
    SetEventFlag(13100800, 0);
    SetEventFlag(9303, 0);
    SetEventFlag(6303, 0);
    SetEventFlag(13100001, 0);
    
    //SetPlayerRespawnPoint(3102953);
    //SetMapCeremony(31, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(31, 0, 3100980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001003);
    DisplayEpitaphMessage(99030102);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Crystal Sage
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20103, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100040, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001004);
    
    SetEventFlag(13300850, 0);
    SetEventFlag(9306, 0);
    SetEventFlag(6306, 0);
    
    //SetPlayerRespawnPoint(3302957);
    //SetMapCeremony(33, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(33, 0, 3300980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001004);
    DisplayEpitaphMessage(99030103);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Deacons of the Deep
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20104, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100050, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001005);
    
    SetEventFlag(13500800, 0);
    SetEventFlag(9311, 0);
    SetEventFlag(6311, 0);
    
    //SetPlayerRespawnPoint(3502950);
    //SetMapCeremony(35, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(35, 0, 3500980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001005);
    DisplayEpitaphMessage(99030104);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Abyss Watchers
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20105, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100060, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001006);
    
    SetEventFlag(13300800, 0);
    SetEventFlag(9307, 0);
    SetEventFlag(6307, 0);
    SetEventFlag(13300421, 0);
    
    //SetPlayerRespawnPoint(3302958);
    //SetMapCeremony(33, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(33, 0, 3300981);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001006);
    DisplayEpitaphMessage(99030105);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - High Lord Wolnir
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20106, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100070, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001007);
    
    SetEventFlag(13800800, 0);
    SetEventFlag(9315, 0);
    SetEventFlag(6315, 0);
    SetEventFlag(13801800, 0);
    SetEventFlag(63800560, 0);
    
    //SetPlayerRespawnPoint(3802950);
    //SetMapCeremony(38, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(38, 0, 3800980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001007);
    DisplayEpitaphMessage(99030106);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Old Demon King
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20107, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100080, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001008);
    
    SetEventFlag(13800830, 0);
    SetEventFlag(9317, 0);
    SetEventFlag(6317, 0);
    
    //SetPlayerRespawnPoint(3802952);
    //SetMapCeremony(38, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(38, 0, 3800981);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001008);
    DisplayEpitaphMessage(99030107);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Pontiff Sulyvahn
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20108, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100090, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001009);
    
    SetEventFlag(13700850, 0);
    SetEventFlag(9313, 0);
    SetEventFlag(6313, 0);
    SetEventFlag(13700420, 0);
    SetEventFlag(13700421, 0);
    SetEventFlag(13700422, 0);
    
    //SetPlayerRespawnPoint(3702950);
    //SetMapCeremony(37, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(37, 0, 3700980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001009);
    DisplayEpitaphMessage(99030108);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Aldrich
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20109, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100100, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001010);
    
    SetEventFlag(13700800, 0);
    SetEventFlag(9314, 0);
    SetEventFlag(6314, 0);
    SetEventFlag(13700002, 0);
    
    //SetPlayerRespawnPoint(3702953);
    //SetMapCeremony(37, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(37, 0, 3700981);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001010);
    DisplayEpitaphMessage(99030109);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Yhorm
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20110, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100110, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001011);
    
    SetEventFlag(13900800, 0);
    SetEventFlag(9318, 0);
    SetEventFlag(6318, 0);
    
    //SetPlayerRespawnPoint(3902952);
    //SetMapCeremony(39, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(39, 0, 3900980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001011);
    DisplayEpitaphMessage(99030110);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Dancer
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20111, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100120, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001012);
    
    SetEventFlag(13000890, 0);
    SetEventFlag(9300, 0);
    SetEventFlag(6300, 0);
    SetEventFlag(13000885, 0);
    
    //SetPlayerRespawnPoint(3002955);
    //SetMapCeremony(30, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(30, 0, 3000981);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001012);
    DisplayEpitaphMessage(99030111);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Oceiros
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20112, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100130, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001013);
    
    SetEventFlag(13000830, 0);
    SetEventFlag(9302, 0);
    SetEventFlag(6302, 0);
    
    //SetPlayerRespawnPoint(3002951);
    //SetMapCeremony(30, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(30, 0, 3000983);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001013);
    DisplayEpitaphMessage(99030112);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Warp - Dragonslayer Armour
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20113, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100140, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001014);
    
    SetEventFlag(13010800, 0);
    SetEventFlag(9308, 0);
    SetEventFlag(6308, 0);
    
    //SetPlayerRespawnPoint(3012952);
    //SetMapCeremony(30, 1, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(30, 1, 3010980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001014);
    DisplayEpitaphMessage(99030113);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Ancient Wyvern
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20114, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100150, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001015);
    
    SetEventFlag(13200800, 0);
    SetEventFlag(9305, 0);
    SetEventFlag(6305, 0);
    
    //SetPlayerRespawnPoint(3202950);
    //SetMapCeremony(32, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(32, 0, 3200980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001015);
    DisplayEpitaphMessage(99030114);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Nameless King
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20115, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100160, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001016);
    
    SetEventFlag(13200850, 0);
    SetEventFlag(9304, 0);
    SetEventFlag(6304, 0);
    SetEventFlag(13200440, 0);
    SetEventFlag(13200445, 0);
    SetEventFlag(13200855, 0);
    SetEventFlag(13200856, 0);
    SetEventFlag(13200862, 0);
            
    //SetPlayerRespawnPoint(3202952);
    //SetMapCeremony(32, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(32, 0, 3200981);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001016);
    DisplayEpitaphMessage(99030115);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Warp - Champion Gundyr
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20116, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100170, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001017);
    
    SetEventFlag(14000830, 0);
    SetEventFlag(9320, 0);
    SetEventFlag(6320, 0);
    SetEventFlag(14000004, 0);
    SetEventFlag(64000260, 0);
    SetEventFlag(64000261, 0);
    
    //SetPlayerRespawnPoint(4002953);
    SetMapCeremony(40, 0, 10);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(40, 0, 4000981);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001017);
    DisplayEpitaphMessage(99030116);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Warp - Twin Princes
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20117, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100180, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001018);
    
    SetEventFlag(13410830, 0);
    SetEventFlag(9309, 0);
    SetEventFlag(6309, 0);
    SetEventFlag(13410000, 0);
    
    //SetPlayerRespawnPoint(3412951);
    //SetMapCeremony(34, 1, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(34, 1, 3410980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001018);
    DisplayEpitaphMessage(99030117);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Soul of Cinder
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20118, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100190, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001019);
    
    SetEventFlag(14100800, 0);
    SetEventFlag(14101100, 0);
    SetEventFlag(9321, 0);
    SetEventFlag(6321, 0);
    SetEventFlag(14100002, 0);
    
    //SetPlayerRespawnPoint(4102951);
    //SetMapCeremony(41, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(41, 0, 4100980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001019);
    DisplayEpitaphMessage(99030118);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Sister Friede
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20119, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100200, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001020);
    
    SetEventFlag(14500800, OFF);
    SetEventFlag(9322, OFF);
    SetEventFlag(6322, OFF);
    SetEventFlag(14500000, OFF);
    SetEventFlag(14500162, OFF);
    SetEventFlag(14500620, ON);
    
    //SetPlayerRespawnPoint(4502955);
    //SetMapCeremony(45, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(45, 0, 4500980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001020);
    DisplayEpitaphMessage(99030119);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Lordran Remnants
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20120, Restart, function() {
    var param_SpEffect_Trigger = 260100210;
    
    var flag_BossKilled     = 25001021;
    var flag_BossDefeated   = 13700870;
    var flag_BossInProgress = 13700871;
    var flag_BossState1     = 9323;
    var flag_BossState2     = 6323;
    
    var entity_SpawnPoint  = 3702990;
    var entity_PlayerPoint = 3700982;
    
    var mapID      = 37;
    var blockID    = 0;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030120;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    SetEventFlag(13700890, OFF); // flag_LordranRemnants_IsActivated
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Demon Prince
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20121, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100220, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001022);
    
    SetEventFlag(15000800, 0);
    SetEventFlag(9324, 0);
    SetEventFlag(6324, 0);
    SetEventFlag(15000000, 0);
    
    //SetPlayerRespawnPoint(5002953);
    //SetMapCeremony(50, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(50, 0, 5000980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001022);
    DisplayEpitaphMessage(99030121);
    
    EndUnconditionally(EventEndType.Restart);
});


//----------------------------------------------
// Boss Revival - Darkeater Midir
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20122, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100230, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001023);
    
    SetEventFlag(15100850, 0);
    SetEventFlag(9326, 0);
    SetEventFlag(6326, 0);
    SetEventFlag(15100001, 0);
    
    //SetPlayerRespawnPoint(5102953);
    //SetMapCeremony(51, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(51, 0, 5100980);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001023);
    DisplayEpitaphMessage(99030122);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Slave Knight Gael
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20123, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100240, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001024);
    
    SetEventFlag(15110800, 0);
    SetEventFlag(9327, 0);
    SetEventFlag(6327, 0);
    SetEventFlag(15110000, 0);
    
    //SetPlayerRespawnPoint(5112951);
    //SetMapCeremony(51, 1, 10);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(51, 1, 5110980);
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001024);
    DisplayEpitaphMessage(99030123);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Halflight
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20124, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100250, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001025);
    
    SetEventFlag(15100800, 0);
    SetEventFlag(6325, 0);
    SetEventFlag(9325, 0);
    SetEventFlag(9003, 1);
    
    //SetPlayerRespawnPoint(5102953);
    //SetMapCeremony(51, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(51, 0, 5100981);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001025);
    DisplayEpitaphMessage(99030124);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Champions of Yore
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20125, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100260, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    // m51_1
    SetEventFlag(15100730, 0); // Glaive Master Hodir
    SetEventFlag(15100731, 0); // Freya the Wretched
    SetEventFlag(15100732, 0); // Nahor the Fallen
    SetEventFlag(15100733, 0); // Easterner Iazeel
    SetEventFlag(15100734, 0); // Seeker of the Spurned
    SetEventFlag(15100735, 0); // Moaning Knight
    SetEventFlag(15100736, 0); // Silver Knight Ledo 

    // m50
    SetEventFlag(15000730, 0); // Dulfish the Accursed
    SetEventFlag(15000180, 0); // Desert Pyromancer Zoey

    // m45
    SetEventFlag(14500738, 0); // Ezekiel the Duelist
    SetEventFlag(14500742, 0); // Eija the Shadow
    SetEventFlag(14500734, 0); // Frozen Knight Torbjorn
    SetEventFlag(14500736, 0); // Disciple of Alsanna

    // m41
    SetEventFlag(14100810, 0); // Lord Zakar

    // m40
    SetEventFlag(14000890, 0); // Blacksmith's Nightmare
    SetEventFlag(14000892, 0); // Ashen Keeper Sofija
    SetEventFlag(9500, 0); // Sword Master
    SetEventFlag(14000893, 0); // Pot King Greg
    SetEventFlag(14000197, 0); // Daughter of Crystal Kriemhild
    
    // m39
    SetEventFlag(13900730, 0); // Corrupted Knight Lloyd
    SetEventFlag(13900732, 0); // Jailer Eileen
    SetEventFlag(13900734, 0); // Ollis the Merciless
    SetEventFlag(13900736, 0); // Fester the Jester
    SetEventFlag(13900738, 0); // Vileblood Annalise
    SetEventFlag(13900740, 0); // Bewitched Knight Iwai
    SetEventFlag(13900742, 0); // Lord Takatsuji
    SetEventFlag(13900744, 0); // Lieutenant Ugali
    SetEventFlag(13900746, 0); // Lieutenant Hanji
    SetEventFlag(13900748, 0); // Alva, Seeker of the Spurned
    SetEventFlag(13900760, 0); // The Pursuer
    SetEventFlag(13900360, 0); // Court Sorcerer

    // m38
    SetEventFlag(13800790, 0); // Holy Knight Morton
    SetEventFlag(13800792, 0); // Tomb Raider Dyfan
    SetEventFlag(13800794, 0); // Chaos Servant Eygor
    SetEventFlag(13800763, 0); // The Father
    SetEventFlag(13800761, 0); // The Mother
    SetEventFlag(13800762, 0); // The Child
    SetEventFlag(13800398, 0); // Knight Slayer Tsorig
    SetEventFlag(13800196, 0); // Knight Slayer Tsorig

    // m37
    SetEventFlag(13700733, 0); // Boreal Outrider Knight
    SetEventFlag(13700734, 0); // Boreal Outrider Knight
    SetEventFlag(13700544, 0); // Deep Accursed
    SetEventFlag(13700780, 0); // Dragonrider
    SetEventFlag(13700781, 0); // Wandering Knight Osvaldo
    SetEventFlag(13700782, 0); // Devotee Scarlett
    SetEventFlag(13700783, 0); // The Pursuer
    SetEventFlag(13700198, 0); // Drang Knight (Hammer)
    SetEventFlag(13700199, 0); // Drang Knight (Twinspear)
    SetEventFlag(13700193, 0); // Creighton the Wanderer
    SetEventFlag(13700194, 0); // Londor Pale Shade

    // m35
    SetEventFlag(13500196, 0); // Ravenous Crystal Lizard
    SetEventFlag(13500198, 0); // Morne's Armor
    SetEventFlag(13500780, 0); // Morric, the Fallen Knight
    SetEventFlag(13500781, 0); // Hallowed Knight Orthell
    SetEventFlag(13500782, 0); // Longfinger Kirk
    SetEventFlag(13500286, 0); // Thief
    SetEventFlag(13500285, 0); // Brigand

    // m34_1
    SetEventFlag(13410192, 0); // Boreal Outrider Knight
    SetEventFlag(13410256, 0); // Black Dragon Knight (Greataxe)
    SetEventFlag(13410257, 0); // Black Dragon Knight (Greatsword)
    SetEventFlag(13410258, 0); // Black Dragon Knight (Sword)
    SetEventFlag(13410730, 0); // The Pursuer
    SetEventFlag(13410732, 0); // Quintus the Monstrous
    SetEventFlag(13410204, 0); // Black Hand Gotthard
    SetEventFlag(13410202, 0); // Lion Knight Albert
    SetEventFlag(13410203, 0); // Daughter of Crystal Kriemhild

    // m33
    SetEventFlag(13300603, 0); // Ravenous Crystal Lizard
    SetEventFlag(13300780, 0); // The Forlorn
    SetEventFlag(13300781, 0); // Forgotten Locklin
    SetEventFlag(13300395, 0); // Butcher
    SetEventFlag(13300396, 0); // Exile Watchdog
    SetEventFlag(13300397, 0); // Exile Watchdog
    SetEventFlag(13300180, 0); // Yellowfinger Heysel (ROS)
    SetEventFlag(13300182, 0); // Yellowfinger Heysel (FK)
    SetEventFlag(13300184, 0); // Londor Pale Shade

    // m32
    SetEventFlag(13200430, 0); // Dragon Cultist
    SetEventFlag(13200431, 0); // Dragon Cultist
    SetEventFlag(13200432, 0); // Dragon Cultist
    SetEventFlag(13200433, 0); // Dragon Cultist
    SetEventFlag(13200434, 0); // Dragon Cultist
    SetEventFlag(13200435, 0); // Dragon Cultist
    SetEventFlag(13200730, 0); // Gaius the Mighty
    SetEventFlag(13200732, 0); // Dragon Hunter Karstark
    SetEventFlag(13200299, 0); // Havel the Rock

    // m31
    SetEventFlag(13100613, 0); // Boreal Outrider Knight
    SetEventFlag(13100615, 0); // Boreal Outrider Knight
    SetEventFlag(13100780, 0); // Eccentric Archibald

    // m30_1
    SetEventFlag(13010730, 0); // Luyila of Londor
    SetEventFlag(13010732, 0); // Dominatrix Sharron
    SetEventFlag(13010734, 0); // The Pursuer
    SetEventFlag(13010736, 0); // Tiny

    // m30
    SetEventFlag(13000740, 0); // Mirror Knight
    SetEventFlag(13000622, 0); // Boreal Outrider Knight
    SetEventFlag(13000732, 0); // Captain Morrel
    SetEventFlag(13000734, 0); // Huntmaster Ava
    SetEventFlag(13000736, 0); // The Pursuer
    SetEventFlag(13000730, 0); // Inquisitor Ashford
    
    //SetPlayerRespawnPoint(4002950);
    SetMapCeremony(40, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(40, 0, 4000970);
});

//----------------------------------------------
// Boss Revival - Prince Dorthinus
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20126, Restart, function() {
    IfCharacterHasSpeffect(AND_01, 10000, 260100270, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 25001026);
    
    SetEventFlag(14500960, 0);
    SetEventFlag(14500961, 0);
    SetEventFlag(9328, 0);
    SetEventFlag(6328, 0);
    
    //SetPlayerRespawnPoint(4502959);
    //SetMapCeremony(45, 0, 0);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(45, 0, 4500982);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25002026);
    DisplayEpitaphMessage(99030125);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Cathedral Guardian
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20127, Restart, function() {
    var param_SpEffect_Trigger = 260100280;
    
    var flag_BossKilled     = 25001027;
    var flag_BossDefeated   = 13500810;
    var flag_BossInProgress = 13500811;
    var flag_BossState1     = 9340;
    var flag_BossState2     = 6340;
    
    var entity_SpawnPoint  = 3502956;
    var entity_PlayerPoint = 3504020;
    
    var mapID      = 35;
    var blockID    = 0;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030126;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Mirror Knight
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20128, Restart, function() {
    var param_SpEffect_Trigger = 260100290;
    
    var flag_BossKilled     = 25001028;
    var flag_BossDefeated   = 13410870;
    var flag_BossInProgress = 13410871;
    var flag_BossState1     = 9341;
    var flag_BossState2     = 6341;
    
    var entity_SpawnPoint  = 3412960;
    var entity_PlayerPoint = 3410960;
    
    var mapID      = 34;
    var blockID    = 1;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030127;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Aborr
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20129, Restart, function() {
    var param_SpEffect_Trigger = 260100300;
    
    var flag_BossKilled     = 25001029;
    var flag_BossDefeated   = 13100870;
    var flag_BossInProgress = 13100871;
    var flag_BossState1     = 9342;
    var flag_BossState2     = 6342;
    
    var entity_SpawnPoint  = 3102960;
    var entity_PlayerPoint = 3100960;
    
    var mapID      = 31;
    var blockID    = 0;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030128;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Princess Yngvil
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20130, Restart, function() {
    var param_SpEffect_Trigger = 260100310;
    
    var flag_BossKilled     = 25002030;
    var flag_BossDefeated   = 14500860;
    var flag_BossInProgress = 14500861;
    var flag_BossState1     = 9343;
    var flag_BossState2     = 6343;
    
    var entity_SpawnPoint  = 4502925;
    var entity_PlayerPoint = 4500981;
    
    var mapID      = 45;
    var blockID    = 0;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030129;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Trio of Explorers
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20131, Restart, function() {
    var param_SpEffect_Trigger = 260100320;
    
    var flag_BossKilled     = 25001031;
    var flag_BossDefeated   = 13200870;
    var flag_BossInProgress = 13200871;
    var flag_BossState1     = 9344;
    var flag_BossState2     = 6344;
    
    var entity_SpawnPoint  = 3202960;
    var entity_PlayerPoint = 3200960;
    
    var mapID      = 32;
    var blockID    = 0;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030130;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Twisted Knight
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20132, Restart, function() {
    var param_SpEffect_Trigger = 260100330;
    
    var flag_BossKilled     = 25001032;
    var flag_BossDefeated   = 13010850;
    var flag_BossInProgress = 13010851;
    var flag_BossState1     = 9345;
    var flag_BossState2     = 6345;
    
    var entity_SpawnPoint  = 3012981;
    var entity_PlayerPoint = 3010981;
    
    var mapID      = 30;
    var blockID    = 1;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030131;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Fallen Protector
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20133, Restart, function() {
    var param_SpEffect_Trigger = 260100340;
    
    var flag_BossKilled     = 25001033;
    var flag_BossDefeated   = 13900860;
    var flag_BossInProgress = 13900861;
    var flag_BossState1     = 9346;
    var flag_BossState2     = 6346;
    
    var entity_SpawnPoint  = 3902951;
    var entity_PlayerPoint = 3900971;
    
    var mapID      = 39;
    var blockID    = 0;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030132;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - Titanite Abomination
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20134, Restart, function() {
    var param_SpEffect_Trigger = 260100350;
    
    var flag_BossKilled     = 25001034;
    var flag_BossDefeated   = 13200880;
    var flag_BossInProgress = 13200881;
    var flag_BossState1     = 9347;
    var flag_BossState2     = 6347;
    
    var entity_SpawnPoint  = 3202962;
    var entity_PlayerPoint = 3200962;
    
    var mapID      = 32;
    var blockID    = 0;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030133;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------------
// Boss Revival - The Marauder
// <speffect>, <spawn point>, <warp id>, <map id>, <block id>, <ceremony id>
//----------------------------------------------
Event(20135, Restart, function() {
    var param_SpEffect_Trigger = 260100360;
    
    var flag_BossKilled     = 25001035;
    var flag_BossDefeated   = 14000850;
    var flag_BossInProgress = 14000851;
    var flag_BossState1     = 9348;
    var flag_BossState2     = 6348;
    
    var entity_SpawnPoint  = 4002972;
    var entity_PlayerPoint = 4000987;
    
    var mapID      = 40;
    var blockID    = 0;
    var ceremonyID = 0;
    
    var text_BossNotKilled = 99030134;
    
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Trigger, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);

    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, flag_BossKilled);
    
    SetEventFlag(flag_BossDefeated, OFF);
    SetEventFlag(flag_BossInProgress, OFF);
    SetEventFlag(flag_BossState1, OFF);
    SetEventFlag(flag_BossState2, OFF);
    
    //SetPlayerRespawnPoint(entity_SpawnPoint);
    SetMapCeremony(mapID, blockID, ceremonyID);
    
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    Label1();
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25009813); // Ignore this check in Gauntlet mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_BossKilled);
    DisplayEpitaphMessage(text_BossNotKilled);
    
    EndUnconditionally(EventEndType.Restart);
});
