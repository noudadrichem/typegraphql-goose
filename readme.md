# Actions
> A NodeJS 14 Typescript express server.

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


