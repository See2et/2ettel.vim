import { Denops } from "../deps.ts";

export async function setCmd(denops: Denops, cmdName: string, fnName: string) {
  await denops.cmd(
    `command! -nargs=? ${cmdName} call denops#request('${denops.name}', '${fnName}', [<f-args>])`,
  );
}
