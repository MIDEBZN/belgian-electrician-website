export interface Commune {
    slug: string;
    name: string;
    zip: string;
    title: string;
    metaDescription: string;
    aboutText: string;
    neighborhoods: string[];
    landmarks: string[];
}

export const communes: Commune[] = [
    // --- New Cities (Surrounding Area) ---
    {
        slug: "zaventem",
        name: "Zaventem",
        zip: "1930",
        title: "Électricien Zaventem - Dépannage 24/7 & Mise en Conformité",
        metaDescription: "Électricien agréé à Zaventem (1930). Dépannage urgent, installation électrique, contrôle RGIE. Intervention rapide à Nossegem, Sterrebeek et Sint-Stevens-Woluwe.",
        aboutText: "Zaventem, pôle économique majeur grâce à son aéroport international, est une commune dynamique mêlant zones résidentielles calmes et parcs d'affaires animés. Nos électriciens interviennent aussi bien pour les entreprises de la zone industrielle que pour les particuliers résidant dans les quartiers de Nossegem ou Sterrebeek. La présence de nombreuses infrastructures nécessite une expertise pointue en électricité générale et industrielle.",
        neighborhoods: ["Zaventem-Centre", "Nossegem", "Sterrebeek", "Sint-Stevens-Woluwe"],
        landmarks: ["Aéroport de Bruxelles-National", "Parc de Zaventem", "Église Saint-Martin"]
    },
    {
        slug: "tervuren",
        name: "Tervuren",
        zip: "3080",
        title: "Électricien Tervuren - Rénovation & Dépannage Électrique",
        metaDescription: "Besoin d'un électricien à Tervuren (3080) ? Experts en rénovation de villas et mise en conformité à Vossem, Duisburg et Moorsel. Devis gratuit.",
        aboutText: "Connue pour son magnifique Parc et le Musée Royal de l'Afrique Centrale, Tervuren est une commune verte et prestigieuse. Le parc immobilier y est constitué de nombreuses villas et maisons de caractère nécessitant un soin particulier lors des rénovations électriques. Nos électriciens à Tervuren sont spécialisés dans la mise en valeur de ces biens (éclairage extérieur, domotique) tout en respectant leur cachet historique.",
        neighborhoods: ["Tervuren-Centre", "Vossem", "Duisburg", "Moorsel"],
        landmarks: ["Parc de Tervuren", "Musée de l'Afrique", "Arboretum"]
    },
    {
        slug: "overijse",
        name: "Overijse",
        zip: "3090",
        title: "Électricien Overijse - Installation & Mise aux Normes RGIE",
        metaDescription: "Électricien local à Overijse (3090). Service rapide à Maleizen, Eizer et Tombeek. Spécialiste bornes de recharge et rénovation.",
        aboutText: "Au cœur de la région du raisin, Overijse offre un cadre de vie vallonné et verdoyant. De Maleizen à Eizer, nos équipes sillonnent la commune pour répondre aux besoins des habitants. Que ce soit pour la sécurisation d'une ancienne installation de serres reconverties ou pour l'équipement d'une nouvelle construction, nous apportons notre savoir-faire technique adapté à la topographie et au style rural-chic d'Overijse.",
        neighborhoods: ["Overijse-Centre", "Maleizen", "Eizer", "Tombeek", "Jezus-Eik"],
        landmarks: ["Lac de Genval (limitrophe)", "Église Saint-Martin", "Les Serres"]
    },
    {
        slug: "hoeilaart",
        name: "Hoeilaart",
        zip: "1560",
        title: "Électricien Hoeilaart - Dépannage Urgent & Rénovation",
        metaDescription: "Intervention électrique à Hoeilaart (1560) et Groenendaal. Dépannage 7j/7, conformité électrique et installation de systèmes modernes.",
        aboutText: "Bordée par la Forêt de Soignes, Hoeilaart est une commune paisible où il fait bon vivre. Nos électriciens interviennent fréquemment dans ce cadre verdoyant pour des mises en conformité et des installations de systèmes d'éclairage LED économes en énergie, respectueux de l'environnement proche. Le quartier de Groenendaal, avec son accès direct à la forêt, est l'un de nos secteurs d'intervention réguliers.",
        neighborhoods: ["Hoeilaart-Centre", "Groenendaal"],
        landmarks: ["Forêt de Soignes", "Hippodrome de Groenendaal", "Château de Hoeilaart"]
    },
    {
        slug: "waterloo",
        name: "Waterloo",
        zip: "1410",
        title: "Électricien Waterloo - Experts Domotique & Rénovation",
        metaDescription: "Électricien à Waterloo (1410). Service premium pour villas et commerces : domotique, bornes de recharge, éclairage de jardin. Intervention rapide.",
        aboutText: "Mondialement connue, Waterloo est une ville résidentielle de standing accueillant une importante communauté internationale. Nos services à Waterloo sont orientés vers les installations haut de gamme : domotique avancée, sécurisation par vidéophonie, et installation de bornes de recharge pour véhicules électriques dans les villas du Faubourg ou du Chenois. Nous offrons un service bilingue et discret.",
        neighborhoods: ["Waterloo-Centre", "Faubourg", "Chenois", "Joli-Bois", "Mont-Saint-Jean"],
        landmarks: ["Butte du Lion", "Musée Wellington", "Église Royale Saint-Joseph"]
    },
    {
        slug: "rhode-saint-genese",
        name: "Rhode-Saint-Genèse",
        zip: "1640",
        title: "Électricien Rhode-Saint-Genèse - Service Professionnel",
        metaDescription: "Électricien agréé à Rhode-Saint-Genèse (1640). Dépannage et installation à De Hoek, Espinette Centrale et alentours. Travail soigné et garanti.",
        aboutText: "Commune à facilités prisée pour son calme et ses espaces verts, Rhode-Saint-Genèse (Sint-Genesius-Rode) requiert des interventions soignées. Du quartier de l'Espinette Centrale aux zones plus rurales, nos électriciens assurent la maintenance et la rénovation des installations électriques des vastes propriétés rhodiennes, avec une attention particulière portée à la sécurité et à l'esthétique.",
        neighborhoods: ["Rhode-Centre", "De Hoek", "Espinette Centrale", "Petite Espinette"],
        landmarks: ["Forêt de Soignes", "Parc de la Warande", "Espinette"]
    },
    {
        slug: "linkebeek",
        name: "Linkebeek",
        zip: "1630",
        title: "Électricien Linkebeek - Dépannage Rapide & Efficace",
        metaDescription: "Votre électricien à Linkebeek (1630). Interventions rapides pour pannes, mises aux normes et petits travaux électriques. Contactez-nous.",
        aboutText: "Linkebeek est un véritable écrin de verdure aux portes de Bruxelles. Dans cette commune à caractère rural préservé, nous intervenons pour moderniser les installations électriques tout en douceur. Que ce soit près de la Vallée des Artistes ou du Holleken, nous aidons les résidents à sécuriser leurs habitations (mise à la terre, remplacement de tableau) sans dénaturer le charme des lieux.",
        neighborhoods: ["Linkebeek-Centre", "Holleken", "Vallée des Artistes"],
        landmarks: ["Place Communale", "Parc Schaveys"]
    },
    {
        slug: "drogenbos",
        name: "Drogenbos",
        zip: "1620",
        title: "Électricien Drogenbos - Industriel & Résidentiel",
        metaDescription: "Électricien à Drogenbos (1620). Solutions électriques pour entreprises et particuliers. Dépannage, maintenance et nouvelles installations.",
        aboutText: "Drogenbos, bien que petite en superficie, est un nœud important mêlant zones industrielles et habitat. Nos compétences s'étendent ici du dépannage résidentiel classique à la maintenance électrique pour les PME installées dans la commune. Nous comprenons les impératifs de réactivité nécessaires pour les entreprises locales tout en assurant un service de proximité pour les habitants.",
        neighborhoods: ["Drogenbos-Centre", "Zone Industrielle"],
        landmarks: ["FeliXart Museum", "Église Saint-Nicolas"]
    },
    {
        slug: "beersel",
        name: "Beersel",
        zip: "1650",
        title: "Électricien Beersel - Alsemberg, Lot, Huizingen, Dworp",
        metaDescription: "Service d'électricité complet à Beersel (1650) et ses sections : Alsemberg, Lot, Huizingen, Dworp. Dépannage et conformité RGIE.",
        aboutText: "Beersel est une vaste commune composée de plusieurs entités distinctes : Alsemberg, Lot, Huizingen et Dworp. Chacune a ses spécificités, des zones inondables de Lot (nécessitant des précautions électriques spécifiques) aux collines d'Alsemberg. Nos équipes mobiles couvrent l'ensemble du territoire beerselois, intervenant aussi bien pour des pannes urgentes que pour des projets de rénovation énergétique globale.",
        neighborhoods: ["Beersel-Centre", "Alsemberg", "Lot", "Huizingen", "Dworp"],
        landmarks: ["Château de Beersel", "Domaine provincial de Huizingen", "Hergé Museum (proche)"]
    },
    {
        slug: "grimbergen",
        name: "Grimbergen",
        zip: "1850",
        title: "Électricien Grimbergen - Strombeek-Bever & Beigem",
        metaDescription: "Électricien à Grimbergen (1850). Intervention à Strombeek-Bever, Beigem et Humbeek. Dépannage, éclairage et électricité générale.",
        aboutText: "Célèbre pour son Abbaye, Grimbergen est une commune du Brabant flamand en pleine expansion. Nous intervenons aussi bien dans le centre historique que dans la section très urbanisée de Strombeek-Bever, proche du Heysel. Nos électriciens sont habitués à travailler dans les immeubles à appartements de Strombeek ainsi que dans les maisons unifamiliales de Beigem et Humbeek, adaptant leurs techniques à chaque type de bâtiment.",
        neighborhoods: ["Grimbergen-Centre", "Strombeek-Bever", "Beigem", "Humbeek"],
        landmarks: ["Abbaye de Grimbergen", "Basisschool Prinsenhof", "Mira (Observatoire)"]
    },
    {
        slug: "vilvoorde",
        name: "Vilvoorde",
        zip: "1800",
        title: "Électricien Vilvoorde - Koningslo, Peu d'Eau, Houtem",
        metaDescription: "Besoin d'un électricien à Vilvoorde (1800) ? Service rapide à Koningslo, Houtem et Peutie. Spécialiste rénovation et dépannage.",
        aboutText: "Vilvoorde est une ville en pleine métamorphose, passant d'un passé industriel à une cité moderne au bord de l'eau. Nous participons à ce renouveau en accompagnant les rénovations dans le quartier du Faubourg et les nouvelles installations à Koningslo. Notre expertise technique est particulièrement appréciée pour la mise en conformité des anciennes habitations ouvrières et l'équipement des nouveaux lofts.",
        neighborhoods: ["Vilvoorde-Centre", "Koningslo", "Houtem", "Peutie", "Faubourg"],
        landmarks: ["Domaine des Trois Fontaines", "Église Notre-Dame", "Le Canal"]
    },
    {
        slug: "machelen",
        name: "Machelen",
        zip: "1830",
        title: "Électricien Machelen & Diegem - Entreprises & Particuliers",
        metaDescription: "Électricien à Machelen (1830) et Diegem. Service aux entreprises et particuliers. Maintenance, dépannage et installation de réseaux.",
        aboutText: "Machelen, et sa section Diegem, sont le cœur économique de la périphérie nord avec de nombreux parcs d'affaires. Allo Electricien y offre un service flexible, capable de répondre aux exigences des bureaux (câblage réseau, éclairage fonctionnel) comme aux besoins des résidents (dépannage domestique). Nous sommes particulièrement réactifs dans cette zone à forte densité d'activité.",
        neighborhoods: ["Machelen-Centre", "Diegem", "Diegem-Lo"],
        landmarks: ["Église Saint-Gertrude", "Château de Beaulieu", "Gare de Diegem"]
    },
    // --- Existing Brussels Communes ---
    {
        slug: "anderlecht",
        name: "Anderlecht",
        zip: "1070",
        title: "Électricien Anderlecht - Dépannage Urgent & Conformité",
        metaDescription: "Électricien à Anderlecht (1070). Intervention rapide à Cureghem, Veeweyde et Neerpede. Devis gratuit pour toute installation.",
        aboutText: "Anderlecht, commune aux multiples visages, demande une grande polyvalence. Nos électriciens interviennent aussi bien pour la rénovation des maisons ouvrières de Cureghem que pour l'installation de systèmes modernes dans les nouveaux appartements du canal ou les villas de Neerpede. Nous connaissons parfaitement les spécificités du réseau électrique local.",
        neighborhoods: ["Cureghem", "Birmendal", "Veeweyde", "Westland", "Neerpede", "Peterbos"],
        landmarks: ["Stade Constant Vanden Stock", "Maison d'Érasme", "Parc Astrid"]
    },
    {
        slug: "auderghem",
        name: "Auderghem",
        zip: "1160",
        title: "Électricien Auderghem - Rénovation & Dépannage",
        metaDescription: "Votre électricien à Auderghem (1160). Service de qualité à Delta, Chant d'Oiseau et Transvaal.",
        aboutText: "À l'orée de la Forêt de Soignes, Auderghem est une commune résidentielle paisible. Nous y réalisons de nombreuses mises en conformité lors de ventes immobilières, ainsi que des rénovations d'éclairage pour mettre en valeur les jardins et intérieurs des maisons auderghemoises. Le quartier du Transvaal et ses cités-jardins ont une architecture que nous respectons lors de nos travaux.",
        neighborhoods: ["Transvaal", "Blankedelle", "Trois Tilleuls", "Chant d'Oiseau", "Delta"],
        landmarks: ["Rouge-Cloître", "Château de Val Duchesse", "Centre Culturel"]
    },
    {
        slug: "berchem-sainte-agathe",
        name: "Berchem-Sainte-Agathe",
        zip: "1082",
        title: "Électricien Berchem-Sainte-Agathe - 1082 Bruxelles",
        metaDescription: "Dépannage électrique à Berchem-Sainte-Agathe. Électricien agréé pour mise aux normes et rénovation.",
        aboutText: "Berchem-Sainte-Agathe, village dans la ville, offre un cadre de vie calme au nord-ouest de Bruxelles. Nos interventions y concernent souvent la modernisation d'installations dans des maisons unifamiliales des années 60-70. Nous aidons les propriétaires à adapter leur électricité aux besoins modernes (plaques induction, bornes de recharge) tout en conservant l'âme de leur habitation.",
        neighborhoods: ["Berchem-Centre", "Groot-Bijgaarden (limitrophe)", "Hunderenveld"],
        landmarks: ["Ancienne Église", "Place Schweitzer", "Cité Moderne"]
    },
    {
        slug: "bruxelles-ville",
        name: "Bruxelles-Ville",
        zip: "1000",
        title: "Électricien Bruxelles-Ville - Centre, Laeken, Louise",
        metaDescription: "Électricien au centre de Bruxelles (1000), Laeken (1020), Neder-Over-Heembeek (1120) et Haren (1130). Dépannage 24/7.",
        aboutText: "Intervenir à Bruxelles-Ville, c'est maîtriser la diversité : des installations vétustes du Pentagone historique aux bureaux modernes du Quartier Nord, en passant par les maisons résidentielles de Laeken et Neder-Over-Heembeek. Nos techniciens sont habitués aux défis logistiques du centre-ville et aux exigences techniques des bâtiments classés ou à haute valeur patrimoniale.",
        neighborhoods: ["Pentagone", "Quartier Européen", "Laeken", "Neder-Over-Heembeek", "Haren", "Louise", "Marolles"],
        landmarks: ["Grand-Place", "Atomium", "Palais de Justice", "Manneken Pis"]
    },
    {
        slug: "etterbeek",
        name: "Etterbeek",
        zip: "1040",
        title: "Électricien Etterbeek - Quartier Européen & Chasse",
        metaDescription: "Électricien Etterbeek (1040). Intervention rapide près de Merode, Jourdan et La Chasse. Devis gratuit.",
        aboutText: "Commune dense et internationale, Etterbeek requiert une grande réactivité. Nous dépannons quotidiennement des appartements proches des institutions européennes et rénovons des maisons de ville du côté de la Chasse ou de la place Jourdan. La sécurité incendie et la conformité des tableaux électriques sont des demandes fréquentes dans ce parc immobilier locatif important.",
        neighborhoods: ["La Chasse", "Jourdan", "Merode", "Tongres", "Saint-Michel"],
        landmarks: ["Parc du Cinquantenaire", "Place Jourdan", "VUB/ULB (proche)"]
    },
    {
        slug: "evere",
        name: "Evere",
        zip: "1140",
        title: "Électricien Evere - Installation & Dépannage",
        metaDescription: "Votre électricien à Evere (1140). Dépannage urgent à Paduwa, Paix et Germinal. Installation parlophonie et contrôle d'accès.",
        aboutText: "Entre ville et périphérie, Evere connaît un grand développement. Nous y installons régulièrement des systèmes de vidéophonie et de contrôle d'accès dans les nouvelles copropriétés. Dans les quartiers plus anciens comme le Haut-Evere, nous procédons à la mise aux normes complètes d'installations électriques pour garantir la sécurité des résidents.",
        neighborhoods: ["Evere-Centre", "Paduwa", "Germinal", "Paix", "Bordet"],
        landmarks: ["Musée du Chicon", "Cimetière de Bruxelles", "OTAN"]
    },
    {
        slug: "forest",
        name: "Forest",
        zip: "1190",
        title: "Électricien Forest - Altitude 100 & Wiels",
        metaDescription: "Dépannage électrique à Forest (1190). Intervention rapide Altitude Cent, Saint-Denis et Neerstalle.",
        aboutText: "Forest présente un relief varié, tout comme ses installations électriques. Des maisons de maître de l'Altitude 100 aux lofts industriels près du Wiels, nos électriciens s'adaptent à toutes les architectures. Nous avons une expertise particulière dans la rénovation respectueuse du patrimoine Art Déco, très présent dans la commune.",
        neighborhoods: ["Altitude 100", "Saint-Denis", "Wiels", "Neerstalle", "Forest-National"],
        landmarks: ["Abbaye de Forest", "Forest National", "Parc Duden"]
    },
    {
        slug: "ganshoren",
        name: "Ganshoren",
        zip: "1083",
        title: "Électricien Ganshoren - 1083 Bruxelles",
        metaDescription: "Électricien agréé Ganshoren. Dépannage à Basilique et environs.",
        aboutText: "Au pied de la Basilique, Ganshoren est une commune calme où nous intervenons pour l'entretien et la rénovation. Beaucoup d'installations datent des années 50-60 et nécessitent une remise à niveau (terre, différentiel). Nous accompagnons les habitants de Ganshoren dans ces démarches de sécurisation.",
        neighborhoods: ["Ganshoren-Centre", "Basilique", "Marais de Ganshoren"],
        landmarks: ["Basilique de Koekelberg", "Château de Rivieren"]
    },
    {
        slug: "ixelles",
        name: "Ixelles",
        zip: "1050",
        title: "Électricien Ixelles - Flagey, Châtelain, ULB",
        metaDescription: "Électricien à Ixelles (1050). Service 24/7 à Flagey, Châtelain, Matonge et Boondael. Rénovation de standing.",
        aboutText: "Ixelles est vibrante et éclectique. Nos électriciens passent des maisons de maître du Châtelain aux kots d'étudiants du cimetière d'Ixelles. Nous sommes experts en rénovations complexes dans les bâtiments anciens (hauts plafonds, moulures) où le passage de câbles demande doigté et discrétion. L'éclairage architectural est aussi une de nos spécialités ici.",
        neighborhoods: ["Flagey", "Châtelain", "Matonge", "Cimetière d'Ixelles", "Boondael", "Toison d'Or"],
        landmarks: ["Étangs d'Ixelles", "Abbaye de la Cambre", "Place Flagey"]
    },
    {
        slug: "jette",
        name: "Jette",
        zip: "1090",
        title: "Électricien Jette - Miroir & Dieleghem",
        metaDescription: "Dépannage électricité Jette (1090). Intervention rapide Place du Miroir, Dieleghem et Jette-Centre.",
        aboutText: "Jette est une commune conviviale où la demande en rénovation résidentielle est forte. Nous intervenons beaucoup autour de la Place du Miroir pour des mises en conformité. Le quartier des Jardins de Jette fait aussi appel à nous pour la maintenance des installations en copropriété. Notre proximité nous permet d'être très réactifs.",
        neighborhoods: ["Miroir", "Dieleghem", "Jette-Centre", "Esseghem", "Thiepont"],
        landmarks: ["Grotte de Lourdes", "Parc Garcet", "Musée Magritte"]
    },
    {
        slug: "koekelberg",
        name: "Koekelberg",
        zip: "1081",
        title: "Électricien Koekelberg - 1081 Bruxelles",
        metaDescription: "Électricien Koekelberg. Dépannage Simonis et Basilique. Devis gratuit.",
        aboutText: "Malgré sa petite taille, Koekelberg est dense. Nous y effectuons de nombreux dépannages urgents et remplacements de tableaux électriques. La sécurité des installations dans les maisons de rangée typiques est notre priorité, souvent vétustes, elles nécessitent une mise aux normes soignée.",
        neighborhoods: ["Simonis", "Basilique", "Étangs Noirs"],
        landmarks: ["Basilique du Sacré-Cœur", "Parc Elisabeth"]
    },
    {
        slug: "molenbeek-saint-jean",
        name: "Molenbeek-Saint-Jean",
        zip: "1080",
        title: "Électricien Molenbeek - Maritime & Karreveld",
        metaDescription: "Électricien à Molenbeek (1080). Service pro à Karreveld, Machtens et Maritime. Rénovation et dépannage.",
        aboutText: "Molenbeek est en pleine mutation. Nous accompagnons la rénovation du quartier Maritime et du Karreveld. De nombreux propriétaires font appel à nous pour remettre à neuf l'électricité de bâtiments industriels reconvertis ou de maisons familiales. Nous sommes fiers de contribuer à l'amélioration de l'habitat molenbeekois.",
        neighborhoods: ["Karreveld", "Machtens", "Maritime", "Molenbeek-Centre", "Osseghem"],
        landmarks: ["Château du Karreveld", "Scheutbos", "Tour & Taxis (proche)"]
    },
    {
        slug: "saint-gilles",
        name: "Saint-Gilles",
        zip: "1060",
        title: "Électricien Saint-Gilles - Barrière & Parvis",
        metaDescription: "Électricien Saint-Gilles (1060). Spécialiste maisons de maître. Dépannage Parvis, Louise et Midi.",
        aboutText: "Saint-Gilles et ses maisons bourgeoises demandent une approche délicate. Nous sommes spécialisés dans la rénovation électrique des hauts plafonds et des murs ornés, typiques du quartier. Que ce soit près du Parvis ou de l'avenue Louise, nous modernisons l'électricité (réseau, éclairage) en respectant le cachet de l'ancien.",
        neighborhoods: ["Parvis", "Barrière", "Louise", "Midi", "Ma Campagne"],
        landmarks: ["Hôtel de Ville", "Parvis de Saint-Gilles", "Porte de Hal"]
    },
    {
        slug: "saint-josse-ten-noode",
        name: "Saint-Josse-ten-Noode",
        zip: "1210",
        title: "Électricien Saint-Josse - Madou & Botanique",
        metaDescription: "Dépannage urgent Saint-Josse (1210). Électricien rapide Madou, Botanique et Nord.",
        aboutText: "À Saint-Josse, la densité urbaine impose une réactivité maximale. Nous intervenons en scooter ou camionnette légère pour atteindre rapidement n'importe quel point de la commune, du Botanique à la place Madou. Nous traitons souvent des urgences (coupures, surcharges) dans des immeubles anciens ou de bureaux.",
        neighborhoods: ["Madou", "Botanique", "Nord", "Saint-Lazare"],
        landmarks: ["Tour Madou", "Botanique", "Place Saint-Josse"]
    },
    {
        slug: "schaerbeek",
        name: "Schaerbeek",
        zip: "1030",
        title: "Électricien Schaerbeek - Helmet, Meiser, Josaphat",
        metaDescription: "Électricien Schaerbeek (1030). Intervention Helmet, Dailly, Meiser. Rénovation et conformité.",
        aboutText: "Schaerbeek, la Cité des Ânes, est vaste et variée. Nos équipes sont quotidiennement présentes, du quartier résidentiel de Helmet aux zones plus animées de la Cage aux Ours. Nous avons une grande expérience des 'maisons schaerbeekoises', avec leurs pièces en enfilade qui demandent une réflexion spécifique pour la distribution des circuits électriques et des prises.",
        neighborhoods: ["Helmet", "Josaphat", "Meiser", "Dailly", "Cage aux Ours", "Terdelt"],
        landmarks: ["Parc Josaphat", "Halles de Schaerbeek", "Église Sainte-Marie"]
    },
    {
        slug: "uccle",
        name: "Uccle",
        zip: "1180",
        title: "Électricien Uccle - Fort Jaco, Globe, Observatoire",
        metaDescription: "Électricien Uccle (1180). Service haut de gamme pour villas et jardins. Fort Jaco, Prince d'Orange, Stalle.",
        aboutText: "Uccle est synonyme de résidentiel vert. Nous y réalisons des installations de standing : éclairage de jardin sophistiqué, portails électriques, vidéophonie connectée. Nos clients du Fort Jaco ou du Prince d'Orange apprécient notre discrétion et notre capacité à proposer des solutions esthétiques et technologiques de pointe.",
        neighborhoods: ["Uccle-Centre", "Fort Jaco", "Prince d'Orange", "Stalle", "Calevoet", "Globe"],
        landmarks: ["Bois de la Cambre", "Observatoire", "Dieweg"]
    },
    {
        slug: "watermael-boitsfort",
        name: "Watermael-Boitsfort",
        zip: "1170",
        title: "Électricien Watermael-Boitsfort - 1170 Bruxelles",
        metaDescription: "Électricien Watermael-Boitsfort. Spécialiste Cités-Jardins, Logis, Floréal. Dépannage et travaux.",
        aboutText: "Travailler à Watermael-Boitsfort, c'est souvent intervenir dans des cadres classés comme les cités-jardins du Logis et Floréal. Nous connaissons les contraintes urbanistiques et techniques de ces habitations. Nous aidons les résidents à améliorer leur confort électrique (nouvelle cuisine, salle de bain) sans enfreindre les règles de préservation du patrimoine.",
        neighborhoods: ["Boitsfort-Centre", "Watermael", "Logis", "Floréal", "Coin du Balai"],
        landmarks: ["Étang de Boitsfort", "Gare de Watermael", "Place Keym"]
    },
    {
        slug: "woluwe-saint-lambert",
        name: "Woluwe-Saint-Lambert",
        zip: "1200",
        title: "Électricien Woluwe-Saint-Lambert - Tomberg & Roodebeek",
        metaDescription: "Électricien Woluwe-Saint-Lambert (1200). Gribaumont, Tomberg, Hof-ten-Berg. Rénovation et dépannage.",
        aboutText: "Woluwe-Saint-Lambert offre un mélange d'habitat individuel et collectif de qualité. Nous sommes souvent sollicités pour la mise aux normes d'appartements des années 70-80, nécessitant le remplacement complet des tableaux électriques. Le quartier du Shopping et de Roodebeek est aussi une zone où nous intervenons pour les commerces.",
        neighborhoods: ["Tomberg", "Gribaumont", "Roodebeek", "Georges Henri", "Konkel"],
        landmarks: ["Woluwe Shopping", "Moulin de Lindekemale", "Hôtel Communal"]
    },
    {
        slug: "woluwe-saint-pierre",
        name: "Woluwe-Saint-Pierre",
        zip: "1150",
        title: "Électricien Woluwe-Saint-Pierre - Stockel & Chant d'Oiseau",
        metaDescription: "Électricien Woluwe-Saint-Pierre (1150). Service à Stockel, Joli-Bois et alentours. Installation borne de recharge.",
        aboutText: "À Woluwe-Saint-Pierre, commune aux avenues aérées, nous installons souvent des bornes de recharge pour véhicules électriques et des systèmes d'alarme. Le quartier de Stockel et du Chant d'Oiseau abrite des villas où la demande en domotique et en gestion d'énergie est croissante. Nous apportons des solutions durables et sécurisées.",
        neighborhoods: ["Stockel", "Joli-Bois", "Chant d'Oiseau", "Montgomery", "Chien Vert"],
        landmarks: ["Place Dumon", "Parc de Woluwe", "Musée du Tram"]
    }
];
