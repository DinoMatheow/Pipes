import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { ColorTextPipe } from '../../pipes/color-text.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatePipe } from '../../pipes/hero-create.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sortBy.pipe';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroFiltrerPipe } from '../../pipes/hero-filtrer.pipe';
@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    ColorTextPipe,
    TitleCasePipe,
    HeroCreatePipe,
    HeroSortByPipe,
    HeroFiltrerPipe
  ],

  templateUrl: './Custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent {
  name = signal('juan');

  upperCase = signal(true);


  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);


  searchQuery = signal('');
 }
