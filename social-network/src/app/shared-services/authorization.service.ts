import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import {   AngularFireDatabase } from '@angular/fire/database'
import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async GoogleSingIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    this.router.navigate(['/']);
    return userRef.set(data, { merge: true });
  }
  public userf(user) {
    return this.updateUserData(user);
  };

  public getUser() {
    return this.afAuth.authState.pipe(first());
  }
}
