import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "./event.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Event])],
    exports: [TypeOrmModule]
})
export class EventModule {}