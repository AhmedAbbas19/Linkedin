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
      },
      {
        id: 7,
        fname: "Mohamed",
        lname: "Salah",
        imagUrl: "assets/last-phot15.jpg",
        about: "Football player at Liverpool",
        email: "Mo11@gmail.com",
        password: "123",
        username: "Mosalah",
        edu: [
          {
            id: 0,
            title: "Basion Mentality School",
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
      },
      {
        id: 8,
        fname: "Scarlet",
        lname: "Johanson",
        imagUrl: "assets/last-phot15.jpg",
        about: "Actress",
        email: "scarL@gmail.com",
        password: "123",
        username: "ScarletDaAna",
        edu: [
          {
            id: 0,
            title: "MIT Institute",
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
      },
      {
        id: 9,
        fname: "Hassan",
        lname: "Shakoosh",
        imagUrl: "assets/last-phot15.jpg",
        about: "Singer",
        email: "HaniShaker@gmail.com",
        password: "123",
        username: "Hassan",
        edu: [
          {
            id: 0,
            title: "Cairo University",
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
      },
      {
        id: 10,
        fname: "Marwan",
        lname: "Mohsen",
        imagUrl: "assets/last-phot15.jpg",
        about: "3 Times Ballon D'or Winner",
        email: "Marwan@gmail.com",
        password: "123",
        username: "Memo",
        edu: [
          {
            id: 0,
            title: "Ain Shams University",
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
      },
      {
        id: 11,
        fname: "Adel",
        lname: "Shakal",
        imagUrl: "assets/last-phot15.jpg",
        about: "Artist",
        email: "Adel@gmail.com",
        password: "123",
        username: "Elzaama",
        edu: [
          {
            id: 0,
            title: "Elna7o University",
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
