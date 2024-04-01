import { Routes } from '@angular/router';
import breedRoutes from "./pages/breed/breed.routes";
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'breed',
        pathMatch: 'full'
    },
    {
        path: 'breed',
        children: breedRoutes
    }
];
