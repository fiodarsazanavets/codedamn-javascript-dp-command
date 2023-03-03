const DataReceiver = require('./dataReceiver.js');
const DataCommandInvoker = require('./dataCommandInvoker.js');
const UpsertCommand = require('./upsertCommand.js');
const DeleteCommand = require('./deleteCommand.js');

var dataReceiver = new DataReceiver();
dataReceiver.upsert('item1', 'value1');
dataReceiver.delete('item1');