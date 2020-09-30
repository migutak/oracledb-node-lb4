# Datasources

This directory contains config for datasources used by this app.
docker run -it -d --name oracledb-dev -e DBHOST=172.16.20.2 -e DBPORT=1521 -e DBPASSWORD=DsQSnttm_1 -e DBUSER=ecol -e DBDATABASE=ECOLTST -e DBPORT=1523 -p 6001:6001 quay.io/migutak/oracledb-apis-lb4:1.0.1
