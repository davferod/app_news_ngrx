import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SectionState } from 'src/app/interfaces/section.state';


export const selectSectionsNewsFeature = (state: AppState) => state.sectionNewsList;

export const selectSectionNews = createSelector(
  selectSectionsNewsFeature,
  (state: SectionState) => state.sectionsList.results
);

export const selectLoadingSections = createSelector(
  selectSectionsNewsFeature,
  (state: SectionState) => state.loading
);

export const selectLoadingListNews = createSelector(
  selectSectionsNewsFeature,
  (state: SectionState) => state.loading
);
