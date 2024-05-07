 import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HomeComponent } from '../home/home.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef; 

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  authService: AuthService = inject(AuthService);
  
  router: Router = inject(Router);



  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queires)=> {
       const logout = Boolean(queires.get('logout')) //this will return a string value and we want a boolean value
       if(logout){
          this.authService.logout();
          alert('you are now logged out!' + this.authService.isLoggedIn);
       }
    })
  }

  onLoginClicked(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if(user === undefined){
      alert('The login credentials are incorrect')
    } else {
      alert(`Welcome ${user.name}. You are logged in`)
      this.router.navigate(['\home'])
    }
  }
}
