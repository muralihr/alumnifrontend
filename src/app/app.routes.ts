import { Routes } from '@angular/router';
 
import { AlumniComponent } from './alumni/alumni.component'; 

import { AlumniDetailComponent} from './alumnidetail/alumnidetail.component';
  

import { LoginComponent } from './login/login.component';
 
import { DemoComponent } from './demo/demo.component';

import { UploadComponent } from './upload/upload.component';



export const appRoutes: Routes = [
    {path: '', component: AlumniComponent},
    
    //AlumniComponent
    
    {path: 'demo', component: DemoComponent},
        
    {path: 'alumni', component: AlumniComponent},
    
    {path: 'login', component: LoginComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'alumni/:id', component: AlumniDetailComponent} 
    //UploadComponent
   
];