import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { NgIf } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; //addd
import { RouterModule } from '@angular/router'; // add
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
    declarations: [
        MainComponent,
        HomePageComponent
    ],
    imports: [
        MainRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        CommonModule,
        RouterModule, // add
    ],
    providers: [
        provideHttpClient(),
        { provide: LocationStrategy, useClass: HashLocationStrategy } // add
    ],
})
export class MainModule {
}