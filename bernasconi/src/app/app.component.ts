import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  risultato : Number;
 
  addizione(num1: HTMLInputElement, num2: HTMLInputElement): boolean {
    let addizione1 = Number(num1.value);
    let addizione2 = Number(num2.value);
    this.risultato = addizione1 + addizione2;
    return false;
  }
  sottrazione(num1: HTMLInputElement, num2: HTMLInputElement): boolean {
    let sottrazione1 = Number(num1.value);
    let sottrazione2 = Number(num2.value);
    this.risultato = sottrazione1 - sottrazione2;
    return false;
  }
  moltiplicazione(num1: HTMLInputElement, num2: HTMLInputElement): boolean {
    let moltiplicazione1 = Number(num1.value);
    let moltiplicazione2 = Number(num2.value);
    this.risultato = moltiplicazione1 * moltiplicazione2;
    return false;
  }
  divisione(num1: HTMLInputElement, num2: HTMLInputElement): boolean {
    let divisione1 = Number(num1.value);
    let divisione2 = Number(num2.value);
    this.risultato = divisione1 / divisione2;
    return false;
  }
}
