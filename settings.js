/*
  project_name : 𝙈𝙞𝙩𝙕𝙪𝙠𝙮𝙮 𝘽𝙤𝙩 Bot
  Version : 2.4.0
  Owner : Hector Manuel
  Do Not Clone 


*/

//----------------------[ 𝙈𝙞𝙩𝙕𝙪𝙠𝙮𝙮 𝘽𝙤𝙩]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~FxIkEY6b#q5-IlW15LQktIwSdTWE2BXsf_E4pWkFlOcVnVsyltac' 
//Enter your 𝙈𝙞𝙩𝙕𝙪𝙠𝙮𝙮 𝘽𝙤𝙩 session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '𝙈𝙞𝙩𝙕𝙪𝙠𝙮𝙮 𝘽𝙤𝙩' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '94750255216' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'ᴠɪʙʜᴜ ᴘᴀᴛʜᴜᴍ' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "𝙈𝙞𝙩𝙕𝙪𝙠𝙮𝙮 𝘽𝙤𝙩" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "ᴍʀ ᴠɪʙʜᴜᴜ" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Accra" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©𝙈𝙞𝙩𝙕𝙪𝙠𝙮𝙮 𝘽𝙤𝙩"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © 𝙈𝙞𝙩𝙕𝙪𝙠𝙮𝙮 𝘽𝙤𝙩', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😞 

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ 𝙈𝙞𝙩𝙕𝙪𝙠𝙮𝙮 𝘽𝙤𝙩 ]----------------------//
