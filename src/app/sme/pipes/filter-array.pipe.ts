import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.toLowerCase().startsWith(filter.toLowerCase()));
}

}
