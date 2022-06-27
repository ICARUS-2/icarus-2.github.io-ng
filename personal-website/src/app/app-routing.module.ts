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
    "A customizable dashboard UI that allows MoneroOcean miners to view their stats, transaction reports, blocks, and more from the MoneroOcean REST API! Includes the ability to change threshold and theme.",
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
    +"Developed in collaboration with <a href='https://github.com/overflow-gitch'  class='unstyledLink'>overflow-gitch</a> and <a href='https://github.com/philaube' class='unstyledLink'>philaube.</a> Developed as the final project for Fall 2021 Web Programming III course.",
    "GitHub Repository",
    "https://github.com/ICARUS-2/Web3Project",
    ""
  )},
  
  //Large Hashron Collider
  {path: "projects/large-hashron-collider", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "Large Hashron Collider",
    "Try your luck at searching for coins amongst the possible 2^256 Bitcoin keys! Based off of <a href='https://github.com/Kimbatt/btc-address-generator' class='unstyledLink'>Kimbatt's btc-address-generator</a>",
    "Go to Site",
    "/apps/large-hashron-collider/",
    ""
  )},

  //Bitcoin Clock
  {path: "projects/bitcoin-clock", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "Bitcoin Clock",
    "A clock that displays the time estimation of Bitcoin's block reward halving. Other data such as blocks until halvening, blockchain height, current/future block rewards, and price are also shown. Made with <a href='https://brandonlwhite.github.io/sevenSeg.js/' class='unstyledLink'>SevenSeg.js</a>",
    "Go to Site",
    "/apps/bitcoin-clock/",
    ""
  )},

  //COVID Simulator
  {path: "projects/covid-simulator", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "COVID-19 Simulator",
    "An adjustable simulator meant to show how COVID-19 and other viruses spread among a population."
    +" Developed in collaboration with <a href='https://github.com/overflow-gitch' class='unstyledLink'>overflow-gitch</a> and <a href='https://github.com/philaube' class='unstyledLink'>philaube.</a>. Created as the final project for Winter 2020 User Interfaces course.",
    "Go to Site",
    "/apps/covid-simulator/",
    ""
  )},

  //TNNF BudgetViewer
  {path: "projects/tnnf-budgetviewer", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "TNNF BudgetViewer",
    "A WPF financial planning app that lets the user manage different categories and expenses. Allows the user to create as many budget plans as they want and import them."
    + " Developed in collaboration with <a href='https://github.com/overflow-gitch' class='unstyledLink'>overflow-gitch</a> and <a href='https://github.com/philaube' class='unstyledLink'>philaube</a>. Created as the final project for Winter 2021 Application Development I course.",
    "GitHub Repository",
    "https://github.com/ICARUS-2/AppDevProject",
    ""
  )},

  //XvB_GUI
  {path: "projects/xvb-gui", component: ProjectInfoComponent, data: new ProjectInfoModel(
      "../../../assets/img/home/view.webp",
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
    "../../../assets/img/home/view.webp",
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
    "../../../assets/img/home/view.webp",
    "WaveDodger",
    "My first ever video game developed as the final project for Fall 2019 Programming I, written in C#. Dodge waves of enemies as they travel down the screen. Collect all of the coins in order to advance to the next level.<br><br> Also, don't die. No pressure.",
    "Download .zip (70MB)",
    "/assets/downloads/WaveDodger-1.12.zip",
    ""
  )},

  //WaveDodger II
  {path: "projects/wavedodger2", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
    "WaveDodger II",
    "The riveting sequel to the original! Featuring random enemy movement and a dual-mode level editor. <br><br>Also, don't die. Still no pressure.",
    "GitHub Repository",
    "https://github.com/ICARUS-2/wavedodger2",
    ""
  )
  },

  //SlimeDodger
  {path: "projects/slimedodger", component: ProjectInfoComponent, data: new ProjectInfoModel(
    "../../../assets/img/home/view.webp",
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
    "../../../assets/img/home/view.webp",
    "Video Poker",
    "A fun little CLI gambling game that is sure to cause an addiction to the real thing. Please don't develop an addiction to the real thing.",
    "Download (803KB)",
    "/assets/downloads/VideoPoker.zip",
    ""
  )
  },

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
