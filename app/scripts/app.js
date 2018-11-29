import { default as Web3 } from 'web3'; 
import { default as contract } from 'truffle-contract';

import taskMasterArtifacts from '../../build/contracts/TaskMaster.json';


var TaskMaster = contract(taskMasterArtifacts);
var ownerAccount; 
var bcAccounts = [] ; 

window.addEventListener('load' , () => {
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))
    console.log("loading done");
    TaskmasterApp.setWeb3Provider(); 
    TaskmasterApp.getAccounts(); 
})

window.TaskmasterApp = {
    setWeb3Provider : function() {

        TaskMaster.setProvider(web3.currentProvider) ;
    },

    getAccounts: function () {
        var self = this; 
        web3.eth.getAccounts(function (error, accounts) {
            console.log(accounts) ;
            if(error !=null) {
                alert("Sorry somewthing went wrong. we coudn't fetch your accounts. "); 
                return ;
            }

            if(!accounts.length){
                alert("Sorry, no errors, but we coudn't get any accounts - Make sure your Ethereum client is configured correctly)");
                return;
            }

            ownerAccount = accounts[0] ; 
            bcAccounts = accounts; 

            self.refreshAccountBalance();
        });
    },

    refreshAccountBalance: function() {
        var self = this; 
        TaskMaster.deployed()
        .then((taskMasterInstance) => {
                return taskMasterInstance.getBalance.call(ownerAccount, {
                    from : ownerAccount 
                });
        } )
        .then((value) => { 
            document.getElementById("accountBalance").innerHTML= value.valueOf(); 
            document.getElementById("accountBalance").style.color = "white";
        })
        .catch(function(e) {
            console.log(e);
        });

        document.getElementById("addressesBalance").innerHTML = "";
        bcAccounts.forEach((acc)=> {
            TaskMaster.deployed()
            .then((taskMasterInstance) => {
                    return taskMasterInstance.getBalance.call(acc, {
                        from : ownerAccount 
                    });
            } )
            .then((value) => { 
                document.getElementById("addressesBalance").innerHTML += "<br/><b>Address -> "+acc+":</b>   Balance: " + value.valueOf(); 
                
            })
            .catch(function(e) {
                console.log(e);
            });

        })


    },


     rewardDoer: function() {
        let self = this; 
        let todoCoinReward = document.getElementById("todoCoinReward").value;
        var doer = document.getElementById('doer').value; 

        TaskMaster.deployed().then(function(taskMasterInstance){
            return taskMasterInstance.reward(doer,todoCoinReward, { from : ownerAccount})

        }).then(() => { self.refreshAccountBalance() } ).
        catch((e) => { console.log("Eror Occured = " + e)  });
     }
   
} ; 


