import { Props as Item } from "../../../entities/Card/Card.type";

export interface Data {
  total: number;
  totalPages: number;
  items: Item[];
}
