import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatData'
})
export class TransformDataPipe implements PipeTransform {
  result:string="";
  num:number=0;

  transform(value: string, arg1:number): string {

    for(let i=0;i<arg1;i++)

      this.result+=value+" ";

    return this.result;
  }
  /*transform(value:string, ...args: string[]): string {
    return String;
  }*/

}
