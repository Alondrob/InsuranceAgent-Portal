export interface Claim {
  id: number;
  policyNumber: string;
  dateofLoss: Date;
  causeOfLoss: string;
  claimAmount: number;
  status: string;
  claimType: string;
}