import { Component, OnInit } from '@angular/core';

 
import {AlumniService} from '../alumni.service';

@Component({
  selector: 'alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  popularList: Array<Object>;
  
  constructor(private _alumniService: AlumniService) {
    this._alumniService.getPopular().subscribe(res => {
      this.popularList = res;
    });
  
  }

  ngOnInit() {
  }

  }
