/** @param {NS} ns **/
export async function main(ns) {
const baseUrl = "https://raw.githubusercontent.com/hospotho/Bitburner-script/main/"
const filesToDownload = [
'best.js',
'buyServer.js',
'checkRam.js',
'formula.js',
'g.js',
'get.js',
'getMax.js',
'h.js',
'health.js',
'index.d.ts',
'init.js',
'killall.js',
'map.js',
'master.js',
'reset.js',
'start.js',
'test.js',
'w.js',
'worm.js'
]  
function localeHHMMSS(ms = 0) {
  if (!ms) {
    ms = new Date().getTime();
  }

  return new Date(ms).toLocaleTimeString();
}
  for (let i = 0; i < filesToDownload.length; i++) {
    const filename = filesToDownload[i]
    const path = baseUrl + filename
    await ns.scriptKill(filename, 'home');
    await ns.rm(filename);
    await ns.sleep(200);
    ns.tprint(`[${localeHHMMSS()}] Trying to download ${path}`);
    await ns.wget(path + '?ts=' + new Date().getTime(), filename);
    ns.tprint("All File Downloaded");
  }  
}
