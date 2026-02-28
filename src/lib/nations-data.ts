export type Vehicle = {
  id: string;
  name: string;
  type: 'Tank' | 'Plane' | 'Ship';
  tier: number;
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
    summary: 'The USA offers versatile tanks with great stabilizers and powerful CAS (Close Air Support) aircraft.',
    stages: [
      {
        id: 'usa-1',
        title: 'Rank I: The Foundation',
        description: 'Focus on capturing points and learning the maps with light, fast vehicles.',
        priorityVehicles: [
          { id: 'm3-stuart', name: 'M3 Stuart', type: 'Tank', tier: 1, br: '2.0', role: 'Light Tank / Scout', imageSeed: 'usa-tank' },
          { id: 'm4a3-105', name: 'M4A3 (105)', type: 'Tank', tier: 1, br: '3.0', role: 'Heavy Support', imageSeed: 'usa-tank' },
          { id: 'p36-hawk', name: 'P-36A Hawk', type: 'Plane', tier: 1, br: '1.7', role: 'Air Superiority Fighter', imageSeed: 'plane-combat' }
        ]
      },
      {
        id: 'usa-2',
        title: 'Rank II: The Sherman Era',
        description: 'Learn to use vertical stabilizers to fire on the move.',
        priorityVehicles: [
          { id: 'm4a1-sherman', name: 'M4A1 Sherman', type: 'Tank', tier: 2, br: '3.3', role: 'Medium Tank / All-rounder', imageSeed: 'usa-tank' },
          { id: 'm24-chaffee', name: 'M24 Chaffee', type: 'Tank', tier: 2, br: '3.7', role: 'Light Tank / Scouting', imageSeed: 'usa-tank' }
        ]
      }
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    summary: 'German vehicles excel in long-range sniping with superior cannon performance.',
    stages: [
      {
        id: 'ger-1',
        title: 'Rank I: Rapid Fire',
        description: 'High velocity guns and autocannons dominate early tiers.',
        priorityVehicles: [
          { id: 'pzkpfw-ii-c', name: 'Pz.Kpfw. II Ausf. C', type: 'Tank', tier: 1, br: '1.3', role: 'Light Tank / Autocannon', imageSeed: 'germany-tank' },
          { id: 'pzkpfw-iii-f', name: 'Pz.Kpfw. III Ausf. F', type: 'Tank', tier: 1, br: '2.3', role: 'Medium Tank / Sniping', imageSeed: 'germany-tank' }
        ]
      },
      {
        id: 'ger-2',
        title: 'Rank II: 75mm Mastery',
        description: 'The Panzer IV F2 marks the transition to the deadly 75mm long guns.',
        priorityVehicles: [
          { id: 'pzkpfw-iv-f2', name: 'Pz.Kpfw. IV Ausf. F2', type: 'Tank', tier: 2, br: '3.7', role: 'Glass Cannon / Sniping', imageSeed: 'germany-tank' },
          { id: 'bf-109-f1', name: 'Bf 109 F-1', type: 'Plane', tier: 2, br: '2.7', role: 'Energy Fighter', imageSeed: 'plane-combat' }
        ]
      }
    ]
  },
  {
    id: 'ussr',
    name: 'USSR',
    flag: '🇷🇺',
    summary: 'The USSR features excellent armor sloped for maximum survivability and strong early-tier firepower.',
    stages: [
      {
        id: 'ussr-1',
        title: 'Rank I: T-26 and BT-5',
        description: 'Use your speed to outflank opponents.',
        priorityVehicles: [
          { id: 'bt-7', name: 'BT-7', type: 'Tank', tier: 1, br: '2.0', role: 'Light Tank / High Speed', imageSeed: 'ussr-tank' },
          { id: 't-28', name: 'T-28', type: 'Tank', tier: 1, br: '2.3', role: 'Medium Tank / Multi-turret', imageSeed: 'ussr-tank' }
        ]
      },
      {
        id: 'ussr-2',
        title: 'Rank II: Sloped Armor',
        description: 'The legendary T-34 provides a balance of protection, mobility, and firepower.',
        priorityVehicles: [
          { id: 't-34-1941', name: 'T-34 (1941)', type: 'Tank', tier: 2, br: '3.7', role: 'Brawler / Sloped Armor', imageSeed: 'ussr-tank' },
          { id: 'yak-1', name: 'Yak-1', type: 'Plane', tier: 2, br: '2.3', role: 'Low Altitude Fighter', imageSeed: 'plane-combat' }
        ]
      }
    ]
  }
];
