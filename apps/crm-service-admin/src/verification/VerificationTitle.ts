import { Verification as TVerification } from "../api/verification/Verification";

export const VERIFICATION_TITLE_FIELD = "id";

export const VerificationTitle = (record: TVerification): string => {
  return record.id?.toString() || String(record.id);
};
