import * as mngrs from './mngrs.mjs';
import * as objs from './objs.mjs';
import * as tabulars from './tabulars.mjs';
import Meta from './meta/index.mjs';
import MetaEventEmitter from './meta/emitter.mjs';
import AbstracrAdapter from './adapter.mjs';

const classes = Object.assign({Meta, MetaEventEmitter, AbstracrAdapter}, mngrs, objs, tabulars);
export default classes;
