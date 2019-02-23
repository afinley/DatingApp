import { Injectable } from '@angular/core';
import {CanActivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alterify: AlertifyService){}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.alterify.error('You shall not pass!!!!');
    this.router.navigate(['/home']);
    return false;
  }
}
