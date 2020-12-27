import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../client';
import { GetClientsService } from '../get-clients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clients: Client[];

  constructor(
    private getClientsService: GetClientsService
  ) {
    this.clients = [];
  }
  ngOnInit(): void {
    this.getClients();
    this.getClientsService.reloadData(environment.baseUrl, environment.loadEveryNSeconds);
  }
  getClients(): void {
    this.getClientsService.myObservable$.subscribe((response) => {
      console.log({ response });
      this.clients = response;
    });
  }
}
