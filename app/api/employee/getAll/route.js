import EmployeeRepository from '@/modules/repositories/EmployeeRepository';
import { NextResponse } from 'next/server';

export async function GET(request) {
  //const body = await request.json();

  const result = await EmployeeRepository.getAll();
  return NextResponse.json(result);
}