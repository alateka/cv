import {
  NavbarInterface,
  CreativeCommonsInterface,
  ExperienceSectionInterface,
  KnowledgeSectionInterface,
} from "@interfaces/index.ts";

export interface DbInterface {
  navbar: Array<NavbarInterface>;
  title: string;
  welcome: string;
  languages_used: string;
  frameworks_used: string;
  first_description: string;
  creative_commons: CreativeCommonsInterface;
  full_name: string;
  mobile: string;
  alt_selfie: string;
  experience_section: ExperienceSectionInterface;
  knowledge_section: KnowledgeSectionInterface;
}
