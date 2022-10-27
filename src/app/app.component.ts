import { Component } from '@angular/core';
import { Menuitem } from './models/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza';

  menu: Menuitem[] =[
    {id:0,  item: "pizza",  category:"pizza",  price:2.99},
    {id:1,  item: "more pizza",  category:"pizza",  price:3.99},
    {id:2,  item: "beer",  category:"beer",  price:6.99},
    {id:0,  item: "more beer",  category:"beer",  price:8.99},
    {id:0,  item: "something called a salad",  category:"vegetarian",  price:2.99},
    {id:0,  item: "potato",  category:"is potato",  price:2.99},
    
  ]

}
