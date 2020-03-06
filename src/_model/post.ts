import { User } from "./user";
export interface Post {
  id?: number;
  content?: string;
  imagUrl?: string;
  author?: User;
  date?: string;
}
