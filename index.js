var http = require('http'),
    punycode = require('punycode'),
	domainRegex = require('domain-regex');

exports.whois = function(domain, callback){
    domain = punycode.toASCII(domain);
    domain = domain.replace(/[^a-zA-Z0-9\.\-]/g, '').toLowerCase();
    //phan nay xu ly validate them
    var isDomain = domainRegex().test(domain);
    var suffix = 'vn';
    if(!isDomain){
        domain += ".vn";
    }
    var options = {
        host: 'whois2.inet.vn',
        path: '/whois/' + domain,
        port: 7001,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    };
    http.request(options, function(response) {
        var str = '';
        response.on('data', function(chunk) {
            str += chunk;
        });
        response.on('end', function() {
        	try {
                callback(JSON.parse(str));
            }catch(err){
                callback(err);
			}
        });
    }).on('error', function (e) {
        callback(e);
    }).end();
}
