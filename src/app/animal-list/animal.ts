import { Sector } from './sector';

export class Animal{
 
    name:string;
    species:string;
    dateOfBirth:string;
    sector:Sector;

    constructor(name:string, species:string, dateOfBirth:string, sector:Sector){
      this.name = name;
      this.species = species;
      this.dateOfBirth = dateOfBirth
      this.sector = sector;
    }
  }