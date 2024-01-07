import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseConfigService } from "./config/mongooseconfig";
import { UserSchema } from "./entities/usersshema";
import { ContactSchema } from "./entities/contactshema";
import { NotifService } from "./services/notif.service";


let envFilePath = 'env.dev';
console.log(`phone book Running`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFilePath,
      isGlobal: true,
    }),
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema },{ name: 'User', schema: UserSchema }]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService,NotifService],
})
export class AppModule {}
