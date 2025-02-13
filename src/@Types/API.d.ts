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
}
