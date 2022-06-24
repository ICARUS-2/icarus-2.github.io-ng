import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import TitleHelper from './../../../helpers/TitleHelper';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle(TitleHelper.concat("Projects"))
   }

  ngOnInit(): void {
  }

}
