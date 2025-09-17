window.addEventListener('load', (event) => {
    document.querySelector('#idActionC1').addEventListener('click', actionC1);
    document.querySelector('#idActionC2').addEventListener('click', actionC2);
    document.querySelector('#idActionC3').addEventListener('click', actionC3);
    document.querySelector('#idActionC4').addEventListener('click', actionC4);
    document.querySelector('#idActionC5').addEventListener('click', actionC5);
});

// ---------------------------------------------------------------------------

function afficherObjet(resultat) {
    const container = document.getElementById('output');
    container.innerHTML = JSON.stringify(resultat, null, 3);
}

// ---------------------------------------------------------------------------

function actionC1() {
    // Mettre la main sur le tableau HTML où l'on devra injecter les lignes
    const tableElem = document.getElementById('tableNotes');

    // Ch'tite méthode pratique pour rajouter injecter les lignes nécessaires au tableau HTML
    const display = (examens, tableauHTML) => {
        examens.forEach((examen) => {
            const ligne = document.createElement('tr');
            ligne.appendChild(document.createElement('td')).textContent = examen.name;
            ligne.appendChild(document.createElement('td')).textContent = examen.points;
            ligne.appendChild(document.createElement('td')).textContent = examen.note;
            tableauHTML.appendChild(ligne);
        });
    };

    // ---------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------

    // Créer une copie avec la note fédérale en plus
    const examensAvecNotes = [{ name: 'Ducobu', points: 2, note: 1.0001 }];

    // Afficher
    display(examensAvecNotes, tableElem);
}

// ---------------------------------------------------------------------------

function actionC2() {
    // Mettre la main sur le tableau HTML où l'on devra injecter les lignes
    const tableElem = document.getElementById('tableNotes2');

    // Ch'tite méthode pratique pour rajouter injecter les lignes nécessaires au tableau HTML
    const display = (examens, tableauHTML) => {
        examens.forEach((examen) => {
            const ligne = document.createElement('tr');
            ligne.appendChild(document.createElement('td')).textContent = examen.name;
            ligne.appendChild(document.createElement('td')).textContent = examen.points;
            ligne.appendChild(document.createElement('td')).textContent = examen.note;
            tableauHTML.appendChild(ligne);
        });
    };

    // ---------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------

    // Afficher
    display(examensAvecNotes, tableElem);
}

// ---------------------------------------------------------------------------

// Liste de mots à utiliser.
const mots = ['chat', 'chien', 'loup', 'hippopotame', 'rat', 'souris', 'éléphant', 'mouche', 'abeille', 'fourmi', 'araignée'];

// ---------------------------------------------------------------------------
//
//               )        (                 ) (           (         (
//            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
//      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
//      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
//     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
//     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
//     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
//      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
//       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
//
// ----------------------------------------------------------------------------

function actionC3() {
    // ---------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------
}

function actionC4() {
    // ---------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------
}

// ---------------------------------------------------------------------------

function actionC5() {}
