import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroSortBy',
  standalone: true
})
export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    if (!sortBy) return value;

    return [...value].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'canFly':
          return a.canFly === b.canFly ? 0 : a.canFly ? 1 : -1;
        case 'color':
          return a.color.toString().localeCompare(b.color.toString());
        case 'creator':
          return a.creator.toString().localeCompare(b.creator.toString());
        default:
          return 0;
      }
    });
  }
}

