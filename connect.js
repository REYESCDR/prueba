/* =================================== \\
 * Direitos Autorais © [2023] tednexmart Conteúdos
 * Todos os direitos reservados do início a Nueva Generación - Aleatory Conteúdos, por motivo de desde sua primeira versão é usada a base do "Bot Aleatory", que nunca será ocultada, sempre está presente e sou grato por tudo ao desenvolvedor do Ale.
  * Leia o arquivo "LICENSE" para saber mais, sobre os termos de garantia e o que não pode ou pode fazer em sua construção.
// =================================== */

const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./exports.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, getRandom, NodeCache,insert, response } = require('./exports.js');

const { NomeDoBot, NickDono, prefix } = require("./settings/settings.json");

var { fundo1, fundo2 } = require("./settings/links_img.json");

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

const readline = require("readline");

const pairingCode = process.argv.includes("sim");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function iniciartednexmart() {
var folderUserAuth = "./database/tednexMart-qr";

const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);

const { version, isLatest } = await fetchLatestBaileysVersion();

const tednexmart = makeWASocket({
  version,
  auth: state,
  syncFullHistory: true,
  printQRInTerminal: !pairingCode,
  qrTimeout: 180000,
  logger: P({ level: 'silent' }),
  browser: ["Chrome (Linux)", "", ""],
  msgRetryCounterCache,
  connectTimeoutMs: 60000,
  defaultQueryTimeoutMs: 0,
  keepAliveIntervalMs: 10000,
  emitOwnEvents: true,
  fireInitQueries: true,
  generateHighQualityLinkPreview: true,
  syncFullHistory: true,
  markOnlineOnConnect: true,
  patchMessageBeforeSending: (message) => {
  const requiresPatch = !!(message.buttonsMessage || message.listMessage);
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
         message: {messageContextInfo: {
          deviceListMetadataVersion: 2,
          deviceListMetadata: 
          {},
       }, 
       ...message}}}}
   return message;
}
});

const PhoneNumber = require('awesome-phonenumber')

if (pairingCode && !tednexmart.authState.creds.registered) {
try {
let number = await question(`${colors.gray("Exemplo do número para realizar a conexão do bot: +55 82 9999-9999. (Coloque do jeito que está no WhatsApp)")}${colors.cyan("\n• Insira no parâmetro o número de telefone que você deseja conectar o bot: ")}`);
number = number.replace(/[^0-9]/g, "");
let code = await tednexmart.requestPairingCode(number);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.cyan("• Código para conectar o bot e desfrutar de suas imensas funcionalidades: ")}` + colors.white(code));
rl.close();
} catch(error) {
console.error('Falha ao solicitar o código de registro. Por favor, tente novamente.\n', error)
}
}

tednexmart.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var sab2 = events["group-participants.update"];
if(!fs.existsSync(`./database/grupos/activation_gp/${sab2.id}.json`)) return
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${sab2.id}.json`));

if(sab2.participants[0].startsWith(tednexmart.user.id.split(':')[0])) return;

try { var grpmdt = await tednexmart.groupMetadata(sab2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await tednexmart.groupMetadata(sab2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(sab2.action == 'add'){
num = sab2.participants[0];
if(nescessario.listanegraG.includes(num)){
await tednexmart.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban...'});
tednexmart.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
return;
}}
if(sab2.action == 'remove'){
num = sab2.participants[0];
}
if(sab2.action == 'add' && jsonGp[0].listanegra.includes(sab2.participants[0])){
await tednexmart.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban cabaço...'});
tednexmart.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && sab2.action === 'add' && !sab2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await tednexmart.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
tednexmart.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO - WELCOME! 🐢✨️
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await tednexmart.groupMetadata(sab2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !sab2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO! 
try {
ppimg = await tednexmart.profilePictureUrl(sab2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}
try {
ppgp = await tednexmart.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(sab2.action === 'add') {

if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+sab2.participants[0].split('@')[0])
.replace('#numerobot#', tednexmart.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(sab2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
ranBV = [`ao grupo ${encodeURI(mdata_2.subject)}`, `O membro ${sab2.participants[0].split('@')[0]} acaba de cair de paraquedas aqui no grupo...`, `Leia a descrição do grupo para passar um tempo aqui...`, `Minhas saudações a você, novo membro desconhecido.`, `Ih você é o novo membro? Te desejo boas vindas ao Hospício kkk!`, `Acaba de chegar + um de paraquedas aqui no grupo!`]
tednexmart.sendMessage(mdata_2.id, {image: {url:`https://tedzinho.online/api/canvas/welcome?titulo=Bem-vindo(a)!&perfil=${shortpc.data}&fundo=${fundo1}&desc=${ranBV[Math.floor(Math.random() * ranBV.length)]}`},
mentions: sab2.participants, caption: teks});
DLT_FL(ran);
} else if(sab2.action === 'remove') {
mem = sab2.participants[0];
try {
ppimg = await tednexmart.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', sab2.participants[0].split('@')[0])
.replace('#numerobot#', tednexmart.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(sab2.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
ranSI = [`${sab2.participants[0].split('@')[0]}`, `Nem gostava de você, eu só digo aleluia por tu ter saído :)`, `Nunca fui com a tua cara, digo glória por tu ter saído!`, `Eu te amo demais, volta pra cá. Aqui é teu lar!`, `Nada pra ver aqui, ele(a) saiu por um 'acidente'...`]
tednexmart.sendMessage(mdata_2.id, {image: {url:`https://tedzinho.online/api/canvas/welcome?titulo=Adeus!&perfil=${shortpc.data}&fundo=${fundo2}&desc=${ranSI[Math.floor(Math.random() * ranSI.length)]}`}, caption: teks, 
mentions: sab2.participants})
DLT_FL(ran)
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(sab2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', sab2.participants[0].split('@')[0])
.replace('#numerobot#', tednexmart.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(sab2.participants[0].split('@')[0], mdata_2.subject)
}
tednexmart.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
} else if(sab2.action === 'remove') {
var mem = sab2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', tednexmart.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
tednexmart.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, tednexmart)
}

if(events["connection.update"]) {
const update = events["connection.update"]; 
var { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
  console.log(colors.green("Você precisará de um 2° celular, para tirar foto do tednexMart-qr, para depois escanear a foto que tirou.."))
}  

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("[Error: 428] - Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente..."));
} else if(shouldReconnect == 401) {
exec("cd database && rm -rf tednexMart-qr")
console.log(colors.red("A autenticação com WhatsApp Web falhou! Por favor, reinicie e realize a autenticação novamente."))
} else if(shouldReconnect == 515) {
console.log(colors.gray("\nA autenticação foi bem sucedida! Restart necessário para estabilizar a conexão."))
} else if(shouldReconnect == 440) {
console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore..."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("[Error: 503] - Ocorreu um erro desconhecido ao executar o bot novamente ou sua primeira inicialização."));
} else if(shouldReconnect == 502) {
console.log(colors.grey("[Error: 502] - A conexão com a internet, está querendo cair..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("[Error: 408] - A conexão com a Internet atualmente está fraca..."))
} else {
console.log(colors.yellow(`[CONEXÃO CLOSED] - A conexão entre o WhatsApp foi fechada, por motivos de: ${lastDisconnect?.error}`))
};
iniciartednexmart();
}
break;

case 'connecting':
console.log(colors.yellow(`[BOT] Reconectando / Iniciando - ${date} ${time}`))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(`〔 - _ TED-BOT 𝐕𝟑 _ - CONECTADA COM SUCESSO... 〕`))
await tednexmart.sendPresenceUpdate("available")
await tednexmart.updateProfileStatus(`Olá meu nome é ${NomeDoBot}  Esse é meu prefix(${prefix})`)
break;

default:
break
}}

if(events["creds.update"]) {await saveCreds()};
require("./index.js")(tednexmart, folderUserAuth);
})}

iniciartednexmart().catch(async(e) => {console.log(colors.red("• ERROR: "+e))})