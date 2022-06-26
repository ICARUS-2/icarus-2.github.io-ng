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
    "A customizeable dashboard UI that allows MoneroOcean miners to view their stats, transaction reports, blocks, and more from the MoneroOcean REST API! Includes the ability to change threshold and theme.",
    "Go to Dashboard",
    "/apps/mo-alt/login/",
    ""
  )},

  //ElliptiKeys
  {path: "projects/elliptikeys", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "ElliptiKeys",
    "Implemented using Angular and the Blockchain.com Data API, ElliptiKeys is a sequential database containing every single Bitcoin private/public key in existance, created for the purpose of educating the general public about the security of the Bitcoin network and 256-bit ECC. Yes, your private key is on here somewhere. No, no one will ever find it.",
    "Go to Site",
    "https://elliptikeys.github.io/",
    ""
  )},

  //HG Pizza
  {path: "projects/hella-good-pizza-site", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "Hella Good Pizza Site",
    "A test pizza restaurant website that demonstrates the four main C-R-U-D operations in a relational database, as well as user roles, permissions, and authentication. Written using .NET Core MVC with Entity Framework Core to handle database interactions. "
    +"Developed in collaboration with <a href='https://github.com/overflow-gitch'  class='unstyledLink'>overflow-gitch</a> and <a href='https://github.com/philaube' class='unstyledLink'>philaube</a>",
    "GitHub Repository",
    "https://github.com/ICARUS-2/Web3Project",
    ""
  )},
  
  {path: "projects/large-hashron-collider", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "Large Hashron Collider",
    "Try your luck at searching for coins amongst the possible 2^256 Bitcoin keys! Based off of <a href='https://github.com/Kimbatt/btc-address-generator' class='unstyledLink'>Kimbatt's btc-address-generator</a>",
    "Go to Site",
    "https://icarus-2.github.io/apps/large-hashron-collider/",
    ""
  )},

  {path: "projects/bitcoin-clock", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "Bitcoin Clock",
    "A clock that displays the time estimation of Bitcoin's block reward halving. Other data such as blocks until halvening, blockchain height, current/future block rewards, and price are also shown. Made with <a href='https://brandonlwhite.github.io/sevenSeg.js/' class='unstyledLink'>SevenSeg.js</a>",
    "Go to Site",
    "https://icarus-2.github.io/apps/bitcoin-clock/",
    ""
  )},

  {path: "projects/covid-simulator", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "COVID-19 Simulator",
    "An adjustable simulator meant to show how COVID-19 and other viruses spread among a population.",
    "Go to Site",
    "https://icarus-2.github.io/apps/covid-simulator/",
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
