import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SubsectionState } from 'src/app/interfaces/subsection.state';


export const SubsectionsNewsFeature = (state: AppState) => state.filterSubsections;

export const selectSubsectionNews = createSelector(
  SubsectionsNewsFeature,
  (state: SubsectionState) => state.listSubsections
);

export const selectLoadingSubsections = createSelector(
  SubsectionsNewsFeature,
  (state: SubsectionState) => state.loading
);

export const selectListNews = createSelector(
  SubsectionsNewsFeature,
  (state: SubsectionState) => state.list
);
