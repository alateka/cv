import {
  NavbarInterface,
  CreativeCommonsInterface,
} from "@interfaces/index.ts";

export interface DbInterface {
  navbar: Array<NavbarInterface>;
  title: String;
  welcome: String;
  languages_used: String;
  frameworks_used: String;
  first_description: String;
  creative_commons: CreativeCommonsInterface;
  full_name: String;
  mobile: String;
  alt_selfie: String;
}
