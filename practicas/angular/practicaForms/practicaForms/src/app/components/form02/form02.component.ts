import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.css']
})
export class Form02Component implements OnInit {

  users: any[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      photo: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      photo: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      photo: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      photo: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-256.png'
    },
  ]

  user = {
    name: '',
    username: '',
    email: '',
    phone: '',
    photo: ''
  }

  errorForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }
 
  addUser() {
    console.log(this.user)
    if (
      this.user.name != '' &&
      this.user.username!= '' &&
      this.user.email!= '' &&
      this.user.phone!= '' &&
      this.user.photo!= '' 
    ) {
      this.errorForm = false;
      this.users.push(this.user)
      this.user = {
        name: '',
        username: '',
        email: '',
        phone: '',
        photo: ''
      }
    } else {
      this.errorForm = true;
      setTimeout(() => {
        this.errorForm = false
      }, 1500);
    }
  }
  
  erase(index) {
    console.log(index)
    this.users.splice(index, 1)
  }
}
