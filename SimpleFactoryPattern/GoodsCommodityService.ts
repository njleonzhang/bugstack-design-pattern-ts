import ICommodity from './ICommodity'

export default class GoodsCommodityService implements ICommodity {
  
  sendCommodity(uId: string, commodityId: string, bizId: string, extMap: {[key: string]: string}): void {
    // good service, 调用礼品发送接口
    console.log(`请求参数[实物礼品] => uId：${uId} commodityId：${commodityId} bizId：${bizId} extMap：${JSON.stringify(extMap)}`)
  }
}