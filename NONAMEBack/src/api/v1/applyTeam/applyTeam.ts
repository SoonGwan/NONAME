import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import ApplyTeam from '../../../entity/ApplyTeam';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  type RequestBody = {
    user_id: string;
    apply_team_idx: number;
    team_apply_reason: string;
  };

  const data: RequestBody = req.body;

  try {
    const applyTeamList = getRepository(ApplyTeam);

    await applyTeamList.save(data);
    logger.green('팀 신청 성공');
    return res.status(200).json({
      status: 200,
      message: '팀 신청 성공',
    });
  } catch (error) {
    console.log(error);
    logger.red('팀 신청중 오류가 발생했습니다.');
    res.status(500).json({
      status: 500,
      message: '팀 신청중 오류가 발생했습니다.',
    });
  }
};
