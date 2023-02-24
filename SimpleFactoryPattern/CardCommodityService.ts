import ICommodity from './ICommodity'

class IQiYiCardService {
  grantToken(mobile: string, bizId: string) {}
}

export default class CardCommodityService implements ICommodity {
  iQiYiCardService = new IQiYiCardService();

  sendCommodity(uId: string, commodityId: string, bizId: string, extMap: {[key: string]: string}): void {
    let mobile = this.queryUserMobile(uId);
    this.iQiYiCardService.grantToken(mobile, bizId);
    console.log(`请求参数[爱奇艺兑换卡] => uId：${uId} commodityId：${commodityId} bizId：${bizId} extMap：${JSON.stringify(extMap)}`)
  }

  queryUserMobile(uId: string): string {
    return '13913002988'
  }  
}