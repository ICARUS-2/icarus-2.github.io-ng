import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { ProjectInfoComponent } from './projects/project-info/project-info.component';
import ProjectInfoModel from 'src/models/ProjectInfoModel';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'contact', component: ContactPageComponent},

  //test project info
  /*
  {path: "projects/test", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view2.webp", //Background image
    "Test header",                         //Header
    "Test description",                    //Description
    "Test",                                //Button text
    "",                                    //Href
    "/projects"                            //Router link
  )},*/

  //MoneroOcean Custom UI
  {path: "projects/moneroocean-custom-ui", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/a.webp", //Background image
    "MoneroOcean Custom UI",                                //
    "A customizeable dashboard UI that allows MoneroOcean miners to view their stats, transaction reports, blocks, and more! Includes the ability to change threshold and theme.",
    "Go to Dashboard",
    "/apps/mo-alt/login/",
    ""
  )},


  //redirect old site
  {path: 'en', redirectTo: ""},
  {path: 'fr', redirectTo: ""},
  {path: 'en/contact', redirectTo: "contact"},
  {path: 'fr/contact', redirectTo: "contact"},
  {path: 'en/projects', redirectTo: "projects"},
  {path: 'fr/projects', redirectTo: "projects"},

  {path: '**', redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
