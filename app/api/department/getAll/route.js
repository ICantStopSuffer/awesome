import DepartmentRepository from '@/modules/repositories/DepartmentRepository';
import { NextResponse } from 'next/server';

export async function GET(request) {
  //const body = await request.json();

  const result = await DepartmentRepository.getAll();
  return NextResponse.json(result);
}