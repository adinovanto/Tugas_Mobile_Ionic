import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'mahasiswa-tambah',
    loadChildren: () => import('./mahasiswa-tambah/mahasiswa-tambah.module').then( m => m.MahasiswaTambahPageModule)
  },
  {
    path: 'mahasiswa-edit/:menu_id',
    loadChildren: () => import('./mahasiswa-edit/mahasiswa-edit.module').then( m => m.MahasiswaEditPageModule)
  },
  {
    path: 'tes-view',
    loadChildren: () => import('./tes-view/tes-view.module').then( m => m.TesViewPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
