import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/student';

@Pipe({
  name: 'namePrefix'
})
export class NamePrefixPipe implements PipeTransform {

  transform(student: Student): string {
    return `${student.gender === 'Male' ? 'Mr.' : 'Miss.'} ${student.name}`;
  }

}
