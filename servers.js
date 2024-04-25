// Wrap your code in an IIFE (Immediately Invoked Function Expression) to create a new scope
(function() {
    let serverForm = document.getElementById('serverForm');
    let serverTbody = document.querySelector('#serverTable tbody');
    let allServers = {};
    let serverId = 0;
  
    serverForm.addEventListener('submit', function(evt) {
      evt.preventDefault();
  
      let serverNameInput = document.getElementById('serverName'); // Declare serverNameInput inside the event listener function
  
      let inputServerName = serverNameInput.value;
  
      if (inputServerName.trim() !== '') { // Trim whitespace from the input value
        serverId++;
        allServers['server' + serverId] = { serverName: inputServerName };
  
        updateServerTable();
  
        serverNameInput.value = '';
      }
    });
  
    function updateServerTable() {
      serverTbody.innerHTML = '';
  
      for (let key in allServers) {
        let curServer = allServers[key];
  
        let newTr = document.createElement('tr');
        newTr.setAttribute('id', key);
  
        let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;
  
        appendTd(newTr, curServer.serverName);
        appendTd(newTr, '$' + tipAverage.toFixed(2));
        appendDeleteBtn(newTr, 'server');
  
        serverTbody.append(newTr);
      }
    }
  })();
  