class App {

  public name: string;

  constructor(name: string) {
    console.log('App created.');
    this.name = name;
  }

  public run() {
    console.log('App started!');
  }
}

export { App };
