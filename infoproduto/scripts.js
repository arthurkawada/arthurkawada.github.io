var MY_ADDRESS = '0xB3439f71fc6FbD77245fc1cb0cD3D413db3F6df9'
      var tipButton = document.querySelector('.tip-button')
      tipButton.addEventListener('click', function() {
        if (typeof web3 === 'undefined') {
          return renderMessage('<div>Você precisa instalar o <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">MetaMask</a> para usar esse recurso.  <a href="https://metamask.io" target="_blank">https://metamask.io</a></div>')
        }
        var user_address = web3.eth.accounts[0]
        web3.eth.sendTransaction({
          to: MY_ADDRESS,
          from: user_address,
          value: web3.toWei('0.1', 'ether'),
          data: web3.fromAscii( document.getElementById('temail').value)
        }, function (err, transactionHash) {
        if (err) return renderMessage('Transação Rejeitada')
          // If you get a transactionHash, you can assume it was sent,
          // or if you want to guarantee it was received, you can poll
          // for that transaction to be mined first.
          renderMessage('Transação Aceita')
        })
      })
      function renderMessage (message) {
        var messageEl = document.querySelector('.message')
        messageEl.innerHTML = message
      }
