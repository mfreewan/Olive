import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/App Component/app.component';
import { appConfig } from './app/App Component/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
