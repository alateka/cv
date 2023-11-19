import DB from "../Data/DB.json";
import { DbInterface } from "@interfaces/index.ts";

export function getDataFromDB(): DbInterface {
  return DB;
}
