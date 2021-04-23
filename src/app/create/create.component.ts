import { Component, OnInit } from '@angular/core';
import {MyAdat} from '../adat.model';
import {SrvService} from '../srv.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  adat = new MyAdat();

  constructor(
    private service: SrvService
  ){}

  ngOnInit(): void {
  }

  save(adat: any): void {
    if (this.adat.idDrink != null && this.adat.strDrink.length > 1 && this.adat.strDrinkThumb.length > 1 )
    {
      this.service.adatom.push(this.adat);
      this.adat = new MyAdat();
      alert('successful addition');
    }
    else{
      alert('Alert! Empty data');
    }
  }

}
