import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOAD_SECTION_NEWS } from 'src/app/store/actions/news.action';
import { AppState } from 'src/app/store/app.state';
import { selectSectionNews } from 'src/app/store/selectors/section.selector';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent {
  sections$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.sections$ = this.store.select(selectSectionNews);

  }

  loadSectionNewsBySection(sectionSelected: string) {
    console.log('sectionSelected: ', sectionSelected);
    this.store.dispatch(LOAD_SECTION_NEWS({ sectionSelected }));
  }

}
