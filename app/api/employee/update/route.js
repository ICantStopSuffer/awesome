
import EmployeeRepository from '@/modules/repositories/EmployeeRepository';
import ProjectRepository from '@/modules/repositories/ProjectRepository';
import SkillRepository from '@/modules/repositories/SkillRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const id = body.id;
  const name = body.name;
  const department = body.department;

  const result = await EmployeeRepository.update(id, name, department);

  return NextResponse.json({status: 201});
}