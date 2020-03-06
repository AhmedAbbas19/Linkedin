import { Injectable } from "@angular/core";
import { User } from "src/_model/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  constructor() {
    this.users = [
      {
        id: 0,
        fname: "Ahmed",
        lname: "Abbas",
        imagUrl: "assets/last-phot15.jpg",
        about: "Full Stack Web Developer",
        email: "ahmeddabbas19@gmail.com",
        password: "123",
        username: "Ahmeddabbas",
        edu: [
          {
            id: 0,
            title: "FCI Cairo University",
            degree: "Bachelor",
            specialization: "Computer Science",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: 0, title: "HTML" },
          { id: 0, title: "CSS3" },
          { id: 0, title: "C#" }
        ]
      },
      {
        id: 1,
        fname: "Abdullah",
        lname: "Ragab",
        imagUrl: "assets/last-phot15.jpg",
        about: "Graphics Designer",
        email: "abdullah@gmail.com",
        password: "123",
        username: "Abdullah",
        edu: [
          {
            id: 0,
            title: "FCI Minia University",
            degree: "Bachelor",
            specialization: "Computer Science",
            startDate: "2013",
            endDate: "2017"
          }
        ],
        skils: [
          { id: 0, title: "XD" },
          { id: 0, title: "CSS3" },
          { id: 0, title: "C#" }
        ]
      },
      {
        id: 2,
        fname: "Amir",
        lname: "Mohamed",
        imagUrl: "assets/last-phot15.jpg",
        about: "Full Stack Web Developer",
        email: "Amir@gmail.com",
        password: "123",
        username: "AmirM",
        edu: [
          {
            id: 0,
            title: "Faculty Of Engineering Suiz University",
            degree: "Bachelor",
            specialization: "Gas",
            startDate: "2012",
            endDate: "2017"
          }
        ],
        skils: [
          { id: 0, title: "HTML" },
          { id: 0, title: "CSS3" },
          { id: 0, title: "C#" }
        ]
      },
      {
        id: 3,
        fname: "Ahmed",
        lname: "Mostafa",
        imagUrl: "assets/last-phot15.jpg",
        about: "Full Stack Web Developer",
        email: "ahmedMostafa@gmail.com",
        password: "123",
        username: "Mostafa",
        edu: [
          {
            id: 0,
            title: "Mansura University",
            degree: "Bachelor",
            specialization: "Kahraba 11",
            startDate: "2011",
            endDate: "2016"
          }
        ],
        skils: [
          { id: 0, title: "HTML" },
          { id: 0, title: "CSS3" },
          { id: 0, title: "C#" }
        ]
      },
      {
        id: 4,
        fname: "Hossam",
        lname: "Hassan",
        imagUrl: "assets/last-phot15.jpg",
        about: "Full Stack Web Developer",
        email: "Hossam@gmail.com",
        password: "123",
        username: "Hossam Hassan",
        edu: [
          {
            id: 0,
            title: "Ain Shams University",
            degree: "Bachelor",
            specialization: "Commerce",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: 0, title: "HTML" },
          { id: 0, title: "CSS3" },
          { id: 0, title: "C#" }
        ]
      },
      {
        id: 5,
        fname: "Bassam",
        lname: "Ahmed",
        imagUrl: "assets/last-phot15.jpg",
        about: "Full Stack Web Developer",
        email: "Bassam@gmail.com",
        password: "123",
        username: "BassamB",
        edu: [
          {
            id: 0,
            title: "Alsun Ain Shams University",
            degree: "Bachelor",
            specialization: "Commerce",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: 0, title: "HTML" },
          { id: 0, title: "CSS3" },
          { id: 0, title: "C#" }
        ]
      },
      {
        id: 6,
        fname: "Leonardo",
        lname: "Di Caprio",
        imagUrl: "assets/last-phot15.jpg",
        about: "Actor",
        email: "Leo@gmail.com",
        password: "123",
        username: "LDC",
        edu: [
          {
            id: 0,
            title: "Harvard University",
            degree: "Bachelor",
            specialization: "Arts",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: 0, title: "HTML" },
          { id: 0, title: "CSS3" },
          { id: 0, title: "C#" }
        ]
      }
    ];
  }
  getAll(): User[] {
    return this.users;
  }
  getById(id: number): User {
    return this.users.filter(u => u.id === id)[0];
  }
}
