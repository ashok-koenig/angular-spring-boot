import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userRole: string =''
  isLoggedIn: boolean = false
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService){
      tokenService.isLoggedIn.subscribe((value)=>{
        this.isLoggedIn = value
      })
      tokenService.userRole.subscribe((value)=>{
        this.userRole = value
      })
  }

  handleLogout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
