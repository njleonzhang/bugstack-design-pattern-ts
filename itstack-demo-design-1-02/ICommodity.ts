export default interface ICommodity {
  sendCommodity(
    uid: string,
    commodityId: string,
    bizId?: string,
    extMap?: {[key: string]: string}
  ) : void
}

