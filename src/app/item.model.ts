export class Item {
  public name: string;
  public amount: number;
  public imagePath: string;

  constructor(name: string, amt: number, imgPath: string) {
    this.name = name;
    this.amount = amt;
    this.imagePath = imgPath;
  }
}