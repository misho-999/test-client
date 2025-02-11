pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
             sh 'ls'
                sh 'npm install'
                sh 'echo N | ng analytics off'
                sh 'ng build'
                sh 'ls'
                sh 'cd dist && ls'
                sh 'cd dist/testClient/browser && ls'
                sh 'mv /var/lib/jenkins/workspace/TestClient/dist/testClient/browser /var/www/html'
            }
        }
    }
}
