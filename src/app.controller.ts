import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AppService } from './services/app.service';
import { User } from "./entities/usersshema";
import { Contact } from "./entities/contactshema";

@Controller('phonebook')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("users")
  getallusers(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Get("contacts/:id")
  listcontact(@Param('id') id: number): Promise<Contact[]> {
    return this.appService.listUserContacts(id);
  }


  @Post("addcontact/:id")
  addcontact(@Param('id') id: number,@Body() body) {
    return this.appService.addcontact(id,body.email,body.contact);
  }

  @Delete("removecontact/:id")
  removecontact(@Param('id') id: number,@Body() body) {
    return this.appService.removecontact(id,body.email,body.contact);
  }
}
