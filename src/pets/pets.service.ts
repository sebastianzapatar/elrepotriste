import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pet.name) private petModel: Model<Pet>
  ) {
    console.log('PetsService constructor');
  }
  async create(createPetDto: CreatePetDto) {
    const pet = await this.petModel.create(createPetDto);
    return  pet;
  }

  async findAll() {
    return await this.petModel.find({});
  }

  async findOne(id: string) {
    let pet=await this.petModel.findById({_id: id});
    if(!pet){throw new NotFoundException("Not found");}
    return pet;
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    let pet=await this.findOne(id);
    await pet.updateOne(updatePetDto,{new:true});
    return {...pet.toJSON(),...updatePetDto};
  }

  async remove(id: string) {
    let pet=await this.findOne(id);
    await pet.deleteOne();
    return pet;
  }
}
