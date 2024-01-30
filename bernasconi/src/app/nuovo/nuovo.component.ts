import { Component , OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nuovo',
  templateUrl: './nuovo.component.html',
  styleUrls: ['./nuovo.component.css']
})
export class NuovoComponent implements OnInit{
  @Input() risultato: Number;
  constructor(){


  }
  ngOnInit(): void {
  }
}

