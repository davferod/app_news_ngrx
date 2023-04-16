import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { LOAD_SECTION_LIST_NEWS, LOAD_SECTION_NEWS } from './store/actions/news.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_news_ngrx';
  loading$: Observable<boolean> = new Observable();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(state => state.selectLoadingSections.loading);
    this.loading$ = this.store.select(state => state.sectionNewsList.loading);
    this.store.dispatch(LOAD_SECTION_LIST_NEWS());
    this.store.dispatch(LOAD_SECTION_NEWS({ sectionSelected: 'home' }));

  }

}
