import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-project';
  public searchvalue: any
  public detailsfood:any=[];
  public searchFoodList:any=[];
  public foodList = [
    { 'food_id': 1001, 'food': 'chicken Biriyani', 'price': 100, 'images': 'chicken.jpg' },
    { 'food_id': 1002, 'food': 'Mutton Biriyani', 'price': 200, 'images': 'chicken.jpg' },
    { 'food_id': 1003, 'food': 'Alu Biriyani', 'price': 60, 'images': 'chicken.jpg' },
    { 'food_id': 1004, 'food': 'Chicken Lollypop', 'price': 90, 'images': 'chicken.jpg' },
    { 'food_id': 1005, 'food': 'Fried Rice', 'price': 90, 'images': 'chicken.jpg' },
    { 'food_id': 1006, 'food': 'Egg Roll', 'price': 35, 'images': 'chicken.jpg' },
    { 'food_id': 1007, 'food': 'Chicken Egg Roll', 'price': 50, 'images': 'chicken.jpg' },
  ];  // here it is a object

  searchfood(search: any) {
    if (search.value.length >= 3) {
      console.log(search.value);
      let data = search.value;
      let searchFood = this.foodList.filter((item: any) => {
        return item.food.toLowerCase().includes(data.toLowerCase());   // this line for finding search name within original array 
      });
console.log(searchFood);
this.searchFoodList=searchFood;  // here store the result of after searching array
      }
  
  }
select(object:any){
  console.log(object);
  let detailsItem=object;  // here just store search object into a data member
  this.detailsfood=detailsItem; // here store above data member into array because our main list are as a array of oject
}
}
