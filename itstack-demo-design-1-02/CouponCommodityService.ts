import ICommodity from './ICommodity'


class CouponService {
  sendCoupon(uId: string, commodityId: string, bizId: string) {}
}

export default class CouponCommodityService implements ICommodity {
  couponService = new CouponService()
  
  sendCommodity(uId: string, commodityId: string, bizId: string, extMap: {[key: string]: string}): void {
    this.couponService.sendCoupon(uId, commodityId, bizId);
    console.log(`请求参数[优惠券] => uId：${uId} commodityId：${commodityId} bizId：${bizId} extMap：${JSON.stringify(extMap)}`)
  }
}