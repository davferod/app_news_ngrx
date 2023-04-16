import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, groupBy, tap } from 'rxjs/operators';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Injectable()
export class NewsEffects {

  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType('[Section News] Load Section News'),
    exhaustMap(() => this.newsService.getSectionsList()
      .pipe(
        map(sectionsList => ({ type: '[Section News] Load Section News Success', sectionsList })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadNewsBySection$ = createEffect(() => this.actions$.pipe(
    ofType('[Filter Subsection] Load Section News By Section'),
    exhaustMap( ({sectionSelected}) => this.newsService.getSectionsNews( sectionSelected )
      .pipe(
        map(newsList => ({ type:'[Filter Subsection] Load Filter Subsection Success', newsList })),
        catchError(() => EMPTY)
      ))
    )
  );

  changeSectionIdEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[Filter Subsection] Load Section News By Section'), // Reemplaza MY_ACTION_TYPE con el tipo de acción que quieres escuchar
    tap(({ sectionSelected }) => {
      const newUrl = `/${sectionSelected}`; // Genera la nueva URL según tus necesidades
      this.router.navigateByUrl(newUrl); // Cambia la URL utilizando el enrutador de Angular
    }),
    map(() => ({ type: 'NO_ACTION' })) // Si no quieres emitir una nueva acción en respuesta al cambio de URL, puedes emitir una acción vacía o de marcador de posición
    )
  );

  changeSubsectionIdEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Subsections] Filter Subsection'), // Escucha la acción changeSubsectionId
        tap(({ subsection }) => {
          const currentUrlSegments = this.router.url.split('/'); // Obtiene los segmentos actuales de la URL
          console.log(currentUrlSegments);
          const sectionId = currentUrlSegments[1]; // Obtiene el valor de sectionId del segmento de la URL
          const url = `/${sectionId}/${subsection}`; // Genera la nueva URL con el sectionId y el subsectionId actualizados
          this.router.navigateByUrl(url); // Cambia la URL utilizando el enrutador de Angular
        })
      ),
    { dispatch: false } // No emite una nueva acción después de cambiar la URL
  );


  constructor(
    private actions$: Actions,
    private newsService: NewsService,
    private router: Router
  ) {}
}
