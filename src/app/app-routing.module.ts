// ROUTES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DashComponent } from './dash/dash.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { ShoppedComponent } from './shopped/shopped.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { StashComponent } from './stash/stash.component';
import { StashedComponent } from './stashed/stashed.component';
import { TagComponent } from './tag/tag.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'dash', component: DashComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'location', component: LocationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shopped', component: ShoppedComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'stash', component: StashComponent},
  {path: 'stashed', component: StashedComponent},
  {path: 'tag', component: TagComponent},
  {path: 'userprofile', component: UserprofileComponent},

  // {path: 'src/app/SPMDocs/site/index.html', component: RegisterComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
