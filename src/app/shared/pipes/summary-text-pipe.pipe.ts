import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryText',
})
export class SummaryTextPipePipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) return null;

    let actualLimit = limit ? limit : 30;
    if (value.length > actualLimit) {
      value = value.substr(0, actualLimit);
      return value + '..';
    }
    return value;
  }
}
