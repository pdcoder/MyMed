export class Order {

  name: string;
  date : string;
  time: string;
  sum : number;

  constructor(name: string, date : string, time  : string, sum: number)
  {
   this.name = name;
   this.date = date;
   this.time = time;
   this.sum = sum;

  }
}
