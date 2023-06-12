import * as process from "process";
import * as path from "path";
import * as fsPromises from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/dist/client/components/headers";

//creates type for the comments in data.json
interface Comment {
  id: number;
  comment: string;
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const database = path.join(process.cwd(), "data.json"); //directory variable for data.json file

  try {
    //I had to pass the comment ID from the headers to work around a NextJS bug, see client side delete method for what I mean
    const head = headers();
    const id = head.get("Comment-ID");
    // const { id } = request.query; //Destructuring the ID of the comment from the request query of the delete request (this is how I would have done it but there was a nextjs bug)

    const fileData = await fsPromises.readFile(database, {
      encoding: "utf8",
    });
    //returns the info inside data.json
    const parsed = JSON.parse(fileData);

    const deleteComment = parsed.filter(
      (comment: Comment) => comment.id !== Number(id)
    ); //creates a new array after comparing the id of each index from data.json to the id of the comment that was triggering the delete request.
    // The New array will not have the deleted index

    await fsPromises.writeFile(database, JSON.stringify(deleteComment));
    //utilizing NextResponse was the proper way to handle responses according to nextDocs for those using /app routing
    return NextResponse.json("Comment deleted successfully", { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}