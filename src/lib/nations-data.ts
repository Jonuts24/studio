export type Vehicle = {
  id: string;
  name: string;
  type: 'Tank' | 'Plane' | 'Ship';
  rank: number;
  br: string;
  role: string;
  imageSeed: string;
};

export type GrindStage = {
  id: string;
  title: string;
  description: string;
  priorityVehicles: Vehicle[];
};

export type Nation = {
  id: string;
  name: string;
  flag: string;
  summary: string;
  stages: GrindStage[];
};

export const NATIONS: Nation[] = [
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    summary: 'Versatile brawlers with excellent vertical stabilizers and the best Close Air Support in the game.',
    stages: [
      {
        id: 'usa-rank-1-2',
        title: 'Rank I-II: The Foundation',
        description: 'Start with the M3 Stuarts and early Shermans. Focus on hull-down positions where your superior gun depression shines.',
        priorityVehicles: [
          { id: 'm3-stuart', name: 'M3 Stuart', type: 'Tank', rank: 1, br: '2.0', role: 'Light Tank', imageSeed: 'usa-tank' },
          { id: 'm4a1-sherman', name: 'M4A1 Sherman', type: 'Tank', rank: 2, br: '3.3', role: 'Medium Tank', imageSeed: 'usa-tank' }
        ]
      },
      {
        id: 'usa-rank-3-4',
        title: 'Rank III-IV: The 76mm Era',
        description: 'The 76mm Shermans and T34 Heavy Tank. Use vertical stabilizers to fire first in close-quarters engagements.',
        priorityVehicles: [
          { id: 'm4a3e8', name: 'M4A3 (76) W', type: 'Tank', rank: 3, br: '5.7', role: 'Medium Tank', imageSeed: 'usa-tank' },
          { id: 't34-heavy', name: 'T34', type: 'Tank', rank: 4, br: '6.7', role: 'Heavy Tank', imageSeed: 'usa-tank' }
        ]
      },
      {
        id: 'usa-rank-5-6',
        title: 'Rank V-VI: Cold War Transition',
        description: 'Introduction to MBTs like the M60 and early Abrams. Mobility and early night vision become key factors.',
        priorityVehicles: [
          { id: 'm60a1', name: 'M60A1 (AOS)', type: 'Tank', rank: 6, br: '8.3', role: 'Medium Tank', imageSeed: 'usa-tank' },
          { id: 'm1-abrams', name: 'M1 Abrams', type: 'Tank', rank: 6, br: '10.3', role: 'MBT', imageSeed: 'usa-tank' }
        ]
      },
      {
        id: 'usa-rank-7-8',
        title: 'Rank VII-VIII: Top Tier Supremacy',
        description: 'The M1A2 SEP series. Utilize advanced thermals and high-penetration APFSDS to dominate at long range.',
        priorityVehicles: [
          { id: 'm1a2-sep', name: 'M1A2 SEP V2', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'usa-tank' },
          { id: 'hstvl', name: 'HSTV-L', type: 'Tank', rank: 7, br: '11.3', role: 'Light Tank', imageSeed: 'usa-tank' }
        ]
      }
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    summary: 'The kings of long-range sniping and high-velocity cannons.',
    stages: [
      {
        id: 'ger-rank-1-2',
        title: 'Rank I-II: High Velocity Starts',
        description: 'Pz.IV F2 and Pz.III variants. Your guns outperform almost everything at these ranks; keep your distance.',
        priorityVehicles: [
          { id: 'pz-iv-f2', name: 'Pz.IV F2', type: 'Tank', rank: 2, br: '3.3', role: 'Medium Tank', imageSeed: 'germany-tank' },
          { id: 'puma-sd-kfz', name: 'Sd.Kfz.234/2', type: 'Tank', rank: 2, br: '3.0', role: 'Light Tank', imageSeed: 'germany-tank' }
        ]
      },
      {
        id: 'ger-rank-3-4',
        title: 'Rank III-IV: Tigers & Panthers',
        description: 'The legendary Tiger H1 and Panther D. Angle your armor in the Tiger, but rely on the Panther\'s frontal plate.',
        priorityVehicles: [
          { id: 'tiger-h1', name: 'Tiger H1', type: 'Tank', rank: 3, br: '5.7', role: 'Heavy Tank', imageSeed: 'germany-tank' },
          { id: 'panther-a', name: 'Panther A', type: 'Tank', rank: 4, br: '6.0', role: 'Medium Tank', imageSeed: 'germany-tank' }
        ]
      },
      {
        id: 'ger-rank-5-6',
        title: 'Rank V-VI: Leopard Breakthrough',
        description: 'Leopard 1 and Marder. Armor is no longer your shield; use speed and optics to flank and spank.',
        priorityVehicles: [
          { id: 'leopard-1', name: 'Leopard 1', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'germany-tank' },
          { id: 'begleitpanzer-57', name: 'Begleitpanzer 57', type: 'Tank', rank: 6, br: '9.3', role: 'Light Tank', imageSeed: 'germany-tank' }
        ]
      },
      {
        id: 'ger-rank-7-8',
        title: 'Rank VII-VIII: Leopard 2 Dominance',
        description: 'Leopard 2A5/6/7. The ultimate balanced MBTs with excellent firepower and turret protection.',
        priorityVehicles: [
          { id: 'leopard-2a6', name: 'Leopard 2A6', type: 'Tank', rank: 7, br: '11.7', role: 'MBT', imageSeed: 'germany-tank' },
          { id: 'leopard-2a7v', name: 'Leopard 2A7V', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'germany-tank' }
        ]
      }
    ]
  },
  {
    id: 'ussr',
    name: 'USSR',
    flag: '🇷🇺',
    summary: 'Aggressive brawlers with sloped armor and devastating APHE shells.',
    stages: [
      {
        id: 'ussr-rank-1-2',
        title: 'Rank I-II: T-34 & KV-1',
        description: 'The sloped armor of the T-34 and the heavy plating of the KV-1 make you a nightmare in close quarters.',
        priorityVehicles: [
          { id: 't-34-1942', name: 'T-34 (1942)', type: 'Tank', rank: 2, br: '3.7', role: 'Medium Tank', imageSeed: 'ussr-tank' },
          { id: 'kv-1-l11', name: 'KV-1 (L-11)', type: 'Tank', rank: 2, br: '3.7', role: 'Heavy Tank', imageSeed: 'ussr-tank' }
        ]
      },
      {
        id: 'ussr-rank-3-4',
        title: 'Rank III-IV: IS Series & T-44',
        description: 'Heavy hitting 122mm guns on the IS-2 and the nimble T-44. Beware of long reload times.',
        priorityVehicles: [
          { id: 'is-2', name: 'IS-2', type: 'Tank', rank: 4, br: '6.3', role: 'Heavy Tank', imageSeed: 'ussr-tank' },
          { id: 't-44', name: 'T-44', type: 'Tank', rank: 4, br: '6.7', role: 'Medium Tank', imageSeed: 'ussr-tank' }
        ]
      },
      {
        id: 'ussr-rank-5-6',
        title: 'Rank V-VI: Post-War Power',
        description: 'T-54, T-62, and BMP-1. Low profiles and powerful HEAT-FS/APDS shells define this stage.',
        priorityVehicles: [
          { id: 't-55a', name: 'T-55A', type: 'Tank', rank: 6, br: '8.3', role: 'Medium Tank', imageSeed: 'ussr-tank' },
          { id: 'bmp-2', name: 'BMP-2', type: 'Tank', rank: 6, br: '8.7', role: 'IFV', imageSeed: 'ussr-tank' }
        ]
      },
      {
        id: 'ussr-rank-7-8',
        title: 'Rank VII-VIII: Modern T-Series',
        description: 'T-80BVM and T-90M. Autoloaders and advanced ERA provide aggressive pushing potential.',
        priorityVehicles: [
          { id: 't-80bvm', name: 'T-80BVM', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'ussr-tank' },
          { id: 't-90m', name: 'T-90M', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'ussr-tank' }
        ]
      }
    ]
  },
  {
    id: 'britain',
    name: 'Great Britain',
    flag: '🇬🇧',
    summary: 'Specialists in Solid Shot, APDS, and thick armor plating.',
    stages: [
      {
        id: 'uk-rank-1-2',
        title: 'Rank I-II: Early Cruisers',
        description: 'Cromwell and Matilda. Use the Cromwell\'s speed to flank, or the Matilda\'s armor to lead the charge.',
        priorityVehicles: [
          { id: 'cromwell-v', name: 'Cromwell V', type: 'Tank', rank: 2, br: '3.3', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'matilda-iii', name: 'Matilda III', type: 'Tank', rank: 2, br: '3.0', role: 'Heavy Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'uk-rank-3-4',
        title: 'Rank III-IV: The Centurion Pivot',
        description: 'The Centurion Mk 3 introduces full stabilizers and APDS. This is where Britain becomes truly dangerous.',
        priorityVehicles: [
          { id: 'centurion-mk3', name: 'Centurion Mk 3', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'caernarvon', name: 'Caernarvon', type: 'Tank', rank: 4, br: '7.7', role: 'Heavy Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'uk-rank-5-6',
        title: 'Rank V-VI: Chieftain Power',
        description: 'Chieftain Mk 3/5/10. Powerful 120mm guns but slow mobility. Find a hull-down position and stay there.',
        priorityVehicles: [
          { id: 'chieftain-mk3', name: 'Chieftain Mk 3', type: 'Tank', rank: 6, br: '8.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'vickers-mk7', name: 'Vickers Mk.7', type: 'Tank', rank: 6, br: '10.3', role: 'MBT', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'uk-rank-7-8',
        title: 'Rank VII-VIII: Challenger 2 Era',
        description: 'Challenger 2 Black Night and Challenger 3. Best-in-class reload speed and excellent turret protection.',
        priorityVehicles: [
          { id: 'challenger-2-bn', name: 'Challenger 2 Black Night', type: 'Tank', rank: 7, br: '11.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'challenger-3', name: 'Challenger 3 (P)', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' }
        ]
      }
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    summary: 'Glass cannons with amazing suspension and rapid-firing modern autoloaders.',
    stages: [
      {
        id: 'jp-rank-1-2',
        title: 'Rank I-II: Fragile Firepower',
        description: 'Chi-Ha and Chi-He. Your armor is weak, but your high-explosive filler shells are deadly when they hit.',
        priorityVehicles: [
          { id: 'chi-ha-kai', name: 'Chi-Ha Kai', type: 'Tank', rank: 2, br: '2.7', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'ho-ni-iii', name: 'Ho-Ni III', type: 'Tank', rank: 2, br: '2.3', role: 'Tank Destroyer', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'jp-rank-3-4',
        title: 'Rank III-IV: Sniper Specialty',
        description: 'Chi-Nu II and ST-A series. Use your excellent gun depression and high-velocity guns to snipe.',
        priorityVehicles: [
          { id: 'chi-nu-2', name: 'Chi-Nu II', type: 'Tank', rank: 3, br: '4.3', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'st-a1', name: 'ST-A1', type: 'Tank', rank: 4, br: '6.3', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'jp-rank-5-6',
        title: 'Rank V-VI: Hydropneumatic Tech',
        description: 'Type 74 series. Use the unique suspension to aim over hills without exposing your hull.',
        priorityVehicles: [
          { id: 'type-74-e', name: 'Type 74 (E)', type: 'Tank', rank: 6, br: '9.0', role: 'MBT', imageSeed: 'hangar' },
          { id: 'type-16', name: 'Type 16 (FPS)', type: 'Tank', rank: 6, br: '9.3', role: 'Light Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'jp-rank-7-8',
        title: 'Rank VII-VIII: Autoloader Gods',
        description: 'Type 90 and Type 10. A consistent 4-second reload time makes you the fastest firing MBT at top tier.',
        priorityVehicles: [
          { id: 'type-90-b', name: 'Type 90 (B)', type: 'Tank', rank: 7, br: '11.0', role: 'MBT', imageSeed: 'hangar' },
          { id: 'type-10', name: 'Type 10', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' }
        ]
      }
    ]
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    summary: 'The best of both worlds, blending USA and USSR technology into unique hybrids.',
    stages: [
      {
        id: 'cn-rank-1-2',
        title: 'Rank I-II: Hybrid Roots',
        description: 'M24 Chaffee and early T-34s. You get the best starters from both the US and Soviet trees.',
        priorityVehicles: [
          { id: 'm24-cn', name: 'M24 (China)', type: 'Tank', rank: 2, br: '3.7', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 't-34-1943-cn', name: 'T-34 (1943)', type: 'Tank', rank: 2, br: '3.7', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'cn-rank-3-4',
        title: 'Rank III-IV: The Big Guns',
        description: 'T-34-85 and IS-2. Familiar Soviet power with slight variations in lineup support.',
        priorityVehicles: [
          { id: 't-34-85-cn', name: 'T-34-85 (S-53)', type: 'Tank', rank: 4, br: '5.7', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'is-2-cn', name: 'IS-2 (1944)', type: 'Tank', rank: 4, br: '6.7', role: 'Heavy Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'cn-rank-5-6',
        title: 'Rank V-VI: Type 59/69 Era',
        description: 'Upgraded T-54/55 designs. Better shells and early laser rangefinders give you a tech edge.',
        priorityVehicles: [
          { id: 'type-59', name: 'Type 59', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'type-69', name: 'Type 69', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'cn-rank-7-8',
        title: 'Rank VII-VIII: ZTZ Evolution',
        description: 'ZTZ99A and ZTZ96B. Extreme frontal protection and high-velocity APFSDS.',
        priorityVehicles: [
          { id: 'ztz99-2', name: 'ZTZ99 Phase II', type: 'Tank', rank: 7, br: '10.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'ztz99a', name: 'ZTZ99A', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' }
        ]
      }
    ]
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    summary: 'The fastest vehicles on wheels. High-mobility scouts and powerful tank destroyers.',
    stages: [
      {
        id: 'it-rank-1-2',
        title: 'Rank I-II: Desert Speedsters',
        description: 'AB41 and early M13/40s. Use your speed to reach capture points and setup ambushes.',
        priorityVehicles: [
          { id: 'ab41', name: 'AB41', type: 'Tank', rank: 1, br: '1.3', role: 'Armored Car', imageSeed: 'hangar' },
          { id: 'l6-40', name: 'L6/40', type: 'Tank', rank: 1, br: '1.3', role: 'Light Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'it-rank-3-4',
        title: 'Rank III-IV: Firepower Unleashed',
        description: 'Breda 501 and R3 T20. The Breda is a monster tank destroyer; the R3 is the fastest scout at its rank.',
        priorityVehicles: [
          { id: 'breda-501', name: 'Breda 501', type: 'Tank', rank: 3, br: '4.7', role: 'Tank Destroyer', imageSeed: 'hangar' },
          { id: 'r3-t20', name: 'R3 T20 FA-HS', type: 'Tank', rank: 3, br: '5.7', role: 'SPAA', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'it-rank-5-6',
        title: 'Rank V-VI: The Centauro Era',
        description: 'FIAT 6614 and Centauro I 105. Wheeled mobility allows you to flank the entire enemy team in minutes.',
        priorityVehicles: [
          { id: 'centauro-105', name: 'Centauro I 105', type: 'Tank', rank: 6, br: '9.3', role: 'Wheeled MBT', imageSeed: 'hangar' },
          { id: 'of-40', name: 'OF-40', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'it-rank-7-8',
        title: 'Rank VII-VIII: Top Tier Hit-and-Run',
        description: 'Ariete AMV and Centauro II. You lack armor, so rely on your top-tier shells and superior mobility.',
        priorityVehicles: [
          { id: 'ariete-amv', name: 'Ariete AMV', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'centauro-120', name: 'Centauro II', type: 'Tank', rank: 8, br: '11.3', role: 'Light Tank', imageSeed: 'hangar' }
        ]
      }
    ]
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    summary: 'Autoloaders and oscillating turrets. High-skill-ceiling vehicles with great flanking potential.',
    stages: [
      {
        id: 'fr-rank-1-2',
        title: 'Rank I-II: The Rough Start',
        description: 'Early French tanks are slow. Push through to the AMX-13 (FL11) where you finally get mobility.',
        priorityVehicles: [
          { id: 'amx-13-fl11', name: 'AMX-13 (FL11)', type: 'Tank', rank: 2, br: '4.3', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'b1-bis', name: 'B1 bis', type: 'Tank', rank: 2, br: '2.3', role: 'Heavy Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'fr-rank-3-4',
        title: 'Rank III-IV: Oscillating Turrets',
        description: 'AMX-13 and AMX-50 series. Autoloaders allow for rapid follow-up shots that catch enemies off guard.',
        priorityVehicles: [
          { id: 'amx-13', name: 'AMX-13', type: 'Tank', rank: 4, br: '6.7', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'lorraine-40t', name: 'Lorraine 40t', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'fr-rank-5-6',
        title: 'Rank V-VI: AMX-30 Transition',
        description: 'AMX-30 (1972) and AMX-10RC. No stabilizers early on, so play carefully and use your high-velocity HEAT-G shell.',
        priorityVehicles: [
          { id: 'amx-30-1972', name: 'AMX-30 (1972)', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'amx-10rc', name: 'AMX-10RC', type: 'Tank', rank: 6, br: '9.3', role: 'Light Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'fr-rank-7-8',
        title: 'Rank VII-VIII: Leclerc Mastery',
        description: 'Leclerc S1/S2/SXXI. A consistent 5-second autoloader and compact design make it a top-tier threat.',
        priorityVehicles: [
          { id: 'leclerc-s1', name: 'Leclerc S1', type: 'Tank', rank: 7, br: '11.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'leclerc-sxxxi', name: 'Leclerc SXXI', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' }
        ]
      }
    ]
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    summary: 'The best armor in the game (Strv 122) and unique hull-aiming tank destroyers.',
    stages: [
      {
        id: 'se-rank-1-2',
        title: 'Rank I-II: APDS Starters',
        description: 'Sweden gets Sabot rounds at Rank I. Use this penetration advantage to punch through anything.',
        priorityVehicles: [
          { id: 'strv-m41', name: 'Strv m/41 S-II', type: 'Tank', rank: 2, br: '2.7', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'spj-fm-43', name: 'Spj fm/43-44', type: 'Tank', rank: 1, br: '1.7', role: 'Tank Destroyer', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'se-rank-3-4',
        title: 'Rank III-IV: Sniping Power',
        description: 'Pvkv m/43 and Ikv 91. The Ikv 91 features a laser rangefinder at a very low BR, making it a sniping god.',
        priorityVehicles: [
          { id: 'ikv-91', name: 'Ikv 91', type: 'Tank', rank: 4, br: '7.3', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'strv-81', name: 'Strv 81', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'se-rank-5-6',
        title: 'Rank V-VI: Wedge Warriors',
        description: 'Strv 103 (S-Tank). Unique hull-aiming with a 4-second autoloader. Frontal bounces are your specialty.',
        priorityVehicles: [
          { id: 'strv-103a', name: 'Strv 103A', type: 'Tank', rank: 5, br: '8.0', role: 'MBT', imageSeed: 'hangar' },
          { id: 'cv90-series', name: 'CV9030FIN', type: 'Tank', rank: 6, br: '9.3', role: 'Light Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'se-rank-7-8',
        title: 'Rank VII-VIII: Strv 122 Supremacy',
        description: 'Strv 122B PLSS and Strv 122A. Widely considered the best armor in the game, outperforming the Leopard 2.',
        priorityVehicles: [
          { id: 'strv-122b-plss', name: 'Strv 122B PLSS', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' },
          { id: 'itpsv-90', name: 'ItPsv 90', type: 'Tank', rank: 7, br: '8.7', role: 'SPAA', imageSeed: 'hangar' }
        ]
      }
    ]
  },
  {
    id: 'israel',
    name: 'Israel',
    flag: '🇮🇱',
    summary: 'Tough, survivable tanks like the Merkava with a focus on crew protection.',
    stages: [
      {
        id: 'il-rank-4',
        title: 'Rank IV: The Magach Start',
        description: 'Israel starts at Rank IV. Magach 1 and 2 are M48 variants. Use your solid protection to trade shots.',
        priorityVehicles: [
          { id: 'magach-1', name: 'Magach 1', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'tiran-4', name: 'Tiran 4', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'il-rank-5-6',
        title: 'Rank V-VI: Early Merkavas',
        description: 'Merkava Mk.1 and Mk.2. Front-mounted engine blocks extra shots. Play defensively.',
        priorityVehicles: [
          { id: 'merkava-mk1', name: 'Merkava Mk.1B', type: 'Tank', rank: 6, br: '9.3', role: 'MBT', imageSeed: 'hangar' },
          { id: 'magach-6b', name: 'Magach 6B Gal', type: 'Tank', rank: 6, br: '9.3', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'il-rank-7',
        title: 'Rank VII: Advanced Protection',
        description: 'Merkava Mk.3D. Improved firepower and composite screens. Great for long-range hull-down combat.',
        priorityVehicles: [
          { id: 'merkava-mk3d', name: 'Merkava Mk.3D', type: 'Tank', rank: 7, br: '10.3', role: 'MBT', imageSeed: 'hangar' },
          { id: 'gal-batash', name: 'Magach 7C Gimel', type: 'Tank', rank: 7, br: '9.3', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'il-rank-8',
        title: 'Rank VIII: The Trophy System',
        description: 'Merkava Mk.4M with the Trophy APS. This active protection system stops incoming ATGMs automatically.',
        priorityVehicles: [
          { id: 'merkava-mk4m', name: 'Merkava Mk.4M', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' },
          { id: 'merkava-mk4-lic', name: 'Merkava Mk.4 LIC', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' }
        ]
      }
    ]
  }
];
