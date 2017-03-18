import { Routes } from '@angular/router';
 
import { AlumniComponent } from './alumni/alumni.component'; 

import { AlumniDetailComponent} from './alumnidetail/alumnidetail.component';
  

import { LoginComponent } from './login/login.component';
 
import { DemoComponent } from './demo/demo.component';





export const appRoutes: Routes = [
    {path: '', component: AlumniComponent},
    
    //AlumniComponent
    
    {path: 'upload', component: DemoComponent},
        
    {path: 'alumni', component: AlumniComponent},
    
    {path: 'login', component: LoginComponent},
    
    {path: 'alumni/:id', component: AlumniDetailComponent} 
    //UploadComponent
   
];