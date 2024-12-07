# SQL DATABASES

1. SQL (Structured Query Language) databases are a type of database that use a structured schema to define the tables, columns, and relationships between tables.
2. They are based on the relational model of data, where data is organized into tables (relations) consisting of rows and columns.
3. For example, MySQL, PostgreSQL, Oracle database.
4. In MySQL, each individual records are stored as ‘rows’ in a table.
5. A ‘table’ is used to store rows (records) of similar type.

# NoSQL DATABASES

1. NoSQL (Not Only SQL) databases are non-relational databases designed to store and manage unstructured or semi-structured data.
2. They do not require a fixed schema, making them more flexible for various types of data and more suited to handle large-scale, distributed data systems.
3. Optimised for real-world applications
4. For example, MongoDB, Cassandra, Redis, Couchbase, FireBase, and Amazon DynamoDB.

# MONGODB

1. MongoDB is a popular NoSQL database that uses a document-oriented data model.
2. It stores data in JSON-like documents (particularly BSON (Binary JSON)) which allows for varying data structures and makes it easy to evolve the schema over time.
3. In MongoDB, each individual records are stored as ‘documents’.
4. Documents belonging to a particular class or group as stored in a ‘collection’.


# MONGOOSE

1. Used to link the express server with MongoDB
2. An ODM (Object Data Mapping) library which handles the proper mapping of JSON objects with BSON documents.