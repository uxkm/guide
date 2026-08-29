import { bootstrapApplication } from '@angular/platform-browser';
import { initInteractions } from '@uxkm/interactions';
import { AppComponent } from './app/app.component';

initInteractions();
bootstrapApplication(AppComponent);
