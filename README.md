# Simple Store ReactJs
A Simple tore using ReactJs

## Get Start
All instruction below was executed at Linux OS.

### Up Environment
Execute the steps below:
```bash
mkdir -p "${HOME}/workspace"
cd "${HOME}/workspace"
# if it doesn't work! Go to git repository and use the HTTP version
git clone git@github.com:helionogueir/simple-store-reactjs.git
docker-compose up
```

### Reset Environment
Case you'll need reset the environment, follow the steps below.

***WARNING! The commands below clean all volumes.***

```bash
cd "${HOME}/workspace/simple-store-reactjs"
sudo rm -rf dist/ node_modules/ && docker-compose down --rmi all --volumes && docker-compose build && docker-compose up
```

### Run Unit Tests
When you'll need to run the unit.
```bash
docker exec -it SimpleStore npm run test:verbose
```
