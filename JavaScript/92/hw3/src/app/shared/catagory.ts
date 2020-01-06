import { Item } from './item';
export interface Catagory {
  title: string;
  isShow: boolean;
  items?: Item[];
}
