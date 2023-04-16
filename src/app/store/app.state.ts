import { SectionState } from "../interfaces/section.state";
import { SubsectionState } from "../interfaces/subsection.state";

import { LOAD_SECTIONS } from "../store/reducers/section.reducer";
import { LOAD_SUBSECTIONS } from "../store/reducers/subsection.reducer";


export interface AppState {
  selectLoadingSections: any;
  sectionNewsList: SectionState,
  filterSubsections: SubsectionState,
}


export const ROOT_REDUCER = {
  sectionNewsList: LOAD_SECTIONS,
  filterSubsections: LOAD_SUBSECTIONS,
};
