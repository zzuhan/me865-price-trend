(function(){
	new Morris.Line({
		element: 'me865',
		data: data.me865,
		xkey: 'date',
		ykeys: ['value'],
		labels: ['RMB'],
		ymin: 'auto',
		ymax: 'auto',
		xLabels: 'day',
		preUnits: '¥'
	});
})();