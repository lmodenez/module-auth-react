import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { DisciplineRepository } from '../repositories/DisciplineRepository';

class DisciplineController {
  async create(request: Request, response: Response) {
    const disciplineRepository = getCustomRepository(DisciplineRepository);
    const discipline = request.body;

    try {
      if (discipline.disciplina != null && discipline.descricao != null) {
        const findDiscipline = await disciplineRepository.findOne({
          where: [{ disciplina: discipline.disciplina }],
        });

        if (findDiscipline) return response.sendStatus(409);

        const discipineCreate = await disciplineRepository.create(discipline);
        await disciplineRepository.save(discipineCreate);

        return response.sendStatus(200).json(discipineCreate);
      }
    } catch {
      return response.status(401);
    }
  }
  async disciplines(request: Request, response: Response) {
    const disciplineRepository = getCustomRepository(DisciplineRepository);

    try {
      const findDiscipline = await disciplineRepository.find();

      return response.json(findDiscipline).status(200);
    } catch {
      return response.status(401);
    }
  }
}

export { DisciplineController };
