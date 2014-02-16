console.log("hello");

var testObject = { color:"RED", price:"$100" }

console.log(testObject.color);

util=require("util");
events=require("events");

var count=0;

var testclass = function () {
  var self = this;
  setInterval(function(){count+=1;self.emit("tick",count)},1000)
self.on('tick', function(count){console.log(count);});
}

util.inherits(testclass, events.EventEmitter);

testclass.prototype.testMeth=function() {
this.emit("sean", "mother", "fucker!");
}

var testOb = new testclass();

testOb.on('sean', function(str1, str2){console.log("Got a event %s %s!", str1, str2);});

setTimeout(function(){
testOb.testMeth();
testOb.emit("sean","fuck ","you");
testOb.emit("seana","fuck ","you twice!");
testOb.on('tick', function(count){console.log(count);});
} , 3000);
