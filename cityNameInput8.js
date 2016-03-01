db.city.insert({
  _id : "morondava01",
  name : "马达加斯加穆龙达瓦",
  nameEn : "Morondava",
  nameSrc: 'ANTANANARIVO IVATO MA'
  pinyin : "madajiasijaimulongdawa",
  firstLetter : "m",
  pinyinAndName : "Morondava马达加斯加穆龙达瓦madajiasijaimulongdawa",
  src : "http://www.wunderground.com/history/station/67117/{{date}}/DailyHistory.html"
})


db.city.insert({
  _id : "andasibe01",
  name : "马达加斯加昂达西贝",
  nameEn : "Andasibe",
  nameSrc: 'ANTANANARIVO IVATO MA'
  pinyin : "madajiasijaiangdaxibei",
  firstLetter : "m",
  pinyinAndName : "Morondava马达加斯加昂达西贝madajiasijaiangdaxibei",
  src : "http://www.wunderground.com/history/airport/FMMI/{{date}}/DailyHistory.html"
})

db.city.insert({'_id' : "morondava01",'name' : "马达加斯加穆龙达瓦",'nameEn' : "Morondava",'nameSrc': 'ANTANANARIVO IVATO MA','pinyin' : "madajiasijaimulongdawa",'firstLetter' : "m",'pinyinAndName' : "Morondava马达加斯加穆龙达瓦madajiasijaimulongdawa",'src' : "http://www.wunderground.com/history/airport/FMMI/{{date}}/DailyHistory.html"})

db.city.insert({'_id' : "andasibe01",'name' : "马达加斯加昂达西贝",'nameEn' : "Andasibe",'nameSrc': 'ANTANANARIVO IVATO MA','pinyin' : "madajiasijaiangdaxibei",'firstLetter' : "m",'pinyinAndName' : "Morondava马达加斯加昂达西贝madajiasijaiangdaxibei",'src' : "http://www.wunderground.com/history/airport/FMMI/{{date}}/DailyHistory.html"})


db.city.update({ '_id': 'morondava01' },  { $set: { 'hasCommonHistory' : true } })

db.city.update({ '_id': 'andasibe01' }, { $set: { 'hasCommonHistory' : true } })


db.city.insert({'_id' : "queenstown01",'name' : "皇后镇",'nameEn' : "Queenstown",'nameSrc': 'AUCKLAND AERO AWS NZ','pinyin' : "huanghouzhen",'firstLetter' : "h",'pinyinAndName' : "Queenstown皇后镇huanghouzhen",'src' : "http://www.wunderground.com/history/airport/NZAA/{{date}}/DailyHistory.html",'hasCommonHistory':true })


db.city.insert({'_id' : "irufushi01",'name' : "伊露岛",'nameEn' : "Iru Fushi",'nameSrc': 'MALE_MV','pinyin' : "yiludao",'firstLetter' : "y",'pinyinAndName' : "Iru Fushi伊露岛yiludao",'src' : "http://www.wunderground.com/history/airport/VRMM/{{date}}/DailyHistory.html",'hasCommonHistory':true })

db.city.insert({'_id' : "boduhithi01",'name' : "波杜希蒂",'nameEn' : "Bodu Hithi",'nameSrc': 'MALE_MV','pinyin' : "boduxidi",'firstLetter' : "b",'pinyinAndName' : "Bodu Hithi波杜希蒂boduxidi",'src' : "http://www.wunderground.com/history/airport/VRMM/{{date}}/DailyHistory.html",'hasCommonHistory':true })

db.city.insert({'_id' : "velavaru01",'name' : "薇拉瓦鲁",'nameEn' : "Velavaru",'nameSrc': 'MALE_MV','pinyin' : "weilawalu",'firstLetter' : "w",'pinyinAndName' : "Velavaru薇拉瓦鲁weilawalu",'src' : "http://www.wunderground.com/history/airport/VRMM/{{date}}/DailyHistory.html",'hasCommonHistory':true })


db.city.insert({'_id' : "papeete01",'name' : "帕比提",'nameEn' : "Papeete",'nameSrc': 'TAHITII FAAA','pinyin' : "pabiti",'firstLetter' : "w",'pinyinAndName' : "Papeete帕比提pabiti",'src' : "http://www.wunderground.com/history/station/91929/{{date}}/DailyHistory.html",'hasCommonHistory':true })



