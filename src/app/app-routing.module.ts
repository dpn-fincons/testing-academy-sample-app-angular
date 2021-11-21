import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AutoSignInComponent} from './components/auto-sign-in/auto-sign-in.component';
import {MainComponent} from './components/main/main.component';
import {ResultComponent} from './components/result/result.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'results',
    component: ResultComponent
  },
  {
    path: 'auto-sign-in',
    component: AutoSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
