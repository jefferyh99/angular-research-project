import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesTest'
})
export class PipesTestPipe implements PipeTransform {

  transform(value: number, value1: any, value2: number): any {
    return null;
  }

}
