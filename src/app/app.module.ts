import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestcomponentComponentModule } from './testcomponent/testcomponent.component.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    TestcomponentComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
