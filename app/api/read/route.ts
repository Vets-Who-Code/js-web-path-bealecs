import * as process from "process";
import * as path from "path";
import * as fsPromises from "fs/promises";
import { NextResponse } from "next/server";

export async function GET() {
  const database = path.join(process.cwd(), "data.json");
  try {
    const data = await fsPromises.readFile(database, "utf8");
    const dataParsed = JSON.parse(data);
    return NextResponse.json(dataParsed, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
