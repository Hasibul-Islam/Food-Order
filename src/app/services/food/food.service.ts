import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(){
    return [
      {
        id: 1,
        name: "Burger Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ["Fast food"]
      },

      {
        id: 2,
        name: "Pizza Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ["Fast food"]
      },
      {
        id: 3,
        name: "Durum Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ["Fast food"]
      },

      {
        id: 4,
        name: "Doner Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ["Fast food"]
      },
      {
        id: 5,
        name: "Kawzon Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ["Fast food"]
      },

      {
        id: 6,
        name: "Sandwich Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ["Fast food"]
      },
      {
        id: 7,
        name: "Sub Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ["Fast food"]
      },

      {
        id: 8,
        name: "Mango Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ["Fast food"]
      },
      {
        id: 9,
        name: "Guava Pepperoni",
        cookTime: "40-60",
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-9.jpg',
        tags: ["Fast food"]
      },
    ]
  }
}
