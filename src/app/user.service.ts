import { Injectable } from '@angular/core';

import utilizatori from '../utilizatori.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  viewUser(userId: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
