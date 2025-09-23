FROM mcr.microsoft.com/dotnet/aspnet:8.0

EXPOSE 80

ENV ASPNETCORE_URLS http://*:80
ENV cacheFolder=/tmp/revcore2foodcache
ENV multisite__enabled=true

RUN apt-get -qq update && apt-get -qqy --no-install-recommends install wget gnupg \
    git \
    unzip

RUN curl -sL https://deb.nodesource.com/setup_8.x |  bash -

RUN apt-get install -y nodejs

COPY ./ /app

WORKDIR /app

ENTRYPOINT ["dotnet", "revCore2site.dll"]
