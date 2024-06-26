//complete this code
class Animal {
	constructor(private species: string) {}

    getSpecies(): string {
        return this.species;
    }

    makeSound(): void {
        console.log(`The ${this.species} makes a sound`);
    }
}
class Cat extends Animal {
    purr(): void {
        console.log('purr');
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('woof');
    }
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
