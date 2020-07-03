# How to programming with CryptoName

## Introduction

CryptoName is a personal name storage business card  based on **elastos side chain**. It enables the user to store their public profile info within it. If you know the CryptoName you can access the info stored within. The  CryptoName info is the public profile of the user.

The storage structure of CryptoName is like a Key/Value storage. The user can set a keyword as the Key, and at the same time input the value as its content.

So if others, including apps, want to access some info of the user, you can access them by using the keywords.

By default, the CryptoName has included "btc.address", "eth.address", "ela.address", ustd.address, "did", and "publickey" keywords. If you need more fields on CryptoName, you can ask the user to set it. We support 50 fields within the CryptoName.

The user can edit their "profile" on https://CryptoName.org, it's very simple. 

If you want to help the user to set their CryptoName, you need to support a standard Web3 provider in your app, and it also needs to support the elastos side chain wallet. 



## Interface

### APIs and Library

Contract address: 

```
ETH Ropsten Test Network: 0xefdb328c09b6e20314fe201a5dba74cf36ef8bdd
Elastos sidechain Network: 
```

ABI file:

```
<script type="text/javascript" src="https://cryptoname.org/js/domain_abi.js"></script>
```

JS file:

```
 https://cryptoname.org/js/crypton.js
```

Sample:

```
<script type="text/javascript" src="https://cryptoname.org/js/crypton.js"></script>
<script>
    var crypton = new Crypton(abiArray, contractAddress, web3);
</script>
```

npm install:

```
npm install cryptoname
```

Sample:

```
import { Crypton } from "cryptoname";
let nameObject = await Crypton.QueryName('songsjun');
let elaAddress = await Crypton.QueryKey('songsjun', 'ela.address');
```



### How to access the CryptName?

##### Method 1: Get the json of  profile 

```
https://[Your Name].elastos.name/info.json
```

Example:

Http Get: https://ABCD.elastos.name/info.json

Response: 

```
{
	"name": "abcd",
	"btc.address": "17HH8xuwJxx6EY8CtyLbQoWAfAShj6Zopt",
	"publickey": "029bad2e7ab4ff62c42bfba47499f8f89b2accaf08b678884438af04f826a0af8a",
	"did": "ifTHxJhpnPxrsB9dYjPfCm1S3zQhYCY9YR",
	"ela.address": "Ee7TUCnmVa7DrSpFTPC9o3U7hb2vUNoZfU",
	"eth.address": "0x4AE4c8A713c4060A0B6Da8EB542742ec78bacC18"
}
```



##### Method 2: Import the js file in your html files

```
https://[Your Name].elastos.name/info.js
```

Example:

```
<script type="text/javascript" src="https://ABCD.elastos.name/info.js"></script>
```

Below JS object will be imported to your window:

```
var window.abcd_profile_info = {
	"name": "abcd",
	"btc.address": "17HH8xuwJxx6EY8CtyLbQoWAfAShj6Zopt",
	"publickey": "029bad2e7ab4ff62c42bfba47499f8f89b2accaf08b678884438af04f826a0af8a",
	"did": "ifTHxJhpnPxrsB9dYjPfCm1S3zQhYCY9YR",
	"ela.address": "Ee7TUCnmVa7DrSpFTPC9o3U7hb2vUNoZfU",
	"eth.address": "0x4AE4c8A713c4060A0B6Da8EB542742ec78bacC18"
}
```



##### Method 3: Get the value of via a key

```
https://[Your Name].elastos.name/[Keyword]
```

Example: 

Http Get: https://ABCD.elastos.name/ela.address

Response:

```
Ee7TUCnmVa7DrSpFTPC9o3U7hb2vUNoZfU
```

https://ABCD.elastos.name/publickey

Response:

```
029bad2e7ab4ff62c42bfba47499f8f89b2accaf08b678884438af04f826a0af8a
```



##### Method 4: Using npm

```
npm install cryptoname
```



```
import { Crypton } from "cryptoname";
let nameObject = await Crypton.QueryName('songsjun');
let elaAddress = await Crypton.QueryKey('songsjun', 'ela.address');
```



### Use Cases

##### Case 1: The crypto wallet can support users to send assets via the CryptoName. 

*****The elephant wallet already supports CryptoName, you can send crypto assets to your friends by simply inserting their CryptoName in the address bar.

##### Case 2: Chat App's can support CryptoName, of which enables the user to search and add friends. 



##### Case 3: You can bind your DID with your CryptoName, this makes it simple for others to use. 



##### Case 4: You can bind your IP address with a CryptoName, that's your own Domain Name.



##### Case 5: If you are a well known person or a company, you can make public your Email using your CryptoName.