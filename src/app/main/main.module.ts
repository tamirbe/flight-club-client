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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


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
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
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