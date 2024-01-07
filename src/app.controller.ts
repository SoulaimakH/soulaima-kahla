import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
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

  @Post("contacts")
  listcontact(@Body() user): Promise<Contact[]> {
    return this.appService.listUserContacts(user);
  }
  @Post("addcontact")
  addcontact(@Body() body) {
    return this.appService.addcontact(body.email,body.contact);
  }

  @Delete("removecontact")
  removecontact(@Body() body) {
    return this.appService.removecontact(body.email,body.contact);
  }
}
