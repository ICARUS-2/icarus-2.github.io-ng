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
    "../../../assets/img/projects/moneroocean-customui-full.webp", //Background image
    "projects.moneroOceanCustomUi",
    "/apps/mo-alt/login/",
    ""
  )},

  
  //ElliptiKeys
  {path: "projects/elliptikeys", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/elliptikeys-full.webp",
    "projects.elliptiKeys",
    "https://elliptikeys.github.io/",
    ""
  )},

  
  //HG Pizza
  {path: "projects/hella-good-pizza-site", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/hgpizza-full.webp",
    "projects.hellaGoodPizza",
    "https://github.com/ICARUS-2/Web3Project",
    ""
  )},
  
  //Large Hashron Collider
  {path: "projects/large-hashron-collider", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/large-hashron-collider-full.webp",
    "projects.largeHashronCollider",
    "/apps/large-hashron-collider/",
    ""
  )},

  //Bitcoin Clock
  {path: "projects/bitcoin-clock", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/bitcoin-clock-full.webp",
    "projects.bitcoinClock",
    "/apps/bitcoin-clock/",
    ""
  )},

  //COVID Simulator
  {path: "projects/covid-simulator", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/covid-simulator-full.webp",
    "projects.covidSimulator",
    "/apps/covid-simulator/",
    ""
  )},

  /*
  //TNNF BudgetViewer
  {path: "projects/tnnf-budgetviewer", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/tnnfbudget-full.webp",
    "TNNF BudgetViewer",
    "A WPF financial planning app that lets the user manage different categories and expenses. Allows the user to create as many budget plans as they want and import them."
    + " Developed in collaboration with <a href='https://github.com/overflow-gitch' class='unstyledLink'>overflow-gitch</a> and <a href='https://github.com/philaube' class='unstyledLink'>philaube</a>. Created as the final project for Winter 2021 Application Development I course.",
    "GitHub Repository",
    "https://github.com/ICARUS-2/AppDevProject",
    ""
  )},

  //XvB_GUI
  {path: "projects/xvb-gui", component: ProjectInfoComponent, data: new ProjectInfoModel(
      "../../../assets/img/projects/xvb-gui-full.webp",
      "XvB_GUI",
      "A WPF dashboard application that retrieves pool and miner data on the XMRvsBEAST Monero Mining Pool. Allows the user to monitor payouts, boosts, and bonuses for up to three Monero addresses. For people who enjoy watching the markets, selectable exchange rates are displayed in-app."
      + "<br><br> Due to the pool's shutdown in favor of decentralized mining, this client has been deprecated and the source code has been archived. It can still be forked to use any pool's API.",
      "GitHub Repository (Archived)",
      "https://github.com/ICARUS-2/XvB_GUI",
      ""
    )
  },

  //TNNFContainers
  {path: "projects/tnnfcontainers-iot-system", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/tnnfcontainers-full.webp",
    "TNNFContainers IoT System",
    "An IoT system designed to control and monitor Raspberry Pi container farms. There are two primary components: The Python scripts running on the Pi sending the telemetry to the Azure IoT Hub, "
    + "and the Xamarin Forms app that interacts with the IoT Hub. Developed in collaboration with <a href='https://github.com/overflow-gitch' class='unstyledLink'>overflow-gitch</a> and <a href='https://github.com/philaube' class='unstyledLink'>philaube</a> as the Winter 2022 graduation project."
    +"<br><br>Documentation available <a class='unstyledLink' href='https://docs.google.com/document/d/1-52Zz_e1vIv51Z64m4wdY4Z31YisfALbznkaYPgknVE/'>here</a>",
    "Download .zip (42MB)",
    "/assets/downloads/course-project-tnnf-main.zip",
    ""
    )
  },

  //WaveDodger
  {path: "projects/wavedodger", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/wavedodger-full.webp",
    "WaveDodger",
    "My first ever video game developed as the final project for Fall 2019 Programming I, written in C#. Dodge waves of enemies as they travel down the screen. Collect all of the coins in order to advance to the next level.<br><br> Also, don't die. No pressure.",
    "Download .zip (70MB)",
    "/assets/downloads/WaveDodger-1.12.zip",
    ""
  )},

  //WaveDodger II
  {path: "projects/wavedodger2", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/wavedodger2-full.webp",
    "WaveDodger II",
    "The riveting sequel to the original! Featuring random enemy movement and a dual-mode level editor. <br><br>Also, don't die. Still no pressure.",
    "GitHub Repository",
    "https://github.com/ICARUS-2/wavedodger2",
    ""
  )
  },

  //SlimeDodger
  {path: "projects/slimedodger", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/slimedodger-full.webp",
    "WaveDodger III - SlimeDodger",
    "The third game in the WaveDodger series, implemented in Javascript. Developed in collaboration with <a href='https://github.com/overflow-gitch' class='unstyledLink'>overflow-gitch</a> for the final project of Fall 2021 Game Programming course."
    +" Code library provided by <a href='https://github.com/VikramSinghMTL' class='unstyledLink'>VikramSinghMTL</a>",
    "Play Game",
    "/games/SlimeDodger/",
    ""
  )
  },

  //Video Poker
  {path: "projects/video-poker", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/projects/video-poker-full.webp",
    "Video Poker",
    "A fun little CLI gambling game that is sure to cause an addiction to the real thing. Please don't develop an addiction to the real thing.",
    "Download (803KB)",
    "/assets/downloads/VideoPoker.zip",
    ""
  )
  },

  */

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
