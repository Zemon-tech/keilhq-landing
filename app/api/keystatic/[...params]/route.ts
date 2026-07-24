import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../cms/config';

let cachedHandler: ReturnType<typeof makeRouteHandler> | null = null;

const getHandler = () => {
  if (cachedHandler) return cachedHandler;

  const isGithubMode = config.storage.kind === 'github';

  if (isGithubMode) {
    const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
    const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
    const secret = process.env.KEYSTATIC_SECRET;

    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction && (!clientId || !clientSecret || !secret)) {
      throw new Error(
        `Missing required environment variables for Keystatic GitHub mode:\n` +
        `- KEYSTATIC_GITHUB_CLIENT_ID: ${clientId ? 'present' : 'missing'}\n` +
        `- KEYSTATIC_GITHUB_CLIENT_SECRET: ${clientSecret ? 'present' : 'missing'}\n` +
        `- KEYSTATIC_SECRET: ${secret ? 'present' : 'missing'}\n` +
        `Please ensure these variables are defined in your environment.`
      );
    }

    cachedHandler = makeRouteHandler({
      config,
      clientId,
      clientSecret,
      secret,
    });
  } else {
    cachedHandler = makeRouteHandler({
      config,
    });
  }

  return cachedHandler;
};

async function safeHandle(req: Request, method: 'GET' | 'POST') {
  try {
    const handler = getHandler();
    return await handler[method](req);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    console.error(`[keystatic] ${method} ${new URL(req.url).pathname} error:`, message, stack);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', detail: message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export const GET = (req: Request) => safeHandle(req, 'GET');
export const POST = (req: Request) => safeHandle(req, 'POST');
