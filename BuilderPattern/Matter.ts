export interface Matter {
  scene(): string  // 场景；地板、地砖、涂料、吊顶
  brand(): string  // 品牌
  model(): string  // 型号
  price(): number  // 价格
  desc(): string   // 描述
}

// 一级吊顶
export class LevelOneCeiling implements Matter {
  scene(): string {
    return '吊顶';
  }
  brand(): string {
    return '装修公司自带';
  }
  model(): string {
    return '一级顶';
  }
  price(): number {
    return 260;
  }
  desc(): string {
    return '造型只做低一级，只有一个层次的吊顶，一般离顶120-150mm';
  }
}

// 二级吊顶
export class LevelTwoCeiling implements Matter {
  scene(): string {
    return '吊顶';
  }
  brand(): string {
    return '装修公司自带';
  }
  model(): string {
    return '二级顶';
  }
  price(): number {
    return 850;
  }
  desc(): string {
    return '两个层次的吊顶，二级吊顶高度一般就往下吊20cm，要是层高很高，也可增加每级的厚度';
  }
}

// 多乐士涂料
export class DuluxCoat implements Matter {
  scene(): string {
    return '涂料';
  }
  brand(): string {
    return '多乐士(Dulux)';
  }
  model(): string {
    return '第二代';
  }
  price(): number {
    return 719;
  }
  desc(): string {
    return '多乐士是阿克苏诺贝尔旗下的著名建筑装饰油漆品牌，产品畅销于全球100个国家，每年全球有5000万户家庭使用多乐士油漆。';
  }
}

// 立邦涂料
export class LiBangCoat implements Matter {
  scene(): string {
    return '涂料';
  }
  brand(): string {
    return '立邦';
  }
  model(): string {
    return '默认级别';
  }
  price(): number {
    return 650;
  }
  desc(): string {
    return '立邦始终以开发绿色产品、注重高科技、高品质为目标，以技术力量不断推进科研和开发，满足消费者需求。';
  }
}

// 德尔地板
export class DerFloor implements Matter {
  scene(): string {
    return '地板';
  }
  brand(): string {
    return '德尔(Der)';
  }
  model(): string {
    return 'A+';
  }
  price(): number {
    return 119;
  }
  desc(): string {
    return 'DER德尔集团是全球领先的专业木地板制造商，北京2008年奥运会家装和公装地板供应商。';
  }
}

// 圣象地板
export class ShengXiangFloor implements Matter {
  scene(): string {
    return '地板';
  }
  brand(): string {
    return '圣象';
  }
  model(): string {
    return '一级';
  }
  price(): number {
    return 318;
  }
  desc(): string {
    return '圣象地板是中国地板行业著名品牌。圣象地板拥有中国驰名商标、中国名牌、国家免检、中国环境标志认证等多项荣誉。';
  }
}

// 东鹏地砖
export class DongPengTile implements Matter {
  scene(): string {
    return '地砖';
  }
  brand(): string {
    return '东鹏瓷砖';
  }
  model(): string {
    return '10001';
  }
  price(): number {
    return 102;
  }
  desc(): string {
    return '东鹏瓷砖以品质铸就品牌，科技推动品牌，口碑传播品牌为宗旨，2014年品牌价值132.35亿元，位列建陶行业榜首。';
  }
}

// 马可波罗地砖
export class MarcoPoloTile implements Matter {
  scene(): string {
    return '地砖';
  }
  brand(): string {
    return '马可波罗(MARCO POLO)';
  }
  model(): string {
    return '缺省';
  }
  price(): number {
    return 140;
  }
  desc(): string {
    return '“马可波罗”品牌诞生于1996年，作为国内最早品牌化的建陶品牌，以“文化陶瓷”占领市场，享有“仿古砖至尊”的美誉。';
  }
}






