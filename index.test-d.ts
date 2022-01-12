import {expectType} from 'tsd';
import letter from './index.js';

expectType<string>(letter());
expectType<string>(letter({casing: 'upper'}));
expectType<string>(letter({casing: 'upper', locale: 'en_US'}));