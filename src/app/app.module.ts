import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileCardComponent } from './mobile-card/mobile-card.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
// import { PostCardComponent } from './post-card/post-card.component';
// import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
// import { MovieCardComponent } from './movie-card/movie-card.component';
// import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileCardComponent,
    MobileDashboardComponent,
    // PostCardComponent,
    // PostDashboardComponent,
    // MovieCardComponent,
    // MovieDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
