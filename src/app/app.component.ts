import { Component } from '@angular/core'; 
import {AlumniService} from './alumni.service';
import { AuthServerProviderService } from './auth-server-provider.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AlumniService]
})
export class AppComponent {
  title = 'Alumni Class Book!';
  item: string = "";
  subscription: any;
  constructor(private navService:AuthServerProviderService) {}


  ngOnInit() {
    this.subscription = this.navService.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }
  
  selectedNavItem(item: string) 
  {

    console.log("received username" +item);

    
    this.item = item;
  }
  
  ngOnDestroy() 
  {
    this.subscription.unsubscribe();
  }
}
