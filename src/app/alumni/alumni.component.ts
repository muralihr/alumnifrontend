import { Component, OnInit } from '@angular/core';
import { NgModule, Pipe, PipeTransform } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AlumniService } from '../alumni.service';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  popularList: Array<Object>;
  peopleFilter: any;
  searchBy: string;
  searchStr: string;

  constructor(private _alumniService: AlumniService) {

    //    this.peopleFilter = {firstName: 'Dinesh'};
    this.peopleFilter = {};
    this._alumniService.getPopular().subscribe(res => {
            this.popularList = res;
    });

  }

  ngOnInit() {
    this.peopleFilter = {};
  }


  searchAlumni() {
    if (this.strcmp(this.searchBy, "firstName") == 0) {
      console.log("searchiung by firsname" + this.searchStr);
      this.peopleFilter = { firstName: this.searchStr };

      if (this.strcmp(this.searchStr, "") == 0) {
        this.peopleFilter = {};
      }
    }
    else
      if (this.strcmp(this.searchBy, "cornellId") == 0) {
        console.log("searchiung by cornellAlumniIDNumber" + this.searchStr);
        this.peopleFilter = { cornellAlumniIDNumber: this.searchStr };
        if (this.strcmp(this.searchStr, "") == 0) {
          this.peopleFilter = {};
        }
      }    //
      else {
        console.log("setting empty");

      }




  }

  strcmp(a, b) {
    a = a.toString(), b = b.toString();
    for (var i = 0, n = Math.max(a.length, b.length); i < n && a.charAt(i) === b.charAt(i); ++i);
    if (i === n) return 0;
    return a.charAt(i) > b.charAt(i) ? -1 : 1;
  }


}
///filter pipe

//our root app component

