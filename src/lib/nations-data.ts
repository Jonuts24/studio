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
        id: 'usa-rank-1',
        title: 'Rank I-II: The Sherman Foundation',
        description: 'Focus on M3 Stuarts for speed and the early M4 Shermans to learn hull down tactics.',
        priorityVehicles: [
          { id: 'm3-stuart', name: 'M3 Stuart', type: 'Tank', rank: 1, br: '2.0', role: 'Light Tank / Scout', imageSeed: 'usa-tank' },
          { id: 'm4a1-sherman', name: 'M4A1 Sherman', type: 'Tank', rank: 2, br: '3.3', role: 'Medium Tank', imageSeed: 'usa-tank' }
        ]
      },
      {
        id: 'usa-rank-4',
        title: 'Rank III-V: Heavy Metal',
        description: 'The era of the 76mm Shermans, M26 Pershings, and the mighty T34 heavy tank.',
        priorityVehicles: [
          { id: 'm4a3e8', name: 'M4A3 (76) W', type: 'Tank', rank: 3, br: '5.7', role: 'Medium Tank', imageSeed: 'usa-tank' },
          { id: 't34-heavy', name: 'T34', type: 'Tank', rank: 4, br: '6.7', role: 'Heavy Tank', imageSeed: 'usa-tank' }
        ]
      },
      {
        id: 'usa-rank-8',
        title: 'Rank VI-VIII: Modern MBTs',
        description: 'High-tier Abrams gameplay focusing on mobility and the M1A2 SEP series.',
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
        id: 'ger-rank-2',
        title: 'Rank I-III: Panzers & Tigers',
        description: 'Transition from the rapid-fire Pz.II to the legendary Tiger E and Panther A.',
        priorityVehicles: [
          { id: 'pz-iv-f2', name: 'Pz.IV F2', type: 'Tank', rank: 2, br: '3.3', role: 'Medium Tank', imageSeed: 'germany-tank' },
          { id: 'tiger-h1', name: 'Tiger H1', type: 'Tank', rank: 3, br: '5.7', role: 'Heavy Tank', imageSeed: 'germany-tank' }
        ]
      },
      {
        id: 'ger-rank-8',
        title: 'Rank IV-VIII: Leopards',
        description: 'Excellent optics and firepower define the Leopard 1 and Leopard 2A7V.',
        priorityVehicles: [
          { id: 'leopard-1', name: 'Leopard 1', type: 'Tank', rank: 5, br: '8.0', role: 'Medium Tank', imageSeed: 'germany-tank' },
          { id: 'leopard-2a7', name: 'Leopard 2A7V', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'germany-tank' }
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
        id: 'ussr-rank-2',
        title: 'Rank I-III: T-34 Legacies',
        description: 'The T-34 and KV-1 series offer unmatched survivability for beginners.',
        priorityVehicles: [
          { id: 't-34-1942', name: 'T-34 (1942)', type: 'Tank', rank: 2, br: '3.7', role: 'Medium Tank', imageSeed: 'ussr-tank' },
          { id: 'kv-1-zis5', name: 'KV-1 (ZiS-5)', type: 'Tank', rank: 3, br: '4.7', role: 'Heavy Tank', imageSeed: 'ussr-tank' }
        ]
      },
      {
        id: 'ussr-rank-8',
        title: 'Rank IV-VIII: Cold War to Modern',
        description: 'Low profiles and autoloader technology characterize the T-72, T-80, and T-90M.',
        priorityVehicles: [
          { id: 't-72b', name: 'T-72B (1989)', type: 'Tank', rank: 6, br: '10.0', role: 'MBT', imageSeed: 'ussr-tank' },
          { id: 't-90m', name: 'T-90M', type: 'Tank', rank: 8, br: '11.7', role: 'Top MBT', imageSeed: 'ussr-tank' }
        ]
      }
    ]
  },
  {
    id: 'britain',
    name: 'Great Britain',
    flag: '🇬🇧',
    summary: 'Specialists in Solid Shot, APDS, and the thickest armor plating (Churchills/Challengers).',
    stages: [
      {
        id: 'uk-rank-1',
        title: 'Rank I-III: Infantry & Cruisers',
        description: 'Fast cruisers like the Cromwell vs slow behemoths like the Churchill.',
        priorityVehicles: [
          { id: 'cromwell-v', name: 'Cromwell V', type: 'Tank', rank: 2, br: '3.3', role: 'Light/Medium', imageSeed: 'hangar' },
          { id: 'churchill-vii', name: 'Churchill VII', type: 'Tank', rank: 3, br: '4.7', role: 'Heavy Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'uk-rank-8',
        title: 'Rank IV-VIII: Challenger Series',
        description: 'Hull-down specialists with fast reloads and the Challenger 3 TD.',
        priorityVehicles: [
          { id: 'centurion-mk3', name: 'Centurion Mk 3', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'challenger-3', name: 'Challenger 3 (TD)', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' }
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
        id: 'jp-rank-1',
        title: 'Rank I-III: Post-War Transition',
        description: 'Early tanks are weak, but the Chi-Nu II and ST-A series provide great guns.',
        priorityVehicles: [
          { id: 'chi-nu-2', name: 'Chi-Nu II', type: 'Tank', rank: 3, br: '4.3', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'st-a1', name: 'ST-A1', type: 'Tank', rank: 4, br: '6.3', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'jp-rank-8',
        title: 'Rank IV-VIII: Type 10 Mastery',
        description: 'The 4-second reload of the Type 90 and Type 10 dominates top tier.',
        priorityVehicles: [
          { id: 'type-90', name: 'Type 90', type: 'Tank', rank: 7, br: '11.0', role: 'MBT', imageSeed: 'hangar' },
          { id: 'type-10', name: 'Type 10', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' }
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
        id: 'cn-rank-1',
        title: 'Rank I-IV: Mixed Heritage',
        description: 'Use the M24 Chaffee and T-34-85 (G) for a high-win-rate lineup.',
        priorityVehicles: [
          { id: 'm18-cn', name: 'M18 (China)', type: 'Tank', rank: 3, br: '5.7', role: 'Tank Destroyer', imageSeed: 'hangar' },
          { id: 'is-2-cn', name: 'IS-2 (1944)', type: 'Tank', rank: 4, br: '6.7', role: 'Heavy Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'cn-rank-8',
        title: 'Rank V-VIII: ZTZ Series',
        description: 'Modern Chinese MBTs like the ZTZ99A combine Soviet armor with western tech.',
        priorityVehicles: [
          { id: 'ztz96a', name: 'ZTZ96A', type: 'Tank', rank: 6, br: '9.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'ztz99a', name: 'ZTZ99A', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' }
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
        id: 'it-rank-1',
        title: 'Rank I-III: Fast Attack',
        description: 'Small, nimble vehicles like the L3/33 and the Breda 501.',
        priorityVehicles: [
          { id: 'breda-501', name: 'Breda 501', type: 'Tank', rank: 3, br: '4.7', role: 'Tank Destroyer', imageSeed: 'hangar' },
          { id: 'r3-t20', name: 'R3 T20 FA-HS', type: 'Tank', rank: 3, br: '5.7', role: 'SPAA', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'it-rank-8',
        title: 'Rank IV-VIII: Centauro Dominance',
        description: 'The Centauro series provides the best wheeled firepower in the game.',
        priorityVehicles: [
          { id: 'centauro-i-105', name: 'Centauro I 105', type: 'Tank', rank: 6, br: '9.3', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'ariete-amv', name: 'Ariete AMV', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' }
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
        id: 'fr-rank-1',
        title: 'Rank I-IV: The Autoloader Era',
        description: 'The AMX-13 and Bat-Chat series define French mid-tier play.',
        priorityVehicles: [
          { id: 'amx-13', name: 'AMX-13', type: 'Tank', rank: 4, br: '6.7', role: 'Light Tank', imageSeed: 'hangar' },
          { id: 'char-25t', name: 'Char 25t', type: 'Tank', rank: 4, br: '8.0', role: 'Light Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'fr-rank-8',
        title: 'Rank V-VIII: Leclerc Supremacy',
        description: 'Fast, compact, and highly automated Leclerc MBTs.',
        priorityVehicles: [
          { id: 'leclerc-s1', name: 'Leclerc S1', type: 'Tank', rank: 7, br: '11.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'leclerc-sxxxi', name: 'Leclerc SXXI', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' }
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
        id: 'se-rank-1',
        title: 'Rank I-III: APDS Early-Adopters',
        description: 'Sweden gets Sabot rounds earlier than any other nation.',
        priorityVehicles: [
          { id: 'strv-m42-dt', name: 'Strv m/42 DT', type: 'Tank', rank: 3, br: '5.0', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'strv-74', name: 'Strv 74', type: 'Tank', rank: 4, br: '5.7', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'se-rank-8',
        title: 'Rank IV-VIII: Strv 122 Series',
        description: 'Widely considered the best top-tier ground lineup in the game.',
        priorityVehicles: [
          { id: 'strv-122b', name: 'Strv 122B PLSS', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'itpsv-90', name: 'ItPsv 90', type: 'Tank', rank: 6, br: '8.7', role: 'SPAA', imageSeed: 'hangar' }
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
        title: 'Rank IV-VI: The Magach Grind',
        description: 'Israel starts at Rank IV. Master the Magach (M60 variants).',
        priorityVehicles: [
          { id: 'magach-1', name: 'Magach 1', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' },
          { id: 'tiran-4', name: 'Tiran 4', type: 'Tank', rank: 4, br: '7.7', role: 'Medium Tank', imageSeed: 'hangar' }
        ]
      },
      {
        id: 'il-rank-8',
        title: 'Rank VII-VIII: Merkava Legend',
        description: 'Uniquely front-engined MBTs built for the ultimate brawling experience.',
        priorityVehicles: [
          { id: 'merkava-mk4m', name: 'Merkava Mk.4M', type: 'Tank', rank: 7, br: '11.7', role: 'MBT', imageSeed: 'hangar' },
          { id: 'merkava-mk4-lic', name: 'Merkava Mk.4 LIC', type: 'Tank', rank: 8, br: '11.7', role: 'MBT', imageSeed: 'hangar' }
        ]
      }
    ]
  }
];
