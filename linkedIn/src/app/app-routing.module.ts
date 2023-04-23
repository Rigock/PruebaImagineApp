import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'LinkedIn',
    loadChildren: () =>  import('./linkedIn/linked-in-page.module').then(m => m.LinkedInPageModule)
  },
  {
      path: '**',
      redirectTo: 'LinkedIn'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
