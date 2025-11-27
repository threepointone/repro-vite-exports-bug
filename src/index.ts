import { DurableObject } from "cloudflare:workers";
import { exports } from "cloudflare:workers";

export class MyDurableObject extends DurableObject {
  async fetch(request: Request) {
    return new Response("Hello, world!");
  }
}

export default {
  fetch: (request: Request, env: Env, ctx: ExecutionContext) => {
    console.log("exports", exports);
    console.log("ctx.exports", ctx.exports);
    return new Response("Hello, world!");
  },
};
