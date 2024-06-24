import { PrestataireWhereInput } from "./PrestataireWhereInput";
import { PrestataireOrderByInput } from "./PrestataireOrderByInput";

export type PrestataireFindManyArgs = {
  where?: PrestataireWhereInput;
  orderBy?: Array<PrestataireOrderByInput>;
  skip?: number;
  take?: number;
};
