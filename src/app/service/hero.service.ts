import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getAll(): Hero[] {
    return [
      {
        id: 1,
        name: 'Spider Man',
        superpower: 'spider things',
        address: 'New York'
      },
      {
        id: 2,
        name: 'Hulk',
        superpower: 'very strong',
        address: 'Ózd'
      },
      {
        id: 3,
        name: 'E.T.',
        superpower: 'telekinesis',
        address: 'Manhattan'
      },
      {
        id: 4,
        name: 'Béla',
        superpower: 'drink bear',
        address: 'Szeged'
      },
      {
        id: 5,
        name: 'Predator',
        superpower: 'cool weapons',
        address: 'other galaxy'
      },
      {
        id: 6,
        name: 'Batman',
        superpower: 'rich',
        address: 'Gotham'
      },
      {
        id: 7,
        name: 'Pyro',
        superpower: 'fire fire',
        address: 'Congo'
      },
      {
        id: 8,
        name: 'Mystique',
        superpower: 'metamorph',
        address: 'everywhere'
      }
    ]
  }
} 
