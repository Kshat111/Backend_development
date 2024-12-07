# DOMAIN NAME SYSTEM

- "Phonebook of the internet"
- It translates human-readable domain name into an IP address that computers use to identify each other on the internet.
- There is no centralized DNS because if we had a centralized one then it might be the single point of failure and handling too many queries will not be possible for a single server.

## Hierarchical structure of DNS servers

1. **Root servers:** It responds to the queries made by lower-level DNS servers when they can't resolve a domain locally.
- There are 13 logical root name servers in the world that are replicated to improve performance.
2. **Top-level domain:** Handles requests for top-level domains like .com, .net, .net, .aero, etc.
3. **Authoritative servers:** These provide actual IP address for requested domain.

**Note:** Local DNS servers do not belong to the above hierarchy as they do not handle specific domains. These necessarily act as caching resolvers (recursive queries).

### Querying

1. **Iterative query:** Client's computer queries each server in the hierarchy sequentially until it finds the correct IP address.
2. **Recursive query:** Local DNS server finds the IP address. In doing so it may cache the response for future use.

Note: DNS caching happen in both types of queries.

### DNS Records

1. **A record:** Maps a domain name to an IPv4 address
2. **NS record:** Indicates authoritative DNS server
3. **CNAME record:** Creates an alias for another domain
4. **MX record:** Specifies the mail server responsible for receiving email for the domain

### DNS Security

1. **DDoS (Distributed Denial of Service) attacks:** Botnets attack the target simultaneously
2. **Spoofing:** Intercepting DNS queries and returning incorrect IP addresses
3. **DNS cache poisoning:** Attackers inject false information into a DNS cache