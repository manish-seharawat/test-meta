import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetDetailsService } from './get-details.service';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpModule } from '@angular/http';
const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'details/:username', component: UserDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [GetDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
