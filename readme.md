# TypeGraphql with TypeGoose
> A NodeJS 14 Typescript express server.

.env
```
NODE_ENV=development
PORT=9098
DB_URL=mongodb://localhost:27017/name
```


# Structure (layered structrue)
- Resolvers are for resolving the graphql schema. (UI)
- Services are logical services (Service)
- Either DB and Graphql Schema/models can be d in src/models. This is the source of truth (Data)


## Simple local database via docker
`docker run -d -p 27017:27017 mongo` 

## Actions
Deploy contains 2 jobs 
- Push
- Deploy

These jobs are triggered by Releases with semver format. E.g. `v1.0.0`. This pushes a container to Docker hub with tag `:latest` and `:v1.0.0`.

### Push
Pushes the container to Docker hub using `elgohr/Publish-Docker-Github-Action` 

### Deploy
Runs a shell script using `appleboy/ssh-action`. Using sudo with the -S flag to read pass from stdout from secret.

### Repository secrets used in the project
- DOCKER_USERNAME
- DOCKER_PASSWORD
- HOST_USERNAME
- HOST_PASSWORD


