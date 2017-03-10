import {Component, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
    selector: 'demo-app',
    template: `<nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                            <li><a>File Upload</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </nav>
                
                `
})
export class DemoComponent {
  //  public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});
  public uploader:FileUploader = new FileUploader({url:'http://localhost:8080/api/upload/alumni-photos'});
  public someValue2 ='hsh';
  
  //
   name: string;

  constructor() {
    this.name = 'Jose';
  }
  
  //
  ngOnInit() {
 this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
   form.append('username', this.name);
 };
}
  
} 