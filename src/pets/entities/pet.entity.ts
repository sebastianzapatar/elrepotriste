import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pet {
    @Prop({
        required: true
    })
    name: string;
    @Prop({
        required: true
    })
    type: string;
    @Prop({
        required: false,
    })
    born: Date;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
