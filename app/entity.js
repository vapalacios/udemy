class Entity {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  greet() {
    console.log(`Hi, and the other parameter is ${this.name} finish`);
  }
}

export default Entity;
