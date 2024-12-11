import { NextResponse } from "next/server";
import PostUtils from '@/utils/PostUtils'

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await params

    if (!id) {
        return NextResponse.json({ error: 'error id' }, { status: 400 });
    }

    const post = PostUtils.generateRandomPost(parseInt(id))
    return NextResponse.json(post);
}
