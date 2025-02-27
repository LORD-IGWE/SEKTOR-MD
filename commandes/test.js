"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🚀", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝚂𝙰𝙻𝚄𝚃 𝙹𝙴 𝙼\'𝙰𝙿𝙿𝙴𝙻𝙻𝙴 𝚃𝙴𝚁𝚁𝙰-𝙼𝙳 \n\n ' + '𝙹𝙴 𝚂𝚄𝙸𝚂 𝚄𝙽 𝙱𝙾𝚃 𝙼𝚄𝙻𝚃𝙸 𝙰𝙿𝙿𝙰𝚁𝙴𝙸𝙻𝙻𝙴';
    let d = ' 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙿𝙴𝚁 𝙿𝙰𝚁 𝙿𝙰𝙿𝙰 𝙸𝙶𝚆𝙴';
    let varmess = z + d;
    var img = 'https://i.ibb.co/pKBtz85/daddy-igwe.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://wallpapercave.com/uwp/uwp3842939.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
