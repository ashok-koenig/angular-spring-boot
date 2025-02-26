import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  picSrc: string = "images/pic1.jpg"
  picWidth: number = 400

  changePicture(){
    this.picSrc = "images/pic2.jpg"
  }

  changePictureWidth(step: number=10){
    this.picWidth +=step
  }
}
