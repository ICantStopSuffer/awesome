import SkillRepository from '@/modules/repositories/SkillRepository';
import { NextResponse } from 'next/server';

export async function GET(request) {
  //const body = await request.json();

  const result = await SkillRepository.getAll();
  return NextResponse.json(result);
}