import { IsDefined, IsNegative, IsNumber, IsPositive, IsString } from "class-validator"

export class Replace{
  @IsDefined()
  @IsString()
	name:string

  @IsDefined()
  @IsNumber()
  @IsPositive()
  price:number
}

