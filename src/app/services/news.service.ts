import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { SectionInterface } from '../interfaces/section.interface';
import { SubsectionInterface } from '../interfaces/subsection.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;
  private apiUrltopstories = environment.apiUrltopstories;

  constructor(private http: HttpClient) { }

  getSectionsList(): Observable<SectionInterface> {
    const url = `${this.apiUrl}section-list.json?api-key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map(response => {
        return response as SectionInterface;
      })
    );
  }

  getSectionsNews(sectionSelected: string): Observable<SubsectionInterface> {
    console.log(sectionSelected);
    const url = `${this.apiUrltopstories}${sectionSelected}.json?api-key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map(response => {
        return response as SubsectionInterface;
      })
    )
  }
}
