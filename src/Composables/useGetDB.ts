import DB from "../Data/DB.json";
import { DbInterface } from "@interfaces/index.ts";

export function useGetDB(): DbInterface {
  return DB;
}
