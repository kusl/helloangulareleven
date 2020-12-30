import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';

import { Client } from './client';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class GetClientsService {
  private myBehaviorSubject: BehaviorSubject<Client[]>;
  public myObservable$: Observable<Client[]>;
  private subscription: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    const dummyData = this.createDummyData();
    this.myBehaviorSubject = new BehaviorSubject<Client[]>(dummyData);
    this.myObservable$ = this.myBehaviorSubject as Observable<Client[]>;
  }
  createDummyData() {
    const dummyClient = {
      Id: "19e57992-e27a-48c5-87d3-a577ef032928",
      ClientName: "Personal Touch",
      image: "images/BEBCapital.png"
    } as Client;
    return [ dummyClient ];
  }
  jsonUrl: string = `getclients`;
  getClients(baseUrl: string, jsonUrl: string = this.jsonUrl): void {
    const myObservable = this.http.get(`${baseUrl}/${jsonUrl}`) as Observable<Client[]>;
    this.loadingService.showLoaderUntilCompleted(myObservable).subscribe((response: Client[]) => {
      this.myBehaviorSubject.next(response);
    });
  }
  reloadData(baseUrl: string, loadEveryNSeconds: number): void {
    const source = interval(loadEveryNSeconds * 1000);
    this.subscription = source.subscribe((val: number) => {
      this.getClients(baseUrl);
    });
  }
}
