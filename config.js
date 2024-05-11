//GIFTED-MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.devs = "254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.owner = process.env.OWNER_NUMBER || "254762016957,254110853827,254728746852,255655147353,254728782591";919395599794
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk91TTRoVHJHUHd5OTVuN00yTG0yK2xnRnBDSU1oSFYxU3oyYTlkb2VsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnJ2YjlTc3N4M3dOd0ZvaVV6WU9RcGtmeitHYWl3ODBlY3hWSFNXVHMyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRHFWNDlHMXVoRi9yREtobEpBSlErNEtmRXFrNkFaUktIbXV2QjNZTDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQTRHZHQ1T0xMMkE2dllaU1o2Q1hyajd4bmNRU1VvUE83TEx0TDYrRzJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NZUg2Q2k1WXYvNXFBUWg4Z0RTV2U1YXhHeXFYZEx6ZkszT0JkeFc0bm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhFVlllUVVWNzhoM1NIQnhYc3h2b1JSMUt6WUNSNnFpSENDNEFHTG04UUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhNSFBOMnd5SUVGUzVnL1BJUG82T0dmeGljN0Y3MHdHRGZwS3I4c29Wdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXVpM0VyS3JUVW1YcDd6M0dzV251ZkhGeUY4N1A4dUhtV1M1bmFiVkJVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBCd2R5SWxJZlUzVTdmQVVjVjFGVGE4b0pnOERlY1VMVjM4ZEFLUTZXM1pNVzI3RjN6c0Y5eEMrWHUrWHM3OTllZlFQSjh3UUJ1NXBobE8rQi9VTWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJZc0pPbDJVaE50U1BYcEJGZlhQYjUvb2l1Wk43UGd4cko5bzNLWHcvVmpZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHd3RCeGJCeVFNMkNMeDAyMDRERFp3IiwicGhvbmVJZCI6IjY2YTMzODdmLTg5OWQtNDc3ZS1iZDk2LWQwMTk4YmM5Y2EzNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQmNRYUYrOEtvL1hIQWpiclpETXZtbWVmeUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVllzVDFkSzc5ZXFxQWw4SlQ4QmUxTE1BQVRvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFGUVJSM1gzIiwibWUiOnsiaWQiOiI5MTkzOTU1OTk3OTQ6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+HvyDwn4e6IPCfh6cg8J+HqiDwn4eqIPCfh7MgIPCfh6kg8J+HpiDwn5KXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWGUxTGdIRVBMZi9iRUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBRmwyYmZxdlNpb3dhWStxd3dTOEJkRXplYnlwSmcxV1pxWlVRdENmNTEwPSIsImFjY291bnRTaWduYXR1cmUiOiJoblJZQXF2Z3lFSnU4OVhJOXVoVWduTEVNditqUFpLanBQODUxZWRpcE8xSnNwVXFONk9IYXNhKzd3aHZoQjRVaWhhSWl1ME9wYzVoRHo1cFRpS2dDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXVlL0FWamVYNmNPNEFMZitkdVRVN2ZOSmFvaVhMd0RncXVqb25RdWJOZ3JaNVlnM3E3S1Z4VzJvbGJackkycVVJeVAvc2RzWnNjWFQyN0NJbkhEaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkzOTU1OTk3OTQ6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUJaZG0zNnIwb3FNR21QcXNNRXZBWFJNM204cVNZTlZtYW1WRUxRbitkZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTQzMzQ3MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBWnIifQ=="
module.exports = {
  menu: process.env.MENU || "2", /*Leave to Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*",
  author: process.env.PACK_AUTHER || "Gifted Tech",
  packname: process.env.PACK_NAME || "Gifted-Md♥️",
  botname: process.env.BOT_NAME || "Nabajyoti",
  ownername: process.env.OWNER_NAME || "Nabajyotiaxom",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
