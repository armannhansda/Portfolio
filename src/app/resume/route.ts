import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const resumePath = path.join(process.cwd(), 'lib', 'Resume.pdf');
  const resume = await readFile(resumePath);

  return new NextResponse(resume, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Resume.pdf"',
    },
  });
}
