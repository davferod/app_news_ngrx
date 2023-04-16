import { createReducer, on } from '@ngrx/store';

import { LOAD_SECTION_NEWS, FILTER_SUBSECTION, FILTER_SUBSECTION_NEWS } from '../actions/news.action';
import { SubsectionState } from 'src/app/interfaces/subsection.state';
import { SubsectionInterface } from 'src/app/interfaces/subsection.interface';

export const initialState: SubsectionState = {
  loading: false,
  newsList: {} as SubsectionInterface,
  sectionSelected: '',
  listSubsections: <any>[],
  list: { results: {} },
  subsection: '',
};

export const LOAD_SUBSECTIONS = createReducer(
  initialState,
  on(LOAD_SECTION_NEWS, (_state, {sectionSelected}) => {
    return {
      ..._state,
      loading: true,
      sectionSelected
    };
  }),

  on(FILTER_SUBSECTION, (_state, {subsection}) => {
    const list = _state.newsList.results.filter((news) => news.section === subsection);
    /* const list = [...new Set(_state.newsList.results.filter((news) => news.section === subsection))]; */
    return {
      ..._state,
      loading: true,
      subsection,
      list: list
    }
  }),

  on(FILTER_SUBSECTION_NEWS, (_state, {newsList}) => {
    const uniqueListSubsections = [...new Set(newsList.results.map((news) => news.section))];
    const list = newsList.results.filter((news) => news.section === uniqueListSubsections[0]);
    /* const list = [...new Set(newsList.results.filter((news) => news.section === uniqueListSubsections[0]))]; */
    return {
      ..._state,
      loading: false,
      newsList,
      listSubsections: uniqueListSubsections,
      list: list,
    };
  }),

);



