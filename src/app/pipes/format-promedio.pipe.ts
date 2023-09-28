import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPromedio'
})
export class FormatPromedioPipe implements PipeTransform {
  transform(promedio: number): string {
    return promedio.toFixed(2);
  }
}

