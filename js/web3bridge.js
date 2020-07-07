

if (window.TEST) {
	window.elaeth_blocknumber_url = "https://explorer.elaeth.io/api?module=block&action=eth_block_number";
	window.contract_address = "0xefdb328c09b6e20314fe201a5dba74cf36ef8bdd";
}
else {
	window.elaeth_blocknumber_url = "https://explorer.elaeth.io/api?module=block&action=eth_block_number";
	window.contract_address = "0xc4032babad2b76c39abec3c4e365611de78528ed";
}


class Web3Bridge {

	constructor () {
		if (window.ethereum) {
			this._ethereum = window.ethereum;
		    this._web3 = new Web3(this._ethereum);

            this._ethereum.enable();
	    }
	    // else if (window.web3) {
	    //     this._web3 = new Web3(window.web3.currentProvider);
	        
	    // }
	    else {
	        throw 'Non-Ethereum browser detected. You should consider trying MetaMask!';
	    }

	}

	async isElaSidechain () {
		var pthis = this;

		var ela_blocknum;
		return this._web3.eth.net.getId()
			.then(function(chainId) {
				if (chainId != 1)
					return Promise.reject(false);
				else
					return fetch(elaeth_blocknumber_url);
			})
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				ela_blocknum = parseInt(myJson.result);
				return pthis._web3.eth.getBlockNumber();
			})
			.then(function(blocknum) {
				return Math.abs(ela_blocknum - blocknum) < 5;
			})
			.catch(function(ret) {
				return ret;
			});
	}

	async isEthMainchain () {
		var pthis = this;

		var ela_blocknum;
		return this._web3.eth.net.getId()
			.then(function(chainId) {
				if (chainId != 1)
					return Promise.reject(false);
				else
					return fetch(elaeth_blocknumber_url);
			})
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				ela_blocknum = parseInt(myJson.result);
				return pthis._web3.eth.getBlockNumber();
			})
			.then(function(blocknum) {
				return Math.abs(ela_blocknum - blocknum) > 5;
			})
			.catch(function(ret) {
				return ret;
			});

	}

	async isRopstenchain () {
		return this._web3.eth.net.getId()
			.then(function(chainId) {
				return chainId == 3;
			});
	}

	async getAccount () {
		var pthis = this;
		return this._web3.eth.getAccounts()
			.then(function(accounts) {
				pthis._account = accounts[0];
				return pthis._account;
			});
	}

	async sign (data) {
		return this._web3.eth.personal.sign(data, this._account)
			.then (function(s) {
				return s;
			});
	}

	getWeb3 () {
		return this._web3;
	}
};