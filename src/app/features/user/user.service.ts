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
        id: "0",
        fname: "Ahmed",
        lname: "Abbas",
        imagUrl: "assets/last-phot15.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Full Stack Web Developer",
        email: "ahmeddabbas19@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "Ahmeddabbas",
        edu: [
          {
            id: "0",
            title: "FCI Cairo University",
            degree: "Bachelor",
            specialization: "Computer Science",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "1",
        fname: "Abdullah",
        lname: "Ragab",
        imagUrl: "assets/last-phot15.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Graphics Designer",
        email: "abdullah@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "Abdullah",
        edu: [
          {
            id: "0",
            title: "FCI Minia University",
            degree: "Bachelor",
            specialization: "Computer Science",
            startDate: "2013",
            endDate: "2017"
          }
        ],
        skils: [
          { id: "0", title: "XD" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "2",
        fname: "Amir",
        lname: "Mohamed",
        imagUrl: "assets/last-phot15.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Full Stack Web Developer",
        email: "Amir.mohammed2121@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "AmirM",
        edu: [
          {
            id: "0",
            title: "Faculty Of Engineering Suiz University",
            degree: "Bachelor",
            specialization: "Gas",
            startDate: "2012",
            endDate: "2017"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "3",
        fname: "Ahmed",
        lname: "Mostafa",
        imagUrl: "assets/last-phot15.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Full Stack Web Developer",
        email: "ahmedMostafa@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "Mostafa",
        edu: [
          {
            id: "0",
            title: "Mansura University",
            degree: "Bachelor",
            specialization: "Kahraba 11",
            startDate: "2011",
            endDate: "2016"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "4",
        fname: "Hossam",
        lname: "Hassan",
        imagUrl: "assets/last-phot15.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Full Stack Web Developer",
        email: "Hossam@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "Hossam Hassan",
        edu: [
          {
            id: "0",
            title: "Ain Shams University",
            degree: "Bachelor",
            specialization: "Commerce",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "5",
        fname: "Bassam",
        lname: "Ahmed",
        imagUrl: "assets/last-phot15.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Full Stack Web Developer",
        email: "Bassam@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "BassamB",
        edu: [
          {
            id: "0",
            title: "Alsun Ain Shams University",
            degree: "Bachelor",
            specialization: "Commerce",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "6",
        fname: "Leonardo",
        lname: "Di Caprio",
        imagUrl: "assets/last-phot15.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Actor",
        email: "Leo@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "LDC",
        edu: [
          {
            id: "0",
            title: "Harvard University",
            degree: "Bachelor",
            specialization: "Arts",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "7",
        fname: "Mohamed",
        lname: "Salah",
        imagUrl: "assets/salah.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Football player at Liverpool",
        email: "Mo11@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "Mosalah",
        edu: [
          {
            id: "0",
            title: "Basion Mentality School",
            degree: "Bachelor",
            specialization: "Arts",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "8",
        fname: "Scarlet",
        lname: "Johanson",
        imagUrl: "assets/photo-item10.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Actress",
        email: "scarL@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "ScarletDaAna",
        edu: [
          {
            id: "0",
            title: "MIT Institute",
            degree: "Bachelor",
            specialization: "Arts",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "9",
        fname: "Hassan",
        lname: "Shakoosh",
        imagUrl: "assets/shakosh.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Singer",
        email: "HaniShaker@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "Hassan",
        edu: [
          {
            id: "0",
            title: "Cairo University",
            degree: "Bachelor",
            specialization: "Arts",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "10",
        fname: "Marwan",
        lname: "Mohsen",
        imagUrl: "assets/marwan.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "3 Times Ballon D'or Winner",
        email: "Marwan@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "Memo",
        edu: [
          {
            id: "0",
            title: "Ain Shams University",
            degree: "Bachelor",
            specialization: "Arts",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "11",
        fname: "Adel",
        lname: "Shakal",
        imagUrl: "assets/shakal.jpeg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Artist",
        email: "Adel@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "Elzaama",
        edu: [
          {
            id: "0",
            title: "Elna7o University",
            degree: "Bachelor",
            specialization: "Arts",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "12",
        fname: "Elon",
        lname: "Musk",
        imagUrl: "assets/musk.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "Innovator",
        email: "elon@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "elonmusk",
        edu: [
          {
            id: "0",
            title: "MIT University",
            degree: "Bachelor",
            specialization: "Computer Science",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      },
      {
        id: "13",
        fname: "Thanos",
        lname: "",
        imagUrl: "assets/thanos.jpg",
        about:
          "Highly motivated individual and a certified digital marketer with strong SEO and SEM skills, attention to detail, and a solid online marketing background looking to obtain a position of SEO Specialist with XYZ company.",
        headline: "I'm Inevitable",
        email: "thanos@gmail.com",
        password: "123",
        country: { name: "Egypt" },
        industry: { name: "Computer Software" },
        username: "thanos",
        edu: [
          {
            id: "0",
            title: "Life University",
            degree: "Bachelor",
            specialization: "Killer",
            startDate: "2015",
            endDate: "2019"
          }
        ],
        skils: [
          { id: "0", title: "HTML" },
          { id: "0", title: "CSS3" },
          { id: "0", title: "C#" }
        ],
        workExp: [
          {
            id: "1",
            workPlace: "Information Technology Institute (ITI)",
            jobTitle: "Trainee",
            startDate: "Oct 2019",
            endDate: "Present",
            addres: "Smart Village, Cairo, Egypt"
          }
        ],
        phoneNumber: "002-0102-164-9914",
        address: "6 street 11, 6-October, Giza",
        birthDate: new Date("1993-11-13")
      }
    ];
  }
  getAll(): User[] {
    return this.users;
  }
  getById(id: string): User {
    return this.users.find(u => u.id === id);
  }
  getByUsername(username: string): User {
    return this.users.find(u => u.username === username);
  }
  add(user: User) {
    user.id = (this.users.length + 1).toString();
    this.users.push(user);
  }

  save(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
  }

  delete(id: string) {
    const index = this.users.findIndex(u => u.id === id);
    this.users.splice(index, 1);
  }
}
