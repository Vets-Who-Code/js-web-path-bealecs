import * as process from "process";
import * as path from "path";
import * as fsPromises from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const database = path.join(process.cwd(), "contact.json"); //directory variable for data.json file
  const fileData = await fsPromises.readFile(database, { encoding: "utf-8" }); //awaits the json object of the data.json file
  const dataResult = await request.json(); //grabs the comment that is sent from the client side api
  const parsed = JSON.parse(fileData);
  parsed.push(dataResult);
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