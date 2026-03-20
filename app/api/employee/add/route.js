
import EmployeeRepository from '@/modules/repositories/EmployeeRepository';
import SkillRepository from '@/modules/repositories/SkillRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const name = body.name;
  const department = body.department;

  const result = await EmployeeRepository.insert(name, department);

  return NextResponse.json({status: 201});
}