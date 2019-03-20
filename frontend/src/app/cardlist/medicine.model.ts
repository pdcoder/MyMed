export class Medicine {

  id: number;
  name: string;
  price: number;
  desc: string;
  image : string;
  qty : number;
  nmbr : number;

  constructor(id: number,name: string,price: number,desc: string, image: string, qty : number, nmbr : number = 1)
  {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.image  = image;
    this.qty =  qty;
    this.nmbr = nmbr;
  }
}
