/**
 * 工厂方法模式
 * 特定的工厂类产生特定的产品
 * 此模式没有根据类型的判断，实际上是把如何选择工厂的任务推迟给了使用者。
 */

abstract class BMW {
  abstract run(): void;
}

class BMW730 extends BMW {
  run() {
    console.log('BMW730 发动机')
  }
}

class BMW840 extends BMW {
  run() {
    console.log('BMW840 发动机')
  }
}

interface BMWFactory {
  produceBMW(): BMW;
}

class BMW730Factory implements BMWFactory {
  produceBMW(): BMW {
    return new BMW730();
  }
}

class BMW840Factory implements BMWFactory {
  produceBMW(): BMW {
    return new BMW840();
  }
}