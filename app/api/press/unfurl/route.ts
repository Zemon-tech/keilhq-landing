import { NextResponse } from 'next/server';
import { unfurlFresh } from '@/lib/unfurl';
import { isAdminAuthorized } from '@/lib/admin-auth';

export async function GET(request: Request) {
  if (!isAdminAuthorized(request)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const url = new URL(request.url).searchParams.get('url') || '';
  if (!/^https?:\/\//i.test(url)) {
    return NextResponse.json({ error: 'Provide a valid http(s) URL.' }, { status: 400 });
  }

  const data = await unfurlFresh(url);
  if (!data) {
    return NextResponse.json(
      { error: 'Could not read this link (login wall, bot block, or no metadata). Fill the fields by hand.', url },
      { status: 422 }
    );
  }
  return NextResponse.json({ url, ...data });
}
