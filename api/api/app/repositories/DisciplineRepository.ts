import { EntityRepository, Repository } from 'typeorm';
import { Discipline } from '../models/Discipline';

@EntityRepository(Discipline)
class DisciplineRepository extends Repository<Discipline> {}

export { DisciplineRepository };
