import { Matter } from './Matter'

export default interface IMenu {
  appendCeiling(matter: Matter);
  appendCoat(matter: Matter);
  appendFloor(matter: Matter);
  appendTile(matter: Matter);
  getDetail(): string;
}

