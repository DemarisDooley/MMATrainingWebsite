import { Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {LoggedInComponent} from "./logged-in/logged-in.component";
import {LoggedOutComponent} from "./logged-out/logged-out.component";

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'logged-in', component: LoggedInComponent },
  { path: 'logged-out', component: LoggedOutComponent },

];
