pipeline {
    agent any
    environment {
        GIT_CREDENTIALS_ID = "k6knfTUMF11/9eWqqJpYQ0R/cRUF+aDRjybD6voZAfE"
        BRANCH = "master"
        ENVIRONMENT = "test"
    }
    stages {
        stage('Build') {
            steps {
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: "$BRANCH"]],
                    doGenerateSubmoduleConfigurations: false, 
                    extensions: [], 
                    submoduleCfg: [], 
                    userRemoteConfigs: [
                        [credentialsId: "$GIT_CREDENTIALS_ID", 
                         url: 'https://github.com/misho-999/testClient'
                        ]]])
                        
                sh 'npm install'
                sh "ng build"
            }
        }
        stage('Deploy') {
            steps {
                script {
 			def remote = [:]
                  	remote.name = "185.228.26.15"
                    	remote.host = "185.228.26.15"
                    	remote.port = 8080
	                remote.user = 'root'
                  	remote.password = ''
                  	remote.logLevel = "INFO"

                   	sh 'sudo mv dist'
                   	sh 'sudo systemctl start myfishing'
                }
            }
        }
    }
}
