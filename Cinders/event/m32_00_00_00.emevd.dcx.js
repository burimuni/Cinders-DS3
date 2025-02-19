// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

//---------------------------------------------
// Constructor
//---------------------------------------------
Event(0, Default, function() {
    RegisterBonfire(13200000, 3201950, 5, 180, 0);
    RegisterBonfire(13200002, 3201952, 5, 180, 0);
    RegisterBonfire(13200003, 3201953, 5, 180, 0);
    InitializeCommonEvent(20005500, 13200850, 13200001, 3200951, 3201951);
    InitializeEvent(0, 13205390, 0);
    InitializeCommonEvent(20005780, 3201781, 2);
    InitializeCommonEvent(20005780, 3201782, 2);
    InitializeCommonEvent(20005780, 3201783, 2);
    InitializeCommonEvent(20005780, 3201784, 2);
    InitializeEvent(0, 13205490, 3201785, 2, 13200850);
    InitializeEvent(1, 13205490, 3201786, 2, 13200850);
    
    // Hawkwood - Summon
    InitializeCommonEvent(20005700, 13200931, 13204190, 13205190, 3200190, 3202190);
    InitializeCommonEvent(20005720, 13204190, 13205190, 13200445, 3200190);
    
    //-----------------------------------
    // Trio of Explorers
    //-----------------------------------
    InitializeEvent(0, 13205890, 0); // Trio of Explorers - Setup
    InitializeEvent(0, 13205891, 0); // Trio of Explorers - Kill
    InitializeEvent(0, 13205892, 0); // Trio of Explorers - Fogwalls
    InitializeEvent(0, 13205893, 0); // Trio of Explorers - Invalidation
    InitializeEvent(0, 13205894, 0); // Trio of Explorers - Afflicted Graverobber entrance
    
    //-----------------------------------
    // Titanite Abomination
    //-----------------------------------
    InitializeEvent(0, 13205895, 0); // Titanite Abomination - Setup
    InitializeEvent(0, 13205896, 0); // Titanite Abomination - Kill
    InitializeEvent(0, 13205897, 0); // Titanite Abomination - Fogwalls
    InitializeEvent(0, 13205898, 0); // Titanite Abomination - Invalidation
    InitializeEvent(0, 13205899, 0); // Titanite Abomination - Arena 
    
    InitializeEvent(0, 13205930, 0);
    InitializeEvent(0, 13205931, 0);
    InitializeEvent(0, 13205300, 0);
    InitializeEvent(0, 13205310, 0);
    InitializeEvent(0, 13205320, 0);
    InitializeEvent(0, 13205330, 0);
    InitializeEvent(0, 13205340, 0);
    
    InitializeCommonEvent(20005119, 3200200, 3202200, 3202201, 3202202, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3200201, 3202201, 3202202, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3200202, 3202201, 3202203, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005130, 3200203, 1097859072, 3202203);
    InitializeCommonEvent(20005119, 3200204, 3202201, 3202203, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005120, 3200205, 1097859072);
    InitializeCommonEvent(20005213, 3200210, 700, 1700, 1075838976, 3202210);
    InitializeCommonEvent(20005132, 3200211, 1082130432, 3202210);
    InitializeCommonEvent(20005119, 3200212, 3202212, 3202213, 3202214, 3204351, 3204352, 3204353, 3204354);
    InitializeCommonEvent(20005119, 3200220, 3202220, 3202221, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005190, 3200220, 1101004800);
    InitializeCommonEvent(20005132, 3200221, 1096810496, 3202221);
    InitializeCommonEvent(20005132, 3200222, 1096810496, 3202221);
    InitializeCommonEvent(20005132, 3200223, 1099956224, 3202225);
    InitializeCommonEvent(20005119, 3200224, 3202221, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005205, 3200247, 701, 1701, 3202222, 0);
    InitializeCommonEvent(20005205, 3200226, 701, 1701, 3202222, 1067030938);
    InitializeCommonEvent(20005111, 3200227, 3003, 3202224);
    InitializeCommonEvent(20005190, 3200228, 1094713344);
    InitializeCommonEvent(20005119, 3200229, 3202225, 3202226, 3202227, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3200230, 3202227, 3202233, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3200231, 3202223, 3202225, 3202228, 3202232, 0, 0, 0);
    InitializeCommonEvent(20005132, 3200232, 1092616192, 3202232);
    InitializeCommonEvent(20005119, 3200233, 3202223, 3202225, 3202228, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3200236, 3202231, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3200237, 3202231, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005110, 3200240, 3202242);
    InitializeCommonEvent(20005110, 3200241, 3202242);
    InitializeCommonEvent(20005111, 3200242, 3010, 3202243);
    InitializeCommonEvent(20005140, 3200243, 3202244, 3200244);
    InitializeCommonEvent(20005132, 3200244, 1082130432, 3202244);
    InitializeCommonEvent(20005119, 3200245, 3202240, 3202241, 3202242, 3202244, 0, 0, 0);
    InitializeCommonEvent(20005119, 3200246, 3202240, 3202241, 3202242, 3202244, 0, 0, 0);
    InitializeCommonEvent(20005119, 3200254, 3202251, 3202252, 0, 0, 0, 0, 0);
    
    InitializeCommonEvent(20005190, 3200264, 1097859072);
    InitializeCommonEvent(20005190, 3200265, 1101004800);
    InitializeCommonEvent(20005120, 3200260, 1099956224);
    InitializeCommonEvent(20005120, 3200261, 1099956224);
    InitializeCommonEvent(20005120, 3200262, 1099956224);
    InitializeCommonEvent(20005120, 3200263, 1099956224);
    InitializeCommonEvent(20005120, 3200266, 1099956224);
    InitializeCommonEvent(20005120, 3200267, 1099956224);
    InitializeEvent(0, 13205260, 3200260, 3200269, 1065353216);
    InitializeEvent(1, 13205260, 3200261, 3200269, 1112014848);
    InitializeEvent(2, 13205260, 3200262, 3200269, 1113325568);
    InitializeEvent(3, 13205260, 3200263, 3200269, 1098907648);
    InitializeEvent(4, 13205260, 3200266, 3200269, 1099956224);
    InitializeEvent(5, 13205260, 3200267, 3200269, 1102053376);
    InitializeEvent(0, 13205290, 0);
    InitializeCommonEvent(20005119, 3200235, 3202230, 3202234, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005132, 3200255, 1084227584, 3202251);
    InitializeEvent(0, 13205350, 3200235, 13204350, 13204360, 13204361);
    InitializeEvent(1, 13205350, 3200255, 13204355, 13204365, 13204366);
    InitializeEvent(0, 13205360, 13204350, 13204360, 13204361, 13205500, 13205509, 13205500, 13205509);
    InitializeEvent(1, 13205360, 13204355, 13204365, 13204366, 13205510, 13205519, 13205510, 13205519);
    InitializeEvent(0, 13205370, 3200290, 13204360, 13204365, 3202291, 3202290, 3202234, 3200235, 3204290);
    InitializeEvent(1, 13205370, 3200291, 13204361, 0, 3202291, 3202290, 3202234, 3200235, 3204291);
    InitializeEvent(0, 13205375, 3200295, 13204365, 13204360, 3202295, 3200255, 3204295);
    InitializeEvent(1, 13205375, 3200297, 13204366, 0, 3202295, 3200255, 3204297);
    //InitializeCommonEvent(20005120, 3200299, 1097859072); // Havel
    InitializeEvent(0, 13205380, 0);
    //InitializeEvent(0, 13205381, 0); // Havel
    InitializeCommonEvent(20005350, 3200291, 57400, 50006740);
    InitializeCommonEvent(20005350, 3200297, 57500, 50006750);
    //InitializeCommonEvent(20005342, 13200299, 3200299); // Havel treasure
    InitializeCommonEvent(20005111, 3200500, 3002, 3202500);
    InitializeCommonEvent(20005120, 3200510, 1077936128);
    InitializeCommonEvent(20005110, 3200512, 3202501);
    InitializeCommonEvent(20005114, 3200513, 3202501, 1065353216);
    InitializeEvent(0, 13205810, 0);
    InitializeEvent(0, 13200811, 0);
    InitializeEvent(0, 13205820, 0);
    InitializeCommonEvent(20005840, 3201800);
    InitializeCommonEvent(20005841, 3201800);
    InitializeEvent(0, 13205860, 0);
    InitializeEvent(0, 13205861, 0);
    InitializeEvent(0, 13200862, 0);
    InitializeEvent(0, 13200863, 0);
    InitializeEvent(0, 13205864, 0);
    InitializeEvent(0, 13205870, 0);
    InitializeEvent(0, 13205880, 0);
    InitializeCommonEvent(20005620, 13200400, 13205400, 3201400, 3201401, 3201402, 13201400);
    InitializeCommonEvent(20005628, 13200401, 3201402, 3202401);
    InitializeEvent(0, 13205401, 0);
    InitializeEvent(0, 13205410, 0);
    InitializeEvent(0, 13205420, 0);
    InitializeEvent(0, 13205430, 0);
    InitializeEvent(0, 13205435, 0);
    InitializeEvent(0, 13205440, 0);
    InitializeEvent(0, 13205441, 0);
    InitializeEvent(0, 13205442, 0);
    InitializeEvent(0, 13205450, 0);
    InitializeEvent(0, 13205470, 1, 321000001);
    InitializeEvent(1, 13205470, 2, 321000002);

    // Dragon Cultist Xeric
    InitializeCommonEvent(20008100, 13200430, 3200430, 11500); // Setup
    InitializeCommonEvent(20090020, 3200430, 85100); // Kill Taunt
    
    // Dragon Cultist Zena
    InitializeCommonEvent(20008100, 13200431, 3200431, 12600); // Setup
    InitializeCommonEvent(20090020, 3200431, 85100); // Kill Taunt
    
    // Dragon Cultist Pon
    InitializeCommonEvent(20008100, 13200432, 3200432, 12700); // Setup
    InitializeCommonEvent(20090020, 3200432, 85100); // Kill Taunt
    
    // Dragon Cultist Kalix
    InitializeCommonEvent(20008100, 13200433, 3200433, 12800); // Setup
    InitializeCommonEvent(20090020, 3200433, 85100); // Kill Taunt
    
    // Dragon Cultist Wex
    InitializeCommonEvent(20008100, 13200434, 3200434, 12900); // Setup
    InitializeCommonEvent(20090020, 3200434, 85100); // Kill Taunt
    
    // Dragon Cultist Solos
    InitializeCommonEvent(20008100, 13200435, 3200435, 13000); // Setup
    InitializeCommonEvent(20090020, 3200435, 85100); // Kill Taunt
    
    // Gaius the Mighty
    InitializeCommonEvent(20090010, 3200730, 3202730, 30310, 63010, 14200, 99005480, 99005481, 13200730); // Setup
    InitializeCommonEvent(20090020, 3200730, 81300); // Kill Taunt
    
    // Dragon Hunter Karstark
    InitializeCommonEvent(20090010, 3200732, 3202732, 30310, 63010, 15600, 99005590, 99005591, 13200732); // Setup
    InitializeCommonEvent(20090020, 3200732, 81300); // Kill Taunt
    
    //----------------------
    // Treasure
    //----------------------
    // Chests
    InitializeCommonEvent(20005520, 13201480, 3201480, 3204480);
    InitializeCommonEvent(20005520, 13201481, 3201481, 3204481);
    InitializeCommonEvent(20005520, 13201482, 3201482, 3204482);
    InitializeCommonEvent(20005520, 13201483, 3201483, 3204483);
    InitializeCommonEvent(20005520, 13201484, 3201484, 3204484);
    InitializeCommonEvent(20005520, 13201485, 3201485, 3204485);
    InitializeCommonEvent(20005520, 13201486, 3201486, 3204486);
    InitializeCommonEvent(20005520, 13201487, 3201487, 3204487);
    InitializeCommonEvent(20005520, 13201488, 3201488, 3204488);
    InitializeCommonEvent(20005520, 13201489, 3201489, 3204489);
    InitializeCommonEvent(20005520, 13201490, 3201490, 3204490);
    InitializeCommonEvent(20005520, 13201491, 3201491, 3204491);
    
    // Mimics
    InitializeCommonEvent(20005400, 3200580); // Open Action
    InitializeCommonEvent(20005400, 3200581); // Open Action
    InitializeCommonEvent(20005400, 3200582); // Open Action
    InitializeCommonEvent(20005400, 3200583); // Open Action
    InitializeCommonEvent(20005400, 3200584); // Open Action
    InitializeCommonEvent(20000343, 13200580, 3200580, 53201000); // Treasure Control
    InitializeCommonEvent(20000343, 13200581, 3200581, 53201010); // Treasure Control
    InitializeCommonEvent(20000343, 13200582, 3200582, 53201020); // Treasure Control
    InitializeCommonEvent(20000343, 13200583, 3200583, 53201030); // Treasure Control
    InitializeCommonEvent(20000343, 13200584, 3200584, 53201040); // Treasure Control
    
    // One-time Enemies
    InitializeCommonEvent(20005341, 13200300, 3200300, 3202000); // Ancient Wyvern
    InitializeCommonEvent(20008150, 13200259, 3200259); // Crystal Lizard
    
    // Gesture Puzzles
    InitializeCommonEvent(20090400, 12535, 3202910, 3200800, 53200800); // Dragon Altar
    InitializeCommonEvent(20090400, 12535, 3202915, 3200810, 53200810); // Dragon Mausoleum
    
    //----------------------
    // Enemies
    //----------------------
    // NG+
    InitializeCommonEvent(20008001, 3205775, 1);
    InitializeCommonEvent(20008001, 3205776, 2);
    InitializeCommonEvent(20008001, 3205777, 3);
    
    //----------------------
    // Companion
    //----------------------
    // Local Companion
    InitializeCommonEvent(20080000, 3200710); // Setup
    InitializeCommonEvent(20080001, 3200710); // Bonfire Rest
    InitializeCommonEvent(20080002, 3200710); // Tools
    InitializeCommonEvent(20080003, 3200710); // Effects
    InitializeCommonEvent(20080004, 3200710, 160760000, 160760209, 32, 0); // Summoning
    
    // Curses
    InitializeCommonEvent(20081010, 3205760, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 3205760, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 3205760, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 3205760, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 3205760, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 3205760, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 3205760, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 3205760, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 3205760, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 3205760, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 3205760, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 3205760, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 3205760, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 3205760, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 3205760, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 3205760, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 3205760, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 3205760, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 3205760, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 3205760, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 3205760, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 3205760, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 3205760, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 3205760, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 3205760, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 3205760, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 3205760, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 3205760, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 3205760, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 3205760, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 3205760, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 3205760, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 3205760, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 3205760, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 3205760, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 3205760, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 3205760, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 3205760, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 3205760, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 3205760, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 3205750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 3205760, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 3205770, 250002220, 25000510);  // Curse of Valor
    
    // Company of Champions
    InitializeCommonEvent(20081020, 3205760, 160101502, 160101503); // I
    InitializeCommonEvent(20081020, 3205760, 160101512, 160101513); // II
    InitializeCommonEvent(20081020, 3205760, 160101522, 160101523); // III
    InitializeCommonEvent(20081020, 3205760, 160101532, 160101533); // IV
    InitializeCommonEvent(20081020, 3205760, 160101542, 160101543); // V
    
    // Gauntlet Mode
    InitializeCommonEvent(20090800, 3202050);
    InitializeCommonEvent(20090800, 3202051);
    InitializeCommonEvent(20090800, 3202052);
    InitializeCommonEvent(20090800, 3202053);
    InitializeCommonEvent(20090800, 3202054);
    InitializeCommonEvent(20090800, 3202055);
    InitializeCommonEvent(20090800, 3202056);
    InitializeCommonEvent(20090800, 3202057);
});

//---------------------------------------------
// Destructor
//---------------------------------------------
Event(50, Default, function() {
    InitializeEvent(0, 13205100, 0);
    SetMapSoundState(3204801, Disabled);
    SetMapSoundState(3204851, Disabled);
    SetMapSoundState(3204852, Disabled);
});

Event(13205100, Default, function() {
    ChangeCamera(-1, -1);
});

Event(13205260, Restart, function(X0_4, X4_4, X8_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(X0_4, Disabled);
    IfCharacterAIState(MAIN, X4_4, AIStateType.Combat, ComparisonType.Equal, 1);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    WaitFixedTimeSeconds(X8_4);
    Label0();
    SetCharacterAIState(X0_4, Enabled);
});

Event(13205290, Restart, function() {
    ActivateHit(3204280, Enabled);
    IfCharacterHasEventMessage(MAIN, 3205290, 10, true, ComparisonType.Equal, 1);
    ActivateHit(3204280, Disabled);
    WaitFixedTimeSeconds(2);
    EndUnconditionally(EventEndType.Restart);
});

Event(13205300, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13200300);
    SetCharacterDefaultBackreadState(3200300, Enabled);
    SetNetworkUpdateRate(3200300, true, CharacterUpdateFrequency.AlwaysUpdate);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(3200300, AuthorityLevel.Forced);
    SetNetworkconnectedEventFlag(13205398, OFF);
    IfCharacterDeadalive(MAIN, 3200300, DeathState.Dead, ComparisonType.Equal, 1);
    Label0();
    SetEventFlag(13200300, ON);
    EndUnconditionally(EventEndType.End);
});

Event(13205310, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 13200300);
    ChangeCharacterEnableState(3200300, Disabled);
    ForceCharacterDeath(3200300, false);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfEventFlag(Label.LABEL9, ON, TargetEventFlagType.EventFlag, 13205399);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13205311);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13205312);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13205321);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13205331);
    ChangeCharacterEnableState(3200300, Enabled);
    SetCharacterAIState(3200300, Disabled);
    SetCharacterGravity(3200300, Disabled);
    WarpCharacterAndCopyFloor(3200300, TargetEntityType.Area, 3202310, -1, 3200300);
    ForceAnimationPlayback(3200300, 30000, true, false, false, 0, 1);
    SetNetworkconnectedEventFlag(13205301, ON);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_05, InsideOutsideState.Inside, 10000, 3202300, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3202306, 1);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, 3202399, 1);
    IfConditionGroup(OR_02, PASS, OR_05);
    IfConditionGroup(OR_02, PASS, OR_04);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfCharacterDamagedBy(AND_02, 3200300, 10000);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfConditionGroup(OR_03, PASS, AND_02);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 13205301);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 13205398);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfCharacterHasSpeffect(AND_03, 3200300, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_03);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13205399);
    GotoIfConditionGroupStateCompiled(Label.LABEL9, PASS, OR_04);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, OR_05);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, ON);
    SkipIfConditionGroupStateCompiled(1, PASS, AND_02);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(3200300, 20004, false, true, true, 0, 1);
    IfInoutsideArea(OR_06, InsideOutsideState.Inside, 10000, 3202300, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, OR_06);
    WaitFixedTimeSeconds(3);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, OFF);
    EndUnconditionally(EventEndType.Restart);
    Label1();
    SetCharacterGravity(3200300, Enabled);
    SetCharacterAIState(3200300, Enabled);
    SkipIfEventFlag(8, ON, TargetEventFlagType.EventFlag, 13205311);
    SetNetworkconnectedEventFlag(13205301, OFF);
    SetNetworkconnectedEventFlag(13205311, ON);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, ON);
    ForceAnimationPlayback(3200300, 20010, false, true, true, 0, 1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, OFF);
    SkipUnconditionally(1);
    WarpCharacterAndCopyFloor(3200300, TargetEntityType.Area, 3202312, -1, 3200300);
    EndUnconditionally(EventEndType.End);
    Label9();
    SkipIfEventFlag(7, ON, TargetEventFlagType.EventFlag, 13205399);
    SetNetworkconnectedEventFlag(13205301, OFF);
    SetNetworkconnectedEventFlag(13205399, ON);
    ForceAnimationPlayback(3200300, 20013, false, false, true, 0, 1);
    IfCharacterHasEventMessage(AND_04, 3200300, 60, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_04, 3200300, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_04, 3200300, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_04);
    ChangeCharacterEnableState(3200300, Disabled);
    SetCharacterAnimationState(3200300, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13205320, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200300);
    GotoIfEventFlag(Label.LABEL9, ON, TargetEventFlagType.EventFlag, 13205399);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13205321);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 3200300, 3202321, 1);
    IfCharacterHasEventMessage(AND_01, 3200300, 50, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 13205322);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, 3202304, 1);
    IfInoutsideArea(OR_05, InsideOutsideState.Inside, 10000, 3202399, 1);
    IfConditionGroup(OR_03, PASS, OR_04);
    IfConditionGroup(OR_03, PASS, OR_05);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, OR_03);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfEventFlag(OR_06, ON, TargetEventFlagType.EventFlag, 13205311);
    IfEventFlag(OR_06, ON, TargetEventFlagType.EventFlag, 13205312);
    IfConditionGroup(AND_03, PASS, OR_02);
    IfConditionGroup(AND_03, PASS, OR_06);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 13205398);
    IfConditionGroup(MAIN, PASS, AND_03);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13205399);
    GotoIfConditionGroupStateCompiled(Label.LABEL9, PASS, OR_04);
    GotoIfConditionGroupStateCompiled(Label.LABEL9, PASS, OR_05);
    Label0();
    SetCharacterGravity(3200300, Disabled);
    SetCharacterAIState(3200300, Disabled);
    SkipIfEventFlag(9, ON, TargetEventFlagType.EventFlag, 13205321);
    SetNetworkconnectedEventFlag(13205311, OFF);
    SetNetworkconnectedEventFlag(13205321, ON);
    SetNetworkconnectedEventFlag(13205322, ON);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, ON);
    ForceAnimationPlayback(3200300, 20011, false, true, true, 0, 1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, OFF);
    SkipUnconditionally(1);
    ForceAnimationPlayback(3200300, 30001, true, false, true, 0, 1);
    WarpCharacterAndCopyFloor(3200300, TargetEntityType.Area, 3202311, -1, 3200300);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 13205321);
    IfEventFlag(OR_07, ON, TargetEventFlagType.EventFlag, 13205311);
    IfEventFlag(OR_07, ON, TargetEventFlagType.EventFlag, 13205312);
    IfConditionGroup(AND_04, PASS, OR_07);
    IfConditionGroup(MAIN, PASS, AND_04);
    EndUnconditionally(EventEndType.Restart);
    Label9();
    SkipIfEventFlag(11, ON, TargetEventFlagType.EventFlag, 13205399);
    SetNetworkconnectedEventFlag(13205311, OFF);
    SetNetworkconnectedEventFlag(13205312, OFF);
    SetNetworkconnectedEventFlag(13205399, ON);
    WaitFixedTimeSeconds(1);
    SetCharacterAIState(3200300, Disabled);
    RotateCharacter(3200300, 3202350, 5002, true);
    ForceAnimationPlayback(3200300, 20014, false, false, true, 0, 1);
    IfCharacterHasEventMessage(AND_05, 3200300, 60, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_05, 3200300, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_05, 3200300, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_05);
    SetCharacterAIState(3200300, Disabled);
    ChangeCharacterEnableState(3200300, Disabled);
    SetCharacterAnimationState(3200300, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13205330, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200300);
    GotoIfEventFlag(Label.LABEL9, ON, TargetEventFlagType.EventFlag, 13205399);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13205331);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13205312);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_03, InsideOutsideState.Inside, 10000, 3202302, 1);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, 3202399, 1);
    IfConditionGroup(OR_03, PASS, OR_04);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfCharacterDamagedBy(AND_02, 3200300, 10000);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 13205321);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 13205398);
    IfConditionGroup(AND_03, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_03);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13205399);
    GotoIfConditionGroupStateCompiled(Label.LABEL9, PASS, OR_04);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, AND_02);
    Label0();
    SetCharacterGravity(3200300, Enabled);
    SetCharacterAIState(3200300, Enabled);
    SkipIfEventFlag(8, ON, TargetEventFlagType.EventFlag, 13205312);
    SetNetworkconnectedEventFlag(13205321, OFF);
    SetNetworkconnectedEventFlag(13205312, ON);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, ON);
    ForceAnimationPlayback(3200300, 20012, false, true, true, 0, 1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, OFF);
    SkipUnconditionally(1);
    WarpCharacterAndCopyFloor(3200300, TargetEntityType.Area, 3202313, -1, 3200300);
    EndUnconditionally(EventEndType.End);
    Label1();
    SkipIfEventFlag(8, ON, TargetEventFlagType.EventFlag, 13205331);
    SetNetworkconnectedEventFlag(13205321, OFF);
    SetNetworkconnectedEventFlag(13205331, ON);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, ON);
    ForceAnimationPlayback(3200300, 20016, false, true, true, 0, 1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, OFF);
    SkipUnconditionally(1);
    ForceAnimationPlayback(3200300, 30000, true, false, true, 0, 1);
    WarpCharacterAndCopyFloor(3200300, TargetEntityType.Area, 3202310, -1, 3200300);
    EndUnconditionally(EventEndType.End);
    Label9();
    SkipIfEventFlag(7, ON, TargetEventFlagType.EventFlag, 13205399);
    SetNetworkconnectedEventFlag(13205321, OFF);
    SetNetworkconnectedEventFlag(13205399, ON);
    ForceAnimationPlayback(3200300, 20015, false, false, true, 0, 1);
    IfCharacterHasEventMessage(AND_04, 3200300, 60, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_04, 3200300, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_04, 3200300, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_04);
    ChangeCharacterEnableState(3200300, Disabled);
    SetCharacterAnimationState(3200300, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13205340, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200300);
    GotoIfEventFlag(Label.LABEL9, ON, TargetEventFlagType.EventFlag, 13205399);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13205311);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3202303, 1);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, 3202304, 1);
    IfInoutsideArea(OR_05, InsideOutsideState.Inside, 10000, 3202399, 1);
    IfConditionGroup(OR_02, PASS, OR_04);
    IfConditionGroup(OR_02, PASS, OR_05);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfCharacterDamagedBy(AND_02, 3200300, 10000);
    IfCharacterHPRatio(AND_02, 3200300, ComparisonType.LessOrEqual, 0.3, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfConditionGroup(OR_03, PASS, AND_02);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 13205331);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 13205398);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfCharacterHasSpeffect(AND_03, 3200300, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_03);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13205399);
    GotoIfConditionGroupStateCompiled(Label.LABEL9, PASS, OR_04);
    GotoIfConditionGroupStateCompiled(Label.LABEL9, PASS, OR_05);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, AND_02);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, ON);
    ForceAnimationPlayback(3200300, 20004, false, true, true, 0, 1);
    IfInoutsideArea(OR_06, InsideOutsideState.Inside, 10000, 3202304, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_06);
    WaitFixedTimeSeconds(3);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, OFF);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    SetCharacterGravity(3200300, Enabled);
    SetCharacterAIState(3200300, Enabled);
    SkipIfEventFlag(7, ON, TargetEventFlagType.EventFlag, 13205311);
    SetNetworkconnectedEventFlag(13205331, OFF);
    SetNetworkconnectedEventFlag(13205311, ON);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, ON);
    ForceAnimationPlayback(3200300, 20010, false, true, true, 0, 1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13205398, OFF);
    EndUnconditionally(EventEndType.End);
    Label9();
    SkipIfEventFlag(7, ON, TargetEventFlagType.EventFlag, 13205399);
    SetNetworkconnectedEventFlag(13205331, OFF);
    SetNetworkconnectedEventFlag(13205399, ON);
    ForceAnimationPlayback(3200300, 20013, false, false, true, 0, 1);
    IfCharacterHasEventMessage(AND_04, 3200300, 60, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_04, 3200300, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_04, 3200300, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_04);
    ChangeCharacterEnableState(3200300, Disabled);
    SetCharacterAnimationState(3200300, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13205350, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X4_4);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    IfCharacterHasEventMessage(AND_01, X0_4, 10, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    Label0();
    SetNetworkconnectedEventFlag(X4_4, ON);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    EndUnconditionally(EventEndType.Restart);
});

Event(13205360, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    BatchSetEventFlags(X12_4, X16_4, OFF);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13200381);
    RandomlySetEventFlagInRange(X20_4, X24_4, ON);
    WaitFixedTimeFrames(1);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X12_4);
    SetNetworkconnectedEventFlag(X4_4, ON);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    SetNetworkconnectedEventFlag(X8_4, ON);
    EndUnconditionally(EventEndType.Restart);
});

Event(13205370, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(X4_4, ON);
    GotoIfComparison(Label.LABEL0, ComparisonType.Equal, X8_4, 0);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X8_4);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    IfCharacterHPRatio(AND_09, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_09);
    MakeEnemyAppearEvent(X28_4);
    WaitFixedTimeSeconds(1.1);
    IfAllPlayersInoutsideArea(AND_02, InsideOutsideState.Outside, X20_4);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_02);
    ForceAnimationPlayback(X0_4, 63010, false, false, false, 0, 1);
    SpawnOneshotSFX(TargetEntityType.Area, X12_4, -1, 30300);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X24_4);
    SetSpeffect(X24_4, 11292);
    GotoUnconditionally(Label.LABEL2);
    Label1();
    ForceAnimationPlayback(X0_4, 63010, false, false, false, 0, 1);
    SpawnOneshotSFX(TargetEntityType.Area, X16_4, -1, 30300);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X24_4);
    SetSpeffect(X24_4, 11292);
    Label2();
    IfCharacterDeadalive(OR_01, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, X4_4);
    WaitFixedTimeSeconds(3);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    ClearSpeffect(X24_4, 11292);
    EndUnconditionally(EventEndType.Restart);
});

Event(13205375, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(X4_4, ON);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X8_4);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    IfCharacterHPRatio(AND_09, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_09);
    MakeEnemyAppearEvent(X20_4);
    WaitFixedTimeSeconds(1.1);
    ForceAnimationPlayback(X0_4, 63010, false, false, false, 0, 1);
    SpawnOneshotSFX(TargetEntityType.Area, X12_4, -1, 30300);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X16_4);
    SetSpeffect(X16_4, 11292);
    IfCharacterDeadalive(OR_01, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, X4_4);
    WaitFixedTimeSeconds(3);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    ClearSpeffect(X16_4, 11292);
    EndUnconditionally(EventEndType.Restart);
});

// Drakeblood Knight
Event(13205380, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200380);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterHPValue(AND_01, 3200291, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(9480, ON);
    SetEventFlag(13200380, ON);
});

// Havel
Event(13205381, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200381);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterHPValue(AND_01, 3200299, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(9481, ON);
    SetEventFlag(13200381, ON);
});

Event(13205390, Default, function() {
    DeactivateObject(3201780, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13205401, Restart, function() {
    InitializeCommonEvent(20005621, 13200400, 13200405, 3201400, 3201401, 3204401, 3201402, 3204402, 3202401, 3202402, 13201400, 13204400, 13200401);
});

Event(13205410, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13200410);
    SetObjactState(3201411, 1324051, Enabled);
    IfObjactEventFlag(MAIN, 3204411);
    SetObjactState(3201411, 1324051, Disabled);
    WaitFixedTimeSeconds(2.25);
    ForceAnimationPlayback(3201410, 1, false, true, true, 0, 1);
    ForceAnimationPlayback(3201410, 2, false, false, true, 0, 1);
    ForceAnimationPlayback(3201411, 3, false, false, true, 0, 1);
    SetEventFlag(13200410, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    ReproduceObjectAnimation(3201410, 2);
    SetObjactState(3201411, 1324051, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13205420, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13200800);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13200800);
    ForceAnimationPlayback(3201420, 2, false, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    ReproduceObjectAnimation(3201420, 2);
    EndUnconditionally(EventEndType.End);
});

Event(13205430, Restart, function() {
    ReproduceObjectAnimation(3201430, 2);
});

Event(13205435, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13200850);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13200850);
    ForceAnimationPlayback(3201435, 2, false, false, true, 0, 1);
    ForceAnimationPlayback(3201436, 2, false, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    ReproduceObjectAnimation(3201435, 2);
    ReproduceObjectAnimation(3201436, 2);
    EndUnconditionally(EventEndType.End);
});

Event(13205440, Restart, function() {
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 13200445);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13200440);
    SetObjactState(3201441, 324012, Enabled);
    IfObjactEventFlag(MAIN, 3204441);
    SetEventFlag(13200440, ON);
    SetObjactState(3201441, 324012, Disabled);
    WaitFixedTimeSeconds(2.2);
    ForceAnimationPlayback(3201441, 3, false, false, true, 0, 1);
    WaitFixedTimeSeconds(0.21);
    SetEventFlag(13200445, ON);
    SetObjactState(3201441, 324012, Disabled);
    EndUnconditionally(EventEndType.End);
    Label1();
    SetEventFlag(13200445, ON);
    SetObjactState(3201441, 324012, Disabled);
    ReproduceObjectAnimation(3201441, 0);
    EndUnconditionally(EventEndType.End);
    Label2();
    SetObjactState(3201441, 324012, Disabled);
    ReproduceObjectAnimation(3201441, 0);
    EndUnconditionally(EventEndType.End);
});

Event(13205441, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200850);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13200445);
    DeactivateObject(3203850, Disabled);
    DeactivateObject(3203851, Disabled);
    DeactivateObject(3203852, Disabled);
    DeactivateObject(3203853, Disabled);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13200445);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneToPlayerAndChangeCurrentMapCeremony(32000000, CutscenePlayMode.SkippableWithFadeOut, 10, 1, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneToPlayerAndChangeCurrentMapCeremony(32000000, CutscenePlayMode.UnskippableWithFadeOut, 10, 1, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayerAndChangeCurrentMapCeremony(32000000, CutscenePlayMode.Unskippable, 10, 1, 10000);
    WaitFixedTimeFrames(1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    TriggerMultiplayerEvent(1);
    Label0();
    SetMapCeremony(32, 0, 10);
    SetEventFlag(13200446, ON);
    DeactivateObject(3203850, Enabled);
    DeactivateObject(3203851, Enabled);
    DeactivateObject(3203852, Enabled);
    DeactivateObject(3203853, Enabled);
    EndUnconditionally(EventEndType.End);
});

Event(13205442, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13200862);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13200856);
    WaitFixedTimeFrames(1);
    Label0();
    DeactivateObject(3203850, Disabled);
    DeactivateObject(3203851, Disabled);
    DeactivateObject(3203852, Disabled);
    DeactivateObject(3203853, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(13205450, Default, function() {
    RegisterLadder(13200450, 13200451, 3201450);
    RegisterLadder(13200452, 13200453, 3201451);
    RegisterLadder(13200454, 13200455, 3201452);
    RegisterLadder(13200456, 13200457, 3201453);
    RegisterLadder(13200458, 13200459, 3201454);
});

Event(13205470, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    SetEventFlag(13205479, OFF);
    IfMultiplayerEvent(AND_01, X0_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 13205479);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(13205479, ON);
    PlaySE(3201440, SoundType.a_EnvironmentalSound, X4_4);
    WaitFixedTimeSeconds(7);
    PlaySE(3201440, SoundType.a_EnvironmentalSound, X4_4);
    WaitFixedTimeSeconds(7);
    PlaySE(3201440, SoundType.a_EnvironmentalSound, X4_4);
    WaitFixedTimeSeconds(10);
    SetEventFlag(13205479, OFF);
    EndUnconditionally(EventEndType.Restart);
});

Event(13205490, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X0_4, Disabled);
    DeleteObjectfollowingSFX(X0_4, true);
    IfMultiplayerState(OR_01, MultiplayerState.TryingtoJoinSession);
    IfMultiplayerState(OR_01, MultiplayerState.TryingtoCreateSession);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X8_4);
    DeactivateObject(X0_4, Enabled);
    CreateObjectfollowingSFX(X0_4, 101, X4_4);
    Label0();
    IfMultiplayerState(OR_02, MultiplayerState.TryingtoJoinSession);
    IfMultiplayerState(OR_02, MultiplayerState.TryingtoCreateSession);
    IfConditionGroup(MAIN, FAIL, OR_02);
    EndUnconditionally(EventEndType.Restart);
});

// Ancient Wyvern - Boss Start
Event(13205810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 13200800);
    ChangeCharacterEnableState(3200800, Disabled);
    SetCharacterAnimationState(3200800, Disabled);
    ForceCharacterDeath(3200800, false);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    ChangeCharacterEnableState(3200800, Disabled);
    SetCharacterAIState(3200800, Disabled);
    WarpCharacterAndCopyFloor(3200800, TargetEntityType.Area, 3202802, -1, 3200800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13205805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3202801, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(13200801, ON);
    ChangeCharacterEnableState(3200800, Enabled);
    SetNetworkUpdateRate(3200800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(3200800, Enabled);
    ForceAnimationPlayback(3200800, 20001, false, true, false, 0, 1);
    DisplayBossHealthBar(Enabled, 3200800, 0, 903140);
    SetEventFlag(13205802, ON);
    InitializeCommonEvent(20020114, 0); // Boss Start
});

// Ancient Wyvern Kill
Event(13200811, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200800);
    IfCharacterHPRatio(MAIN, 3200800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(0.5);
    PlaySE(3200800, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 3200800, DeathState.Dead, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(3.5);
    HandleBossDefeat(3200800);
    SetEventFlag(13200800, ON);
    SetEventFlag(9305, ON);
    SetEventFlag(6305, ON);
    InitializeCommonEvent(20020000, 25001015, 25002015, 800300060, 800300000); // Boss Kill
});

Event(13205820, Restart, function() {
    InitializeCommonEvent(20005800, 13200800, 3201800, 3202800, 13205805, 3201800, 3200800, 13200801, 3202801);
    InitializeCommonEvent(20005801, 13200800, 3201800, 3202800, 13205805, 3201800, 13205806);
    InitializeCommonEvent(20005820, 13200800, 3201800, 3, 13200801);
    InitializeCommonEvent(20005820, 13200800, 3201801, 2, 13200801);
    InitializeCommonEvent(20001835, 13200800, 13205805, 13205806, 13205802, 3204801);
    InitializeCommonEvent(20005810, 13200800, 3201800, 3202800, 10000);
});

// Nameless King - Boss Start
Event(13205860, Restart, function() {
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13200445);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 13200850);
    ForceCharacterDeath(3205850, false);
    ChangeCharacterEnableState(3205850, Disabled);
    SetCharacterAnimationState(3205850, Disabled);
    SetNetworkUpdateRate(3205850, true, CharacterUpdateFrequency.NoUpdate);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    ChangeCharacterEnableState(3205850, Disabled);
    SetCharacterAnimationState(3205850, Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13200445);
    
    Label1();
    ChangeCharacterEnableState(3200850, Enabled);
    ChangeCharacterEnableState(3200851, Disabled);
    SetCharacterAnimationState(3200850, Enabled);
    SetCharacterAnimationState(3200851, Disabled);
    SetCharacterAIState(3205850, Disabled);
    SetCharacterImmortality(3200850, Enabled);
    ForceAnimationPlayback(3200850, 700, false, false, false, 0, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13205855);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3202850, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkUpdateRate(3200850, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(3200850, 1700, false, true, false, 0, 1);
    SetCharacterAIState(3200850, Enabled);
    DisplayBossHealthBar(Enabled, 3200850, 0, 905030);
    SetEventFlag(13205851, ON);
    InitializeCommonEvent(20020115, 0); // Boss Start
});

// Nameless King - 2nd Phase Boss Start
Event(13205861, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200850);
    IfCharacterHPRatio(AND_01, 3200850, ComparisonType.LessOrEqual, 0.01, ComparisonType.Equal, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfCharacterHasSpeffect(OR_01, 3200850, 12160, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, OR_01);
    ForceAnimationPlayback(3200850, 20001, false, true, false, 0, 1);
    EnableBossMapSound(-1, Disabled);
    WaitFixedTimeFrames(1);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneAndWarpPlayer(32000010, CutscenePlayMode.SkippableWithFadeOut, 3202858, 32, 0, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneAndWarpPlayer(32000010, CutscenePlayMode.UnskippableWithFadeOut, 3202858, 32, 0, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(32000010, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    ForceCharacterDeath(3200850, false);
    ChangeCharacterEnableState(3200850, Disabled);
    SetCharacterAnimationState(3200850, Disabled);
    SetCharacterAIState(3200850, Disabled);
    SetNetworkUpdateRate(3200850, true, CharacterUpdateFrequency.NoUpdate);
    DisplayBossHealthBar(Disabled, 3200850, 0, 905030);
    ChangeCharacterEnableState(3200851, Enabled);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(3200851, AuthorityLevel.Forced);
    SetCharacterAnimationState(3200851, Enabled);
    SetCharacterAIState(3200851, Enabled);
    SetNetworkUpdateRate(3200851, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 3200851, 0, 905010);
    SetEventFlag(13205852, ON);
});

// Nameless King Kill
Event(13200862, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 13200856);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13200855);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13200850);
    IfCharacterDeadalive(AND_01, 3200851, DeathState.Dead, ComparisonType.Equal, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(2.2);
    HandleBossDefeat(3200851);
    SetEventFlag(13200850, ON);
    SetEventFlag(9304, ON);
    SetEventFlag(6304, ON);
    InitializeCommonEvent(20020000, 25001016, 25002016, 800300020, 800300030); // Boss Kill
    WaitFixedTimeSeconds(5);
    Label0();
    SetEventFlag(13200855, ON);
    WaitFixedTimeFrames(1);
    Label1();
    SetEventFlag(13200856, ON);
    Label2();
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(32000020, CutscenePlayMode.SkippableWithFadeOut, 0, 0, 3202859, 32, 0, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(32000020, CutscenePlayMode.UnskippableWithFadeOut, 0, 0, 3202859, 32, 0, 10000);
    SkipUnconditionally(1);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(32000020, CutscenePlayMode.Unskippable, 0, 0, 3202857, 32, 0, 10000);
    WaitFixedTimeFrames(1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    TriggerMultiplayerEvent(2);
});

Event(13200863, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200850);
    IfCharacterHPRatio(MAIN, 3200851, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(3200851, SoundType.s_SFX, 777777777);
});

Event(13205864, Restart, function() {
    SetNetworkSyncState(Disabled);
    ChangeCamera(-1, -1);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200850);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13205855);
    SkipUnconditionally(1);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13205856);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13205852);
    ChangeCamera(5030, 5030);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13205852);
    Label0();
    ChangeCamera(5270, 5270);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13200850);
    ChangeCamera(-1, -1);
});

Event(13205870, Restart, function() {
    InitializeCommonEvent(20005800, 13200850, 3201850, 3202850, 13205855, 3201850, 3205850, 0, 0);
    InitializeCommonEvent(20005801, 13200850, 3201850, 3202850, 13205855, 3201850, 13205856);
    InitializeCommonEvent(20005820, 13200855, 3201850, 832040, 13200446);
    InitializeCommonEvent(20001836, 13200850, 13205855, 13205856, 13205851, 3204851, 3204852, 13205852);
    InitializeCommonEvent(20005810, 13200850, 3201785, 3202785, 10000);
    InitializeCommonEvent(20005810, 13200850, 3201786, 3202786, 10000);
});

Event(13205880, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200850);
    CreateNPCPart(3200850, 1, NPCPartType.Part1, 2000, 1, 1, false, false); // King of the Storm Head
    IfNPCPartHP(MAIN, 3200850, 1, 0, ComparisonType.LessOrEqual);
    ForceAnimationPlayback(3200850, 20000, false, true, true, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(13205910, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 12535, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfElapsedSeconds(OR_01, 4);
    IfCharacterHasSpeffect(OR_01, 10000, 12535, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfCharacterHasSpeffect(EventEndType.Restart, 10000, 12535, false, ComparisonType.Equal, 1);
    AwardItemLot(X8_4);
    SetEventFlag(X0_4, ON);
    EndUnconditionally(EventEndType.End);
});

Event(13205930, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200850);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200930);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13200445);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13204190);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 3200190, 3202930, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 13200445);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 13204190);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13200445);
    Label0();
    SetCharacterInvincibility(3200190, Enabled);
    RotateCharacter(3200190, 3202932, 60060, true);
    ForceAnimationPlayback(3200190, 91050, false, true, false, 0, 1);
    WaitFixedTimeSeconds(5);
    ForceAnimationPlayback(3200190, 91052, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1);
    SendNPCSummonHome(3200190);
    SetEventFlag(13200930, ON);
    EndUnconditionally(EventEndType.End);
    Label1();
    ForceAnimationPlayback(3200190, 91030, false, false, false, 0, 1);
    WaitFixedTimeSeconds(2);
    SendNPCSummonHome(3200190);
});

Event(13205931, Restart, function() {
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13200445);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 13200930);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(13200931, ON);
});

// ----------------------------------------
// Trio of Explorers - Setup
// ----------------------------------------
Event(13205890, Restart, function() {
    var entity_Varg        = 3200870;
    var entity_Graverobber = 3200871;
    var entity_Cerah       = 3200872;
    
    var trigger_Trio_FogwallZone = 3202870;
    
    var flag_Trio_Defeated   = 13200870;
    var flag_Trio_InBattle   = 13205885;
    var flag_Trio_InProgress = 13200871;
    
    // Disable at init
    SetCharacterAIState(entity_Varg, Disabled);
    ChangeCharacterEnableState(entity_Varg, Disabled);
    SetCharacterAnimationState(entity_Varg, Disabled);
    
    SetCharacterAIState(entity_Graverobber, Disabled);
    ChangeCharacterEnableState(entity_Graverobber, Disabled);
    SetCharacterAnimationState(entity_Graverobber, Disabled);
    
    SetCharacterAIState(entity_Cerah, Disabled);
    ChangeCharacterEnableState(entity_Cerah, Disabled);
    SetCharacterAnimationState(entity_Cerah, Disabled);
    
    // End function if the Trio has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Trio_Defeated);
    
    // Enable entities
    ChangeCharacterEnableState(entity_Varg, Enabled);
    ChangeCharacterEnableState(entity_Cerah, Enabled);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Trio_InBattle);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, trigger_Trio_FogwallZone, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(flag_Trio_InProgress, ON);
    
    WaitFixedTimeSeconds(1.0);
    
    // Setup entities fully
    SetCharacterAnimationState(entity_Varg, Enabled);
    SetCharacterAnimationState(entity_Cerah, Enabled);
    
    SetCharacterAIState(entity_Varg, Enabled);
    SetCharacterAIState(entity_Cerah, Enabled);
    
    SetCharacterGravity(entity_Varg, Enabled);
    SetCharacterGravity(entity_Cerah, Enabled);
    
    SetNetworkUpdateRate(entity_Varg, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(entity_Cerah, true, CharacterUpdateFrequency.AlwaysUpdate);
    
    ActivateMultiplayerdependantBuffs(entity_Varg);
    ActivateMultiplayerdependantBuffs(entity_Cerah);
    
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(entity_Varg, AuthorityLevel.Forced);
    SetNetworkUpdateAuthority(entity_Cerah, AuthorityLevel.Forced);
    
    DisplayBossHealthBar(Enabled, entity_Varg, 0, 207300);
    DisplayBossHealthBar(Enabled, entity_Cerah, 1, 207320);
    
    InitializeCommonEvent(20020130, 0); // Boss Start
});

// ----------------------------------------
// Trio of Explorers - Kill
// ----------------------------------------
Event(13205891, Default, function() {
    var entity_Varg        = 3200870;
    var entity_Graverobber = 3200871;
    var entity_Cerah       = 3200872;
    
    var obj_Trio_Fogwall     = 3201870;
    var obj_Trio_BackFogwall = 3201871;
    
    var flag_Trio_Defeated = 13200870;
    var flag_Trio_InProgress = 13200871;
    
    // End function if Trio has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Trio_Defeated);
   
    IfCharacterHPRatio(MAIN, entity_Varg, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(MAIN, entity_Graverobber, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(MAIN, entity_Cerah, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(1);
    
    PlaySE(entity_Varg, SoundType.s_SFX, 777777777);
    PlaySE(entity_Graverobber, SoundType.s_SFX, 777777777);
    PlaySE(entity_Cerah, SoundType.s_SFX, 777777777);
    
    DeactivateObject(obj_Trio_Fogwall, Disabled);
    DeactivateObject(obj_Trio_BackFogwall, Disabled);
    
    WaitFixedTimeSeconds(4);
    
    HandleBossDefeat(entity_Varg);
    
    SetEventFlag(flag_Trio_Defeated, ON);
    SetEventFlag(flag_Trio_InProgress, OFF);
    SetEventFlag(9344, ON);
    SetEventFlag(6344, ON);
    
    InitializeCommonEvent(20020000, 25001031, 25002031, 800300020, 800300030); // Boss Kill
});


// ----------------------------------------
// Trio of Explorers - Fogwalls
// ----------------------------------------
Event(13205892, Restart, function() {
    var obj_Trio_Fogwall     = 3201870;
    var obj_Trio_BackFogwall = 3201871;
    
    var sound_Trio_BGM = 3204870;

    var trigger_Trio_FogwallZone = 3202870;
    
    var flag_Trio_Defeated    = 13200870;
    var flag_Trio_InBattle    = 13205885;
    var flag_Trio_ClientEnter = 13205886;
    var flag_Trio_BossStart   = 13205890; // Event ID flag
    
    var param_Trio_ActionButton = 3201870;
    
    // Trio of Explorers - Enter Boss Room
    InitializeCommonEvent(20005800, flag_Trio_Defeated, obj_Trio_Fogwall, trigger_Trio_FogwallZone, flag_Trio_InBattle, param_Trio_ActionButton, 0, 0, trigger_Trio_FogwallZone);
    
    // Trio of Explorers - Enter Boss Room (Client)
    InitializeCommonEvent(20005801, flag_Trio_Defeated, obj_Trio_Fogwall, trigger_Trio_FogwallZone, flag_Trio_InBattle, param_Trio_ActionButton, flag_Trio_ClientEnter);
    
    // Trio of Explorers - Boss Sound State
    InitializeCommonEvent(20001834, flag_Trio_Defeated, flag_Trio_InBattle, flag_Trio_BossStart, sound_Trio_BGM);
    
    // Trio of Explorers - Toggle Fogwall State
    InitializeCommonEvent(20005822, flag_Trio_Defeated, obj_Trio_Fogwall, 3);
    InitializeCommonEvent(20005822, flag_Trio_Defeated, obj_Trio_BackFogwall, 3);
    
    // Trio of Explorers - Enter Fogwall
    InitializeCommonEvent(20005810, flag_Trio_Defeated, obj_Trio_Fogwall, trigger_Trio_FogwallZone, 10000);
});

// ----------------------------------------
// Trio of Explorers - Invalidation
// ----------------------------------------
Event(13205893, Restart, function() {
    var trigger_Trio_InvalidationZone = 3202871;
    
    var entity_PlayerPoint = 3200960;
    var entity_SpawnPoint  = 3202960;
    
    var flag_Trio_Defeated   = 13200870;
    var flag_Trio_InProgress = 13200871;
    
    var mapID   = 32;
    var blockID = 0;
    var ceremonyID = 0
    
    // End function if boss has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Trio_Defeated);
    // End function if not started
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_Trio_InProgress);
    
    // Warp player outside of arena if in invalidation zone
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Trio_InProgress);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, trigger_Trio_InvalidationZone, 1);
    SkipIfConditionGroupStateUncompiled(7, FAIL, AND_01);
    
    SetEventFlag(flag_Trio_InProgress, OFF);
    SetPlayerRespawnPoint(entity_SpawnPoint);
    //SetMapCeremony(mapID, blockID, ceremonyID);
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    // Fallback
    SetEventFlag(flag_Trio_InProgress, OFF);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Trio of Explorers - Afflicted Graverobber Entrance
// ----------------------------------------
Event(13205894, Restart, function() {
    var entity_Varg        = 3200870;
    var entity_Graverobber = 3200871;
    var entity_Cerah       = 3200872;
    
    var flag_Trio_Defeated = 13200870;
    var flag_Trio_InProgress = 13200871;
    
    // End function if boss has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Trio_Defeated);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_Trio_InProgress);
    
    ChangeCharacterEnableState(entity_Graverobber, Enabled);
    SetLockOnPoint(entity_Graverobber, 100, Disabled);
    
    ForceAnimationPlayback(entity_Graverobber, 85000, false, false, false, 0, 1);
    
    IfCharacterHPRatio(OR_01, entity_Varg, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_01, entity_Cerah, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    WaitFixedTimeSeconds(0.1);
    
    // Play FFX on player
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 233, 527006);
    
    ForceAnimationPlayback(entity_Graverobber, 0, false, false, false, 0, 1);
    
    ChangeCharacterEnableState(entity_Graverobber, Enabled);
    SetCharacterAnimationState(entity_Graverobber, Enabled);
    SetCharacterAIState(entity_Graverobber, Enabled);
    SetCharacterGravity(entity_Graverobber, Enabled);
    SetNetworkUpdateRate(entity_Graverobber, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_Graverobber);
    
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(entity_Graverobber, AuthorityLevel.Forced);
    
    DisplayBossHealthBar(Enabled, entity_Graverobber, 2, 207310);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Titanite Abomination - Setup
// ----------------------------------------
Event(13205895, Restart, function() {
    var entity_TitaniteAbomination = 3200880;
    
    var trigger_TitaniteAbomination_FogwallZone1 = 3202880;
    var trigger_TitaniteAbomination_FogwallZone2 = 3202882;
    
    var flag_TitaniteAbomination_Defeated   = 13200880;
    var flag_TitaniteAbomination_InBattle   = 13205895;
    var flag_TitaniteAbomination_InProgress = 13200881;
    
    var name_TitaniteAbomination = 207090;
    
    // Disable at init
    SetCharacterAIState(entity_TitaniteAbomination, Disabled);
    ChangeCharacterEnableState(entity_TitaniteAbomination, Disabled);
    SetCharacterAnimationState(entity_TitaniteAbomination, Disabled);
    
    // Oceiros sounds
    SetCharacterAIState(3200881, Disabled);
    ChangeCharacterEnableState(3200881, Disabled);
    SetCharacterAnimationState(3200881, Disabled);
    
    // End function if Titanite Abomination has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_Defeated);
    
    // Enable entities
    ChangeCharacterEnableState(entity_TitaniteAbomination, Enabled);
    
    // Skip to Label0 if function has already run once
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    // Play initial pose
    ForceAnimationPlayback(entity_TitaniteAbomination, 20, true, false, false, 0, 1);
    // Play rise up pose once player enters arena
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_InBattle);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, trigger_TitaniteAbomination_FogwallZone1, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, trigger_TitaniteAbomination_FogwallZone2, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(flag_TitaniteAbomination_InProgress, ON);
    
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(entity_TitaniteAbomination, 2100, false, false, false, 0, 1);
    
    Label0();
    // Setup entities fully
    SetCharacterGravity(entity_TitaniteAbomination, Enabled);
    SetCharacterAnimationState(entity_TitaniteAbomination, Enabled);
    SetCharacterAIState(entity_TitaniteAbomination, Enabled);
    SetNetworkUpdateRate(entity_TitaniteAbomination, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_TitaniteAbomination);
    
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(entity_TitaniteAbomination, AuthorityLevel.Forced);
    
    DisplayBossHealthBar(Enabled, entity_TitaniteAbomination, 0, name_TitaniteAbomination);
    InitializeCommonEvent(20020133, 0); // Boss Start
});

// ----------------------------------------
// Titanite Abomination - Kill
// ----------------------------------------
Event(13205896, Default, function() {
    var entity_TitaniteAbomination = 3200880;
    
    var obj_TitaniteAbomination_Fogwall     = 3201880;
    var obj_TitaniteAbomination_BackFogwall = 3201881;
    
    var flag_TitaniteAbomination_Defeated   = 13200880;
    var flag_TitaniteAbomination_InProgress = 13200881;
    
    // End function if Titanite Abomination has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_Defeated);
   
    IfCharacterHPRatio(MAIN, entity_TitaniteAbomination, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(entity_TitaniteAbomination, SoundType.s_SFX, 777777777);
    DeactivateObject(obj_TitaniteAbomination_Fogwall, Disabled);
    DeactivateObject(obj_TitaniteAbomination_BackFogwall, Disabled);
    WaitFixedTimeSeconds(4);
    HandleBossDefeat(entity_TitaniteAbomination);
    SetEventFlag(flag_TitaniteAbomination_Defeated, ON);
    SetEventFlag(flag_TitaniteAbomination_InProgress, OFF);
    SetEventFlag(9347, ON);
    SetEventFlag(6347, ON);
    
    InitializeCommonEvent(20020000, 25001034, 25002034, 800300020, 800300030); // Boss Kill
});


// ----------------------------------------
// Titanite Abomination - Fogwalls
// ----------------------------------------
Event(13205897, Restart, function() {
    var obj_TitaniteAbomination_Fogwall     = 3201880;
    var obj_TitaniteAbomination_BackFogwall = 3201881;
    
    var sound_TitaniteAbomination_BGM = 3204880;

    var trigger_TitaniteAbomination_FogwallZone1 = 3202880;
    var trigger_TitaniteAbomination_FogwallZone2 = 3202882;
    
    var flag_TitaniteAbomination_Defeated    = 13200880;
    var flag_TitaniteAbomination_InBattle    = 13205895;
    var flag_TitaniteAbomination_ClientEnter = 13205896;
    var flag_TitaniteAbomination_BossStart   = 13205895; // Event ID flag
    
    var param_TitaniteAbomination_ActionButton = 3201880;
    
    // Titanite Abomination - Enter Boss Room
    InitializeCommonEvent(20005800, flag_TitaniteAbomination_Defeated, obj_TitaniteAbomination_Fogwall, trigger_TitaniteAbomination_FogwallZone1, flag_TitaniteAbomination_InBattle, param_TitaniteAbomination_ActionButton, 0, 0, trigger_TitaniteAbomination_FogwallZone1);
    InitializeCommonEvent(20005800, flag_TitaniteAbomination_Defeated, obj_TitaniteAbomination_BackFogwall, trigger_TitaniteAbomination_FogwallZone2, flag_TitaniteAbomination_InBattle, param_TitaniteAbomination_ActionButton, 0, 0, trigger_TitaniteAbomination_FogwallZone2);
    
    // Titanite Abomination - Enter Boss Room (Client)
    InitializeCommonEvent(20005801, flag_TitaniteAbomination_Defeated, obj_TitaniteAbomination_Fogwall, trigger_TitaniteAbomination_FogwallZone1, flag_TitaniteAbomination_InBattle, param_TitaniteAbomination_ActionButton, flag_TitaniteAbomination_ClientEnter);
    InitializeCommonEvent(20005801, flag_TitaniteAbomination_Defeated, obj_TitaniteAbomination_BackFogwall, trigger_TitaniteAbomination_FogwallZone2, flag_TitaniteAbomination_InBattle, param_TitaniteAbomination_ActionButton, flag_TitaniteAbomination_ClientEnter);
    
    // Titanite Abomination - Boss Sound State
    InitializeCommonEvent(20001834, flag_TitaniteAbomination_Defeated, flag_TitaniteAbomination_InBattle, flag_TitaniteAbomination_BossStart, sound_TitaniteAbomination_BGM);
    
    // Titanite Abomination - Toggle Fogwall State
    InitializeCommonEvent(20005822, flag_TitaniteAbomination_Defeated, obj_TitaniteAbomination_Fogwall, 3);
    InitializeCommonEvent(20005822, flag_TitaniteAbomination_Defeated, obj_TitaniteAbomination_BackFogwall, 3);
    
    // Titanite Abomination - Enter Fogwall
    InitializeCommonEvent(20005810, flag_TitaniteAbomination_Defeated, obj_TitaniteAbomination_Fogwall, trigger_TitaniteAbomination_FogwallZone1, 10000);
    InitializeCommonEvent(20005810, flag_TitaniteAbomination_Defeated, obj_TitaniteAbomination_BackFogwall, trigger_TitaniteAbomination_FogwallZone2, 10000);
});

// ----------------------------------------
// Titanite Abomination - Invalidation
// ----------------------------------------
Event(13205898, Restart, function() {
    var trigger_TitaniteAbomination_InvalidationZone = 3202881;
    
    var entity_PlayerPoint = 3200962;
    var entity_SpawnPoint  = 3202962;
    
    var flag_TitaniteAbomination_Defeated   = 13200880;
    var flag_TitaniteAbomination_InProgress = 13200881;
    
    var mapID   = 32;
    var blockID = 0;
    var ceremonyID = 0
    
    // End function if boss has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_Defeated);
    // End function if not started
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_InProgress);
    
    // Warp player outside of arena if in invalidation zone
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_InProgress);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, trigger_TitaniteAbomination_InvalidationZone, 1);
    SkipIfConditionGroupStateUncompiled(7, FAIL, AND_01);
    
    SetEventFlag(flag_TitaniteAbomination_InProgress, OFF);
    SetPlayerRespawnPoint(entity_SpawnPoint);
    SetMapCeremony(mapID, blockID, ceremonyID);
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    // Fallback
    SetEventFlag(flag_TitaniteAbomination_InProgress, OFF);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Titanite Abomination - Arena 
// ----------------------------------------
Event(13205899, Restart, function() {
    var flag_TitaniteAbomination_Defeated = 13200880;
    var flag_TitaniteAbomination_InProgress = 13200881;
    
    // Collision
    DeactivateObject(13201890, Disabled);
    DeactivateObject(13201891, Disabled);
    DeactivateObject(13201892, Disabled);
    DeactivateObject(13201893, Disabled);
    DeactivateObject(13201894, Disabled);
    DeactivateObject(13201895, Disabled);
    DeactivateObject(13201896, Disabled);
    DeactivateObject(13201897, Disabled);
    DeactivateObject(13201898, Disabled);
    DeactivateObject(13201899, Disabled);
    DeleteObjectfollowingSFX(13201890, true);
    DeleteObjectfollowingSFX(13201891, true);
    DeleteObjectfollowingSFX(13201892, true);
    DeleteObjectfollowingSFX(13201893, true);
    DeleteObjectfollowingSFX(13201894, true);
    DeleteObjectfollowingSFX(13201895, true);
    DeleteObjectfollowingSFX(13201896, true);
    DeleteObjectfollowingSFX(13201897, true);
    DeleteObjectfollowingSFX(13201898, true);
    DeleteObjectfollowingSFX(13201899, true);
    
    // End function if boss has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_Defeated);
    
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_InProgress);
    
    // Collision
    DeactivateObject(13201890, Enabled);
    DeactivateObject(13201891, Enabled);
    DeactivateObject(13201892, Enabled);
    DeactivateObject(13201893, Enabled);
    DeactivateObject(13201894, Enabled);
    DeactivateObject(13201895, Enabled);
    DeactivateObject(13201896, Enabled);
    DeactivateObject(13201897, Enabled);
    DeactivateObject(13201898, Enabled);
    DeactivateObject(13201899, Enabled);
    DeleteObjectfollowingSFX(13201890, true);
    DeleteObjectfollowingSFX(13201891, true);
    DeleteObjectfollowingSFX(13201892, true);
    DeleteObjectfollowingSFX(13201893, true);
    DeleteObjectfollowingSFX(13201894, true);
    DeleteObjectfollowingSFX(13201895, true);
    DeleteObjectfollowingSFX(13201896, true);
    DeleteObjectfollowingSFX(13201897, true);
    DeleteObjectfollowingSFX(13201898, true);
    DeleteObjectfollowingSFX(13201899, true);
    CreateObjectfollowingSFX(13201890, 101, 3);
    CreateObjectfollowingSFX(13201891, 101, 3);
    CreateObjectfollowingSFX(13201892, 101, 3);
    CreateObjectfollowingSFX(13201893, 101, 3);
    CreateObjectfollowingSFX(13201894, 101, 3);
    CreateObjectfollowingSFX(13201895, 101, 3);
    CreateObjectfollowingSFX(13201896, 101, 3);
    CreateObjectfollowingSFX(13201897, 101, 3);
    CreateObjectfollowingSFX(13201898, 101, 3);
    CreateObjectfollowingSFX(13201899, 101, 3);
    
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, flag_TitaniteAbomination_Defeated);
    
    // Collision
    DeactivateObject(13201890, Disabled);
    DeactivateObject(13201891, Disabled);
    DeactivateObject(13201892, Disabled);
    DeactivateObject(13201893, Disabled);
    DeactivateObject(13201894, Disabled);
    DeactivateObject(13201895, Disabled);
    DeactivateObject(13201896, Disabled);
    DeactivateObject(13201897, Disabled);
    DeactivateObject(13201898, Disabled);
    DeactivateObject(13201899, Disabled);
    DeleteObjectfollowingSFX(13201890, true);
    DeleteObjectfollowingSFX(13201891, true);
    DeleteObjectfollowingSFX(13201892, true);
    DeleteObjectfollowingSFX(13201893, true);
    DeleteObjectfollowingSFX(13201894, true);
    DeleteObjectfollowingSFX(13201895, true);
    DeleteObjectfollowingSFX(13201896, true);
    DeleteObjectfollowingSFX(13201897, true);
    DeleteObjectfollowingSFX(13201898, true);
    DeleteObjectfollowingSFX(13201899, true);
});
