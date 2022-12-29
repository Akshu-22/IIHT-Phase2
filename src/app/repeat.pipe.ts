import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform(value: string, addnl:number): string {

    const str = value.repeat(addnl);
    console.log(str);
return str;
  }


}
