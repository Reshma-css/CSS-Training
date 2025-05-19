import { Routes } from '@angular/router';
import { BasicCSSComponent } from './basic-css/basic-css.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { CenteringComponent } from './centering/centering.component';

export const routes: Routes = [
    {path:'',component:BasicCSSComponent},
    {path:'background',component:BackgroundsComponent},
    {path:'centering',component:CenteringComponent},
];
