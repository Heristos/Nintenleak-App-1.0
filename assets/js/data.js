// data.js

// Liste de liens avec leurs mots-clés associés et descriptifs
const keywordLinks = [
    
    // Home Page
    
    { keywords: ["google.com", "principal", "bienvenue", "home", "accueil", "accueil en ligne", "bienvenue en ligne", "home page", "interface principale", "retour à l'accueil", "menu principal"], title: "Accueil", url: "index.html", description: "Page d'accueil de Nintenleak" },
    
    // Mise à jour
    
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "Information", "info"], title: "Liste des Mises à jour", url: "./html/update/update.html", description: "Liste des dernières mises à jour disponibles." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "1.0", "Update 1.0", "Mise 1.0", "Maj 1.0", "Up 1.0", "jour 1.0", "Mise à jour 1.0", "v1.0", "info 1.0", "Up 1.0", "Mise 1.0"], title: "Mise à jour 1.0", url: "./html/update/update1.0.html", description: "Détails de la mise à jour 1.0 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.8", "Update 2.8", "Mise 2.8", "Maj 2.8", "Up 2.8", "jour 2.8", "Mise à jour 2.8", "v2.8", "info 2.8", "Up 2.8", "Mise 2.8", "BETA", "beta"], title: "Mise à jour BETA 2.8", url: "./html/update/updatebeta2.8.html", description: "Détails de la mise à jour BETA 2.8 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.7", "Update 2.7", "Mise 2.7", "Maj 2.7", "Up 2.7", "jour 2.7", "Mise à jour 2.7", "v2.7", "info 2.7", "Up 2.7", "Mise 2.7", "BETA", "beta"], title: "Mise à jour BETA 2.7", url: "./html/update/updatebeta2.7.html", description: "Détails de la mise à jour BETA 2.7 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.6", "Update 2.6", "Mise 2.6", "Maj 2.6", "Up 2.6", "jour 2.6", "Mise à jour 2.6", "v2.6", "info 2.6", "Up 2.6", "Mise 2.6", "BETA", "beta"], title: "Mise à jour BETA 2.6", url: "./html/update/updatebeta2.6.html", description: "Détails de la mise à jour BETA 2.6 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.5", "Update 2.5", "Mise 2.5", "Maj 2.5", "Up 2.5", "jour 2.5", "Mise à jour 2.5", "v2.5", "info 2.5", "Up 2.5", "Mise 2.5", "BETA", "beta"], title: "Mise à jour BETA 2.5", url: "./html/update/updatebeta2.5.html", description: "Détails de la mise à jour BETA 2.5 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.4", "Update 2.4", "Mise 2.4", "Maj 2.4", "Up 2.4", "jour 2.4", "Mise à jour 2.4", "v2.4", "info 2.4", "Up 2.4", "Mise 2.4", "BETA", "beta"], title: "Mise à jour BETA 2.4", url: "./html/update/updatebeta2.4.html", description: "Détails de la mise à jour BETA 2.4 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.3", "Update 2.3", "Mise 2.3", "Maj 2.3", "Up 2.3", "jour 2.3", "Mise à jour 2.3", "v2.3", "info 2.3", "Up 2.3", "Mise 2.3", "BETA", "beta"], title: "Mise à jour BETA 2.3", url: "./html/update/updatebeta2.3.html", description: "Détails de la mise à jour BETA 2.3 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.2", "Update 2.2", "Mise 2.2", "Maj 2.2", "Up 2.2", "jour 2.2", "Mise à jour 2.2", "v2.2", "info 2.2", "Up 2.2", "Mise 2.2", "BETA", "beta"], title: "Mise à jour BETA 2.2", url: "./html/update/updatebeta2.2.html", description: "Détails de la mise à jour BETA 2.2 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.1", "Update 2.1", "Mise 2.1", "Maj 2.1", "Up 2.1", "jour 2.1", "Mise à jour 2.1", "v2.1", "info 2.1", "Up 2.1", "Mise 2.1", "BETA", "beta"], title: "Mise à jour BETA 2.1", url: "./html/update/updatebeta2.1.html", description: "Détails de la mise à jour BETA 2.1 de notre service." },
    { keywords: ["google.com", "Update", "Mise", "Maj", "Up", "jour", "Mise à jour", "2.0", "Update 2.0", "Mise 2.0", "Maj 2.0", "Up 2.0", "jour 2.0", "Mise à jour 2.0", "v2.0", "info 2.0", "Up 2.0", "Mise 2.0", "BETA", "beta"], title: "Mise à jour BETA 2.0", url: "./html/update/updatebeta2.0.html", description: "Détails de la mise à jour BETA 2.0 de notre service." },
    
    // Roms Liste Console Fix
    
    { keywords: ["google.com", "wii u", "roms", "console", "roms wii u", "wii u roms", "console wii u","wiiu", "roms wiiu", "wiiu roms", "console wiiu", "dolphin"], title: "Nintendo Wii U Roms", url: "roms/wiiu/wiiu000.html", description: "Page Roms de la Nintendo Wii U" },
    { keywords: ["google.com", "wii", "roms", "console", "roms wii", "wii roms", "console wii"], title: "Nintendo Wii Roms", url: "roms/wii/wii000.html", description: "Page Roms de la Nintendo Wii" },
    { keywords: ["google.com", "switch", "roms", "console", "roms switch", "gamecube roms", "console switch"], title: "Nintendo Gamecube Roms", url: "roms/gamecube/gamecube000.html", description: "Page Roms de la Nintendo Gamecube" },
    { keywords: ["google.com", "nintendo 64", "roms", "console", "roms nintendo 64", "nintendo 64 roms", "console nintendo 64", "n64", "nin 64", "super 64", "ultra 64", "ultra64"], title: "Nintendo 64", url: "roms/n64/n64000.html", description: "Page Roms de la Nintendo 64" },
    { keywords: ["google.com", "snes", "roms", "console", "roms snes", "snes roms", "console snes", "super", "nintendo", "entrainement", "systeme"], title: "SNES", url: "roms/snes/snes000.html", description: "Page Roms de la SNES" },
    { keywords: ["google.com", "nes", "roms", "console", "roms nes", "nes roms", "console nes", "nintendo", "entrainement", "systeme"], title: "NES", url: "roms/nes/nes000.html", description: "Page Roms de la NES" },
    
    // Roms Liste Console Portable
    
    { keywords: ["google.com", "switch", "roms", "console", "roms switch", "switch roms", "console switch"], title: "Nintendo Switch Roms", url: "roms/switch/switch000.html", description: "Page Roms de la Nintendo Switch" },
    { keywords: ["google.com", "3ds", "roms", "console", "roms 3ds", "3ds roms", "console 3ds"], title: "Nintendo 3DS Roms", url: "roms/3ds/3ds000.html", description: "Page Roms de la Nintendo 3DS" },
    { keywords: ["google.com", "ds", "roms", "console", "dsi", "roms ds", "roms dsi", "ds roms", "dsi roms", "console ds", "console dsi"], title: "Nintendo DS/DSi Roms", url: "roms/dsdsi/dsdsi000.html", description: "Page Roms de la Nintendo DS/DSi" },
    { keywords: ["google.com", "game", "roms", "console", "boy", "advance", "game boy advance", "roms game boy advance", "game boy advance roms", "console game boy advance"], title: "Game Boy Advance Roms", url: "roms/gba/gba000.html", description: "Page Roms de la Game Boy Advance" },
    { keywords: ["google.com", "game", "roms", "console", "boy", "color", "game boy color", "roms game boy color", "game boy color roms", "console game boy color"], title: "Game Boy Color Roms", url: "roms/gbc/gbc000.html", description: "Page Roms de la Game Boy Color" },
    { keywords: ["google.com", "game", "roms", "console", "boy", "game boy", "roms game boy", "game boy roms", "console game boy"], title: "Game Boy Roms", url: "roms/gb/gb000.html", description: "Page Roms de la Game Boy" },
    
    // Roms Liste Other
    
    { keywords: ["google.com", "game", "boy", "roms", "console", "micro", "game boy micro", "roms game boy micro", "game boy micro roms", "console game boy micro"], title: "Game Boy Micro Roms", url: "roms/gbm/gbm000.html", description: "Page Roms de la Game Boy Micro" },
    { keywords: ["google.com", "game", "boy", "roms", "console", "advance", "sp", "game boy advance sp", "roms game boy advance sp", "game boy advance sp roms", "console game boy advance sp"], title: "Game Boy Advance SP Roms", url: "roms/gbasp/gbasp000.html", description: "Page Roms de la Game Boy Advance SP" },

    // Roms

    // Switch
        { keywords: ["google.com", "roms", "switch", "hyrule", "warriors", "calamity", "age", "hyrule warriors age of calamity", "jeux switch", "nintendo switch"], title: "Hyrule Warriors Age of Calamity - Nintendo Switch", url: "html/roms/switch/games/hyrule_warriors_age_of_calamity_switch/hyrule_warriors_age_of_calamity_switch.html", description: "Page Roms du jeu Hyrule Warriors Age of Calamity" },
        { keywords: ["google.com", "roms", "switch", "kirby", "forgotten", "land", "kirby and the forgotten land", "jeux switch", "nintendo switch"], title: "Kirby and the Forgotten Land - Nintendo Switch", url: "html/roms/switch/games/kirby_and_the_forgotten_land_switch/kirby_and_the_forgotten_land_switch.html", description: "Page Roms du jeu Kirby and the Forgotten Land" },
        { keywords: ["google.com", "roms", "switch", "kirby", "forgotten", "land", "kirby and the forgotten land", "jeux switch", "nintendo switch"], title: "Luigi's Mansion 3 - Nintendo Switch", url: "html/roms/switch/games/luigi_mansion_3_switch/luigi_mansion_3_switch.html", description: "Page Roms du jeu Luigi's Mansion 3" },

    // Wii
        { keywords: ["google.com", "roms", "wii", "animal", "crossing", "city", "folk", "animal crossing city folk", "jeux wii", "nintendo wii"], title: "Animal Crossing City Folk - Nintendo Wii", url: "html/roms/wii/games/animal_crossing_city_folk_wii/animal_crossing_city_folk_wii.html", description: "Page Roms du jeu Animal Crossing City Folk" },
        { keywords: ["google.com", "roms", "wii", "colin", "mcrae", "dirt", "2", "colin mcrae dirt 2", "jeux wii", "nintendo wii"], title: "Colin Mcrae - Dirt 2 - Nintendo Wii", url: "html/roms/wii/games/colin_mcrae_dirt_2_wii/colin_mcrae_dirt_2_wii.html", description: "Page Roms du jeu Colin Mcrae - Dirt 2" },
        { keywords: ["google.com", "roms", "wii", "donkey", "kong", "country", "returns", "donkey kong country returns", "jeux wii", "nintendo wii"], title: "Donkey Kong Country Returns - Nintendo Wii", url: "html/roms/wii/games/donkey_kong_country_returns_wii/donkey_kong_country_returns_wii.html", description: "Page Roms du jeu Donkey Kong Country Returns" },
];

// Exporter keywordLinks pour qu'il soit accessible depuis un autre fichier
module.exports = keywordLinks;
