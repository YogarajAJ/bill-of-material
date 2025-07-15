import { BOM } from "src/bom/bom.dto";

export class ProductDto {
  id: string;
  name: string;
  code: string;
  description: string;
  status: any;
  createdAt: any;
  boms: BOM[];
}
