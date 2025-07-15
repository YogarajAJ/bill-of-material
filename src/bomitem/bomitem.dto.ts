import { BomDto } from "src/bom/bom.dto";
import { MaterialDto } from "src/material/material.dto";

export class BOMItemDto{
  id            :string;   
  quantity      :number;
  referenceCode :string;
  bomId        : string;
  materialId   : string;
  unitId       : string;
  supplierId  :  string;
  bom         :  BomDto    ;  
  material    :  MaterialDto; 
  supplier     : any ;
  unit          :any ;
}