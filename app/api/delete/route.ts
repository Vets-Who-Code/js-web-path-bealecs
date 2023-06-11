import * as process from "process";
import * as path from "path";
import * as fsPromises from "fs/promises";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, response: Response) {
    try {
        // Delete the comment from the data.json file
        const database = path.join(process.cwd(), "data.json"); //directory variable for data.json file
        const fileData = await fsPromises.readFile(database, { encoding: "utf-8" }); //awaits the json object of the data.json file
        const dataResult = await request.json(); //grabs the comment that is sent from the client side api
        const parsed = JSON.parse(fileData);
        const index = parsed.findIndex((item) => item.id == dataResult.id); //is the id from the edit comment clicked = to anything from data.json?
        if (index !== -1) { 
          await fsPromises.writeFile(database, JSON.stringify(parsed.splice(index, 1)));
          return NextResponse.json("Comment deleted successfully", { status: 200 });
        }  else {
            return NextResponse.json("Route not found...", { status: 404 });
          }
      } catch (err) {
        console.error(err);
        return NextResponse.json("Internal Server Error", { status: 500 });
      }
}