import { Prestataire as TPrestataire } from "../api/prestataire/Prestataire";

export const PRESTATAIRE_TITLE_FIELD = "name";

export const PrestataireTitle = (record: TPrestataire): string => {
  return record.name?.toString() || String(record.id);
};
