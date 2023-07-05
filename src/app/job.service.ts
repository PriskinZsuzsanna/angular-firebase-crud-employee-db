import { Injectable } from '@angular/core';
import { Jobprofile } from './jobprofile';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  user: User = new User ()
  jobprofilesMap: Map<string, Jobprofile> = new Map<string, Jobprofile>()
  ownprofilesMap: Map<string, Jobprofile> = new Map<string, Jobprofile>()
  isOpen: boolean = false
  actualEdit : Jobprofile = new Jobprofile ()
  actualEditKey: string = '';


  constructor(private db: AngularFireDatabase, public auth: AuthService) {
    this.db.object('profiles').valueChanges().subscribe(t => {
      this.jobprofilesMap = new Map(Object.entries(t as object))
    })
    this.loadUserData()
  }

  loadUserData() {
    this.user.userName = this.auth.currentUser();
    this.user.email = this.auth.currentUserEmail();
  }


  /*add(j:Jobprofile){
    this.db.list('profiles').push(j);
  }*/

  async addWithFeedback(j:Jobprofile): Promise<boolean>{
   
    return new Promise<boolean>((resolve, reject) => {
      this.db.list('profiles').push(j)
      .then(t => {
        console.log(t)
        resolve(true)
      }, error => {
        resolve(false)
      })
    })
  }

  remove(id: string){
    this.db.list('profiles').remove(id);
  }

  /*update(id: string, j:Jobprofile){
    this.db.list('profiles').update(id, j);
  }*/

  async updateWithFeedback(id: string, j:Jobprofile): Promise<boolean>{
   
    return new Promise<boolean>((resolve, reject) => {
      this.db.list('profiles').update(id, j)
      .then(t => {
        console.log(t)
        resolve(true)
      }, error => {
        resolve(false)
      })
    })
  }

  getJobprofileCopy(input: Jobprofile): Jobprofile {
    let jp = new Jobprofile();
   jp.id = input.id;
   jp.city = input.city;
   jp.skills = input.skills;
   jp.introduction = input.introduction;
   jp.user.email = input.user.email;
   jp.user.userName = input.user.userName;
   return jp;
  }

  edit(key: string, value: Jobprofile) {
    this.actualEdit = this.getJobprofileCopy(value);
    this.actualEditKey = key;
  }


}
