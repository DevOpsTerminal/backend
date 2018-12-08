:: Install dependencies
cd backend && npm i
:: Start the MongoDB service
docker/docker-compose up
:: Start server
cd backend && gulp develop
:: Api documentation can be found on:
curl http://localhost:3000/api-docs
