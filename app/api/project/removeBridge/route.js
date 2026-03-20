import ProjectRepository from '@/modules/repositories/ProjectRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const id = body.id;
  const project = body.project;

  console.log(id)

  const result = await ProjectRepository.removeProjectEmployeeBridge(id, project);
  return NextResponse.json({status: 201});
}