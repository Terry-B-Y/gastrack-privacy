/**
 * GasTrack public site — i18n + motion (Task 53)
 * No frameworks. Relative paths only.
 */

const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_privacy: "Privacy",
    nav_terms: "Terms",
    home_badge: "Now on iOS & Android",
    home_headline_1: "Your vehicle,",
    home_headline_2: "under control.",
    home_sub:
      "GasTrack helps you track fuel, parking, maintenance, and real costs — with optional radar, social, and gamification. Built for drivers who want clarity, not clutter.",
    home_cta_ios: "App Store",
    home_cta_android: "Google Play",
    home_cta_beta: "Beta feedback",
    home_features_label: "What GasTrack does",
    home_feat1_title: "Fuel tracking",
    home_feat1_body: "Log fill-ups, odometer, and prices. See trends and budgets that reflect how you actually drive.",
    home_feat2_title: "Parking & maintenance",
    home_feat2_body: "Keep parking sessions and service history where they belong — next to your vehicle story.",
    home_feat3_title: "Real costs",
    home_feat3_body: "Understand spending beyond the pump: recurring costs, insights, and the full picture of ownership.",
    home_feat4_title: "Radar",
    home_feat4_body: "Compare nearby prices where data is available, so you can choose when and where to fill up.",
    home_feat5_title: "Social",
    home_feat5_body: "Optional social layer: friends, feed, and shared context — only if you want it.",
    home_feat6_title: "Gamification",
    home_feat6_body: "Achievements and streaks that reward consistency, without losing sight of real numbers.",
    home_contact_label: "Contact",
    home_contact_title: "We’re here to help",
    home_contact_body:
      "Questions about GasTrack, your data, or beta access? Reach out — we read every message.",
    privacy_title: "GasTrack — Privacy Policy",
    privacy_updated: "Last updated: 5 April 2026",
    privacy_intro:
      'This policy describes how <strong>GasTrack</strong> (\u201Cthe app\u201D) handles personal information when you use our mobile application. GasTrack is operated by an independent developer (as shown on the App Store and Google Play). If you have questions, contact us at <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>.',
    terms_title: "GasTrack — Terms of Service",
    terms_updated: "Last updated: 16 April 2026",
    terms_intro:
      "These terms govern your use of the GasTrack mobile application. By downloading or using GasTrack, you agree to these terms and to our Privacy Policy.",
    footer_copy: "© 2026 GasTrack. All rights reserved.",
  },
  it: {
    nav_home: "Home",
    nav_privacy: "Privacy",
    nav_terms: "Termini",
    home_badge: "Disponibile su iOS e Android",
    home_headline_1: "Il tuo veicolo,",
    home_headline_2: "sotto controllo.",
    home_sub:
      "GasTrack ti aiuta a monitorare carburante, parcheggi, manutenzione e costi reali — con radar, social e gamification opzionali. Pensato per chi vuole chiarezza.",
    home_cta_ios: "App Store",
    home_cta_android: "Google Play",
    home_cta_beta: "Feedback beta",
    home_features_label: "Cosa fa GasTrack",
    home_feat1_title: "Monitoraggio carburante",
    home_feat1_body: "Registra rifornimenti, contachilometri e prezzi. Vedi andamenti e budget legati a come guidi davvero.",
    home_feat2_title: "Parcheggi e manutenzione",
    home_feat2_body: "Tieni sessioni di parcheggio e storico interventi accanto alla storia del veicolo.",
    home_feat3_title: "Costi reali",
    home_feat3_body: "Comprendi le spese oltre al distributore: costi ricorrenti, insights e il quadro completo.",
    home_feat4_title: "Radar",
    home_feat4_body: "Confronta prezzi nelle vicinanze dove i dati sono disponibili, per scegliere quando e dove fare rifornimento.",
    home_feat5_title: "Social",
    home_feat5_body: "Social opzionale: amici, feed e contesto condiviso — solo se lo desideri.",
    home_feat6_title: "Gamification",
    home_feat6_body: "Obiettivi e serie che premiano la costanza, senza perdere di vista i numeri reali.",
    home_contact_label: "Contatti",
    home_contact_title: "Siamo qui per aiutarti",
    home_contact_body:
      "Domande su GasTrack, i tuoi dati o l’accesso beta? Scrivici: leggiamo ogni messaggio.",
    privacy_title: "GasTrack — Informativa sulla privacy",
    privacy_updated: "Ultimo aggiornamento: 5 aprile 2026",
    privacy_intro:
      'Questa informativa descrive come <strong>GasTrack</strong> (“l’app”) tratta i dati personali quando usi la nostra applicazione mobile. GasTrack è gestita da uno sviluppatore indipendente (come indicato su App Store e Google Play). Per domande, contattaci a <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>.',
    terms_title: "GasTrack — Termini di servizio",
    terms_updated: "Ultimo aggiornamento: 16 aprile 2026",
    terms_intro:
      "Questi termini disciplinano l’uso dell’app mobile GasTrack. Scaricando o usando GasTrack, accetti questi termini e la nostra Informativa sulla privacy.",
    footer_copy: "© 2026 GasTrack. Tutti i diritti riservati.",
  },
  fr: {
    nav_home: "Accueil",
    nav_privacy: "Confidentialité",
    nav_terms: "Conditions",
    home_badge: "Disponible sur iOS et Android",
    home_headline_1: "Votre véhicule,",
    home_headline_2: "sous contrôle.",
    home_sub:
      "GasTrack vous aide à suivre le carburant, le stationnement, l’entretien et les coûts réels — avec radar, social et gamification en option. Conçu pour la clarté.",
    home_cta_ios: "App Store",
    home_cta_android: "Google Play",
    home_cta_beta: "Retour bêta",
    home_features_label: "Ce que fait GasTrack",
    home_feat1_title: "Suivi du carburant",
    home_feat1_body:
      "Enregistrez les pleins, l’odomètre et les prix. Visualisez tendances et budgets alignés sur votre usage réel.",
    home_feat2_title: "Parking et entretien",
    home_feat2_body:
      "Conservez sessions de stationnement et historique d’entretien au bon endroit — à côté de l’histoire du véhicule.",
    home_feat3_title: "Coûts réels",
    home_feat3_body:
      "Comprenez les dépenses au-delà de la pompe : coûts récurrents, analyses et vision complète de la possession.",
    home_feat4_title: "Radar",
    home_feat4_body:
      "Comparez les prix à proximité lorsque les données sont disponibles, pour choisir quand et où faire le plein.",
    home_feat5_title: "Social",
    home_feat5_body:
      "Couche sociale optionnelle : amis, fil et contexte partagé — seulement si vous le souhaitez.",
    home_feat6_title: "Gamification",
    home_feat6_body:
      "Succès et séries qui récompensent l’assiduité, sans perdre de vue les chiffres réels.",
    home_contact_label: "Contact",
    home_contact_title: "Nous sommes là pour vous aider",
    home_contact_body:
      "Questions sur GasTrack, vos données ou l’accès bêta ? Écrivez-nous — nous lisons chaque message.",
    privacy_title: "GasTrack — Politique de confidentialité",
    privacy_updated: "Dernière mise à jour : 5 avril 2026",
    privacy_intro:
      'Cette politique décrit comment <strong>GasTrack</strong> (« l’application ») traite les informations personnelles lorsque vous utilisez notre application mobile. GasTrack est exploitée par un développeur indépendant (comme indiqué sur l’App Store et Google Play). Pour toute question, contactez-nous à <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>.',
    terms_title: "GasTrack — Conditions d’utilisation",
    terms_updated: "Dernière mise à jour : 16 avril 2026",
    terms_intro:
      "Les présentes conditions régissent votre utilisation de l’application mobile GasTrack. En téléchargeant ou en utilisant GasTrack, vous acceptez ces conditions et notre Politique de confidentialité.",
    footer_copy: "© 2026 GasTrack. Tous droits réservés.",
  },
};

let currentLang = localStorage.getItem("gt_lang") || "en";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("gt_lang", lang);
  applyTranslations();
  updateLangButtons();
}

function applyTranslations() {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.dataset.i18n;
    if (!key) return;
    const val = dict[key] ?? TRANSLATIONS.en[key] ?? "";
    if (el.dataset.i18nHtml === "true") {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
}

function updateLangButtons() {
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function initAnimations() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in").forEach(function (el) {
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  applyTranslations();
  updateLangButtons();
  initAnimations();
  setTimeout(function () {
    document.querySelectorAll(".hero .fade-in").forEach(function (el) {
      el.classList.add("visible");
    });
  }, 100);
});

window.setLang = setLang;
