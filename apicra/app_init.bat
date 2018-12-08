:: Install dependencies
cd ../src && npm i
:: Start the MongoDB service
../docker-compose up
:: Start server
cd ../src && gulp develop
:: Api documentation can be found on:
curl http://localhost:3000/api-docs
