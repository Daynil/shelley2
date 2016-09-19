import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormsComponent } from './forms/forms.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { ContactComponent } from './contact/contact.component';
import { CassieComponent } from './cassie/cassie.component';
import { BlogComponent } from './blog/blog.component';

/** Specialties Subtabs */
import { AnimalComponent } from './specialities/animal/animal.component';
import { ArtComponent } from './specialities/art/art.component';
import { GriefComponent } from './specialities/grief/grief.component';
import { MindfulnessComponent } from './specialities/mindfulness/mindfulness.component';
import { OtherIssuesComponent } from './specialities/other-issues/other-issues.component';
import { SandtrayComponent } from './specialities/sandtray/sandtray.component';
import { TraumaComponent } from './specialities/trauma/trauma.component';

const appRoutes: Routes = [
  { path: '',                        component: HomeComponent },
  { path: 'about-me',                component: AboutMeComponent },
  { path: 'forms',                   component: FormsComponent },
  { path: 'other-services',          component: OtherServicesComponent },
  { path: 'contact',                 component: ContactComponent },
  { path: 'cassie',                  component: CassieComponent },
  { path: 'blog',                    component: BlogComponent },

  { path: 'animal-assisted-therapy', component: AnimalComponent },
  { path: 'art-therapy',             component: ArtComponent },
  { path: 'grief',                   component: GriefComponent },
  { path: 'mindfulness',             component: MindfulnessComponent },
  { path: 'other-issues',            component: OtherIssuesComponent },
  { path: 'sandtray-therapy',        component: SandtrayComponent },
  { path: 'trauma',                  component: TraumaComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);