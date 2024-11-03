import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'; //addd
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    {
        path: "",
        component: MainComponent,
        children: [
            { path: 'home-page', component: HomePageComponent },
            { path: '**', redirectTo: '/home-page' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy } //add
    ],
})

export class MainRoutingModule { }