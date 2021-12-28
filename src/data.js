import React, {useState, useEffect} from 'react';

function Dataa() {
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyJzEKvIACHqssJQ'}).base('appmdn5kLtTSnivLC');

//   base('APP').select({
//         view: 'Grid view'
//     }).firstPage(function(err, records) {
//         if (err) { console.error(err); return; }
//         records.forEach(function(record) {
//             console.log(record.fields);
//             // var field = [];
//             // field.push(record.fields);
//             // console.log(field);
//         });
//     });

    base('APP').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        records.forEach(function(record) {
            return record.fields
        });
    });

}

export default Dataa