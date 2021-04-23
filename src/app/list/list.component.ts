import { Component, OnInit } from '@angular/core';
import {SrvService} from '../srv.service';
import {UpdateComponent} from '../update/update.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public service: SrvService
  ) { }

  ngOnInit(): void {
    if (this.service.adatom.length === 0){
      this.service.fetch().subscribe(
        (data: any) => this.service.adatom = data.drinks);
    }
  }

  delete(adat: any): void {
    for (let i = 0; i < this.service.adatom.length; i++) {
      if (this.service.adatom[i] === adat) {
        this.service.adatom.splice(i, 1);
        alert('Delete successfully');
      }
    }
  }

  update(adat: any): void{
    this.service.chosen[0] = adat;
  }
}
