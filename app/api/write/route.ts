import * as process from "process";
import * as path from "path";
import * as fsPromises from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const database = path.join(process.cwd(), "data.json"); //directory variable for data.json file
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

export async function PUT(request: Request, response: Response) {
  try {
    const database = path.join(process.cwd(), "data.json"); //directory variable for data.json file
    const fileData = await fsPromises.readFile(database, { encoding: "utf-8" }); //awaits the json object of the data.json file
    const dataResult = await request.json(); //grabs the comment that is sent from the client side api
    const parsed = JSON.parse(fileData);
    const index = parsed.findIndex((item) => item.id == dataResult.id); //is the id from the edit comment clicked = to anything from data.json?
    if (index !== -1) { 
      parsed[index].comment = dataResult.comment;
      await fsPromises.writeFile(database, JSON.stringify(parsed));
      return NextResponse.json("Comment updated successfully", { status: 200 });
    } else {
      return NextResponse.json("Something went wrong..", { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
