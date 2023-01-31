import CardCommodityService from "./CardCommodityService";
import CouponCommodityService from "./CouponCommodityService";
import GoodsCommodityService from "./GoodsCommodityService";
import ICommodity from "./ICommodity";

export default class StoreFactory {
  getCommodityService(commodityType: number): ICommodity | null {
    if (commodityType === 1) return new CouponCommodityService();
    if (commodityType === 2) return new GoodsCommodityService();
    if (commodityType === 3) return new CardCommodityService();
    return null;
  }
}