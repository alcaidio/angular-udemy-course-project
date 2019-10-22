export class Recipe {
  public name: string;
  public description;
  public imagePath;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}