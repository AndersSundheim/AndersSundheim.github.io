import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/galleria';
import { AppComponent } from './app.component';
import { AndersContainerComponent } from './anders-container/anders-container.component';
import { LabelContainerComponent } from './anders-container/label-container/label-container.component';
import { TreeComponent } from './anders-container/tree/tree.component';
import { DungeonBoxesComponent } from './anders-container/dungeon-boxes/dungeon-boxes.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConstellationsComponent } from './constellations/constellations.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/anders',
    pathMatch: 'full'
  },
  {
    path: 'anders',
    component: ProjectsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AndersContainerComponent,
    LabelContainerComponent,
    TreeComponent,
    DungeonBoxesComponent,
    SeperatorComponent,
    ConstellationsComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    CardModule,
    GalleriaModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
