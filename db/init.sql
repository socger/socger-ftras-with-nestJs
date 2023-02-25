-- para MariaDB o MySQL
-- CREATE DATABASE IF NOT EXISTS codrrdb

-- Para PostgreSQL
SELECT 'CREATE DATABASE codrrdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'codrrdb')\gexec