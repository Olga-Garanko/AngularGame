import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records: Object;
  keys: string[]
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.records = this.database.records;
    this.keys = Object.keys(this.database.records);
  }

}
