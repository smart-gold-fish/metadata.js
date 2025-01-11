
import {meta as log} from './log.mjs';
import {meta as schemeSettings} from './schemeSettings.mjs';
import {meta as destinations} from './destinations.mjs';
import {meta as values} from './propertyValues.mjs';
import {meta as formulas} from './formulas.mjs';
import {meta as servers} from './servers.mjs';
import propertiesClasses, {meta as properties} from './properties.mjs';
import predefinedElmntsClasses, {meta as predefinedElmnts} from './predefinedElmnts.mjs';
import accountsClasses, {meta as accounts} from './accounts.mjs';
import usersClasses, {meta as users} from './users.mjs';
import abonentsClasses, {meta as abonents} from './abonents.mjs';
import branchesClasses, {meta as branches} from './branches.mjs';

const meta = [
  log,
  schemeSettings,
  destinations,
  values,
  formulas,
  servers,
  properties,
  predefinedElmnts,
  accounts,
  users,
  abonents,
  branches,
];

/**
 * Виртуальные поля перечислений
 * @type {string[]}
 */
export const enmFields = {
  latin: {
    synonym: 'latin',
    type: {
      types: ['string'],
      strLen: 50
    }
  },
  name: {
    synonym: 'name',
    type: {
      types: ['string'],
      strLen: 50
    }
  },
  order: {
    synonym: 'order',
    type: {
      types: ['number'],
      digits: 3,
      fraction: 0
    }
  },
};

export const sysFields = ['zone','id','numberDoc','date','parent','owner'];

export const sysObjs = [];
export const sysClasses = [
  accountsClasses,
  usersClasses,
  abonentsClasses,
  branchesClasses,
  propertiesClasses,
  predefinedElmntsClasses,
];

for(const curr of meta) {
  for(const cname in curr) {
    for(const name in curr[cname]) {
      sysObjs.push(`${cname}.${name}`);
    }
  }
}

export default meta;
