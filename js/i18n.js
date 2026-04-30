/**
 * GasTrack public site — i18n + motion (Task 53)
 * No frameworks. Relative paths only.
 */

const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_privacy: "Privacy",
    nav_terms: "Terms",
    home_badge: "Italy · Closed beta",
    home_headline_1: "Your vehicle,",
    home_headline_2: "under control.",
    home_sub:
      "GasTrack helps you track fuel, parking, maintenance, and real costs — with optional radar, social, and gamification. Built for drivers who want clarity, not clutter. The app is in a <strong>closed beta</strong> (not a public store listing yet). Use the <strong>beta request form</strong> on this site to ask to be added. Focus is <strong>Italy</strong> for now; other countries may follow.",
    home_meta_description:
      "GasTrack — fuel, parking, maintenance, and real costs. Request closed beta access via the form on gastrack.eu (Italy first). Not publicly listed in stores yet.",
    home_cta_primary: "Request beta access",
    home_cta_secondary: "Beta feedback",
    home_features_label: "What GasTrack does",
    home_feat1_title: "Fuel tracking",
    home_feat1_body:
      "Log every fill-up, track consumption, and spot trends. Supports petrol, diesel, LPG, methane, electric, and hybrid vehicles.",
    home_feat2_title: "Parking & maintenance",
    home_feat2_body:
      "Never lose track of a parking session or service record. GasTrack keeps your full vehicle history in one place.",
    home_feat3_title: "Real costs",
    home_feat3_body:
      "See what your vehicle actually costs per month — fuel, insurance, tax, finance, maintenance, all in one dashboard.",
    home_feat4_title: "Radar",
    home_feat4_body:
      "Find nearby fuel stations with live prices and community ratings. Fuel Radar is aimed at <strong>Italy</strong> first during beta; more countries may be added after a wider release.",
    home_feat5_title: "Social",
    home_feat5_body:
      "Compare efficiency with friends, share achievements, and see how your driving stacks up.",
    home_feat6_title: "Gamification",
    home_feat6_body:
      "Earn XP, level up, and unlock achievements as you track your vehicle. Staying on top of costs has never been this satisfying.",
    home_contact_label: "Contact",
    home_contact_title: "Questions or feedback?",
    home_contact_body:
      "GasTrack is built by an independent developer. Use the <strong>beta access form</strong> to request an invite, or email us for anything else — we read every message.",
    home_contact_linkedin: "LinkedIn",

    beta_meta_title: "GasTrack — Request beta access",
    beta_meta_description:
      "Apply for the GasTrack closed beta. Provide your details and confirm the Terms, Privacy, and beta limitations.",

    beta_back: "← Back to home",
    beta_eyebrow: "CLOSED BETA",
    beta_title: "Request beta access",
    beta_intro_html:
      "<p>Use this form to ask to join the <strong>closed beta</strong>. We read every request. We may email you if a spot opens. This creates <strong>no obligation</strong> on either side — it is only a request to be considered.</p>",
    beta_notice_html:
      "<p><strong>What we use your answers for:</strong> we use what you submit here only to decide whether to invite you to the beta and to reply at the email you give. Full details are in our <a href=\"https://gastrack.eu/privacy.html\" target=\"_blank\" rel=\"noopener noreferrer\">Privacy Policy</a>.</p><p><strong>Plain language, not legal advice:</strong> if you need advice for your situation, speak to a qualified professional.</p>",

    beta_label_first_name: "First name",
    beta_label_surname: "Surname",
    beta_label_email: "Email address",
    beta_label_why: "Why do you want to join? (helps us prioritise)",
    beta_placeholder_why: "e.g. I drive in Italy and want to track fuel; I am happy to report bugs…",

    beta_consent_html:
      'I have read and agree to the <a href="https://gastrack.eu/terms.html" target="_blank" rel="noopener noreferrer">Terms of Service</a> and the <a href="https://gastrack.eu/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. I understand that GasTrack is <strong>beta software</strong>: it may be incomplete, unstable, or change without notice; there are <strong>no warranties</strong> of any kind; data loss or errors are possible; and there is <strong>no guarantee</strong> of availability, features, or support. I am joining voluntarily. I consent to the operator using my details only to assess this request and to contact me about beta access, as explained in the Privacy Policy. I confirm that the information I provide is accurate to the best of my knowledge.',

    beta_submit: "Submit request",
    beta_success_title: "Request received",
    beta_success_body:
      "Thank you. If we can offer you beta access, we will contact you at the email address you provided. We cannot reply to every submission.",
    beta_success_footer: "Questions? support.gastrack@gmail.com",

    privacy_title: "GasTrack — Privacy Policy",
    privacy_updated: "Last updated: 5 April 2026",
    privacy_intro:
      'This policy describes how <strong>GasTrack</strong> (\u201Cthe app\u201D) handles personal information when you use our mobile application. GasTrack is operated by <strong>Terry Boakye Yiadom</strong>, sole author. Distribution is currently a <strong>closed beta</strong> (not a public store listing yet). If you have questions, contact us at <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>.',
    terms_title: "GasTrack — Terms of Service",
    terms_updated: "Last updated: 16 April 2026",
    terms_intro:
      "These terms govern your use of the GasTrack mobile application. By downloading or using GasTrack, you agree to these terms and to our Privacy Policy.",
    delete_meta_title: "GasTrack — Delete account",
    delete_back: "← Back to home",
    delete_eyebrow: "REQUEST ACCOUNT DELETION",
    delete_title: "Delete your GasTrack account",
    delete_subtitle:
      "Submitting this form sends a deletion request to our team. We will permanently delete your account and all associated data within 30 days of receiving your request.",
    delete_what_label: "What will be deleted:",
    delete_what_1: "Your account and login credentials",
    delete_what_2: "All vehicles and fuel logs",
    delete_what_3: "Parking and maintenance history",
    delete_what_4: "Financial data and settings",
    delete_what_5: "Social profile, friends, and feed posts",
    delete_what_6: "Achievements and XP",
    delete_warning: "This action is irreversible. Once deleted, your data cannot be recovered.",
    delete_email_label: "Your email address",
    delete_email_placeholder: "email@example.com",
    delete_reason_label: "Reason (optional)",
    delete_reason_placeholder: "Select a reason",
    delete_reason_1: "I no longer use the app",
    delete_reason_2: "Privacy concerns",
    delete_reason_3: "Switching to another app",
    delete_reason_4: "Other",
    delete_notes_label: "Additional notes (optional)",
    delete_notes_placeholder: "Any additional information…",
    delete_submit: "Submit deletion request",
    delete_success_title: "Request received",
    delete_success_intro: "We've received your deletion request for",
    delete_success_body:
      "Your account and all associated data will be permanently deleted within 30 days.",
    delete_success_note:
      "You'll receive a confirmation at that email address once the deletion is complete.",
    delete_success_footer: "If you have questions: support.gastrack@gmail.com",
    delete_in_app:
      "Already have the app? You can delete your account directly in Settings → Account → Delete account for immediate deletion.",
    footer_beta_access: "Beta access",
    footer_delete_account: "Delete account",
    footer_copy: "© 2025–2026 GasTrack. All rights reserved.",
  },
  it: {
    nav_home: "Home",
    nav_privacy: "Privacy",
    nav_terms: "Termini",
    home_badge: "Italia · Beta chiusa",
    home_headline_1: "Il tuo veicolo,",
    home_headline_2: "sotto controllo.",
    home_sub:
      "GasTrack ti aiuta a monitorare carburante, parcheggi, manutenzione e costi reali — con radar, social e gamification opzionali. Pensato per chi vuole chiarezza. L’app è in <strong>beta chiusa</strong> (non ancora in store pubblico). Usa il <strong>modulo per richiedere la beta</strong> su questo sito. Focus sull’<strong>Italia</strong> per ora; altri Paesi potranno seguire.",
    home_meta_description:
      "GasTrack — carburante, parcheggio, manutenzione e costi reali. Richiedi la beta chiusa tramite il modulo su gastrack.eu (prima l’Italia). Non ancora in store pubblico.",
    home_cta_primary: "Richiedi accesso beta",
    home_cta_secondary: "Feedback beta",
    home_features_label: "Cosa fa GasTrack",
    home_feat1_title: "Monitoraggio carburante",
    home_feat1_body:
      "Registra ogni rifornimento, monitora i consumi e individua le tendenze. Supporta benzina, diesel, GPL, metano, elettrico e ibrido.",
    home_feat2_title: "Parcheggi e manutenzione",
    home_feat2_body:
      "Non perdere mai traccia di una sosta o di un intervento. GasTrack conserva la cronologia completa del tuo veicolo in un unico posto.",
    home_feat3_title: "Costi reali",
    home_feat3_body:
      "Scopri quanto ti costa davvero il veicolo ogni mese — carburante, assicurazione, tasse, finanziamento, manutenzione, tutto in una dashboard.",
    home_feat4_title: "Radar",
    home_feat4_body:
      "Trova le stazioni di servizio vicino a te con prezzi in tempo reale e valutazioni della community. Il Radar carburante punta prima all’<strong>Italia</strong> durante la beta; altri Paesi dopo un rilascio più ampio.",
    home_feat5_title: "Social",
    home_feat5_body:
      "Confronta i consumi con gli amici, condividi traguardi e scopri come guidi rispetto agli altri.",
    home_feat6_title: "Gamification",
    home_feat6_body:
      "Guadagna XP, sali di livello e sblocca achievement mentre tieni traccia del tuo veicolo. Non è mai stato così soddisfacente.",
    home_contact_label: "Contatti",
    home_contact_title: "Domande o feedback?",
    home_contact_body:
      "GasTrack è sviluppato da uno sviluppatore indipendente. Usa il <strong>modulo accesso beta</strong> per chiedere un invito, oppure scrivici per qualsiasi altra cosa — leggiamo ogni messaggio.",
    home_contact_linkedin: "LinkedIn",

    beta_meta_title: "GasTrack — Richiedi accesso beta",
    beta_meta_description:
      "Richiedi la beta chiusa di GasTrack. Inserisci i tuoi dati e conferma Termini, Privacy e limiti della beta.",

    beta_back: "← Torna alla home",
    beta_eyebrow: "BETA CHIUSA",
    beta_title: "Richiedi accesso beta",
    beta_intro_html:
      "<p>Usa questo modulo per chiedere di entrare nella <strong>beta chiusa</strong>. Leggiamo ogni richiesta. Potremmo scriverti se si libera un posto. <strong>Nessun obbligo</strong> per te o per noi — è solo una richiesta di valutazione.</p>",
    beta_notice_html:
      "<p><strong>A cosa servono i dati:</strong> usiamo quanto invii solo per valutare se invitarti alla beta e per risponderti all’indirizzo email indicato. I dettagli completi sono nell’<a href=\"https://gastrack.eu/privacy.html\" target=\"_blank\" rel=\"noopener noreferrer\">Informativa sulla privacy</a>.</p><p><strong>Linguaggio semplice, non parere legale:</strong> per la tua situazione specifica rivolgiti a un professionista qualificato.</p>",

    beta_label_first_name: "Nome",
    beta_label_surname: "Cognome",
    beta_label_email: "Indirizzo email",
    beta_label_why: "Perché vuoi entrare? (ci aiuta a dare priorità)",
    beta_placeholder_why: "es. Guido in Italia e voglio tracciare i rifornimenti; posso segnalare bug…",

    beta_consent_html:
      'Ho letto e accetto i <a href="https://gastrack.eu/terms.html" target="_blank" rel="noopener noreferrer">Termini di servizio</a> e l’<a href="https://gastrack.eu/privacy.html" target="_blank" rel="noopener noreferrer">Informativa sulla privacy</a>. Comprendo che GasTrack è <strong>software in beta</strong>: può essere incompleto, instabile o cambiare senza preavviso; <strong>non ci sono garanzie</strong> di alcun tipo; possono verificarsi perdite di dati o errori; e <strong>non è garantita</strong> disponibilità, funzionalità o assistenza. Partecipo volontariamente. Acconsento che l’operatore usi i miei dati solo per valutare questa richiesta e contattarmi per l’accesso alla beta, come spiegato nell’Informativa sulla privacy. Dichiaro che le informazioni fornite sono, a mia conoscenza, veritiere.',

    beta_submit: "Invia richiesta",
    beta_success_title: "Richiesta ricevuta",
    beta_success_body:
      "Grazie. Se potremo offrirti l’accesso alla beta, ti contatteremo all’indirizzo email indicato. Non possiamo rispondere a tutte le richieste.",
    beta_success_footer: "Domande? support.gastrack@gmail.com",

    privacy_title: "GasTrack — Informativa sulla privacy",
    privacy_updated: "Ultimo aggiornamento: 5 aprile 2026",
    privacy_intro:
      'Questa informativa descrive come <strong>GasTrack</strong> (“l’app”) tratta i dati personali quando usi la nostra applicazione mobile. GasTrack è gestita da <strong>Terry Boakye Yiadom</strong>, unico autore. La distribuzione è attualmente una <strong>beta chiusa</strong> (non ancora scheda store pubblica). Per domande, contattaci a <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>.',
    terms_title: "GasTrack — Termini di servizio",
    terms_updated: "Ultimo aggiornamento: 16 aprile 2026",
    terms_intro:
      "Questi termini disciplinano l’uso dell’app mobile GasTrack. Scaricando o usando GasTrack, accetti questi termini e la nostra Informativa sulla privacy.",
    delete_meta_title: "GasTrack — Elimina account",
    delete_back: "← Torna alla home",
    delete_eyebrow: "RICHIESTA DI ELIMINAZIONE ACCOUNT",
    delete_title: "Elimina il tuo account GasTrack",
    delete_subtitle:
      "Inviando questo modulo invii una richiesta di eliminazione al nostro team. Elimineremo permanentemente il tuo account e tutti i dati associati entro 30 giorni dalla ricezione della richiesta.",
    delete_what_label: "Cosa verrà eliminato:",
    delete_what_1: "Il tuo account e le credenziali di accesso",
    delete_what_2: "Tutti i veicoli e i rifornimenti",
    delete_what_3: "Cronologia parcheggi e manutenzioni",
    delete_what_4: "Dati finanziari e impostazioni",
    delete_what_5: "Profilo social, amici e post",
    delete_what_6: "Achievement e XP",
    delete_warning: "Questa azione è irreversibile. Una volta eliminati, i dati non possono essere recuperati.",
    delete_email_label: "Il tuo indirizzo email",
    delete_email_placeholder: "email@esempio.com",
    delete_reason_label: "Motivo (opzionale)",
    delete_reason_placeholder: "Seleziona un motivo",
    delete_reason_1: "Non uso più l'app",
    delete_reason_2: "Preoccupazioni per la privacy",
    delete_reason_3: "Passaggio a un'altra app",
    delete_reason_4: "Altro",
    delete_notes_label: "Note aggiuntive (opzionale)",
    delete_notes_placeholder: "Ulteriori informazioni…",
    delete_submit: "Invia richiesta di eliminazione",
    delete_success_title: "Richiesta ricevuta",
    delete_success_intro: "Abbiamo ricevuto la tua richiesta di eliminazione per",
    delete_success_body:
      "Il tuo account e tutti i dati associati verranno eliminati permanentemente entro 30 giorni.",
    delete_success_note:
      "Riceverai una conferma a quell'indirizzo email una volta completata l'eliminazione.",
    delete_success_footer: "Per domande: support.gastrack@gmail.com",
    delete_in_app:
      "Hai già l'app? Puoi eliminare il tuo account direttamente in Impostazioni → Account → Elimina account per l'eliminazione immediata.",
    footer_beta_access: "Accesso beta",
    footer_delete_account: "Elimina account",
    footer_copy: "© 2025–2026 GasTrack. Tutti i diritti riservati.",
  },
  fr: {
    nav_home: "Accueil",
    nav_privacy: "Confidentialité",
    nav_terms: "Conditions",
    home_badge: "Italie · Bêta fermée",
    home_headline_1: "Votre véhicule,",
    home_headline_2: "sous contrôle.",
    home_sub:
      "GasTrack vous aide à suivre le carburant, le stationnement, l’entretien et les coûts réels — avec radar, social et gamification en option. Conçu pour la clarté. L’application est en <strong>bêta fermée</strong> (pas encore en fiche store publique). Utilisez le <strong>formulaire de demande d’accès</strong> sur ce site. Priorité <strong>Italie</strong> pour l’instant ; d’autres pays pourront suivre.",
    home_meta_description:
      "GasTrack — carburant, stationnement, entretien et coûts réels. Demandez l’accès à la bêta fermée via le formulaire sur gastrack.eu (Italie d’abord). Pas encore en fiche store publique.",
    home_cta_primary: "Demander l’accès bêta",
    home_cta_secondary: "Retour bêta",
    home_features_label: "Ce que fait GasTrack",
    home_feat1_title: "Suivi du carburant",
    home_feat1_body:
      "Enregistrez chaque plein, suivez la consommation et repérez les tendances. Compatible essence, diesel, GPL, méthane, électrique et hybride.",
    home_feat2_title: "Parking et entretien",
    home_feat2_body:
      "Ne perdez jamais le fil d'une session de stationnement ou d'un entretien. GasTrack conserve l'historique complet de votre véhicule au même endroit.",
    home_feat3_title: "Coûts réels",
    home_feat3_body:
      "Découvrez ce que votre véhicule vous coûte vraiment par mois — carburant, assurance, taxes, financement, entretien, tout dans un tableau de bord.",
    home_feat4_title: "Radar",
    home_feat4_body:
      "Trouvez les stations-service à proximité avec des prix en temps réel et des avis communautaires. Le radar carburant vise d’abord l’<strong>Italie</strong> pendant la bêta ; d’autres pays après un déploiement plus large.",
    home_feat5_title: "Social",
    home_feat5_body:
      "Comparez votre efficacité avec vos amis, partagez vos succès et voyez comment vous vous situez.",
    home_feat6_title: "Gamification",
    home_feat6_body:
      "Gagnez des XP, montez de niveau et débloquez des succès en suivant votre véhicule. Gérer ses coûts n'a jamais été aussi satisfaisant.",
    home_contact_label: "Contact",
    home_contact_title: "Questions ou retours ?",
    home_contact_body:
      "GasTrack est développé par un développeur indépendant. Utilisez le <strong>formulaire d’accès bêta</strong> pour demander une invitation, ou écrivez-nous pour toute autre question — nous lisons chaque message.",
    home_contact_linkedin: "LinkedIn",

    beta_meta_title: "GasTrack — Demander l’accès bêta",
    beta_meta_description:
      "Demandez l’accès à la bêta fermée GasTrack. Indiquez vos coordonnées et acceptez les Conditions, la Politique de confidentialité et les limites de la bêta.",

    beta_back: "← Retour à l’accueil",
    beta_eyebrow: "BÊTA FERMÉE",
    beta_title: "Demander l’accès bêta",
    beta_intro_html:
      "<p>Ce formulaire sert à demander à rejoindre la <strong>bêta fermée</strong>. Nous lisons chaque demande. Nous pouvons vous contacter par e-mail si une place se libère. <strong>Aucune obligation</strong> pour vous ni pour nous — il s’agit seulement d’une demande d’examen.</p>",
    beta_notice_html:
      "<p><strong>Utilisation de vos réponses :</strong> nous utilisons ce que vous envoyez uniquement pour décider d’une invitation à la bêta et pour vous répondre à l’adresse indiquée. Les détails figurent dans notre <a href=\"https://gastrack.eu/privacy.html\" target=\"_blank\" rel=\"noopener noreferrer\">Politique de confidentialité</a>.</p><p><strong>Langage clair, pas un avis juridique :</strong> pour votre situation, consultez un professionnel qualifié.</p>",

    beta_label_first_name: "Prénom",
    beta_label_surname: "Nom",
    beta_label_email: "Adresse e-mail",
    beta_label_why: "Pourquoi souhaitez-vous rejoindre la bêta ? (aide à prioriser)",
    beta_placeholder_why:
      "p. ex. Je conduis en Italie et je veux suivre le carburant ; je peux signaler des bugs…",

    beta_consent_html:
      'J’ai lu et j’accepte les <a href="https://gastrack.eu/terms.html" target="_blank" rel="noopener noreferrer">Conditions d’utilisation</a> et la <a href="https://gastrack.eu/privacy.html" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a>. Je comprends que GasTrack est un <strong>logiciel en bêta</strong> : il peut être incomplet, instable ou évoluer sans préavis ; il n’y a <strong>aucune garantie</strong> ; des pertes de données ou des erreurs sont possibles ; et il n’y a <strong>aucune garantie</strong> de disponibilité, de fonctionnalités ou d’assistance. Je participe volontairement. J’accepte que l’exploitant utilise mes informations uniquement pour étudier cette demande et pour me contacter concernant l’accès bêta, comme expliqué dans la Politique de confidentialité. Je confirme que les renseignements fournis sont, à ma connaissance, exacts.',

    beta_submit: "Envoyer la demande",
    beta_success_title: "Demande reçue",
    beta_success_body:
      "Merci. Si nous pouvons vous proposer l’accès bêta, nous vous contacterons à l’adresse e-mail indiquée. Nous ne pouvons pas répondre à toutes les demandes.",
    beta_success_footer: "Des questions ? support.gastrack@gmail.com",

    privacy_title: "GasTrack — Politique de confidentialité",
    privacy_updated: "Dernière mise à jour : 5 avril 2026",
    privacy_intro:
      'Cette politique décrit comment <strong>GasTrack</strong> (« l’application ») traite les informations personnelles lorsque vous utilisez notre application mobile. GasTrack est exploitée par <strong>Terry Boakye Yiadom</strong>, auteur unique. La distribution est actuellement une <strong>bêta fermée</strong> (pas encore de fiche store publique). Pour toute question, contactez-nous à <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>.',
    terms_title: "GasTrack — Conditions d’utilisation",
    terms_updated: "Dernière mise à jour : 16 avril 2026",
    terms_intro:
      "Les présentes conditions régissent votre utilisation de l’application mobile GasTrack. En téléchargeant ou en utilisant GasTrack, vous acceptez ces conditions et notre Politique de confidentialité.",
    delete_meta_title: "GasTrack — Supprimer le compte",
    delete_back: "← Retour à l’accueil",
    delete_eyebrow: "DEMANDE DE SUPPRESSION DE COMPTE",
    delete_title: "Supprimer votre compte GasTrack",
    delete_subtitle:
      "En envoyant ce formulaire, vous adressez une demande de suppression à notre équipe. Nous supprimerons définitivement votre compte et toutes les données associées dans les 30 jours suivant la réception de votre demande.",
    delete_what_label: "Données concernées :",
    delete_what_1: "Votre compte et vos identifiants",
    delete_what_2: "Tous les véhicules et journaux de carburant",
    delete_what_3: "Historique de stationnement et d’entretien",
    delete_what_4: "Données financières et paramètres",
    delete_what_5: "Profil social, amis et publications du fil",
    delete_what_6: "Succès et points d’expérience",
    delete_warning:
      "Cette action est irréversible. Une fois supprimées, vos données ne pourront pas être récupérées.",
    delete_email_label: "Votre adresse e-mail",
    delete_email_placeholder: "email@exemple.com",
    delete_reason_label: "Motif (facultatif)",
    delete_reason_placeholder: "Sélectionnez un motif",
    delete_reason_1: "Je n’utilise plus l’application",
    delete_reason_2: "Préoccupations liées à la confidentialité",
    delete_reason_3: "Passage à une autre application",
    delete_reason_4: "Autre",
    delete_notes_label: "Notes complémentaires (facultatif)",
    delete_notes_placeholder: "Informations supplémentaires…",
    delete_submit: "Envoyer la demande de suppression",
    delete_success_title: "Demande reçue",
    delete_success_intro: "Nous avons bien reçu votre demande de suppression pour",
    delete_success_body:
      "Votre compte et toutes les données associées seront définitivement supprimés dans les 30 jours.",
    delete_success_note:
      "Vous recevrez une confirmation à cette adresse une fois la suppression terminée.",
    delete_success_footer: "Des questions ? Écrivez à support.gastrack@gmail.com",
    delete_in_app:
      "Vous avez déjà l’application ? Vous pouvez supprimer votre compte directement dans Réglages → Compte → Supprimer le compte pour une suppression immédiate.",
    footer_beta_access: "Accès bêta",
    footer_delete_account: "Supprimer le compte",
    footer_copy: "© 2025–2026 GasTrack. Tous droits réservés.",
  },
};

(function mergeLegalTranslations() {
  var G = typeof window !== "undefined" && window.GAS_LEGAL_TRANSLATIONS;
  if (!G) return;
  ["en", "it", "fr"].forEach(function (lang) {
    var patch = G[lang];
    if (patch && TRANSLATIONS[lang]) Object.assign(TRANSLATIONS[lang], patch);
  });
})();

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
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const val = dict[key] ?? TRANSLATIONS.en[key] ?? "";
    el.setAttribute("placeholder", val);
  });

  var page = document.body && document.body.getAttribute("data-page");
  if (page === "privacy") {
    if (dict.privacy_title) document.title = dict.privacy_title;
    if (dict.privacy_meta_description) {
      var md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute("content", dict.privacy_meta_description);
    }
    document.documentElement.lang = currentLang;
  } else if (page === "terms") {
    if (dict.terms_title) document.title = dict.terms_title;
    if (dict.terms_meta_description) {
      var mt = document.querySelector('meta[name="description"]');
      if (mt) mt.setAttribute("content", dict.terms_meta_description);
    }
    document.documentElement.lang = currentLang;
  } else if (page === "home") {
    if (dict.home_meta_description) {
      var mh = document.querySelector('meta[name="description"]');
      if (mh) mh.setAttribute("content", dict.home_meta_description);
    }
    document.documentElement.lang = currentLang;
  } else if (page === "beta") {
    if (dict.beta_meta_description) {
      var mb = document.querySelector('meta[name="description"]');
      if (mb) mb.setAttribute("content", dict.beta_meta_description);
    }
    document.documentElement.lang = currentLang;
  }
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
