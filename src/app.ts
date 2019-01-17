class App {

  public name: string;

  constructor(name: string = 'demo') {
    this.name = name;
  }

  public run() {
    this.method1();
  }

  public method1() {
    console.log(1);
  }
}

export { App };
