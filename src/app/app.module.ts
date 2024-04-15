import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CourseInfoComponent } from './features/course-info/course-info.component';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { CoursesStoreService } from './services/courses-store.service';
import { CoursesService } from './services/courses.service';
import { ButtonComponent, CourseCardComponent, CourseFormComponent, HeaderComponent, InfoComponent, LoginFormComponent, RegistrationFormComponent, SearchComponent } from './shared/components';
import { ModalComponent } from './shared/components/modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AdminGuard } from './user/guards/admin.guard';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        CourseInfoComponent,
        //HeaderComponent,
        // CourseCardComponent,
        // CourseFormComponent,
        // ButtonComponent,
        // InfoComponent,
        // LoginFormComponent,
        // ModalComponent,
        // RegistrationFormComponent,
        // SearchComponent

    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [AuthorizedGuard, NotAuthorizedGuard, CoursesService, CoursesStoreService, AdminGuard, Window,
        {
            provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
        }],
    bootstrap: [AppComponent],
})
export class AppModule { }
