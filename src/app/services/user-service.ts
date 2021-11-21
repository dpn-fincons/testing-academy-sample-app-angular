import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export class User {
  name: string;
  username: string;
  password: string;

  constructor(name: string, username: string, password: string) {
    this.name = name;
    this.username = username;
    this.password = password;
  }
}

@Injectable()
export class UserService {

  private registeredUsers = [new User('Tester', 'cucumber', 'demo')];

  private loggedUserSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  readonly loggedUser: Observable<User | undefined> = this.loggedUserSubject.asObservable();

  signIn(username: string, password: string): boolean {
    const user = this.registeredUsers.find(u => u.username === username && u.password == password);
    if (user) {
      this.loggedUserSubject.next(user);
      return true;
    }
    return false;
  }

  signOut(): void {
    this.loggedUserSubject.next(undefined);
  }

  signUp(name: string, username: string, password: string): boolean {
    const valid = !this.registeredUsers.find(u => u.username == username);
    if (valid) {
      const newUser = new User(name, username, password);
      this.registeredUsers.push(newUser);
      this.loggedUserSubject.next(newUser);
    }
    return valid;
  }

  signInAsTester(): void {
    this.loggedUserSubject.next(this.registeredUsers[0]);
  }

}
