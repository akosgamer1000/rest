import { Body, Controller,  Delete,  Get, NotFoundException, Param, Patch, Put, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Replace } from './k.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
  #productlist=[
    {

      name:  'washing machine',
      price:15000

    },
    {

      name:  'baseball',
      price:10000

    },
    {

      name:  'detergent',
      price:10000

    }
    
    
  ]
  @Get('product')
  listprod(){
    return  this.#productlist;
      
  
  }
  @Get('product/:id')
  getPar(@Param('id') id:string){
      return JSON.stringify(this.#productlist[id])
  }
  @Delete('product/:id')
  Dleteprod(@Param('id') id:string){
      if(!this.#productlist[id]){
        throw new NotFoundException("cannot delte")
      }
     
      this.#productlist.splice(Number.parseInt( id),1)
  }
  @Put('product/:id')
  getPut(@Param('id') id:string,@Body() data:Replace ){
    if(!this.#productlist[id]){
      throw new NotFoundException("cannot delte")
    }
    this.#productlist[id].name =data.name
    this.#productlist[id].price=data.price
    
  }
}

