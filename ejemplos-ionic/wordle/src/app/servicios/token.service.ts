import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  KEY: string = 'authToken'

  constructor() { }

  setAuthToken(token: string) {
    return Storage.set({
      key: this.KEY,
      value: token
    })
  }

  getAuthToken() {
    return Storage.get({
      key: this.KEY
    })
  }

  delAuthToken() {
    return Storage.remove({
      key: this.KEY
    })
  }

}
