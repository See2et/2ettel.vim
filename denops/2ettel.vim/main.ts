import { Denops, parse } from "./deps.ts";
import { setCmd } from "./lib/setCmd.ts";

export let dir = "";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async setDir(args: unknown) {
      const [, , residues] = parse(args as string[]);
      dir = residues.join("");
      await denops.cmd(`echo "Your memos will be saved in ${dir}"`);
    },
    async getDir() {
      dir === ""
        ? await denops.cmd(`echo "Please do :ZettelSetDir <dir>"`)
        : await denops.cmd(`echo "Your memos are saved in ${dir}"`);
    },
  };

  setCmd(denops, "ZettelSetDir", "setDir");
  setCmd(denops, "ZettelGetDir", "getDir");
}
