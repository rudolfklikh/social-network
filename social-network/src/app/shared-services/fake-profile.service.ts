import { Injectable } from '@angular/core';
import { ProfileStats } from '../shared-interfaces/profile';
@Injectable({
  providedIn: 'root'
})
export class FakeProfileService {
  userStats = ProfileStats;
  constructor() {
   }


  getProfileStats(num : number) {
    return this.userStats[num];
  }


}
