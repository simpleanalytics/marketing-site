<template>
  <div>
    <PressMention :slug="slug">
      <h2>Automated transcript</h2>

      <div v-if="locale === 'nl'">
        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:00):
        </p>
        <p class="mt-0">
          Welkom en superleuk dat je kijkt of luistert naar deze nieuwe
          aflevering van Van Start tot Ster. Dit is dé video podcast van
          Onderneming Panel waarin ik in gesprek gaan met ervaren en succesvolle
          ondernemers. Met als doel om als beginnend of startend ondernemer
          zoveel mogelijk van te leren. Vandaag bij mij aan tafel iemand die
          door anderen omschreven is als een serial entrepreneur. Ik zal straks
          nog even vragen of hij zichzelf daarin kan vinden en of hij dat en wat
          dat dan eigenlijk is. Maar hij is heel mooi en vooral heel open bezig
          met een bedrijf genaamd Simple Analytics. Zijn concurrent van Google
          Analytics, waarin je privacy veilig kan meten wie er allemaal op jouw
          website is en welke pagina's ze dan bezoeken. En wat ik vooral
          interessant vind is de manier waarop hij dat bouwt. Zijn mentaliteit
          over ondernemen en natuurlijk ook de inhoud van de bedrijven. Dus
          vandaag hier in onze studio Iron Brands Iron. Welkom!
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:01):
        </p>
        <p class="mt-0">Ja, thanks! En thanks voor de intro!</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:01):
        </p>
        <p class="mt-0">Ja, geen probleem.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:01):
        </p>
        <p class="mt-0">
          Concurrent van Google Analytics. Mooi! Volgens mij. Ik weet niet of
          zij al weten dat wij bestaan, dus zo groot zijn we nog niet. Maar
          hoeveel gebruikers hebben jullie? Uh, nou, we hebben nu denk ik zo'n
          duizendvierhonderd betalende klanten, maar we hebben ook net een een
          free plan gelunched en dat gaat wel tegen de 15.000 gebruikers aan die
          het nu gratis gebruiken op hun website.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:02):
        </p>
        <p class="mt-0">Is dat sinds kort naar 15.000 gegaan?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:02):
        </p>
        <p class="mt-0">
          We hadden wel al een aantal gebruikers die het op een bepaalde manier
          gratis gebruikten, maar nu hebben we het echt gelaunched en zijn we
          het gaan pushen. En nu zie je gewoon dat. Ja, het hield toch heel veel
          mensen tegen dat dat wij gingen concurreren met Google Analytics, dat
          een gratis product was en wij gingen er geld voor vragen en je kunt er
          een stuk minder mee.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:02):
        </p>
        <p class="mt-0">En dat was de pitch. Bedankt voor het kijken.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:02):
        </p>
        <p class="mt-0">
          Dat was een moeilijke pitch en nu zien we van oké, nou hebben we een
          bepaalde versie gemaakt die we een beetje, nou ja, gecapped hebben op
          wat je er allemaal mee kunt, maar die we dus wel als een soort van nou
          ja free version naar aan gebruikers kunnen geven. En je ziet dan oh
          ja, dan wil het mensen toch wel graag ja gaan testen, gebruiken en
          kijken of ze dan willen vervangen voor voor Google Analytics
          inderdaad.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:02):
        </p>
        <p class="mt-0">
          Ja, concurrent van jou zijn heel bescheiden. In een andere interview
          die ik van jou gezien heb dat jullie nog geen marktaandeel van ze aan
          het afpakken zijn.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:03):
        </p>
        <p class="mt-0">
          Nee. Ja, ik denk dat je die analytics markt. Ja, een soort van pie
          chart ziet. Dan zie je dat 90% van de websites die je in Analytics
          tool gebruiken nog op Google Analytics zitten. En ik denk dat wij op
          0,0001%. Dat is een heel klein beetje marktaandeel.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:03):
        </p>
        <p class="mt-0">Ja, maar toch een hele lading gebruikers ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:03):
        </p>
        <p class="mt-0">
          Ja. Zeker. En dat gaat ook de goede kant op. En het groeit heel hard.
          En nou ja, en we zijn. We zijn met z'n tweeën en dus nou ja, dan heb
          je ook niet uh 10% van de marktaandeel nodig om een goeie business te
          draaien.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:03):
        </p>
        <p class="mt-0">
          Waar je ook heel open in bent is dat het wel een doel is. Bij jou heb
          ik de term Erg leren kennen eigenlijk. Even opgezocht, want jij deelt
          op je op je LinkedIn hoeveel omzet jouw bedrijven maken eigenlijk. En
          Simpele Analytics zit. Nu heb ik staan op $414.000 ARR er en ARR is
          dan jaarlijkse recurring omzet.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:04):
        </p>
        <p class="mt-0">Ja exact.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:04):
        </p>
        <p class="mt-0">Terugkomende omzet. En het doel is?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:04):
        </p>
        <p class="mt-0">
          1 miljoen. Ja nee, dat is wel het doel. En en dan gaan we denk ik ook
          even een beetje terug. Want Adriaan is Simpel Analytics eigenlijk
          begonnen. Dat is mijn compagnon en Adriaan is een een developer en die
          en en privacy enthousiast zal ik maar zeggen. En na vijf jaar geleden
          liep hij er gewoon tegenaan dat iedereen maar te pas en te onpas
          Google Analytics op zijn website plakt. En nou, daar zitten best wel
          wat haken en ogen aan, vooral als je het vanuit een privacy oogpunt
          gaat bekijken. En toen had hij zoiets van ja dat kan toch niet? En het
          is ook ontzettend complex voor voor heel veel mensen om die tool
          uberhaupt te gebruiken. Ja, en 90% van de mensen gebruikt maar 5% van
          de functionaliteiten die erin zitten. Dus hij had zoiets van ja,
          waarom kan ik niet gewoon een een heel simpele basic vervanging voor
          een Google Analytics bouwen die je dus wel de insights geeft die je
          die je graag wilt zien, maar die wel voldoet aan alle regelgeving en
          die niet iedereen en alles te pas en te onpas maar loop te tracken.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:05):
        </p>
        <p class="mt-0">
          Nou en? Nou, zoals uh wat developers dan doen als ze problemen hebben,
          dan gaan ze zelf een oplossing bouwen. Dus hij had dat gebouwd en toen
          was ik nog helemaal niet in beeld en toen heeft hij dat gelanceerd. En
          toen kwamen er eigenlijk heel veel bedrijven, maar ook developers met
          uh, met met websites. Die kwamen langs die zeiden A Maar ja, dit heb
          ik nodig want ik hoef al die poespas hoef ik allemaal niet en het
          klopt, het is gewoon ja niet privacy onvriendelijk en ja het eh
          Google. We hebben natuurlijk de Europese regelgeving. Nou ja, daar
          heeft Google redelijke maling aan. En dus toen kwamen er eigenlijk een
          soort van, nou ja, zal ik zeggen, eerste honderd gebruikers die zoiets
          hadden van hey, dit is een pijnpunt en jij bent dit aan het oplossen.
          En nou ja, zodoende is dat eigenlijk een soort van ja organisch gaan
          groeien. En ik ben daar nou ben daar later ingestapt en toen hadden
          wij met elkaar de afspraak gemaakt van ja maar als we nu gaan groeien
          zeg maar, wat is dan het doel?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:06):
        </p>
        <p class="mt-0">Zeg maar wat.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:06):
        </p>
        <p class="mt-0">De stip nodig?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:06):
        </p>
        <p class="mt-0">
          Eigenlijk Wat zouden we dan willen? En je kunt dan allemaal blij
          kanten uit en je funding ophalen. En je ziet heel LinkedIn staat
          helemaal vol. Oh, zoveel funding opgehaald en maar uiteindelijk, want
          je wil het gewoon goede business draaien waar je nou ja, je je
          vrijheid in hebt om om ja je je ei in kwijt te kunnen, maar waar je
          goed van kan leven. Maar ook ja, hoe? Een business die ook past bij je
          leven en bij nou ja, waar, wat je wat je wil bereiken. En toen zijn we
          dat gaan afvragen. En toen kwamen we eigenlijk op de conclusie nou ja,
          het zal toch echt wel mooi zijn als we gewoon een business kunnen
          draaien die nou ja, 1 miljoen. We moesten een bedrag bedenken van oké,
          dat is de stip 1 miljoen per jaar.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:07):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:07):
        </p>
        <p class="mt-0">
          En en. Nou dat dat in S. In de software business is dat best wel een
          een mooi doel. Want software is wel schaalbaar, maar ook wel moeilijk
          om van van de grond te krijgen. Kijk, en als er 1 miljoen per jaar aan
          omzet zit, als je dat in een softwarebedrijf en we zijn maar met z'n
          tweeën en nou en dan zitten niet al te veel andere kosten aan dan, dan
          zou dat een geweldig doel om dat te behalen. Dus we zitten bijna
          halverwege, dus we liggen nog steeds op koers.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:07):
        </p>
        <p class="mt-0">Ja leuk! Heb je ook een. Durfde je ook een een tijd?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:07):
        </p>
        <p class="mt-0">
          Ja, binnen vijf jaar en binnen vijf jaar? Nou ja en uh. Want toen uhm
          toen ik bij Adriaan bij kwam. Dus het is zo gegaan dat. Adriaan heeft
          het bedrijf opgericht en gegroeid totdat er acht of negen k per maand
          binnenkwam. En toen stabiliseerde het een beetje. Maar dat kwam omdat
          Adriaan een engineer is en dus eigenlijk ook alleen maar engineering
          dingen wil doen, dus aan het product wil werken, maar zeker niet met
          marketing wil bezighouden of met sales bezig houden. En ik kwam net
          een beetje uit een ander bedrijf dat ik had opgericht, maar dat zal ik
          zo nog ff. Daar heb je vast vragen over.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:08):
        </p>
        <p class="mt-0">Ja, zeker weten.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:08):
        </p>
        <p class="mt-0">
          Ehm en toen ben ik Adriaan leren kennen en toen hebben we afgesproken
          van ja ik heb hem ooit een keer na een tijdje gebeld en gezegd van ja
          moet jij niet gewoon een business partner zoeken op het gebied van die
          alles doet behalve het product bouwen zodat jij product kan bouwen,
          maar dat die business wel gaat groeien Want dat is toch een component
          component die je nodig hebt. Groei en bouwen en groeien. En dat
          groeien was er niet. Nou ja, en toen, ja, toen ben ik daar. Toen hij
          nou ja zeg, dat ie 10K per maand deed ingestapt en toen hebben we
          gezegd oké, dit doet al tien km per maand en dan vanaf hier moeten we
          binnen vijf jaar wel naar de. Wat is dat per maand 80K per maand? En
          we zitten nu op. Nou was het 3435 en we zijn twee jaar bezig dus gaaf!
          Het gaat nog wel de goeie kant op.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:08):
        </p>
        <p class="mt-0">
          Het zijn goeie signalen ook, want het gaat ook vaak hier over het
          valideren van een idee of of wanneer heb je nou iets goeds te pakken?
          En als Adriaan het kon groeien naar tien keer per maand door eigenlijk
          hele grote aanhalingstekens alleen maar het product te maken en niet
          eens na te denken over hoe bereik je zoveel mogelijk mensen of wie
          gaat het? Dat is goed dat het dan naar.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:09):
        </p>
        <p class="mt-0">
          Tien keer per maand. Het moeilijkste was al gedaan eigenlijk. Ja, ja,
          ja, in principe van van nul naar één is een stuk moeilijker dan van
          één naar tien.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:09):
        </p>
        <p class="mt-0">
          Hoe heet dat boek ook alweer? Nul naar één? Van wie is dat ook alweer?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:09):
        </p>
        <p class="mt-0">Eh.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:09):
        </p>
        <p class="mt-0">Meneer Thiel?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:09):
        </p>
        <p class="mt-0">
          Ja, Pieter Thiel. Zero to One. Dat is het moeilijkste. Want er zijn
          zoveel. Nou ja, ik denk sowieso iets proberen. Ik denk dat daar al
          heel veel mensen op stuk gaan. Iedereen, ik denk iedereen heeft
          ideeën. Iedereen die je tegenkomt zegt allemaal business ideeën.
          Iedereen denkt erover na. Of iedereen. Oh, dat zou een goed business
          idee zijn. Maar om dan uiteindelijk je idee te vertalen naar. Ga dan
          iets doen. Probeer dan eens iets van dat thema te maken van dat beest.
          Daar gaat echt al 90% de mist in. En. En dan zijn er nog de mensen die
          overblijven en die gaan dus wel iets doen. Dus die gaan of die maken
          een website of die gaan hun product bouwen. Ja, en dan heb je nog het
          punt van oké, nou dat dat is al heel wat. Maar probeer dan maar eens
          iemand daar geld voor te laten betalen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:10):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:10):
        </p>
        <p class="mt-0">
          En dat is dat ja. Hoe ga je dan van die nul naar één? En daar gaan er
          natuurlijk ook al ontzettend veel de mist in, want het is gewoon best
          wel moeilijk om. Nou ja, ik had het in mijn eerste business. Dat je
          iets gaat bouwen en dan ga je naar een klant toe en dan. En dan zeg je
          nou dat. Dit kost dan € 1.000 per jaar en dan zegt die klant ook
          € 1.000. En dan denk ik oh ja, maar wat doe je dan eigenlijk? En
          hoeveel klanten heb je al? En ja, ja ja, we hebben vijf klanten en ja
          nee, maar t is allemaal nog in beginfase. Ja, dan moet je wel van
          goede huize komen om iemand te kunnen overtuigen om geld te laten
          betalen voor voor jouw dienst of product of whatever. Nou dat was
          Adriaan dus ook al gelukt.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:10):
        </p>
        <p class="mt-0">Hoe? Hoe dan? Weet je dat?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:10):
        </p>
        <p class="mt-0">
          Ja. Dus uh ja, nu gaan we wel al snel de de de nerd hoek van het
          internet op. Oké? Even even kort wat Adriaan. Je had het gebouwd en
          toen launched op Hacker News en Reddit en daar zitten gewoon veel.
          Daar worden veel dingen. Dat zijn veelbezochte websites. Daar zitten
          ook veel engineers op die daar dingen met elkaar delen. Nou aan
          Adriaan deelde dat van hey ik heb dit gebouwd en we gaan nu uh
          launchen en als je het wil kun je een keer proberen. Nou en dat was
          die initiële spike dat mensen zeiden van wow dit is vet. En daar
          kwamen we onze eerste gebruikers uit. Nou die vertelde het weer een
          beetje tegen andere gebruikers. Nee, ik heb dat Google Analytics weg
          geflikkerd, gebruik nu dit en dat moet je ook gebruiken en dat is vet.
          Nou en zo is Adriaan dus eigenlijk dus zonder marketing te doen wel
          aan aan die eerste klanten gekomen, maar dat was wel een signaal voor
          mij dat ik dacht holy shit, daar zit al iets.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:11):
        </p>
        <p class="mt-0">
          Ja, want hij heeft het waarschijnlijk soort van per toeval ook verteld
          aan een groep mensen die gaven om privacy en die wisten wat alle
          downside van Google Analytics bijvoorbeeld zijn op dat moment.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:12):
        </p>
        <p class="mt-0">
          Maar vooral hij heeft het natuurlijk gebouwd en dat is vaak de beste
          manier om een business te bouwen omdat hij tegen een probleem aanliep.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:12):
        </p>
        <p class="mt-0">Ja, vanuit zichzelf.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:12):
        </p>
        <p class="mt-0">
          En hij wilde dat probleem voor zichzelf oplossen, want hij begreep
          niet waarom iedereen maar Google Analytics op zijn website plakte.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:12):
        </p>
        <p class="mt-0">Bijna WordPress hosting, Google Analytics.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:12):
        </p>
        <p class="mt-0">
          Ja, en dan er niet bij stil staan wat voor impact dat heeft en en wat
          dat betekent voor je de gebruikers die op je website komen. Dus hij
          liep tegen dit probleem aan. Zie voor zichzelf een oplossing gaan
          bouwen. Niet eens zo van oh, ik heb een idee. Ik ga een oplossing
          bouwen. Nee, hij ging een oplossing bouwen voor het probleem waar hij
          zelf tegenaan liep. En uiteindelijk deelt hij dat dan in een soort van
          nou ja, noem het community met mensen die allemaal hetzelfde zijn als
          dat hij zijn. Want hij hing daar ook altijd rond op dat hacker nieuws
          en op Reddit. Ja. Dus uiteindelijk ja, het is een soort van natuurlijk
          proces waarom simpel Analytics in het leven is gekomen. En dat is denk
          ik ook vaak de beste manier waarop bedrijven gestart worden.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:13):
        </p>
        <p class="mt-0">
          Ja, het is een hele goeie. Je hoeft niet heel hard te trekken aan
          ideeën of producten die misschien niemand wil, of wel of niet.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:13):
        </p>
        <p class="mt-0">
          Ja, ik denk dat het vaak bij en dat daar was ik zelf toen ik begon ook
          wel debet aan dat ik wilde. Ik wilde heel graag ondernemen. Maakt me
          niet uit wat ik wil ondernemen, want ondernemen is cool en je hoeft
          dan niet voor een baas te werken. En ja. Maar oké, wat gaan we doen?
          Ja, geen idee. Dan ga je ideeën bedenken. Nou nee, dat dat niet de
          goede manier. En dan kom je en dan kom je bij dingen uit als ja, dan
          gaan we de Airbnb voor katten bouwen en dat soort dingen. Ja, wij
          kwamen uit op stage platform omdat ik toen stagiaire was. Dat was de
          enige reden waarom stage platform zijn gaan bouwen. Ehm. Maar ja. En
          uiteindelijk is dat nog wel redelijk goed gegaan.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:13):
        </p>
        <p class="mt-0">
          Ik wou net zeggen ik heb hier een getalletje staan, maar omdat jij dat
          allemaal zo open deelt, dat stage platform dat heet fix. Ja is actief
          volgens mij in Amsterdam en omstreken. Daar is het vooral groot.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:14):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:14):
        </p>
        <p class="mt-0">En er staat toch toch $120.000 ARR?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:14):
        </p>
        <p class="mt-0">
          Ja dus ook recurring. Dat is altijd wel belangrijk die ARR, want het
          is wel gewoon ja. Mensen betalen per maand of betalen per jaar en dat
          zijn vaak gewoon kleine bedragen. Maar als je die bij elkaar optelt,
          ja dan komt er een toch redelijk bedrag uit. En wat ook ieder jaar als
          het goed is weer terugkomt. Want mensen als het goed is blijft de
          klant.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:14):
        </p>
        <p class="mt-0">Als ze blij zijn. Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:14):
        </p>
        <p class="mt-0">
          Uhm. Maar misschien is wel leuk om dat verhaal en hoe ik dan bij
          simpel om die even mee te pakken.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:14):
        </p>
        <p class="mt-0">
          Laten we nog één stapje terug, want je hebt gestudeerd. Ja, klopt.
          Eerst International Business, toen Sustainable Finance. Allebei in
          Maastricht. Je komt oorspronkelijk uit Maastricht.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:14):
        </p>
        <p class="mt-0">Mooie stad van het land.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:14):
        </p>
        <p class="mt-0">
          Schijnt. Ja, weet ik niet van horen zeggen. Je hebt gestudeerd en ik
          ben wel benieuwd hoe je het dan. Want ik kan me voorstellen als je
          finance studeert, dan ga je daarna een baan zoeken en dan ga je
          werken. Maar ergens heb jij bedacht. Ondernemen is tof en ik wil dat
          doen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:15):
        </p>
        <p class="mt-0">
          Ja, dat klopt, maar daar had die studie finance wel deels mee te
          maken. Want ja zeg maar. Dus ik kom uit Maastricht en ik ben altijd
          iemand geweest die een beetje zo het gebaande pad is gegaan. Dus ik
          ging naar de middelbare school. Ik deed VWO. Dan wordt er verwacht dat
          je gaat studeren. Nou, dan gaan we studeren. Dan ga je international
          business doen. Lekker breed, want dan heb je geen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:15):
        </p>
        <p class="mt-0">Keuzes.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:15):
        </p>
        <p class="mt-0">
          Te maken, geen keuzes te maken. En daarna? Dan ging Oh shit, moet toch
          een keuze maken? Nou, doe dan maar finance, want dan. Dat dat dan kom
          je wel goed terecht. Dus ik Finance gekozen, Finance gedaan. Toen
          moest je stage lopen en toen werd het opeens allemaal serieus. Dus
          toen ging ik ook in als stagiair in pak naar mijn werk bij een finance
          consultant. En toen kwam ik erachter van holy shit, wat is dit saai
          zeg. Maar dit, dit, dit is het niet. Er moet meer zijn in het leven
          dan dan dit. En oprecht. Ik heb daar leuke stage gehad en leuke
          mensen, maar daar kwam ik er pas achter van wow dit, dit, dit is het
          gewoon niet. En dan ga je pas echt zoeken van oh ja, wat dan wel? En
          toen kwam ik er redelijk snel achter van oh nou ja, misschien is
          Startups, misschien is dat wel wat. Want dat werd een beetje in de
          media gewoon cool over gedaan. Ik zeg nou, dat moet dan wel cool zijn.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:16):
        </p>
        <p class="mt-0">
          Dus het was nooit echt zo van oh weet je, bij andere mensen hebt is
          met de paplepel ingegoten of. Mijn vader is ondernemer of of uw hele
          familie. En dan? Dan ga je daar een beetje in mee. En dat, dat was het
          niet. Het was eigenlijk pas toen ik erachter kwam wat ik niet leuk
          vond. Dat ik ging onderzoeken wat het dan wel was. En toen ben ik via
          via ook weer een stage bij een startup. Toen kwam ik erachter van oh,
          volgens mij is dat ondernemen. Je kunt gewoon een bedrijf beginnen
          schijnbaar. En dan? Nou, dan kun je vette dingen doen. Nou en toen is
          dat een beetje begonnen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:16):
        </p>
        <p class="mt-0">Het klinkt zo heerlijk simpel als je het zo vertelt.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:16):
        </p>
        <p class="mt-0">
          Ja, maar vaak is dat toch wel zeg maar. Ja, ik kan nu wel verhalen
          ophangen dat dat ik altijd de beste was om ondernemer te worden en dat
          soort dingen. Maar ja, dat is niet zo.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:16):
        </p>
        <p class="mt-0">
          Nee, maar ik bedoel het. Je kan je gewoon inschrijven en ik ga nu
          ondernemen en je kan gewoon gaan. Zo simpel is het wel. Maar het voelt
          intimiderend voor velen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:17):
        </p>
        <p class="mt-0">
          Ja. Ja. Nee, maar dat kwam bij mij. Dat kwartje viel bij mij ook pas
          toen ik na die finance stage nog eerst een stage ging doen bij een
          andere ondernemer. En dat was gewoon een heel klein team van vier man.
          En dan? Dan word je heel erg betrokken. Dan voel je je als het ware al
          ondernemer. Maar dan heb je niet de risico's, maar je bent continu
          bezig met elkaar om dat bedrijf op poten te krijgen. Niet gelukt
          overigens. Bedrijf bestaat niet meer, maar daaruit kreeg ik wel veel
          ideeën van oh wow, je kunt dit zomaar doen. En als je een idee hebt
          dan kun je je inschrijven bij de KvK en een website maken. En ja, dan
          ben je aan het ondernemen zal ik maar zeggen. Dus de drempel voelde
          voor mij altijd heel groot van oh ik studeer nu Finance en ga die
          carrière ladder op naar Oh ondernemer. Ja, daar zit nog ontzettend
          veel tussen. Maar voor mij was het eigenlijk alleen maar die stap van
          hey, ik ga eens kijken hoe die wereld van die startups eruit ziet.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:18):
        </p>
        <p class="mt-0">
          En toen was het ondernemen. Want ja, het is maar een klein stapje
          eigenlijk.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:18):
        </p>
        <p class="mt-0">
          Ja dus die stage die je liep, waar je het over had toen je stagiair
          was, dat was bij die startup. En toen dacht je ik wil gaan ondernemen
          en toen ben je begonnen met Fix.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:18):
        </p>
        <p class="mt-0">Ja, exact.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:18):
        </p>
        <p class="mt-0">
          Oké, en dat was met anderen ook. Dus je had gelijk al Ja ja.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:18):
        </p>
        <p class="mt-0">
          Nou dit was gewoon zo dat je Ik. Ik ging dus die stage bij die start
          up doen en dat klopte. Maar toen had ik wel het idee van oh we kunnen
          gaan ondernemen. Geen idee wat we dan gingen ondernemen. Ehm. En toen
          was ik met een vriend van me, waar ik dus ook mee samenwoonde. Die was
          wel een beetje hetzelfde, dus die was ook al en ook wel redelijk
          complementair, want die was ik was meer dan ik, voelde me meer een
          marketing business sales persoon en hij was meer aan de designer kant.
          Dus ik dacht nou oké, we kennen elkaar goed, we kunnen het goed
          vinden. Een beetje dezelfde ideeën en nog een beetje complementair.
          Moeten wij niet gewoon samen een business gaan beginnen? En toen
          hadden we nog eentje. Een jongen. De vriend van ons. En die deed dan
          data science en zei Ja, maar je kunt ook programmeren. Ja, is goed. En
          dan Oké, wat gaan we dan doen? Nou, zullen we dan een stage platform
          beginnen?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:19):
        </p>
        <p class="mt-0">
          Want ik liep stage toen dacht die goeie reden. Goeie reden ja, nul
          validatie. We hebben het.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:19):
        </p>
        <p class="mt-0">Waterdicht.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:19):
        </p>
        <p class="mt-0">
          Ja, nul validatie. We zijn het gewoon gaan bouwen en En toen, toen we
          dat met elkaar afspraken, dachten we ook wel echt van oké, dit wordt
          wel. Dit wordt wel gewoon echt de nieuwe Uber. Dit wordt wel gewoon
          echt ontzettend groot En we gaan funding ophalen en we gaan ja een
          kantoor openen
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:19):
        </p>
        <p class="mt-0">Noedels eten, tafeltennistafels, zitzakken.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:19):
        </p>
        <p class="mt-0">
          Ja, en dan kom je erachter dat het in de werkelijkheid toch allemaal
          iets anders gaat. Maar uiteindelijk hebben we dus en ik ben er best
          trots op dat we dus als nou ja, drie mensen die uit de net uit de
          schoolbanken kwamen en zijn gaan bouwen. Nul validatie, nul ideeën
          nul. Niet eens fatsoenlijke e-mail naar iemand geschreven in mijn
          leven en dat je dan ja business gaat bouwen en het dan ook nog
          redelijk volhoudt, want we zijn in drie jaar tijd gegroeid naar die ja
          die € 100.000 per jaar. Nou gelukkig zit dat niet aan. Niet heel veel
          kosten aan het runnen van een online stage platform. voor drie jaar
          wel op heel erg minimumloon kunnen overleven. En ja, en het bedrijf
          bestaat nog steeds. Het werkt. En dus mijn compagnon waar ik dan mee
          begonnen ben, die die runt dat nog en nou, dat gaat goed.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:20):
        </p>
        <p class="mt-0">Ja, dit is een succesverhaal.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:20):
        </p>
        <p class="mt-0">Ja, ja, ja, ik zie het ook echt als succes.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:20):
        </p>
        <p class="mt-0">
          Ja, en wel een beetje met zo'n don't try this at home smaakje. Wat je
          zegt met niet gevalideerd gewoon maar begonnen. Ja.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:20):
        </p>
        <p class="mt-0">
          Ja. Nou ik. Ik zou dus zeggen please try this at home.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:20):
        </p>
        <p class="mt-0">Try this at home.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:20):
        </p>
        <p class="mt-0">
          Ja, want uiteindelijk heb je hier zo ontzettend veel van geleerd. En
          en en Dit is denk ik wel de basis geweest, waardoor ik dus met simpele
          analytics en daarna ook met mijn andere bedrijf jullie host het ook
          wel een beetje weet hoe het dan wel moet, want ik weet vooral hoe het
          niet moet en je bent in alle valkuilen. Ben je al een keer getrapt?
          Dus de volgende keer gaat het wel gewoon een stuk sneller. Of je kunt
          sneller valideren of je je. Je kunt beter inschatten wat wel of wat
          niet werkt.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:21):
        </p>
        <p class="mt-0">Wat voor valkuilen zijn dat dan? Bijvoorbeeld?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:21):
        </p>
        <p class="mt-0">
          Ja, nou ja, gewoon alles. Probeer maar eens je eerste klanten te
          krijgen met je stage platform en dan kom je erachter dat je. Dan word
          je honderd keer uh nee gewezen totdat het een keer klaar is en dan ga
          je dan pas begrijpen van. Maar waarom zeggen mensen dan nee? En hoe
          zou ik de volgende keer ervoor zorgen dat mensen iets eerder ja
          zeggen? Maar ook dat je om begrotingen gaat maken en dat je pitch
          decks gaat maken en dat je erachter komt dat het allemaal bullshit is
          eigenlijk.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:21):
        </p>
        <p class="mt-0">Pitch decks.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:21):
        </p>
        <p class="mt-0">
          Ja. Ja, maar je bent gewoon oké. Ja misschien wel misschien. Ik vind
          het pitch deksel 90% van de pitch. Vind ik bullshit. Ja en en Kan je
          zo uitleggen waarom? Maar je bent gewoon helemaal met dingen bezig
          waar je die vaak heel veel. Veel denken, veel dromen. Maar ja,
          eigenlijk als je de de realiteit bekijkt, ja dan dan dan is er zijn er
          gewoon andere dingen nodig. En natuurlijk konden wij met dat stage
          platform ook geen funding ophalen, maar dan gingen we wel drie weken
          lang en een pitch deck zit te timmeren.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:22):
        </p>
        <p class="mt-0">Ja. Mm hu?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:22):
        </p>
        <p class="mt-0">Ja, zeg maar. Nee.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:22):
        </p>
        <p class="mt-0">
          Nee, maar dat is precies wat dat is. Inderdaad, dat. Dat is een les,
          want dan ga je wel nadenken van was dat nodig? En wat hadden we anders
          kunnen doen in die drie weken?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:22):
        </p>
        <p class="mt-0">
          Ja. Je bent gewoon met, met met andere, vaak met andere dingen bezig
          dan dat je zou moeten zijn. Maar je weet gewoon niet beter. Maar dan?
          Dan moet je gewoon een keer ervaren. Dan moet je gewoon tegenaan
          lopen. Ik zie mensen die. Iedereen wil altijd graag ondernemen.
          Iedereen vindt het beeld van een ondernemer heel sexy. Kan je
          vertellen dat valt. Dat valt echt reuze mee. Uhm. Maar ja. Maar
          iedereen is dan vooral bezig met met de strategie en met het nadenken
          over hoe kunnen we het groot maken of hoe ziet mijn pitch eruit? En
          dan kunnen we funding ophalen en dan. Ja, dat zijn gewoon allemaal. Of
          een begroting maken. Ja, begroting, je kunt hem. Na een maand kun je
          hem weg flikkeren. Ja natuurlijk. Ik snap dat als je misschien ook
          iets verder bent, dat je in een naar voren naar nou vooruit wil kijken
          en en investeringen wil maken. Maar als je gaat beginnen heb je echt
          geen begroting nodig. En als je daar dan in maakt.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:23):
        </p>
        <p class="mt-0">
          Doe maar gewoon je kosten keer twee, je omzet door de helft en plakken
          nog maar een jaar achteraan want ja het klopt niet en en en je bent er
          dan toch heel veel tijd mee mee bezig. Dus ja al al die lessen van die
          die drie jaar en dan ga je aan een aan mijn nieuwe bedrijf werken. Ja
          dat neem je dan wel mee en dan En dan kan ik me voorstellen. Dus
          daarom vooral die wel. Try this at home, want je leert er gewoon
          ontzettend veel van. En als je dus niet die try this at home doet en.
          En als ik die fix niet had gedaan, dan was ik gewoon blijven hangen in
          het lezen van allemaal business boeken. En dan? Dan had ik heel veel
          slimheid opgedaan.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:24):
        </p>
        <p class="mt-0">Maar echt vet slim geweest.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:24):
        </p>
        <p class="mt-0">
          Dan had ik gewoon geen idee nog van wat er allemaal op je afkomt. Ja,
          en daar blijven mensen in hangen, hebben ideeën en vinden ondernemer,
          zijn heel sexy. Dus gaan ze zero to one lezen en gaan ze allemaal
          boeken van Elon Musk lezen en. Maar uiteindelijk moet er iets
          geproduceerd worden en dan moet je gewoon de hort op gaan en dan paar
          keer in je gezicht gemept worden en dan weer door.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:24):
        </p>
        <p class="mt-0">Ja, handen in de modder, gewoon gaan.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:24):
        </p>
        <p class="mt-0">Ja, ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:24):
        </p>
        <p class="mt-0">Ja toch?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:24):
        </p>
        <p class="mt-0">Ja, ja, zeker.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:24):
        </p>
        <p class="mt-0">
          Dus je hebt uh dan uh veel geleerd. Drie hele leerzame jaren bij Fiks.
          Ja. En toen kwam je Adriaan tegen toch? Want je kende hem nog niet,
          zei je was niet in de picture en hij was al begonnen met Simple
          Analytics. Ja, hoe is dat dan gegaan? Want je kan niet gewoon
          aankloppen en zeggen hey, mag ik meespelen? Die tijd is.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:24):
        </p>
        <p class="mt-0">
          Nee. Nee, dat klopt. Uhm. Dus na drie jaar fix was ik een beetje op
          bij Fix. En daar bedoel ik mee dat we hadden idee dat wij het grootste
          bedrijf van Nederland gingen worden en uit eindelijk was dat niet zo.
          En we hadden wel gewoon een goed bedrijf en dat liep en dat loopt nog
          steeds. Uhm. Maar ik had wel zoiets. Het was wel twee stappen vooruit,
          één achteruit en er zat niet die die hockeystick in die die je op zoek
          bent. En we liepen ook tegen allemaal dingen aan dat ehm, nou ja, dat
          uh sommige dingen niet gebouwd konden worden omdat we jaren ook niet
          de kennis in huis hadden en dat we gewoon met z'n drieën waren
          begonnen. Leuk vrienden business maken, maar dat je. Op een bepaald
          moment wilde ik daar naar door en toen heb ik voor mezelf de keus
          gemaakt van ja, ik eh. Ik denk dat ik voor mezelf misschien iets
          anders moet gaan zoeken omdat ik een andere ambitie heb en een andere
          richting in wil. En dat was heel moeilijk.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:25):
        </p>
        <p class="mt-0">
          Was ook best wel pijnlijk, want het is je doet, we zijn business. Ik
          ben business gaan doen met mijn vrienden, dus ja als we ja, je hebt
          allemaal contracten et cetera. En dat zit allemaal wel zakelijk goed
          in elkaar. Maar ja, je bent er wel maten en je. Sommige mensen hebben
          een ander idee over business en gelukkig zijn we daar allemaal goed
          uitgekomen. Maar dat was een moeilijke periode en toen ben ik me gaan
          afvragen oké, met de bagage en de kennis die ik nu heb opgedaan die
          afgelopen drie jaar. Wat wil ik dan? En nou ja, en toen kwam ik er wel
          achter dat ik toch wel meer in de software hoekje wilde zijn en ook
          met iemand willen samenwerken die heel erg technisch was en vooral een
          product heeft. Want bij Fix We hadden we een platform, dus we hadden
          een website, maar we verkochten in principe gewoon stagiaires en en
          en. Soms kregen we dan klanten terug die boos op ons waren omdat de
          kwaliteit van een stagiair niet goed was. En ik Ja, maar dat dat heb
          ik niet in in de hand zeg maar.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:26):
        </p>
        <p class="mt-0">
          Wij zijn alleen de matchmaker en uiteindelijk is ja moeten jullie ook
          beoordelen of die stagiair bij jullie passen et cetera. Maar je. Ik
          vond het dus heel lastig dat ik de kwaliteit van mijn product niet
          altijd in de hand had. Ja dus. Toen dacht ik oké, ik wil gewoon die
          software kant op, want dan hebben we kunnen we een nou ja, een
          schaalbare oplossing maken en dan weet je diegene die het wil kopen.
          Die weet wat hij koopt. Want hier is het product en dat kost € 10 per
          maand of € 100 per maand. Maakt niet uit, maar dan krijg je dat en
          dan. Dus daar was ik echt naar op zoek. Maar ik wist ook van mezelf
          dat ik dat nooit ging kunnen bouwen. Dus ik heb het wel geprobeerd om
          software cursussen te doen, maar ja, dat is niks voor mij.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:27):
        </p>
        <p class="mt-0">Heb je de de PHP voor beginners of zoiets.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:27):
        </p>
        <p class="mt-0">
          Te pakken gehad? Ja, honderd days of no code heet die cursus. Maar
          uiteindelijk ben ik daardoor wel een soort kringetje terecht gekomen
          in Amsterdam met mensen die dus zelf software maken. In die hackers
          is. Dat is ook wel een overkoepelende term daarvoor. En toen ging ik
          daar steeds meer in en toen ging ik ook naar wat borrels. Ook om
          mensen te leren kennen die in dat in dat hoekje zaten. En op één van
          die borrels uh ben ik uh Adriaan tegen het lijf gelopen en ik vroeg
          nou ja, wat? Uh wat doe jij dan? Nou, dat verhaal op zich.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:27):
        </p>
        <p class="mt-0">Was Simpel Analytics.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:27):
        </p>
        <p class="mt-0">Simpel Analytics.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:28):
        </p>
        <p class="mt-0">Tienduizend.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:28):
        </p>
        <p class="mt-0">
          Tienduizend. En toen dacht en dacht holy shit, wat, wat ontzettend
          lijp. En toen vroeg ik aan hem Ja, hoe kom je je klanten dan bij je?
          En hoe doe je. Ja, hoe? Hoe werkt dat? En ja, geen idee. Die komen
          gewoon. En toen dacht ik ja, oké, hier moet ik bij zijn. En nou ja,
          dat is dat was een beetje gelijktijdig met dat ik uit Fix ging. En
          toen dat helemaal zeker was of dat meer speelde, toen heb ik gewoon
          een telefoon gepakt. Heb ik hem opgebeld en heb ik gezegd He. Ken je
          me nog? Drie maanden geleden op die borrel?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:28):
        </p>
        <p class="mt-0">Drie maanden tussen.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:28):
        </p>
        <p class="mt-0">Ja, misschien nog wel meer trouwens.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:28):
        </p>
        <p class="mt-0">Lang.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:28):
        </p>
        <p class="mt-0">
          Lang. Ja. Uhm ja. Ken je me nog? En zoek jij niet gewoon een
          businesspartner die je de business kant doet? En toen zei ja. Toen we
          het gesprek hadden had ik dacht schoot dit ook door mijn hoofd. Want
          hij liep er dus heel erg tegenaan dat hij ook op een bepaald moment
          stabiliseren. En dan. Hij wist van zichzelf dat hij marketing moest
          doen, maar dat zat daar gewoon niet in. En dat dat.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:29):
        </p>
        <p class="mt-0">Helemaal geen zin in.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:29):
        </p>
        <p class="mt-0">Als in.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:29):
        </p>
        <p class="mt-0">Iedereen hier.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:29):
        </p>
        <p class="mt-0">
          Iedere dag stond hij gewoon op met een knoop en ze maakte Ja shit,
          eigenlijk moet ik marketing doen, maar ik heb er geen zin in. Ik wil
          gewoon dingen bouwen. Ja dus. Eigenlijk was het heel snel daarna al
          van oké, ja, dan moeten we niet dan een kop koffie gaan drinken. En
          nou, van het één is het ander gekomen, maar we kenden elkaar
          natuurlijk niet. Nee dus dat was ook wel een risico voor vooral voor
          hem, want hij laat mij toe tot zijn bedrijf, maar ook wel voor mij,
          want ik ga hier wel mijn tijd en energie insteken. Nou, wat er toen
          dus gezegd hebben of wat ik tegen hem gezegd heb is weet je wat, ik ga
          gewoon drie maanden ga ik gewoon gratis 1A2 dagen voor jou aan de bak.
          Ja en tijdens die drie maanden kun je hem gewoon altijd los knippen.
          Gewoon no strings attached. Geef mijn hand. Als jij niet vindt dat het
          werkt of om wat voor reden dan ook, dan dan doen we het niet.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:29):
        </p>
        <p class="mt-0">
          Maar als je na drie maanden nog steeds het idee hebt van allright,
          dit, dit moeten we doen, dan moet je er ook mee rekening houden dat ik
          wel ondernemer ben en ik ook gewoon een groot deel van de taart dan
          wil hebben. Dus als je daarvoor open staat. Dan gaan we die aan. Je
          kunt ten allen tijde opzeggen, maar na drie maanden dan? Ja, als je
          dan wil door wil, dan ja. Moeten we ook wel. Worden we echt partners
          en samen ondernemer in in deze business. Natuurlijk kwamen bij die
          drie maanden wisten we allebei voor dit moeten we gewoon doen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:30):
        </p>
        <p class="mt-0">
          Dit wordt m. Ja, want je ging eigenlijk van samenwerken met je
          vrienden en huisgenoten bij Fix, die je heel goed kent en je weet hoe
          ze zijn en je weet hoe ze communiceren naar samenwerken met een gast
          die op een borrel ontmoet hebt.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:30):
        </p>
        <p class="mt-0">Ja, ja nee, dat klopt dus ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:30):
        </p>
        <p class="mt-0">
          En dan met zo'n drie maanden eigenlijk trial period kregen ze de Iron
          Trial?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:30):
        </p>
        <p class="mt-0">
          Ja. Nou ja, en andersom ook, want ik ging ook drie maanden met hem
          werken dus ja. Dus ik ging ook kijken of of me dit beviel en of dit.
          En vaak merk je wel gewoon na drie maanden van oké dit, dit dit werkt
          of dit werkt niet. En nou we hadden gewoon meteen allebei door. Dat
          werkte. En sindsdien, nou ja oké, contract gemaakt, Afgesproken. Nee,
          je wilde ondernemer worden. Ja, hoe zit dat? Wat zijn dan percentages?
          Nou, daar kwamen we ook al snel uit. Sindsdien hebben we contracten in
          de la en nooit meer naar gekeken en alleen maar door.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:31):
        </p>
        <p class="mt-0">Ja. Het contract ligt er wel.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:31):
        </p>
        <p class="mt-0">
          Ja, ja. Je moet ook een contract hebben ja. Dat zou ik iedereen
          aanraden te timmeren. Gewoon alsjeblieft zakelijk dicht. Want ja, als
          je dan uit elkaar moet, dan kan dat redelijk makkelijk. En dan heb je
          gewoon een contract staat hier. Dit hebben we afgesproken en dan geven
          we elkaar de hand en dan? Dan ga je eruit. En soms is het helemaal
          niet zo makkelijk.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:31):
        </p>
        <p class="mt-0">
          Maar ja, vaak. Nou niet vaak. Maar het. Soms knalt het. We hebben met
          met met zakenpartners, Go Founders.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:31):
        </p>
        <p class="mt-0">
          Ja, maar dan is het juist goed om iets op papier te hebben.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:31):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:31):
        </p>
        <p class="mt-0">
          Gewoon voor. Voor voor het ja. Voor het geval dat je dit soort
          situaties hebt. Dat je dat bij fixen ook al. Ja fix hadden we ook
          contract. Ehm, maar wat moeilijker daar was is omdat ik me gewoon heel
          emotioneel betrokken voelde bij het bedrijf. Want ik had dat
          natuurlijk zelf wel opgericht en dat het dan niet helemaal was
          geworden van dat ik ervan gehoopt had. En dat je dan daar afstand van
          gaat doen. Plus je doet ook afstand. Nou ja, in in zakelijke zin van
          je vrienden. Ja, en dat maakt het gewoon heel erg persoonlijk. En dat
          maakte dat afstand doen ook veel moeilijker. Kijk, als Adriaan en ik
          nu ruzie krijgen of er niet uitkomen of iets anders over dingen
          denken, dan hebben we het gewoon het contract. En Nou, we zijn wel
          matig geworden, maar we zijn in eerste instantie zakelijk en daarna
          een maatje. En dus als er iets nu aan de hand is, dan hebben we gewoon
          het contract En daar staat precies in wat er gebeurt bij situatie x,
          y, z.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:32):
        </p>
        <p class="mt-0">
          Ja, en dan kunnen we gewoon wat makkelijker uit elkaar.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:32):
        </p>
        <p class="mt-0">
          Ja, maar ik ik vind dat altijd wel lastige gesprekken. Dat je tijdens
          het opstellen en het dichttimmeren. Dan moet je echt een goede goede
          timmerman voor zijn vind ik. Ja.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:32):
        </p>
        <p class="mt-0">
          Ja. Nou ja, je hebt daar mensen voor die dat kunnen en die dat leuk
          vinden. Maar ehm, ja, nee, ik. We hebben dat ook wel pas gedaan na die
          drie maanden dus. Want je wil niet daarmee beginnen, dus het is heel
          erg belangrijk en je weet dat dat dat dat er ooit moet komen. Net
          zoals een aandelen verdeling en dat soort dingen. Maar ik heb gewoon
          gezegd ik ik wil. Ik vind dit een hele interessante mogelijkheid om
          met jou samen te werken en ik wil daarin ook best wel wat risico nemen
          door te zeggen ik ga gewoon drie maanden voor je werken en als het
          niks als je niks vindt dan dan ben ik ook weer weg en dan is dat mijn
          verloren tijd en en energie. Maar als dat dus maar dan begin je eerst
          met het leuke. Met dat ga je samen aan iets werken en dan ga je een
          band opbouwen. En na drie maanden denk je allebei oh dit is super nice
          en dan weet je ook allebei oké, we vinden het heel nice, dit is top En
          dan moeten we nu wel even dingen afspreken.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:33):
        </p>
        <p class="mt-0">
          Ja, maar als je gaat beginnen met allemaal dingen afspreken en heel
          lang onderhandelen over percentages, je percentages daar en je moet
          nog beginnen met überhaupt samenwerken, Nou dat is denk ik niet een
          goede start.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:33):
        </p>
        <p class="mt-0">
          Nee. Ja en dit is ook mooi, want je hebt na die drie maanden heb je
          allebei die goodwill. Je wil allebei door, dus dan ja, dan ga je die
          gesprekken ook wat fijner aan denk ik. Je hebt nog een bedrijf. Je
          noemde het net al even UniHosted. Engels? Nederlands?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:34):
        </p>
        <p class="mt-0">UniHosted, een hostingbedrijf.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:34):
        </p>
        <p class="mt-0">
          Nou, dit is een heel simpel bedrijf. Jullie specialiseren namelijk in
          het hosten van UniFi controller hosting voor MSP's.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:34):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:34):
        </p>
        <p class="mt-0">Tuurlijk.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:34):
        </p>
        <p class="mt-0">
          Ja, ik had hier. Ik had hier ook. Ik had hier ook nog nooit van
          gehoord moet ik eerlijk zeggen voordat ik dit ging beginnen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:34):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:34):
        </p>
        <p class="mt-0">
          Uhm. En ik zou het ook niet. Super interessant om helemaal te
          specificeren wat wat het doet, maar het is een een hosting service.
          Dus wij hosten een UniFi controller en UniFi controller is eigenlijk
          een soort dashboard die jouw wifi kastjes kan beheren. En die
          installatiebedrijven, die hebben die dashboards nodig. Nou en? Wij
          hosten dat op een server en daar betalen die installatiebedrijven. Die
          MSP's, die betalen ons daar dan per maand voor om dat te doen. En ik
          had hier nog nooit van gehoord. Maar dit is ook wel weer een zelfde
          soort situatie waar ik met met Adriaan in terecht ben gekomen. En dat
          kwam doordat ik had simpele analytics. Adriaan Ik wilde een kantoortje
          en we hebben een kantoortje in Amsterdam en we zijn maar met z'n
          tweeen en dat kantoor is best groot, dus we hadden daar allemaal desks
          ingezet en ook eigenlijk tegen mensen uit die nou ja, ik noem het even
          de nerd community in Amsterdam gezegd van nou we hebben hier desks als
          jij en leuke interessante eigen tech projecten aan het werken bent.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:35):
        </p>
        <p class="mt-0">
          Nou ik kom bij ons zitten en huur gewoon een desk voor € 250 in in de
          maand en dan heb je toch een soort van collega's zonder dat je
          collega's hebt.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:35):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:35):
        </p>
        <p class="mt-0">
          En dus dat dat. Daar zitten nu acht mensen en iedereen is aan zijn
          eigen projecten bezig. En nou ja, ik weet hoe die mensen bij elkaar
          zijn gekomen. Is gewoon ook een uh. Ik had gewoon op Twitter gegooid
          en toen kwam iemand. Hij Ik zit ook in Amsterdam, maar een keer
          langskomen, ja is goed, kom maar langs. Nou die had een desk en die
          zei ik heb ook nog een vriend, mag die ook langskomen? Ja doet hij
          ook. Engineeren en ja oké, laat ook maar langskomen dan. Nou en? Een
          van die jongens was Dries. En Dries, die werkte als software engineer
          bij een. En een development agency. En die was dan on the side. Gewoon
          aan het prutsen met met projecten.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:36):
        </p>
        <p class="mt-0">Zoals ze dat goed kunnen.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:36):
        </p>
        <p class="mt-0">
          Ja. Dus ik ging naast Dries staan en ik zeg: "Nou, wat ben je nou
          eigenlijk allemaal aan het doen? Vertel eens?" En toen ging 'ie dit
          uitleggen wat ie aan het doen was. En hij is dit gewoon begonnen omdat
          hij dit zelf een keer wilde doen. Maar toen kwam hij erachter dat het
          hosten daarvan de UniFi controller gewoon ontzettend lastig is. En
          toen dacht ik ja, hier gaan sowieso meerdere mensen tegenaan lopen.
          Ja, dat kan ik niet. Een oplossing bouwen die dat stukje automatiseert
          en die dat stukje hosting uit handen neemt, want hij snapte het niet.
          Nou en toen dacht ik ja Dries, volgens mij is dit gewoon een business.
          En toen was ja. Ja, maar hoe dan? En ja. En hoe werkt dat dan? En nou,
          toen ben ik naar Adriaan gestapt en gezegd ja, volgens mij heeft Dries
          daar best wel iets interessants. Ze moeten daar niet eens naar kijken.
          Nou en toen heeft Adriaan daar technisch naar gekeken. Adriaan met me
          terug. Nou, dat is wel interessant.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:37):
        </p>
        <p class="mt-0">Ja, hij heeft een business.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:37):
        </p>
        <p class="mt-0">
          Dus hebben we dat Dries gestapt en hebben we tegen Dries gezegd van
          hé, we willen je een voorstel doen. Dat product wat je aan het bouwen
          bent, dat is hun business. En wij kennen Dries al wel een beetje en
          wisten dat hij gewoon hartstikke goeie engineer was. En toen hebben we
          Dries Dries gezegd van ja we we zullen wij niet de business kan doen
          en dan met name ik, zoals ik dat ook bij simpele analytics heb gedaan,
          kunnen we dat ook hier doen? Nou en toen zei Dries dat is goed. Daar
          staat stond ie wel open voor. Dat heeft Dries z'n baan opgezegd.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:37):
        </p>
        <p class="mt-0">Echt?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:37):
        </p>
        <p class="mt-0">
          Ja, en toen is hij bij Simpele Analytics komen werken als freelance
          engineer om toch inderdaad wel z'n zijn levensonderhoud te kunnen
          voldoen. En uh nou en toen uh uh zijn we dat gaan bouwen? En
          uiteindelijk heeft die simpele analytics nu afgeschaald en is hij drie
          dagen in de week daar. En het gaat nu steeds meer tot aan fulltime en
          heeft hij, nou ja, zijn eigen business. Maar ik ook, want ik ben daar
          dan ook weer onderdeel van.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:38):
        </p>
        <p class="mt-0">
          Ja wat een leuke gang van zaken zo. En het is ook weer. Ik herken heel
          erg de start van junior hosted en Simple Analytics. Die lijken op
          elkaar, want het zijn allebei mensen die in hun eigen kring of met hun
          eigen bezigheden eigenlijk tegen dingen aan lopen. Ja, dat is ook denk
          ik een mooie tip die je ook als kijker of luisteraar mee kan nemen is
          wil je nou ondernemen, ga dan ook bij jezelf kijken. Waar loop je
          tegenaan?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:38):
        </p>
        <p class="mt-0">
          Oh, 100%. En dan vooral als je nog een beetje technisch bent en je
          wilt die. Die SaaS, hoe heet dat, Software hoek in? Ja, dat, dat vind
          ik heel mooi. Ja, dan al helemaal. Want en. Want vaak ik heb nu zeg
          maar wel met Adriaan en Dries twee. compagnons eigenlijk, die gewoon
          ontzettend naar factor tien slimmer zijn dan ik. Bij wijze van. Maar
          die ook gewoon heel diep in zo'n probleem kunnen gaan zitten en daar
          een oplossing voor kunnen bouwen. En nou ja, dat dat dat ja, dat. Die
          skills had ik niet, dus die zocht ik in een in een compagnon die
          complementair is dan aan mij. Maar op hun beurt kregen zij het niet.
          Nou Adriaan dan wel semi, maar niet echt van de grond en hebben ze
          toch iemand nodig die een soort van business of marketingkennis daar
          op los wilt laten. Dus je hebt beide componenten nodig. Dus ik zou
          zeggen stel je wilt die. Nou ja, ik kan alleen het over die die een
          beetje over die software hoek hebben.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:39):
        </p>
        <p class="mt-0">
          Maar stel je wil daarin en je bent redelijk technisch of je vindt dat
          leuk of in ieder geval om met techniek bezig te zijn, ga op zoek naar
          je eigen problemen, want als jij een probleem hebt, dan is het
          redelijk de kans groot dat andere mensen ook tegen het probleem
          aanlopen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:39):
        </p>
        <p class="mt-0">Dat is het hè?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:39):
        </p>
        <p class="mt-0">
          En als je dan inderdaad ook kunt delen in een community van mensen
          waarvan je weet dat zij dat probleem ook hebben, nou ja, dan ga je al
          snel van nul naar één. En ben jij iemand met een wat meer commerciële
          achtergrond, dan kun je ook zelf een business starten. Maar ik heb
          ervoor gekozen. Ja, ik moet gewoon die die jongens zoeken die die
          problemen kunnen oplossen en die ondersteunen en helpen om hun
          business te groeien. Want jij hebt ook die groei component nodig waar
          zij of geen zin en geen tijd of.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:40):
        </p>
        <p class="mt-0">Ja buikpijn gevoel bij hun.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:40):
        </p>
        <p class="mt-0">
          Ja, dat neem ik weg bij hun. Ja en zo hebben twee keer nu dan ja,
          redelijk succesvolle partnership als daar.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:40):
        </p>
        <p class="mt-0">
          Ook een reden dat het heel erg dat ik heel erg uitkeek naar deze
          aflevering was omdat we. We hebben al een tijd contact, maar het
          duurde even voordat we konden opnemen. Omdat je. Omdat jij keihard
          ging ondernemen, maar dan wel vanuit was het.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:40):
        </p>
        <p class="mt-0">Een balie.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:40):
        </p>
        <p class="mt-0">Vanuit balie ondernemen?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:40):
        </p>
        <p class="mt-0">
          Ja, het klinkt een beetje te cliché, maar dat klopt. We waren
          eigenlijk met ons kantoortje, hebben gewoon gezegd dat we gewoon een
          maandje een balie gaan zitten.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:40):
        </p>
        <p class="mt-0">Met die acht bureaus die je ook verhuurt.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:40):
        </p>
        <p class="mt-0">
          Zeg maar. Na vijf van de acht zijn meegegaan, plus nog drie andere
          jongens die een beetje via via kennen, maar die wel dus allemaal aan
          hun eigen tech bedrijf werken, Dus die allemaal een beetje locatie
          independent zijn. Daar heb ik gezegd van ja, november is niet de
          leukste maand in Nederland. Zal dat niet gewoon ergens anders gaan
          zitten? En zo gezegd, zo gedaan. Hebben we vorig jaar ook gedaan. En
          ja, dat dat beviel eigenlijk hartstikke goed. En nu weer. Maar ja, als
          ik tegen iedereen vertel die denkt oh lekker gaat ie in Bali op
          vakantie. Maar we hebben er echt hard gewerkt.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:41):
        </p>
        <p class="mt-0">Dat geloof ik ook.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:41):
        </p>
        <p class="mt-0">Echt hard gewerkt.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:41):
        </p>
        <p class="mt-0">
          Jawel, jawel, jawel, ook. Wat ik jou op LinkedIn heb zien delen. Maar
          ook kijk, dat je daarheen gaat, betekent niet gelijk dat je op een
          brommertje rond moet gaan crossen en alleen maar aan het strand hangt.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:41):
        </p>
        <p class="mt-0">Wel veel brommertje gezeten.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:41):
        </p>
        <p class="mt-0">
          Brommers zijn daar the way to go, toch? Ik ben er nog niet geweest.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:41):
        </p>
        <p class="mt-0">
          En En ook al strand gezien, maar het verbaasde me dus eigenlijk
          hoeveel we daar gedaan kregen. En dat komt omdat je je hele sociale
          leven is daar non-existent, je je agenda's gewoon leeg. Dus waar ik
          thuis was en dan. Ik woon samen met mijn vriendin en ja, je nichtje
          komt woensdag eten en ja, dat weet je. Gewoon leuk. Nou ja, misschien
          dat ze luistert. Ik vind het heel leuk als je komt eten, maar er zijn
          zoveel dingen en je weekenden worden helemaal vol gepland. En daar was
          het gewoon van. Ja oké. Tuurlijk hebben we leuke dingen gedaan in t
          weekend, maar dan zeiden ook van jongens van ja ik wil effe doorpakken
          en eh even ongestoord uh werken. En er waren altijd wel drie vier die
          zeiden ja is goed. Ik ook. En dan gingen d'r vier. Andere jongens
          gingen weet ik veel iets iets anders doen. Ja, maar je kon dus veel
          makkelijker je eigen agenda maken dan dat je soms thuis vastzit in de
          sociale. Sociaal vangnet? Ja, niet sociaal vangnet, maar sociale
          Speciale valstrikken.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:42):
        </p>
        <p class="mt-0">
          Ja, ik snap wat je bedoelt, maar daar sloeg ik ook op aan, want je zei
          het ook aan de telefoon. Ik zei het aan het begin van de aflevering al
          als je gaat ondernemen. Dat hoeft niet op één manier. Dat hoeft niet
          met een kantoor en dan 40 uur per week daar zitten en een pak en
          klanten. En er zijn heel veel manieren. En juist als je met z'n allen
          naar Bali gaat omdat het in november koud is hier, dat ja, dat sprak
          mij heel erg aan.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:43):
        </p>
        <p class="mt-0">
          Ja, ja. En ik denk ook dat dat mooi is van ondernemen. Dat je dus je
          eigen draai aan kunt geven. En dat proberen we ook echt terug te laten
          komen. Vooral bij simpele analytics in het product. Dat we niet altijd
          dingen doen die heel erg goed zijn voor de conversie, maar die
          bijvoorbeeld wel leuk zijn om te doen omdat je daar dan plezier van
          krijgt. En je kunt je eigen creativiteit ook los in je eigen product.
          Een soort van creatie van nou ja, van ons twee. En je kunt ook
          bepaalde keuzes maken. Ehm, op basis van dingen waar je voor staat.
          Bijvoorbeeld wij draaien geen ads en dat doen we. Dat is een
          principekwestie en ik weet dat we als we uit zouden kunnen draaien,
          dan zouden we onze omzet nog veel harder kunnen laten groeien. Maar
          wij willen ons eigenlijk een beetje afzetten tegen Google en tegen het
          ecosysteem in Google. En dan gaan we dat ecosysteem funden met met met
          geld om onze ads te laten draaien.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:43):
        </p>
        <p class="mt-0">
          Dat zijn ads bijvoorbeeld die in de zoekresultaten van Google bovenaan
          verschijnen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">
          Dus dan zijn wij eigenlijk het ecosysteem van Google aan het
          supporten.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">
          Terwijl het ja. Bottom line zou er best wel voor extra geld kunnen
          opleveren. En het is heel veel mensen daarmee. Laat je kansen liggen
          en zeg ja, maar dit is gewoon niet de manier waarop wij ons bedrijf
          willen bouwen of onszelf willen profileren. En we hebben bijvoorbeeld
          ook dat wij. Wij delen al onze cijfers, dus wij. Als je naar simpel en
          links punt com gaat slopen dan zie je gewoon al onze data achter en
          dan moet het wel even updaten.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">Ik wou.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">Net zeggen ik heb nu de.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">Kans om in je.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">Gezicht.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">
          Te zeggen. Ik ging daar dus heen. Ik vond dat interessant, maar het is
          al de de de. De grafiek is niet helemaal up.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">De grafiek is niet up to date. Dus Adriaan updaten?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">
          Ja, ik klik de hele tijd op reminder sturen. Komen die dan bij Adriaan
          aan?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">
          Die komen binnen bij ons dus dat is wel mooi. Dus blijf klikken. Maar
          daar staat onze omzet is wel up to date en onze NPS score. Maar we
          hebben dat dashboard eigenlijk gemaakt. Dat je dus kunt zien hoeveel
          omzet komt er binnen? Wat geven we uit aan kosten? Wat is bij ons
          winst? Omdat we. Nou, dat heeft een aantal redenen waarom we dat
          gedaan hebben, maar dat is ook weer een soort van eigen creatie aan je
          bedrijf toevoegen. Dat we zoiets hadden van dat zoveel bullshit over
          bedrijven bouwen op op sociale media. Je kent al die die vastgoed
          gasten wel die huizen kopen in Dubai. En welke Rolex wil jij en dat
          soort? Ja en en. Zelfs op professionele platforms zoals LinkedIn is
          het allemaal goed weer show. Het is allemaal visie, VCF Nee, we hebben
          zoveel funding opgehaald en zien we hier een foto van drie gasten op
          een Amsterdamse brug en een wit hemd waar ze staan van ja we hebben
          weer zoveel funding opgehaald en uiteindelijk over een jaar ja hoor je
          ze niet meer omdat ze gewoon in een of ander luchtkasteel aan het
          bouwen zijn.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:45):
        </p>
        <p class="mt-0">
          Ja en ik denk Adriaan wilde dat en dus Adriaan zijn idee geweest.
          Gewoon ja, ze gaan laten zien hoe het werkt of hoe.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:45):
        </p>
        <p class="mt-0">Het echt.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:45):
        </p>
        <p class="mt-0">
          Gaat, ja hoe het gaat. En je ziet ook dat je in die grafiek die eerste
          drie jaar is gewoon struggelen en dan komt er niet zo heel veel binnen
          en je ziet het gestaag groeien. En je ziet dus ook van oh ja, dat
          duurt dus heel lang. En als je een softwarebedrijf bouwt, dan zijn dit
          de kosten en kosten waarmee je rekening waar wij rekening mee moeten
          houden en je je krijgt gewoon een iets beter beeld bij. Nou hoe hoe
          het gaat. En dat wilden we juist ook uitdragen dat we willen laten
          zien. Ja, je hoeft niet altijd mee te doen aan die vastgoed kopen in
          Dubai verhalen of aan die funding ophalen. Je kunt gewoon een bedrijf
          bouwen, zelf uit je eigen zak als je daar gewoon heel hard aan werkt
          en ook daar vijf jaar heel hard aan wilt werken en dat je dan ook. Dat
          hoeft allemaal niet binnen een maand terug te komen, het gaat gewoon
          gestaag en is ook niet zo dat je van nul naar honderd gaat een paar
          maanden. Je ziet dat gewoon heel gestaag groeien.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:46):
        </p>
        <p class="mt-0">
          Nou plus, we zitten nu een beetje in de privacy space, dus
          transparantie. Transparantie vinden we belangrijk. Mensen vinden het
          ook gewoon vet dat we dat doen, dus het is ook een soort van marketing
          branding achtig iets dus. Ja dus. Dus om terug te komen op het punt ze
          zijn er wel. Dingen waarmee je dus je eigen ondernemers verhaal of je
          eigen bedrijf een beetje op ja op jouw manier kunt kunt inrichten. En
          als dit een voorbeeld van. Als voorbeeld van dat je naar Bali gaat.
          Maar ja, als mensen andere dingen willen. Je kunt. Je kunt het
          inrichten zoals je wil.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">
          Ja, want jullie noemen dat. Ik had het opgeschreven. Open Startup. Ja.
          de open startup building toch?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">Ja dus. Ja. Gewoon open.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">Bouwen aan je bedrijf?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">
          Ja, maar ik merk sowieso ook dat jij op LinkedIn actief bent. Ik heb
          het al een paar keer genoemd. Is dat ook bewust? Is dat ook een een,
          een marketing?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">
          Ja, LinkedIn zit sowieso marketing, want het is niet echt een platform
          waar ik zelf veel voldoening uit haal omdat ik vind dat veel
          goednieuwsshow is, terwijl het veel bullshit is. Ik zit eigenlijk als
          je ik zit meer op Twitter en nu sinds kort Blue Sky. Dat is eigenlijk
          de nieuwe Twitter waar ik groot fan van ben. En maar ik gebruik
          eigenlijk en dan vertel ik wel veel, maar ik gebruik gewoon een
          tooltje en als ik dan post dan post je ze op alle platforms. Ja dus.
          Dus ja ik ik zit. Ik ben heel actief op LinkedIn, maar en vooral
          dingen delen over oké, we hebben nu dit gebouw, dus het is vaak. Als
          je mensen actief ziet op LinkedIn te veel posten, dan gaat het vaak
          over dat ze verhalen delen over een beetje zo die Authority zijn van.
          Ik kwam dit tegen en je moet. En hier reageer nu zijn DM en dan krijg
          je mijn cursus. Ja, maar wij proberen gewoon. Eigenlijk is een soort
          van continue update. Over wat we aan het bouwen zijn of dat we
          feedback nodig hebben en dat dat gooien eigenlijk.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:48):
        </p>
        <p class="mt-0">
          Ja, ik zie veel features voorbij komen en veel keuzes die je maakt dus
          eigenlijk als ondernemer. Is het heel interessant om dat te volgen
          vind ik. Want ja, je ziet de keuzes die jullie maken. Dus ja.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:48):
        </p>
        <p class="mt-0">
          Ja, ik denk het ook wel. En ik denk ook wel dat dat je daar best wel
          wat naar de volgers die ik heb vaak. Ook wel een beetje in die hoek
          zitten die dat leuk vinden, Die het interessant vinden om gewoon mee
          te kijken. En die ook gewoon feedback geven van ook veel klanten. En
          dan gooien wij. We zijn nu bezig met deze feature. Ja vind je daarvan?
          En ik krijg ook echt goeie reacties.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">Echt inhoudelijk.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">
          Ja echt perfect kanaal om feedback op te halen, want we hadden net een
          nieuwe. Nieuw stukje van de onboarding geluncht en toen had het op
          Twitter, LinkedIn en Blue sky gegooid en ik kreeg een reactie ja maar
          kan dit niet lezen of ik vind dit ziet er raar uit enz. Oh perfect,
          Kom hier kom hier feedback en dan bouwen we dat beter. Dat is echt
          soort van crowdsourcen van feedback en daar werkt het perfect voor.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">Super effectief.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">
          Ja. Plus als je blijft posten ja je je post komt wel op mensen hun
          feed terecht. Dus ja, ze zullen je ook na een tijdje beginnen te
          herkennen en dan heb je het ook. Een stukje marketing.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">
          Ja, een stukje personal branding ook. Wat je zegt eigenlijk dat je
          LinkedIn niet zo leuk vindt. En mensen bouwen luchtkastelen. Mooi
          woord.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">Niet iedereen hoor.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">
          Nee. Nee, want die, die zijn er. Weet je, we scheren hier niemand over
          één kam. Dus je zegt ja, er wordt heel veel funding opgehaald en er
          wordt dan van de daken geschreeuwd. Maar jullie hebben met simpele
          analytics geen funding opgehaald toch? Het is Bootstrap, heet dat dan.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">Ja, dat is ook wel een keuze geweest.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:50):
        </p>
        <p class="mt-0">
          Want wat is Bootstrap en waarom moet je daar voor kiezen?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">
          Nou, Bootstrap is eigenlijk dat je geen extern geld ophaalt. Dus het
          bedrijf Simple Analytics en ook junior hosted. En en ook fixed is
          eigenlijk 100% van mij en en Adriaan en en Dries en mijn andere
          compagnons.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:50):
        </p>
        <p class="mt-0">Ik krijg heel snel een investeerder. Of ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">
          Dus ja. Dus uh inderdaad investeerders. En kijk, ik ben niet zozeer
          tegen funding of tegen investeren. Ik denk dat het eigenlijk vooral
          als je ziet hoe dat in in de US gaat en kijk naar Europa, dan komen
          eigenlijk alle grote bedrijven die allemaal gevuld zijn met heel veel
          geld naar die wij ook dagelijks allemaal gebruiken uit de uit de US.
          Dus ja als je groot wil denken en je kan funding echt wel juiste
          manier zijn om ja om een ontzettend groot uh toonaangevend bedrijf te
          bouwen. Maar het hoeft niet voor alles en het begint een beetje de de
          standaard te worden en en ik merk dat dat bij mezelf in mijn eerste
          bedrijf dat het soort van funding ophalen was een doel op zich, omdat
          ik dan dan op LinkedIn kon zetten en dat er dan mensen naar mij zouden
          kijken van oh ja, wow. Hij zei me hoe groot ze zijn met iets bezig en
          oh dit is wel dit is wel serieuze shit en ik heb het idee dat dat een
          beetje ja dat funding een beetje die kant op gaat, want iedereen post
          het ook al alleen maar als als, nou ja, goed nieuws hebben funding
          opgehaald terwijl ik denk in heel veel van de gevallen kun je be.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:51):
        </p>
        <p class="mt-0">
          Ben je beter af om het niet te doen. Kijk en als jij een fabriek gaat
          bouwen of je gaat een hardware bedrijf bouwen en ja je hebt
          kapitaalintensief dan je by all means ga zoveel ophalen als dat je
          nodig hebt om. Maar als jij een software applicatie of een een HR
          dashboard je aan het bouwen bent, met alle respect, wat een hele goede
          business kan zijn, ja dan doe je er misschien wel beter aan om geen
          funding op te halen. En en dat die keuze hebben we ook gemaakt met
          simpele analytics. Dat wij ja de de de business is niet
          kapitaalintensief, we konden dit zelf uit opzetten, we hebben het
          allemaal zelf gebouwd. Nou en Wat je dus krijgt met een soort van
          funding ophalen. Het klinkt chill, want je hebt dan geld en je kunt
          geld uitgeven en je in je groei steken et cetera. Ja, maar je krijgt
          ook iemand aan boord die iets uh te zeggen heeft en je kunt dus ook
          niet meer helemaal de koers varen die je zou willen varen. En als het
          allemaal goed gaat dan is het allemaal helemaal perfect.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:52):
        </p>
        <p class="mt-0">
          Maar als het verkeerd gaat, ja dan zijn er ook heel veel
          horrorverhalen te te vertellen over waar het niet zo goed is gegaan
          met de investeerders en eh. En dit en dat willen wij voorkomen. Want
          wij willen gewoon ons eigen bedrijf bouwen waarin we alle keuzes met
          betrekking tot het bedrijf ja zelf eh wilde maken. Ja, en ons bedrijf
          als product leende zich daar enorm voor.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:52):
        </p>
        <p class="mt-0">Omdat die kosten zo laag zijn dat.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:53):
        </p>
        <p class="mt-0">
          Die kosten zo laag zijn. Dus niet kapitaalintensief en dus vaak denk
          ik dus op het moment dat je de kans hebt, ga vooral eerst kijken of je
          het zelf kunt fixen en ga pas funding ophalen of op op het moment dat
          je het echt heel hard nodig hebt. Maar omdat je kapitaal investeringen
          moet doen of als je zegt van ja we hebben nu een een markt gevonden en
          het product werkt. En ja, als ik nu wel een een honderdduizend of
          1 miljoen heb, dan weet ik ook precies waar ik die aan kan besteden en
          dan weet ik ook precies wat er wat daar uit kan komen. Dus dat is een
          soort van groei versneller is, maar dat is vaak een fase later.
          Meestal komen mensen dus met een idee van een Airbnb voor katten aan
          dat ze nog niet gebouwd hebben en dan willen ze dan funding. Ja dat
          dat, dat vind ik ja. Daar ben ik niet zo'n fan van.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:53):
        </p>
        <p class="mt-0">
          Snap ik. Alleen wat wel interessant is, is als jij begint met oh ja,
          ik. Ik ging fix maken stage platform en ik wilde het grootste bedrijf
          worden en Uber en dat soort dingen is een soort andere mentaliteit
          hoor ik nu bij Simple Analytics. Want daar is het van oh, we hebben
          maar een klein marktaandeel nodig om te doen wat we willen doen. Ja,
          maar zou het niet zo zijn dat als je nu in zo'n groei zo'n groeifase
          ingaat, dat je nou juist funding kan gebruiken om simpele analytics
          bijvoorbeeld heel erg te groeien?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:54):
        </p>
        <p class="mt-0">
          Ja, dat zou kunnen. En het is ook wel een beetje een andere mindset
          hoor. En heel veel mensen die zullen dit ook zeg maar mijn verhaal
          horen. Die zegt nou maar je denkt te klein en die krijg ik ook heel
          vaak terug en dan ja oké dat zit ook wel een kern van waarheid in
          hoor. En eh, het kan nog steeds zo zijn dat nou ja, met met simpele
          analytics. Het is wel gewoon de keuze. Je noemt het ook een beetje een
          lifestyle business. Nou, dat hoor ik al. Gek als iemand dat zegt, maar
          dat is een beetje in de volksmond. Maar het klopt wel. Lifestyle
          business Ja, je hebt je visie veranderd en dat zijn raketten en die
          moeten groot, groot, groter, grootst. Knallen, knallen, knallen en
          uiteindelijk moeten ze of 1 miljard waard zijn of ploffen, want we
          hebben er niks aan als 10 miljoen waard is en je hebt die andere kant
          op. En dat is een beetje wat wij doen als je een beetje calm
          companies. Dus weet je gewoon gestaag groeien met eigen middelen en
          maar vooral ook je eigen leven kunnen inrichten.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:55):
        </p>
        <p class="mt-0">
          Ja, en dat is wel een beetje de route waar we op zitten, maar wilde
          niet zeggen dat dat niet nog steeds groot kan worden. Alleen ja, je
          kunt er nog een geld opgooien als een soort groei versnelling om er
          sneller te komen. Ja en ja. En dat zijn keuzes die die je als
          ondernemer moet maken. En ja, als je daar maar bewust van bent dan is
          het prima. Dus als jij bewust bent van het feit dat je financiering
          gaat ophalen, ben er dan ook bewust van wat het betekent als het fout
          gaat of als wat je in huis haalt. En ja. En als dat de afweging dan is
          want we willen de raket bouwen en het moet of 1 miljard waard zijn of
          ploffen. Nou prima, ga je gang.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:55):
        </p>
        <p class="mt-0">
          Ja, en jullie zijn met z'n tweeën. Jullie hebben duidelijk gekozen
          voor oké, wij hoeven geen raket te worden, dus dan is dit the way to
          go.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:55):
        </p>
        <p class="mt-0">
          Ja. Nou, niet per se. We hoeven geen raket te worden, maar we hebben
          geen eh. We. Ja, we kiezen ervoor om geen externe funding op te halen
          om de raket te bouwen. Maar dat betekent niet dat we daar nog steeds
          aan bezig zijn en ook willen groeien en ook ambities hebben. We hebben
          het net over die 1 miljoen per jaar gehad en uh. En als je dat met z'n
          tweeën doet en je hebt een niet al te veel kosten, nou ja, tel tel uit
          dan dan Dan zit je dan. Dan gaat het goed.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:56):
        </p>
        <p class="mt-0">
          Ja, dan zou ik naar Bali gaan met het hele team en dan daar gaan
          werken.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:56):
        </p>
        <p class="mt-0">
          Ja, nou ja, exact. Dus ja. Dat zijn denk ik het zijn denk ik keuzes en
          ik ben misschien af en toe wel wat vocale richting van hè. Er is ook
          boodschap en visie vind ik bullshit. Maar ja, het is gewoon omdat de
          visie funding trein dat. Dat neemt eigenlijk een beetje daarin de
          overhand omdat dat het ook iets wat je heel veel terug ziet komen. En
          ik denk dat heel veel beginnende ondernemers ook denken aan funding,
          terwijl ik denk ja want het hoeft niet, los gewoon een probleem op en
          bouw daar een bedrijf omheen en dan kun je inderdaad kiezen voor
          funding. Maar het is niet. Het hoeft niet nummer één bullet point te
          zijn op je op je to do.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:56):
        </p>
        <p class="mt-0">
          Ja, Stap één website maken, Google Analytics erop zetten en funding
          regelen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:56):
        </p>
        <p class="mt-0">Ja, ja, ja, zo gaat dat vaak wel.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:57):
        </p>
        <p class="mt-0">
          Ja, dat is een goed tegengeluid, toch? En en juist dat is dat ook. Wat
          je mee zou geven aan aan startende ondernemers is, is is. Wees je
          bewust van de keuzes die je maakt.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:57):
        </p>
        <p class="mt-0">
          Ja, ja ja ja D Dat denk ik wel en ik denk dat het either way is. Het
          is het geen foute keuze. Als het past bij je bedrijf en past bij je
          ambities dan moet je het zeker doen. Maar ik ja.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:57):
        </p>
        <p class="mt-0">Ja, zolang het niet eindigt op ruzie, ook met nee.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:57):
        </p>
        <p class="mt-0">En leg.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:57):
        </p>
        <p class="mt-0">Je co-founder of je investeerders.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:57):
        </p>
        <p class="mt-0">
          Ja. Ja, daar moet je wel rekening mee houden. Ik denk dat veel
          startende ondernemers en of überhaupt ondernemers dat vaak niet doen.
          Die denken gewoon ik moet geld hebben, want we gaan een business
          bouwen en uiteindelijk erachter komen van hoe eh, nou, deze keuze die
          ik nu gemaakt heb op die trein waar ik nu gesprongen ben, ben ik
          eigenlijk niet zo gelukkig mee. Na een paar jaar verder ja, want het
          is wel de funding. Kijk, als je bootstrap bent, dan kun je altijd
          funding ophalen op momenten dat je funding opgehaald hebt. Dan zit je
          wel op een bepaald traject, want je investeerder die wil een keer zijn
          geld eruit halen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:58):
        </p>
        <p class="mt-0">Ja, die is op de klok als t ware.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:58):
        </p>
        <p class="mt-0">
          Die pusht ook van oké boys en girls. Let's go! Ja en en. Ik kan me
          voorstellen dat je die keuze maakt in een. Als je begint en maar
          eigenlijk in 4A5 jaar in je bedrijf zit. En dan denk ik ja, als ik nog
          een keer had kunnen doen, had ik die keuze niet gemaakt. Dus als je de
          keuze maakt, doe het dan heel erg weloverwogen en ga ervan uit dat je
          daar ook. Vijf jaar met die keuze moet leven.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:58):
        </p>
        <p class="mt-0">
          Ja, deze tip, die hebben volgens mij al eerder ook gekregen van
          Stanley Gotta voetbal fotograaf. Die zei als ik het nog een keer zou
          doen, dan zou ik iets voorzichtiger zijn. Ook met het weggeven van
          percentage van mijn bedrijf, want die wilden gewoon eigenlijk die dag
          achteraf van ja, volgens mij had ik dit wel gekund zonder deel van
          mijn bedrijf weg te geven en dan was ik hier ook geweest, maar dan had
          ik wel alles voor het zeggen gehad en dan kon ik mijn eigen koers
          varen en dan had hij minder stress ervaren in dat opzicht.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:58):
        </p>
        <p class="mt-0">Ja, ja, kan ik heel goed begrijpen ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:58):
        </p>
        <p class="mt-0">
          Maar je hebt dus een een doel 1 miljoen terugkerende omzet. Is dat een
          Nederlands woord? Terugkerende omzet?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:58):
        </p>
        <p class="mt-0">Ja, recurring.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:59):
        </p>
        <p class="mt-0">
          Bij deze. Wat zijn dan de de toekomstplannen? Want jullie zijn nou met
          z'n tweeën. Komen er nog meer mensen bij?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:59):
        </p>
        <p class="mt-0">
          Ja, het idee is wel dat we. Ik zou wel graag met een klein teampje
          willen werken, maar we willen wel naar die 1 miljoen toe met met max
          vijf man of zo. Dat is wel ja, dat is gewoon het doel en dat moet ook
          gewoon kunnen, want het is gewoon een heel schaalbaar stukje software.
          En en natuurlijk wat we. Waarom we wel misschien aan een klein team
          willen gaan is omdat we nou ja, snelheid willen blijven maken en het
          vaak in zit om dat in het ontwikkelen van nieuwe dingen. En nu komt er
          zeg maar alles wat met tech en product te maken heeft komt allemaal op
          Adriaan zijn schouders terecht en alles wat met marketing en groei te
          maken heeft op mijn schouders. Terecht dus ja, als als Adriaan een
          maand op vakantie gaat wat helemaal prima is in een als je een
          bootstrap softwarebedrijf hebt, maar dat betekent wel dat het na een
          maand niks ontwikkeld wordt zal ik maar zeggen. Dus we zouden wel naar
          een iets meer, ehm, minder founder afhankelijke. Situatie willen gaan.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:00):
        </p>
        <p class="mt-0">
          Maar dus met een heel klein teampje, dus misschien nog met een en één
          of twee engineers en misschien iemand op design of marketing. Want je
          hebt nu een.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:00):
        </p>
        <p class="mt-0">Paar freelancers, toch? Wat doen die dan?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:00):
        </p>
        <p class="mt-0">
          Ja dus wat we nu hebben gedaan. En dat is eigenlijk ook wel een
          oplossing die voor nu, voor nu best wel goed werkt, is dat we kopen
          expertise in. Dus we zijn met z'n tweeën en als je met tweeën bent,
          dan moet je eigenlijk alle petten dragen. Dus ik. Je spreekt hier met
          de HR manager en de finance van van simpele analytics. Maar ja, we
          zitten bijvoorbeeld in uhm in een in een markt die heel erg
          veranderlijk is, vooral op het gebied van privacy. Dus we hebben dan
          iemand die freelance en een dag in de week aan privacy werkt. En dat
          gaat van het schrijven van blogs over nieuwe items die je die die
          opkomen, maar ook zorgen dat we ons eigen privacy documentatie
          dichtgetimmerd hebben. Nou en? We hebben natuurlijk ja. Ik zei we
          hebben 1300 klanten, maar hebben ook grote klanten van echt hele grote
          bedrijven zoals een Bloomberg gebruikt ons en Mollie gebruikt ons en
          Michelin. Michelin gebruikt ons Nou daar uh, daar komt best wel wat
          data van binnen. Nou ja, dat moeten we natuurlijk goed kunnen
          verwerken en dat moeten we goed kunnen opslaan.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:01):
        </p>
        <p class="mt-0">
          Nou, dan hebben we Jim. Die werkt bij ons aan de servers, want die
          heeft gewoon. Adriaan heeft basiskennis van servers, maar dat wil je
          dan een keer goed inrichten. Nou, dan moeten we Jim hebben. En Adriaan
          heeft basiskennis van privacy, maar als we het goed willen inrichten
          moeten we Carlo hebben, die dus de privacy. Nou en zo kopen we als we
          nu als het ware expertise in. Maar dat we ook weer snel kunnen
          afstoten als het als het niet nodig is. En zo blijven we eigenlijk
          toch gewoon met zijn tweeën, maar kopen we dat af en toe in? Ja, en ik
          denk dat we, als we nu groeien, dat we wel naar een formule willen
          gaan waar we iets meer in een eigen team hebben.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:01):
        </p>
        <p class="mt-0">
          Dus die vijf, dat zou dan echt uh collega's zijn die.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:02):
        </p>
        <p class="mt-0">
          Ja, dat jij denkt dat. En gewoon omdat we het ook leuk vinden om met
          andere mensen te werken.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:02):
        </p>
        <p class="mt-0">Maar dat heb je al, want je hebt al acht bureaus.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:02):
        </p>
        <p class="mt-0">
          Maar het lijkt me dus ook wel gewoon een mooie ontwikkeling voor het
          bedrijf om nou ja, om met een klein teampje te werken en juist die die
          snelheid kunnen kunnen blijven maken. Terwijl we wel ja volledig, nou
          ja, bootstrap zijn zonder externe financiering.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:02):
        </p>
        <p class="mt-0">
          Ja. En heb je dan ook nog, Want nu werk je als founder echt in je
          bedrijf. En dan de de wat dan vaak gezegd wordt Ja, je moet in plaats
          van in moet je aan je bedrijf werken zeg maar. Want dan ben je. Is je
          bedrijf niet afhankelijk van jou als founder? Ja. En dan kan je het
          uiteindelijk ook verkopen. Heb je iets van een, een, een einddoel of
          een exit of of zo? In je hoofd zitten al.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:02):
        </p>
        <p class="mt-0">
          Naar de exit? Is dat er geen exit is? En dat daar bedoel ik mee. Ja.
          Kijk, we hebben tegen elkaar gezegd als er iemand langskomt en die
          noemt echt een heel raar bedrag dan. Dan moeten we er altijd naar
          kijken. Maar we krijgen ook best wel veel aanvragen van mensen die of
          willen kopen of van private equity of mensen die willen investeren. En
          dat leggen we altijd een beetje naast ons neer omdat we het gewoon
          heel erg leuk vinden om aan deze business te blijven werken. En omdat
          hij ook ehm. Nou ja, hij is niet afhankelijk van onze uren, dus kijk,
          we stoppen er heel veel uren in, maar als ik een twee weken vakantie
          ga dan draait die business ook gewoon door. Dus we kunnen deze
          business ook heel makkelijk onderdeel laten maken van van ons leven en
          ervoor zorgen dat dat dat de business past in ons, in ons leven. Ja,
          zodat we daar eigenlijk heel duurzaam, nou ja, mee door kunnen gaan
          tot het oneindige. En er is niemand buiten een van ons twee die zegt
          van hey jongens, ik wil over zeven jaar mijn geld terug, dus we gaan
          nu naar een exit toewerken.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:03):
        </p>
        <p class="mt-0">
          Dus nou ja, die die die die plannen liggen er niet, maar eigenlijk dus
          ligt het plan er wel. Ja, dat er geen exit is.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:04):
        </p>
        <p class="mt-0">
          Ja, jullie zijn al eigenlijk het plan, maar ik kan me voorstellen als
          je het leuk vindt om fiks op te bouwen, die beginfase. En nu het het
          groeien van Simple Analytics. Als je dat leuk vindt, dat kan maar zo
          zijn dat je op een gegeven moment gewoon genoeg wordt of zo. Dat je
          weer denkt van nou, ik wil eigenlijk wel.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:04):
        </p>
        <p class="mt-0">Weer.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:04):
        </p>
        <p class="mt-0">Wat.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:04):
        </p>
        <p class="mt-0">
          Nieuws of zo. Da's wel een mooi probleem om tegenaan te lopen denk ik.
          Maar. Nee, daar kan ik me wel goed voorstellen dat dat is. En ehm.
          Maar we hebben dus bijvoorbeeld ook simpele analytics op zo'n manier
          ingericht dat we ook juniors daarnaast konden starten. Ja, en ik ga
          daar. Ik sluit niet uit dat er nog meer van dit soort projecten naast
          zouden kunnen komen, waarin we dus kansen zien van en waarmee we
          samenwerken met mensen die een probleem heel goed kunnen oplossen,
          maar wat moeilijker vinden om dit in de markt te zetten. Dus dat, dat
          ligt nog helemaal open en dat is ook heel leuk dat dat nog helemaal
          open ligt, want het is dus niet zo dat ik mezelf en Adriaan ons
          verplicht om nu nog minimaal zoveel jaar hieraan te werken. Nee, en ik
          denk dat we misschien ooit op een punt komen dat het niet meer voelt
          alsof we hier heel graag aan werken. Of we onze passie en onze
          creativiteit erin kwijt kunnen. En dat zou denk ik een mooi moment
          zijn om dan te gaan nadenken aan een exit.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:05):
        </p>
        <p class="mt-0">
          Maar kijk, je moet er eerst van te voren een beetje over nadenken.
          Alleen het is een softwarebedrijf met naar nu geen personeel, dus het
          is echt. Het is wel een makkelijk pakketje wat je aan iemand hier zo
          werkt. Dit is de codebase en het is allemaal netjes en.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:05):
        </p>
        <p class="mt-0">Dit is het wachtwoord.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:05):
        </p>
        <p class="mt-0">
          Ja, nou ja, zet hem op. Het is niet als bijna alsof je een fabriekshal
          gaat verkopen met 300 man personeel.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:05):
        </p>
        <p class="mt-0">
          Ja, met inwerken en en en overdracht en dat soort dingen. Ja. Ja. Wel
          leuk. Leuke positie om in te zitten. Ja nu wat ik ook voorbij zie
          komen zie ik gewoon nog keihard aan het werken aan En ja.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:05):
        </p>
        <p class="mt-0">
          Ja. En t is gewoon heel leuk om om om aan te werken dus. Vooralsnog
          zit het goed.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:05):
        </p>
        <p class="mt-0">
          Heel erg bedankt voor voor dit gesprek. Ja zeker! Heb je nog iets wat
          we kunnen doen voordat we gaan afronden?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:06):
        </p>
        <p class="mt-0">Eh, nee. Wil je nog iets weten?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:06):
        </p>
        <p class="mt-0">Ja, je hebt een Iron Man gerent.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:06):
        </p>
        <p class="mt-0">Ja, niet alleen gezwommen. En gezwommen? Ja, klopt.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:06):
        </p>
        <p class="mt-0">Dat is Wat zijn de afstanden van een Iron Man?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:06):
        </p>
        <p class="mt-0">
          309 of drie? Komma acht zwemmen? En dan is het 180 fietsen en dan een
          marathon.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:06):
        </p>
        <p class="mt-0">
          Ja, dan nog even 42 kilometer rennen. Ja, hoe kwam dat?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:06):
        </p>
        <p class="mt-0">
          Eh, ja. Begon een beetje als een studentengroep, want die ik studeerde
          in Maastricht en die Iron Man is ieder jaar in Maastricht en het was
          al een paar jaar geweest en toen werd in de kroeg werd het verhaal nou
          ja, het zou toch wel grappig als Iron Man Iron Man doet, want dan zou
          ik de eerste Iron zijn Iron. Zijn die Iron Man deed. En nou die gaf
          een beetje uit de hand gelopen en toen dacht ik fuck it, ik doe het
          gewoon. En toen kwam ik thuis met dat verhaal. En toen dachten ze dat
          ik een grapje maakte. En toen zijn we een paar van oké, als je het
          doet dan, dan koop ik wel je fiets. En toen zei ik oké, is goed, ik
          doe het. En nou toen uh kregen wat mensen daar lucht van dat ik dat
          ging doen en toen was een neef van me maar die is atleet en die zei
          van nou dan train ik je wel. En toen ben ik daar een jaar mee aan de
          slag gegaan en ontzettend hard getraind.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:07):
        </p>
        <p class="mt-0">En toen die dag in Maastricht de Ironman gedaan.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:07):
        </p>
        <p class="mt-0">
          Gaaf! En hoe was jouw conditie aan het begin van dat jaar?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:07):
        </p>
        <p class="mt-0">
          Van voordat ik de Ironman deed? Ja. Nou ja, toen toen begon te trainen
          was het redelijk. De zuipende studenten gaat sporten en daar was ik
          dertien kilo afgevallen en ja, daar zat gewoon geen grammetje vet meer
          aan.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:07):
        </p>
        <p class="mt-0">En in een jaar echt in een jaar.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:07):
        </p>
        <p class="mt-0">
          Ja, en het was ook niet dat ik opeens heel gespierd werd, dat was
          gewoon allemaal weg.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:07):
        </p>
        <p class="mt-0">Minder en efficiënter.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:07):
        </p>
        <p class="mt-0">Eigenlijk. Ja, ja, heel licht en lean.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:07):
        </p>
        <p class="mt-0">
          Ja, ik, ik. Ik lap mezelf één keer per jaar op voor een kwart
          triathlon in september.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:08):
        </p>
        <p class="mt-0">Oh mooi.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:08):
        </p>
        <p class="mt-0">
          Ja, dus dan is mooi weer trainen, want dan heb je de zomerperiode. Ja,
          en dan ben ik altijd heel blij als die dag geweest is. En dan ben ik
          ook heel optimistisch, zeg ik nu ga ik gewoon. In de winter ga ik
          door, want in september, dan kan ik hem veel beter als dan de dan dat
          ik hem nu kom. Ja nou het is nu ongeveer winter.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:08):
        </p>
        <p class="mt-0">Ja.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:08):
        </p>
        <p class="mt-0">Ik vraag maar even niet.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:08):
        </p>
        <p class="mt-0">
          Ik kan er helemaal inkomen want ik heb dat gedaan. En toen? Daarna heb
          ik nooit meer gezwommen of op de fiets gezeten of gerend. Ik was er
          echt helemaal klaar mee. Gewoon omdat jij zit, jij je hele jaar zit.
          Die dag zelf is de mooiste dag van je leven. Maar het jaar daarvoor is
          echt mwah. Ja, maar vooral ook saai. Want soms zit je gewoon een
          training. Dan zit je gewoon 160 kilometer op een fiets alleen te
          koekeloeren. En ja, dat waren niet de leukste trainingen zal ik maar
          zeggen. Of leukste momenten. Dus ik dacht oké, ik doe hem en dan
          daarna ben ik ook helemaal klaar. Ja. Dus ja.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:08):
        </p>
        <p class="mt-0">
          Hoe vet dat het wel gelukt is, want ik vind dat wel heel knap in een
          jaar ja. Petje af hoor.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:08):
        </p>
        <p class="mt-0">
          Ja. Ja. Dank je wel. En eh, ik moet ook zeggen, ik kan hier best wel
          lang op blijven teren, want het is al zes jaar geleden en daarna nooit
          meer iets gedaan. Maar ja, mensen.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:09):
        </p>
        <p class="mt-0">Zeggen dat nog steeds.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:09):
        </p>
        <p class="mt-0">Goed dat je het gevonden hebt.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:09):
        </p>
        <p class="mt-0">Ja, op je.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:09):
        </p>
        <p class="mt-0">LinkedIn stond het, dus.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:09):
        </p>
        <p class="mt-0">
          Vandaar. Nou, top! Ik richt me even aan de kijker thuis of de
          luisteraar thuis. Heel erg bedankt voor het luisteren naar dit
          gesprek. Ik hoop dat je het interessant vond dat je er als ondernemer
          ook echt wat aan hebt. Dat je goede lessen meegenomen hebben hebt. En
          laat ook vooral even een like achter of een reactie en volg even de
          podcast in jouw favoriete podcast app. Of abonneer even op ons YouTube
          kanaal. En heb je een vraag of een uitdaging waar we in de toekomst
          mee aan de slag kunnen? Laat die dan ook vooral achter Iron. Super
          bedankt dat je er vandaag was voor je tijd!
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:09):
        </p>
        <p class="mt-0">Ja, graag gedaan!</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:09):
        </p>
        <p class="mt-0">Ik vond het echt heel interessant.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:09):
        </p>
        <p class="mt-0">Ik vond het erg leuk om hier te zijn, dus mooi!</p>
      </div>
      <div v-else>
        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:00):
        </p>
        <p class="mt-0">
          Welcome and it’s great that you’re watching or listening to this new
          episode of Van Start tot Ster. This is the video podcast of
          Onderneming Panel where I speak with experienced and successful
          entrepreneurs, with the goal of learning as much as possible as a
          starting entrepreneur. Today at my table is someone others describe as
          a serial entrepreneur. I’ll later ask him if he identifies with that
          and what it really means. But he is very impressive and, above all,
          very open about working on a company called Simple Analytics. It’s a
          competitor to Google Analytics, where you can measure who is on your
          website and which pages they visit in a privacy-safe way. And what I
          find especially interesting is the way he builds it, his mindset about
          entrepreneurship and, of course, the substance of the companies. So
          today here in our studio, Iron Brands Iron. Welcome!
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:01):
        </p>
        <p class="mt-0">Yes, thanks! And thanks for the intro!</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:01):
        </p>
        <p class="mt-0">Yeah, no problem.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:01):
        </p>
        <p class="mt-0">
          Competitor to Google Analytics. Nice! I believe so. I don’t know if
          they already know we exist, so we’re not that big yet. But how many
          users do you have? Uh, well, I think we now have around 1,400 paying
          customers, but we’ve also just launched a free plan, and that is
          getting close to 15,000 users who are now using it on their website.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:02):
        </p>
        <p class="mt-0">Has it recently reached 15,000?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:02):
        </p>
        <p class="mt-0">
          We already had some users who were using it for free in a certain way,
          but now we have really launched it and started pushing it. And now you
          can see that. Yeah, it really stopped many people from supporting the
          idea that we were going to compete with Google Analytics – that it was
          a free product – and we were going to charge for it, plus you can do a
          lot less with it.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:02):
        </p>
        <p class="mt-0">And that was the pitch. Thanks for watching.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:02):
        </p>
        <p class="mt-0">
          That was a tough pitch, and now we see that we’ve made a version that
          we’ve kind of, well, capped in terms of what you can do with it, but
          which we can still offer as a sort of free version to users. And then
          you see that, oh yeah, people are quite willing to test it, use it,
          and see if they want to replace Google Analytics.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:02):
        </p>
        <p class="mt-0">
          Yeah, your competitors are very modest. In another interview I saw of
          you, you mentioned that you haven’t yet taken any market share from
          them.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:03):
        </p>
        <p class="mt-0">
          No. Yeah, I think if you look at the analytics market – like a pie
          chart – you see that 90% of the websites using an analytics tool are
          still on Google Analytics. And I think we’re at 0.0001%. That’s a very
          small share of the market.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:03):
        </p>
        <p class="mt-0">Yeah, but still a whole load of users.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:03):
        </p>
        <p class="mt-0">
          Yes. Definitely. And it’s heading in the right direction. And it’s
          growing very fast. And well, we’re just the two of us, so you don’t
          need, uh, 10% of the market share to run a good business.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:03):
        </p>
        <p class="mt-0">
          What I really appreciate is that you’re very open about having a goal.
          With you I actually learned the term “Erg”. I looked it up, because
          you share on LinkedIn how much revenue your companies are making. And
          Simple Analytics is at – I have it noted as – $414,000 ARR, and ARR is
          annual recurring revenue.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:04):
        </p>
        <p class="mt-0">Yeah, exactly.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:04):
        </p>
        <p class="mt-0">Recurring revenue. And what’s the goal?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:04):
        </p>
        <p class="mt-0">
          1 million. Yeah, that’s the goal. And then we also went back a bit,
          because Adriaan actually started Simple Analytics. He’s my partner – a
          developer and, let’s say, a privacy enthusiast. And five years ago he
          just ran into the problem that everyone kept pasting Google Analytics
          on their website left and right. And well, there are quite a few
          drawbacks to that, especially when you look at it from a privacy
          perspective. And he was like, “That can’t be right!” And it’s also
          incredibly complex for many people to actually use that tool. And 90%
          of people use only 5% of its features. So he was like, “Why can’t I
          just build a very simple, basic replacement for Google Analytics that
          still gives you the insights you want to see, but complies with all
          the regulations and doesn’t track everyone and everything all the
          time?”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:05):
        </p>
        <p class="mt-0">
          Well, as some developers do when they have problems, they build a
          solution themselves. So he built it, and I wasn’t even on the scene
          yet, and then he launched it. And then many companies – and also
          developers with websites – came by saying, “Ah, I need this because I
          don’t need all that extra stuff.” And it’s true – it’s just not
          privacy-unfriendly, and, well, Google… we have the European
          regulations, and Google doesn’t really care about that. And so then
          the first hundred users came along who were like, “Hey, this is a pain
          point and you’re solving it.” And that’s how it started growing
          organically. I joined later, and then we agreed, “If we’re going to
          grow, what is our goal?”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:06):
        </p>
        <p class="mt-0">Just say something.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:06):
        </p>
        <p class="mt-0">The target?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:06):
        </p>
        <p class="mt-0">
          Basically, what would we want? And you can go off in all directions
          and raise funding – you see LinkedIn full of posts like, “Oh, raised
          so much funding!” – but ultimately, you just want to run a good
          business where you have the freedom to put your heart into it and make
          a good living. A business that fits your life and what you want to
          achieve. And then we asked ourselves that, and came to the conclusion:
          it would be really nice if we could run a business that makes 1
          million. We had to come up with a number: that’s the target – 1
          million per year.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:07):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:07):
        </p>
        <p class="mt-0">
          And, well, in the software business that’s actually a pretty great
          goal. Because software is scalable, but also hard to get off the
          ground. Look, if you’re making 1 million per year in a software
          company – and it’s just the two of us with not too many other costs –
          then that would be an amazing goal to achieve. So we’re almost halfway
          there; we’re still on track.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:07):
        </p>
        <p class="mt-0">Yeah, nice! Did you also set a timeframe?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:07):
        </p>
        <p class="mt-0">
          Yes, within five years. And within five years? Well, because when I
          joined Adriaan, it went like this: Adriaan founded the company and
          grew it until he was making eight or nine thousand per month. Then it
          stabilized a bit. But that was because Adriaan is an engineer – he
          only wanted to do engineering stuff, work on the product, and
          definitely not deal with marketing or sales. And I had just come out
          of another company that I had founded – but I’ll get to that later.
          You probably have questions about that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:08):
        </p>
        <p class="mt-0">Yeah, definitely.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:08):
        </p>
        <p class="mt-0">
          And then I got to know Adriaan and we agreed – I once called him after
          a while and said, “Shouldn’t you find a business partner who handles
          everything except building the product, so you can focus on product
          development, while the business grows?” Because that growth is a
          necessary component: building and growing. And that growth wasn’t
          happening. Well, then I got involved. When he said he had reached 10K
          per month, we said, “Okay, it’s already at 10K per month, and from
          here we need to get to, what, 80K per month within five years?” And we
          are now at – well, it was 3435, and we’ve been at it for two years, so
          cool! It’s still heading in the right direction.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:08):
        </p>
        <p class="mt-0">
          Those are good signals too, because it’s often about validating an
          idea – when do you actually have something worthwhile? And if Adriaan
          could grow it to 10K per month just by building the product without
          even thinking about how to reach as many people as possible or who
          will use it, that’s a great sign.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:09):
        </p>
        <p class="mt-0">
          10K per month. The hardest part is already done, really. Yes, in
          principle going from zero to one is a lot harder than going from one
          to ten.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:09):
        </p>
        <p class="mt-0">
          What was that book called again? Zero to One? Who is that by again?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:09):
        </p>
        <p class="mt-0">Uh.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:09):
        </p>
        <p class="mt-0">Mr. Thiel?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:09):
        </p>
        <p class="mt-0">
          Yes, Pieter Thiel. Zero to One. That’s the hardest part. Because there
          are so many… I think it’s always about trying something. I think a lot
          of people get stuck there. Everyone, I mean, everyone has ideas.
          Everyone you meet comes up with business ideas. Everyone thinks, “Oh,
          that would be a good business idea.” But then actually translating
          your idea into action – going and doing something – try to build
          something around that concept, and 90% of it just falls apart. And
          then there are those who remain and actually do something – they
          either create a website or build their product. And then there’s the
          point where, okay, that’s already something. But then try to get
          someone to pay for it.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:10):
        </p>
        <p class="mt-0">Yes.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:10):
        </p>
        <p class="mt-0">
          And that’s it. How do you go from zero to one? And many people mess
          that part up, because it’s really hard. In my first business, you
          built something and then went to a customer and said, “This costs
          €1,000 per year,” and the customer said, “€1,000.” And then you think,
          “Oh yeah, but what do you actually do?” And how many customers do you
          have? We had five customers, and yeah, but it was all still in the
          early stages. You really have to come from a strong background to
          convince someone to pay for your service or product or whatever. And
          that’s what Adriaan managed to do.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:10):
        </p>
        <p class="mt-0">How? How so? Do you know that?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:10):
        </p>
        <p class="mt-0">
          Yes. So, uh, now we’re quickly moving into the nerd corner of the
          internet. Okay? Briefly about Adriaan: You built it and then launched
          on Hacker News and Reddit – sites with huge traffic – where lots of
          engineers hang out sharing things. So Adriaan shared, “Hey, I’ve built
          this and we’re launching now, and if you want, give it a try.” And
          that sparked an initial spike where people said, “Wow, this is
          awesome.” And then our first users came along. They told other users,
          “I ditched Google Analytics, now I use this – you should use it too,
          it’s awesome.” And that’s how Adriaan got his first customers without
          doing any marketing, which was a signal to me that I thought, holy
          shit, there’s something there.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:11):
        </p>
        <p class="mt-0">
          Yeah, because he probably also happened to tell it to a group of
          people who cared about privacy and knew all the downsides of Google
          Analytics at the time.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:12):
        </p>
        <p class="mt-0">
          But above all, he built it himself – and that’s often the best way to
          build a business because he encountered the problem firsthand.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:12):
        </p>
        <p class="mt-0">Yeah, for himself.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:12):
        </p>
        <p class="mt-0">
          And he wanted to solve that problem for himself, because he didn’t
          understand why everyone kept putting Google Analytics on their
          website.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:12):
        </p>
        <p class="mt-0">
          Almost as common as WordPress hosting, Google Analytics.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:12):
        </p>
        <p class="mt-0">
          Yes, and not stopping to consider what impact that has and what it
          means for the users visiting your website. So he ran into this
          problem, and he built a solution for himself. Not like, “Oh, I have an
          idea, I’m going to build a solution.” No, he built a solution for the
          problem he was facing. And eventually he shared it within a community
          of people just like him – because he was always hanging out on Hacker
          News and Reddit. So in the end, it’s kind of a natural process why
          Simple Analytics came into being. And I think that’s often the best
          way companies get started.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:13):
        </p>
        <p class="mt-0">
          Yeah, it’s really great. You don’t have to force ideas or products
          that perhaps nobody really wants.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:13):
        </p>
        <p class="mt-0">
          Yeah, I think that’s often the case. I remember when I started, I just
          knew I wanted to be an entrepreneur. I didn’t care what I did, because
          being an entrepreneur is cool – you don’t have to work for a boss. But
          then, what are you going to do? “No idea.” Then you start coming up
          with ideas. But that isn’t the right way. You end up with things like,
          “Let’s build the Airbnb for cats,” and that kind of stuff. We ended up
          with Stage Platform because I was an intern at the time. That was the
          only reason Stage Platform was built. Um, but yeah. And in the end, it
          went pretty well.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:13):
        </p>
        <p class="mt-0">
          I was just about to say, I have a number here, but since you share
          everything so openly, that Stage Platform – which is called Fix – is
          active, I believe, in Amsterdam and the surrounding area. That’s where
          it’s mostly big.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:14):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:14):
        </p>
        <p class="mt-0">And it’s listed as $120,000 ARR, right?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:14):
        </p>
        <p class="mt-0">
          Yeah, so it’s recurring as well. ARR is always important, because
          people pay monthly or yearly – usually small amounts – but when you
          add them up, you get a decent sum. And it comes back every year, as it
          should, because if customers are happy, they stick around.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:14):
        </p>
        <p class="mt-0">If they’re happy. Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:14):
        </p>
        <p class="mt-0">
          Uhm. But maybe it’s nice to also share that story and how I then got
          involved with Simple Analytics.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:14):
        </p>
        <p class="mt-0">
          Let’s take one step back – you studied, right? First International
          Business, then Sustainable Finance. Both in Maastricht. You’re
          originally from Maastricht.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:14):
        </p>
        <p class="mt-0">A beautiful city in the country.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:14):
        </p>
        <p class="mt-0">
          It seems so. I’ve heard that. You studied, and I’m curious how you
          ended up… I can imagine if you study finance, you’d go look for a job
          and start working. But somewhere you decided, “Entrepreneurship is
          cool and I want to do that.”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:15):
        </p>
        <p class="mt-0">
          Yes, that's right, but that finance study had partly to do with it.
          Because, you know, I come from Maastricht and I've always been someone
          who followed the traditional path. So I went to high school. I did
          VWO. Then it was expected that you would go to university. Well, then
          we study. Then you do international business. Nice and broad, because
          then you don't have any
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:15):
        </p>
        <p class="mt-0">Choices.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:15):
        </p>
        <p class="mt-0">
          to decide, no real choices to make. And after that? Then it went, “Oh
          shit, you have to make a choice, right?” Well, then just do finance,
          because you'll end up in a good place with that. So I chose Finance,
          did Finance. Then you had to do an internship, and suddenly everything
          became serious. So I also went, all suited up, as an intern to work at
          a finance consultant. And then I realized, holy shit, this is so
          boring. But this, this, this is not it. There must be more in life
          than this. And honestly, I had a nice internship and met nice people,
          but that's when I realized, wow, this just isn’t it. And then you
          really start looking, “Oh yeah, what else then?” And I pretty quickly
          figured out, oh well, maybe startups, maybe that's something. Because
          it was portrayed as cool in the media. I thought, well, that must be
          cool.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:16):
        </p>
        <p class="mt-0">
          So it was never like, “Oh, you know, it’s been instilled in you from
          birth, like your father is an entrepreneur or your whole family is,”
          and then you just follow that. And that, that wasn’t it. It was only
          when I discovered what I didn’t like that I started investigating what
          was right. And then, through connections, I got an internship at a
          startup. Then I realized, oh, I think that’s entrepreneurship. You can
          just start a company, apparently. And then? Well, then you can do
          amazing things. And that’s when it all began.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:16):
        </p>
        <p class="mt-0">
          It sounds so wonderfully simple when you put it that way.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:16):
        </p>
        <p class="mt-0">
          Yes, but often it's like—I could now tell stories about always being
          meant to be an entrepreneur and all that—but no, it's not like that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:16):
        </p>
        <p class="mt-0">
          No, but I mean, you can simply register and say, “I'm going to be an
          entrepreneur,” and you just go for it. It's really that simple. But it
          feels intimidating for many.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:17):
        </p>
        <p class="mt-0">
          Yes. Yes. No, but that only hit me after that finance internship, when
          I then did an internship with another entrepreneur. And that was in a
          very small team of four people. And then? You become very involved.
          You kind of already feel like an entrepreneur. But then you don't take
          on the risks, yet you're continuously working together to get that
          company off the ground. It didn’t work out, by the way—the company no
          longer exists—but I got a lot of ideas from it, like, “Wow, you can
          just do this.” And if you have an idea, you can register with the
          Chamber of Commerce and build a website. And then you're essentially
          being an entrepreneur, I suppose. So the barrier always felt very high
          for me—like, “Oh, I'm studying Finance and climbing that career ladder
          to become an entrepreneur.” There’s still so much in between. But for
          me, it was really just that step of, “Hey, I'm going to see what the
          world of startups is like.”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:18):
        </p>
        <p class="mt-0">
          And then it became entrepreneurship. Because really, it’s just a small
          step.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:18):
        </p>
        <p class="mt-0">
          So that internship you did, which you mentioned when you were an
          intern—that was at that startup. And then you thought, “I want to be
          an entrepreneur,” and then you started Fix.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:18):
        </p>
        <p class="mt-0">Yes, exactly.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:18):
        </p>
        <p class="mt-0">
          Okay, and that was with others too. So you already had, yes, yes.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:18):
        </p>
        <p class="mt-0">
          It was just that—I did that internship at that startup and it worked
          out. But then I got the idea, “Oh, we could start a business.” No idea
          what we would do. Um. And then I was with a friend of mine, with whom
          I was also living. He was somewhat similar—already in the same
          vein—and also quite complementary, because I felt more like a
          marketing/business/sales person and he was more on the design side. So
          I thought, “Okay, we know each other well, we get along, we have
          similar ideas and are somewhat complementary. Shouldn't we just start
          a business together?” And then we had another one—a guy, our friend.
          And he did data science and said, “Yeah, but you can also program.”
          Yes, that's good. And then, “Okay, what are we going to do? Well,
          shall we start an internship platform?”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:19):
        </p>
        <p class="mt-0">
          Because I was doing an internship, so I thought, “That's a good
          reason.” Good reason, yes—zero validation. We had it.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:19):
        </p>
        <p class="mt-0">Rock solid.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:19):
        </p>
        <p class="mt-0">
          Yes, zero validation. We just went ahead and built it and then, when
          we agreed on it together, we really thought, “Okay, this is going to
          be—this is going to be the new Uber. This is really going to be huge,
          and we're going to raise funding and, yeah, open an office.”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:19):
        </p>
        <p class="mt-0">Eating noodles, ping pong tables, bean bags.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:19):
        </p>
        <p class="mt-0">
          Yes, and then you realize that in reality, things turn out very
          differently. But in the end, we did—and I’m pretty proud that we, as
          three people fresh out of school, went and built it. Zero validation,
          zero ideas, not even a proper email ever written in my life—and then
          you go and build a business and actually hold it together, because in
          three years we grew to, yes, €100,000 per year. Fortunately, it
          doesn’t cost much; running an online internship platform doesn’t have
          high costs. We managed to survive for three years on very low wages.
          And yes, the company still exists. It works. And so my partner, with
          whom I started, still runs it, and, well, it's going well.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:20):
        </p>
        <p class="mt-0">Yes, this is a success story.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:20):
        </p>
        <p class="mt-0">Yes, yes, yes, I really see it as a success too.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:20):
        </p>
        <p class="mt-0">
          Yes, and with a sort of “don’t try this at home” vibe. What you’re
          saying is that you just started without any validation. Yes.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:20):
        </p>
        <p class="mt-0">Yes. I would say, please try this at home.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:20):
        </p>
        <p class="mt-0">Try this at home.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:20):
        </p>
        <p class="mt-0">
          Yes, because in the end you learn so much from it. And I think this
          has been the foundation that allowed me—with Simple Analytics and
          later with my other company—to know a bit about how things should be
          done, because I mostly know how not to do it and you end up falling
          into every pitfall. Have you ever been hit by one? So next time it’ll
          go a lot faster. Or you can validate faster, or you can better assess
          what works and what doesn’t.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:21):
        </p>
        <p class="mt-0">What kind of pitfalls are those then? For example?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:21):
        </p>
        <p class="mt-0">
          Yes, well, basically everything. Just try to get your first customers
          with your internship platform and you'll find that you get turned down
          a hundred times before it finally clicks—and then you start to
          understand why people say no, and how you could get people to say yes
          a little sooner. And also that you end up making budgets and pitch
          decks and realize that it’s all really bullshit.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:21):
        </p>
        <p class="mt-0">Pitch decks.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:21):
        </p>
        <p class="mt-0">
          Yes. Yes, but you're just okay. Yes, maybe—maybe. I think the pitch
          deck is 90% of the pitch. I think that's bullshit. And, can you
          explain why? But you just end up getting caught up in things—lots of
          thinking, lots of dreaming. But actually, when you look at reality,
          there are just other things needed. And of course, with that
          internship platform we couldn’t raise any funding, but then we spent
          three weeks hammering out a pitch deck.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:22):
        </p>
        <p class="mt-0">Yes. Mm huh?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:22):
        </p>
        <p class="mt-0">Yes, sort of. No.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:22):
        </p>
        <p class="mt-0">
          No, but that's exactly what it is. Indeed, that is a lesson, because
          then you start thinking, “Was that necessary? And what else could we
          have done in those three weeks?”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:22):
        </p>
        <p class="mt-0">
          Yes. You just end up dealing with other things—often things you
          shouldn’t be dealing with. But you just don’t know any better. Then
          you have to experience it; you have to run into it. I see
          people—everyone always wants to be an entrepreneur. Everyone finds the
          image of an entrepreneur very sexy. But can you really say that works
          out? It works out a lot better than you think. Um. But yes, everyone
          is mostly focused on strategy and thinking about how to make it big or
          what my pitch should look like, and then we can raise funding, and
          then, yes, that’s all just part of it. Or making a budget. Yes, a
          budget—you can scrap it after a month. Of course. I understand that if
          you're further along, you want to look ahead and make investments. But
          when you're just starting out, you really don't need a budget. And if
          you get caught up in that...
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:23):
        </p>
        <p class="mt-0">
          Just double your costs, halve your revenue, and add another year on,
          because it doesn’t add up—and you end up spending a lot of time on it
          anyway. So yes, all those lessons from those three years, and then you
          go work on your new company. You definitely take that with you, and I
          can imagine. So that's why, above all, try this at home, because you
          learn so much from it. And if you don’t do that “try this at home”
          and, if I hadn’t done Fix, then I would have just been stuck reading
          all these business books. And then? I would have become way too
          clever.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:24):
        </p>
        <p class="mt-0">But I would have been super smart.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:24):
        </p>
        <p class="mt-0">
          Then I wouldn’t have any idea of what was coming at me. Yeah, and
          people get stuck in that—having ideas and thinking entrepreneurship is
          super sexy. So they read Zero to One and all the books by Elon Musk,
          and so on. But in the end, something has to be produced, and you just
          have to get out there, get a few slaps in the face, and then keep
          going.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:24):
        </p>
        <p class="mt-0">Yeah, get your hands dirty and just go for it.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:24):
        </p>
        <p class="mt-0">Yeah, yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:24):
        </p>
        <p class="mt-0">Right?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:24):
        </p>
        <p class="mt-0">Yes, yes, definitely.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:24):
        </p>
        <p class="mt-0">
          So you learned, um, a lot. Three very educational years at Fiks. Yeah.
          And then you met Adriaan, right? Because you didn’t know him yet, you
          said you weren’t in the picture, and he had already started with
          Simple Analytics. So, how did that go? You can’t just knock on
          someone's door and say, “Hey, can I join in?” Back then...
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:24):
        </p>
        <p class="mt-0">
          No. No, that's right. Um. So after three years of Fix, I was a bit
          done with it. And by that I mean we thought we were going to become
          the biggest company in the Netherlands, but in the end, that wasn’t
          the case. And we did have a good company, and it was running—and it
          still is. Um. But I felt like it was two steps forward, one step back,
          and it didn’t have that hockeystick growth you’re looking for. And we
          ran into all sorts of things where, um, well, some things couldn’t be
          built because we didn’t have the knowledge in-house and we just
          started as a team of three. It’s fun to do business with friends, but
          at a certain point I wanted to move on, and then I made the choice for
          myself of, “Yeah, I think I need to look for something different
          because I have a different ambition and want to go in a different
          direction.” And that was very difficult.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:25):
        </p>
        <p class="mt-0">
          It was also pretty painful, because you know, we were doing business.
          I was doing business with my friends, so yes, we all had contracts and
          everything was arranged very professionally. But yes, you get very
          close, and some people have a different idea about business, and
          fortunately we all ended up okay. But that was a difficult period, and
          then I started wondering, “Okay, with all the baggage and knowledge
          I've gained over these past three years, what do I really want?” And
          then I realized that I really wanted to be more on the software side
          and work with someone who was very technical and had a product.
          Because at Fix, we had a platform—we had a website—but we were
          basically just selling internships, and sometimes we got customers who
          were angry because the quality of an intern wasn’t good. And I, well,
          I didn’t have that in my control, so to speak.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:26):
        </p>
        <p class="mt-0">
          We were just the matchmaker, and in the end, you had to assess whether
          the intern fit your company, etc. But I found it very difficult not
          having control over the quality of my product. So then I thought,
          “Okay, I just want to go the software route, because then we can
          create a scalable solution and the person who wants to buy it will
          know what they're buying. Because here’s the product, and it costs €10
          a month or €100 a month. It doesn’t matter, but then you get that.” So
          that’s what I was really looking for. But I also knew that I would
          never be able to build that myself. So I did try taking software
          courses, but, well, that wasn’t for me.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:27):
        </p>
        <p class="mt-0">
          Did you take something like PHP for Beginners or something?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:27):
        </p>
        <p class="mt-0">
          Get into it? Yes, there’s a course called “Honderd Days of No Code.”
          But in the end, that led me to a little circle in Amsterdam with
          people who actually make software themselves—in that hacker scene,
          sort of. That’s also an umbrella term for it. And then I got more into
          it and started going to some drinks events, also to meet people who
          were in that field. And at one of those events, I ran into Adriaan,
          and I asked, “So, what do you do then?” Well, that’s a story in
          itself.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:27):
        </p>
        <p class="mt-0">It was Simple Analytics.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:27):
        </p>
        <p class="mt-0">Simple Analytics.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:28):
        </p>
        <p class="mt-0">Ten thousand.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:28):
        </p>
        <p class="mt-0">
          Ten thousand. And then I thought, and thought, holy shit, that is
          incredibly cool. And then I asked him, “So, how do you get your
          customers? And how do you do it? How does it work?” And he said, “No
          idea. They just come.” And then I thought, “Okay, I need to be a part
          of this.” And well, that was kind of simultaneous with me leaving Fix.
          And when it was completely clear that this was more my thing, I just
          grabbed a phone, called him, and said, “Hey, remember me? Three months
          ago at that drinks event?”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:28):
        </p>
        <p class="mt-0">Three months apart.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:28):
        </p>
        <p class="mt-0">Yes, maybe even more, by the way.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:28):
        </p>
        <p class="mt-0">A long time.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:28):
        </p>
        <p class="mt-0">
          A long time. Yes. Um, yes. Do you remember me? And don't you just look
          for a business partner who handles the business side? And then he said
          yes. When we had that conversation, I thought, “That really clicked
          for me too,” because he was really struggling with the fact that he
          needed to stabilize at some point. And then he knew he had to do
          marketing, but that just wasn’t in him.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:29):
        </p>
        <p class="mt-0">Absolutely no desire.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:29):
        </p>
        <p class="mt-0">As in.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:29):
        </p>
        <p class="mt-0">Everyone here.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:29):
        </p>
        <p class="mt-0">
          Every day he would wake up with a knot in his stomach thinking, “Oh
          shit, actually I have to do marketing, but I just don’t feel like it.
          I just want to build things.” So very soon after, it was like, “Okay,
          then let’s not even have a coffee meeting.” And well, one thing led to
          another, even though we didn’t know each other at the time. That was a
          risk especially for him, because he was letting me into his company,
          but also for me, because I was about to invest my time and energy. So
          what I said to him was, “You know what? I’m going to work for you for
          three months for free, full days. And during those three months, you
          can fire me at any time—no strings attached. Just shake my hand. If
          you don’t think it works, for any reason, then we won’t do it.”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:29):
        </p>
        <p class="mt-0">
          But if after three months you still think, “Alright, we should do
          this,” then you have to take into account that I am an entrepreneur
          too and I also want a big share of the pie. So if you’re open to that,
          then we’ll do it. You can cancel at any time, but after three months,
          if you want to continue, then we really become partners and
          co-entrepreneurs in this business. Naturally, after those three months
          we both realized we just had to do it.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:30):
        </p>
        <p class="mt-0">
          This is going to be something. Yeah, because you went from working
          with your friends and housemates at Fix—people you know very well and
          know how they are and communicate—to working with a guy you met at a
          drinks event.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:30):
        </p>
        <p class="mt-0">Yeah, yeah, no, that’s right.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:30):
        </p>
        <p class="mt-0">
          And then, after about three months of a trial period, did you get what
          you call the Iron Trial?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:30):
        </p>
        <p class="mt-0">
          Yeah. Well, and vice versa too, because I also worked with him for
          three months. I wanted to see if I liked it, if it worked. And you
          often notice after three months, “Okay, this works or this doesn’t.”
          And we both immediately realized that it worked. And since then, well,
          we made a contract and agreed on everything. You wanted to be an
          entrepreneur, right? So what about the percentages? We figured that
          out very quickly. Since then, we’ve had contracts tucked away and
          haven’t looked back, just moving forward.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:31):
        </p>
        <p class="mt-0">Yeah. The contract is in place.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:31):
        </p>
        <p class="mt-0">
          Yeah, yeah. You do need a contract. I would recommend everyone to
          hammer one out—get it completely locked down business-wise. Because if
          you have to part ways later, it makes things a lot easier. You just
          have a contract that says, “This is what we agreed on,” and then you
          shake hands and walk away. And sometimes it’s not so easy at all.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:31):
        </p>
        <p class="mt-0">
          But yeah, not often, but sometimes things just fall apart. We’ve had
          falling outs with business partners—like with Go Founders.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:31):
        </p>
        <p class="mt-0">
          Yeah, but then it’s really good to have something on paper.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:31):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:31):
        </p>
        <p class="mt-0">
          Just in case you encounter these kinds of situations. At Fix we also
          had a contract. The harder part was that I felt very emotionally
          involved with the company, since I had founded it myself and it didn’t
          turn out exactly as I had hoped. And then you have to distance
          yourself—and in a business sense, from your friends. That makes it
          very personal, and it makes parting ways much harder. Look, if Adriaan
          and I now get into an argument or can’t see eye to eye, we just have
          the contract. We’ve become good friends, but initially we are business
          partners, and if something happens, the contract clearly states what
          happens in situations x, y, and z.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:32):
        </p>
        <p class="mt-0">Yeah, and then it makes it a lot easier to split up.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:32):
        </p>
        <p class="mt-0">
          Yeah, but I always find those conversations difficult—when you’re
          drafting and hammering things together, you really need a good
          carpenter, I think.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:32):
        </p>
        <p class="mt-0">
          Yeah. Well, there are people who are good at that and enjoy it. But,
          um, we only did that after the three-month period, because you don’t
          want to start with that. It’s very important, and you know it will
          have to come eventually—just like an equity split and things like
          that. But I just said, “I think this is a really interesting
          opportunity to work with you, and I’m willing to take some risk by
          working for you for three months for free. And if you don’t like it,
          then I’m out and that’s my lost time and energy. But if it works, then
          we start with the fun part—working together and building a bond. And
          after three months, if we both think, ‘This is super nice,’ then we
          know, ‘Okay, we really like it, this is great,’ and then we have to
          agree on the next steps.”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:33):
        </p>
        <p class="mt-0">
          Yeah, but if you start by negotiating every little detail and
          percentages before you even begin working together, I don’t think
          that’s a good start.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:33):
        </p>
        <p class="mt-0">
          No. And that’s also nice because after those three months you both
          have built up goodwill. You both want to continue, so then those
          discussions become a bit easier, I think. You still have a company—you
          mentioned it just now, UniHosted. English? Dutch?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:34):
        </p>
        <p class="mt-0">UniHosted, a hosting company.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:34):
        </p>
        <p class="mt-0">
          Well, this is a very simple company. You specialize in hosting UniFi
          controllers for MSPs.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:34):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:34):
        </p>
        <p class="mt-0">Of course.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:34):
        </p>
        <p class="mt-0">
          Yeah, I hadn’t heard of this before I started. I mean, honestly, I’d
          never heard of it.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:34):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:34):
        </p>
        <p class="mt-0">
          Um. And I won’t go into all the details of what it does, but it’s a
          hosting service. We host a UniFi controller—and a UniFi controller is
          basically a kind of dashboard that manages your WiFi devices.
          Installation companies need those dashboards. And we host it on a
          server, and those installation companies—the MSPs—pay us monthly to do
          that. I’d never heard of that before. But this is a similar situation
          I ended up in with Adriaan. It all came about because of Simple
          Analytics. Adriaan, I wanted an office, and we have an office in
          Amsterdam with just the two of us, and the office is pretty big, so we
          set up a bunch of desks there and invited people from the local nerd
          community in Amsterdam, saying, “Hey, we have desks here if you’re
          working on cool, interesting tech projects.”
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:35):
        </p>
        <p class="mt-0">
          Well, I just sit there and rent a desk for €250 a month, and you kind
          of have colleagues even though they’re not really your colleagues.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:35):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:35):
        </p>
        <p class="mt-0">
          So there are now eight people there, and everyone is busy with their
          own projects. And I know how those people came together—it was simple.
          I posted on Twitter, and someone replied, “I’m in Amsterdam too; why
          not come by sometime?” That person had a desk and said, “I also have a
          friend—can he come too?” And he did. One of those guys was Dries.
          Dries worked as a software engineer at a development agency, and he
          was doing it on the side, just tinkering with projects.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:36):
        </p>
        <p class="mt-0">Like, they really know how to do it.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:36):
        </p>
        <p class="mt-0">
          Yeah. So I went over to Dries and said, “So, what exactly are you
          working on? Tell me about it.” And he started explaining what he was
          doing. He began it because he wanted to try it himself once, but then
          he discovered that hosting the UniFi controller is incredibly
          difficult. And then I thought, “Yeah, several people are bound to run
          into that problem. I can’t do that.” I mean, building a solution that
          automates that part and takes the hosting burden off—you know, because
          he just didn’t get it. And then I said, “Dries, I think this is just a
          business.” And then it was like, “Yeah, but how exactly? And how does
          it work?” So I went to Adriaan and said, “I think Dries has something
          really interesting here. They don’t even need to look into it.” And
          then Adriaan took a technical look at it and got back to me. That was
          interesting.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:37):
        </p>
        <p class="mt-0">Yeah, he has a business.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:37):
        </p>
        <p class="mt-0">
          So we approached Dries and said, “Hey, we want to make you an offer.
          The product you’re building is your business.” We already knew Dries a
          bit and knew he was an incredibly good engineer. And then we said, “If
          we can’t do the business side ourselves—and especially I, like I did
          with Simple Analytics—we can do it here too.” And Dries said, “That’s
          fine.” He was open to it, and he even quit his job.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:37):
        </p>
        <p class="mt-0">Really?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:37):
        </p>
        <p class="mt-0">
          Yes, and then he started working at Simple Analytics as a freelance
          engineer to make ends meet. And, well, we went on to build it.
          Eventually, Simple Analytics scaled down; now he’s there three days a
          week, and it’s gradually moving to full-time, and he has his own
          business. And so do I, because I’m also part of it.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:38):
        </p>
        <p class="mt-0">
          What a nice turn of events. And I really see a similarity between the
          start of Junior Hosted and Simple Analytics—they’re both run by people
          who encounter problems in their own circles or with their own
          activities. I think that’s a great tip for anyone watching or
          listening: if you want to be an entrepreneur, look at your own
          problems. What issues are you facing?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:38):
        </p>
        <p class="mt-0">
          Oh, 100%. And especially if you’re somewhat technical and you want to
          be in the SaaS, the software side—yeah, I really like that. Especially
          because I have two partners, Adriaan and Dries, who are, in a way, ten
          times smarter than I am and can really dive deep into a problem and
          build a solution. I didn’t have those skills, so I looked for a
          partner who was complementary to me. But in turn, they couldn’t really
          get things off the ground—Adriaan, maybe semi, but not really—and they
          still needed someone to handle the business or marketing side. You
          need both components. So I would say, if you want that, and you’re
          fairly technical or enjoy working with tech, go look for your own
          problems, because if you have a problem, there’s a good chance others
          face it too.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:39):
        </p>
        <p class="mt-0">That’s it, right?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:39):
        </p>
        <p class="mt-0">
          And if you can share that within a community of people who you know
          also have that problem, you’ll quickly go from zero to one. And if you
          have a more commercial background, you can even start a business
          yourself. But I chose otherwise—I just needed to find those guys who
          can solve those problems and support and help grow their business.
          Because you also need that growth component that they either don’t
          have the desire or the time for.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:40):
        </p>
        <p class="mt-0">Yeah, that gut feeling with them.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:40):
        </p>
        <p class="mt-0">
          Yeah, I take that away from them. And so we’ve now had two fairly
          successful partnerships like that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:40):
        </p>
        <p class="mt-0">
          Also, one reason I was really looking forward to this episode was
          because we had been in contact for a while, but it took some time
          before we could record, because you were working so hard as an
          entrepreneur.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:40):
        </p>
        <p class="mt-0">A front desk.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:40):
        </p>
        <p class="mt-0">Entrepreneurship from a front desk?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:40):
        </p>
        <p class="mt-0">
          Yes, it sounds a bit cliché, but that’s true. We were in our little
          office and simply decided to set up a front desk for a month.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:40):
        </p>
        <p class="mt-0">With those eight desks that you also rent out.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:40):
        </p>
        <p class="mt-0">
          Exactly. Out of the eight, five joined, plus three other guys we know
          through connections, all working on their own tech companies and being
          somewhat location independent. I said, “November isn’t the best month
          in the Netherlands. Why not set up somewhere else?” And that’s what we
          did last year. It worked out really well. And now again. But when I
          tell everyone, they think, “Oh, nice, he’s off to Bali on vacation,”
          even though we really worked hard.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:41):
        </p>
        <p class="mt-0">I believe that too.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:41):
        </p>
        <p class="mt-0">Really worked hard.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:41):
        </p>
        <p class="mt-0">
          Yes, yes, yes, indeed. I’ve seen what you share on LinkedIn. But just
          because you go there doesn’t mean you ride around on a moped and just
          hang out on the beach.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:41):
        </p>
        <p class="mt-0">But a lot of moped riding, indeed.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:41):
        </p>
        <p class="mt-0">
          Mopeds are the way to go there, right? I haven’t been there yet.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:41):
        </p>
        <p class="mt-0">
          Even though we did see the beach, I was actually amazed at how much we
          got done there. That’s because your entire social life is non-existent
          there and your schedule is completely empty. At home, I live with my
          girlfriend and, you know, your cousin comes over for dinner on
          Wednesday and all that. It’s nice—maybe she listens, I really enjoy it
          when you come over, but there are so many things and your weekends get
          completely booked. And then some guys would say, “Yeah, okay. Sure, we
          did fun things on the weekend, but I want to just push forward and
          work undisturbed for a while.” And there were always about three or
          four who said, “Yeah, that’s fine. Me too.” And then four of them
          would go, while others went off to do something else. It was just so
          much easier to set your own schedule than being stuck at home with all
          the social, not a social safety net, but social traps.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:42):
        </p>
        <p class="mt-0">
          Yeah, I get what you mean, and that really resonated with me too,
          because you mentioned it on the phone. I said at the beginning of the
          episode that when you start a business, it doesn’t have to be in one
          way. You don’t have to have an office, work 40 hours a week in a suit,
          and have clients. There are many ways. And the idea of all of us going
          to Bali because it’s cold here in November really appealed to me.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:43):
        </p>
        <p class="mt-0">
          Yeah, yeah. And I think that’s one of the great things about
          entrepreneurship—being able to put your own spin on it. And we really
          try to bring that into our product at Simple Analytics. We don’t
          always do things that are super optimized for conversion, but we do
          things that are fun because they give you joy. You can let your own
          creativity flow into your product—a kind of creation from the two of
          us. And you can also make choices based on what you stand for. For
          example, we don’t run ads, and we do that on principle. I know that if
          we did run ads, our revenue could grow much faster. But we actually
          want to set ourselves apart from Google and its ecosystem. So instead,
          we fund our ads ourselves.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:43):
        </p>
        <p class="mt-0">
          Those are ads, for example, that appear at the top of Google’s search
          results.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">So essentially, we’re supporting Google’s ecosystem.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">
          In the end, it could actually yield extra money. And a lot of people
          do that. You might miss opportunities and say, “This is just not how
          we want to build our company or position ourselves.” For example, we
          already share all our numbers. If you go to simpelanalytics.com, you
          can see all our data—though it might need updating.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">I was about to say…</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">I was just about to say, “I now have the…”</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">The opportunity to be in your…</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">Sight.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">
          To say. So I went there. I found it interesting, but the, the, the
          graph isn’t fully up-to-date.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">The graph isn’t up to date. So, update it, Adriaan?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">
          Yeah, I keep clicking “send reminder.” Do those reach Adriaan then?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">
          They do come through to us, so that’s nice. So keep clicking. But our
          revenue and NPS score are up to date there. We actually built that
          dashboard so you can see how much revenue is coming in, what we spend
          on costs, and what our profit is. We did that for several reasons, and
          it’s also a way to add your own creation to your company. We were
          tired of all the bullshit about building companies on social media.
          You know those real estate guys buying houses in Dubai and talking
          about which Rolex you want, and even on professional platforms like
          LinkedIn it’s all just for show—talking about vision, “We’ve raised so
          much funding,” showing a photo of three guys on an Amsterdam bridge in
          white shirts, and then in a year you don’t hear from them because
          they’re off building some kind of castle in the sky.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:45):
        </p>
        <p class="mt-0">
          Yeah, and I think that was Adriaan’s idea. He just wanted to show how
          it works.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:45):
        </p>
        <p class="mt-0">Really.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:45):
        </p>
        <p class="mt-0">
          It shows how it goes. And you can see in that graph that in the first
          three years you’re just struggling and not much comes in, and then it
          grows steadily. You see that it takes a long time. And if you build a
          software company, these are the costs you have to consider, and you
          get a better picture of how things are going. That’s exactly what we
          wanted to convey—that you don’t have to follow those flashy stories
          about buying real estate in Dubai or raising funding. You can just
          build a company, out of your own pocket, if you work really hard on it
          for five years. It doesn’t all have to come in a month; it grows
          steadily and it’s not like you go from zero to one hundred in a few
          months.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:46):
        </p>
        <p class="mt-0">
          Plus, we’re now a bit in the privacy space, so transparency is key. We
          believe in transparency. People think it’s awesome that we do
          that—it’s a bit of a marketing/branding thing. So, to get back to the
          point, there are ways to shape your own entrepreneurial story or your
          own company in your own style. This is an example of that—like going
          to Bali. But if people want something else, you can set it up however
          you want.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">
          Yeah, because you call it that. I had it written down: Open Startup.
          The open startup building, right?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">Yeah, exactly. Just open.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">Building your company?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">
          Yeah, but I also notice that you’re very active on LinkedIn. I’ve
          mentioned it a few times. Is that intentional? Is it also a form of
          marketing?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">
          Yeah, LinkedIn is basically marketing anyway—it’s not a platform that
          gives me much satisfaction because I think it’s all feel-good news,
          while it’s actually a lot of bullshit. I’m more on Twitter and,
          recently, Blue Sky—the new Twitter that I’m a big fan of. I do share a
          lot, but I just use a tool that posts on all platforms. So yes, I’m
          very active on LinkedIn, but mostly I share updates like, “We have
          this new building now.” Often when you see people posting on LinkedIn,
          they’re sharing stories about their authority, like “I came across
          this,” and then they DM you and you get my course. We’re basically
          doing continuous updates about what we’re building or that we need
          feedback.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:48):
        </p>
        <p class="mt-0">
          Yeah, I see a lot of features and many choices you make as an
          entrepreneur. I find it really interesting to follow, because you see
          the choices you all make.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:48):
        </p>
        <p class="mt-0">
          Yeah, I think so too. And I believe many of my followers are in that
          same boat—they like watching along and giving feedback, just like many
          customers do. We might say, “We’re working on this feature now, what
          do you think?” and I get really good responses.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">Really substantive.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">
          Yeah, it’s the perfect channel to get feedback. We just launched a new
          part of our onboarding, put it out on Twitter, LinkedIn, and Blue Sky,
          and I got responses like, “I can’t read this” or “It looks weird,”
          etc. Perfect—feedback in, and we build it better. It’s really a way of
          crowdsourcing feedback, and it works perfectly.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">Super effective.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">
          Yeah. And if you keep posting, your posts will show up in people’s
          feeds. After a while, they’ll start to recognize you, and that becomes
          a bit of marketing.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">
          Yeah, it’s also a form of personal branding. What you’re saying is
          that you don’t really like LinkedIn because people build castles in
          the air. Nice word.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">Not everyone, though.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">
          No, no, because there are plenty out there. You know, people say,
          “They’re raising so much funding” and shout from the rooftops. But you
          didn’t raise any funding with Simple Analytics, right? It’s
          bootstrapped, as they say.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">Yeah, that was also a choice.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:50):
        </p>
        <p class="mt-0">Because what is bootstrapping and why choose it?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">
          Well, bootstrapping means you don’t raise external money. So Simple
          Analytics, Junior Hosted, and even Fixed are 100% owned by me,
          Adriaan, Dries, and my other partners.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:50):
        </p>
        <p class="mt-0">
          I’d get an investor very quickly. Or something like that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">
          So yeah. I’m not against funding or investing, but when you see how it
          works in the US versus Europe, all the big companies full of cash come
          from the US, and we use them every day. If you want to think big,
          funding can be a way to build an incredibly large, influential
          company. But it’s not necessary for everything, and it’s becoming the
          norm. In my first company, raising funding was a goal in itself
          because I could put it on LinkedIn and people would look at me and
          say, “Wow, look how big they are working on something; this is serious
          shit.” I feel that funding is trending that way because everyone only
          posts about it when they’ve raised money, even though in many cases
          you might be better off without it.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:51):
        </p>
        <p class="mt-0">
          You’re better off not doing it. If you’re building a factory or a
          hardware company and it’s capital intensive, then by all means raise
          as much as you need. But if you’re building a software application or
          an HR dashboard—which, with all due respect, can be a very good
          business—then you might be better off not raising funding. That’s the
          choice we made with Simple Analytics. Our business isn’t capital
          intensive; we set it up ourselves and built it all on our own. And
          while raising funding sounds cool because you get money to invest in
          growth, you also bring someone on board who has a say, and then you
          can’t steer the company exactly how you want.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:52):
        </p>
        <p class="mt-0">
          But if it goes wrong, there are many horror stories about things going
          badly with investors and so on. We want to avoid that because we want
          to build our own company in which we make all the decisions ourselves.
          And our product lends itself perfectly to that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:52):
        </p>
        <p class="mt-0">Because the costs are so low that…</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:53):
        </p>
        <p class="mt-0">
          …they’re so low. It’s not capital intensive. So I often think that
          when you have the chance, first see if you can fix it yourself, and
          only raise funding when you really need it—if you need to make capital
          investments or if you’ve found a market and your product works. And if
          I had a hundred thousand or a million, I’d know exactly what to spend
          it on and what would come of it. That’s a kind of growth accelerator,
          but that’s usually later. Most people come up with an idea like an
          Airbnb for cats that they haven’t built yet and then want funding. I’m
          not a fan of that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:53):
        </p>
        <p class="mt-0">
          I get it. But what’s interesting is that when you started Fix—the
          internship platform—you wanted to become the biggest company, like
          Uber, and that mentality is different from what I hear now at Simple
          Analytics. Now it’s like, “We only need a small market share to do
          what we want.” But wouldn’t it be the case that if you enter such a
          growth phase, you could use funding to grow Simple Analytics a lot
          faster?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:54):
        </p>
        <p class="mt-0">
          Yeah, that could be. And it’s also a different mindset. A lot of
          people who hear my story say, “You’re thinking too small,” and I often
          get that feedback—and there’s some truth to it. It might still be that
          with Simple Analytics, it’s simply a choice. You could even call it a
          lifestyle business. I already hear that; it sounds crazy when someone
          says that, but it’s become a common term. A lifestyle business means
          you’ve changed your vision, and those rocket companies have to be
          huge, huge, even bigger, the biggest—blasting off—and eventually they
          have to be worth a billion or crash, because it doesn’t matter if it’s
          worth 10 million if you go in the other direction. That’s kind of what
          we do as calm companies: we grow steadily with our own resources and
          design our own lives.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:55):
        </p>
        <p class="mt-0">
          Yeah, and that’s pretty much the route we’re on, though I’m not saying
          it can’t still be huge. You might inject extra money as a growth
          accelerator to get there faster. Those are choices you have to make as
          an entrepreneur. As long as you’re aware of what it means if things go
          wrong or what you’re taking on, it’s fine. So if you’re conscious
          about raising funding, be aware of the risks. And if that’s the
          trade-off—because we want to build the rocket and it has to be worth a
          billion or crash—then fine, go ahead.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:55):
        </p>
        <p class="mt-0">
          Yeah, and you two have clearly chosen that we don’t have to be a
          rocket, so this is the way to go.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:55):
        </p>
        <p class="mt-0">
          Yeah. Well, not necessarily—we don’t have to be a rocket, but we
          choose not to raise external funding to build one. That doesn’t mean
          we aren’t still working on growing and having ambitions. We just
          talked about that 1 million per year, and if you do that as a duo with
          low costs, you add it all up and you’re set. Then it works.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:41):
        </p>
        <p class="mt-0">
          And even though we saw the beach, I was actually surprised at how much
          we got done there. That’s because your entire social life is
          non-existent there and your schedule is completely empty. At home, I
          live with my girlfriend and, you know, your cousin comes over for
          dinner on Wednesday and all that. It’s just nice—but there are so many
          things and your weekends get fully booked. Then some guys would say,
          “Yeah, we had fun over the weekend, but I want to just push forward
          and work undisturbed for a while.” And there were always about three
          or four who said, “Yeah, that’s fine. Me too.” And then four of them
          went off while others did something else. It was so much easier to set
          your own schedule than to be stuck at home with all those social
          traps.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:42):
        </p>
        <p class="mt-0">
          Yeah, I get what you mean, and that really resonated with me too,
          because you mentioned it on the phone. I said at the beginning of the
          episode that when you start a business, it doesn’t have to be one way.
          You don’t have to have an office, work 40 hours a week in a suit, and
          have clients. There are many ways. And the idea of all of us going to
          Bali because it’s cold here in November really appealed to me.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:43):
        </p>
        <p class="mt-0">
          Yeah, yeah. And I think that’s one of the great things about
          entrepreneurship—being able to put your own spin on it. We really try
          to bring that into our product at Simple Analytics. We don’t always do
          things that are super optimized for conversion, but we do what’s fun
          because it brings you joy. You can let your creativity flow into your
          product—a kind of creation from the two of us. And you can also make
          choices based on what you stand for. For example, we don’t run ads,
          and we stick to that principle. I know that if we ran ads, our revenue
          could grow much faster. But we want to differentiate ourselves from
          Google and its ecosystem, so we fund our ads ourselves.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:43):
        </p>
        <p class="mt-0">
          Those are ads, for example, that appear at the top of Google’s search
          results.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">So essentially, we’re supporting Google’s ecosystem.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">
          In the end, it could actually yield extra money. And many people do
          that. You might miss opportunities and say, “This is not how we want
          to build or position our company.” For example, we already share all
          our numbers. If you go to simpelanalytics.com, you can see all our
          data—though it might need updating.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">I was about to say…</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">I was just about to say, “I now have the…”</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">The opportunity to be in your…</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">Sight.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">
          To say. So I went there. I found it interesting, but the graph isn’t
          fully up-to-date.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">The graph isn’t up to date. So, update it, Adriaan?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:44):
        </p>
        <p class="mt-0">
          Yeah, I keep clicking “send reminder.” Do those reach Adriaan then?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:44):
        </p>
        <p class="mt-0">
          They do come through to us, so that’s nice. So keep clicking. But our
          revenue and NPS score are up to date. We built that dashboard so you
          can see how much revenue is coming in, what our costs are, and what
          our profit is. We did that for several reasons, and it’s also a way to
          add your own creation to your company. We were tired of all the
          bullshit about building companies on social media—those real estate
          guys buying houses in Dubai, talking about which Rolex you want—and
          even on LinkedIn it’s all just for show, with talk of vision and
          “We’ve raised so much funding,” showing pictures of three guys on an
          Amsterdam bridge in white shirts, only to vanish in a year because
          they’re off building castles in the sky.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:45):
        </p>
        <p class="mt-0">
          Yeah, and I think that was Adriaan’s idea—to show how it works.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:45):
        </p>
        <p class="mt-0">Really.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:45):
        </p>
        <p class="mt-0">
          It shows how it goes. In that graph you see that during the first
          three years, you’re just struggling and not much comes in, and then it
          grows steadily. You see that it takes a long time. And if you build a
          software company, these are the costs you have to consider, and it
          gives you a better picture of how things are progressing. That’s what
          we wanted to convey: you don’t have to follow the flashy stories about
          buying real estate in Dubai or raising funding. You can build a
          company out of your own pocket if you work really hard on it for five
          years. It doesn’t all have to come in a month—it grows steadily, not
          from zero to a hundred in a few months.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:46):
        </p>
        <p class="mt-0">
          Plus, we’re now a bit in the privacy space, so transparency is key. We
          value transparency. People think it’s awesome that we do that—it’s a
          bit of a marketing/branding thing. So to get back to the point, there
          are ways to shape your own entrepreneurial story or company in your
          own way. This is an example of that—like going to Bali. But if people
          want something else, you can set it up however you want.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">
          Yeah, because you call it that. I had it written down: Open
          Startup—the open startup building, right?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">Yeah, exactly. Just open.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">Building your company?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:47):
        </p>
        <p class="mt-0">
          Yeah, but I also notice that you’re very active on LinkedIn. I’ve
          mentioned it a few times. Is that intentional? Is it also a form of
          marketing?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:47):
        </p>
        <p class="mt-0">
          Yeah, LinkedIn is basically marketing anyway—it’s not a platform that
          gives me much satisfaction because I think it’s all feel-good news,
          while it’s actually a lot of bullshit. I’m more on Twitter and
          recently Blue Sky—the new Twitter that I’m a big fan of. I do share a
          lot, but I use a tool that posts on all platforms. So yes, I’m very
          active on LinkedIn, but mostly I share updates like, “We have this new
          building now.” Often people on LinkedIn post stories about their
          authority, and then they DM you and you get my course. We’re just
          continuously updating what we’re building or asking for feedback.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:48):
        </p>
        <p class="mt-0">
          Yeah, I see a lot of features and choices you make as an entrepreneur.
          I find it really interesting to follow, because you see the choices
          you all make.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:48):
        </p>
        <p class="mt-0">
          Yeah, I think so too. And I believe many of my followers are in that
          same boat—they enjoy watching along and giving feedback, just like
          many customers do. We might say, “We’re working on this feature now.
          What do you think?” and I get really good responses.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">Really substantive.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">
          Yeah, it’s the perfect channel to get feedback. We just launched a new
          part of our onboarding, put it out on Twitter, LinkedIn, and Blue Sky,
          and I got responses like, “I can’t read this” or “It looks weird,”
          etc. Perfect—feedback in, and we build it better. It’s really a way of
          crowdsourcing feedback, and it works perfectly.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">Super effective.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">
          Yeah. And if you keep posting, your posts will appear in people’s
          feeds. After a while, they’ll start to recognize you, and that becomes
          a bit of marketing.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">
          Yeah, it’s also a form of personal branding. What you’re saying is
          that you don’t really like LinkedIn because people build castles in
          the air. Nice word.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:49):
        </p>
        <p class="mt-0">Not everyone, though.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:49):
        </p>
        <p class="mt-0">
          No, no, because there are plenty out there. You know, people say,
          “They’re raising so much funding” and shout from the rooftops. But you
          didn’t raise any funding with Simple Analytics, right? It’s
          bootstrapped, as they say.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">Yeah, that was also a choice.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:50):
        </p>
        <p class="mt-0">Because what is bootstrapping and why choose it?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">
          Well, bootstrapping means you don’t raise external money. So Simple
          Analytics, Junior Hosted, and even Fixed are 100% owned by me,
          Adriaan, Dries, and my other partners.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:50):
        </p>
        <p class="mt-0">
          I’d get an investor very quickly. Or something like that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:50):
        </p>
        <p class="mt-0">
          So yeah. I’m not against funding or investing, but when you see how it
          works in the US versus Europe, all the big companies full of cash come
          from the US, and we use them every day. If you want to think big,
          funding can be the right way to build an incredibly large, influential
          company. But it’s not necessary for everything, and it’s becoming the
          norm. In my first company, raising funding was a goal in itself
          because I could put it on LinkedIn and people would look at me and
          say, “Wow, look how big they are working on something; this is serious
          shit.” I feel that funding is trending that way because everyone only
          posts about it when they’ve raised money, even though in many cases
          you might be better off without it.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:51):
        </p>
        <p class="mt-0">
          You’re better off not doing it. If you’re building a factory or a
          hardware company and it’s capital intensive, then by all means, raise
          as much as you need. But if you’re building a software application or
          an HR dashboard—which, with all due respect, can be a very good
          business—then you might be better off not raising funding. That’s the
          choice we made with Simple Analytics. Our business isn’t capital
          intensive; we set it up ourselves and built it all on our own. And
          while raising funding sounds cool because you get money to invest in
          growth, you also bring someone on board who has a say, and then you
          can’t steer the company exactly how you want.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:52):
        </p>
        <p class="mt-0">
          But if it goes wrong, there are many horror stories about things going
          badly with investors and so on. We want to avoid that because we want
          to build our own company in which we make all the decisions ourselves.
          And our product lends itself perfectly to that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:52):
        </p>
        <p class="mt-0">Because the costs are so low that…</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:53):
        </p>
        <p class="mt-0">
          …they’re so low. It’s not capital intensive. So I often think that
          when you have the chance, first see if you can fix it yourself, and
          only raise funding when you really need it—if you need to make capital
          investments or if you’ve found a market and the product works. And if
          I had a hundred thousand or a million, I’d know exactly what to spend
          it on and what would come of it. That’s a kind of growth accelerator,
          but that’s usually later. Most people come up with ideas like an
          Airbnb for cats that they haven’t built yet and then want funding. I’m
          not really a fan of that.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:53):
        </p>
        <p class="mt-0">
          I get it. But what’s interesting is that when you started Fix—the
          internship platform—you wanted to become the biggest company, like
          Uber, and that mentality is different from what I hear now at Simple
          Analytics. Now it’s like, “We only need a small market share to do
          what we want.” But wouldn’t it be the case that if you enter such a
          growth phase, you could use funding to grow Simple Analytics a lot
          faster?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:54):
        </p>
        <p class="mt-0">
          Yeah, that could be. And it’s also a different mindset. A lot of
          people who hear my story say, “You’re thinking too small,” and I often
          get that feedback—and there’s some truth in it. It might still be that
          with Simple Analytics, it’s simply a choice. You could even call it a
          lifestyle business. I already hear that; it sounds crazy when someone
          says that, but it’s become a common term. A lifestyle business means
          you’ve changed your vision, and those rocket companies have to be
          huge, huge, even bigger—the biggest—blasting off, and eventually they
          have to be worth a billion or crash, because it doesn’t matter if it’s
          worth 10 million if you go in the other direction. That’s kind of what
          we do as calm companies: we grow steadily with our own resources and
          design our own lives.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:55):
        </p>
        <p class="mt-0">
          Yeah, and that’s pretty much the route we’re on, though I’m not saying
          it can’t still be huge. You might inject extra money as a growth
          accelerator to get there faster. Those are choices you have to make as
          an entrepreneur. As long as you’re aware of what it means if things go
          wrong or what you’re taking on, it’s fine. So if you’re conscious
          about raising funding, be aware of the risks. And if that’s the
          trade-off—because we want to build the rocket and it has to be worth a
          billion or crash—then fine, go ahead.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:55):
        </p>
        <p class="mt-0">
          Yeah, and you two have clearly chosen that we don’t have to be a
          rocket, so this is the way to go.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:55):
        </p>
        <p class="mt-0">
          Yeah. Well, not necessarily—we don’t have to be a rocket, but we
          choose not to raise external funding to build one. That doesn’t mean
          we aren’t still working on growing and having ambitions. We just
          talked about that 1 million per year, and if you do that as a duo with
          low costs, you add it all up and you’re set. Then it works.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:56):
        </p>
        <p class="mt-0">
          Yes, then I would go to Bali with the whole team and work there.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:56):
        </p>
        <p class="mt-0">
          Yes, well, exactly. So yes. I think those are choices, and I might
          sometimes be a bit vocal about it. I also think that mission and
          vision is bullshit. But yes, it's just because of the vision funding
          train. It kind of takes over a bit because it's something you see very
          often. And I think many beginner entrepreneurs also think about
          funding, while I believe that it doesn't have to be; just solve a
          problem and build a company around it, and then you can indeed choose
          funding. But it doesn't have to be the number one bullet point on your
          to-do list.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:56):
        </p>
        <p class="mt-0">
          Yes, step one: make a website, add Google Analytics, and arrange
          funding.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:56):
        </p>
        <p class="mt-0">Yes, yes, yes, that's often how it goes.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:57):
        </p>
        <p class="mt-0">
          Yes, that's a good counterpoint, right? And that's exactly it. What I
          would advise new entrepreneurs is: be aware of the choices you make.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:57):
        </p>
        <p class="mt-0">
          Yes, yes, yes, yes, I think so, and I believe it's either way. It's
          not a wrong choice. If it fits your company and your ambitions, then
          you should definitely do it. But yes.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:57):
        </p>
        <p class="mt-0">
          Yes, as long as it doesn't end in conflict, even with a no.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:57):
        </p>
        <p class="mt-0">And explain.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:57):
        </p>
        <p class="mt-0">Your co-founder or your investors.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:57):
        </p>
        <p class="mt-0">
          Yes. Yes, you have to take that into account. I think many new
          entrepreneurs – or entrepreneurs in general – often don't do that.
          They just think, "I need money, because we're going to build a
          business," and then eventually realize that, well, this choice I made
          by jumping on that funding train, I'm actually not so happy with after
          a few years. Because it's all about the funding. Look, if you
          bootstrap, then you can always raise funding when you need it. But
          then you're on a certain trajectory, because your investor will
          eventually want to get their money out.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:58):
        </p>
        <p class="mt-0">Yes, it's like a ticking clock.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:58):
        </p>
        <p class="mt-0">
          It also pushes, like, "Okay boys and girls, let's go!" And I can
          imagine that you make that choice when you start, and you're in your
          company for about four to five years. And then I think, if I could do
          it again, I wouldn't have made that choice. So if you make the choice,
          do it very thoughtfully and assume that you'll have to live with it
          for five years.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:58):
        </p>
        <p class="mt-0">
          Yes, I believe we already got this tip from Stanley, the football
          photographer. He said if I could do it again, I would be a bit more
          cautious. Also with giving away a percentage of my company, because
          they later said, "I think I could have managed this without giving
          away part of my company," and then I would have been here, but with
          full control to steer my own course, and then he would have
          experienced less stress in that regard.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:58):
        </p>
        <p class="mt-0">Yes, yes, I can completely understand that.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:58):
        </p>
        <p class="mt-0">
          But you have a goal of 1 million in recurring revenue. Is that a Dutch
          word? Recurring revenue?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:58):
        </p>
        <p class="mt-0">Yes, recurring.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (00:59):
        </p>
        <p class="mt-0">
          Alright then. What are the future plans? Because it's just the two of
          you. Are more people coming on board?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (00:59):
        </p>
        <p class="mt-0">
          Yes, the idea is that I would really like to work with a small team,
          but we want to reach that 1 million with a maximum of about five
          people. That's the goal, and it should be possible because it's a very
          scalable piece of software. And of course, the reason we might want a
          small team is that we want to keep moving fast, which often involves
          developing new things. And now, everything related to tech and product
          falls on Adriaan's shoulders, and everything related to marketing and
          growth falls on mine. So if Adriaan goes on vacation for a month –
          which is totally fine in a bootstrapped software company – it means
          nothing gets developed for a month, so to speak. So we would like to
          move towards a situation that's a bit less founder-dependent.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:00):
        </p>
        <p class="mt-0">
          But with a very small team, so maybe with one or two engineers and
          perhaps someone in design or marketing. Because you now have a…
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:00):
        </p>
        <p class="mt-0">A few freelancers, right? What do they do then?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:00):
        </p>
        <p class="mt-0">
          Yes, so what we have done now – and this is actually a solution that
          works quite well for now – is that we buy in expertise. So there are
          just the two of us, and when you're two, you have to wear all the
          hats. I'm acting as the HR manager and finance for Simple Analytics.
          But, for example, we operate in a market that is very volatile,
          especially in the area of privacy. So we have someone freelance who
          works one day a week on privacy. And that ranges from writing blogs
          about new issues as they arise to ensuring that our own privacy
          documentation is tightly put together. And? Of course, yes. I
          mentioned we have 1300 customers, but we also have major clients from
          really big companies, such as Bloomberg uses us, Mollie uses us, and
          Michelin uses us. Michelin uses us. Now, that brings in quite a bit of
          data. Well, we need to be able to process that properly and store it
          properly.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:01):
        </p>
        <p class="mt-0">
          Well, then we have Jim. He works on our servers, because Adriaan has
          basic knowledge of servers, but you want that to be set up properly.
          So we need Jim. And Adriaan has basic knowledge of privacy, but if we
          want to set it up properly, we need Carlo, who handles privacy. And so
          we buy in expertise as needed. But we can also quickly drop it if it's
          not necessary. And that way we essentially remain just the two of us,
          but we buy in expertise from time to time. Yes, and I think that as we
          grow, we'll want to move to a model where we have a more in-house
          team.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:01):
        </p>
        <p class="mt-0">So those five would really be colleagues, then.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:02):
        </p>
        <p class="mt-0">
          Yes, that's what you think. And simply because we also enjoy working
          with other people.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:02):
        </p>
        <p class="mt-0">
          But you already have that, because you already have eight agencies.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:02):
        </p>
        <p class="mt-0">
          But it also seems like a nice development for the company to work with
          a small team and continue to move quickly, while we are fully
          bootstrapped without external financing.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:02):
        </p>
        <p class="mt-0">
          Yes. And do you also have – because now as a founder you really work
          in your company, and then what is often said: instead of working in
          your company, you should work on your company. Because then your
          company isn't dependent on you as a founder, and eventually you could
          sell it. Do you have something like a final goal or an exit or
          something in mind already?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:02):
        </p>
        <p class="mt-0">
          An exit? There's no exit. And that's what I mean. Look, we've told
          each other that if someone comes along and names a really strange
          amount, then we should always consider it. But we do get quite a few
          inquiries from people who either want to buy the company, or from
          private equity, or people who want to invest. And we always put that
          aside a bit because we really enjoy working on this business. And
          because, well, it's not dependent on our hours – we put in a lot of
          hours, but if I take a two‑week vacation, the business still runs. So
          we can easily integrate this business into our lives and ensure that
          the business fits into our life. Yes, so that we can sustain it
          indefinitely. And there's no one outside the two of us who says, "Hey
          guys, I want my money back in seven years," so we're not working
          towards an exit.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:03):
        </p>
        <p class="mt-0">
          So, well, those, those, those plans aren’t there, but actually the
          plan is. Yes, that there is no exit.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:04):
        </p>
        <p class="mt-0">
          Yeah, you guys are basically the plan already, but I can imagine if
          you enjoy aggressively building that early phase. And now growing
          Simple Analytics. If you like that, it might be that at some point you
          just have enough, or something like that. That you then think, well, I
          actually do want to.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:04):
        </p>
        <p class="mt-0">Again.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:04):
        </p>
        <p class="mt-0">What.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:04):
        </p>
        <p class="mt-0">
          News or something. That’s a pretty nice problem to face, I think. But.
          No, I can definitely see that. And, um. But we’ve also set up Simple
          Analytics in such a way that we could start juniors alongside. Yeah,
          and I don’t rule out that there could be more projects like this,
          where we see opportunities and work with people who are really good at
          solving a problem but find it harder to bring it to market. So that is
          completely open, and it’s really nice that it is, because it doesn’t
          mean that Adriaan and I are obligated to work on it for a minimum
          number of years. No, and I think that maybe one day we’ll reach a
          point where it no longer feels like we really enjoy working on it. Or
          that we can put our passion and creativity into it. And that would, I
          think, be a good moment to consider an exit.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:05):
        </p>
        <p class="mt-0">
          But look, you need to think about it a bit beforehand. It’s just a
          software company with no staff at the moment, so it’s really just a
          neat package you can hand over to someone. This is the codebase and
          everything is tidy and…
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:05):
        </p>
        <p class="mt-0">This is the password.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:05):
        </p>
        <p class="mt-0">
          Yeah, well, go for it. It’s not like you’re selling a warehouse with
          300 employees.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:05):
        </p>
        <p class="mt-0">
          Yeah, with onboarding and handover and that sort of thing. Yeah. Yeah.
          Quite nice. A good position to be in. And now, as I see it
          progressing, I’m still working really hard on it. And yeah.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:05):
        </p>
        <p class="mt-0">
          Yeah. And it’s just really fun to work on, so. For now, it’s all good.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:05):
        </p>
        <p class="mt-0">
          Thank you very much for this conversation. Yeah, definitely! Is there
          anything else we can do before we wrap up?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:06):
        </p>
        <p class="mt-0">Uh, no. Do you want to know anything else?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:06):
        </p>
        <p class="mt-0">Yeah, you ran an Iron Man.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:06):
        </p>
        <p class="mt-0">Yeah, not only swam. And swam? Yeah, that’s right.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:06):
        </p>
        <p class="mt-0">So, what are the distances of an Iron Man?</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:06):
        </p>
        <p class="mt-0">
          309 or three? Comma eight swimming? And then it’s 180 cycling and then
          a marathon.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:06):
        </p>
        <p class="mt-0">
          Yeah, then another 42 kilometers running. So, how did that come about?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:06):
        </p>
        <p class="mt-0">
          Uh, yeah. It started kind of as a student group thing, because I
          studied in Maastricht and the Iron Man is held every year in
          Maastricht and it had been a few years already, and then at the pub
          the story went, well, it would be funny if Iron Man did Iron Man,
          because then I would be the first Iron… the one who did Iron Man. And
          then it got a bit out of hand and I thought, fuck it, I’ll just do it.
          And then I came home with that story. And then they thought I was
          joking. And then a few of us said, “Okay, if you do it, then I’ll buy
          your bike.” And then I said, “Okay, that’s fine, I’ll do it.” And
          then, uh, some people caught wind of me doing it and then a cousin of
          mine, who’s an athlete, said, “Well then I’ll train you.” And then I
          worked on it for a year and trained incredibly hard.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:07):
        </p>
        <p class="mt-0">And then that day in Maastricht, I did the Ironman.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:07):
        </p>
        <p class="mt-0">
          Cool! And how was your condition at the start of that year?
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:07):
        </p>
        <p class="mt-0">
          Before I did the Ironman? Yeah. Well, when I started training it was
          alright. The partying students start working out and I had lost
          thirteen kilos, and yeah, I didn’t have a gram of fat left.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:07):
        </p>
        <p class="mt-0">And in just one year, really in one year.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:07):
        </p>
        <p class="mt-0">
          Yeah, and it wasn’t that I suddenly got really muscular, it was just
          all gone.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:07):
        </p>
        <p class="mt-0">Leaner and more efficient.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:07):
        </p>
        <p class="mt-0">Actually. Yeah, yeah, very light and lean.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:07):
        </p>
        <p class="mt-0">
          Yeah, I—I sign myself up once a year for a quarter triathlon in
          September.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:08):
        </p>
        <p class="mt-0">Oh nice.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:08):
        </p>
        <p class="mt-0">
          Yeah, so it’s nice to train again, because then you have the summer
          period. And then I’m always really happy when that day is over. And
          then I’m very optimistic, like I say, now I’ll just do it. In the
          winter I keep going, because in September I can do it much better than
          I do now. Yeah, well, it’s about winter now.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:08):
        </p>
        <p class="mt-0">Yeah.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:08):
        </p>
        <p class="mt-0">I won’t ask.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:08):
        </p>
        <p class="mt-0">
          I can totally relate because I’ve done that. And then? After that, I
          never swam, or got on the bike, or ran again. I was completely done
          with it. Just because you spend your whole year on it. That day itself
          is the best day of your life. But the year before is really meh. Yeah,
          but also boring. Because sometimes you’re just in a training session.
          Then you’re just spending 160 kilometers on a bike, just gawking
          around. And yeah, those weren’t the most enjoyable training sessions,
          I must say. Or the best moments. So I thought, “Okay, I’ll do it and
          then I’m completely done.” Yeah. So yeah.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:08):
        </p>
        <p class="mt-0">
          How awesome that you pulled it off, because I think that’s really
          impressive in one year, yeah. Hats off.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:08):
        </p>
        <p class="mt-0">
          Yeah. Yeah. Thank you. And, uh, I must say, I could go on about it for
          a long time, because it was six years ago and I haven’t done anything
          since. But yeah, people.
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:09):
        </p>
        <p class="mt-0">They still say that.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:09):
        </p>
        <p class="mt-0">Good that you found it.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:09):
        </p>
        <p class="mt-0">Yeah, cheers.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:09):
        </p>
        <p class="mt-0">It was on LinkedIn, so.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:09):
        </p>
        <p class="mt-0">
          Hence. Well, great! I’d like to address the viewer or listener at
          home. Thank you very much for listening to this conversation. I hope
          you found it interesting and that as an entrepreneur you really got
          something out of it. That you took away some good lessons. And please
          leave a like or a comment and follow the podcast in your favorite
          podcast app, or subscribe to our YouTube channel. And if you have a
          question or a challenge that we could tackle in the future, please
          leave it as well. Iron. Super thanks for being here today for your
          time!
        </p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:09):
        </p>
        <p class="mt-0">Yeah, you’re welcome!</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Bart Sprenkels (01:09):
        </p>
        <p class="mt-0">I found it really interesting.</p>

        <p class="text-gray-400 dark:text-gray-600 mb-0">
          Iron Brands (01:09):
        </p>
        <p class="mt-0">I really enjoyed being here, so great!</p>
      </div>
    </PressMention>
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const i18n = useI18n();
const { locale } = i18n;

const path = useRoute().path;
const slug = path.split("/").filter(Boolean).pop();
</script>
