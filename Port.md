# PORT:

1. A port is a virtual point where network connections start and end.
2. Ports are software-based and managed by a computer's operating system.
3. Ports allow computers to easily differentiate between different kinds of traffic or services.
4. Each port is associated with an IP address and a transport protocol (such as TCP or UDP).

For example,
Emails go to a different port than webpages, even though both reach a computer over the same Internet connection.


## PORT NUMBER:

1. Ports are standardized across all network-connected devices, with each port assigned a number.
2. Most ports are reserved for certain protocols — for example, HTTP messages go to port 80, HTTPS goes to 443.

### What is a socket?

**A socket is the combination of an IP address, a protocol (TCP/UDP), and a port number. For example, 192.168.1.1:80 (IP address + Port 80)**


## TYPES OF PORTS

**In total there are 65535 ports.** These are divided in three categories
1. **Well-known ports (0-1023):** Reserved for system processes and well-known services.
e.g., 
- Port 20/21: FTP (File Transfer Protocol)
- Port 22: SSH (Secure Shell)
- Port 25: SMTP (Simple Mail Transfer Protocol)
- Port 53: DNS (Domain Name System)
- Port 80: HTTP (Hypertext Transfer Protocol)
- Port 443: HTTPS (Secure HTTP)

2. **Registered Ports (1024–49151):** Assigned to user processes or applications by the IANA.
e.g.,
- Port 3306: MySQL Database
- Port 8080: Alternative HTTP Port

3. **Dynamic/Private Ports (49152–65535):** Temporarily assigned to client applications during a communication session.


Consider this scenario, you (client) wants to send an email using SMTP to your friend. The client initiates the connection using a random dynamic port (29152-65535) 50000 (say). The email get sent to the destination to the port 25 (for SMTP service). The friend's computer responds to your request using its Port 21 to your laptop's source port.
Here, **source port number = 50000** and **destination port number = 25**