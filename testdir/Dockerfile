FROM ubuntu:14.04

# install cowsay: "cowsay" default installs to /usr/games
RUN apt-get update && apt-get install -y cowsay --no-install-recommends \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*
ENV PATH $PATH:/usr/games

# bad
# CMD ["cowsay", "Hello World!"]

## good
ENTRYPOINT ["cowsay"]
CMD ["Hello World!"]
