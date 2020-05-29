

var elaeth_blocknumber_url = "https://explorer.elaeth.io/api?module=block&action=eth_block_number";
var contract_address = "0x4138e9b4db5fd34f000ed82901a2f6c448a8f3bf";

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

class Crypton {

	constructor (abiArray, contractAddress, web3) {
		this._web3 = web3;
		this._contact = new this._web3.eth.Contract(abiArray, contractAddress);
	}

	async _init_account (force) {
		if (!force && this._account) return this._account;

		var pthis = this;
		return await this._web3.eth.getAccounts()
			.then(function(accounts) {
				if (!pthis._account || pthis._account != accounts[0]) {
					pthis._account = accounts[0];
				}
				return pthis._account;
			});
	}

	async _generate_option (price) {
		var pthis = this;
		return this._web3.eth.getGasPrice()
			.then(function(gasPrice) {
				if (price)
					return { from: pthis._account, gasPrice: gasPrice, gas: 1000000, value: pthis._web3.utils.toWei(price, "ether") };
				else
					return { from: pthis._account, gasPrice: gasPrice, gas: 1000000, value:'0' };
			});
	}

	async getOwnerOfNameToken (name) {
		var pthis = this;
		return this._init_account()
			.then(function() {
        		var tokenId = pthis._web3.utils.hexToNumberString("0x"+sha256(name));
        		return pthis._contact.methods.ownerOf(tokenId).call();
			})
			.catch(function(){
				return "";
			});
	}

	async getTokenNameCount () {
		var pthis = this;
		return this._init_account()
			.then(function() {
        		return pthis._contact.methods.totalSupply().call();
			})
			.catch(function(){
				return 0;
			});
	}

	async getNameTokens (start, end) {
		var pthis = this;
		return this._init_account()
			.then(function() {
        		return pthis._contact.methods.totalSupply().call();
			})
			.then(async function(count) {
				var result = [];

				for (var i=start; i<count && (!end || i<end); i++) {
					var tokenid = await pthis._contact.methods.tokenByIndex(i).call();
					var owner = await pthis._contact.methods.ownerOf(tokenid).call();
					var name = await pthis._contact.methods.tokenURI(tokenid).call();
					result.push({
						"tokenId": tokenid,
						"name": name,
						"owner": owner
					});
				}
				return result;
			})
			.catch(function(){
				return [];
			});
	}

	async getOwnerNameTokens (address) {
		var pthis = this;
		return this._init_account()
			.then(function() {
        		return pthis._contact.methods.balanceOf(address).call();
			})
			.then(async function(count) {
				var result = [];

				for (var i=0; i<count; i++) {
					var tokenid = await pthis._contact.methods.tokenOfOwnerByIndex(address, i).call();
					var owner = address;
					var name = await pthis._contact.methods.tokenURI(tokenid).call();
					result.push({
						"tokenId": tokenid,
						"name": name,
						"owner": owner
					});
				}
				return result;
			})
			.catch(function(){
				return [];
			});
	}

	async getContractOwner () {
		var pthis = this;
		return this._init_account()
			.then(function() {
        		return pthis._contact.methods.owner().call();
			})
			.catch(function(){
				return "";
			});
	}

	async getImplementContract () {
		var pthis = this;
		return this._init_account()
			.then(function() {
        		return pthis._contact.methods.implementation_slot().call();
			})
			.catch(function(){
				return "";
			});
	}

	async getCurrentPrice (level) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				if (level == 1) {
					return pthis._contact.methods.price_level1().call();
				}
				else if (level == 2) {
					return pthis._contact.methods.price_level2().call();
				}
				else if (level == 3) {
					return pthis._contact.methods.price_level3().call();
				}
			})
			.then(function(x) {
				return pthis._web3.utils.fromWei(x, "ether");
			})
			.catch(function(){
				return -1;
			});
	}

	async getRenewalPrice (name) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				if (level == 1) {
					return pthis._contact.methods.renewal_level1().call();
				}
				else if (level == 2) {
					return pthis._contact.methods.renewal_level2().call();
				}
				else if (level == 3) {
					return pthis._contact.methods.renewal_level3().call();
				}
			})
			.then(function(x) {
				return pthis._web3.utils.fromWei(x, "ether");
			})
			.catch(function(){
				return -1;
			});
	}

	async getExpiration (name) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				var tokenId = pthis._web3.utils.hexToNumberString("0x"+sha256(name));
				return pthis._contact.methods.tokenExpiration(tokenId).call();
			})
			.catch(function(){
				return -1;
			});
	}

	async transfer (to, name) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				return pthis._generate_option("0.1");
			})
			.then(function(option) {
        		return pthis._contact.methods.transfer(pthis._account, to, name).send(option);
			});
	}

	async registerName (name, price) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				return pthis._generate_option(price);
			})
			.then(function(option) {
				return pthis._contact.methods.externalMint(name).send(option);	
			});
	}

	async generateName (to, name) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				return pthis._generate_option();
			})
			.then(function(option) {
				return pthis._contact.methods.mint(to, name).send(option);
			});
	}

	async setBasicInfo (name, btc, eth, ela, did, pubkey) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				return pthis._generate_option();
			})
			.then(function(option) {
				return pthis._contact.methods.setBasicInfo(name, btc, eth, ela, did, pubkey).send(option);
			});
	}

	async setKeyword (name, key, value) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				return pthis._generate_option();
			})
			.then(function(option) {
				return pthis._contact.methods.setKeyword(name, key, value).send(option);
			});
	}

	async withdraw (value) {
		var pthis = this;
		return this._init_account()
			.then(function() {
				return pthis._generate_option();
			})
			.then(function(option) {
				return pthis._contact.methods.withdraw(value).send(option);
			});
	}

	async getKeyword (name, key) {
		var pthis = this;
		return this._init_account()
			.then(function(option) {
				return pthis._contact.methods.getKeyword(name, key).call();
			});
	}

};