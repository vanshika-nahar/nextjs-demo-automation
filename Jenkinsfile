pipeline {
    agent any

    stages {

        stage('Checkout Demo App') {
            steps {
                dir('demo-app') {
                    git(
                        branch: 'main',
                        url: 'https://github.com/vanshika-nahar/nextjs-demo-app.git'
                    )
                }
            }
        }

        stage('Install Demo App Dependencies') {
            steps {
                dir('demo-app') {
                    sh 'npm ci'
                }
            }
        }

        stage('Build Demo App') {
            steps {
                dir('demo-app') {
                    sh 'npm run build'
                }
            }
        }

        stage('Start Demo App') {
            steps {
                dir('demo-app') {
                    sh 'nohup npm start > app.log 2>&1 &'
                }
            }
        }

        stage('Wait for Demo App') {
            steps {
                sh 'npx wait-on http://localhost:3000'
            }
        }

        stage('Check Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'git --version'
            }
        }

        stage('Install Automation Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install chromium'
            }
        }

        stage('Run Automation') {
            steps {
                sh 'npm run test:bdd'
            }
        }
    }

    post {
        always {
            sh 'pkill -f "next start" || true'
        }

        success {
            echo 'Automation tests passed.'
        }

        failure {
            echo 'Automation tests failed.'
        }
    }
}