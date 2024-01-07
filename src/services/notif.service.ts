import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../entities/usersshema";
import mongoose from "mongoose";
import { Contact } from "../entities/contactshema";

@Injectable()
export class NotifService {

  constructor(

  ) {
  }


  async notif(user:User,details) {
    try {
      if(user.notifications=="email")  this.emailnotif(user.phonenumber,details.namecontact,details.eventtype)
      else if(user.notifications=="SMS")  this.smsnotif(user.phonenumber,details.namecontact,details.eventtype)
    } catch (error) {

      console.error('Error while sending notif:', error.message);

    }
  }
   private  smsnotif(phone,namecontact,eventtype){
    console.log("the contact "+namecontact+"has been"+eventtype)
   }

  private emailnotif(email,namecontact,eventtype){
    console.log("the contact "+namecontact+"has been"+eventtype)
  }
}
