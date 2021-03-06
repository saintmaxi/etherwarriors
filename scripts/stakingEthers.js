/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const warriorsAddress = "";
// const warriorsAbi = () => {
//     return ``;
// };

// const raidAddress = "";
// const raidAbi = () => { 
    // return ``;
// };

// const etherscanBase = `https://etherscan.io/tx/`;
// const correctChain = 1;

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

const warriorsAddress = "0xeeD485Ae835Ecf04a2cE2A3Ed0598FAa1DD64B92";
const warriorsAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COST_PER_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EtherWarriorsRenderer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintCountPublic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintCountWhitelist","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentRaidCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintWithRaid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"publicSaleStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raidAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raidMintingAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setEtherWarriorsRendererAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setRaidAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_raidMintingAllowed","type":"bool"}],"name":"setRaidMintingAllowed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_whitelistSaleStartTime","type":"uint256"},{"internalType":"uint256","name":"_publicSaleStartTime","type":"uint256"}],"name":"setStartTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"name":"setWhitelistMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_whitelistURI","type":"string"}],"name":"setWhitelistURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"verifySender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistMerkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"whitelistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"whitelistSaleStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const raidAddress = "0x7b53280F532dBc807fb7b358001F148339F10be2";
const raidAbi = () => { 
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"EMISSIONS_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WALLET_STAKED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAllRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"etherWarriorsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_warriorId","type":"uint256"}],"name":"getRaidOwedToThisWarrior","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getTotalRewardsForUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"isStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_etherWarriorsAddress","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakingStartTime","type":"uint256"}],"name":"setStakingStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_warriorIds","type":"uint256[]"}],"name":"stakeWarriorsByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakedWarriors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"stakedWarriorsQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToStakedWarrior","outputs":[{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"bool","name":"staked","type":"bool"},{"internalType":"uint128","name":"timestamp","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_warriorIds","type":"uint256[]"}],"name":"unstakeWarriorsByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"warriorsStaked","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
const correctChain = 4;

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to claim $RAID!');
    $("#available-warrior-images").empty();
    $("#staked-warrior-images").empty();
    $("#available-warrior-images").append("<br><h3>No warriors available...</h3>");
    $("#staked-warrior-images").append("<br><h3>No warriors available...</h3>");
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const warriors = new ethers.Contract(warriorsAddress, warriorsAbi(), signer);
const raid = new ethers.Contract(raidAddress, raidAbi(), signer);

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
    await revealMintPrompt();
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};


const importRaidToWallet = async() => {
    ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: raidAddress,
            symbol: 'RAID',
            decimals: 18,
            image: '',
          },
        },
      });
}

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

// RAID Functions

const getWarriorsEnum = async()=>{
    let userAddress = await getAddress();
    let totalWarriors = await warriors.balanceOf(userAddress);
    let ownedWarriors = [];
    for (let i = 0; i < totalWarriors; i++) {
        let id = Number(await warriors.tokenOfOwnerByIndex(userAddress, i));
        if (!(await raid.isStaked(id))) {
            ownedWarriors.push(id);
        }
    }
    return ownedWarriors.length;
};

const getStakedWarriorsEnum = async()=>{
    let userAddress = await getAddress();
    let ownedStakedWarriorsCount = await raid.stakedWarriorsQuantity(userAddress);
    return ownedStakedWarriorsCount;
};

const getWarriorsOwned = async() => {
    let userAddress = await getAddress();
    let totalWarriors = await warriors.balanceOf(userAddress);
    let ownedWarriors = [];
    for (let i = 0; i < totalWarriors; i++) {
        let id = Number(await warriors.tokenOfOwnerByIndex(userAddress, i));
        if (!(await raid.isStaked(id))) {
            ownedWarriors.push(id);
        }
    }
    return [...ownedWarriors].sort((a, b) => a - b);
}

const getStakedWarriorsOwned = async() => {
    let userAddress = await getAddress();
    let ownedStakedWarriors = await raid.warriorsStaked(userAddress); 
    return [...ownedStakedWarriors].sort((a, b) => a - b);
}

const getRaidBalance = async()=>{
    let userAddress = await getAddress();
    return (Number(formatEther(await raid.balanceOf(userAddress)))).toFixed(2);
};

const getPendingRaidBalance = async()=>{
    let userAddress = await getAddress();
    const pendingRaid = await raid.getTotalRewardsForUser(userAddress);
    $("#claimable-raid").text(`${Number(formatEther(pendingRaid)).toFixed(2)}`);
};

const claimRaid = async()=>{
    let userAddress = await getAddress();
    if (await raid.getTotalRewardsForUser(userAddress) == 0) {
        await displayErrorMessage('You have no $RAID to claim!')
    }
    else {
        await raid.claimAllRewards().then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
};

// Staking functions

const stakeWarriorsToRaid = async()=>{
    if (selectedForStaking.size == 0) {
        displayErrorMessage("Select at least 1 warrior to stake!")
    }
    else if ((await getWarriorsEnum()) == 0) {
        displayErrorMessage("No available warriors to stake!")
    }
    else {
        const warriorsArray = Array.from(selectedForStaking);
    
        await raid.stakeWarriorsByIds(warriorsArray).then( async(tx_) => {
            for (let i = 0; i < warriorsArray.length; i++) {
                $(`#warrior-${warriorsArray[i]}`).remove();
            }
            selectedForStaking = new Set();
            $("#selected-for-staking").text("None");
            $("#your-warriors-num").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            $("#your-staked-warriors-num").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            await waitForTransaction(tx_);
        });
    }
};

const stakeAll = async()=>{
    if ((await getWarriorsEnum()) == 0) {
        displayErrorMessage("No available warriors to stake!")
    }
    else {
        const warriorsArray = await getWarriorsOwned();
    
        await raid.stakeWarriorsByIds(warriorsArray).then( async(tx_) => {
            for (let i = 0; i < warriorsArray.length; i++) {
                $(`#warrior-${warriorsArray[i]}`).remove();
            }
            selectedForStaking = new Set();
            $("#selected-for-staking").text("None");
            $("#your-warriors-num").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            $("#your-staked-warriors-num").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            await waitForTransaction(tx_);
        });
    }
};

const unstakeByIds = async()=>{
    const numStaked = await getStakedWarriorsEnum();
    if (numStaked == 0) {
        displayErrorMessage("No warriors staked!")
    }
    else if (selectedForUnstaking.size == 0) {
        displayErrorMessage("Select at least 1 warrior to unstake!")
    }
    else {
        const warriorsArray = Array.from(selectedForUnstaking);
        await raid.unstakeWarriorsByIds(warriorsArray).then( async(tx_) => {
            for (let i = 0; i < warriorsArray.length; i++) {
                $(`#warrior-${warriorsArray[i]}`).remove();
            }
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $("#your-warriors-num").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            $("#your-staked-warriors-num").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            await waitForTransaction(tx_);
        }); 
    }
}

const unstakeAll = async()=>{
    const numStaked = await getStakedWarriorsEnum();
    if (numStaked == 0) {
        displayErrorMessage("No warriors staked!")
    }
    else {
        const warriorsArray = await getStakedWarriorsOwned();
        await raid.unstakeAll().then( async(tx_) => {
            for (let i = 0; i < warriorsArray.length; i++) {
                $(`#warrior-${warriorsArray[i]}`).remove();
            }
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $("#your-warriors-num").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            $("#your-staked-warriors-num").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            await waitForTransaction(tx_);
        }); 
    }
}

var currentlyStaked = [];

const getWarriorImages = async()=>{
    $("#available-warrior-images").empty();
    $("#staked-warrior-images").empty();
    $("#available-warrior-images").append(`<br><h3>Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></h3>`);
    $("#staked-warrior-images").append(`<br><h3>Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></h3>`);


    const yourWarriorsCount = await getWarriorsEnum();
    if (yourWarriorsCount == 0) {
        $("#available-warrior-images").empty();
        $("#available-warrior-images").append("<br><h3>No warriors available...</h3>");
    }
    else {
        const yourWarriors = await getWarriorsOwned();
        let batchFakeJSX = "";
        for (let i = 0; i < yourWarriors.length; i++) {
            let warriorId = yourWarriors[i];
            let active = "";
            if (selectedForStaking.has(Number(warriorId))) {
                active = "active";
            }
            const uri = await warriors.tokenURI(warriorId);
            const decodedUri = JSON.parse(atob(uri.replace("data:application/json;base64,", "")))
            let svg = atob(decodedUri.image.replace("data:image/svg+xml;base64,", ""));
            svg = svg.replace("<svg ", `<svg onclick="selectForStaking(${warriorId})" `);
            batchFakeJSX += `<div id="warrior-${warriorId}" class="your-warrior ${active}">${svg}<p class="warrior-id">#${warriorId}</p></div>`
            // batchFakeJSX += `<div id="warrior-${warriorId}" class="your-warrior ${active}"><img onclick="selectForStaking(${warriorId})" src="${baseImageURI}"><p class="warrior-id">#${warriorId}</p></div>`            
        };
        $("#available-warrior-images").empty();
        $("#available-warrior-images").append(batchFakeJSX);
    }

    const yourStakedWarriorsCount = await getStakedWarriorsEnum();
    if (yourStakedWarriorsCount == 0) {
        $("#staked-warrior-images").empty();
        $("#staked-warrior-images").append("<br><h3>No warriors available...</h3>");
    }
    else {
        const yourStakedWarriors = await getStakedWarriorsOwned();
        currentlyStaked = yourStakedWarriors;
        let batchFakeJSX = "";
        for (let i = 0; i < yourStakedWarriors.length; i++) {
            let warriorId = yourStakedWarriors[i];
            let active= "";
            if (selectedForUnstaking.has(Number(warriorId))) {
                active = "active";
            }
            const uri = await warriors.tokenURI(warriorId);
            const decodedUri = JSON.parse(atob(uri.replace("data:application/json;base64,", "")))
            let svg = atob(decodedUri.image.replace("data:image/svg+xml;base64,", ""));
            svg = svg.replace("<svg ", `<svg onclick="selectForUnstaking(${warriorId})" `);
            let raidEarned = Number(formatEther(await raid.getRaidOwedToThisWarrior(warriorId))).toFixed(2);
            // batchFakeJSX += `<div id="warrior-${warriorId}" class="your-warrior ${active}"><img onclick="selectForUnstaking(${warriorId})" src="${baseImageURI}${warriorId}.png"><p class="warrior-id">#${warriorId}</p><p class="raid-earned"><span id="raid-earned-${warriorId}">${raidEarned}</span></p></div>`
            batchFakeJSX += `<div id="warrior-${warriorId}" class="your-warrior ${active}">${svg}<p class="warrior-id">#${warriorId}</p><p class="raid-earned"><span id="raid-earned-${warriorId}">${raidEarned}</span></p></div>`        
        };
        $("#staked-warrior-images").empty();
        $("#staked-warrior-images").append(batchFakeJSX);
    }
}

const getRaidEarnedByID = async(id) => {
    try {
        return Number(formatEther(await raid.getRaidOwedToThisWarrior(id))).toFixed(2);
    }
    catch {
        console.log('Metamask throws extra error. Token reward lookup was successful.')
        return 0;
    }
};

const updateRaidEarned = async() => {
    let totalEarned = 0;
    for (let i = 0; i < currentlyStaked.length; i++) {
        let warriorId = Number(currentlyStaked[i]);
        let raidEarnedByID = await getRaidEarnedByID(warriorId);
        $(`#raid-earned-${warriorId}`).text(raidEarnedByID);
        if (selectedForUnstaking.has(warriorId)) {
            totalEarned += Number(raidEarnedByID);
        }
    };
    $("#raid-to-claim").text(`$RAID to Claim: ${totalEarned.toFixed(2)}`);
};

var stakedWarriorsCount;

const updateClaimingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING <br>CLAIMING INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>???</div><br>`;
        $("#pending-transactions").append(loadingDiv);
        $("#your-raid").text(`${await getRaidBalance()}`);
        let stakedWarriors = await getStakedWarriorsEnum();
        stakedWarriorsCount = stakedWarriors;
        if (stakedWarriors == 0) {
            $("#claimable-raid").text("0.0");
        }
        else {
            await getPendingRaidBalance();
        }
        $("#your-staked-warriors-num").html(`${stakedWarriors}`);
        $("#earn-rate").html(100 * stakedWarriors);
        $("#your-warriors-num").html(`${await getWarriorsEnum()}`);
        await getWarriorImages();
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    } 
    else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-warrior-images").empty();
        $("#available-warrior-images").text("Error: Wrong Network");
        $("#your-raid").html(`0.0`);
        $("#claimable-raid").html(`0.0`);
        $("#earn-rate").html("0.0");
        displayErrorMessage("Error: Wrong Network", false);
    }
};


// General functions

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        $("#refresh-notification").remove();
        await updateCurrentChain();
        await updateClaimingInfo();
    }
});

//selection helpers

var selectedForStaking = new Set();
var selectedForUnstaking = new Set();

async function selectForStaking(id) {
    if (!selectedForStaking.has(id)) {
        selectedForStaking.add(id);
        $(`#warrior-${id}`).addClass("active");
    }
    else {
        selectedForStaking.delete(id);
        $(`#warrior-${id}`).removeClass("active");
    }
    if (selectedForStaking.size == 0) {
        $("#selected-for-staking").text("None");
    }
    else {
        let selectedString = `${Array.from(selectedForStaking).sort((a, b) => a - b).join(' ')}`;
        $("#selected-for-staking").text(selectedString);
    }
}

async function selectForUnstaking(id) {
    if (!selectedForUnstaking.has(id)) {
        selectedForUnstaking.add(id);
        $(`#warrior-${id}`).addClass("active");
    }
    else {
        selectedForUnstaking.delete(id);
        $(`#warrior-${id}`).removeClass("active");
    }
    if (selectedForUnstaking.size == 0) {
        $("#selected-for-unstaking").text("None");
        $("#raid-to-claim").text(`$RAID to Claim: 0`);
    }
    else {
        let selectedForUnstakingArray = Array.from(selectedForUnstaking).sort((a, b) => a - b);
        let raidToClaim = 0;
        for (let i = 0; i < selectedForUnstakingArray.length; i++) {
            raidToClaim += Number(await getRaidEarnedByID(selectedForUnstakingArray[i]));
        }
        $("#raid-to-claim").text(`$RAID to Claim: ${raidToClaim.toFixed(2)}`);
        let selectedString = `${selectedForUnstakingArray.join(' ')}`;
        $("#selected-for-unstaking").text(selectedString);
    }
}

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("0xDragonsPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("0xDragonsPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("0xDragonsPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>???<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateClaimingInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await updateRaidEarned();
    await getPendingRaidBalance();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").html(`
        <i class="fas fa-circle" style="color: darkgreen; margin-right: 0.2rem"></i>
        <span id="text">${userAddress.substr(0,9)}..</span>
    `);
    // $("#mobile-account").text(`
    //     <i class="fas fa-circle" style="color: darkgreen; margin-right: 0.2rem"></i>
    //     ${userAddress.substr(0,9)}...
    // `);
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    if (pendingTransactions.size < 1) {
        await updateClaimingInfo();
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}