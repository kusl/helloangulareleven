import { Component, OnInit } from '@angular/core';
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
    this.getClientsService.getClients();
    this.getClients();
  }
  getClients(): void {
    this.getClientsService.myObservable$.subscribe((response) => {
      this.clients = response;
    });
  }
}
