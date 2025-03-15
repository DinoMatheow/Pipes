import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
@Component({
  selector: 'app-number-page',
  standalone: true,
  imports: [
    DecimalPipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './Number-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumberPageComponent {
   totalSells = signal(2560);
   percentage = signal(0.4856);
 }
