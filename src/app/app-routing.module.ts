import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { TechnologyComponent } from './technology/technology.component';
import { ToptechComponent } from './toptech/toptech.component';
import { SportComponent } from './sport/sport.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';


const routes: Routes = [
  {path: "", component: TopHeadlinesComponent},
  {path: "technology", component: TechnologyComponent},
  {path: "toptech", component: ToptechComponent},
  {path: "sport", component: SportComponent},
  {path: "entertainment", component: EntertainmentComponent},
  {path: "health", component: HealthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
