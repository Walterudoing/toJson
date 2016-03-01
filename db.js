/*!
 * main entrance
**/

var PM = require('promise-mongo')
,glob = require('./glob')
,pm = new PM()
,log = console.log
,setting = h5.setting
,local = h5.local
,co = require('co')
,time = require('./lib/time').date
,oneday = 1000 * 60 * 60 * 24
,oneyear = oneday*365
,tools = require('./lib/tools')
,qr = tools.qr
,fs = require('fs')
,toPromise = pm.toPromise
,readFile = toPromise(fs.readFile)
,writeFile = toPromise(fs.writeFile)


function* init() {
     
        var fileSrc = yield readFile('data/Database/Rainfall/Noaa/Madagasca/ANTANANARIVO.csv')
    
        var txt = fileSrc.toString()
        //log(txt)
        var arr = txt.split('\n')
        //log(arr)
        var object = []
        
        for (var j = 0; j < arr.length; ++j){
            var arrPointer = arr[j].split(',')
            //log(arrPointer)
            if (arrPointer.length < 9) continue
        
            var arrStationName = arrPointer[1]
            
            //,newArrDate = arrPointer[5]
            ,arrYear = parseInt(arrPointer[5].substring(0,4))
            ,arrMonth =  parseInt(arrPointer[5].substring(5,6))
            ,arrDay = parseInt(arrPointer[5].substring(7,8))
            ,ArrDate = arrYear +'-'+ (arrMonth<10? '0'+arrMonth : arrMonth) +'-'+ (arrDay<10? '0'+arrDay : arrDay)
            
            ,arrRainFall = parseInt(arrPointer[6])
            ,arrTmax = parseInt(arrPointer[7])
            ,arrTmin = parseInt(arrPointer[8])

            if(arrRainFall === 32700 || arrRainFall === -9999){
                arrRainFall = null
            }
            
            var obj = {date: ArrDate, city: arrStationName, rainfall: arrRainFall} /*,maxTemp:arrTmax, minTemp:arrTmin*/
            //log(obj)
            object.push(obj)
            log(object)
            
 
        } 
        
        ///*
        var result = JSON.stringify(object)
        //log(result)
        yield writeFile('newJson/ANTANANARIVO.json', JSON.stringify(result))
        //*/
    //}    

    return Promise.resolve()
  //end
}

function ok() {
  log('done')
}

function err(err) {
  log.err(err, 'failed')
}

co(init())
.then(ok, err)