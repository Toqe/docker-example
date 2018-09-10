FROM postgres:latest

ENV POSTGRES_PASSWORD=mysecretpassword
COPY init.sql /docker-entrypoint-initdb.d/

CMD [ "/bin/bash" ]