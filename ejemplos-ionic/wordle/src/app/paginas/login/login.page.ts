import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup

  constructor(private auth: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  ngOnInit() {

  }

  login() {
    this.auth.login(this.loginForm.value)
      .subscribe((resp) => {
        // console.log(resp)
        this.router.navigateByUrl('/inicio', { replaceUrl: true })
      })
  }

}
