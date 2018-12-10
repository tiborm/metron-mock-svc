const stellarRouter = require('express').Router();

stellarRouter.get("/list/simple/functions", function(req, res) {
  res.send([
    {
      "name": "ABS",
      "description": "Returns the absolute value of a number.",
      "params": [
        "number - The number to take the absolute value of"
      ],
      "returns": "The absolute value of the number passed in."
    },
    {
      "name": "BLOOM_MERGE",
      "description": "Returns a merged bloom filter",
      "params": [
        "bloomfilters - A list of bloom filters to merge"
      ],
      "returns": "Bloom Filter or null if the list is empty"
    },
    {
      "name": "CEILING",
      "description": "Returns the ceiling of a number.",
      "params": [
        "number - The number to take the ceiling of"
      ],
      "returns": "The ceiling of the number passed in."
    },
    {
      "name": "CHOMP",
      "description": "Removes one newline from end of a String if it's there, otherwise leave it alone. A newline is \"\\n\", \"\\r\", or \"\\r\\n\"",
      "params": [
        "the String to chomp a newline from, may be null"
      ],
      "returns": "String without newline, null if null String input"
    },
    {
      "name": "CHOP",
      "description": "Remove the last character from a String",
      "params": [
        "the String to chop last character from, may be null"
      ],
      "returns": "String without last character, null if null String input"
    },
    {
      "name": "COS",
      "description": "Returns the cosine of a number.",
      "params": [
        "number - The number to take the cosine of"
      ],
      "returns": "The cosine of the number passed in."
    },
    {
      "name": "DAY_OF_MONTH",
      "description": "The numbered day within the month.  The first day within the month has a value of 1.",
      "params": [
        "dateTime - The datetime as a long representing the milliseconds since unix epoch"
      ],
      "returns": "The numbered day within the month."
    },
    {
      "name": "DAY_OF_WEEK",
      "description": "The numbered day within the week.  The first day of the week, Sunday, has a value of 1.",
      "params": [
        "dateTime - The datetime as a long representing the milliseconds since unix epoch"
      ],
      "returns": "The numbered day within the week."
    },
    {
      "name": "DAY_OF_YEAR",
      "description": "The day number within the year.  The first day of the year has value of 1.",
      "params": [
        "dateTime - The datetime as a long representing the milliseconds since unix epoch"
      ],
      "returns": "The day number within the year."
    },
    {
      "name": "DOMAIN_REMOVE_SUBDOMAINS",
      "description": "Removes the subdomains from a domain.",
      "params": [
        "domain - Fully qualified domain name"
      ],
      "returns": "The domain without the subdomains.  (for example, DOMAIN_REMOVE_SUBDOMAINS('mail.yahoo.com') yields 'yahoo.com')"
    },
    {
      "name": "DOMAIN_REMOVE_TLD",
      "description": "Removes the top level domain (TLD) suffix from a domain.",
      "params": [
        "domain - Fully qualified domain name"
      ],
      "returns": "The domain without the TLD.  (for example, DOMAIN_REMOVE_TLD('mail.yahoo.co.uk') yields 'mail.yahoo')"
    },
    {
      "name": "DOMAIN_TO_TLD",
      "description": "Extracts the top level domain from a domain",
      "params": [
        "domain - Fully qualified domain name"
      ],
      "returns": "The TLD of the domain.  (for example, DOMAIN_TO_TLD('mail.yahoo.co.uk') yields 'co.uk')"
    },
    {
      "name": "DOMAIN_TYPOSQUAT",
      "description": "Generate potential typosquatted domain from a passed domain.  Strategies largely match https://github.com/elceef/dnstwist",
      "params": [
        "domain - Domain (without subdomains or TLD) to generate typosquatted domains for."
      ],
      "returns": "A set of potential typosquatted domains."
    },
    {
      "name": "EXP",
      "description": "Returns Euler's number raised to the power of the argument",
      "params": [
        "number - The power to which e is raised."
      ],
      "returns": "Euler's number raised to the power of the argument."
    },
    {
      "name": "FLOOR",
      "description": "Returns the floor of a number.",
      "params": [
        "number - The number to take the floor of"
      ],
      "returns": "The floor of the number passed in."
    },
    {
      "name": "GEOHASH_TO_LATLONG",
      "description": "Compute the lat/long of a given [geohash](https://en.wikipedia.org/wiki/Geohash)",
      "params": [
        "hash - The [geohash](https://en.wikipedia.org/wiki/Geohash)"
      ],
      "returns": "A map containing the latitude and longitude of the hash (keys \"latitude\" and \"longitude\")"
    },
    {
      "name": "GET_FIRST",
      "description": "Returns the first element of the list",
      "params": [
        "input - List"
      ],
      "returns": "First element of the list"
    },
    {
      "name": "GET_LAST",
      "description": "Returns the last element of the list",
      "params": [
        "input - List"
      ],
      "returns": "Last element of the list"
    },
    {
      "name": "HLLP_CARDINALITY",
      "description": "Returns HyperLogLogPlus-estimated cardinality for this set. See [HLLP README](HLLP.md)",
      "params": [
        "hyperLogLogPlus - the hllp set"
      ],
      "returns": "Long value representing the cardinality for this set. Cardinality of a null set is 0."
    },
    {
      "name": "HLLP_MERGE",
      "description": "Merge hllp sets together. The resulting estimator is initialized with p and sp precision values from the first provided hllp estimator set. See [HLLP README](HLLP.md)",
      "params": [
        "hllp - List of hllp estimators to merge. Takes a single hllp set or a list."
      ],
      "returns": "A new merged HyperLogLogPlus estimator set. Passing an empty list returns null."
    },
    {
      "name": "IS_DOMAIN",
      "description": "Tests if a string refers to a valid domain name.  Domain names are evaluated according to the standards RFC1034 section 3, and RFC1123 section 2.1.",
      "params": [
        "address - The string to test"
      ],
      "returns": "True if the string refers to a valid domain name and false if otherwise"
    },
    {
      "name": "IS_EMAIL",
      "description": "Tests if a string is a valid email address",
      "params": [
        "address - The string to test"
      ],
      "returns": "True if the string is a valid email address and false if otherwise."
    },
    {
      "name": "IS_EMPTY",
      "description": "Returns true if string or collection is empty or null and false if otherwise.",
      "params": [
        "input - Object of string or collection type (for example, list)"
      ],
      "returns": "True if the string or collection is empty or null and false if otherwise."
    },
    {
      "name": "IS_INTEGER",
      "description": "Determines whether or not an object is an integer.",
      "params": [
        "x - The object to test"
      ],
      "returns": "True if the object can be converted to an integer and false if otherwise."
    },
    {
      "name": "IS_NAN",
      "description": "Evaluates if the passed number is NaN.  The number is evaluated as a double",
      "params": [
        "number - number to evaluate"
      ],
      "returns": "True if the value is NaN, false if it is not"
    },
    {
      "name": "IS_URL",
      "description": "Tests if a string is a valid URL",
      "params": [
        "url - The string to test"
      ],
      "returns": "True if the string is a valid URL and false if otherwise."
    },
    {
      "name": "IT_ENTROPY",
      "description": "Computes the base-2 entropy of a multiset",
      "params": [
        "input - a multiset (a map of objects to counts)"
      ],
      "returns": "The [base-2 entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)#Definition) of the count .  The unit of this is bits."
    },
    {
      "name": "LENGTH",
      "description": "Returns the length of a string or size of a collection. Returns 0 for empty or null Strings",
      "params": [
        "input - Object of string or collection type (e.g. list)"
      ],
      "returns": "Integer"
    },
    {
      "name": "LN",
      "description": "Returns the natural log of a number.",
      "params": [
        "number - The number to take the natural log value of"
      ],
      "returns": "The natural log of the number passed in."
    },
    {
      "name": "LOG10",
      "description": "Returns the log (base 10) of a number.",
      "params": [
        "number - The number to take the log (base 10) value of"
      ],
      "returns": "The log (base 10) of the number passed in."
    },
    {
      "name": "LOG2",
      "description": "Returns the log (base 2) of a number.",
      "params": [
        "number - The number to take the log (base 2) value of"
      ],
      "returns": "The log (base 2) of the number passed in."
    },
    {
      "name": "MONTH",
      "description": "The number representing the month.  The first month, January, has a value of 0.",
      "params": [
        "dateTime - The datetime as a long representing the milliseconds since unix epoch"
      ],
      "returns": "The current month (0-based)."
    },
    {
      "name": "MULTISET_INIT",
      "description": "Creates an empty multiset, which is a map associating objects to their instance counts.",
      "params": [
        "input (optional) - An initialization of the multiset"
      ],
      "returns": "A multiset"
    },
    {
      "name": "MULTISET_MERGE",
      "description": "Merges a list of multisets, which is a map associating objects to their instance counts.",
      "params": [
        "sets - A collection of multisets to merge"
      ],
      "returns": "A multiset"
    },
    {
      "name": "MULTISET_TO_SET",
      "description": "Create a set out of a multiset, which is a map associating objects to their instance counts.",
      "params": [
        "multiset - The multiset to convert."
      ],
      "returns": "The set of objects in the multiset ignoring multiplicity"
    },
    {
      "name": "OBJECT_GET",
      "description": "Retrieve and deserialize a serialized object from HDFS.  The cache can be specified via two properties in the global config: \"object.cache.size\" (default 1000),\"object.cache.expiration.minutes\" (default 1440).  Note, if these are changed in global config, topology restart is required.",
      "params": [
        "path - The path in HDFS to the serialized object"
      ],
      "returns": "The deserialized object."
    },
    {
      "name": "PROTOCOL_TO_NAME",
      "description": "Converts the IANA protocol number to the protocol name",
      "params": [
        "IANA Number"
      ],
      "returns": "The protocol name associated with the IANA number."
    },
    {
      "name": "ROUND",
      "description": "Rounds a number to the nearest integer. This is half-up rounding.",
      "params": [
        "number - The number to round"
      ],
      "returns": "The nearest integer (based on half-up rounding)."
    },
    {
      "name": "SAMPLE_GET",
      "description": "Return the sample.",
      "params": [
        "sampler - Sampler to use."
      ],
      "returns": "The resulting sample."
    },
    {
      "name": "SAMPLE_INIT",
      "description": "Create a [reservoir sampler](https://en.wikipedia.org/wiki/Reservoir_sampling) of a specific size or, if unspecified, size 1024.  Elements sampled by the reservoir sampler will be included in the final sample with equal probability.",
      "params": [
        "size? - The size of the reservoir sampler.  If unspecified, the size is 1024"
      ],
      "returns": "The sampler object."
    },
    {
      "name": "SET_INIT",
      "description": "Creates a new set",
      "params": [
        "input (optional) - An initialization of the set"
      ],
      "returns": "A Set"
    },
    {
      "name": "SET_MERGE",
      "description": "Merges a list of sets",
      "params": [
        "sets - A collection of sets to merge"
      ],
      "returns": "A Set"
    },
    {
      "name": "SHELL_EDIT",
      "description": "Open an editor (optionally initialized with text) and return whatever is saved from the editor.  The editor to use is pulled from `EDITOR` or `VISUAL` environment variable.",
      "params": [
        "string - (Optional) A string whose content is used to initialize the editor."
      ],
      "returns": "The content that the editor saved after editor exit."
    },
    {
      "name": "SHELL_GET_EXPRESSION",
      "description": "Get a stellar expression from a variable",
      "params": [
        "variable - variable name"
      ],
      "returns": "The stellar expression associated with the variable."
    },
    {
      "name": "SHELL_LIST_VARS",
      "description": "Return the variables in a tabular form",
      "params": [
        "wrap : Length of string to wrap the columns"
      ],
      "returns": "A tabular representation of the variables."
    },
    {
      "name": "SHELL_MAP2TABLE",
      "description": "Take a map and return a table",
      "params": [
        "map - Map"
      ],
      "returns": "The map in table form"
    },
    {
      "name": "SHELL_VARS2MAP",
      "description": "Take a set of variables and return a map",
      "params": [
        "variables* - variable names to use to create map "
      ],
      "returns": "A map associating the variable name with the stellar expression."
    },
    {
      "name": "SIN",
      "description": "Returns the sine of a number.",
      "params": [
        "number - The number to take the sine of"
      ],
      "returns": "The sine of the number passed in."
    },
    {
      "name": "SQRT",
      "description": "Returns the square root of a number.",
      "params": [
        "number - The number to take the square root of"
      ],
      "returns": "The square root of the number passed in."
    },
    {
      "name": "STATS_COUNT",
      "description": "Calculates the count of the values accumulated (or in the window if a window is used).",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The count of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_GEOMETRIC_MEAN",
      "description": "Calculates the geometric mean of the accumulated values (or in the window if a window is used). See http://commons.apache.org/proper/commons-math/userguide/stat.html#a1.2_Descriptive_statistics ",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The geometric mean of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_INIT",
      "description": "Initializes a statistics object",
      "params": [
        "window_size - The number of input data values to maintain in a rolling window in memory.  If window_size is equal to 0, then no rolling window is maintained. Using no rolling window is less memory intensive, but cannot calculate certain statistics like percentiles and kurtosis."
      ],
      "returns": "A Stellar statistics object"
    },
    {
      "name": "STATS_KURTOSIS",
      "description": "Calculates the kurtosis of the accumulated values (or in the window if a window is used).  See http://commons.apache.org/proper/commons-math/userguide/stat.html#a1.2_Descriptive_statistics ",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The kurtosis of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_MAX",
      "description": "Calculates the maximum of the accumulated values (or in the window if a window is used).",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The maximum of the accumulated values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_MEAN",
      "description": "Calculates the mean of the accumulated values (or in the window if a window is used).",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The mean of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_MERGE",
      "description": "Merges statistics objects.",
      "params": [
        "statistics - A list of statistics objects"
      ],
      "returns": "A Stellar statistics object"
    },
    {
      "name": "STATS_MIN",
      "description": "Calculates the minimum of the accumulated values (or in the window if a window is used).",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The minimum of the accumulated values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_POPULATION_VARIANCE",
      "description": "Calculates the population variance of the accumulated values (or in the window if a window is used).  See http://commons.apache.org/proper/commons-math/userguide/stat.html#a1.2_Descriptive_statistics ",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The population variance of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_QUADRATIC_MEAN",
      "description": "Calculates the quadratic mean of the accumulated values (or in the window if a window is used).  See http://commons.apache.org/proper/commons-math/userguide/stat.html#a1.2_Descriptive_statistics ",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The quadratic mean of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_SD",
      "description": "Calculates the standard deviation of the accumulated values (or in the window if a window is used).  See http://commons.apache.org/proper/commons-math/userguide/stat.html#a1.2_Descriptive_statistics ",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The standard deviation of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_SKEWNESS",
      "description": "Calculates the skewness of the accumulated values (or in the window if a window is used).  See http://commons.apache.org/proper/commons-math/userguide/stat.html#a1.2_Descriptive_statistics ",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The skewness of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_SUM",
      "description": "Calculates the sum of the accumulated values (or in the window if a window is used).",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The sum of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_SUM_LOGS",
      "description": "Calculates the sum of the (natural) log of the accumulated values (or in the window if a window is used).  See http://commons.apache.org/proper/commons-math/userguide/stat.html#a1.2_Descriptive_statistics ",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The sum of the (natural) log of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_SUM_SQUARES",
      "description": "Calculates the sum of the squares of the accumulated values (or in the window if a window is used).",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The sum of the squares of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STATS_VARIANCE",
      "description": "Calculates the variance of the accumulated values (or in the window if a window is used).  See http://commons.apache.org/proper/commons-math/userguide/stat.html#a1.2_Descriptive_statistics ",
      "params": [
        "stats - The Stellar statistics object"
      ],
      "returns": "The variance of the values in the window or NaN if the statistics object is null."
    },
    {
      "name": "STRING_ENTROPY",
      "description": "Computes the base-2 shannon entropy of a string",
      "params": [
        "input - String"
      ],
      "returns": "The base-2 shannon entropy of the string (https://en.wikipedia.org/wiki/Entropy_(information_theory)#Definition).  The unit of this is bits."
    },
    {
      "name": "SYSTEM_ENV_GET",
      "description": "Returns the value associated with an environment variable",
      "params": [
        "env_var - Environment variable name to get the value for"
      ],
      "returns": "String"
    },
    {
      "name": "SYSTEM_PROPERTY_GET",
      "description": "Returns the value associated with a Java system property",
      "params": [
        "key - Property to get the value for"
      ],
      "returns": "String"
    },
    {
      "name": "TAN",
      "description": "Returns the tangent of a number.",
      "params": [
        "number - The number to take the tangent of"
      ],
      "returns": "The tangent of the number passed in."
    },
    {
      "name": "TO_DOUBLE",
      "description": "Transforms the first argument to a double precision number",
      "params": [
        "input - Object of string or numeric type"
      ],
      "returns": "Double version of the first argument"
    },
    {
      "name": "TO_FLOAT",
      "description": "Transforms the first argument to a float",
      "params": [
        "input - Object of string or numeric type"
      ],
      "returns": "Float version of the first argument"
    },
    {
      "name": "TO_INTEGER",
      "description": "Transforms the first argument to an integer",
      "params": [
        "input - Object of string or numeric type"
      ],
      "returns": "Integer version of the first argument"
    },
    {
      "name": "TO_JSON_LIST",
      "description": "Returns a List object for the specified JSON string",
      "params": [
        "str - the JSON String to convert, may be null"
      ],
      "returns": "a List object containing the parsed JSON string"
    },
    {
      "name": "TO_JSON_MAP",
      "description": "Returns a MAP object for the specified JSON string",
      "params": [
        "str - the JSON String to convert, may be null"
      ],
      "returns": "a MAP object containing the parsed JSON string"
    },
    {
      "name": "TO_JSON_OBJECT",
      "description": "Returns a JSON object for the specified JSON string",
      "params": [
        "str - the JSON String to convert, may be null"
      ],
      "returns": "an Object containing the parsed JSON string"
    },
    {
      "name": "TO_LONG",
      "description": "Transforms the first argument to a long integer",
      "params": [
        "input - Object of string or numeric type"
      ],
      "returns": "Long version of the first argument"
    },
    {
      "name": "TO_LOWER",
      "description": "Transforms the first argument to a lowercase string",
      "params": [
        "input - String"
      ],
      "returns": "Lowercase string"
    },
    {
      "name": "TO_STRING",
      "description": "Transforms the first argument to a string",
      "params": [
        "input - Object"
      ],
      "returns": "String"
    },
    {
      "name": "TO_UPPER",
      "description": "Transforms the first argument to an uppercase string",
      "params": [
        "input - String"
      ],
      "returns": "Uppercase string"
    },
    {
      "name": "TRIM",
      "description": "Trims whitespace from both sides of a string.",
      "params": [
        "input - String"
      ],
      "returns": "String"
    },
    {
      "name": "URL_TO_HOST",
      "description": "Extract the hostname from a URL.",
      "params": [
        "url - URL in String form"
      ],
      "returns": "The hostname from the URL as a String.  e.g. URL_TO_HOST('http://www.yahoo.com/foo') would yield 'www.yahoo.com'"
    },
    {
      "name": "URL_TO_PATH",
      "description": "Extract the path from a URL.",
      "params": [
        "url - URL in String form"
      ],
      "returns": "The path from the URL as a String.  e.g. URL_TO_PATH('http://www.yahoo.com/foo') would yield 'foo'"
    },
    {
      "name": "URL_TO_PORT",
      "description": "Extract the port from a URL.  If the port is not explicitly stated in the URL, then an implicit port is inferred based on the protocol.",
      "params": [
        "url - URL in string form"
      ],
      "returns": "The port used in the URL as an integer (for example, URL_TO_PORT('http://www.yahoo.com/foo') would yield 80)"
    },
    {
      "name": "URL_TO_PROTOCOL",
      "description": "Extract the protocol from a URL.",
      "params": [
        "url - URL in String form"
      ],
      "returns": "The protocol from the URL as a String. e.g. URL_TO_PROTOCOL('http://www.yahoo.com/foo') would yield 'http'"
    },
    {
      "name": "WEEK_OF_MONTH",
      "description": "The numbered week within the month.  The first week within the month has a value of 1.",
      "params": [
        "dateTime - The datetime as a long representing the milliseconds since unix epoch"
      ],
      "returns": "The numbered week within the month."
    },
    {
      "name": "WEEK_OF_YEAR",
      "description": "The numbered week within the year.  The first week in the year has a value of 1.",
      "params": [
        "dateTime - The datetime as a long representing the milliseconds since unix epoch"
      ],
      "returns": "The numbered week within the year."
    },
    {
      "name": "YEAR",
      "description": "The number representing the year. ",
      "params": [
        "dateTime - The datetime as a long representing the milliseconds since unix epoch"
      ],
      "returns": "The current year"
    },
    {
      "name": "ZIP",
      "description": "Zips lists into a single list where the ith element is an list containing the ith items from the constituent lists. See [python](https://docs.python.org/3/library/functions.html#zip) and [wikipedia](https://en.wikipedia.org/wiki/Convolution_(computer_science)) for more context.",
      "params": [
        "list(s) - List(s) to zip."
      ],
      "returns": "The zip of the lists.  The returned list is the min size of all the lists.  e.g. ZIP( [ 1, 2 ], [ 3, 4, 5] ) == [ [1, 3], [2, 4] ]"
    },
    {
      "name": "ZIP_LONGEST",
      "description": "Zips lists into a single list where the ith element is an list containing the ith items from the constituent lists.  See [python](https://docs.python.org/3/library/itertools.html#itertools.zip_longest) and [wikipedia](https://en.wikipedia.org/wiki/Convolution_(computer_science)) for more context.",
      "params": [
        "list(s) - List(s) to zip."
      ],
      "returns": "The zip of the lists.  The returned list is the max size of all the lists.  Empty elements are null e.g. ZIP_LONGEST( [ 1, 2 ], [ 3, 4, 5] ) == [ [1, 3], [2, 4], [null, 5] ]"
    }
  ]);
});

module.exports = stellarRouter;