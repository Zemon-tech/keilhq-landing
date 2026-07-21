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

export const GET = (req: Request) => getHandler().GET(req);
export const POST = (req: Request) => getHandler().POST(req);
