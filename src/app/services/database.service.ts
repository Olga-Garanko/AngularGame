import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  name: string;
  times: number[];  
  records: object;

  constructor() {
    this.name = 'Player';
    this.times = [5, 10, 15];
    this.records = this.getRecords();
  }

  setName(name: string): void {
    this.name = name;
  }
  
  getRecords(): object {
    const records = {};
    this.times.forEach((time: number) => {
      const clicks: number = +localStorage.getItem(`time_${time}`) || 0;
      records[`time_${time}`] = clicks;
    })
    return records;
  }
  
  getRecord(time: number): number {
    return +this.records[`time_${time}`] || 0
  }

  setRecord(time: number, clicks: number): void {
    localStorage.setItem(`time_${time}`, `${clicks}`);
    this.records = this.getRecords();
  }

}
