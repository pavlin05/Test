import { NextResponse } from "next/server";
import PostUtils from '@/utils/PostUtils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const numPosts = parseInt(searchParams.get("n") || "5");

  const posts = Array.from({ length: numPosts }, (_, i) =>
    PostUtils.generateRandomPost(i + 1)
  );

  return NextResponse.json(posts);
}
