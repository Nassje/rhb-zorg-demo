// Website content transcribed from the supplied RHB Zorg documents.
// Keep legal wording in sync with the approved source documents.
export type DocumentBlock = { type: 'paragraph' | 'heading'; text: string } | { type: 'list'; items: string[] };
export type DocumentSection = { id: string; title: string; blocks: DocumentBlock[] };

export const privacySections: DocumentSection[] = [
  {
    "id": "artikel-1",
    "title": "1. Wie zijn wij?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Stichting RHB Zorg biedt persoonlijke, ambulante begeleiding en ondersteuning aan mensen die hulp nodig hebben bij het ontwikkelen van meer grip, structuur, zelfredzaamheid en zelfstandigheid."
      },
      {
        "type": "paragraph",
        "text": "Onze begeleiding begint bij echt contact. Niet het dossier of het probleem staat centraal, maar de persoon achter de hulpvraag. Wij combineren betrokkenheid met duidelijkheid en werken, waar passend en toegestaan, samen met ouders, wettelijk vertegenwoordigers, het netwerk, gemeenten, wijkteams, verwijzers en andere betrokken professionals."
      },
      {
        "type": "paragraph",
        "text": "Stichting RHB Zorg is verantwoordelijk voor de verwerking van persoonsgegevens voor zover zij volgens de toepasselijke privacywetgeving als verwerkingsverantwoordelijke optreedt."
      }
    ]
  },
  {
    "id": "artikel-2",
    "title": "2. Voor wie geldt deze privacyverklaring?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Deze privacyverklaring geldt voor persoonsgegevens die Stichting RHB Zorg verwerkt van onder andere:"
      },
      {
        "type": "list",
        "items": [
          "cliënten en potentiële cliënten;",
          "minderjarige cliënten;",
          "ouders, gezaghebbende ouders, voogden, curatoren, mentoren en andere wettelijk vertegenwoordigers;",
          "budgethouders en vertegenwoordigers van budgethouders;",
          "contactpersonen en personen uit het netwerk van een cliënt;",
          "bezoekers en gebruikers van onze website;",
          "personen die contact met ons opnemen;",
          "zorgprofessionals en zelfstandige professionals die voor of met RHB Zorg werken of willen werken;",
          "verwijzers, gemeenten, wijkteams, zorgkantoren en andere professionele relaties;",
          "leveranciers en overige zakelijke relaties."
        ]
      }
    ]
  },
  {
    "id": "artikel-3",
    "title": "3. Welke persoonsgegevens verwerken wij?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Welke gegevens wij verwerken hangt af van de relatie die iemand met RHB Zorg heeft en van de ondersteuning die nodig is."
      },
      {
        "type": "paragraph",
        "text": "Wij kunnen onder andere de volgende persoonsgegevens verwerken:"
      },
      {
        "type": "list",
        "items": [
          "naam, adres, woonplaats en contactgegevens;",
          "geboortedatum en, wanneer noodzakelijk, geslacht;",
          "contactgegevens van ouders, vertegenwoordigers en contactpersonen;",
          "gegevens over gezag, vertegenwoordiging en budgethouderschap;",
          "identificerende gegevens, waaronder het BSN wanneer wij dit wettelijk mogen of moeten verwerken;",
          "gegevens over indicaties, beschikkingen, PGB en financiering;",
          "gegevens die noodzakelijk zijn voor zorgovereenkomsten, declaraties, urenregistraties en financiële administratie;",
          "bankgegevens wanneer deze noodzakelijk zijn;",
          "gegevens over hulpvragen, begeleiding, ontwikkeling en ondersteuningsdoelen;",
          "gezondheidsgegevens en andere bijzondere persoonsgegevens voor zover noodzakelijk en wettelijk toegestaan;",
          "relevante informatie over gezin, wonen, daginvulling, school, werk en sociaal netwerk;",
          "risico-inventarisaties, begeleidingsplannen, evaluaties en rapportages;",
          "afspraken, contactmomenten en relevante correspondentie;",
          "incident-, veiligheids- en calamiteitsgegevens;",
          "gegevens die noodzakelijk zijn voor toepassing van de Meldcode huiselijk geweld en kindermishandeling;",
          "klachten en informatie die noodzakelijk is voor behandeling daarvan;",
          "gegevens over diploma's, registraties, VOG's, verzekeringen, deskundigheid, beschikbaarheid en andere relevante gegevens van professionals;",
          "technische en functionele gegevens die ontstaan bij gebruik van onze website en digitale systemen, voor zover deze worden verzameld."
        ]
      },
      {
        "type": "paragraph",
        "text": "RHB Zorg verwerkt niet méér persoonsgegevens dan redelijkerwijs noodzakelijk is voor het betreffende doel."
      }
    ]
  },
  {
    "id": "artikel-4",
    "title": "4. Waarom verwerken wij persoonsgegevens?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg kan persoonsgegevens verwerken voor onder andere:"
      },
      {
        "type": "list",
        "items": [
          "het beantwoorden van vragen en contactverzoeken;",
          "aanmelding, intake en beoordeling of RHB Zorg passende begeleiding kan bieden;",
          "het aangaan en uitvoeren van een zorgovereenkomst;",
          "het opstellen, uitvoeren en evalueren van een begeleidingsplan;",
          "het bieden en organiseren van verantwoorde en passende begeleiding;",
          "het vastleggen van voortgang, afspraken en relevante gebeurtenissen in het cliëntdossier;",
          "het waarborgen van veiligheid en continuïteit van begeleiding;",
          "samenwerking en afstemming rondom een cliënt wanneer dit noodzakelijk en toegestaan is;",
          "uitvoering van PGB-, SVB-, gemeentelijke, Wlz- en andere toepasselijke administratieve processen;",
          "urenregistratie, declaratie, facturatie en financiële administratie;",
          "uitvoering van wettelijke kwaliteitseisen;",
          "behandeling van klachten, incidenten en calamiteiten;",
          "toepassing van de Meldcode huiselijk geweld en kindermishandeling;",
          "het voldoen aan wettelijke verplichtingen en verzoeken van bevoegde toezichthouders of instanties;",
          "selectie, beoordeling, contractering en inzet van professionals;",
          "bescherming van de rechten en veiligheid van cliënten, professionals en RHB Zorg;",
          "beveiliging, beheer en verbetering van onze dienstverlening en digitale systemen."
        ]
      }
    ]
  },
  {
    "id": "artikel-5",
    "title": "5. Op welke grondslagen verwerken wij persoonsgegevens?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg verwerkt persoonsgegevens uitsluitend wanneer daarvoor een geldige wettelijke grondslag bestaat."
      },
      {
        "type": "paragraph",
        "text": "Afhankelijk van de situatie kan verwerking noodzakelijk zijn:"
      },
      {
        "type": "list",
        "items": [
          "voor het aangaan of uitvoeren van een overeenkomst;",
          "om te voldoen aan een wettelijke verplichting;",
          "ter bescherming van vitale belangen;",
          "voor de vervulling van een taak van algemeen belang, voor zover deze grondslag in de concrete situatie van toepassing is;",
          "voor een gerechtvaardigd belang van RHB Zorg of een derde, wanneer de belangen en grondrechten van de betrokkene niet zwaarder wegen;",
          "op basis van toestemming, wanneer toestemming volgens de wet vereist of passend is."
        ]
      },
      {
        "type": "paragraph",
        "text": "Voor gezondheidsgegevens en andere bijzondere persoonsgegevens geldt daarnaast dat verwerking alleen plaatsvindt wanneer daarvoor een wettelijke uitzondering op het verbod tot verwerking bestaat."
      },
      {
        "type": "paragraph",
        "text": "Wanneer verwerking op toestemming is gebaseerd, kan die toestemming worden ingetrokken. Intrekking heeft geen terugwerkende kracht voor verwerkingen die vóór de intrekking rechtmatig hebben plaatsgevonden."
      }
    ]
  },
  {
    "id": "artikel-6",
    "title": "6. Cliëntdossier",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Voor een goede en verantwoorde begeleiding legt RHB Zorg relevante informatie vast in een cliëntdossier."
      },
      {
        "type": "paragraph",
        "text": "Daarin kunnen onder andere de hulpvraag, doelen, afspraken, het begeleidingsplan, risico-inventarisatie, rapportages, evaluaties, relevante correspondentie, toestemmingen en andere voor de begeleiding noodzakelijke gegevens worden opgenomen."
      },
      {
        "type": "paragraph",
        "text": "Toegang tot cliëntgegevens wordt beperkt tot personen die deze gegevens voor hun werkzaamheden en verantwoordelijkheden daadwerkelijk nodig hebben."
      },
      {
        "type": "paragraph",
        "text": "RHB Zorg gebruikt voor cliëntregistratie en dossiervoering daarvoor bestemde beveiligde systemen."
      }
    ]
  },
  {
    "id": "artikel-7",
    "title": "7. Minderjarige cliënten en vertegenwoordiging",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Bij minderjarige cliënten houdt RHB Zorg rekening met de wettelijke regels over leeftijd, gezag, toestemming, vertegenwoordiging, informatie en inzage."
      },
      {
        "type": "paragraph",
        "text": "Wie namens een cliënt mag handelen of informatie mag ontvangen, wordt niet uitsluitend bepaald door familiebanden. RHB Zorg controleert waar nodig wie wettelijk bevoegd is de cliënt te vertegenwoordigen."
      },
      {
        "type": "paragraph",
        "text": "Naarmate een minderjarige ouder wordt, kunnen diens eigen rechten ten aanzien van informatie, toestemming en dossiergegevens veranderen. RHB Zorg beoordeelt dit overeenkomstig de wet die op de betreffende hulpverlening van toepassing is."
      }
    ]
  },
  {
    "id": "artikel-8",
    "title": "8. Delen van persoonsgegevens",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg verkoopt persoonsgegevens niet."
      },
      {
        "type": "paragraph",
        "text": "Persoonsgegevens worden alleen gedeeld wanneer dat noodzakelijk, proportioneel en wettelijk toegestaan is."
      },
      {
        "type": "paragraph",
        "text": "Afhankelijk van de situatie kunnen gegevens worden gedeeld met bijvoorbeeld:"
      },
      {
        "type": "list",
        "items": [
          "de cliënt en diens bevoegde vertegenwoordiger;",
          "zorgprofessionals die rechtstreeks bij de begeleiding betrokken zijn;",
          "gemeenten, wijkteams, zorgkantoren, SVB en andere bij financiering of uitvoering betrokken instanties;",
          "verwijzers en andere betrokken zorg- of hulpverleners;",
          "partijen die RHB Zorg ondersteunen bij administratie, ICT, cliëntregistratie, beveiliging of communicatie;",
          "klachtenfunctionarissen, klachtencommissies, geschilleninstanties of vertrouwenspersonen, voor zover van toepassing;",
          "toezichthouders, opsporingsinstanties of andere bevoegde overheidsinstanties wanneer RHB Zorg wettelijk verplicht of bevoegd is gegevens te verstrekken;",
          "Veilig Thuis wanneer daarvoor op grond van de Meldcode en toepasselijke wetgeving aanleiding bestaat."
        ]
      },
      {
        "type": "paragraph",
        "text": "Wanneer toestemming nodig is voor gegevensuitwisseling, vraagt RHB Zorg die toestemming vooraf."
      }
    ]
  },
  {
    "id": "artikel-9",
    "title": "9. Inzet van andere professionals",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg kan voor de uitvoering of continuïteit van haar dienstverlening samenwerken met of gebruikmaken van daarvoor geschikte professionals."
      },
      {
        "type": "paragraph",
        "text": "Deze professionals krijgen uitsluitend toegang tot persoonsgegevens voor zover dit noodzakelijk is voor hun werkzaamheden en voor zover daarvoor een geldige juridische basis bestaat."
      },
      {
        "type": "paragraph",
        "text": "Van personen die voor of namens RHB Zorg met vertrouwelijke cliëntinformatie werken, wordt verwacht dat zij de geldende privacy-, geheimhoudings- en beveiligingsregels naleven."
      }
    ]
  },
  {
    "id": "artikel-10",
    "title": "10. Verwerkers en leveranciers",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg kan externe organisaties inschakelen voor bijvoorbeeld cliëntregistratie, ICT, hosting, beveiligde communicatie, administratie en andere ondersteunende diensten."
      },
      {
        "type": "paragraph",
        "text": "Wanneer zo'n organisatie persoonsgegevens namens RHB Zorg verwerkt, maakt RHB Zorg waar vereist passende schriftelijke afspraken over onder meer vertrouwelijkheid, beveiliging, verwerking en verwijdering van persoonsgegevens."
      }
    ]
  },
  {
    "id": "artikel-11",
    "title": "11. Beveiliging",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde toegang, onrechtmatige verwerking, wijziging of openbaarmaking."
      },
      {
        "type": "paragraph",
        "text": "Daarbij wordt onder meer gewerkt met toegangsbeveiliging, persoonlijke accounts, passende authenticatie, beveiligde systemen en beperking van toegang tot personen die gegevens voor hun werkzaamheden nodig hebben."
      },
      {
        "type": "paragraph",
        "text": "Vanwege veiligheidsrisico's publiceert RHB Zorg geen gedetailleerde technische beveiligingsinformatie."
      }
    ]
  },
  {
    "id": "artikel-12",
    "title": "12. Geheimhouding",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Personen die vanuit hun werkzaamheden toegang hebben tot vertrouwelijke cliëntinformatie zijn gehouden aan de toepasselijke geheimhoudingsregels."
      },
      {
        "type": "paragraph",
        "text": "Informatie over cliënten wordt niet zonder geldige reden aan anderen verstrekt."
      },
      {
        "type": "paragraph",
        "text": "Een wettelijke verplichting, meldrecht, veiligheidsbelang of andere wettelijke bevoegdheid kan in bijzondere omstandigheden betekenen dat informatie zonder toestemming mag of moet worden gedeeld."
      }
    ]
  },
  {
    "id": "artikel-13",
    "title": "13. Meldcode huiselijk geweld en kindermishandeling",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg werkt overeenkomstig de voor haar toepasselijke Meldcode huiselijk geweld en kindermishandeling."
      },
      {
        "type": "paragraph",
        "text": "Wanneer signalen aanleiding geven tot zorgen over de veiligheid van een cliënt of anderen, kan RHB Zorg de stappen van de meldcode doorlopen, advies vragen en, wanneer dit volgens het afwegingskader noodzakelijk is, een melding doen bij Veilig Thuis."
      },
      {
        "type": "paragraph",
        "text": "De relevante stappen en afwegingen worden vastgelegd voor zover de toepasselijke regels dat verlangen."
      }
    ]
  },
  {
    "id": "artikel-14",
    "title": "14. Bewaartermijnen",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg bewaart persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor zij zijn verzameld, tenzij een wettelijke bewaarplicht of andere gerechtvaardigde reden een langere bewaartermijn vereist."
      },
      {
        "type": "paragraph",
        "text": "Voor cliënt- en zorgdossiers volgt RHB Zorg de bewaartermijn die hoort bij de betreffende wettelijke zorg- of hulpverleningsrelatie. Wanneer de WGBO op een dossier van toepassing is, geldt in beginsel een bewaartermijn van twintig jaar vanaf de laatste wijziging in het dossier, tenzij een wettelijke uitzondering of de eisen van goed hulpverlenerschap een andere termijn rechtvaardigen."
      },
      {
        "type": "paragraph",
        "text": "Voor jeugdhulp, Wmo, Wlz, PGB-administratie, financiële administratie, klachten, incidenten, overeenkomsten, professionalgegevens en overige gegevens worden de daarvoor toepasselijke wettelijke en noodzakelijke bewaartermijnen gevolgd."
      },
      {
        "type": "paragraph",
        "text": "Na afloop van de toepasselijke bewaartermijn worden gegevens verwijderd of zodanig geanonimiseerd dat zij niet meer tot een persoon zijn te herleiden, tenzij verdere bewaring wettelijk is toegestaan of vereist."
      }
    ]
  },
  {
    "id": "artikel-15",
    "title": "15. Privacyrechten",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Voor zover de wet dat in de betreffende situatie toestaat, kan een betrokkene RHB Zorg verzoeken om:"
      },
      {
        "type": "list",
        "items": [
          "informatie over de verwerking van persoonsgegevens;",
          "inzage in persoonsgegevens;",
          "correctie van onjuiste of onvolledige gegevens;",
          "verwijdering van persoonsgegevens;",
          "beperking van verwerking;",
          "overdracht van daarvoor in aanmerking komende persoonsgegevens;",
          "bezwaar tegen bepaalde verwerkingen;",
          "intrekking van eerder gegeven toestemming."
        ]
      },
      {
        "type": "paragraph",
        "text": "Deze rechten zijn niet absoluut. Een verzoek tot verwijdering betekent bijvoorbeeld niet automatisch dat RHB Zorg gegevens moet vernietigen wanneer een wettelijke bewaarplicht of andere wettelijke grond bestaat om deze te bewaren."
      },
      {
        "type": "paragraph",
        "text": "RHB Zorg kan aanvullende informatie vragen wanneer dat noodzakelijk is om de identiteit of bevoegdheid van de verzoeker zorgvuldig vast te stellen."
      },
      {
        "type": "paragraph",
        "text": "RHB Zorg reageert in beginsel binnen één maand op een verzoek. Wanneer een verzoek complex is of sprake is van meerdere verzoeken, kan deze termijn binnen de wettelijke grenzen worden verlengd. De verzoeker wordt daarvan tijdig op de hoogte gebracht."
      }
    ]
  },
  {
    "id": "artikel-16",
    "title": "16. Datalekken en beveiligingsincidenten",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg registreert en behandelt beveiligingsincidenten en datalekken overeenkomstig de toepasselijke wetgeving."
      },
      {
        "type": "paragraph",
        "text": "Wanneer een datalek volgens de AVG moet worden gemeld aan de Autoriteit Persoonsgegevens, zal RHB Zorg dit doen. Wanneer een datalek waarschijnlijk een hoog risico oplevert voor de rechten en vrijheden van betrokkenen, worden ook de betrokken personen geïnformeerd wanneer de wet dit vereist."
      }
    ]
  },
  {
    "id": "artikel-17",
    "title": "17. Website en cookies",
    "blocks": [
      {
        "type": "paragraph",
        "text": "De website van RHB Zorg kan gebruikmaken van technisch noodzakelijke cookies en, afhankelijk van de feitelijke inrichting van de website, andere cookies of vergelijkbare technieken."
      },
      {
        "type": "paragraph",
        "text": "Voor cookies waarvoor voorafgaande toestemming wettelijk verplicht is, wordt deze toestemming gevraagd voordat dergelijke cookies worden geplaatst."
      },
      {
        "type": "paragraph",
        "text": "Wanneer RHB Zorg gebruikmaakt van aanvullende analysetools, externe inhoud of andere technieken waarvoor aanvullende informatie noodzakelijk is, wordt de website-informatie hierover aangepast."
      }
    ]
  },
  {
    "id": "artikel-18",
    "title": "18. Websites van derden",
    "blocks": [
      {
        "type": "paragraph",
        "text": "De website van RHB Zorg kan verwijzingen bevatten naar websites van andere organisaties."
      },
      {
        "type": "paragraph",
        "text": "RHB Zorg is niet verantwoordelijk voor de manier waarop onafhankelijke derden persoonsgegevens verwerken. Op hun verwerking is het privacybeleid van de betreffende organisatie van toepassing."
      }
    ]
  },
  {
    "id": "artikel-19",
    "title": "19. Gegevens buiten de Europese Economische Ruimte",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg streeft ernaar persoonsgegevens binnen de Europese Economische Ruimte te laten verwerken."
      },
      {
        "type": "paragraph",
        "text": "Wanneer persoonsgegevens toch buiten de Europese Economische Ruimte worden verwerkt, zorgt RHB Zorg ervoor dat daarvoor een rechtsgeldige doorgiftegrondslag en passende waarborgen bestaan, voor zover de AVG dit vereist."
      }
    ]
  },
  {
    "id": "artikel-20",
    "title": "20. Geautomatiseerde besluitvorming",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg neemt geen uitsluitend op geautomatiseerde verwerking gebaseerde besluiten met rechtsgevolgen of vergelijkbare aanzienlijke gevolgen voor cliënten, tenzij dit in de toekomst rechtmatig wordt ingericht en betrokkenen daarover overeenkomstig de AVG worden geïnformeerd."
      }
    ]
  },
  {
    "id": "artikel-21",
    "title": "21. Klacht over privacy",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Heeft u een vraag of klacht over de verwerking van uw persoonsgegevens? Neem dan eerst contact op met RHB Zorg. Wij proberen vragen en klachten zorgvuldig en zo mogelijk in onderling overleg op te lossen."
      },
      {
        "type": "paragraph",
        "text": "Daarnaast heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens."
      }
    ]
  },
  {
    "id": "artikel-22",
    "title": "22. Wijzigingen",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg kan deze privacyverklaring aanpassen wanneer onze dienstverlening, systemen of wet- en regelgeving veranderen."
      },
      {
        "type": "paragraph",
        "text": "De actuele versie wordt gepubliceerd op rhbzorg.nl. Bij wezenlijke wijzigingen informeren wij betrokkenen aanvullend wanneer dit volgens de omstandigheden of wetgeving noodzakelijk is."
      }
    ]
  },
  {
    "id": "artikel-23",
    "title": "23. Contact",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Voor vragen over deze privacyverklaring, de verwerking van persoonsgegevens of het uitoefenen van uw privacyrechten kunt u contact opnemen met:"
      },
      {
        "type": "paragraph",
        "text": "Stichting RHB Zorg"
      },
      {
        "type": "paragraph",
        "text": "KvK: 42137464"
      },
      {
        "type": "paragraph",
        "text": "Telefoon: 085 333 4220"
      },
      {
        "type": "paragraph",
        "text": "E-mail: info@rhbzorg.nl"
      },
      {
        "type": "paragraph",
        "text": "Website: rhbzorg.nl"
      },
      {
        "type": "paragraph",
        "text": "Met aandacht. Vooruit door verbinding."
      }
    ]
  }
];

export const conditionsSections: DocumentSection[] = [
  {
    "id": "artikel-1",
    "title": "Artikel 1 – Definities",
    "blocks": [
      {
        "type": "paragraph",
        "text": "In deze algemene voorwaarden wordt verstaan onder:"
      },
      {
        "type": "paragraph",
        "text": "1. RHB Zorg: Stichting RHB Zorg, ingeschreven in het Handelsregister van de Kamer van Koophandel onder nummer 42137464."
      },
      {
        "type": "paragraph",
        "text": "2. Cliënt: de natuurlijke persoon aan wie RHB Zorg begeleiding of ondersteuning biedt."
      },
      {
        "type": "paragraph",
        "text": "3. Opdrachtgever: de natuurlijke persoon of rechtspersoon die met RHB Zorg een overeenkomst aangaat. Dit kan onder andere de cliënt, budgethouder, wettelijk vertegenwoordiger of een andere bevoegde contractspartij zijn."
      },
      {
        "type": "paragraph",
        "text": "4. Vertegenwoordiger: degene die op grond van de wet, een rechterlijke beslissing, volmacht of toepasselijke PGB-regels bevoegd is namens de cliënt of budgethouder op te treden."
      },
      {
        "type": "paragraph",
        "text": "5. Zorgovereenkomst: de overeenkomst waarin afspraken over de levering en financiering van begeleiding of ondersteuning worden vastgelegd."
      },
      {
        "type": "paragraph",
        "text": "6. Begeleidingsplan: het document waarin onder andere de hulpvraag, doelen, afspraken, werkwijze en evaluatie van de begeleiding worden vastgelegd."
      },
      {
        "type": "paragraph",
        "text": "7. Professional: een persoon die door of namens RHB Zorg wordt ingezet bij de uitvoering van begeleiding of ondersteuning."
      },
      {
        "type": "paragraph",
        "text": "8. PGB: persoonsgebonden budget op grond van de toepasselijke wet- en regelgeving."
      },
      {
        "type": "paragraph",
        "text": "9. Schriftelijk: op papier of elektronisch, waaronder e-mail en andere overeengekomen digitale communicatiemiddelen."
      }
    ]
  },
  {
    "id": "artikel-2",
    "title": "Artikel 2 – Toepasselijkheid",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Deze algemene voorwaarden zijn van toepassing op overeenkomsten waarbij RHB Zorg begeleiding, ondersteuning of daarmee rechtstreeks samenhangende diensten levert."
      },
      {
        "type": "paragraph",
        "text": "2. Naast deze algemene voorwaarden kunnen een zorgovereenkomst, begeleidingsplan, beschikking, indicatie, zorgbeschrijving, PGB-documenten of andere cliëntspecifieke afspraken van toepassing zijn."
      },
      {
        "type": "paragraph",
        "text": "3. Indien een individuele schriftelijke afspraak afwijkt van deze algemene voorwaarden, gaat die individuele afspraak voor, tenzij dit in strijd is met dwingend recht."
      },
      {
        "type": "paragraph",
        "text": "4. Wettelijke rechten van cliënten kunnen niet door deze algemene voorwaarden worden beperkt voor zover de wet dat niet toestaat."
      },
      {
        "type": "paragraph",
        "text": "5. Indien een bepaling nietig, vernietigbaar of niet afdwingbaar blijkt, blijven de overige bepalingen van kracht. Partijen zoeken dan naar een geldige regeling die zoveel mogelijk aansluit bij doel en strekking van de oorspronkelijke bepaling."
      }
    ]
  },
  {
    "id": "artikel-3",
    "title": "Artikel 3 – Uitgangspunten van de begeleiding",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg biedt persoonsgerichte begeleiding waarbij de persoon achter de hulpvraag centraal staat."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg werkt vanuit betrokkenheid en duidelijkheid en ondersteunt cliënten waar mogelijk bij het ontwikkelen van structuur, zelfredzaamheid, vaardigheden, zelfvertrouwen, zelfstandigheid en eigen regie."
      },
      {
        "type": "paragraph",
        "text": "3. RHB Zorg neemt niet onnodig over wat een cliënt zelf kan of kan leren. Ondersteuning wordt zoveel mogelijk gericht op haalbare stappen en duurzame ontwikkeling."
      },
      {
        "type": "paragraph",
        "text": "4. Waar dit passend, noodzakelijk en toegestaan is, werkt RHB Zorg samen met ouders, vertegenwoordigers, het netwerk, gemeenten, wijkteams, verwijzers en andere betrokken professionals."
      },
      {
        "type": "paragraph",
        "text": "5. RHB Zorg handelt binnen haar deskundigheid, mogelijkheden en het overeengekomen zorgaanbod."
      }
    ]
  },
  {
    "id": "artikel-4",
    "title": "Artikel 4 – Totstandkoming van de overeenkomst",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Voorafgaand aan de start van begeleiding beoordeelt RHB Zorg voor zover redelijkerwijs mogelijk of de hulpvraag aansluit bij haar aanbod en deskundigheid."
      },
      {
        "type": "paragraph",
        "text": "2. De cliënt of opdrachtgever verstrekt daarvoor de informatie die noodzakelijk is om de hulpvraag, veiligheid, financiering en uitvoerbaarheid te beoordelen."
      },
      {
        "type": "paragraph",
        "text": "3. Een kennismaking, aanmelding of intake verplicht RHB Zorg niet automatisch tot het aangaan van een zorgovereenkomst."
      },
      {
        "type": "paragraph",
        "text": "4. Begeleiding start nadat de noodzakelijke afspraken voldoende zijn vastgelegd en, wanneer sprake is van PGB, de vereiste PGB- en financieringsvoorwaarden zijn geregeld."
      },
      {
        "type": "paragraph",
        "text": "5. Wanneer voor de betreffende financieringsroute een voorgeschreven zorgovereenkomst of goedkeuring vereist is, wordt daarvan gebruikgemaakt."
      }
    ]
  },
  {
    "id": "artikel-5",
    "title": "Artikel 5 – Intake en informatie",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg bespreekt voor aanvang van de begeleiding onder andere de hulpvraag, doelen, relevante omstandigheden, risico's en praktische afspraken."
      },
      {
        "type": "paragraph",
        "text": "2. De cliënt of vertegenwoordiger verstrekt naar beste weten juiste en volledige informatie die redelijkerwijs noodzakelijk is voor veilige en verantwoorde begeleiding."
      },
      {
        "type": "paragraph",
        "text": "3. Relevante wijzigingen worden zo spoedig mogelijk aan RHB Zorg doorgegeven."
      },
      {
        "type": "paragraph",
        "text": "4. RHB Zorg verstrekt informatie over de begeleiding op een manier die zoveel mogelijk aansluit bij het begripsniveau en de omstandigheden van de cliënt."
      }
    ]
  },
  {
    "id": "artikel-6",
    "title": "Artikel 6 – Begeleidingsplan",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. De inhoudelijke begeleiding wordt waar passend vastgelegd in een begeleidingsplan."
      },
      {
        "type": "paragraph",
        "text": "2. In het begeleidingsplan kunnen onder andere doelen, ondersteuningsbehoeften, afspraken, risico's, verantwoordelijkheden en evaluatiemomenten worden opgenomen."
      },
      {
        "type": "paragraph",
        "text": "3. Het begeleidingsplan wordt periodiek en wanneer omstandigheden daartoe aanleiding geven geëvalueerd en zo nodig aangepast."
      },
      {
        "type": "paragraph",
        "text": "4. De cliënt wordt zoveel mogelijk actief betrokken bij het bepalen en evalueren van de doelen."
      }
    ]
  },
  {
    "id": "artikel-7",
    "title": "Artikel 7 – Uitvoering van de begeleiding",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg spant zich in om verantwoorde, veilige en passende begeleiding te bieden overeenkomstig de gemaakte afspraken, toepasselijke wet- en regelgeving en relevante professionele standaarden."
      },
      {
        "type": "paragraph",
        "text": "2. De concrete inhoud en omvang van de begeleiding worden bepaald door de zorgovereenkomst, het begeleidingsplan, de geldige beschikking of indicatie en de toepasselijke financieringsvoorwaarden."
      },
      {
        "type": "paragraph",
        "text": "3. RHB Zorg garandeert geen specifiek resultaat. Begeleiding is mede afhankelijk van persoonlijke omstandigheden, medewerking, ontwikkeling en factoren waarop RHB Zorg geen invloed heeft."
      },
      {
        "type": "paragraph",
        "text": "4. RHB Zorg kan gemotiveerd besluiten bepaalde werkzaamheden niet uit te voeren wanneer deze buiten haar deskundigheid, overeengekomen opdracht of wettelijke mogelijkheden vallen of wanneer uitvoering onverantwoord of onveilig zou zijn."
      }
    ]
  },
  {
    "id": "artikel-8",
    "title": "Artikel 8 – Inzet van professionals",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg kan voor de uitvoering en continuïteit van begeleiding gebruikmaken van daarvoor geschikte professionals."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg bepaalt, binnen de geldende overeenkomst en wettelijke kaders, op welke wijze professionals worden ingezet."
      },
      {
        "type": "paragraph",
        "text": "3. Professionals moeten voldoen aan de kwalificaties, registraties, verklaringen, deskundigheid en andere eisen die voor hun werkzaamheden noodzakelijk zijn."
      },
      {
        "type": "paragraph",
        "text": "4. Wanneer voor inzet of vervanging voorafgaande toestemming of goedkeuring van de cliënt, budgethouder, gemeente, zorgkantoor, SVB of een andere bevoegde partij vereist is, wordt daarmee rekening gehouden."
      },
      {
        "type": "paragraph",
        "text": "5. RHB Zorg garandeert geen aantallen professionals of permanente beschikbaarheid, tenzij dit uitdrukkelijk schriftelijk is overeengekomen."
      }
    ]
  },
  {
    "id": "artikel-9",
    "title": "Artikel 9 – Continuïteit, verhindering en vervanging",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Wanneer een geplande professional door ziekte, overmacht of andere omstandigheden niet beschikbaar is, beoordeelt RHB Zorg welke oplossing redelijkerwijs mogelijk en verantwoord is."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg kan, wanneer dit is toegestaan en praktisch mogelijk is, een andere geschikte professional voorstellen of inzetten."
      },
      {
        "type": "paragraph",
        "text": "3. RHB Zorg kan niet garanderen dat bij iedere verhindering onmiddellijk vervanging beschikbaar is."
      },
      {
        "type": "paragraph",
        "text": "4. Wanneer begeleiding niet volgens afspraak kan doorgaan, wordt de cliënt of vertegenwoordiger zo spoedig als redelijkerwijs mogelijk geïnformeerd."
      }
    ]
  },
  {
    "id": "artikel-10",
    "title": "Artikel 10 – Verplichtingen van cliënt en opdrachtgever",
    "blocks": [
      {
        "type": "paragraph",
        "text": "De cliënt en opdrachtgever:"
      },
      {
        "type": "paragraph",
        "text": "a. verstrekken de informatie die redelijkerwijs noodzakelijk is voor goede en veilige begeleiding;"
      },
      {
        "type": "paragraph",
        "text": "b. informeren RHB Zorg over relevante wijzigingen in gezondheid, gedrag, veiligheid, woonsituatie, beschikking, indicatie, PGB, vertegenwoordiging of andere omstandigheden die de begeleiding kunnen beïnvloeden;"
      },
      {
        "type": "paragraph",
        "text": "c. behandelen professionals respectvol en zorgen, wanneer begeleiding thuis of op een andere door hen gekozen locatie plaatsvindt, voor een redelijkerwijs veilige werkomgeving;"
      },
      {
        "type": "paragraph",
        "text": "d. werken binnen redelijke grenzen mee aan gemaakte afspraken en evaluaties;"
      },
      {
        "type": "paragraph",
        "text": "e. gebruiken PGB of andere financiering overeenkomstig de daarvoor geldende regels;"
      },
      {
        "type": "paragraph",
        "text": "f. verstrekken geen onjuiste informatie met het doel zorg, declaraties of vergoedingen te verkrijgen waarop geen recht bestaat."
      }
    ]
  },
  {
    "id": "artikel-11",
    "title": "Artikel 11 – Veiligheid en grenzen van dienstverlening",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg beoordeelt voortdurend of begeleiding binnen redelijke en professionele grenzen veilig en verantwoord kan worden uitgevoerd."
      },
      {
        "type": "paragraph",
        "text": "2. Bij ernstige bedreiging, geweld, intimidatie, seksuele grensoverschrijding, ernstige middelenproblematiek, acute psychiatrische ontregeling of andere omstandigheden waardoor veilige of verantwoorde begeleiding redelijkerwijs niet mogelijk is, kan RHB Zorg aanvullende maatregelen treffen, begeleiding tijdelijk onderbreken of in uitzonderlijke gevallen beëindigen."
      },
      {
        "type": "paragraph",
        "text": "3. Indien mogelijk wordt eerst gezocht naar een passende oplossing en wordt rekening gehouden met de gevolgen voor de cliënt."
      },
      {
        "type": "paragraph",
        "text": "4. Bij acute nood kan RHB Zorg passende hulpdiensten of bevoegde instanties inschakelen."
      }
    ]
  },
  {
    "id": "artikel-12",
    "title": "Artikel 12 – Meldcode huiselijk geweld en kindermishandeling",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg werkt overeenkomstig de toepasselijke Meldcode huiselijk geweld en kindermishandeling."
      },
      {
        "type": "paragraph",
        "text": "2. Bij signalen of vermoedens kan RHB Zorg de stappen van de meldcode doorlopen, advies vragen en wanneer dit volgens het toepasselijke afwegingskader noodzakelijk is een melding doen bij Veilig Thuis."
      },
      {
        "type": "paragraph",
        "text": "3. Voor zover de wet dit toestaat kan dit, wanneer noodzakelijk, zonder toestemming van de cliënt of vertegenwoordiger plaatsvinden."
      }
    ]
  },
  {
    "id": "artikel-13",
    "title": "Artikel 13 – Dossier en rapportage",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg legt voor zover noodzakelijk en wettelijk vereist gegevens over de begeleiding vast in een cliëntdossier."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg rapporteert feitelijk, zorgvuldig en voor zover mogelijk doelgericht over relevante begeleiding, voortgang, afspraken en gebeurtenissen."
      },
      {
        "type": "paragraph",
        "text": "3. Toegang tot het dossier wordt beperkt tot personen die deze informatie voor hun werkzaamheden of wettelijke verantwoordelijkheden nodig hebben."
      },
      {
        "type": "paragraph",
        "text": "4. Rechten met betrekking tot inzage, afschrift, correctie, aanvulling of vernietiging worden behandeld overeenkomstig de toepasselijke wetgeving."
      }
    ]
  },
  {
    "id": "artikel-14",
    "title": "Artikel 14 – Privacy en geheimhouding",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg verwerkt persoonsgegevens overeenkomstig de AVG, toepasselijke zorgwetgeving en haar Privacyverklaring."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg gaat vertrouwelijk om met informatie over cliënten."
      },
      {
        "type": "paragraph",
        "text": "3. Gegevens worden uitsluitend gedeeld wanneer daarvoor een geldige grondslag bestaat."
      },
      {
        "type": "paragraph",
        "text": "4. De Privacyverklaring van RHB Zorg bevat nadere informatie over doeleinden, gegevenscategorieën, ontvangers, bewaartermijnen, beveiliging en privacyrechten."
      }
    ]
  },
  {
    "id": "artikel-15",
    "title": "Artikel 15 – Samenwerking en informatie-uitwisseling",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Wanneer dit voor goede begeleiding noodzakelijk is, kan RHB Zorg samenwerken met andere betrokken personen en organisaties."
      },
      {
        "type": "paragraph",
        "text": "2. Daarbij wordt rekening gehouden met geheimhouding, privacy, vertegenwoordiging en eventuele toestemmingsvereisten."
      },
      {
        "type": "paragraph",
        "text": "3. RHB Zorg deelt niet méér informatie dan redelijkerwijs noodzakelijk is voor het betreffende doel."
      }
    ]
  },
  {
    "id": "artikel-16",
    "title": "Artikel 16 – PGB en financiering",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Wanneer begeleiding uit een PGB wordt betaald, blijft de budgethouder of diens bevoegde vertegenwoordiger verantwoordelijk voor verplichtingen die volgens de toepasselijke PGB-regels bij de budgethouder liggen."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg verstrekt de informatie die zij redelijkerwijs moet verstrekken voor het aangaan en uitvoeren van de zorgovereenkomst en rechtmatige declaratie van geleverde begeleiding."
      },
      {
        "type": "paragraph",
        "text": "3. De cliënt of budgethouder is verantwoordelijk voor een geldige beschikking of indicatie en voldoende budget, tenzij uit de wet of schriftelijke afspraken anders voortvloeit."
      },
      {
        "type": "paragraph",
        "text": "4. Een PGB of beschikking geeft niet automatisch recht op iedere gewenste vorm, omvang of duur van begeleiding door RHB Zorg."
      },
      {
        "type": "paragraph",
        "text": "5. Wanneer financiering, beschikking of indicatie wijzigt of eindigt, beoordelen partijen zo spoedig mogelijk welke gevolgen dit heeft voor de overeenkomst."
      }
    ]
  },
  {
    "id": "artikel-17",
    "title": "Artikel 17 – Urenregistratie en akkoord",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg registreert geleverde begeleiding overeenkomstig de toepasselijke administratieve en financieringsregels."
      },
      {
        "type": "paragraph",
        "text": "2. Wanneer cliënt, budgethouder of vertegenwoordiger volgens de toepasselijke regeling uren of declaraties moet controleren of accorderen, verleent deze daaraan tijdig medewerking."
      },
      {
        "type": "paragraph",
        "text": "3. Bezwaren tegen geregistreerde uren worden zo spoedig mogelijk gemotiveerd aan RHB Zorg gemeld."
      },
      {
        "type": "paragraph",
        "text": "4. RHB Zorg declareert uitsluitend begeleiding en andere prestaties die volgens de toepasselijke afspraken en financieringsregels declarabel zijn."
      }
    ]
  },
  {
    "id": "artikel-18",
    "title": "Artikel 18 – Tarieven en betaling",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Het toepasselijke tarief en de wijze van betaling worden vastgelegd in de zorgovereenkomst, opdrachtbevestiging of andere schriftelijke afspraak."
      },
      {
        "type": "paragraph",
        "text": "2. Wanneer betaling via PGB, gemeente, zorgkantoor, SVB of een andere financieringsroute verloopt, gelden daarnaast de voorwaarden van die route."
      },
      {
        "type": "paragraph",
        "text": "3. Kosten die niet vanuit de betreffende financiering mogen worden betaald, worden niet zonder afzonderlijke rechtsgeldige afspraak ten laste van het betreffende budget gebracht."
      },
      {
        "type": "paragraph",
        "text": "4. Voor rechtstreeks aan cliënt of opdrachtgever gefactureerde bedragen geldt de overeengekomen betalingstermijn."
      },
      {
        "type": "paragraph",
        "text": "5. Bij betalingsachterstand handelt RHB Zorg overeenkomstig de wettelijke regels die op de betreffende contractspartij van toepassing zijn."
      }
    ]
  },
  {
    "id": "artikel-19",
    "title": "Artikel 19 – Afspraken, afzegging en niet verschijnen",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. De cliënt of vertegenwoordiger meldt verhindering zo spoedig mogelijk."
      },
      {
        "type": "paragraph",
        "text": "2. Of een niet of te laat afgezegde afspraak in rekening kan worden gebracht, hangt af van de zorgovereenkomst, financieringsroute, toepasselijke regels en vooraf gemaakte afspraken."
      },
      {
        "type": "paragraph",
        "text": "3. RHB Zorg brengt geen kosten ten laste van een PGB, gemeente, zorgkantoor of andere financier wanneer dit volgens de toepasselijke regels niet is toegestaan."
      }
    ]
  },
  {
    "id": "artikel-20",
    "title": "Artikel 20 – Klachten",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg wil onvrede bij voorkeur zo vroeg mogelijk bespreken en zorgvuldig oplossen."
      },
      {
        "type": "paragraph",
        "text": "2. Een cliënt of vertegenwoordiger kan een klacht indienen overeenkomstig de klachtenregeling van RHB Zorg."
      },
      {
        "type": "paragraph",
        "text": "3. Afhankelijk van de wettelijke regeling waaronder de begeleiding valt, kan daarnaast toegang bestaan tot een klachtenfunctionaris, klachtencommissie, onafhankelijke vertrouwenspersoon, geschilleninstantie of andere wettelijke klachtenroute."
      },
      {
        "type": "paragraph",
        "text": "4. RHB Zorg verstrekt informatie over de toepasselijke klachtenroute."
      },
      {
        "type": "paragraph",
        "text": "5. Het indienen van een klacht mag niet leiden tot benadeling van de cliënt."
      }
    ]
  },
  {
    "id": "artikel-21",
    "title": "Artikel 21 – Incidenten en calamiteiten",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg registreert, beoordeelt en behandelt incidenten en calamiteiten overeenkomstig haar procedures en toepasselijke wet- en regelgeving."
      },
      {
        "type": "paragraph",
        "text": "2. Wanneer een gebeurtenis volgens de wet bij een toezichthouder of andere bevoegde instantie moet worden gemeld, handelt RHB Zorg overeenkomstig die meldplicht."
      },
      {
        "type": "paragraph",
        "text": "3. RHB Zorg gebruikt relevante incidentinformatie tevens om waar mogelijk van gebeurtenissen te leren en de kwaliteit en veiligheid van de dienstverlening te verbeteren."
      }
    ]
  },
  {
    "id": "artikel-22",
    "title": "Artikel 22 – Aansprakelijkheid",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg is aansprakelijk voor schade voor zover die volgens de wet aan RHB Zorg kan worden toegerekend."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg is niet aansprakelijk voor schade die het gevolg is van onjuiste, onvolledige of te laat verstrekte essentiële informatie door cliënt of opdrachtgever, voor zover RHB Zorg daardoor de schade redelijkerwijs niet kon voorkomen."
      },
      {
        "type": "paragraph",
        "text": "3. RHB Zorg is evenmin aansprakelijk voor handelen van derden waarover RHB Zorg geen zeggenschap heeft, tenzij en voor zover de wet die aansprakelijkheid toch aan RHB Zorg toerekent."
      },
      {
        "type": "paragraph",
        "text": "4. Geen bepaling in deze voorwaarden beperkt aansprakelijkheid voor zover een dergelijke beperking volgens dwingend recht niet is toegestaan."
      },
      {
        "type": "paragraph",
        "text": "5. RHB Zorg draagt zorg voor verzekeringen die redelijkerwijs passen bij haar activiteiten en wettelijke verantwoordelijkheden."
      }
    ]
  },
  {
    "id": "artikel-23",
    "title": "Artikel 23 – Opschorting en beëindiging",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. De overeenkomst kan worden beëindigd overeenkomstig de zorgovereenkomst en toepasselijke wetgeving."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg beëindigt een zorgrelatie niet zonder redelijke grond wanneer toepasselijke wet- of regelgeving een dergelijke grond vereist."
      },
      {
        "type": "paragraph",
        "text": "3. Een reden voor herbeoordeling, opschorting of beëindiging kan onder meer bestaan wanneer:"
      },
      {
        "type": "paragraph",
        "text": "a. de hulpvraag structureel buiten de deskundigheid of mogelijkheden van RHB Zorg komt te liggen;"
      },
      {
        "type": "paragraph",
        "text": "b. veilige of verantwoorde begeleiding niet langer redelijkerwijs mogelijk is;"
      },
      {
        "type": "paragraph",
        "text": "c. noodzakelijke medewerking structureel ontbreekt;"
      },
      {
        "type": "paragraph",
        "text": "d. sprake is van ernstige bedreiging, geweld of andere ernstige veiligheidsrisico's;"
      },
      {
        "type": "paragraph",
        "text": "e. financiering of een noodzakelijke beschikking eindigt en geen andere geldige financieringsafspraak tot stand komt;"
      },
      {
        "type": "paragraph",
        "text": "f. RHB Zorg door gewijzigde omstandigheden of wettelijke eisen de begeleiding niet meer verantwoord kan leveren."
      },
      {
        "type": "paragraph",
        "text": "4. RHB Zorg houdt bij beëindiging rekening met haar zorgplicht en werkt, voor zover dit redelijkerwijs van haar kan worden verlangd, mee aan een zorgvuldige afronding of overdracht."
      },
      {
        "type": "paragraph",
        "text": "5. In acute situaties waarin veiligheid of wetgeving onmiddellijk handelen vereist, kan RHB Zorg direct noodzakelijke maatregelen treffen."
      }
    ]
  },
  {
    "id": "artikel-24",
    "title": "Artikel 24 – Overmacht",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Wanneer RHB Zorg door omstandigheden die redelijkerwijs buiten haar invloed liggen tijdelijk niet kan voldoen aan een afspraak, is zij niet aansprakelijk voor de daardoor ontstane tekortkoming voor zover de wet dat toestaat."
      },
      {
        "type": "paragraph",
        "text": "2. RHB Zorg zal zich in zo'n situatie inspannen om de gevolgen voor de begeleiding zoveel mogelijk te beperken."
      },
      {
        "type": "paragraph",
        "text": "3. Wanneer de situatie langdurig voortduurt, bespreken partijen welke voortzetting, aanpassing of beëindiging passend is."
      }
    ]
  },
  {
    "id": "artikel-25",
    "title": "Artikel 25 – Wijziging van omstandigheden",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Verandert de hulpvraag, veiligheidssituatie, indicatie, beschikking, financiering of andere relevante omstandigheid wezenlijk, dan kunnen de afspraken opnieuw worden beoordeeld."
      },
      {
        "type": "paragraph",
        "text": "2. Indien nodig worden zorgovereenkomst en/of begeleidingsplan aangepast."
      }
    ]
  },
  {
    "id": "artikel-26",
    "title": "Artikel 26 – Wijziging van de algemene voorwaarden",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. RHB Zorg kan deze algemene voorwaarden wijzigen wanneer daar een redelijke aanleiding voor bestaat, bijvoorbeeld door gewijzigde wetgeving, financieringsregels of dienstverlening."
      },
      {
        "type": "paragraph",
        "text": "2. Nieuwe voorwaarden gelden voor nieuwe overeenkomsten vanaf de aangegeven ingangsdatum."
      },
      {
        "type": "paragraph",
        "text": "3. Bij lopende overeenkomsten worden wezenlijke wijzigingen vooraf bekendgemaakt wanneer dit noodzakelijk is. Een wijziging kan geen rechten aantasten die op grond van dwingend recht niet eenzijdig mogen worden gewijzigd."
      }
    ]
  },
  {
    "id": "artikel-27",
    "title": "Artikel 27 – Toepasselijk recht en geschillen",
    "blocks": [
      {
        "type": "paragraph",
        "text": "1. Op de overeenkomst is Nederlands recht van toepassing."
      },
      {
        "type": "paragraph",
        "text": "2. Bij een geschil proberen partijen eerst in overleg tot een oplossing te komen, zonder dat dit afbreuk doet aan het recht van cliënt of opdrachtgever om gebruik te maken van een toepasselijke wettelijke klachten-, geschillen- of rechtsgang."
      },
      {
        "type": "paragraph",
        "text": "3. Een geschil dat aan de rechter wordt voorgelegd, wordt behandeld door de volgens de Nederlandse wet bevoegde rechter. Een wettelijke beschermingsregel voor consumenten of cliënten blijft daarbij van toepassing."
      }
    ]
  },
  {
    "id": "artikel-28",
    "title": "Artikel 28 – Samenhang met andere RHB-documenten",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Deze algemene voorwaarden vormen samen met de individuele zorgovereenkomst en, waar van toepassing, het begeleidingsplan en de relevante beleids- en cliëntdocumenten het kader waarbinnen RHB Zorg haar begeleiding uitvoert."
      },
      {
        "type": "paragraph",
        "text": "Voor specifieke onderwerpen hanteert RHB Zorg afzonderlijke documenten en procedures, waaronder waar van toepassing:"
      },
      {
        "type": "list",
        "items": [
          "Privacyverklaring;",
          "klachtenregeling;",
          "Meldcode huiselijk geweld en kindermishandeling;",
          "beleid Kwaliteit & Veiligheid;",
          "incidenten- en calamiteitenprocedures;",
          "cliëntdossier en rapportage-/evaluatiewerkwijze."
        ]
      },
      {
        "type": "paragraph",
        "text": "Deze documenten worden toegepast in samenhang met de wet- en regelgeving die voor de betreffende begeleiding geldt."
      }
    ]
  },
  {
    "id": "artikel-29",
    "title": "Artikel 29 – Contactgegevens",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Stichting RHB Zorg"
      },
      {
        "type": "paragraph",
        "text": "KvK: 42137464"
      },
      {
        "type": "paragraph",
        "text": "Telefoon: 085 333 4220"
      },
      {
        "type": "paragraph",
        "text": "E-mail: info@rhbzorg.nl"
      },
      {
        "type": "paragraph",
        "text": "Website: rhbzorg.nl"
      },
      {
        "type": "paragraph",
        "text": "Met aandacht. Vooruit door verbinding."
      }
    ]
  }
];

export const complaintSections: DocumentSection[] = [
  {
    "id": "onderdeel-1",
    "title": "Klachtenregeling",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Bij Stichting RHB Zorg vinden wij het belangrijk dat cliënten en betrokkenen zich gehoord en serieus genomen voelen. Wij werken vanuit aandacht, duidelijkheid, respect en samenwerking."
      },
      {
        "type": "paragraph",
        "text": "Toch kan het voorkomen dat iemand niet tevreden is over onze begeleiding, communicatie of werkwijze. Wij vinden het belangrijk dat dit bespreekbaar is en dat een klacht zorgvuldig wordt behandeld."
      },
      {
        "type": "paragraph",
        "text": "Een klacht gebruiken wij waar mogelijk ook om te leren en onze begeleiding verder te verbeteren."
      }
    ]
  },
  {
    "id": "onderdeel-2",
    "title": "Wie kan een klacht indienen?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Een klacht kan worden ingediend door een cliënt of, wanneer van toepassing, door een ouder, verzorger, wettelijk vertegenwoordiger of andere persoon die gerechtigd is namens de cliënt op te treden."
      }
    ]
  },
  {
    "id": "onderdeel-3",
    "title": "Waarover kan een klacht gaan?",
    "blocks": [
      {
        "type": "list",
        "items": [
          "de begeleiding;",
          "de manier waarop iemand is behandeld of benaderd;",
          "communicatie;",
          "gemaakte of niet nagekomen afspraken;",
          "privacy of vertrouwelijkheid;",
          "het handelen of nalaten van RHB Zorg of een medewerker;",
          "een andere situatie waarover iemand niet tevreden is."
        ]
      }
    ]
  },
  {
    "id": "onderdeel-4",
    "title": "Samen in gesprek",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Waar mogelijk bespreken wij een probleem of ontevredenheid graag eerst samen. Wij luisteren naar wat er is gebeurd en kijken samen naar wat nodig is om tot een passende oplossing te komen."
      },
      {
        "type": "paragraph",
        "text": "Een gesprek met RHB Zorg is geen verplichting om een klacht te kunnen indienen."
      }
    ]
  },
  {
    "id": "onderdeel-5",
    "title": "Een klacht indienen bij RHB Zorg",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Een klacht kan worden ingediend via het klachtenformulier op onze website."
      },
      {
        "type": "paragraph",
        "text": "Na ontvangst wordt de klacht zorgvuldig en vertrouwelijk behandeld. De klager ontvangt een bevestiging dat de klacht is ontvangen en wordt geïnformeerd over de verdere behandeling."
      },
      {
        "type": "paragraph",
        "text": "Bij de behandeling kijken wij naar wat er is gebeurd, wat de klacht betekent voor de betrokkenen en welke oplossing of vervolgstap passend is."
      }
    ]
  },
  {
    "id": "onderdeel-6",
    "title": "Onafhankelijke klachtenbehandeling bij jeugdhulp",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Voor klachten over jeugdhulp kan gebruik worden gemaakt van de onafhankelijke klachtencommissie waarbij RHB Zorg is aangesloten."
      },
      {
        "type": "paragraph",
        "text": "De klachtencommissie behandelt klachten onafhankelijk en overeenkomstig de geldende klachtenprocedure."
      },
      {
        "type": "paragraph",
        "text": "RHB Zorg informeert cliënten, ouders en vertegenwoordigers over de mogelijkheid om gebruik te maken van deze onafhankelijke klachtenprocedure."
      }
    ]
  },
  {
    "id": "onderdeel-7",
    "title": "Onafhankelijke vertrouwenspersoon jeugdhulp",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Jongeren, ouders en verzorgers die gebruikmaken van jeugdhulp kunnen voor onafhankelijke informatie, advies en ondersteuning terecht bij een vertrouwenspersoon van Jeugdstem."
      },
      {
        "type": "paragraph",
        "text": "De vertrouwenspersoon staat los van RHB Zorg en kan ondersteunen bij vragen over rechten, gesprekken over de jeugdhulp en het indienen of behandelen van een klacht."
      }
    ]
  },
  {
    "id": "onderdeel-8",
    "title": "Andere wettelijke klachtenroutes",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Wanneer op de begeleiding of zorg van een cliënt andere wettelijke klachtenregels van toepassing zijn, informeert RHB Zorg de cliënt of vertegenwoordiger over de klachtenroute die voor die situatie geldt."
      },
      {
        "type": "paragraph",
        "text": "Wanneer van toepassing kan daarbij gebruik worden gemaakt van een onafhankelijke klachtenfunctionaris en/of externe geschilleninstantie waarbij RHB Zorg is aangesloten."
      }
    ]
  },
  {
    "id": "onderdeel-9",
    "title": "Privacy en vertrouwelijkheid",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Klachten worden zorgvuldig en vertrouwelijk behandeld."
      },
      {
        "type": "paragraph",
        "text": "Persoonsgegevens worden alleen gebruikt voor zover dit noodzakelijk is voor de behandeling en afhandeling van de klacht en worden verwerkt volgens de geldende privacyregels."
      }
    ]
  },
  {
    "id": "onderdeel-10",
    "title": "Geen nadelige gevolgen",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Het indienen van een klacht heeft geen nadelige gevolgen voor de begeleiding van een cliënt."
      },
      {
        "type": "paragraph",
        "text": "Iedere cliënt moet ontevredenheid of een klacht kunnen uiten zonder daardoor anders of nadelig behandeld te worden."
      }
    ]
  },
  {
    "id": "onderdeel-11",
    "title": "Leren en verbeteren",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg gebruikt klachten en signalen om te beoordelen waar onze begeleiding of werkwijze kan worden verbeterd."
      },
      {
        "type": "paragraph",
        "text": "Waar nodig worden verbetermaatregelen genomen en wordt onze werkwijze aangepast."
      },
      {
        "type": "paragraph",
        "text": "Zo blijven wij werken aan zorgvuldige, veilige en persoonlijke begeleiding."
      },
      {
        "type": "paragraph",
        "text": "Met aandacht. Vooruit door verbinding."
      }
    ]
  }
];

export const qualitySections: DocumentSection[] = [
  {
    "id": "zorgvuldig",
    "title": "Zorgvuldig, veilig en professioneel",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Bij RHB Zorg vinden wij het belangrijk dat cliënten kunnen rekenen op begeleiding die zorgvuldig, veilig en professioneel wordt uitgevoerd."
      },
      {
        "type": "paragraph",
        "text": "Wij werken met duidelijke afspraken over kwaliteit, veiligheid, privacy, deskundigheid en het omgaan met signalen, klachten en incidenten. Onze werkwijze wordt regelmatig geëvalueerd en waar nodig verbeterd."
      }
    ]
  },
  {
    "id": "veilige-begeleiding",
    "title": "Veilige begeleiding",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Veiligheid is een vast onderdeel van onze begeleiding. We hebben aandacht voor signalen en mogelijke risico’s en handelen zorgvuldig en passend wanneer de situatie daarom vraagt."
      },
      {
        "type": "paragraph",
        "text": "Incidenten en calamiteiten worden zorgvuldig geregistreerd, beoordeeld en geëvalueerd. Wanneer sprake is van een wettelijke meldplicht, wordt melding gedaan bij de bevoegde toezichthouder. We gebruiken incidenten en signalen om te leren en onze begeleiding te verbeteren."
      }
    ]
  },
  {
    "id": "deskundigheid",
    "title": "Deskundige begeleiding",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg werkt met medewerkers die beschikken over een passende opleiding, ervaring en deskundigheid voor de werkzaamheden die zij uitvoeren."
      },
      {
        "type": "paragraph",
        "text": "Voor begeleidende functies hanteren wij als uitgangspunt minimaal een relevante opleiding op MBO 4-niveau. Waar de hulpvraag, werkzaamheden of professionele eisen aanvullende deskundigheid of registratie vereisen, zetten wij hiervoor passend gekwalificeerde professionals in."
      },
      {
        "type": "paragraph",
        "text": "Medewerkers beschikken waar vereist over een geldige VOG."
      }
    ]
  },
  {
    "id": "meldcode",
    "title": "Meldcode huiselijk geweld en kindermishandeling",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RHB Zorg werkt volgens de wettelijke Meldcode huiselijk geweld en kindermishandeling."
      },
      {
        "type": "paragraph",
        "text": "Bij signalen of vermoedens van huiselijk geweld of kindermishandeling volgen wij het geldende stappenplan en afwegingskader."
      },
      {
        "type": "heading",
        "text": "Direct gevaar"
      },
      {
        "type": "paragraph",
        "text": "Is er sprake van direct of acuut gevaar? Dan wordt direct passende hulp ingeschakeld. Bij een noodsituatie wordt 112 gebeld."
      },
      {
        "type": "heading",
        "text": "Zorgvuldig omgaan met informatie"
      },
      {
        "type": "paragraph",
        "text": "De gevolgde stappen, afwegingen en besluiten worden zorgvuldig vastgelegd. Persoonsgegevens en gevoelige informatie worden alleen verwerkt en gedeeld wanneer dit noodzakelijk en toegestaan is."
      }
    ]
  },
  {
    "id": "klachten",
    "title": "Klachten",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Wij vinden het belangrijk dat cliënten en betrokkenen vragen, zorgen en klachten kunnen bespreken."
      },
      {
        "type": "paragraph",
        "text": "Klachten worden serieus genomen en zorgvuldig behandeld volgens onze klachtenregeling."
      },
      {
        "type": "paragraph",
        "text": "Een cliënt, ouder, verzorger of andere gerechtigde betrokkene kan rechtstreeks bij RHB Zorg een klacht indienen. Afhankelijk van de zorg of jeugdhulp die wordt ontvangen en de daarop toepasselijke regels kan daarnaast gebruik worden gemaakt van onafhankelijke ondersteuning en/of een externe klachtenprocedure."
      }
    ]
  },
  {
    "id": "vertrouwenspersoon",
    "title": "Onafhankelijke vertrouwenspersoon jeugdhulp",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Jongeren, ouders en verzorgers die gebruikmaken van jeugdhulp kunnen voor onafhankelijke informatie, advies en ondersteuning terecht bij een vertrouwenspersoon van Jeugdstem."
      },
      {
        "type": "paragraph",
        "text": "De vertrouwenspersoon staat los van RHB Zorg en kan ondersteunen bij vragen over rechten, de geboden jeugdhulp, gesprekken met de hulpverlening of het indienen en behandelen van een klacht."
      }
    ]
  },
  {
    "id": "leren-verbeteren",
    "title": "Leren & verbeteren",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Wij evalueren onze begeleiding en gebruiken ervaringen, signalen, klachten en incidenten om onze werkwijze te blijven verbeteren."
      },
      {
        "type": "paragraph",
        "text": "Zo werken wij voortdurend aan zorgvuldige, veilige en persoonlijke begeleiding."
      },
      {
        "type": "paragraph",
        "text": "Kwaliteit en veiligheid zijn voor ons geen losse afspraken, maar een vast onderdeel van iedere begeleiding."
      }
    ]
  }
];
