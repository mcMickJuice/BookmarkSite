function ConfigurationProvider() {
	var domain;
	return {
		setConfiguration,
		$get: configurationService
	}

	function setConfiguration(envDomain) {
		domain = envDomain;
	}

	function configurationService() {
		return {
			getDomain: function(){return domain;}
		}
	}
}

export default ConfigurationProvider