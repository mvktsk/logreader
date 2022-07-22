# Count NOK event in a log file

## Task description

We have a log file with a list of events.

```
[2018-04-11 03:13:57] OK
[2018-04-11 03:14:04] OK
[2018-04-11 03:14:04] NOK
[2018-04-11 03:14:09] OK
```

Should count the number of NOK events in each minute.

## Solution

Hash table to count the number of events in each minute used. When the event is NOK, the key is the string with date hours minute and the value is the number of NOK events.

Script outputs the result in the following format:

```
NOK event in a minute:
2018-04-11 03:14 - 3
2018-04-11 03:16 - 2
```

If NOK event is not found, the script outputs the following message:

```
No NOK events found
```

## How to run

Prerequisites: Node 14 and above should be installed

- Clone repository locally.
- Navigate to the directory with the script.
- Install dependencies: `npm install`.
- Build the project: `tsc`.
- Run the script: `node.exe ./build/src/index.js ./events.log`
