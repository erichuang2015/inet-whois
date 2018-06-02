var whois = require('../index.js');
whois.whois('vnnic.vn', function(str){
    console.log(str.domainName);
});
