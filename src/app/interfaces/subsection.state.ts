import { SubsectionInterface } from "./subsection.interface";

export interface SubsectionState {
  sectionSelected: string,
  loading: boolean,
  newsList: Readonly<SubsectionInterface>,
  listSubsections: ReadonlyArray<string>,
  list:{ [key: string]: any },
  subsection: string,
}
