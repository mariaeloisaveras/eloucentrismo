import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { Camera, Check, Compass, Globe2, Instagram, Mail, MapPin, Star, Target, Users, LucideAngularModule } from 'lucide-angular';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      LucideAngularModule.pick({
        Camera,
        Check,
        Compass,
        Globe2,
        Instagram,
        Mail,
        MapPin,
        Star,
        Target,
        Users
      })
    )
  ]
}).catch((err) => console.error(err));
