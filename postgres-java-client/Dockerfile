FROM maven
WORKDIR /app

COPY src/ ./src/
COPY pom.xml ./

RUN mvn compile

ENTRYPOINT ["mvn", "exec:java"]