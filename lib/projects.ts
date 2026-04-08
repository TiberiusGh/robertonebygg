export type ProjectParagraph = {
  heading: string
  body: string
}

export type Project = {
  id: string
  folder: string
  title: string
  thumbnailCount: number
  paragraphs: ProjectParagraph[]
}

function imgs(folder: string, count: number, variant: 'thumbnails' | 'full_rez'): string[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(3, '0')
    return `/images/projekter/${folder}/${variant}/${n}.webp`
  })
}

export const projects: Project[] = [
  {
    id: 'altan',
    folder: 'altan',
    title: 'Altanbyggnation med integrerad poolanläggning',
    thumbnailCount: 7,
    paragraphs: [
      {
        heading: 'Markarbeten och grundläggning',
        body: 'Här har vi genomfört ett omfattande och tekniskt avancerat projekt som kombinerar poolinstallation med en integrerad terrasslösning. Arbetet inleddes med noggrann markberedning och anläggning av en solid grund med grus och betongplintar för att ge stabilitet för hela anläggningen.',
      },
      {
        heading: 'Konstruktion och bärande system',
        body: 'Konstruktionen baseras på ett robust ramverk byggt i impregnerat virke av C24-kvalitet, där bärande regelverket monterats med 45x220mm dimensioner och korrekta center-till-center-mått för optimal lastfördelning. Detta säkerställer att hela strukturen kan bära både poolens vikt och terrassbelastning över tid. Konstruktionen har fyllts med makadam som inte bara ger stabilitet utan också säkerställer fortsatt god dränering runt poolområdet.',
      },
      {
        heading: 'Terrassystem och ytbehandling',
        body: 'Terrasssystemet har utförts i nordisk gran eller furu med precision i plankläggningen och jämna fogar genom hela ytan. Särskild uppmärksamhet har ägnats åt integrationen mellan poolområdet och övriga terrassen, där flöden och nivåskillnader hanterats för både funktionalitet och estetik.',
      },
      {
        heading: 'Specialinstallationer och integration',
        body: 'Installation av poolkupol och tillhörande säkerhetsutrustning har genomförts med noggrann anpassning till terrassytan för en smidig helhetslösning.',
      },
      {
        heading: 'Helhetslösning och kvalitetsresultat',
        body: 'Slutresultatet är en helintegrerad lösning där pool och uteplatser samspelar perfekt, med alla tekniska system professionellt hanterade från markarbeten till färdig yta. Här har vi har skapat en smidig övergång mellan olika zoner samtidigt som man bevarat den naturliga känslan i trädgården.',
      },
    ],
  },
  {
    id: 'fritidshusbyggnation',
    folder: 'fritidshusbyggnation',
    title: 'Fritidshusbyggnation',
    thumbnailCount: 8,
    paragraphs: [
      {
        heading: 'Grundläggning och stomresning',
        body: 'Arbetet inleddes med professionell grundläggning på betongplatta, följt av uppförandet av en robust träkonstruktion byggd på plats. Stommen resandes med konventionella träregeltekniker där varje del monteras individuellt för att passa tomtens specifika förutsättningar. Takstolarna konstruerades med traditionella spännvidder och lutningar anpassade för det svenska klimatet, med korrekt dimensionering för snölaster.',
      },
      {
        heading: 'Klimatskärm och taktäckning',
        body: 'Exteriört har huset klätts med stående träpanel i nordisk gran, behandlad för långvarig väderbeständighet. Taktäckningen utfördes med betongpannor som ger både estetisk tilltalande utseende och teknisk hållbarhet. Fönsterinstallationerna genomfördes med moderna energieffektiva enheter som integreras smidigt i den traditionella arkitekturen.',
      },
      {
        heading: 'Invändig konstruktion och speciallösningar',
        body: 'Inomhus har vi skapat en öppen planlösning med loft och två separata rum som utnyttjar den tillgängliga ytan effektivt. Den öppna takkonstruktionen med synliga bjälkar ger byggnaden karaktär och rymlighet. De vita takpanelerna bidrar till att förstärka ljusinsläppet och skapa en ljus miljö.',
      },
      {
        heading: 'Färdigställande och detaljarbete',
        body: 'Slutfasen inkluderar installation av dörrpartier med glasinsatser, färdigbehandling av alla träytor och integration av elinstallationer. Resultatet är en funktionell fritidsbostad där traditionellt hantverk möter moderna byggtekniska krav, med alla system från grund till tak professionellt genomförda.',
      },
    ],
  },
  {
    id: 'komplett_badrumsrenovering',
    folder: 'komplett_badrumsrenovering',
    title: 'Komplett badrumsrenovering',
    thumbnailCount: 12,
    paragraphs: [
      {
        heading: 'Klimatskal och fuktsäkring',
        body: 'Arbetet inleddes med installation av professionell vindskyddsskiva och ångspärr för att skapa en korrekt klimatbarriär mot fuktpåverkan. Underliggande konstruktion förbereddes med noggrann tätning av genomföringar och anslutningar.',
      },
      {
        heading: 'Kakelläggning och ytbehandling',
        body: 'Väggarna har kläts med grå naturstensliknande kakel i stort format som skapar en elegant och tidlös känsla. Kakelläggningen utfördes med millimeterprecision för att uppnå perfekt fuglinje och planhet genom alla ytor. Golvet fick matchande kakel med anti-slip-egenskaper lämpliga för våtutrymmen.',
      },
      {
        heading: 'Speciallösningar och installationer',
        body: 'Duschområdet byggdes med infälld nisch för förvaring och genomfördes med extra noggrann tätning runt alla genomföringar. Golvbrunnen integrerades smidigt i kakelmönstret med korrekt fall för optimal dränering. Badrummet inkluderar även ett mindre separat rum som förberedts för framtida bastuinstallation, där väggarna klätts med träpanel och nödvändiga ventilations- och elinstallationer genomförts för saunamiljö.',
      },
      {
        heading: 'Detaljarbeten och slutresultat',
        body: 'Installation av dörrar, lister och övriga detaljer genomfördes med samma kvalitetskrav som huvudarbetena. Resultatet är en funktionell våtrumsanläggning med bastuförberedelse där alla tekniska krav på fuktsäkerhet kombineras med modern estetik och långsiktig hållbarhet.',
      },
    ],
  },
  {
    id: 'takreparation_och_isolering',
    folder: 'takreparation_och_isolering',
    title: 'Takreparation och isolering',
    thumbnailCount: 10,
    paragraphs: [
      {
        heading: 'Skadeutredning och reparationer',
        body: 'Arbetet inleddes med kartläggning av takskador. Fuktskadade träkonstruktioner identifierades och ersattes med nya bjälkar och underliggande strukturella element.',
      },
      {
        heading: 'Taktäckning och underhåll',
        body: 'Den befintliga taktäckningen demonterades för att komma åt skadade områden och möjliggöra strukturella reparationer. Efter att de nödvändiga reparationerna slutförts återuppbyggdes takkonstruktionen med förstärkt underlag och ny läktning. Ventilationsåtgärder implementerades för att förebygga framtida fuktproblem.',
      },
      {
        heading: 'Isolering och energiförbättring',
        body: 'En väsentlig del av renoveringen fokuserade på att förbättra det äldre husets energiprestanda genom installation av modern isolering. Mineralullsisolering installerades mellan takbjälkarna med korrekt tjocklek anpassad för äldre byggnaders förutsättningar. Ångspärr och vindskydd lades enligt dagens standard för att skapa en effektiv klimatbarriär.',
      },
      {
        heading: 'Slutförande och förbättringar',
        body: 'Efter isoleringen monterades nya innertaksplattor för att skapa en färdig yta och skydda isoleringen. Befintliga installationer anpassades till den förbättrade takkonstruktionen. Resultatet är ett renoverat tak som både åtgärdar de ursprungliga skadorna och ger det äldre huset betydligt förbättrad energieffektivitet och komfort.',
      },
    ],
  },
  {
    id: 'fonster_och_dorrrenovering',
    folder: 'fonster_och_dorrrenovering',
    title: 'Fönster och dörrrenovering',
    thumbnailCount: 4,
    paragraphs: [
      {
        heading: 'Fönsterutbyte och energiförbättring',
        body: 'Här har vi genomfört en omfattande fönster- och dörrrenovering av en traditionell svensk villa där fönster och dörrar i trävillan byttes ut mot moderna energieffektiva enheter som bibehåller traditionell estetik.',
      },
      {
        heading: 'Demonterings- och installationsarbeten',
        body: 'De gamla fönstren och ytterdörren demonterades med hänsyn till fasadens integritet. Nya fönster och dörr installerades med korrekt tätning och justering för optimal funktion. Befintliga öppningar anpassades vid behov för de nya måtten.',
      },
      {
        heading: 'Kompletterande arbeten',
        body: 'Fönstersmygar och dörröppningar justerades och täcklistor monterades för färdig anslutning. Nödvändiga justeringar av fasadmaterial genomfördes runt de nya installationerna.',
      },
      {
        heading: 'Resultat',
        body: 'Utbytet ger förbättrad energieffektivitet och funktionalitet samtidigt som husets traditionella utseende bevaras.',
      },
    ],
  },
  {
    id: 'fundament',
    folder: 'fundament',
    title: 'Fundamentarbeten för nybyggnation',
    thumbnailCount: 5,
    paragraphs: [
      {
        heading: 'Fundamentarbeten för nybyggnation',
        body: 'Byggföretaget har utfört två separata fundamentprojekt med både traditionella platsgjutna fundament och prefabricerade betongkonstruktioner. Projekten omfattar allt från schaktning till färdiga grunder redo för uppförande av byggnadsstomme.',
      },
      {
        heading: 'Platsgjutet fundament med träform',
        body: 'Det första projektet genomfördes med traditionell platsgjutning där träformar byggdes för att skapa fundamentets slutliga form. Armering placerades enligt konstruktionsritningar innan betonggjutning utfördes.',
      },
      {
        heading: 'Prefabricerade betongelement',
        body: 'Det andra projektet baserades på prefabricerade betongplattor med integrerade installationsgenomföringar och förberedda anslutningspunkter. Plattorna monterades med precision på förberedd grund och förbands med armering för strukturell integritet.',
      },
      {
        heading: 'Markarbeten och förberedelser',
        body: 'Båda projekten inleddes med noggrann markberedning inkluderande schaktning till rätt nivå och kompaktering av undergrund. Dräneringslösningar implementerades för att säkerställa långsiktig stabilitet.',
      },
      {
        heading: 'Resultat',
        body: 'Båda fundamenten färdigställdes enligt specifikation och tidsplan, redo för nästkommande fas av byggprocessen.',
      },
    ],
  },
  {
    id: 'tillbyggnad',
    folder: 'tillbyggnad',
    title: 'Tillbyggnad',
    thumbnailCount: 5,
    paragraphs: [
      {
        heading: 'Grundläggning och stomresning',
        body: 'Här har vi genomfört en tillbyggnad till befintligt tegelhus med modern träregelkonstruktion. Projektet omfattar allt från grundläggning med betongplintar till färdig stomme med isolering och ytbeklädnad.',
      },
      {
        heading: 'Konstruktion och integration',
        body: 'Träregelkonstruktionen anslöts mot det befintliga tegelhusets stomme med nödvändiga åtgärder för att säkra en stabil och tät anslutning. Takstolar monterades med rätt dimensionering och lutning för god vattenavrinning.',
      },
      {
        heading: 'Klimatskärm och ytbeklädnad',
        body: 'Tillbyggnaden kläddes med träpanel som harmoniserar med husets befintliga stil. Isolering och ångspärr monterades för energieffektiv och fuktsäker klimatskärm.',
      },
      {
        heading: 'Resultat',
        body: 'Resultatet är en välintegrerad tillbyggnad som utökar bostadens användningsyta och sammanfogas naturligt med det befintliga huset.',
      },
    ],
  },
  {
    id: 'altan_2',
    folder: 'altan_2',
    title: 'Altanbyggnation',
    thumbnailCount: 3,
    paragraphs: [
      {
        heading: 'Planering och markarbete',
        body: 'Projektet inleddes med planering av altanens placering och dimensioner utifrån kundens önskemål. Markarbeten utfördes för att skapa en stabil och jämn grund.',
      },
      {
        heading: 'Konstruktion och ytbehandling',
        body: 'Altanen byggdes med impregnerat virke för långvarig hållbarhet utomhus. Plankor lades med precisa fogar och räcken monterades för säkerhet och estetik.',
      },
      {
        heading: 'Resultat',
        body: 'En välbyggd altan som förlänger bostadens utomhusutrymme och håller hög kvalitet under lång tid.',
      },
    ],
  },
  {
    id: 'betongtrappa',
    folder: 'betongtrappa',
    title: 'Betongtrappa',
    thumbnailCount: 4,
    paragraphs: [
      {
        heading: 'Formbyggnad och armering',
        body: 'Projektet inleddes med noggrant utmätning och formbyggnad för att säkerställa korrekta mått och lutningar på trappan. Armering placerades enligt beräkningar för att ge konstruktionen tillräcklig bärförmåga.',
      },
      {
        heading: 'Gjutning och ytbehandling',
        body: 'Betong gjöts i form med noggrann vibrering för att undvika luftfickor. Ytan putsades och behandlades för att ge ett fint slutresultat med god halkresistans.',
      },
      {
        heading: 'Resultat',
        body: 'En robust betongtrappa med lång livslängd som klarar det svenska klimatets krav på frysbeständighet och hållbarhet.',
      },
    ],
  },
  {
    id: 'fritidshus_massiv',
    folder: 'fritidshus_massiv',
    title: 'Fritidshus i massivträ',
    thumbnailCount: 7,
    paragraphs: [
      {
        heading: 'Grundläggning och montage',
        body: 'Fritidshuset uppfördes med massivträstomme på förberedd grund. Modulerna monterades på plats med stor precision för tät och stabil konstruktion.',
      },
      {
        heading: 'Klimatskärm och detaljer',
        body: 'Taket täcktes med ett modernt taktäckningsmaterial som ger lång livslängd. Fönster och dörrar installerades med korrekt tätning för god värmeisolering.',
      },
      {
        heading: 'Invändig färdigställning',
        body: 'Interiören färdigställdes med ytskikt anpassade efter kundens önskemål. Elverk och nödvändiga installationer monterades.',
      },
      {
        heading: 'Resultat',
        body: 'Ett modernt och välbyggt fritidshus i massivträ som erbjuder ett naturligt och hälsosamt inomhusklimat.',
      },
    ],
  },
  {
    id: 'totalrenovering',
    folder: 'totalrenovering',
    title: 'Totalrenovering',
    thumbnailCount: 6,
    paragraphs: [
      {
        heading: 'Rivning och förberedelse',
        body: 'Projektet inleddes med systematisk rivning av befintliga ytskikt och genomgång av konstruktionens skick. Skador identifierades och åtgärdades innan nya material installerades.',
      },
      {
        heading: 'Konstruktionsåtgärder',
        body: 'Nödvändiga förstärkningar och reparationer av bärande konstruktion genomfördes. Ny isolering installerades för förbättrad energieffektivitet.',
      },
      {
        heading: 'Ytskikt och detaljer',
        body: 'Nya ytskikt monterades i alla rum – golv, väggar och tak – med material anpassade efter kundens önskemål och rummens funktion.',
      },
      {
        heading: 'Resultat',
        body: 'En genomgripande renovering som ger fastigheten ett modernt utseende och förbättrad funktion med lång hållbarhet.',
      },
    ],
  },
]

export function getProjectThumbnails(project: Project): string[] {
  return imgs(project.folder, project.thumbnailCount, 'thumbnails')
}

export function getProjectFullRes(project: Project): string[] {
  return imgs(project.folder, project.thumbnailCount, 'full_rez')
}
