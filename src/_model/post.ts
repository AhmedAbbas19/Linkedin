export interface Post {
  id?: string;
  content?: string;
  imagUrl?: string;
  authorId?: string;
  date?: string;
  likesNumber?: any[];
  isLiked?: boolean;
  comments?: any[];
}
