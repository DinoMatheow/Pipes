import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroCreate',
  standalone: true
})

export class HeroCreatePipe implements PipeTransform {
  transform(value: Creator): string {
    return value === Creator.DC ? 'DC' : 'Marvel';
  }
}