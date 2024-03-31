import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneNumber',
    standalone: true
})

export class PhoneNumberPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let mobileNumber: string = `+998(${value.slice(0,2)})-${value.slice(2,5)}-${value.slice(5,7)}-${value.slice(7)}`;
        return mobileNumber;
    }
}