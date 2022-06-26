import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  ProjectInfoModel from 'src/models/ProjectInfoModel';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  @Input() backgroundImageSource: string = ""
  @Input() header: string = "Header text"
  @Input() description: string = "description text"
  @Input() btnText: string = "button text"
  @Input() btnHref: string = ""
  @Input() btnRouterLink: string = ""

  constructor(private route: ActivatedRoute) {
      
   }

  ngOnInit(): void {
    this.route.data.subscribe(d =>
      {
        if (d["backgroundImageSource"])
        {
          this.backgroundImageSource = d["backgroundImageSource"]
        }

        if (d["header"])
        {
          this.header = d["header"]
        }

        if (d["description"])
        {
          this.description = d["description"]
        }

        if (d["btnText"])
        {
          this.btnText = d["btnText"]
        }

        if (d["btnHref"])
        {
          this.btnHref = d["btnHref"]
        }

        if (d["btnRouterLink"])
        {
          this.btnRouterLink = d["btnRouterLink"]
        }
      })
  }

}
