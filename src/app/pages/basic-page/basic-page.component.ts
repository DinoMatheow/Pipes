import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { LocaleService, localIdioma } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {
  currentLocale = signal(inject(LOCALE_ID));
  localeService = inject(LocaleService);
  nameLower = signal('Matheow');
  nameUpper = signal('MATHEOW');
  fullName = signal('matHeOw ChaveZ');
  customDate = signal(new Date());

tickingDateEffect = effect((onCleanup) => {
  const interval = setInterval(() => {
    this.customDate.set(new Date());
console.log('tickingDateEffect');

}, 1000);
onCleanup(() => {
  clearInterval(interval);
});
});

changeLocale(locale: localIdioma) {
  this.localeService.changeLocale(locale);
}


}
