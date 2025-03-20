import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es-PE';
import localeJa from '@angular/common/locales/ja';
import { LocaleService } from './services/locale.service';


registerLocaleData(localeEs, 'es');
registerLocaleData(localeJa, 'ja');


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),

    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale
    },


  ],
};

