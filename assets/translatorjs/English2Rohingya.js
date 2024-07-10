function translateText1() {
let inputText1 = document.getElementById('inputText1').value;
let outputText1 = translate(inputText1); // Replace with your translation function

document.getElementById('outputText1').value = outputText1;
}

// Example translation function (replace with your actual translation logic)
function translate(text) {
// Example translation mapping - Replace with actual translation logic
const translations = {

"5 o'clock": "5 fañs tha",

"a": "ekkán/uggwá",

"days": "dui tin din",

"a couple of days": "dui tin din",

"a kind of fishing net": "záaiñzal",

"a little": "homgorí",

"a little bit": "ekkená gori",

"a lot": "bicí",

"a lot of": "becábicí",

"a number of": "ho uggwá",

"aback": "ammúk gor",

"abacus": "gulá loi hísaf goróni",

"abad": "bekargor",

"abandon": "félai dáiai",

"abase": "gunári gor",

"abate": "homgor",

"abbey": "kriccen or giriza",

"abbot": "Kriccen or fúngri",

"abbreviate": "baiththá gor",

"abbreviation": "baiththá",

"abdicate": "félaiai",

"abdoman": "feth-zúla",

"abdomen": "feth-zúla",

"abdominal": "feçor",

"abduct": "thani loiza",

"aberrant": "mon hóraf óla",

"abet": "hórafit modot gor",

"abide": "mano",

"ability": "kaabeliyoti",

"able": "fare-gorífare",

"able to be used": "estemal gorá zaibou",

"ablution": "uzubanoon",

"abode": "thíkana",

"abolish": "mitháifél",

"aboriginal": "asól furana manúic",

"abort": "sáfgorifél",

"about": "baabote",

"above": "uore/uortú",

"abrasion": "añsádhola",

"abroad": "bidecót",

"absence": "gair háñzir",

"absent": "gairháñzir",

"absent minded": "gair háñziri demak",

"absentee": "gair háñziri manúic",

"absolute": "bilkúl/ebbre",

"absolutely": "bilkúl/furafuri",

"absorb": "thanilo",

"absorbed": "faní thainnéd",

"absorbency": "faní thaniluwa",

"absorbent": "faníthanoni",

"absorption": "suúiluwa",

"abuse": "golot/hóraf estemal goré",

"academic": "elómi manúic",

"accept": "kobulgor/razió",

"acceptable": "kaabel kobul",

"acceptance": "kobulgorá",

"accepted": "kobul goijjé",

"access": "rasta",

"access to basic services": "asási hédmot ókkol loot foon",

"access to housing": "gór loot foon",

"access to land and property": "zaga arde cómbotti loot foon",

"accessory": "fúañti aiyéde jiníc",

"accident": "mosibot",

"accidentally": "ótnofaiyoré",

"accommodate": "zaga de",

"accommodated": "zaga diyé",

"accommodating": "tákibar zagader",

"accommodation": "tákibar zaga",

"accomodation": "tákar zaga",

"accompanied": "fúañti",

"accompany": "fúañijja do",

"accompanying": "fúañti goríder",

"accord": "razinoma",

"accordance": "mozin",

"according": "mutabek/mozin",

"according to": "mozin",

"accordingly": "mutabek",

"account": "hísab",

"accountability": "zimma",

"accountable": "zimmadar",

"accountant": "hísafgoróya",

"accounting": "hísaf kitab",

"accuracy": "sóiyi",

"accurate": "sóiyi",

"accurately": "sóiyigorí",

"achieve": "háñsilgor",

"achievement": "kaamiabi",

"achieving": "háñsil gorér",

"acknowledge": "toslimgor/kodorgor",

"acknowledgement": "toslimgorá",

"acorn": "akon gula",

"acquaintance": "zanafúna- sináfúna",

"across": "haçi",

"act": "ham/amól gorá",

"acted": "amól goijjé",

"acting": "amól gorír",

"action": "karwaiyi",

"activate": "salugor",

"activation": "salugorá",

"active": "salu",

"active cancer": "hórkoti kensar",

"actively": "hórkot hísafe",

"activity": "lorasora",

"actor": "ekthár",

"actress": "ekthís",

"actual": "asól/gomgom",

"actually": "asólot/hákiki",

"ad": "elan",

"ad hoc": "tooitta",

"Adam": "Adom/duniyair foóila manúic",

"adam’s apple": "golar dana",

"adapt": "bonefán bodole",

"adaptable": "lagerdé éndila bodoli faredé",

"adaptation": "bonefán bodola",

"add": "zoma/ezafá",

"added": "ziyadá goijjé",

"addition": "zoma goróon",

"additional": "aró/izafá",

"additionally": "aró",

"address": "thíkana/zaga",

"addressed": "hól gorágiye",

"addressee": "thíkana ola",

"addressee only": "thíkana ola seróf",

"addressing": "hoór",

"adequate": "furafuri",

"adhere": "man/mózin sol/amól gor",

"adhere to hygiene": "sáfsutarar uore amól goró",

"adherent": "lagitákede",

"adjacent": "bazáiya",

"adjective": "sifót",

"adjoining": "bazáiya",

"adjust": "lar/uzugor",

"admin": "zimmadar",

"administer": "entezamgor",

"administered": "entezam goijjé",

"administration": "entezam",

"administrative": "entezami",

"administrator": "entezam goróya",

"admirable": "taarif gorázade",

"admire": "tarifgor",

"admirer": "tarif goróya",

"admit": "cíkar gor",

"admitted": "cíkar goijjé",

"Adom": "foóila manúic",

"adoman": "feth - zúla",

"adopt": "fal",

"adoption": "fuiccóin",

"adult": "dhoóñr manúic",

"adultery": "zená",

"advance": "muúmmíkka uza",

"advanced": "torki goijjé",

"advantage": "fáaida/laf",

"adventure": "hímmotgor",

"adventurer": "hímmot goróya",

"adventurous": "hímmot óla",

"adverse": "uldha/hóráf",

"adverse effect": "hóraf notiza",

"advice": "mocuwara/nisíyot",

"advise": "mocuwara do - solá do - sólla do",

"advised": "mocuwara diyé",

"adviser": "mocuwara douya",

"advisory": "mocuwarati",

"advocacy": "wakalot",

"advocate": "ukil",

"aeroplane": "hábar jaáñs",

"affair": "maamela/ham",

"affect": "asógore",

"affected": "asór goijjé",

"affecting": "asór gorér",

"affection": "ador",

"afflict": "rucé",

"affray": "maramari",

"afraid": "dhora/dhorfuk",

"after": "baade",

"after dawn": "fózor",

"after dusk": "ecáa baade",

"after noon": "duñíjja",

"after sunset": "mogorib baade",

"after that": "yaar baade",

"afternoon": "duñíjja",

"afterwards": "yíar baade",

"again": "arekbar",

"against": "uldha/kélaf",

"age": "umór/bosór",

"agency": "wakáala",

"agenda": "egendha",

"agent": "dalal/wokil",

"aggravated": "bicí hóraf goijjé",

"aggregation": "dola goróon",

"aggregator": "dola goróya",

"aggression": "ducmoni gorá",

"aggressive": "ducmoni",

"agitated": "ocánti goijjé",

"ago": "foóila",

"agor": "before",

"agree": "razi",

"agreed": "raazi óiye",

"agreement": "razinoma",

"agriculture": "kétbari",

"ahead": "muúntu",

"ahead of": "agortu",

"aid": "modot",

"AIDS": "gaa mozbut rakéde jiníc fúrai zagóide biaram",

"aim": "niyot",

"aimed": "niyot goijjéde",

"air": "boiyar",

"airline": "éyarlain",

"airplane": "plein",

"airport": "plein math",

"airtight": "kulluk maijja",

"airway": "plein or lain",

"airways": "háwar lain",

"aisle": "foñt",

"akin": "korib",

"alarm": "elarám",

"alarms": "elarám ól",

"alas": "háire afsús",

"album": "elbam",

"alert": "húñciar",

"algebra": "eljibra",

"alias": "kíta nam",

"alien": "ajnobi",

"align": "fúainna gor",

"alignment": "mizan",

"alive": "zinda",

"all": "beggín",

"all day": "furadin",

"all of them": "tará beggún",

"all of us": "añára beggún",

"all of you": "tuáñra beggún",

"all together": "mujmá",

"all year round": "fura bosór",

"Allah": "tamám jáhan or maalek ALLAH",

"allegation": "elzam",

"allege": "elzamlagar",

"alleged": "elzam lagaiyé",

"allergen": "elájin",

"alligator": "kuñír",

"allocate": "boratgoríde",

"allocated": "borat gorídiye",

"allotted": "borat gorídiye",

"allow": "ejazot do",

"allowance": "zef hóssa",

"allowed": "ejazot diyé",

"allowing": "ejazot der",

"almond": "badam",

"almost": "tokoriban",

"alocasia lowia": "hoñsufúl",

"alone": "hálika",

"along": "hañsabái",

"aloud": "dhoóñr abas",

"alpha": "alpha",

"alphabet": "hórof ókkol",

"m": "Moath Anis",

"already": "foóila loti",

"also": "yó/údda",

"alte": "bodol",

"alternate": "ekkán baade ekkán",

"alternative": "dusára - bodola",

"alternatively": "bodola gorí",

"although": "háñlaké",

"altogether": "beggún fúañti",

"aluminium": "aluminiem",

"alveolarsac": "féccar gura gura fódana",

"always": "hámica",

"am": "ói/asé",

"amazed": "ammúk óiye",

"amazing": "taajuippa",

"amazing place": "taajuippa zaga",

"amazing video": "taajuippa vidhu",

"amazing vidhiyu": "taajuippa vidhiyu",

"amazing view": "taajuippa mónzor",

"amazing voice": "taajuippa abas",

"amazingly": "taajuippa gorí",

"amber": "rooñitta lal",

"ambiguity": "dui haça",

"ambition": "muksót",

"ambitious": "hímmot wala",

"ambulance": "biaraimma garí embúléns",

"ambush": "hámla gorá",

"ameliorate": "aró bála goró",

"amendment": "sóiyigorá",

"amenities": "bála cúuidá",

"amenity": "gór or sáman",

"America": "Amerika",

"American": "Amerikar manúic",

"amid": "mazé",

"amidst": "mazé",

"ammunition": "guli",

"amnesty": "aám mafí",

"among": "bútortu",

"amount": "ak muth",

"amount of water": "fanír maf",

"amulet": "tabis",

"amusement": "háñci kúci gorá",

"an": "uggwá/ekkán",

"anabas fish": "hooi mas",

"anal canal": "molgór or rasta",

"analysis": "keén óiyede cek goróon",

"analyst": "tozziyakar",

"ancestor": "bafdada",

"ancestral": "bafdadar",

"ancestry": "zat",

"anchor": "zaáñs ór nogol",

"anchored": "nogol maijja",

"anchovy": "fuçí mas",

"ancient": "agor zobanar",

"and": "ar/adde/aró",

"anecdotally": "kissá dhóil gorí",

"anecdote": "kissá",

"angel": "fírista",

"anger": "guccá",

"angle": "kuna",

"angled": "kunakuinna",

"angled gourd": "zíañ",

"angry": "guccá óiyede",

"angry with me": "añár loi guccá",

"animal": "janwar",

"animosity": "ducmoni",

"ankle": "sulgirá",

"ankle joint": "sulgirár zura",

"annihilation": "áñzaiféloon",

"announce": "elangor",

"announced": "elan goijjé",

"announcement": "elan",

"announcing": "elan gorír",

"annoy": "frecan gor",

"anonymous": "namsára",

"another": "oinno uggwá",

"another place": "arek zaga",

"another time": "abbar",

"answer": "juab",

"answered": "juab diyé",

"ant": "fiáñra",

"antagonism": "ducmoni",

"antibiotic": "enthibaiothík",

"anticipated": "acágoijjé",

"anticipation": "acágorá",

"antipathy": "nofórot",

"antique": "furana",

"antiseptic disinfectant": "fukmaroni dabai",

"anus": "baárezadé rasta",

"anxiety": "sinta/dhor",

"anxiety disorder": "sinta biaram",

"anxious": "sinta",

"any": "honó - zehonó",

"any of these signs": "zehonó sáain iín",

"any one of these": "zehonó ekkán",

"anybody": "honíkka",

"anyone": "honíkka/zehoníkka",

"anyway": "zendila faros",

"anywhere": "zehonózaga",

"aorta": "gurudá loi lagaiya aséde rok ziyán é sáf lou óll óre gaar oinno híssat foóñsa",

"apart": "alok",

"apartheid": "zat-bákgorá",

"apartment": "bildhíng ór híssa",

"apparent": "zahér",

"apparently": "zahérgori",

"appeal": "apil gor",

"appear": "daháza",

"appearance": "cokol",

"appeared": "dahá giyé",

"appendices": "bor añtir ahéri matár théma",

"appendix": "bor añtir ahéri matár théma",

"appetite": "búk-laga",

"apple": "sép gula",

"appliance": "sáman/ham or ciz",

"applicable": "háçe/lage",

"application": "dorhás-tulá",

"apply": "laga/dorhás/aros",

"appoinment": "epoinmént",

"appoint": "mokoror gor",

"appointed": "mokoror goijjé/zimma diya",

"appointment": "mulakot/dolaóon",

"apportion": "híssa/bák gorá",

"appreciate": "mozaloifari",

"appreciation": "kimot raká",

"apprentice": "ham cíkoon",

"approach": "hañsé aiyó",

"approached": "hañsé aiccé",

"approaching": "hañsé aiyér",

"appropriate": "munaséf",

"appropriately": "munaséf gorí",

"appropriateness": "munaséfi",

"approval": "monzuri/ejazot",

"approve": "monzur gor/ejazot de",

"approved": "monzur goijjéde",

"approximately": "tokoriban",

"April": "Ipril mác",

"apron": "sámmor hoor hosara noóibélla",

"aqua": "faní",

"Arab": "Arob or manúic",

"Arabic": "Arobi",

"Arabic language": "Arobi zuban",

"arbitrary": "monzokká",

"arbitrate": "fáiselagor",

"arbutus": "lesu",

"architect": "arkiték",

"architecture": "arkiték or elóm",

"archive": "maháfuz/kopy",

"ardour": "dil or zoo",

"are": "ói/asé",

"area": "zaga/elaka",

"area between ear and eyes": "hansaba",

"area code": "elakar kóudh",

"argue": "matamati/hoijja do",

"argued": "tokorar goijjé",

"argument": "barábari",

"arid": "fúaná",

"arise": "uçé",

"arising": "uçér",

"arm": "dhuwáñ",

"armed": "hátiyar óla",

"armed force": "hátiyar ola fóus",

"arming": "hátiar lor",

"armpit": "booñl",

"armpit hair": "booñl or keñc",

"arms": "hátiyar/guli",

"army": "militiri",

"around": "tokoriban",

"arouse": "mon tulé",

"arrange": "bondubosgor",

"arranged": "tortib diyé",

"arrangement": "entezam",

"arranging": "entezam gorír",

"arrest": "gereftar/dóri loiza",

"arrested": "gereftar goijjé",

"arrival": "foóñsá",

"arrive": "foóñse",

"arrive on time": "thaim loi foóñso",

"arrived": "foóñisse",

"arriver": "foóñsoya",

"arriving": "foóñsér",

"arrogance": "tukabbori",

"arrogant": "anaçi",

"arrow": "tir - hóñla",

"arrow cokól": "tiror cokól",

"arrow shape": "tir or cokól",

"arson": "zolaidoon",

"arson attack": "ooin diya hámla",

"art": "fóna/nokcótula",

"artery": "kolób ottú lou neeledé rok",

"article": "ziníc/taarif",

"articulate": "cúndor gorí buzái zanedé",

"artificial": "nokoli",

"artillery": "boro gaán",

"artist": "sába tulóya",

"artwork": "fothú saba",

"arum-lobe": "hoñsur boñ",

"as": "hísafe/ísafe/zendila",

"as far as": "zeddúr duréfaro éddur",

"as far as possible": "zeddúr fare",

"as follow": "zendila nise asé",

"as if": "zeén néki - zeén néki",

"as many others": "oinno maincór dhoilla",

"as of": "hísafe",

"as soon as": "zeddúr toratori",

"as well as": "fúañti fúañti",

"as..as": "borabor",

"ascend": "uore uçó",

"ascent": "uore uçó",

"ascertain": "bálagori cekgor",

"ash": "sái",

"ash gourd": "sal kuáñra",

"Asia": "Asía",

"aside": "ekdháikka",

"ask": "fusár/aros",

"ask to do": "ará",

"asked": "fusár goijjé",

"asking": "fusár gorér",

"asleep": "gúm",

"aspect": "nozoriya",

"asphalt": "dúñna",

"Aspirin": "medicine for headache",

"Asr": "Asór thaim",

"asr": "asór",

"ass": "fun",

"assail": "doró gorí barbár hoijja gor",

"assailant": "háte théng e hoijja goróya",

"assassin": "kaatil/kúni",

"assassination": "kotól gorá",

"assault": "doró maramari",

"assaulted": "doró maramari diyé",

"assaulting": "doró maramari der",

"assemble": "dola/zoma",

"assembling": "dola/zoma-gorír",

"assent": "monzurgoróon",

"assert": "dawassátehoó",

"assess": "antazlaga",

"assessed": "antazlagagiyé",

"assessing": "andaz lagair",

"assessment": "saáisiti fáiseladoon",

"asset": "mal/cómbotti",

"asshole": "bekuf/gadá",

"assign": "mokoror gor",

"assigned": "mokoror goijjé",

"assignment": "esáinmén",

"assist": "musáda gor",

"assistance": "musáda",

"assistant": "musáda",

"assisted": "modot diyé",

"assisting": "modot der",

"associated": "córik goijjé",

"association": "anjamon",

"assume": "tháare",

"assumed": "mani loiyé",

"assure": "biccácde",

"aster": "tarafúl",

"astonished": "ammúikka",

"astonishing": "taajupgorá",

"astronaut": "asman ot zouya",

"astronomy": "nokcótara",

"asylum": "faná - sáara",

"asylum seeker": "faná tuoya",

"at": "éçe/ot-mazé",

"at all": "ebbre",

"at any other time": "oinno honó thaim ot",

"at the moment": "yaa/ehón",

"at the same time": "ekku bare",

"ate": "háiye",

"atlas": "atlas",

"atmosphere": "maahóul",

"atom": "éthom",

"atone": "koffarade",

"atop": "uore",

"atrocity": "entahá zulúm",

"attach": "fúañti laga",

"attached": "bazáiya/lagaya",

"attachment": "lagaiyahabos",

"attack": "hámla",

"attacked": "hámala goijjé",

"attacker": "hámala goróya",

"attacking": "hámala gorér",

"attempt": "kucíc",

"attempted": "kucíc goijjé",

"attempting": "kucíc gorér",

"attend": "uçí",

"attendance": "háñziri",

"attended": "uiththé",

"attendee": "háñzir óuya",

"attending": "uçér",

"attention": "díyan",

"attest": "moórmar",

"attire": "lebas",

"attitude": "andazenozor",

"attitudinal": "andaze nozor or",

"attorney": "ukil",

"attract": "thane",

"attracted": "thainné",

"attribute": "sifót",

"aubergine": "baiyon",

"auction": "nilam",

"audible": "fúnazade",

"audimeter": "odhimithar",

"audio": "awaz",

"audio aid": "abas modoti",

"audio settings": "abas mizan gorá",

"audit": "hísab cekgor",

"August": "Ogós mác",

"aunt": "mami",

"aunty": "mami",

"Australia": "Australía dec",

"Australian": "Australíar",

"authentic": "asóli",

"authenticate": "sóiyisábutgoró",

"authentication": "sóiyisábut",

"author": "lekóya",

"authorised": "adikar diyí",

"authority": "adikar",

"authorization": "adikari",

"authorize": "adikar de",

"auto": "garí",

"autocomplete": "nizefuragor",

"automatic": "nizebaze",

"autumn": "cít or cúru",

"avaiable": "asé",

"avail": "hamot nuaiye",

"availability": "háli táka",

"available": "asé",

"average": "mazíla",

"avert": "muk fírafél",

"avocado": "ekkisím ór háil gula",

"avocado oil": "abukadu tel",

"avoid": "basi ták(o)",

"awake": "tán",

"award": "enam",

"awarded": "enam diyagiyé",

"aware": "zane/hóbor asé",

"awareness": "zanai diya",

"away": "duré",

"awe": "dhorai izzot gorá",

"awesome": "ódorbaára taajuippa",

"awful": "dhor lage fán",

"awhile": "ekkená gorí",

"ax": "kuróil",

"axe": "kuróil",

"azan": "azan",

"b": "dusára nombór ór Rohingya hórof",

"babies": "leda fuain",

"baby": "leda fua",

"back": "fith",

"back pain": "dañrar bic",

"back side": "fisór dhák",

"backbite": "gibot/bodnam",

"backbiter": "gibot goróya",

"backbone": "dañrar áñdhdhi",

"backed": "taaid diyé",

"background": "fisór-mónzor",

"backpack": "fissábeg",

"backside teeth": "fisór dat",

"backup": "kopí gorí rak",

"backward": "fissá",

"bacon": "fúañná nundiya cúor or gusso",

"bad": "hóraf",

"bad deed": "hóraf amól",

"bad luck": "bodkismot",

"badge": "béij",

"badly": "buragorí",

"badminton": "bedhminton",

"bag": "hóilla",

"Baghdad": "Bogdad cóor",

"Baghdat": "Baghdat Bogdat cóor",

"baguette": "lamba ruthi",

"bail": "zabin",

"bait": "borkí",

"balance": "mizan",

"bald": "talufura",

"baldness": "talu",

"ball": "boól",

"ball pen": "boól pén",

"balloon": "fódana",

"bamboo": "bañc",

"bamboo boat": "bañcór búr",

"bamboo fence": "thiañra",

"bamboo hat": "thala",

"bamboo net": "bara",

"bamboo pipe": "bañcór suañ",

"bamboo rain shield": "zuñir",

"bamboo root": "bañc furoil",

"bamboo slip": "bara",

"ban": "maná/ruká",

"banana": "kela",

"banana prawn": "loilla isa",

"bandage": "bandís",

"banded krait": "áina áf",

"bang": "dúm dúm baijja",

"Bangkok": "Bangkók cóor",

"bank": "beéng/hálor hañsa",

"bank myna": "sona faik",

"bank note": "beéng ór thiañ",

"bankruptcy": "dewali",

"banner": "leikkáforda",

"bar": "córaf or duan",

"barbar": "nafit",

"barbaric": "raámótsára",

"barbecue grill": "gusso sékoni",

"barcode": "báakodh",

"bargain": "dorgor",

"barge": "bolazuri gól",

"barn": "haiñjja",

"barram undi": "kural mas",

"barren": "bázah",

"barrier": "oñsá",

"base": "asás/morkoz/guijja",

"based": "darmedar",

"bashing": "fiçoon",

"basic": "buniyadi",

"basic science": "buniyadi sáñis",

"basically": "asási hísafe",

"basin": "dúoni gaála",

"basis": "asás - guijja",

"basket": "báñir",

"basketball": "baskét boól",

"bat": "samba bañdor",

"bath": "gaadúo",

"bathroom": "gusólhána",

"bathtub": "gaadúoni gaála",

"batt": "meçá debellá norom ciz",

"battery": "bethari",

"battle": "larái",

"battlefield": "laráir moidan",

"bay": "doijjar góula",

"BBC": "Brithís ór hóbogwa ókkol",

"be": "ó/bon-iza",

"be aware": "kíalgoró",

"be kind": "norom ektiyar goró",

"be patient": "sobór gor",

"be sure": "taákitgor",

"beach": "doijjar sor",

"bead": "gañtó",

"beam": "tesfoór",

"bean": "félur dana",

"bear": "bálluk",

"beard": "darí",

"bearing": "bordac gorír",

"beat": "mar/fith/baijja",

"beaten": "maijjéde",

"beating": "mairfith",

"beautiful": "cúndor",

"beautiful moon": "cúndor san",

"beautifull": "cúndor",

"beautifully": "cúndoijja gorí",

"beauty": "cúndor",

"became": "óiye",

"because": "kiállahoilé",

"because of": "duara",

"become": "óiai",

"becoming": "ói aiyér",

"bed": "gadi/bedh/bistára",

"bed bug": "horangfuk",

"bed cover": "bedh kabár",

"bed sheet": "bicáni saddor",

"bed skirt": "bedh or fúlor hañsa",

"bedbuck": "horangfuk",

"bedding": "bistára",

"bedroom": "gúm or hamrá",

"beduin": "balur sorot sori háde manúic",

"bee": "modú - modúfuk",

"bee-haive": "modúr-bahá",

"beef": "gouru gusso",

"been": "aiccíl",

"beer": "bálluk",

"before": "age - muúntu",

"before dawn": "fuáiñtta",

"before this": "yaar age",

"beforehand": "foóila loti",

"beg": "mag(o)",

"began": "cúru goijjé",

"beget": "fuain biya",

"beggar": "hóratmoni",

"begger": "hórat mooni/bíkari",

"begin": "cúrugor",

"beginning": "cúru",

"behalf": "torfórtu",

"behave": "sol-é",

"behaved": "soillé",

"behaving": "soler",

"behavior": "sólluk",

"behaviour": "solasol",

"behind": "fisóttu",

"being": "wojud óir",

"being patient of pain": "zimháçi tákoon",

"Belgiem": "Beljiem",

"Belgium": "Belgium or cóor",

"belief": "biccác - iman",

"believe": "biccác gor",

"believed": "biccác goijjé",

"believer": "imanwala",

"bell": "beél",

"bell pepper": "dhoóñr moris",

"belligerent": "maramarit cámil aséde",

"belly": "tolfeth",

"belly - tummy": "zúla",

"belong": "taaluk-ór",

"belong to her": "ibár",

"belong to him": "itar",

"belong to them": "tarár",

"belong to us": "añárar",

"belong to you": "tuáñrar",

"belonged": "honíkkár óon",

"belonging": "sáman/mal",

"below": "nise",

"belt": "duali/beélth",

"bench": "bangkú",

"bend": "beháñ ekkán",

"beneath": "nise",

"beneficial": "fáaidaola",

"beneficiary": "fáaida fooya",

"benefit": "fáaida/laf/munafá",

"benign": "norom-sórom",

"bent": "behañ",

"bereavement": "hárani furani",

"berry": "beeri",

"berthed": "nogol maijja",

"Berut": "Berut cóor",

"beside": "dháhortu",

"besides": "baade",

"best": "sóbse gom",

"bestow": "atáforma",

"bet": "zibbat",

"betel": "fan",

"betel nut": "súari",

"betrothed": "mangni goijjé",

"better": "beétor/bicí gom",

"between": "bútore/mazé",

"beyond": "duré",

"bi": "dunú mikka húaic asé ",

"bi-monthly": "macé máce",

"bi-weekly": "háfta-háfta",

"bias": "taasubi",

"bible": "kriccen or dórmo kitab",

"Bible": "Kricen or kitab",

"biceps": "dhuwáñ",

"bicycle": "théngari",

"bid": "buli",

"big": "dhoóñr",

"big city": "boro cóor",

"big knife": "bordoo",

"big smoke": "boro dúañ",

"big toe": "théng or buijjá ouñl",

"bigger": "dhoóñijja",

"biggest": "ebbre dor",

"bigotry": "ekkuippa",

"bikini": "lendhabazu/bodoli",

"bilateral": "dunú sáith cámil aséde",

"bill": "bil",

"billboard": "bílbudh",

"billion": "kuthí",

"bin": "sátar dhabba",

"bind": "bañdó",

"binder": "bañdóni",

"bindi": "síndur",

"binoculars": "zurmí",

"bio data": "zati maalumat",

"biographical": "ziboni",

"biology": "baiou fonná",

"biplane": "dui thala fak plane",

"bird": "faik",

"birth": "zormo",

"birth certificate": "foidaci sarthifikéith",

"birth control": "zormo kontróul",

"birthday": "zonomdin",

"birthmark": "zormo dak",

"biscuit": "biskuth",

"bishop": "fadúri",

"biskut": "biskuth",

"bison": "bison janwar",

"bit": "tukuça",

"bit a little bit": "ekkenágori",

"bitch": "kuttaya",

"bite": "hooñrmar",

"bitter": "tita",

"bitter gourd": "tita horola",

"bitter melon": "horola",

"bitterer": "bicí tita",

"bitterest": "ebbre tita",

"black": "hala-rong",

"black berry": "hala beri",

"black goby": "hala baila",

"black seed": "halazira/hábbar sóuda",

"black-faced woods wallow": "hanhaça faik",

"blackboard": "blábbudh",

"blacken": "halagor",

"blackmail": "dómkidi foisá usúl gor",

"bladder": "mutor sála",

"blade": "bleith",

"blame": "hosúri",

"blank": "háli",

"blanket": "hombol",

"blast": "fúça",

"blaze": "thathkaça ooin",

"bleeding": "lou neeler",

"blend": "miyáñ",

"bless": "borkot/duwa",

"blessed": "borkoti",

"blew": "fúu diyé",

"blind": "añdá",

"blindness": "añdá",

"blink": "miçíng gor",

"bloc": "decór blók",

"block": "sair faiththá",

"blockade": "gulgorí bongorá",

"blocked": "bongoijjá",

"blog": "blog",

"blonde": "lal óloiddá sul ola manúic",

"blood": "lou",

"blood pressure": "louwór frecar",

"bloodied": "lou lán goijjá",

"bloody lily": "boól fúl",

"blot": "cíyair dak",

"blouse": "blóus",

"blow": "fúude/uraido/fúla",

"blow air": "boiyar baár",

"blown": "urigiyói",

"blue": "cúrma/asmani rong",

"blue-tailed bee-eater": "meiththa fúndora",

"blueberry": "cíyaiberi",

"blunt": "bútaá/moinna-sára/dár-sára",

"blur": "añccwá",

"blurred": "miyundá dekéde",

"boal": "bual mas",

"board": "boóudh",

"boat": "buth/noo",

"bodied": "gaa/jisím/bol-óla",

"bodies of waters": "fanír jisím óll",

"bodily": "jisími",

"body": "gaa/jisím",

"body expose limit": "sotór",

"body part": "furuza",

"body parts": "jisím ór paáth óll",

"bogus": "sóiyi noó",

"boil": "godhgoça",

"boiling water": "godhgoçar de faní",

"boisterous": "uzor ola - ujoijja",

"bold": "mutha",

"bolded": "waazégoijjá",

"bolster": "mozbutgor",

"bolt": "bolthú",

"bomb": "buúm",

"bombardment": "bumbari",

"bombay duck": "loiththa mas",

"bona": "sóiyi",

"bona fide": "asól",

"bond": "bañdá",

"bone": "áñdhdhi",

"bone marrow": "fáñc",

"book": "kitab",

"booking reference": "bukíng",

"bookmark": "kitabor hót",

"boom": "boro abas",

"boot": "borzuta",

"booth": "tíyaibar zaga",

"booty": "mal yá thiañ bekaanuni loifélon",

"border": "boóudhar",

"border area": "címanar zaga",

"bore": "bezarlage",

"bored": "alcílager",

"boring": "alcí lage",

"born": "foida óiye",

"borough": "elaka",

"borrow": "udárlo",

"borrowing": "udár",

"boss": "maalek",

"both": "dunúwa",

"bother": "frecan gor",

"bothersome": "frecani goróuya",

"bottle": "botol",

"bottle gourd": "hodú",

"bottle gourd flower": "hodú fúl",

"bottle gourd leaves": "óuñri hák",

"bottled gourd": "hodú",

"bottom": "tola",

"bougainvillea": "habosfúl",

"bought": "kinné - kinagiyé",

"bounce": "waapes fáldai uçé",

"boundary": "gírá",

"bowel": "bor añti",

"bowing": "rukú",

"bowl": "gaála",

"box": "sónduk/bóx",

"boxed": "kuththa bóijja",

"boy": "morot fua",

"boys": "fuain",

"BP": "louwór precar",

"bra": "bodoli (maiya fuain dór)",

"bracelet": "hátor cin",

"brag": "gof - gof mar",

"braid": "sul or bini",

"brain": "demak",

"brain tumor": "demakor thumar",

"brainy": "demakola",

"branch": "híssa",

"brand": "márha",

"brass": "fitol",

"brave": "hímmotola",

"bravely": "hímmot gorí",

"bravery": "baáduri",

"bravo": "caabác",

"breach": "báñgo",

"breached": "báingge",

"breaching": "báñger",

"bread": "ruthi",

"breadth": "couça",

"break": "báñgo",

"breakage": "bángga",

"breakdown": "tíaigiyói",

"breakfast": "beínnár nasta",

"breaking": "bánggasúra",

"breaking news": "torutaza hóbor",

"breast": "dut - maiya fuain dór dut",

"breast bone": "hórina",

"breastfeeding": "maar dut háboon",

"breath": "niáñc",

"breathe": "niáñclo",

"breathing": "niácthan",

"breed": "nosól",

"brexit": "neelizaa",

"brick": "ith",

"brickbat": "ith bángga",

"bride": "boou",

"bridge": "ful/breij",

"bridging": "visa bréijing víza",

"brief": "baiththá/muktosor",

"briefed": "baiththá gorí hoiyé",

"briefing": "muktosor gorí hoór",

"briefly": "baiththá gorí",

"bright": "foór",

"bring": "anó/loian",

"bring together": "fúañti anó",

"bringing": "loianér",

"brinjal": "baiyon",

"Britain": "Brithíc",

"brittle": "mormoijja",

"broad": "ceththá",

"broaden": "borogor",

"broader": "bici ceththá",

"broadly": "aám hísafe",

"broccoli": "háil hoppi",

"broke": "báiñgge",

"broken": "báñgga",

"bronchi": "norolir guijja",

"bronchioles": "féccar dhoóñr noroli",

"broom": "fúroni",

"brother": "bái",

"brother's wife": "zal",

"brother-in-law": "bowór bái",

"brought": "ainné",

"brown": "roñiththa",

"browse": "tuai-neela",

"browser": "tuai-neelai-douya",

"bruise": "añsá",

"bruised": "añsá háiye",

"bruising": "añsá hár",

"brush": "burus",

"brutal": "rahámsára",

"brutally": "rahámot sára",

"bucket": "balthí",

"Buddhist": "Buddá ré fuñzoiya",

"budget": "bajéth",

"buffalo": "sela muic",

"bug": "horangfuk",

"build": "banaituló",

"building": "bildhíng/emáara",

"built": "boinné/bana-yé",

"built-in": "banaiya",

"bulb": "battir boól",

"bulbul": "bulbuli",

"bulk": "dhoóñr",

"bullet": "guli",

"bullied": "tonggoijjé",

"bully": "tongor",

"bullying": "gundhagiri",

"bund": "ail",

"bundle": "buñda",

"bunk": "maáni sára",

"bunny": "hórguc or sóo",

"burden": "fuñzá",

"burdensome": "bicí mockil",

"burg": "debal diya town",

"burger": "bon",

"burglary": "suri",

"buried": "gañrai félaiye",

"burn": "zola",

"burned": "fura",

"bus": "baás",

"bus station": "baás esthicén",

"bush": "zoóñl , jádh duwa",

"business": "hasharbar",

"busy": "hamot/duadit",

"but": "mogor/lékin",

"butcher": "hocái",

"butt": "mangula",

"butter": "bathár",

"butterfly": "hoddafuti",

"buttock": "mangula",

"buttocks": "manggula óll",

"button": "butang - bothón",

"buy": "kin(o)",

"buying": "kinir",

"buying and selling": "besakina",

"buzz": "bénbenóon",

"by": "áta/ottú",

"by all": "ókkole/beggúne",

"by chasing": "duñrai",

"by coordinating": "miliyóre",

"by drying": "fúaiyóre",

"by force": "bolazuri",

"by giving life": "zandi",

"by meeting": "mili",

"by minute": "miníth hísafe",

"by second": "sekén hísafe",

"by staying": "táki",

"by submitting 30 day nothís": "30 din nothís zoma goríyóre",

"by themselves": "tará nizebaze",

"by thinking": "báfi",

"by time": "thaim hísafe",

"byte": "báith",

"cabbage": "bañdá hoppi",

"cabin": "kebín",

"cabinet": "almali",

"cable": "kebel/tar",

"cage": "fizara/bahá",

"Cairo": "Kairou cóor",

"cake": "kek",

"calcium": "kelsiem",

"calculate": "hísaf",

"calculator": "hísaf goroní",

"calendar": "kalendhar",

"calender": "kelendhar",

"calf": "doóñra",

"call": "dhak",

"call me back": "abbar koól gor",

"callback": "waapes dhak",

"called": "dhaikké",

"calling": "dhaker",

"calm": "nizám gor",

"calming": "nizám ór",

"calta": "hatal mas",

"camal": "uñth",

"camcorder": "vidu kemra",

"came": "aiccé",

"camel": "uñth",

"camera": "kemera",

"camp": "keém",

"campass": "kempas",

"campfire": "keémor ooin",

"campus": "kempás",

"can": "far(o/e)",

"can apply": "lagai fari",

"can be": "faribóu",

"can opener": "foth kúloni",

"canal": "zurá",

"Canberra": "Kenbera thoón",

"cancel": "kensel",

"cancelled": "kensel goijjé",

"cancer": "kensar",

"candidate": "ummitwar",

"candle": "mumbatti",

"cane": "girá óla gas",

"canine": "cíyaikka dat",

"canister": "thoin",

"cannibal": "maincór gusso hóuya",

"cannot": "nofaré",

"canoe": "noo",

"canteen": "kenthín",

"canthus": "sugór hañsa",

"canvas": "doró hóchoiccá hoor",

"canvassed": "búth thana giyé",

"cap": "kep/teikka",

"capability": "kabeliyoti",

"capable": "kaabel",

"capacity": "salahiyot",

"capital": "rasdán",

"capital letter": "dhoóñr hátor hórof",

"capsicum": "dhoóñr moris",

"captcha": "képca",

"caption": "mouzúr nam",

"capture": "dóro",

"captured": "dóijje",

"car": "garí",

"car seat": "garír síth",

"car showroom": "garír cóurum",

"carbon": "karbun",

"card": "kaádh",

"cardamom": "elasi",

"cardiac": "dil or biaram",

"cardio": "kolób lói taaluk aséde",

"cardiopulmonary": "kolób arde fécca lói taaluk dé",

"care": "dekbal",

"do care": "dekbal",

"careful": "úñciar",

"carefully": "úñciarigorí",

"caregiver": "dekbal goróya",

"careless": "faththa sára",

"carer": "dekbal goróya",

"caretaker": "dekbal goróya",

"carnage": "bicí dukdi mariféla",

"carotid": "gondanar cáa rok",

"carpenter": "mistíri",

"carpenter bee": "bíñyor",

"carpet": "haling",

"carried": "boói loigiyé",

"carrot": "óloiddá mula",

"carry": "boói loiza",

"carried": "loiza",

"carrying": "loiza",

"case": "keis",

"case study": "keis mutála gorá",

"caseworker": "keis hamgoróya",

"cash": "nogot",

"cashew fruit": "tham gula",

"cashew nut": "thamor dana",

"cashew tree": "tham gas",

"cashier": "kecíyar",

"cashima": "keñça gula",

"casual": "bekaida",

"casualties": "moota ókkol",

"casualty": "duk faiyéde manúic",

"cat": "bilai",

"catalyst": "bodoli bélla modot gorá",

"cataract": "sugór biaram",

"catastrophic": "bicí boro",

"catch": "dóro",

"categories": "kisím ókkol",

"categorised": "kisím kisím goijjá",

"categorize": "kisím kisím goró",

"category": "kisím",

"caterer": "hána bondubos goróya",

"catering": "hána bondubos gorér",

"catfish": "bilaitimas",

"cattle-shed": "gouru-sóol",

"caught": "dórat foijjé",

"cauliflower": "fúl hoppi",

"cause": "gor",

"cause to do": "gorá",

"caused": "gorágiyé",

"causing": "gorér",

"cave": "gañt",

"cavity": "golar sal",

"CCTV": "CCTV telivicén",

"CD": "komputar or rekáadh",

"ceased": "tíaigiyó - bon óigiyói",

"ceiline": "sót",

"ceiling": "domdoma",

"ceilling fan": "sal or fangká",

"celebrate": "kúcibana",

"celebration": "idd",

"cell": "seél",

"cemetery": "hoborostan",

"cent": "foisá",

"center": "mazé",

"centered": "mazémaijja",

"centigrade": "santigreidh",

"centimetre": "santimitar",

"centipede": "siañra",

"central": "mazór",

"centre": "senthar/morkoz",

"century": "cót bosór",

"ceremony": "cóbah",

"cermet": "sarméth",

"certain": "kessú",

"certainly": "hámahá gorí",

"certificate": "sónot",

"certified": "tosdikgoijjá",

"certify": "tosdikgor",

"cervix": "baicca danir doroza",

"chain": "cin/khora",

"chair": "kurusí",

"chairman": "rois/ciyármen/munafék",

"chairmanship": "murobbiana/ciyárméni",

"chalk": "cok",

"challenge": "celénc",

"champak": "sambafúl",

"champion": "cempien",

"chance": "mouka",

"chandelier": "zúnha",

"change": "bodola",

"changing": "bodol(o)",

"changed": "bodoillé",

"changer": "bodoloni",

"changes": "tobdili ókkol",

"channel": "cenel/zurá/nalá",

"chant": "fúañti guzor/duwa mago",

"chanted": "fúañti guzoijjé",

"chanting": "fúañti guzorer",

"chaos": "oulzóul",

"chapter": "híssa",

"character": "hásolot",

"characteristic": "húbi",

"charge": "elzam/anjam(lage)",

"charged": "elzam lagaiyé",

"charger": "cajar",

"charging": "elzam lagar",

"charity": "sótkaháirat",

"Charlie": "C' yor koudh lofzó",

"charm": "cúndor/comka",

"charter": "kaanuni sónot",

"chase": "lora",

"chastisement": "sáñza",

"chat": "gopmaroon",

"cheap": "óosta",

"cheat": "dúkado",

"check": "sek/cek",

"checked": "cek goijjé",

"checking": "cek gorér",

"checklist": "cekgoríbar liíst",

"cheek": "galsaba",

"cheekbone": "zaimor háñthdhi",

"cheerful": "kúcióla",

"cheese": "císs - mokkón",

"cheese slider": "císs forol",

"cheese stick": "císs lorá",

"cheetah": "citabag",

"chef": "rañdár masthor",

"chemise": "miala fuain dór semí",

"chemist": "dabai banoya",

"chemistry": "kemisthri",

"chequebook": "cek or kitab",

"cherry": "kimis gula",

"chest": "sínah",

"chest chair": "sínar keñc",

"chestnut": "cahbulut",

"chew": "saba",

"chick": "kurásso",

"chicken": "kurá gusso",

"chicken meat": "kurá gusso",

"chickpea": "sonabuth",

"chief": "boro",

"child": "fua",

"childcare": "fuain sámaloya",

"childhood": "baicfoni",

"childish": "fuasiañra",

"childless": "fuain sára",

"childless couple": "fuain sára juça",

"children": "fuain",

"chilli": "moris",

"chills": "cít",

"chimpanzee": "gozila",

"chin": "zaim",

"China": "Sina - Sinar dec",

"chip": "cíp",

"chisel tooth": "baçoilla dat",

"chitlins": "beça cúor or añti",

"chocolate": "cókleith",

"choice": "foson",

"cholesterol": "kolestrol",

"choose": "basílo",

"choose either one": "honó ekkán basó",

"choosing": "basílor/fosón gorér",

"chopstick": "hóñla",

"Christ": "Kríst",

"Christian": "Kriccen",

"Christmas": "Krísmás",

"chromium color": "tamar rong",

"chronic": "lamba biaram",

"chronological": "bosór loi tortib diya",

"chronology": "tuariki tarík ókkol ór elóm",

"chunk": "múth",

"church": "giriza",

"cigar": "cuñça",

"cigarette": "sígeréth",

"cilantro leaf": "kétir boór fata",

"cinema": "sínama",

"cinnamon": "daalsiní",

"circle": "gul",

"circle shape": "gulguilla cokól",

"circular": "gul",

"circular vowels": "fakkáraiya zerzobor ókkol - ai-ei-oi-ui-au",

"circulation": "fakkái gúroon",

"circumcice": "súnnot gorá",

"circumciced": "súnnot goijjé",

"circumference": "fakkáraiya",

"circumstance": "háalot",

"circumstances": "háalot óll",

"citizen": "decóitta",

"citizenship": "decóittayi",

"citizenship certificate": "decóittayi sarthifikéith",

"citrus": "fáttara gula",

"city": "cóor",

"civc": "manúic",

"civic": "sivík",

"civil": "aám manúic",

"civil engineer": "gór bañdedé injiniár",

"civil rights laws": "decóitta hókuki kaanun óll",

"civil servant": "hókumotor manúic",

"civilian": "fóus arde fulic noóde manúic",

"civilization": "cáictagiri",

"claim": "daawa/daabi",

"clap": "talimar(o)",

"clapped": "talimar(o)",

"clapping": "talimar(o)",

"clarification": "sófaiyi",

"clarified": "sáfgori buzáiye",

"clarify": "waazégor",

"clarity": "sáf",

"clash": "maramari/hoijja",

"class": "kláss",

"classic": "furana",

"classification": "tobka forók gorá",

"classified": "cupaiya",

"classmate": "kláss or fúñaijja",

"classroom": "kláss ór hamrá",

"clavicle": "golar keñsi",

"clean": "sáf",

"cleaned": "sáf goijjé",

"cleaner": "sáf goróya",

"cleaning": "sáfgorér",

"cleanliness": "sáfsutura",

"cleanse": "fúraifél",

"cleansing": "manúic fúraiféloon",

"clear": "sáf",

"clear-cut": "sáfsaf",

"clearance": "sáfgorá",

"cleared": "sáf goijjé",

"clearing": "sáfgorér",

"clearly": "sáfsáf gorí",

"clever": "salak",

"click": "kilíkgor",

"client": "gaák",

"climate": "moóusom",

"climb": "baái uçó",

"clinic": "kilínik",

"clinical": "daktori",

"clinically": "daktori hísafe",

"clipboard": "klipboudh",

"clipper": "zagana",

"clock": "góuçi",

"clock arm": "góuçir keña",

"clogged": "naçi giyói",

"close": "bongor",

"closed": "bon",

"closely": "hañsé hañsé",

"closer": "hañsé",

"clot": "lou wór dola",

"cloth": "asílaiya hoor",

"cloth strip": "hoor or lamba tukuça",

"clothes": "hoor-suor",

"clothing": "hoor ókkol",

"cloud": "miyóla - miyúla",

"cloudy weather": "abár",

"club": "kláb",

"clue": "araura",

"cm": "santimitar",

"co": "córik",

"Co-parent": "Córik-baf",

"coal": "fattór ór añára",

"coalition": "entehát",

"coat": "kuth",

"coccyx": "dañrar matá",

"cock": "rata kurá",

"cockroach": "teillasura",

"cockscomb": "ratar tassí",

"coconut": "naijjol",

"coconut milk": "naijjol or dut",

"coconut oil": "naijjol tel",

"coconut tree": "naijjol gas",

"cocunut oile": "naijjol tel",

"code": "koudh",

"coerce": "mojbur gor",

"coerced": "bolazuri",

"coercion": "zobór",

"coercive": "bolazuri",

"coffe shop": "kofí duan",

"coffee": "kofí",

"cohesion": "militáka",

"cohesive": "ekdhoilla óde",

"coin": "foisá",

"coincide": "ettefakan",

"coincided": "ektefakan óiye",

"coincidental": "ektefakan",

"cold": "thándhah",

"cold water": "thándha faní",

"coldwater": "thándha faní",

"collaboration": "sáñt do",

"collar": "kolár",

"collar bone": "kolar",

"collared myna": "júiththa",

"collator": "maalumat zoma goróya",

"colleague": "ham or fúñaijja",

"collect": "thiañ tul",

"collected": "thiañ tuillé",

"collection": "thiañ tulá",

"collectively": "fúañti",

"college": "koóléij",

"college and career ready": "koléij arde hamtua toiyari",

"collision": "dúc",

"colon": "bor añti",

"color": "rong",

"colorful": "sparking jílmil jílmil",

"coloring": "zála",

"colorless": "rongsára",

"colors": "rong ókkol",

"colour": "rong",

"colum": "hámba",

"column": "thúni",

"comb": "óni",

"combat": "larái",

"combating": "larái gorér",

"combination": "miyóon",

"combine": "zurade/fúañti/mila",

"combined": "milaiyé",

"come": "ai(yó)/aiccé/aáifélaiye",

"come acros": "ekule ai",

"come down": "lam",

"come forward": "age aiyó",

"come in": "bútore ai",

"come off it": "neeli aiza",

"come out": "neeli ai",

"come quickly": "zohóntohón aiyó",

"come up": "uore ai",

"comedian": "galú",

"comfort": "aram",

"comfortable": "aramor",

"coming": "aiyér",

"comitted": "waada goijjí",

"comma": "koma",

"command": "hókum",

"commander": "komándhar",

"commence": "cúru óon",

"commenced": "cúru goijjé",

"commencement": "ebbre cúru",

"commencing": "cúru gorér",

"comment": "nozoriya",

"commented": "nozoriya diyé",

"commerce": "karubar",

"commercial": "tejaroti",

"commission": "komicén",

"commissioned": "zimma diyé",

"commissioner": "zimma dar",

"commit": "fakka eradagor",

"commitment": "waada gorá",

"committed": "janedile",

"committed a crime": "ekkán hosúri goijjé",

"committee": "komithí",

"committing": "zuban der",

"common": "aám",

"common green shark": "thippí",

"common pochard": "hórulla hañc",

"common tailord bird": "fútha thuúní",

"commonly": "aám hísafe",

"commonly used": "aám hísafe estemal goráza",

"Commonwealth": "Komónwél",

"communicate": "hotábattara hoó",

"communicating": "taaluk gorá",

"communication": "taalukat",

"communique": "córkari elan",

"community": "sómaj/koum/jomaát",

"community health service": "sómaji sehétor hédmot",

"community service": "sómaji hédmot",

"compact": "zomaiya",

"company": "kumpani",

"comparable": "borabor",

"compare": "borabor gorí saá",

"compared": "borabor gorí saiyé",

"comparison": "borabor gorí soón",

"compartment": "hamrá",

"compel": "mojbur",

"compensation": "gunári",

"compete": "mukabela gor",

"competence": "kaabeliyoti",

"competing": "mukabela gorér",

"competition": "zibbat",

"compiled": "maalumat dola goijjé",

"complain": "cékayotgor",

"complained": "cékayot goijjé",

"complaint": "cékayot",

"complete": "furagor",

"complete dark": "gúdhguiththa añdár",

"completed": "fura goijjé",

"completely": "furafuri gorí",

"completely closed": "kule hale bon",

"completeness": "furafuri",

"completion": "hótom/fura/mukammel gorá",

"complex": "cíak - behañsúra",

"compliant": "manizadé",

"complicated": "cúkcaikká",

"complication": "betala",

"compliment": "taarif",

"comply": "manizo",

"component": "furuza",

"compose": "lekó",

"composition": "milaiya",

"compound": "kompón",

"comprehend": "buzé",

"comprehension": "buzíbar kaabel dé",

"comprehensive": "wazé goijjá",

"comprised": "cámil aiccíl",

"comprising": "cámil gorér",

"compromise": "beec hom gor",

"compromised": "agefisé goijjé",

"compulsion": "bolazuri/mojburi",

"compulsory": "laazim/fórozi",

"computer": "komputar",

"con": "hóraf",

"conceded": "mani loiyé",

"concentrate": "díyande",

"concentrated": "gañçá",

"concentration": "díyan",

"concept": "fíkira/báfa/híyal",

"concern": "báfana",

"concerned": "sinta goijjé",

"concerning": "baabote",

"concerns": "sinta ókkol",

"concise": "muktosor",

"conclude": "notija neela",

"concluded": "notija neelaiyé",

"conclusion": "notija",

"concrete": "doró",

"concussion": "matát barihái biyúñ óon",

"condemn": "hóraf hoó",

"condemnation": "hóraf hoón",

"condition": "háalot",

"conditional": "corót loi",

"conditioning": "háalot ot anér",

"condom": "miloni fódana",

"condoning": "mafde",

"conduct": "anjamde",

"conducted": "goijjé",

"conducting": "gorér",

"cone": "lezar cokól",

"conference": "konferéns",

"conferred": "mocuwara goijjé",

"confess": "ekerar gor",

"confidence": "biccác",

"confidential": "gufoniya/húfia",

"confidentiality": "raz",

"configurable": "tortibgorífare",

"configuration": "tortib",

"configure": "tortibgor",

"confirm": "tosdik gor",

"confirmation": "tosdik",

"confirmed": "tosdik goijjé",

"conflict": "hoijja",

"conflicting": "nobonerdé",

"confrontation": "muámíkka mukabela",

"confronted": "muámíkka marami goijjé",

"confronting": "muámíkka marami gorér",

"confuse": "cúkcak ófan gor",

"confused": "behañsúra",

"confusion": "oulfóul",

"congratulation": "mubarek",

"congregation": "jomát",

"conjunction": "mila/zura",

"connect": "raabeta gor",

"connection": "juçr",

"conscious": "húñc asé",

"consciousness": "húñc",

"consensus": "ettefak rai",

"consent": "rezamondi",

"consequence": "notiza/anjam",

"consequent": "notizar/anjamor",

"conservative": "héfazotdan",

"conserve": "héfazot gor",

"consider": "báfa/sinta",

"considerable": "gomgori bicí",

"considerably": "bicí gorí",

"consideration": "gour gorá",

"considered": "báfa giyé",

"considering": "báfir",

"consiquence": "notiza",

"consist": "cámil asé",

"consistant": "ekku niyomor",

"consistency": "ekku dhoilla táka",

"consistent": "musolsól",

"consistently": "ekku dhoilla gorí",

"consolidate": "doró gor",

"consolidated": "doró goijjé",

"conspiracy": "hóraf plan",

"constabulary": "fulic or hédh kuwathár",

"constant": "nobodoledé",

"constant put downs": "lagatar nizegorá",

"constantly": "lagatar",

"constitute": "cámil asé",

"constitution": "kaanun",

"constitutional": "kaanuni",

"constitutionl law": "ain kaanun",

"constrain": "rukawoth",

"construct": "banaitulé",

"constructed": "banaiyé",

"construction": "bañ/banoon",

"constructive": "banaituléde",

"constructor": "banaitulóya",

"construed": "buijjé",

"consult": "biasana gor",

"consultation": "mocuwara",

"consultative": "mocuwara goréde",

"consulted": "mocuwara goijjé",

"consumer": "estemal goróya",

"consumers": "hóuya ókkol",

"contact": "taalukat",

"contact details": "taaluki tofsil óll",

"contain": "táke",

"container": "konthinár",

"containerised": "toin bóijja",

"containing": "bóra",

"contemplated": "báfa sinta goijjé",

"contemporary": "ehónor",

"content": "mowad",

"contest": "zibbad/mukabela/barábári",

"context": "moton",

"continental": "mahadecór",

"contingency": "óifarede mosibot",

"contingent": "zomát",

"continue": "zari/musolsol/lagatar ták",

"continued": "zari raikké",

"continuing": "lagatar gorér",

"continuous": "lagatar",

"continuously": "lagatar gorí",

"contraband": "gair kaanuni mal",

"contraceptive": "fua noóde dabai",

"contract": "théka",

"contract goijjá": "konthrek goijjá",

"contracted": "théka loiye",

"contractor": "thékadar",

"contractual": "thékadari",

"contractually": "habosnomaloi",

"contradict": "uldha ó",

"contrary": "uldha",

"contrast": "borabor",

"contribute": "híssado",

"contributed": "modot diyé",

"contributing": "modot gorér",

"contribution": "hórat/sótka/zokáat/musáda/modot/hémayot",

"control": "kontróul",

"controlling": "kontróul gorér",

"controversial": "fósaitta",

"controversy": "ektelaf",

"contusion": "samor gussor gáa",

"convened": "boiçók goijjé",

"convenient": "munaséf",

"convention": "boiçók",

"conversation": "hotá báttra",

"conveyed": "boiyan goijjé",

"convicted": "mujirim dórafore",

"convicted of a crime": "mujrimi hosúrbon",

"conviction": "sáñza",

"convince": "mana",

"convincing": "manaifélaiye",

"convinced": "manaifélaiye",

"cook": "randa/rañdóya",

"cooked throughly": "bálagorí raindé",

"cooker": "rañdóni",

"cooking oil": "háibar tel",

"cooking pot": "bát rañdéde decci",

"cooking salt": "háibar nun",

"cool": "zura - thándhagor",

"cooperate": "sáañt de",

"cooperation": "modot goróon",

"cooperative": "modot goréde",

"coordinate": "milizúligor",

"coordinated": "mili modot goijjé",

"coordination": "mili modot gorá",

"coordination of your care": "tuáñr dekbal or sáñtdiya",

"coordinator": "modot goróya",

"cope": "ófan gor",

"copy": "nokolgor",

"copied": "kopí/copígoijjé",
"coping": "kopí/copígoijjé",
"copied": "kopí/copígoijjé",

"coral": "síloin",

"cordless dril": "tarsára fúroni",

"core": "maza/buñadhdhi",

"coriander": "boórfata",

"coriander leaves": "boórfata",

"corn": "mokka gula",

"corner": "kuna",

"cornerstone": "guijjali",

"coronavirus": "kuruna váiras",

"coronial": "acanok moot óiyede",

"corpse": "mora/murda-manúic",

"correct": "sóiyi",

"correction": "sóiyi gorá",

"correctly": "sóiyigorí",

"correspondence": "ciñçí análoza",

"corroborate": "manilo",

"cosmetic": "cúndoror",

"cost": "hóssa/kimot/dam",

"cost incurred": "hóssa aiccéde",

"cotton": "fúñta",

"couch": "súfa",

"cough": "hañc",

"cough up": "hañcóon",

"could": "fariyóum",

"council": "konsil",

"counsel": "nisíyot gor",

"counselling": "mocuwara",

"counselor": "mocuwara douya",

"count": "gon",

"counted": "gonifélaiye",

"counting": "goner",

"counter": "uldha",

"counteract": "gurimissi gor",

"counterpart": "ekkudhoilla hamgoróya",

"country": "dec/mullúk",

"country side": "gangsáith",

"couple": "zur(a)",

"coupon": "dam homadé kupon",

"courage": "hímmot",

"course": "kuúrs",

"court": "adalot",

"court of law": "adalot",

"courtesy": "ehéteram",

"courtyard": "uçán",

"cousin": "sañsato bái/bóin",

"covenant": "waada",

"cover": "gúroni",

"covered": "kabár goijjé",

"covering": "kabár gorér",

"coverage": "kabáreij",

"covered": "gúijje",

"covered up": "záfai raikké",

"covering": "gúrider",

"cow": "gai/gouru",

"coward": "sélfadura",

"cowardly": "sélfadura gorí",

"coy": "córmade",

"CPR-Cardio Pulmonary Resuscitation maincór": "kolób arde fécca ré jan anóon ar úñc goróon",

"CPU": "komputar or kolób",

"crab": "kiáñra",

"crabbed": "guccá óde",

"crack": "báñgo",

"crackdown": "biajjabari",

"cracker": "biskuth",

"cradle": "dhúloin",

"crag": "usol dár fattór",

"cramp": "undur uçé",

"cramped": "kutakuitta",

"cranberry": "kerénberi",

"crane": "kerein",

"cranial": "demak taaluk rakéde",

"cranium": "matár maala",

"cranny": "gura fáça",

"crash": "sóittor sán ó",

"crawl": "ámbur",

"crawler": "bicí asté soledé jiníc",

"crazy": "fool",

"crazy man": "foola manúic",

"crazy women": "foola manúic",

"cream": "krím",

"crease": "kusi",

"creasent shape": "san or cokól",

"create": "foidagor",

"created": "foidagoróon",

"creating": "foida gorér",

"creation": "toiyar gorá",

"creative": "zehén óla",

"creator": "foidagoróya",

"credible": "biccác gorázadé",

"credit": "baikka",

"credit recovery": "kredith waapes anóon",

"creed": "din/dórmo/akiida/torika/usúl",

"creek": "gura hál",

"cremate": "mora ré fura di sái bano",

"cremation": "mora furi sái banoon",

"crematorium": "mora furi sái banadé micín",

"crescent": "san or cokol foóila arde ahéri híssat",

"cress": "hoppi kisím ór háte fata",

"crew": "zaáñs ór hamgoróya",

"crib": "gura fuaindór bisán",

"cricket": "kríkéth kélah",

"cricketer": "kríket kéloya",

"cried": "guzoijjé",

"crier": "hañdoya",

"crime": "hórafi",

"criminal": "afarádi",

"crimp": "sul beháñgor",

"cripple": "théng hóraf manúic",

"crisis": "haassáli",

"crisis support": "tongkis or hémayot",

"criteria": "maayár",

"critical": "nazuk",

"critically": "nazukgorí",

"criticise": "hosúri tua",

"criticised": "hosúri tuaiyé",

"crocodile": "kuñír",

"crony": "korib dustó",

"crook": "jútha hol manúic",

"crooked": "behañ",

"crop": "bariza",

"crops": "bariza óll",

"cross": "fará",

"cross beam": "sal or keñsi",

"cross shape": "haçar cokól",

"crouching": "luçer - luçoon",

"crow": "hawa",

"crowd": "maincór zák",

"crowded": "záama",

"crowded-roots": "jádhdhuwañ",

"crown": "tas",

"crual": "soktódil",

"crucial": "muhím",

"cruel": "oinno maincóre duk di nize kúci goréde",

"cruise": "zaáñs sola kúci yá laráit",

"crumb": "fúana guri biskuth",

"crumble": "báñgi guri óiye",

"crunch": "tongkis",

"crunchy": "mormoijja",

"crusade": "Musúlman arde Kriccen or larái",

"crush": "báñgefan sibo",

"cry": "hañn",

"cried": "hañdo",

"crying": "hañda - hañder",

"cryptocurrency": "gufoni thiañ",

"crystal": "anar dhóilla sáf",

"CT": "jisím cekgoréde micín",

"cub": "cíngorsó",

"cube": "kyúb",

"cubical": "dhoóñr hamrár bák",

"cuckoo": "kuilá",

"cucumber": "fól",

"cuddle": "bukotlo",

"cuff": "bazur kaff",

"cuisine": "rañdá bara",

"culinary": "rañdá lói taaluk dé",

"culminate": "ahéri foóñso",

"culminated": "matát foóñicce",

"culmination": "matát foóñsá",

"culpable": "hosúrir laayek dé",

"culprit": "mujrim",

"cult": "manúic yá ciz óre fuñzoon",

"cultivate": "álgor",

"cultivated": "kétigoijjé",

"cultivated field": "cacór zaga",

"cultivated land": "(h)álgoijjá zobin",

"cultivation": "kétigorá",

"cultivator": "kétigoróya",

"cultural": "salsoloonor",

"culture": "salsolan",

"culvert": "meçi bútoror lain",

"cumbersome": "cúkcaikká",

"cumin seed": "hailla zira",

"cumulative": "asté asté bicí ói aiccéde",

"cumulus": "myúlar dol",

"cunning": "dúka diyat salák dé",

"cunning 1": "feñs ola",

"cunningly": "hóraf salákigorí",

"cup": "fiala",

"cupboard": "almali",

"cupidity": "lalsí",

"cupola": "gura guñit",

"cur": "bekar kuñir",

"curable": "gomgorí faredé",

"curb": "kontróul gor",

"cure": "dabaigor",

"curfew": "karfyú",

"curious": "zanibéllá moncá aséde",

"curly hair": "hoñçoinga sul",

"currency": "thiañ",

"current": "ehónor",

"currently": "ehónot",

"currently unavailable": "ehón nái",

"curricula": "karikula",

"curriculum": "cikaibóude ciz/nesab",

"curry": "sálon",

"curse": "gozob",

"cursive": "thana leká",

"curtail": "baiththá gor",

"curtain": "foroda",

"curtsey": "añçú behañgorí izzot gorá",

"curve": "beháñ lain",

"curved": "gúañya",

"cushion": "dhákor balúic",

"custard apple": "atá",

"custodial rights": "sámalar hók",

"custody": "keit/hérasot",

"custom": "háaic mozin",

"customer": "gaák",

"customize": "háaic mozin séthgoró",

"cut": "hath",

"cute": "cúndor",

"cuticle": "baáror sam",

"cutlass": "záñsir baiththá súri",

"cutler": "haçoni thík goróya",

"cutlet": "masór hándha",

"cycle": "sairkel",

"cyclist": "sairkél soróya",

"cyclone": "tuán",

"cyclopaedia": "beggín aséde kitab",

"cylinder": "selendhar",

"cymbal": "záñss",

"cynic": "egaza hosúri dekéde manúic zartú honó insán ór torkir uore biccác nái",

"cynical": "úde hosúri dekéde",

"cóñço - little": "hom/ekkena",

"cúnar rong": "golden color",

"dab": "asté asté bazá",

"dabble": "fanít áte ténge mari kéloh",

"dacoit": "dhahaith - hátiyar ola hóraf manúic",

"dad": "baf",

"daddy": "baf",

"daffodil": "ek kisím ór óloiddá fúl",

"dagger": "baiththá moinna dui háñsa dár súri",

"dahlia": "dhelia fúl",

"dahlia flower": "dhalia fúl",

"daigonal": "kuna kuinna",

"daily": "fortídin",

"daily activities": "fottí dinna ham óll",

"daily food": "fottídin or hána",

"daily market": "fottínna bazar",

"dainty": "noromsórom",

"dairy": "dhaiari",

"damage": "nuksan/hóraf gor",

"damaged": "hóraf/borbat óigiyói",

"damask": "dhizái goijjá recóm hoor",

"dame": "beçi",

"damn": "hosúride",

"damp": "bíza",

"dampen": "bíza ófan gor",

"damsel": "hoicca maiyafua",

"damson": "damson gula",

"dance": "nas/nasa",

"dancer": "nasoya",

"dandruff": "sussuri",

"dandy": "hoor cokól bicí kiyár goróya",

"danger": "hótara",

"dangerous": "hótara",

"dangerously": "hótara ola",

"dare": "hímmot gor",

"daring": "hímmoti",

"dark": "añdár",

"dark brown": "hot rong",

"dark-brown": "hotrong",

"darken": "andár gor",

"darkness": "añdár",

"darling": "ador ola jiníc",

"darn": "tali de",

"dart": "asimbit búnggori duñre",

"Darwin": "Darwin sáiñsdan",

"dashboard": "muúmorbudh",

"data": "dhetha",

"database": "dhethabéis",

"date": "tarík/hájur",

"date of birth": "zonom tarík",

"dated": "tarík diya",

"dates": "hájur/házur/tumor",

"daughter": "zíi/zérfua/futúni",

"daughter-in-law": "bou",

"daunt": "dhorlaga",

"dawan": "fuñáitta",

"dawdle": "thaim borbat de",

"dawn": "foóila foór fáiththe thaim",

"day": "din",

"daylight": "din or foór",

"daze": "matá gúra",

"dazed": "matá gúñaigiyói",

"dazzle": "laáith ór suk hoñra",

"de": "uldha gor",

"dead": "mora",

"dead body": "murda/mora manúic",

"deadbody": "lac/muruda",

"deadline": "ahéri muddot",

"deadly": "morizaigói faredé",

"deaf": "náfang",

"deafen": "han náfang ófan gor - han náfang gor",

"deal": "leenden",

"dealer": "befari",

"dealing": "leenden gorér",

"dealt": "leenden goijjé",

"dear": "adoijja",

"death": "mora",

"debate": "barábari",

"debit": "débith",

"debit card": "dhebíth kaádh",

"debris": "báñgi hóraf óiyede thukuça óll",

"debt": "hozzo",

"debug": "golti thíkgoroón",

"debut": "foóila kucíc",

"decade": "doc bosóri muddot",

"decease": "fóut",

"deceit": "dúka",

"deceitful": "dúkabaz",

"deceitfully": "dúkabazi gorí",

"deceive": "bára",

"deceiver": "bároya",

"December": "Disambor",

"decency": "córafot/sódakot",

"decent": "bála/uzu/sáf",

"decently": "ehetiyát gorí",

"decentralize": "pawar borat goríde",

"deception": "dúka",

"deceptive": "bárade",

"deceptively": "dúkadi",

"decibel": "abas mafa",

"decide": "fáiselagor",

"decided": "fáisela goijjé",

"decidedly": "sáfsaf gorí",

"deciding": "fásela gorér",

"deciduous": "fata zórede",

"decimal": "doc borator ek borat",

"decimate": "becábici nac óiye",

"decipher": "hóraf lekáttu maáni neela",

"decision": "fáisela",

"decision maker": "fáisela goróya",

"decision making": "fáisela gorá",

"decisive": "fáiseladedé",

"decisively": "thík zuabdi",

"deck": "zaáñs or bisáni",

"declaim": "dorógori hotáhoó",

"declarant": "elangoróya",

"declaration": "elan",

"declare": "elangor",

"declared": "elan goijjé",

"decline": "inkargor",

"declined": "inkar goijjé",

"decode": "luwaya lekáttu maáni tul",

"decorating": "cloth zaa hoor",

"decrease": "homa",

"decrease over time": "thaim or uore gomgorá",

"decry": "ducde",

"dedicated": "háas",

"deduction": "homgorá/damhoma",

"deed": "amól/ham",

"deemed": "mani loiyé",

"deep": "mur",

"deep water spot": "kum",

"deepen": "murgor",

"deeply": "murhai",

"deeply rooted": "biaram garígiyoi",

"deer": "órin - hórin",

"defactive": "aib aséde",

"defame": "córomde",

"default": "foóila loti toiyar goijjá",

"defeat": "hára/háraifélaiye/hárar",

"defence": "dofá",

"defenceless": "dofá sára",

"defend": "dofá gor",

"defense": "militri dofá goróon",

"defensive": "dofáyi",

"deficiencey": "komzuri",

"define": "maánigoré",

"definite": "zainna",

"definite article": "taarif adát",

"definition": "maáni tulá",

"definitly": "hámahá",

"degree": "dhigiri",

"dehydration": "gaar faní fúaiza",

"delay": "deri/fissá gor",

"delaying": "deri gorér",

"delays": "deri gorá ókkol",

"delegate": "nomainda gor",

"delegation": "nomainda grúp",

"delete": "buzaiféla",

"deleted": "haçigiyói",

"deliberately": "zanifúni",

"delicious": "moza",

"delicious food": "mozar hána",

"deliciously": "moza gorí",

"deliciousness": "moza",

"deliver": "foóñsái do",

"delivered": "foóñsái diyé",

"delivering": "foóñsair",

"delivery": "loizai do",

"delta": "niso tin kuinna zaga",

"demand": "daabi",

"democracy": "dimukresi",

"demonstrate": "muuzará gor",

"demonstrated": "muuzará goijjé",

"demonstration": "muuzará",

"denial": "inkargorá",

"denied": "inkar goijjé",

"denominational": "muzaáb loiyóre",

"denote": "dahá",

"dental": "daktori",

"deny": "inkargor",

"deodorize": "bac neelaiféla",

"depart": "alok ó",

"department": "difarmén",

"departmental": "difármén ór",

"departure": "rowana",

"depend": "darmadar",

"dependent": "bórdi soloya",

"depending": "bóurusá gorér",

"depict": "boiyangor",

"depicted": "cokól loiye",

"deplorable": "hóraf",

"deploy": "buwá gerá",

"deployed": "buwá gerái diyé",

"deploying": "buwá gerái der",

"deployment": "buwá geráidoon",

"depopulate": "abadi homa",

"deport": "decórtu neelaide",

"depose": "tobkartú lamaifél",

"deposit": "búra",

"deprecate": "estemal manágor",

"depreciate": "kimot homa",

"depress": "kimot homgor",

"depressed": "frecan óiye",

"depression": "frecani",

"deprivation": "mahárumi",

"deprive": "maárum gor",

"deprived": "maárum goijjá",

"depth": "mur/bútormíkka",

"deputy": "naif",

"derogatory": "córom lagede/fakka erada gor",

"descend": "émmikka lam",

"descendant": "fissán",

"descent": "émmikka lamo",

"describe": "boiyan gor",

"described": "boiyan goijjé",

"describing": "boiyan gorér",

"description": "tofsil",

"desert": "fúana zaga",

"deserve": "laikká ói",

"desier": "moksót",

"design": "dhízain gor",

"designated": "mokoror goijjé",

"desire": "mon",

"desk": "mes",

"desktop": "dekcór uore",

"despair": "frecan/naummait",

"desperate": "betab/maiyus",

"despite": "tóu údda",

"destination": "monzil",

"destiny": "tokdir",

"destroy": "dónco gor",

"destroyed": "tobá goijje",

"destroyer": "nacgoré zaáñs",

"desttitute": "naáitta",

"detach": "kúlifél",

"detachable": "alokgorí faredé",

"detail": "tofsil",

"detailed": "tofsil goijjá",

"details": "tofsil",

"detain": "bongorí rak",

"detained": "bon goijjé",

"detainee": "bondi",

"detect": "tuai lootfaa",

"detected": "hoói faije",

"detection": "hótgorí faroon",

"detectors": "hótgoréde jiníc",

"detention": "bon raká",

"deter": "dáfoon",

"detergent": "sófaiyi goréde jiníc",

"deteriorate": "hóraf óiaiyér",

"deterioration": "hóraf óon",

"determination": "mozbut fáisela",

"determine": "mozbut fáisela gor",

"determined": "mozbut fáisela goijjé",

"determining": "mozbut fáisela gorér",

"detonate": "fúça",

"detonation": "fúçoon",

"detonator": "barus fúçoni",

"detour": "behañ rasta",

"devastate": "nacgorífél",

"devastating": "nac óigiyoide",

"devastation": "nacgorá",

"develop": "torkigor",

"developed": "torki goijjé",

"developing": "torki gorér",

"development": "torki",

"device": "dhiváis",

"devide": "toksim gor",

"devil": "cóitan",

"devised": "toiyar goijjé",

"devotion": "díyandi lagitáka",

"diabetic": "siní biaram",

"dialogue": "hotábáttra",

"diamond": "híra",

"diamond fish": "fúl baila",

"diaper": "gudúri",

"diaphragm": "foroda",

"diarrhea": "gaa lamani biaram",

"diasy flower": "desifúl",

"dice": "kundhi",

"dictionary": "dhíkcenari",

"did": "goijjé",

"did you know": "tuñí zainíla né",

"die": "mor",

"died": "morigiyói",

"dying": "morer",

"died": "moijjé",

"died ": "entekal óiye",

"diesel": "dhizel tel",

"difference": "forók",

"different": "forók",

"differently": "alok gorí",

"difficult": "mockil",

"difficulty": "mockilat",

"diffrent": "alok/forók",

"dig": "kur",

"digestion": "behózomi",

"digging hoe": "fóoñça",

"digital": "nombóri",

"dignity": "keramot/mortaba/fohór",

"dilated": "dhoóñr ói giyói",

"dim": "miyundá",

"dimlple": "galor thep",

"dining": "háibar",

"dining table": "hána háde mes",

"dinner": "bialor hána",

"dip": "dhufaido/gólaido/buraide",

"diploma": "dhipluma",

"diplomatic": "dipluméthík",

"dire": "ódorbaára hótora",

"direct": "sída",

"directed": "rasta daháidiye",

"direction": "rasta-dahóon",

"directly": "sída-uzuzu",

"director": "darikthar/muútim sáb",

"director of the company": "kumpanir dhariktar",

"dirt": "sáta/hosora",

"dirty": "hosora/sáta óla",

"disable": "maazir/leng",

"disabled": "mazur/añtur",

"disagree": "razi nái",

"disagreement": "ektelaf",

"disappear": "gaib ó",

"disarranged": "benal",

"disaster": "bolamosibot",

"disaster management": "mosibot or entezam gorá",

"discard": "cúçide",

"discharge": "lamaide",

"discharged": "lamaidiye",

"discharging": "lamaider",

"disciple": "murid",

"discipline": "adob ahálak",

"disclaimer": "gair mosúlia",

"disclose": "zahérgor",

"disclosure": "zahérgorá",

"discomfort": "tokolif/aram sára",

"discontent": "beetminani",

"discount": "homgor",

"discriminate": "forókgor",

"discrimination": "forók gorá",

"discuss": "mocuwara gor",

"discussed": "mocuwara goijjé",

"discussion": "mocuwara",

"disdainfully": "cóñço buzí",

"disease": "biaram",

"disembark": "lamo",

"disgusting": "hosara/nafórot",

"dish": "decci/fatila",

"disinfect": "fuk maribélla",

"dislike": "nafosón",

"dislocated": "zaga loijjé",

"dismissal": "neelaidiya",

"dismissed": "baddiya giyé",

"disobedient": "nafórman",

"disorder": "hóraf",

"disorganized": "betal gorá",

"disoriented": "behañsúra óiye",

"dispatched": "defeçáiyé/béjidiyé",

"disperse": "cíñça cíthagor",

"dispersed": "síragorí félaiye",

"displaced person": "begór manúic",

"display": "dahá/kúlidahá",

"displayed": "daháiye",

"disposable": "ekbaijja",

"disposal": "félaido",

"disposal of waste": "sáta félaidiya",

"dispose": "félaide",

"dispute": "hoijja hoçi",

"disquiet": "sinta",

"disregard": "félaiyer",

"disrespect": "beizzoti gor",

"disrespectful": "beizzot ola",

"disrupt": "rukawoth dhálo",

"disruption": "cúkcak gorá",

"dissatisfaction": "beetminani/nakúc",

"dissipated": "áñzaifélaiye",

"dissociation": "alok óon",

"distance": "fáasela/alok",

"distant": "duré/fásela",

"distil water": "distíl faní",

"distinct": "aledá/forók",

"distinction": "alog",

"distract": "guccágora",

"distracted": "dían lori giyói",

"distress": "frecani/tokolif",

"distressed": "frecan/tokolif óiye",

"distribution": "toksim/borat goróon",

"district": "zilá/mónteka",

"distrust": "nabiccáci",

"disturb": "tong/frecar",

"disturbance": "tong/frecan gorá",

"dive": "dhupmar",

"diverse": "kisím kisím",

"divert": "rasta bodol",

"division": "bák/híssa/borat",

"divulge": "zahérgor",

"DNR": "jan ar húñc nu ainnó",

"do": "gor",

"did": "goijjé",

"done": "gorífélaiye",

"doing": "gorér",

"dock": "zaáñs gáñça",

"dockyard": "buthgáñça",

"doctor": "daktor",

"document": "habosfonna",

"documentation": "habosfonna thík rakóon",

"documented": "habosfonna goijjé",

"dog": "kuñir/kotta",

"doll": "futíla",

"dollar": "dholár thiañ",

"dolphin": "súsummas",

"dolphine": "súsummas",

"domain": "gíra",

"domestic": "górowali",

"dominant": "taakotwar/beggún or uore hókum soloya",

"dominion": "mullúk",

"donate": "dangor/hóratzohát/sañda",

"donation": "dan/hóratzohát",

"done": "óigiyói",

"dongle": "dhóngel",

"donkey": "gadá",

"door": "doroza",

"doorkeeper": "doraza soñi goróya",

"doorway": "dorozar foñt",

"dormitory": "bed bicí óla doóñr hamra",

"dosage": "sóbok",

"dose": "foijjal",

"dosing": "dabai",

"dot": "nukta",

"double": "dhaból/dui gunna",

"doubt": "cók/cubá/nabiccáci",

"dove": "hoóñl",

"down": "nise/tole",

"download": "émmikka lama",

"draft": "cúrur leká",

"drafting": "tooitta gorír",

"dragged": "thainné",

"dragonfly": "bébeni",

"drama": "naathok",

"dramatic": "taajuippa/toratori",

"dramatically": "taajuippa gorí",

"draw": "nokcótul/thani neelo",

"draw 1": "fúan-kéla",

"draw out": "neelaide",

"drawer": "durus",

"drawing": "nokcó",

"drawing-room": "átinná",

"drawn": "kéñisse",

"dream": "kúab/húab",

"dress": "hoor/bazo",

"drill": "fulgoróni",

"drilled": "fúijjé",

"drink": "fiyo",

"drank": "fiifélaiye",

"drunk": "fiiyé",

"drinking": "fiyer",

"drip": "dhríf",

"drive": "sola",

"drived - driving": "solaiyé , solar",

"drived": "solar",

"driven": "solai lozadé",

"driver": "soloya",

"driving licence": "garír laisén",

"drop": "lamaide/félaar",

"dropping": "félaar",

"dropped": "félaiyé",

"drug": "dabai",

"drugs": "nicá jiníc",

"drum": "doróm",

"drum stick leaves": "cézana fata",

"dry": "fúaná",

"dry fish": "fúañná",

"dry hair": "fúana sul",

"dryer": "dhraiyar",

"dual": "duáinna",

"dubious": "cóndo aséde",

"duck": "áñc",

"duckling": "áñcorsó",

"due": "thaim oiye",

"due to": "ótolla",

"dull": "bútah",

"dumb": "buk",

"dummy": "nokoli",

"duplex": "duidhák",

"duplicate": "nokoli/dui nombóri",

"duplication": "ekku dhoilla arekán banoon",

"durable": "doró",

"duration": "muddot",

"during": "cómot",

"dusk": "añdár",

"dust": "dúl/balu",

"dust pan": "sáta kuñsoni",

"dustbin": "sátar gadhdhá",

"duster": "búzoni",

"duty": "fóroz/waajib/kham",

"duvet": "borketá",

"duvet cover": "borketár waár",

"dying": "morizar gói",

"dynamic": "bicí hórkoti",

"dynamically": "hórkot gorí",

"dynamite": "baarus",

"e-mail": "e-méil",

"each": "fottí/hárr",

"each one": "fottí ekzon",

"each time": "fottí thaim/bar",

"each year": "fottí bosór",

"eagerness": "josba",

"eagle": "sil",

"ear": "han",

"ear canal": "hanor fóñt",

"ear drum": "hanor tali",

"ear flap": "hanor boça",

"ear lobe": "hanor loti",

"ear phone": "hanor fún",

"ear ring": "han fúl",

"ear side": "hansaba",

"ear wax": "han or gún",

"eardrum": "hanor tali",

"earlier": "sóore",

"earlobe": "hanor luti",

"earloob": "hanor loti",

"earloop": "hanor loti",

"early": "sóore",

"early morning": "fózor ottó",

"earn": "hama",

"earnestly": "dil kúli",

"earning": "hamani",

"earphone": "yíarfun",

"earth": "zomin/zobin/duniyai",

"earthquake": "búsal/zobin lora",

"earwax": "gún",

"ease": "asán",

"easily": "asán or sáte",

"east": "fuk",

"eastern": "fugor",

"easy": "asán",

"easy life": "cúk",

"eat": "há",

"ate": "há",

"eating": "há",

"somethig to eat with": "há",

"eaten": "háifelaiye",

"ebb": "báçah",

"eclipse": "gondá dóra",

"economic": "unnoti",

"economic analysis": "nikac",

"economically": "maali hísafe",

"economy": "amodini/unnoti",

"edge": "hañsa/kinara",

"edged": "asté asté loijjé",

"edible fern": "dhéiñ ák",

"edit": "bodol",

"editor": "edhithar",

"educate": "taalimdo",

"educated": "fonná óla/elómdar",

"education": "elóm/fonná/taalim",

"educational": "fonnár",

"eel": "kuissa",

"eerie": "buzí nofaréde taajuippa",

"effect": "asórgoré",

"effective": "asór goréde",

"effectively": "bálagóri",

"effectiveness": "asórgorá",

"efficiency": "asór óla",

"efficiency 1": "gorá dóra",

"efficient": "zanede laayek",

"effordable": "loifarede",

"effort": "mehénnot/kucíc",

"egal": "igel faik",

"egg": "andha",

"egg yolk": "andhar lali",
/*cute*/
"egg-plant": "baiyon",

"eggplant": "baiyon",

"egress": "baáre zaibar rasta",

"egret": "dóuli boga",

"Eid day": "Idór din",

"Eid-ul-adha": "Qurban or dín",

"eight": "añctho",

"eighteen": "añçáro",

"Eighteen": "añçáro",

"eighty": "ací",

"Eighty": "ací",

"either": "yáto",

"elaborate": "tofsilgor",

"elastic": "refóth",

"elbow": "kinkini",

"elder": "boro",

"elder brother of father": "sañsa",

"elected": "basá giyé electiont",

"election": "búthgorí basá",

"elective": "ektiyari",

"electric": "bijili/kaáren",

"electric drill": "kaárobar fúroni",

"electric fan": "kaárobar fangká",

"electric guitar": "kaárobar githa",

"electrical": "bijilir",

"electrician": "elektrík óla",

"electricity": "bijili",

"electronic": "elektroník",

"electronically": "elektruník zoriya",

"element": "asási ciz",

"elephant": "(á)háñti",

"elephant apple": "sailla",

"elevate": "uoretul",

"elevated": "usol",

"eleven": "egaro",

"Eleven": "egaro",

"eligibility": "kaabeliyoti",

"eliminate": "batde",

"eliminated": "neelai diyé",

"elite": "mootobor manúic",

"elk": "cíng hóurin",

"elling baby to eat": "aámde",

"else": "noóile",

"elsewhere": "arhoníkka",

"elusive": "lootfaite mockildé",

"email": "iméil",

"emailed": "e-méil goijjé",

"emargency": "cómmosibot",

"embankment": "noo ot uçóon",

"embargo": "bongorá",

"embark": "noo ot uçó",

"embarrassed": "córminda óiye",

"embassy": "embasi",

"emerge": "uormikká uçíaiccé",

"emergency": "zoruri háalot",

"emigrate": "híjorot/arekkán decót bodolizaa",

"emigrated": "híjorot goijjé",

"emotional": "jozbati",

"emphasize": "zurde",

"employ": "hamot(rak)/(lo)",

"employed": "ham ot loiyé",

"employee": "hamgoróya ókkol",

"employer": "hamot rakóya",

"employment": "hamot raká/mulazimot",

"empower": "paawár do",

"empowerment": "pawárdiya",

"emptied": "háli goijjé",

"empty": "háli/kessú nái",

"empty-handed": "nakam/maayus",

"emptying": "háli gorér",

"enable": "salu gor/kol",

"enact": "ain kaanun bana",

"enclosed": "fúañti diyé",

"encompass": "gírirak",

"encounter": "mukabela gor",

"encourage": "hímmotde",

"encouraged": "bol diyé",

"end": "ahéri",

"end of": "ahéri(r)",

"end up": "hótom gor",

"endeavour": "kucíc gor",

"endeavoured": "talac/kucíc goijjé",

"ended": "hótom óiye",

"ending word of prayer": "aamínn",

"endorse": "tosdik gor",

"endorsement": "tosdik",

"endure": "bordac gor",

"enemy": "ducmon",

"energy": "taakot",

"energy levels": "taakoti tobka óll",

"enforce": "bolazuri gor",

"enforcement": "bolazuri gorá",

"engage": "alagála goríták/lagiták/híssalo",
/*cute*/
"engaged": "bazái raikké",

"engagement": "zuragatá",

"engaging": "bazáiya/lagaiya",

"engine": "micín",

"engineer": "injiniár",

"England": "Englén",

"English": "Ingilíc",

"english": "ingilíc",

"enhance": "bála goré",

"enhanced": "bála goijjá",

"enhancement": "gom ottu gom gorá",

"enjoy": "aiyacigor",

"enjoyable": "kúci óla",

"enjoyment": "aiyaci",

"enlarge": "dhoóñr gor",

"enough": "furafuri",

"enquiry": "fusár/súalzuab gorá",

"enrol": "bóttigor",

"enroll": "bóttigor",

"enrolment": "bóttigora",

"ensuing": "tarfore fóuran/yíar baade",

"ensure": "fakkagor",

"ensuring": "biccác der",

"enter": "gól",

"entered": "bútore góille",

"entering": "góloon",

"is entering": "góler",

"entertain": "dil kúcigor",

"entertainment": "nasgana",

"enticipation": "mumúmmikka dekóon",

"entire": "beggúlun/furafuri",

"entire life": "fura zindigi",

"entirely": "furafuri",

"entities": "tonzim",

"entitled": "nam diya giyé",

"entitlement": "hókfaa/faibarhók",

"entity": "enthithi",

"entrance": "doraza/góloni",

"entry": "bútore góla",

"enumerate": "ekkán ekkán gorí liís ót tuló",

"envelop": "lefaba",

"envious": "ricgorá",

"enviromental problem": "mahóuliyoti mosáil",

"environment": "maahóul",

"environmental": "mahóuli",

"envisaged": "báfisaiyé",

"epiglottis": "thaçala",

"epileptic": "foola biaram",

"episode": "waakia/háades/gothana/kissá",

"equal": "borabor/fúainna",

"equality": "borabori",

"equator": "ikwethar",

"equipment": "sáman",

"equipped": "fith goijjé",

"equitable": "insáf óla",

"equivalent": "fúainna",

"equivocal": "sáfsáfnoó de",

"era": "zobana",

"erase": "búza/fuñs (íféla)",

"erased": "búzer",

"erasing ": "búizaiye",

"eraser": "búzoni",

"erected": "tuillé",

"err": "golti",

"error": "golot",

"escalate": "uormikká tulé",

"escalated": "uormikká tuillé",

"escalatel": "bicíór",

"escalating": "uormikká tulér",

"escalation": "barízoon",

"escape": "dáa/dárr",

"escaped": "dáiye",

"escorted": "fúañti loigiyé",

"esophagus": "hánar lain",

"especially": "háas gorí",

"essential": "bicí zoruri",

"essential stuff": "zoruri",

"essentially": "háas gorí/asólot",

"essentials": "zoruri jinc ókkol",

"establish": "kaayem gor",

"established": "kaayem goijjé",

"establishing": "kaayem gorér",

"establishment": "kaayem gorá",

"estates": "íesteit/zomidari",

"estimate": "kiyaz/antas",

"estimated": "kiyaz/antas goijjé",

"estimation": "kiyas",

"estimator": "mafdiya",

"estimulate": "uskaide",

"etc": "wogáira",

"etc.": "wagáira",

"ethical": "ahálaki",

"ethics": "ahálak ókkol",

"ethnic": "zat",

"ethnic cleansing": "zat hótom gorá",

"etiquette": "adob",

"Europe": "Yurup",

"eustachian tube": "hanor bútoror nol",

"evacuate": "háligor",

"evacuated": "háli goijjé",

"evacuation": "nelaidoon",

"evaluate": "muillaiyon gorá",

"even": "hátta/údda/aró",

"even though": "tóu údda",

"evening": "házinná",

"event": "waakia/hádás",

"eventually": "aheríttu",

"ever": "hámica",

"everlasting": "hámicá tákoya",

"every": "fottí",

"every fortnight": "fottí dui háftat",

"every where": "agagura",

"everyday": "fortídin",

"everyday dissociaton": "fottídin alok óon",

"everyone": "fottízon",

"everything": "hárr ciz",

"everywhere": "beggúla",

"evict": "neelo",

"eviction": "neelaidoon",

"evidence": "sóbut",

"evident": "sáfsaf",

"evil": "hóraf",

"evil eye": "muk foijjé",

"evolving": "boni aiyér",

"ew": "túra",

"exabyte": "ekzabáith",

"exacerbated": "bicí hóraf goijje",

"exact": "éndila borabor",

"exactly": "ebbre éndila gorí",

"exam": "imtahán/entán",

"examination": "imtahán",

"examined": "cek goijjé",

"examiner": "cek goróya",

"example": "mesál",

"exceeding": "barér",

"excellent": "beétorin",

"except": "siríf",

"exception": "gunjáic",

"excerpt": "nuthgorá",

"excess": "hódor baára",

"excessive": "ódor baára",

"exchange": "bodolabodoli",

"excite": "taajub goróon",

"excited": "fúroti",

"exclamation": "abbalé!",

"exclude": "batde/neelaide",

"excluded": "neelaidiya giyé",

"exclusively": "háas gorí",

"excursion": "eskarcen",

"excuse": "bahána",

"excuse me": "ekkená gorí",

"execute": "amolgor",

"executed": "amol/fura goijjé",

"execution": "amol/fura gorá",

"executive": "boro",

"exellent": "bicí beétor",

"exemption": "mafdiya",

"exercise": "prektís",

"exercised": "prektís goijjé",

"exhausted": "hóran óigiyói",

"exile": "baáre neela",

"exist": "moujut",

"existed": "uzud aiccíl",

"existing": "moojud aséde",

"exited": "neeli giyói",

"exodus": "zákzák manúic neeli zoon",

"expand": "bará - dhoóñr gor",

"expanded": "dhoóñr goijjé",

"expanding": "dhoóñr gorér",

"expansion": "dhoóñr gorá",

"expat": "bidecóitta",

"expatriate": "bidecóitta",

"expect": "acá/ummit",

"expectation": "acá/ummit gora",

"expected": "acá goijjé",

"expedite": "toratori goráide",

"expediting": "toratori gorár",

"expenditure": "hóssa",

"expense": "hóssa",

"expensive": "moóngga",

"experience": "ótfa/tojuruba ó",

"experienced": "tojoruba ola",

"expert": "expáth",

"expert guidelines": "expáath dostur ókkol",

"expired": "muddot giyói",

"expiry": "ahéri/fúraibár tarík",

"explain": "buzá - buzáide",

"explained": "buzáidiyé",

"explaining": "buzáider",

"explanation": "tofsir",

"exploit": "bazáitou saár",

"explosive": "barus",

"export": "baáre defeçó",

"expose": "neelaidiyoum",

"exposing": "uidda gorer",

"express": "hoói dahá",

"expressed": "zahér goijjé",

"expression": "ezahár gorá",

"expulsion": "neelai diya",

"extend": "lamba gor",

"extension": "extencén",

"extensive": "boro couça",

"extensively": "becábicí gorí",

"extent": "hót/mafdiya",

"extention cord": "lamba tar",

"exterior": "bútoror",

"exterminate": "áñzaiféla",

"extermination": "koum áñzaiféloon",

"external": "baárkulor",

"externally": "baártutái",

"extortion": "thiañ neeloon",

"extra": "ziyadá/izáfa",

"extra-curricular": "baára hórkot",

"extract": "thani neela",

"extracted": "thani neelaiyé",

"extraordinary": "ódor baára",

"extreme": "ódorbaára",

"extremely": "ódor baára",

"extricate": "mockil ottú fáarek ó",

"eye": "suk",

"eye test": "suk thées gorá",

"eye's water": "sukgór faní",

"eye-anatomy": "sugór furuza",

"eyeball": "suk ór futoli",

"eyebrow": "hazol",

"eyeglass": "cocmá",

"eyeglass box": "cocmár kuththa",

"eyelash": "hazol/sukór bóng",

"eyelashes": "sugór bóng",

"eyelid": "sugórfata",

"eyesight": "sukgór zuti",

"FAC": "egaza fusár goré jiníc",

"face": "muk/cokól",

"your face": "tor siára",

"face is": "túañra",

"facial": "mukór",

"facilitate": "asán/aram goríde",

"facility": "wasíla/cúuida",

"facing": "sámna/mukabela",

"fact": "hákikot",

"factor": "sóbob/wojá",

"factory": "fékthuri/harhána",

"factsheet": "hákikot cíth",

"factual": "hákikoti",

"faculty": "fekálthi",

"Faculty of Commerce": "Hasharbar ór Fekálthi",

"Faculty of Engineering": "Inginiár ór Fekálthi",

"Faculty of Islamic Law": "Islami Kaanun ór Fekálthi",

"Faculty of Medicine": "Dabair Fekálthi",

"fail": "fél/nakam óiye",

"failing": "fél zar",

"failure": "nakam",

"fair": "insáfi/borabori",

"fair manner": "munaséf andaz loi",

"fairness": "insáfi",

"fairy": "fouri",

"faith": "iman/biccác",

"faithfully": "fórmadari gorí",

"Fajr": "Fójor thaim",

"fajr": "fójor",

"fake": "nokoli",

"fall": "émmikka fore",

"family": "guccí",

"family composition": "fémli bona",

"famine": "rath",

"famous": "maarúf",

"fan": "fangká",

"fancy": "fosón",

"fans": "fosón goróya ókkol",

"fantastic": "laajuab",

"far": "duré",

"far away": "duré",

"is far away": "bicí duré",

"fare": "thikéth",

"farmer": "álgoroyá/kéti ola",

"farther": "duré",

"farther apart": "aró duré",

"farther more": "aró duré",

"fascia": "duali",

"fast": "tesgorí/toratori",

"fasten": "band",

"fat": "mutha",

"fatal": "foranzaifaredé",

"fatality": "mora",

"fate": "nosíf",

"father": "baf",

"father's brother": "sañsa",

"father's elder brother": "sañsa",

"father's sister": "fúu",

"father's younger brother": "zeçá",

"father-in-law": "(h)óour",

"fatigue": "hóranlaga",

"fatty": "mutha",

"fatty acid": "sorbí ésidh",

"fault": "duc",

"faulty": "aib ola/hóraf",

"favour": "ehésan",

"fax": "féx",

"fear": "dhor/hóuf",

"fearful": "dhorfuk",

"fearing": "dhorfuk manúic",

"feature": "húbi",

"featured": "húbiwala",

"Feb": "Februari",

"February": "Februari",

"fed": "hána hábaiye",

"fed up": "tong aái giyói",

"federal": "féderel",

"feed": "hábo",

"feedback": "waapesirai",

"feel": "maásusgor",

"feel comfortable": "aram maásusgor",

"feel free": "no córmaiyo",

"feeling": "maásusgorér",

"feet": "théngor fata ókkol",

"fell": "fore",

"fellow": "sáñti/fúñaijja-douya",

"felt": "maásus goijjé",

"female": "melaa/báre",

"female camel": "uñthni",

"female cat": "búza bilai",

"female cow": "gai goru",

"female dog": "kutti",

"female police": "fulicni",

"femily": "góro óla",

"feminine": "maiya",

"fence": "ara/gíra/berá",

"fencing": "gíra der",

"fennel seed": "bahór",

"ferry man": "gáñiththa/kul súai douya",

"fertile": "fáñc óla",

"fertilizer": "fáñc",

"festival": "milon/toñcá/maharajan",

"festive": "iddór/kúcir",

"fever": "zor/gaatzor",

"few": "kessú",

"fibre optic": "gláss ór tar",

"fictitious": "banawothi",

"field": "kéti",

"fifteen": "fundóro",

"Fifteen": "fundóro",

"fifty": "fonjaic",

"Fifty": "fonjaic",

"fight": "maramari/hoijja",

"fight back": "waapes fáith goríbélla",

"fighter": "hoijja goróya",

"fighting": "larái goróon",

"figure": "nombóri/fothú",

"file": "fáil",

"filim": "fílim",

"fill": "fura/bór",

"filling": "furagor",

"fill up application": "dorhás bóri",

"filled": "furaiya/bóijja",

"film": "fílim",

"filmed": "fílim banaiyé",

"filter": "salo",

"filtered": "sailla",

"fin": "ceththá jiníc",

"final": "ahéri/laás",

"finalisation": "fainél gorá",

"finalised": "fainel goijjé",

"finalising": "fáinel gorér",

"finally": "ahéri/laás(ottu)",

"financial": "foisáhori",

"financial assistance": "maali modot",

"find": "tuailo/tuaisaá",

"finding": "notiza/rezól",

"fine": "thík/gom",

"finger": "át or ouñl",

"finger joint": "ouñl or zura",

"finger portion": "ouñlor fak",

"finger print": "thip",

"finger tip": "ouñlor matá",

"fingernail": "ouñlor nok",

"fingernáil": "ouñlor nok",

"fingerpoke": "thulki mar",

"fingers": "ouñl ókkol",

"fingure": "ouñl",

"finish": "fúrah/hótom",

"finished": "hótom goijjé",

"finishing": "mukkammel",

"fire": "ooin",

"fire brigade": "ooin nifóya",

"fire extinguishar": "ooin nifóni",

"fire fighter": "ooin nifóya",

"fire flame": "ooinor zilha",

"firearm": "hátiar",

"fired": "guli maijjé/fura diyé",

"is fired": "ham ottú neelai diyé",

"firefly": "zunífuk",

"firewood": "dargwá",

"firing": "guli marer",

"firm": "kumpani/fárom",

"firmly": "doró gori",

"first": "foóila cúrut",

"fiscal": "hísafor",

"fish": "mas",

"fish oil": "masór tel",

"fish-Japan": "jafanimas",

"fisher": "mas soóya",

"fisherman": "zailla",

"fist": "gúca/múth",

"fit": "sehét óla",

"fitted": "fíth óiye",

"fitting": "fith gorér",

"five": "fañs",

"fix": "thíkgor",

"fixed": "thíkgoijjá",

"flag": "boutha",

"flame": "ooin or zilha",

"flash": "cóçok/somok",

"flashlight": "thipbatti",

"flashpoint": "bená",

"flat": "ceththá/fúainna",

"flaw": "aib golti",

"fled": "dáiyegoi",

"flee": "dóo/dóogoi",

"fleeing": "dárgoi",

"flesh": "gusso(to)",

"flick": "melámar",

"flight": "fláith/pleinsorá",

"flim": "fílim",

"flip": "uldho",

"flock": "zák",

"flood": "fanífan",

"floor": "meçit/tolat/zobin",

"flow": "golti/hosúri",

"flowed": "báai giyé",

"flower": "fúl",

"flower pot": "fúlor dani",

"flower ring": "fúlor sóra",

"flu": "thándhi",

"fluctuating": "uçalama gorér",

"fluent": "gorgoijja/toratori",

"fluid": "fainná",

"fly": "ur(er)",

"flying animal": "faikfocú",

"foam": "foó",

"focus": "díyan",

"focused": "dían diyé",

"focusing": "dían der",

"fold": "hókgor",

"folder": "fóuldhar",

"folding chair": "boça kursí",

"follow": "fisá/fisély za",

"follow the advice": "mocuwara uore amól goró",

"followed": "fiséfisé giyé",

"following": "fiséfisé zar/maner",

"following question": "aiyérde súal",

"font": "fóñth",

"food": "hána",

"food container": "hánar baccú",

"food product": "hánar mal",

"fool": "ghada",

"foolish": "bekuf/foola",

"foot": "théngor fata",

"footage": "théngor sók/fílim",

"football": "fúthboól",

"footer": "tola",

"for": "ollá(bóuli)",

"for example": "mesál hísafe",

"for good": "abadulabad",

"for now": "ehón ólla",

"for people": "maincórla",

"for the rent": "keriyalla",

"forbearing": "sobórdar",

"forbid": "manágor",

"forbidden": "maná/háram",

"force": "taakot/kuwot",

"forced": "bolazuru goijjé",

"forced to go": "zaafoijjé",

"forcibly": "bolazuri",

"fore side": "mumúmmikka dehóon",

"forearm": "dhuwáñr nisor át",

"foregoing": "uoror",

"forehead": "kuwal",

"foreign": "baáror",

"foreign investor": "bidecí arang lagouya",

"foreign language": "ajnobi zuban",

"foreign minister": "bidecór uzir",

"foreigner": "bidecóittá",

"forensic": "sáiñsí taákik goréde",

"forest": "zooñl",

"forever": "abadulabad/hámicallá",

"foreword": "cúrur hotá",

"forget": "foóráifel",

"forgetting": "foórai zar",

"forging": "banoon",

"forgive": "mafde",

"forgive me": "maf goró",

"forgiveness": "mafgorá",

"forgiver": "mafgorídouya",

"forgiving": "maf gorídede",

"forgot": "foórái giyégói",

"forget": "foóraiye",

"forgotten": "foóraifélaiye",

"fork": "keñça camic",

"fork spoon": "keñça samic",

"form": "fórom",

"formal": "rósomi",

"formalised": "rósomi goijjé",

"formality": "rosóm",

"formally": "rosómi hísafe",

"format": "cokól/nommuna",

"formats": "cokól ól",

"formatted": "boinna cokól",

"formed": "cokól diyé",

"former": "agor/furan",

"formidable": "mozbut",

"formula": "fármulá",

"formulating": "tockil der",

"forth": "age",

"forties": "calicá",

"fortnight": "duiháfta",

"fortunate": "báiggoitta",

"fortunately": "báiggoloi",

"fortune": "kismot/nosíb",

"forty": "calic",

"Forty": "calic",

"forum": "ectema",

"forward": "muúmmíkka",

"forwarded": "muúmmíkka foóñsái diye",

"forwarding address": "zaibar thíkana",

"Fosím": "West",

"fosím": "west",

"found": "tuaifaiyé",

"foundation": "guijja/asás",

"founder": "banoya/tuaifoya",

"fountain pen": "fónthin holom",

"four": "sair",

"fourteen": "soiddó",

"Fourteen": "soiddó",

"fourth": "sair lombór",

"fox": "cíyal",

"foxtrot": "ekkisím ór nas",

"fraction": "cindhi híssa",

"fracture": "fáça",

"fragment": "hándha",

"frail": "komzur/biaraimma",

"frame": "féreim/bong",

"framework": "hamor cokól",

"France": "Fráns dec",

"fraud": "zali goróuya",

"free": "maana/azad",

"free service": "musáda",

"freedom": "azadi",

"freedom from abuse": "golot estemal ottú azad",

"freedom of movement": "solafírar azadi",

"freely": "azadir sáñte",

"frequency": "egaza wá",

"frequent": "egaza",

"frequently": "egaza egaza",

"fresh": "taaza",

"freshly": "torutaza goijjá",

"freshness": "taza",

"freshwater": "miçáfani",

"Friday": "Cúkkubar",

"fridge": "boróffethi",

"fried": "búna",

"friend": "fúñaijja",

"friendly": "dustí-óla/hotábáttra-gom",

"frightened": "doraiyé",

"frightening": "hóuf goróon",

"frog": "beng",

"from": "ottú",

"from now": "ehón óttu",

"from now on": "ehón ottu cúrugorí",

"from where": "honttú",

"front": "muúntu",

"front brain": "muúm or demak",

"front side": "muúm dhák",

"front teeth": "muúm ór dat ókkol",

"frontier of a state": "decór címana",

"frozen": "thándha goijjá",

"fruit": "gula(gala)",

"fruit bud": "théma",

"fruit-kira": "kírah gula",

"fruit-zam": "zam gula",

"fruitful": "notiza bála goréde",

"fruits": "fólfruth mema óll",

"frustrated": "maiyus/na-ummit óiye",

"frustration": "naummit",

"fuel": "tel",

"fulcrum": "dhéiñ holot",

"fulfil": "fura gor",

"full": "furaiya",

"full brother": "cúddor brother",

"full moon": "fuúr óiyede san",

"full stop": "fúça - nuktá",

"fuller": "bicí furaiya",

"fullest": "ebbre furaiya",

"fully": "furafuri",

"fun": "moza/húci",

"function": "ham",

"functionality": "kabeliyoti",

"fund": "foisá/rasmal",

"fundamental": "buniyadi/asási",

"funded": "thiañ diyé",

"funding": "thiañ der",

"funeral": "jonaza",

"funnel": "húndura",

"funny": "ajiíb",

"fura goró": "bóro",

"furniture": "meskurusí",

"further": "aró",

"fury": "guccá",

"fuse": "fyús",

"future": "mustokbol",

"fón": "fund - thiañ",

"Gabriel": "Jibrail fírista",

"gadget": "gejéth",

"gain": "háñsil goré",

"gained": "háñsil goijjé",

"gaining": "fáaida gorér",

"gall juice": "fitor faní",

"gallbladder": "fit",

"gallon": "galón",

"gambler": "zuwa kéloya",

"game": "kélah",

"gammon": "cúwor or gusso",

"gang": "gandhu",

"gang-rape": "gáing-bolatkar",

"gap": "háli",

"gaping": "fárok gorér",

"garbage": "féñza",

"garden": "bariza",

"gardener": "bariza lagoya",

"gardening": "bariza lagar",

"garlic": "roóun",

"garment": "lebas",

"garrison": "gáñthi",

"gas": "geés",

"gases": "geés óll",

"gastric": "geésthík",

"gate": "doroza",

"gather": "zoma/dola gor",

"gathered": "dola/zoma óiye",

"gathering": "dola/zoma orr",

"gauge": "mafoni - géij",

"gave": "diye",

"gazelle": "lamba cíng ola hórin",

"gear": "giiyár",

"gender": "morotmaiya",

"gene": "jínn",

"general": "aám",

"general public": "aám manúic",

"generally": "aam hísafe",

"generation": "nosól/jenerécen",

"generator": "genereithar",

"generous": "dilkúla",

"genital": "córom zagar",

"genocide": "dola dola mariféloon",

"genre": "torzó",

"gentle": "bóddoro",

"genuine": "asóli/hákiki",

"geography": "jografiya",

"Germany": "Jarmón dec",

"gesture": "icára",

"get": "fa/háñsilgor",

"got": "faifélaiye",

"gotten": "faiyé",

"getting": "far",

"get down": "nise lam",

"get help today": "aijja modot lo",

"get in": "bútore gólo",

"get less": "homgor",

"get notified": "zanaido",

"get off": "bongor",

"get on": "uore uth",

"get out": "baáre neel zagói",

"get smaller": "hom ó",

"get started": "cúru goijjóum",

"get under control": "kontróul ót anó",

"get up": "uth",

"get upto date": "noya taza raikkó",

"get use to": "uibác/kuaic",

"getting": "háñsil gorér",

"ghee": "gíi",

"gherkin": "kírah",

"ghost": "jinn",

"gift": "hádiya/tuffá",

"gifted": "demakdiya",

"gigabyte": "gigabáith",

"ginger": "ada",

"giraffe": "giráfi - jiráfi",

"girl": "maiya/miala/zér fua",

"girlfriend": "laávar",

"give": "de",

"give in": "deféla",

"give lecture": "dorós de",

"give ride": "sorá",

"give up": "sáride",

"given": "diya giyé",

"giving": "der",

"gizzard": "gíla",

"glad": "kúci",

"glad tidings": "húchóbor",

"glans": "cúnarsóor matá",

"glass": "ana/gláss",

"glide": "injin sára plein",

"glimpse": "ekcóçak",

"global": "alomi",

"globe": "duniyai",

"gloomy": "añdár",

"glow-worm": "zunífuk",

"glue": "añçá",

"go": "za",

"go back": "fissáza",

"go out": "neeli zagói",

"go through": "goliza",

"go up": "uormikká za",

"go(s)": "zo(o)",

"gone": "giyógoi",

"going": "zaár",

"goal": "monzil/moksót",

"goat": "béra sóol",

"goatee": "sóol darí",

"God": "ALLAH",

"god": "maabud ALLAH",

"going": "zar",

"goiter": "gola fúla",

"gola": "neck (sairóu dhák)",

"gold": "cúna",

"golden": "cúnali",

"golden apple": "belgula",

"golf": "goólf",

"gone": "giyégói",

"good": "gom",

"better": "bicí gom",

"best": "ebbre gom",

"good deed": "bála ham",

"good looking": "cúndor lager",

"good manner": "bála manúic",

"goods": "mal - sáman",

"goody-goody": "aiccá",

"goose": "rada áñc",

"gorila": "gorila",

"gorilla": "gorila",

"gorom": "thándha",

"got": "faiyé",

"got difficulty": "baijjí",

"gourd": "houdú",

"Goverment": "hókumot",

"governance": "hókumot goríbar torika",

"governing": "hókumot gorér",

"government": "hókumot",

"government's": "hókumot or",

"governor": "hókumot goróya",

"gown": "goón",

"gps": "gps kumbáic",

"grab": "sibidór",

"grabbed": "sibi dóijje",

"grace": "riayot",

"grade": "tobka",

"gradually": "asté asté",

"graduate": "grejueíth",

"graduation": "grejuécen",

"grainy": "reni",

"grammar": "kaaida",

"grand children": "nati",

"grand daughter": "zíi-or-nati",

"grand father": "dada",

"grand mother": "dadi",

"grand parent": "dadadadi",

"grand son": "fut-or-nati",

"grand total": "kullé mizan",

"grant": "grénth",

"granted": "monzur goijé",

"grantee": "grénth fouya",

"granular": "dana",

"grape": "añggur",

"grape fruits": "fáttara",

"grape vines": "anggur or túa",

"grapefruit": "turunza gula",

"grapes": "anggur",

"grass": "kér",

"grasshopper": "fíring",

"grate": "añsé",

"grateful": "cúkurguzar",

"grave": "hobor",

"graveyard": "hoborostán",

"gravity": "zobinor thanar taakot",

"gravy": "góno",

"gray": "maiccáiya rong",

"grease": "giris",

"great": "ajíib",

"greater": "boro",

"greater than": "óttu bicí",

"greatest": "sóbse boro",

"greatly": "dhoóñgori",

"greatness": "azimot",

"Greece": "Grís dec",

"greed": "lalós",

"greedy": "lalós óla",

"green": "háil/fata rong",

"green banana": "keñsa kela",

"green bean": "borhoñçi sóñi",

"green chili": "keñsa moris",

"green coconut": "dabnaijjol",

"green sandpiper": "segá",

"greeting": "sólam",

"greeting from New York": "Nyú Yórk óttu sólam dir",

"grew": "dhoóñr óiye",

"grey": "maiccáiya rong",

"grey hair": "dóla sul",

"grief": "precani",

"grievance": "frecan/nuksan",

"grieve": "dildukde",

"grill": "gril",

"grilled": "séikka",

"grim": "soktó/ocánti óla/hora",

"grind": "dolo",

"grinding device": "dholoin",

"groin": "nagír nizor zaga",

"groom": "dulá",

"gross": "muth/kullé",

"gross pay": "fura tonhá",

"ground": "moidan",

"groundnut oil": "badam tel",

"group": "grúp/jomá",

"grow": "dhoóñr",

"grow up": "dhoóñr ó",

"growing": "dhoóñr órr",

"grown up": "baalek",

"growth": "torki/dhoóñr úwa",

"gruesome": "hótornak",

"guarantee": "geránthi",

"guard": "soiñdar",

"guardian": "garjén/mahaféz",

"guarding": "héfazot/soikkal gorér",

"guava": "goyom",

"guess": "andas",

"guest": "gorba/meéman",

"guest house": "gorba gór",

"guest room": "gorba hamrá",

"guidance": "rastadahá",

"guide": "rastadahá",

"guided": "hédayot faiya",

"guideline": "dosture amól",

"guidelines": "rastadahá",

"guile - cunning": "feñs ola",

"guilt": "hosúri",

"guilty": "ducí/hosúrbon",

"Guinea": "Guinea dec",

"Guinean": "Guinean'r manúic",

"guitar": "githar",

"gum": "marír gusso",

"gun": "bonduk",

"gunshot": "gulimara",

"gunshot wound": "gulir zohóm",

"gut": "añti",

"guy": "manúic",

"gym": "jim worjis goréde zaga",

"gúca maro": "maro",

"habit": "adot",

"habitat": "sorihá",

"habitation": "zaga/mokan",

"habitual": "adoti",

"hack": "barimar",

"had": "aiccíl",

"haematoma": "matár alugula",

"haemorrhaging": "lou bicí neeler",

"hail": "zóror fúça",

"hair": "sul - keñc",

"hair brush": "sul or brac",

"hair bun": "sulor júñça",

"hair dryer": "sul fúoni",

"hair falling": "sul zórer",

"hair on body": "keñc",

"hair on head": "matár sul",

"hair ties": "sul bañdóni",

"half": "adá(án) / addók",

"hall": "boro hamrá",

"hallway": "hóol ór rasta",

"ham": "cúwor or ran or gusso",

"hamaiyéde": "earned",

"hamburger": "hámbagár",

"hammer": "mattul/áñtura",

"hampered": "ruikké",

"hand": "(h)át",

"hand plane": "ronda",

"hand tool": "hát sáman",

"hand wash container": "át dúwoní",

"handback": "át fisé rak",

"handbag": "át or beg",

"handbook": "hátkitab",

"handdle": "dóroni",

"handed": "háwala goijjé",

"handicap": "át théng bañdá",

"handkerchief": "nuwal",

"handle": "dóroni",

"handled": "sóñillé",

"handover": "háwala gorí diye",

"handsome": "cúndor(jja)",

"handwritten": "hátor leikká",

"hang": "fáñcide",

"hanging": "lothker",

"hanger": "lothkani",

"happen": "óo",

"happened": "óiye",

"happening": "órr",

"happiness": "kúci",

"happy": "kúci",

"harass": "tong/frecan",

"harasser": "tonggoróya",

"harassment": "frecangoróon",

"harbor": "zaáñs gáñça",

"hard": "doró",

"hard bamboo": "cíba bañc",

"hard palate": "galor doró sal",

"hard water": "hoc faní",

"harder": "bicí doró",

"hardship": "tongkis",

"hardware": "doró ciz",

"hardworking": "duk goréde",

"hare": "hórguc",

"harm": "nuksan",

"harmed": "nuksan goijjé",

"harmonica": "baza",

"harmonious": "ektalor",

"harmony": "militáka",

"harry up": "duadi gór",

"has": "asé",

"has to come": "háa foribóu",

"hassel free": "precani sára",

"hat": "sánidiya thufi",

"hatchling": "hossób ór sóo",

"hate": "nafórot",

"hatred": "nafórot gorá",

"have": "asé",

"having": "táker/asé",

"hawk": "sil",

"hawker": "rastar duan",

"hazard": "hótora",

"hazelnut": "hazel dana",

"he": "ite",

"he did not come": "ite nú aiyé",

"he does not come": "ite nu aiyé",

"he has": "itartú",

"he never came before": "ite age honódin nú aiyé",

"he who": "ze/zibá",

"he will come at all": "ite ebbre nu aibóu",

"he will never come": "ite honódin nu aibóu",

"he will not come ite": "nu aibóu",

"He You": "yaá",

"head": "matá",

"head cannot move up": "matá tulí nofare",

"head dazzling": "matá gúañr",

"head hair fall": "matár sul zóra",

"head heated up": "matá gorom ór",

"head imbalance": "matá fakká",

"head lice": "matár uinn",

"head of state": "decór royis",

"head panic": "matá sisia",

"head poking": "matá thonthonar",

"head tightening": "matá dóra",

"headache": "matá hoñrani",

"headed": "muk/matá diya",

"header": "matá",

"header bar": "hédhar baár",

"headmaster": "hédhmasthor",

"headphone": "hédhfun",

"headquarter": "tánar guijjali",

"headquater": "morkos",

"headset": "hanor bote",

"heal": "dabai",

"healed": "zohom fúaiyé/bóri aiccé",

"health": "sehét/aram(iyot)",

"healthcare": "sehéti dekbal",

"healthy": "sehéti",

"hear": "fún",

"heard": "fúinne",

"hearing": "fúnani",

"hearing impaired": "fúna komzur",

"hearing problem": "fúna mockil",

"hearsay": "fúnta hotá",

"heart": "kolób/dil",

"heart beat": "hoilla dudduwar",

"heart failure": "kolób fél úwa",

"heart rate": "dilor cúr",

"heart shape": "dil or cokól",

"heartbeat": "dilorthip",

"heartbroken": "hoilla báñigiyói",

"heat": "gormi",

"heated": "goromdiya",

"heater": "hithar",

"heating": "goromgorá",

"heaven": "asman",

"heavier": "bicí bári",

"heaviest": "ebbre bór",

"heavily": "bicí gorí",

"heaviness": "bári",

"heavy": "bór/mozbut",

"heaviest": "uzón óla",

"heavier": "bári",

"heavy rain": "dhoor",

"hedgehog": "kúduk",

"heedless": "forbasára",

"heedlessness": "forba",

"heel": "foolmurí - théng or fool murí",

"heifer": "harúl - harúl gouru",

"height": "usol/lambá",

"heighten": "usol goré",

"heightened": "usol goijjé ",

"heinous": "hóraf",

"held": "dóijje",

"hell": "zuzuk",

"hello": "assolamu aláikum/keén asó",

"helmet": "doró thufi",

"help": "modot",

"helped": "modot goijjé",

"helper": "modot goróya",

"helpful": "modot goréde",

"helping": "modot gorér",

"helpless": "tórsára",

"hem": "hañsa",

"hen": "kuúñri kura",

"hence": "yián ólla bouli",

"heptagon shape": "háñt kuinna cokól",

"her": "íbár",

"here": "yiánot/iñyót",

"here it is": "ótiya",

"hereafter": "Ahérot",

"heritage": "miras",

"hernia": "fisála",

"hers": "ibár",

"herself": "íba nize",

"hesitate": "córma/dhora",

"heven": "jonnot/bístoh",

"hexagon": "sókuinna",

"hexagon shape": "sókuinna cokól",

"hi": "hello ",

"hibiscus": "forifúl",

"hiccups": "híkkani",

"hidden": "luwaiya",

"hide": "luka",

"hide and seek": "lukkelani kéla",

"hiding": "luwar",

"high": "usol",

"higher": "usoilla",

"hight": "usolot",

"high quality": "mozbut/aála doroja",

"high-risk": "bocí hótara",

"higher": "usoilla",

"highest": "ebbre usol",

"highlight": "foórgor",

"highlighted": "waazá goijjá",

"highlighter": "foór goróni",

"highly": "bicí gorí",

"hiking boots": "faár uçéde zuta",

"hill": "murá",

"hilsa": "ilímmas",

"him": "taré",

"himself": "íte nize",

"hip": "keñil or zura",

"hippo": "híppu janwar",

"hire": "keriya gor",

"his": "itar",

"histori": "tiarik",

"historian": "tuariki manúic",

"historical": "tuariki",

"historically": "tuariki hísafe",

"history": "taariki",

"hit": "gúca mar",

"hitting": "bari marer",

"HIV": "biaram fáith gorá komzur óizagóide biaram",

"HIV Human Immune Deficiency Virus": "maincór dofágorá komzur goréde fuk",

"hobby": "cóouk",

"hoe": "fáñça",

"hoist": "thanitul",

"hol": "trap",

"hold": "dór",

"held": "dóijje",

"holding": "dórer",

"hold up": "uormikká dóro",

"holding": "dóriraker",

"hole": "fóth/gañt",

"holiday": "cúthkir din",

"hollow": "kúlkuillá",

"home": "gór",

"home address": "góror thíkana",

"home affairs": "gór maamela",

"homeless": "begór/górsára",

"homeless people": "górsára manúic",

"homeowner": "góror maalek",

"homepage": "górfata",

"homing student": "zagir",

"homogeneous": "ekí kisím óon",

"Hon": "Mohótorom",

"honest": "imandar",

"honesty": "imandari",

"honey": "modú",

"honor": "córman/fohór/boroizzot",

"honorable": "izzot(ola)",

"hook": "kuñça",

"hooligan": "gundha",

"hop": "fálmar",

"hope": "acá/ummit",

"hopefully": "acá gorídde",

"hoping": "acá/ummit gorír",

"horizon": "asman or guijja",

"horizontal": "fattóijja",

"horn": "cíng",

"horrible": "dhorlágede",

"horrifying": "dhorlagedé",

"horror": "ódor baára dhor",

"horse": "gúra",

"horseman": "gúñra soréde manúic",

"hose": "fanír páip",

"hospital": "dhaktor hana",

"hospitalize": "hósptal tuillé",

"host": "girós",

"hostel": "óosta hóthel",

"hostile": "ducmoni/uldha",

"hostility": "ducconi",

"hot": "gorom",

"hotter": "bicí gorom",

"hottest": "ebbre gorom",

"hot chocolate": "gorom cókeleith",

"hot tub": "gorom tab",

"hot water": "gorom faní",

"hot water bag": "gómor bag",

"hotel": "hóthel",

"hotter": "bicí gorom",

"hottest": "ebbre gorom",

"hour": "góndha",

"hourly": "góndha hísafe",

"house": "gór",

"house beetle": "boóñra",

"household": "gór(bari/ola)",

"housing": "górbari",

"housing subsidies": "gór hóssa",

"how": "kengóri",

"how come": "kengóri",

"how do you feel now": "yaa keén lager",

"how far": "hoddúr duré",

"how is now": "yaa keén",

"how long": "hotódin",

"how long is": "hoddúr lamba",

"how many": "howá",

"how much": "hodún",

"how old": "boc hoddúr",

"however": "mogor/kintu",

"hub": "mazdáli",

"hubbub": "uzara uzori",

"huge": "bicí dhoóñr",

"human": "manúic/insáan",

"human being": "insán zati",

"human rights": "insáni hók ókkol",

"Human Rights Chief": "Insáni Hók ókkol ór Boro",

"Human Rights Commission": "Insáni Hók ókkol ór Komisen",

"humanitarian": "insániyoti",

"humanity": "insániyoti",

"humid": "uñáiththa",

"humiliate": "beizzot/zillot",

"humiliating": "zilloti/beizzoti gorá",

"humiliation": "beizzoti gorá",

"hundred": "ekcót",

"Hundred": "ekcót (100)",

"hundred thousand": "lak(ekcót ázar)",

"hundred-one": "ekcó-ek",

"hundreds": "cót cót",

"hunger": "búke",

"hungry": "búkah",

"hunt": "cíarigor",

"hunter": "cíkari",

"hunting": "cíyar gorá",

"hurt": "duk/zohóm",

"husband": "zamai",

"husband of mother's sister": "hálatou zamai",

"hut": "bacá",

"hydrogen": "haidrujan háwa",

"hyena": "rang kuñir",

"hygiene": "sehét or sófaiyi",

"hymann": "hamad/munajat",

"Hymn": "hamad/munajat",

"hypocrite": "munafék",

"háijj": "Hójj",

"hít": "barimar",

"hóstel": "eskuilla fuain tákede gór hósthel",

"hót": "gorom",

"I": "añí/mui",

"i": "añí",

"I am": "añí",

"I am fine": "añí gom así",

"I am free": "añí azur así",

"I available": "añáre faazaibou",

"I have": "añártu",

"I will direct you": "Añí tuáñre icára goijjóum",

"ice": "boróf",

"ice cream": "áiskrim",

"ice cream maker": "boróf krím banoni",

"ice-cream": "áiskrim",

"icecream": "áiskrim",

"iced tea": "boróf diya saá",

"icon": "aikon",

"ICU Intensive Care Unit": "Entahá Kérmosor Hána",

"ID": "id/sinnor kaádh",

"idea": "fíkara/báfana/híyal",

"identification": "sinno",

"identified": "sinágiye",

"identify": "sinnogor",

"identity": "siná",

"idle": "boiçá - hamsára",

"idolatry": "bút fuñza",

"ie": "mesál hísafe yáni",

"if": "zodi",

"if not": "ar noóile",

"if possible": "zodi mumkin óile/farilé",

"if so": "zodi éndila ó",

"if we want": "sailé",

"if you": "zodi tuñí",

"if you want": "zodi tuñí soó",

"if you want this": "zodi tuñí yián soó",

"if you yián soó": "zodi tuñí yián soó",

"ignorant": "jahél",

"ignore": "badde/félairak",

"ill": "biaram lager",

"ill-advised": "uldha-mocuwaradiya",

"illegal": "bekaanuni",

"illegally": "bekaanuni gorí",

"illness": "bimari",

"illogical": "montek sára",

"illtreat": "bura sólluk",

"image": "fothú",

"imagine": "báfa/kolfona",

"imam": "mosóitot numás foradé manúic",

"immediate": "fóuran/ehón ór bútore",

"immediately": "toratori",

"immense": "bicí dhoóñr",

"immerse": "dufa",

"immersed": "dufaiya",

"immigration": "híjorot goróon",

"imminent": "matár uore aiyérde",

"immortal": "omoroni",

"immune": "imyún - imyuni",

"immune system": "gaa ye nize fáithgoréde nezám",

"immunity": "biaram héfazot or taakot",

"immunized": "biaram rukíbella dabai diyagiyéde",

"immunosuppressed": "imuni sippa",

"impact": "taásir/asór",

"impartial": "foróksára",

"impeccable": "maasum",

"imperfect": "ofuron/aibola",

"implement": "lagazaibou",

"implementation": "furagoróon",

"implemented": "fura goijjé",

"implementing": "fura gorér",

"implication": "bazátáka",

"implied": "musollot goijjé",

"impolite": "biaddob",

"import": "baártugólo",

"importance": "ahámiyot",

"important": "zoruri",

"importantly": "zoruri gorí",

"impossible": "namumkin",

"impression": "asór",

"imprint": "sibi sókbana",

"imprisonment": "ziyól",

"improve": "torki",

"improved": "torki goijjé",

"improvement": "torkigorá",

"improving": "beétor gorér",

"improvised": "éñte hoiyé",

"impunity": "sáñza maf",

"impure": "nafak",

"impurity": "miál",

"imune": "imuni",

"in": "bútore/ot mazé",

"in a state of open mouth": "áagoijjá",

"in addition": "yíar baade yó",

"in brief": "baiththát",

"in case": "zodi",

"in cash": "nogoti",

"in credit": "baikka",

"in fact": "hákikot ot",

"in front": "muúntu",

"in front of": "muúntu",

"in future": "mustokbel ot",

"in need": "moótaj óla",

"in order": "taáke",

"in person": "nize",

"in solidarity": "ettefák ot",

"in the meantime": "thaim ibát",

"in the middle": "mazé",

"in this day": "edin ot",

"in total": "kullé jomá",

"in vain": "beh(k)ar",

"inaccurate": "golot",

"inactive": "gairsalu",

"inadequate": "kafí noóde",

"inappropriate": "gair munaséf",

"incensed": "húcbodiya",

"incentive": "lalsí/hímmot",

"incidence": "waakia/hádesa",

"incident": "maamela/mosibot",

"incision": "siroon",

"inciting": "uskaider",

"inclined chair": "leth hadíra",

"include": "cámilgoré",

"included": "cámilgorágiye",

"including": "cámil asé",

"inclusion": "cámil",

"inclusive": "cámilgoijjá",

"income": "hamani",

"incoming": "aiyérde",

"incomplete": "adáadi",

"inconsistent": "agafísa no bonedé",

"inconvenience": "akuaicca/tokolif",

"inconvenient": "ocúida",

"increase": "bará/bicígor",

"increased": "barái/ezafa diye",

"increasing": "bráider",

"increasingly": "bicí gorí",

"incredibly": "taajuippa gorí",

"incurred": "luksan goijjé",

"indeed": "waakí/gomgom",

"indefinite": "nozaná",

"indefinite article": "nokir adát",

"indefinitely": "muddot sára gorí",

"indegenous": "asól bácinda",

"indentation": "lain góla",

"independence": "azadi",

"independent": "azad(ola)",

"independently": "azadir sáate",

"indeterminate": "thík gorí zana náide",

"index": "feris",

"index finger": "icára ouñl",

"India": "Índhia",

"India country": "Indiar dec",

"indian": "índhiyar manúic",

"indicate": "dahá",

"indicated": "daháiye",

"indicating": "dahár",

"indication": "icára",

"indicator": "icára",

"indigenous": "asól bácinda",

"indigestion": "behózomi",

"indiscriminately": "íncagorí",

"indistinguishable": "forógorá nozadé",

"individual": "ekála",

"individually": "alok alok gorí",

"Indonesia": "Indonesia dec",

"induce": "bíra",

"induction": "taarif",

"industry": "meél harhána",

"industry-focused": "meél harhánat díyandiya",

"iner shirt": "gonzi",

"infaction control": "fóila kontroul",

"infant": "ledafua",

"infecitious": "obabiaram",

"infected": "fukgóille",

"infection": "gáa",

"inferior vena cava": "nisor grudá loi lagaiya rok",

"inflamed": "uskaidiyé",

"inflict": "tába/suar mar",

"inflicted": "dukdiyé/tába maijjé",

"influenced": "asór/taasír goijjé",

"inform": "hóbordo",

"informal": "gair rosómi",

"informant relationship": "behóbor taalukat",

"information": "maalumat",

"informed": "hóbor diyé",

"informer": "tabbé/lagai douya/munafék",

"infrastructure": "asási hák",

"infront": "sárme",

"ingredient": "futh",

"inhabitant": "abadi",

"inherit": "mirasfaa",

"inheritance": "miras",

"inhuman": "omanúic",

"initial": "sáain/dostok",

"initialize": "cúru gor",

"initializing": "cúru gorér",

"initially": "cúrut mazé",

"initiate": "cúrugoró",

"initiated": "cúru goijjé",

"initiative": "cúruwat",

"injection": "fúkmara - thíka",

"injure": "zohóm",

"injured": "dukfaiyé",

"injury": "zohóm/duk/agát",

"injury prevention": "zohóm ruká",

"injury prone": "zohóm óifaredé",

"injury time": "zohómor thaim",

"injustice": "nainsáfi",

"ink": "cíyai",

"inner ear": "bútoror han",

"inner row teeth": "akkoli dat",

"innocent": "maasum",

"innovation": "noya banaiyéd jiníc",

"innovative": "noya toiyar gorá",

"input": "inpúth",

"inquest": "tahákik gor",

"inquiry": "súal juab ókkol",

"insect": "fuk/lok",

"insert": "dhaló",

"inserting": "gólaider",

"inserted": "gólaidyé",

"inside": "bútore",

"inspected": "tahákik goijjé",

"inspection": "tuai soón",

"inspector": "hókumot or cekgoréde manúic",

"install": "fíthgoró/lamo",

"installation": "inestóll gorá",

"installed": "fíthgoijjá",

"installer": "fíthgoróya",

"installment": "kistodiya",

"instance": "mesál/zendila/waakia",

"instant": "tesgorí",

"instead": "bodola",

"instep": "théngor uortú gúañya zaga",

"instigating": "tuláder",

"instituting": "fonnálla banar",

"instruct": "hédayotgor",

"instructed": "hoói/taalim diyé",

"instruction": "hoói/cíkai diya",

"instructions": "taalimat",

"instrument": "jontoro",

"insulated": "kucindiya",

"insulin": "insulínfaní",

"insult": "beizzonti gor",

"insulted": "beizzonti goijjé",

"intake": "émmikka thana/hózomgorá",

"integral": "beggún",

"integrate": "káamel gor",

"integrated": "káamel goijjé",

"integrity": "imandari/izzot",

"inteligent": "salák sotur",

"intelligence": "akol/zehén óla",

"intelligent": "salák",

"intend": "niyotgor",

"intended": "niyot goijjé",

"intensify": "hora gor",

"intensive": "ódor baáre",

"intent": "moksót/erada",

"intention": "erada/niyot",

"intentionally": "zanifúni",

"interact": "súal zuab gor",

"interacting": "súal zuab gorír",

"interaction": "súal zuab goróon",

"interactive": "súal zuab gorá",

"intercept": "ruké/rukó",

"intercepted": "ruká/tíagoágiyé",

"intercontinental": "intarkontinéntel",

"intercourse": "bouloi miloon",

"interdict": "maná goré",

"interest": "(ekmon)díyan",

"interesting": "dilcobí óla",

"interface": "mukámuki",

"interfere": "mudahelat gor",

"interferea": "mudahelat",

"interference": "dohól doon",

"interfering": "dohól der",

"interim": "tooitta/muákkot",

"internal": "bútorgwa/bútoror",

"internally": "bútoror",

"international": "alomi",

"internet": "intharneth",

"interpret": "hotá buzáide",

"interprete": "hotá buzáide",

"interpreted": "torjuma goijjé",

"interpreter": "hotá báñgidoya",

"interrupt": "ruké",

"interruption": "rukawoth",

"interval": "waqfa",

"intervened": "théng gólaidiye",

"intervention": "théng gólaidoon",

"interview": "mukabela",

"interviewed": "intarbyu goijjé",

"interviewee": "intarbyu douya",

"intestine": "añti",

"gut": "añti ókkol",

"intigrity": "ettefák",

"intimate": "koribi",

"intimidate": "dhor laga",

"intimidated": "dhor lagaiyé",

"intimidating": "dhor lagoon",

"intimidation": "dómki doon",

"into": "ót/bútore",

"intracranial": "matár bútoror",

"intranet": "elakar intharneth",

"intravenous": "rok ór bútore",

"introduce": "sinno do",

"introduced": "sinno goráidiye",

"introduction": "taarif/sinno diya",

"intruders": "bolazuri góloya",

"intubate": "niác ólla nol góla",

"invalid": "gairkaanuni",

"invaluable": "bicí moillo ola",

"inventory": "inventhori",

"invest": "kumdo",

"investigate": "tadarotgor",

"investigated": "tahákik goijjé",

"investigation": "tadarot/tahákik gorá",

"investment": "arang",

"invincible": "félai zai nofaréde",

"invisible": "dahá nozade",

"invitation": "dawot",

"invite": "dawot do",

"invited": "doot diyé",

"invoice": "bil",

"invoke": "waapes loi",

"involuntarily": "bolazuri gorí",

"involuntary": "bolazuri",

"involve": "cámil ó",

"involved": "cámil goijjé",

"involvement": "cámil táka",

"involving": "cámil gorér",

"ip address": "ip thíkana",

"iPod": "iPod",

"Iranian": "Iran or manúic",

"Iraq": "Irak",

"Iraqi": "Iraqor manúic",

"iris": "sugór futoli",

"iron": "luwá/istiri",

"iron beam": "luwár bim",

"iron rope": "síyol or rosí",

"irredeemable": "dubara diya nozadé",

"irrefutable": "ebbre inkar gorí nofaréde",

"irregular": "behañsúra",

"irrespective": "nogorí",

"irresponsible": "honó kiár sára",

"is": "(ói)lde",

"is it": "yián né?",

"Isaac": "Isahák",

"Isha": "Ecár thaim",

"isha": "ecár",

"Islam": "Dini islam",

"Islamic": "Islami",

"island": "dhiya",

"isolate": "ekála goré",

"isolated": "ekála raikké",

"issue": "maamela/mockila",

"issued": "neelaidiyé",

"issues": "maamela ókkol",

"Istanbul": "Istanbul cóor",

"IT": "Komputar maalumat or teknoloji",

"it": "yían",

"it is said": "bole",

"itch": "uñta",

"itching": "uñtani",

"item": "sáman(a)/mal",

"its": "yián ór - íbar",

"itself": "yían nize",

"IUD": "Intrauterine Device Fuain noóibélla Rukéde Ziníc",

"ixora red": "binipfúl",

"Jaber": "Rohingyar maincór aám nam",

"jackal": "cíyal",

"jacket": "jakéth",

"jackfruit": "haththól",

"jaggery": "miçá",

"jaguar": "gendha bag",

"Jahangir": "Jáhangir",

"jam": "jaám",

"Jamal": "Jamal",

"jammed": "jamgoijjá",

"January": "foóila mác Januari",

"Japan": "Japan or dec",

"Japanese": "Jafani manúic",

"japanese": "japani",

"jar": "zok",

"jasmine": "homboiccá fúl",

"jaw": "gal or keñsi/saba",

"jealous": "hásoroti/aling gorá",

"jealousy": "hásorot",

"jeans": "jínhoor",

"Jeddah": "Jiddá cóor",

"jeep": "jiíp garí",

"Jeffrey": "Jeffrey",

"jelly": "jeél",

"jellyfish": "nuinna",

"Jesus": "poigambor Isá",

"jet engine": "jéth injin",

"jetty": "jethí",

"Jew": "Juú",

"jewelry": "cúna sañdi",

"jihad": "jihád/kucíc",

"jim": "jim",

"jinn": "jin",

"job": "ham/hamhoro",

"job title": "hamor zaga",

"jobless": "hamsára",

"jog": "kuñirdá duñra",

"join": "mil/mulakat",

"joined": "zura diyé",

"joint": "zura",

"jointly": "miliyoré",

"joke": "fáaca",

"journal": "jarnel",

"journey": "sofór",

"jubba": "kuruta",

"judge": "kazi",

"judgment": "kiyamot or din",

"jug": "zok",

"juice": "roc",

"juiceless": "rocsára",

"juicy": "rocola",

"Julia": "Julia",

"July": "Julai  7 mác",

"Juma": "Cúkkubar or numáz",

"jump": "fálmar",

"jumping": "zámmarer",

"jumped": "zámmaijjé",

"jumper": "zámaroya",

"junction": "goldi",

"junctions": "somóni",

"June": "Jun 6 mác",

"jungle": "jonggol/zooñl",

"junglefowl": "cíyari kurá",

"junk": "hosora",

"Jupiter": "Jupitar",

"jurisdiction": "fáisela goríbar ejajot",

"just": "éhon/bós",

"just be aware": "seróf húñciyar táko",

"just now": "ehón ehón",

"just said": "éhon hoiyé",

"justice": "insáf",

"justified": "insáfióiye/hókóiye",

"jute": "faththwa",

"jute leaves": "naricák",

"jute spinach": "naric ák",

"juvenile": "fuaindór",

"Kaba": "Kabá Allahr gór",

"kangaroo": "kengurú",

"keep": "rak(ó)",

"keep control": "konțroul rakó",

"keep to the appointment": "epuainmén thík rakó",

"keeper": "goóuli",

"kept": "rakágiye",

"kerchief": "nuwal",

"kessú": "something",

"ketchup": "thaiyon ficcá",

"kettle": "ketóri",

"key": "sabí",

"key facts": "ahám hákikot",

"key seats": "ahám síth óll",

"keyboard": "komputar or kíibudh",

"kg": "kilogram",

"ki": "what",

"kick": "latímar",

"kick and punch": "latí gúca",

"kicked": "latí maijjé",

"kid": "gura fua",

"kidding": "larer/mozaák gorér",

"kidney": "kidni/gíla",

"kidney failure": "grudá fél óon",

"kids": "fuain",

"kill": "marifél/kotól",

"killed": "kotol goijjé",

"killer": "kaatil",

"killing": "kotól goróon",

"kilobyte": "kilubáith",

"kilogram": "thousand gram",

"kin": "rictadar",

"kind": "noromdil ola",

"kind regards": "ehéterám izzotgorí",

"kindhearted": "dilnorom ola",

"kindle": "uzal/zolani",

"kindly": "mehérbani gorí",

"king": "raza/baccá",

"king crow": "déssurú",

"kingfisher": "maiccárana",

"kiss": "appá/suma de",

"kit": "sónduk",

"kitchen": "ooula",

"kite": "góndhi",

"kite faik": "undur thígoroni",

"kitten": "bilairsó",

"kiwi": "kiwi",

"knee": "añçú",

"knew": "zainné",

"knife": "súri",

"knit": "sílai",

"knob": "dóroni",

"knock": "baijja",

"knock on": "baijja",

"know": "zane/siné",

"knower": "zanoya",

"knowing": "zaner",

"knowledge": "elóm fonná/zana",

"known": "zanaza",

"knuckle": "ouñl or girá",

"knuckles": "ouñlor girá óll",

"koel": "kuilá",

"kuaic": "kuaic",

"Kuwait": "Kuwéit dec",

"label": "nam or faththi",

"labor": "goóur",

"laboring": "mozduri gorá",

"labour": "goóur",

"laceration": "gaa fáça",

"lack": "homi",

"lacking": "homi",

"ladder": "cíçih",

"laden": "furaiya",

"lady": "maiyafua/hátu(n)",

"lady finger": "béra",

"lady professor": "beçi profesar",

"lady teacher": "masthorni",

"ladybird": "zunífuk",

"laid": "félaiye",

"lake": "dhií",

"Lakh": "ek lák (1,00,000)",

"lamb": "béra sóol or gusso",

"lame": "lengaçá",

"lamp": "batti/sarak",

"land": "zomin",

"landed": "laimmé",

"landing": "lamer",

"landlord": "keriyadar",

"landowner": "zomidar",

"lane": "gura rasta",

"language": "zuban",

"lantern": "fánoc",

"lap": "kul",

"large": "dhoóñr",

"largest": "ebbre dhoóñr",

"large basket": "dhul",

"large intestine": "dhoóñr añti",

"largely": "boro gorí",

"larger": "beecdhoóñr",

"largest": "ebbre dhoóñr",

"larynx": "abasor fethi",

"laser": "lezar",

"lash": "súañloi mar",

"last": "ahéri",

"last day": "háñcoroddin",

"lasted": "thikkyé",

"late": "deri",

"late August": "Ogós ór ahéri",

"later": "baade",

"lateral": "báfa nozade torika",

"latest": "ahéri/noya",

"latest news": "taza hóbor",

"laugh": "háñc",

"laundry": "dúwoni",

"laundry basket": "dúoni dhula",

"law": "kaanun",

"law court": "kaanuni koóuth",

"law enforcement agency": "kaanun zarigorár ejénsi",

"lawfully": "kaanuni",

"lawn": "kérzobin",

"lawn beetle": "fúañ",

"lawn mower": "kér haçoni",

"lawyer": "ukil",

"lay": "bia/andha far",

"lay off": "neelai de",

"layer": "forol",

"layout": "háka bondi",

"lazy": "alcí(mikka)",

"lazy eye": "thiyor",

"lb": "uzón",

"lead": "lídgor",

"leader": "liídhar/neta/munafék",

"leadership": "liídhari/netagiri",

"leading": "sóddari gorér",

"leaf": "fata",

"leaflet": "habosfata",

"leak": "fanícocá",

"lean": "élande/fatol",

"learn": "cík",

"learned": "elómóla",

"learned man": "elóm óla manúic",

"learnet": "cíkifélaiye",

"learning experiences": "cíkar tojruba ókkol",

"learnt": "cíkkye",

"lease": "keriyar habos",

"least": "homashom",

"leather": "samra",

"leave": "neel/neeillé",

"leaves": "fata",

"leaving": "neelizar(goí)",

"lecture": "dorós - lekcar",

"led": "sóddari goijjé",

"leech": "zuk",

"left": "bandhák",

"left lung": "ban dhákor féccwa",

"left side": "baáñt",

"left-handed": "baáñitta",

"leg": "théng",

"legacy": "miras/nicáni",

"legacy of lies": "mirasi jútha",

"legacy support": "mirasi hémayot",

"legacy system": "mirasi nezám",

"legal": "kaanuni",

"legal contract": "kaanuni ettefáki",

"legal paper": "kaanuni habos",

"legally": "kaanuni gorí",

"legend": "alamot",

"legislation": "lehá kaanun",

"legit": "kaanuni",

"legitimate": "kaanuni",

"write": "lek",

"write": "lekó",

"writing": "lekér",

"writing": "leká",

"writing pen": "lekóni",

"written": "leikká",

"lemon": "hoñsi lemu",

"lemonade": "lemujiníc",

"lender": "udár douya",

"length": "lambayi",

"lengthen": "lambagor",

"lengthy": "lamba",

"lentil": "dhail",

"leopard": "lamba bag",

"less": "hom",

"less than": "óttu hom",

"lessening": "homar",

"lesser": "bicí hom",

"lesser quality": "komzur",

"lesson": "sóbok",

"let": "ejazot de",

"let some one enter it": "góla",

"let us go": "añára zai",

"let us know": "añárare zanaido",

"lethal": "morizaigói faradé",

"letter": "hót/hórof",

"letter bomb": "ciñçír buúm",

"letter box": "ciñçír fethi",

"letterhead": "roisi hédh",

"lettering": "hórof lekóon",

"level": "tobka",

"lever": "haláng",

"liability": "mosulía",

"liable": "zimmadar",

"liaise": "taaluk goríde",

"liaising": "taaluk goráider",

"liaison": "taaluk goróon",

"liar": "misáhoya",

"library": "laibreri",

"lice": "uinn ókkol",

"licence": "laisén",

"lid": "gúroni",

"lie": "misáho",

"lier": "misá houya",

"lieutenant": "lefthinen",

"life": "zindigi/háyat",

"life after death": "ahérot",

"life and heart": "janforan",

"life style": "solasol",

"life-sustaining procedures": "zindigi basadé karwaiyi ókkol",

"lifestyles": "torzó zendegi",

"lift": "tul(oné)",

"light": "foór/batti",

"lightening": "bijili",

"lighter": "ooin doráni",

"lighthing": "bijilir foór",

"lighthouse": "baárbatti",

"lighting": "rucni",

"lighting bold": "tháçal",

"like": "fosóngor",

"like that": "éndila",

"likelihood": "emkan",

"likely": "óit farede",

"lily": "foddafúl",

"limb": "hát théng",

"limbo": "nó edor nó udór",

"lime": "houñsi",

"limit": "hód",

"limitation": "hót/húdut",

"limited": "hódud or bútore",

"line": "cúr",

"linebreak": "cúrbáñgga",

"lingual": "zubani",

"linguist": "zuban or mahéri manúic",

"link": "rabeta",

"linked": "lagaiya",

"lion": "cínggo",

"lip": "uñth",

"liquid": "rocfaní",

"list": "liís",

"listed": "liís goijjé",

"listen": "fún",

"listened": "fúinne",

"listener": "fúnoya",

"listening": "fúna",

"litchi": "lesu",

"literacy": "fonná",

"literate": "fonná óla",

"literature": "adob",

"little": "túragori",

"little bottle": "cícirí",

"little cormorant": "faní hóuri",

"little fingure": "kinnoul",

"little toes": "théngor cóñço ouñl ókkol",

"live": "ziañda(soler)",

"livelihood": "zindigi",

"liver": "hoilla",

"lives": "jan ókkol",

"living": "táker",

"living allowance": "háibar arde tákibar hóssa",

"living quarter": "tákode gór",

"lizard": "thuththéng",

"load": "fuñzá",

"loading": "mal tulér",

"loan": "horza",

"lobby": "boiçókhána",

"lobster": "súañ isamas",

"local": "elakar",

"locale": "mokami",

"locality": "elaka",

"localization": "mokamigoróon",

"locally": "zagat",

"locate": "talasgor",

"location": "zaga ókkol",

"lock": "thala",

"story": "kissá",

"lockable": "thala marifare de",

"lockdown": "bon raká",

"locked": "thala mari raikké",

"locker": "thala ola almali",

"lodge": "tooitta tákede zaga",

"tulído": "gura góror geith",

"lodging": "tooitta táker",

"log": "loóggor",

"logged in": "góille",

"logging": "dhatha zomagoró",

"logical": "monteki",

"logical order": "monteki tortif",

"login": "bútore gól",

"login id": "bútore gólibór id",

"logistic": "mal análiozar ham",

"logo": "márha fothú",

"logout": "baárkule neeiló",

"loin": "cúor or ran (pork)",

"lolly": "mithái",

"loneliness": "Háilla gaa",

"lonely": "ekála/háliga",

"long": "lamba",

"long beans": "mokka sóñi",

"long leaf coriander": "bilati boór fata",

"long pillow": "lamba balúic",

"long strong oar": "dar",

"long vowel": "dui hórof vawel e.g. “aa”",

"long-lasting": "deri thikedé",

"long-pant": "lamba feén",

"longer": "bicí lamba",

"longest": "ebbre lamba",

"longue": "lamba hadíra",

"look": "saá",

"look at": "íkka saá",

"look down": "íncagor",

"look forward": "to acágore",

"look forward to seeing you soon": "tuáñr loi hára mili bélla saáir",

"look up": "uormikká soó",

"looked": "saiyé",

"looking": "saár",

"looking here there": "bílbilar",

"loose": "óñc/hóñc",

"loot": "luthgor",

"looting": "luçífélar",

"Lord": "Rób ALLAH",

"lorry": "loóri garí",

"lose": "(á)/(h)ro",

"lose weight": "uzón homgor",

"loser": "árouya",

"loss": "gunáari",

"lost": "háñzigiyói",

"lot": "beggún/bicí",

"lotion": "bízani tel",

"lots": "thal ókkol",

"lottery": "letharí",

"loud": "usol abas",

"loud - loudly": "dhoóñr",

"louse": "matár uinn",

"love": "adorgorí",

"loved ones": "adoijja ókkol",

"lovely": "adoijja",

"lover": "acék/muhábbot goróya",

"low": "hom",

"low 1": "bicí nise",

"lowest": "ebbre nise",

"lower": "nise gor",

"lower lip": "nisor uñth",

"lowercase": "cóñçohát or leká",

"lowest": "ebbreniso",

"lowland": "zolázaga",

"loyal": "fórmadar",

"ltd": "limíth goijjá kumpani",

"luck": "nosíb/kismot",

"lucky": "báiggoitta",

"lunar": "month san dor mac",

"lunatic": "fool",

"lunch": "duñíjjar hána",

"lunch box": "duñíjja hánar kuththa",

"lung": "féccwa",

"lungi": "longgi",

"lungs": "fécca",

"LWB Life without Barriers": "Rukawoth Sára Zindigi",

"lychee": "lesu",

"lying": "misá hoór",

"machete": "lamba doo",

"machine": "micín",

"macro": "boro",

"mad": "fool",

"mad at": "gousha",

"madam": "madám",

"made": "banaiyé",

"magazine": "magazín",

"Maghrib": "Mogorib thaim",

"maghrib": "mogorib",

"magic": "zadu",

"magician": "zadugor",

"magnet": "keñsaluwá",

"magnification glass": "dhoóñr gorí saáde ana",

"magpie robin": "thaiyá",

"mailbox": "ciñçír fethi",

"maimed": "maáim boom ot duk faiyéde manúic",

"maiming": "hótara zohómi gorá arde át théng behañ gorífélla",

"main": "ahám/asól",

"main factor": "asól karon/wojá",

"mainland": "meéin zaga - asól zaga",

"mainly": "háas gorí",

"maintain": "thík/héfazot raké",

"maintained": "héfazot raikké",

"maintaining": "héfazot rakér",

"maintenance": "thíkrakóon",

"maize": "mokka gula",

"major": "dhoóñr",

"majority": "beec híssa/bák",

"make": "bana",

"made": "banaiyé",

"making": "banar",

"make certain": "taákit gor",

"make friend": "dustígor",

"make same": "ódode gor",

"make some one taste": "moza dahó",

"make sure": "taákit gor",

"make understand": "buzó",

"maker": "banoya",

"makeshift": "tooitta",

"making": "banar",

"making ready": "toiyar gorér",

"making the land free": "aabad",

"malaria": "maléria",

"Malaysia": "Malésíar dec",

"male": "morot fua",

"male cow": "bolot goru",

"male dog": "kutta",

"male goat": "fañçá sóol",

"male sheep": "façá sóol",

"maltiply": "toksim gor",

"man": "manúic/insáan",

"manage": "anjamde",

"managed": "anjam diyé",

"management": "entezamiya",

"manager": "menéjar",

"managing": "menéjing dharekthar",

"mandate": "goríbar ejajot",

"mandatory": "laazimí/zoruri",

"mango": "amm",

"manifest": "sáf sáf zahér",

"mankind": "insánzati",

"manner": "solafíra",

"manner less": "monzokká",

"manners": "adob ahálak",

"manning": "manúic der",

"manual": "hátot rakéde kitab",

"manual oil-press": "gáni",

"manually": "hátegor",

"manufacturing": "mal neelar",

"Manus": "Manús dec",

"Manusian": "Manús ór manúic",

"many": "bicí",

"map": "nokcó",

"marble": "bolád",

"March": "tesára mác",

"march": "ageboçó",

"marigold": "sódorok fúl",

"marine": "doijjar",

"marital": "beça beçir",

"marital status": "biyátar háalot",

"maritime": "doijjar",

"mark": "nicána/hót/dak",

"marked": "nicán lagaiyé",

"marker": "markár",

"market": "bazar",

"in market": "bazarot",

"marketer": "bazar goróya",

"marking": "maárk lagoon",

"marquee": "thambu",

"marriage": "cádi",

"married": "biyá(ta)goijjí",

"marry": "biá gor",

"Mars": "Márs",

"martyr": "cóhid",

"mash": "alubátta",

"mask": "mukzáfani",

"masked": "mukzáifaiye",

"mass": "dhoóñr bicí",

"massacre": "haçahaçi",

"massage": "maz(o)",

"master": "macthor",

"master card": "benkor kárdh",

"mat": "caça/façi",

"match": "bone/mukabela",

"matched": "millé/mukabela-óiye",

"matches": "sóloi",

"material": "mal",

"maternal aunt": "mami/hála",

"maternal health": "maar sehét - maar tondurustí",

"maternal uncle": "mamu - mou - maar dhákortu egana",

"maternity care": "fuabia debal",

"maternity hospital": "fuain óde hóspital",

"math": "hísab",

"mathematics": "hísabor mouzú",

"matter": "mosólla/maamela",

"matter of making intelligence": "yián buzár maamela",

"matter of words": "alfaz or maamela",

"mattress": "gadi",

"maximise": "bicíttu bicí gor",

"maximising": "bicíttu bicí gorér",

"maximum": "bicíttu bicí",

"May": "Mee",

"may be": "óitfare",

"may follow expert guidelines": "expáath ór dostur ókkol amól goríth fare",

"may quote me": "añáre háwala difaribóu",

"maybe": "óitfare",

"mayor": "elakar boro",

"maze": "behañsúra rasta",

"me": "añáre",

"meal": "hána",

"mealt": "unái(félaiye)",

"mean": "maáni óilde",

"meaning": "maáni",

"meaningful": "maáni aséde",

"means": "zoriya",

"meant": "murat",

"meantime": "thaim or bútore",

"meanwhile": "thaim ibát",

"measure": "bebastá",

"measurement": "mafa",

"measures": "maf",

"meat": "gusso",

"media": "midhia",

"medical": "daktori",

"medical condition": "sehétor háalot",

"medical opinion": "daktori rai",

"medical summary": "daktori kúlasa",

"medically": "daktori hísafe",

"medication": "dabaidiya",

"medicine": "dabai ocút",

"medium": "mazilá",

"mediumly": "mazé máijja gorí",

"meet": "dola ó",

"meeting": "dola/mulakot ór",

"megabyte": "megabáith",

"melastoma flower": "futtifúl",

"melee": "hoijja",

"melody": "talgana",

"melon": "baki",

"melt": "miligiyói",

"member": "membór",

"membership": "membórcíp",

"memo": "yiad dac",

"memorable": "yaadgar",

"memorandum": "yiaddác",

"memorize": "yiadgor",

"memory": "yiad dac",

"men": "manúic ókkol",

"mental": "demaki",

"mental function": "demaki ham",

"mental health": "demaki sehét",

"mental health crisis": "demaki sehéti mockil ól",

"mentally": "demaki hísafe",

"mentioning": "hoóider",

"mentor": "gurú",

"mentoring": "mocuwarader",

"menu": "liís",

"merchant": "códori/taajor",

"merchent": "taajer",

"merciful": "rahámot óla",

"mercury": "maakuiri",

"mercy": "rahámot",

"Mercy of Prophet": "Rahámot or nobi",

"merely": "siríf fokót",

"merge": "milaiféla",

"merit": "kaabiliyoti",

"mess": "fúañti hána háde zaga",

"message": "(k)hóbor",

"messaging": "hóbor der",

"Messenger": "hóborgwa",

"messy": "seder béder",

"met": "dola óiye",

"meta": "uoror",

"metadata": "uoror dhatha",

"metal": "methél",

"meter": "mithár",

"method": "torika/rasta",

"methodology": "torikakar",

"metre": "mithár",

"mice": "undor ókkol",

"micro": "cóñço",

"microflora - gutflora - microbiota": "zunímúni",

"microscope": "dhoóñr daháde hol",

"microwave": "maikrusulá",

"mid": "mazé",

"middle": "fúan mazé",

"in the middle": "mazóto",

"in middle": "mazóto",

"middle ear": "mazór han",

"middle finger": "mazór ouñl",

"middle fingure": "mazór ouñl",

"middle head top": "dúddui",

"middle lobe lung": "mazór fak",

"middle of the night": "rait nicí",

"middle school": "mazór eskul",

"midnight": "rait nicí",

"midwife": "fuadóroni",

"might": "óitfaittou",

"might be": "óitfare",

"mighty": "taakotwala",

"lgbtq": "Shoetanor Goo/fundó Ukkol",

"migrate": "hijirot gor",

"migration": "híjorot",

"migration act": "hijirot or ain",

"mike": "hotár abas oré eléktrik cokól banadé jiníc",

"mild": "ekkená/túra",

"military": "fóuji",

"milk": "dut",

"milkshake": "dutgáñça",

"mill": "atha ficóni",

"million": "doc lák",

"millipede": "házar théingga",

"minaret": "minaara",

"mind": "demak",

"mindful": "eésas",

"mine": "añár",

"minestrone": "súp",

"minibus": "gura baás",

"minimal": "homot",

"minimise": "homottú hom gor",

"minimum": "ebbre hom",

"mining": "miçikurí neeloon",

"minister": "uzir",

"ministerial": "uziri",

"mink": "uit",

"minor": "gura/nabalek",

"minority": "akoliyot/gurakoum",

"minority group": "akkoli grúp",

"mint leaf": "fudina fata",

"minus": "náges/homi",

"minute": "miníth",

"miracle": "keramot",

"miraculously": "gaibi hísafe",

"mirage": "balur comka faní táafan lage",

"mirror": "ana - aina",

"mischief": "hórafi",

"misdemeanour": "gura hosúri",

"miser": "bohíl - bokhíl",

"miserable": "dukkoítta",

"miserably": "samar gorí",

"misery": "dile dukfar",

"misfortune": "fára",

"misinformation": "golot hóbor",

"misinterpreted": "golot torjuma goijjé",

"misleading": "gumrá goróon",

"miss": "fethfure",

"missed": "fethfuijjé",

"missile": "mizail",

"missing": "áñzigiyói",

"mission": "moksót",

"mistake": "golot",

"mister": "jonab",

"misunderstanding": "golot buzá",

"misunderstood": "golot buijjé",

"misuse": "golot estemal gorá",

"mitigate": "homaide",

"mitigating": "homaider",

"mitigation": "homgorá",

"mix of spices": "mosólla",

"mob": "zák",

"mobile": "mubáil fún",

"mock": "técera",

"mockery": "mockari",

"mode": "torika",

"model": "modhél/cokól",

"moderate": "dormiani",

"moderately": "niyom gorí",

"moderation": "noya goróon",

"modern": "noya",

"modernization": "noyahoró",

"modification": "tobdili",

"modified": "tobdil goijjé",

"modify": "bodol",

"modular": "mogosi",

"module": "modhúl",

"moist": "bízabiza",

"molar teeth": "marír dat ókkol",

"molar tooth": "marír dat",

"mole": "zaasus",

"mom": "mother",

"moment": "ekkená thaim",

"this moment":"ehon ehon",

"monastery": "fúngri kiyan",

"Monday": "Cómbar",

"money": "thiñya foisá",

"money collection": "thiañ zoma goróon",

"mongoose": "bizi",

"monitor": "nozorrak",

"monitored": "negarani goijjé",

"monitoring": "negerani gorér",

"monk": "thóurjya",

"monkey": "bañdor",

"monsoon": "zórborsat",

"month": "mac",

"monthly": "macharbari",

"mood": "tobiyot háalot",

"my mood": "ar tobiyot",

"your mood": "tor háalot",

"moon": "san",

"moon appeared": "san uillé",

"moon comes out": "san neele",

"moon decreasing": "san cóñço órr",

"moon eclipse": "san oré gonná dóijje",

"moon increasing": "san dhoóñr órr",

"moon light": "zunáppor",

"moonless night": "fundimaiccá rait",

"moonlight": "san or foór",

"moonrise": "sun ula",

"moonset": "san dhufá",

"mop": "jáñçu",

"moral": "ahálak",

"morality": "ahálak adob",

"more": "aró bicí",

"more than anything else": "honó ciz ottú áro bicí",

"moreover": "yíar baade",

"morning": "beínna sóore",

"mortage": "rehín",

"mosque": "mosóit nuwás foréde zaga",

"mosquito": "mucá",

"mosquito net": "mucóri",

"mosquito repellent": "mucár dabai",

"most": "aksér",

"most of the time": "beec bála",

"mostly": "becbák",

"mother": "maa",

"mother tongue": "maar zuban",

"mother's brother": "mou",

"mother's father": "nana",

"mother's sister": "hála",

"mother-in-law": "hóouri",

"mother-sister": "maa-bóin",

"motherboard": "méinbudh",

"motivated": "hímmot diyé",

"motivation": "théladoon",

"motive": "niyot erada",

"MOU": "buzábuzi",

"mountain": "faár",

"mouse": "undur",

"your mouse": "kompyuthar moós",

"my mouse": "kompyuthar moós",

"moustache": "mus",

"mouth": "gal",

"move": "lor(o)",

"moving": "lorer",

"moved": "loijjé",

"movement": "lorasora",

"movie": "filim",

"MP": "Paalimen Membór",

"muadhdhin": "prayer calling person",

"muazzen": "muazzen",

"muazzin": "azan douya",

"much": "bicí",

"mud": "fúth",

"mug": "moók",

"Muhammad": "Rosúl ór nam Muhammad",

"mujahid": "hókollá laráigoróya",

"mullet": "baçá mas",

"multi": "bicí",

"multilingual": "bicí zubanwala",

"multiple": "bicí",

"multiplication": "bicí goróon",

"multiply": "bicí gor",

"multisystem inflammatory syndrome": "bóut dhoilla lalói aiccéde alamot",

"municipal": "munisipel",

"murder": "mariféla",

"murdered": "marifélaiye",

"muscle pain": "gaa hoñra",

"mushroom": "ul",

"music": "gana",

"musk-melon": "baki gula",

"Muslim": "Musúlman",

"must": "hámahá",

"must be": "wáforibóu",

"must be presented": "óre dahá foribóu",

"mustache": "mus",

"mustard": "hóurittel",

"mustard oil": "hóroit tel",

"mutilation": "haçiféloon",

"mutton": "sóol or gusso",

"mutual": "apósi",

"mutual respect": "dunítoróf ór izzot",

"muzzen": "azan douya",

"my": "añár",

"Myanmar": "Bormár dec",

"myna": "báttwa",

"myself": "añí nizebaze",

"mysterious": "buzí nofaréde",

"mystus gulio": "guillá mas",

"naan": "nan ruthi",

"nab": "bongor",

"nail": "nok/zouloi",

"nailcutter": "nok haçoni",

"naked": "lendha",

"name": "nam",

"named": "nam diyé",

"namely": "sóiyi hoilé",

"napkin": "fakíth",

"narration": "kaháni",

"narrow": "sisijja",

"nasal": "nakor",

"nasal bone": "nakor doró háñthdhi",

"nasal cartilage": "nakor norom háñthdhi",

"nasal cavity": "nakor cór",

"nasal congestion": "nak bonúwa",

"nasal mucus": "cíin",

"nasal polyps": "finak",

"nation": "koum/dec/mullúk",

"national": "koumi/wotóni",

"national origin": "wotóni asól",

"national security committee": "koumi amóni komithí",

"nationalism": "koumiyot",

"nationalist": "koumiyoti",

"nationality": "decóittayi",

"nationals": "decóitta ókkol",

"nations": "koum ókkol",

"native": "mokami",

"natural": "kuduroti",

"natural disaster": "kudoroti dónco/borbadi/afát",

"natural string": "lota",

"naturally": "kuduroti hísafe",

"nature": "kuduroti",

"naughty": "cótan",

"Nauru": "Neerú dec",

"nausea": "óiccani",

"nauseating": "dhúlade",

"naval": "doijjar",

"navel": "nagí",

"navigation": "ikkáttu ikká solizana",

"navy": "neví",

"nay": "bilkúl noó",

"near": "dháke",

"he is near": "ite dháke",

"she is near": "iba dháke",

"is near": "korib/nozdik",

"nearest": "bicí hañsé",

"nearby": "atehañsé",

"nearer": "hañsé háñicca",

"nearest": "ebbre hañsé",

"neat": "sáf",

"necessarily": "zoruri gorí",

"necessary": "zoruri",

"necessity": "zoruriyoti",

"neck": "gola/goddana",

"neck back part": "goddana",

"neck bell": "golar góndha",

"necktie": "nekthár - thaai",

"need": "dorhar/zorurot",

"need it": "arekzon ottu lage",

"needed": "zorurot óiye",

"needle": "fúñic",

"needy": "moótáj óla",

"negative": "uldha monfí",

"neglect": "félai raikké",

"negligence": "laaforbayi",

"negligent": "forbasára",

"negotiate": "biasana goré",

"negotiated": "biasana goijjé",

"negotiation": "biasana goróon",

"Negros": "Neguru koum",

"neighborhood": "ziran",

"neighbour": "ziran",

"neighbourhood": "elaka/fara",

"neighbouring": "góror dhákor",

"neither": "noó",

"Nepal": "Nepal dec",

"Neptune": "Nepthún",

"nerve": "demakor rok",

"nervous": "dhoradé",

"nest": "bahá",

"net": "zal",

"net lost": "sáafi gunári",

"net lost wages": "sáafi tonhár gunári",

"network": "hamorzal",

"neurosurgical": "demaki rok or operécen ór",

"neutral": "mazétákoya",

"never": "honódin no",

"nevertheless": "baháral",

"new": "noya",

"newer": "bicí noya",

"newest": "ebbre noya",

"new born child": "noiya óiyede",

"newly": "noya gorí",

"newly married": "bou",

"news": "hóbor",

"news agency": "nyús ejensi",

"newspaper": "hóborihabos ",

"next": "yárbaade",

"next follow up": "tarfor fisá dóra",

"next time": "dusárabar",

"next to": "fore",

"next week": "agor háftat",

"next year": "agor bosór",

"NGO": "Hókumot Noóde Tonzim",

"nice": "cúndor",

"nice to meet you": "tuáñre mili kúci laiggé",

"nice to meet you too": "tuáñre miliyó kúci laiggé",

"Nicholas": "Nicholas fadúri",

"niggling": "gura jiníc loi matá hár",

"night": "rait",

"nightmare": "hóraf cóppon",

"nimbus (halo)": "matár tuli",

"nine": "no",

"nineteen": "unnúic",

"Nineteen (19)": "unnúic",

"ninety": "nobboi",

"Ninety (90)": "nobboi",

"nipple": "dut dór bath",

"nirvana": "jonnot",

"nitrogen": "naitrujan háwa",

"nits": "uinn or boda",

"no": "noó",

"no longer at this address": "thíkana ola thíkana yián ót nái",

"no one": "honíkka nái",

"no peace": "ocánti",

"no problem": "honó mockil nái",

"noble": "córif",

"nobody": "honíkka",

"nod": "háñ",

"noddle": "kókswé",

"node": "girá",

"noice": "uzor",

"making noice": "uzor der",

"noise": "abas",

"noisy": "uzormikká",

"non": "gair",

"non-refoulement": "waapes nogoríbar kaanun",

"nonagon": "no kuinna cokól",

"nonagon shape": "nokuinna cokól",

"none": "kessú nái",

"nonetheless": "tóu údda",

"noni": "atá",

"nonsens": "akol sára",

"noon": "beil thík thík duñijja",

"nop": "dóroni",

"nor": "noó..naá",

"normal": "aám",

"normal saline": "aám nun",

"normality": "dormiani háalot",

"normally": "dormian hísafe",

"north": "uttor",

"north east": "uttore arde fuge",

"north west": "uttore arde fosíme",

"northern": "uttoror",

"nose": "nak",

"nose rope": "náfa",

"nose tip": "nakor matá",

"nostril": "nakor fóth",

"not": "noó",

"not at all": "ebbre noó",

"not done": "goijjá nóo",

"not in use": "estemal ot nái",

"not smart": "nasotur",

"not yet": "aijó nóo",

"note": "nuth",

"notebook": "gura kitab",

"noted": "nuth goijjé",

"notes": "nuth óll",

"nothing": "kessú nái",

"notice": "nothís",

"noticeable": "dahá zade",

"noticeably": "sábgorí",

"noticed": "kíal goijjí",

"notification": "ettála",

"notify": "zana",

"noting": "nuth gorér",

"notwithstanding": "tóu údda",

"noun": "nam",

"novel": "rowayot",

"November": "Nowambor",

"Novembor": "Nowambor mac",

"now": "ehón",

"nowadays": "ezobanat",

"null": "sára",

"numb": "besút",

"number": "nombór",

"number plate": "nombór pleith",

"numbering": "nombór diya liís",

"numbers of": "bicí",

"numbness": "besút",

"nun": "thóurni",

"nurse": "dekbal goróya naás",

"nut": "naáth",

"nutmeg": "zaifól",

"nutrition": "geca",

"nutritious": "gaar fáaida ola",

"nuts": "dana ókkol",

"oar": "foñí",

"oar long": "háñlic",

"oath": "hosóm",

"OB": "fuabiya arde dekbal gorá",

"obedience": "fórmadari",

"obey": "mano",

"object": "ciz",

"objective": "moksót",

"obligate": "zimma/waajib",

"obligated": "zimma buzír",

"obligation": "zimmadari",

"obligatory": "fóroz",

"oblige": "mojbur goré",

"obscene": "behúda",

"obscured": "añdár goijjé",

"observance": "mani zoon",

"observation": "saásita",

"observe": "gour goré",

"observed": "gour goijjé",

"observer": "soóuya",

"observing": "gour gorér",

"obsessed": "mon góilloi",

"obstacle": "bazá",

"obstetrician": "maiyafuain dór daktor",

"obstruct": "ooñsádi raká",

"obtain": "háñsilgor",

"obtained": "háñsil goijjé",

"obtaining": "háñsil gorír",

"obvious": "sáf sáf",

"obviously": "sáf gorí",

"occasion": "émouka/wajá",

"occasionally": "faile foroke",

"occupant": "kobza goróya",

"occupation": "kobza/kaarubar/hamhoros",

"occupied": "kobza goijjé",

"occupy": "kobza goré",

"occur": "óiza/óiye",

"occurred": "óiye",

"occurrence": "óon",

"occurring": "órr",

"ocean": "sómondor",

"octagon": "añcthokuinna",

"Octobar": "Oktubor mác",

"October": "oktubor mác",

"octogon shape": "añctho kuinna cokól",

"odd": "bézura",

"of": "ór",

"of country": "decór",

"of course": "bilkúl",

"of Japan": "Jafani",

"of life": "jandár",

"of now": "yaar",

"of suffering": "zilloti",

"of them": "tarár bútottu",

"off": "bon",

"offence": "hosúri",

"offended": "bezar goijjé",

"offender": "mujirim ókkol",

"offensive": "beizzontide",

"offer": "zañsi/homaide",

"offer in compromise": "homai tomai peecgoró",

"offered": "peec goijjé",

"office": "idára/morkoz",

"office table": "ofísor theból",

"officer": "boós/adikari",

"official": "kaanuni",

"official paper": "habosfonna",

"official use only": "úde córkari estemal",

"officially": "córkari",

"officials": "córkari manúic",

"offline": "lainor baáre",

"offset": "agefisé ó",

"offshore": "doijjar",

"offspring": "fuain",

"often": "egaza/bicíhíssa",

"Oh Allah": "Yá Allah",

"Oh Sustainer": "Yáarob",

"oil": "tel",

"oily": "teilla",

"okey": "thíkasé",

"okra": "béra",

"old": "burá/furan",

"old man": "burá manúic",

"old woman": "burá maiyafua",

"older": "bicí furan",

"oldest": "furan/bicí burá",

"olive": "zaitun",

"olive oil": "zaitun tel",

"olives": "zaitun",

"ombudsman": "ombudsman",

"omit": "badde",

"on": "uore/ót",

"on going": "soler ",

"on going success": "zari aséde kaamiyabi",

"on going training": "jari tortib",

"on going volunteer": "jari vólonthiar",

"on its back": "sitot",

"on that day": "édin",

"once": "ekbar",

"one": "ek",

"is one": "uggwá",

"that one": "uggwá",

"that's one": "iba uggwá",

"one (1)": "ek",

"One Crore": "Ek kurul (1,00,00,000)",

"one kind of food": "ekku dhoilla hána",

"one other person": "arekzon",

"one person": "ekzon",

"one who eats a lot": "ábaitá",

"one who is brainy": "demak ola",

"one who is educated": "elóm óla",

"one who is of angry mood": "guccá óla",

"one who is of good manner": "ahálak óla",

"one who is wealthy": "foisá óla",

"one who sees": "dekóya - dehóya",

"one who struggles": "mujahíd",

"one-billion": "ek-kuthí",

"one-hundred-thousand": "ek-lák",

"one-million": "doc-lák",

"one-thousand-one": "ek-házar-ek",

"ones": "ek ókkol",

"ongoing": "solerdé",

"onion": "fiañs",

"onion leaves": "fiañs fata",

"online": "intharnéthot=",

"only": "seríf",

"only one": "seríf ek",

"onshore": "kulot",

"onto": "uore",

"oops": "óh",

"open": "kúl",

"opened": "kúlifélaiye",

"openning": "kúler",

"open feeding": "mela",

"open invitation": "melaa",

"open space": "kúla zaga",

"open the mouth widely": "áagoró",

"opened": "kúille",

"opening": "kúler",

"openly": "kúli",

"openness": "kúlahála",

"operate": "sola",

"operated": "solaiyé",

"operating": "soler",

"operation": "operécen",

"operational": "solibélla redhí",

"operator": "soloya",

"opinion": "rai/nozoriya",

"opportunity": "mouka",

"oppose": "uldha gor",

"opposite": "uldha",

"oppress": "zala",

"oppression": "zulúm",

"oppressor": "zulúm goróya",

"Ops!": "Yáki",

"optic": "sugór",

"option": "ektiyar",

"optional": "ektiyari",

"optometrist": "suk cek goróya",

"or": "yá",

"Or": "noóile",

"orange": "córboti",

"orange color": "córboti rong",

"orbital": "guldair or",

"orchid": "rasnafúl",

"order": "hokúm",

"ordered": "hókumdiyé",

"orderly": "tortif gorí",

"orders": "ahakamat",

"ordinance": "hókum (munisipil)",

"ordinary": "maamuli",

"ordinary people": "aam",

"ordinate": "tortif or sáate",

"organ": "jisím",

"organisation": "tonzim",

"organise": "tortif de",

"organization": "tonzim",

"organize": "entezam gor",

"origin": "asól",

"original": "asól",

"originally": "asólot",

"ornament": "cúnacadi",

"orphan": "etim",

"orphanage": "etimi",

"orthodontic": "dat sóiyigora",

"orthographic": "lekónor",

"Oscar": "Oskar",

"oscillate": "uore nise laro",

"osmosis": "osmosís",

"other": "oinno",

"other formats": "oinno formáth ól",

"others": "oinno manúic ókkol",

"otherwise": "ootóba",

"our": "añárar",

"our comeback": "añárar waapesi",

"ours": "añárár nizor",

"ourselves": "añára nize",

"out": "baáre",

"outbreak": "fólizoon",

"outcome": "notiza",

"outcry": "sikkara",

"outdated": "furana",

"outer ear": "baáror han",

"outline": "háka",

"outlined": "boiyan gorágiye",

"outlook": "baártu saá",

"outrageous": "bordac gorí nofaréde",

"outset": "cúrut",

"outside": "baárkule",

"outstanding": "candár",

"outward": "baártu",

"oval": "andhar cokólola",

"oval shape": "andha cokól",

"ovary": "fúlgor/woman",

"oven": "furon",

"over": "uore",

"overall": "kulehale",

"overcrowding": "bicí zámilade",

"overlap": "uore uçé",

"overlook": "noódeke",

"overnight": "raitbór",

"override": "félaiagezoon",

"oversaw": "saáitáikke",

"overseas": "bidecí",

"overseas entities": "bidecí tonzim ókkol",

"oversee": "saáitáke",

"oversleeping": "bicí gorí gum zoon",

"overview": "aám nozoriya",

"overweight": "bicíbór",

"overwhelm": "dufígiyói",

"overwhelmin": "ódorbaára",

"overwrite": "lekár uore lek",

"oviduct": "fúlgor ór fáik",

"owe": "diya foribóu",

"owl": "feñsa",

"own": "nizor",

"own place": "nizor zaga",

"owner": "girós/maalek",

"ownership": "maaleki",

"ownself": "nizebaze",

"ox": "bolod goru",

"ox - male cow": "bolod goru",

"oxen": "tongoru",

"oxygen": "oksijan háwa",

"oyster": "síloin",

"Pacific": "cántir",

"pack": "pek goré/buñda bañde",

"pad": "rui or faththa",

"padding": "zaba",

"paddle": "théng e sola",

"paddy": "dán",

"paediatric": "fuaindór",

"page": "sófa",

"pagoda": "zadi",

"pain": "bic/doród",

"pain suffering": "hooñrar",

"painful": "doród goréde",

"paint": "sábatul",

"painting": "sábatulóon",

"pair": "zurzur",

"Pakistan": "Fakistán",

"palate": "galor sal",

"palm": "hátor tallwa",

"palm of the hand": "átor tallwa",

"palm oil": "talgas ór tel",

"palm tree": "tal gas",

"palm wine": "taari",

"pan": "horiya",

"pancreas": "pankarias",

"panda": "pandha",

"panel": "budh",

"pangolin": "kúduk",

"panic": "dhór lage",

"panicked": "dhor laiggé",

"panting": "úñcoon",

"papaya": "hoiñya",

"paper": "habosfata",

"Papua": "Papua Gunea dec",

"parable": "mesál",

"paracetamol": "gaat zoror dabai",

"paradise": "bíssoó/jonnot",

"paragraph": "paragaráf",

"parallel": "boraboijja",

"parameter": "hót/limíth",

"paramilitary": "adámilitiri",

"pardon": "mafgoríde",

"parent": "maabaf",

"parenting": "faloon",

"park": "gari tíade zaga",

"parking": "tíade zaga",

"parliament": "palimen",

"parrot": "tuta",

"parsley": "boórfata",

"part": "híssa",

"part of prayer": "solár híssa",

"participant": "bák/híssa louya",

"participate": "báklo/híssalo",

"participated": "híssaloiye",

"participating": "híssalor",

"participation": "bákloon/híssaloon",

"particle": "hórof ",

"particular": "háasgorí",

"particularly": "háas gorí",

"partly": "kessú híssa",

"partner": "cíiardár",

"partnership": "híssadar",

"party": "faathi",

"pass": "fas",

"passage": "rasta",

"passageway": "rasta",

"passed": "fas óiye",

"passenger": "musáfer",

"passing": "paásgorér",

"passion fruit": "anar",

"passionately": "dilmon kúcigori",

"passport": "paáspóuth",

"password": "húfiawaádh/fasórlofzó",

"past": "guzori giyóide fisór zomana",

"pasta": "Italir kókswé",

"paste": "baiththa ciz",

"patch": "tali",

"patella": "añçúr maala",

"paternal aunt": "fúu",

"paternal uncle": "dhoóñba sañsa",

"path": "rasta",

"pathetic": "besara",

"pathway": "áñçede rasta",

"patience": "sobór",

"patient": "biaraimma moriz",

"patient code of conduct": "rukír bebáar or kóuth",

"patrol": "soñigor",

"patrolled": "faára diyé",

"pattern": "cokól",

"patterned color": "sitara mitara",

"pause": "tíagorá",

"pavement": "fattór ór rasta",

"pay": "tonhá",

"payment": "thiañdiya",

"PC": "komputar",

"pea": "mothór ór dana",

"peace": "cánti",

"peaceful": "cánti ola",

"peaceful talk": "cántir hotá",

"peacefully": "cánti gorí",

"peach": "píc gula",

"peacock": "moiyor",

"peanut": "badam",

"peanut oil": "badam tel",

"pear": "nasfoti gula",

"pebbles": "cóñço fattór",

"pedestrian": "áñçede manúic",

"peel": "era",

"peel of": "bal súl",

"peeler": "erani",

"peeling": "erar",

"peelings": "eraiya kela",

"peg": "kíl",

"pellet": "gulguilla gulá",

"pelted": "melá maijjé",

"pelvis": "keñil or háñdhdhi",

"pen": "(k)holom",

"penality by law": "kaanuni torfóttu sáñza",

"penalty": "zoribana",

"pencil": "holom",

"pending": "baakiaséde",

"penetrated": "bútore goillé",

"penguin": "pengui",

"penis": "morot fuain dór córom zaga",

"penny": "foicá",

"pension": "pencín",

"pentagon": "fañskuinna",

"pentagon shape": "fañs kuinna cokól",

"penultimate": "fúraibár agortú",

"people": "manúic",

"pepper": "gulmoris",

"per": "hísafe",

"per day": "dine",

"perceive": "ótnofar",

"percent": "fisót",

"percentage": "cótkara",

"perception": "híyal",

"perfect": "bilkúl sóiyi",

"perform": "adagor",

"performance": "adagorá",

"performed": "anjamdiyé",

"perhaps": "óitfare",

"perilous": "hotornák",

"perimeter": "fakkáraiya",

"perinatal mood": "Fua óibar agor fosór mejaz",

"period": "muddot/doura",

"periodic": "miyadi",

"permandate": "waada mozin",

"permanent": "mustokil",

"permanently": "mustokil hísafe",

"permission": "ejazot",

"permit": "ejazot",

"permitted": "ejazot diyé",

"perpendicular": "uwá",

"perpetrate": "jrúmgor",

"perpetrator": "mujrim/afáradi",

"persecute": "zulúm séta gor",

"persecution": "zulúm séta",

"persist": "zidgor",

"persisted": "bolazuri goijjé",

"persistent": "musolsól",

"persistent fever": "lagatar zor",

"person": "manúic",

"personal": "zati",

"personal belonging": "zati sáman",

"personal belongings": "zati sáman óll",

"personal identification": "zati sinno",

"personal identification number": "zati sinno nombór",

"personally": "zati hísafe",

"personnel": "zati",

"perspective": "nozoria",

"Perspex": "foór daházar dé plástík",

"persuade": "bíra",

"perusal": "díandi foróon",

"pests": "fuk óll",

"pet": "falok janwar",

"petabyte": "pethabáith",

"petriotic": "koumi dorót",

"petrol": "petroul",

"phalanges": "ouñlor ahéri girá",

"pharmacist": "dabair mahér",

"pharmacy": "dabair duan",

"phase": "bar",

"Philippine": "Filipin or dec",

"philosophy": "fólsofi",

"phlegm": "leththwa",

"phone": "fún",

"photo": "fothú",

"phrase": "jumla",

"physical": "jisími",

"physically": "gaafiçé hísafe",

"physics": "jinís",

"piano": "pianu",

"pice of cake": "ebbre asán",

"pick": "feñçailo",

"pick up": "thani tuló",

"picked": "tuillé",

"pickup": "feñçaian",

"picture": "fothú",

"piece": "thukuça",

"pier": "gáñth",

"piety": "dindarwala",

"pig": "cúwor",

"pigeon": "hoitor",

"piglet": "cúorsó",

"pigmented": "januar or sam",

"pigtails hair": "dui dhákor tu sul or buñda",

"pile": "bás",

"pilgrim": "háji Makkah't ziyarot goróya",

"pilgrim's stoning point": "Jamarat háji ókkol é fattór maredé zaga",

"pillage": "thiañ mal bekaanuni loiféla",

"pillar": "thúnih",

"pillow": "balúic",

"pillow cover": "balúic ór waár",

"pilot": "pailót",

"pin": "fin",

"pine apple": "enáac",

"pineapple": "enác",

"ping": "kompiyuthar ór lain cekgoró",

"pink": "gulabi rong",

"pinkie": "kinouñl",

"pinky finger": "kinouñl",

"pinkie": "kinnoul",

"little finger": "kinnoul",

"baby finger": "kinnoul",

"pinna": "hanor baár dhák",

"pinnacle": "moinna fattór",

"pinworm": "kirmifuk",

"pious": "dindar/Allah wala",

"pious person": "súbi",

"pipe": "fanír fáik",

"pistol": "fístol/bonduk",

"pit": "gañt",

"pita": "fiçá",

"pitch": "abas or usol niso",

"pity": "rahám",

"pity you": "tuáñr uore afsús",

"place": "zaga",

"place of worship": "ebadot goréde zaga",

"place of worship with drums": "aára",

"place to place": "zagazaga",

"placed": "rakké",

"plain": "fúainna",

"plan": "flan/monsuba gor",

"plane": "háwar buth",

"planet": "sétara/graha",

"planned": "monsuba goijjé",

"planning": "plan gorér",

"plant": "gas",

"plantain flower": "kelar túr",

"plastic": "felásthík",

"plate": "borton/sóoón",

"plateauing": "fúainna gorére",

"platform": "flathfóom",

"play": "kélaá",

"played": "kélaifélaiye",

"playing": "kélaar",

"player": "kéloya",

"playful": "kélai kélai tákede",

"playlist": "soliborliís",

"plea": "dorhás gor",

"please": "meérbanigorí",

"please tick": "meérbani gorí thikdo",

"pleased": "kúci óiye",

"pleasing": "dilcocbíola",

"pleasure": "kúci",

"pleat": "kusi",

"plentiful": "becá bicí",

"plenty": "flánthi",

"plied": "torifarefán goridiyé",

"plight": "gorib dukkíta",

"plot": "bíñçaá",

"plough": "nahol",

"plough grip": "nahol",

"plough shaft": "nahol or ic",

"plough wedge": "nahol or fál",

"plug": "plág",

"plugin": "plág gólo",

"plum": "borói",

"plundering": "harílor",

"plural": "jomá",

"plus": "zoma",

"pluse": "thippír lora",

"pm": "ázinnar thaim",

"pneumonia": "sálim óiye",

"png": "png - png forméth fothú",

"pocket": "zep - zef",

"pocket-money": "hóssa bisar thiañ",

"poductive": "notiza neeledé",

"poem": "ceér - kobita - gozól - kabya",

"poet": "cáyer",

"poetry": "cáayeri",

"poetry festival": "kitaabi cóba",

"point": "nuktá",

"point of view": "nozoriyar nuktá",

"pov": "nozoriyar nuktá",

"point to": "icára gor",

"pointed": "icára gorí daháiye",

"pointed gourd": "pothol",

"pointer finger": "icára ouñl",

"poison": "bic/zehér",

"poke": "gutá mar",

"polar bear": "dóla bálluk",

"polar beer": "polar bálluk",

"pole": "hámbaá",

"police": "fulic",

"police man": "fulicca",

"police station": "fulic or tána",

"policeman": "morot fulic",

"policewoman": "beçi fulic",

"policing": "fulic soikkal der",

"policy": "folósi",

"polite": "cóibbotá",

"politely": "cáictagorí",

"politeness": "cáictagorí",

"political": "síyasi",

"political will": "síyasi morzi",

"politically": "síyasi hísafe",

"politician": "síyasotdan",

"poll": "rai diyar sónduk",

"pollution": "gondá",

"polytheism": "uggwáttu áro bicí ré manoya",

"polytheist": "uggwáttu áro bicí manoya",

"pomegranate": "dhalúng gula",

"pond": "foóir",

"pond heron": "hani boga",

"pool": "hóous",

"poor": "gorib/miskin",

"popcorn": "mokkagular hóñi",

"popular": "fosón goréde",

"populated": "abadi goijjéde",

"population": "abadi/maincór gona",

"population growth": "abaadi boçá",

"pork": "cúwor or gusso",

"port": "poóuth - gáñth",

"portfolio": "portfulio/baáduri",

"portion": "híssa",

"pose": "súal fusárgor",

"posed": "hóran goijjé",

"posibility": "mumkin",

"position": "tobka/dorja",

"positioned": "zagaloiyé",

"positioning": "zagarhót",

"positive": "gom/kursí/hákiki",

"possession": "kobzat",

"possessor": "girós",

"possibility": "mumkin",

"possible": "mumkin",

"possibly": "caayét",

"post": "poigam",

"post rocedure": "baador karwaiyi",

"postbox": "puús ofís ór fethi",

"poster": "pousthar",

"posting": "pousthín",

"postman": "dhakfiyún",

"postpaid": "fisédiya",

"pot": "góra/decci",

"potato": "alugula",

"potato chips": "mormoijja alugula",

"potential": "óitfarede",

"potential risks": "óitfarede hótara ókkol",

"potholes": "fattór or kúñdaá ókkol",

"pouch": "gura bag",

"pound": "poón thiañ - uzón poón",

"poundage": "poundh hísafe",

"poured": "dháille",

"poverty": "goribi",

"poverty level": "goribi tobka",

"power": "taakot",

"power source": "taakot or guijja",

"powered": "paawárdiya",

"powerful": "taakotola",

"practical": "tojurubakari",

"practice": "pretís gor",

"practise": "pretís goré",

"practised": "pretís goijjé",

"practising": "pretís gorér",

"practitioner": "pretís goróya",

"praise": "taarif",

"praiseworthy": "tarifdar",

"prattler": "goffúçu",

"pray": "dua gor",

"prayer": "numás",

"prayer direction": "kiblar darikcen",

"prayer mat": "mosólla",

"pre": "foóila",

"pre-diabetes": "agori-daiabíthis",

"preacher": "daayi",

"precautionary": "eétiyati",

"preceding": "foóila",

"precise": "thík/ódode",

"precision": "ebbre borabori",

"predicate": "hóbor",

"predict": "agori hoó",

"predicted": "agori hoiyé",

"predominantly": "aksér",

"preface": "cúrur hotá",

"prefer": "torjide",

"preferable": "fosón goráza",

"preferably": "taaidgorí",

"preference": "torji",

"preferential": "agediya",

"preferred language": "fosóni báca",

"prefix": "muúntu laga",

"preformatted": "ageloti cokól boinna",

"pregnancy": "hámil",

"pregnant": "háamil",

"pregnent": "cómola",

"prejudice": "monzokká",

"preliminary": "cúrur",

"premature": "adinna",

"premise": "bildhíng ór zaga",

"premolar": "marír dator bazáiya dat",

"prepaid": "agoridiya",

"preparation": "toiyari",

"prepare": "toiyargor",

"prepared": "toiyar goijjé",

"preparing": "toiyer gorér",

"preplanned": "ageloti plangoijjá",

"preposition": "agorihórof",

"prescribe": "parca lekí de",

"prescription": "daktoror habos",

"presence": "háñziri",

"present": "dahá/háñzir/háal",

"presentation": "prezenthéicen",

"presented": "peec goijjé",

"presently": "ehón ót",

"president": "rois - sódor",

"presidential": "sódaroti",

"press": "dába/sib",

"pressure": "precar/mojbur gor",

"pressure cooker": "frecar kukar",

"pretending": "bahána gorer",

"pretty": "cúndoijja",

"prevent": "ruké",

"prevented": "ruikké",

"preventing": "rukér",

"preview": "agorisoó",

"previous": "fisór",

"previously": "age/foóila",

"price": "dam/kimot",

"pride": "fohór/tukabbor",

"primarily": "háas gorí/asólot",

"primary": "foóila/asási",

"primary caregiver": "buniyadi dekbal goróiya",

"primary school": "cúrur eskul",

"prime": "royisi/ahám",

"prime-minister": "uzir e azom",

"prince": "cékzada",

"principal": "eskulor boro",

"principal tribe": "asól gobíla",

"principle": "usúul",

"print": "sába",

"printed": "leikká",

"printer": "lekéde micín",

"prior": "foóilar",

"priority": "ahámiyot",

"prised": "kimoti/moóngga",

"prision": "hodi",

"prisoner": "hodi",

"privacy": "gufoniyot/hósusiyot",

"private": "hósusi/háas",

"private company": "hósusi kumpani",

"private hair": "bal",

"prize": "hádiya/enam",

"proactive": "salu",

"probable": "mumkin",

"probably": "óitfare",

"problem": "mockil",

"problem solver": "maamela hólgoroya",

"problematic": "mockil ola",

"procedural": "torikakar",

"procedure": "karwaiyi",

"proceed": "ageza",

"process": "karwaiyi",

"processed": "karwaiyi goijjé",

"processing": "karwaiyi",

"procession": "julus",

"processor": "karwai goróya",

"produce": "foidagor",

"product": "mal",

"production": "mal neela",

"productive": "notizabála",

"profession": "maaher/hamhoros",

"professional": "maaher",

"professionalism": "mahérgiri",

"professionally": "fecá hísafe",

"professor": "profésar",

"profile": "manúic or maalumat",

"profit": "fáaida",

"profoundly": "ebbre bicí gorí",

"program": "furgram",

"programmer": "furgram goróya",

"programming": "furgram goróon",

"progress": "torki/ageza",

"progressed": "muúmmikka uzaiyé",

"progressing": "muúmmikka uzar",

"prohibit": "manágor",

"prohibited": "manágoijjá",

"prohibition": "maná",

"project": "monsuba",

"projected": "peec goijjé",

"projectile": "duré félade hátiyar",

"projecting": "duré mari félaár",

"prolong": "thaim lambagor",

"prominent": "mocóur",

"promise": "waada",

"promote": "uore tulíde",

"prompt": "fóuran",

"prompting": "setengoríder",

"promptly": "éhon/thaim ot éhon",

"proof": "sóbut/dolil",

"proper": "munaséf/laayek",

"properly": "munaséf gorí",

"properties": "hósusiyot/un",

"property": "cómbotti/zaidaat/zagazobin",

"Prophet": "Rosúl",

"prophet": "poikambor",

"prophet hood": "nobuwot",

"Prophet Ibrahim": "Poikambor Ibrahím",

"prophet muhammad": "nobi muhammad",

"proportion": "híssa/mafazúfa",

"proposal": "rai/dorhás",

"proposed": "dorhás diyé",

"proposes": "dorhás de",

"prorated": "baçidiya giyé",

"prorogued": "muúmmikka gorídiye",

"pros": "gom",

"prosciutto": "férferi fatol haiththa nundiya cúor or gusso",

"prosecuted": "mukotdama goijjé",

"prosecutor": "ukil",

"prospect": "acá/ummit",

"prosperity": "torki/unnoti",

"prostate": "prosthéth",

"prostate gland": "prosthi granti",

"prostrate": "sóoida gor",

"prostration": "sóoida",

"protect": "héfazot/mahafús rak",

"protected": "héfazot goijjé",

"protection": "héfazot",

"protection of wealth": "mal arde dóncombotir héfazot",

"protection of wealth (1st)": "mal arde dóncombotir héfazot",

"protective": "héfazoti",

"protective clothing": "héfazoti lebas",

"protector": "héfazot goróya",

"protest": "hórotal",

"protesting": "etaras gorér",

"protocol": "prothukol",

"protracted": "lamba",

"proud": "fohór óla",

"proud of you": "tuáñr uore fohór",

"proudness": "fokhór/tukabbor",

"proved": "sóbut goijjé",

"proven": "sábetgoijjá",

"proverb": "boson",

"provide": "de/nal/entezam gorí",

"provided": "nal gorídiyé",

"provider": "gorídouya",

"providing": "der",

"province": "súba",

"provincial": "elakayi",

"provision": "rizík/hánafinar ciz",

"provisional": "tooitta",

"provocation": "ducmoni cúru goróon",

"provoke": "ducmoni cúru gor",

"provoking": "ducmoni cúru gorér",

"psychiatrist": "dilor elaj goróya",

"psychological": "demaki/zehéni",

"psychological examination": "nofsíya emtahán",

"psychologist": "demak or daktor",

"psychology": "nofsíyot",

"Pty": "mulkíyot",

"public": "aám manúic",

"public can help the police to detect crime": "pabilík é fulic oré modot gorí fare hosúri tuai faibellá",

"public háir": "córom zagar keñc",

"publication": "kitab magazín sáboon",

"publicity": "elan",

"publicly": "aámfaám",

"publish": "sábai baáirgor/elangor",

"published": "sábai baáir goijje",

"publishing": "sábai baáigorér",

"pug": "ekkisím ór kuñir",

"pull": "than(o)",

"pulling": "thaner",

"pulled": "thainné - thana giyé",

"puller": "thanoni",

"pulling": "thaner",

"pulmonary": "fécca lói taaluk",

"pulse": "hoilla hañfoon",

"pumkin": "hóuñri",

"pump": "paám",

"pumpkin": "hóuñri",

"pumpkin flower": "hóñri fúl",

"pumpkin leaves": "óuñri fata",

"pumpkin seed": "hóuñrir dana",

"punch": "gúcamar",

"punch machine": "fulgoróni",

"punched": "gúca maijjé",

"punching": "gúca marer",

"punctuation": "nuktár niyom",

"pungas": "fangrés mas",

"punish": "sáñza de",

"punishment": "sáñza",

"pup": "kuñir só",

"pupil": "eskuilla fua",

"puppy": "kuñirsó",

"purchase": "kino",

"pure": "sáf/asóli",

"purely": "hássgori",

"purple": "baiyoinna",

"purpose": "moksót/erada",

"pursue": "fisá/hórkot gor",

"pursuit": "bíra",

"push": "thél(o)",

"pushed": "théille",

"pusher": "théloni",

"pushing": "théler",

"put": "rak(o)",

"put away": "badde",

"put down": "émmikka er(oo)",

"put forward": "peec gor",

"put on": "fiñdó",

"putting": "rakér",

"pyramid": "péramid",

"quail": "dhouk",

"qualification": "kabiliyoti",

"qualified": "laayek",

"quality": "dani/kimoti",

"quantity": "gonti",

"quarantine": "alok raké",

"quarel": "hoijja",

"quarrel": "hoijja bazon",

"quarrelsome": "guccá óla",

"quarter": "sair borat or ekborat",

"quarterly": "sair-borat-or-ekborat gorí",

"quartery": "sairbáki",

"quash": "hótom goré",

"quay": "buth gáñça",

"queen": "rani",

"queen of night": "ranifúl",

"quell": "hótom gor",

"quelled": "hótom goijjé",

"quelling": "hótom gorér",

"query": "súal",

"question": "súalgor",

"questioner": "súal goróya",

"queue": "lain",

"quick": "toratori",

"quickly": "toratori",

"quiet": "nizám/ekkaná gori",

"quietly": "nizám gorí",

"quill": "fóuir",

"quilt": "tucúk",

"quit": "neeli giyói",

"quite": "kafí",

"quite a few": "bicí hom",

"quite good": "bicí gom",

"quite well": "kafí gom",

"quote": "háwala do",

"Quraish": "Quraici koum",

"Quran": "Kuran",

"Quranic": "Quran loi goijjá",

"rabbit": "hórguc",

"race": "zat/zibbat",

"racer": "duñroya",

"racer goby": "naththwa baila",

"racial": "zati",

"racism": "forókgorá",

"racist": "koumifosón",

"radiation": "tabakar",

"radiator": "rediethar",

"radio": "redhu",

"radish": "lalmula",

"radish leaves": "mula hák",

"radish spinach": "mula ák",

"rage": "guccá",

"raid": "acanok hámla",

"rail": "rell",

"rail beam": "rel or bim",

"rain": "zór",

"rainbow": "dóuni",

"rainy season": "baricá",

"raise": "uoretul",

"raised": "tuillé",

"rakah": "numás or rokáat",

"Rakhine": "Rakhine/Arakani",

"RAM": "komputhar or memori",

"rambutan": "keñça lesu",

"ramp": "usolfál",

"ran": "duñijjé",

"rang": "góndhi baijjé",

"range": "húdud",

"ranging": "góndhi bazer",

"Rangoon": "Rengun/Yangon",

"rank": "dorja",

"rape": "bolazuri z*na gorá",

"rapid": "toratori",

"rapidly": "bicí toratori",

"rare": "bicí hom",

"rasberi": "razberi",

"rascal": "bormac",

"raspberry": "rasberi",

"rat": "undur",

"rate": "kimot",

"rather": "bólke",

"ratify": "sóiyiman",

"rating": "dorja mafa",

"rationale": "usúl",

"raw": "keñsa",

"ray": "loór",

"re": "prefix",

"reach": "foóñse",

"reached": "foóñicce",

"react": "uldha asór goré",

"reaction": "uldha asór gorá",

"reaction times": "toratori ham sole",

"read": "for(á)",

"reading": "forér",

"readable": "foráza",

"reader": "foróya",

"readily": "asán ór sáñte",

"readiness": "toiyari",

"reading": "forá",

"ready": "toiyar",

"real": "hakikot",

"real estate": "jaifator karubar",

"real life": "hákiki zindigi",

"realised": "ehésás goijjé",

"realistic": "hákikot",

"reality": "hákikot",

"realize": "ehésasgor",

"really": "hakikí",

"rear": "fisór/fith",

"reason": "wojá",

"reasonable": "munaséf",

"reasonably": "munaséf hísafe",

"reassessment": "abbar soón",

"rebel": "bagi",

"rebuild": "dubara bana",

"recall": "yiadgoré",

"recalled": "yiad goijjé",

"receipt": "gosífaa",

"receive": "gosílo",

"received": "gosífaiyé",

"receiver": "gosífouya",

"receiving": "gosífair",

"recent": "taza/noya",

"recently": "édinna",

"recess": "cúthki",

"recipient": "usúl goróya",

"recitation": "telawot",

"recite": "telawot gor",

"recliner": "hadíra",

"recognise": "siné",

"recognition": "maniloon",

"recognize": "sinílo",

"recommandation": "cúaricnama",

"recommenced": "dubara cúru goijjé",

"recommend": "mocuwarade",

"recommendation": "cúwaric",

"recommended": "mocuwaradiyé",

"recommending": "mocuwarader",

"recompense": "bodola",

"reconcile": "dubara milaide",

"reconciliation": "dubara milizoon",

"reconfirm": "dubara fakka gor",

"record": "rekódh",

"recording": "rekódh gorér",

"recorded": "rekódh goijjé",

"recording": "rekódh gorér",

"recover": "dubara háñsil gor",

"recovered": "waapes ainné",

"recovery": "céfa",

"recreation": "aram goróon",

"recreational": "aram goríbar",

"recruitment": "noya bórti gorá",

"rectangle": "mustotil",

"rectangle shape": "sair kuinna lamba cokól",

"rectum": "fuñdor fóoñçi",

"recurrence": "barbár óon/dubara dubara",

"recurrent": "barbar óde",

"recurring": "barbar óde",

"recursive": "barbar óde",

"recycle": "dubara estemal goró",

"red": "lal rong",

"red chili": "lal moris",

"red color": "lal rong",

"red cross": "rédh króss",

"red mark": "lal dak",

"red spinach": "lal cák",

"reddish": "lalaissa",

"redeemable": "kaabel kobul",

"redeployment": "hamorzagalaroon",

"redo": "abbar gor",

"reduce": "hom gor",

"reduced": "hom goijjé",

"reducing": "hom gorér",

"reduction": "hom gorá",

"refer": "háwala goré",

"reference": "háwala",

"referenced": "háwala goijjé",

"referred": "háwala diya",

"referring": "háwala der",

"refine": "beétor goró",

"refined": "sáf goijjá",

"reflect": "gour gor",

"reflected": "gour goijjé",

"reform": "bodoloon",

"refoulement": "wapes goróon",

"refrain": "ruké",

"refrigerator": "fírij",

"refuge": "faná/sáarah/refuze",

"refugee": "refúji",

"refugee camp": "refújir keém",

"refugees welcome": "múhajer or estekbal",

"refuse": "inkar gor",

"refused": "inkar goijjé",

"refúsal": "inkar gorá",

"regain": "dubara háñsil goré",

"regard": "izzot/ehéteram",

"regarded": "kíal goijjé",

"regarding": "baabote",

"regardless": "kiyár nogorí",

"regards": "izzot gorá",

"regime": "hókumot",

"region": "elaka",

"regional": "elakar",

"register": "rejisthar/seráng gor",

"registered": "rejisthar goijjá",

"registration": "rejisthar goróon",

"regret": "afsús háir",

"regrettable": "afsús gorázade",

"regrouped": "dubara gurúp banaiyé",

"regular": "lagatar/dáiman",

"regularised": "kaayem goijjé",

"regularity": "musolsól",

"regularly": "musolsól gorí",

"regulate": "beechom thíkgor",

"regulation": "kaanun",

"rehabilitation": "dubara thík óon",

"reimburse": "thiañ neelaido",

"reimbursement": "thiañ adaigorá",

"reinforce": "mozbut bana",

"reinforced": "mozbut banaiyé",

"reinforcement": "mozbut banoon",

"reinstate": "ódode goride",

"reintegrate": "dubara milaide",

"reintegrated": "dubara milaidiyé",

"reiterated": "barbar goijjé",

"reject": "inkargor",

"rejected": "inkar goijjé",

"rejection": "inkar gorá",

"rejoin": "dubara cámelgor",

"relate": "mutalek",

"related": "taaluk goijjá",

"relating": "taaluk gorér",

"relating to hearing or sound": "fúna yá abas loi taaluk aséde",

"relation": "taaluk",

"relationship": "egana",

"relationship building": "zaa aá gorá",

"relative": "egana",

"relatively": "hísafe",

"relax": "aram/sókun gor",

"relaxation": "aram/sókun",

"relaxed": "aram",

"relayed": "háte háte foóñsáiye",

"release": "eride/sáride",

"released": "súijja",

"relentlessly": "nozirai",

"relevant": "taaluk goijjá",

"reliable": "bórusa gorífarede",

"reliance": "bórusa",

"relied": "bórusá goijjé",

"relief": "rafáyi",

"relieve": "aramfa",

"religion": "din",

"religious": "dini/mozhábi",

"religious freedom": "dini azadi",

"religious hatred": "mozahábi nofórot",

"religious practice": "dindórmor pretís",

"rell": "rel",

"relocate": "zagalare",

"relocated": "zaga laragiyé",

"relocating": "zagalarer",

"relocation": "zagalara",

"rely": "bórusá goré",

"remain": "baki táke",

"remain in effect": "lagaiya tákibou",

"remain strong": "lagatar dóri táikke",

"remainder": "baki aséde íin",

"remained": "basi asé",

"remaining": "baki aséde",

"remark": "rai de",

"remedial": "nize elaj goréde",

"remediation": "nize elaj goróon",

"remember": "yadgor",

"remembrance": "yad",

"remind": "yiad goráide",

"reminder": "yiadgoráidiya",

"remittance": "thiañ defeçá",

"remote": "durór",

"removal": "hóthaiféloon",

"remove": "neelaiféla",

"removed": "neelai féliaye",

"removing": "larifélar",

"renew": "noyagor",

"renewed": "muddot baráiye",

"rent": "keriya",

"renter": "keriyadar",

"reopen": "dubara kúle",

"reopened": "dubar kúille",

"reopening": "dubara kúler",

"repair": "thíkgor",

"repaired": "órgoijjé",

"repatriation": "wotón waapesdiya",

"repeat": "dubaragor",

"repeated": "dubara goijjé",

"repent": "touba gor",

"replace": "tobdilgor",

"replicate": "nokol gor",

"replied": "zuab diyé",

"replies": "juab ókkol",

"reply": "juab",

"report": "repouth",

"reported": "repouth diyé",

"reporter": "repoutar",

"reporting": "repouth gorér",

"reprehensible": "hosúri diyazade",

"represent": "nomaindagor",

"representation": "dubara dahóon",

"representative": "nomainda",

"represented": "nomainda goijjé",

"representing": "nomainda gorér",

"republic": "jomúuri",

"reputation": "izzot",

"request": "aros/dorhás",

"requested": "dorhás goijjé",

"requesting": "dorhás gorér",

"require": "lager",

"required": "laiggé",

"requirement": "zorurot",

"requiring": "zorurot gorér",

"requirment": "zoruri",

"reroute": "rasta bodolo",

"rescheduled": "lari diyagiyé",

"rescue": "basa",

"research": "ricác",

"resembled": "ekku dhoilla óiye",

"resented": "nafosón goijjé",

"resentment": "nafórot",

"reservation": "bukíng",

"reserve the right": "hók asé",

"reset": "abbar séthgor",

"resettled": "boicóti goráiye",

"resettlement": "boicótigorá",

"reside": "táko",

"residence": "tákede zaga",

"residency": "táka",

"resident": "tákoya",

"residential": "manúic tákede",

"residing": "táker",

"residue": "gada baijjé",

"resilient": "bordaci",

"resistance": "boddac",

"resolute": "fáisela",

"resolution": "fáisela",

"resolve": "hólgor",

"resolved": "hól goijjé",

"resolving": "hól gorér",

"resource": "zoriya/usíla",

"resources": "wasál óll",

"respect": "izzot/ehétram",

"respected": "izzot goijjé",

"respecting": "izzot gorér",

"respective": "nizor nizor",

"respectively": "zonfisé zonfisé",

"respond": "zuab de",

"responded": "zuab diyé",

"responding": "zuab der",

"response": "zuab",

"responsibilities": "zimma óll",

"responsibilities and obligations": "zimma arde fóroz",

"responsibility": "zimma",

"responsible": "zimmadar",

"rest": "aramgor",

"restarting": "dubara cúrugorér",

"restaurant": "hóthel",

"restaurent": "hánar zaga",

"rested": "aram goijjé",

"restore": "waapes an",

"restored": "waapes ainné",

"restoring": "waapes loi anér",

"restraining": "pabondi gorér",

"restrict": "pabondi goré",

"restricted": "pabondi goijjé",

"restriction": "paabondi/rukawoth",

"result": "notiza",

"resulted": "notiza neeillé",

"resulting": "notiza neeler",

"resume": "abbar cúru goré",

"resurrect": "dubaratul",

"resurrection": "abbar zinda óon",

"resuscitation": "manúic uggwá ré jan anóon ar úñc goróon",

"retail sale": "báñra besa",

"retaliated": "bodola loiyé",

"retro": "nokol",

"return": "waapesi",

"return to sender": "douyar íkka waapesdo",

"returned": "waapes aiccé",

"returning": "waapes aiyér",

"reunite": "dubara milo",

"reunited": "dubara ettefák óiye",

"reurnee": "waapes oóuya",

"reuse": "abbar estemal gor",

"reveal": "zahérgoró",

"revealed": "zahér goijjé",

"revelation": "nazil",

"revenge": "bodola",

"revenger": "bodola louya",

"revengre": "bodola",

"reverence": "ruúb",

"reverse": "fissá aiyé",

"revert": "wapes aá",

"review": "nozorsáni",

"reviewed": "nozorsáni goijjé",

"reviewing": "nozorsáni gorér",

"revised": "uldhai saiyé",

"revision": "dubarasoón",

"revived": "dubara ziñata goijjé",

"revolution": "enkelab/bogawot/andulon",

"reward": "bokcíc/enam/hadiya",

"rhinoceros": "goiyal",

"rib": "cáiththana",

"rice": "dán/soil/bát",

"rice cooker": "bát rañdóni",

"rice cup snack": "dúñi fiçá",

"rice tree small": "zala",

"rice water": "fén",

"rich": "tuangor",

"rickshaw": "riccá",

"ricochet": "fáldai uçá",

"ricocheted": "fáldai uiththé",

"rid": "duré tákibellá",

"ridge": "zíñya",

"ridge gourd": "zíañ",

"ridged gourd": "furoil",

"rig": "tel tulóni sang",

"right": "sóiyi",

"right angle": "uzu kun",

"right hand": "den át",

"right lung": "dhen dhákor féccwa",

"right now": "ehón ehón",

"right side": "den dák",

"right to assistance": "modot ollá hók",

"right to life": "hóyat ólla hók",

"right to nationality": "decóittayi hók",

"right-handed": "dhenháitta",

"righteous": "sóiyi óla",

"righteousness": "hók",

"rights": "hókuk ókkol",

"rigid": "soktó",

"rigidity": "soktí",

"rigorous": "fakka dorómóro",

"ring": "oóñçi",

"rang": "góndha baze",

"rung": "góndha baijjé",

"ringing": "góndha bazer",

"ring finger": "oóñçi ouñl",

"riot": "fósad",

"rioter": "maramari douya",

"rioting": "maramari der",

"ripped off": "súli félaiye",

"ripping": "siri fáçiféler",

"rise": "ule",

"rised": "uillé",

"rising": "uçér",

"risk": "hótara",

"risky": "hótornak",

"rite": "rosóm",

"ritual washing": "wuzu",

"river": "hál",

"Riyal": "Riyál",

"riyál": "riyál thiañ",

"road": "roóudh",

"road across open area": "zaáñl",

"roam": "gúre/ikká uikká zar/awara goré",

"roaming": "gúrer",

"roaring": "áimmar",

"roasted": "búinna",

"robbed": "dhahaithi goijjé",

"robber": "dhahait",

"robbery": "dhaiti",

"robbing": "luthmath goróon",

"robot": "micínor manúic",

"rock": "fattór",

"rocky": "fattóri",

"rod": "dhandha",

"Rohingya": "Ruáingga/Arkani/Ruháingga/Ruwáingga/Bormáwi/Bormáya",

"rohu": "ruúith mas",

"role": "rul",

"rolled": "gorgorar",

"roller": "rulár",

"roof": "sal",

"room": "(k/h)amrá",

"roommate": "ek hamrát tákoya",

"rooster": "ratarkurá",

"root": "guijja",

"rope": "rosí",

"rose": "gulaffúl",

"roster": "ratakurá",

"rot": "foñsa",

"rotate": "fakkáró",

"rotted": "foiñssedé",

"rotten": "foñsa",

"rough": "hóchoiccá",

"round": "gul",

"rounded": "fakkáraiya",

"roundworm": "sir",

"route": "rasta",

"routine": "niyomti/maamuli",

"row": "cúr",

"royal": "cáhi",

"royal court": "dorbar",

"RSS": "Really Simple Syndication",

"rub": "dholo",

"rubber": "búzoni",

"rubber band": "robár",

"rubbish": "foñsa gola",

"rude": "biadob",

"rug": "haling",

"rugby": "borbadi",

"rule": "niyom/kaanun",

"rule of law": "kaanun or paáwar",

"ruled": "hókumotgoijjé",

"ruler": "fíth-haim",

"king": "raza/kaanun soloya",

"rules": "kaanun",

"rumour": "afua hotá/golot hóbor fóila",

"run": "duñr(o)",

"ran": "duñijjé",

"runing": "duñrer",

"runaway": "dáadai",

"runner": "duñroya",

"running": "duñra",

"running nose": "faní zórerde nak",

"runway": "duñredé rasta",

"rural": "gang",

"rushed": "zam óiye",

"rust": "zooñr",

"sabotage": "tobágoré",

"sacrifice": "kurbani",

"sad": "ferecan",

"sadly": "frecani gorí",

"sadness": "frecani",

"safe": "héfazot asé",

"safer": "bicí héfszot",

"safest": "sóbse héfazot",

"safe haven": "mahafúz faná",

"safeguard": "héfazoti gaáth",

"safely": "héfazot gorí",

"safer": "héfazot óla",

"safety": "héfazot",

"safety zone": "héfazot óla elaka",

"said": "hoiyé",

"sail": "sola",

"saint": "buzurgó manúic",

"sake": "waasté",

"salary": "tolob",

"sale": "besa",

"saliva": "leccwá",

"salt": "nun",

"salt stealing game": "nun sura suri kélah",

"salt water": "nuinna faní",

"salted": "nun ola",

"saltiness": "nun",

"saltless": "anuni",

"saltwater": "nunfaní",

"salty": "nuna",

"salute": "salami",

"salva": "leccwá",

"salvation": "basoon",

"same": "ekku dhoilla",

"same same": "ebbre ekku dhoilla",

"sampan": "sámman",

"sample": "nommuna",

"sanction": "monzuri",

"sanctioned": "monzuri diyagiyé",

"sanctions": "pabodigorá",

"sand": "balu",

"sandal": "centhár",

"sandpaper": "telteilla goréde habos",

"sandwich": "sendúic",

"sang": "gana gaiyé",

"sanitation": "moilar nezám",

"sarong": "longgi",

"sat": "boiccé",

"satan": "cóitan",

"satisfaction": "etminan",

"satisfactorily": "etminan or sáñte",

"satisfactory": "etminan ola",

"satisfied": "etminan óiye",

"satisfy": "etminan diyé",

"Saturday": "Cónibar",

"Saturn": "Satan grudhú",

"sauce": "thaiyon/moris báza",

"saunas": "gorom yá gorom báf loi gaa dúa",

"sausage": "sóséij",

"savage": "haiwani",

"save": "basa/zoma",

"save me": "añáre basa",

"save money": "foisá basa",

"saved": "basaiyé/zomaiyé",

"saw": "deikké",

"say": "hoó",

"saying": "hoór",

"scale": "mizan/mafoni",

"scaled": "maippé",

"scalp": "matár maala",

"scam": "dúka",

"scammed": "dúka diye",

"scammer": "dúkakúr",

"scams": "dúkabazi",

"scan": "eskén gor",

"scanning": "eskén gorér",

"scar": "dak",

"scare": "dhorlaga",

"scared": "dhorlagaiyé",

"scarf": "matár nual",

"scatter": "cíñçaciththa gor",

"scattered": "cíñçaciththa",

"scene": "sínari",

"schedule": "thaim theból",

"scheduled": "thaimtheból goijjé",

"scheme": "kolfona/tortib",

"scholar": "aalem/ulema",

"school": "modorósa",

"school prawn": "sammwá isa",

"schoolboy": "eskuilla fua",

"schooled": "eskul ot diyé",

"schoolgirl": "eskuilla maiyafua",

"science": "sáñis",

"scissor": "keñsi",

"scissors": "keñsi",

"scold": "gail",

"scope": "nozor",

"scorpion": "bissú",

"scotlandland": "eskothelen dec",

"scrabble": "eskrabol",

"scream": "kiskiso(r)",

"screen": "foroda hoor/aina",

"screw": "eskru",

"screwdriver": "eskrudraibar",

"scribbled goby": "baila mas",

"scribe": "lek",

"script": "leká",

"scripted": "leikké",

"scripture": "Allahr kitab",

"scrotum": "boda - andha",

"scrutiny": "zora zora cekgorá",

"scuffle": "dholadholi",

"sea": "doijja",

"seal": "uit",

"seaport": "doijjar gáñth",

"search": "tua",

"season": "mousóm",

"seat": "boiyóni",

"second": "dusára",

"second hand": "estemal goijjá",

"secondary": "dusára dorjar",

"secondary school": "midhél eskul",

"secondly": "arekbar",

"secret": "luwaiya",

"secretary": "ségethari",

"section": "híssa",

"sector": "gótah",

"secure": "mahafúz",

"secured": "mahafúz goijjé",

"security": "amón/héfazot",

"security and welfare": "amón arde rafáyi",

"seduce": "bíra",

"see": "deké",

"saw": "deikké",

"seed": "dana",

"seeing": "dekér",

"seek": "talacgor",

"seek help": "modot tuo",

"seeker": "tuoya",

"seeking": "tuar",

"seem": "lagerdé",

"seen": "deikké",

"segment": "tobka/tokorir",

"segregate": "alokgor",

"seige": "gíriféla",

"seizure": "súañfirani",

"seldom": "atíkka utíkka",

"select": "basílo",

"selected": "basíloiyá",

"selection": "basíloon",

"self": "nize/nizor",

"self-determination": "húd-erada",

"selfish": "húdgoros",

"sell": "bes",

"sold": "beissé",

"selling": "besa",

"selling and buying": "besakina",

"semen": "moni/morotfuar faní",

"semester": "simisthar",

"seminar": "siminar",

"senate": "palimen hóus ziyán decór kaanun bana",

"send": "deferá/foóñsa",

"send by different way": "oinno rasta lo defeçó",

"send down": "lamai de",

"send someone": "honíkka ré defeçó",

"send something": "kessú defeçó",

"senior": "furana/dhoóñr",

"senior council": "boromiya konsil",

"sense": "akol",

"sensible": "akolmondi",

"sensitive": "samfatol ola",

"sent": "defeçáiye",

"sent down": "lamai diyé",

"sentence": "hóta/júmla",

"sentence construction": "júmla bana",

"sentiment": "jozbadi/rai",

"separate": "alok",

"separated": "alok goijjé",

"separately": "alok gorí",

"separation": "alok goróon",

"separator": "alog goróya",

"September": "Séptambor mác",

"serial": "sílsila",

"series": "sílsila",

"serious": "sóngin",

"seriously": "sóngin gorí",

"seriousness": "sóngin gorá",

"sermon": "hútba",

"serpent": "boro háf",

"serum": "siram",

"servant": "goróni",

"serve": "hédmot gor",

"server": "hédmot goróya",

"servery": "hédmot goréde",

"service": "hédmot",

"services we offer": "añára peec goríde hédmot ókkol",

"serving": "hédmot gorér",

"sesame": "góicca",

"sesame oil": "góiccar tel",

"sesame óil": "góicca",

"session": "jolsa",

"set": "séth goré",

"set gor": "tai gor",

"set on fire": "ooin dória diye",

"set up": "baindí",

"setting": "séthín",

"settle": "séthel gor",

"settled": "séthel óiye",

"settlement": "séthel gorá",

"seven": "háñt",

"seventeen": "háñtaro",

"Seventeen": "hañtaro",

"seventy": "óittoir",

"Seventy": "óttoir",

"several": "becábicí",

"severe": "hora",

"severely": "soktó/hora gorí",

"severing": "soktó/hora gorér",

"severity": "soktí",

"sewerage": "hosora fanír lain",

"sewn": "sílaiya",

"sex": "jinsí",

"sexual": "jinsí",

"sexual orientation": "jíns ór tuaijjo",

"sexuality": "morddani",

"shade": "sábaa",

"shadowy": "sáma",

"shahada": "caháda",

"shake": "lar",

"shaken": "laijja",

"shall": "saá",

"shallow": "sotor",

"shame": "córom",

"shameful": "córmohotá",

"shampoo": "cémpu",

"shape": "cokól",

"share": "cíyar",

"shared": "cíiar goijjé",

"sharee": "cári",

"sharifa": "córifa",

"shark": "óoñr mas",

"sharp": "dár",

"sharpened": "dáraiye",

"sharply": "tesgorí",

"shart": "bazu",

"shattered": "báñi kuru óigiyoi",

"shawl": "cál",

"she": "ibá",

"she camel": "uñthni",

"she goat": "fañçí sóol",

"she has": "ibártu",

"she sheep": "façí sóol",

"she-camel": "maiyañ uñth",

"sheep": "dubba sóol",

"sheet": "saddor",

"shelf": "célf",

"shell": "háth",

"shell fish": "thuwala ola mas",

"shelter": "sáiya",

"sheltered": "sáiyadiya",

"shepherd": "janwar soroya",

"shepherded": "soraiyé",

"shield": "dhál de",

"shift": "zaga bodole",

"shifted": "zaga bodoillé",

"shine": "somok",

"shiny": "sosoikka",

"ship": "zaáñs",

"ships": "zaáñs loi defeçá",

"shirt": "bazu/kamis",

"shivering": "hañfer",

"shock": "sótma",

"shocked": "sótma laiggé",

"shocking": "sótma ola",

"shoe": "zuta ókklol",

"shoes": "zuta",

"shoolchild": "eskuillafua",

"shoolmaster": "eskulor masthor",

"shoot": "guli mar",

"shooting": "guli marer",

"shop": "duan",

"shopfront": "duan or muúm",

"shopping": "bazar goróon",

"shore": "doijjar hañsa",

"shorif": "hándani",

"short": "baiththá",

"short man": "baiththá manúic",

"short-pant": "baiththá feén",

"shortcut": "baiththát",

"shorten": "baiththá gor",

"shortly": "ekkená gorí",

"shot": "guli",

"shotgun": "cóñço bonduk",

"should": "saá",

"should help": "modot goróon saá",

"shoulder": "hañdá",

"shout": "silla",

"shouted": "uzoor diyé",

"shouting": "uzoor der",

"show": "dahá",

"show off": "daháwa",

"showed": "daháiye",

"shower": "zónna",

"showing": "dahár",

"shown": "dahágiye",

"showroom": "cóurum",

"shrimp": "isamas",

"shut": "bon",

"shutdown": "bongor",

"shuttle": "cathel",

"shy": "córom",

"sick": "gaat gom noláar",

"sick man": "biaraimma manúic",

"sickening": "biaraimma",

"sickness": "biaram",

"side": "hañsa",

"side effect": "nuksani asór",

"side to side": "dháke dhák bazáiya",

"sidebar": "sáidh lain",

"sidestep": "dhákor hañsa",

"sidesteped": "dhákor sáith loiye",

"sidewalk": "hañsaloi áñça",

"siege": "gírifél",

"sight": "deká",

"Sight": "nozor",

"sighted": "saiyé",

"sighting": "soón - saár",

"sign": "sáain/dostok",

"sign 1": "dostokgor",

"sign board": "sáainbudh",

"sign up": "rejisthar gor",

"signal": "icára",

"signatory": "dostok goróya",

"signature": "sáain/dostok",

"signboard": "sáinbudh",

"signed": "dostok goijjé",

"significance": "ahámiyot",

"significant": "luwazadé/dórazadé/ahámiyot",

"significantly": "háasgorí",

"silent": "nizám",

"silent and chracters": "ahálak adob",

"silk": "recóm",

"sill": "goddainna",

"silly": "bekuf",

"silver": "rufa",

"silver barb": "hoiñ fuçí mas",

"silver color": "cíca rong",

"similar": "ekku dhoilla",

"similarity": "ekku dhoilla",

"similarly": "índila gorí",

"Simon": "Amerikar gana goóuya",

"simple": "asán",

"simplified": "asán goijjá",

"simply": "asán gorí",

"sin": "guná",

"since": "loti",

"sincere": "muhéles",

"sincerely": "cóiccayir/dilor sáñte",

"sing": "gana gaá",

"sang": "gana gaiyé",

"sung": "gana gaáil",
"singing": "gana gaár",

"singer": "gana goóuya",

"single": "ekála",

"single track road": "ek gúilla rasta",

"sinister": "bicí hóraf hosoradé",

"sink": "dhufé",

"sinked": "dhuippé",

"sinus": "zuhám",

"sip": "dhúk",

"sir": "jii",

"siren": "sáiren",

"sister": "bóin",

"sister-in-law": "bácur",

"sit": "boi(yó)",

"sat": "boiccé",

"sítting": "boiyér",

"sit down": "boi",

"sitdown": "boi - boiyó",

"site": "sáith",

"sitting": "boiyér",

"situated": "asé",

"situation": "háalot",

"six": "só nombór",

"sixteen": "cúlloh",

"sixty": "(c/h)áith",

"size": "maf/andaza",

"skeptical": "cókola",

"sketch": "nokcó",

"skew": "théça goré",

"skill": "mahéri/húnor",

"skilled": "mahér óla",

"skillful": "hamzanoya",

"skin": "sam",

"skinned": "súilla",

"skip": "cúçidó",

"skirt": "goón",

"skull": "matár mala",

"sky": "asman",

"sky blue": "asmani rong",

"sky color": "asmani rong",

"slander": "bodnami",

"slanderer": "bodnamigoróya",

"slant": "máail",

"slap": "suar mar",

"slapped": "suar maijjé",

"slash": "dam homa",

"slashed": "bicí gorí homaiyé",

"slate": "síloith",

"slaughter": "zorá",

"slave": "gulam",

"slavery": "gulami",

"sleep": "gúm(za)",

"slept": "gúmgiye",

"sleeping": "gumzar",

"sleeping": "gúm zar",

"sleepy": "zúrar",

"sleeve": "astin",

"slender": "fatola",

"slept": "gúm giyé",

"slice": "sak",

"sliced": "haçi félaye",

"slide": "sláidh",

"slim": "fatola",

"slink": "cuppe cuppe zoo",

"slip": "sossora",

"slipped": "sossoraiyé",

"slipping": "sossorar",

"slipper": "centhár",

"slippy": "sossoraiya",

"slit": "fáçe",

"slitting": "fáçer",

"sliva": "sép",

"slogan": "nara",

"slow": "asté",

"slower": "asté asté",

"slowest": "bicí asté",

"slowly": "asté",

"slowlyslowly": "asté asté",

"slug": "lok",

"sly": "cíyailla salák",

"smacked": "háte maijjé",

"small": "gura",

"smaller": "bicí gura",

"smallest": "ebbre gura",

"small box": "kuththa",

"small intestine": "gura añti",

"small letter": "cóñço hátor leká",

"small mountain": "gura murá",

"small room": "háçail",

"small street": "sisizza rasta",

"smaller": "beec cóñço",

"smallest": "ebbre cóñço",

"smart": "sotur/salák",

"smashed": "báñgi thukuça goijjé",

"smell": "bac",

"smelling": "fuñwér",

"smile": "h-áñco",

"smoke": "dúañ thanoon",

"smoke-free": "dúañ-sára",

"smoker": "cuñça thanoya",

"smokey": "dúañr dhoil",

"smoking": "cuñça hóon",

"smoky": "kúwa kúwa",

"smooth": "telteilla",

"smoothly": "telteilla gorí",

"smuggler": "blék goróya",

"smuggling": "blék gorér",

"snack": "fiçá",

"snail": "hóuñk",

"snake": "háf",

"snake gourd": "hoiñçá",

"snake gourd": "hoiñiçá",

"snake head": "hólimmas",

"snakegourd": "hoñiçá",

"snap beans": "bor hoñrisóñi",

"snatch": "súli loiféla",

"sneak": "cuppe cuppe zaa",

"sneaky": "salák",

"snore": "górgorá",

"snoring": "górgorár",

"snot": "cíin",

"snow": "boróf",

"snow fall": "boróf fora",

"snow falls": "boróf fora óll",

"snowflake": "borófor fúl",

"snowstorm": "borófor tuán",

"snowy": "borófi",

"so": "tóile/éhotálla óuli",

"so and so person": "fólana",

"so close": "bicí hañsé",

"so that": "taáke",

"so-called": "bóli hoóde",

"soap": "sábon",

"soap dispenser": "sábon neelai doni",

"soapdish container": "sábon or dani",

"soar": "hóro",

"soccer": "boól kéla",

"social": "cómaji",

"social status": "cómaji hásiyot",

"social worker": "cómaji hamgoróya",

"society": "sómaj/jomáti",

"sock": "mouza",

"socket": "sokéth",

"sofa": "sufa",

"soft": "norom",

"soft palate": "galor norom sal",

"soft plate": "norom pleith",

"soft tip": "norom uoror matá",

"software": "sófthwear",

"software developer": "frugram banoya",

"soil": "meçi",

"soil digger": "meiththailla",

"solar": "beilor",

"solder": "fóus",

"soldier": "fóus",

"sole": "théngor tallwa",

"solemann": "súfi",

"solemn": "súfi",

"solicitor": "ukil",

"solid": "doró jiníc",

"solidarity": "ettefáki",

"solidified": "doró goijjé",

"solution": "hól",

"some": "kessú",

"some common questions": "kessú aám súal ókkol",

"some one else": "ar honíkka",

"some time": "kessú thaim",

"some word": "baás hotá",

"somebody": "honíkka",

"somebody else": "oinno honíkka",

"someone": "honíkka",

"someone else": "oinno honíkka",

"someone special": "háas honíkka",

"someone you like": "tuñí fosón goróde manúic",

"someone you loved": "tuñí ador goróde manúic",

"something": "kessú",

"sometime": "kessúthaim",

"sometimes": "buzu motta",

"somewhat": "honó bóte",

"son": "morot fua",

"son's wife": "futor bou",

"son-in-law": "zamai",

"song": "gana",

"soon": "hára",

"sooner": "joldi",

"sooner or later": "jolti yá baade",

"sore": "zohóm",

"sore arm": "dhuwáñ bic",

"sore throat": "golar bic",

"sorrel": "hórofata gula",

"sorrow": "afsús",

"sorry": "maf saáir",

"sort": "tortib gor",

"sort out": "tortif goró",

"sorting": "kisím forók gorá",

"sought": "tuaiyé",

"soul": "ruú/foran",

"sound": "abas",

"sound and healthy": "bála arde sehéti",

"sound for puch": "bááng",

"sound of eating": "mula hoóñt",

"sound of falling": "dháág gorí",

"sound of knife trust": "bóçor gorí",

"sound of male chicken": "kóóñt kóóñt",

"sound of tree falling": "hóóñt gorí",

"sour": "(k/h)óro",

"source": "zoriya/wasáil",

"soured": "hórodiya",

"sourness": "hóror dok",

"south": "doóin",

"south eat": "doóine arde fuge",

"south west": "doóine arde fosíme",

"southern": "doóinor",

"sovereign": "maalek",

"sovereignty": "badcáiyi",

"soy": "soya dana",

"space": "háli zaga/asman",

"spacious": "fárokot",

"spade": "kudal",

"spain": "espain or dec",

"spam": "fózul",

"span": "lamba",

"spanish": "espánic",

"sparrow": "fiñaijja",

"sparsely": "bicí hom gorí",

"spatial": "demaki",

"speak": "hotáhoó",

"speak and listen": "hoói yóre fúno",

"speak from the heart": "dilor bútortu hoó",

"speaker": "hotáhoiya",

"speaking": "hotáhoór/matoon",

"speakout": "dhoóñr gorí hoó",

"spearman": "sél óla",

"special": "kháas",

"special benefit": "hósusi fáaida",

"special beneft payment": "espicél fáaidar thiañ diya",

"specialised": "háas goijjé",

"specialist": "mahéri",

"specialist care": "mahéri dekbal gorá",

"specialize": "háas gor",

"specific": "háas",

"specifically": "háas gorí",

"specified": "waazé goijjá",

"specify": "waazé gor",

"specimen": "nommuna",

"speculated": "kias goijjé",

"speculation": "kias",

"speech": "boktita/tokorir",

"speed": "tez",

"speed up": "espídh bicí gor",

"speedy": "tezi",

"spend": "hóssa gor",

"spent": "hóros goijjé",

"sperm": "moni",

"sphere": "gulguilla",

"spherical": "gulguilla mikká",

"spic": "ebbre sáf sútara",

"spice": "moris mosálla",

"spices": "mosólla",

"spicy": "zál",

"spider": "moccá",

"spider web": "moccár zal",

"spin": "gúr(a)",

"spine": "dañra",

"spiral": "fakkáraiya",

"spiritual": "ruháni",

"spit": "sép",

"spleen": "teli",

"split": "alokgor",

"spoke": "hotá hoiyé",

"spoken": "hotá huwágiyé",

"sponsor": "espónsar/kofil",

"spontaneous": "nizebaze ói aiyedé",

"spoon": "samic",

"sport": "kélaá",

"spot": "nuktá",

"spotlight": "laáith ór fúça",

"spotted snake head": "thaái mas",

"spouse": "beçabeçi",

"spray": "espré",

"spread": "séra",

"spreaded": "séragiye",

"spreading": "séraizar",

"spring": "espríng",

"spring onion": "dóla fiañs",

"spritual": "ruháni",

"sputum": "leththwa",

"spy": "jaasus",

"squad": "thiím",

"square": "sairkunola",

"square shape": "sair kuinna cokól",

"squash": "sibi hoñcoçifélo",

"squirrel": "sulhaça",

"squiz": "sibilo",

"stab": "súrimar",

"stabbing": "súrimara",

"stability": "tímtáka",

"stable": "tímot",

"stack": "tákgor",

"staff": "hamgoróya",

"staffed": "ham goróya raikké",

"stag": "gous órin",

"stage": "esthéij/thong",

"stair": "cíçir tók",

"staircase": "cíçi",

"stake": "zuakélar thiañ dhála",

"stakeholder": "rasmal douya",

"stall": "tooitta duan",

"vendor": "ek sáitta duan",

"stamp": "moór/síil",

"stand": "tíade jiníc",

"stand by": "toyar",

"stand up": "tíya",

"standard": "miyar/tobka",

"standing": "tíai táker",

"standing up": "tíya táikke",

"staple": "esthepol mar",

"stapler": "steplar",

"star": "tara",

"star fruit": "houñra gula",

"star shape": "tarar cokól",

"stare": "suk dhoóñr gorí saá",

"starfish": "tara mas",

"starfruit": "hoñra gula",

"starling": "hawa",

"start": "cúrugor",

"started": "cúru goijjé",

"starting": "cúru gorér",

"state": "estéith",

"stated": "boiyan goijjé",

"stateless person": "dec sára manúic",

"statement": "boiyan/ekarar",

"statement balance": "mizanor boiyan",

"statement of account": "hísaf cekgorá",

"static": "noloredé/tíaitákede",

"stating": "boiyan gorér",

"station": "estécen",

"stationed": "thóoijje",

"status": "hásiyot/háalot",

"statutory": "kaanuni",

"stay": "táke",

"stay in touch": "taaluk raikkó",

"stay informed": "zugazuk táko",

"stayed": "táikke",

"staying": "place tór",

"steadfast": "kaayemták",

"steal": "surgor",

"steam": "báf",

"steel": "esthíil",

"steering": "súan",

"stemum": "hóriná",

"step": "tók/kodom",

"stepfather": "hátaibaf",

"stepmother": "hátaimaa",

"steps": "topka óll",

"sternum": "hórina",

"stick": "súañ",

"sticky": "bazáiya",

"still": "aijó",

"stingy": "mutá/bohíl",

"stir": "gúço",

"stirred": "gúijje",

"stirring": "gúçer",

"stitched": "sílaiye",

"stock": "zoma goijjá maal",

"stock exchange": "cíiar bazar",

"stockpile": "thal mar",

"stockpiling": "thal marer",

"stole": "sur goijjé",

"stolen": "sure loigiyói",

"stomach": "feth/zúla",

"stomach pain": "feth hoñrani",

"stomach-upset": "feth hoñrar",

"stone": "fattór/dola",

"stood": "tíaiyé",

"stool": "thoul/gúu",

"stop": "tíya",

"stoppage": "hórotal gori ham bon gorá",

"stopped": "tíaigiyói",

"storage": "gudam",

"store": "gudam",

"storey": "monzil",

"storm": "tuán",

"story": "kissá háni",

"stories": "kissá kaháni",

"storyteller": "kissá hoóiya",

"storytelling": "kissá hoón",

"stove": "sulá",

"straight": "uzu - cúza",

"straightaway": "uzuzu",

"stranded": "tíaigiyói/besáara",

"strange": "taajuib(ba)",

"stranger": "ajnobi",

"strategic": "sail ola",

"strategy": "sail/hékmoti",

"strawberry": "esthrorberi",

"stream": "sórah",

"streamline": "cóhoc goríder",

"street": "rasta",

"strength": "taakot",

"strengthen": "mozbut goré",

"strengthening": "mozbut gorér",

"strenuous": "bodiyafore",

"stress": "sabfora/sinta",

"stressed": "zur/matá hóraf óiye",

"stressful": "sabdiya",

"stretch": "than(e)",

"stretcher": "háiththa",

"strick": "góuçi baijjé",

"strict": "hora",

"strictly": "hora/soktí gorí",

"strike": "barimar",

"striking": "bari marer",

"string": "rosí/lofzó/leká",

"strive": "kucúc gor",

"strong": "doró/mozbut",

"stronger": "bicí doró",

"strongest": "ebbre soktó",

"strongly": "soktógorí",

"struck": "maijjé/barimaijjé",

"structure": "hák",

"struggle": "mehénnot goré",

"struggling": "juddo jihá gorér",

"stubborn": "zittulla",

"student": "forínna fua",

"studies": "dorása",

"studio": "kulluk maijja zaga",

"study": "fonnáfor",

"stuff": "jiníc",

"stuffed": "bóijja",

"stunned": "taajuippa ham goijjé",

"stupid": "hóraf/bekuippa",

"style": "esthail",

"sub": "nisor",

"sub-total": "muth-théila",

"subcontract": "kontherék or bák",

"subcontracted": "kontherék or bák loiyé",

"subdued": "sibi raikké",

"subject": "mouzú",

"subject to": "goráza",

"subjected": "mojbur goijjé",

"submission": "háwalagoróon",

"submit": "háwalagor",

"submitted": "toslim goijjé",

"subsequent": "baade/dusára",

"subsequently": "fore fore gorí",

"substance": "ciz",

"substance detection": "jiníc tua",

"substances": "jiníc ókkol",

"substandard": "thóka",

"substantial": "kaafí",

"substantially": "doró móro gorí",

"substitute": "bodola bodoli gor",

"subtitle": "gura thaithél/torjuma",

"subtracting": "homai",

"subtraction": "neelai féloon",

"succeed": "kamiyap",

"succeeded": "kamiya óiye",

"succeeding": "kaamiyapór",

"success": "kaamiyabi",

"successful": "kamiyab",

"successfully": "kaamiyabir sáñte",

"such": "endila",

"such as": "zeén néki",

"such that": "éndila",

"suddenly": "atíkka",

"suffer": "dukfar",

"suffered": "bordac goijjé",

"suffering": "zillot far",

"suffice": "kaafí",

"sugar": "siní",

"sugarcane": "kuiccól",

"suger": "siní",

"suggest": "mocuwara do",

"suggested": "mocuwara diya giyé",

"suggesting": "mocuwara der",

"suggestion": "mocuwara",

"suicide": "húdhúci",

"suit": "súth cuth arde feén ekku rong or",

"suitability": "munaséf",

"suitable": "munaséf",

"suite": "hóthel or hamra",

"suji sweet": "súzi hálawa",

"sul": "hair",

"summarise": "muktosor goré",

"summary": "húlasa",

"summer": "goromhal",

"sun": "beil",

"sun at it's zenith": "beil thík óiye",

"sun eclipse": "beil oré gonná dóijje",

"sun flower": "cújjofúl",

"sun has sunk": "beil dhufígiyói",

"sun rises": "beil uçé",

"sun rising": "beil uçér",

"sun setting": "beil góler",

"sun's rays": "beilor cóçok",

"Sunday": "Rooibar",

"sunflower": "cújjofúl",

"sunflower seed": "cújjofúlor dana",

"sunglasses": "roidor cocmá",

"sunlight": "beil or foór",

"sunrise": "beiluçá",

"sunscreen": "beilor cocmá",

"sunset": "beil gólile",

"sunshine": "beilor foór",

"super": "ódor baára",

"superior": "afzól",

"superior vena cava": "gaar nisor híssartu hosora lou óll grudár úzu anéde rok",

"supermarket": "borobazar",

"superseded": "bodoli diyé",

"supervisor": "suparvaizar",

"supplement": "ziyadá gorídiya",

"supplemented": "ziyadá gorídiyé",

"supplicate": "fóriyat gor",

"supplication": "fóriyat",

"supplied": "mal foóñsáidiyé",

"supply": "mal de",

"supplying": "mal der",

"support": "hémayot",

"support group": "hémayot or group",

"supported": "modot goijjé",

"supporter": "modot goróya",

"supporting": "modot gorér",

"supportive": "modot gorérde éndila",

"suppose": "manilodé - essát ólla manilodé",

"suppress": "sibe",

"suppressing": "siber",

"supreme": "boro",

"sure": "fakka",

"surely": "fakka gorí",

"surface": "fúainna zaga",

"surfaces": "sót ókkol",

"surge": "izafá",

"surplus": "ziyadá",

"surprise": "taajub/ammúikka",

"surprised": "taajup/ammúk lager",

"surrender": "sárendhar",

"surround": "gíriféla",

"surrounding": "atehañsé",

"surveillance": "soñigorá",

"survey": "tadarot gor",

"surveyor": "zobin mafoya",

"survival": "zinda táká",

"survive": "basitáko",

"survived": "zinda táikke",

"survived genocide": "jenusáit óttu basi táikke",

"survivor": "basitákoya",

"suspect": "cók",

"suspected": "cókgoijjé",

"suspense": "neelaide",

"suspicion": "cók",

"sustain": "modot fa",

"sustained": "zari táikke",

"sustainer": "faloya",

"sustaining": "zari táker",

"sustenance": "rizík",

"swallow": "gilo",

"swan": "boga",

"sway": "dháikka",

"swear": "kosóm háa",

"swore": "kosómgor",

"sworn": "kosómgor",

"swearing": "kosómgor",

"swearing": "kosóm",

"sweat": "gám",

"sweating": "gám neeler",

"sweaty": "gáme rocé",

"sweep": "fúureh",

"sweeper": "kuñsoya",

"sweet": "miçá",

"sweetest": "moza",

"sweet gourd": "kiáñra gula",

"sweet potato": "lal alu",

"sweetened": "miçádiya",

"sweeter": "gorom bazu",

"sweetness": "miçá",

"swell": "fúl",

"swelled": "fúille",

"swelling": "fúler",

"swim": "áñsur",

"swimed": "háñsur",

"swiming": "háñsurer",

"swimming": "áñsurer",

"swimming pool": "áñsurede kuwa",

"swine": "cúwor",

"swinger": "dhúloya",

"swinging": "dhúler",

"switch": "bodol/tobdil",

"Switzerland": "Swizarlen",

"swivel chair": "gúrede kursí",

"swollen": "fúilla",

"sword": "lamba súri",

"sword bean": "bor sóñi",

"Sydney": "ekkán Ostrelíar boro cóor",

"syllabus": "nisab/karikulam",

"symbolic": "nicán/alaamot ola",

"sympathy": "hámdorodi",

"symptom": "alaamot",

"synagogue": "yohúdir dórmohána",

"synchronize": "ekdhoilla goró",

"syndicate": "ekkudhoilla ageloiza",

"syndrome": "síndhroum",

"synonym": "borabor",

"Syria": "Syria dec",

"system": "nezam",

"systematic": "nezami",

"systematic policy": "nezámi polósi",

"systemetically": "sisthemétík gorí",

"sítting down": "boói táikke",

"sóft": "norom",

"T-shirt": "T-bazu",

"tab": "téb",

"table": "mes/theból",

"table tennis": "theból thenís",

"tabled": "fissá gorágiye",

"tackle": "hól gor",

"tackled": "hól goijjé",

"tactic": "sail",

"tag": "hót/sinno",

"Taif": "Taif cóor",

"tail": "les",

"tailor": "dorzi",

"tailor made": "dorzi banaiya",

"tailored": "ódodé banaiyé",

"tailoring": "hoorsíla",

"take": "lo - loiza",

"took": "loiyé",

"taken": "loiyé",

"taking": "lor",

"take action": "karwaiyi gor",

"take away": "loiza",

"take good care of yourself": "nizoré nize bála kíyal rakó",

"take off": "kúliféla",

"take resonsibility": "zimma lo",

"take steps": "hodom ókkol lo",

"taken": "loifélaiye",

"taking": "lor",

"tale": "dhandhari",

"talent": "salák - tezi - demaki - sotur",

"talented": "salák",

"talk": "hotáhoó",

"talkative": "hotábas",

"tall": "lamba",

"taller": "bicí lamba",

"tallest": "ebbre lamba",

"tall youn man": "lamba hoicca manúic",

"tamarind": "tetói",

"tamed": "banaya",

"tangerine": "afándhi",

"tangible": "dórifaredé",

"tank": "thaingki",

"tape": "theip",

"target": "thíkana/nicána",

"my target": "anr moksót",

"targeted killing": "thíki kotólgorá",

"tarnish": "zooñr",

"taro leves": "hoñsufata",

"taro-stem": "hoñsu ák",

"task": "ham",

"taskforce": "háas ham or grúp",

"taste": "moza",

"tasteful": "mozaola",

"tastefully": "mozagorí",

"tasteless": "mozasára",

"tasty": "moza",

"taught": "cíkaiyé",

"taunt": "técera",

"taunting": "técerar",

"tax diya": "háñsil tulá",

"taxonomy": "lofzórzák",

"TB": "feccár biaram",

"tea": "saá",

"tea leave": "saá fata",

"tea plate": "sáarfinic",

"tea-cup": "saár-fiala",

"teach": "forá/cíkah",

"teacher": "fonná foráde ustat",

"teaching": "cíkardé",

"teal": "háil cúrma róng",

"team": "thiím",

"team manager": "thiím menéjar",

"teapot": "saár ketóri",

"tear": "fáçe",

"tear gas": "sukfuredé geés",

"tearful": "hañdani",

"tears": "hañdani",

"teasel gourd": "hañ horola",

"teat": "dudór bath",

"teat - nipple": "dudór bath",

"technical": "theknikel",

"technique": "thekník",

"teenage": "baicfon",

"teenager": "nojuan/hoicca fua",

"teeth": "dat ókkol",

"teillasura": "cockroach",

"telephone": "telifún",

"television": "telivicén",

"teliphone": "thelifún",

"telivision": "telivicén",

"tell": "hoó/hóborde",

"telling": "hoór",

"temperature": "gorom sórot",

"template": "nomuna",

"temple": "kualor dhák óll",

"temporary": "tooitta - ekkenágorílla - muákkot - woktíhísafe - muággot",

"temporay": "essát ólla/ekenálla",

"ten": "doc",

"ten million": "ek-kurul",

"Ten-lakh": "doc lák 10,00,000",

"tenant": "keriyadar",

"tended": "soñi goijjé",

"tender": "norom",

"tendon": "théngor gus",

"tennis": "thenís",

"tense": "zobana",

"tension": "sinta/demak hóraf",

"tensions between communities": "sómaji ókkol ór bútore thanathani",

"tent": "thambu - kháima",

"tention": "demak há",

"terabyte": "házar gegabaith ye ek therabaith",

"term": "miyad/kaanuni hagos",

"terminate": "neelaide",

"terminated": "hótom gorágiye",

"termite": "ui",

"terms and condition": "corót arde háalot óll * niyom ar corót * sikeng & tsmekcá*",
/*cute*/

"terms and conditions": "niyom arde corót ókkol",

"terrible": "ódor baára dhorlagedé",

"terrified": "ebbre dhoraigiyói",

"territory": "elaka",

"test": "teés - teésgor - teésgorá - zontrodi saá",

"tester": "testhar - teés goróni - cekgoróni",

"testing": "teés gorér",

"testis": "boda (maincór)",

"text": "leká",

"textbook": "eskulor kitab",

"textfield": "lekíbórzaga",

"thaim": "cómo - thaim",

"than": "áttu áro",

"thank": "cúkuria gor - taarif gor",

"thank you": "cúkuria - tuáñre cúkuria",

"thanked": "cúkuria goijjé",

"thanks": "cúkuria",

"that": "uán/yían",

"that is another one": "yá uggwa",

"that's": "yían óilde",

"thatch": "són",

"thawb": "kuruta",

"the": "wá/án",

"the life of this world": "duniyai yián ór háiyat",

"the month of Rajab": "Rojob or mac",

"the one who makes excuses": "bahána douya",

"the patient one": "sobór goróya",

"the whole descendent": "zadthía",

"theater": "thiyéthar",

"their": "itarár",

"theirs": "tarár nizor",

"theirself": "tará nizebaze",

"them": "taráre",

"theme": "daháibór torika",

"themselves": "taránize",

"then": "tarfore/tói",

"therapy": "elaj",

"there": "éçe",

"there is": "asé",

"therefore": "ótolla",

"therein": "éçe bútore",

"thermos": "felas",

"these": "iín",

"they": "ítara",

"those": "itará",

"they have": "ítarartú",

"thick": "dhañço",

"thicken": "dhañço gor",

"thief": "sur",

"thievery": "suri",

"thigh": "ran",

"thin": "fatol",

"thinner": "fatoilla",

"thinnest": "ebbre fatol",

"thing": "ciz",

"thing with which to enter": "góloni",

"things around": "atehañsór jiníc",

"things of no value or use": "ábazabá",

"think": "báf",

"thinking": "báfa",

"thinking of you": "tuáñralla báfir",

"third": "tesára",

"thirdly": "tesára hísafe",

"thirds": "tin borat or",

"thirsty": "fanír tirác laiggéde",

"thirteen": "teró",

"thirty": "tiríc",

"this": "yián",

"this is another one": "yaa uggwá",

"this means": "yaáni",

"this morning": "aijja beínna",

"thobe": "kuruta/jubba",

"thorn": "keñça",

"thorny": "keñça ola",

"thorough": "káamel mukammel tofsili",

"thoroughly": "bálagorí",

"those": "uiín",

"those who": "zetará",

"though": "óileyo",

"thought": "kiyál",

"thoughtful": "báfizanede",

"thousand": "házar 1,000",

"Thousand": "ekházar (1,000)",

"thread": "añc/fúta",

"threat": "dómki",

"threaten": "dómkide",

"threatened": "dómki diyé",

"threatening": "dómki der",

"three": "tin",

"threw": "mela maijjé",

"throat": "thuñçala/noroli",

"throb": "hañfa",

"throne": "Allahr arcó",

"through": "duara",

"through an acquaintance": "uggwá zanafúna maincórtu",

"through out": "beggúla",

"throughout": "ahéri foijjonto",

"throw": "melámar",

"throwing": "melá marer",

"thrown": "melá mara giyé",

"thrust": "théla",

"thrust a knife": "súri théli gólaide",

"thumb": "buijjá ouñl",

"thumbnail": "muktosor nicán",

"Thursday": "Bicíbbar",

"thus": "endila gorí",

"thyroid gland": "gilíth",

"ticket": "thikóth",

"tidy": "sáfsaf",

"tie": "ban/girá",

"tying": "bañdér",

"tie-up": "bañdó",

"tied": "bañdá",

"tied up": "bañdí raikké",

"tiered": "forol forol goijjé",

"tiger": "bak",

"tiger prawn": "hailla isa",

"tight": "thaith",

"tighten": "morá",

"tigress": "baíggani",

"tilapia": "jafani mas",

"till": "fojjonto",

"till now": "yaa fojjonto",

"time": "woktó",

"time frame": "thaim or hót",

"time to time": "thaime thaime",

"timeline": "thaim lain",

"timely": "thaim mozin",

"timesheet": "tháimcíth",

"timestamp": "thaim or moór",

"timetable": "thaim theból",

"timing": "thaim or",

"tin": "foth",

"tingiling": "besún",

"tinier": "bicí cóñço",

"tiniest": "ebbre cóñço",

"tiny": "bicí gorá",

"tips": "nosíyot",

"tire": "hóran óiye",

"tired": "hónran óiye",

"tiredness": "hóranlaga",

"tireness": "hóran/komzuri",

"tissue": "gaar gusso",

"title": "lokób",

"TM translation memory": "torjuma yaatraká",

"to": "ot/tóu",

"to accept": "kobulgoríbellá",

"to be": "óibella",

"to be able": "fari bélla",

"to comply": "mani bélla",

"to detect": "tuai dóribélla",

"to do": "gorí bélla",

"to eat": "hái bella",

"to ensure": "ekin/hámaha óiballa",

"to find": "tuai faibellá",

"to give birth": "baicca dibelá",

"to go": "zaibellá",

"to increase": "baríbélla",

"to know": "zani bélla",

"to let you know": "tuáñre zanai bélla",

"to live peacefully": "cánti gorí tákibellá",

"to make easy": "asán goríbélla",

"to make up outstanding point": "candár púain banai bélla",

"to me": "añáre",

"to overtake": "age neelíbélla",

"to prevent harm": "nuksan oré rukíbélla",

"to raise": "tulíbélla",

"to remain anonymous": "gufoniya tákibellá",

"to run business": "hasharbar solaibélla",

"to search": "tuai bélla",

"to set": "séth goríbélla",

"to understand": "buzíbélla",

"to whom it may concern": "zar loi taaluk óitfare",

"to you": "tuáñre",

"toad": "kuna beng",

"toast": "séikka ruthu",

"toaster": "tousthar",

"tobacco": "cuñça fata",

"today": "aijja",

"toe": "théng or ouñl",

"toenail": "théngor nok (buijjá ouñl)",

"toes": "théngor ouñl óll",

"toes nail": "théngor nok (bujjá ouñl)",

"together": "fuañti",

"toilet": "thaththi/fecák hána",

"toiletry": "gusól hánar jiníc",

"told": "hoiyé",

"tolerance": "boddac",

"tolerate": "boddacgor",

"toll": "gáñth fan",

"tomato": "thaiyon",

"tomatoe": "hórothaiyon",

"tombstone": "hoboror fattór",

"tomorrow": "hailla",

"tongue": "zir",

"tonight": "aijja raitta",

"tonnage": "maf hísafe",

"tonsil": "tonsel",

"too": "bicí",

"too much": "bouhóut",

"took": "loiyé",

"tool": "hamor sáman",

"toolkit": "sámanorfethi",

"tools": "sáman",

"tooth": "dat",

"tooth - teeth": "dat",

"toothbrush": "datdholoni",

"toothpaste": "dat dholoni dabai",

"top": "uore",

"top of head": "matár tuli",

"topic": "mouzú",

"tops": "matá ókkol",

"torch": "tibbatti",

"torching": "ooin zolaidoon",

"torment": "azab/duk",

"torn": "fáça",

"torso": "madala",

"tortoise": "hossób",

"torture": "toziya",

"tortured": "toziyadiyé",

"total": "muth",

"total income": "muth amodoni",

"totality": "furafuri",

"totally": "bilkúl",

"touch": "baz(a/ó)",

"toward": "íkka",

"towel": "toóila",

"tower": "thawar",

"town": "cóor",

"town hall": "thoón hóol",

"toy": "kélouná",

"trachea": "noroli",

"track": "rasta",

"tracking": "foóñsa",

"trade": "tejaarot",

"trader": "códor",

"trading": "códori",

"tradition": "rosóm",

"traditional": "rosómi",

"tragedy": "sótma",

"tragi hairs": "han ot uçéde keñc",

"tragic": "precani",

"trail": "lesá",

"train": "rel",

"trained": "threnín diya",

"training": "torbiyot",

"trajectory": "trejekthori",

"tranche": "ek híssa",

"trangle shape": "tin kuinna cokól",

"tranquilizer": "behúñc goréde dabai",

"transaction": "leendén",

"transcript": "leikká",

"transfer": "fargará/lariféla",

"transferee": "farí",

"transferred": "fargaráiye",

"transfield": "bodolede zaga",

"transgressor": "hótdhiyoñya",

"transit": "zaga bodola",

"transition": "bodola",

"translate": "torjumagor",

"translated": "torjuma goijjé",

"translation": "torjuma",

"translator": "torjuma goróya",

"transmission": "faróon",

"transparent": "kúllunghála",

"transport": "baráido",

"transportation": "garígúra",

"transported": "foóñsáiye",

"trap": "zal",

"trapped": "holot baijjé",

"trash": "hoñsrar dhabba",

"trauma": "dil or tokolif",

"traumatic": "sótma óla",

"travel": "sofór",

"travel allowance": "rastar hóssa",

"traversed": "uzu faráiyé",

"tray": "tál",

"treat": "bebáar",

"treatable": "gomgorí farede",

"treated": "bebaár gorágiye",

"treating": "bebáar gorér",

"treatment": "elaj gorá",

"tree": "gas",

"triage": "elaji tortib",

"triaged": "elaji tortib diyé",

"trial": "kucíc gorá",

"triangle": "tinkuinna",

"tribe": "kobila",

"trick": "sail/dúka/férokbazi",

"tried": "kucíc goijjé",

"trigger": "cúru goré",

"triggered": "cúru goijjé",

"trillion": "ek million million",

"trim": "cáço",

"trimmed": "caçídiyé",

"trip": "sofór",

"troop": "fóus",

"trophy": "enma/gonimot",

"tropical": "gormi",

"trotter": "cúor or théng",

"trouble": "mockil/mosibot",

"troublesome": "guccá lager",

"trouser": "lamba feén",

"truck": "trak garí",

"true": "sóiyi",

"true.": "sóiyi/hákiki",

"truely": "sóiyigori",

"trumpet flower": "maikfúl",

"trunk": "siañra garí",

"trust": "biccáci",

"trusted": "biccác gorázade",

"trustee": "amanot dar",

"trustworthy": "amanot ola",

"truth": "háñsa",

"truthful": "háñsa",

"truthfully": "cóiccagorí",

"truthfulness": "háñsa",

"try": "kucíc(gor)",

"tried": "kucíc goijjé",

"trying": "kucíc gorér",

"try on": "fiñdí soó",

"trying": "kucícgorír",

"tub": "gaála",

"tube": "nol",

"Tuesday": "Mongolbar",

"tug-war": "rosí thana thani",

"tummy": "feth",

"tumultuously": "uzara uzori gorí",

"tunnel": "budda",

"turban": "fouri",

"turkey": "réeik",

"turmeric": "óloid",

"turmoil": "thoolmol",

"turn": "fíre",

"turn away": "fithdo/fíriza",

"turn off": "bongor",

"turn on": "kúlo",

"turn over": "sit gorá",

"turn up": "neeli aiyó",

"turned": "fírzye",

"turnip": "cál gom",

"turtle": "hossób",

"tutor": "cuthar",

"tutorial": "sóbok",

"tutoring": "tucin dahóon",

"TV": "telivícen",

"twelve": "baró",

"twenty": "kuri",

"twenty-eight": "ekkuri-añctho",

"twenty-five": "ekkuri-fañs",

"twenty-four": "ekkuri-sair",

"Twenty-four": "ekkuri-sair",

"twenty-nine": "ekkuri-no",

"twenty-one": "ekkuri-ek",

"twenty-seven": "ekkuri-háñt",

"twenty-six": "ekkuri-só",

"twenty-three": "ekkuri-tin",

"twenty-two": "ekkuri-dui",

"twice": "dui motta",

"twilight": "duifoór",

"twin": "zoñikka",

"twine": "zura zuijja",

"twins": "zoiñikka fuain",

"twist": "musor",

"twisted": "mosoijja",

"twleve": "baró",

"two": "dui",

"type": "kisím",

"type gor": "kisím",

"typical": "aám/áaidi",

"ugly": "fédará",

"ultimately": "ahérittu",

"ultrasound": "bicí siyon abas",

"ultrasound scan": "bicí siyon abas loi gaa cekgorá",

"umbilicus": "nagí",

"umbrella": "sáti",

"umma": "ummot",

"UN": "Bainela Koum - United Nations",

"unable": "nofaré",

"unaccompanied": "fúañijja sára",

"unauthorised": "ejazot sára",

"unbelievable": "biccácgorá nozadé",

"uncategorized": "kisímgoijjá sára",

"uncertain": "gair ekini",

"uncertainty": "gair ekin",

"unchecked": "acek goijjá",

"uncivil": "bottomis",

"uncle": "mou/sañsa",

"uncomplete": "fura nóo",

"uncovered": "aguijjá",

"under": "nise/tole",

"under supervision": "negaranir andhár ot",

"underarm": "hair boñl or tolor keñc",

"underline": "niselain",

"underlined": "niselain maijjá",

"underlying": "fakkáraiya",

"undermining": "nuksan foóñso",

"underpinning": "fisóttu modot gorér",

"underscore": "nisottu laindo",

"understand": "buzé",

"understandable": "buzá zade",

"understandably": "akolbondir sáñte",

"understanding": "buzá",

"understood": "buzé",

"undertake": "zimma lo",

"undertaken": "zimma luwa giye",

"undertaking": "zimma lor",

"undertook": "zimma loiyé",

"underway": "soler",

"underwear": "gonzi",

"underweight": "hom uzón",

"underwritten": "amanot diyé",

"undo": "waapesgoró",

"undone": "agoijjá",

"undoubtedly": "cók nogorí",

"unemployed": "hamsára",

"unequivocal": "sáfsáf",

"uneven": "zurzur noó",

"unexpected": "atíkka",

"unfair": "beinsáfi",

"unfit": "fíth noóde",

"unfolded": "aboiththa",

"unfolding": "loot faazar",

"unforeseeable": "hoói nofaréde",

"unfortunate": "bodkismoti",

"unfortunately": "bodkismotor sáñte",

"unfried": "abúinna",

"ungrateful": "nacúkuria",

"unhappiness": "frecani",

"unhappyness": "frecani",

"UNHCR": "UNHCR",

"unhealthy": "nasehéti",

"unhygienic person": "ferot",

"unicode": "yunikúdh",

"unidentifiable": "sinno nofadé",

"unidentified": "asínna",

"uniform": "yunifórm",

"uniformed": "yunifórm findá",

"unilateral": "ekdháikka",

"uninstall": "neelai félo",

"uninstalled": "neelai félaiye",

"union": "jomúuri",

"unique": "ekí",

"unit": "yuníth - eka",

"unite": "ek ó",

"united": "ekkaththa",

"United Nations": "Bainela Koum",

"unity": "ettefáki",

"universe": "jáhan",

"university": "yunivarsiti",

"unjust": "zulúm",

"unknown": "anjan",

"unlawful": "gair kaanuni",

"unless": "zetúkkun foijjonto",

"unless you request otherwise": "zetún foijjonto tuñí oinno dhoilla aros noógoró",

"unlike": "dhoilla noó",

"unlikely": "cómbob noó",

"unlimited": "hótsára",

"unmade": "abanaiya",

"unmatured": "gora",

"unmodified": "abodoilla",

"unnecessary": "zurorot noodé",

"unopened": "akúilla",

"unpleasant": "gom noláde",

"unprecedented": "bemesál",

"unprotected": "héfazot sára",

"unpublish": "luwairakó",

"unregistered": "rejísthar sára",

"unreliable": "bóurusa sára",

"unrest": "hórotal",

"unsafe": "héfazot sára",

"unsalted": "anuni",

"unseen": "adeikká",

"unstable": "ódot notákede/nakabel",

"unsuccessful": "nakaam",

"until": "foijjonto",

"until 9 pm": "raitor 9 wá fán",

"until he comes": "ite aiyé fán foijjonto",

"until now": "etékkal",

"untouched": "asúiya",

"untrained": "abanaiya",

"unused": "gair estemal goijjá",

"unusual": "gair maamuli",

"unwell": "gom nái",

"unwittingly": "golitr sáate",

"up": "uore",

"up to": "foijjonto",

"update": "noyatazagor",

"updated": "noyagoijjé",

"upgrade": "dorja uore goré",

"uphold": "sámali raké",

"uplift": "uncá gor",

"upload": "uorefoóñsa",

"upon": "goríbiccot",

"upper": "uoror",

"upper lip": "uoror uñth",

"upper lobe lung": "uoror fak",

"uppercase": "borhát ór leká",

"uproar": "hángama",

"upset": "precan/na-ummait",

"upside down": "uldha",

"upstair": "uoror thala",

"upto date": "tazagor",

"upward": "uormikká",

"uranus": "uranás",

"urban": "cóorgwá",

"urdu": "urdu zuban",

"ureter": "uoror mutor fáik (fecák ór)",

"urethra": "nisor mutor fáik (fecák ór)",

"urge": "arosgor",

"urgency": "toratori",

"urgent": "zoroi",

"urgently": "tortori gorí",

"uric acid": "fecákor hóro",

"urinal": "fecákor",

"urinary bladder": "mutor sála",

"urinate": "mut/fecákgor",

"urine": "mut/fecák",

"urine bladder": "fecákor sála",

"URL": "intarnéth ór rabeta",

"us": "añárare",

"usable": "estemal gorázade",

"usage": "estemal",

"use": "estemal",

"used": "estemal goijjé",

"useful": "hazor/fáidar",

"useless": "bekar/behazor",

"user": "estemal goróya",

"using": "estemal gorér",

"usual": "hámicar dhóilla",

"usually": "aámhísafe",

"utensils": "sulár estemali",

"uterus": "baicca danir gór",

"UTI Urinary Track Infection": "fecák ór rastat gáa óiye",

"utilised": "estemal goijjé",

"utility": "estemal or ciz",

"utilize": "estemalgor",

"utmost": "entahá",

"utter": "bilkúl",

"utterly": "furafuri/sáfsaf",

"uvula": "alazir",

"vacant": "háli",

"vacant land": "hálizaga",

"vacate": "háligor",

"vacated": "háli goijjé",

"vaccine": "veksín",

"vagina": "córom zaga",

"vague": "sáf noó",

"vain": "bekar",

"vain talk": "behar hotá",

"valid": "kaanuni",

"validate": "hókbouli sóiyigor",

"valley": "gúna",

"value": "kimot/dam",

"van": "lamba garí",

"vapour": "báf",

"variable": "bodola zadé",

"variation": "dhoilla bodhoilla",

"variety": "kisím kisím",

"various": "dhoilla bodhoilla",

"vary": "bodole",

"varying": "bodoler",

"vast": "wosí",

"vedio": "vidhuyu",

"vegetable": "sobzí",

"vegetable crush": "báza",

"vehicle": "garí",

"veil": "matár hoór",

"vein": "kolób íkka lou soledé rok",

"veneration": "boro izzot",

"venture": "hasharbar",

"Venus": "Vénas grudhú",

"veracity": "háñsa",

"verandah": "barandha",

"verb": "gorá",

"verbal": "gale/zubane",

"verbal communication": "gale taaluk gorá",

"verbally": "zuban loi",

"verification": "tosdik gorá",

"verified": "tosdik goijjá",

"verify": "tosdikgor",

"verse": "ayat",

"version": "núsha",

"vertical": "uor mikká",

"very": "bicí",

"very bad": "bicí hóraf",

"very effective": "bicí asór goré",

"very high": "bicí usol",

"very low": "bicí niso",

"very old": "bicí burá",

"very very": "bicí bicí",

"vessel": "kicthi",

"vest": "booñl hath gonzi",

"veterinarian": "janwar or daktor",

"via": "zoriya/duara",

"viable": "kabiliyoti",

"vicinity": "ate hañsé",

"vicious": "iságorí hoijjagoréde",

"victim": "mozulum",

"victory": "jit/kaamiyabi",

"victory day": "kaamiyabir din",

"video": "vidu",

"view": "nozoriya/fíkira",

"viewed": "saiyé",

"viewer": "soóuya",

"vigilance": "negarani",

"vigilante": "nize kaanun átot lodé manúic",

"village": "fara",

"villager": "farar manúic",

"violation": "kaanun báñga",

"violece": "maramari",

"violence": "maramari",

"violent": "sóngin",

"violently": "dhónga fósat gorí",

"violin": "bela",

"virgin": "milsára",

"virtual": "zahiri",

"virtual reality": "zahiri haqiqót",

"virus": "fuk",

"visa": "víza",

"visible": "daházade",

"vision": "nozoria",

"visit": "ziyarot",

"visited": "ziyarot goijjé",

"visitor": "ziyarot goróya",

"visual": "saibár",

"visít": "bera",

"vital": "bicí zoruri",

"vocabulary": "lofzó ókkol",

"vocational": "fecár",

"voice": "abas",

"voice box": "abas or fethi",

"void": "baatel gor",

"volatile": "fúçi zagóifarede",

"volley": "zurgorí mare",

"volume": "abas dhoóñr cóñço",

"voluntary": "nizormorzi",

"volunteer": "bólonthiyar",

"voluntry": "issá",

"vomit": "oolo",

"vomiting": "ooloon",

"vote": "búth",

"voted": "búthdo",

"voting": "búthder",

"voucher": "dam homar habos",

"vow": "waadagor",

"vowel": "zerzobor",

"vulnerabilities": "nuksan hámla óifaroon",

"vulnerable": "komzur",

"vulture": "hóoun",

"vulva": "cúnar muk",

"wad": "no báñge fán mazóttú dedé norom jiníc",

"wage": "muzzuri",

"wail": "bilag dóri hañda",

"waist": "keñil",

"wait": "tíyo/entezargoró",

"waited": "tíai táikki",

"waiter": "wéithar",

"waiting": "soñi gorér",

"waitress": "mes lagouya",

"waive": "batde",

"waiver": "cúçide",

"wake": "gúmortu tuillé",

"wake up": "tán ó",

"wale": "welamas",

"Wales": "Wales zaga",

"walk": "áro",

"walked": "áñiththe",

"walking": "áñçer",

"wall": "debal",

"wall clock": "debal or góuçi",

"walled": "debal diyé",

"wallet": "thiañr beg",

"wallpaper": "debalor habos",

"walnut": "ahuruth",

"want": "monehoór",

"wanted": "monehoiyé",

"wanting": "monehoór",

"wants": "monehoór",

"war": "larái/jóng",

"ward": "daktor hánar bedh",

"ware": "luwár/cúnar ciz",

"warehouse": "gudam mal rakéde zaga",

"warm": "kuúm kuúm gorom",

"warmth": "gormi",

"warned": "húñciar goijjé",

"warner": "dhorlagoya",

"warning": "warnín",

"warrant": "waarin",

"wart": "joth",

"was": "óoil",

"was there": "aiccíl",

"wash": "dúu",

"washed": "dúiye",

"washing machine": "hoor dúwede micín",

"Washington": "Washington cóor",

"waste": "sáta",

"watch": "góuçi",

"watched": "soñi goijjé",

"watching": "soñi gorér",

"water": "faní",

"water bag": "fanír bag",

"water bodna": "luça",

"water fall": "taraing",

"water fountain": "naffúra",

"water heater": "gorom fanídouni",

"water jug": "luça",

"water lily": "hóñlafúl",

"water melon": "tormus",

"water pipe": "fanír fáik",

"water spinach": "hormi ák",

"water stream": "fanír loór",

"water tank": "fanír thaingki",

"water well": "fanír fathkuwa",

"waterfall": "fanír zónna",

"watermelon": "tormus",

"watery": "fainná",

"wave": "láing",

"waving": "boiyar ot urer",

"way": "rasta/torika",

"we": "añára",

"we are writing": "añára lekír",

"we have": "añárattu",

"we love": "añára adorgorí",

"we love him": "añára taré adorgorí",

"weak": "nazuk",

"weak-like": "nimatura",

"weaken": "norom gor",

"weaker": "niróc",

"weakness": "komzuri",

"wealth": "mal",

"wealthy": "tuanggor",

"weapon": "hátiyar",

"wear": "fin",

"wore": "fiñdó",

"worn": "findé",

"wearing": "fiñdér",

"weary": "hóran óiya",

"weather": "moóusom",

"weathering": "moóusómi",

"web": "zal",

"web developer": "wébsáith banoya",

"weber": "mucár zal banoya",

"website": "wébsáith",

"wedge": "kíl",

"Wednesday": "Buidbar",

"weeds": "kérkuñça",

"week": "háfta",

"weekend": "ahéri háftar",

"weekly": "háfta ye",

"weeks per year": "bosóre háfta ókkol",

"weeping": "hañder",

"weigh": "maf",

"weighed": "maippé",

"weight": "uzón",

"weight gain": "uzón bará",

"weight loss": "uzón homi",

"weighted": "maippé",

"weird": "hábazába",

"welcome": "estekbal gorázar",

"welcomed": "estekbal goijjé",

"weldmesh": "join goijjá zal",

"welfare": "rafáyi",

"well": "bála",

"well under way": "bála soler",

"well-being": "bálaiyi",

"went": "giyí",

"went out": "baárkule neeillé",

"were": "óoil",

"west": "fosím",

"western": "fosímor",

"wet": "bíza",

"whale": "wela mas",

"wharf": "zaáñs gáñçar ful",

"what": "ki/ziyán",

"what for": "kiálla",

"what I thought": "ziyán añí báippi",

"whatever": "zaáñ",

"wheat": "giñyu",

"wheel": "sakka",

"wheelchair": "sakkadiya boiyóni",

"wheelie bin": "sakka diya sátar gadhdhá",

"when": "zehón",

"when?": "hoóñtte?",

"where": "hoçé/zeçé",

"where from": "hontú",

"whereby": "zeçé",

"wherever": "zeçéhoéçe",

"whether": "ouk",

"which": "honnán",

"while": "zecómot",

"whilst": "yó",

"whirl": "fakkó",

"whisper": "wosuwasa dhál",

"whisperer": "wosuwasa dháloya",

"whistle": "bacímata",

"white": "dóla",

"whiteboard": "dóla budh",

"whitegbreasted waterhen": "dhouk",

"whiten": "dólagor",

"who": "hon",

"whoever": "zibá óibou óuk",

"whole": "guñça",

"whole family": "fura fémli",

"whole sale": "thíya besa",

"wholesome": "sehét óla",

"whom": "zaré - ziyáne",

"whose": "zar",

"why": "kiyá - kiálla",

"why don't": "kiálla no",

"why not speaking up": "noká mater",

"wicked": "hóraf",

"wide": "couça/fatári",

"widely": "couça gorí",

"widen": "couça",

"wider": "fáarot",

"widget": "wíjeth",

"widow": "rari",

"widowed": "beça sára",

"widower": "dúñri",

"width": "fatári",

"wife": "bou",

"wife of father's elder brother": "sañsi",

"wife of father's younger brother": "zeçú",

"wife of mother's brother": "mami",

"wig": "nokoli sul",

"wild": "jonggoli",

"wildfire": "jonggoli ooin",

"wildlife": "jonggoli háiyat",

"will": "saá/erada/niyot",

"will be": "óibou",

"will be banned": "bon gorá zaibou",

"will come": "aiccóum",

"will do": "goijjóum",

"will not be": "noóibou",

"will see": "saiyóum",

"willing": "mon asé",

"willingness": "monká",

"wily": "gúrai diyat mahér",

"win": "zit",

"wind": "boiyar",

"winding": "beráiya",

"window": "kírkiri",

"windows": "kírkiri",

"wine": "córab",

"wink": "suk thonimar",

"winter": "cítor moóusom",

"winter affected crops": "thándha asórgoijjá dana óll",

"winter melon": "sal kuáñra",

"wipe": "fuñsífél",

"wire": "tar",

"wire fence": "síyol or gíra",

"wireless": "tarsára",

"wisdom": "buddí",

"wisdom teeth": "akkoli dat",

"wise": "buddíola",

"wish": "azzu/tomonna/iccá",

"wished": "arzu goijjé",

"with": "fúañti",

"with whom": "zardi",

"withdraw": "waapeslo",

"withdrawal": "waapesluwa",

"withdrawing": "waapes lor",

"withdrawn": "waapes loifélaiye",

"withdrew": "waapes loiyé/neela giyé",

"withhold": "dibellá inkkar goijjé",

"within": "bútore",

"without": "sára",

"without discrimination": "forók nogorí",

"without gap": "ziran sára",

"without name": "nam sára",

"without touching": "abazá",

"withstand": "cóoifare",

"witness": "gobá",

"witnessed": "gobá diyé",

"wittingly": "zaniyóre",

"wlllingness": "húwaic",

"wobble": "dhóldholár",

"woe": "afsús - hái afsús",

"woeful": "afsúsór",

"woke up": "uth",

"wolf": "rañgkuñir",

"woman": "istiri/miala",

"womb": "baicca dani",

"women": "beçiáin ókkol",

"wonder": "taajub gor",

"wondered": "ábbud/hóran ferecani óiye",

"wonderful": "taajuippa",

"wood": "gas",

"woodcutter": "dargwá haçoya",

"wooden": "gasór",

"woodpecker": "gas kúiththoni faik",

"word": "lofzó/kolma",

"wordpress": "CMS nezam zibá loi wébsáith banai fare",

"work": "ham",

"work-based": "ham-buniyadi",

"worked": "ham goijjé",

"worker": "ham goróya",

"workflow": "ham solar lain",

"workforce": "hamgoróyar kuwot",

"workforce services": "hamorfóus or hédmot ókkol",

"working": "ham gorér",

"workload": "ham or fuñzá",

"workshop": "waákcóp",

"world": "duniyai",

"worldwide": "duniyai beggúla",

"worm": "lok",

"worried": "sinta gorír frecani lage",

"worried person": "sinta ola",

"worrier": "frecani goróya",

"worrisome": "sintagoríbár",

"worry": "sinta",

"worrying": "frecan ola",

"worse": "bicí hóraf",

"worship": "ebaadot gor",

"worshipper": "ebaadot goróya",

"worst": "ebbre hóraf",

"worth": "kimot",

"worthless": "bekar",

"worthless people": "bekar manúic",

"would": "saá",

"wound": "gáa",

"woven": "sílaiya",

"wrap": "berá",

"wrapped": "beráiye",

"wrapping": "beróon",

"wrath": "gozob",

"wreck": "báñgiza",

"wreckage": "báñggasura",

"wren": "gura gara faik",

"wrestle": "bolidór",

"wrestled": "boli doijjé",

"wriggle": "musori neel",

"wrist": "hoisa",

"wrist watch": "átor góñçi",

"write": "lek",

"wrote": "leikké",

"written": "lekífélaiye",

"writer": "lekéde manúic",

"writing": "lekér",

"writing board": "lekéde boóudh",

"writing reading": "leká forá",

"writing table": "lekéde mes",

"writs": "hókum noma",

"written": "leikká",

"wrong": "golot",

"wrongdoer": "hórafi goróya",

"wrongdoing": "hórafi gorá",

"wronged": "zulúm goijjé",

"wrongly": "golot gorí",

"wrost": "sóbse hóraf",

"wrote": "leikké",

"x-mas": "kricen or dórmogas",

"x-ray": "x-rée fothú",

"xebec": "gura tin thúni óla zaáñs",

"xenophobia": "ajnobi yá bidecí ré dhoroon yá nafórot goróon",

"Xerox": "fothu kopí goróon",

"xerox": "fothú sábani micín",

"xray": "exséra",

"xylophone": "muzíki bazana",

"Y": "25 nombór ór Ingilíc hórof",

"Y-chromosome": "maincór DNA't aséde jiníc",

"yacht": "zibbat kélade fatol cór-ola buth",

"yachting": "córr diya buth loi zibbat doon yá kúci gorí kéloon",

"yachtsman": "zibbat douya",

"yahoo": "zongoli manúic",

"yak": "keñc lambá mazór Asíar tibbet gouru",

"Yale": "Yéil sabí",

"yam": "hoñsu",

"yam leaves": "hoñsu fata",

"yammer": "cékayot gor",

"yang": "rong bicí ói modda maredé gun",

"Yangon": "Rengun Bormár sóbse boro cóor",

"yank": "játhka mari thane",

"Yankee": "Amerikar uttor or manúic",

"yap": "kuñir or gágguani",

"Yaqub": "Yaqub poikambor",

"yard": "gíra - barifisé",

"yard stick": "fíth haim",

"yarn": "hoor sílade fúta",

"yarrow": "dóla rong",

"yashmak": "Musúlman maiya fuain muk gúroni",

"Yasin": "Yasín súura",

"yaw": "zaáñs arde plein or rastar lain eçé oçé óiye",

"yawl": "dui hámba óla córr diya buth",

"yawn": "áimma",

"yaws": "lal gula neeledé samor biaram",

"yd": "gos mafa",

"ye": "furana cokól ór you",

"yea": "ói",

"yeah": "ói",

"year": "bosór",

"yearbook": "bosóri jarnel kitab",

"yearling": "gúra/hóssor or sóo",

"yearly": "bosór harbari",

"yearn": "yad goré",

"yeast": "biár arde ruthi banaibélla estemal goréde jinís.",

"yell": "guzor",

"yelled": "sillaiyé",

"yelling": "guzora",

"yellow": "óloiddá rong",

"yellowhammer": "fiñaijja yá gura faik",

"yelp": "kuñir or baiththá sinsinna guzora",

"Yemen": "Yomón - Yomón ór dec",

"yeoman": "nize álgoróya",

"yes": "ói",

"yesterday": "goto/giyóide hailla",

"yesteryear": "agor bosór ókkol",

"yet": "aijó",

"yeti": "{Himawendha} boróf ór manúic",

"yew": "hamicá hora háil tákede dhebboth gas ór dhóilla gas",

"YHA": "Juan Hósthel ókkol Faathi",

"yid": "Yohúdi manúic",

"yiddish": "Yohúdi hotá",

"yield": "dóre",

"yin": "rong myundá miala asór aséde thándha jiníc",

"yippee": "bicí kúci arde jozbat daháde asimbit hotá",

"yo-yo": "siyon mur zúrah aséde sakka beráiya rosít lama niso gorí fakkáde ekkisím kélah",

"yob": "gáañr gorí hoijja tuadé hoicca fua",

"yodel": "éndila gaáde gana",

"yoga": "ekkisím ór sehéti worjis",

"yoghurt": "doi",

"yogi": "yoga masthor",

"yoke": "gourur zuañl",

"yokel": "zoñli manúic",

"yolk": "andhar lali",

"Yom Kippur": "Yohúdi ókkol ór bosóri ruza",

"yomp": "malsáman loi hóraf rasta bái za",

"yon": "duré mogor daházade eddur ór bútore",

"yonder": "úu oçé",

"yore": "bicí agor zobana",

"Yorkshire pudding": "Yókcáyar ór futhin",

"yottabyte": "yóttabaith memori",

"you": "tui",

"you (all)": "tuáñra",

"you could": "tuñí faribá",

"you could-get all": "tuñí beggín faribá",

"you have": "tuáñrtu ",

"you might thínk": "tuñí báfit faro",

"you should": "tuáñrtu goróon saá",

"you will be obligated": "tuñí hárr lehás ót mojbur óiba",

"you'd": "you had",

"you'll": "you will",

"you're": "tui",

"you've": "tuáñrtu",

"young": "nojuan",

"young boy": "gura fua",

"young brother of father": "jeçá",

"young girl": "gura maiyafua",

"young lady": "hoicca zíi",

"young man": "hoicca fua",

"younger": "bicí cóço",

"youngest": "ebbre cóñço",

"your": "tor",

"your contact": "tuáñr taaluk",

"your input will make a difference": "tuáñr inpúth é uggwá forók banaibou",

"your privacy": "tuañr hósusi",

"yours": "tuáñrár",

"yourself": "tuñí nize",

"youth": "nojuan",

"yowl": "uggwá bicí boro guzora",

"yr": "bosór",

"yrs": "tuáñr",

"YTS": "Youth Training Scheme",

"yuan": "Cinar thiañ",

"yucca": "gónthir dhoilla fúl fúçedé gas",

"yuck": "ínca nafórot dhor lagai estemal goréde hotá",

"Yugoslavia": "Yuguslavia",

"yule": "Kriccen or 25 tarík ór muúsom",

"yum-yum": "taarif arde mozar hánar taajub",

"yummy": "mozadé",

"Yunus": "Yunus poikambor",

"yuppie": "gura boc ót thiañ hamai zanedé hamgoróya elómdar",

"Yusuf": "Yusúf poikambor",

"yían ót faiyó": "become aware of it",

"Z": "ahéri Rohingya hórof",

"Zafor": "Zafór",

"zakat": "zokát",

"Zamzam": "Zomzom faní",

"zany": "ebbre ardhoilla",

"zap": "marífél",

"zaw": "galor keñsi",

"zeal": "jus",

"zealot": "síasi/wagáirat",

"zealous": "jusola",

"zealously": "jusgorí",

"zebra": "zibra/hala lain lain ola",

"zebra crossing": "fatári lain lain diya farádé rasta",

"Zeitgeist": "tuariki zobana ekkán ór báfani",

"Zen": "Zen Búddhá dórmo",

"zenith": "matátuli asman",

"zephyr": "írr írr boyar",

"zeppelin": "foóila duniyair laráit Japan e estemal goijjéde zaáns",

"zero": " gulguilla andha zero",

"zest": "fúroti arde jus",

"zettabyte": "zétta baith",

"Zhur": "Zuhúr thaim",

"zhur": "zuhúr",

"zigzag": "behañsúra",

"zillion": "zillion",

"zinc": "zínk",

"zing": "moza gorá",

"Zionism": "Juú ókkol ór kaanun",

"zip": "zíp",

"zip code": "puús ofís nombór",

"zipper": "taaluk",

"zither": "gasór muzík bazana",

"zodiac": "beil-san arde gurudhú ókkol soledé asman or duali baró híssa borat goijjá",

"Zom zom": "Zom zom faní",

"zombie": "morar dóilla nira óiyede manúic",

"zone": "elaka/zaga",

"zonked": "bicí dómerdé",

"zoo": "sirihána janwar ókkol rakéde baagan",

"zoology": "háiwaniyat/janwar or elóm",

"zoom": "dhoóñr cóñço gor",

"zoom in": "dhoóñr gorí saá",

"zoom out": "cóñço gorí saá",

"zucchini": "abodola",

"Zuhur thaim": "Zuhúr thaim",

"Zulu": "Afírikar doóin ór Zulu koum",

"íll": "gaat gom noláger",

"I love you so much":"i torey báintiha muhábbot gorí, abadulabad ador gori",
/*cute*/

};

// Split text into words and translate each word
let words = text.split(" ");
let translatedText = words.map(word => translations[word.toLowerCase()] || word).join(" ");

return translatedText;
}
