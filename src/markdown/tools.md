---
title: Dig and Whois Tools
description: A simple tool for getting the DNS entries and whois records in one query.
reason: I find it time-consuming if I query both DNS and Whois records in each separate designated websites.
technologies: html,css,javascript,php
image: https://camo.githubusercontent.com/272af7fb32e4a4862efcea51d419fe94193e9153/68747470733a2f2f736e61672e67792f636f314133342e6a7067
repository: https://github.com/kurtobando/tools
---

### How to use it? 
Enter a domain name on the search area, then click on Dig Records. This should return DNS result and whois result respectively. For example:
```
google.com
```
Returns:
```
DNS Result for google.com
NS
ns4.google.com
ns1.google.com
ns2.google.com
ns3.google.com
A
74.125.24.101
74.125.24.102
74.125.24.100
74.125.24.139
74.125.24.138
74.125.24.113
AAAA 
2404:6800:4003:804::200e
TXT 
v=spf1 include:_spf.google.com ~all
facebook-domain-verification=22rm551cu4k0ab0bxsw536tlds4h95
docusign=1b0a6754-49b1-4db5-8540-d2c12664b289
docusign=05958488-4752-4ef2-95eb-aa7ba8a3bd0e
globalsign-smime-dv=CDYX+XFHUw2wml6/Gb8+59BsH31KzUr6c1l2BPvqKX8=
MX
aspmx.l.google.com
172.217.194.27
2404:6800:4003:c03::1b
alt1.aspmx.l.google.com
74.125.28.26
2607:f8b0:400e:c04::1a
alt4.aspmx.l.google.com
173.194.209.26
2607:f8b0:4024:c02::1a
alt2.aspmx.l.google.com
142.250.28.27
2607:f8b0:4003:c1c::1b
alt3.aspmx.l.google.com
209.85.146.27
2607:f8b0:4001:c1f::1a
```
```
 Domain Name: GOOGLE.COM
   Registry Domain ID: 2138514_DOMAIN_COM-VRSN
   Registrar WHOIS Server: whois.markmonitor.com
   Registrar URL: http://www.markmonitor.com
   Updated Date: 2019-09-09T15:39:04Z
   Creation Date: 1997-09-15T04:00:00Z
   Registry Expiry Date: 2028-09-14T04:00:00Z
   Registrar: MarkMonitor Inc.
   Registrar IANA ID: 292
   Registrar Abuse Contact Email: abusecomplaints@markmonitor.com
   Registrar Abuse Contact Phone: +1.2083895740
   Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
   Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
   Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
   Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited
   Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited
   Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited
   Name Server: NS1.GOOGLE.COM
   Name Server: NS2.GOOGLE.COM
   Name Server: NS3.GOOGLE.COM
   Name Server: NS4.GOOGLE.COM
   DNSSEC: unsigned
   URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of whois database: 2020-09-30T00:23:20Z <<<

For more information on Whois status codes, please visit https://icann.org/epp

NOTICE: The expiration date displayed in this record is the date the
registrar's sponsorship of the domain name registration in the registry is
currently set to expire. This date does not necessarily reflect the expiration
date of the domain name registrant's agreement with the sponsoring
registrar.  Users may consult the sponsoring registrar's Whois database to
view the registrar's reported date of expiration for this registration.

TERMS OF USE: You are not authorized to access or query our Whois
database through the use of electronic processes that are high-volume and
automated except as reasonably necessary to register domain names or
modify existing registrations; the Data in VeriSign Global Registry
Services' ("VeriSign") Whois database is provided by VeriSign for
information purposes only, and to assist persons in obtaining information
about or related to a domain name registration record. VeriSign does not
guarantee its accuracy. By submitting a Whois query, you agree to abide
by the following terms of use: You agree that you may use this Data only
for lawful purposes and that under no circumstances will you use this Data
to: (1) allow, enable, or otherwise support the transmission of mass
unsolicited, commercial advertising or solicitations via e-mail, telephone,
or facsimile; or (2) enable high volume, automated, electronic processes
that apply to VeriSign (or its computer systems). The compilation,
repackaging, dissemination or other use of this Data is expressly
prohibited without the prior written consent of VeriSign. You agree not to
use electronic processes that are automated and high-volume to access or
query the Whois database except as reasonably necessary to register
domain names or modify existing registrations. VeriSign reserves the right
to restrict your access to the Whois database in its sole discretion to ensure
operational stability.  VeriSign may restrict or terminate your access to the
Whois database for failure to abide by these terms of use. VeriSign
reserves the right to modify these terms at any time.

The Registry database contains ONLY .COM, .NET, .EDU domains and
Registrars.
```


### Demo
Visit [here](https://tools.kurtobando.com/tools/)

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

### License
[MIT](https://choosealicense.com/licenses/mit/)