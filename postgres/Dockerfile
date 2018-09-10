FROM postgres:latest

ENV POSTGRES_PASSWORD=mysecretpassword
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
CMD ["postgres"]