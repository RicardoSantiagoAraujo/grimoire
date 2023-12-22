import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipBookModule } from '@labsforge/flipbook';
import { TestFlipbookComponent } from './test-flipbook/test-flipbook.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFlipbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlipBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
