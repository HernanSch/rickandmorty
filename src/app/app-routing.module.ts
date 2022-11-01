import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { CharactersPageComponent } from './page/characters-page/characters-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "characters", component: CharactersPageComponent},
  {path: "contact", component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
