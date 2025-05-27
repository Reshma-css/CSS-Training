import { Routes } from '@angular/router';
import { BasicCSSComponent } from './basic-css/basic-css.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { CenteringComponent } from './centering/centering.component';
import { MediaQueryComponent } from './media-query/media-query.component';
import { MarginPaddingComponent } from './margin-padding/margin-padding.component';
import { CSSOutlineComponent } from './css-outline/css-outline.component';
import { CssTablesComponent } from './css-tables/css-tables.component';
import { DispalyPropertyComponent } from './dispaly-property/dispaly-property.component';
import { ZIndexComponent } from './z-index/z-index.component';
import { CombinatorsComponent } from './combinators/combinators.component';
import { DropdownComponent } from './dropdown/dropdown.component';

export const routes: Routes = [
    {path:'',component:BasicCSSComponent},
    {path:'background',component:BackgroundsComponent},
    {path:'centering',component:CenteringComponent},
    {path:'media-query',component:MediaQueryComponent},
    {path:'margin-padding',component:MarginPaddingComponent},
    {path:'css-outline',component:CSSOutlineComponent},
    {path:'css-tables',component:CssTablesComponent},
    {path:'css-display',component:DispalyPropertyComponent},
    {path:'z-index',component:ZIndexComponent},
    {path:'combinators',component:CombinatorsComponent},
    {path:'dropdown',component:DropdownComponent},
];
