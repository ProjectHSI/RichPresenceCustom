const npmlog = require("npmlog")
if (process.argv[2] == "--Verbose") {
    npmlog.level = -Infinity
}
npmlog.verbose("HSI - DRPCS", "Loading ANSI Colors")
const c = require("ansi-colors")
npmlog.verbose("HSI - DRPCS", `${c.bgWhite(`${c.black(`⚙️ - Done.`)}`)}`)
npmlog.verbose("HSI - DRPCS", `${c.bgWhite(`${c.black(`⚙️ - Loading Moment.`)}`)}`)
const moment = require("moment")
npmlog.verbose("HSI - DRPCS", `${c.bgWhite(`${c.black(`⚙️ - Done.`)}`)}`)
npmlog.verbose("HSI - DRPCS", `${c.bgWhite(`${c.black(`⚙️ - Loading Readline.`)}`)}`)
const readline = require("readline")
npmlog.verbose("HSI - DRPCS", `${c.bgWhite(`${c.black(`⚙️ - Done.`)}`)}`)
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the Client ID? [Optional] ", (answer) => {
    if (answer != "") {
        if (parseInt(answer).isNAN == false) {
            var client = require('discord-rich-presence')(answer);
            var CliID = answer
        } else {
            var client = require('discord-rich-presence')('750227758927446036');
            npmlog.warn("HSI - DRPCS", c.bgYellowBright(c.black(`Using Default Client Key. This pervents you from using Rich Presence Images. If you have set up a application for this purpose.. USE IT'S CLIENT ID. This is because of an invaild number.`)))
            var CliID = '750227758927446036'
        }
    } else {
        var client = require('discord-rich-presence')('750227758927446036');
        npmlog.warn("HSI - DRPCS", c.bgYellowBright(c.black(`Using Default Client Key. This pervents you from using Rich Presence Images. If you have set up a application for this purpose.. USE IT'S CLIENT ID.`)))
        var CliID = '750227758927446036'
    }
    rl.question("What is the 'State' of the Rich Presence?", (answer) => {
        var State = answer
        rl.question('What is the details of your Rich Presence?', (answer) => {
            var Details = answer
            rl.question("What is the Increment Of time we should add to the start timestamp so we can add a remaining time to the rich presence?", (answer) => {
                if (parseInt(answer).isNAN == false) {
                    var EndTTimeStamp = answer
                } else {
                    var EndTTimeStamp = ""
                }
                if (CliID != '750227758927446036') {
                    rl.question("What is the Large Image Key?", (answer) => {
                        var LIK = answer
                        rl.question("What is the Small Image Key?", (answer) => {
                            var SIK = answer
                            client.updatePresence({
                                state: State,
                                details: Details,
                                startTimestamp: Date.now(),
                                endTimestamp: Date.now() + EndTTimeStamp,
                                largeImageKey: LIJ,
                                smallImageKey: SIK,
                                instance: true,
                              });
                            if (EndTTimeStamp == "") {
                                client.updatePresence({
                                    state: State,
                                    details: Details,
                                    startTimestamp: Date.now(),
                                    largeImageKey: LIJ,
                                    smallImageKey: SIK,
                                    instance: true,
                                  });
                            }
                        })
                    })
                } else {
                    client.updatePresence({
                        state: State,
                        details: Details,
                        startTimestamp: Date.now(),
                        endTimestamp: Date.now() + EndTTimeStamp,
                        instance: true,
                      });
                      if (EndTTimeStamp == "") {
                        client.updatePresence({
                            state: State,
                            details: Details,
                            startTimestamp: Date.now(),
                            instance: true,
                          });
                    }
                }
            })
        })
    })
})