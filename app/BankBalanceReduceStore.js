import {ReduceStore} from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

class BankBalanceReduceStore extends ReduceStore {
	getInitialState() {
		return 0;
	}

	reduce(state, action) {
		switch(action.type) {
			case bankConstants.CREATED_ACCOUNT:
				return 0;
			case bankConstants.DEPOSITED_INTO_ACCOUNT:
				return state + action.amount;
			case bankConstants.WITHDREW_FROM_ACCOUNT:
				return state - action.amount;
			default:
				return state;
		}
	}
};

export default new BankBalanceReduceStore(AppDispatcher);