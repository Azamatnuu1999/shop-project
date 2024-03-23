import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    const currency = value.toString().split('').reverse();
    let result = '';

    for(let i = 1; i <= currency.length; i++) {
        if(i % 3 == 0 && i != currency.length) {
            result = ' ' + currency[i-1] + result;
        } else {
            result = currency[i-1] + result;
        }
    }

    return result;
  }
}
