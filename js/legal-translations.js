/**
 * Full legal HTML for privacy.html and terms.html (EN / IT / FR).
 * Loaded before i18n.js; merged into TRANSLATIONS.
 */
(function () {
  window.GAS_LEGAL_TRANSLATIONS = {
    en: {
      privacy_meta_description: "Privacy policy for the GasTrack mobile app.",
      privacy_body_html:
        "<h2>1. What we collect</h2>" +
        "<p>Depending on how you use the app, we may process:</p>" +
        "<ul>" +
        "<li><strong>Account data</strong> — Email address and authentication credentials managed by <strong>Google Firebase Authentication</strong> (sign-in provider you choose, e.g. email and password).</li>" +
        "<li><strong>Profile and preferences</strong> — Name or display fields you provide, language, units, and app settings stored in <strong>Cloud Firestore</strong> under your user id.</li>" +
        "<li><strong>Fuel and vehicle data</strong> — Vehicles you add, fill-ups, odometer readings, costs, notes, and related fields.</li>" +
        "<li><strong>Parking and maintenance</strong> — Logs and optional details you enter (e.g. service history, parking sessions).</li>" +
        "<li><strong>Optional financial inputs</strong> — Optional fields you choose to store for analytics inside the app (e.g. budgets, vehicle purchase notes), only as you enter them.</li>" +
        "<li><strong>Social features (optional)</strong> — If you use social features, we may store a public profile, feed posts, friend connections, and related metadata as implemented in the app.</li>" +
        "<li><strong>Push notifications</strong> — If you opt in, a device token may be stored so we can deliver notifications.</li>" +
        "<li><strong>Diagnostics and product improvement</strong> — With your consent where required, we may use Firebase/Google tooling (e.g. Analytics, Performance) in line with your in-app choices and platform settings.</li>" +
        "<li><strong>Support</strong> — Information you send when you contact us (e.g. email).</li>" +
        "</ul>" +
        "<p>We do not sell your personal information.</p>" +
        "<h2>2. Why we use data</h2>" +
        "<ul>" +
        "<li>To provide account sign-in and sync your data across devices.</li>" +
        "<li>To show your logs, statistics, vehicles, and optional social or insights features.</li>" +
        "<li>To send optional notifications you enable.</li>" +
        "<li>To secure the service, fix bugs, and improve the app.</li>" +
        "<li>To comply with law and respond to valid requests.</li>" +
        "</ul>" +
        "<h2>3. Legal bases (EEA/UK users)</h2>" +
        "<p>Where GDPR applies, we rely on <strong>contract</strong> (providing the service), <strong>legitimate interests</strong> (security, improvement), and, where required, <strong>consent</strong> (e.g. optional analytics or AI features as presented in the app).</p>" +
        "<h2>4. Where data is processed</h2>" +
        "<p>Data is processed using <strong>Google Firebase</strong> (Authentication, Firestore, and related services) in accordance with Google’s terms and privacy documentation. Firebase project configuration (including region choices) is set by the operator in the Firebase console.</p>" +
        "<h2>5. Retention</h2>" +
        "<p>We keep your data until you <strong>delete your account</strong> or delete specific content using the controls in the app, subject to short backup and operational retention by our cloud providers as described in their policies.</p>" +
        "<h2>6. Your rights</h2>" +
        "<p>Depending on your region, you may have the right to access, correct, delete, export, or restrict processing of your data, and to lodge a complaint with a supervisory authority.</p>" +
        "<p>In the app you can use <strong>Privacy &amp; Data</strong> (and related settings) to export or erase your data where those features are available. Account deletion removes your app account and associated data as implemented in the current version of the app.</p>" +
        "<h2>7. Children</h2>" +
        "<p>GasTrack is not intended for children under the age where parental consent is required in your country. We do not knowingly collect personal information from young children.</p>" +
        "<h2>8. Changes</h2>" +
        "<p>We may update this policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the app after changes means you accept the updated policy where permitted by law.</p>",
      privacy_contact_heading: "Contact",
      privacy_contact_line_html:
        'Email: <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>',
      terms_meta_description: "Terms of Service for the GasTrack mobile app.",
      terms_body_html:
        "<h2>1. Acceptance of terms</h2>" +
        "<p>By downloading or using GasTrack, you agree to these Terms of Service. If you do not agree, do not use the app.</p>" +
        "<h2>2. Description of service</h2>" +
        "<p>GasTrack is a mobile application for tracking vehicle-related costs including fuel, parking, maintenance, and related expenses. The app may include optional social features, community data contributions (such as fuel station ratings and parking ratings), and gamification elements. GasTrack is provided by Terry Boakye Yiadom (sole author) and is currently in beta.</p>" +
        "<h2>3. Beta status</h2>" +
        "<p>GasTrack is currently in beta testing. Features may change, be removed, or behave unexpectedly. We appreciate your feedback and patience during this period. Beta access may be revoked at any time.</p>" +
        "<h2>4. User accounts</h2>" +
        "<p>You must create an account to use most features. You are responsible for keeping your credentials secure. You may not share your account or use another person’s account without permission. You must provide accurate information during registration.</p>" +
        "<h2>5. Acceptable use</h2>" +
        "<p>You agree not to:</p>" +
        "<ul>" +
        "<li>use the app for any unlawful purpose;</li>" +
        "<li>attempt to reverse-engineer, decompile, or tamper with the app;</li>" +
        "<li>upload false, misleading, or harmful content including community ratings;</li>" +
        "<li>harass, impersonate, or harm other users via social features;</li>" +
        "<li>attempt to gain unauthorised access to other users’ data or app infrastructure;</li>" +
        "<li>use automated tools to scrape or abuse the app’s APIs.</li>" +
        "</ul>" +
        "<h2>6. Community features and user content</h2>" +
        "<p>When you submit community ratings, feed posts, or other user-generated content, you grant GasTrack a non-exclusive licence to store and display that content within the app. You are responsible for the accuracy of data you contribute. Community ratings are user-submitted and are not verified by GasTrack.</p>" +
        "<h2>7. Data and privacy</h2>" +
        '<p>Your use of the app is subject to our <a href="https://gastrack.eu/privacy.html">Privacy Policy</a>, which is incorporated into these terms by reference. We process your data as described in the Privacy Policy.</p>' +
        "<h2>8. Intellectual property</h2>" +
        "<p>GasTrack, its logo, design, and code are the property of Terry Boakye Yiadom. You may not copy, reproduce, or redistribute any part of the app without permission.</p>" +
        "<h2>9. Third-party services</h2>" +
        "<p>GasTrack uses third-party services including Google Firebase, government fuel price APIs, and OpenStreetMap data. Your use of the app is also subject to the terms of these providers. GasTrack is not responsible for the availability or accuracy of third-party data.</p>" +
        "<h2>10. Disclaimers</h2>" +
        "<p>GasTrack is provided “as is” without warranties of any kind. We do not guarantee the accuracy of fuel prices, community data, or any third-party information displayed in the app. Use of the app is at your own risk.</p>" +
        "<h2>11. Limitation of liability</h2>" +
        "<p>To the fullest extent permitted by law, GasTrack and its operator shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app, including loss of data or vehicle-related decisions made based on app data.</p>" +
        "<h2>12. Changes to terms</h2>" +
        "<p>We may update these terms from time to time. The “Last updated” date will reflect changes. Continued use of the app after changes constitutes acceptance.</p>" +
        "<h2>13. Governing law</h2>" +
        "<p>These terms are governed by the laws of Italy. Any disputes shall be subject to the jurisdiction of the courts of Italy.</p>" +
        "<h2>14. Contact</h2>" +
        '<p>For questions about these terms: <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a></p>',
    },
    it: {
      privacy_meta_description: "Informativa sulla privacy dell’app mobile GasTrack.",
      privacy_body_html:
        "<h2>1. Quali dati trattiamo</h2>" +
        "<p>A seconda di come usi l’app, possiamo trattare:</p>" +
        "<ul>" +
        "<li><strong>Dati dell’account</strong> — Indirizzo email e credenziali di autenticazione gestite da <strong>Google Firebase Authentication</strong> (metodo di accesso da te scelto, ad es. email e password).</li>" +
        "<li><strong>Profilo e preferenze</strong> — Nome o campi visualizzati che fornisci, lingua, unità di misura e impostazioni dell’app memorizzate in <strong>Cloud Firestore</strong> sotto il tuo id utente.</li>" +
        "<li><strong>Dati su carburante e veicoli</strong> — Veicoli aggiunti, rifornimenti, letture contachilometri, costi, note e campi correlati.</li>" +
        "<li><strong>Parcheggio e manutenzione</strong> — Registrazioni e dettagli opzionali che inserisci (es. storico interventi, sessioni di parcheggio).</li>" +
        "<li><strong>Input finanziari opzionali</strong> — Campi opzionali che scegli di salvare per le analisi nell’app (es. budget, note sull’acquisto del veicolo), solo come li inserisci.</li>" +
        "<li><strong>Funzioni social (opzionali)</strong> — Se usi le funzioni social, possiamo memorizzare un profilo pubblico, post nel feed, connessioni tra amici e metadati correlati come implementato nell’app.</li>" +
        "<li><strong>Notifiche push</strong> — Se acconsenti, può essere memorizzato un token del dispositivo per inviarti notifiche.</li>" +
        "<li><strong>Diagnostica e miglioramento del prodotto</strong> — Con il tuo consenso ove richiesto, possiamo usare strumenti Firebase/Google (es. Analytics, Performance) in linea con le tue scelte nell’app e le impostazioni della piattaforma.</li>" +
        "<li><strong>Assistenza</strong> — Informazioni che ci invii quando ci contatti (es. email).</li>" +
        "</ul>" +
        "<p>Non vendiamo i tuoi dati personali.</p>" +
        "<h2>2. Perché usiamo i dati</h2>" +
        "<ul>" +
        "<li>Per offrire l’accesso all’account e sincronizzare i tuoi dati tra i dispositivi.</li>" +
        "<li>Per mostrarti registrazioni, statistiche, veicoli e funzioni opzionali social o di analisi.</li>" +
        "<li>Per inviare notifiche opzionali che abiliti.</li>" +
        "<li>Per proteggere il servizio, correggere errori e migliorare l’app.</li>" +
        "<li>Per adempiere agli obblighi di legge e rispondere a richieste legittime.</li>" +
        "</ul>" +
        "<h2>3. Basi giuridiche (utenti SEE / Regno Unito)</h2>" +
        "<p>Ove si applichi il GDPR, ci basiamo sul <strong>contratto</strong> (erogazione del servizio), su <strong>interessi legittimi</strong> (sicurezza, miglioramento) e, ove necessario, sul <strong>consenso</strong> (es. analytics opzionali o funzioni IA come presentato nell’app).</p>" +
        "<h2>4. Dove avviene il trattamento</h2>" +
        "<p>I dati sono trattati tramite <strong>Google Firebase</strong> (Authentication, Firestore e servizi correlati), in conformità alle condizioni e alla documentazione privacy di Google. La configurazione del progetto Firebase (incluse le scelte di regione) è impostata dall’operatore nella console Firebase.</p>" +
        "<h2>5. Conservazione</h2>" +
        "<p>Conserviamo i tuoi dati finché non <strong>elimini l’account</strong> o cancelli contenuti specifici tramite i controlli nell’app, fatto salvo breve conservazione di backup e operativa da parte dei fornitori cloud come descritto nelle loro policy.</p>" +
        "<h2>6. I tuoi diritti</h2>" +
        "<p>A seconda della tua regione, potresti avere il diritto di accedere, rettificare, cancellare, esportare o limitare il trattamento dei tuoi dati, e di proporre reclamo a un’autorità di controllo.</p>" +
        "<p>Nell’app puoi usare <strong>Privacy e dati</strong> (e impostazioni correlate) per esportare o cancellare i tuoi dati ove disponibile. L’eliminazione dell’account rimuove l’account dell’app e i dati associati come implementato nella versione corrente dell’app.</p>" +
        "<h2>7. Minori</h2>" +
        "<p>GasTrack non è destinata a minori al di sotto dell’età in cui è richiesto il consenso dei genitori nel tuo Paese. Non raccogliamo consapevolmente dati personali di minori in età precoce.</p>" +
        "<h2>8. Modifiche</h2>" +
        "<p>Possiamo aggiornare questa informativa periodicamente. La data «Ultimo aggiornamento» in alto cambierà in caso di modifiche. L’uso continuato dell’app dopo le modifiche implica l’accettazione dell’informativa aggiornata ove consentito dalla legge.</p>",
      privacy_contact_heading: "Contatti",
      privacy_contact_line_html:
        'Email: <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>',
      terms_meta_description: "Termini di servizio dell’app mobile GasTrack.",
      terms_body_html:
        "<h2>1. Accettazione dei termini</h2>" +
        "<p>Scaricando o usando GasTrack, accetti questi Termini di servizio. Se non accetti, non usare l’app.</p>" +
        "<h2>2. Descrizione del servizio</h2>" +
        "<p>GasTrack è un’applicazione mobile per tracciare costi legati al veicolo, inclusi carburante, parcheggio, manutenzione e spese correlate. L’app può includere funzioni social opzionali, contributi della community (come valutazioni di stazioni di servizio e parcheggi) ed elementi di gamification. GasTrack è offerta da Terry Boakye Yiadom (unico autore) ed è attualmente in beta.</p>" +
        "<h2>3. Stato beta</h2>" +
        "<p>GasTrack è attualmente in fase di test beta. Le funzioni possono cambiare, essere rimosse o comportarsi in modo imprevisto. Apprezziamo feedback e pazienza in questo periodo. L’accesso beta può essere revocato in qualsiasi momento.</p>" +
        "<h2>4. Account utente</h2>" +
        "<p>Per usare la maggior parte delle funzioni devi creare un account. Sei responsabile della sicurezza delle credenziali. Non puoi condividere il tuo account o usare l’account di altri senza permesso. Devi fornire informazioni accurate in fase di registrazione.</p>" +
        "<h2>5. Uso consentito</h2>" +
        "<p>Accetti di non:</p>" +
        "<ul>" +
        "<li>usare l’app per scopi illeciti;</li>" +
        "<li>tentare di reverse engineering, decompilare o manomettere l’app;</li>" +
        "<li>caricare contenuti falsi, fuorvianti o dannosi, incluse valutazioni della community;</li>" +
        "<li>molestare, impersonare o danneggiare altri utenti tramite le funzioni social;</li>" +
        "<li>tentare di ottenere accesso non autorizzato ai dati di altri utenti o all’infrastruttura dell’app;</li>" +
        "<li>usare strumenti automatizzati per scraping o abuso delle API dell’app.</li>" +
        "</ul>" +
        "<h2>6. Funzioni della community e contenuti degli utenti</h2>" +
        "<p>Quando invii valutazioni della community, post nel feed o altri contenuti generati dagli utenti, concedi a GasTrack una licenza non esclusiva per memorizzare e mostrare tali contenuti nell’app. Sei responsabile dell’accuratezza dei dati che contribuisci. Le valutazioni della community sono inviate dagli utenti e non sono verificate da GasTrack.</p>" +
        "<h2>7. Dati e privacy</h2>" +
        '<p>L’uso dell’app è soggetto alla nostra <a href="https://gastrack.eu/privacy.html">Informativa sulla privacy</a>, incorporata per riferimento in questi termini. Trattiamo i tuoi dati come descritto nell’Informativa sulla privacy.</p>' +
        "<h2>8. Proprietà intellettuale</h2>" +
        "<p>GasTrack, il logo, il design e il codice sono di proprietà di Terry Boakye Yiadom. Non puoi copiare, riprodurre o ridistribuire alcuna parte dell’app senza permesso.</p>" +
        "<h2>9. Servizi di terze parti</h2>" +
        "<p>GasTrack utilizza servizi di terze parti tra cui Google Firebase, API governative sui prezzi del carburante e dati OpenStreetMap. L’uso dell’app è soggetto anche alle condizioni di questi fornitori. GasTrack non è responsabile della disponibilità o accuratezza dei dati di terze parti.</p>" +
        "<h2>10. Esclusioni di garanzia</h2>" +
        "<p>GasTrack è fornita «così com’è» senza garanzie di alcun tipo. Non garantiamo l’accuratezza dei prezzi del carburante, dei dati della community o di altre informazioni di terze parti mostrate nell’app. L’uso dell’app è a tuo rischio.</p>" +
        "<h2>11. Limitazione di responsabilità</h2>" +
        "<p>Nella misura massima consentita dalla legge, GasTrack e il suo operatore non sono responsabili per danni indiretti, incidentali o consequenziali derivanti dall’uso dell’app, inclusa la perdita di dati o decisioni legate al veicolo basate sui dati dell’app.</p>" +
        "<h2>12. Modifiche ai termini</h2>" +
        "<p>Possiamo aggiornare questi termini di tanto in tanto. La data «Ultimo aggiornamento» rifletterà le modifiche. L’uso continuato dell’app dopo le modifiche costituisce accettazione.</p>" +
        "<h2>13. Legge applicabile</h2>" +
        "<p>Questi termini sono regolati dalla legge italiana. Ogni controversia è soggetta alla giurisdizione dei tribunali italiani.</p>" +
        "<h2>14. Contatti</h2>" +
        '<p>Per domande su questi termini: <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a></p>',
    },
    fr: {
      privacy_meta_description: "Politique de confidentialité de l’application mobile GasTrack.",
      privacy_body_html:
        "<h2>1. Données que nous traitons</h2>" +
        "<p>Selon votre utilisation de l’application, nous pouvons traiter :</p>" +
        "<ul>" +
        "<li><strong>Données de compte</strong> — Adresse e-mail et identifiants d’authentification gérés par <strong>Google Firebase Authentication</strong> (fournisseur de connexion que vous choisissez, par ex. e-mail et mot de passe).</li>" +
        "<li><strong>Profil et préférences</strong> — Nom ou champs d’affichage que vous fournissez, langue, unités et paramètres de l’application stockés dans <strong>Cloud Firestore</strong> sous votre identifiant utilisateur.</li>" +
        "<li><strong>Données carburant et véhicule</strong> — Véhicules ajoutés, pleins, relevés de compteur, coûts, notes et champs associés.</li>" +
        "<li><strong>Stationnement et entretien</strong> — Journaux et détails facultatifs que vous saisissez (ex. historique d’entretien, sessions de stationnement).</li>" +
        "<li><strong>Saisies financières facultatives</strong> — Champs facultatifs que vous choisissez d’enregistrer pour les analyses dans l’app (ex. budgets, notes d’achat du véhicule), uniquement tels que vous les saisissez.</li>" +
        "<li><strong>Fonctions sociales (facultatives)</strong> — Si vous utilisez les fonctions sociales, nous pouvons stocker un profil public, des publications dans le fil, des liens d’amitié et des métadonnées associées telles qu’implémentées dans l’app.</li>" +
        "<li><strong>Notifications push</strong> — Si vous y consentez, un jeton d’appareil peut être stocké afin de vous envoyer des notifications.</li>" +
        "<li><strong>Diagnostics et amélioration du produit</strong> — Avec votre consentement lorsque la loi l’exige, nous pouvons utiliser des outils Firebase/Google (ex. Analytics, Performance) conformément à vos choix dans l’app et aux réglages de la plateforme.</li>" +
        "<li><strong>Assistance</strong> — Informations que vous nous envoyez lorsque vous nous contactez (ex. e-mail).</li>" +
        "</ul>" +
        "<p>Nous ne vendons pas vos informations personnelles.</p>" +
        "<h2>2. Finalités du traitement</h2>" +
        "<ul>" +
        "<li>Fournir la connexion au compte et synchroniser vos données entre appareils.</li>" +
        "<li>Afficher vos journaux, statistiques, véhicules et fonctions sociales ou d’analyse facultatives.</li>" +
        "<li>Envoyer les notifications facultatives que vous activez.</li>" +
        "<li>Sécuriser le service, corriger les anomalies et améliorer l’app.</li>" +
        "<li>Respecter la loi et répondre aux demandes légitimes.</li>" +
        "</ul>" +
        "<h2>3. Bases juridiques (utilisateurs EEE / Royaume-Uni)</h2>" +
        "<p>Lorsque le RGPD s’applique, nous nous appuyons sur le <strong>contrat</strong> (fourniture du service), les <strong>intérêts légitimes</strong> (sécurité, amélioration) et, le cas échéant, le <strong>consentement</strong> (ex. analyses facultatives ou fonctions IA telles que présentées dans l’app).</p>" +
        "<h2>4. Lieu du traitement</h2>" +
        "<p>Les données sont traitées via <strong>Google Firebase</strong> (Authentication, Firestore et services associés), conformément aux conditions et à la documentation confidentialité de Google. La configuration du projet Firebase (y compris le choix des régions) est définie par l’opérateur dans la console Firebase.</p>" +
        "<h2>5. Conservation</h2>" +
        "<p>Nous conservons vos données jusqu’à ce que vous <strong>supprimiez votre compte</strong> ou supprimiez des contenus précis via les commandes de l’app, sous réserve de courtes périodes de sauvegarde et d’exploitation par nos fournisseurs cloud, comme décrit dans leurs politiques.</p>" +
        "<h2>6. Vos droits</h2>" +
        "<p>Selon votre région, vous pouvez disposer d’un droit d’accès, de rectification, d’effacement, d’export ou de limitation du traitement, et du droit d’introduire une réclamation auprès d’une autorité de contrôle.</p>" +
        "<p>Dans l’app, vous pouvez utiliser <strong>Confidentialité et données</strong> (et réglages associés) pour exporter ou effacer vos données lorsque ces fonctions sont disponibles. La suppression du compte supprime le compte applicatif et les données associées telles qu’implémentées dans la version actuelle de l’app.</p>" +
        "<h2>7. Enfants</h2>" +
        "<p>GasTrack ne s’adresse pas aux enfants en dessous de l’âge pour lequel le consentement parental est requis dans votre pays. Nous ne collectons pas sciemment d’informations personnelles auprès de très jeunes enfants.</p>" +
        "<h2>8. Modifications</h2>" +
        "<p>Nous pouvons mettre à jour cette politique périodiquement. La date « Dernière mise à jour » en tête de page changera en cas de modification. L’utilisation continue de l’app après modification vaut acceptation de la politique mise à jour lorsque la loi le permet.</p>",
      privacy_contact_heading: "Contact",
      privacy_contact_line_html:
        'E-mail : <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a>',
      terms_meta_description: "Conditions d’utilisation de l’application mobile GasTrack.",
      terms_body_html:
        "<h2>1. Acceptation des conditions</h2>" +
        "<p>En téléchargeant ou en utilisant GasTrack, vous acceptez les présentes conditions d’utilisation. Si vous n’acceptez pas, n’utilisez pas l’app.</p>" +
        "<h2>2. Description du service</h2>" +
        "<p>GasTrack est une application mobile de suivi des coûts liés au véhicule : carburant, stationnement, entretien et dépenses associées. L’app peut inclure des fonctions sociales facultatives, des contributions de la communauté (notamment notes sur les stations-service et le stationnement) et des éléments de gamification. GasTrack est fournie par Terry Boakye Yiadom (auteur unique) et est actuellement en version bêta.</p>" +
        "<h2>3. Statut bêta</h2>" +
        "<p>GasTrack est en phase de test bêta. Les fonctionnalités peuvent changer, être retirées ou se comporter de façon inattendue. Nous vous remercions pour vos retours et votre patience pendant cette période. L’accès bêta peut être retiré à tout moment.</p>" +
        "<h2>4. Comptes utilisateurs</h2>" +
        "<p>Vous devez créer un compte pour utiliser la plupart des fonctions. Vous êtes responsable de la sécurité de vos identifiants. Vous ne devez pas partager votre compte ni utiliser le compte d’une autre personne sans autorisation. Vous devez fournir des informations exactes lors de l’inscription.</p>" +
        "<h2>5. Usage acceptable</h2>" +
        "<p>Vous acceptez de ne pas :</p>" +
        "<ul>" +
        "<li>utiliser l’app à des fins illégales ;</li>" +
        "<li>tenter d’effectuer de l’ingénierie inverse, de décompiler ou d’altérer l’app ;</li>" +
        "<li>publier du contenu faux, trompeur ou nuisible, y compris des notes communautaires ;</li>" +
        "<li>harceler, usurper l’identité ou nuire à d’autres utilisateurs via les fonctions sociales ;</li>" +
        "<li>tenter d’obtenir un accès non autorisé aux données d’autres utilisateurs ou à l’infrastructure de l’app ;</li>" +
        "<li>utiliser des outils automatisés pour extraire ou abuser des API de l’app.</li>" +
        "</ul>" +
        "<h2>6. Fonctions communautaires et contenus utilisateurs</h2>" +
        "<p>Lorsque vous soumettez des notes communautaires, des publications dans le fil ou d’autres contenus générés par les utilisateurs, vous accordez à GasTrack une licence non exclusive pour stocker et afficher ce contenu dans l’app. Vous êtes responsable de l’exactitude des données que vous contribuez. Les notes communautaires sont fournies par les utilisateurs et ne sont pas vérifiées par GasTrack.</p>" +
        "<h2>7. Données et confidentialité</h2>" +
        '<p>Votre utilisation de l’app est régie par notre <a href="https://gastrack.eu/privacy.html">Politique de confidentialité</a>, incorporée par renvoi aux présentes conditions. Nous traitons vos données comme décrit dans la Politique de confidentialité.</p>' +
        "<h2>8. Propriété intellectuelle</h2>" +
        "<p>GasTrack, son logo, sa conception et son code sont la propriété de Terry Boakye Yiadom. Vous ne pouvez pas copier, reproduire ou redistribuer une partie de l’app sans autorisation.</p>" +
        "<h2>9. Services tiers</h2>" +
        "<p>GasTrack utilise des services tiers, notamment Google Firebase, des API publiques de prix des carburants et des données OpenStreetMap. Votre utilisation de l’app est également soumise aux conditions de ces fournisseurs. GasTrack n’est pas responsable de la disponibilité ou de l’exactitude des données tierces.</p>" +
        "<h2>10. Avertissements</h2>" +
        "<p>GasTrack est fournie « en l’état » sans garantie d’aucune sorte. Nous ne garantissons pas l’exactitude des prix du carburant, des données communautaires ou de toute information tierce affichée dans l’app. L’utilisation de l’app se fait à vos risques.</p>" +
        "<h2>11. Limitation de responsabilité</h2>" +
        "<p>Dans toute la mesure permise par la loi, GasTrack et son opérateur ne sauraient être tenus responsables de dommages indirects, accessoires ou consécutifs liés à votre utilisation de l’app, y compris la perte de données ou des décisions relatives au véhicule fondées sur les données de l’app.</p>" +
        "<h2>12. Modifications des conditions</h2>" +
        "<p>Nous pouvons mettre à jour ces conditions de temps à autre. La date « Dernière mise à jour » reflètera les changements. L’utilisation continue de l’app après modification vaut acceptation.</p>" +
        "<h2>13. Droit applicable</h2>" +
        "<p>Les présentes conditions sont régies par le droit italien. Tout litige relève de la compétence des tribunaux italiens.</p>" +
        "<h2>14. Contact</h2>" +
        '<p>Pour toute question sur ces conditions : <a href="mailto:support.gastrack@gmail.com">support.gastrack@gmail.com</a></p>',
    },
  };
})();
