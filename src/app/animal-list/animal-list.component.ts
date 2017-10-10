import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
	animals:Array<Object> = [
	{
		name: 'Svinja',
		tezina: '120kg',
		datumRodjenja: '20.08.2016'
	},
	{
		name: 'Koza',
		tezina: '40',
		datumRodjenja: '20.04.2016'
	},
	{
		name: 'Krava',
		tezina: '500kg',
		datumRodjenja: '20.05.2016'
	},
	{
		name: 'Ovca',
		tezina: '60kg',
		datumRodjenja: '20.01.2016'
	},
	{
		name: 'Kokoska',
		tezina: '3kg',
		datumRodjenja: '20.11.2016'
	},
	];
		 

	

  constructor() { }

  ngOnInit() {
  }

}
