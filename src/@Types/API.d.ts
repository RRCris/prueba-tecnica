export default interface response_API {
  banner: {
    id: number;
    order: number;
    title: string;
    image: string;
    created: string;
    modified: string;
  }[];
  categories: {
    id: number;
    name: string;
    image_banner: string;
    url_front: string;
    order: 1;
    created: string;
    modified: string;
  }[];
  feedInstagram: {
    id: number;
    image: string;
    order: number;
    created: string;
    modified: string;
  }[];
  groupExperience: groupExperience;
}

//_____________________GROUP EXPERIENCE
export type groupExperience = Root[];

export interface Root {
  id: number;
  title: string;
  image_cover: string;
  category: Category;
  status: Status;
  tags: Tag[];
  date_start: string;
  date_end: string;
  cost: number;
  description: string;
  introduction: string;
  url_front: string;
  created: string;
  modified: string;
}

export interface Category {
  id: number;
  name: string;
  image_banner: string;
  url_front: string;
  order: number;
  created: string;
  modified: string;
}

export interface Status {
  id: number;
  title: string;
  color: string;
  created: string;
  modified: string;
}

export interface Tag {
  id: number;
  name: string;
  created: string;
  modified: string;
}
