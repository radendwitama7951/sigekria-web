import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full',
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ],
  },
  {
    path: 'news-analyzer',
    loadComponent: () =>
      import('./news-analyzer/news-analyzer.component').then(
        (c) => c.NewsAnalyzerComponent,
      ),
  },
];
