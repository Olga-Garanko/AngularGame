import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  selectedTime: number = 10;
  clicks: number = 0;
  isActive: boolean = false;
  isBlocked: boolean = false;
  name: string;
  timer: number;
  records: object;
  message: string;

  constructor(private database: DatabaseService) { }
  
  ngOnInit() {
    this.name = this.database.name;
    this.records = this.database.getRecords();
    this.timer = this.selectedTime;
    console.log(this.records)
  }
  compareRecords() {
    console.log(this.clicks);
    if (this.clicks > this.getRecord(this.selectedTime)) {
      this.database.setRecord(this.selectedTime, this.clicks);
      this.records = this.database.getRecords();
      this.message = `Good`
    } else {
      this.message = `Bad`
    }

  }

  go() {
    const start = Date.now();
    const interval = setInterval(() => {
      this.timer = Math.round(this.selectedTime - (Date.now() - start)/1000);
    }, 1000)
    setTimeout(() => {
      clearInterval(interval);
      this.isActive = false;
      this.isBlocked = true;
      this.compareRecords();
    }, this.selectedTime*1000)
  }
  addCount() {
    if (this.isBlocked) {
      return;
    }
    if (!this.isActive) {
      this.isActive = true;
      this.go();
    }
    this.clicks = this.clicks + 1;
  }
  onReset() {
    this.isBlocked = false;
    this.clicks = 0;
    this.timer = this.selectedTime;
  }
  getRecord(time: number): number {
    return this.database.getRecord(time)
  }
  selectTime(value) {
    this.selectedTime = +value;
    this.timer = +value
  }
}
