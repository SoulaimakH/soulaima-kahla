import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class Contact {
  @Prop({ unique: true, required: true })// l'unicité des données
  name: string;

  @Prop()
  email:string;

  @Prop({required: true })
  listphonenumber:number[];




}
export const ContactSchema = SchemaFactory.createForClass(Contact);