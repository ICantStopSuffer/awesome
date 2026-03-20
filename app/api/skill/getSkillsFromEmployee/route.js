import SkillRepository from '@/modules/repositories/SkillRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const id = body.id;
  const result = await SkillRepository.getSkillsFromEmployee(id);
  return NextResponse.json(result);
}