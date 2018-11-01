export class Medicine {

  id: number;
  firstName: string;
  price: number;
  desc: string;

  constructor(id: number,firstName: string,price: number,desc: string)
  {
    this.id = id;
    this.firstName = firstName;
    this.desc = desc;
    this.price = price;
  }
}
