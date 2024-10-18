import { IsDefined, IsNegative, IsNumber, IsPositive, IsString } from "class-validator"

export class Replace{
  @IsDefined({
    message:'a név megadása kötelező'
  })
  @IsString()
	name:string

  @IsDefined()
  @IsNumber()
  @IsPositive()
  price:number
}

