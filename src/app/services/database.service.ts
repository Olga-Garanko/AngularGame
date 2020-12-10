import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  name: string;

  constructor() {
    this.name = 'Player';    
  }

  getRecord(time: number): number {
    return 0
  }
  setName(name: string): void {
    this.name = name;
  }
}
