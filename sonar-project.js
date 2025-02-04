const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  //serverUrl: 'https://sonarcloud.io',
  serverUrl: 'http://172.31.34.218:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.organization':'sonarcloud-vina',
	    'sonar.login': 'squ_c9731897d5192207b1195cfdc5ed5e9c76647f6e',
	    // SonarCloudToken 'sonar.login': 'b9130c51a02c0aa7b5e9739b628492bd06f135b4', 
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
