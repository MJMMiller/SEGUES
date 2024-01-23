import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private ubicacionDataSubject = new BehaviorSubject<any>(null);
  ubicacionData$ = this.ubicacionDataSubject.asObservable();

  setUbicacionData(data: any) {
    this.ubicacionDataSubject.next(data);
  }

  constructor() { }
}
