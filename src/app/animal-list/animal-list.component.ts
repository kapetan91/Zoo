import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

	animals:Array<Object> = [
	{
		vrsta: 'Svinja',
		datumRodjenja: '20.05.2017',
		ime: 'Lepi'
	},
	{
		vrsta: 'Koza',
		datumRodjenja: '20.05.2017',
		ime: 'Margaret'
	},
	{
		vrsta: 'Krava',
		datumRodjenja: '20.05.2017',
		ime: 'Jovanka'
	},
	{
		vrsta: 'Ovca',
		datumRodjenja: '20.05.2017',
		ime: 'Mila'
	},
	{
		vrsta: 'Kokoska',
		ime: 'Koka',
		datumRodjenja: ''

	},
	];

	dateOfBirth(animal){

		if(!animal.datumRodjenja.length){
			return 'Nepoznat';
		}
		return animal.datumRodjenja;
	}

	remove(someAnimal){
		let animal = this.checkIndexOfAnimals(someAnimal);
		this.animals.splice(animal, 1);
	}

	checkIndexOfAnimals(animal){
		let index = this.animals.indexOf(animal);
		console.log(index);
			return index;
	}


	

  constructor() { }

  ngOnInit() {
  }

}
