import { Person } from '../shared/person';
import { Item } from '../shared/item';

export interface Order {
    person: Person;
    item: Item;
}
