import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Contact } from "./contactshema";

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ unique: true, required: true })// l'unicité des données
  name: string;

  @Prop({ unique: true,required: true})
  email:string;

  @Prop({ unique: true,required: true})
  phonenumber:number;

  @Prop()
  contacts:Contact[];

  /*@Prop({ required: true })
  listHauteur: number[];

  @Prop()
  maxsurfaceEau: number;*/

}
export const UserSchema = SchemaFactory.createForClass(User);