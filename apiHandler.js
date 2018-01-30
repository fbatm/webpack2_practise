var axios = require('axios');
var BMapScriptSrcReg = /src="(.*)"><\/script>/i;

module.exports = {
	apiHandler: (req, res)=>{
		switch(req.params.api){
			case 'getBMap':
				axios({
					url: 'https://api.map.baidu.com/api',
					method: 'get',
					params: {v: '3.0', ak: 'ak'}
				}).then((response)=>{
					var urlMatchResult = BMapScriptSrcReg.exec(response.data);
					if(urlMatchResult && urlMatchResult[1]){
						axios({
							url: urlMatchResult[1],
							method: 'get'
						}).then((scriptResponse)=>{
							res.send('window.BMap_loadScriptTime = (new Date).getTime();' + scriptResponse.data);
						}).catch((error)=>{
							res.status(500).send(error);
						})
					}else{
						console.log('get BMap script error', error);
						res.status(500).send(response.data);
					}
				}).catch((error)=>{
					console.log('get BMap api error', error);
					res.status(500).send(error);
				})
				break;
			default:
				res.status(404).send({message: 'no such api'});
		}
	}
}