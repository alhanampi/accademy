import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ClickMeComponent } from './components/click-me/click-me.component';
import { KeyupComponent } from './components/keyup/keyup.component';
import { LoopBackV1Component } from './components/loop-back-v1/loop-back-v1.component';
import { LoopBackV2Component } from './components/loop-back-v2/loop-back-v2.component';
import { LoopBackV3Component } from './components/loop-back-v3/loop-back-v3.component';
import { LoopBackV4Component } from './components/loop-back-v4/loop-back-v4.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackV1Component,
    LoopBackV2Component,
    LoopBackV3Component,
    LoopBackV4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
