# inet-whois
whois parser for many TLDs, cc TLDs(ex: .vn)

## Installation

### Local

    $ npm install inet-whois

#### Usage

```js
var whois = require('inet-whois')
whois.lookup('inet.vn', function(data) {
	console.log(data)
})
```

You may pass an object in between the address and the callback function to tweak the behavior of the lookup function:

```js
{
    "code":  "0",   // 0 : available, 1: not available
    "lastUpdated": "02-06-2018 16:21:38",
    "domainName": "inet.vn",
    "registrar": "Công ty TNHH Một thành viên Phần mềm iNET",
    "nameServer": [
        "ns1.inet.vn",
        "ns2.inet.vn"
    ],
    "status": [
        "clientTransferProhibited"
    ],
    "creationDate": "31-07-2006",
    "expirationDate": "31-07-2018",
    "creationDate_L": 1154278800000,  //time of creation date
    "expirationDate_L": 1532970000000, //time of expiration date
    "registrantName": "Công ty Cổ phần iNET", 
    "DNSSEC": "unsigned",
    "rawtext": "{\n  \"domainName\": \"inet.vn\",\n  \"existed\": true,\n  \"issuedDate\": {\n    \"year\": 2006,\n    \"month\": 7,\n    \"day\": 31,\n    \"timezone\": 420,\n    \"hour\": 0,\n    \"minute\": 0,\n    \"second\": 0\n  },\n  \"expiredDate\": {\n    \"year\": 2018,\n    \"month\": 7,\n    \"day\": 31,\n    \"timezone\": 420,\n    \"hour\": 0,\n    \"minute\": 0,\n    \"second\": 0\n  },\n  \"registrarName\": \"Công ty TNHH Một thành viên Phần mềm iNET\",\n  \"registrantName\": \"Công ty Cổ phần iNET\",\n  \"status\": [\n    \"clientTransferProhibited\"\n  ],\n  \"nameServer\": [\n    {\n      \"name\": \"ns1.inet.vn\",\n      \"ipv4Address\": \"125.212.192.37\"\n    },\n    {\n      \"name\": \"ns2.inet.vn\",\n      \"ipv4Address\": \"123.30.50.111\"\n    }\n  ],\n  \"dnssec\": \"unsigned\"\n}"}
}
````

## Contributing

Contributions are welcome.