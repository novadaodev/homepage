import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MintComponent } from './mint/mint.component';
import { StakeComponent } from './staking/stake.component';
import { Education } from './education/education.component';
import {ApplicationpageComponent } from './applicationpage/applicationpage.component';
import { latestProComponent } from './latestPro/latestPro.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import {DAOComponent} from './dao/dao.component'
import { ProjectappComponent } from './projectapp/projectapp.component';
import { ProjectsComponent } from './projects/projects.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../services/auth.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'mint', component: MintComponent },
  { path: 'stake', component: StakeComponent },
  { path: 'education', component: Education },
  // { path: 'application', component:ApplicationpageComponent},
  { path: 'latestProjects', component:latestProComponent},
  { path: 'project', component:ProjectpageComponent},
  { path: 'DAO',canActivate:[AuthGuard], component:DAOComponent},
  { path: 'application',component:ProjectappComponent},
  { path: 'pastProjects',component:ProjectsComponent},
  { path: 'AllProjects',component:AllprojectsComponent},
  { path: 'admin',component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}