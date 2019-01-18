import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
  /**
   * pure: false
   * will make sure that whenever we change data on the page our pipe is
   * recalculated you could say. So this might lead to performance issues.
   **/
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string, args?: any): any {
    /* Check if empty */
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];

    for (const item of value) {
      /* if (item.status === filterString) */
      /* if (item['status'] === filterString) */
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
