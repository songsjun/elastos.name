# How to programming with CryptoName

## Introduction

CryptoName is a name card based on **elastos side chain**. The user can store his public info on it. Everyone who knew his name can access this info. So we think the info of CryptoName is a public profile of the user. 

The storage structure of CryptoName likes a Key/Value storage. The user can set a keyword as the Key, and same time input the value as its content.

So if others, including apps, want to access some info of the user, you can get them by the keywords.

By default, the CryptoName has included "btc.address", "etc.address", "ela.address", "did", and "publickey" keywords. If you need more fields are on CryptoName, you can ask the user to set it. We support 50 fields on the CryptoName. 

The user can edit his "profile" on https://CryptoName.org, that's very easy.

If you want to help the user to set his CryptoName, you need to support a standard Web3 provider in your app and need support elastos side chain wallet too.

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

JS APIs file: 

```
<script type="text/javascript" src="https://cryptoname.org/js/crypton.js"></script>
<script>
    var crypton = new Crypton(abiArray, contractAddress, web3);
</script>
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



### Use Cases

##### Case 1: The crypto wallet can support it for user sending assets.

*The elephant wallet already supported CryptoName, you can send crypto assets to you friend via his CryptoName.



##### Case 2: Chat App can support it for searching and adding friend



##### Case 3: You can bind your DID with your CryptoName, that's very friendly for others.



##### Case 4: You can bind your IP with CryptoName, that's your own Domain Name.



##### Case 5: If you are a well known person or a company, you can public your Email on your CryptoName