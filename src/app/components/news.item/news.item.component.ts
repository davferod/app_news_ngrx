import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { NewsComponent } from '../news/news.component';
import { selectListNews } from 'src/app/store/selectors/subsection.selector';

@Component({
  selector: 'app-newsItem',
  templateUrl: './news.item.component.html',
  styleUrls: ['./news.item.component.css']
})
export class NewsItemComponent {
  sub_sections$: Observable<any> = new Observable();
  itemSubsection$: Observable<any> = new Observable();

  constructor(public dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.sub_sections$ = this.store.select(selectListNews);
    this.sub_sections$.subscribe((newsList) => {
      console.log('newsList', newsList);
    });
  }

  openDialog(section: any[]): void {
    const dialogRef = this.dialog.open(NewsComponent, {
      data: section,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
