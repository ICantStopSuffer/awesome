import SkillRepository from '@/modules/repositories/SkillRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const result = await SkillRepository.remove(body.id);
  return NextResponse.json({status: 201});
}