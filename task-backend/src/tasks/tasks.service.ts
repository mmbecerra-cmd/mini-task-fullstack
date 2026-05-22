import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {

  constructor(
    private prisma: PrismaService
  ) {}

  // CREAR TAREA

  create(createTaskDto: any) {

    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  // OBTENER TODAS

  findAll() {

    return this.prisma.task.findMany();
  }

  // OBTENER UNA

  findOne(id: number) {

    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  // ACTUALIZAR

  update(id: number, updateTaskDto: any) {

    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  // ELIMINAR

  remove(id: number) {

    return this.prisma.task.delete({
      where: { id },
    });
  }

}