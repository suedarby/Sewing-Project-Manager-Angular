import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StashComponent } from './stash/stash.component';
import { DashComponent } from './dash/dash.component';
import { ProjectComponent } from './project/project.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { BudgetComponent } from './budget/budget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShoppedComponent } from './shopped/shopped.component';
import { StashedComponent } from './stashed/stashed.component';
import { IonicModule } from '@ionic/angular';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StashComponent,
    DashComponent,
    ProjectComponent,
    ShoppingComponent,
    BudgetComponent,
    ContactComponent,
    FeaturesComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    UserprofileComponent,
    AdminComponent,
    ProjectsComponent,
    ShoppedComponent,
    StashedComponent,
    CategoryComponent,
    TagComponent,
    LocationComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
