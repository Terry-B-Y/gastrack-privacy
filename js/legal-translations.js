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
        "<p>What GasTrack holds depends on what you use. All of it is stored under your account.</p>" +
        "<ul>" +
        "<li><strong>Account</strong> — your email address, the name you give and how you sign in (email and password, Google or Apple), managed by <strong>Google Firebase Authentication</strong>; and your language, units, currency and other settings.</li>" +
        "<li><strong>Vehicles and logs</strong> — the vehicles you add (make, model, year, and a number plate or VIN if you enter one) and what you log for them: fill-ups and charges (amounts, prices, odometer, the station), parking sessions, services, expenses, fines, recurring costs, insurance policies, purchase or finance details, and notes. Archived vehicles stay under your account until you restore or delete them.</li>" +
        "<li><strong>Documents</strong> — files you keep in a vehicle’s document vault, such as a registration document or an insurance certificate. Only you can see them.</li>" +
        "<li><strong>Saved trips</strong> — the places, date and cost estimate of trips you save from the trip calculator. Only you can see them.</li>" +
        "<li><strong>Location</strong> — only when you allow it and use a feature that needs it, never in the background: where you parked, where you search the radar from, and the start of a trip planned from “my location”. To pick the right fuel-price source, the app also works out your country from a position rounded to about 11 km.</li>" +
        "<li><strong>Photos</strong> — a profile picture (checked automatically by <strong>Google Cloud Vision</strong> before anyone else can see it), pictures you attach to feedback, and receipt photos if you use receipt scanning.</li>" +
        "<li><strong>Social features (optional)</strong> — if you join: a public profile (name, username, picture, a short bio if you write one, level, the badges and title you choose to show, your driving style, how many records you keep of each kind, and for the savings league one percentage — how your consumption changed against the 90 days before, never the consumption itself; never anything about fines), friends, posts, reactions, and the reports and blocks you make. Your ratings of fuel stations, car parks and service places are stored without your name.</li>" +
        "<li><strong>Shared vehicles</strong> — people you share a vehicle with can see that vehicle’s records, as the sharing screen explains. They never see its document vault or your saved trips.</li>" +
        "<li><strong>Notifications</strong> — if you allow them, a device token so we can send you reminders and messages.</li>" +
        "<li><strong>Feedback and support</strong> — what you send us, the email address for our reply and, with a report, the app version and device details that help us reproduce a problem.</li>" +
        "<li><strong>Usage analytics and diagnostics — only if you agree</strong> — <strong>Firebase Analytics</strong> (which screens are opened and events such as saving a fill-up, sent with a pseudonymous account ID, an ID Firebase gives this installation of the app, and a general location Google derives from your IP address), <strong>Firebase Crashlytics</strong> (crash reports) and <strong>Firebase Performance Monitoring</strong>. They never include your amounts, prices, stations, places or notes, use no advertising identifier and are not used for advertising. You can turn them off at any time in <strong>Settings → Privacy &amp; Data</strong>.</li>" +
        "</ul>" +
        "<p>We do not sell your personal information, show you ads, or track you across other companies’ apps or websites.</p>" +
        "<h2>2. Why we use it</h2>" +
        "<ul>" +
        "<li>To sign you in and keep your data in step across your devices.</li>" +
        "<li>To show your logs, costs, statistics and vehicles, and to work out what you ask for — a trip estimate, a reminder, a fuel price near you.</li>" +
        "<li>To run the optional features you use: sharing a vehicle, friends and posts, badges, quests and your public profile.</li>" +
        "<li>To send the notifications you allow, such as a reminder the day before a saved trip.</li>" +
        "<li>To keep the service secure, moderate what people share, fix problems and, if you agree, learn which parts of the app are used.</li>" +
        "<li>To comply with the law and answer valid requests.</li>" +
        "</ul>" +
        "<h2>3. Legal bases (EEA and UK)</h2>" +
        "<p>Where the GDPR applies we rely on <strong>contract</strong> (providing the app you signed up for), <strong>legitimate interests</strong> (security, preventing abuse, moderating shared content) and <strong>consent</strong> for usage analytics, crash reporting, performance monitoring and optional AI features. You can withdraw consent at any time in the app; that does not affect processing before you did.</p>" +
        "<h2>4. Who processes your data</h2>" +
        "<p>The app runs on <strong>Google Firebase and Google Cloud</strong>: Authentication, Firestore, Storage, Cloud Functions, Hosting and Cloud Messaging, and, if you agree, Analytics, Crashlytics and Performance Monitoring. Your records are stored in the European Union (Firestore multi-region <em>eur3</em>; servers in Belgium and Italy). Google may process some data outside the EU under its standard contractual clauses.</p>" +
        "<p>Some features send what you search for to open services that answer it. They receive the place, area or coordinates and your device’s IP address, never your account:</p>" +
        "<ul>" +
        "<li><strong>OpenStreetMap</strong> for the map tiles, and its <strong>Nominatim</strong> service to turn a parking position, or your rounded position, into an address or a country;</li>" +
        "<li><strong>Overpass API</strong> (OpenStreetMap data) for car parks and service places in the area on the map;</li>" +
        "<li><strong>Photon</strong> by komoot for place search in the trip calculator, and <strong>Valhalla</strong> on FOSSGIS servers for the routes between your places;</li>" +
        "<li><strong>Open Charge Map</strong> for charging stations in the area.</li>" +
        "</ul>" +
        "<p>Fuel prices come from the open data of the Italian Ministry of Enterprises (MIMIT); nothing about you is sent to get them. When you open a place in Apple Maps, Google Maps or Waze, that app receives the destination. If receipt scanning is offered, the photo is sent to <strong>Google Gemini</strong> to read the amounts. Emails about your account (verification, password reset, replies to feedback) go through our email delivery service.</p>" +
        "<h2>5. How long we keep it</h2>" +
        "<p>Until you delete the content or your account. Deleting your account is final 30 days after you ask (see below). Analytics data is kept for the retention period set in Google Analytics, and our cloud providers keep short-lived backups as described in their own policies.</p>" +
        "<h2>6. Deleting your account and data</h2>" +
        "<p><strong>In the app:</strong> open <strong>Settings → Privacy &amp; Data</strong> and choose <strong>Erase all my data</strong> (or <strong>Delete account</strong> in Settings). Nothing is deleted straight away: deletion is scheduled for 30 days later, and you can cancel until then by signing in. After that your account and everything in it — logs, vehicles, documents, trips, photos, profile and posts — is permanently erased.</p>" +
        "<p><strong>If you cannot use the app</strong> (for example you lost access to your device or email), send an <strong>account and data deletion request</strong> with our web form. We check that the account is yours, then delete it or help you get back in:</p>" +
        "<p style=\"margin: 0.75rem 0;\"><a href=\"https://forms.gle/aWW5DVoGRtX8Lz416\">https://forms.gle/aWW5DVoGRtX8Lz416</a></p>" +
        "<h2>7. Your rights</h2>" +
        "<p>Depending on where you live, you can access, correct, delete or export your data, restrict or object to its processing, and withdraw consent. In the app, <strong>Settings → Privacy &amp; Data → Export all data</strong> gives you a ZIP of CSV files with your records. It leaves out exact coordinates and the files in your document vault, which you can download one by one in the app. You can also complain to a data protection authority — in Italy, the <em>Garante per la protezione dei dati personali</em>.</p>" +
        "<h2>8. Children</h2>" +
        "<p>GasTrack is not intended for children under the age at which parental consent is required in your country. We do not knowingly collect personal information from children.</p>" +
        "<h2>9. Changes</h2>" +
        "<p>We may update this policy. The “Last updated” date at the top changes when we do. Continuing to use the app after a change means you accept the updated policy where the law allows.</p>",
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
        "<h2>1. Quali dati raccogliamo</h2>" +
        "<p>Quello che GasTrack conserva dipende da cosa usi. Tutto è salvato nel tuo account.</p>" +
        "<ul>" +
        "<li><strong>Account</strong> — il tuo indirizzo email, il nome che indichi e il modo in cui accedi (email e password, Google o Apple), gestiti da <strong>Google Firebase Authentication</strong>; inoltre lingua, unità, valuta e le altre impostazioni.</li>" +
        "<li><strong>Veicoli e registrazioni</strong> — i veicoli che aggiungi (marca, modello, anno e, se li inserisci, targa o numero di telaio) e quello che registri: rifornimenti e ricariche (quantità, prezzi, contachilometri, distributore), soste, interventi, spese, multe, costi ricorrenti, polizze, dati di acquisto o finanziamento e note. I veicoli archiviati restano nel tuo account finché non li ripristini o li elimini.</li>" +
        "<li><strong>Documenti</strong> — i file che conservi nell’archivio documenti di un veicolo, come il libretto o il certificato assicurativo. Solo tu puoi vederli.</li>" +
        "<li><strong>Viaggi salvati</strong> — i luoghi, la data e la stima dei costi dei viaggi che salvi dal calcolatore. Solo tu puoi vederli.</li>" +
        "<li><strong>Posizione</strong> — solo se lo consenti e usi una funzione che ne ha bisogno, mai in background: dove hai parcheggiato, da dove cerchi nel radar e la partenza di un viaggio pianificato da «La mia posizione». Per scegliere la fonte giusta dei prezzi carburante, l’app ricava anche il tuo Paese da una posizione arrotondata a circa 11 km.</li>" +
        "<li><strong>Foto</strong> — l’immagine del profilo (controllata automaticamente da <strong>Google Cloud Vision</strong> prima che altri possano vederla), le immagini che alleghi a un feedback e le foto degli scontrini se usi la lettura scontrini.</li>" +
        "<li><strong>Funzioni social (facoltative)</strong> — se le attivi: un profilo pubblico (nome, username, immagine, una breve presentazione se la scrivi, livello, i badge e il titolo che scegli di mostrare, il tuo stile di guida, quante registrazioni tieni per tipo e, per la lega del risparmio, una sola percentuale — come sono cambiati i tuoi consumi rispetto ai 90 giorni precedenti, mai il consumo in sé; mai nulla sulle multe), amici, post, reazioni, e le segnalazioni e i blocchi che fai. Le tue valutazioni di distributori, parcheggi e officine sono salvate senza il tuo nome.</li>" +
        "<li><strong>Veicoli condivisi</strong> — le persone con cui condividi un veicolo vedono le registrazioni di quel veicolo, come spiega la schermata di condivisione. Non vedono mai l’archivio documenti né i tuoi viaggi salvati.</li>" +
        "<li><strong>Notifiche</strong> — se le consenti, un token del dispositivo per inviarti promemoria e messaggi.</li>" +
        "<li><strong>Feedback e assistenza</strong> — ciò che ci invii, l’indirizzo email per la risposta e, con una segnalazione, la versione dell’app e i dettagli del dispositivo che ci aiutano a riprodurre un problema.</li>" +
        "<li><strong>Statistiche d’uso e diagnostica — solo con il tuo consenso</strong> — <strong>Firebase Analytics</strong> (quali schermate apri ed eventi come il salvataggio di un rifornimento, inviati con un identificativo pseudonimo dell’account, un identificativo che Firebase assegna a questa installazione dell’app e una posizione approssimativa che Google ricava dal tuo indirizzo IP), <strong>Firebase Crashlytics</strong> (rapporti sugli arresti anomali) e <strong>Firebase Performance Monitoring</strong>. Non includono mai importi, prezzi, distributori, luoghi o note, non usano identificativi pubblicitari e non servono per la pubblicità. Puoi disattivarle in qualsiasi momento in <strong>Impostazioni → Privacy e dati</strong>.</li>" +
        "</ul>" +
        "<p>Non vendiamo i tuoi dati personali, non ti mostriamo pubblicità e non ti tracciamo nelle app o nei siti di altre aziende.</p>" +
        "<h2>2. Perché li usiamo</h2>" +
        "<ul>" +
        "<li>Per farti accedere e mantenere i tuoi dati allineati su tutti i tuoi dispositivi.</li>" +
        "<li>Per mostrarti registrazioni, costi, statistiche e veicoli, e calcolare ciò che chiedi — la stima di un viaggio, un promemoria, il prezzo del carburante vicino a te.</li>" +
        "<li>Per far funzionare le funzioni facoltative che usi: condivisione di un veicolo, amici e post, badge, missioni e profilo pubblico.</li>" +
        "<li>Per inviarti le notifiche che consenti, come un promemoria il giorno prima di un viaggio salvato.</li>" +
        "<li>Per mantenere il servizio sicuro, moderare ciò che viene condiviso, correggere problemi e, se acconsenti, capire quali parti dell’app vengono usate.</li>" +
        "<li>Per rispettare la legge e rispondere a richieste legittime.</li>" +
        "</ul>" +
        "<h2>3. Basi giuridiche (SEE e Regno Unito)</h2>" +
        "<p>Dove si applica il GDPR ci basiamo sul <strong>contratto</strong> (fornirti l’app a cui ti sei iscritto), sul <strong>legittimo interesse</strong> (sicurezza, prevenzione degli abusi, moderazione dei contenuti condivisi) e sul <strong>consenso</strong> per statistiche d’uso, rapporti sugli arresti anomali, monitoraggio delle prestazioni e funzioni AI facoltative. Puoi revocare il consenso in qualsiasi momento nell’app; ciò non incide sul trattamento precedente.</p>" +
        "<h2>4. Chi tratta i tuoi dati</h2>" +
        "<p>L’app funziona su <strong>Google Firebase e Google Cloud</strong>: Authentication, Firestore, Storage, Cloud Functions, Hosting e Cloud Messaging e, se acconsenti, Analytics, Crashlytics e Performance Monitoring. I tuoi dati sono conservati nell’Unione europea (Firestore multi-regione <em>eur3</em>; server in Belgio e in Italia). Google può trattare alcuni dati fuori dall’UE sulla base delle clausole contrattuali standard.</p>" +
        "<p>Alcune funzioni inviano ciò che cerchi a servizi aperti che rispondono alla ricerca. Ricevono il luogo, l’area o le coordinate e l’indirizzo IP del dispositivo, mai il tuo account:</p>" +
        "<ul>" +
        "<li><strong>OpenStreetMap</strong> per le mappe e il suo servizio <strong>Nominatim</strong> per trasformare la posizione di una sosta, o la tua posizione arrotondata, in un indirizzo o in un Paese;</li>" +
        "<li><strong>Overpass API</strong> (dati OpenStreetMap) per parcheggi e officine nell’area della mappa;</li>" +
        "<li><strong>Photon</strong> di komoot per la ricerca dei luoghi nel calcolatore di viaggio e <strong>Valhalla</strong> sui server FOSSGIS per i percorsi tra i tuoi luoghi;</li>" +
        "<li><strong>Open Charge Map</strong> per le colonnine di ricarica nella zona.</li>" +
        "</ul>" +
        "<p>I prezzi dei carburanti provengono dagli open data del Ministero delle Imprese e del Made in Italy (MIMIT); per ottenerli non inviamo nulla che ti riguardi. Quando apri un luogo in Apple Mappe, Google Maps o Waze, quell’app riceve la destinazione. Se è disponibile la lettura scontrini, la foto viene inviata a <strong>Google Gemini</strong> per leggerne gli importi. Le email sul tuo account (verifica, reimpostazione della password, risposte ai feedback) passano dal nostro servizio di invio email.</p>" +
        "<h2>5. Per quanto tempo li conserviamo</h2>" +
        "<p>Finché non elimini i contenuti o l’account. L’eliminazione dell’account diventa definitiva 30 giorni dopo la richiesta (vedi sotto). I dati di Analytics sono conservati per il periodo impostato in Google Analytics, e i nostri fornitori cloud mantengono backup di breve durata come descritto nelle loro informative.</p>" +
        "<h2>6. Eliminare account e dati</h2>" +
        "<p><strong>Nell’app:</strong> apri <strong>Impostazioni → Privacy e dati</strong> e scegli <strong>Elimina tutti i dati</strong> (oppure <strong>Elimina account</strong> nelle Impostazioni). Nulla viene eliminato subito: l’eliminazione è programmata 30 giorni dopo e fino ad allora puoi annullarla accedendo. Dopo, il tuo account e tutto ciò che contiene — registrazioni, veicoli, documenti, viaggi, foto, profilo e post — vengono cancellati in modo definitivo.</p>" +
        "<p><strong>Se non puoi usare l’app</strong> (per esempio hai perso l’accesso al dispositivo o all’email), invia una <strong>richiesta di eliminazione di account e dati</strong> con il nostro modulo web. Verifichiamo che l’account sia tuo, poi lo eliminiamo o ti aiutiamo a rientrare:</p>" +
        "<p style=\"margin: 0.75rem 0;\"><a href=\"https://forms.gle/aWW5DVoGRtX8Lz416\">https://forms.gle/aWW5DVoGRtX8Lz416</a></p>" +
        "<h2>7. I tuoi diritti</h2>" +
        "<p>A seconda di dove vivi, puoi accedere ai tuoi dati, correggerli, cancellarli o esportarli, limitarne o opporti al trattamento e revocare il consenso. Nell’app, <strong>Impostazioni → Privacy e dati → Esporta tutti i dati</strong> ti fornisce un file ZIP di CSV con le tue registrazioni. Non include le coordinate esatte né i file dell’archivio documenti, che puoi scaricare uno per uno dall’app. Puoi anche presentare reclamo a un’autorità di controllo — in Italia, il <em>Garante per la protezione dei dati personali</em>.</p>" +
        "<h2>8. Minori</h2>" +
        "<p>GasTrack non è destinata ai minori al di sotto dell’età per cui nel tuo Paese è richiesto il consenso dei genitori. Non raccogliamo consapevolmente dati personali di minori.</p>" +
        "<h2>9. Modifiche</h2>" +
        "<p>Potremmo aggiornare questa informativa. La data di «Ultimo aggiornamento» in alto cambia quando lo facciamo. Continuare a usare l’app dopo una modifica significa accettare l’informativa aggiornata, ove consentito dalla legge.</p>",
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
        "<h2>1. Ce que nous collectons</h2>" +
        "<p>Ce que GasTrack conserve dépend de ce que vous utilisez. Tout est enregistré dans votre compte.</p>" +
        "<ul>" +
        "<li><strong>Compte</strong> — votre adresse e-mail, le nom que vous indiquez et votre mode de connexion (e-mail et mot de passe, Google ou Apple), gérés par <strong>Google Firebase Authentication</strong> ; ainsi que votre langue, vos unités, votre devise et vos autres réglages.</li>" +
        "<li><strong>Véhicules et enregistrements</strong> — les véhicules que vous ajoutez (marque, modèle, année et, si vous les saisissez, plaque ou numéro VIN) et ce que vous enregistrez : pleins et recharges (quantités, prix, compteur, station), stationnements, entretiens, dépenses, amendes, coûts récurrents, assurances, détails d’achat ou de financement, et notes. Les véhicules archivés restent dans votre compte jusqu’à ce que vous les restauriez ou les supprimiez.</li>" +
        "<li><strong>Documents</strong> — les fichiers que vous gardez dans le coffre de documents d’un véhicule, comme la carte grise ou l’attestation d’assurance. Vous seul pouvez les voir.</li>" +
        "<li><strong>Trajets enregistrés</strong> — les lieux, la date et l’estimation de coût des trajets que vous enregistrez depuis le calculateur. Vous seul pouvez les voir.</li>" +
        "<li><strong>Position</strong> — uniquement si vous l’autorisez et utilisez une fonction qui en a besoin, jamais en arrière-plan : l’endroit où vous vous êtes garé, l’endroit d’où vous cherchez dans le radar, et le départ d’un trajet préparé depuis « Ma position ». Pour choisir la bonne source de prix des carburants, l’application déduit aussi votre pays d’une position arrondie à environ 11 km.</li>" +
        "<li><strong>Photos</strong> — une photo de profil (vérifiée automatiquement par <strong>Google Cloud Vision</strong> avant que d’autres puissent la voir), les images jointes à un retour, et les photos de tickets si vous utilisez la lecture des tickets.</li>" +
        "<li><strong>Fonctions sociales (facultatives)</strong> — si vous les activez : un profil public (nom, nom d’utilisateur, photo, une courte présentation si vous en écrivez une, niveau, les badges et le titre que vous choisissez d’afficher, votre style de conduite, le nombre d’enregistrements par type et, pour la ligue des économies, un seul pourcentage — l’évolution de votre consommation par rapport aux 90 jours précédents, jamais la consommation elle-même ; jamais rien sur les amendes), amis, publications, réactions, ainsi que les signalements et blocages que vous faites. Vos notes de stations, parkings et garages sont enregistrées sans votre nom.</li>" +
        "<li><strong>Véhicules partagés</strong> — les personnes avec qui vous partagez un véhicule voient ses enregistrements, comme l’explique l’écran de partage. Elles ne voient jamais son coffre de documents ni vos trajets enregistrés.</li>" +
        "<li><strong>Notifications</strong> — si vous les autorisez, un jeton de l’appareil pour vous envoyer rappels et messages.</li>" +
        "<li><strong>Retours et assistance</strong> — ce que vous nous envoyez, l’adresse e-mail pour notre réponse et, avec un signalement, la version de l’application et les détails de l’appareil qui nous aident à reproduire un problème.</li>" +
        "<li><strong>Statistiques d’utilisation et diagnostic — seulement avec votre accord</strong> — <strong>Firebase Analytics</strong> (les écrans ouverts et des événements comme l’enregistrement d’un plein, envoyés avec un identifiant de compte pseudonyme, un identifiant que Firebase attribue à cette installation de l’application et une localisation approximative que Google déduit de votre adresse IP), <strong>Firebase Crashlytics</strong> (rapports de plantage) et <strong>Firebase Performance Monitoring</strong>. Ils n’incluent jamais vos montants, prix, stations, lieux ou notes, n’utilisent aucun identifiant publicitaire et ne servent pas à la publicité. Vous pouvez les désactiver à tout moment dans <strong>Paramètres → Confidentialité et données</strong>.</li>" +
        "</ul>" +
        "<p>Nous ne vendons pas vos données personnelles, ne vous montrons pas de publicité et ne vous suivons pas dans les applications ou sites d’autres entreprises.</p>" +
        "<h2>2. Pourquoi nous les utilisons</h2>" +
        "<ul>" +
        "<li>Pour vous connecter et garder vos données à jour sur tous vos appareils.</li>" +
        "<li>Pour afficher vos enregistrements, coûts, statistiques et véhicules, et calculer ce que vous demandez — l’estimation d’un trajet, un rappel, le prix du carburant près de vous.</li>" +
        "<li>Pour faire fonctionner les fonctions facultatives que vous utilisez : partage d’un véhicule, amis et publications, badges, quêtes et profil public.</li>" +
        "<li>Pour envoyer les notifications que vous autorisez, comme un rappel la veille d’un trajet enregistré.</li>" +
        "<li>Pour sécuriser le service, modérer ce qui est partagé, corriger les problèmes et, si vous l’acceptez, comprendre quelles parties de l’application sont utilisées.</li>" +
        "<li>Pour respecter la loi et répondre aux demandes légitimes.</li>" +
        "</ul>" +
        "<h2>3. Bases légales (EEE et Royaume-Uni)</h2>" +
        "<p>Lorsque le RGPD s’applique, nous nous fondons sur le <strong>contrat</strong> (fournir l’application à laquelle vous vous êtes inscrit), l’<strong>intérêt légitime</strong> (sécurité, prévention des abus, modération des contenus partagés) et le <strong>consentement</strong> pour les statistiques d’utilisation, les rapports de plantage, le suivi des performances et les fonctions d’IA facultatives. Vous pouvez retirer votre consentement à tout moment dans l’application ; cela n’affecte pas le traitement antérieur.</p>" +
        "<h2>4. Qui traite vos données</h2>" +
        "<p>L’application fonctionne sur <strong>Google Firebase et Google Cloud</strong> : Authentication, Firestore, Storage, Cloud Functions, Hosting et Cloud Messaging et, si vous l’acceptez, Analytics, Crashlytics et Performance Monitoring. Vos données sont stockées dans l’Union européenne (Firestore multirégion <em>eur3</em> ; serveurs en Belgique et en Italie). Google peut traiter certaines données hors de l’UE sur la base des clauses contractuelles types.</p>" +
        "<p>Certaines fonctions envoient ce que vous recherchez à des services ouverts qui y répondent. Ils reçoivent le lieu, la zone ou les coordonnées et l’adresse IP de votre appareil, jamais votre compte :</p>" +
        "<ul>" +
        "<li><strong>OpenStreetMap</strong> pour les fonds de carte, et son service <strong>Nominatim</strong> pour transformer la position d’un stationnement, ou votre position arrondie, en adresse ou en pays ;</li>" +
        "<li><strong>Overpass API</strong> (données OpenStreetMap) pour les parkings et garages de la zone affichée ;</li>" +
        "<li><strong>Photon</strong> de komoot pour la recherche de lieux dans le calculateur de trajet, et <strong>Valhalla</strong> sur les serveurs FOSSGIS pour les itinéraires entre vos lieux ;</li>" +
        "<li><strong>Open Charge Map</strong> pour les bornes de recharge de la zone.</li>" +
        "</ul>" +
        "<p>Les prix des carburants proviennent des données ouvertes du ministère italien des Entreprises (MIMIT) ; rien vous concernant n’est envoyé pour les obtenir. Quand vous ouvrez un lieu dans Plans d’Apple, Google Maps ou Waze, cette application reçoit la destination. Si la lecture des tickets est proposée, la photo est envoyée à <strong>Google Gemini</strong> pour en lire les montants. Les e-mails concernant votre compte (vérification, réinitialisation du mot de passe, réponses aux retours) passent par notre service d’envoi d’e-mails.</p>" +
        "<h2>5. Durée de conservation</h2>" +
        "<p>Jusqu’à ce que vous supprimiez le contenu ou votre compte. La suppression du compte devient définitive 30 jours après la demande (voir ci-dessous). Les données d’Analytics sont conservées pendant la durée réglée dans Google Analytics, et nos fournisseurs cloud conservent des sauvegardes de courte durée comme décrit dans leurs politiques.</p>" +
        "<h2>6. Supprimer votre compte et vos données</h2>" +
        "<p><strong>Dans l’application :</strong> ouvrez <strong>Paramètres → Confidentialité et données</strong> et choisissez <strong>Effacer toutes mes données</strong> (ou <strong>Supprimer le compte</strong> dans les Paramètres). Rien n’est supprimé immédiatement : la suppression est programmée 30 jours plus tard, et vous pouvez l’annuler jusque-là en vous connectant. Ensuite, votre compte et tout ce qu’il contient — enregistrements, véhicules, documents, trajets, photos, profil et publications — sont définitivement effacés.</p>" +
        "<p><strong>Si vous ne pouvez pas utiliser l’application</strong> (par exemple si vous avez perdu l’accès à votre appareil ou à votre e-mail), envoyez une <strong>demande de suppression du compte et des données</strong> via notre formulaire web. Nous vérifions que le compte vous appartient, puis nous le supprimons ou vous aidons à vous reconnecter :</p>" +
        "<p style=\"margin: 0.75rem 0;\"><a href=\"https://forms.gle/aWW5DVoGRtX8Lz416\">https://forms.gle/aWW5DVoGRtX8Lz416</a></p>" +
        "<h2>7. Vos droits</h2>" +
        "<p>Selon votre lieu de résidence, vous pouvez accéder à vos données, les rectifier, les effacer ou les exporter, limiter leur traitement ou vous y opposer, et retirer votre consentement. Dans l’application, <strong>Paramètres → Confidentialité et données → Exporter toutes les données</strong> vous fournit une archive ZIP de fichiers CSV avec vos enregistrements. Elle n’inclut pas les coordonnées exactes ni les fichiers du coffre de documents, que vous pouvez télécharger un par un dans l’application. Vous pouvez aussi saisir une autorité de protection des données — en Italie, le <em>Garante per la protezione dei dati personali</em>, en France la CNIL.</p>" +
        "<h2>8. Enfants</h2>" +
        "<p>GasTrack n’est pas destinée aux enfants n’ayant pas l’âge à partir duquel le consentement parental n’est plus requis dans votre pays. Nous ne collectons pas sciemment de données personnelles d’enfants.</p>" +
        "<h2>9. Modifications</h2>" +
        "<p>Nous pouvons mettre à jour cette politique. La date de « Dernière mise à jour » en haut change lorsque nous le faisons. Continuer à utiliser l’application après une modification vaut acceptation de la politique mise à jour, dans la mesure permise par la loi.</p>",
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
