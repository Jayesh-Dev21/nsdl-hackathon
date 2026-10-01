import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/* Always evaluate at request time — never prerender or cache the gate. */
export const dynamic = "force-dynamic";

/* Problem statement goes public at 18:00 IST on 1 Oct 2026 (= 12:30 UTC). */
const RELEASE_AT = Date.UTC(2026, 9, 1, 12, 30);

export async function GET() {
  if (Date.now() < RELEASE_AT) {
    return new NextResponse("The problem statement has not been released yet.", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

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