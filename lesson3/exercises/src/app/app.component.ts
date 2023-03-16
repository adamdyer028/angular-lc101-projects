import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeoff() {
    let result = window.confirm("Are you sure the shuttle is ready for takeoff?");
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.message = "Shuttle in flight."
      this.takeOffEnabled = !this.takeOffEnabled;
      this.width = 0;
    }
  }

  handleLand(rocket) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.message = "The shuttle has landed."
    rocket.style.bottom = '0px';
    this.takeOffEnabled = !this.takeOffEnabled;

  }

  handleAbortMission(rocket) {
    let result = window.confirm("Are you sure you want to abort the mission?");
    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted."
      rocket.style.bottom = '0px';
      this.takeOffEnabled = !this.takeOffEnabled;
      
    }
  }

  moveRocket(rocket, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocket.style.left) + 10 + 'px';
      rocket.style.left = movement;
      this.width += 10000;
      this.edgeCheck();  
    }
    if (direction === 'left') {
      let movement = parseInt(rocket.style.left) - 10 + 'px';
      rocket.style.left = movement;
      this.width -= 10000;
      this.edgeCheck();
    }
    if (direction === 'up') {
      let movement = parseInt(rocket.style.bottom) + 10 + 'px';
      rocket.style.bottom = movement;
      this.height += 10000;
      this.edgeCheck();
    }
    if (direction === 'down') {
      let movement = parseInt(rocket.style.bottom) - 10 + 'px';
      rocket.style.bottom = movement;
      this.height -= 10000;
      this.edgeCheck();
    }
  }

  edgeCheck() {
    if (this.height > 310000 || this.height <= 0 || this.width < 0 || this.width > 240000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }
  
}
