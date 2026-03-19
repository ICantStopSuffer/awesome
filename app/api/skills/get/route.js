import SkillRepository from '@/modules/repositories/SkillRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const result = await SkillRepository.get(body.id);
  return NextResponse.json(result);
}