import { AuditRecord, InspectionScenario } from '../types';

export const INDUSTRIAL_IMAGES = {
  // Cinematic dark industrial images with golden metallic lighting
  heroInspection: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85',
  roboticArmGold: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1600&q=85',
  precisionMachining: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85',
  metalSparksDark: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=85',
  qualityControlStation: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
  logisticsWarehouse: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
  macroGearGold: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1600&q=85',
};

export const INSPECTION_SCENARIOS: InspectionScenario[] = [
  {
    id: 'pass-full',
    title: 'Scenario 01: Fully Verified Export Unit',
    status: 'PASS',
    statusColor: '#E7C58E',
    description: 'All 4 mandatory cavities verified against SAP MES Packing Spec PK-9941. Zero anomalies detected.',
    totalConfidence: 99.88,
    dispatchPermitted: true,
    activeComponents: [
      {
        id: 'c1',
        name: 'Planetary Gear Pinion',
        partNumber: 'SPK-GR-4401',
        expectedQty: 2,
        detectedQty: 2,
        status: 'pass',
        confidence: 99.94,
        orientationDeltaDeg: 0.1,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-4401-88912',
        boundingBox: { x: 18, y: 22, width: 28, height: 28, label: 'GEAR PINION x2 (PASS)' }
      },
      {
        id: 'c2',
        name: 'LH Steering Knuckle Hub',
        partNumber: 'SPK-KH-102-L',
        expectedQty: 1,
        detectedQty: 1,
        status: 'pass',
        confidence: 99.82,
        orientationDeltaDeg: 0.4,
        symmetryType: 'LH',
        detectedSymmetry: 'LH',
        barcode: 'UID-102L-33901',
        boundingBox: { x: 52, y: 20, width: 34, height: 32, label: 'LH KNUCKLE (VERIFIED)' }
      },
      {
        id: 'c3',
        name: 'Viton Radial Seal Ring',
        partNumber: 'SPK-SR-090-V',
        expectedQty: 1,
        detectedQty: 1,
        status: 'pass',
        confidence: 99.91,
        orientationDeltaDeg: 0.0,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-090V-44781',
        boundingBox: { x: 22, y: 56, width: 24, height: 26, label: 'SEAL RING 90mm (PASS)' }
      },
      {
        id: 'c4',
        name: 'M12 Grade 10.9 Flange Bolts',
        partNumber: 'SPK-FB-12-08',
        expectedQty: 6,
        detectedQty: 6,
        status: 'pass',
        confidence: 99.85,
        orientationDeltaDeg: 0.2,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-FB12-66239',
        boundingBox: { x: 54, y: 58, width: 30, height: 24, label: 'BOLT ARRAY x6 (PASS)' }
      }
    ]
  },
  {
    id: 'fail-missing',
    title: 'Scenario 02: Critical Defect — Missing Seal Ring',
    status: 'FAIL',
    statusColor: '#EF4444',
    description: 'Poka-Yoke Interlock Activated: Cavity 03 is empty. Packing spec requires Viton Radial Seal Ring.',
    anomalyTitle: 'MISSING COMPONENT IN CAVITY 03',
    anomalyDetail: 'Optical cavity reflectance confirms vacant nesting pocket. Gravimetric scale confirms -42.8g deficit.',
    totalConfidence: 99.96,
    dispatchPermitted: false,
    activeComponents: [
      {
        id: 'c1',
        name: 'Planetary Gear Pinion',
        partNumber: 'SPK-GR-4401',
        expectedQty: 2,
        detectedQty: 2,
        status: 'pass',
        confidence: 99.90,
        orientationDeltaDeg: 0.1,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-4401-88912',
        boundingBox: { x: 18, y: 22, width: 28, height: 28, label: 'GEAR PINION x2 (PASS)' }
      },
      {
        id: 'c2',
        name: 'LH Steering Knuckle Hub',
        partNumber: 'SPK-KH-102-L',
        expectedQty: 1,
        detectedQty: 1,
        status: 'pass',
        confidence: 99.81,
        orientationDeltaDeg: 0.3,
        symmetryType: 'LH',
        detectedSymmetry: 'LH',
        barcode: 'UID-102L-33901',
        boundingBox: { x: 52, y: 20, width: 34, height: 32, label: 'LH KNUCKLE (VERIFIED)' }
      },
      {
        id: 'c3',
        name: 'Viton Radial Seal Ring',
        partNumber: 'SPK-SR-090-V',
        expectedQty: 1,
        detectedQty: 0,
        status: 'fail',
        confidence: 99.98,
        orientationDeltaDeg: 0.0,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'MISSING_DATA',
        boundingBox: { x: 22, y: 56, width: 24, height: 26, label: 'ERROR: CAVITY VACANT (0/1)' }
      },
      {
        id: 'c4',
        name: 'M12 Grade 10.9 Flange Bolts',
        partNumber: 'SPK-FB-12-08',
        expectedQty: 6,
        detectedQty: 6,
        status: 'pass',
        confidence: 99.79,
        orientationDeltaDeg: 0.2,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-FB12-66239',
        boundingBox: { x: 54, y: 58, width: 30, height: 24, label: 'BOLT ARRAY x6 (PASS)' }
      }
    ]
  },
  {
    id: 'fail-lhrh',
    title: 'Scenario 03: Symmetrical Trap — LH/RH Mixup',
    status: 'FAIL',
    statusColor: '#EF4444',
    description: 'Poka-Yoke Interlock Activated: Cavity 02 contains RH Knuckle instead of scheduled LH Knuckle.',
    anomalyTitle: 'INCORRECT SYMMETRY VARIANT (RH DETECTED IN LH SLOT)',
    anomalyDetail: 'Vision model identified caliper mounting lug angled at +42° (RH profile) vs required -42° (LH profile).',
    totalConfidence: 99.64,
    dispatchPermitted: false,
    activeComponents: [
      {
        id: 'c1',
        name: 'Planetary Gear Pinion',
        partNumber: 'SPK-GR-4401',
        expectedQty: 2,
        detectedQty: 2,
        status: 'pass',
        confidence: 99.92,
        orientationDeltaDeg: 0.1,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-4401-88912',
        boundingBox: { x: 18, y: 22, width: 28, height: 28, label: 'GEAR PINION x2 (PASS)' }
      },
      {
        id: 'c2',
        name: 'LH Steering Knuckle Hub',
        partNumber: 'SPK-KH-102-L',
        expectedQty: 1,
        detectedQty: 1,
        status: 'fail',
        confidence: 99.64,
        orientationDeltaDeg: 14.8,
        symmetryType: 'LH',
        detectedSymmetry: 'RH',
        barcode: 'UID-102R-44109',
        boundingBox: { x: 52, y: 20, width: 34, height: 32, label: 'FAIL: RH PART IN LH CAVITY' }
      },
      {
        id: 'c3',
        name: 'Viton Radial Seal Ring',
        partNumber: 'SPK-SR-090-V',
        expectedQty: 1,
        detectedQty: 1,
        status: 'pass',
        confidence: 99.89,
        orientationDeltaDeg: 0.0,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-090V-44781',
        boundingBox: { x: 22, y: 56, width: 24, height: 26, label: 'SEAL RING 90mm (PASS)' }
      },
      {
        id: 'c4',
        name: 'M12 Grade 10.9 Flange Bolts',
        partNumber: 'SPK-FB-12-08',
        expectedQty: 6,
        detectedQty: 6,
        status: 'pass',
        confidence: 99.85,
        orientationDeltaDeg: 0.2,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-FB12-66239',
        boundingBox: { x: 54, y: 58, width: 30, height: 24, label: 'BOLT ARRAY x6 (PASS)' }
      }
    ]
  },
  {
    id: 'review-orientation',
    title: 'Scenario 04: Orientation Anomaly — Manual Review',
    status: 'REVIEW',
    statusColor: '#F59E0B',
    description: 'Supervisor Authorization Required: Fastener retention tray is inverted by 180°, blocking camera barcode reading.',
    anomalyTitle: 'OPTICAL OCCLUSION / 180° INVERSION',
    anomalyDetail: 'Vision AI flagged inverted tray placement. Weight is nominal (±0.4g) but 2D DataMatrix is obscured.',
    totalConfidence: 84.20,
    dispatchPermitted: false,
    activeComponents: [
      {
        id: 'c1',
        name: 'Planetary Gear Pinion',
        partNumber: 'SPK-GR-4401',
        expectedQty: 2,
        detectedQty: 2,
        status: 'pass',
        confidence: 99.91,
        orientationDeltaDeg: 0.1,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-4401-88912',
        boundingBox: { x: 18, y: 22, width: 28, height: 28, label: 'GEAR PINION x2 (PASS)' }
      },
      {
        id: 'c2',
        name: 'LH Steering Knuckle Hub',
        partNumber: 'SPK-KH-102-L',
        expectedQty: 1,
        detectedQty: 1,
        status: 'pass',
        confidence: 99.78,
        orientationDeltaDeg: 0.2,
        symmetryType: 'LH',
        detectedSymmetry: 'LH',
        barcode: 'UID-102L-33901',
        boundingBox: { x: 52, y: 20, width: 34, height: 32, label: 'LH KNUCKLE (PASS)' }
      },
      {
        id: 'c3',
        name: 'Viton Radial Seal Ring',
        partNumber: 'SPK-SR-090-V',
        expectedQty: 1,
        detectedQty: 1,
        status: 'pass',
        confidence: 99.88,
        orientationDeltaDeg: 0.0,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'UID-090V-44781',
        boundingBox: { x: 22, y: 56, width: 24, height: 26, label: 'SEAL RING (PASS)' }
      },
      {
        id: 'c4',
        name: 'M12 Grade 10.9 Flange Bolts',
        partNumber: 'SPK-FB-12-08',
        expectedQty: 6,
        detectedQty: 6,
        status: 'review',
        confidence: 84.20,
        orientationDeltaDeg: 179.4,
        symmetryType: 'SYMMETRIC',
        detectedSymmetry: 'SYMMETRIC',
        barcode: 'OCCLUDED_SCAN',
        boundingBox: { x: 54, y: 58, width: 30, height: 24, label: 'REVIEW: 180° ROTATION / OCCLUDED' }
      }
    ]
  }
];

export const AUDIT_RECORDS: AuditRecord[] = [
  {
    id: 'AUD-8891',
    boxSerial: 'EXP-DE-2026-9041A',
    timestamp: '2026-11-22 09:41:14 UTC',
    operatorId: 'OP-4412',
    operatorName: 'M. Becker (Cert #A-89)',
    workstationId: 'WS-STATION-01-EXP',
    status: 'PASS',
    destinationCountry: 'Germany (Stuttgart)',
    destFlag: '🇩🇪',
    partCount: '10/10 Components',
    cycleTimeSec: 1.42,
    weightDeltaGrams: +0.2,
    cryptographicHash: '0x8f4c2e...b941',
    complianceCert: 'ISO-9001-VERIFIED'
  },
  {
    id: 'AUD-8892',
    boxSerial: 'EXP-JP-2026-9042B',
    timestamp: '2026-11-22 09:38:02 UTC',
    operatorId: 'OP-4412',
    operatorName: 'M. Becker (Cert #A-89)',
    workstationId: 'WS-STATION-01-EXP',
    status: 'PASS',
    destinationCountry: 'Japan (Nagoya)',
    destFlag: '🇯🇵',
    partCount: '10/10 Components',
    cycleTimeSec: 1.35,
    weightDeltaGrams: -0.1,
    cryptographicHash: '0x12a9e1...e55c',
    complianceCert: 'IATF-16949-COMPLIANT'
  },
  {
    id: 'AUD-8893',
    boxSerial: 'EXP-US-2026-9043C',
    timestamp: '2026-11-22 09:32:51 UTC',
    operatorId: 'OP-3019',
    operatorName: 'T. Vance (Cert #B-14)',
    workstationId: 'WS-STATION-02-EXP',
    status: 'FAIL',
    destinationCountry: 'USA (Detroit MI)',
    destFlag: '🇺🇸',
    partCount: '9/10 Components (Missing Viton Seal)',
    cycleTimeSec: 1.68,
    weightDeltaGrams: -42.8,
    cryptographicHash: '0xd4802c...71aa',
    complianceCert: 'DISPATCH-INTERLOCKED-REJECTED'
  },
  {
    id: 'AUD-8894',
    boxSerial: 'EXP-MX-2026-9044D',
    timestamp: '2026-11-22 09:27:19 UTC',
    operatorId: 'OP-3019',
    operatorName: 'T. Vance (Cert #B-14)',
    workstationId: 'WS-STATION-02-EXP',
    status: 'PASS',
    destinationCountry: 'Mexico (Monterrey)',
    destFlag: '🇲🇽',
    partCount: '10/10 Components',
    cycleTimeSec: 1.29,
    weightDeltaGrams: +0.4,
    cryptographicHash: '0x7e3a90...f432',
    complianceCert: 'VDA-6.3-VERIFIED'
  },
  {
    id: 'AUD-8895',
    boxSerial: 'EXP-KR-2026-9045E',
    timestamp: '2026-11-22 09:19:40 UTC',
    operatorId: 'OP-4412',
    operatorName: 'M. Becker (Cert #A-89)',
    workstationId: 'WS-STATION-01-EXP',
    status: 'MANUAL_REVIEW',
    destinationCountry: 'S. Korea (Ulsan)',
    destFlag: '🇰🇷',
    partCount: '10/10 Components (Barcode Occlusion)',
    cycleTimeSec: 4.12,
    weightDeltaGrams: 0.0,
    cryptographicHash: '0x6b107e...8a90',
    complianceCert: 'SUPERVISOR-SIGN-OFF-REQUIRED'
  }
];

export const PACKING_FAILURES_DATA = [
  {
    id: '01',
    code: 'ERR-MISSING',
    title: 'Missing Components',
    subtitle: 'Cavity Vacancy & Unfilled Pockets',
    impact: 'Catastrophic assembly stoppage at destination port. Production line shutdown billed up to $85,000/hr.',
    detectionMethod: 'Multi-angle optical depth analysis & gravimetric mass baseline check.',
    severity: 'CRITICAL',
    frequencyPct: 34
  },
  {
    id: '02',
    code: 'ERR-EXCESS',
    title: 'Excess Quantities',
    subtitle: 'Over-Packing & Unrecorded Spares',
    impact: 'Customs declaration discrepancy, international tariff penalties, and systematic inventory drift.',
    detectionMethod: 'High-speed object clustering & bounding volume verification.',
    severity: 'HIGH',
    frequencyPct: 18
  },
  {
    id: '03',
    code: 'ERR-WRONG-SKU',
    title: 'Wrong Component Selection',
    subtitle: 'Cosmetic Lookalikes & Rev Level Mix-ups',
    impact: 'Sub-variant parts installed into end assemblies resulting in field recalls and catastrophic failure.',
    detectionMethod: 'Feature edge mapping & microscopic embossed revision code OCR.',
    severity: 'CRITICAL',
    frequencyPct: 22
  },
  {
    id: '04',
    code: 'ERR-LH-RH',
    title: 'Left-Hand / Right-Hand Mix-ups',
    subtitle: 'Asymmetric Mirror Part Confusion',
    impact: 'Unusable parts at overseas plants, immediate quarantine of entire shipping containers.',
    detectionMethod: 'Chirality neural classifier detecting asymmetrical mounting geometry.',
    severity: 'HIGH',
    frequencyPct: 14
  },
  {
    id: '05',
    code: 'ERR-ORIENTATION',
    title: 'Incorrect Orientation',
    subtitle: 'Inverted Pins, Reversed Gaskets',
    impact: 'Crushed connector pins, robotic pick-and-place collision during automated customer unboxing.',
    detectionMethod: '360° rotational vector scoring with ±1.5° angular tolerance.',
    severity: 'MEDIUM',
    frequencyPct: 8
  },
  {
    id: '06',
    code: 'ERR-BOX-ALLOC',
    title: 'Wrong Box Allocation',
    subtitle: 'Cross-Contamination Across Pallets',
    impact: 'Shipment sent to Frankfurt intended for Shanghai. High intercontinental air-freight redirect fees.',
    detectionMethod: 'Hardware dispatch gate RFID + 2D DataMatrix packing list reconciliation.',
    severity: 'CRITICAL',
    frequencyPct: 4
  }
];

