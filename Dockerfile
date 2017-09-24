FROM  ubuntu:16.04
FROM  node:8.5
# Copy contents into the gateway container
ADD . /server
# Set the working directory to   container
WORKDIR /server
COPY package.json /server/package.json

# Added node_modules to .dockerignore (size)
RUN npm install
# Define environment variable
ENV Name PR_API_SERVER
