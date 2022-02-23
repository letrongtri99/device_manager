#!groovy
slackChannel = 'devops_sample_project_dev'
projectName = 'web-admin'

appConfigs = [
  develop: [
    environmentName: 'development',
    credentialId: 'watt-gcp-webadmin-dev',
    gcpProjectName: 'watt-dev-307411',
    serviceAccountName: 'watt-dev-307411@appspot.gserviceaccount.com'
  ],
  master: [
    environmentName: 'production',
    credentialId: '',
    gcpProjectName: '',
    serviceAccountName: ''
  ]
]

node('master') {
  try {

    if (env.BRANCH_NAME.contains('/')) {
      branchName = env.BRANCH_NAME.replaceFirst('.+/', '')
    } else {
      branchName = env.BRANCH_NAME
    }

    if (appConfigs[branchName] != null){
      environmentName = appConfigs[branchName].environmentName
    } else {
      environmentName = "local"
    }

    sh "echo $environmentName"

    properties([buildDiscarder(logRotator(numToKeepStr: '2'))])

    stage('Clone repository') {
      checkout scm
    }

    stage('Build') {
        // dockerApiImage = docker.build("${projectName}:${branchName}_${env.BUILD_ID}",
        //   """ -f Dockerfile.cd \
        //       --build-arg Environment=${environmentName} \
        //       --build-arg BuildNumber=${env.BUILD_NUMBER} .
        //   """)
    }

    stage('Deploy') {
      milestone()

      if (appConfigs[branchName] != null) {
        def gcpProjectName = appConfigs[branchName].gcpProjectName
        def credentialId = appConfigs[branchName].credentialId
        def serviceAccountName = appConfigs[branchName].serviceAccountName

        milestone()

        sh 'mkdir ./build'
        sh 'cd ./build'
        
        // dockerApiImage.withRun("-v ${WORKSPACE}/build:/mnt") {}

        docker.image('gcr.io/google.com/cloudsdktool/cloud-sdk:latest').inside("-u root") {
          withCredentials([file(credentialsId: credentialId, variable: 'SERVICEACCOUNT')]) {

            sh "gcloud auth activate-service-account $serviceAccountName --key-file=$SERVICEACCOUNT --project=$gcpProjectName"
            sh "gcloud app deploy --project=$gcpProjectName"
          }
        }
      }
    }

    stage('Clean') {
      sh "docker image rmi -f ${projectName}:${branchName}_${env.BUILD_ID}"
    }

    currentBuild.result = 'SUCCESS'
  } catch(e) {
    throw e

  } finally {
    // send result
    def currentResult = currentBuild.result == 'SUCCESS' ? '👍 success': '👎 failure'

    // send message to slack
    // withCredentials([string(credentialsId: 'slack-giorgio-token', variable: 'TOKEN')]) {
    //   docker.image('mikewright/slack-client:latest').run("-e SLACK_TOKEN=$TOKEN -e SLACK_CHANNEL=##${slackChannel} --rm", "\"${env.JOB_NAME}/${env.BRANCH_NAME} - Build#${env.BUILD_NUMBER}\n Status: ${currentResult}\n ${env.BUILD_URL}\"")
    // }
  }
}