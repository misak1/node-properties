require('m-util');
var log = require('m-log');
var JSONWriter = require('json-writer');

jw = new JSONWriter;
jw.setIndent(true);
jw.startDocument();
jw.startElement('root');
jw.writeAttribute('foo', 'value');
jw.text('Some content');
jw.endElement();
jw.endDocument();

var conf = "conf.json";
var fs = require('fs');
fs.writeFileSync(conf, jw.toString(), "utf-8");
var sa = fs.readFileSync(conf, "utf-8");
console.log(sa.toString());

log.out("_".uRepeat(20));
var o = JSON.parse(sa);
console.log(o.version);
console.log(o.encoding);
console.log(o.root);
