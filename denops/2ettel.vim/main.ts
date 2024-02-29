import { Denops, parse } from "./deps.ts";
import { setCmd } from "./lib/setCmd.ts";

export let dir = "~/2ettel";

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
    async createMemo(args: unknown) {
      const [, , residues] = parse(args as string[]);
      const title = residues.join("");
      Deno.createSync(`${dir}/${title}.md`);
      await denops.cmd(`echo "created ${dir}/${title}.md"`);
    },
  };

  setCmd(denops, "ZettelSetDir", "setDir");
  setCmd(denops, "ZettelGetDir", "getDir");
  setCmd(denops, "ZettelMemo", "createMemo");
}
