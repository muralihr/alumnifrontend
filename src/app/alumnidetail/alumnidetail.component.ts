import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'; 
import {AlumniService} from '../alumni.service';

@Component({
  selector: 'app-alumnidetail',
  templateUrl: './alumnidetail.component.html',
  styleUrls: ['./alumnidetail.component.css']
})
export class AlumniDetailComponent implements OnInit {
  alumni : Object;
  
  constructor(
    private _alumniServices: AlumniService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._alumniServices.getAlumni(id).subscribe(movie => {
        this.alumni = movie;
      });
      
      
    })
  }

}
