const grokRouter = require('express').Router();


grokRouter.get("/get/statement", function (req, res) {
  res.send(`YAF_TIME_FORMAT %{YEAR:UNWANTED}-%{MONTHNUM:UNWANTED}-%{MONTHDAY:UNWANTED}[T ]%{HOUR:UNWANTED}:%{MINUTE:UNWANTED}:%{SECOND:UNWANTED}
YAF_DELIMITED %{YAF_TIME_FORMAT:start_time}\|%{YAF_TIME_FORMAT:end_time}\|%{SPACE:UNWANTED}%{BASE10NUM:duration}\|%{SPACE:UNWANTED}%{BASE10NUM:rtt}\|%{SPACE:UNWANTED}%{INT:protocol}\|%{SPACE:UNWANTED}%{IP:ip_src_addr}\|%{SPACE:UNWANTED}%{INT:ip_src_port}\|%{SPACE:UNWANTED}%{IP:ip_dst_addr}\|%{SPACE:UNWANTED}%{INT:ip_dst_port}\|%{SPACE:UNWANTED}%{DATA:iflags}\|%{SPACE:UNWANTED}%{DATA:uflags}\|%{SPACE:UNWANTED}%{DATA:riflags}\|%{SPACE:UNWANTED}%{DATA:ruflags}\|%{SPACE:UNWANTED}%{WORD:isn}\|%{SPACE:UNWANTED}%{DATA:risn}\|%{SPACE:UNWANTED}%{DATA:tag}\|%{GREEDYDATA:rtag}\|%{SPACE:UNWANTED}%{INT:pkt}\|%{SPACE:UNWANTED}%{INT:oct}\|%{SPACE:UNWANTED}%{INT:rpkt}\|%{SPACE:UNWANTED}%{INT:roct}\|%{SPACE:UNWANTED}%{INT:app}\|%{GREEDYDATA:end_reason}

  `);
});

grokRouter.get("/list", function(req, res) {
  res.send({
    BASE10NUM: "(?<![0-9.+-])(?>[+-]?(?:(?:[0-9]+(?:\.[0-9]+)?)|(?:\.[0-9]+)))",
    BASE16FLOAT: "\b(?<![0-9A-Fa-f.])(?:[+-]?(?:0x)?(?:(?:[0-9A-Fa-f]+(?:\.[0-9A-Fa-f]*)?)|(?:\.[0-9A-Fa-f]+)))\b",
    BASE16NUM: "(?<![0-9A-Fa-f])(?:[+-]?(?:0x)?(?:[0-9A-Fa-f]+))",
    CISCOMAC: "(?:(?:[A-Fa-f0-9]{4}\.){2}[A-Fa-f0-9]{4})",
    COMMONMAC: "(?:(?:[A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2})",
    DATA: ".*?",
    DATE: "%{DATE_US}|%{DATE_EU}",
    DATESTAMP: "%{DATE}[- ]%{TIME}",
    DATESTAMP_EVENTLOG: "%{YEAR}%{MONTHNUM2}%{MONTHDAY}%{HOUR}%{MINUTE}%{SECOND}",
    DATESTAMP_OTHER: "%{DAY} %{MONTH} %{MONTHDAY} %{TIME} %{TZ} %{YEAR}",
    DATESTAMP_RFC822: "%{DAY} %{MONTH} %{MONTHDAY} %{YEAR} %{TIME} %{TZ}",
    DATESTAMP_RFC2822: "%{DAY}, %{MONTHDAY} %{MONTH} %{YEAR} %{TIME} %{ISO8601_TIMEZONE}",
    DATE_EU: "%{MONTHDAY}[./-]%{MONTHNUM}[./-]%{YEAR}",
    DATE_US: "%{MONTHNUM}[/-]%{MONTHDAY}[/-]%{YEAR}",
    DAY: "(?:Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?|Sun(?:day)?)",
    GREEDYDATA: ".*",
    HOST: "%{HOSTNAME:UNWANTED}",
    HOSTNAME: "\b(?:[0-9A-Za-z][0-9A-Za-z-]{0,62})(?:\.(?:[0-9A-Za-z][0-9A-Za-z-]{0,62}))*(\.?|\b)",
    HOSTPORT: "(?:%{IPORHOST}:%{POSINT:PORT})",
    HOUR: "(?:2[0123]|[01]?[0-9])",
    HTTPDATE: "%{MONTHDAY}/%{MONTH}/%{YEAR}:%{TIME} %{INT}",
    INT: "(?:[+-]?(?:[0-9]+))",
    IP: "(?:%{IPV6:UNWANTED}|%{IPV4:UNWANTED})",
    IPORHOST: "(?:%{HOSTNAME:UNWANTED}|%{IP:UNWANTED})",
    IPV4: "(?<![0-9])(?:(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))(?![0-9])",
    IPV6: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?",
    ISO8601_SECOND: "(?:%{SECOND}|60)",
    ISO8601_TIMEZONE: "(?:Z|[+-]%{HOUR}(?::?%{MINUTE}))",
    MAC: "(?:%{CISCOMAC:UNWANTED}|%{WINDOWSMAC:UNWANTED}|%{COMMONMAC:UNWANTED})",
    MINUTE: "(?:[0-5][0-9])",
    MONTH: "\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\b",
    MONTHDAY: "(?:(?:0[1-9])|(?:[12][0-9])|(?:3[01])|[1-9])",
    MONTHNUM: "(?:0?[1-9]|1[0-2])",
    MONTHNUM2: "(?:0[1-9]|1[0-2])",
    NONNEGINT: "\b(?:[0-9]+)\b",
    NOTSPACE: "\S+",
    NUMBER: "(?:%{BASE10NUM:UNWANTED})",
    PATH: "(?:%{UNIXPATH}|%{WINPATH})",
    POSINT: "\b(?:[1-9][0-9]*)\b",
    PROG: "(?:[\w._/%-]+)",
    QS: "%{QUOTEDSTRING:UNWANTED}",
    QUOTEDSTRING: "(?>'(?>\\.|[^\\']+)+')|''|(?>`(?>\\.|[^\\`]+)+`)|``))",
    SECOND: "(?:(?:[0-5]?[0-9]|60)(?:[:.,][0-9]+)?)",
    SPACE: "\s*",
    SYSLOGFACILITY: "<%{NONNEGINT:facility}.%{NONNEGINT:priority}>",
    SYSLOGHOST: "%{IPORHOST}",
    SYSLOGPROG: "%{PROG:program}(?:\[%{POSINT:pid}\])?",
    SYSLOGTIMESTAMP: "%{MONTH} +%{MONTHDAY} %{TIME}",
    TIME: "(?!<[0-9])%{HOUR}:%{MINUTE}(?::%{SECOND})(?![0-9])",
    TIMESTAMP_ISO8601: "%{YEAR}-%{MONTHNUM}-%{MONTHDAY}[T ]%{HOUR}:?%{MINUTE}(?::?%{SECOND})?%{ISO8601_TIMEZONE}?",
    TTY: "(?:/dev/(pts|tty([pq])?)(\w+)?/?(?:[0-9]+))",
    TZ: "(?:[PMCE][SD]T|UTC)",
    UNIXPATH: "(?>/(?>[\w_%!$@:.,~-]+|\\.)*)+",
    URI: "%{URIPROTO}://(?:%{USER}(?::[^@]*)?@)?(?:%{URIHOST})?(?:%{URIPATHPARAM})?",
    URIHOST: "%{IPORHOST}(?::%{POSINT:port})?",
    URIPARAM: "\?[A-Za-z0-9$.+!*'|(){},~@#%&/=:;_?\-\[\]]*",
    URIPATH: "(?:/[A-Za-z0-9$.+!*'(){},~:;=@#%_\-]*)+",
    URIPATHPARAM: "%{URIPATH}(?:%{URIPARAM})?",
    URIPROTO: "[A-Za-z]+(\+[A-Za-z+]+)?",
    USER: "%{USERNAME:UNWANTED}",
    USERNAME: "[a-zA-Z0-9._-]+",
    UUID: "[A-Fa-f0-9]{8}-(?:[A-Fa-f0-9]{4}-){3}[A-Fa-f0-9]{12}",
    WINDOWSMAC: "(?:(?:[A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2})",
    WINPATH: "(?>[A-Za-z]+:|\\)(?:\\[^\\?*]*)+",
    WORD: "\b\w+\b",
    YEAR: "(?>\d\d){1,2}",
  });
});

module.exports = grokRouter;