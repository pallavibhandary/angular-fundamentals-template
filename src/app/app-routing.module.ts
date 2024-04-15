import { RouterModule, Routes } from '@angular/router';
import { CourseCardComponent, CourseFormComponent, LoginFormComponent, RegistrationFormComponent } from './shared/components';
import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './features/course-info/course-info.component';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { AdminGuard } from './user/guards/admin.guard';


export const routes: Routes = [
    /* Add your code here */
    { path: 'login', component: LoginFormComponent },//,canActivate:[NotAuthorizedGuard]},
    { path: 'registration', component: RegistrationFormComponent }, //canActivate:[NotAuthorizedGuard]},
    { path: 'courses/:id', component: CourseInfoComponent, canLoad: [AuthorizedGuard] },
    //{path:'courses/edit/:id', component : CourseFormComponent,canActivate:[AdminGuard]},
    {
        path: 'courses/add',
        component: RegistrationFormComponent
    },
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
    },
    {
        path: 'courses',
        component: CourseCardComponent,
        loadChildren: () => import('./shared/shared.module').then(x => x.SharedModule),
        canLoad: [AuthorizedGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {


}
