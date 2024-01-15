import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {ClientService} from "./_core/sevice/clientService";
import {PeriodicElement} from "../../server/mock";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, MatFormFieldModule, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'weight', 'symbol'];
  data: PeriodicElement[] = [];

  symbols = ['H', 'He', 'Be', 'Li', 'B', 'C', 'N', 'O', 'F', 'Ne'];
  weights = [1.0079, 4.0026, 6.941, 9.0122, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797];

  elements: number[] = [];

  constructor(private clientService: ClientService) {}

  printElements(): void {
    if (!this.elements.length){
      for (let i=0; i<5000; i++)
        this.elements.push(i);
    } else {
      this.elements = [];
    }
  }

  _random(max: number) {
    return Math.round(Math.random() * 1000) % max;
  }

  async onClick() {
    this.data = await this.clientService.getBigTable();
  }

  run() {
    this.data = this.buildData();
  }

  buildData(count: number = 1000): PeriodicElement[] {
    const data: PeriodicElement[] = [];
    for (let i = 0; i < count; i++) {
      data[i]={position: i, weight: this.weights[this._random(this.weights.length)], symbol: this.symbols[this._random(this.symbols.length)] };
    }
    return data;
  }

  add() {
    this.data = this.data.concat(this.buildData(1000));
  }

  update() {
    for (let i = 0; i < this.data.length; i += 5) {
      this.data[i].symbol += ' aaa';
    }
  }

  updateAll() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].symbol += ' !!!';
    }
  }
  runLots() {
    this.data = this.buildData(10000);
  }
  clear() {
    this.data = [];
  }
  swapRows() {
    if (this.data.length > 998) {
      const a = this.data[1];
      this.data[1] = this.data[998];
      this.data[998] = a;
    }
  }
}
