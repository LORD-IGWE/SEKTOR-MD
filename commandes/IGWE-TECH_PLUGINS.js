//base by igwetech 







const { zokou } = require("../framework/zokou");

const axios = require("axios");

const fs = require("fs");

const path = require("path");

// Commande de Calculatrice

zokou({ 

  nomCom: "calc",

  categorie: "IGWE-PLGNS",

  reaction: "🧮",

  desc: "Effectue des calculs mathématiques simples.",

  alias: ["calcul"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  if (!arg[0]) {

    return zk.sendMessage(origineMessage, { text: "Veuillez entrer une expression mathématique." });

  }

  const expression = arg.join(" ");

  try {

    const result = eval(expression);

    zk.sendMessage(origineMessage, { text: `Le résultat de ${expression} est ${result}.` });

  } catch (error) {

    zk.sendMessage(origineMessage, { text: "`Désolé, je n'ai pas pu calculer cette expression.`" });

  }

});

// Commande de Dictionnaire

zokou({ 

  nomCom: "def",

  categorie: "IGWE-PLGNS",

  reaction: "📖",

  desc: "Donne la définition d'un mot.",

  alias: ["definition"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  if (!arg[0]) {

    return zk.sendMessage(origineMessage, { text: "Veuillez spécifier un mot." });

  }

  const mot = arg[0];

  const url = `https://api.dictionaryapi.dev/api/v2/entries/fr/${mot}`;

  try {

    const response = await axios.get(url);

    const data = response.data[0];

    const definition = data.meanings[0].definitions[0].definition;

    zk.sendMessage(origineMessage, { text: `Définition de ${mot}: ${definition}` });

  } catch (error) {

    zk.sendMessage(origineMessage, { text: "Désolé, je n'ai pas pu trouver la définition de ce mot." });

  }

});

// Commande de Génération de Noms

zokou({ 

  nomCom: "namegen",

  categorie: "IGWE-PLGNS",

  reaction: "👤",

  desc: "Génère des noms aléatoires pour des personnages de jeux ou de romans.",

  alias: ["genname"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  const firstNames = ["Liora", "Thorne", "Elysia", "Kael", "Seraphine", "Rylan", "Aurelia", "Caspian", "Isolde", "Orion"];

  const lastNames = ["Smith", "Johnson", "Brown", "Taylor", "Miller", "Wilson", "Moore", "Anderson", "Thomas", "Jackson"];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];

  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  zk.sendMessage(origineMessage, { text: `Nom généré: ${randomFirstName} ${randomLastName}` });

});

// Commande Echo

zokou({ 

  nomCom: "echo",

  categorie: "IGWE-PLGNS",

  reaction: "🔊",

  desc: "Répète un texte un certain nombre de fois.",

  alias: ["repeat"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  if (!arg[0] || !arg[1]) {

    return zk.sendMessage(origineMessage, { text: "Veuillez spécifier un nombre et un texte." });

  }

  const count = parseInt(arg[0]);

  const text = arg.slice(1).join(" ");

  if (isNaN(count) || count <= 0) {

    return zk.sendMessage(origineMessage, { text: "Veuillez entrer un nombre valide." });

  }

  let responseText = "";

  for (let i = 0; i < count; i++) {

    responseText += `${text}\n`;

  }

  zk.sendMessage(origineMessage, { text: responseText });

});

// Commande de Génération de CV

zokou({ 

  nomCom: "gencv",

  categorie: "IGWE-PLGNS",

  reaction: "📄",

  desc: "Génère un CV basé sur les informations fournies par l'utilisateur.",

  alias: ["genresume"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  if (!arg[0]) {

    return zk.sendMessage(origineMessage, { text: "Veuillez fournir vos informations (nom, expérience, compétences)." });

  }

  const info = arg.join(" ");

  const cv = `CV de ${nomAuteurMessage}\n\nInformations:\n${info}\n\nExpérience:\n- Développeur Web chez XYZ Corp (2018-2020)\n- Consultant en technologie chez ABC Inc (2020-2022)\n\nCompétences:\n- JavaScript, Python, Java\n- HTML, CSS, React\n- Gestion de projet, Communication\n\nFormation:\n- Licence en Informatique, Université de XYZ (2015-2018)\n- Master en Gestion de Projets, Université de ABC (2018-2020)`;

  zk.sendMessage(origineMessage, { text: cv });

});

// Commande de Génération de Noms d'Entreprise

zokou({ 

  nomCom: "genbusiness_name",

  categorie: "IGWE-PLGNS",

  reaction: "🏢",

  desc: "Génère des noms d'entreprise aléatoires en demandant la catégorie.",

  alias: ["genbizname"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  if (!arg[0]) {

    return zk.sendMessage(origineMessage, { text: "Veuillez spécifier une catégorie (tech, finance, marketing, etc.)." });

  }

  const category = arg[0].toLowerCase();

  const businessNames = {

    tech: ["Innovate", "Tech", "Solutions", "NextGen", "Prime", "Elite", "Alpha"],

    finance: ["Capital", "Finance", "Invest", "Wealth", "Money", "Bank", "Fund"],

    marketing: ["Brand", "Marketing", "Promo", "Advertise", "Media", "Campaign", "Market"],

    health: ["Health", "Care", "Wellness", "Life", "Med", "Clinic", "Healthcare"]

  };

  if (!businessNames[category]) {

    return zk.sendMessage(origineMessage, { text: "Catégorie non reconnue. Veuillez choisir parmi tech, finance, marketing, health." });

  }

  const randomBusinessName = businessNames[category][Math.floor(Math.random() * businessNames[category].length)];

  zk.sendMessage(origineMessage, { text: `Nom d'entreprise généré: ${randomBusinessName} ${category.charAt(0).toUpperCase() + category.slice(1)}` });

});

// Commande de Météo

zokou({ 

  nomCom: "meteo",

  categorie: "IGWE-PLGNS",

  reaction: "🌤️",

  desc: "Donne la météo actuelle pour une ville.",

  alias: ["weather"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  if (!arg[0]) {

    return zk.sendMessage(origineMessage, { text: "Veuillez spécifier une ville." });

  }

  const ville = arg[0];

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${ville.latitude}&longitude=${ville.longitude}&current_weather=true&timezone=auto`;

  try {

    const response = await axios.get(url);

    const data = response.data;

    const temperature = data.current_weather.temperature;

    const windSpeed = data.current_weather.windspeed;

    const weatherCode = data.current_weather.weathercode;

    const weatherDescription = getWeatherDescription(weatherCode);

    const weatherInfo = `Météo à ${ville}:\nTempérature: ${temperature}°C\nVitesse du vent: ${windSpeed} m/s\nDescription: ${weatherDescription}`;

    zk.sendMessage(origineMessage, { text: weatherInfo });

  } catch (error) {

    zk.sendMessage(origineMessage, { text: "Désolé, je n'ai pas pu récupérer la météo pour cette ville." });

  }

});



function getWeatherDescription(weatherCode) {

  const weatherDescriptions = {

    0: "Ciel dégagé",

    1: "Principalement clair",

    2: "Partiellement nuageux",

    3: "Couvert",

    45: "Brouillard",

    48: "Brouillard givrant",

    51: "Bruine légère",

    53: "Bruine modérée",

    55: "Bruine dense",

    56: "Bruine verglaçante légère",

    57: "Bruine verglaçante dense",

    61: "Pluie légère",

    63: "Pluie modérée",

    65: "Pluie forte",

    66: "Pluie verglaçante légère",

    67: "Pluie verglaçante forte",

    71: "Chute de neige légère",

    73: "Chute de neige modérée",

    75: "Chute de neige forte",

    77: "Grains de neige",

    80: "Averses de pluie légères",

    81: "Averses de pluie modérées",

    82: "Averses de pluie violentes",

    85: "Averses de neige légères",

    86: "Averses de neige fortes",

    95: "Orage léger ou modéré",

    96: "Orage avec grêle légère",

    99: "Orage avec grêle forte"

  };

  return weatherDescriptions[weatherCode] || "Conditions météorologiques inconnues";

}

// Commande de Génération de Messages d'Amour

zokou({ 

  nomCom: "love_msg",

  categorie: "IGWE-PLGNS",

  reaction: "❤️",

  desc: "Génère des messages d'amour (demande si c'est pour une fille ou un garçon).",

  alias: ["lovemsg"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  if (!arg[0]) {

    return zk.sendMessage(origineMessage, { text: "Veuillez spécifier si c'est pour une fille ou un garçon." });

  }

  const gender = arg[0].toLowerCase();

  const loveMessages = {

    fille: [

      "Tu es la lumière de ma vie.",

      "Tu es mon plus grand bonheur.",

      "Je t'aime plus que tout au monde.",

      "Tu es mon étoile filante.",

      "Tu es ma raison de vivre.",

      "Tu es mon cœur et mon âme.",

      "Tu es mon rêve le plus cher.",

      "Tu es ma plus belle découverte.",

      "Tu es mon trésor le plus précieux.",

      "Tu es ma plus belle aventure.",

      "Tu es mon ange gardien.",

      "Tu es ma source d'inspiration.",

      "Tu es mon refuge.",

      "Tu es mon soutien.",

      "Tu es mon protecteur.",

      "Tu es mon guide.",

      "Tu es mon courage.",

      "Tu es mon force.",

      "Tu es mon inspiration.",

      "Tu es mon plus grand amour."

    ],

    garçon: [

      "Tu es mon igwe.",

      "Tu es mon rocher.",

      "Je t'aime plus que les mots ne peuvent dire.",

      "Tu es mon soutien.",

      "Tu es mon protecteur.",

      "Tu es mon guide.",

      "Tu es mon courage.",

      "Tu es mon force.",

      "Tu es mon inspiration.",

      "Tu es mon plus grand amour.",

      "Tu es mon ange gardien.",

      "Tu es ma source d'inspiration.",

      "Tu es mon refuge.",

      "Tu es ma raison de vivre.",

      "Tu es mon cœur et mon âme.",

      "Tu es mon rêve le plus cher.",

      "Tu es ma plus belle découverte.",

      "Tu es mon trésor le plus précieux.",

      "Tu es ma plus belle aventure.",

      "Tu es mon étoile filante."

    ]

  };

  if (!loveMessages[gender]) {

    return zk.sendMessage(origineMessage, { text: "Veuillez spécifier 'fille' ou 'garçon'." });

  }

  const randomLoveMessage = loveMessages[gender][Math.floor(Math.random() * loveMessages[gender].length)];

  zk.sendMessage(origineMessage, { text: randomLoveMessage });

});

// je m’attribue une commande🙂

zokou({ 

  nomCom: "igwe-tech",

  categorie: "IGWE-PLGNS",

  reaction: "💫",

  desc: "Affiche les informations sur l'auteur des commandes.",

  alias: ["it"]

}, async (origineMessage, zk, commandeOptions) => {

  const { ms, msgRepondu, arg, repondre, nomAuteurMessage } = commandeOptions;

  const info = `Je crée moi mm mes plugins si vous voulez me contacter ecrivez via WhatsApp : https://wa.me/24105730123`;

  zk.sendMessage(origineMessage, { text: info });

});
