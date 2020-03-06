import { Skill } from "./skill";
import { Edu } from "./edu";
import { Certificate } from "./certificate";
import { WorkExp } from "./workExp";

export interface User {
  id?: number;
  fname?: string;
  lname?: string;
  username?: string;
  imagUrl?: string;
  email?: string;
  password?: string;
  about?: string;
  edu?: Edu[];
  workExp?: WorkExp[];
  skils?: Skill[];
  licenses?: Certificate[];
}
