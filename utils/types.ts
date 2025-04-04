export interface CommentProps {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
}

export interface PostProps {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  comments: CommentProps[];
  tags: string[];
}

export interface PopularTopicsProps {
  id: number;
  category: string;
  title: string;
}

export interface FeaturedExportProps {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface BuilderProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  location: string;
  projects: number;
  established: number;
  type: string;
  description: string;
  specialities: string[];
}
