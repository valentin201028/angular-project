import { Injectable } from '@angular/core';
import {MyAdat} from './adat.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LogAdat} from './log.model';

@Injectable({
  providedIn: 'root'
})
export class SrvService {
/*
Hollósi Valentin
CCRXC5
 */

  public adatom: MyAdat[] = [];
  public chosen: MyAdat[] = [];
  public log: LogAdat[] = [];
  public logged = false;

  constructor(
    private http: HttpClient
  ) { }

  public fetch(): Observable<any>{
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
  }
}
