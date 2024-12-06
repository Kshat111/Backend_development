# WHAT IS BACKEND DEVELOPMENT?

Backend Development is the term for the behind-the-scenes activities that happen when you do anything on a website or web application. It is mostly referred to as the server-side of an application.

# WHAT IS NODE?

1. **Node.js** allows you to run JavaScript code outside of a web browser.  
2. Before Node.js, JavaScript was mostly used for client-side scripting in browsers. It enables the use of JS on the server-side.

- **NPM (Node Package Manager):** Helps you install and manage libraries and tools for your projects.
- **NPX (Node Package Execute):** A tool for running npm packages directly without installing them globally, useful for one-time tasks or running local packages.

# HOW THE INTERNET WORKS?

There are two main concepts for the working of the internet: **Packets** and **Protocols**.

### 1. Packet:
- A small segment of a larger message; contains both header (tells us what to do with this packet) and data.
- Data gets broken up into smaller packets (which then get translated into bits) when transferred over the internet.
- Packets reach their destination via various devices (and middleboxes) like routers and switches using routing and forwarding algorithms such as Dijkstra's or Bellman-Ford algorithm.
- Packets are sent over the internet using **Packet Switching**.

### 2. Protocols:
A standardized way of performing certain actions so that two or more devices can communicate with each other.

#### Examples of Protocols:
- **HTTP:** Hyper Text Transfer Protocol - Transmit web pages and other hypermedia.
- **TCP:** Transmission Control Protocol - Reliable, connection-oriented protocol for data transferring.
- **UDP:** User Datagram Protocol - Unreliable data transmission, connectionless.
- **SMTP:** Simple Mail Transfer Protocol - Sending email messages between servers.
- **IMAP:** Internet Message Access Protocol - Retrieving and managing emails from a server.
- **FTP:** File Transfer Protocol - Transferring files between client and server.
- **SIP:** Session Initiation Protocol - Initiating, maintaining, and terminating multimedia communication sessions.
- **RTP:** Real-time Transfer Protocol - Delivering real-time audio and video over IP networks.
- **SNMP:** Simple Network Management Protocol - Managing and monitoring network devices.
- **IP:** Internet Protocol - Routing and addressing data packets.
- **QUIC:** Quick UDP Internet Connections - Transport protocol optimized for low-latency data transmission over UDP.
- **ICMP:** Internet Control Message Protocol - Error reporting and diagnostics in IP networks.
- **OSPF:** Open Source Path First - Determining the shortest path for routing within an AS.
- **BGP:** Border Gateway Protocol - Exchanging routing information between ASes.
- **DHCP:** Dynamic Host Configuration Protocol - Assigning IP addresses and network settings to devices.
- **DASH:** Dynamic Adaptive Streaming over HTTP - Adaptive video streaming over HTTP.
- **PPP:** Point-to-Point Protocol - Direct communication between two nodes.
- **PDCP:** Packet Data Convergence Protocol - Header compression and encryption in mobile networks.
- **ARP:** Address Resolution Protocol - Map IP addresses to MAC addresses.
- **GTP:** GPRS (General Packet Radio Service) Tunneling Protocol - Tunneling and transmitting data in mobile networks.
- **STP:** Spanning Tree Protocol - Preventing loops in Ethernet networks.

# A DAY IN LIFE OF A WEB REQUEST

### 1. Connecting to the Internet: **DHCP**
- The laptop sends a **DHCP request** as a broadcast on the local network.
- The router (acting as a DHCP server) receives the broadcast request.
- The ethernet frame is de-multiplexed to extract the IP and UDP layers, and the DHCP layer is processed.

### 2. Receiving DHCP ACK
- DHCP sends an **ACK** to the client.
- The switch learns the path (via MAC address) and forwards the frame.
- The client de-multiplexes the layers to extract the DHCP ACK.

(Now the client contains an IP address, the address of the default gateway (first-hop router), and the DNS server.)

### 3. **ARP**
Before sending a DNS query, the client needs the MAC address of the default gateway:
- The client sends an **ARP query** to request the MAC address of the router interface.
- The router responds with an **ARP reply** containing its MAC address.

### 4. Using **DNS**
- A DNS query is created and encapsulated in UDP, IP, and ethernet.
- The IP datagram is forwarded and reaches the DNS server.
- The DNS server replies with the IP address of the requested site.

### 5. **TCP connection**
- The client sends a **TCP SYN** packet to initiate the 3-way handshake.
- The server responds with a **SYN-ACK**.
- The client sends an **ACK**, completing the handshake.

### 6. **HTTP request and response**
- The HTTP request is encapsulated in TCP, IP, and Ethernet and sent to the web server.
- The server responds with an **HTTP reply**, containing the webpage content.
- The IP datagram carrying the reply is routed back to the client.