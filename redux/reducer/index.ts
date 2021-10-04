import { combineReducers } from 'redux';

import MarketReducer from './appReducer';

export default combineReducers({ marketState: MarketReducer });
