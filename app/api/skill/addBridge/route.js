import SkillRepository from '@/modules/repositories/SkillRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const id = body.id;
  const skill = body.skill;

  const result = await SkillRepository.insertSkillEmployeeBridge(id, skill);
  return NextResponse.json({status: 201});
}