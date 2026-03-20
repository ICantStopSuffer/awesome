import ProjectRepository from '@/modules/repositories/ProjectRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const id = body.id;

  const result = await ProjectRepository.getProjectsFromEmployee(id);

  console.log(id)
  return NextResponse.json(result);
}