import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { from } from 'rxjs';
import { CustomgenderpipePipe } from './customgenderpipe.pipe';
import { FiltergenderPipe } from './filtergender.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ChildcomponentComponent,
    CustomgenderpipePipe,
    FiltergenderPipe,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
