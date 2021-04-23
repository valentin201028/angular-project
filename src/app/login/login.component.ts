import { Component, OnInit } from '@angular/core';
import {SrvService} from '../srv.service';
import {LogAdat} from '../log.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';
  log = new LogAdat();

  constructor(
    public service: SrvService,
    private router: Router
  ) {}


  ngOnInit(): void {

  }

  check(): void {
    if (this.name === this.log.name && this.password === this.log.password)
    {
      this.service.logged = true;
      this.router.navigate(['/list']);
    }else{
      alert('Invalid Username or Password!');
    }
  }
}
