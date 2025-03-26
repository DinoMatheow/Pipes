import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'colorText',
  standalone: true
})
export class ColorTextPipe implements PipeTransform {
  transform(value: Color  ): string {
    return ColorMap[value];
  }
}
