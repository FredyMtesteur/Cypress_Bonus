const { defineConfig } = require("cypress");

// Paramètres de config appliqués dans cypress open menu (gauche) Settings / Project settings
module.exports = defineConfig({
  projectId: 'hvecb1',
  e2e: {
    chromeWebSecurity: false,
    baseUrl: null, // Possibilité de mettre une base d'url par défaut pour visiter le site
    watchForFileChanges: true, // Relance la suite de test à chaque suavegarde du script
    retries: {
      openMode: 0, // Relance 2x la suite de test si paramètre =2 (au lieu de 0) en mode open
      runMode: 0, // Relance 2x la suite de test si paramètre =2 (au lieu de 0) en mode run
    },
    defaultCommandTimeout: 4000, // Timeout erreur par défaut en ms
  },
});
