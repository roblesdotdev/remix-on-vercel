import { installGlobals } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { handleRequest, type EntryContext } from "@vercel/remix";

installGlobals();

export default async function (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let remixServer = <RemixServer context={remixContext} url={request.url} />;
  return handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  );
}
