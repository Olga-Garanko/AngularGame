import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private database: DatabaseService, private router: Router) { }
  name: string;
  ngOnInit() {
    this.name = this.database.name;
  }
  setName() {
    this.database.setName(this.name);
    this.router.navigate(['/game']);
  }
}
