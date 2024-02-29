import { Denops, parse } from "./deps.ts";

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

  await denops.cmd(
    `command! -nargs=? ZettelSetDir call denops#request('${denops.name}', 'setDir', [<f-args>])`,
  );
  await denops.cmd(
    `command! -nargs=? ZettelGetDir call denops#request('${denops.name}', 'getDir', [<f-args>])`,
  );
}
