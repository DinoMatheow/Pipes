import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroFiltrer',
  standalone: true
})

export class HeroFiltrerPipe implements PipeTransform {
  transform(value: Hero[], search: string): Hero[] {
    if (!search) return value;
    search = search.toLowerCase();

    return value.filter(hero =>
      hero.name.toLowerCase().includes(search) ||
      hero.color.toString().toLowerCase().includes(search) ||
      hero.creator.toString().toLowerCase().includes(search) ||
      (hero.canFly ? 'puede volar' : 'no puede volar').includes(search)
    );
  }
}
