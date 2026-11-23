export interface InspectionComponent {
  id: string;
  name: string;
  partNumber: string;
  expectedQty: number;
  detectedQty: number;
  status: 'pass' | 'fail' | 'review';
  confidence: number;
  orientationDeltaDeg: number;
  symmetryType: 'LH' | 'RH' | 'SYMMETRIC';
  detectedSymmetry: 'LH' | 'RH' | 'SYMMETRIC';
  barcode: string;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
  };
  notes?: string;
}

export interface PackingSpec {
  specId: string;
  boxType: string;
  exportDestination: string;
  customerCode: string;
  grossWeightKg: number;
  targetWeightKg: number;
  weightToleranceKg: number;
  components: InspectionComponent[];
}

export interface AuditRecord {
  id: string;
  boxSerial: string;
  timestamp: string;
  operatorId: string;
  operatorName: string;
  workstationId: string;
  status: 'PASS' | 'FAIL' | 'MANUAL_REVIEW';
  destinationCountry: string;
  destFlag: string;
  partCount: string;
  cycleTimeSec: number;
  weightDeltaGrams: number;
  cryptographicHash: string;
  complianceCert: string;
}

export interface InspectionScenario {
  id: string;
  title: string;
  status: 'PASS' | 'FAIL' | 'REVIEW';
  statusColor: string;
  description: string;
  anomalyTitle?: string;
  anomalyDetail?: string;
  activeComponents: InspectionComponent[];
  totalConfidence: number;
  dispatchPermitted: boolean;
}

