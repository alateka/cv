import DB from "@data/DB.json";

export function getDataFromDB(key: String): Object { 
	return DB[key];
}
