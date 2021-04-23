import { Component, OnInit } from '@angular/core';
import {MyAdat} from '../adat.model';
import {SrvService} from '../srv.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  adat = new MyAdat();

  constructor(
    private service: SrvService
  ){}

  ngOnInit(): void {
    this.adat = this.service.chosen[0];
  }

  public update(adat: any): void {
    alert('Update successfull');
  }

}
