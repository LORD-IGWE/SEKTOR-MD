const { zokou } = require('../framework/zokou');
const {ajouterUtilisateurAvecWarnCount , getWarnCountByJID , resetWarnCountByJID} = require('../bdd/warn')
const s = require("../set")


zokou(
    {
        nomCom : 'warn',
        categorie : 'Groupe'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser,verifGroupe,verifAdmin , msgRepondu , auteurMsgRepondu} = commandeOptions;
if(!verifGroupe ) {repondre('Vous avez pas acces a cette commandes en priver') ; return};

if(verifAdmin || superUser) {
   if(!msgRepondu){repondre('Mentionner la personne a avertir📍'); return};
   
   if (!arg || !arg[0] || arg.join('') === '') {
    await ajouterUtilisateurAvecWarnCount(auteurMsgRepondu)
   let warn = await getWarnCountByJID(auteurMsgRepondu)
   let warnlimit = s.WARN_COUNT
   
   if( warn >= warnlimit ) { await repondre('Cet utilisateur est un bandit , par consequent il sera retirer du groupe');
                zk.groupParticipantsUpdate(dest, [auteurMsgRepondu], "remove")
 } else { 

    var rest = warnlimit - warn ;
     repondre(`Cet utilisateur a un avertissement en plus dans sont casier judiciaire ; nombre d'avertissement restant : ${rest} `)
   }
} else if ( arg[0] === 'supp') { await resetWarnCountByJID(auteurMsgRepondu) 

    repondre("le nombre d'avertissement a été renitialiser pour cet utilisateur")} else ( repondre('mentionner en utilisant .warn ou .warn supp'))
   
}  else {
    repondre('tu es qui dans ce groupe,entk tout sauf admin ')
}
 
   });
