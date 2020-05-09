export default function makeRequest(method, url, data) {
	return new Promise(function (resolve) {
		const resp = fetch(url, {method})
		.then( response => response.json() )
		resolve(resp);
	});
}

