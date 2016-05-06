import AppDispatcher from './AppDispatcher';
import BankBalanceReduceStore from './BankBalanceReduceStore'
import bankConstants from './constants';
import {ReduceStore} from 'flux/utils';

class BankRewardStore extends ReduceStore {
	getInitialState() {
		return 'Basic';
	}

	reduce(state, action) {
		this.getDispatcher().waitFor([
			BankBalanceReduceStore.getDispatchToken()
		]);

		if (action.type === bankConstants.DEPOSITED_INTO_ACCOUNT || action.type === bankConstants.WITHDREW_FROM_ACCOUNT) {
			let balance = BankBalanceReduceStore.getState();
			if (balance < 5000) {
				return 'Basic';
			} else if (balance < 10000) {
				return 'Gold';
			} else if (balance < 50000) {
				return 'Premium';
			}
		}

		return state;
	}
}

export default new BankRewardStore(AppDispatcher);