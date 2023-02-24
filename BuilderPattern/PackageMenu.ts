import IMenu from "./IMenu";
import { Matter } from "./Matter";

export default class PackageMenu implements IMenu {
  list = new Array<Matter>();
  price = 0;

  constructor(public grade: string, public area: number) {}

  appendMatter(matter: Matter) {
    this.list.push(matter);
    this.price += matter.price() * this.area;
    return this
  }

  appendCeiling(matter: Matter) {
    return this.appendMatter(matter);
  }

  appendCoat(matter: Matter) {
    return this.appendMatter(matter);
  }

  appendFloor(matter: Matter) {
    return this.appendMatter(matter);
  }

  appendTile(matter: Matter) {
    return this.appendMatter(matter);
  }

  getDetail(): string {
    let detail = `
    -------------------------------------------------------
    套餐详情:
    套餐等级: ${this.grade}
    套餐价格: ${this.price} 元
    房屋面积: ${this.area} 平米
    材料清单: \n`

    return detail + this.list.reduce((pre, cur) => {
      return `${pre}       ${cur.scene()}: ${cur.brand()}、${cur.model()}、平米价格: ${cur.price()}元\n`
    }, '');
  }
}
