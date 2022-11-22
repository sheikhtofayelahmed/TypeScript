//numeric
//string
//heterogenous

enum RequestType {
    number=1
}
console.log(RequestType.number);
enum RequestType2 {
    string="1"
}
console.log(RequestType.number);

enum RequestType3 {
    number=1,
    string="1"
}
console.log(RequestType.number);
