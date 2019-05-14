
export class App {
  public message: string = 'Hello World!';
  public items: { name: number }[] = [{ name: 1 }, { name: 4 }, { name: 2 }, { name: 3 }];

  reorder() {
    this.items.sort((a, b) => a.name - b.name);
  }
}