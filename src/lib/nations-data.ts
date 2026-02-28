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
        title: 'Rank I-II: The Sherman Foundation',
        description: 'Establish your basics with the M3 Stuarts for speed and the early M4 Shermans. Focus on learning hull-down positions where your gun depression shines.',
        priorityVehicles: [
          { id: 'm3-stuart', name: 'M3 Stuart', type: 'Tank', rank: 1, br: '2.0', role: 'Light Tank / Scout', imageSeed: 'usa-tank' },
          { id: 'm4a1-sherman', name: 'M4A1 Sherman', type: 'Tank', rank: 2, br: '3.3', role: 'Medium Tank', imageSeed: 'usa-tank' }
        ]
      },
      {
        id: 'usa-rank-3-5',
        title: 'Rank III-V: Mid-Tier Power',
        description: 'Transition to the 76mm cannons. The M4A3E8 is a classic, while the T34 Heavy Tank dominates in firepower and protection at Rank IV.',
        priorityVehicles: [
          { id: 'm4a3e8', name: 'M4A3 (76) W', type: 'Tank', rank: 3, br: '5.7', role: 'Medium Tank', imageSeed: 'usa-tank' },
          { id: 't34-heavy', name: 'T34', type: 'Tank', rank: 4, br: '6.7', role: 'Heavy Tank', imageSeed: 'usa-tank' }
        ]
      },
      {
        id: 'usa-rank-6-8',
        title: 'Rank VI-VIII: The Abrams Era',
        description: 'High-speed modern combat. Master the M1 Abrams series, utilizing their high mobility and fast reload to outflank opponents.',
        priorityVehicles: [
          { id: 'm1-abrams', name: 'M1 Abrams', type: 'Tank', rank: 6, br: '10.3', role: 'MBT', imageSeed: 'usa-tank' },
          { id: 'm1a2-sep', name: 'M1A2 SEP V2', type: 'Tank', rank: 8, br: '11.7', role: 'Top Tier MBT', imageSeed: 'usa-tank' }
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
        id: 'ger-rank-1-3',
        title: 'Rank I-III: Panzers & Tigers',
        description: 'From the nimble Pz.IV F2 to the legendary Tiger H1. Focus on long-range engagements where your high-velocity guns give you an edge.',
        priorityVehicles: [
          { id: 'pz-iv-f2', name: 'Pz.IV F2', type: 'Tank', rank: 2, br: '3.3', role: 'Medium Tank', imageSeed: 'germany-tank' },
          { id: 'tiger-h1', name: 'Tiger H1', type: 'Tank', rank: 3, br: '5.7', role: 'Heavy Tank', imageSeed: 'germany-tank' }
        ]
      },
      {
        id: 'ger-rank-4-6',
        title: 'Rank IV-VI: Cold War Mobility',
        description: 'The transition to the Leopard 1. Armor becomes less relevant; speed and optics take priority. Use the Ru 251 or Leopard 1 for flanking.',
        priorityVehicles: [
          { id: 'leopard-1', name: 'Leopard 1', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'germany-tank' },
          { id: 'marder-a1', name: 'Marder A1-', type: 'Tank', rank: 5, br: '7.7', role: 'IFV', imageSeed: 'germany-tank' }
        ]
      },
      {
        id: 'ger-rank-7-8',
        title: 'Rank VII-VIII: Leopard 2 Dominance',
        description: 'The pinnacle of German engineering. The Leopard 2A7V is widely considered one of the most balanced top-tier MBTs in the game.',
        priorityVehicles: [
          { id: 'leopard-2a4', name: 'Leopard 2A4', type: 'Tank', rank: 7, br: '10.3', role: 'MBT', imageSeed: 'germany-tank' },
          { id: 'leopard-2a7', name: 'Leopard 2A7V', type: 'Tank', rank: 8, br: '11.7', role: 'Top Tier MBT', imageSeed: 'germany-tank' }
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
        id: 'ussr-rank-1-3',
        title: 'Rank I-III: T-34 & KV Series',
        description: 'The backbone of the Soviet tree. T-34s offer great mobility and sloped armor, while KV-1s are nearly impenetrable in downtiers.',
        priorityVehicles: [
          { id: 't-34-1942', name: 'T-34 (1942)', type: 'Tank', rank: 2, br: '3.7', role: 'Medium Tank', imageSeed: 'ussr-tank' },
          { id: 'kv-1-l11', name: 'KV-1 (L-11)', type: 'Tank', rank: 2, br: '3.7', role: 'Heavy Tank', imageSeed: 'ussr-tank' }
        ]
      },
      {
        id: 'ussr-rank-4-6',
        title: 'Rank IV-VI: Post-War Giants',
        description: 'Introduction of the T-54 and T-62. These vehicles feature low profiles and powerful guns but suffer from slow reverse speeds.',
        priorityVehicles: [
          { id: 't-54-1949', name: 'T-54 (1949)', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'ussr-tank' },
          { id: 'bmp-1', name: 'BMP-1', type: 'Tank', rank: 5, br: '8.0', role: 'IFV', imageSeed: 'ussr-tank' }
        ]
      },
      {
        id: 'ussr-rank-7-8',
        title: 'Rank VII-VIII: Modern T-Series',
        description: 'Advanced composite armor and autoloaders. The T-80BVM and T-90M represent the height of Soviet/Russian tank design.',
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
        id: 'uk-rank-1-3',
        title: 'Rank I-III: Infantry & Cruisers',
        description: 'Fast cruiser tanks like the Cromwell contrasted with slow, heavy infantry tanks like the Churchill VII.',
        priorityVehicles: [
          { id: 'cromwell-v', name: 'Cromwell V', type: 'Tank', rank: 2, br: '3.3', role: 'Cruiser Tank', imageSeed: 'hangar' },
          { id: 'churchill-vii', name: 'Churchill VII', type: 'Tank', rank: 3, br: '4.7', role: 'Heavy Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'uk-rank-4-6',
        title: 'Rank IV-VI: The Centurion Era',
        description: 'Master the stabilizer. The Centurion Mk 3 is a turning point, providing incredible stability and high-penetration APDS rounds.',
        priorityVehicles: [
          { id: 'centurion-mk3', name: 'Centurion Mk 3', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'vickers-mbt', name: 'Vickers MBT', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'uk-rank-7-8',
        title: 'Rank VII-VIII: Challengers',
        description: 'Hull-down specialists with fast reloads. Use your excellent turret armor and hydropneumatic suspension where applicable.',
        priorityVehicles: [
          { id: 'challenger-2', name: 'Challenger 2', type: 'Tank', rank: 7, br: '11.3', role: 'MBT', imageSeed: 'hangar' },
          { id: 'challenger-3', name: 'Challenger 3 (TD)', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' }
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
        id: 'jp-rank-1-3',
        title: 'Rank I-III: Firepower over Armor',
        description: 'Japanese early tanks are fragile. Focus on the Chi-Nu II and its excellent 75mm gun to take out enemies from a distance.',
        priorityVehicles: [
          { id: 'chi-nu-2', name: 'Chi-Nu II', type: 'Tank', rank: 3, br: '4.3', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'ho-ri-proto', name: 'Ho-Ri Production', type: 'Tank', rank: 4, br: '7.3', role: 'Tank Destroyer', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'jp-rank-4-6',
        title: 'Rank IV-VI: Post-War Tech',
        description: 'The ST-B1 (Prototype Type 74) is a standout with its hydropneumatic suspension, allowing for unique firing angles.',
        priorityVehicles: [
          { id: 'stb-1', name: 'STB-1', type: 'Tank', rank: 5, br: '8.3', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'type-89', name: 'Type 89', type: 'Tank', rank: 6, br: '9.0', role: 'IFV', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'jp-rank-7-8',
        title: 'Rank VII-VIII: Type 10 Mastery',
        description: 'Dominating top tier with a 4-second autoloader. The Type 10 and Type 90 are unmatched in reload speed.',
        priorityVehicles: [
          { id: 'type-90', name: 'Type 90', type: 'Tank', rank: 7, br: '11.0', role: 'MBT', imageSeed: 'hangar' },
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
        id: 'cn-rank-1-3',
        title: 'Rank I-III: Mixed Heritage',
        description: 'Utilize the M24 Chaffee and T-34-85 hybrids. You get the mobility of US tanks with the heavy-hitting Soviet cannons.',
        priorityVehicles: [
          { id: 'm24-cn', name: 'M24 (China)', type: 'Tank', rank: 2, br: '3.7', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 't-34-85-cn', name: 'T-34-85 (G)', type: 'Tank', rank: 4, br: '5.7', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'cn-rank-4-6',
        title: 'Rank IV-VI: Type 59 & 69',
        description: 'Improved Soviet designs. The Type 69 features early laser rangefinders and APFSDS that catch opponents off guard.',
        priorityVehicles: [
          { id: 'type-59', name: 'Type 59', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'type-69', name: 'Type 69', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'cn-rank-7-8',
        title: 'Rank VII-VIII: ZTZ Series',
        description: 'Modern Chinese MBTs like the ZTZ99A combine extreme frontal protection with high-tech sensors.',
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
        id: 'it-rank-1-3',
        title: 'Rank I-III: Fast Attack',
        description: 'Speed is your only armor. The Breda 501 and R3 T20 allow you to reach positions before anyone else.',
        priorityVehicles: [
          { id: 'breda-501', name: 'Breda 501', type: 'Tank', rank: 3, br: '4.7', role: 'Tank Destroyer', imageSeed: 'hangar' },
          { id: 'r3-t20', name: 'R3 T20 FA-HS', type: 'Tank', rank: 3, br: '5.7', role: 'SPAA / Scout', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'it-rank-4-6',
        title: 'Rank IV-VI: The FIAT era',
        description: 'Master the recoiless rifles and early Centauros. Flank wide and use your mobility to disrupt the enemy team.',
        priorityVehicles: [
          { id: 'fiat-6614', name: 'FIAT 6614', type: 'Tank', rank: 5, br: '6.7', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'centauro-105', name: 'Centauro I 105', type: 'Tank', rank: 6, br: '9.3', role: 'Wheeled MBT', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'it-rank-7-8',
        title: 'Rank VII-VIII: Ariete & Centauro II',
        description: 'Focus on firepower. While the Ariete lacks armor, its shell is one of the best. The Centauro II is the king of wheeled vehicles.',
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
        id: 'fr-rank-1-3',
        title: 'Rank I-III: Tough Start, High Reward',
        description: 'Early French tanks are difficult. Push through to the AMX-13 series to experience the power of autoloaders.',
        priorityVehicles: [
          { id: 'amx-13-fl11', name: 'AMX-13 (FL11)', type: 'Tank', rank: 2, br: '4.3', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'm4a4-sa50', name: 'M4A4 (SA50)', type: 'Tank', rank: 3, br: '5.0', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'fr-rank-4-6',
        title: 'Rank IV-VI: The Autoloader Golden Age',
        description: 'The AMX-30 and AMX-50 series. Fast reloads and great mobility allow for devastating hit-and-run tactics.',
        priorityVehicles: [
          { id: 'amx-30-1972', name: 'AMX-30 (1972)', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'amx-50-surbaise', name: 'AMX-50 Surbaisse', type: 'Tank', rank: 4, br: '7.7', role: 'Heavy Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'fr-rank-7-8',
        title: 'Rank VII-VIII: Leclerc Supremacy',
        description: 'The Leclerc is the ultimate autoloader MBT. Fast, compact, and features a consistent 5-second reload.',
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
        id: 'se-rank-1-3',
        title: 'Rank I-III: Early APDS',
        description: 'Sweden gets Sabot rounds very early. Use this penetration advantage to punch through heavy armor at Rank III.',
        priorityVehicles: [
          { id: 'strv-m42-dt', name: 'Strv m/42 DT', type: 'Tank', rank: 3, br: '5.0', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'pvkv-m43', name: 'Pvkv m/43 (1963)', type: 'Tank', rank: 3, br: '5.0', role: 'Tank Destroyer', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'se-rank-4-6',
        title: 'Rank IV-VI: Wedge Warriors',
        description: 'The Strv 103 (S-Tank). A unique hull-aiming tank with a 4-second autoloader and a wedge shape for bouncing shells.',
        priorityVehicles: [
          { id: 'strv-103a', name: 'Strv 103A', type: 'Tank', rank: 5, br: '8.0', role: 'MBT', imageSeed: 'hangar' },
          { id: 'ussv-l62', name: 'L-62 Anti II', type: 'Tank', rank: 3, br: '2.7', role: 'SPAA', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'se-rank-7-8',
        title: 'Rank VII-VIII: Strv 122 Series',
        description: 'Widely considered the strongest top-tier ground lineup. The Strv 122B features superior armor to the standard Leopard 2.',
        priorityVehicles: [
          { id: 'strv-122a', name: 'Strv 122A', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'strv-122b-plss', name: 'Strv 122B PLSS', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' }
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
        id: 'il-rank-4-6',
        title: 'Rank IV-VI: The Magach Grind',
        description: 'Israel starts at Rank IV. You will play many variants of the M48/M60 (Magach). Focus on learning their nuances.',
        priorityVehicles: [
          { id: 'magach-1', name: 'Magach 1', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'tiran-4', name: 'Tiran 4', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'il-rank-7-8',
        title: 'Rank VII-VIII: Merkava Legend',
        description: 'Uniquely front-engined MBTs. The engine block acts as extra protection for the crew. Great for hull-down brawling.',
        priorityVehicles: [
          { id: 'merkava-mk4m', name: 'Merkava Mk.4M', type: 'Tank', rank: 7, br: '11.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'merkava-mk4-lic', name: 'Merkava Mk.4 LIC', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'hangar' }
        ]
      }
    ]
  }
];
