export default function makeRequest(method, url, data, header) {
	return new Promise(function (resolve, reject) {
		let request = new XMLHttpRequest();
		request.open(method, url);
		
		if( header ) request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		request.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(request.response);
			} else {
				reject({
					status: this.status,
					statusText: request.statusText
				});
			}
		};

		request.onerror = function () {
			reject({
				status: this.status,
				statusText: request.statusText
			});
		};
		request.send(data);
	});
}