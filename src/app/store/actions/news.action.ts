import { createAction, props } from '@ngrx/store';
import { SectionInterface } from '../../interfaces/section.interface';
import { SubsectionInterface } from 'src/app/interfaces/subsection.interface';

export const LOAD_SECTION_LIST_NEWS = createAction(
  '[Section News] Load Section News'
);

export const LOAD_SECTION_NEWS_SUCCESS = createAction(
  '[Section News] Load Section News Success',
  props<{ sectionsList: SectionInterface }>()
);

export const LOAD_SECTION_NEWS = createAction(
  '[Filter Subsection] Load Section News By Section',
  props<{ sectionSelected: string }>()
);

export const FILTER_SUBSECTION_NEWS = createAction(
  '[Filter Subsection] Load Filter Subsection Success',
  props<{ newsList: SubsectionInterface }>()
);

export const FILTER_SUBSECTION = createAction(
  '[Subsections] Filter Subsection',
  props<{ subsection: string }>()
);
