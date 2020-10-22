import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logger from '../../../lib/logger';
import TeamList from '../../../entity/TeamList';

export default async (req: Request, res: Response) => {
  const idx: number = Number(req.query.idx);
  try {
    const teamList = getRepository(TeamList);
    const team = await teamList.findOne({
      idx,
    });

    if (!team) {
      res
        .status(404)
        .json({ status: 404, message: '삭제할 팀을 찾을 수 없습니다.' });
      return;
    }

    teamList.remove(team);
    logger.green('해당 팀 삭제 성공');
    res
      .status(200)
      .json({ status: 200, message: '헤딩 팀을 성공적으로 삭제했습니다.' });
  } catch (err) {
    logger.red('해딩 팀 삭제중 오류가 발생했습니다.');
    res
      .status(500)
      .json({ status: 500, message: '해당팀 삭제중 오류가 발생했습니다.' });
  }
};
