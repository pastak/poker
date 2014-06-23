'use strict';

function showNashRange(num) {

	var bb = num + 2;
	var displayBb = document.createElement('p');
	var table = document.createElement('table');
	var nashPushRange = [
		['PushRange','22','9x','8xs','84o','7xs','74o','6xs','64o','5xs','54o','43s'],
		['PushRange','22','Jx','Txs','T3o','9xs','95o','84s','86o','74s','76o','64s','54s'],
		['PushRange','22','Jx','Txs','T5o','93s','96o','84s','86o','74s','76o','64s','54s'],
		['PushRange','22','Qx','Jxs','J3o','Txs','T6o','94s','97o','84s','86o','74s','76o','64s','53s','43s'],
		['PushRange','22','Qx','Jxs','J5o','Txs','T7o','95s','97o','84s','86o','74s','76o','64s','53s','43s'],
		['PushRange','22','Qx','Jxs','J7o','T3s','T7o','95s','97o','84s','87o','74s','76o','63s','53s','43s'],
		['PushRange','22','Kx','Qxs','Q5o','Jxs','J7o','T4s','T7o','95s','97o','85s','87o','74s','76o','64s','53s','43s'],
		['PushRange','22','Kx','Qxs','Q6o','J3s','J8o','T4s','T7o','95s','97o','85s','87o','74s','76o','64s','53s','43s'],
		['PushRange','22','Kx','Qxs','Q7o','J3s','J8o','T4s','T8o','95s','97o','84s','87o','74s','76o','64s','53s','43s'],
		['PushRange','22','Kx','Qxs','Q8o','J4s','J8o','T5s','T8o','95s','98o','85s','87o','74s','64s','53s',],
		['PushRange','22','Ax','Kxs','K3o','Qxs','Q8o','J4s','J8o','T6s','T8o','95s','98o','85s','87o','74s','64s','53s']
	];
	var nashCallRange = [
		['Call Range','any two'],
		['Call Range','22','9x','8xs','84o','7xs','74o','6xs','64o','5xs','53o','43s','32s'],
		['Call Range','22','Jx','Txs','T5o','93s','96o','84s','86o','74s','76o','64s','53s'],
		['Call Range','22','Qx','Jxs','J5o','T4s','T7o','95s','98o','84s','86o','74s','76o','64s','53s'],
		['Call Range','22','Kx','Qxs','Q4o','J4s','J7o','T6s','T8o','97s','98o','87s'],
		['Call Range','22','Kx','Qxs','Q6o','J6s','J8o','T7s','T9o','98s'],
		['Call Range','22','Kx','Q4s','Q8o','J7s','J9o','T8s','T9o','98s'],
		['Call Range','22','Ax','Kxs','K4o','Q6s','Q8o','J8s','J9o','T8s'],
		['Call Range','22','Ax','Kxs','K5o','Q7s','Q9o','J8s','JTo','T9s'],
		['Call Range','22','Ax','K3s','K7o','Q8s','Q9o','J9s','JTo','T9s'],
		['Call Range','22','Ax','K4s','K7o','Q8s','QTo','J9s','JTo']
	];

	displayBb.innerText = 'EffectiveStack : ' + bb + 'bb';

	var pushRange = table.insertRow();
	for(var i = 0,pushCount = nashPushRange[num].length;i < pushCount;i++) {
		pushRange.cells[i] = nashPushRange[num][i];
	}

	var callRange = table.insertRow();
	for(var i = 0,callCount = nashCallRange[num].length;i < callCount;i++) {
		callRange.cells[i] = nashCallRange[num][i];
	}

	buttons.appendChild(displayBb);
	buttons.appendChild(table);

}
			

window.onload = function() {

	var bbs = ['two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];

	for(var i = 0,count = bbs.length;i < count;i++) {
		var bbButton = document.getElementById(bbs[i]);
		bbButton.onclick = (function(i_c){
      return function(){
			  showNashRange(i_c);
      }
    })(i)
}
}
