# OS
FROM node:10-slim

# User
USER root

# Owner
LABEL key="Helio Nogueira <helio.nogueir@gmail.com>"

# VARs
ENV FRONTEND_WORKDIR=/root/workspace/app

# Workdir
RUN mkdir -p $FRONTEND_WORKDIR
WORKDIR $FRONTEND_WORKDIR

# Timezone
COPY ./bin/timezone ./bin/timezone
RUN chmod -Rf +x bin
RUN sh bin/timezone

# Start Application
ENTRYPOINT [ "/bin/bash", "-c", "/bin/sh bin/start" ]