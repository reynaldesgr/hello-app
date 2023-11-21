export class Student
{
  id          : string;
  name        : string;
  dateOfBirth : Date;
  gender      : string;
  courseFee   : number;
  picture     : string;

  constructor(id: string, name: string, dateOfBirth: Date, gender: string, picture: string, courseFee: number) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.picture = picture;
    this.courseFee = courseFee;
  }
}
