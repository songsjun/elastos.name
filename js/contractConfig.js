window.ethUnit = 1000000000000000000;
window.initWallet = function initWallet() {
    return new Promise((resolve, reject) => {
        if (typeof window.ethereum === 'undefined') {
            reject('Looks like you need a Dapp browser to get started.Consider installing MetaMask!');
        } else {
            //resolve(1);
            ethereum.enable().catch((reason) => {
                reject(reason);
            }).then(() => {
                var selectedAddress = ethereum.selectedAddress;
                resolve(selectedAddress);
            });
        }
    });
};