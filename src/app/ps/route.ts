import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  try {
    const pdf = await readFile(join(process.cwd(), "PS_Investor_Resilliance.pdf"));
    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="SANGYAN-Problem-Statement.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new NextResponse("Problem statement is unavailable right now.", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}