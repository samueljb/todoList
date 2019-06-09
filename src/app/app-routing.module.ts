import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'list', loadChildren: './todo/list/list.module#ListPageModule' },
  { path: 'create-update', loadChildren: './todo/create-update/create-update.module#CreateUpdatePageModule' },
  { path: 'create-update/:id', loadChildren: './todo/create-update/create-update.module#CreateUpdatePageModule' },
  { path: 'details/:id', loadChildren: './todo/details/details.module#DetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
