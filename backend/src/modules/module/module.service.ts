import { OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ModuleService implements OnModuleInit {
  constructor(private readonly prismaService: DatabaseService) {}
  onModuleInit() {
    this.getTable();
  }
  getTable() {
    this.prismaService.$queryRaw<{ name: string }[]>`SELECT table_name as name
    FROM information_schema.tables
    WHERE table_schema = 'e-visa'
      AND table_type = 'BASE TABLE';`.then((val) => {
      console.log(val);
      Promise.all(
        val.map((e) => {
          const name = e.name.replace('_', '');
          return this.prismaService.module.upsert({
            create: { name: name },
            update: { name: name },
            where: { name: name },
          });
        }),
      );
    });
  }
}
