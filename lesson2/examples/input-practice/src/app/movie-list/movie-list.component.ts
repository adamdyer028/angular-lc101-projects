import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let button = document.getElementById("button"); 
      let input = document.getElementById("input"); 
      let userClicks = 0;
      button.addEventListener("click", () => {
         if (!this.movies.includes(newTitle) && newTitle !== '') {
            this.movies.push(newTitle);  
         }
         userClicks++;
      }) 
      input.addEventListener("keyup.enter", () => {
         if (!this.movies.includes(newTitle) && newTitle !== '') {
            this.movies.push(newTitle);
         }
         userClicks++;
      })
   }

   errorMessage (newTitle: string) {

   }
}