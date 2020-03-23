import { Skill } from "./skill";
import { Edu } from "./edu";
import { Certificate } from "./certificate";
import { WorkExp } from "./workExp";
import { Country } from "./country";
import { Industry } from "src/_model/industry";

export interface User {
  id?: string;
  fname?: string;
  lname?: string;
  username?: string;
  imagUrl?: string;
  email?: string;
  password?: string;
  about?: string;
  headline?: string;
  edu?: Edu[];
  workExp?: WorkExp[];
  skils?: Skill[];
  licenses?: Certificate[];
  country?: Country;
  phoneNumber?: string;
  address?: string;
  birthDate?: Date;
  industry?: Industry;
}
