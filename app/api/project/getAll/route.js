import ProjectRepository from '@/modules/repositories/ProjectRepository';
import { NextResponse } from 'next/server';

export async function GET() {
  //const body = await request.json();

  const result = await ProjectRepository.getAll();
  return NextResponse.json(result);
}