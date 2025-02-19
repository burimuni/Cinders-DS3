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
    InitializeCommonEvent(20005500, 15100850, 15100001, 5100951, 5101951); // Darkeater Midir
    RegisterBonfire(15100000, 5101950, 5, 180, 0); // Church of Filianore
    RegisterBonfire(15100002, 5101952, 5, 180, 0); // Mausoleum Lookout
    RegisterBonfire(15100004, 5101954, 5, 180, 0); // Ringed City Streets
    RegisterBonfire(15100005, 5101955, 5, 180, 0); // Shared Grave
    
    //-----------------------------------
    // Halflight
    //-----------------------------------
    InitializeEvent(0, 15105800, 0); // Kill
    InitializeEvent(0, 15105810, 0); // Setup
    InitializeEvent(0, 15105811, 0); // Start
    InitializeEvent(0, 15105812, 0); // Start
    InitializeEvent(0, 15105813, 0); // Start
    InitializeEvent(0, 15105814, 0); // Painting Guardian Setup
    InitializeEvent(0, 15105815, 0); // Phantom Adjustments
    
    // Holy Soulmass - Phantom Adjusted
    InitializeEvent(0, 15105920, 0, 20, 9800, 9801, 9802, 9803, 10000, 10001, 10002, 10003);
    InitializeEvent(1, 15105920, 20, 30, 9810, 9811, 9812, 9813, 10010, 10011, 10012, 10013);
    InitializeEvent(2, 15105920, 30, 40, 9820, 9821, 9822, 9823, 10020, 10021, 10022, 10023);
    InitializeEvent(3, 15105920, 40, 50, 9830, 9831, 9832, 9833, 10030, 10031, 10032, 10033);
    InitializeEvent(4, 15105920, 50, 60, 9840, 9841, 9842, 9843, 10040, 10041, 10042, 10043);
    InitializeEvent(5, 15105920, 60, 70, 9850, 9851, 9852, 9853, 10050, 10051, 10052, 10053);
    InitializeEvent(6, 15105920, 70, 80, 9860, 9861, 9862, 9863, 10060, 10061, 10062, 10063);
    InitializeEvent(7, 15105920, 80, 90, 9870, 9871, 9872, 9873, 10070, 10071, 10072, 10073);
    InitializeEvent(8, 15105920, 90, 100, 9880, 9881, 9882, 9883, 10080, 10081, 10082, 10083);
    InitializeEvent(9, 15105920, 100, 120, 9890, 9891, 9892, 9893, 10090, 10091, 10092, 10093);
    InitializeEvent(10, 15105920, 120, 150, 9900, 9901, 9902, 9903, 10100, 10101, 10102, 10103);
    InitializeEvent(11, 15105920, 150, 180, 9910, 9911, 9912, 9913, 10110, 10111, 10112, 10113);
    InitializeEvent(12, 15105920, 180, 230, 9920, 9921, 9922, 9923, 10120, 10121, 10122, 10123);
    InitializeEvent(13, 15105920, 230, 280, 9930, 9931, 9932, 9933, 10130, 10131, 10132, 10133);
    InitializeEvent(14, 15105920, 280, 350, 9940, 9941, 9942, 9943, 10140, 10141, 10142, 10143);
    InitializeEvent(15, 15105920, 350, 450, 9950, 9951, 9952, 9953, 10150, 10151, 10152, 10153);
    InitializeEvent(16, 15105920, 450, 600, 9960, 9961, 9962, 9963, 10160, 10161, 10162, 10163);
    InitializeEvent(17, 15105920, 600, 750, 9970, 9971, 9972, 9973, 10170, 10171, 10172, 10173);
    InitializeEvent(18, 15105920, 750, 900, 9980, 9981, 9982, 9983, 10180, 10181, 10182, 10183);
    
    // Ritual Spears - Phantom Adjusted
    InitializeEvent(0, 15105940, 0, 20, 10200, 10400);
    InitializeEvent(1, 15105940, 20, 30, 10205, 10405);
    InitializeEvent(2, 15105940, 30, 40, 10210, 10410);
    InitializeEvent(3, 15105940, 40, 50, 10215, 10415);
    InitializeEvent(4, 15105940, 50, 60, 10220, 10420);
    InitializeEvent(5, 15105940, 60, 70, 10225, 10425);
    InitializeEvent(6, 15105940, 70, 80, 10230, 10430);
    InitializeEvent(7, 15105940, 80, 90, 10235, 10435);
    InitializeEvent(8, 15105940, 90, 100, 10240, 10440);
    InitializeEvent(9, 15105940, 100, 120, 10245, 10445);
    InitializeEvent(10, 15105940, 120, 150, 10250, 10450);
    InitializeEvent(11, 15105940, 150, 180, 10255, 10455);
    InitializeEvent(12, 15105940, 180, 230, 10260, 10460);
    InitializeEvent(13, 15105940, 230, 280, 10265, 10465);
    InitializeEvent(14, 15105940, 280, 350, 10270, 10470);
    InitializeEvent(15, 15105940, 350, 450, 10275, 10475);
    InitializeEvent(16, 15105940, 450, 600, 10280, 10480);
    InitializeEvent(17, 15105940, 600, 750, 10285, 10485);
    InitializeEvent(18, 15105940, 750, 900, 10290, 10490);
    
    // Ritual Spears - Phantom Adjusted
    InitializeEvent(0, 15105960, 0, 20, 10200, 10400, 15100724);
    InitializeEvent(1, 15105960, 20, 30, 10205, 10405, 15100724);
    InitializeEvent(2, 15105960, 30, 40, 10210, 10410, 15100724);
    InitializeEvent(3, 15105960, 40, 50, 10215, 10415, 15100724);
    InitializeEvent(4, 15105960, 50, 60, 10220, 10420, 15100724);
    InitializeEvent(5, 15105960, 60, 70, 10225, 10425, 15100724);
    InitializeEvent(6, 15105960, 70, 80, 10230, 10430, 15100724);
    InitializeEvent(7, 15105960, 80, 90, 10235, 10435, 15100724);
    InitializeEvent(8, 15105960, 90, 100, 10240, 10440, 15100724);
    InitializeEvent(9, 15105960, 100, 120, 10245, 10445, 15100724);
    InitializeEvent(10, 15105960, 120, 150, 10250, 10450, 15100724);
    InitializeEvent(11, 15105960, 150, 180, 10255, 10455, 15100724);
    InitializeEvent(12, 15105960, 180, 230, 10260, 10460, 15100724);
    InitializeEvent(13, 15105960, 230, 280, 10265, 10465, 15100724);
    InitializeEvent(14, 15105960, 280, 350, 10270, 10470, 15100724);
    InitializeEvent(15, 15105960, 350, 450, 10275, 10475, 15100724);
    InitializeEvent(16, 15105960, 450, 600, 10280, 10480, 15100724);
    InitializeEvent(17, 15105960, 600, 750, 10285, 10485, 15100724);
    InitializeEvent(18, 15105960, 750, 900, 10290, 10490, 15100724);
    
    InitializeEvent(0, 15105820, 0); // Halflight - Allow Invasion in Location
    
    // Adjustment X based on Phantom HP
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    InitializeEvent(0, 15105830, 0);
    
    InitializeEvent(0, 15105845, 0); // Unknown
    InitializeEvent(0, 15105846, 0); // Unknown
    InitializeEvent(0, 15105847, 0); // Unknown
    InitializeEvent(0, 15105831, 0); // Unknown
    InitializeEvent(0, 15105849, 0); // Common Setup
    
    //-----------------------------------
    // Darkeater Midir
    //-----------------------------------
    InitializeEvent(0, 15105850, 0); // Kill
    InitializeEvent(0, 15105860, 0); // Setup
    InitializeEvent(0, 15105861, 0); // Bridge Encounter
    InitializeEvent(0, 15105862, 0); // Midir Head Stagger
    InitializeEvent(0, 15105888, 0); // Return Phantoms if in Midir arena
    InitializeEvent(0, 15105889, 0); // Common Setup
    
    InitializeCommonEvent(20005840, 5101850); // Handle Fog Wall for Player
    InitializeCommonEvent(20005841, 5101850); // Handle Fog Wall for Client Player
    
    InitializeEvent(0, 15105890, 0); // Unknown - Boss Reset?
    InitializeEvent(0, 15105895, 0);
    InitializeEvent(0, 15105201, 0); // Darkeater Midir (Bridge) - Setup
    InitializeEvent(0, 15105212, 0);
    InitializeEvent(0, 15105232, 0);
    InitializeEvent(0, 15105234, 0);
    InitializeEvent(0, 15105235, 0);
    InitializeEvent(0, 15105220, 0);
    InitializeEvent(0, 15105221, 0);
    InitializeEvent(0, 15105237, 0);
    InitializeEvent(0, 15105238, 0);
    
    //-----------------------------------
    // Judicators
    //-----------------------------------
    InitializeEvent(0, 15105300, 0); // Setup Judicators
    InitializeEvent(0, 15105301, 0); // Judicator (Gauntlet) - Detect Player in Regions
    InitializeEvent(0, 15105302, 0); // Judicator (Swamp) - Detect Player in Regions
    InitializeEvent(0, 15105303, 0); // Judicator (Purging Monument) - Detect Player in Regions
    InitializeEvent(0, 15105310, 5100300, 5100301);
    InitializeEvent(1, 15105310, 5100310, 5100311);
    InitializeEvent(2, 15105310, 5100320, 5100321);
    InitializeEvent(0, 15105350, 15105355, 16443, 0, 5102309, 0, 0, 0);
    InitializeEvent(1, 15105350, 15105356, 16444, 0, 5102325, 5102326, 0, 0);
    InitializeEvent(2, 15105350, 15105357, 16443, 0, 5102309, 0, 0, 0);
    InitializeEvent(4, 15105350, 15105358, 16444, 0, 5102325, 5102326, 0, 0);
    InitializeEvent(0, 15105340, 5100300, 16288, 1125515264, 5102305, 5102306, 0, 0, 0);
    InitializeEvent(1, 15105340, 5100310, 16403, 1132068864, 5102315, 0, 0, 0, 0);
    InitializeEvent(2, 15105340, 5100320, 16413, 1112014848, 5102325, 5102326, 5102327, 0, 0);
    InitializeEvent(0, 15105305, 0);
    InitializeCommonEvent(20005132, 5100310, 1116471296, 5102310); // Judicator (Swamp) - Wakeup
    InitializeCommonEvent(20005130, 5100320, 1106247680, 5102320); // Judicator (Purging Monument) - Wakeup
    
    //-----------------------------------
    // Ringed Knight
    //-----------------------------------
    InitializeCommonEvent(20005114, 5100242, 5102242, 1067030938);  // Ringed Knight - Delayed Wakeup
    InitializeCommonEvent(20005132, 5100243, 1077936128, 5102243);  // Ringed Knight - Wakeup
    InitializeCommonEvent(20005132, 5100244, 1077936128, 5102243);  // Ringed Knight - Wakeup
    InitializeCommonEvent(20005132, 5100245, 1077936128, 5102245);  // Ringed Knight - Wakeup
    InitializeCommonEvent(20005132, 5100246, 1092616192, 5102246);  // Ringed Knight - Wakeup
    InitializeCommonEvent(20005119, 5100247, 5102247, 5102248, 5102254, 0, 0, 0, 0); // Ringed Knight - Patrol Leader Setup
    InitializeCommonEvent(20005132, 5100249, 1090519040, 5102249);  // Ringed Knight - Wakeup
    InitializeCommonEvent(20005132, 5100250, 1077936128, 5102250);  // Ringed Knight - Wakeup
    InitializeCommonEvent(20005132, 5100251, 1077936128, 5102251);  // Ringed Knight - Wakeup
    InitializeCommonEvent(20005132, 5100252, 1077936128, 5102252);  // Ringed Knight - Wakeup
    InitializeCommonEvent(20005132, 5100253, 1077936128, 5102253);  // Ringed Knight - Wakeup
    InitializeEvent(0, 15105460, 5100252, 5102252, 0, 0, 0, 0);     // Ringed Knight - Network Update
    InitializeEvent(1, 15105460, 5100253, 5102253, 0, 0, 0, 0);     // Ringed Knight - Network Update
    
    //-----------------------------------
    // Harald Knight
    //-----------------------------------
    InitializeCommonEvent(20005219, 5100260, 701, 1701, 1077936128, 5102260, 1088421888);   // Harald Knight - Setup Gravity
    InitializeCommonEvent(20005132, 5100261, 1106247680, 5102261);                          // Harald Knight - Wakeup
    InitializeCommonEvent(20005132, 5100263, 1106247680, 5102261);                          // Harald Knight - Wakeup
    InitializeEvent(0, 15105470, 5100260, 5102269, 0, 0, 0, 0);                             // Harald Knight - Network Update
    InitializeEvent(1, 15105470, 5100261, 5102265, 5102266, 0, 0, 0);                       // Harald Knight - Network Update
    InitializeEvent(3, 15105470, 5100263, 5102265, 5102266, 5102267, 5102268, 0);           // Harald Knight - Network Update
    
    //-----------------------------------
    // Hollow Vagabond
    //-----------------------------------
    InitializeCommonEvent(20005202, 5100400, 707, 20005, 5102400);              // Hollow Vagabond - Setup Hang
    InitializeCommonEvent(20005120, 5100401, 1077936128);                       // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005205, 5100402, 704, 1704, 5102402, 1084227584);   // Hollow Vagabond - Setup Hang
    InitializeCommonEvent(20005205, 5100403, 707, 1707, 5102403, 1084227584);   // Hollow Vagabond - Setup Hang
    InitializeCommonEvent(20005205, 5100404, 704, 1704, 5102403, 0);            // Hollow Vagabond - Setup Hang
    InitializeCommonEvent(20005111, 5100405, 20003, 5102401);                   // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005110, 5100406, 5102405);                          // Hollow Vagabond - Wakeup
    InitializeEvent(0, 15105440, 0);                                            // Hollow Vagabond - Force Run in Area
    InitializeCommonEvent(20005205, 5100407, 707, 20005, 5102409, 1045220557);  // Hollow Vagabond - Setup Hang
    InitializeCommonEvent(20005111, 5100408, 3006, 5102404);                    // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005210, 5100409, 701, 1701, 1077936128);            // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005205, 5100410, 707, 20005, 5102406, 0);           // Hollow Vagabond - Setup Hang
    InitializeCommonEvent(20005110, 5100411, 5102411);                          // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005212, 5100412, 701, 1701, 1073741824, 5102411);   // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005212, 5100413, 701, 1701, 1073741824, 5102411);   // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005205, 5100414, 707, 20005, 5102412, 1077936128);  // Hollow Vagabond - Setup Hang
    InitializeCommonEvent(20005134, 5100415, 3002, 1065353216, 5102412);        // Hollow Vagabond - Setup Hang
    InitializeCommonEvent(20005227, 5100416, 701, 1701, 1092406477, 1073741824);// Hollow Vagabond - Setup Gravity
    //InitializeCommonEvent(20005134, 5100417, 3002, 1065353216, 5102414);        // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005134, 5100418, 3002, 1077936128, 5102415);        // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005217, 5100419, 703, 20001, 1251718814, 0);        // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005213, 5100422, 701, 1701, 1065353216, 5102418);   // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005221, 5100423, 701, 1701, 1086324736);            // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005207, 5100424, 703, 20001, 5102417, 1073741824, 1704, 5102416, 1073741824); // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005207, 5100425, 707, 20005, 5102417, 1077936128, 1708, 5102416, 1077936128); // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005132, 5100426, 1077936128, 5102416);              // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005210, 5100428, 701, 1701, 1073741824);            // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005133, 5100432, 3002, 1077936128, 5102419);        // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005207, 5100434, 707, 20005, 5102421, 0, 1708, 5102428, 1077936128); // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005214, 5100435, 701, 1701, 1056964608);            // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005214, 5100436, 701, 1701, 1056964608);            // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005202, 5100437, 701, 1701, 5102424);               // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005202, 5100438, 707, 20005, 5102425);              // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005219, 5100439, 703, 20001, 1073741824, 5102433, 1056964608); // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005119, 5100440, 5102431, 5102432, 0, 0, 0, 0, 0);  // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005207, 5100441, 704, 20001, 5102426, 1077936128, 1704, 5102427, 0); // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005215, 5100442, 707, 1707, 1065353216, 0);         // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005221, 5100444, 701, 1701, 1065353216);            // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005221, 5100445, 701, 1701, 1065353216);            // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005221, 5100446, 701, 1701, 1065353216);            // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005221, 5100447, 701, 1701, 1065353216);            // Hollow Vagabond - Wakeup
    //InitializeCommonEvent(20005221, 5100448, 701, 1701, 1065353216);            // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005207, 5100449, 704, 20001, 5102429, 1077936128, 1704, 5102430, 0); // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005221, 5100461, 701, 1701, 1086324736);            // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005205, 5100462, 707, 20005, 5102440, 1082130432);  // Hollow Vagabond - Wakeup
    InitializeCommonEvent(20005120, 5100469, 1103626240);                       // Hollow Vagabond - Wakeup
    
    //-----------------------------------
    // Hollow Cleric
    //-----------------------------------
    InitializeCommonEvent(20005119, 5100501, 5102451, 5102454, 0, 0, 0, 0, 0);  // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005331, 5100501);                                   // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005132, 5100502, 1065353216, 5102451);              // Hollow Cleric - Wakeup
    //InitializeCommonEvent(20005220, 5100503, 700, 1700);                        // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005220, 5100504, 700, 1700);                        // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005132, 5100506, 1065353216, 5102451);              // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005331, 5100506);                                   // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005132, 5100518, 1090519040, 5102461);              // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005219, 5100514, 700, 1700, 1073741824, 5102460, 1073741824);   // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005219, 5100515, 700, 1700, 1073741824, 5102460, 1056964608);   // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005219, 5100516, 700, 1700, 1073741824, 5102460, 0);            // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005219, 5100517, 700, 1700, 1073741824, 5102460, 1074161254);   // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005331, 5100514);                                   // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005331, 5100515);                                   // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005331, 5100516);                                   // Hollow Cleric - Wakeup
    InitializeCommonEvent(20005331, 5100517);                                   // Hollow Cleric - Wakeup
    
    InitializeCommonEvent(20005132, 5100490, 1065353216, 5102454); // Hollow Cleric - Patrol Leader - Wakeup
    
    //-----------------------------------
    // Big Locust
    //-----------------------------------
    InitializeCommonEvent(20005210, 5100340, 704, 1704, 1083179008); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 5100341, 701, 1701, 1096810496); // Enemy - Wakeup
    InitializeCommonEvent(20005221, 5100342, 702, 1702, 1094713344); // Enemy - Wakeup
    InitializeCommonEvent(20005221, 5100343, 702, 1702, 1096810496); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100344, 702, 1702, 5102341, 1075838976); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100345, 702, 1702, 5102341, 1069547520); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100346, 702, 1702, 5102341, 1084227584); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100347, 702, 1702, 5102341, 1073741824); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 5100348, 702, 1702, 1084227584); // Enemy - Wakeup
    InitializeCommonEvent(20005213, 5100349, 702, 1702, 1084227584, 5102346); // Enemy - Wakeup
    InitializeCommonEvent(20005200, 5100350, 702, 1702, 5102342); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 5100351, 703, 1703, 1082130432); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 5100352, 703, 1703, 1082130432); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 5100353, 703, 1703, 1082130432); // Enemy - Wakeup
    InitializeCommonEvent(20005222, 5100354, 704, 1704, 1092616192, 1067030938); // Enemy - Wakeup
    InitializeCommonEvent(20005222, 5100355, 704, 1704, 1101004800, 1075000115); // Enemy - Wakeup
    InitializeCommonEvent(20005200, 5100357, 702, 1702, 5102345); // Enemy - Wakeup
    InitializeCommonEvent(20005213, 5100358, 702, 1702, 1082130432, 5102347); // Enemy - Wakeup
    InitializeCommonEvent(20005221, 5100359, 702, 1702, 1092616192); // Enemy - Wakeup
    
    InitializeCommonEvent(20005132, 5100491, 1073741824, 5102342); // Locust - Patrol Leader - Wakeup
    InitializeCommonEvent(20005132, 5100492, 1073741824, 5102345); // Locust - Patrol Leader - Wakeup
    InitializeEvent(0, 15105480, 5100493, 1073741824, 5100358, 1086324736, 1065353216); // Locust - Patrol Leader - Wakeup
    
    //-----------------------------------
    // Small Locust
    //-----------------------------------
    InitializeCommonEvent(20005120, 5100360, 1094713344); // Enemy - Wakeup
    InitializeCommonEvent(20005120, 5100361, 1094713344); // Enemy - Wakeup
    InitializeCommonEvent(20005120, 5100362, 1094713344); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100369, 702, 1702, 5102342, 1065353216); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100370, 702, 1702, 5102342, 1069547520); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100371, 702, 1702, 5102342, 1061997773); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100372, 702, 1702, 5102342, 1073741824); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100387, 702, 1702, 5102345, 1045220557); // Enemy - Wakeup
    InitializeCommonEvent(20005201, 5100388, 702, 1702, 5102345, 1058642330); // Enemy - Wakeup
    //InitializeCommonEvent(20005201, 5100389, 702, 1702, 5102345, 1061997773); // Enemy - Wakeup
    InitializeEvent(0, 15105420, 5100390, 702, 1702, 1073741824, 5100358, 1082130432, 1060320051);
    InitializeEvent(1, 15105420, 5100391, 702, 1702, 1073741824, 5100358, 1082130432, 1058642330);
    InitializeEvent(2, 15105420, 5100392, 702, 1702, 1073741824, 5100358, 1082130432, 1061997773);
    InitializeEvent(3, 15105420, 5100393, 702, 1702, 1073741824, 5100358, 1082130432, 1065353216);
    InitializeEvent(4, 15105420, 5100394, 702, 1702, 1073741824, 5100358, 1082130432, 1067030938);
    
    // Toggle SpEffect
    InitializeEvent(0, 15105360, 5100360, 5102360); 
    InitializeEvent(1, 15105360, 5100361, 5102361);
    InitializeEvent(2, 15105360, 5100362, 5102362);
    InitializeEvent(3, 15105360, 5100365, 5102365);
    InitializeEvent(4, 15105360, 5100366, 5102366);
    InitializeEvent(5, 15105360, 5100367, 5102367);
    InitializeEvent(6, 15105360, 5100368, 5102368);
    InitializeEvent(7, 15105360, 5100380, 5102380);
    InitializeEvent(8, 15105360, 5100383, 5102383);
    InitializeEvent(9, 15105360, 5100384, 5102384);
    InitializeEvent(10, 15105360, 5100385, 5102385);
    InitializeEvent(11, 15105360, 5100386, 5102386);
    
    // Toggle SpEffect on Death
    InitializeEvent(0, 15105380, 5100369, 5102369, 5100350);
    InitializeEvent(1, 15105380, 5100370, 5102370, 5100350);
    InitializeEvent(2, 15105380, 5100371, 5102371, 5100350);
    InitializeEvent(3, 15105380, 5100372, 5102372, 5100350);
    InitializeEvent(4, 15105380, 5100387, 5102387, 5100357);
    InitializeEvent(5, 15105380, 5100388, 5102388, 5100357);
    //InitializeEvent(6, 15105380, 5100389, 5102389, 5100357);
    InitializeEvent(7, 15105380, 5100390, 5102390, 5100358);
    InitializeEvent(8, 15105380, 5100391, 5102391, 5100358);
    InitializeEvent(9, 15105380, 5100392, 5102392, 5100358);
    InitializeEvent(10, 15105380, 5100393, 5102393, 5100358);
    InitializeEvent(11, 15105380, 5100394, 5102394, 5100358);
    
    // Toggle Visual Distance SpEffect
    InitializeEvent(0, 15105400, 5100363, 5102363, 5100310, 16447);
    InitializeEvent(1, 15105400, 5100364, 5102364, 5100310, 16447);
    InitializeEvent(2, 15105400, 5100395, 5102395, 5100310, 16447);
    InitializeEvent(3, 15105400, 5100396, 5102396, 5100310, 16447);
    InitializeEvent(4, 15105400, 5100397, 5102397, 5100310, 16447);
    InitializeEvent(5, 15105400, 5100398, 5102398, 5100310, 16447);
    //InitializeEvent(6, 15105400, 5100399, 5102399, 5100310, 16447);
    
    // SpEffect Toggle
    InitializeCommonEvent(20005331, 5100373);
    InitializeCommonEvent(20005331, 5100374);
    InitializeCommonEvent(20005331, 5100375);
    InitializeCommonEvent(20005331, 5100376);

    //-----------------------------------
    // Map Effects
    //-----------------------------------
    InitializeCommonEvent(20005620, 15100510, 15101510, 5101510, 5101511, 5101512, 15101511); // Lift - Setup 1
    InitializeCommonEvent(20005621, 15100510, 15101510, 5101510, 5101511, 5103511, 5101512, 5103512, 5102511, 5102512, 15101511, 15104510, 0);
    
    InitializeCommonEvent(20005622, 15100515, 15101515, 5101515, 5101516, 5101517, 15101516); // Setup Lift
    InitializeCommonEvent(20005623, 15100515, 15101515, 5101515, 5101516, 5103516, 5101517, 5103517, 5102516, 5102517, 15101516, 15104515, 0);
    
    InitializeCommonEvent(20005614, 4501570, 64500570); // Door - Show Wrong Side Message
    
    InitializeCommonEvent(20005610, 15100610, 5102610, 5102611);            // Door - Setup Interaction Area
    InitializeCommonEvent(20005611, 15100610, 5103610, 5101610, 510310);    // Door - Handle Door State
    InitializeCommonEvent(20005610, 15100612, 5102612, 5102613);            // Door - Setup Interaction Area
    InitializeCommonEvent(20005611, 15100612, 5103612, 5101612, 510310);    // Door - Handle Door State
    
    InitializeCommonEvent(20005650, 15100630, 5101630); // Illusory Wall - Setup
    InitializeCommonEvent(20005650, 15100631, 5101631); // Illusory Wall - Setup
    InitializeCommonEvent(20005650, 15100632, 5101632); // Illusory Wall - Setup
    InitializeCommonEvent(20005650, 15100633, 5101633); // Illusory Wall - Setup
    InitializeCommonEvent(20005650, 15100634, 5101634); // Illusory Wall - Setup
    
    InitializeEvent(0, 15105520, 15100520, 5101520, 15100521, 15100522, 439131, 5102520); // Secret Ladder Puzzle
    InitializeEvent(0, 15105525, 0);    // Secret Ladder Puzzle Hint
    //InitializeEvent(0, 15105505, 0);  // Disabled to circumvent the issue with his fogwall
    InitializeEvent(0, 15105506, 0);    // No Fall Damage Zone - Chute to Midir
    InitializeEvent(0, 15105508, 0);    // No Fall Damage Zone - Chute to Midir
    InitializeEvent(0, 15105580, 0);    // Chapel Zone before Midir
    
    InitializeCommonEvent(20090500, 5104500, 160750100); // Curse Swamp
    
    //-----------------------------------
    // Summons
    //-----------------------------------
    // Shira, Knight of Filianore - Summon
    InitializeCommonEvent(20005700, 15100850, 15104190, 15105190, 5100190, 5102190);                // Summon Setup - Basic
    InitializeCommonEvent(20005720, 15104190, 15105190, 15100850, 5100190);                         // Summon - Handle Character State
    InitializeCommonEvent(20005716, 15104190, 15105855, 5100190, 5102856, 5102855, 15105851);       // Summon - Fogwall Handler - Client
    InitializeCommonEvent(20005715, 15104190, 15105855, 5100190, 5102856, 15105851, 5102857, 0);    // Summon - Handle Summon AI - Multiple Regions
    InitializeEvent(0, 15105507, 5100190); // No Fall Damage Zone - Chute to Midir - For Shira
    
    // Summon
    InitializeCommonEvent(20005700, 15100800, 15104192, 15105192, 5100192, 5102192);    // Summon Setup - Basic
    InitializeCommonEvent(20005720, 15104192, 15105192, 15100800, 5100192);             // Summon - Handle Character State
    InitializeCommonEvent(20005710, 15104192, 15105805, 5100192, 5102806, 5102805);     // Summon - Fogwall Handler

    //-----------------------------------
    // Characters
    //-----------------------------------
    // Judicator Argo
    InitializeCommonEvent(20006031, 75100131, 5102700);             // Region - Set Flag in proximity
    InitializeCommonEvent(20006002, 5100810, 1918, 1915, 1919);     // Entity - Set Flags upon Death
    InitializeEvent(0, 15105703, 5100810, 15105003, 1088421888);    // Region - Wakeup Entity
    InitializeEvent(0, 15105704, 5100810);                          // Animation - Contemplate
    InitializeEvent(0, 15105705, 5100810);                          // Animation - Raise Hands
    
    // Amnesiac Lapp
    InitializeEvent(0, 15105711, 5100705, 5100706, 91210, 5101706, 5102707); // Move from Ringed Inner Wall to Room on Ramparts
    InitializeEvent(0, 15105712, 5100706, 5100707, 91150, 5101706);          // Move from Room on Ramparts to Shared Grave
    InitializeEvent(0, 15105713, 5100707, 5102705, 5102706);                 // Cutscene in Shared Grave
    InitializeEvent(0, 15105714, 5100705); // EzstateInstructionRequest
    InitializeEvent(0, 15105715, 5100705); // Flag Set
    InitializeEvent(0, 15105716, 5100705); // Play Gesture
    InitializeEvent(0, 15105717, 5100706, 5101706); // Use Chair in Room on Ramparts

    InitializeCommonEvent(20006002, 5100705, 1818, 1815, 1819); // Ringed Inner Wall - Set Flags upon Death
    InitializeCommonEvent(20006002, 5100706, 1818, 1815, 1819); // Room on Ramparts - Set Flags upon Death
    InitializeCommonEvent(20006002, 5100707, 1818, 1815, 1819); // Shared Grave - Set Flags upon Death
    InitializeCommonEvent(20006000, 5100705, 1816, 1817, 75100240, 1059481190, 1815, 1819, 0); // Ringed Inner Wall - Set Hosility Flags
    InitializeCommonEvent(20006000, 5100706, 1816, 1817, 75100241, 1059481190, 1815, 1819, 0); // Room on Ramparts - Set Hosility Flags
    InitializeCommonEvent(20006000, 5100707, 1816, 1817, 75100242, 1059481190, 1815, 1819, 0); // Shared Grave - Set Hosility Flags
    InitializeCommonEvent(20006001, 5100705, 1816, 1817, 75100240, 3); // Ringed Inner Wall - Hostility Monitor
    InitializeCommonEvent(20006001, 5100706, 1816, 1817, 75100241, 3); // Room on Ramparts - Hostility Monitor
    InitializeCommonEvent(20006001, 5100707, 1816, 1817, 75100242, 3); // Shared Grave - Hostility Monitor
    InitializeCommonEvent(20006030, 5101705, 4000, 2, 66230, 50006623, 50006624, 1811); // Place Lapp's Set in Shared Grave
    InitializeCommonEvent(20006040, 5100706, 5102707, 159); // Room on Ramparts - Warp Lapp into chair
    
    // Shira
    InitializeEvent(0, 15105721, 5100710, 5100190); // Disable Behind Door version, enable Midir chapel version
    InitializeEvent(0, 15105723, 0); // Flag Set
    InitializeEvent(0, 15105724, 0); // Flag Set
    InitializeCommonEvent(20006002, 5100710, 1838, 1835, 1839); // Set Flags upon Death
    
    // Pygmy King
    InitializeCommonEvent(20006002, 5100715, 1898, 1895, 1899); // Set Flags upon Death
    
    // White-faced Locust
    InitializeCommonEvent(20006002, 5100720, 1843, 1840, 1844); // Set Flags upon Death
    InitializeCommonEvent(20006002, 5100721, 1848, 1845, 1849); // Set Flags upon Death
    InitializeCommonEvent(20006002, 5100722, 1853, 1850, 1854); // Set Flags upon Death
    InitializeCommonEvent(20006000, 5100720, 1841, 1842, 75000290, 1059481190, 1840, 1844, 0); // Set Hosility Flags
    InitializeCommonEvent(20006000, 5100721, 1846, 1847, 75000291, 1059481190, 1845, 1849, 0); // Set Hosility Flags
    InitializeCommonEvent(20006000, 5100722, 1851, 1852, 75000292, 1059481190, 1850, 1854, 0); // Set Hosility Flags
    InitializeCommonEvent(20006001, 5100720, 1841, 1842, 75000290, 3); // Hostility Monitor
    InitializeCommonEvent(20006001, 5100721, 1846, 1847, 75000291, 3); // Hostility Monitor
    InitializeCommonEvent(20006001, 5100722, 1851, 1852, 75000292, 3); // Hostility Monitor
    InitializeCommonEvent(20006040, 5100720, 5102720, 159); // Warp Pushing Locust into alcove
    InitializeCommonEvent(20006010, 75100952, 69003); // Locust: Push Player
    
    // Iron Dragonslayer Armour
    InitializeCommonEvent(20005341, 15100285, 5100285, 5102000); // Disable on Kill, Award Item on Kill
    InitializeEvent(0, 15105450, 5100285, 700, 1700, 1110704128); // Enemy Wakeup
    
    // Glaive Master Hodir
    InitializeCommonEvent(20090010, 5100730, 5102730, 30310, 63010, 13500, 99005410, 99005411, 15100730); // Setup
    InitializeCommonEvent(20090020, 5100730, 80300); // Kill Taunt
    
    // Freya the Wretched
    InitializeCommonEvent(20090010, 5100731, 5102731, 30310, 63010, 13900, 99005450, 99005451, 15100731); // Setup
    InitializeCommonEvent(20090020, 5100731, 80300); // Kill Taunt
    
    // Nahor the Fallen
    InitializeCommonEvent(20090010, 5100732, 5102732, 30310, 63010, 14000, 99005460, 99005461, 15100732); // Setup
    InitializeCommonEvent(20090020, 5100732, 80300); // Kill Taunt
    
    // Easterner Iazeel
    InitializeCommonEvent(20090010, 5100733, 5102733, 30310, 63010, 14100, 99005470, 99005471, 15100733); // Setup
    InitializeCommonEvent(20090020, 5100733, 80300); // Kill Taunt
    
    // Seeker of the Spurned
    InitializeCommonEvent(20090010, 5100734, 5102734, 30310, 63010, 59700, 99005640, 99005641, 15100734); // Setup
    InitializeCommonEvent(20090020, 5100734, 80300); // Kill Taunt
    InitializeCommonEvent(20005500, 15100734, 15100003, 5100953, 5101953); // Ringed Inner Wall bonfire
    
    // Moaning Knight
    InitializeCommonEvent(20090010, 5100735, 5102735, 30310, 63010, 59800, 99005650, 99005651, 15100735); // Setup
    InitializeCommonEvent(20090020, 5100735, 80300); // Kill Taunt
    
    // Silver Knight Ledo 
    InitializeCommonEvent(20090010, 5100736, 5102736, 30310, 63010, 59600, 99005100, 99005101, 15100736); // Setup
    InitializeCommonEvent(20090020, 5100736, 80300); // Kill Taunt
    
    //------------------------
    // Treasure
    //------------------------
    // One-time Enemies
    InitializeCommonEvent(20008100, 15100310, 5100310, 5102030); // Swamp Judicator
    InitializeCommonEvent(20008100, 15100300, 5100300, 5102040); // Bridge Judicator
    InitializeCommonEvent(20008150, 15100290, 5100290); // Crystal Lizard
    InitializeCommonEvent(20008150, 15100291, 5100291); // Crystal Lizard
    InitializeCommonEvent(20008150, 15100292, 5100292); // Crystal Lizard
    InitializeCommonEvent(20008150, 15100293, 5100293); // Crystal Lizard
    InitializeCommonEvent(20008150, 15100294, 5100294); // Crystal Lizard
    InitializeCommonEvent(20008150, 15100295, 5100295); // Crystal Lizard
    InitializeCommonEvent(20008150, 15100296, 5100296); // Crystal Lizard
    
    // One-time Loot
    InitializeCommonEvent(20005351, 5100240, 5102010, 55102010, 1); // Ringed Knight Paired Greatswords
    InitializeCommonEvent(20005351, 5100244, 5102020, 55102020, 1); // Ringed Knight Set
    InitializeCommonEvent(20005351, 5100341, 5102050, 55102050, 1); // Locust Arm
    InitializeCommonEvent(20005351, 5100249, 5102060, 55102060, 1); // Ringed Knight Spear + Dragonhead Greatshield
    InitializeCommonEvent(20005351, 5100246, 5102070, 55102070, 1); // Ringed Knight Straight Sword + Dragonhead Shield
    InitializeCommonEvent(20005351, 5100355, 5102080, 55102080, 1); // Preacher's Right Arm
    InitializeCommonEvent(20005351, 5100660, 5102090, 55102090, 1); // Ruin Set
    InitializeCommonEvent(20005351, 5100340, 5102100, 55102100, 1); // White Preacher Head
    
    // Chests
    InitializeCommonEvent(20005520, 15101400, 5101400, 5104400);
    InitializeCommonEvent(20005520, 15101401, 5101401, 5104401);
    InitializeCommonEvent(20005520, 15101402, 5101402, 5104402);
    InitializeCommonEvent(20005520, 15101403, 5101403, 5104403);
    InitializeCommonEvent(20005520, 15101404, 5101404, 5104404);
    InitializeCommonEvent(20005520, 15101405, 5101405, 5104405);
    InitializeCommonEvent(20005520, 15101406, 5101406, 5104406);
    InitializeCommonEvent(20005520, 15101407, 5101407, 5104407);
    InitializeCommonEvent(20005520, 15101408, 5101408, 5104408);
    InitializeCommonEvent(20005520, 15101409, 5101409, 5104409);
    
    // Mimics
    InitializeCommonEvent(20005400, 5100180); // Open Action
    InitializeCommonEvent(20005400, 5100181); // Open Action
    InitializeCommonEvent(20005400, 5100182); // Open Action
    InitializeCommonEvent(20005400, 5100183); // Open Action
    InitializeCommonEvent(20005400, 5100184); // Open Action
    InitializeCommonEvent(20000343, 15100180, 5100180, 55101000); // Treasure Control
    InitializeCommonEvent(20000343, 15100181, 5100181, 55101010); // Treasure Control
    InitializeCommonEvent(20000343, 15100182, 5100182, 55101020); // Treasure Control
    InitializeCommonEvent(20000343, 15100183, 5100183, 55101030); // Treasure Control
    InitializeCommonEvent(20000343, 15100184, 5100184, 55101040); // Treasure Control
    
    // Misc
    InitializeCommonEvent(20005525, 55100670, 5100810, 5101680, 61); // Gwyn's Statue
   
    //------------------------
    // Misc
    //------------------------
    // Curses
    InitializeCommonEvent(20081010, 5105760, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 5105760, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 5105760, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 5105760, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 5105760, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 5105760, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 5105760, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 5105760, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 5105760, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 5105760, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 5105760, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 5105760, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 5105760, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 5105760, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 5105760, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 5105760, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 5105760, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 5105760, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 5105760, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 5105760, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 5105760, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 5105760, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 5105760, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 5105760, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 5105760, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 5105760, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 5105760, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 5105760, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 5105760, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 5105760, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 5105760, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 5105760, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 5105760, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 5105760, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 5105760, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 5105760, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 5105760, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 5105760, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 5105760, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 5105760, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 5105750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 5105760, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 5105770, 250002220, 25000510);  // Curse of Valor
    
    // NG+
    InitializeCommonEvent(20008001, 5105775, 1);
    InitializeCommonEvent(20008001, 5105776, 2);
    InitializeCommonEvent(20008001, 5105777, 3);
    
    // Company of Champions
    InitializeCommonEvent(20081020, 5105760, 160101502, 160101503); // I
    InitializeCommonEvent(20081020, 5105760, 160101512, 160101513); // II
    InitializeCommonEvent(20081020, 5105760, 160101522, 160101523); // III
    InitializeCommonEvent(20081020, 5105760, 160101532, 160101533); // IV
    InitializeCommonEvent(20081020, 5105760, 160101542, 160101543); // V
    
    // Local Companion
    InitializeCommonEvent(20080000, 5100750); // Setup
    InitializeCommonEvent(20080001, 5100750); // Bonfire Rest
    InitializeCommonEvent(20080002, 5100750); // Tools
    InitializeCommonEvent(20080003, 5100750); // Effects
    InitializeCommonEvent(20080004, 5100750, 160760000, 160760214, 51, 0); // Summoning 
    
    // Gauntlet Mode
    InitializeCommonEvent(20090800, 5102050);
    InitializeCommonEvent(20090800, 5102051);
});

//---------------------------------------------
// Destructor
//---------------------------------------------
Event(50, Default, function() {
    InitializeEvent(0, 15105100, 0); // Halflight/Judicator Argo - Reset Monitor
    InitializeEvent(0, 15105848, 0); // Unknown
    InitializeEvent(0, 15100519, 0); // Unknown
    InitializeEvent(0, 15105200, 0); // Darkeater Midir - Bridge Encounter Setup
    InitializeEvent(0, 15105500, 0); // Filianore Warp
    
    // Disable BGM sounds
    SetMapSoundState(5104801, Disabled);
    SetMapSoundState(5104802, Disabled);
    SetMapSoundState(5104851, Disabled);
    SetMapSoundState(5104852, Disabled);
    
    InitializeEvent(0, 15105309, 0); // Judicator - Mausoleum Gauntlet - Setup
    
    // Darkeater Midir - Bridge
    SetMultiplayerdependentBuffsNonboss(5100200, Enabled); 
    SetCharacterMaphit(5100200, true);
    SetCharacterGravity(5100200, Disabled);
    
    InitializeEvent(0, 15105700, 0); // Judicator Argo - Spawn State
    InitializeEvent(0, 15105710, 5100705, 5100706, 5100707, 91170, 91210, 91150, 5101706, 5102707); // Amnesiac Lapp - Spawn State
    InitializeEvent(0, 15105720, 5100710, -1); // Shira - Spawn State
    InitializeEvent(0, 15105730, 5100715, -1); // Pygmy King - Spawn State
    InitializeEvent(0, 15105740, 5100720, 1840, 1841, 1843, 1844, 75000252, 30000); // Big Locust (Pusher) - Spawn State
    InitializeEvent(1, 15105740, 5100721, 1845, 1846, 1848, 1849, 75000262, -1); // Big Locust (Swamp 1) - Spawn State
    InitializeEvent(2, 15105740, 5100722, 1850, 1851, 1853, 1854, 75000272, -1); // Big Locust (Swamp 2) - Spawn State
    
    // Church Monument
    SetCharacterAnimationState(5100790, Disabled);
    SetCharacterGravity(5100790, Disabled);
    SetCharacterMaphit(5100790, true);
});

//---------------------------------------------
// Halflight/Judicator Argo - Reset Monitor
//---------------------------------------------
Event(15105100, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 9610);
    SetEventFlag(15100800, OFF);
    SetEventFlag(15100801, OFF);
    BatchSetEventFlags(15105800, 15105849, OFF);
    SetEventFlag(50002341, OFF);
    BatchSetEventFlags(1900, 1919, OFF);
    SetEventFlag(1900, ON);
    SetEventFlag(1915, ON);
    SetEventFlag(9610, OFF);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9611);
    SetEventFlag(9611, OFF);
});

//---------------------------------------------
// Darkeater Midir - Bridge Encounter Setup
//---------------------------------------------
Event(15105200, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15100200);
    ChangeCharacterEnableState(5100200, Disabled);
    SetCharacterAnimationState(5100200, Disabled);
    Label0();
    SetCharacterMaphit(5100200, true);
    SetCharacterGravity(5100200, Disabled);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(5100200, AuthorityLevel.Forced);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    SkipIfNumberOfClientsOfType(1, ClientType.Coop, ComparisonType.Equal, 0);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfPlayerInoutMap(MAIN, true, 51, 0);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 15100210);
    ForceAnimationPlayback(5100200, 30000, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label1();
    GotoIfEventFlag(Label.LABEL2, OFF, TargetEventFlagType.EventFlag, 15100230);
    SetSpeffect(5100200, 5404);
    ForceAnimationPlayback(5100200, 30003, true, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label2();
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 5102232, 1);
    GotoIfEventFlag(Label.LABEL3, OFF, TargetEventFlagType.EventFlag, 15100234);
    ForceAnimationPlayback(5100200, 30002, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label3();
    ForceAnimationPlayback(5100200, 30001, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label9();
    IfPlayerInoutMap(MAIN, true, 51, 0);
    SetNetworkUpdateRate(5100200, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeFrames(1);
    GotoIfEventFlag(Label.LABEL11, ON, TargetEventFlagType.EventFlag, 15100210);
    ForceAnimationPlayback(5100200, 30000, true, false, true, 0, 1);
    SetNetworkUpdateRate(5100200, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label11();
    IfCharacterHasSpeffect(AND_14, 5100200, 16559, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL14, PASS, AND_14);
    ForceAnimationPlayback(5100200, 20002, true, false, true, 0, 1);
    SetNetworkUpdateRate(5100200, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label14();
    GotoIfEventFlag(Label.LABEL12, OFF, TargetEventFlagType.EventFlag, 15100230);
    SetSpeffect(5100200, 5404);
    ForceAnimationPlayback(5100200, 30003, true, false, false, 0, 1);
    SetNetworkUpdateRate(5100200, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label12();
    IfCharacterHasSpeffect(AND_13, 5100200, 5027, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL13, PASS, AND_13);
    ForceAnimationPlayback(5100200, 30002, true, false, true, 0, 1);
    SetNetworkUpdateRate(5100200, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label13();
    ForceAnimationPlayback(5100200, 30001, true, false, true, 0, 1);
    SetNetworkUpdateRate(5100200, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
});

//---------------------------------------------
// Darkeater Midir (Bridge) - Setup
//---------------------------------------------
Event(15105201, Default, function() {
    InitializeEvent(0, 15105210, 0); // Darkeater Midir (Bridge) - Fire Breath Gauntlet
    InitializeEvent(0, 15105230, 0);
    InitializeEvent(0, 15105231, 0);
    InitializeEvent(0, 15105236, 0);
});

//---------------------------------------------
// Darkeater Midir (Bridge) - Fire Breath Gauntlet
//---------------------------------------------
Event(15105210, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100210);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102210, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102211, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterHasSpeffect(AND_01, 5100200, 5025, true, ComparisonType.Equal, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15100210, ON);
    ForceAnimationPlayback(5100200, 20001, false, true, false, 0, 1);
    ForceAnimationPlayback(5100200, 30001, false, false, false, 0, 1);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105212, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, false);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100210);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5102212, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15100210);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCharacterEnableState(5100200, Disabled);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 5102212, 1);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 15100210);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterHasSpeffect(OR_02, 5100200, 5026, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    ChangeCharacterEnableState(5100200, Enabled);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105220, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(OR_01, 5100200, 5400, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 5100200, 5405, true, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 5102224, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 5102225, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 5102226, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 5102227, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 16556);
    WaitFixedTimeSeconds(0.3);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105221, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(OR_01, 5100200, 5404, true, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 5102220, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 5102221, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 16556);
    WaitFixedTimeSeconds(0.3);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105215, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102220, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102221, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102222, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15105202);
    IfCharacterHasSpeffect(AND_01, 5100200, 5026, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(5100200, 20003, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105216, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102220, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102221, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15105202);
    IfCharacterHasSpeffect(AND_01, 5100200, 5027, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(5100200, 20005, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105230, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5102230, 1);
    IfCharacterHasSpeffect(AND_01, 5100200, 5027, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(5100200, 20011, false, true, false, 0, 1);
    SetEventFlag(15100230, ON);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105231, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    IfCharacterHPRatio(AND_01, 5100200, ComparisonType.LessOrEqual, 0.2, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(AND_09, PASS, OR_01);
    IfCharacterHasSpeffect(AND_09, 5100200, 16210, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_09);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(5100200, 20002, false, true, false, 0, 1);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105232, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    IfCharacterHasSpeffect(MAIN, 5100200, 5028, true, ComparisonType.Equal, 1);
    SetNetworkconnectedEventFlag(15100200, ON);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105234, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100234);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5102232, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15100234, ON);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105235, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5102235, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, 5100200, 35, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15100200);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15100230);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCamera(6214, 6214);
    WaitFixedTimeSeconds(0.5);
    IfInoutsideArea(OR_01, InsideOutsideState.Outside, 10000, 5102235, 1);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Outside, 10000, 5100200, 35, 1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 15100200);
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, 15100230);
    IfConditionGroup(MAIN, PASS, OR_01);
    ChangeCamera(-1, -1);
    WaitFixedTimeSeconds(0.5);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105236, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15100230);
    IfCharacterHasSpeffect(AND_01, 5100200, 16553, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 15100200);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(15100230, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105237, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15100230);
    IfCharacterBackreadStatus(AND_01, 5100200, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    CreateNPCPart(5100200, 10, NPCPartType.Part1, 99999, 1, 1, false, false);
    SetNPCPartSEAndSFX(5100850, 10, 110, 110);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105238, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5102223, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(5100200, 16558);
    WaitFixedTimeSeconds(1.8);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 5102223, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    ClearSpeffect(5100200, 16558);
    WaitFixedTimeSeconds(1.8);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Skeleton - 
//---------------------------------------------
Event(15105280, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_01, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X20_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X24_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X24_4, 1);
    IfCharacterBackreadStatus(AND_02, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_02, X12_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    WaitFixedTimeSeconds(X16_4);
    IfCharacterHasSpeffect(AND_03, X0_4, 5450, false, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_03);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    EndUnconditionally(EventEndType.End);
});

//---------------------------------------------
// Darkeater Midir - 
//---------------------------------------------
Event(15105283, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    IfCharacterDeadalive(AND_01, X4_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 16433, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(2);
    IfCharacterDeadalive(AND_02, X4_4, DeathState.Alive, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_02);
    MakeEnemyAppearEvent(X8_4);
    WaitFixedTimeFrames(1);
    SetCharacterGravity(X4_4, Enabled);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X12_4, -1, X0_4);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Judicators - Setup
//---------------------------------------------
Event(15105300, Default, function() {
    InitializeEvent(0, 15105315, 5100300, 5100301, 16280, 16288); // Judicator (Gauntlet)
    InitializeEvent(1, 15105320, 5100300, 5100301, 16282, 16280); // Judicator (Gauntlet)
    InitializeEvent(2, 15105320, 5100300, 5100301, 16283, 16280); // Judicator (Gauntlet)
    InitializeEvent(4, 15105320, 5100300, 5100301, 16285, 0); // Judicator (Gauntlet)
    
    InitializeEvent(1, 15105315, 5100310, 5100311, 16400, 16403); // Judicator (Swamp)
    InitializeEvent(6, 15105320, 5100310, 5100311, 16282, 16400); // Judicator (Swamp)
    InitializeEvent(7, 15105320, 5100310, 5100311, 16283, 16400); // Judicator (Swamp)
    
    InitializeEvent(2, 15105315, 5100320, 5100321, 16410, 16413); // Judicator (Purging Monument)
    InitializeEvent(11, 15105320, 5100320, 5100321, 16282, 16410); // Judicator (Purging Monument)
    InitializeEvent(12, 15105320, 5100320, 5100321, 16283, 16410); // Judicator (Purging Monument)
});

//---------------------------------------------
// Judicator (Gauntlet) - Detect Player in Regions
//---------------------------------------------
Event(15105301, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetNetworkUpdateRate(5100300, false, CharacterUpdateFrequency.AlwaysUpdate);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102300, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102301, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102302, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102303, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetNetworkUpdateRate(5100300, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102300, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102301, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102302, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102303, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Judicator (Swamp) - Detect Player in Regions
//---------------------------------------------
Event(15105302, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetNetworkUpdateRate(5100310, false, CharacterUpdateFrequency.AlwaysUpdate);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102310, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102311, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102312, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetNetworkUpdateRate(5100310, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102310, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102311, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102312, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Judicator (Purging Monument) - Detect Player in Regions
//---------------------------------------------
Event(15105303, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetNetworkUpdateRate(5100320, false, CharacterUpdateFrequency.AlwaysUpdate);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102321, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102325, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102326, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetNetworkUpdateRate(5100320, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102321, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102325, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102326, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Judicator (Swamp) - Visual Distance
//---------------------------------------------
Event(15105305, Restart, function() {
    ClearSpeffect(5100310, 16460);
    IfCharacterAIState(AND_01, 5100310, AIStateType.Combat, ComparisonType.Equal, 1);
    IfCharacterAIState(AND_01, 5100310, AIStateType.Recognition, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterHasSpeffect(OR_01, 5100310, 16460, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetSpeffect(5100310, 16460);
    IfCharacterAIState(AND_02, 5100310, AIStateType.Normal, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterHasSpeffect(OR_02, 5100310, 16460, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
//
//---------------------------------------------
Event(15105306, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    IfCharacterType(AND_01, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X8_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X8_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X20_4, 1);
    IfDamageType(AND_03, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_02);
    IfAllPlayersInoutsideArea(AND_04, InsideOutsideState.Outside, X8_4);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfAllPlayersInoutsideArea(AND_04, InsideOutsideState.Outside, X12_4);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfAllPlayersInoutsideArea(AND_04, InsideOutsideState.Outside, X16_4);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfAllPlayersInoutsideArea(AND_04, InsideOutsideState.Outside, X20_4);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_04);
    SetSpeffect(X0_4, X4_4);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Judicator (Swamp) - 
//---------------------------------------------
Event(15105308, Restart, function() {
    IfCharacterType(AND_01, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 5102330, 1);
    IfAllPlayersInoutsideArea(AND_02, InsideOutsideState.Outside, 5102331);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(5100810, 16289);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
});


//---------------------------------------------
// Judicator (Gauntlet) - 
//---------------------------------------------
Event(15105309, Restart, function() {
    SetCharacterMaphit(5100300, true);
    SetCharacterGravity(5100300, Disabled);
    SetLockOnPoint(5100300, 221, Disabled);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(5100300, AuthorityLevel.Forced);
    SetCharacterMaphit(5100320, true);
    SetCharacterGravity(5100320, Disabled);
    SetLockOnPoint(5100320, 221, Disabled);
});

//---------------------------------------------
// 
//---------------------------------------------
Event(15105310, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    SetNetworkUpdateRate(X4_4, false, CharacterUpdateFrequency.Every5Frames);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkUpdateRate(X4_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfCharacterBackreadStatus(AND_02, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// 
//---------------------------------------------
Event(15105315, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ClearSpeffect(10000, X8_4);
    IfCharacterType(AND_08, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_08, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_08, PASS, AND_08);
    IfCharacterType(OR_08, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_08, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_08, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 16443, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X4_4, 16450, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterHasSpeffect(OR_01, 10000, X8_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfCharacterHasSpeffect(AND_03, 10000, X12_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_03, 10000, 16444, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfCharacterHasSpeffect(OR_03, 10000, X12_4, false, ComparisonType.Equal, 1);
    IfConditionGroup(AND_09, PASS, AND_02);
    IfConditionGroup(AND_09, PASS, OR_03);
    IfConditionGroup(AND_09, PASS, OR_08);
    IfConditionGroup(MAIN, PASS, AND_09);
    SetCharacterEventTarget(X4_4, X0_4);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, AND_01);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, 10000, 260, 10000);
    WaitFixedTimeSeconds(0.8);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 260, X0_4);
    WaitFixedTimeFrames(1);
    SetSpeffect(X4_4, 16451);
    WaitFixedTimeSeconds(7);
    SetSpeffect(X0_4, 16434);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// 
//---------------------------------------------
Event(15105320, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ClearSpeffect(X4_4, X8_4);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfCharacterHasSpeffect(AND_01, 10000, X12_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, X8_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(X4_4, X8_4);
    WaitFixedTimeSeconds(1.2);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Judicators - Apply SpEffect if Player is in Region(s)
//---------------------------------------------
Event(15105340, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, 0, X16_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, 0, X20_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X20_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, 0, X24_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X24_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, 0, X28_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X28_4, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, X8_4, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, X4_4);
    WaitFixedTimeSeconds(1.6);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Judicators - Apply SpEffect/Set Event Flag if Player is in Region(s)
//---------------------------------------------
Event(15105350, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X0_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X20_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X24_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X24_4, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfElapsedSeconds(OR_02, X8_4);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X20_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X24_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X24_4, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_02);
    SetEventFlag(X0_4, ON);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    SetSpeffect(10000, X4_4);
    IfInoutsideArea(AND_03, InsideOutsideState.Outside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(AND_03, InsideOutsideState.Outside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(AND_03, InsideOutsideState.Outside, 10000, X20_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X24_4, 0);
    IfInoutsideArea(AND_03, InsideOutsideState.Outside, 10000, X24_4, 1);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfElapsedSeconds(OR_03, 2);
    IfConditionGroup(MAIN, PASS, OR_03);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, FAIL, AND_03);
    SetEventFlag(X0_4, OFF);
    EndUnconditionally(EventEndType.Restart);
});

//---------------------------------------------
// Big Locust - Toggle SpEffect
//---------------------------------------------
Event(15105360, Restart, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetSpeffect(X0_4, 16341);
    SetEventPoint(X0_4, X4_4, 3);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, X0_4, X4_4, 1);
    ClearSpeffect(X0_4, 16341);
});

//---------------------------------------------
// Big Locust - Toggle SpEffect on Dead
//---------------------------------------------
Event(15105380, Restart, function(X0_4, X4_4, X8_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterDeadalive(MAIN, X8_4, DeathState.Dead, ComparisonType.Equal, 1);
    Label0();
    SetSpeffect(X0_4, 16341);
    SetEventPoint(X0_4, X4_4, 3);
});

//---------------------------------------------
// Big Locust - Toggle Visual Distance SpEffect
//---------------------------------------------
Event(15105400, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetSpeffect(X0_4, 16348);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterHasSpeffect(MAIN, X8_4, X12_4, true, ComparisonType.Equal, 1);
    SetSpeffect(X0_4, 16349);
    Label0();
    SetSpeffect(X0_4, 16341);
    SetEventPoint(X0_4, X4_4, 3);
});

//---------------------------------------------
// Small Locust - Wakeup
//---------------------------------------------
Event(15105420, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, X12_4, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_02, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, X16_4, X0_4, X20_4, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(0.1);
    IfCharacterHasSpeffect(AND_03, X0_4, 5450, false, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_03);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    WaitFixedTimeSeconds(X24_4);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
});

//--------------------------------------------
// Cursed Hollow Vagabond - Force Run in Area
//---------------------------------------------
Event(15105440, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 5100406, 5102408, 1);
    Label0();
    SetSpeffect(5100406, 5000);
});

//---------------------------------------------
// Iron Dragonslayer Armour - Wakeup
//---------------------------------------------
Event(15105450, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, X12_4, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
});

Event(15105460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    IfCharacterDeadalive(AND_09, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_09);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X8_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X8_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X20_4, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(0.5);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X4_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X8_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X8_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, X20_4, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterDeadalive(OR_02, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(0.3);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105470, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    IfCharacterDeadalive(AND_09, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_09);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X8_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X8_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X20_4, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(0.5);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X4_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X8_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X8_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, X20_4, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterDeadalive(OR_02, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(0.3);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105480, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(X0_4, Disabled);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, X4_4, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_02, X0_4, true, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, X8_4, X0_4, X12_4, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterDamagedBy(OR_02, X8_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(0.1);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    WaitFixedTimeSeconds(X16_4);
    SetCharacterAIState(X0_4, Enabled);
});

Event(15105500, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15100500);
    ChangeCharacterEnableState(5100890, Disabled);
    SetCharacterAnimationState(5100890, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterGravity(5100890, Disabled);
    SetCharacterMaphit(5100890, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfActionButtonInArea(AND_01, 9390, 5100890);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15100500, ON);
    SetEventFlag(15110001, ON);
    SetPlayerRespawnPoint(5112110);
    SaveRequest(0);
    PlayCutsceneAndWarpPlayer(51010000, CutscenePlayMode.Skippable, 5112110, 51, 1, 10000);
    WaitFixedTimeFrames(1);
});

// Midir - Fogwall
Event(15105505, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100200);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    WaitFixedTimeSeconds(0.5);
    DeactivateObject(5101850, Enabled);
    CreateObjectfollowingSFX(5101850, 101, 2);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 15100200);
    DeactivateObject(5101850, Disabled);
    DeleteObjectfollowingSFX(5101850, true);
});

Event(15105506, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102852, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetSpeffect(10000, 4050);
    SetSpeffect(10000, 4070);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5102852, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 4050);
    ClearSpeffect(10000, 4070);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105507, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, X0_4, 5102852, 1);
    SetSpeffect(X0_4, 4050);
    SetSpeffect(X0_4, 4070);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, X0_4, 5102852, 1);
    ClearSpeffect(X0_4, 4050);
    ClearSpeffect(X0_4, 4070);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105508, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5102853, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetSpeffect(10000, 4520);
    WaitFixedTimeSeconds(0.8);
    EndUnconditionally(EventEndType.Restart);
});

Event(15100519, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetEventFlag(15100510, ON);
    SetEventFlag(15100515, ON);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
});

Event(15105520, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X0_4);
    ReproduceObjectAnimation(X4_4, 2);
    RegisterLadder(X8_4, X12_4, X4_4);
    EndUnconditionally(EventEndType.End);
    Label0();
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X20_4, 1);
    IfCharacterChameleon(AND_01, 10000, X16_4, true);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, true, false, 0, 1);
    RegisterLadder(X8_4, X12_4, X4_4);
});

Event(15105525, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15100520);
    IfActionButtonInArea(AND_01, 9391, 5101525);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayGenericDialog(10012810, PromptType.OKCANCEL, NumberofOptions.OneButton, 5101525, 3);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105580, Restart, function() {
    RegisterLadder(15100580, 15100581, 5101580);
    RegisterLadder(15100582, 15100583, 5101582);
    RegisterLadder(15100584, 15100585, 5101584);
    RegisterLadder(15100586, 15100587, 5101586);
    RegisterLadder(15100588, 15100589, 5101588);
    RegisterLadder(15100590, 15100591, 5101590);
    RegisterLadder(15100592, 15100593, 5101592);
    RegisterLadder(15100594, 15100595, 5101594);
    RegisterLadder(15100596, 15100597, 5101596);
    RegisterLadder(15100598, 15100599, 5101598);
});

// Halflight Kill
Event(15105800, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 2100);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15104830);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 2100);
    IfCharacterHPRatio(AND_02, 5100800, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    ForceCharacterDeath(5100801, false);
    ForceCharacterDeath(5100803, false);
    ForceCharacterDeath(5100804, false);
    WaitFixedTimeSeconds(2);
    PlaySE(5100800, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(1);
    HandleBossDefeatAndDisplayBanner(5100800, TextBannerType.HeirofFireDestroyed);
    SetEventFlag(15100800, ON);
    SetEventFlag(6325, ON);
    SetEventFlag(9325, ON);
    InitializeCommonEvent(20020000, 25001025, 25002025, 800300020, 800300030); // Boss Kill
});

// Halflight - Boss Start
Event(15105810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15100800);
    ChangeCharacterEnableState(5100800, Disabled);
    SetCharacterAnimationState(5100800, Disabled);
    ForceCharacterDeath(5100800, false);
    ChangeCharacterEnableState(5100801, Disabled);
    SetCharacterAnimationState(5100801, Disabled);
    ForceCharacterDeath(5100801, false);
    ChangeCharacterEnableState(5100810, Disabled);
    SetCharacterAnimationState(5100810, Disabled);
    ForceCharacterDeath(5100810, false);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    SetCharacterTalkRange(5100810, 100);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(5100810, AuthorityLevel.Forced);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15105805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5102800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoUnconditionally(Label.LABEL2);
    
    Label2();
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    SetEventFlag(15100801, ON);
    InitializeCommonEvent(20020124, 0); // Boss Start
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    WaitFixedTimeSeconds(46);
    SetNetworkconnectedEventFlag(9600, ON);
});

// Halflight - Boss Start
Event(15105811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventIDSlotNumber, 0);
    ActivateMultiplayerdependantBuffs(5100801);
    SetNetworkUpdateRate(5100801, true, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ChangeCharacterEnableState(5100801, Disabled);
    SetCharacterAnimationState(5100801, Disabled);
    SetCharacterAIState(5100801, Disabled);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(5100801, AuthorityLevel.Forced);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 75100132);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCharacterEnableState(5100801, Enabled);
    SetCharacterAnimationState(5100801, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, 5100801, 236, 30340);
    ForceAnimationPlayback(5100801, 63010, false, false, false, 0, 1);
    SetCharacterAIState(5100801, Enabled);
   
    Label1();
    ActivateMultiplayerdependantBuffs(5100801);
    SetNetworkUpdateRate(5100801, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkconnectedEventFlag(15105811, ON);
    WaitFixedTimeSeconds(15);
    ForceCharacterDeath(5100810, true);
    SetEventFlag(15104811, ON);
    EndUnconditionally(EventEndType.End);
});

// Halflight - Boss Start
Event(15105812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventIDSlotNumber, 0);
    SetNetworkUpdateRate(5100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterHPBarDisplay(5100800, Disabled);
    DisplayBossHealthBar(Enabled, 5100800, 0, 906022);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    ChangeCharacterEnableState(5100800, Disabled);
    SetCharacterAnimationState(5100800, Disabled);
    SetCharacterAIState(5100800, Disabled);
    SetCharacterHPBarDisplay(5100800, Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15104811);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 2100);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15100800);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(5100800, AuthorityLevel.Forced);
    WaitFixedTimeSeconds(1);
    SpawnOneshotSFX(TargetEntityType.Character, 5100800, 236, 30340);
    ChangeCharacterEnableState(5100800, Enabled);
    SetCharacterAnimationState(5100800, Enabled);
    SetNetworkUpdateRate(5100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(5100800, 63010, false, false, false, 0, 1);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    IfFriendlyPhantomCountComparison(AND_04, true, ComparisonType.Equal, 3);
    GotoIfConditionGroupStateUncompiled(Label.LABEL14, PASS, AND_04);
    IfFriendlyPhantomCountComparison(AND_03, true, ComparisonType.Equal, 2);
    GotoIfConditionGroupStateUncompiled(Label.LABEL13, PASS, AND_03);
    IfFriendlyPhantomCountComparison(AND_02, true, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL12, PASS, AND_02);
    GotoUnconditionally(Label.LABEL11);
    
    Label11();
    SetSpeffect(5100800, 9150);
    GotoUnconditionally(Label.LABEL9);
    
    Label12();
    SetSpeffect(5100800, 9160);
    GotoUnconditionally(Label.LABEL9);
    
    Label13();
    SetSpeffect(5100800, 9170);
    GotoUnconditionally(Label.LABEL9);
    
    Label14();
    SetSpeffect(5100800, 9180);
    GotoUnconditionally(Label.LABEL9);
    
    Label9();
    WaitFixedTimeFrames(1);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL1, true);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104830);
    SetSpeffect(5100800, 17000);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104831);
    SetSpeffect(5100800, 17001);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104832);
    SetSpeffect(5100800, 17002);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104833);
    SetSpeffect(5100800, 17003);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104834);
    SetSpeffect(5100800, 17004);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104835);
    SetSpeffect(5100800, 17005);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104836);
    SetSpeffect(5100800, 17006);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104837);
    SetSpeffect(5100800, 17007);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104838);
    SetSpeffect(5100800, 17008);
    GotoUnconditionally(Label.LABEL1);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 15104839);
    SetSpeffect(5100800, 17009);
    GotoUnconditionally(Label.LABEL1);
    
    Label1();
    WaitFixedTimeFrames(1);
    ClearSpeffect(5100800, 17010);
    SetCharacterEventTarget(5100801, 5100800);
    SetCharacterEventTarget(5100803, 5100800);
    SetCharacterEventTarget(5100804, 5100800);
    DisplayBossHealthBar(Enabled, 5100800, 0, 45000);
    SetCharacterAIState(5100800, Enabled);
    SetSpeffect(5100800, 9130);
    SetEventFlag(15105804, ON);
    WaitFixedTimeSeconds(2);
    SetEventFlag(15105807, ON);
    EndUnconditionally(EventEndType.End);
});

// Halflight - Boss Start
Event(15105813, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 2100);
    IfCharacterDeadalive(AND_01, 30000, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15105804, ON);
    SetCharacterEventTarget(5100801, 30000);
    SetSpeffect(30000, 9130);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(15105803, ON);
    WaitFixedTimeSeconds(2);
    DisplayBossHealthBar(Enabled, 30000, 0, 900218);
    SetEventFlag(15105807, ON);
});

Event(15105814, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15100800);
    ChangeCharacterEnableState(5100803, Disabled);
    SetCharacterAnimationState(5100803, Disabled);
    ForceCharacterDeath(5100803, false);
    ChangeCharacterEnableState(5100804, Disabled);
    SetCharacterAnimationState(5100804, Disabled);
    ForceCharacterDeath(5100804, false);
    EndUnconditionally(EventEndType.End);
    Label0();
    ChangeCharacterEnableState(5100803, Disabled);
    SetCharacterAnimationState(5100803, Disabled);
    SetCharacterAIState(5100803, Disabled);
    ChangeCharacterEnableState(5100804, Disabled);
    SetCharacterAnimationState(5100804, Disabled);
    SetCharacterAIState(5100804, Disabled);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(5100803, AuthorityLevel.Forced);
    IfCharacterHPRatio(OR_01, 30000, ComparisonType.LessOrEqual, 0.65, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_01, 5100800, ComparisonType.LessOrEqual, 0.65, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(15105802, ON);
    WaitFixedTimeSeconds(2.4);
    SpawnOneshotSFX(TargetEntityType.Character, 5100803, 236, 30340);
    ChangeCharacterEnableState(5100803, Enabled);
    SetCharacterAnimationState(5100803, Enabled);
    ForceAnimationPlayback(5100803, 63010, false, false, false, 0, 1);
    SetCharacterAIState(5100803, Enabled);
    ActivateMultiplayerdependantBuffs(5100803);
    SetNetworkUpdateRate(5100803, true, CharacterUpdateFrequency.AlwaysUpdate);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(5100803, AuthorityLevel.Forced);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 2100);
    SetCharacterEventTarget(5100803, 30000);
    SkipUnconditionally(1);
    SetCharacterEventTarget(5100803, 5100800);
    IfFriendlyPhantomCountComparison(AND_04, true, ComparisonType.Equal, 3);
    GotoIfConditionGroupStateUncompiled(Label.LABEL4, PASS, AND_04);
    IfFriendlyPhantomCountComparison(AND_03, true, ComparisonType.Equal, 2);
    GotoIfConditionGroupStateUncompiled(Label.LABEL3, PASS, AND_03);
    IfFriendlyPhantomCountComparison(AND_02, true, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    GotoUnconditionally(Label.LABEL1);
    Label1();
    Label2();
    EndUnconditionally(EventEndType.End);
    Label3();
    Label4();
    EndUnconditionally(EventEndType.End);
});

Event(15105815, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfCharacterDeadalive(AND_01, 30000, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 9110, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfFriendlyPhantomCountComparison(AND_04, true, ComparisonType.Equal, 3);
    GotoIfConditionGroupStateUncompiled(Label.LABEL4, PASS, AND_04);
    IfFriendlyPhantomCountComparison(AND_03, true, ComparisonType.Equal, 2);
    GotoIfConditionGroupStateUncompiled(Label.LABEL3, PASS, AND_03);
    IfFriendlyPhantomCountComparison(AND_02, true, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    GotoUnconditionally(Label.LABEL1);
    Label1();
    SetSpeffect(30000, 9150);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    SetSpeffect(30000, 9160);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    SetSpeffect(30000, 9170);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    SetSpeffect(30000, 9180);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    WaitFixedTimeFrames(1);
    SetSpeffect(30000, 100);
});

Event(15105920, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15105807);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfPlayersSoulLevel(AND_01, ComparisonType.Greater, X0_4);
    IfPlayersSoulLevel(AND_01, ComparisonType.LessOrEqual, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfFriendlyPhantomCountComparison(AND_04, true, ComparisonType.Equal, 3);
    GotoIfConditionGroupStateUncompiled(Label.LABEL4, PASS, AND_04);
    IfFriendlyPhantomCountComparison(AND_03, true, ComparisonType.Equal, 2);
    GotoIfConditionGroupStateUncompiled(Label.LABEL3, PASS, AND_03);
    IfFriendlyPhantomCountComparison(AND_02, true, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    GotoUnconditionally(Label.LABEL1);
    Label1();
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 15105808);
    SetSpeffect(5100800, X24_4);
    SetSpeffect(30000, X24_4);
    GotoUnconditionally(Label.LABEL9);
    SetSpeffect(5100800, X8_4);
    SetSpeffect(30000, X8_4);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 15105808);
    SetSpeffect(5100800, X28_4);
    SetSpeffect(30000, X28_4);
    GotoUnconditionally(Label.LABEL9);
    SetSpeffect(5100800, X12_4);
    SetSpeffect(30000, X12_4);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 15105808);
    SetSpeffect(5100800, X32_4);
    SetSpeffect(30000, X32_4);
    GotoUnconditionally(Label.LABEL9);
    SetSpeffect(5100800, X16_4);
    SetSpeffect(30000, X16_4);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 15105808);
    SetSpeffect(5100800, X36_4);
    SetSpeffect(30000, X36_4);
    GotoUnconditionally(Label.LABEL9);
    SetSpeffect(5100800, X20_4);
    SetSpeffect(30000, X20_4);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    WaitFixedTimeFrames(1);
});

Event(15105820, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfPlayerStandingOnHit(AND_01, 5104810);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15105803);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(10000, 9020);
    WaitFixedTimeSeconds(0.8);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105830, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    SetNetworkconnectedEventFlag(15104830, OFF);
    SetNetworkconnectedEventFlag(15104831, OFF);
    SetNetworkconnectedEventFlag(15104832, OFF);
    SetNetworkconnectedEventFlag(15104833, OFF);
    SetNetworkconnectedEventFlag(15104834, OFF);
    SetNetworkconnectedEventFlag(15104835, OFF);
    SetNetworkconnectedEventFlag(15104836, OFF);
    SetNetworkconnectedEventFlag(15104837, OFF);
    SetNetworkconnectedEventFlag(15104838, OFF);
    SetNetworkconnectedEventFlag(15104839, OFF);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterHPRatio(AND_15, 30000, ComparisonType.Greater, 0.9, ComparisonType.Equal, 1);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 15105803);
    IfConditionGroup(MAIN, PASS, AND_15);
    WaitFixedTimeSeconds(1);
    IfCharacterHPRatio(OR_09, 30000, ComparisonType.LessOrEqual, 0.9, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_09);
    IfCharacterHPRatio(AND_09, 30000, ComparisonType.Equal, 1, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_09);
    SetNetworkconnectedEventFlag(15104839, ON);
    IfCharacterHPRatio(OR_08, 30000, ComparisonType.Greater, 0.9, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_08, 30000, ComparisonType.LessOrEqual, 0.8, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_08);
    IfCharacterHPRatio(AND_08, 30000, ComparisonType.Greater, 0.9, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_08);
    SetNetworkconnectedEventFlag(15104838, ON);
    IfCharacterHPRatio(OR_07, 30000, ComparisonType.Greater, 0.8, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_07, 30000, ComparisonType.LessOrEqual, 0.7, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_07);
    IfCharacterHPRatio(AND_07, 30000, ComparisonType.Greater, 0.8, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_07);
    SetNetworkconnectedEventFlag(15104837, ON);
    IfCharacterHPRatio(OR_06, 30000, ComparisonType.Greater, 0.7, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_06, 30000, ComparisonType.LessOrEqual, 0.6, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_06);
    IfCharacterHPRatio(AND_06, 30000, ComparisonType.Greater, 0.7, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_06);
    SetNetworkconnectedEventFlag(15104836, ON);
    IfCharacterHPRatio(OR_05, 30000, ComparisonType.Greater, 0.6, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_05, 30000, ComparisonType.LessOrEqual, 0.5, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_05);
    IfCharacterHPRatio(AND_05, 30000, ComparisonType.Greater, 0.6, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_05);
    SetNetworkconnectedEventFlag(15104835, ON);
    IfCharacterHPRatio(OR_04, 30000, ComparisonType.Greater, 0.5, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_04, 30000, ComparisonType.LessOrEqual, 0.4, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_04);
    IfCharacterHPRatio(AND_04, 30000, ComparisonType.Greater, 0.5, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_04);
    SetNetworkconnectedEventFlag(15104834, ON);
    IfCharacterHPRatio(OR_03, 30000, ComparisonType.Greater, 0.4, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_03, 30000, ComparisonType.LessOrEqual, 0.3, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_03);
    IfCharacterHPRatio(AND_03, 30000, ComparisonType.Greater, 0.4, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_03);
    SetNetworkconnectedEventFlag(15104833, ON);
    IfCharacterHPRatio(OR_02, 30000, ComparisonType.Greater, 0.3, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_02, 30000, ComparisonType.LessOrEqual, 0.2, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    IfCharacterHPRatio(AND_02, 30000, ComparisonType.Greater, 0.3, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_02);
    SetNetworkconnectedEventFlag(15104832, ON);
    IfCharacterHPRatio(OR_01, 30000, ComparisonType.Greater, 0.2, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_01, 30000, ComparisonType.LessOrEqual, 0.1, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfCharacterHPRatio(AND_01, 30000, ComparisonType.Greater, 0.2, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_01);
    SetNetworkconnectedEventFlag(15104831, ON);
    IfCharacterHPRatio(OR_10, 30000, ComparisonType.Greater, 0.1, ComparisonType.Equal, 1);
    IfCharacterDeadalive(OR_10, 30000, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_10);
    IfCharacterHPRatio(AND_10, 30000, ComparisonType.Greater, 0.1, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_10);
    SetNetworkconnectedEventFlag(15104830, ON);
    EndUnconditionally(EventEndType.End);
});

Event(15105831, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15105805);
    IfCharacterDeadalive(AND_01, 10000, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(15105831, ON);
    WaitFixedTimeFrames(1);
});

Event(15105940, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    IfCharacterDeadalive(AND_01, 30000, DeathState.Alive, ComparisonType.Equal, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfPlayersSoulLevel(AND_01, ComparisonType.Greater, X0_4);
    IfPlayersSoulLevel(AND_01, ComparisonType.LessOrEqual, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 15105809);
    SetSpeffect(30000, X8_4);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetSpeffect(30000, X12_4);
    EndUnconditionally(EventEndType.End);
});

Event(15105960, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 2100);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfPlayersSoulLevel(AND_01, ComparisonType.Greater, X0_4);
    IfPlayersSoulLevel(AND_01, ComparisonType.LessOrEqual, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X16_4);
    SetSpeffect(5100800, X8_4);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetSpeffect(5100800, X12_4);
    SetSpeffect(5100800, 18010);
    EndUnconditionally(EventEndType.End);
});

Event(15105844, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, false);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfCharacterDeadalive(AND_01, 30000, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 9110, true, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, true);
    IfCharacterDeadalive(AND_02, 30000, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_02, 10000, 9110, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    EnableBossMapSound(X4_4, Enabled);
    Unknown201007(X8_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X16_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X0_4);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X16_4);
    EnableBossMapSound(X8_4, Enabled);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X16_4);
    IfConditionGroup(MAIN, PASS, OR_02);
    Label0();
    EnableBossMapSound(-1, Disabled);
});

Event(15105845, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfCharacterDeadalive(AND_01, 30000, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 9110, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 6831);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(15105808, ON);
});

Event(15105846, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfCharacterDeadalive(AND_01, 30000, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 9110, true, ComparisonType.Equal, 1);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 651, OwnershipState.Owns);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(15105809, ON);
});

Event(15105847, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100800);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15105805);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(20);
    SetNetworkconnectedEventFlag(2101, ON);
});

Event(15105848, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfOnlineMode(AND_01, false);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    IfSteamDisconnected(AND_02, true);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 2110);
    SetEventFlag(2100, OFF);
    Label0();
    SetEventFlag(2101, OFF);
    SetEventFlag(9600, OFF);
});

Event(15105849, Restart, function() {
    InitializeCommonEvent(20005800, 15100800, 5101800, 5102800, 15105805, 5101800, 5105800, 0, 0);
    InitializeCommonEvent(20005801, 15100800, 5101800, 5102800, 15105805, 5101800, 15105806);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 15100801);
    InitializeCommonEvent(20001836, 15100800, 15105805, 15105806, 15105811, 5104801, 5104802, 15105802);
    SkipUnconditionally(1);
    InitializeCommonEvent(20001836, 15100800, 15105805, 15105806, 15105811, 5104801, 5104802, 15105802);
    InitializeEvent(0, 15105844, 15100800, 5104801, 5104802, 15105802, 15105831);
    InitializeCommonEvent(20005820, 15100800, 5101800, 4, 0);
    InitializeCommonEvent(20005820, 15100800, 5101801, 2, 0);
    InitializeCommonEvent(20005820, 15100800, 5101802, 2, 0);
    InitializeCommonEvent(20005810, 15100890, 5101800, 5102800, 10000);
});

// Darkeater Midir Kill
Event(15105850, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100850);
    IfCharacterHPRatio(AND_01, 5100850, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(5.5);
    PlaySE(5100850, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(1.5);
    HandleBossDefeatAndDisplayBanner(5100850, TextBannerType.HeirofFireDestroyed);
    SetEventFlag(15100850, ON);
    SetEventFlag(6326, ON);
    SetEventFlag(9326, ON);
    InitializeCommonEvent(20020000, 25001023, 25002023, 800300030, 800300040); // Boss Kill
});

// Darkeater Midir - Boss Start
Event(15105860, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15100850);
    ChangeCharacterEnableState(5100850, Disabled);
    SetCharacterAnimationState(5100850, Disabled);
    ForceCharacterDeath(5100850, false);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    SetCharacterAIState(5100850, Disabled);
    ForceAnimationPlayback(5100850, 700, true, false, false, 0, 1);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 15105851);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 15100851);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 10000, 5100850, 36, 1);
    SkipUnconditionally(1);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 10000, 5100850, 120, 1);
    IfInoutsideArea(AND_09, InsideOutsideState.Inside, 10000, 5102851, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterHPRatio(OR_01, 5100850, ComparisonType.LessOrEqual, 0.9, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15105855);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5102850, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    Label2();
    SendInvadingPhantomsHome(0);
    ForceAnimationPlayback(5100850, 1700, false, false, false, 0, 1);
    SetCharacterAIState(5100850, Enabled);
    SetNetworkUpdateRate(5100850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 5100850, 0, 906210);
    InitializeCommonEvent(20020122, 0); // Boss Start
    SetEventFlag(15105851, ON);
    SetEventFlag(15100851, ON);
    WaitFixedTimeSeconds(6);
    SetEventFlag(15105853, ON);
});

Event(15105861, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100850);
    IfCharacterHasSpeffect(AND_01, 5100850, 16581, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15105852, ON);
});

// Midir Head
Event(15105862, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100850);
    IfCharacterBackreadStatus(AND_01, 5100850, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 5100850, 16583, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    CreateNPCPart(5100850, 10, NPCPartType.Part1, 10000, 1, 1, false, false);
    SetNPCPartSEAndSFX(5100850, 10, 110, 110);
    IfNPCPartHP(OR_01, 5100850, 10, 0, ComparisonType.LessOrEqual);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfCharacterHasSpeffect(AND_02, 5100850, 16583, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(5100850, 20000, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105888, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100850);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15100851);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 10000, 5100850, 120, 1);
    IfInoutsideArea(AND_09, InsideOutsideState.Inside, 10000, 5102851, 1);
    IfConditionGroup(MAIN, PASS, AND_09);
    SendInvadingPhantomsHome(0);
});

// Midir 
Event(15105889, Restart, function() {
    InitializeCommonEvent(20005800, 15100850, 5101850, 5102850, 15105855, 5101850, 5105850, 15105851, 0);
    InitializeCommonEvent(20005801, 15100850, 5101850, 5102850, 15105855, 5101850, 15105856);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 15105851);
    InitializeCommonEvent(20001836, 15100850, 15105855, 15105856, 15105853, 5104851, 5104852, 15105852);
    SkipUnconditionally(1);
    InitializeCommonEvent(20005831, 15100850, 15105855, 15105856, 5102850, 5104851, 5104852, 15105852);
    InitializeCommonEvent(20005820, 15100850, 5101850, 2, 15105851);
    InitializeCommonEvent(20005839, 15100850, 5100850, 1094713344, 6213, 6212, 15105855, 15105856, 5102870);
    InitializeCommonEvent(20005810, 15100890, 5101850, 5102850, 10000);
});

Event(15105890, Restart, function() {
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15100800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15100850);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15100890);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    SetEventFlag(15100890, OFF);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 15100800);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 15100850);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_03, false);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 15100800);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 15100850);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 15100200);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(15100890, ON);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_04, false);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 15100800);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 15100850);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 15100200);
    IfConditionGroup(MAIN, PASS, AND_04);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105895, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(15100895, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15100800);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 9610);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15100895, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9610);
    IfConditionGroup(MAIN, PASS, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105700, Default, function() {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfEventFlag(4, ON, TargetEventFlagType.EventFlag, 9610);
    BatchSetNetworkconnectedEventFlags(1900, 1919, OFF);
    SetNetworkconnectedEventFlag(1900, ON);
    SetNetworkconnectedEventFlag(1915, ON);
    GotoUnconditionally(Label.LABEL9);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1915, 1919);
    BatchSetNetworkconnectedEventFlags(1915, 1919, OFF);
    SetNetworkconnectedEventFlag(1915, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1916);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001078);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1915, 1919, OFF);
    SetNetworkconnectedEventFlag(1915, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1918);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 15100800);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1915, 1919, OFF);
    SetNetworkconnectedEventFlag(1915, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1900, 1914);
    BatchSetNetworkconnectedEventFlags(1900, 1914, OFF);
    SetNetworkconnectedEventFlag(1900, ON);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1900);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 15100800);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1900, 1914, OFF);
    SetNetworkconnectedEventFlag(1901, ON);
    BatchSetNetworkconnectedEventFlags(1915, 1919, OFF);
    SetNetworkconnectedEventFlag(1918, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1915);
    Label9();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1900);
    SetEventFlag(75100101, OFF);
    SetEventFlag(75100132, OFF);
    Label10();
    EndUnconditionally(EventEndType.End);
});

Event(15105703, Restart, function(X0_4, X4_4, X8_4) {
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X4_4);
    SetCharacterAIState(X0_4, Disabled);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 10000, X0_4, X8_4, 1);
    IfDamageType(OR_01, X0_4, 10000, DamageType.Unspecified);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15105805);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    Label0();
    SetCharacterTeamType(X0_4, TeamType.Enemy);
    SetNetworkconnectedEventFlag(X4_4, ON);
    SetCharacterAIState(X0_4, Enabled);
});

Event(15105704, Restart, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 75100101);
    WaitFixedTimeSeconds(30);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 15100723);
    WaitFixedTimeSeconds(1.6);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_02);
    ForceAnimationPlayback(X0_4, 3030, false, false, false, 0, 1);
});

Event(15105705, Restart, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 75100101);
    WaitFixedTimeSeconds(39);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_02);
    ForceAnimationPlayback(X0_4, 3011, false, false, false, 0, 1);
});

Event(15105710, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1815, 1819);
    BatchSetNetworkconnectedEventFlags(1815, 1819, OFF);
    SetNetworkconnectedEventFlag(1815, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1816);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001073);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1815, 1819, OFF);
    SetNetworkconnectedEventFlag(1815, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1800, 1814);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1800, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1815);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1801);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1803);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9324);
    IfConditionGroup(AND_03, PASS, OR_01);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1805, ON);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1802);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1804);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 9324);
    IfConditionGroup(AND_04, PASS, OR_02);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1806, ON);
    IfBatchEventFlags(AND_05, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1805, 1806);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 75000104);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1807, ON);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1807);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 75100201);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1808, ON);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1808);
    IfEventFlag(AND_07, OFF, TargetEventFlagType.EventFlag, 75100205);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 75100204);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 15110801);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1809, ON);
    BatchSetNetworkconnectedEventFlags(1815, 1819, OFF);
    SetNetworkconnectedEventFlag(1817, ON);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1808);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 75100206);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_08);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1810, ON);
    Label9();
    SetEventFlag(70001073, OFF);
    SetEventFlag(15100717, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1815);
    SetEventFlag(75100220, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 75100202);
    SetEventFlag(75100231, ON);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 75100203);
    SetEventFlag(75100232, ON);
    IfPlayerHasdoesntHaveItem(OR_04, ItemType.Goods, 2153, OwnershipState.Owns);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 6500);
    SkipIfConditionGroupStateUncompiled(1, FAIL, OR_04);
    SetEventFlag(50006623, ON);
    Label10();
    GotoIfEventFlag(Label.LABEL7, ON, TargetEventFlagType.EventFlag, 1807);
    GotoIfEventFlag(Label.LABEL8, ON, TargetEventFlagType.EventFlag, 1808);
    GotoIfEventFlag(Label.LABEL9, ON, TargetEventFlagType.EventFlag, 1809);
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1810);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    EndUnconditionally(EventEndType.End);
    Label7();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1816);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1818);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    Label8();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1816);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1818);
    ForceAnimationPlayback(X4_4, X16_4, false, false, false, 0, 1);
    SetCharacterMaphit(X4_4, true);
    SetCharacterGravity(X4_4, Disabled);
    RequestObjectRestoration(X24_4);
    SetObjectInvulnerability(X24_4, Enabled);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X28_4, -1, X4_4);
    EndUnconditionally(EventEndType.End);
    Label16();
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
    Label9();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1818);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1816);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1818);
    ForceAnimationPlayback(X8_4, X20_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label16();
    SetCharacterTeamType(X8_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ForceCharacterTreasure(X8_4);
    EndUnconditionally(EventEndType.End);
});

Event(15105711, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1808, 1814);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1815);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1807);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 75100201);
    IfCharacterBackreadStatus(AND_01, X0_4, false, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Outside, 10000, X0_4, 100, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1808, ON);
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false, 0, 1);
    SetCharacterMaphit(X4_4, true);
    SetCharacterGravity(X4_4, Disabled);
    RequestObjectRestoration(X12_4);
    SetObjectInvulnerability(X12_4, Enabled);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X16_4, -1, X4_4);
});

Event(15105712, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1809, 1814);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1815);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1808);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 75100206);
    IfCharacterBackreadStatus(AND_01, X0_4, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1810, ON);
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false, 0, 1);
    SetObjectInvulnerability(X12_4, Disabled);
});

Event(15105713, Default, function(X0_4, X4_4, X8_4) {
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1811, 1814);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1815);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1810);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneAndWarpPlayer(51000010, CutscenePlayMode.Skippable, X8_4, 51, 0, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneAndWarpPlayer(51000010, CutscenePlayMode.UnskippableWithFadeOut, X8_4, 51, 0, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(51000010, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1811, ON);
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

Event(15105714, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1807);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1815);
    IfCharacterHasSpeffect(AND_01, X0_4, 150, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    EzstateInstructionRequest(X0_4, 7300, 1);
    WaitFixedTimeFrames(10);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105715, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(75100234, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1807);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1815);
    IfCharacterHasSpeffect(AND_01, X0_4, 153, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(75100234, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1807);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1815);
    IfCharacterHasSpeffect(AND_02, X0_4, 153, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, FAIL, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105716, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(75100235, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1807);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1815);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 75100235);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(X0_4, 91200, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15105717, Default, function(X0_4, X4_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 15100717);
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1809, 1814);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL1, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterHasSpeffect(AND_01, X0_4, 159, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfCharacterHasSpeffect(AND_02, X0_4, 159, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    WaitFixedTimeFrames(1);
    Label1();
    IfPlayerIsNotInOwnWorldExcludesArena(AND_03, false);
    IfCharacterBackreadStatus(AND_03, X0_4, true, ComparisonType.Equal, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_04, false);
    IfCharacterBackreadStatus(AND_04, X0_4, false, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_04);
    Label0();
    SetCharacterMaphit(X0_4, false);
    SetCharacterGravity(X0_4, Enabled);
    SetObjectInvulnerability(X4_4, Disabled);
    DestroyObject(X4_4);
    SetEventFlag(15100717, ON);
});

Event(15105720, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1835, 1839);
    BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
    SetNetworkconnectedEventFlag(1835, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1836);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001074);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
    SetNetworkconnectedEventFlag(1835, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1820, 1834);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1820, ON);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1821);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1820, ON);
    IfBatchEventFlags(AND_02, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1820, 1821);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9326);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1822, ON);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 15100500);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 149);
    IfBatchEventFlags(AND_03, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1820, 1822);
    IfConditionGroup(AND_03, PASS, OR_03);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1823, ON);
    Label9();
    SetEventFlag(70001074, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1835);
    SetEventFlag(75100170, OFF);
    Label10();
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    SetCharacterAIState(X0_4, Disabled);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1820);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1822);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    EndUnconditionally(EventEndType.End);
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

Event(15105721, Default, function(X0_4, X4_4) {
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1822, 1834);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1835);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1820);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 75100155);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15100200);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 9326);
    IfCharacterHasSpeffect(AND_01, 10000, 490, true, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X4_4, 10, 1);
    IfCharacterBackreadStatus(AND_01, X4_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1821, ON);
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

Event(15105722, Default, function(X0_4) {
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1822, 1834);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1835);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1820);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9326);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1822, ON);
    Label0();
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
});

Event(15105723, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkconnectedEventFlag(15100723, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 75100956);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9326);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(15100723, ON);
});

Event(15105724, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkconnectedEventFlag(15100724, OFF);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 75100957);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9326);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(15100724, ON);
});

Event(15105730, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1895, 1899);
    BatchSetNetworkconnectedEventFlags(1895, 1899, OFF);
    SetNetworkconnectedEventFlag(1895, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1896);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001077);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1895, 1899, OFF);
    SetNetworkconnectedEventFlag(1895, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1880, 1894);
    BatchSetNetworkconnectedEventFlags(1880, 1894, OFF);
    SetNetworkconnectedEventFlag(1880, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1895);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1880);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 15100500);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1880, 1894, OFF);
    SetNetworkconnectedEventFlag(1881, ON);
    Label9();
    SetEventFlag(70001077, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1880);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1898);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

Event(15105740, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, X4_4, X16_4);
    BatchSetNetworkconnectedEventFlags(X4_4, X16_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, X8_4);
    BatchSetNetworkconnectedEventFlags(X4_4, X16_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(X4_4, X16_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, X4_4);
    SetEventFlag(X20_4, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, X8_4);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, X12_4);
    ForceAnimationPlayback(X0_4, X24_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ForceCharacterDeath(X0_4, false);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
});

Event(15105900, Restart, function() {
    ChangeCharacterEnableState(10000, Disabled);
});
