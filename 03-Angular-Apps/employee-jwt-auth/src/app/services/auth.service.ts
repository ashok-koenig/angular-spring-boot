import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiBaseUrl+'/api/auth'
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  signup(user: User){
    return this.http.post<any>(`${this.apiUrl}/register`, user)
  }

  login(data: User){
    return this.http.post<any>(`${this.apiUrl}/login`, data) 
                                              .pipe(map((response)=>{
                                                if(response.token){
                                                  this.tokenService.setToken(response.token, response.role)
                                                }
                                                return response;
                                              }
                                              ))
                                                          
  }

  logout(){
    this.tokenService.removeToken();
  }
}
