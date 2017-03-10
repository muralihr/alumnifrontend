import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { Ng2Webstorage } from 'ng2-webstorage';
import { AppComponent } from './app.component';
import { AlumniComponent } from './alumni/alumni.component';
import { AlumniCardComponent } from './alumni-card/alumni-card.component';
import { AlumniDetailComponent } from './alumnidetail/alumnidetail.component';
import { NgUploaderModule } from 'ngx-uploader';
import { UploadComponent } from './upload/upload.component';

import { DemoComponent } from './demo/demo.component';

import {WebService} from "./web.service";
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes'; 
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AuthServerProviderService } from './auth-server-provider.service';

 
@NgModule({
  declarations: [
    AppComponent,
    AlumniComponent,
    AlumniCardComponent,
    UploadComponent,
    DemoComponent ,
    AlumniDetailComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    JsonpModule,
    Ng2Webstorage,
    NgUploaderModule ,
  
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WebService,LoginService, AuthServerProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
