import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 31 },
      { name: 'Pizza', count: 15 },
      { name: 'Salad', count: 4 },
      { name: 'Sandwich', count: 3 },
      { name: 'Pasta', count: 4 },
      { name: 'Appetizer', count: 4 },
      { name: 'Special', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'The Carnivore',
        cookTime: '10-20',
        price: 10,
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Pepperoni', 'Italian Sausage', 'Canadian Bacon', 'Green Chiles', 'Jalapeno'
        ]
      },
      {
        id: 2,
        name: 'Classic Italian',
        price: 20,
        cookTime: '20-30',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Roma', 'Tomatoes', 'Garlic', 'Gorgonzola', 'Fresh Basil'
        ]
      },
      {
        id: 3,
        name: 'Prima Vera Veggie',
        price: 5,
        cookTime: '10-15',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Mushrooms', 'Onions', 'Black Olives', 'Garlic', 'Green Peppers', 'Roma Tomatoes', 'Artichoke Hearts'
        ]
      },
      {
        id: 4,
        name: 'The Green Tomato',
        price: 2,
        cookTime: '15-20',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Pesto', 'Tomato Sauce', 'Sun Dried Tomatoes', 'Artichoke Hearts', 'Pinenuts', 'Asiago Cheese'
        ]
      },
      {
        id: 5,
        name: 'BBQ Chicken',
        price: 11,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'BBQ & Tomato Sauce', 'Tomato Sauce', 'Chicken', 'Black Beans', 'Roma Tomatoes', 'Pepperoncinis', 'Green Chiles', 'Cilantro'  
        ]
      },
      {
        id: 6,
        name: 'The Greek',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Canadian Bacon', 'Artichoke Hearts', 'Garlic', 'Caramelized Red Onions', 'Black Olives', 'Feta Cheese'
        ]
      },
      {
        id: 7,
        name: 'Spicey Pollo Deluxe',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Spicy Tomato Sauce', 'Chicken', 'Black Beans', 'Roma Tomatoes', 'Pepperoncinis', 'Green Chiles', 'Cilantro'
        ]
      },
      {
        id: 8,
        name: 'Wood River Supreme',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Canadian Bacon', 'Pepperoni', 'Onion', 'Green Peppers', 'Mushrooms', 'Black Olives', 'Garlic'
        ]
      },
      {
        id: 9,
        name: 'Thai Chicken',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Spicy Peanut Sauce', 'Chicken', 'Snow Peas', 'Roasted Red Peppers', 'Pineapple', 'Toasted Sesame Seeds'
        ]
      },
      {
        id: 10,
        name: 'New York Thin Crust',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Roma Tomatoes', 'Fresh Basil', 'Garlic', 'Asiago Cheese'
        ]
      },
      {
        id: 11,
        name: 'The Basque',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings:[
          'Chorizo Sausage', 'Diced Green Chiles', 'Onions', 'Garlic', 'Asiago Cheese'
        ]
      },
      {
        id: 12,
        name: 'Chicken Kabob',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'BBQ Sauce', 'Tomato Sauce', 'Chicken', 'Green Peppers', 'Roasted Red Peppers', 'Mushrooms', 'Onions', 'Smoked Gouda Cheese', 'Fresh Cilantro'
        ]
      },
      {
        id: 13,
        name: 'Philly Steak',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Alfredo Sauce', 'Roast Beef', 'Onions', 'Green Peppers', 'Mushrooms'
        ]
      },
      {
        id: 14,
        name: 'South Valley Hawaiian',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Alfredo Sauce', 'Canadian Bacon', 'Chicken', 'Mushrooms', 'Roma Tomatoes',  'Pineapple'
        ]
      },
      {
        id: 15,
        name: 'Garlic Lover',
        price: 9,
        cookTime: '40-50',
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['Pizza'],
        toppings: [
          'Roasted Garlic Sauce', 'Chicken', 'Roasted Red Peppers', 'Carmelized Red Onions', 'Fresh Basil'
        ]
      },
      {
        id: 16,
        name: 'House',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/salad.jpg',
        tags: ['Salad'],
        toppings: ['Romaine Lettuce', 'Tomatoes', 'Cucumbers', 'Croutons', 'Optional Dressing: Ranch, Bleu Cheese, Italian or Caesar'
      ]
      },
      {
        id: 17,
        name: 'Ceasar',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/salad.jpg',
        tags: ['Salad'],
        toppings: ['Romaine lettuce', 'Parmesan Cheese', 'Croutons', 'Caesar dressing'
      ]
      },
      {
        id: 18,
        name: 'Ceasar With Chicken',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/salad.jpg',
        tags: ['Salad'],
        toppings: ['Romaine lettuce', 'Parmesan Cheese', 'Chicken', 'Croutons', 'Caesar dressing'
      ]
      },
      {
        id: 19,
        name: 'Greek',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/salad.jpg',
        tags: ['Salad'],
        toppings: ['Romaine Lettuce', 'Artichoke Hearts', 'Black Olives', 'Feta Cheese', 'Pepperoncinis', 'Tomatoes', 'Italian Dressing'
      ]
      },
      {
        id: 20,
        name: 'Meatball',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/sandwich.jpg',
        tags: ['Sandwich'],
        toppings: []
      },
      {
        id: 21,
        name: 'Chicken Parmesan',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/sandwich.jpg',
        tags: ['Sandwich'],
        toppings: []
      },
      {
        id: 22,
        name: 'Philly Steak',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/sandwich.jpg',
        tags: ['Sandwich'],
        toppings: []
      },
      {
        id: 23,
        name: 'Fettuccine Alfredo',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/pasta.jpg',
        tags: ['Pasta'],
        toppings: []
      },
      {
        id: 24,
        name: 'Chicken Fettucine Alfredo',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/pasta.jpg',
        tags: ['Pasta'],
        toppings: []
      },
      {
        id: 25,
        name: 'Spaghetti Marinara',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/pasta.jpg',
        tags: ['Pasta'],
        toppings: []
      },
      {
        id: 26,
        name: 'Cheese Ravioli with Alfredo or Marinara Sauce',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/pasta.jpg',
        tags: ['Pasta'],
        toppings: []
      },
      {
        id: 27,
        name: 'Garlic Bread',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/breadstick.jpg',
        tags: ['Appetizer'],
        toppings: []
      },
      {
        id: 28,
        name: 'Garlic Cheese Bread',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/breadstick.jpg',
        tags: ['Appetizer'],
        toppings: []
      },
      {
        id: 29,
        name: 'Hot and Spicy Buffalo Wings',
        price: 9,
        cookTime: '10',
        imageUrl: '/assets/images/wings.jpg',
        tags: ['Appetizer'],
        toppings: []
      },
    ]
  }
}
