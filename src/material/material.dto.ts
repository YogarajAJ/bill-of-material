import { BOMItemDto } from "src/bomitem/bomitem.dto";

export class MaterialDto { 
  id :   string;    
  name:  string;
  code : string;    
  type  :string;
  items :BOMItemDto[];
}
