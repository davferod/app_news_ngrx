import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectSubsectionNews } from '../../store/selectors/subsection.selector';
import { FILTER_SUBSECTION } from 'src/app/store/actions/news.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sub_sections$: Observable<any> = new Observable();
  uniqueNewsList!: any[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.sub_sections$ = this.store.select(selectSubsectionNews);
    this.sub_sections$.subscribe((newsList) => {console.log('lista', newsList)});


  }

  loadSectionNews(subsection: string) {
    console.log('sectionSelected: ', subsection);
    this.store.dispatch(FILTER_SUBSECTION({ subsection }));
  }
}
