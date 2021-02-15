import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string): any {
    
    if(!Array.isArray(value) || !phrase) {
      return value;
    }

    return value.filter(item => (item['name'] as string).toLowerCase().includes(phrase.toLowerCase()));
  }

}
