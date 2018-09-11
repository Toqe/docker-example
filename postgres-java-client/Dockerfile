FROM maven
WORKDIR /app

COPY src ./
COPY pom.xml ./

RUN mvn compile
RUN mvn exec:java

ENTRYPOINT ["mvn", "exec:java"]