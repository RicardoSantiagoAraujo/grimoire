import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipBookModule } from '@labsforge/flipbook';
import { TestFlipbookComponent } from './test-flipbook/test-flipbook.component';
import { CreaturePageAComponent } from './creature-page-a/creature-page-a.component';
import { CreaturePageBComponent } from './creature-page-b/creature-page-b.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFlipbookComponent,
    CreaturePageAComponent,
    CreaturePageBComponent,
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
