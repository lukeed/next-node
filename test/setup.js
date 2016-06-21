var html = [
	'<body>',
		'<div id="a1">',
			'<div id="b1"></div>',
			'<div id="b2"></div>',
		'</div>',
		'<div id="c1"></div>',
	'</body>'
].join('');

global.document = require('jsdom').jsdom(html);
