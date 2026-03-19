
import EmployeeRepository from '@/modules/repositories/EmployeeRepository';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const result = await EmployeeRepository.insert(body.name, body.department);
  return NextResponse.json({status: 201});
}