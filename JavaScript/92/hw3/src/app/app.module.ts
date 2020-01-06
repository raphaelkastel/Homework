import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CatagoryComponent } from './catagory/catagory.component';

@NgModule({
  declarations: [
    AppComponent,
    CatlistComponent,
    CatagoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
