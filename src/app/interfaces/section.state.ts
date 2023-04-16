import { SectionInterface } from "./section.interface";

export interface SectionState {
  loading: boolean,
  sectionsList: Readonly<SectionInterface>
}
