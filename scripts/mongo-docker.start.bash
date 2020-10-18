echo "Starting the Docker Container for MongoDB"
{
  docker-compose -f docker/docker-compose.mongo.yml up --force-recreate -d \
  && echo "Docker Started Running MongoDB and Adminer"
} || {
  echo "Something went wrong with your mongo docker start.
  Please check if you have Docker installed.
  Further instructions can be found here: https://www.docker.com/
  You may also need to fix docker-compose.mongo.yml or this bash script
  at scripts/mongo-docker-start.bash"

}
