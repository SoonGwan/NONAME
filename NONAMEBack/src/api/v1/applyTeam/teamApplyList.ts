import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import ApplyTeam from '../../../entity/ApplyTeam';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  const apply_team_idx = Number(req.query.idx);
  console.log(apply_team_idx);
  try {
    const applyTeamList = getRepository(ApplyTeam);
    const applyTeam = await applyTeamList.find({
      where: {
        apply_team_idx,
      },
    });
    if (!applyTeam) {
      logger.yellow('팀에 신청한 사람이 없음');
      res
        .status(404)
        .json({ status: 404, message: '팀에 신청하 사람이 없어요' });
    }
    res.status(200).json({
      status: 200,
      message: '팀 신청한 사람 조회 성공',
      data: { applyTeam },
    });
  } catch (err) {
    logger.red('팀 신청자 조회중 오류 발생');
    res.status(500).json({
      status: 500,
      message: '팀 신청자 조회중 오류 발생',
    });
  }
};
