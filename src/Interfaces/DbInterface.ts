import { NavbarInterface } from "@interfaces/index.ts";

export interface DbInterface {
  navbar: Array<NavbarInterface>;
  title: String;
  first_description: String;
  creative_commons_text: String;
  full_name: String;
  mobile: String;
}
