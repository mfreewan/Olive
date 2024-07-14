import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/App Component/app.component';
import { config } from './app/App Component/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
