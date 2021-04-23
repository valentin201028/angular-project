import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SrvService} from './srv.service';

@Injectable({
  providedIn: 'root'
})

export class StopGuard implements CanActivate {

  constructor(
    public service: SrvService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if (this.service.logged){
    return true;
  }
  else{
    alert('First you must login');
    return false;
  }
  }

}
