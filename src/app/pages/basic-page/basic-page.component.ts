import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

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
}
