
import { BOMItemDto } from "src/bomitem/bomitem.dto";
import { ProductDto } from "src/product/product.dto";

export class BOM {
  id: string;
  name       :   string;
  effectiveFrom: Date;
  revision     : number;
  createdAt    : Date;  
  productId     :string;
  product       :ProductDto;  
  items         :BOMItemDto[];

}