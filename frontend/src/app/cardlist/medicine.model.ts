export class Medicine {

  id: number;
  name: string;
  price: number;
  desc: string;
  image : string;

  constructor(id: number,name: string,price: number,desc: string, image: string)
  {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.image  = image;
  }
}
