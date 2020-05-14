

var elaeth_blocknumber_url = "https://explorer.elaeth.io/api?module=block&action=eth_block_number";
var contract_address = "0xdc210024c6e7aa7e0621a0315563a953ec54ae0d";

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
		var chainId = await this._web3.eth.net.getId();
		if (chainId != 1)
			return false;

		var pthis = this;
		return fetch(elaeth_blocknumber_url)
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				return pthis._web3.eth.getBlockNumber().then(function(x) {
					return Math.abs(parseInt(myJson.result) - x) < 5;
				});
			});
	}

	async isEthMainchain () {
		var chainId = await this._web3.eth.net.getId();
		if (chainId != 1)
			return false;

		var pthis = this;
		return fetch(elaeth_blocknumber_url)
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				return pthis._web3.eth.getBlockNumber().then(function(x) {
					return Math.abs(parseInt(myJson.result) - x) > 5;
				});
			});

	}

	async isRopstenchain () {
		var chainId = await this._web3.eth.net.getId();
		return chainId == 3;
	}

	async getAccount () {
		return this._web3.eth.getAccounts().then((x) => {return x[0]});
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
		if (!force && this._account) return;

		var accounts = await this._web3.eth.getAccounts();
		if (!this._account || this._account != accounts[0]) {
			this._account = accounts[0];
		}
	}

	async _generate_option (price) {
		var gasPrice = await this._web3.eth.getGasPrice();

		if (price)
			return { from: this._account, gasPrice: gasPrice, gas: 1000000, value: this._web3.utils.toWei(price, "ether") };
		else
			return { from: this._account, gasPrice: gasPrice, gas: 1000000, value:'0' };
	}

	async getOwnerOfNameToken (name) {
		await this._init_account();
		var option = await this._generate_option();

        var tokenId = this._web3.utils.hexToNumberString("0x"+sha256(name));
		return this._contact.methods.ownerOf(tokenId).call(option).catch(function(){return "";});
	}

	async getTokenNameCount () {
		await this._init_account();
		var option = await this._generate_option();

		return this._contact.methods.totalSupply().call(option);	
	}

	async getNameTokens (start, end) {
		await this._init_account();
		var option = await this._generate_option();

		var count = await this._contact.methods.totalSupply().call(option);
		var result = [];

		for (var i=start; i<count && (!end || i<end); i++) {
			var tokenid = await this._contact.methods.tokenByIndex(i).call(option);
			var owner = await this._contact.methods.ownerOf(tokenid).call(option);
			var name = await this._contact.methods.tokenURI(tokenid).call(option);
			result.push({
				"tokenId": tokenid,
				"name": name,
				"owner": owner
			});
		}
		return result;
	}

	async getOwnerNameTokens (address) {
		await this._init_account();
		var option = await this._generate_option();

		var count = await this._contact.methods.balanceOf(address).call(option);
		var result = [];

		for (var i=0; i<count; i++) {
			var tokenid = await this._contact.methods.tokenOfOwnerByIndex(address, i).call(option);
			var owner = address;
			var name = await this._contact.methods.tokenURI(tokenid).call(option);
			result.push({
				"tokenId": tokenid,
				"name": name,
				"owner": owner
			});
		}
		return result;
	}

	async getContractOwner () {
		await this._init_account();
		var option = await this._generate_option();

		return this._contact.methods.owner().call(option);	
	}

	async getImplementContract () {
		await this._init_account();
		var option = await this._generate_option();

		return this._contact.methods.owner().call(option);
	}

	async getCurrentPrice (level) {
		await this._init_account();
		var option = await this._generate_option();

		var web3 = this._web3;
		if (level == 1) {
			return this._contact.methods.price_level1().call(option).then(function(x) {return web3.utils.fromWei(x, "ether")});
		}
		else if (level == 2) {
			return this._contact.methods.price_level2().call(option).then(function(x) {return web3.utils.fromWei(x, "ether")});
		}
		else if (level == 3) {
			return this._contact.methods.price_level3().call(option).then(function(x) {return web3.utils.fromWei(x, "ether")});
		}
	}

	async transfer (to, name) {
		await this._init_account();
		var option = await this._generate_option();

		var tokenId = this._web3.utils.hexToNumberString("0x"+sha256(name));

		return this._contact.methods.safeTransferFrom(this._account, to, tokenId).call(option);
	}

	async registerName (name, price) {
		await this._init_account();
		var option = await this._generate_option(price);

		return this._contact.methods.externalMint(name).send(option);	
	}

	async generateName (to, name) {
		await this._init_account();
		var option = await this._generate_option();

		var tokenId = this._web3.utils.hexToNumberString("0x"+sha256(name));

		return this._contact.methods.mint(to, tokenId).call(option);	
	}

};