import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removetag'
})
export class RemovetagPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const regex = /(<([^>]+)>)/ig
    const result = value.replace(regex, "");
    return result;
  }

}
