import { readdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
export default async function ServerInformation() {
 const files = await readdir(path.join(process.cwd(), "app", "labs", "lab3"));
 return <section><h3>Server Information</h3><pre>{JSON.stringify({platform:os.platform(),arch:os.arch(),node:process.version},null,2)}</pre>
 <h4>Files read on the server</h4><ul>{files.slice(0,6).map(name=><li key={name}>{name}</li>)}</ul></section>;
}
