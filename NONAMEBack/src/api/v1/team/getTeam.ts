import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import TeamList from '../../../entity/TeamList';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  try {
    const teamList = getRepository(TeamList);
    const team: TeamList[] = await teamList.find({
      order: {
        idx: 'DESC',
      },
    });
    logger.green('팀 리스트 조회 성공');
    res
      .status(200)
      .json({ status: 200, message: '팀 조회 성공', data: { team } });
  } catch (error) {
    logger.red('팀 조회중 오류', error.message);
    res.status(500).json({ status: 500, message: error.message });
  }
};
