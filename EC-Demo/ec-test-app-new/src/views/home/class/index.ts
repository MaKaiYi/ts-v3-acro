import { User } from "../interFace/index";

export class Person implements User {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`this Messageis ${this.name} And ${this.age}`);
  }
}
