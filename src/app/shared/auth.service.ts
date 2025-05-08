import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated$ = new BehaviorSubject(true);
  readonly isAuthenticated$ = this._isAuthenticated$.asObservable();
}
