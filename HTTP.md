## PROTOCOL

In networking, a protocol is a standardized way of doing certain actions and formatting data so that two or more devices are able to communicate with and understand each other.


# HTTP (HyperText Transfer Protocol)

1. The Hypertext Transfer Protocol is used to load pages on the Internet using hyperlinks.
2. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack.
3. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.

# HTTP REQUEST

1. The way Internet communications platforms such as web browsers ask for the information they need to load a website.
2. Each HTTP request made across the Internet carries with it a series of encoded data that carries different types of information.
3. A typical HTTP request contains:

- HTTP version type
- a URL
- an HTTP method
- HTTP request headers
- Optional HTTP body.


# HTTP METHOD

It indicates the action that the HTTP request expects from the queried server.
For example,

- **GET:** expects information back in return
- **POST:** indicates that the client is submitting information to the web server
- **PUT:** used to replace an existing resource with an updated version
- **DELETE:** used to remove data from a database
- **PATCH:** similar to PUT, except that PATCH allows clients to update specific properties, without overwriting the others


# HTTP REQUEST HEADERS

Headers communicate core information (stored in key-value pairs), such as what browser the client is using and what data is being requested.


# HTTP RESPONSE

1. An HTTP response is what web clients (often browsers) receive from an Internet server in answer to an HTTP request.
2. A typical HTTP response contains:

- HTTP status code: 3-digit codes most often used to indicate whether an HTTP request has been successfully completed.

- HTTP response headers: convey important information such as the language and format of the data being sent in the response body.

- Optional HTTP response body: Successful HTTP responses to ‘GET’ requests generally have a body which contains the requested information. In most web requests, this is HTML data that a web browser will translate into a webpage.