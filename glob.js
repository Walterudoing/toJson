//local setting

var 
_ = require('lodash')
,packageInfo = require('./package.json')
,sid = require('shortid')
,local = {

}

,setting = {

	//db
	dbLink: 'mongodb://127.0.0.1:27017/weather'
	,dbCols: ['newTestDB','testDB','thaiTest','nwc_history', 'nwc_forecast', 'weather_com_cn_forecast', 'xnw_history', 'city', 'meta', 'data_conflict', 'cwb_history', 'cwb_history_unused', 'wo_history', 'wu_history', 'wo_forecast', 'nwc_hourly_rain', 'wcc_hourly', 'wcc_history', 'wcc_uv', 'nwc_raw_html', 'wcc_raw_html', 'cwb_history2', 'nwc_report']
}

,config = require('./config')

global.h5 = {
	setting: _.extend(setting, config.setting)
	,local: _.extend(local, config.local)
}