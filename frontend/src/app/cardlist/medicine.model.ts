export class Medicine {

  id: number;
  name: string;
  price: number;
  desc: string;

  constructor(id: number,name: string,price: number,desc: string)
  {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}
