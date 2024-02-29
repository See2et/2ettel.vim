import { Denops } from "./deps.ts";

export function main(denops: Denops): void {
  denops.dispatcher = {
    async hello() {
      await denops.cmd(`echo "Hello, Denops!"`);
    },
  };
}
