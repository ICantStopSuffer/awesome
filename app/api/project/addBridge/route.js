import ProjectRepository from '@/modules/repositories/ProjectRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const id = body.id;
  const project = body.project;

  const result = await ProjectRepository.insertProjectEmployeeBridge(id, project);
  return NextResponse.json({status: 201});
}