import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {IndexComponent} from "./index/index.component";
import {LoggedInComponent} from "./logged-in/logged-in.component";
import {LoggedOutComponent} from "./logged-out/logged-out.component";
import {routes} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoggedInComponent,
    LoggedOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
