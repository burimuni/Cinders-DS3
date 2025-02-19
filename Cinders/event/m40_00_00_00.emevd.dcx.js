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
    //----------------------------------------
    // Bonfires
    //----------------------------------------
    // Firelink Shrine
    RegisterBonfire(14000000, 4001950, 5, 180, 0); 
    
    // Lonely Hollow
    // RegisterBonfire(14000001, 4001951, 5, 180, 0); 
    
    // Untended Graves
    RegisterBonfire(14000003, 4001953, 5, 180, 0); 
    
    // Champion Gundyr
    InitializeCommonEvent(20005500, 14000830, 14000004, 4000954, 4001954); 
    
    // Overgrown Sanctum
    InitializeCommonEvent(20005500, 14000800, 14000002, 4000952, 4001952); 
    
    //----------------------------------------
    // Corrupted Gundyr
    //----------------------------------------
    InitializeEvent(0, 14005900, 0, $LAYERS(0)); // Corrupted Gundyr - Setup
    InitializeEvent(0, 14005901, 0, $LAYERS(0)); // Corrupted Gundyr - Kill
    InitializeEvent(0, 14005902, 0, $LAYERS(0)); // Corrupted Gundyr - Fogwalls
    InitializeEvent(0, 14005903, 0, $LAYERS(0)); // Corrupted Gundyr - Invalidation

    InitializeCommonEvent(20005840, 4001820, $LAYERS(0)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005841, 4001820, $LAYERS(0)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005840, 4001820, $LAYERS(0)); // Fogwall - Firelink Side
    InitializeCommonEvent(20005841, 4001820, $LAYERS(0)); // Fogwall - Firelink Side
    
    //----------------------------------------
    // Champion Gundyr
    //----------------------------------------
    InitializeEvent(0, 14005830, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr Kill
    InitializeEvent(0, 14005840, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr - Setup Boss
    InitializeEvent(0, 14005841, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundur - Phase Change
    InitializeEvent(0, 14000859, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr - Fogwalls
    
    InitializeCommonEvent(20005840, 4001800, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005841, 4001800, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005840, 4001810, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Firelink Side
    InitializeCommonEvent(20005841, 4001810, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Firelink Side
    
    //----------------------------------------
    // The Marauder
    //----------------------------------------
    InitializeEvent(0, 14005890, 0); // Setup
    InitializeEvent(0, 14005891, 0); // Kill
    InitializeEvent(0, 14005892, 0); // Fogwalls
    InitializeEvent(0, 14005893, 0); // Invalidation
    InitializeEvent(0, 14005894, 0); // Fogwall Monitor
    InitializeEvent(0, 14005899, 0); // Boss Activation
    
    //----------------------------------------
    // Spurned Shade
    //----------------------------------------
    InitializeEvent(0, 14005895, 0); // Setup
    InitializeEvent(0, 14005896, 0); // Kill
    InitializeEvent(0, 14005897, 0); // Invalidation
    InitializeEvent(0, 14005898, 0); // Ceremony
    
    // Abyss
    InitializeEvent(0, 14005822, 0); // Access
    InitializeEvent(0, 14005823, 0); // Walls
    
    //----------------------------------------
    // Gauntlet Mode
    //----------------------------------------
    InitializeCommonEvent(20090800, 4002050);
    InitializeCommonEvent(20090800, 4002051);
    InitializeCommonEvent(20090800, 4002052);
    InitializeCommonEvent(20090810, 4001830, 4001831, 4001832, 4001833); // Gauntlet fogwalls
    
    //----------------------------------------
    // Game Configuration
    //----------------------------------------
    InitializeEvent(0, 14005910, 0);
    InitializeEvent(0, 14005911, 0); 
    
    //----------------------------------------
    // Treasure
    //----------------------------------------
    // One-time Loot
    InitializeCommonEvent(20005351, 4000860, 4002000, 54002000, 1); // Black Knight Greatsword
    InitializeCommonEvent(20005351, 4000865, 4002010, 54002010, 1); // El Hueso's Loot
    
    // Fallen Knights
    InitializeEvent(0, 14000130, 4001200, 4000800, 54000800, $LAYERS(0)); // COA
    InitializeEvent(1, 14000130, 4001201, 4000810, 54000810, $LAYERS(0)); // COA
    InitializeEvent(2, 14000130, 4001202, 4000820, 54000820, $LAYERS(0)); // COA
    InitializeEvent(3, 14000130, 4001203, 4000840, 54000840, $LAYERS(0)); // COA
    InitializeEvent(4, 14000130, 4001204, 4000920, 54000920, $LAYERS(1)); // UG
    
    // FFX Treasure - Andre - Untended Graves
    InitializeCommonEvent(20005525, 54000900, 4000900, 4001728, 62, $LAYERS(1)); 
    
    // FFX Treasure - Hawkwood - Questline
    InitializeCommonEvent(20005526, 54000830, 4000830, 4001221, 62, 13300800, $LAYERS(1)); 
    
    // FFX Treasure - Untended Graves Bonfire
    InitializeCommonEvent(20005525, 54000910, 4000910, 4001222, 62, $LAYERS(1)); 
    
    // FFX Treasure - Sirris - Questline
    InitializeCommonEvent(20006030, 4001780, 4000, 1, 60810, 50006081, 50006081, 74000790, $LAYERS(0));
    
    // FFX Treasure - Yuria - Questline
    InitializeCommonEvent(20006030, 4001750, 4000, 3, 60410, 50006041, 50006042, 1045, $LAYERS(0));
    
    // FFX Treasure - Way of White Circlet
    InitializeEvent(0, 14005461, 0, $LAYERS(0));
    
    // FFX Treasure - Unbreakable Patches - Questline
    InitializeCommonEvent(20006032, 4000791, 4001790, $LAYERS(0));
    
    // Sword Master - Show Treasure if Killed but Treasure missed
    InitializeCommonEvent(20005342, 9500, 4000500); 
    
    // Chests - Cemetery of Ash
    InitializeCommonEvent(20005520, 14000600, 4001600, 4004600, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000601, 4001601, 4004601, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000602, 4001602, 4004602, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000603, 4001603, 4004603, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000604, 4001604, 4004604, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000605, 4001605, 4004605, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000606, 4001606, 4004606, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000607, 4001607, 4004607, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000608, 4001608, 4004608, $LAYERS(0));

    // Disable the UG chest ObjAct if in COA
    IfMapCeremonyState(AND_02, Enabled, 40, 0, 10);
    SkipIfConditionGroupStateUncompiled(9, FAIL, AND_02);
    SetObjactState(4001600, -1, Disabled);
    SetObjactState(4001601, -1, Disabled);
    SetObjactState(4001602, -1, Disabled);
    SetObjactState(4001603, -1, Disabled);
    SetObjactState(4001604, -1, Disabled);
    SetObjactState(4001605, -1, Disabled);
    SetObjactState(4001606, -1, Disabled);
    SetObjactState(4001607, -1, Disabled);
    SetObjactState(4001608, -1, Disabled);
    
    // Chests - Untended Graves
    InitializeCommonEvent(20005520, 14000610, 4001610, 4004610, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000611, 4001611, 4004611, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000612, 4001612, 4004612, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000613, 4001613, 4004613, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000614, 4001614, 4004614, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000615, 4001615, 4004615, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000616, 4001616, 4004616, $LAYERS(1));
   
    // Disable the COA chest ObjAct if in UG
    IfMapCeremonyState(AND_03, Enabled, 40, 0, 10);
    SkipIfConditionGroupStateUncompiled(7, PASS, AND_03);
    SetObjactState(4001610, -1, Disabled);
    SetObjactState(4001611, -1, Disabled);
    SetObjactState(4001612, -1, Disabled);
    SetObjactState(4001613, -1, Disabled);
    SetObjactState(4001614, -1, Disabled);
    SetObjactState(4001615, -1, Disabled);
    SetObjactState(4001616, -1, Disabled);
    
    //----------------------------------------
    // Friendly NPCs
    //----------------------------------------
    // Spurned Shade
    InitializeCommonEvent(20081200, 14000896, 4000896, 90780);  // Spurned Shade - Idle
    InitializeCommonEvent(20081210, 14000896, 4000896);         // Spurned Shade - Hostility
    InitializeEvent(0, 14000064, 4000896); // Appearance
    
    // Astrologer Lillian
    InitializeCommonEvent(20081200, 14000742, 4000742, 90850); // Astrologer Lillian - Idle
    InitializeCommonEvent(20081210, 14000742, 4000742); // Astrologer Lillian - Hostility
    
    // Magnum Ursus
    InitializeCommonEvent(20081200, 14000743, 4000743, 90780); // Magnum Ursus - Idle
    InitializeCommonEvent(20081210, 14000743, 4000743); // Magnum Ursus - Hostility
    
    // Enchanter Jiji
    InitializeCommonEvent(20081200, 14000744, 4000744, 90850); // Enchanter Jiji - Idle
    InitializeCommonEvent(20081210, 14000744, 4000744); // Enchanter Jiji - Hostility
    
    // Remy the Rat
    InitializeCommonEvent(20081200, 14000746, 4000746, 20); // Remy the Rat - Idle
    InitializeCommonEvent(20081210, 14000746, 4000746); // Remy the Rat  - Hostility
    
    InitializeEvent(0, 14000063, 4000746, 4000749); // Remy Talk Toggle
    
    // Occultist Grudore
    InitializeCommonEvent(20081200, 14000757, 4000757, 90430); // Occultist Grudore - Idle
    InitializeCommonEvent(20081210, 14000757, 4000757); // Occultist Grudore - Hostility
    
    // Master Benjin
    InitializeCommonEvent(20081200, 14000758, 4000758, 90850); // Master Benjin - Idle
    InitializeCommonEvent(20081210, 14000758, 4000758); // Master Benjin - Hostility
    InitializeCommonEvent(20081231, 14000758, 4000758, 25009541); // Master Benjin - Appearance
    
    // Destitute Jester - Disabled for now
    ChangeCharacterEnableState(4000795, Disabled);
    SetCharacterAnimationState(4000795, Disabled);
    SetCharacterAIState(4000795, Disabled);
    //InitializeCommonEvent(20081200, 14000795, 4000795, 90700); // Destitute Jester - Idle
    //InitializeCommonEvent(20081210, 14000795, 4000795); // Destitute Jester - Hostility
    
    // Domhnall of Zena
    InitializeCommonEvent(20081200, 14000662, 4000662, 90850);  // Domhnall of Zena - Idle
    InitializeCommonEvent(20081210, 14000662, 4000662);         // Domhnall of Zena - Hostility
    
    // Priestess Emilia
    InitializeCommonEvent(20081200, 14000660, 4000660, 90850);  // Priestess Emilia - Idle
    InitializeCommonEvent(20081210, 14000660, 4000660);         // Priestess Emilia - Hostility
    
    // Disable until the Emma gift interaction has occured
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25009720);
    ChangeCharacterEnableState(4000660, Disabled);
    SetCharacterAnimationState(4000660, Disabled);
    SetCharacterAIState(4000660, Disabled);
    
    // Knight Lun
    InitializeCommonEvent(20081200, 14000661, 4000661, 90780);  // Horace (Blue Sentinels) - Idle
    InitializeCommonEvent(20081210, 14000661, 4000661);         // Horace (Blue Sentinels) - Hostility
    
    // Disable until the Horace Gift interaction has occured
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25009730);
    ChangeCharacterEnableState(4000661, Disabled);
    SetCharacterAnimationState(4000661, Disabled);
    SetCharacterAIState(4000661, Disabled);
    
    // Ritualist Ellie
    InitializeCommonEvent(20081200, 14000747, 4000747, 90720); // Ritualist Ellie - Idle
    InitializeCommonEvent(20081210, 14000747, 4000747); // Ritualist Ellie - Hostility
    
    // Ellie's Pet Lizard
    SetCharacterAIState(4000748, Disabled);
    InitializeEvent(0, 14000062, 14000747, 4000747, 4000748); // Pet Hostility

    SetCharacterAIState(4000796, Disabled);
    InitializeEvent(0, 14000062, 14000747, 4000747, 4000796); // Pet Hostility
    
    // Fire Keeper - Set Flags on Death
    InitializeCommonEvent(20006002, 4000700, 1018, 1015, 1019, $LAYERS(0));
    // Fire Keeper - Eyes of a Fire Keeper
    InitializeEvent(0, 14005602, 4000700, 60200, $LAYERS(0));
    // Fire Keeper - Eyes of a Fire Keeper Dialogue
    InitializeEvent(0, 14000603, 14000410, 74000132, $LAYERS(0));
    // Fire Keeper - Walk To Bonfire Event
    InitializeEvent(0, 14005604, 4000700, 4002702, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(0, 14005605, 4000700, 12500, 20005, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(1, 14005605, 4000700, 12501, 20006, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(2, 14005605, 4000700, 12502, 20007, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(3, 14005605, 4000700, 12503, 20008, $LAYERS(0));
    // Fire Keeper - Sound State
    InitializeEvent(0, 14005615, 4000700, $LAYERS(0));
    // Fire Keeper - 
    InitializeEvent(0, 14005616, 4000700, $LAYERS(0))
    // Fire Keeper - Level Up Event
    InitializeCommonEvent(20006005, 4000700, 74000135, 74000137, 0, 1067030938, 90250, 90260, 155, $LAYERS(0));
    // Fire Keeper - Sitting Event
    InitializeCommonEvent(20006006, 4000700, 74000136, 74000138, 20000, 20001, 1, 0, $LAYERS(0));
    // Fire Keeper - Warp to Sit Spot
    InitializeCommonEvent(20006040, 4000700, 4002703, 153, $LAYERS(0));
    // Fire Keeper - Warp to Stand Spot
    InitializeCommonEvent(20006040, 4000700, 4002700, 151, $LAYERS(0));
    
    // Ludleth - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000705, 1038, 1035, 1039, $LAYERS(0));
    
    // Andre - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000710, 1178, 1175, 1179, $LAYERS(0));
    // Andre - Smithing Animation
    InitializeEvent(0, 14005661, 4000710, $LAYERS(0));
    
    // Shrine Handmaid - Set Flags if Dead
    InitializeEvent(0, 14005682, 4000715, 1198, 1195, 1199, $LAYERS(0));
    // Shrine Handmaid - Set Ash flags
    InitializeEvent(0, 14005681, 0, $LAYERS(0));
    // Shrine Handmaid - 
    InitializeEvent(0, 14005684, 70000119, $LAYERS(0));
    // Shrine Handmaid - Flags set via Ash turn-ins
    InitializeCommonEvent(20006020, 70000125, 70000102, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000126, 70000106, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000127, 70000104, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000128, 70000175, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000129, 70000110, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000130, 70000115, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000131, 70000103, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000107, 70000116, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000132, 70000108, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000133, 70000115, $LAYERS(0));
    // Shrine Handmaid - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000716, 1618, 1615, 1619);
    
    // Greirat - Set Flags on Death
    InitializeCommonEvent(20006002, 4000720, 1218, 1215, 1219, $LAYERS(0));
    // Greirat - Set Hostility
    InitializeCommonEvent(20006000, 4000720, 1216, 1217, 74000330, 1059481190, 1215, 1219, 0, $LAYERS(0));
    // Greirat - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000720, 1216, 1217, 74000330, 3, $LAYERS(0));
    // Greirat - Toggle Lothric Castle Pillage state
    InitializeCommonEvent(20006020, 70000153, 70000152, $LAYERS(0));
    
    // Irina - Place 1 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000725, 1298, 1295, 1299, $LAYERS(0)); 
    // Irina - Place 2 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000726, 1298, 1295, 1299, $LAYERS(0)); 
    // Irina - Place 3 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000727, 1298, 1295, 1299, $LAYERS(0)); 
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000725, 74000383, 74000384, 0, 1065353216, 90280, 90291, -1, $LAYERS(0));
    // Irina - First meeting situp
    InitializeEvent(0, 14005722, 4000726, 90641, $LAYERS(0));
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000726, 74000386, 74000387, 0, 1065353216, 90280, 90291, -1, $LAYERS(0)); 
    // Irina - Spawn Control and Sitting Animation
    InitializeEvent(0, 14005723, 4000726, 74000381, 1295, 1284, 1282, 1280, 1294, 4000725, 90550, $LAYERS(0)); 
    // Irina - Spawn Control and Sitting Animation
    InitializeEvent(1, 14005723, 4000726, 74000382, 1295, 1285, 1283, 1280, 1294, 4000725, 90550, $LAYERS(0));
    // Irina - Bell Tower Talk Radius
    InitializeCommonEvent(20006031, 74000393, 4002727, $LAYERS(0));
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000727, 74000389, 74000391, 4002728, 0, 90250, 90260, 155, $LAYERS(0));
    // Irina - Sitting Event
    InitializeCommonEvent(20006006, 4000727, 74000390, 74000392, 90610, 90620, 0, 0, $LAYERS(0));
    
    // Yoel - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000730, 1078, 1075, 1079, $LAYERS(0));
    // Yoel - Draw True Strength Event (Player)
    InitializeCommonEvent(20006005, 4000730, 74000430, 74000432, 0, 1075000115, 90250, 90260, 155, $LAYERS(0));
    // Yoel - Draw True Strength Event (NPC)
    InitializeCommonEvent(20006006, 4000730, 74000431, 74000433, 20001, 20002, 1, 1060320051, $LAYERS(0));
    
    // Cornyx - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000735, 1258, 1255, 1259, $LAYERS(0));
    // Cornyx - Set Hostility
    InitializeCommonEvent(20006000, 4000735, 1256, 1257, 74000470, 1059481190, 1255, 1259, 0, $LAYERS(0));
    // Cornyx - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000735, 1256, 1257, 74000470, 3, $LAYERS(0));
    
    // Karla - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000740, 1278, 1275, 1279, $LAYERS(0));
    
    // Orbeck - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000745, 1238, 1235, 1239, $LAYERS(0));
    // Orbeck - Set Hostility
    InitializeCommonEvent(20006000, 4000745, 1236, 1237, 74000580, 1059481190, 1235, 1239, 0, $LAYERS(0));
    // Orbeck - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000745, 1236, 1237, 74000580, 3, $LAYERS(0));

    // Yuria - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000750, 1058, 1055, 1059, $LAYERS(0));
    // Yuria - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000750, 1056, 1057, 74000630, 3, $LAYERS(0));
    // Yuria - 
    InitializeEvent(0, 14000522, 0, $LAYERS(0));
    // Yuria - 
    InitializeEvent(0, 14005521, 4000750, 1056, 1057, 74000630, 1059481190, 1055, 1059, 0, $LAYERS(0));
    
    // Eygon - 
    InitializeCommonEvent(20006002, 4000755, 1318, 1315, 1319, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006000, 4000755, 1316, 1317, 74000680, 1059481190, 1315, 1319, 0, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006001, 4000755, 1316, 1317, 74000680, 3, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006002, 4000756, 1318, 1315, 1319, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005541, 4000755, 1316, 1317, 1281, 1284, 1298, 1315, 1319, 1302, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005542, 4000755, 4000756, 4000725, 4000726, 90640, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005543, 4000756, $LAYERS(0));
    
    // Crows - 
    InitializeEvent(0, 14000490, 0, $LAYERS(0));
    // Crows - 
    InitializeEvent(0, 14000491, 0, $LAYERS(0));
    
    // Anri (Male) - 
    InitializeEvent(0, 14005581, 4000765, 4000770, 4000775, 74000730, 74000731, 1059481190, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14000583, 4000765, 4000770, 1356, 1357, 4000775, 1355, 1359, 1342, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14005584, 4000765, 4000770, 1357, 1342, $LAYERS(0));
    // Anri (Male) - 
    InitializeCommonEvent(20006001, 4000765, 1356, 1357, 74000730, 3, $LAYERS(0));
    // Anri (Male) - 
    InitializeCommonEvent(20006002, 4000765, 1358, 1355, 1359, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14005587, 4000765, 1342, 1357, $LAYERS(0));
    
    // Anri (Female) - 
    InitializeCommonEvent(20006001, 4000770, 1356, 1357, 74000730, 3, $LAYERS(0));
    // Anri (Female) - 
    InitializeCommonEvent(20006002, 4000770, 1358, 1355, 1359, $LAYERS(0));
    // Anri (Female) - 
    InitializeEvent(1, 14005587, 4000770, 1342, 1357, $LAYERS(0));
    
    // Horace the Hushed - 
    InitializeCommonEvent(20006001, 4000775, 1496, 1497, 74000731, 3, $LAYERS(0));
    // Horace the Hushed - 
    InitializeCommonEvent(20006002, 4000775, 1498, 1495, 1499, $LAYERS(0));
    // Horace the Hushed - 
    InitializeEvent(0, 14000585, 4000775, 1496, 1497, 4000765, 4000770, 1495, 1499, 1482, $LAYERS(0));
    
    // Hawkwood - 
    InitializeCommonEvent(20006002, 4000760, 1118, 1115, 1119, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006000, 4000760, 1116, 1117, 74000830, 1059481190, 1115, 1119, 0, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006001, 4000760, 1116, 1117, 74000830, 3, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006030, 4001760, 4000, 2, 60730, 50006074, 50006074, 74000825, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006002, 4000761, 1118, 1115, 1119, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006000, 4000761, 1116, 1117, 74000831, 1059481190, 1115, 1119, 0, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006001, 4000761, 1116, 1117, 74000831, 3, $LAYERS(0));
    
    // Sirris - 
    InitializeCommonEvent(20006002, 4000780, 1138, 1135, 1139, $LAYERS(0));
    
    // Leonhard - 
    InitializeCommonEvent(20006002, 4000785, 1158, 1155, 1159, $LAYERS(0));
    // Leonhard - 
    InitializeCommonEvent(20006000, 4000785, 1156, 1157, 74000880, 1059481190, 1155, 1159, 0, $LAYERS(0));
    // Leonhard - 
    InitializeCommonEvent(20006001, 4000785, 1156, 1157, 74000880, 3, $LAYERS(0));
    
    // Unbreakable Patches - 
    InitializeCommonEvent(20006002, 4000791, 1378, 1375, 1379, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeCommonEvent(20006000, 4000791, 1376, 1377, 73500290, 1059481190, 1375, 1379, 0, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeCommonEvent(20006001, 4000791, 1376, 1377, 73500290, 3, $LAYERS(0));
    
    // Unbreakable Patches - 
    InitializeEvent(0, 14000621, 4000790, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeEvent(0, 14000622, 4000790, 4000791, 4004791, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeEvent(0, 14000624, 4000791, $LAYERS(0));
    
    //----------------------------------------
    // Enemies
    //----------------------------------------
    // Ravenous Crystal Lizard
    InitializeCommonEvent(20005200, 4000404, 700, 1700, 4002880); 
    
    // Crystal Lizard
    InitializeCommonEvent(20008150, 14000390, 4000390); 
    
    // Daughter of Crystal Kriemhild
    InitializeCommonEvent(20090010, 4000197, 4002198, 30310, 63010, 58120, 99005720, 99005721, 14000197); // Setup
    InitializeCommonEvent(20090020, 4000197, 80300); // Kill Taunt
    
    // Blacksmith's Nightmare
    InitializeCommonEvent(20090010, 4000890, 4002890, 30310, 63010, 14700, 99005500, 99005501, 14000890, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Setup
    InitializeCommonEvent(20090020, 4000890, 84200, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Kill Taunt
    
    // Ashen Keeper Sofija
    InitializeCommonEvent(20090010, 4000892, 4002892, 30310, 63010, 15400, 99005570, 99005571, 14000892, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Setup
    InitializeCommonEvent(20090020, 4000892, 84200, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Kill Taunt
    
    // Pot King Greg
    InitializeCommonEvent(20090010, 4000893, 4002893, 30310, 63010, 15800, 99005670, 99005671, 14000893, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Setup
    InitializeCommonEvent(20090020, 4000893, 84200, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Kill Taunt
    
    // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000202, 1091043328); 
    InitializeCommonEvent(20005210, 4000204, 703, 1703, 1091043328); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000205, 1092616192, 4002205); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000207, 1065353216, 4002207); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000211, 4002248); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000212, 703, 1703, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000213, 705, 1705, 4002213); // Enemy - Wake-up
    InitializeCommonEvent(20005150, 4000215); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000216, 703, 1703, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000217, 703, 1703, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000218, 706, 1706, 4002218); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000219, 706, 1706, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000239, 703, 1703, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000240, 1097859072); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000241, 706, 1706); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 4000242, 705, 1705); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000243, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000244, 4002244); // Enemy - Wake-up
    InitializeCommonEvent(20005292, 4000245, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 4000246, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000247, 4002248); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000251, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000252, 705, 1705, 1073741824); // Enemy - Wake-up 
    InitializeCommonEvent(20005210, 4000253, 703, 1703, 1095761920); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000255, 703, 1703, 1084227584, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 4000256, 705, 1705, 1075838976, 4002210); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000260, 703, 1703, 1084227584, 1069547520); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000261, 703, 1703, 4002261); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000262, 703, 1703, 4002261); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000263, 703, 1703, 4002261); // Enemy - Wake-up
    InitializeCommonEvent(20005140, 4000265, 4002207, 4000254); // Enemy - Wake-up
    InitializeCommonEvent(20005223, 4000280, 703, 1703, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000281, 703, 1703, 1102053376); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000282, 705, 1705, 1094713344); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 4000284, 705, 1705, 1075838976, 4002284); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000285, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005223, 4000287, 703, 1703, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 4000288, 703, 1703, 4002207, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000289, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005415, 14000290, 4000250, 4000290, 703, 1703, 4002290, 14004290, 14005290, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Pus of Man Setup
    InitializeCommonEvent(20005416, 14000290, 4000250, 4000290, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Pus of Man
    InitializeCommonEvent(20005120, 4000301, 1107296256, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000303, 1065353216, 4002303, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000320, 4002320, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000330, 4002330, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000331, 4002330, $LAYERS(1)); // Enemy - Wake-up
    InitializeEvent(0, 14005300, 4000330, 4002360); // Cathedral Grave Warden - Set Home
    InitializeCommonEvent(20005240, 4000341, 702, 1702, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000342, 702, 1702, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000343, 701, 1701, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000346, 1087373312, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000349, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000350, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000351, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005223, 4000352, 700, 1700, 1073741824, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000355, 700, 1700, 1086324736, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000356, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000357, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000360, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000361, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000362, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000363, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000364, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000365, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    
    //----------------------------------------
    // Phantoms
    //----------------------------------------
    // Sword Master
    InitializeCommonEvent(20005700, 14000830, 14004190, 14005190, 4000190, 4002190, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20005711, 14004190, 14005835, 4000190, 4002800, 4002805, 14000831, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20005720, 14004190, 14005190, 14000830, 4000190, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20005714, 14004190, 14005835, 4000190, 4002806, 14000831, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    
    // Sellsword Luet
    ChangeCharacterEnableState(4000960, Disabled);
    SetCharacterAnimationState(4000960, Disabled);
    SetCharacterAIState(4000960, Disabled);
    
    // Disable if in UG
    IfMapCeremonyState(AND_04, Enabled, 40, 0, 10);
    SkipIfConditionGroupStateUncompiled(6, PASS, AND_04);
    InitializeCommonEvent(20090100, 4002960, 14000960, -1, 60000); // Interaction State
    InitializeCommonEvent(20090101, 4000960, 14000960, 99071010, 160737100); // Character State
    InitializeCommonEvent(20090102, 14000960, 14000801, 4000960, 4002111); // Boss Warp - Corrupted Gundyr
    InitializeCommonEvent(20090102, 14000960, 14000851, 4000960, 4002112); // Boss Warp - Marauder
    InitializeCommonEvent(20090103, 14000960, 4000960, 4002840, 4002841); // Collision Transition Warp 1
    InitializeCommonEvent(20090103, 14000960, 4000960, 4002842, 4002843); // Collision Transition Warp 2
    
    //----------------------------------------
    // Map
    //----------------------------------------
    // Disable Black Knight in starting cell until setup is complete and map is reloaded
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 25009800);
    ChangeCharacterEnableState(4000860, Disabled);
    SetCharacterAnimationState(4000860, Disabled);
    SetCharacterAIState(4000860, Disabled);
    
    // Illusory Walls
    InitializeCommonEvent(20005650, 14000430, 4001430); 
    InitializeCommonEvent(20005650, 14000431, 4001431);
    InitializeCommonEvent(20005650, 14000432, 4001432); 
    InitializeCommonEvent(20005650, 14000433, 4001433); 
    InitializeCommonEvent(20005650, 14000434, 4001434);
    InitializeCommonEvent(20005650, 14000435, 4001435);

    // Secret Warp
    InitializeEvent(0, 14005800, 0, $LAYERS(0));
    InitializeEvent(0, 14005801, 0, $LAYERS(0));
    
    // Secret Path
    InitializeEvent(0, 14005810, 0, $LAYERS(0));
    InitializeEvent(0, 14005811, 0, $LAYERS(1));
    
    // Secret Message
    InitializeEvent(0, 14005820, 0, $LAYERS(0));
    
    // Pot King Greg's Door
    InitializeEvent(0, 14005825, 0, $LAYERS(1));

    // Journey Info
    InitializeEvent(0, 14000065, 4001147, $LAYERS(0));

    // Untended Graves
    InitializeEvent(0, 14000200, 0, $LAYERS(0));

    // Firekeeper Jail
    InitializeEvent(0, 14000056, 0);
    
    // Starting Cell Door
    InitializeEvent(0, 14005826, 0);
    
    // Firelink Shrine - Place Sword
    InitializeEvent(0, 14005440, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
    
    // Ladders
    InitializeEvent(0, 14005420, 0); // Setup Ladders
    InitializeCommonEvent(20005640, 14000426, 4001426, 14005426, 14005427, $LAYERS(0)); // Setup Kick Ladder
    
    // Lifts
    InitializeCommonEvent(20005620, 14000400, 14001400, 4001400, 4001401, 4001402, 14001401); // Bell Tower Lift
    InitializeEvent(0, 14005401, 0); // Setup Bell Tower Lift
    
    // Doors
    InitializeCommonEvent(20005610, 14000410, 4002410, 4002411); 
    InitializeCommonEvent(20005613, 14000425, 4003250, 4001250, 3400340, 10010873);
    
    //----------------------------------------
    // Curses
    //----------------------------------------
    InitializeCommonEvent(20081010, 4005760, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 4005760, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 4005760, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 4005760, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 4005760, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 4005760, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 4005760, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 4005760, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 4005760, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 4005760, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 4005760, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 4005760, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 4005760, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 4005760, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 4005760, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 4005760, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 4005760, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 4005760, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 4005760, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 4005760, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 4005760, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 4005760, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 4005760, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 4005760, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 4005760, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 4005760, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 4005760, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 4005760, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 4005760, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 4005760, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 4005760, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 4005760, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 4005760, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 4005760, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 4005760, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 4005760, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 4005760, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 4005760, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 4005760, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 4005760, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 4005750, 25000440); // Curse of Attraction
    
    InitializeCommonEvent(20081010, 4005760, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 4005770, 250002220, 25000510);  // Curse of Valor
    
    //----------------------------------------
    // NG+
    //----------------------------------------
    InitializeCommonEvent(20008001, 4005775, 1);
    InitializeCommonEvent(20008001, 4005776, 2);
    InitializeCommonEvent(20008001, 4005777, 3);
    
    //----------------------------------------
    // Company of Champions
    //----------------------------------------
    InitializeCommonEvent(20081020, 4005760, 160101502, 160101503); // I
    InitializeCommonEvent(20081020, 4005760, 160101512, 160101513); // II
    InitializeCommonEvent(20081020, 4005760, 160101522, 160101523); // III
    InitializeCommonEvent(20081020, 4005760, 160101532, 160101533); // IV
    InitializeCommonEvent(20081020, 4005760, 160101542, 160101543); // V
    
    //----------------------------------------
    // Companions
    //----------------------------------------
    InitializeCommonEvent(20080000, 4000998); // Setup
    InitializeCommonEvent(20080001, 4000998); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000998); // Tools
    InitializeCommonEvent(20080003, 4000998); // Effects
    InitializeCommonEvent(20080004, 4000998, 160760000, 160760200, 40, 0); // Summoning
    
    //----------------------------------------
    // Training Dummy
    //----------------------------------------
    // Bone Collector
    InitializeCommonEvent(20081200, 14000897, 4000897, 90780); // Idle
    InitializeCommonEvent(20081210, 14000897, 4000897); // Hostility
    InitializeEvent(0, 14000075, 4000897, 4002380, 4002381); // Training NPC
    InitializeEvent(0, 14000076, 0); // Reset flags

    // Training Dummies
    InitializeEvent(0, 14000070, 4000865, 4002370, 4002373, 25007510); // Dummy 1
    InitializeEvent(1, 14000070, 4000866, 4002371, 4002374, 25007520); // Dummy 2
    InitializeEvent(0, 14000071, 4000867, 4002372, 4002375, 25007530); // Dummy 3
    InitializeEvent(0, 14000077, 4000865); // El Hueso fight
    
    //----------------------------------------
    // Misc
    //----------------------------------------
    InitializeEvent(0, 14005480, 74000012); // Advance Journey (NG+)
    InitializeEvent(0, 14005481, 0); // Disable Loading Tips in Cemetery of Ash
    InitializeEvent(0, 14005110, 0, $LAYERS(0)); // Warp to Flameless Shrine
    
    InitializeEvent(0, 14005102, 0); // Object Toggle in Firelink Shrine (COA and UG)
    InitializeEvent(0, 14000120, 9210, 9211, 9212, 9213, 9214, 9215); // Check Lords of Cinder completion
    InitializeEvent(0, 14000121, 9211, 2126, 4001111, 4001121, 9353, 69050, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(2, 14000121, 9212, 2124, 4001112, 4001122, 9353, 69040, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(4, 14000121, 9213, 2123, 4001113, 4001123, 9353, 69040, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(6, 14000121, 9214, 2125, 4001114, 4001124, 9353, 69050, $LAYERS(0)); // Handle Lord of Cinder placement
    
    // Throne prompts
    InitializeEvent(1, 14005484, 10012051, 4001141);
    InitializeEvent(2, 14005484, 10012052, 4001142);
    InitializeEvent(3, 14005484, 10012053, 4001143);
    InitializeEvent(4, 14005484, 10012054, 4001144);
    InitializeEvent(5, 14005484, 10012055, 4001145);
    
    // Crow Trades
    InitializeEvent(0, 14005821, 0, $LAYERS(0));
    
    // Giant Tree Seed Drop
    InitializeEvent(0, 14005460, 0); 
    
    // Firelink Shrine Music
    InitializeEvent(0, 14005450, 0, $LAYERS(0)); 
    
    // Disable Map Sound States
    InitializeEvent(0, 1405451, 0, $LAYERS(1)); 
    
    // Area Welcome Message - Untended Graves
    InitializeEvent(0, 14005470, 0, $LAYERS(1)); 
    
    // Area Welcome Message - Disable
    InitializeEvent(0, 14005471, 0, $LAYERS(1)); 
    
    // Area Welcome Message - Enable
    InitializeEvent(0, 14005472, 0, $LAYERS(1)); 
    
    // Area Welcome Message - Enable
    InitializeEvent(0, 14005473, 0, $LAYERS(1)); 
    
    // Area Welcome Message - Enable
    InitializeEvent(0, 14005474, 0, $LAYERS(1)); 
    
    // Area Welcome Message - The Abyss
    InitializeEvent(0, 14005475, 0, $LAYERS(1)); 
    
    // Toggle Message Visbility
    InitializeEvent(0, 14005445, 0); 
    
    // Setup Light Sources
    InitializeEvent(0, 14005441, 0, $LAYERS(0)); 
    
    // Debug Character (for AI testing)
    InitializeEvent(0, 14006000, 0);
});

//---------------------------------------------
// Destructor
//---------------------------------------------
Event(50, Default, function() {
    // Toggle Firelink Floor Hit 
    InitializeEvent(0, 14005103, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Toggle Firelink Floor Hit (Untended Graves)
    InitializeEvent(0, 14005104, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9));
    // Set Event Flag
    InitializeEvent(0, 14005618, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    
    // Fire Keeper - Spawn State
    InitializeEvent(0, 14005600, 4000700, 4002701, 4002703, 4002700, 4002702, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Ludleth - Spawn State
    InitializeEvent(0, 14005640, 4000705, 4001115, 4000706, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Andre - Spawn State
    InitializeEvent(0, 14005660, 4000710, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Shrine Handmaid - Spawn State
    InitializeEvent(0, 14005680, 4000715, 4002715, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Shrine Handmaid (Untended Graves) - Spawn State
    InitializeEvent(0, 14005683, 4000716, 4002715);
    // Irina - Spawn State
    InitializeEvent(0, 14005720, 4000725, 4000726, 4000727, 90550, 90640, 90730, 4004725, 4004726, 4004727, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Yoel - Spawn State
    InitializeEvent(0, 14005740, 4000730, 2160, 4004730, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Cornyx - Spawn State
    InitializeEvent(0, 14005760, 4000735, 4006735, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Karla - Spawn State
    InitializeEvent(0, 14005780, 4000740, 90460, 4001740, 4004740, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Orbeck - Spawn State
    InitializeEvent(0, 14005500, 4000745, 90420, 4001745, 4004745, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Yuria - Spawn State
    InitializeEvent(0, 14005520, 4000750, 90300, 4004750, 4001751);
    // Eygon - Spawn State
    InitializeEvent(0, 14005540, 4000755, 4000756, 90660, 4004755, 4004756, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Hawkwood - Spawn State
    InitializeEvent(0, 14005560, 4000760, 4000761, 4004760, 4004761, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Anri - Spawn State
    InitializeEvent(0, 14005580, 4000765, 4000770, 90750, 90800, 4004765, 4004770, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Horace - Spawn State
    InitializeEvent(0, 14005586, 4000775, 90900, 4004775, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Sirris - Spawn State
    InitializeEvent(0, 14005570, 4000780, 4000781, 4004780, 4004781, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Leonhard - Spawn State
    InitializeEvent(0, 14005750, 4000785, 90710, 4004785, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Patches - Spawn State
    InitializeEvent(0, 14005620, 4000790, 4000791, 4004791, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Siegward - Handle Quest Progression
    InitializeEvent(0, 14005701, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Greirat - Spawn State
    InitializeEvent(0, 14005700, 4000720, 4004720, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Set Event Flag 
    InitializeEvent(0, 14000401, 0);
    // Player Start Sequence
    InitializeEvent(0, 14000100, 0, $LAYERS(0, 2, 3, 4, 5, 6, 7, 8, 9));
    
    SetMapSoundState(4004800, Disabled);
    SetMapSoundState(4004801, Disabled);
    SetMapSoundState(4004830, Disabled);
    SetMapSoundState(4004831, Disabled);
    SetMapSoundState(4004450, Disabled);
    SetMapSoundState(4004460, Disabled);
    SetMapSoundState(4003700, Disabled);
    SetMapSoundState(4003701, Disabled);
    SetMapSoundState(4004820, Disabled);
});

// Untended Graves - Peer into the Past Warp
Event(14000200, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 2065, OwnershipState.Owns)
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, FAIL, AND_01);
    
    Label0();
    IfActionButtonInArea(AND_02, 40014, 4001150);
    IfConditionGroup(MAIN, PASS, AND_02);
    
    SetMapCeremony(40, 0, 10);
    WarpPlayer(40, 0, 4000973);
    SetPlayerRespawnPoint(4002953);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    IfActionButtonInArea(AND_03, 40014, 4001150);
    IfConditionGroup(MAIN, PASS, AND_03);
    
    DisplayEpitaphMessage(99030730);
    
    GotoUnconditionally(Label.LABEL2);
    
    Label2();
    EndUnconditionally(EventEndType.Restart);
});

// Horny Jail
Event(14000056, Default, function() {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 25008903);
    WarpPlayer(39, 0, 3904001); // Irithyll Dungeon
});

//------------------------------------------
// Training Dummy - Toggle State
// <entity id>, <spot inside id>, <spot outside id>, <enabled flag>
//------------------------------------------
Event(14000070, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    
    // Delay check to allow flag reset to occur
    WaitFixedTimeFrames(1);
    
    // Wait for dummy flag
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X12_4);
    
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    
    SetSpEffect(X0_4, 160810020); // Restore HP
    
    // Inside location
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25007600);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, 0, X4_4);
    
    // Outside location
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25007600);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, 0, X8_4);
    
    // Reset if turned off
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, X12_4);
    
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------
// Training Dummy - Aggressive - Toggle State
// <entity id>, <spot inside id>, <spot outside id>, <enabled flag>
//------------------------------------------
Event(14000071, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    
    // Delay check to allow flag reset to occur
    WaitFixedTimeFrames(1);
    
    // Wait for dummy flag
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X12_4);
    
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
    
    SetSpEffect(X0_4, 160810020); // Restore HP
    
    // Inside location
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25007600);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, 0, X4_4);
    
    // Outside location
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25007600);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, 0, X8_4);
    
    // Reset if turned off
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, X12_4);
    
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------
// Training NPC - Toggle State
// <entity id>, <spot inside id>, <spot outside id>
//------------------------------------------
Event(14000075, Restart, function(X0_4, X4_4, X8_4) {
    // Move the dummies inside
    WarpCharacterAndCopyFloor(4000865, TargetEntityType.Area, 4002370, 0, 4002370);
    WarpCharacterAndCopyFloor(4000866, TargetEntityType.Area, 4002371, 0, 4002371);
    WarpCharacterAndCopyFloor(4000867, TargetEntityType.Area, 4002372, 0, 4002372);
    
    // Move NPC inside
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, 0, X4_4);
    
    // Delay check to allow flag reset to occur
    WaitFixedTimeFrames(1);
    
    // Wait for outside flag to be enabled
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 25007600);
    
    // Move player outside
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Area, 4002383, 0, 4002383);
    
    // Move NPC
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, 0, X8_4);
    
    // Move the dummies
    WarpCharacterAndCopyFloor(4000865, TargetEntityType.Area, 4002373, 0, 4002373);
    WarpCharacterAndCopyFloor(4000866, TargetEntityType.Area, 4002374, 0, 4002374);
    WarpCharacterAndCopyFloor(4000867, TargetEntityType.Area, 4002375, 0, 4002375);
    
    // Wait for outside flag to be disabled
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 25007600);
    
    // Move player inside
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Area, 4002382, 0, 4002382);
    
    EndUnconditionally(EventEndType.Restart);
});

//------------------------------------------
// Training Dummies - Reset Flags
//------------------------------------------
Event(14000076, Restart, function() {
    SetEventFlag(25007530, OFF);
    SetEventFlag(25007600, OFF);
});

//------------------------------------------
// El Hueso - Trigger Boss Fight
//------------------------------------------
Event(14000077, Restart, function(X0_4) {
    SetEventFlag(74000910, OFF);
    SetEventFlag(74000915, OFF);
    
    SetCharacterAIState(X0_4, Disabled);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0.2, ComparisonType.Equal, 1);
    
    SetCharacterAIState(X0_4, Enabled);
    SetSpeffect(X0_4, 160740001);
    
    DisplayBossHealthBar(Enabled, X0_4, 0, 204012);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, X0_4, 0, 204012);
});

// Ellie's Pet
Event(14000062, Default, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    IfCharacterDamagedBy(AND_01, X8_4, 10000);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X4_4, TeamType.StrongEnemy);
    SetCharacterTeamType(X8_4, TeamType.StrongEnemy);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(X4_4);
    SetCharacterAIState(X8_4, Enabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// Remy Toggle
Event(14000063, Default, function(X0_4, X4_4) {
    IfCharacterDamagedBy(AND_01, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ChangeCharacterEnableState(X4_4, Disabled);
});

// Spurned Shade - Appearance
Event(14000064, Default, function(X0_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    
    // Defeated Champion Gundyr and lack a ring
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 25001017);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 2000, OwnershipState.DoesntOwn);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
});

// Journey Info
Event(14000065, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    
    IfActionButtonInArea(MAIN, 9356, X0_4);
    
    GotoIfEventFlag(Label.LABEL6, ON, TargetEventFlagType.EventFlag, 25000017);
    GotoIfEventFlag(Label.LABEL5, ON, TargetEventFlagType.EventFlag, 25000016);
    GotoIfEventFlag(Label.LABEL4, ON, TargetEventFlagType.EventFlag, 25000015);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 25000014);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 25000013);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 25000012);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 25000011);

    DisplayEpitaphMessage(99030300);
    GotoUnconditionally(Label.LABEL10);
    
    Label0();
    DisplayEpitaphMessage(99030301);
    GotoUnconditionally(Label.LABEL10);
    
    Label1();
    DisplayEpitaphMessage(99030302);
    GotoUnconditionally(Label.LABEL10);
    
    Label2();
    DisplayEpitaphMessage(99030303);
    GotoUnconditionally(Label.LABEL10);
    
    Label3();
    DisplayEpitaphMessage(99030304);
    GotoUnconditionally(Label.LABEL10);
    
    Label4();
    DisplayEpitaphMessage(99030305);
    GotoUnconditionally(Label.LABEL10);
    
    Label5();
    DisplayEpitaphMessage(99030306);
    GotoUnconditionally(Label.LABEL10);
    
    Label6();
    DisplayEpitaphMessage(99030307);
    GotoUnconditionally(Label.LABEL10);
    
    Label10()
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Player Start Sequence
Event(14000100, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfPlayerInoutMap(EventEndType.End, false, 40, 0);
    
    IfMapCeremonyState(AND_01, Enabled, 40, 0, 0);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    
    SetSpeffect(10000, 4610);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    DeactivateObject(4006440, Disabled);
    //PlayOngoingCutsceneAndWarpPlayer(40000040, CutscenePlayMode.Skippable, 4002110, 40, 0, 10000, 1, 0);
    
    WaitFixedTimeFrames(1);
    
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    DeactivateObject(4006440, Enabled);
    //IfOngoingCutsceneFinished(MAIN, 40000040);
    SetNetworkInteractionState(Enabled);
    
    WaitFixedTimeFrames(1);
    
    ClearSpeffect(10000, 4610);
    SetPlayerRespawnPoint(4002950);
    SaveRequest(0);
    SetEventFlag(14000100, ON);
});

// Firelink Shrine - Coiled Sword Placement
Event(14005101, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000101);
    
    IfObjectBackread(MAIN, 4001950, true, ComparisonType.Equal, 1);
    
    WaitFixedTimeFrames(1);
    
    ForceAnimationPlayback(4001950, 100000, true, false, false, 0, 1);
    SetEventFlag(74000010, ON);
    
    IfObjectBackread(AND_01, 4001950, false, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfActionButtonInArea(OR_01, 9351, 4001950);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_01);
    
    IssueShortWarpRequest(10000, TargetEntityType.Object, 4001950, 1);
    ForceAnimationPlayback(4001950, 60430, false, false, false, 0, 1);
    SetBonfireWarpingState(4001950, 60430, Enabled);
    SetEventFlag(74000010, OFF);
    SetEventFlag(14000101, ON);
    RemoveItemFromPlayer(ItemType.Goods, 2137, 1);
});

// Object Toggle in Firelink Shrine (COA and UG)
Event(14005102, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    DeactivateObject(4001101, Disabled);
    DeactivateObject(4001102, Disabled);
    
    IfPlayerStandingOnHit(AND_01, 4004100);
    IfEventFlag(AND_10, OFF, TargetEventFlagType.EventFlag, 131);
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 2051);
    IfConditionGroup(OR_10, PASS, AND_01);
    IfConditionGroup(OR_10, PASS, AND_10);
    IfConditionGroup(MAIN, PASS, OR_10);
    
    DeleteObjectfollowingSFX(4001101, true);
    DeleteObjectfollowingSFX(4001102, true);
    DeactivateObject(4001101, Enabled);
    DeactivateObject(4001102, Enabled);
    CreateObjectfollowingSFX(4001101, 101, 840080);
    CreateObjectfollowingSFX(4001102, 101, 4);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 2051);
    IfMultiplayerState(AND_01, MultiplayerState.LeavingSession);
    SkipIfConditionGroupStateCompiled(1, PASS, AND_10);
    IfPlayerStandingOnHit(AND_01, 4004101);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfEventFlag(OR_09, OFF, TargetEventFlagType.EventFlag, 131);
    IfMapCeremonyState(OR_09, Enabled, 40, 0, 10);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_09);
    IfElapsedSeconds(AND_02, 18);
    SkipUnconditionally(1);
    IfElapsedSeconds(AND_02, 20);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_10);
    IfPlayerStandingOnHit(AND_03, 4004100);
    SkipUnconditionally(1);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 2051);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_03);
    
    DeleteObjectfollowingSFX(4001101, true);
    DeleteObjectfollowingSFX(4001102, true);
    
    IfElapsedSeconds(AND_04, 2);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_10);
    IfPlayerStandingOnHit(AND_05, 4004100);
    SkipUnconditionally(1);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 2051);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_05);
    
    DeactivateObject(4001101, Disabled);
    DeactivateObject(4001102, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

// Toggle Firelink Floor Hit
Event(14005103, Default, function() {
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 131);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ActivateHit(4004109, Enabled);
    ActivateHit(4004100, Disabled);
});

// Toggle Firelink Floor Hit (Untended Graves)
Event(14005104, Default, function() {
    ActivateHit(4004109, Enabled);
    ActivateHit(4004100, Disabled);
});

// Warp to Flameless Shrine
Event(14005110, Default, function() {
    ActivateHitres(4004100, Disabled);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000110);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(74000010, OFF);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9210);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 74000123);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterHPRatio(AND_01, 4000700, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ActivateHitres(4004100, Enabled);
    
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 74000123);
    
    SetEventFlag(74000010, ON);
    
    IfCharacterHPRatio(AND_15, 4000700, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_15);
    IfActionButtonInArea(OR_02, 9101, 4001950);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 74000123);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_15);
    
    Label0();
    DeleteMapSFX(4003500, false);
    DeleteMapSFX(4003501, false);
    DeleteMapSFX(4003502, false);
    DeleteMapSFX(4003503, false);
    DeleteMapSFX(4003504, false);
    SetEventFlag(74000010, OFF);
    SetEventFlag(14000110, ON);
    SetEventFlag(14100000, ON);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1038);
    PlayCutsceneAndWarpPlayer(40000020, CutscenePlayMode.Skippable, 4102100, 41, 0, 10000);
    SkipUnconditionally(1);
    PlayCutsceneAndWarpPlayer(40000021, CutscenePlayMode.Skippable, 4102100, 41, 0, 10000);
    
    DeleteObjectfollowingSFX(4001500, true);
    DeleteObjectfollowingSFX(4001501, true);
    DeleteObjectfollowingSFX(4001502, true);
    DeleteObjectfollowingSFX(4001503, true);
    DeleteObjectfollowingSFX(4001510, true);
    DeleteObjectfollowingSFX(4001511, true);
    DeleteObjectfollowingSFX(4001512, true);
    DeleteObjectfollowingSFX(4001513, true);
    DeleteObjectfollowingSFX(4001514, true);
    DeleteObjectfollowingSFX(4001515, true);
    DeleteObjectfollowingSFX(4001516, true);
    DeleteObjectfollowingSFX(4001517, true);
    DeleteObjectfollowingSFX(4001518, true);
    DeleteObjectfollowingSFX(4001519, true);
    DeleteObjectfollowingSFX(4001520, true);
    DeleteObjectfollowingSFX(4001521, true);
    DeleteObjectfollowingSFX(4001522, true);
    DeleteObjectfollowingSFX(4001523, true);
    DeleteObjectfollowingSFX(4001524, true);
    DeleteObjectfollowingSFX(4001525, true);
    DeleteObjectfollowingSFX(4001526, true);
    DeleteObjectfollowingSFX(4001527, true);
    DeleteObjectfollowingSFX(4001528, true);
    DeleteObjectfollowingSFX(4001529, true);
    DeleteObjectfollowingSFX(4001530, true);
    DeleteObjectfollowingSFX(4001531, true);
    DeleteObjectfollowingSFX(4001532, true);
    DeleteObjectfollowingSFX(4001533, true);
    DeleteObjectfollowingSFX(4001534, true);
    DeleteObjectfollowingSFX(4001535, true);
    DeleteObjectfollowingSFX(4001536, true);
    DeleteObjectfollowingSFX(4001537, true);
    DeleteObjectfollowingSFX(4001538, true);
    DeleteObjectfollowingSFX(4001539, true);
    DeleteObjectfollowingSFX(4001540, true);
    DeleteObjectfollowingSFX(4001541, true);
    DeleteObjectfollowingSFX(4001542, true);
    DeleteObjectfollowingSFX(4001543, true);
    DeleteObjectfollowingSFX(4001544, true);
    DeleteObjectfollowingSFX(4001545, true);
    DeleteObjectfollowingSFX(4001546, true);
    DeleteObjectfollowingSFX(4001547, true);
    DeleteObjectfollowingSFX(4001548, true);
    DeleteObjectfollowingSFX(4001549, true);
    DeleteObjectfollowingSFX(4001550, true);
    DeleteObjectfollowingSFX(4001551, true);
    DeleteObjectfollowingSFX(4001552, true);
    DeleteObjectfollowingSFX(4001553, true);
    DeleteObjectfollowingSFX(4001554, true);
    DeleteObjectfollowingSFX(4001555, true);
    DeleteObjectfollowingSFX(4001556, true);
    DeleteObjectfollowingSFX(4001557, true);
    DeleteObjectfollowingSFX(4001558, true);
    DeleteObjectfollowingSFX(4001559, true);
    DeleteObjectfollowingSFX(4001560, true);
    DeleteObjectfollowingSFX(4001561, true);
    DeleteObjectfollowingSFX(4001562, true);
    DeleteObjectfollowingSFX(4001563, true);
    DeleteObjectfollowingSFX(4001564, true);
    DeleteObjectfollowingSFX(4001565, true);
    DeleteObjectfollowingSFX(4001566, true);
    DeleteObjectfollowingSFX(4001567, true);
    DeleteObjectfollowingSFX(4001568, true);
    DeleteObjectfollowingSFX(4001569, true);
    DeleteObjectfollowingSFX(4001570, true);
    DeleteObjectfollowingSFX(4001571, true);
    DeleteObjectfollowingSFX(4001572, true);
    SetPlayerRespawnPoint(4102100);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
});

// Check Lords of Cinder completion
Event(14000120, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X16_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X20_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(X0_4, ON);
});

// Handle Lord of Cinder placement
Event(14000121, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X0_4);
    
    DeleteObjectfollowingSFX(X8_4, false);
    CreateObjectfollowingSFX(X8_4, 201, 840066);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    DeactivateObject(X8_4, Disabled);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 2051);
    IfMultiplayerState(AND_01, MultiplayerState.LeavingSession);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, X4_4, OwnershipState.Owns);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfActionButtonInArea(AND_01, X16_4, X12_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    RotateCharacter(10000, X12_4, X20_4, true);
    SkipIfComparison(2, ComparisonType.Equal, X20_4, 69050);
    
    WaitFixedTimeSeconds(0.9);
    
    SkipUnconditionally(1);
    WaitFixedTimeSeconds(2);
    
    SetEventFlag(X0_4, ON);
    RemoveItemFromPlayer(ItemType.Goods, X4_4, 1);
    DeactivateObject(X8_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Object, X8_4, 201, 840065);
    CreateObjectfollowingSFX(X8_4, 201, 840066);
});

// Fallen Knight - Handle Pickup
Event(14000130, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    
    var obj_FallenKnight   = X0_4;
    var param_ItemLot      = X4_4;
    var param_ActionButton = 9355;
    var flag_ItemTaken     = X8_4;
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_ItemTaken);
    
    CreateObjectfollowingSFX(obj_FallenKnight, 90, 63);
    
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfActionButtonInArea(AND_01, param_ActionButton, obj_FallenKnight);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ForceAnimationPlayback(10000, 60070, false, false, false, 0, 1);
    
    AwardItemLot(param_ItemLot);
    
    DeleteObjectfollowingSFX(obj_FallenKnight, true);
});

// Cathedral Grave Warden - Set Home
Event(14005300, Restart, function(X0_4, X4_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterAIState(MAIN, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    Label0();
    SetCharacterHome(X0_4, X4_4);
});

// Unknown
Event(14000401, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetEventFlag(14000400, ON);
    EndUnconditionally(EventEndType.End);
});

// Setup Bell Tower Lift
Event(14005401, Restart, function() {
    InitializeCommonEvent(20005621, 14000400, 14001400, 4001400, 4001401, 4003401, 4001402, 4003402, 4002401, 4002402, 14001401, 14004400, 0);
});

// Setup Ladders
Event(14005420, Restart, function() {
    RegisterLadder(14000420, 14000421, 4001420);
});

// Firelink Shrine - Place Sword
Event(14005440, Restart, function() {
    IfObjectBackread(MAIN, 4001955, true, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4001955, 100000, false, false, false, 0, 1);
});

// Setup Light Sources
Event(14005441, Restart, function() {
    DeleteObjectfollowingSFX(4001500, false);
    DeleteObjectfollowingSFX(4001501, false);
    DeleteObjectfollowingSFX(4001502, false);
    DeleteObjectfollowingSFX(4001503, false);
    DeleteObjectfollowingSFX(4001510, false);
    DeleteObjectfollowingSFX(4001511, false);
    DeleteObjectfollowingSFX(4001512, false);
    DeleteObjectfollowingSFX(4001513, false);
    DeleteObjectfollowingSFX(4001514, false);
    DeleteObjectfollowingSFX(4001515, false);
    DeleteObjectfollowingSFX(4001516, false);
    DeleteObjectfollowingSFX(4001517, false);
    DeleteObjectfollowingSFX(4001518, false);
    DeleteObjectfollowingSFX(4001519, false);
    DeleteObjectfollowingSFX(4001520, false);
    DeleteObjectfollowingSFX(4001521, false);
    DeleteObjectfollowingSFX(4001522, false);
    DeleteObjectfollowingSFX(4001523, false);
    DeleteObjectfollowingSFX(4001524, false);
    DeleteObjectfollowingSFX(4001525, false);
    DeleteObjectfollowingSFX(4001526, false);
    DeleteObjectfollowingSFX(4001527, false);
    DeleteObjectfollowingSFX(4001528, false);
    DeleteObjectfollowingSFX(4001529, false);
    DeleteObjectfollowingSFX(4001530, false);
    DeleteObjectfollowingSFX(4001531, false);
    DeleteObjectfollowingSFX(4001532, false);
    DeleteObjectfollowingSFX(4001533, false);
    DeleteObjectfollowingSFX(4001534, false);
    DeleteObjectfollowingSFX(4001535, false);
    DeleteObjectfollowingSFX(4001536, false);
    DeleteObjectfollowingSFX(4001537, false);
    DeleteObjectfollowingSFX(4001538, false);
    DeleteObjectfollowingSFX(4001539, false);
    DeleteObjectfollowingSFX(4001540, false);
    DeleteObjectfollowingSFX(4001541, false);
    DeleteObjectfollowingSFX(4001542, false);
    DeleteObjectfollowingSFX(4001543, false);
    DeleteObjectfollowingSFX(4001544, false);
    DeleteObjectfollowingSFX(4001545, false);
    DeleteObjectfollowingSFX(4001546, false);
    DeleteObjectfollowingSFX(4001547, false);
    DeleteObjectfollowingSFX(4001548, false);
    DeleteObjectfollowingSFX(4001549, false);
    DeleteObjectfollowingSFX(4001550, false);
    DeleteObjectfollowingSFX(4001551, false);
    DeleteObjectfollowingSFX(4001552, false);
    DeleteObjectfollowingSFX(4001553, false);
    DeleteObjectfollowingSFX(4001554, false);
    DeleteObjectfollowingSFX(4001555, false);
    DeleteObjectfollowingSFX(4001556, false);
    DeleteObjectfollowingSFX(4001557, false);
    DeleteObjectfollowingSFX(4001558, false);
    DeleteObjectfollowingSFX(4001559, false);
    DeleteObjectfollowingSFX(4001560, false);
    DeleteObjectfollowingSFX(4001561, false);
    DeleteObjectfollowingSFX(4001562, false);
    DeleteObjectfollowingSFX(4001563, false);
    DeleteObjectfollowingSFX(4001564, false);
    DeleteObjectfollowingSFX(4001565, false);
    DeleteObjectfollowingSFX(4001566, false);
    DeleteObjectfollowingSFX(4001567, false);
    DeleteObjectfollowingSFX(4001568, false);
    DeleteObjectfollowingSFX(4001569, false);
    DeleteObjectfollowingSFX(4001570, false);
    DeleteObjectfollowingSFX(4001571, false);
    DeleteObjectfollowingSFX(4001572, false);
    CreateObjectfollowingSFX(4001500, 200, 800022);
    CreateObjectfollowingSFX(4001501, 200, 800022);
    CreateObjectfollowingSFX(4001502, 200, 800022);
    CreateObjectfollowingSFX(4001503, 200, 800022);
    CreateObjectfollowingSFX(4001510, 200, 839010);
    CreateObjectfollowingSFX(4001511, 200, 839010);
    CreateObjectfollowingSFX(4001512, 200, 839010);
    CreateObjectfollowingSFX(4001513, 200, 839010);
    CreateObjectfollowingSFX(4001514, 200, 839010);
    CreateObjectfollowingSFX(4001515, 200, 839010);
    CreateObjectfollowingSFX(4001516, 200, 839010);
    CreateObjectfollowingSFX(4001517, 200, 839010);
    CreateObjectfollowingSFX(4001518, 200, 839010);
    CreateObjectfollowingSFX(4001519, 200, 839010);
    CreateObjectfollowingSFX(4001520, 200, 839010);
    CreateObjectfollowingSFX(4001521, 200, 839010);
    CreateObjectfollowingSFX(4001522, 200, 839010);
    CreateObjectfollowingSFX(4001523, 200, 839010);
    CreateObjectfollowingSFX(4001524, 200, 839010);
    CreateObjectfollowingSFX(4001525, 200, 839010);
    CreateObjectfollowingSFX(4001526, 200, 839010);
    CreateObjectfollowingSFX(4001527, 200, 839010);
    CreateObjectfollowingSFX(4001528, 200, 839010);
    CreateObjectfollowingSFX(4001529, 200, 839010);
    CreateObjectfollowingSFX(4001530, 200, 839010);
    CreateObjectfollowingSFX(4001531, 200, 839010);
    CreateObjectfollowingSFX(4001532, 200, 839010);
    CreateObjectfollowingSFX(4001533, 200, 839010);
    CreateObjectfollowingSFX(4001534, 200, 839010);
    CreateObjectfollowingSFX(4001535, 200, 839010);
    CreateObjectfollowingSFX(4001536, 200, 839010);
    CreateObjectfollowingSFX(4001537, 200, 839010);
    CreateObjectfollowingSFX(4001538, 200, 839010);
    CreateObjectfollowingSFX(4001539, 200, 839010);
    CreateObjectfollowingSFX(4001540, 200, 839010);
    CreateObjectfollowingSFX(4001541, 200, 839010);
    CreateObjectfollowingSFX(4001542, 200, 839010);
    CreateObjectfollowingSFX(4001543, 200, 839010);
    CreateObjectfollowingSFX(4001544, 200, 839010);
    CreateObjectfollowingSFX(4001545, 200, 839010);
    CreateObjectfollowingSFX(4001546, 200, 839010);
    CreateObjectfollowingSFX(4001547, 200, 839010);
    CreateObjectfollowingSFX(4001548, 200, 839010);
    CreateObjectfollowingSFX(4001549, 200, 839010);
    CreateObjectfollowingSFX(4001550, 200, 839010);
    CreateObjectfollowingSFX(4001551, 200, 839010);
    CreateObjectfollowingSFX(4001552, 200, 839010);
    CreateObjectfollowingSFX(4001553, 200, 839010);
    CreateObjectfollowingSFX(4001554, 200, 839010);
    CreateObjectfollowingSFX(4001555, 200, 839010);
    CreateObjectfollowingSFX(4001556, 200, 839010);
    CreateObjectfollowingSFX(4001557, 200, 839010);
    CreateObjectfollowingSFX(4001558, 200, 839010);
    CreateObjectfollowingSFX(4001559, 200, 839010);
    CreateObjectfollowingSFX(4001560, 200, 839010);
    CreateObjectfollowingSFX(4001561, 200, 839010);
    CreateObjectfollowingSFX(4001562, 200, 839010);
    CreateObjectfollowingSFX(4001563, 200, 839010);
    CreateObjectfollowingSFX(4001564, 200, 839010);
    CreateObjectfollowingSFX(4001565, 200, 839010);
    CreateObjectfollowingSFX(4001566, 200, 839010);
    CreateObjectfollowingSFX(4001567, 200, 839010);
    CreateObjectfollowingSFX(4001568, 200, 839010);
    CreateObjectfollowingSFX(4001569, 200, 839010);
    CreateObjectfollowingSFX(4001570, 200, 839010);
    CreateObjectfollowingSFX(4001571, 200, 839010);
    CreateObjectfollowingSFX(4001572, 200, 839010);
});

// Toggle Message Visbility
Event(14005445, Restart, function() {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 131);
    
    SetVisibilityOfMessage(4004222, Disabled);
});

// Firelink Shrine Music
Event(14005450, Default, function() {
    SetNetworkSyncState(Disabled);
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    EnableMapSoundWithFade(4004450, Disabled, 5);
    EnableMapSoundWithFade(4004460, Disabled, 5);
    
    WaitFixedTimeSeconds(0.5);
    
    IfPlayerStandingOnHit(OR_01, 4004100);
    IfPlayerStandingOnHit(OR_01, 4004101);
    IfPlayerStandingOnHit(OR_01, 4004102);
    IfPlayerStandingOnHit(OR_01, 4004103);
    IfPlayerStandingOnHit(OR_01, 4004104);
    IfPlayerStandingOnHit(OR_01, 4004109);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 74000122);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 50006020);
    EnableMapSoundWithFade(4004450, Enabled, 5);
    SkipUnconditionally(1);
    EnableMapSoundWithFade(4004460, Enabled, 5);
    
    WaitFixedTimeSeconds(0.5);
    
    IfPlayerStandingOnHit(OR_02, 4004100);
    IfPlayerStandingOnHit(OR_02, 4004101);
    IfPlayerStandingOnHit(OR_02, 4004102);
    IfPlayerStandingOnHit(OR_02, 4004103);
    IfPlayerStandingOnHit(OR_02, 4004104);
    IfPlayerStandingOnHit(OR_02, 4004109);
    IfConditionGroup(OR_03, FAIL, OR_02);
    IfEventFlag(AND_02, CHANGE, TargetEventFlagType.EventFlag, 50006020);
    IfConditionGroup(OR_03, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_03);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, FAIL, AND_02);
    
    EnableMapSoundWithFade(4004450, Disabled, 5);
    EnableMapSoundWithFade(4004460, Disabled, 5);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Disable Map Sound States
Event(1405451, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(4004450, Disabled);
    SetMapSoundState(4004460, Disabled);
});

// Giant Tree Seed Drop
Event(14005460, Default, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 9400);
    
    IfActionButtonInArea(MAIN, 9350, 4001460);
    RotateCharacter(10000, 4001460, 60070, true);
    AwardItemLot(4000);
    SetEventFlag(9400, OFF);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
    
    // 
    Label0();
    IfActionButtonInArea(MAIN, 9350, 4001460);
    DisplayGenericDialog(10012010, PromptType.OKCANCEL, NumberofOptions.OneButton, 4001460, 3);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Way of White Circlet Apperance
Event(14005461, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    DeleteObjectfollowingSFX(4001461, true);
    
    IfPlayerHasdoesntHaveItem(OR_01, ItemType.Goods, 119, OwnershipState.Owns);
    IfMultiplayerNetworkPenalized(OR_01);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_01);
    
    CreateObjectfollowingSFX(4001461, 90, 62);
    
    IfActionButtonInArea(MAIN, 4000, 4001461);
    RotateCharacter(10000, 4001461, 60070, true);
    AwardItemLot(4020);
    DeleteObjectfollowingSFX(4001461, true);
});

// Area Welcome Message - Untended Graves
Event(14005470, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerStandingOnHit(OR_01, 4004120);
    IfPlayerStandingOnHit(OR_01, 4004140);
    IfConditionGroup(AND_02, FAIL, OR_01);
    IfPlayerInoutMap(AND_02, true, 40, 0);
    IfConditionGroup(MAIN, PASS, AND_02);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 743);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_03);
    
    // 
    Label0();
    SetAreaWelcomeMessageState(Disabled);
    DisplayAreaWelcomeMessage(4010);
    SetEventFlag(743, OFF);
});

// Area Welcome Message - Disable
Event(14005471, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 74000013);
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfPlayerStandingOnHit(OR_01, 4004120);
    IfConditionGroup(AND_01, FAIL, OR_01);
    IfCharacterDeadalive(AND_01, 10000, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetAreaWelcomeMessageState(Disabled);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Area Welcome Message - Enable
Event(14005472, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfCharacterDeadalive(AND_01, 10000, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WaitFixedTimeFrames(1);
    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - Enable
Event(14005473, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfCharacterHasSpeffect(AND_01, 10000, 3220, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - Enable
Event(14005474, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74000013);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - The Abyss
Event(14005475, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerStandingOnHit(AND_01, 4004140);
    IfConditionGroup(MAIN, PASS, AND_01);

    SetAreaWelcomeMessageState(Disabled);
    DisplayAreaWelcomeMessage(3017);
});


// Advance Journey (NG+)
Event(14005480, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(X0_4, OFF);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    
    SetEventFlag(X0_4, OFF);
    DisableLoadingScreenTips(true);
    SetEventFlag(30, ON);
    
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
});

// Disable Loading Tips in Cemetery of Ash
Event(14005481, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfPlayerInoutMap(MAIN, true, 40, 0);
    DisableLoadingScreenTips(false);
});

// Throne Back messages
Event(14005484, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    
    IfActionButtonInArea(MAIN, 9356, X4_4);
    DisplayGenericDialog(X0_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Crows - 
Event(14000490, Default, function() {
    InitializeCrowTradeArea(4002796);
    InitializeCrowTradeArea(4002797);
    
    SetEventFlag(2040, OFF);
    SetEventFlag(2041, OFF);
    SetEventFlag(2042, OFF);
    SetEventFlag(74000990, OFF);
});

// Crows -  
Event(14000491, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(74000995, OFF);
    
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 4002795, 1);
    SetEventFlag(74000995, ON);
    WaitFixedTimeSeconds(1);
    
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, 4002795, 1);
    SetEventFlag(74000995, OFF);
    WaitFixedTimeSeconds(1);
    
    EndUnconditionally(EventEndType.Restart);
});

// Champion Gundyr Kill
Event(14005830, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000830);
    
    IfCharacterHPRatio(MAIN, 4000830, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    
    PlaySE(4000830, SoundType.s_SFX, 777777777);
    
    IfCharacterDeadalive(MAIN, 4000830, DeathState.Dead, ComparisonType.Equal, 1);
    
    HandleBossDefeat(4000830);
    SetEventFlag(14000830, ON);
    SetEventFlag(9320, ON);
    SetEventFlag(6320, ON);
    ChangeCamera(-1, -1);
    
    InitializeCommonEvent(20020000, 25001017, 25002017, 800300020, 800300030); // Boss Kill
});

// Champion Gundyr - Setup Boss
Event(14005840, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14000830);
    
    ForceCharacterDeath(4000830, false);
    SetCharacterAnimationState(4000830, Disabled);
    ChangeCharacterEnableState(4000830, Disabled);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    SetCharacterInvincibility(4000830, Enabled);
    SetCharacterAIState(4000830, Disabled);
    SetLockOnPoint(4000830, 221, Disabled);
    ChangeCharacterHitmask(4000830, 0, ON);
    ForceAnimationPlayback(4000830, 30002, true, false, false, 0, 1);
    
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14000831);
    
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002831, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoUnconditionally(Label.LABEL2);
    
    //
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14005835);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    //
    Label2();
    ForceAnimationPlayback(4000830, 20002, false, false, false, 0, 1);
    SetCharacterAIState(4000830, Enabled);
    SetCharacterImmortality(4000830, Disabled);
    SetCharacterInvincibility(4000830, Disabled);
    SetNetworkUpdateRate(4000830, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 4000830, 0, 905115);
    SetEventFlag(14000831, ON);
    InitializeCommonEvent(20020116, 0); // Boss Start
});

// Champion Gundur - Phase Change
Event(14005841, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000830);
    
    IfCharacterHPRatio(MAIN, 4000830, ComparisonType.LessOrEqual, 0.5, ComparisonType.Equal, 1);
    SetEventFlag(14005832, ON);
});

// Champion Gundyr door
Event(14000842, Restart, function() {
    WaitFixedTimeFrames(1);
    
    SetObjactState(4001260, -1, Disabled);
    SetObjactState(4001261, -1, Disabled);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 64000261);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 14000830);
    SetObjactState(4001261, 400005, Enabled);
});

// Champion Gundyr - Fog Wall Handler
Event(14000859, Restart, function() {
    // Fogwall - Cemetery Side
    InitializeCommonEvent(20005800, 14000830, 4001800, 4002800, 14005835, 4001830, 4000830, 14000831, 4002831);
    InitializeCommonEvent(20005801, 14000830, 4001800, 4002800, 14005835, 4001830, 14005836);
    InitializeCommonEvent(20005820, 14000830, 4001800, 3, 14000831);
    InitializeCommonEvent(20005810, 14000830, 4001800, 4002800, 10000);
    
    // Fogwall - Firelink Side
    InitializeCommonEvent(20005800, 14000830, 4001810, 4002810, 14005835, 4001830, 4000830, 14000831, 4002831);
    InitializeCommonEvent(20005801, 14000830, 4001810, 4002810, 14005835, 4001830, 14005836);
    InitializeCommonEvent(20005820, 14000830, 4001810, 3, 14000831);
    InitializeCommonEvent(20005810, 14000830, 4001810, 4002810, 10000);
    
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 14000831);
    InitializeCommonEvent(20005831, 14000830, 14005835, 14005836, 4002800, 4004830, 4004831, 14005832);
    InitializeCommonEvent(20005831, 14000830, 14005835, 14005836, 4002810, 4004830, 4004831, 14005832);
    EndUnconditionally(EventEndType.End);
    
    InitializeCommonEvent(20001836, 14000830, 14005835, 14005836, 14000831, 4004830, 4004831, 14005832);
});

// Orbeck - Spawn State
Event(14005500, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1235, 1239);
    BatchSetNetworkconnectedEventFlags(1235, 1239, OFF);
    SetNetworkconnectedEventFlag(1235, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1236);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000063);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1235, 1239, OFF);
    SetNetworkconnectedEventFlag(1235, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1220, 1234);
    BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
    SetNetworkconnectedEventFlag(1220, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1235);
    
    //IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1221);
    //IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 74000553); // Bosses killed without giving scroll
    
    //SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    //BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
    //SetNetworkconnectedEventFlag(1222, ON);
    
    //IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1221);
    //IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000583); // Purchased all spells
    
    //SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    //BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
    //SetNetworkconnectedEventFlag(1223, ON);
    
    // Sin State
    Label9();
    SetEventFlag(70000063, OFF);
    SetEventFlag(74000551, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1235);
    SetEventFlag(74000570, OFF);
    
    // 
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1221);
    GotoIfBatchEventFlags(Label.LABEL3, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1222, 1234);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X8_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1236);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1238);
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label3();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
});

// Yuria - Spawn State
Event(14005520, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1055, 1059);
    BatchSetNetworkconnectedEventFlags(1055, 1059, OFF);
    SetNetworkconnectedEventFlag(1055, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1056); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000054); // Sinned
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1055, 1059, OFF);
    SetNetworkconnectedEventFlag(1055, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1040, 1054);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1040, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1055);
    
    // 
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 700); // Initial flag setup
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1040); // "Dead"
    IfPlayerRemainingYoelLevelCount(AND_02, ComparisonType.LessOrEqual, 0);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 74000124); // Healed Dark Sigils
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1041, ON);
    
    //
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1041);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 50006193);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1042, ON);
    
    //
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 1042);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 74000640); // Summoned as Phantom
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_09);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1045, ON);
    
    // Yoel Killed, Dark Sigils Healed -> Leave
    IfBatchEventFlags(AND_04, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1040, 1042);
    IfPlayerRemainingYoelLevelCount(AND_05, ComparisonType.Greater, 0);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1078); // Yoel "Killed"
    IfConditionGroup(OR_04, PASS, AND_05);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 74000124); // Healed Dark Sigils
    IfConditionGroup(AND_04, PASS, OR_04);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
    
    // Anri Killed -> Leave
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1041);
    IfBatchEventFlags(AND_06, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1340, 1347);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1358);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
     
    //
    IfBatchEventFlags(AND_07, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1041, 1042);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1561);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1578);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1043, ON);
    
    // 
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1043);
    IfEventFlag(OR_08, ON, TargetEventFlagType.EventFlag, 74000619);
    IfEventFlag(OR_08, OFF, TargetEventFlagType.EventFlag, 74000600);
    IfConditionGroup(AND_08, PASS, OR_08);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_08);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
    
    // 
    Label9();
    SetEventFlag(70000054, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1055);
    SetEventFlag(74000620, OFF);
    
    // 
    Label10();
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1041);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1042);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1043);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1044);
    //GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1044);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X12_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    DeactivateObject(X12_4, Disabled);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1056);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1058);
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetObjectTreasureState(X12_4, Enabled);
    EndUnconditionally(EventEndType.End);
});

// Yuria -
Event(14005521, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(X12_4, OFF);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfDamageType(AND_02, X0_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.Less, X16_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 1041);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 1043);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    
    GotoIfComparison(Label.LABEL0, ComparisonType.Equal, 1, X28_4);
    
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    
    GotoUnconditionally(Label.LABEL9);
    
    // 
    Label0();
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X8_4, ON);
    
    //
    Label9();
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    IfCharacterHasSpeffect(AND_03, X0_4, 159, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
});

// Yuria - 
Event(14000522, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1055);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1041, 1042);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74000124);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1043, ON);
    SetNetworkconnectedEventFlag(74000630, OFF);
    SaveRequest(0);
});

// Eygon - Spawn State
Event(14005540, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1315, 1319);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1315, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1316);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000067);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1315, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1300, 1314);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1300, ON);
    
    GotoIfEventFlag(Label.LABEL10, OFF, TargetEventFlagType.EventFlag, 1315);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1300);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73100304);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1301, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1301);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9307);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1302, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1302);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000650);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1303, ON);
    
    IfBatchEventFlags(AND_06, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1301, 1303);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1298);
    
    SkipIfConditionGroupStateUncompiled(5, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1302, ON);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1317, ON);
    GotoUnconditionally(Label.LABEL9);
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1303);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 9308);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000380);
    
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1305, ON);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1318, ON);
    
    // 
    Label9();
    SetEventFlag(70000067, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1315);
    SetEventFlag(74000670, OFF);
    
    // 
    Label10();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X16_4, -1, X4_4);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1302);
    GotoIfEventFlag(Label.LABEL4, ON, TargetEventFlagType.EventFlag, 1304);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1316);
    GotoIfEventFlag(Label.LABEL17, ON, TargetEventFlagType.EventFlag, 1317);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1318);
    ForceAnimationPlayback(X0_4, X8_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label16();
    Label17();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label4();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1318);
    SetCharacterAIState(X4_4, Disabled);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

// Eygon -
Event(14005541, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X32_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X24_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, X12_4, X16_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X20_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(X24_4, X28_4, OFF);
    SetNetworkconnectedEventFlag(X8_4, ON);
    SaveRequest(0);
    
    WaitFixedTimeFrames(1);
    
    IfCharacterHasSpeffect(OR_15, X0_4, 159, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_15);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
});

// Eygon -
Event(14005542, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1301, 1303);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1315);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1282, 1283);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1295);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74000351);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1304, ON);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1317, ON);
    
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 1282);
    
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1284, ON);
    GotoUnconditionally(Label.LABEL1);
    
    //
    Label0();
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1285, ON);
    
    //
    Label1();
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    SetCharacterAIState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Enabled);
    SetCharacterBackreadState(X12_4, false);
    SetCharacterTeamType(X12_4, TeamType.Disabled);
    ForceAnimationPlayback(X12_4, X16_4, true, false, false, 0, 1);
});

// Eygon - 
Event(14005543, Default, function(X0_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1304);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1318);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, X0_4, 10000, 10, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfDamageType(OR_01, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    
    WaitFixedTimeFrames(1);
    
    IfCharacterHasSpeffect(OR_02, X0_4, 159, true, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_02, X0_4, AIStateType.Normal, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, OR_02);
    RotateCharacter(X0_4, 10000, -1, true);
});

// Hawkwood - Spawn State
Event(14005560, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetCharacterAnimationState(4000762, Disabled);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1115, 1119);
    BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
    SetNetworkconnectedEventFlag(1115, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1116);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000057);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
    SetNetworkconnectedEventFlag(1115, ON);
    BatchSetEventFlags(74000848, 74000849, OFF);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1100, 1114);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1100, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1115);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1100);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9303);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9306);
    IfConditionGroup(AND_02, PASS, OR_01);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1101, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1101);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9307);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1102, ON);
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1102);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000808);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1103, ON);
    SetEventFlag(74000825, ON);
    
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1103);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 53200800); // Prayed in Archdragon Peak
    
    SkipIfConditionGroupStateUncompiled(6, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1104, ON);
    BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
    SetNetworkconnectedEventFlag(1117, ON);
    SetEventFlag(50006071, ON);
    SetEventFlag(74000201, ON);
    
    //
    Label9();
    SetEventFlag(70000057, OFF);
    
    //
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1100);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1101);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1102);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    SkipIfBatchEventFlags(4, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1116, 1118);
    BatchSetEventFlags(74000810, 74000813, OFF);
    IfEventFlag(OR_02, OFF, TargetEventFlagType.EventFlag, 74000801);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, OR_02);
    RandomlySetEventFlagInRange(74000810, 74000813, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 74000820);
    SetEventFlag(74000810, ON);
    
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 74000810);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X12_4, -1, X4_4);
    ChangeCharacterEnableState(4000366, Disabled);
    SetCharacterBackreadState(4000366, true);
    SkipIfBatchEventFlags(1, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1116, 1118);
    ForceAnimationPlayback(X4_4, 90960, false, false, true, 0, 1);
    GotoUnconditionally(Label.LABEL17);
    
    //
    Label1();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    SkipIfBatchEventFlags(1, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1116, 1118);
    ForceAnimationPlayback(X0_4, 90680, false, false, true, 0, 1);
    
    //
    Label17();
    GotoIfEventFlag(Label.LABEL19, ON, TargetEventFlagType.EventFlag, 1116);
    GotoIfEventFlag(Label.LABEL19, ON, TargetEventFlagType.EventFlag, 1117);
    GotoIfEventFlag(Label.LABEL20, ON, TargetEventFlagType.EventFlag, 1118);
    EndUnconditionally(EventEndType.End);
    
    //
    Label19();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    //
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000810);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

// Sirris - Spawn State
Event(14005570, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL20, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1135, 1139);
    BatchSetNetworkconnectedEventFlags(1135, 1139, OFF);
    SetNetworkconnectedEventFlag(1135, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1136);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000058);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1135, 1139, OFF);
    SetNetworkconnectedEventFlag(1135, ON);
    SetEventFlag(74000799, OFF);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1120, 1134);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1120, ON);
    
    GotoIfEventFlag(Label.LABEL19, OFF, TargetEventFlagType.EventFlag, 1135);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1120);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 133);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1121, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1121);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000750);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1122, ON);
    
    // Stage - Dreamchaser Ashes given to Shrine Handmaid
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1122);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 25001006); // Defeated the Abyss Watchers
    //IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000253); // Dreamchaser Ashes given flag
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1123, ON);
    
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1123);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 74000751);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1124, ON);
    
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 8200);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1125, ON);
    
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1125);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 74000752);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_08);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1126, ON);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1126);
    IfConditionGroup(AND_09, PASS, OR_01);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 8220);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_09);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1127, ON);
    SetEventFlag(74000790, ON);
    
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 1127);
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 74000755);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_10);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1128, ON);
    
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 1127);
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 74000760);
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 74000756);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_11);
    BatchSetNetworkconnectedEventFlags(1120, 1139, OFF);
    SetNetworkconnectedEventFlag(1130, ON);
    SetNetworkconnectedEventFlag(1137, ON);
    
    IfEventFlag(AND_12, ON, TargetEventFlagType.EventFlag, 1128);
    IfEventFlag(AND_12, ON, TargetEventFlagType.EventFlag, 9309);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_12);
    BatchSetNetworkconnectedEventFlags(1120, 1139, OFF);
    SetNetworkconnectedEventFlag(1129, ON);
    SetNetworkconnectedEventFlag(1138, ON);
    
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1120);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1121);
    IfConditionGroup(AND_13, PASS, OR_02);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, 73500150);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_13);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1134, ON);
    
    IfBatchEventFlags(AND_14, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1122, 1128);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 73500150);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_14);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1133, ON);
    
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1133);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 74000753);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_15);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1134, ON);
    
    //
    Label19();
    SetEventFlag(70000058, OFF);
    
    //
    Label20();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1121);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1123);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1125);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 1127);
    GotoIfEventFlag(Label.LABEL4, ON, TargetEventFlagType.EventFlag, 1129);
    GotoIfEventFlag(Label.LABEL5, ON, TargetEventFlagType.EventFlag, 1133);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    Label1();
    Label2();
    Label3();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    SkipIfBatchEventFlags(1, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1136, 1138);
    ForceAnimationPlayback(X0_4, 90340, false, false, true, 0, 1);
    GotoUnconditionally(Label.LABEL18);
    
    //
    Label5();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    
    //
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1127);
    InitializeCommonEvent(20006000, 4000780, 1136, 1137, 74000770, 1060320051, 1135, 1139, 0, $LAYERS(0)); // Hostility
    InitializeCommonEvent(20006001, 4000780, 1136, 1137, 74000770, 3, $LAYERS(0)); // Hostility Cooldown
    
    GotoIfEventFlag(Label.LABEL19, ON, TargetEventFlagType.EventFlag, 1136);
    GotoIfEventFlag(Label.LABEL19, ON, TargetEventFlagType.EventFlag, 1137);
    GotoIfEventFlag(Label.LABEL20, ON, TargetEventFlagType.EventFlag, 1138);
    EndUnconditionally(EventEndType.End);
    
    //
    Label4();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X12_4, -1, X4_4);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EzstateInstructionRequest(X4_4, 800, 1);
    EndUnconditionally(EventEndType.End);
    
    //
    Label19();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    //
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Unused
Event(14005571, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 70000116);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9303);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9314);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetEventFlag(70000118, ON);
});

// Anri - Spawn State
Event(14005580, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1355, 1359);
    BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
    SetNetworkconnectedEventFlag(1355, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1356);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000069);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
    SetNetworkconnectedEventFlag(1355, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1340, 1354);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1340, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1355);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1340);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73300151);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1341, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1341);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9311);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1342, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1342);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000700);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1344, ON);
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1350);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 8260);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1351, ON);
    SetEventFlag(74000180, ON);
    
    // 
    Label9();
    SetEventFlag(70000069, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1355);
    SetEventFlag(74000720, OFF);
    
    // 
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1342);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X20_4, -1, X4_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1356);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1357);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 1358);
    GotoIfEventFlag(Label.LABEL20, OFF, TargetEventFlagType.EventFlag, 9013);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    GotoIfEventFlag(Label.LABEL20, OFF, TargetEventFlagType.EventFlag, 9013);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    GotoIfEventFlag(Label.LABEL20, OFF, TargetEventFlagType.EventFlag, 9013);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false, 0, 1);
    SetCharacterAIState(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X4_4, X12_4, false, false, false, 0, 1);
    SetCharacterAIState(X4_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label3();
    GotoIfEventFlag(Label.LABEL20, OFF, TargetEventFlagType.EventFlag, 9013);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

// Anri - 
Event(14005581, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    SetEventFlag(X12_4, OFF);
    SetEventFlag(X16_4, OFF);
   
    IfBatchEventFlags(AND_01, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1356, 1357);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, X4_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1342);
    IfDamageType(AND_02, X0_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.Less, X20_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    
    IfDamageType(AND_03, X4_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_03, X4_4, ComparisonType.Less, X20_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_03);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    
    IfConditionGroup(OR_03, PASS, AND_01);
    
    IfBatchEventFlags(AND_04, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1496, 1497);
    IfCharacterHPRatio(AND_04, X8_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1482);
    IfDamageType(AND_05, X8_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_05, X8_4, ComparisonType.Less, X20_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X16_4);
    
    IfConditionGroup(AND_04, PASS, OR_02);
    
    IfConditionGroup(OR_03, PASS, AND_04);
    
    IfConditionGroup(MAIN, PASS, OR_03);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    SetCharacterTeamType(X8_4, TeamType.HostileNPC);
    
    BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
    SetNetworkconnectedEventFlag(1356, ON);
    BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
    SetNetworkconnectedEventFlag(1496, ON);
    SaveRequest(0);
    
    WaitFixedTimeFrames(1);
    
    SkipIfCharacterHasSpeffect(1, X0_4, 159, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    
    SkipIfCharacterHasSpeffect(1, X4_4, 159, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X4_4, 0, false, false, false, 0, 1);
    
    SkipIfCharacterHasSpeffect(1, X8_4, 159, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X8_4, 0, false, false, false, 0, 1);
});

// Unused
Event(14005582, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(X12_4, OFF);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X32_4);
    IfDamageType(AND_02, X0_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.Less, X16_4, ComparisonType.Equal, 1);
    
    IfConditionGroup(OR_01, PASS, AND_02);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X28_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    SaveRequest(0);
    
    WaitFixedTimeFrames(1);
    
    IfCharacterHasSpeffect(AND_03, X0_4, 159, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
});

// Anri - 
Event(14000583, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, X4_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X28_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X20_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(AND_01, X16_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    
    IfCharacterHasSpeffect(OR_15, X0_4, 150, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, MAIN);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    
    IfCharacterHasSpeffect(OR_14, X0_4, 150, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, MAIN);
    ForceAnimationPlayback(X4_4, 0, false, false, false, 0, 1);
    
    RequestCharacterAICommand(X0_4, 20, 1);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAICommand(X4_4, 20, 1);
    RequestCharacterAIReplan(X4_4);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X12_4, ON);
    SaveRequest(0);
});

// Anri - 
Event(14005584, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    IfCharacterHasSpeffect(OR_01, X0_4, 150, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, X0_4, 151, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, X4_4, 150, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, X4_4, 151, true, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_01);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    EzstateInstructionRequest(X0_4, 1903, 1);
    EzstateInstructionRequest(X4_4, 1903, 1);
    
    WaitFixedTimeFrames(10);
   
    EndUnconditionally(EventEndType.Restart);
});

// Horace -
Event(14000585, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X28_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X20_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(OR_02, X12_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(OR_02, X16_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    
    IfCharacterHasSpeffect(OR_15, X0_4, 150, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, MAIN);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X8_4, ON);
    SaveRequest(0);
});

// Horace - Spawn State
Event(14005586, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1495, 1499);
    BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
    SetNetworkconnectedEventFlag(1495, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1496);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000076);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
    SetNetworkconnectedEventFlag(1495, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1480, 1494);
    BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
    SetNetworkconnectedEventFlag(1480, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1495);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1480);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73300151);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
    SetNetworkconnectedEventFlag(1481, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1481);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9311);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
    SetNetworkconnectedEventFlag(1482, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1482);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000700);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
    SetNetworkconnectedEventFlag(1484, ON);
    
    // 
    Label9();
    SetEventFlag(70000076, OFF);
    
    // 
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1482);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1496);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1497);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 1498);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label3();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Anri -
Event(14005587, Restart, function(X0_4, X4_4, X8_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfCharacterHasSpeffect(AND_01, X0_4, 151, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfDamageType(MAIN, X0_4, 10000, DamageType.Unspecified);
    
    WaitFixedTimeFrames(1);
    
    IfDamageType(MAIN, X0_4, 10000, DamageType.Unspecified);
    WaitFixedTimeFrames(1);
    
    IfDamageType(MAIN, X0_4, 10000, DamageType.Unspecified);
    ForceCharacterDeath(X0_4, true);
});

// Fire Keeper - Spawn State
Event(14005600, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1015, 1019);
    BatchSetNetworkconnectedEventFlags(1015, 1019, OFF);
    SetNetworkconnectedEventFlag(1015, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1018);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1015, 1019, OFF);
    SetNetworkconnectedEventFlag(1015, ON);
    SetEventFlag(74000121, ON);
    SetEventFlag(74000100, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1000, 1014);
    BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
    SetNetworkconnectedEventFlag(1000, ON);
   
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1001);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 145);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
    SetNetworkconnectedEventFlag(1002, ON);
    
    BatchSetEventFlags(74000135, 74000138, OFF);
    BatchSetEventFlags(74000103, 74000109, OFF);
   
    Label9();
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 74000147); // Random Position - Sitting on stairs
    GotoIfEventFlag(Label.LABEL15, ON, TargetEventFlagType.EventFlag, 74000148); // Random Position - By arch
    GotoIfEventFlag(Label.LABEL17, ON, TargetEventFlagType.EventFlag, 74000149); // Random Position - Sitting on stairs (near candles)
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1000);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 131);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_03);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1000);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1001);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1002);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1018);
    EndUnconditionally(EventEndType.End);
    
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // Initial position during first encounter in Firelink Shrine
    Label2();
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X16_4, -1);
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1018);
    EndUnconditionally(EventEndType.End);
   
    // Enabled
    Label1();
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1018);
    RandomlySetEventFlagInRange(74000103, 74000109, ON);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 74000103);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 74000104);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000105);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 50006020);
    GotoIfConditionGroupStateUncompiled(Label.LABEL17, PASS, AND_05);
    
    // Random Position - By arch
    Label15();
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    EndUnconditionally(EventEndType.End);
    
    // Random Position - Sitting on stairs
    Label16();
    ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
    EndUnconditionally(EventEndType.End);
    
    // Random Position - Sitting on stairs (near candles)
    Label17();
    ForceAnimationPlayback(X0_4, 30001, false, false, false, 0, 1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Fire Keeper -
Event(14000601, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
   
    SetEventFlag(X0_4, ON);
});

// Fire Keeper - Item Lot
Event(14005602, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    
    AwardItemLot(X4_4);
    SetEventFlag(74000130, OFF);
    SetEventFlag(74000131, OFF);
});

// Firekeeper - 
Event(14000603, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
   
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    SetEventFlag(X4_4, ON);
});

// Firekeeper - 
Event(14005604, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1000);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9210);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterHome(X0_4, X4_4);
   
    WaitFixedTimeFrames(1);
    
    BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
    SetNetworkconnectedEventFlag(1001, ON);
    
    SkipIfCharacterHasSpeffect(2, X0_4, 151, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, 20017, false, true, false, 0, 1);
    SkipUnconditionally(2);
    SkipIfCharacterHasSpeffect(1, X0_4, 153, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, 20019, false, true, false, 0, 1);
    
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    
    IfCharacterHasSpeffect(MAIN, X0_4, 154, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(MAIN, X0_4, 154, false, ComparisonType.Equal, 1);
    RequestCharacterAICommand(X0_4, -1, 0);
});

// Firekeeper - 
Event(14005605, Default, function(X0_4, X4_4, X8_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, 5, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 150, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, X4_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);
    
    EndUnconditionally(EventEndType.Restart);
});

// Firekeeper - 
Event(14005615, Restart, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    SetMapSoundState(4003700, Disabled);
    SetMapSoundState(4003701, Disabled);
   
    IfCharacterHasSpeffect(MAIN, X0_4, 155, true, ComparisonType.Equal, 1);
    IfPlayerGender(AND_01, Gender.Male);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    SetMapSoundState(4003700, Enabled);
    SkipUnconditionally(1);
    SetMapSoundState(4003701, Enabled);
   
    IfCharacterHasSpeffect(MAIN, X0_4, 155, false, ComparisonType.Equal, 1);
    
    EndUnconditionally(EventEndType.Restart);
});

// Firekeeper - 
Event(14005616, Restart, function(X0_4) {
    SetEventFlag(74000139, OFF);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 74000139);
    
    SkipIfCharacterHasSpeffect(1, X0_4, 153, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, 20018, false, false, false, 0, 1);
   
    EndUnconditionally(EventEndType.Restart);
});

// Unknown
Event(14005618, Default, function() {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 14005617);
    SetEventFlag(14000618, ON);
});

// Shrine Bonfire
Event(14005619, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 6500);
   
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 6500);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000015);
    ForceAnimationPlayback(4001950, 10, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000016);
    ForceAnimationPlayback(4001950, 20, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
   
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000017);
    ForceAnimationPlayback(4001950, 30, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000018);
    ForceAnimationPlayback(4001950, 40, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000019);
    ForceAnimationPlayback(4001950, 50, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000020);
    ForceAnimationPlayback(4001950, 60, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000021);
    ForceAnimationPlayback(4001950, 70, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000022);
    ForceAnimationPlayback(4001950, 80, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000023);
    ForceAnimationPlayback(4001950, 90, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000024);
    ForceAnimationPlayback(4001950, 100, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
   
    ForceAnimationPlayback(4001950, 9900, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
});

// Patches - Spawn State
Event(14005620, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL20, true);
    
    SetEventFlag(64001251, ON);
    SetEventFlag(74000919, OFF);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1375, 1379);
    BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
    SetNetworkconnectedEventFlag(1375, ON);
   
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1376);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 70000070);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_15);
    BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
    SetNetworkconnectedEventFlag(1375, ON);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1360, 1374);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1360, ON);
    
    GotoIfEventFlag(Label.LABEL19, OFF, TargetEventFlagType.EventFlag, 1375);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1365);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1204);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74000920);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1366, ON);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1366);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1206);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1365, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1365);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1207);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000921);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1367, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1367);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000925);
    
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1365, ON);
    SetEventFlag(74000914, ON);
    SetEventFlag(70000401, ON);
    
    //
    Label19();
    SetEventFlag(70000070, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1375);
    SetEventFlag(74000949, OFF);
    
    //
    Label20();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1364);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1365);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1370);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterAnimationState(X0_4, Disabled);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1378);
    GotoIfBatchEventFlags(Label.LABEL17, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1376, 1377);
    EndUnconditionally(EventEndType.End);
    
    //
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 74000916);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1376, 1378);
    ForceAnimationPlayback(X4_4, 90810, false, false, true, 0, 1);
    SetEventFlag(74000917, ON);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1378);
    GotoIfBatchEventFlags(Label.LABEL17, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1376, 1377);
    EndUnconditionally(EventEndType.End);
    
    //
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1378);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 4002714, -1, X4_4);
    SetCharacterHome(X4_4, 4002714);
    EndUnconditionally(EventEndType.End);
    
    //
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
    
    //
    Label17();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
});

// Patches - 
Event(14000621, Restart, function(X0_4) {
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1364);
    
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(64001251, ON);
    SetEventFlag(14000623, ON);
    
    DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
    ReproduceObjectAnimation(4001251, 0);
    GotoUnconditionally(Label.LABEL2);
    
    //
    Label1();
    ReproduceObjectAnimation(4001251, 1);
    DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Enabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
    
    //
    Label2();
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002710, 1);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1360, 1363);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1375);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 138);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9311);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1363);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 73500262);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 73500263);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1364, ON);
    SetEventFlag(64001251, OFF);
    SetEventFlag(14000623, OFF);
    PlaySE(4001251, SoundType.a_EnvironmentalSound, 400100000);
    
    //
    Label0();
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterAnimationState(X0_4, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Enabled);
    ForceAnimationPlayback(4001251, 1, false, false, false, 0, 1);
    InitializeCommonEvent(20005610, 14000623, 4002713, 4002712);
    InitializeCommonEvent(20005611, 14000623, 4003251, 4001251, 1400340);
});

// Patches - 
Event(14000622, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4002711, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1364);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1375);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
   
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1365, ON);
    SetEventFlag(70000400, ON);
   
    //
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    DeactivateObjactAssignIdx(4001251, 1400340, 0, Enabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);
    
    InitializeCommonEvent(20005610, 14000623, 4002713, 4002712); // Setup Door Area
    InitializeCommonEvent(20005611, 14000623, 4003251, 4001251, 1400340); // Setup Door
});

// Patches - 
Event(14000624, Restart, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000624);
   
    IfCharacterDeadalive(MAIN, 4000720, DeathState.Dead, ComparisonType.Equal, 1);
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 1365);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1378);
   
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1370, ON);
    BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
    SetNetworkconnectedEventFlag(1377, ON);
   
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterHome(X0_4, 4002714);
    IfCharacterHasSpeffect(AND_01, X0_4, 159, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
});

// Unused
Event(14005625, Restart, function(X0_4) {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4, 1);
    SetSpeffect(10000, 4150);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Ludleth - Spawn State
Event(14005640, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    SetEventFlag(74000190, OFF);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1020, 1034);
    BatchSetNetworkconnectedEventFlags(1020, 1034, OFF);
    SetNetworkconnectedEventFlag(1020, ON);
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1020);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14000110);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1020, 1034, OFF);
    SetNetworkconnectedEventFlag(1021, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1035, 1039);
    BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
    SetNetworkconnectedEventFlag(1035, ON);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1038);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1020);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
    SetNetworkconnectedEventFlag(1035, ON);
    SetEventFlag(74000190, ON);
    SetEventFlag(74000150, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1021);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 14000110);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
    SetNetworkconnectedEventFlag(1038, ON);
    
    SetEventFlag(74000160, OFF);
    SetEventFlag(74000170, OFF);
    SetEventFlag(74000053, OFF);
    
    // Enabled (Person)
    Label9();
    DeactivateObject(X4_4, Disabled); 
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1020);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1021);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Enabled (Person) + Disable Object Talk
    Label0();
    ChangeCharacterEnableState(X8_4, Disabled);
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1038);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 4004705, -1);
    GotoIfEventFlag(Label.LABEL15, ON, TargetEventFlagType.EventFlag, 74000190);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 20, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Enabled
    Label15();
    SetEventFlag(74000170, ON);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Force Treasure
    Label10();
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    DeactivateObject(X4_4, Enabled);
    EndUnconditionally(EventEndType.End);
});

// Andre - Spawn State
Event(14005660, Default, function(X0_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1175, 1179);
    BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
    SetNetworkconnectedEventFlag(1175, ON); // Hostility
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1176);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000060);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
    SetNetworkconnectedEventFlag(1175, ON); // Hostility
    SetEventFlag(74000200, ON);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1178);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
    SetNetworkconnectedEventFlag(1176, ON); // Hostility
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1160, 1174);
    BatchSetNetworkconnectedEventFlags(1160, 1174, OFF);
    SetNetworkconnectedEventFlag(1160, ON); // Died
   
    SetEventFlag(70000060, OFF);
    
    // Disabled
    Label9();
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1160); // Died
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Passthrough
    Label0();
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1178); // Was killed
    
    // Enabled
    Label1();
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 4004710, -1);
    ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Andre - Smithing State Monitor
Event(14005661, Default, function(X0_4) {
    // Disable if not in region
    IfPlayerStandingOnHit(OR_01, 4004100);
    IfPlayerStandingOnHit(OR_01, 4004101);
    IfPlayerStandingOnHit(OR_01, 4004102);
    IfPlayerStandingOnHit(OR_01, 4004103);
    IfPlayerStandingOnHit(OR_01, 4004104);
    IfPlayerStandingOnHit(OR_01, 4004109);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4002709, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_02, FAIL, AND_01);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1160);
    IfConditionGroup(MAIN, PASS, AND_02);
    
    ChangeCharacterEnableState(X0_4, Disabled);
    
    WaitFixedTimeSeconds(1);
    ClearCompiledConditionGroupState(0);
   
    // Enable if in region
    IfPlayerStandingOnHit(OR_01, 4004100);
    IfPlayerStandingOnHit(OR_01, 4004101);
    IfPlayerStandingOnHit(OR_01, 4004102);
    IfPlayerStandingOnHit(OR_01, 4004103);
    IfPlayerStandingOnHit(OR_01, 4004104);
    IfPlayerStandingOnHit(OR_01, 4004109);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4002709, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1160);
    IfConditionGroup(MAIN, PASS, AND_02);
   
    ChangeCharacterEnableState(4000710, Enabled);
    ForceAnimationPlayback(4000710, 700, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1);
    
    EndUnconditionally(EventEndType.Restart);
});

// Shrine Handmaid - Spawn State
Event(14005680, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1195, 1199);
    BatchSetNetworkconnectedEventFlags(1195, 1199, OFF);
    SetNetworkconnectedEventFlag(1195, ON); // Hostility
   
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1198);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
   
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1195, 1199, OFF);
    SetNetworkconnectedEventFlag(1196, ON); // Hostility
    SetEventFlag(74000251, ON);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1180, 1194);
    BatchSetNetworkconnectedEventFlags(1180, 1194, OFF);
    SetNetworkconnectedEventFlag(1180, ON); // Dead
   
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1195); // No Hostility
   
    Label9();
    SetEventFlag(70000061, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1195); // No Hostility
    SetEventFlag(74000251, OFF);
    
    // Disabled (is Dead)
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1180); // Is Dead
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Enabled
    Label0();
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1196); // Hostility
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1198); // Killed
    EndUnconditionally(EventEndType.End);
    
    //
    Label1();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000295);
    SetSpeffect(X0_4, 12605);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000294);
    SetSpeffect(X0_4, 12604);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000293);
    SetSpeffect(X0_4, 12603);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000292);
    SetSpeffect(X0_4, 12602);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000291);
    SetSpeffect(X0_4, 12601);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000290);
    SetSpeffect(X0_4, 12600);
    EndUnconditionally(EventEndType.End);
    EndUnconditionally(EventEndType.End);
   
    // Disabled + Force Treasure
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Shrine Handmaid - Ash flags
Event(14005681, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(74000280, OFF);
    
    IfBatchEventFlags(AND_01, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 70000100, 70000106);
    IfBatchEventFlags(AND_01, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 70000108, 70000110);
    IfBatchEventFlags(AND_01, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 70000112, 70000115);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 70000107);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 70000116);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 70000111);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 74000603);
    IfConditionGroup(AND_01, PASS, OR_02);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 6951);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000120);
   
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 6952);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000121);
    
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(74000280, ON);
});

// Shrine Handmaid - Set Flags if Dead
Event(14005682, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
   
    BatchSetNetworkconnectedEventFlags(X8_4, X12_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000290);
    SetEventFlag(74000290, ON);
    GotoUnconditionally(Label.LABEL20);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000291);
    SetEventFlag(74000291, ON);
    GotoUnconditionally(Label.LABEL20);
   
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000292);
    SetEventFlag(74000292, ON);
    GotoUnconditionally(Label.LABEL20);
   
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000293);
    SetEventFlag(74000293, ON);
    GotoUnconditionally(Label.LABEL20);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000294);
    SetEventFlag(74000294, ON);
    GotoUnconditionally(Label.LABEL20);
   
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000295);
    SetEventFlag(74000295, ON);
    GotoUnconditionally(Label.LABEL20);
   
    Label20();
    SaveRequest(0);
});

// Shrine Handmaid (Untended Graves) - Spawn State
Event(14005683, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1615, 1619);
    BatchSetNetworkconnectedEventFlags(1615, 1619, OFF);
    SetNetworkconnectedEventFlag(1615, ON); // Hostility
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1600, 1614);
    BatchSetNetworkconnectedEventFlags(1600, 1614, OFF);
    SetNetworkconnectedEventFlag(1600, ON); // Is Dead
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1615); // Hostility
    
    Label9();
    
    // Disabled (is Dead)
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1600); // Is Dead
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
   
    // Enabled
    Label0();
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1618); // Is Killed
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label2();
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
});

// Shrine Handmaid (Untended Graves) - Flag Setter
Event(14005684, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
   
    IfBatchEventFlags(MAIN, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 13300396, 13300397);
    SetEventFlag(X0_4, ON);
});

// Greirat - Spawn State
Event(14005700, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    // Curse-rotted Greatwood killed
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25001003);
    SetEventFlag(74000316, ON); 
    
    // Pontiff Sulyvahn killed
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25001009);
    SetEventFlag(74000318, ON); 
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1215, 1219);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1215, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1216); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000062); // Sin State: Greirat
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1215, ON); // "Passive"
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1200, 1214);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1200, ON); // "Dead"
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1215); // Goto Label 9 if "Hostile" is OFF

    // Quest Stage: Undead Settlement Pillage
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1201);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 74000303);
    
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1202, ON);
    SetEventFlag(70000150, ON);
    SetEventFlag(70000153, ON);
    
    //  Quest Stage: Undead Settlement Pillage Success
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1202);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000316);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1203, ON);
    
    //  Quest Stage: Irithyll Pillage
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1203);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000306);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1204, ON);
    SetEventFlag(70000151, ON);
    
    //  Quest Stage: Irithyll Pillage Success
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1204);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000318);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 1385); // Siegward - Stage: Moved to Irithyll
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 1366); // Patches Quest Stage
    
    SkipIfConditionGroupStateUncompiled(5, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1205, ON);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1218, ON);
    GotoUnconditionally(Label.LABEL9);
    
    // 
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1204);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 74000318);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1385); // Siegward - Stage: Moved to Irithyll
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1366); // Patches Quest Stage
    IfConditionGroup(AND_06, PASS, OR_01);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1206, ON);
    
    // Quest Stage: Lothric Pillage
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1206);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 74000309);
    SkipIfConditionGroupStateUncompiled(6, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1207, ON);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1218, ON); // "Killed"
    SetEventFlag(70000152, ON);
    GotoUnconditionally(Label.LABEL9);
    
    // Hostility State
    Label9();
    SetEventFlag(70000062, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1215); // "Passive"
    SetEventFlag(74000320, OFF);
    
    // Host State
    Label10();
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1200); // "Dead"
    DeactivateObject(4006720, Disabled);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1201); // 
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1203); // 
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1206); // 
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Enabled
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1216); // "Hostile"
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1218); // "Killed"
    SetEventFlag(74000324, OFF); // Greirat cry pose
   
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 74000301); // Given  Loretta's Bone
    IfEventFlag(AND_15, OFF, TargetEventFlagType.EventFlag, 74000325); // Loretta's Bone return dialogue
   
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_15);
    ForceAnimationPlayback(X0_4, 91020, true, false, true, 0, 1); // Cry pose
    SetEventFlag(74000324, ON); // Greirat cry pose
    EndUnconditionally(EventEndType.End);
    
    ForceAnimationPlayback(X0_4, 90970, false, false, false, 0, 1); // Squat pose
    EndUnconditionally(EventEndType.End);
    
    // Hostile
    Label1();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Siegward - Handle Quest Progression
Event(14005701, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1383); // Siegward - Stage: Well in Cathedral of the Deep
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 73500105);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1384, ON); // Siegward - Stage: Returned Armor
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1384);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1385, ON); // Siegward - Stage: Moved to Irithyll
});

// Irina - Spawn State
Event(14005720, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1295, 1299);
    BatchSetNetworkconnectedEventFlags(1295, 1299, OFF);
    SetNetworkconnectedEventFlag(1295, ON); // "Passive"
    
     // Skip Passive set if "Hostile" or Sin State: Irina (NO SIN) is present
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1296); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000066); // Sin State: Irina
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1295, 1299, OFF);
    SetNetworkconnectedEventFlag(1295, ON); // "Passive"
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1280, 1294);
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1280, ON); // "Dead"
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1295); // Goto Label 9 if "Hostile" is ON
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1281); // Quest Stage: In Firelink
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 25009550); // Given Humanity
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1282, ON); // Quest Stage: Dark Path: Boss Progress 1
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1282); // Quest Stage: Dark Path: Boss Progress 1
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 25009550); // Given Humanity
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1283, ON); // Quest Stage: Dark Path: Boss Progress 2
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1281); // Quest Stage: In Firelink
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 25009551); // Given Holy Fragments
    
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1286, ON); // Quest Stage: Holy Path: Is Firekeeper
    SetEventFlag(70000353, OFF); // Given Irina the Londor Braille Divine Tome
    SetEventFlag(70000354, OFF); // Unknown
    
    Label9();
    SetEventFlag(70000066, OFF); // Sin State: Irina
    SetEventFlag(74000352, OFF); // Wore Morne's Gauntlets
    BatchSetEventFlags(74000383, 74000392, OFF); // Reset Dark/Holy Path flags
    
    Label10();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X24_4, -1, X0_4); // Normal position
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X28_4, -1, X4_4); // Alt position
    WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, X32_4, -1, X8_4); // Firekeeper position
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1281); // Quest Stage: In Firelink
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1282); // Quest Stage: Dark Path: Boss Progress 1
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 1283); // Quest Stage: Dark Path: Boss Progress 2
    GotoIfEventFlag(Label.LABEL4, ON, TargetEventFlagType.EventFlag, 1284); // Quest Stage: Dark Path: Eygon fight
    GotoIfEventFlag(Label.LABEL5, ON, TargetEventFlagType.EventFlag, 1285); // Quest Stage: Dark Path: Eygon killed
    GotoIfEventFlag(Label.LABEL6, ON, TargetEventFlagType.EventFlag, 1286); // Quest Stage: Holy Path: Is Firekeeper
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Normal Position
    Label1();
    Label2();
    Label3();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1298); // "Killed"
    ForceAnimationPlayback(X0_4, X12_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Normal Position - Disabled + Force Treaure
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // Alt Position
    Label4();
    Label5();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1298); // "Killed"
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 14000722); // Had "First meeting"
    ForceAnimationPlayback(X4_4, X16_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    ForceAnimationPlayback(X4_4, X12_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Alt Position - Disabled + Force Treaure
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
    
    // Firekeeper Position
    Label6();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1298); // "Killed"
    ForceAnimationPlayback(X8_4, X20_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Firekeeper Position - Disabled + Force Treaure
    Label18();
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X8_4);
    EndUnconditionally(EventEndType.End);
});

// Irina - First meeting situp
Event(14005722, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000722); // Had "First meeting"
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 14000722); // Had "First meeting"
    ForceAnimationPlayback(X0_4, X4_4, false, true, false, 0, 1);
    SetEventFlag(14005722, ON);
});

// Irina - 
Event(14005723, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(X4_4, OFF);
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(X4_4, OFF);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X16_4, ON);
   
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    ChangeCharacterEnableState(X28_4, Enabled);
    SetCharacterBackreadState(X28_4, false);
    ForceAnimationPlayback(X28_4, X32_4, false, false, false, 0, 1);
   
    SaveRequest(0);
    
    SetSpeffect(X0_4, 4640);
   
    WaitFixedTimeSeconds(5);
   
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

// Irina - Unused
Event(14005725, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 0);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 0, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL20, PASS, AND_01);
    
    RotateCharacter(10000, 0, 69070, false);
    
    WaitFixedTimeFrames(1);
   
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 0, 1);
    IfCharacterHasSpeffect(AND_02, 10000, 150, false, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfEventFlag(OR_02, OFF, TargetEventFlagType.EventFlag, 0);
    IfElapsedFrames(OR_02, 89);
    IfConditionGroup(OR_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, OR_01);
   
    SkipIfConditionGroupStateCompiled(2, FAIL, AND_02);
    SetEventFlag(0, OFF);
    EndUnconditionally(EventEndType.Restart);
  
    SkipIfConditionGroupStateCompiled(3, FAIL, OR_02);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    SetEventFlag(0, OFF);
   
    EndUnconditionally(EventEndType.Restart);
   
    Label20();
    RotateCharacter(10000, 0, 0, true);
    
    WaitFixedTimeFrames(1);
   
    SetEventFlag(0, ON);
   
    IfEventFlag(OR_03, OFF, TargetEventFlagType.EventFlag, 0);
    IfCharacterHasSpeffect(AND_03, 10000, 150, false, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_03);
    
    SkipIfConditionGroupStateCompiled(3, FAIL, AND_03);
    SetEventFlag(0, OFF);
    SetEventFlag(0, OFF);
    EndUnconditionally(EventEndType.Restart);
   
    SetEventFlag(0, OFF);
    ForceAnimationPlayback(10000, 0, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

// Yoel - Spawn State
Event(14005740, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1075, 1079);
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1075, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1076); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000055); // Sin State: Yoel (NO SIN)
   
    // Skip Passive set if "Hostile" or Sin State: Yoel (NO SIN) is present
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1075, ON); // "Passive"
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1060, 1074);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1060, ON); // "Dead"
   
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1075); // Goto Label 0 if "Hostile" is ON
   
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1060); // "Dead"
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73100152); // Invited to Firelink
   
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1061, ON); // Quest Stage: In Firelink
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1061); // Quest Stage: In Firelink
    IfPlayerRemainingYoelLevelCount(AND_03, ComparisonType.LessOrEqual, 0); // Extracted all Levels
    
    // Skip if not in Firelink or levels remain
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1062, ON); // Quest Stage: Yoel Collapse
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1078, ON); // "Killed"
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1061); // Quest Stage: In Firelink
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 25001009); // Killed Pontiff Sulyvahn
   
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1064, ON); // Quest Stage: In Firelink (fail due to Catacombs)
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1078, ON); // "Killed"
   
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1060); // "Dead"
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 25001009); // Killed Pontiff Sulyvahn
   
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1063, ON); // Quest Stage: In Undead Settlement (fail due to Pontiff Sulyvahn Kill)
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1078, ON); // "Killed"
    
    // Hostility
    Label9();
    SetEventFlag(70000055, OFF); // Sin State: Yoel
    BatchSetEventFlags(74000430, 74000433, OFF);
    
    // Client State
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1061); // Quest Stage: In Firelink
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1062); // Quest Stage: Yoel Collapse
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1064); // Quest Stage: In Firelink (fail due to Pontiff Sulyvahn Kill)
   
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
   
    // Host State
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1078); // "Killed"
    EndUnconditionally(EventEndType.End);
    
    // Killed State (Normal)
    Label1();
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Killed State (Quest End)
    Label2();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    EzstateInstructionRequest(X0_4, X4_4, 1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Leonhard - Spawn State
Event(14005750, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
   
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1155, 1159);
    BatchSetNetworkconnectedEventFlags(1155, 1159, OFF);
    SetNetworkconnectedEventFlag(1155, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1156); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000059); // Sin State: Leonhard (NO SIN)
    
    // Skip Passive set if "Hostile" or ""Sin State: Leonhard" (NO SIN) is present
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1155, 1159, OFF);
    SetNetworkconnectedEventFlag(1155, ON); // "Passive"
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1140, 1154);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1140, ON); // "Dead"
   
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1155); // Goto Label 9 if "Passive" is OFF
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1140); // "Dead"
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 13000005); // Knight's Rest enabled
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 9301); // Vordt Killed
    IfConditionGroup(AND_02, PASS, OR_02);
   
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1141, ON); // Quest Stage: Vordt Killed
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1141); // Quest Stage: Vordt Killed
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000850); // Given Cracked Red Eye Orbs
   
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1142, ON); // Quest Stage: Cracked Red Eye Orbs
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1142); // Quest Stage: Cracked Red Eye Orbs
    IfPlayerHasdoesntHaveItem(AND_04, ItemType.Goods, 373, OwnershipState.Owns); // Pale Tongue
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 13100002); // Undead Settlement bonfire
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 9303); // Curse-Rotted Greatwood Killed
    IfConditionGroup(AND_04, PASS, OR_04); 
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1143, ON); // Quest Stage: Greatwood Killed
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1143); // Quest Stage: Greatwood Killed
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000851); // Want Red Eye Orb
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1144, ON); // Quest Stage: Find Red Eye Orb
    
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1144); // Quest Stage: Find Red Eye Orb
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 13000380); // Killed Darkwraith in High Wall
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1145, ON); // Quest Stage: Found Red Eye Orb
    
    // Hostility
    Label9();
    SetEventFlag(70000059, OFF); // Sin State: Leonhard (SIN)
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1155); // "Passive" is OFF
    SetEventFlag(74000870, OFF); // Made Hostile
    
    // Client State
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1141); // Quest Stage: Vordt Killed
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1143); // Quest Stage: Greatwood Killed
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1145); // Quest Stage: Found Red Eye Orb
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Host State
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1156); // "Hostile"
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1158); // "Killed"
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Hostile State
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // Killed State
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Cornyx - Spawn State
Event(14005760, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1255, 1259);
    BatchSetNetworkconnectedEventFlags(1255, 1259, OFF);
    SetNetworkconnectedEventFlag(1255, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1256); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000064); // Sin State: Cornyx (NO SIN)
    
    // Skip Passive set if "Hostile" or Sin State: Cornyx (NO SIN) is present
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1255, 1259, OFF);
    SetNetworkconnectedEventFlag(1255, ON); // "Passive"
    SetEventFlag(74000460, OFF); // Made Hostile
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1240, 1254);
    BatchSetNetworkconnectedEventFlags(1240, 1254, OFF);
    SetNetworkconnectedEventFlag(1240, ON); // "Dead"
    
    // Sin Flag
    SetEventFlag(70000064, OFF); // Sin State: Cornyx (SIN)
    
    // Client State
    Label9();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1241); // Goto Label 0 if "Is in Host World" is ON
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X4_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // Host State
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 4004735, -1, X0_4); // Move to Position
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1256); // Goto Label 0 if  "Hostile" is ON
    GotoIfEventFlag(Label.LABEL11, ON, TargetEventFlagType.EventFlag, 1258); // Goto Label 0 if  "Killed" is ON
    ForceAnimationPlayback(X0_4, 90450, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Hostile State
    Label10();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // Killed State
    Label11();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Karla - Spawn State
Event(14005780, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1275, 1279);
    BatchSetNetworkconnectedEventFlags(1275, 1279, OFF);
    SetNetworkconnectedEventFlag(1275, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1276); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000065); // Sin State: Karla (NO SIN)
    
    // Skip Passive set if "Hostile" or Sin State: Karla (NO SIN) is present
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1275, 1279, OFF);
    SetNetworkconnectedEventFlag(1275, ON); // "Passive"
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1260, 1274);
    BatchSetNetworkconnectedEventFlags(1260, 1274, OFF);
    SetNetworkconnectedEventFlag(1260, ON); // "Dead"
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1275); // Goto Label 9 if "Passive" is OFF
    
    // Sin Flag
    Label9();
    SetEventFlag(70000065, OFF); // "Sin State: Karla" (SIN)
    
    // Client State
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1261); // Goto Label 0 if "Is in Host World" is ON
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X8_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // Host State
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1278); // Goto Label 1 if "Killed" is ON
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Killed State
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Secret Warp - Fogwall
// ----------------------------------------
Event(14005800, Restart, function() {
    DeleteObjectfollowingSFX(4001840, true);
    CreateObjectfollowingSFX(4001840, 101, 3);
});

// ----------------------------------------
// Secret Warp - Gesture
// ----------------------------------------
Event(14005801, Restart, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002927, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 12511, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WarpPlayer(40, 0, 4000985);
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Secret Path - Cemetery of Ash
// ----------------------------------------
Event(14005810, Restart, function() {
    var obj_Path1 = 4001841;
    var obj_Path2 = 4001842;
    var obj_Path3 = 4001843;
    
    var ffxID = 302020;

    DeleteObjectfollowingSFX(obj_Path1, true);
    CreateObjectfollowingSFX(obj_Path1, 101, ffxID);
    
    DeleteObjectfollowingSFX(obj_Path2, true);
    CreateObjectfollowingSFX(obj_Path2, 101, ffxID);
    
    DeleteObjectfollowingSFX(obj_Path3, true);
    CreateObjectfollowingSFX(obj_Path3, 101, ffxID);
    
    WaitRandomTimeSeconds(3, 6);
    
    DeleteObjectfollowingSFX(obj_Path1, true);
    DeleteObjectfollowingSFX(obj_Path2, true);
    DeleteObjectfollowingSFX(obj_Path3, true);
    
    WaitRandomTimeSeconds(15, 30);
    
    EndUnconditionally(EventEndType.Restart);
});

// ----------------------------------------
// Secret Path - Untended Graves
// ----------------------------------------
Event(14005811, Restart, function() {
    var obj_Path1 = 4001841;
    var obj_Path2 = 4001842;
    var obj_Path3 = 4001843;
    
    DeactivateObject(obj_Path1, Disabled);
    DeactivateObject(obj_Path2, Disabled);
    DeactivateObject(obj_Path3, Disabled);
});

// ----------------------------------------
// Secret Message - CINDERS
// ----------------------------------------
Event(14005820, Restart, function() {
    var entity_group_MessageLizards = 4005950;
    var trigger_GestureZone         = 4002928;
    var param_SpEffect_Gesture      = 12510;
    
    ChangeCharacterEnableState(entity_group_MessageLizards, Disabled);
    SetCharacterAnimationState(entity_group_MessageLizards, Disabled);
    SetCharacterAIState(entity_group_MessageLizards, Disabled);
    SetCharacterGravity(entity_group_MessageLizards, Disabled);
    
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, trigger_GestureZone, 1);
    IfCharacterHasSpeffect(AND_01, 10000, param_SpEffect_Gesture, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ChangeCharacterEnableState(entity_group_MessageLizards, Enabled);
    SetCharacterAnimationState(entity_group_MessageLizards, Enabled);

    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Crow Trade
// ----------------------------------------
Event(14005821, Restart, function() {
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25008900);
    InitializeCrowTrade(ItemType.Goods, 2162, 200000, -1, 74000996); // Bone Fragment - Set 1
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25008901);
    InitializeCrowTrade(ItemType.Goods, 2162, 200010, -1, 74000996); // Bone Fragment - Set 2
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25008902);
    InitializeCrowTrade(ItemType.Goods, 2162, 200020, -1, 74000996); // Bone Fragment - Set 3
});

// ----------------------------------------
// Abyss - Access
// ----------------------------------------
Event(14005822, Restart, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 25009760);
    
    SetEventFlag(25009760, OFF);
    WarpPlayer(40, 0, 4000986);
    SetMapCeremony(40, 0, 10);
});

// ----------------------------------------
// Abyss - Warp Walls
// ----------------------------------------
Event(14005823, Restart, function() {
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4002930, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4002931, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4002932, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4002933, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    IssueShortWarpRequest(10000, TargetEntityType.Area, 4002971, -1);

    EndUnconditionally(EventEndType.Restart);
});

// ----------------------------------------
// Pot King Greg - Door
// ----------------------------------------
Event(14005825, Restart, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002200, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 12514, true, ComparisonType.Equal, 1);
    // IfCharacterHasSpeffect(AND_01, 10000, 12526, true, ComparisonType.Equal, 1); // Toast
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ForceAnimationPlayback(4001251, 0, false, false, false, 0, 1);
    
    DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
});

// ----------------------------------------
// Starting Cell - Door
// ----------------------------------------
Event(14005826, Restart, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 25009800);
    
    ForceAnimationPlayback(4001252, 0, false, false, false, 0, 1);
    
    DeactivateObjactAssignIdx(4001252, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 1, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 3, Disabled);
});

// ----------------------------------------
// Corrupted Gundyr - Setup
// ----------------------------------------
Event(14005900, Restart, function() {
    var entity_CorruptedGundyr = 4000800;
    
    var trigger_CorruptedGundyr_FogwallZone1 = 4002861;
    var trigger_CorruptedGundyr_FogwallZone2 = 4002862;
    
    var flag_CorruptedGundyr_Defeated   = 14000800;
    var flag_CorruptedGundyr_InBattle   = 14005805;
    var flag_CorruptedGundyr_InProgress = 14000801;
    
    var name_CorruptedGundyr = 207060;
    
    // Disable at init
    SetCharacterAIState(entity_CorruptedGundyr, Disabled);
    ChangeCharacterEnableState(entity_CorruptedGundyr, Disabled);
    SetCharacterAnimationState(entity_CorruptedGundyr, Disabled);
    
    // End function if Corrupted Gundyr has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_Defeated);
      
    // Disable secret path
    DeactivateObject(4001841, Disabled);
    DeactivateObject(4001842, Disabled);
    DeactivateObject(4001843, Disabled);
    
    // Enable entities
    ChangeCharacterEnableState(entity_CorruptedGundyr, Enabled);
    
    // Play initial pose
    //ForceAnimationPlayback(entity_CorruptedGundyr, 20000, true, false, false, 0, 1);
    
    // Play rise up pose once player enters arena
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_InBattle);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, trigger_CorruptedGundyr_FogwallZone1, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, trigger_CorruptedGundyr_FogwallZone2, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(flag_CorruptedGundyr_InProgress, ON);
    
    SetLockOnPoint(entity_CorruptedGundyr, 221, Disabled);
    
    //WaitFixedTimeSeconds(2);
    //ForceAnimationPlayback(entity_CorruptedGundyr, 1500, false, false, false, 0, 1);
    
    Label0();
    // Setup entities fully
    SetCharacterGravity(entity_CorruptedGundyr, Enabled);
    SetCharacterAnimationState(entity_CorruptedGundyr, Enabled);
    SetCharacterAIState(entity_CorruptedGundyr, Enabled);
    SetNetworkUpdateRate(entity_CorruptedGundyr, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_CorruptedGundyr);
    
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(entity_CorruptedGundyr, AuthorityLevel.Forced);
    
    DisplayBossHealthBar(Enabled, entity_CorruptedGundyr, 0, name_CorruptedGundyr);
    InitializeCommonEvent(20020100, 0); // Boss Start
});

// ----------------------------------------
// Corrupted Gundyr - Kill
// ----------------------------------------
Event(14005901, Default, function() {
    var entity_CorruptedGundyr = 4000800;
    
    var obj_CorruptedGundyr_Fogwall     = 4001820;
    var obj_CorruptedGundyr_BackFogwall = 4001821;
    
    var flag_CorruptedGundyr_Defeated = 14000800;
    var flag_CorruptedGundyr_InProgress = 14000801;
    
    // End function if Corrupted Gundyr has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_Defeated);
   
    IfCharacterHPRatio(MAIN, entity_CorruptedGundyr, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(entity_CorruptedGundyr, SoundType.s_SFX, 777777777);
    DeactivateObject(obj_CorruptedGundyr_Fogwall, Disabled);
    DeactivateObject(obj_CorruptedGundyr_BackFogwall, Disabled);
    WaitFixedTimeSeconds(4);
    HandleBossDefeat(entity_CorruptedGundyr);
    SetEventFlag(flag_CorruptedGundyr_Defeated, ON);
    SetEventFlag(flag_CorruptedGundyr_InProgress, OFF);
    SetEventFlag(9319, ON);
    SetEventFlag(6319, ON);
    
    InitializeCommonEvent(20020000, 25001001, 25002001, 800300060, 800300000); // Boss Kill
    
    // Enable secret path
    DeactivateObject(4001841, Enabled);
    DeactivateObject(4001842, Enabled);
    DeactivateObject(4001843, Enabled);
});


// ----------------------------------------
// Corrupted Gundyr - Fogwalls
// ----------------------------------------
Event(14005902, Restart, function() {
    var entity_CorruptedGundyr = 4000800;
    
    var obj_CorruptedGundyr_Fogwall     = 4001820;
    var obj_CorruptedGundyr_BackFogwall = 4001821;
    
    var trigger_CorruptedGundyr_FogwallZone1 = 4002861;
    var trigger_CorruptedGundyr_FogwallZone2 = 4002862;
    
    var sound_CorruptedGundyr_BGM = 4004825;
    
    var flag_CorruptedGundyr_Defeated        = 14000800;
    var flag_CorruptedGundyr_InBattle        = 14005805;
    var flag_CorruptedGundyr_ClientEnter     = 14005806;
    var flag_CorruptedGundyr_BossStart       = 14005900; // Event ID flag
    
    var param_CorruptedGundyr_ActionButton = 4001800;
    
    // Fogwall - Cemetery Side
    InitializeCommonEvent(20005800, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_Fogwall, trigger_CorruptedGundyr_FogwallZone1, flag_CorruptedGundyr_InBattle, param_CorruptedGundyr_ActionButton, entity_CorruptedGundyr, 0, trigger_CorruptedGundyr_FogwallZone1);
    InitializeCommonEvent(20005801, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_Fogwall, trigger_CorruptedGundyr_FogwallZone1, flag_CorruptedGundyr_InBattle, param_CorruptedGundyr_ActionButton, flag_CorruptedGundyr_ClientEnter);
    InitializeCommonEvent(20005820, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_Fogwall, 3, 0);
    InitializeCommonEvent(20005810, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_Fogwall, trigger_CorruptedGundyr_FogwallZone1, 10000);
    
    // Fogwall - Firelink Side
    InitializeCommonEvent(20005800, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_BackFogwall, trigger_CorruptedGundyr_FogwallZone2, flag_CorruptedGundyr_InBattle, param_CorruptedGundyr_ActionButton, entity_CorruptedGundyr, 0, trigger_CorruptedGundyr_FogwallZone2);
    InitializeCommonEvent(20005801, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_BackFogwall, trigger_CorruptedGundyr_FogwallZone2, flag_CorruptedGundyr_InBattle, param_CorruptedGundyr_ActionButton, flag_CorruptedGundyr_ClientEnter);
    InitializeCommonEvent(20005820, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_BackFogwall, 3, 0);
    InitializeCommonEvent(20005810, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_BackFogwall, trigger_CorruptedGundyr_FogwallZone2, 10000);
    
    // Corrupted Gundyr - Boss Sound State
    InitializeCommonEvent(20001834, flag_CorruptedGundyr_Defeated, flag_CorruptedGundyr_InBattle, flag_CorruptedGundyr_BossStart, sound_CorruptedGundyr_BGM);
});

// ----------------------------------------
// Corrupted Gundyr - Invalidation
// ----------------------------------------
Event(14005903, Restart, function() {
    var trigger_CorruptedGundyr_FogwallZone1 = 4002861;
    var trigger_CorruptedGundyr_FogwallZone2 = 4002862;
    
    var entity_PlayerPoint = 4000980;
    var entity_SpawnPoint  = 4002970;
    
    var flag_CorruptedGundyr_Defeated   = 14000800;
    var flag_CorruptedGundyr_InProgress = 14000801;
    
    var mapID   = 40;
    var blockID = 0;
    var ceremonyID = 0
    
    // End function if boss has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_Defeated);
    // End function if not started
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_InProgress);
    
    // Warp player outside of arena if in invalidation zone
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_InProgress);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, trigger_CorruptedGundyr_FogwallZone1, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, trigger_CorruptedGundyr_FogwallZone2, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    SkipIfConditionGroupStateUncompiled(7, FAIL, AND_01);
    
    SetEventFlag(flag_CorruptedGundyr_InProgress, OFF);
    SetPlayerRespawnPoint(entity_SpawnPoint);
    SetMapCeremony(mapID, blockID, ceremonyID);
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    // Fallback
    SetEventFlag(flag_CorruptedGundyr_InProgress, OFF);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Corrupted Gundyr - Dark Tears
// ----------------------------------------
Event(14005904, Restart, function() {
    var entity_CorruptedGundyr = 4000800;
    
    var flag_CorruptedGundyr_Defeated   = 14000800;
    var flag_CorruptedGundyr_InProgress = 14000801;
    var flag_CorruptedGundyr_InBattle   = 14005805;
    
    var flag_RandomFlagStart = 14006000;
    var flag_RandomFlagEnd   = 14006012;
    
    // End function if boss has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_Defeated);
    
    // Wait for boss to start
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_InBattle);
    
    // Boss is below 75% HP
    IfCharacterHPRatio(MAIN, entity_CorruptedGundyr, ComparisonType.Less, 0.75, ComparisonType.Equal, 1);
    
    // Fire bullet at random location
    BatchSetEventFlags(flag_RandomFlagStart, flag_RandomFlagEnd, OFF);
    RandomlySetEventFlagInRange(flag_RandomFlagStart, flag_RandomFlagEnd, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006000);
    ShootBullet(entity_CorruptedGundyr, 4002830, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006001);
    ShootBullet(entity_CorruptedGundyr, 4002831, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006002);
    ShootBullet(entity_CorruptedGundyr, 4002832, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006003);
    ShootBullet(entity_CorruptedGundyr, 4002833, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006004);
    ShootBullet(entity_CorruptedGundyr, 4002834, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006005);
    ShootBullet(entity_CorruptedGundyr, 4002835, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006006);
    ShootBullet(entity_CorruptedGundyr, 4002836, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006007);
    ShootBullet(entity_CorruptedGundyr, 4002837, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006008);
    ShootBullet(entity_CorruptedGundyr, 4002838, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006009);
    ShootBullet(entity_CorruptedGundyr, 4002839, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006010);
    ShootBullet(entity_CorruptedGundyr, 4002840, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006011);
    ShootBullet(entity_CorruptedGundyr, 4002841, -1, 251100950, 0, 0, 0);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 14006012);
    ShootBullet(entity_CorruptedGundyr, 4002842, -1, 251100950, 0, 0, 0);
    
    // Base cooldown
    WaitFixedTimeSeconds(0.5);
    
    // Apply additional cooldown if boss is above 60%
    IfCharacterHPRatio(AND_01, entity_CorruptedGundyr, ComparisonType.Less, 0.5, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    WaitFixedTimeSeconds(2.0);
    
    // Apply additional cooldown if boss is above 40%
    IfCharacterHPRatio(AND_02, entity_CorruptedGundyr, ComparisonType.Less, 0.25, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_02);
    WaitFixedTimeSeconds(2.0);
    
    // Apply additional cooldown if boss is above 20%
    IfCharacterHPRatio(AND_03, entity_CorruptedGundyr, ComparisonType.Less, 0.2, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_03);
    WaitFixedTimeSeconds(1.0);
    
    // Apply additional cooldown if boss is above 10%
    IfCharacterHPRatio(AND_04, entity_CorruptedGundyr, ComparisonType.Less, 0.1, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_04);
    WaitFixedTimeSeconds(1.0);
    
    EndUnconditionally(EventEndType.Restart);
});

// ----------------------------------------
// Game Configuration
// ----------------------------------------
Event(14005910, Restart, function() {
    var entity_TalkEntity   = 4000855;
    var flag_GameConfigured = 25009800;
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, flag_GameConfigured);
    SetEventFlag(25009810, ON); // Enable Standard Mode by default during configuration stage
    
    // Remove talk entity once Journey is configured
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_GameConfigured);
    
    ChangeCharacterEnableState(entity_TalkEntity, Disabled);
});

// ----------------------------------------
// Game Configuration - Fallback 
// ----------------------------------------
Event(14005911, Restart, function() {
    // If in Firelink and configuration hasn't been set (old save)
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 25009800);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002940, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    // Set configuration to Standard mode
    SetEventFlag(25009800, ON);
    SetEventFlag(25009810, ON);
});

// ----------------------------------------
// The Marauder - Setup
// ----------------------------------------
Event(14005890, Restart, function() {
    var entity_Marauder = 4000850;
    
    var trigger_Marauder_FogwallZone = 4002821;
    
    var flag_Marauder_Defeated        = 14000850;
    var flag_Marauder_InBattle        = 14005855;
    var flag_Marauder_InProgress      = 14000851;
    var flag_Marauder_Activated       = 14000852;
    var flag_Marauder_TalkDisabled    = 25009740;
    var flag_Marauder_ActivatedInMenu = 14000853;
    
    var name_Marauder = 207100;
    
    // Disable at init
    SetCharacterAIState(entity_Marauder, Disabled);
    ChangeCharacterEnableState(entity_Marauder, Disabled);
    SetCharacterAnimationState(entity_Marauder, Disabled);
    
    SetEventFlag(flag_Marauder_TalkDisabled, OFF);
    
    // End function if The Marauder has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Marauder_Defeated);
    
    SetSpEffect(entity_Marauder, 160742200);
    
    // Enable entities
    ChangeCharacterEnableState(entity_Marauder, Enabled);
    SetCharacterAnimationState(entity_Marauder, Enabled);
    
    // Play initial pose
    ForceAnimationPlayback(entity_Marauder, 700, true, false, false, 0, 1);
    
    // Play rise up pose once player enters arena
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Marauder_Activated);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Marauder_ActivatedInMenu);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(flag_Marauder_Activated, OFF);
    SetEventFlag(flag_Marauder_InProgress, ON);
    SetEventFlag(flag_Marauder_InBattle, ON);
    SetEventFlag(flag_Marauder_TalkDisabled, ON);
    
    ClearSpEffect(entity_Marauder, 160742200);
    
    ForceAnimationPlayback(entity_Marauder, 1700, false, false, false, 0, 1);
    
    Label0();
    // Setup entities fully
    SetCharacterGravity(entity_Marauder, Enabled);
    SetCharacterAnimationState(entity_Marauder, Enabled);
    SetCharacterAIState(entity_Marauder, Enabled);
    SetNetworkUpdateRate(entity_Marauder, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_Marauder);
    
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(entity_Marauder, AuthorityLevel.Forced);
    
    InitializeCommonEvent(20020134, 0); // Boss Start
    
    WaitFixedTimeSeconds(2.0);
    
    DisplayBossHealthBar(Enabled, entity_Marauder, 0, name_Marauder);
});

// ----------------------------------------
// The Marauder - Kill
// ----------------------------------------
Event(14005891, Default, function() {
    var entity_Marauder = 4000850;
    
    var obj_Marauder_Fogwall     = 4001822;
    var obj_Marauder_BackFogwall = 4001823;
    var obj_Marauder_SideFogwall = 4001824;
    
    var flag_Marauder_Defeated   = 14000850;
    var flag_Marauder_InProgress = 14000851;
    
    // End function if The Marauder has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Marauder_Defeated);
   
    IfCharacterHPRatio(MAIN, entity_Marauder, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(entity_Marauder, SoundType.s_SFX, 777777777);
    DeactivateObject(obj_Marauder_Fogwall, Disabled);
    DeactivateObject(obj_Marauder_BackFogwall, Disabled);
    DeactivateObject(obj_Marauder_SideFogwall, Disabled);
    WaitFixedTimeSeconds(4);
    HandleBossDefeat(entity_Marauder);
    SetEventFlag(flag_Marauder_Defeated, ON);
    SetEventFlag(flag_Marauder_InProgress, OFF);
    SetEventFlag(9348, ON);
    SetEventFlag(6348, ON);
    
    InitializeCommonEvent(20020000, 25001035, 25002035, 800300020, 800300030); // Boss Kill
});


// ----------------------------------------
// The Marauder - Fogwalls
// ----------------------------------------
Event(14005892, Restart, function() {
    var obj_Marauder_Fogwall     = 4001822;
    var obj_Marauder_BackFogwall = 4001823;
    var obj_Marauder_SideFogwall = 4001824;
    
    var sound_Marauder_BGM = 4004820;

    var trigger_Marauder_FogwallZone = 4002821;
    
    var flag_Marauder_Defeated    = 14000850;
    var flag_Marauder_InBattle    = 14005855;
    var flag_Marauder_ClientEnter = 14005856;
    var flag_Marauder_BossStart   = 14005890; // Event ID flag
    
    var param_Marauder_ActionButton = 4001850;
    
    // The Marauder - Boss Sound State
    InitializeCommonEvent(20001834, flag_Marauder_Defeated, flag_Marauder_InBattle, flag_Marauder_BossStart, sound_Marauder_BGM);
});

// ----------------------------------------
// The Marauder - Invalidation
// ----------------------------------------
Event(14005893, Restart, function() {
    var trigger_Marauder_FogwallZone = 4002821;
    
    var entity_PlayerPoint = 4000987;
    var entity_SpawnPoint  = 4002972;
    
    var flag_Marauder_Defeated   = 14000850;
    var flag_Marauder_InProgress = 14000851;
    
    var mapID   = 40;
    var blockID = 0;
    var ceremonyID = 0
    
    // End function if boss has already been defeated
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Marauder_Defeated);
    // End function if not started
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_Marauder_InProgress);
    
    // Warp player outside of arena if in invalidation zone
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Marauder_InProgress);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, trigger_Marauder_FogwallZone, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    SkipIfConditionGroupStateUncompiled(7, FAIL, AND_01);
    
    SetEventFlag(flag_Marauder_InProgress, OFF);
    SetPlayerRespawnPoint(entity_SpawnPoint);
    SetMapCeremony(mapID, blockID, ceremonyID);
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    // Fallback
    SetEventFlag(flag_Marauder_InProgress, OFF);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// The Marauder - Fogwall Monitor
// ----------------------------------------
Event(14005894, Restart, function() {
    var flag_Marauder_Defeated   = 14000850;
    var flag_Marauder_InProgress = 14000851;
    var flag_Marauder_Activated  = 14000852;
    var flag_Marauder_ActivatedInMenu = 14000853;
    
    var obj_Marauder_Fogwall     = 4001822;
    var obj_Marauder_BackFogwall = 4001823;
    var obj_Marauder_SideFogwall = 4001824;
    
    DeactivateObject(obj_Marauder_Fogwall, Disabled);
    DeactivateObject(obj_Marauder_BackFogwall, Disabled);
    DeactivateObject(obj_Marauder_SideFogwall, Disabled);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Marauder_Defeated);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Marauder_Activated);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Marauder_ActivatedInMenu);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    // Enable fogwalls
    DeactivateObject(obj_Marauder_Fogwall, Enabled);
    DeactivateObject(obj_Marauder_BackFogwall, Enabled);
    DeactivateObject(obj_Marauder_SideFogwall, Enabled);
    CreateObjectfollowingSFX(obj_Marauder_Fogwall, 101, 3);
    CreateObjectfollowingSFX(obj_Marauder_BackFogwall, 101, 3);
    CreateObjectfollowingSFX(obj_Marauder_SideFogwall, 101, 3);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_Marauder_Defeated);
    
    DeactivateObject(obj_Marauder_Fogwall, Disabled);
    DeactivateObject(obj_Marauder_BackFogwall, Disabled);
    DeactivateObject(obj_Marauder_SideFogwall, Disabled);
    DeleteObjectfollowingSFX(obj_Marauder_Fogwall, true);
    DeleteObjectfollowingSFX(obj_Marauder_BackFogwall, true);
    DeleteObjectfollowingSFX(obj_Marauder_SideFogwall, true);
});

// ----------------------------------------
// The Marauder - Boss Activation
// ----------------------------------------
Event(14005899, Restart, function() {
    var flag_Marauder_Defeated   = 14000850;
    var flag_Marauder_InProgress = 14000851;
    var flag_Marauder_Activated  = 14000852;
    
    // Reset on reload
    SetEventFlag(14000852, OFF);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, flag_Marauder_Defeated);
    
    // Enable automatically if in Gauntlet Mode
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009813);
    SetEventFlag(14000852, ON);
    
    // Enable Marauder once all the Black Knights are dead
    IfCharacterHPRatio(AND_01, 4000650, ComparisonType.LessOrEqual, 0.0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, 4000651, ComparisonType.LessOrEqual, 0.0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, 4000652, ComparisonType.LessOrEqual, 0.0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, 4000653, ComparisonType.LessOrEqual, 0.0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, 4000654, ComparisonType.LessOrEqual, 0.0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, 4000655, ComparisonType.LessOrEqual, 0.0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, 4000656, ComparisonType.LessOrEqual, 0.0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(14000852, ON);
    
    DisplayMessage(99080000, 1);
});

// ----------------------------------------
// Spurned Shade - Setup
// ----------------------------------------
Event(14005895, Restart, function() {
    var entity_SpurnedShade = 4000895;

    var name_SpurnedShade = 204015;
    
    var flag_Spurnedshade_InProgress = 25009761;
    
    // Disable at init
    ChangeCharacterEnableState(entity_SpurnedShade, Disabled);
    SetCharacterAnimationState(entity_SpurnedShade, Disabled);
    SetCharacterAIState(entity_SpurnedShade, Disabled);
    
    // Skip boss fight if using Screenshot tool
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 25008800);
    
    // Start once the player is in the arena
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 4002935, 1);
    
    SetCharacterAIState(entity_SpurnedShade, Enabled);
    ChangeCharacterEnableState(entity_SpurnedShade, Enabled);
    SetCharacterAnimationState(entity_SpurnedShade, Enabled);
    SetCharacterGravity(entity_SpurnedShade, Enabled);
    SetNetworkUpdateRate(entity_SpurnedShade, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_SpurnedShade);
    
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(entity_SpurnedShade, AuthorityLevel.Forced);
    
    WaitFixedTimeSeconds(2.0);
    
    SetEventFlag(flag_Spurnedshade_InProgress, ON);
    
    DisplayBossHealthBar(Enabled, entity_SpurnedShade, 0, name_SpurnedShade);
    
    Label0();
    SetEventFlag(25008800, OFF);
});

// ----------------------------------------
// Spurned Shade - Kill
// ----------------------------------------
Event(14005896, Default, function() {
    var entity_SpurnedShade = 4000895;
    
    var flag_Spurnedshade_InProgress = 25009761;
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Spurnedshade_InProgress);
    IfCharacterHPRatio(AND_01, entity_SpurnedShade, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WaitFixedTimeSeconds(1);
    PlaySE(entity_SpurnedShade, SoundType.s_SFX, 777777777);

    WaitFixedTimeSeconds(4);
    HandleBossDefeat(entity_SpurnedShade);
    
    SetEventFlag(flag_Spurnedshade_InProgress, OFF);
    AwardItemLot(91000);
    
    WaitFixedTimeSeconds(4);
    
    SetMapCeremony(40, 0, 0);
    WarpPlayer(40, 0, 4000970);
});

// ----------------------------------------
// Spurned Shade - Invalidation
// ----------------------------------------
Event(14005897, Restart, function() {
    var trigger_SpurnedShade_InvalidationZone = 4002935;
    
    var entity_PlayerPoint = 4000970;
    var entity_SpawnPoint  = 4002950;
    
    var flag_Spurnedshade_InProgress = 25009761;
    
    var mapID   = 40;
    var blockID = 0;
    var ceremonyID = 0
    
    // End function if not started
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, flag_Spurnedshade_InProgress);
    
    // Warp player outside of arena if in invalidation zone
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, flag_Spurnedshade_InProgress);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, trigger_SpurnedShade_InvalidationZone, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    SkipIfConditionGroupStateUncompiled(7, FAIL, AND_01);
    
    SetEventFlag(flag_Spurnedshade_InProgress, OFF);
    SetPlayerRespawnPoint(entity_SpawnPoint);
    SetMapCeremony(mapID, blockID, ceremonyID);
    WaitFixedTimeFrames(1);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    WarpPlayer(mapID, blockID, entity_PlayerPoint);
    
    // Fallback
    SetEventFlag(flag_Spurnedshade_InProgress, OFF);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Spurned Shade - Ceremony
// ----------------------------------------
Event(14005898, Restart, function() {
    var flag_Spurnedshade_InProgress = 25009761;
    
    MoveBloodstainAndDroppedItems(4002935, 4002936);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, flag_Spurnedshade_InProgress);
    IfCharacterHPRatio(MAIN, 10000, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);

    WaitFixedTimeSeconds(5.0);
    
    SetMapCeremony(40, 0, 0);
    
    EndUnconditionally(EventEndType.End);
});

// ----------------------------------------
// Debug
// ----------------------------------------
Event(14006000, Restart, function() {
    ChangeCharacterEnableState(4000899, Disabled);
    SetCharacterAnimationState(4000899, Disabled);
    
    EndUnconditionally(EventEndType.End);
});
