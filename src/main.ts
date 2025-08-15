import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { MainComponent } from './app/app.module';

bootstrapApplication(MainComponent, {
  providers: [
    provideHttpClient(withJsonpSupport())
  ]
}).catch(err => console.error(err));
