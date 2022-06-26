import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {

  @Input() href:string=""
  @Input() routerLink: string=""
  @Input() text:string="Button text"

  constructor() { 
  }

  ngOnInit(): void {
    if (this.href != "" && this.routerLink != "")
      throw new Error("Either href or routerLink can be set, but not both")
  }

}
