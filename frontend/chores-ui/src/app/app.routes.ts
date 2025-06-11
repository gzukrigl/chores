import { Routes } from '@angular/router';

export const routes: Routes = [
    {'path': '', redirectTo: '/chores', pathMatch: 'full'},
    {'path': 'chores', loadComponent: () => import('./chores-list/chores-list.component').then(m => m.ChoresListComponent)},
    {'path': 'chores/:id', loadComponent: () => import('./chore/chore.component').then(m => m.ChoreComponent)},
    {'path': '**', redirectTo: '/chores' }
];
