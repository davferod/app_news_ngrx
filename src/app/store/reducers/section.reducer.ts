import { createReducer, on } from '@ngrx/store';

import { LOAD_SECTION_NEWS, LOAD_SECTION_NEWS_SUCCESS} from '../actions/news.action';

import { SectionState } from 'src/app/interfaces/section.state';
import { SectionInterface } from 'src/app/interfaces/section.interface';

export const initialState: SectionState = {loading: false, sectionsList: <SectionInterface>{}};

export const LOAD_SECTIONS = createReducer(
  initialState,
  on(LOAD_SECTION_NEWS, (_state) => {
    return {
      ..._state,
      loading: true
    };
  }),

  on(LOAD_SECTION_NEWS_SUCCESS, (_state, {sectionsList}) => {
    return {
      ..._state,
      loading: false, sectionsList
    };
  })
);
