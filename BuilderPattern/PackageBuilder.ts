import PackageMenu from "./PackageMenu";
import {
  LevelOneCeiling,
  LevelTwoCeiling,
  DuluxCoat,
  LiBangCoat,
  DerFloor,
  ShengXiangFloor,
  MarcoPoloTile,
  DongPengTile,
} from "./Matter";


interface IBuilder {
  build(area: number): PackageMenu;
}

export class Level1MenuBuilder implements IBuilder{
  build(area: number): PackageMenu {
    return new PackageMenu('欧式豪华', area)
      .appendCeiling(new LevelTwoCeiling())
      .appendCoat(new DuluxCoat())
      .appendFloor(new ShengXiangFloor())
  }
}

export class Level2MenuBuilder implements IBuilder{
  build(area: number): PackageMenu {
    return new PackageMenu('轻奢田园', area)
      .appendCeiling(new LevelTwoCeiling())
      .appendCoat(new LiBangCoat())
      .appendFloor(new MarcoPoloTile())
  }
}

export class Level3MenuBuilder implements IBuilder{
  build(area: number): PackageMenu {
    return new PackageMenu('现代简约', area)
      .appendCeiling(new LevelOneCeiling())
      .appendCoat(new LiBangCoat())
      .appendFloor(new DongPengTile())
  }
}
