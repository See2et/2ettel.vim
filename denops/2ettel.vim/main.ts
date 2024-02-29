import type { Denops } from "https://deno.land/x/denops_std@v6.1.0/mod.ts";

export function main(denops: Denops): void {
  denops.dispatcher = {
    async hello() {
      await denops.cmd(`echo "Hello, Denops!"`);
    },
  };
}

