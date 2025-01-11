
//const MetaEngine = import('../../core/src/index.js');
import MetaEngine from "../../core/src/index.mjs";

// MetaEngine.plugin(...)
const $p = global.$p = new MetaEngine();

console.log($p.version);
