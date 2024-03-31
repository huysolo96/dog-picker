import { Route } from "@angular/router";
import { BreedComponent } from "@pages/breed/breed.component";
import { MainComponent } from "@pages/breed/containers/main/main.component";
import { DetailsComponent } from "@pages/breed/containers/details/details.component";

export const ROUTE_PATHS = {
    MAIN: 'overview',
    DETAILS: 'details'
}
const routes: Route[] = [
    {
        path: '',
        component: BreedComponent,
        children: [
            {
                path: ROUTE_PATHS.MAIN,
                component: MainComponent
            },
            {
                path: ROUTE_PATHS.DETAILS,
                component: DetailsComponent
            }
        ]
    }
];

export default routes;