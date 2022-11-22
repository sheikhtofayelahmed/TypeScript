//numeric
//string
//heterogenous
var RequestType;
(function (RequestType) {
    RequestType[RequestType["number"] = 1] = "number";
})(RequestType || (RequestType = {}));
console.log(RequestType.number);
var RequestType2;
(function (RequestType2) {
    RequestType2["string"] = "1";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType.number);
var RequestType3;
(function (RequestType3) {
    RequestType3[RequestType3["number"] = 1] = "number";
    RequestType3["string"] = "1";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType.number);
