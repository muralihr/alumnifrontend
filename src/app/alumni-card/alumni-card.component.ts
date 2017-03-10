import { Component, Input } from '@angular/core';

@Component({
  selector: 'alumni-card',
  templateUrl: './alumni-card.component.html',
  styleUrls: ['./alumni-card.component.css']
})
export class AlumniCardComponent {

  @Input()
  alumni: Object;

}
