import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutCompanyComponent } from './pages/about-company/about-company.component';
import { AboutPeopleComponent } from './pages/about-people/about-people.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { PaymentsComponent } from './pages/payments/payments.component';

export const routes: Routes = [
    {path:"", redirectTo: "/home", pathMatch:"full"},
    {path: "home", component: HomeComponent},
    {path: 'about', component: AboutComponent, children:[ // creating nexted routes under /about
        {path:'', redirectTo:"/about/company", pathMatch: 'full'},// if the path is /about redirect to /about/company
        {path:'company', component: AboutCompanyComponent},
        {path: 'people', component: AboutPeopleComponent},
    ]},
    {path: 'users', component: UsersComponent},
    {path: 'users/:name', component: UserDetailComponent},
    {path: 'payments', loadComponent: () => import('./pages/payments/payments.component').then(c=>c.PaymentsComponent)}, // Lazy loading - Load the component when the user visit the path
    {path: '**', component: PageNotFoundComponent} 
    // {path: 'payments', component: PaymentsComponent}
    // {path: 'about/company', component: AboutCompanyComponent},
    // {path: 'about/people', component: AboutPeopleComponent}
];
