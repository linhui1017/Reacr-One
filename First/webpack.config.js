function buildConfig(env) {
	
	if(env.type === 'prod'){
		const rtn = require('./' + env.type + '.js')
		return rtn
	}else{
		const rtn = require('./' + env.type + '.js')(env)
		return rtn
	}
}
module.exports = buildConfig;
