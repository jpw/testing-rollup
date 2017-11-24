var a = function() {
	return 'module A ran';
};

var b = function() {
	return 'module B ran';
};

const list = document.getElementById('status');
const updateStatus = function (message) {
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(message));
	list.appendChild(entry);
};


updateStatus('index.js ran');
updateStatus(a());
updateStatus(b());
