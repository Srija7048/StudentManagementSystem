import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentpipe'
})
export class StudentpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
