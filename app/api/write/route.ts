import * as process from "process";
import * as path from "path";
import * as fsPromises from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const database = path.join(process.cwd(), "data.json");
  const fileData = await fsPromises.readFile(database, { encoding: "utf-8" });
  const something = await request.json();
  const parsed = JSON.parse(fileData);
  parsed.push(something);
  try {
    await fsPromises.writeFile(database, JSON.stringify(parsed));
    return NextResponse.json(request.body, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
