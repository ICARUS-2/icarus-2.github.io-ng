import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TriangularBannerComponent } from './shared/triangular-banner/triangular-banner.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ParallaxComponent } from './shared/parallax/parallax.component';
import { ListItemComponent } from './shared/list-item/list-item.component';
import { ListItemPairComponent } from './shared/list-item-pair/list-item-pair.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TriangularBannerComponent,
    HomepageComponent,
    ParallaxComponent,
    ListItemComponent,
    ListItemPairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
