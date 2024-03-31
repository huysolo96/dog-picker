import { Routes } from '@angular/router';
import breedRoutes from "./pages/breed/breed.routes";
export const routes: Routes = [
    {
        path: 'breed',
        children: breedRoutes
    }
];
