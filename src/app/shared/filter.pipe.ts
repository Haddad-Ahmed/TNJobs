import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'textSearch',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], query: string): any[] {
    return query
      ? value.filter(
        obj =>
          Object.keys(obj)
            .map(key => obj[key])
            .toString()
            .toLocaleLowerCase()
            .indexOf(query.toLocaleLowerCase()) !== -1
      )
      : value;
  }
}
