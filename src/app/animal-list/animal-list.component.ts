import { Component, OnInit } from '@angular/core';
import { Animal } from  './animal'
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

	animals:Array<Animal> = [

	new Animal('Garfild', 'cat', '20.05.2015'),
	new Animal('Garfild', 'cat', '20.05.2015'),
	new Animal('Garfild', 'cat', '20.05.2015'),
	new Animal('Garfild', 'cat', '20.05.2015')

]

	// newAnimal:Animal = new Animal('', '', '')
	

	// addAnimal(){
	// 	this.animallist.push(this.newAnimal)
	// 	this.newAnimal = new Animal ('', '', '')
	// }

	birth(animal){

		if(!animal.dateOfBirth.length){
			return 'Nepoznat';
		}
		return animal.dateOfBirth;
	}

	remove(someAnimal){
		let animal = this.checkIndexOfAnimals(someAnimal);
		this.animals.splice(animal, 1);
	}

	checkIndexOfAnimals(animal){
		let index = this.animals.indexOf(animal);
			return index;
	}


	

  constructor() { }

  ngOnInit() {
  }

}
