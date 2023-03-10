import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'components/inline-modals',
    pathMatch: 'full',
  },
  {
    path: 'components',
    children: [
      {
        path: 'inline-modals',
        loadChildren: () =>
          import(
            './components/inline-modals/inline-modals.routes'
          ).then((m) => m.routes),
      },
    ],
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
];
