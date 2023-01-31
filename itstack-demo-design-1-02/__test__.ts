import StoreFactory from "./StoreFactory";

let storeFactory = new StoreFactory();
let commodityService1 = storeFactory.getCommodityService(1);
commodityService1?.sendCommodity("10001", "EGM1023938910232121323432", "791098764902132")

let commodityService2 = storeFactory.getCommodityService(2);
commodityService2?.sendCommodity("10001","9820198721311","1023000020112221113", {
  consigneeUserName: '谢飞机',
  consigneeUserPhone: '15200292123',
  consigneeUserAddress: '吉林省.长春市.双阳区.XX街道.檀溪苑小区.#18-2109'
})

let commodityService3 = storeFactory.getCommodityService(3);
commodityService3?.sendCommodity("10001","AQY1xjkUodl8LO975GdfrYUio")