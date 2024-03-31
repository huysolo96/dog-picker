import { Route } from "@angular/router";
import { BreedComponent } from "./breed.component";
import { MainComponent } from "./containers/main/main.component";
import { DetailsComponent } from "./containers/details/details.component";


const routes: Route[] = [
    {
        path: '',
        component: BreedComponent,
        children: [
            {
                path: "overview",
                component: MainComponent
            },
            {
                path: "details",
                component: DetailsComponent
            }
        ]
    }
];

export default routes;