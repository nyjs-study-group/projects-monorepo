
$dockerNotInstalledMessage = "Could not find Docker
  Please check if you have Docker installed.
  Further instructions can be found here: https://www.docker.com/
"

Write-Output "Testing to see if Docker is installed"
Try {
    $dockerVersion = docker -v
    Write-Output $dockerVersion
}
Catch {
    Write-Output $dockerNotInstalledMessage
}

Write-Output "Starting the Docker Container for MongoDB"
Try {
    $result = docker-compose -f docker/docker-compose.mongo.yml up --force-recreate -d
    Write-Output "Docker Started.  Running MongoDB and Adminer Docker Containers in Daemon Mode."
    Write-Output $result
}
Catch {
    Write-Output "Something went wrong when trying to start MongoDB.
    Please check https://www.docker.com for troubleshooting information.
    You way need to fix docker-compose.mongo.yml."
}
