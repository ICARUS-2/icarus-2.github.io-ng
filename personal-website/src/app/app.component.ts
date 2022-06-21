import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'personal-website';

  constructor(private router: Router) { }

  ngOnInit() {

    //scrollPositionRestoration is buggy, this does it automatically
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        let navbar = document.querySelector("#navbar")

        navbar?.scrollIntoView();
    });
}

}
