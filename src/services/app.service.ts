import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";
import { User } from "../entities/usersshema";
import { Contact } from "../entities/contactshema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class AppService {

  constructor(
    @InjectModel(User.name)
    private UserModel: mongoose.Model<User>,
    @InjectModel(Contact.name)
    private ContactModel: mongoose.Model<Contact>
  ) {}

  async findAll(): Promise<User[]> {
    try {
      const result = await this.UserModel.find().exec();
      console.log(result);
      return result;
    } catch (error) {

      console.error('Error while retrieving users:', error.message);

    }
  }


  async listUserContacts(user): Promise<Contact[]> {
    try {

      const result = await this.UserModel.findOne({email:user.email})
      if (!result) {
       // throw new NotFoundException('user not found.');
      }
      // Mapper le résultat à un DTO
      const userfind = result as User;
      return userfind.contacts;
    } catch (error) {

      console.error('Error while retrieving users:', error.message);

    }
  }

  async addcontact(email,contact:Contact) {
    try {

      const user = await this.UserModel.findOne({email:email})
      if (!user) {
        // throw new NotFoundException('user not found.');
      }
      // Mapper le résultat à un DTO
      const userfind = user as User;
      const newcontact = await this.ContactModel.create(contact)
      userfind.contacts.push(newcontact);

      return await this.UserModel.findOneAndUpdate(userfind);
    } catch (error) {

      console.error('Error while retrieving users:', error.message);

    }
  }

  async removecontact(email,contactemail) {
    try {
      const user = await this.UserModel.findOne({email:email})
      if (!user) {
        // throw new NotFoundException('user not found.');
      }

      const contact = await this.ContactModel.findOne({email:contactemail})
      if (!contact) {
        // throw new NotFoundException('contact not found.');
      }
      // Mapper le résultat à un DTO
      const userfind = user as User;

      userfind.contacts.forEach( (item, index) => {
        if(item.email === contactemail) userfind.contacts.splice(index,1);
      });

      await this.ContactModel.deleteOne({email:contactemail})


      return await this.UserModel.findOneAndUpdate(userfind);
    } catch (error) {

      console.error('Error while retrieving users:', error.message);

    }
  }
}
