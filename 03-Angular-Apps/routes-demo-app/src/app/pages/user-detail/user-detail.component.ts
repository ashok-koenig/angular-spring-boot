import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  userName: string =''
  constructor(private route: ActivatedRoute){
    this.userName = route.snapshot.params['name']
  }
}
