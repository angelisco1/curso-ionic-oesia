import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

export interface ICredenciales {
  email: string,
  password: string
}

export interface IJwt {
  jwt: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenService) { }

  login(credenciales: ICredenciales): Observable<IJwt> {
    return this.http.post<IJwt>('http://localhost:3000/login', credenciales)
      .pipe(
        tap((resp: IJwt) => {
          // console.log('TAP:', resp)
          this.token.setAuthToken(resp.jwt)
        })
      )
  }

  registro() {

  }
}
