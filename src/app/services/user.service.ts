import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User(1, 'Sandeep lal', 'Sam', '12345'),
    new User(2, 'Prakarti Goel', 'Praks', '12345'),
    new User(3, 'Vishakha', 'Vish', '12345'),
  ]

  constructor() { }
}
