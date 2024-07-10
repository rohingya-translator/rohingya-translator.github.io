<script>
function translateText() {
let inputText = document.getElementById('inputText').value;
let outputText = translate(inputText); // Replace with your translation function

document.getElementById('outputText').value = outputText;
}

// Example translation function (replace with your actual translation logic)
function translate(text) {
// Example translation mapping - Replace with actual translation logic
const translations = {

"a": "the first alphabet character in Rohingya Language",
"a’istri maijja": "un-ironed",
"aa": "double vowel to extend the sound instead of being short with one ‘a’",
"áagoijjá": "being open mouth",
"áagoró": "open the mouth widely",
"aam": "ordinary people/uneducated people",
"aám": "general public",
"aámde": "telling baby to eat",
"aamínn": "prayer closing word/answer at end of prayer",
"aára": "place of religious activity particularly those who used drums to sing",
"abad": "freed, acquired the land/made the land livable",
"abadi": "inhabitant",
"abadulabad": "for good/forever",
"ábaitá": "referring who has no food since long time ago/as if never eaten before",
"abanaiya": "untrained/not tamed",
"abañdá": "untreated cow [animal] untamed cow",
"abár": "cloudy weather",
"abas": "voice",
"ábazabá": "things of no value/something bad, not of any value, not in any proper order",
"abba": "father [usually called by his small children]",
"abbá": "father [usually called by his small children]",
"abbajan": "father",
"abbalé": "exclamation/surprise",
"abbar": "another time/next time",
"abbúci": "very little",
"ábbud": "amazed/surprised/wondered/astonished",
"abu": "father",
"abúinna": "un-fried",
"abul": "of father",
"abúza": "un-erased",
"acá": "hope",
"acanok": "all of a sudden, unexpected",
"acék": "love",
"ácfatál": "hospital, clinic",
"ací": "eighty",
"Acíkka fara": "a village in Maungdaw town, Arakan",
"ackail": "now a day",
"ada": "ginger",
"adá": "half",
"áda": "strong tobacco leaves",
"adaguni árk": "a kind of vegetable",
"adána": "of very low standard [people]",
"adár": "animal feed",
"adarí": "half basket size of",
"adasuroni-monot-gudh-gu-thi": "thief feels unsafe",
"addáinna": "of half/not complete",
"addán": "half",
"adhaikka": "being not invited",
"ádhdháli": "fees to black magician to cure the ailment",
"adhdhoilla": "another kind/different kind. See also word “ardhoilla”",
"adob": "discipline",
"adoijja": "lovely",
"Adom": "the first human that God sent to earth/human being",
"ador": "love",
"adot": "habit",
"adúiya": "unwashed",
"afá": "one’s mother’s sister",
"afaincá": "of no taste/of less salt or no salt",
"áfainca": "of no taste/of less salt or no salt",
"afándhi": "uncontrolled children going around aimlessly, doing nothing",
"afándhi goró": "[you] roam around and do nothing useful",
"áff": "snake/Also used “háff”",
"aficcá": "un-grinded",
"afín": "narcotic drug",
"afon": "own relative/being own people",
"afoñt": "other than normal road/off road/difficult road",
"Afríka": "Africa",
"Afríki": "African",
"afúaiya": "un-dried",
"afuiccá": "un-wiped",
"afút": "untouched/pure/virgin",
"aga": "top end",
"agagura": "top to bottom",
"agandú": "useless man/guest",
"age": "ahead/before/in front",
"agefisé": "front and back/ahead and back/before and behind",
"aggorar": "hesitating/not willing to help or to do",
"agil": "fore part of the sampan/front part",
"agoijjá": "undone",
"agona": "uncountable/countless",
"agor": "of previous/of before/old one",
"agór": "if/in case",
"agori": "in advance/early",
"agorom-bagorom": "miscellaneous",
"agúijja": "uncovered",
"agun": "talking about future",
"águrah": "person of frequent motion [of stool]",
"áh": "voice of happiness",
"aháiya": "person not dined yet/not taken food yet",
"ahálak": "of character [of people]",
"ahám": "very important",
"ahér": "the end/however/whatsoever",
"ahéri": "the last/the end/the final",
"ahérittú": "at last/at the end/final",
"ahérot": "hereafter/life after death",
"ahol": "intelligence/understanding",
"ai": "[you] come",
"aiborhot": "blessing in our food, work and business",
"aiccá": "ok/fine/that is ok/that is good",
"aiccé": "[he/she/they] has/have came",
"aiccí": "[I/we] have came/",
"aiccíl": "[he/she/they] has/have been here",
"aiccó": "[you] come [next time]",
"aiccóna": "[you] please come/always welcome",
"aickail": "nowadays/in these times/at present time",
"áigge": "[he] has stool motion of nature",
"áiggoum": "[I/we] want to go to toilet",
"aijja": "today",
"áil": "green[color] Also used háil",
"ail": "small low partitions between rice fields",
"aillá": "bowl of fire used for warming the people sitting around",
"áilla": "labor/worker or helper especially referring to farmer",
"áillasúañ": "stick used by farmers",
"áimmar": "opening mouth and releasing air due to sleepiness",
"áimme": "[he/she/they] opened mouth to release air due to sleepiness",
"ain": "law and order",
"aina": "mirror/Also used ana",
"áina áff": "a kind of snake/Also used háina áff",
"aincá": "without any taste additive/without taste",
"áincáhoró": "pickles",
"áiñccar": "sneezing/Also spelled áñiccar",
"ainda": "in future/next time",
"ain-kaanun": "law and order",
"Ainné": "[he/she/they] has/have brought",
"ainní": "[I/we] have brought",
"Ainnó": "[you] have brought",
"Ainnóm": "[I/we] have already brought",
"ainnós": "[you] have brought",
"ainnóum": "[I/we] will bring",
"áiñs": "woman’s bleeding period",
"aintí": "[you] to bring [right now]",
"aisfis": "now or in future/present and past/ahead and past",
"aiyaci": "of luxury",
"aiyat": "verse [of Quran]",
"aiyéfán": "make sure to come/until [he/she/they]  comes",
"aiyér": "[he/she/they] is/are coming",
"aiyí": "let [me/us] come/Also see the word “ayí”",
"aiyó": "[you] come",
"aiyón ze": "[you] please come sir",
"ajíb": "surprising",
"ajór": "reward from God",
"ajur": "brick",
"ák": "vegetable/Also used “hák”",
"ak": "mark lines",
"akbor": "big",
"ákbor": "big",
"akida": "character/aim, objective/belief",
"akiya": "serving relatives and neighbor food as thanks for new baby",
"akkán": "another one",
"akkol": "common sense/good thinking/understanding",
"akkoli": "teeth of lucky",
"akku": "brother [adopted from Rakhine]",
"akuaic": "inconvenient/uneasy/uncomfortable",
"akuijjá": "ground un-dig",
"akúilla": "unopened",
"akúinda": "un-drilled, unexcavated [wooden beam]",
"akwaicca": "of uncomfortable",
"Akyab": "capital city of Arakan State, Burma. Now known as “Sittwe”",
"ál": "small sharp thing entered into the body",
"al": "the rising flesh on chicken’s head",
"alagá": "useless [in Burmese]",
"alagála": "social mixing between families",
"alaigiyói": "rotten/decayed/smelled bad due to damage of the substance",
"alaiya": "of rotten",
"alaiyé": "rotten",
"alamot": "sign/condition",
"alatúl": "straight",
"alazir": "tip hanger at the beginning of the throat",
"aleikká": "unwritten/not written down/not recorded",
"alem": "learned man in religious study/higher than Molvi title",
"áler": "sun moving beyond noon",
"alga": "stranger, non-relative",
"algassá": "separately",
"álgassá": "of rough/dry/un-taste",
"algo": "[you] turn over the cover to see into/uncover/open the lid",
"Álhámdu": "the opening verse of the Quran",
"álhámdulillá": "thanks to Allah",
"Ali": "high, popular Muslim name",
"alif": "the first character",
"Aligor": "the oldest and the most famous Muslim University in India",
"Alijuhár": "best jewels/commonly used name of Rohingyas",
"aling": "wickedness",
"alingor or agat": "too far above/at the very top",
"Aliten-gyaw": "a village south of Maungdaw township, Arakan",
"Aliyóng": "a village in Buthidaung township Arakan",
"áll": "farming tools for cutting into the ground",
"Alla Alla": "pray to Allah while worrying much",
"allága": "hanger",
"Allah": "Allah, the only God without any partner",
"allar-haissáti": "for the sake of God [Allah]",
"alló huákbor": "God is great",
"allóuk-sammá": "labor [in Burmese]",
"alluminiyem": "aluminum",
"allwa": "of sharp surface",
"almali": "cupboard",
"alob gor": "discuss",
"Aloddin": "the famous Aladdin man in tales",
"alok": "separate/independent",
"alokgoró": "make separate",
"alóllá": "leave the case in the hand of God",
"Aloma Iqbal": "a famous PhD Doctor of Urdu literature in Pakistan",
"alorot": "flying vehicle of fairy",
"álowa": "food cooked very soft/mixed",
"althu-fálthu": "having no discipline [of man]",
"alu": "ground potato",
"álua": "sweet/beaten severely, see also word “áluwa”",
"alugula": "potato",
"aluhoñsu": "mess up/disorder/disarray/a kind of vegetable",
"amam": "illiterate/less educated people/uneducated people",
"aman": "safety and security/Also used “amón”",
"ámana": "disobeying [in Burmese]",
"amanot": "trust/safe/safety and security",
"amanotdar": "trustworthy person/person of believable",
"ámbelar": "cow’s crying voice",
"ámblai": "eating in a manner as if never eaten before",
"ambor": "a kind of rice very popular",
"ambúba": "gas cylinder",
"ámburai": "eating extraordinarily",
"ámburo": "[you] crawl",
"ámburoon": "crawling",
"ameillá": "unwrapped/un-opened",
"Amerika": "America. See also “Amirika”",
"Ameriki": "American. See also “Amiriki”",
"amí": "I am",
"amíc": "skin shells of fish",
"amin": "land measuring people",
"Amina": "“Amina Hátu”, famous name of girls of Arakan",
"amir": "rich",
"Amiriki": "American. Also see “Ameriki”",
"amm": "mango",
"amma": "mother",
"ammajan": "mother",
"Ammán": "capital city of Jordan",
"ammosíara": "the last 30th part of the Quran used to teach the beginners",
"ammúikkya": "surprise/puzzle",
"ammúk": "fore hair in upright style, puzzled/amazed/astonished/hair style",
"ammúnia": "ammonia [gas]",
"ámoinna": "un-sharpened",
"amól": "good deeds",
"amón": "safety and security",
"amór": "order [of usually from head of state]",
"ámoza": "tasteless",
"amúd": "pillar",
"an": "[you] bring",
"ana": "mirror",
"áñabodu": "dumb, un-clever, not smart",
"anaçi": "illiterate/dumb person/unsocial",
"anáforibóu": "must bring [it]",
"áñai": "iron ring at top end of wooden handle of a knife",
"anar": "a kind of fruit",
"añár": "my, of me/mine/belong to me",
"añára": "we",
"añárar": "mine/belong to us",
"añárare": "to us",
"añáráttu": "we have/with us",
"añáre": "to me",
"añártu": "I have/with me/See añáttu",
"añáttu": "I have/with me",
"áñbaa": "showing/demonstrating the strength and power",
"áñbodu": "little knowledge [of doing a particular thing]",
"añc": "thread/fiber",
"áñc": "smile /duck",
"añça": "accommodate it/make it fit in",
"añçá": "glue, paste",
"áñca": "smile",
"áñçah": "of walk/make to walk",
"añçáic": "twenty-eight[28]",
"añçáli": "small insect-stick to the soft part of the body, tick",
"áñcani": "smile",
"añçáro": "eighteen[18]",
"añccwá": "can not be seen clearly/dim",
"añçe": "[he/she/they] fitted inside",
"áñçe": "[he/she/they ] walk[s]",
"añçefán": "enough to get fit, to fit in",
"áñcer": "[he/she/they ] laughing",
"añçer": "able to getting fit inside",
"áñçer": "[he/she/they ] walking",
"áñçi": "[I/we] walk/by walking",
"añçibóu": "will be fit in place",
"áñçir": "[I/we] am/are walking",
"áñco": "[you] laugh",
"áñço": "[you] walk",
"áñcoon": "smiling",
"áñcoón": "laughing",
"áñcor": "the day of judgment",
"añctho": "eight[8]",
"añcthowá": "counting eight[8]",
"añcthuana": "50 cents, Pyas or Halalas",
"añçú": "knee",
"áñçullwá": "of walking age",
"añdá": "blind",
"andacá": "doubt",
"añdáduk": "beating unstopped continuously",
"andár": "dark/See also añdár",
"añdár": "dark",
"andas": "estimate/guess",
"andha": "egg",
"áñdhdhi": "bones",
"ándhifatila": "plates and dishes",
"Anér": "[he/she/they] bringing",
"anér né": "is [he/she/they] bringing?",
"anfárm": "open to public, general public",
"anforá": "illiterate",
"anggula": "a kind of fruit",
"añggur": "grapes",
"Añgkera": "the capital of Turkey",
"áñgobouróu": "the only [child] in the family",
"aní": "let [me/us] bring",
"aníbi": "[you] must bring/same as aníba",
"añiçá": "remaining food after use",
"áñiccair": "[I/we] sneezing",
"áñiccoon": "of sneezing",
"áñiccoór": "[you are] sneezing",
"áñijjá-kuúñri": "chicken that lays eggs",
"anikka": "[people of] of west origin or meaning from west which is Bangladesh",
"anína": "let me have permission to bring",
"anír": "[I/we] bringing",
"áñis": "side room made by extending the main roof/woman’s bleeding period",
"anis": "[you] bring [it] same as anó",
"añiththa": "little/of small quantity",
"añiththá kela": "Arakanese banana/kind of banana found in Arakan, Burma",
"añiththé": "fit in place",
"aníyéna": "let me have good permission to bring",
"aníyoum": "[I] will bring",
"añk": "line, mark/draw lines",
"añker": "drawing lines",
"añkido": "draw or mark line",
"añko": "draw lines",
"añkoon": "of drawing lines",
"añnaçi": "illiterate/dumb person",
"aññí": "I, myself",
"aññyá guññyá": "in depth details",
"anó": "bring",
"anóna": "please bring",
"anondo": "being very comfortable and relaxing",
"Anoroththa": "king of Burma once upon a time",
"añra": "coal",
"áñra": "smallpox",
"añragula": "a kind of fruit",
"añralu": "ground root",
"añra-uñra": "the last sticky rice/food in the dish",
"áñrfaçá gula": "a kind of fruit",
"áñrfaçi zade": "very heavy as if body fallen apart",
"áñri": "yogurt container usually made of heated mud/pot",
"áñri kuúñrí": "chicken that lays eggs",
"añsá": "scratch/a line mark showing skin damage",
"añsáifélaiye": "laid eggs by flies on wound",
"ansar": "the helper [Arabic origin]",
"añsar": "pickles",
"añsár": "falling down in the slippery surface/was cheated",
"añsárgula": "a kind of fruit",
"añsér": "[he/she/they] leaving marks on smooth surface",
"añsí": "leave mark on skin or on smooth surface",
"añsila": "a kind of crawling animal found in the bush/pimple on face",
"añsír": "[I am] making marks on smooth surface",
"añsó": "make scratch",
"añsóon": "scratching",
"añsur": "comb",
"áñsur": "swim",
"áñsurer": "swimming",
"áñsuro": "[you] swim",
"áñsuroon": "swimming",
"antas": "estimate/guess",
"áñth": "a kind of treatment for mad man /medication by fairy dance usually at patient’s house",
"Anthala-both-thala": "a place far north of Taung Bazar, Arakan State",
"áñthdhali": "giving away money or goods for the sake of patient to recover",
"áñththa": "ladder",
"añththwá": "short fence to protect animal crossing",
"áñth-thwa-feth-thwa": "ordinary people, low class people",
"añti": "intestines",
"áñti": "elephant/Also used háñti",
"añtor": "fragrance",
"ántri": "antenna [Arabic origin]",
"añtur": "handicap",
"añtura": "handicapped person",
"áñtura": "hammer",
"ánuinna": "unsalted",
"anuni": "of less salt or no salt",
"añza": "the size equal to the area when met both hands after stretching",
"añzagorí dóro": "hold with both hand stretched and folded",
"añzazi goró": "meet with both chest touched while pulling him/her closed",
"añzazi goróon": "meeting with both chest touched while pulling him/her closed",
"áñzigiyói": "have got lost",
"áñzizoon": "loosing",
"áñzo": "preparing for good looking",
"aoóu": "something to frighten small children",
"appá": "kiss",
"appwá": "kiss",
"aqérot": "life after death",
"ar": "more, and, further more, kidding, telling bad",
"ara": "mark, fence, fence of bamboo",
"ára": "[he/she/they] lose/act of losing",
"ará": "[he/she/they] command others",
"arái": "[I/we] command others",
"áraiféloon": "losing",
"arail": "chicken or duck house",
"arailla farailla": "the neighbors and villagers",
"aráiye": "asked to do/ordered/commanded",
"áraiye": "lost",
"Arakan": "one of the seven states of Burma located at West coast and renamed as Rakhine",
"arála": "raw/rough/low quality [of rice]",
"aram": "rest/healthy/easy",
"arang": "initial investment/cost price",
"arbar": "next time",
"arcó": "king’s sitting, Allah’s sitting",
"ardasé": "and/additionally/furthermore",
"arde": "and",
"ardhoilla": "different kind. See also “adhdhoilla”",
"ardzuar": "half tide/in the mid of the tide",
"arekkiní": "a little bit",
"arfai nofarér": "can not be touched/can not be joked/can not tell inconvenient thing",
"argwá": "next one/once more/one more",
"arí": "basket of rice measuring",
"ári": "stay away from danger/from somebody, stay out carefully",
"Arir faár": "Arakan Mountain dividing the mainland Burma and Arakan",
"arissa": "of short temper",
"áritáko": "[you] keep out, stay away",
"árk": "vegetable leaves",
"Arkainna": "people of Arakan, Burma",
"arkán": "next one/next thing",
"arkánti": "at next place or location",
"arkántu": "at next place or location",
"árk-hoñsu": "vegetable including vegetable leaves",
"arki": "what is next/what is more",
"arkíni": "little more",
"armaali": "cupboard",
"armatta": "another time/next time/in next turn",
"arnái": "no more/not any more exists",
"aró": "more",
"Arob": "Arab",
"aródasé": "furthermore",
"aróki": "what is more",
"ároon": "loosing",
"árt": "hand/Also át",
"arzon": "next one/another person",
"arzu": "wish",
"asaiccá": "un-planed",
"asáiya": "unfiltered",
"asála": "ammunition",
"asán": "easy",
"asar": "pickles",
"asás": "foundation",
"asé": "have",
"asfan": "sky",
"asfis": "in near future/present and past/ahead and past",
"así": "present",
"Asía": "Asia continent",
"asílaiya": "not stitched",
"asimbit": "suddenly/unexpectedly",
"asman": "sky",
"asmani": "of Devine origin",
"asól": "original/real",
"asóli": "original/genuine/from original manufacturer",
"asóliyot": "character or quality of origin",
"Asór": "time before sun set/Asór prayer time/black magic",
"aspan": "sky",
"aspani": "of Devine origin",
"assan": "sky",
"assáng": "organization [in Burmese language]",
"assé": "slow",
"assé assé": "slowly slowly",
"assólamu aláikum": "Muslim’s greeting to another Muslim which means peace be upon you",
"assor": "background cloth used for thin foreground cloth",
"assús": "feel piety/feel uncomfortable",
"assús lager": "woe/feeling sorrow",
"asté": "slowly",
"asté asté": "slowly slowly",
"astókforóllah": "prayer for saving from devil",
"astoro": "ammunitions",
"asuhásu": "of disorganized/of unstable mind",
"asúilla": "un-skinned",
"asúm asúm": "very dimly seen/very lightly seen",
"asúya": "untouched",
"át": "hand",
"atá": "a kind of fruit",
"Átaái": "day of decree in the month of Ramadan/“Lailotor Kodór” day",
"atác": "feeling unclean and unorganized or uncomfortable",
"atai": "sudden inner force comes out in anger or dissatisfaction",
"átai": "step mother",
"átaibaf": "step father",
"átailo": "find something where you can see it",
"átaima": "step mother",
"átaito-bái": "step brother",
"átaito-bóin": "step sister",
"átarainná": "helper for miscellaneous work",
"áteilla": "cooked without oil",
"atha": "brown wheat flour",
"athái": "deeper water than a man height",
"athailla": "abundant",
"athalaikka": "abundant/a lot of, used for having a lot of money",
"athár": "without knowing",
"athiáino farer": "can not be parallel with other party in power",
"athoikkya": "of difficult nature",
"athok": "difficult",
"átiar": "arms",
"atíkka": "suddenly/all of a sudden action",
"atíkká-fiçá": "kind of home made bread",
"átinná": "guest room",
"atkuailla": "of less lucky",
"átlare": "child of naughty nature using his hand to beat others",
"áto": "search in the dark or without seeing",
"átoon": "searching without seeing or looking",
"ator": "fragrance",
"atóro": "get aside",
"attáicca": "of feeling unclean",
"attiyo": "relative",
"áttula": "as tall as when you raise you hand",
"áttulá": "little from every one",
"áwal": "the first/the beginning",
"áwalan": "firstly",
"awcúddo": "naughty/of bad nature",
"awé": "exclamatiooh my God",
"awlani": "vomiting",
"awle": "vomit",
"awler": "vomiting",
"awñla": "kitchen",
"awóñc": "scales/protective coating or fins on the body of the fish",
"awróla": "a kind of fruit",
"ayaci": "enjoying luxury",
"ayad": "verses from Quran. See also “ayat” and “aiyat”",
"ayat": "verses from Quran. See also “ayad”",
"ayé": "[he/she/they] uses to come. See also “aiyé”",
"ayénsí": "a kind of fruit eaten by boiling and then soaking into oil and salt",
"ayér": "[he/she/they] coming now",
"ayí": "let [me] come/[I/we] come/See also “aiyí”",
"ayó": "come",
"azab": "Allah’s punishment",
"azad": "free",
"azadi": "independence",
"azaf": "Allah’s punishment/God punishment",
"azáf": "crowded/of closed type environment",
"azáijja": "un-separated/un-sorted",
"azan": "Muslim prayer call/prayer call in the mosque",
"azap": "Allah’s punishment/God punishment",
"azáp": "tight, crowed, congested",
"azara áff": "a kind of snake",
"azarail": "angle of death",
"azat": "independent",
"azia": "today",
"azim": "very powerful",
"ázimma": "person who perform circumcision/person who cut extra skin of baby’s penis",
"ázinná": "evening",
"aziya": "today/same as “aijja”",
"aziz": "one of the Allah’s name",
"azol": "very delicate/very soft",
"azubazu": "complicated",
"azuijja": "unengaged",
"azulla": "very delicate, soft, fragile, e.g. “azulla fata” leaves",
"azulla-fata": "a kind of leaves",
"azur": "not busy/brick",
"azzér": "about half kilo [of two standard milk pot size]",
"azzon": "next one/another person",
"azzu": "wishes",
"azzuar": "mid tide/half way tide",
"b": "the second alphabet in Rohingya character set",
"ba": "father/the second alphabet name character set",
"baá": "climb up",
"baáde": "later/after that/next time",
"baái": "not fresh/not newly prepared/not the latest/climb",
"baait": "become follower of a “Firr”, a God loving person",
"baála": "damaged/rotten/unusable",
"baám": "pain relief ointment",
"baáñna": "untrue reasons for an excuse",
"baár": "climbing up/[wind] moving",
"báar": "floating",
"baáral": "any how",
"baáre": "outside",
"baárezoon": "of going to toilet",
"baárkule": "outside",
"baássóra": "sea side",
"baátrúma": "Arabic seating",
"baáttu": "from outside",
"baazi": "father",
"bab": "father",
"báb": "vapor",
"babá": "father",
"babajan": "father/dead person known to be highly pious in religion",
"bábi": "brother’s wife",
"bac": "bad smell",
"bacá": "tiny bamboo home temporarily built usually for the poor",
"baça": "exchange rate/a plate with rice, egg, candle etc presented to the bride’s visitor",
"báça": "low tide",
"báca": "homeless/without station/have no permanent place/make float",
"bácani": "floating thing/thing that float",
"baccú": "box/briefcase/luggage",
"báce": "float",
"bácer": "is floating",
"bací": "mouth piece used by police, etc.",
"baçi": "distribute to people",
"bácinda": "nationality",
"báçiya": "small plants abundantly grown on the road side",
"báco": "do float",
"baçoil": "a carpenter’s iron tool",
"bácoón": "floating",
"badam": "peanut",
"bade": "leave aside/ignore/neglect",
"bádi": "air blowing instrument used by blacksmith",
"baf": "father",
"báf": "think/vapor",
"báfa": "thinking",
"Bafadom": "Adom/the first man on earth",
"báfani": "thinking/thought/Same as báfona",
"bafdada": "fore-father",
"báfe": "[he/she/they] think",
"báfer": "is thinking",
"báff": "vapor",
"báfo": "think",
"báfoon": "thinking",
"bag": "tiger/chicken barking",
"bág": "share",
"baga": "giving the cattle to others for looking after for a given days",
"bágar": "bugger",
"bággitta": "lucky",
"baggula": "a kind of fruit",
"bagi": "insurgent",
"bagiza": "garden",
"baha": "person of dressing in very high style",
"bahá": "nest",
"bahór": "a kind spicy seeds",
"bai": "head ace/say bye",
"bái": "brother",
"baic": "twenty two/[22]",
"báic": "tame",
"baicca": "baby-usually refer to animal",
"baickúth": "film",
"báifut": "bother’s son",
"baiggá": "male tiger",
"baijja": "beat",
"baijjé": "hooked/blocked/locked",
"baikka": "in credit",
"báilder": "pretending/siding with you/behaving good/cheating",
"baindé": "was built",
"báingge": "was broken",
"bainna": "goldsmith",
"báiso": "referring as brother in social dealing",
"baiththa": "crunched",
"baiththá": "short",
"báiththa": "low tide",
"báiththeilla": "labor of cutting rice",
"baitulla": "house of God [Allah]",
"baiyon": "branjan",
"baizzábari": "argument",
"baja": "a mouth piece musical instrument",
"bak": "tiger",
"bák": "portion/share",
"bakcá": "king",
"baki": "balance/melon, a kind of vegetable fruit",
"bal": "private hair/vulva",
"bála": "good",
"balá": "eradicated, erased, removed completely",
"balí": "nose ring",
"balla": "for /Also bollá or bellá",
"bálluk": "a dangerous animal",
"balok": "grown-up",
"balthí": "bucket",
"balu": "sand",
"balúic": "pillow",
"balwa": "sandy, not solid, loose type",
"bam": "one’s surrounding area",
"bamboijjá": "without knowingly",
"bambu": "scolding/telling hard",
"ban": "tie",
"bana": "make",
"banaide": "in process of making",
"bañáitta": "left-handed/Also baáñitta",
"banaiyé": "made",
"banaouti": "pretended/makeup",
"bañát": "left hand/Same as baáñt",
"bañc": "bamboo",
"bañcá": "small temporary house",
"bañcí": "mouth piece",
"bañçí": "short",
"bañdá": "tied/under custody",
"bañdá hoppi": "cauliflower",
"bandéikka": "left handed",
"bándhi": "bundle",
"bándhul": "bundle",
"bañdí": "tie it up",
"bañdó": "tie/build",
"bañdóon": "building something",
"bañdor": "monkey",
"bañdóuni": "hing for tying",
"bañdur": "monkey",
"bángga": "cracked/broken/broken into pieces/damaged",
"Banggali": "Bangali people",
"bánggasura": "in broken condition",
"bangkú": "bench",
"báñgo": "break",
"báñgoon": "act of breaking",
"bángti": "goldsmith demand to make some jewelry out of given solid gold",
"bani": "making fees",
"báñina": "nephew/Also báiñna",
"báñinggé": "broken",
"bañl": "illiterate",
"bañlamas": "a kind of fish",
"bañli": "people of Bengali speaking",
"báñni": "niece",
"bano": "make it",
"banoni": "charge of goldsmith for making custom made jewelry",
"bañt": "pimple",
"bap": "father/Also baf",
"bar": "serve food",
"bár": "yoke",
"bara": "bamboo net to catch fish",
"bará": "extend, increase",
"bára": "say lie/rent",
"barái": "[I] increase",
"baráilo": "do welcome",
"báral gas": "a kind of tree very sensitive to skin damage when touched.",
"barang": "a container used to measure rice",
"baré": "[they] increase",
"barendha": "veranda",
"barer": "putting food into small cups/increasing",
"bárgwa": "carry person",
"bari": "a rod placed behind the door after closing for additional security",
"bári": "heavy",
"barí": "serve",
"baricá": "rainy season",
"bariháiye": "was hit/was beaten",
"barimar": "hit",
"bariza": "garden",
"baró": "[you] increase",
"baró": "increase/twelve 12",
"barówa": "twelve 12",
"barúlla": "fast body growing person",
"barus": "explosive",
"bás": "pile over each other",
"bas": "select /choose",
"basá": "selected one",
"basa": "save",
"basamas": "a kind of fish",
"baser": "remaining",
"basiasós": "being safe",
"basithák": "keep away for safety",
"baso": "select",
"bat": "pimple above skin /swallowed small area of the body pain",
"bát": "rice food",
"batác": "wind with rain",
"batacá": "a kind of biscuit",
"batel": "outdated/outlawed",
"bath": "nipple",
"bathár": "butter",
"baththa": "money exchange",
"batti": "light",
"baza": "mouth organ/play",
"báza": "fried/raw prepared",
"bazá": "hooking/engaging/financially tight",
"bázaá": "barren",
"bazáido": "bring close to get touched",
"bazáieró": "hang",
"bazáiya": "beside/closed by",
"bazar": "market",
"bazargwa": "not of good quality/something sold on the street",
"baze": "o’clock",
"bazé": "touch",
"bazi": "do naughty action",
"bázi": "oil cooked salad",
"bazí": "touch",
"bazó": "touch",
"bazu": "shirt",
"bázzih": "niece",
"bébi": "baby",
"bébi taxi": "baby small taxi",
"beça": "husband",
"beçi": "wife",
"beçiyáin": "women",
"beckuth": "biscuit",
"bédah": "not smart",
"bedh": "mattress",
"bedhcít": "bed cover",
"bedom": "not smart/not intelligent",
"befóuzul": "of no benefit",
"beg": "bag",
"begana": "non relative",
"beggún": "all",
"begom": "title of a married lady",
"behañ": "not straight",
"behol": "in trouble/accidentally",
"behúñc": "unconscious",
"beijjot": "dishonor",
"beil": "sun",
"beiman": "not loyal/cheater",
"beínna": "in the morning",
"bekar": "useless",
"bekkún": "all",
"bekuaic": "inconvenient/not easy/difficult",
"bekuf": "dumb",
"bela": "viol",
"bela baáni": "viol bow",
"beláac": "free",
"bena": "fire keeping roll made of straw",
"bená": "originated/started",
"benal": "not organized/not arranged properly/did not get through as expected",
"bénbení": "butterfly",
"bendíc": "bandage",
"beng": "frog",
"bera": "tour",
"béra": "lady finger",
"berá": "wrap/partition",
"berahám": "cruel",
"beráidori": "hold a person wrapped in sorry or in distress",
"beráifela": "wrap it",
"beráiya": "wrapped in",
"bero": "take tour",
"beró": "wrap",
"berub": "tail in “tail and head coin”",
"besinta": "without any worry",
"beso": "sell",
"besón": "basin",
"bessíri": "ugly-looking",
"besút": "without sensitivity",
"bet": "cane",
"betal": "disorganized",
"betári": "battery/Also bethári",
"betgula": "a kind of seeds",
"bézal": "disorganized/fake",
"bezar": "unhappy with some one/uncomfortable",
"bezi": "snake fighter",
"bezu": "mistake at basic point/not well directed",
"bézura": "odd",
"biale": "at night",
"biañgkúl": "confusion",
"biañgkwál": "complicated",
"biaram": "sickness",
"biari": "retail seller",
"biáta": "married person",
"bibi": "wife/a title a for a lady",
"bic": "pain/feel pain when touched or moved/poison",
"bicbaám": "ointment for relieving pain",
"biccác": "belief",
"bicí": "more",
"biçilla": "nasty",
"bifot": "not on track/not on line/get into difficulty",
"bigála": "grocery shop",
"bigiçigiyói": "fed up",
"biili": "woman just given birth",
"bíkóuk": "bended or circular comb",
"bil": "land field/invoice bill",
"bila": "spread something",
"bilai": "cat",
"bílbilá": "look here, there, left and right",
"bildhing": "building",
"bilebile": "on the street",
"bílki": "frightening by body action/usually used by animal like owl and tiger",
"bilkúl": "at all",
"bim": "beam support",
"bíñçah": "land plot",
"bini": "sticky/used for sticky rice",
"bini bát": "sticky rice",
"binitbáng": "twisting two parts in pair",
"bíññya": "show face in hatred",
"bír": "tight something/not loose/tight",
"bira": "bundle of  ‘fan’ leaves",
"bíra": "pursue/alcoholic drink",
"birani": "Birani food",
"birbijja": "slippery",
"birbirar": "moving very frequently here and there",
"biri": "small cigar",
"biríc": "teen aged cow",
"biro": "pursue",
"bis": "give air to something using fan",
"bisa": "animal scortium",
"bisá": "lay out",
"bisán": "bed/bed sheet",
"bisáni": "thing to use as a mat",
"biskuth": "biscuit",
"biso": "[you] give air to something using fan",
"bisoin": "fan",
"bíssoó": "heaven",
"bissú": "scorpion",
"bitír": "the last prayer of the day for Muslim",
"biwúñc": "unconscious",
"biyá": "marriage",
"biya": "[you/he/she/they] give birth",
"biyácádi": "marriage",
"biyádola": "marriage talking",
"biyái": "son-in-law’s or daughter-in-law’s father and mother",
"biyai": "[I] give birth",
"biyáini": "son-in-law’s or daughter-in-law’s mother",
"biyárbari": "wedding ceremony",
"biyáta": "married",
"biyo": "[you] give birth",
"bíza": "wet/damp",
"bízaá": "visa/Also víza",
"bleidh": "blade",
"blékboudh": "blackboard",
"bobbotiti": "warning to children they have to be after cow if not to school",
"boc": "[you] sit down/age",
"bocarot": "guidance",
"boço": "fold it",
"boçoon": "folding something",
"bocóti": "living/Also boicóti",
"boda": "testis/man’s eggs",
"bóda": "dump",
"bóda bóda": "wide open i.e eyes",
"bodaná": "container used in toilet",
"bodda": "elder brother",
"boddac": "bearing",
"boddú": "local illiterate people",
"bódhboçar": "talking too much",
"bódhdha": "big",
"bodmac": "lady follower",
"bodol": "change",
"bodola": "revenge/changes",
"bodoli": "lady inner body wear/change",
"bodoloon": "changing",
"boga": "heron",
"bogcíc": "award",
"boiçá": "sitting without any job",
"boijjal gas": "a kind of tree with many pimples",
"boijjalkér": "straw",
"bóijje": "[he/she/they] filled up",
"boil": "flowers of trees that bear fruits",
"boillaya": "fatty man",
"boilo": "let walking the cow over rice straw",
"bóin": "sister",
"bóinfut": "sister’s son",
"boirat": "visitors going for bring the bridegroom",
"boital": "lady of bad character",
"boiyá": "life jacket",
"boiyar": "air",
"boiyóni": "seat",
"boiyoum": "cooking pot made of mud",
"bókka": "relatively large piece",
"bol": "get fatty/energy, force, encourage",
"bola": "make fatty/curse",
"boláad": "title",
"bolá-fiça": "a kind of food, rice noodle under sugar water",
"bolar": "making animal healthy and bigger",
"bólboillá": "person of little fatty but look nice",
"bolduzar": "bulldozer",
"bole": "get fat/it is said/said to",
"boli": "get fat/fat",
"bolidór": "wrestling",
"bolot gouru": "bull cow",
"bolthú": "bolt/dump person",
"boluwar": "heavy man",
"bómbi": "pant",
"bon": "close/rounded bread",
"bonái": "sister’s husband",
"bonda": "human creature of Allah",
"bondó": "closed",
"bondú": "closed friend",
"bondubos": "preparation",
"bonduk": "rifle/arm",
"bone": "made in/manufactured in/match each other",
"bongor": "arrest",
"bongorídde": "closing",
"bongoró": "close it up",
"boñl": "armpit",
"boñl keñc": "armpit hair",
"bóñni": "of telling bad of would-be bridge groom",
"bono": "reconcile in between",
"bonoon": "made in",
"bóñra": "insect deep underneath",
"boói": "book",
"boól": "ball",
"boól pén": "ball pen",
"bóoñça": "picking lager portion without others permission",
"boórfáta": "spicy vegetable leaves",
"boou": "bride groom",
"boóuddoilla": "variety",
"boóuk": "book",
"booutha": "flag",
"bor": "the depth",
"bór": "put something into/heavy;",
"borabor": "same same",
"borbat": "destroyed",
"borforan": "with big heart",
"borgwa": "an ethnic group in Myanmar",
"borhot": "abundantly available",
"borketá": "hand made blanket used in the rural area",
"borkí": "hook for fishing",
"borkot": "God blessed",
"borkurá": "large chicken",
"boro": "large",
"boróc": "freeze",
"boróf": "ice",
"boroi": "capsule",
"borói": "plum",
"borok": "leave of banana tree",
"bórombótti": "man with figure",
"bóroon": "filling up",
"boroth": "pimples",
"borsóñi": "big peas",
"borton": "plate/Also botton",
"bós": "finish/done/ok",
"boson": "saying",
"bosór": "year",
"bóssa": "rice/sugar bags",
"bostá": "rice/sugar bags",
"botol": "bottle",
"bótta": "bad",
"botton": "plate",
"bottoro": "bad behaved",
"bouli": "fat",
"bounnwa": "pig",
"bóuride": "fill it up",
"bóus": "brother’s wife",
"boustí": "village/cook",
"boutha": "flag",
"boutí": "cotton wire used in oil lamp",
"bouyák": "a kind of jewelry",
"bouyar": "air/wind",
"bóuzi": "real bother’s or brother-in-law’s wife",
"bouzura": "wed-ring ceremony",
"boyó": "sit down",
"boyom": "bottle container used in the kitchen",
"bozzuta": "heavy shoe",
"brazia": "brassiere/bra",
"bualmas": "a kind of fish",
"bubu": "sister",
"búc": "heavy in responsibility",
"búça": "standard form of rice i.e “búça báth” instead of “bini báth”",
"búçung": "bubble",
"bug": "disabled in speaking",
"buga": "dumb person",
"buhár": "fever",
"buigga": "dump",
"buijjá": "old man",
"buijjáouñl": "thumb",
"buijjé": "understood",
"búille": "forgotten",
"búinna": "fried",
"buk": "chest/dumb",
"búk": "hungry",
"búka": "of hunger",
"bukhorá": "chest bone",
"bukíng": "booking",
"búkka": "large piece",
"búklaiggé": "feel hungry",
"bul": "advice/saying/bowl/say",
"búl": "not clean, mistake",
"bulá": "a kind of insect that bites",
"búla": "misguide",
"búlaifélaiyé": "has been persuaded or misguided",
"búlar": "misguiding",
"búle": "[he/she/they] forget",
"búli": "[I] forget",
"búligiyoi": "forgotten",
"búlmas": "a kind of fish",
"búlo": "[you] forget",
"búna": "fried",
"buñda": "bundle",
"buniyadi": "origin, pioneer, beginner, root",
"búr": "bamboo float",
"bura": "bad/ugly/of bad character",
"burá": "old man",
"búra": "very old item covered with whitey thing",
"burai": "doing bad things ethically",
"burak": "the horse like animal that took the prophet Mohammed to the heaven",
"burha": "cover for Muslim lady when going to public places/Also burhá",
"burí": "old lady",
"burúng": "drill",
"burus": "brush",
"burúss": "roast",
"bus": "understanding",
"búsal": "earth quake",
"busbiassá": "discussion",
"busdil": "being afraid of",
"buska": "bundle",
"búska": "shake/hold very roughly",
"bustán": "oasis",
"bút": "ghost",
"bútaá": "not sharp",
"butang": "button",
"buth": "boat",
"Buthidaung": "a major city in northern Arakan, Myanmar",
"búthka": "fatty",
"bútoijja": "secretly, internally",
"bútore": "inside",
"bútottu": "from inside",
"buu": "calling elder sister",
"buúm": "bomb",
"buwá": "sitting",
"buwágara": "make seated",
"buwal mas": "a kind of fish",
"buwáni": "base used to let sit something",
"buwázar": "happen to seated",
"buzá": "understanding",
"búza": "strong and fatty. i.e. Búza bilai.",
"búzaiféla": "erase it",
"búze": "erasable",
"buzé": "understand. i.e He understands. Ite buzé.",
"búzi": "female cat",
"buzí": "understand. i.e I understand. Aññí buzí.",
"búzoni": "eraser",
"buzóon": "understanding",
"búzoon": "erasing",
"buzorgani": "of life of very highly pious",
"buzurgó": "man of very highly pious",
"cáab": "gentleman/man of higher rank or post",
"Cáab Bázar": "famous area in Arakan meaning market of high-rank person",
"Caabán": "the 8th month of Arabic calendar before Ramadan month",
"cáabgíri": "enjoying as man of higher post",
"cáaer": "poet/writer of poem",
"cáaeri": "poetry",
"Cáafí": "one of the four main Islamic religious guiders and guides",
"cáai": "royal e.g. cáai hándan king’s family",
"cáakin": "discipline/order/self-control",
"cáakinsára": "without any discipline, order or self-control",
"cáandár": "grand/high profile/of great standard",
"cáath": "shirt",
"cáayi": "royal",
"cáb": "curse",
"cába": "raid",
"cabác": "being successful",
"cabáci": "success",
"cac": "grow staple food",
"cacá": "land owner",
"caça": "mat",
"caçá": "not fertile",
"cáça": "chase [him/her/them]",
"cáçar": "chasing [him/her/them]",
"cácca": "pure",
"cáccih": "punishment",
"caçí": "leaving nothing",
"cáçi": "remove from root",
"cáçiféla": "have hair cut",
"cáço": "[you] chase",
"cacóuk": "paper of agreement in between",
"cácta": "pure",
"cáda": "white",
"cádacídah": "simple and straight",
"cádh": "hair cut",
"cádhdho": "carry hair cut",
"cádi": "marriage",
"cágirit": "students/pupils",
"cágu": "small grain like white rice",
"cáicta": "civilized/grand",
"cáigor": "ocean",
"cáikkat": "in front of him/in his witness",
"caimca": "acting as spoon",
"cáinno": "of organizing",
"cáir": "a kind of bird that can be tamed to speak human language",
"cáiththana": "rib",
"caiththar": "laying with great laziness",
"cák": "vegetable leaves",
"cákki": "witness",
"cákkih": "witness",
"caku": "knife of round shape",
"cákuaic": "convenience/chance",
"cál": "neck wrapper/inside layer of very thin cloth",
"caláikka": "clever person",
"calák": "clever/intelligent/smart",
"caláki": "cleverness",
"calic": "forty-",
"cálic": "sue in court",
"calicá": "effects of age at forties",
"camic": "spoon",
"cán": "grand/God’s ability or plan e.g. Allahr cán",
"cañçér": "[he/she/they] eating too slowly",
"cañçór": "[you] eating too slowly",
"cáncúkót": "grandness/of high profile/high living standard",
"cándor": "rich by prosperity",
"cáñla": "wife’s younger brother/scolding",
"cáñtaic": "twenty seven 27",
"cánti": "peace",
"cáñzah": "punishment",
"cár": "of benefit/useful",
"cára": "a gift for remembrance or memory/whole e.g. cára rait  whole night",
"cáre": "enough in [his/her/their] living",
"carer": "is being enough in [his/her/their] living",
"cári": "long wrapping cloth from top to bottom of body",
"cárir": "is being enough in [my/our] living",
"cárit": "pupil",
"cáro": "enough in [your] living?",
"cárorr": "is being enough in [your] living?",
"cath": "hardened skin mainly in leg",
"cáth": "hair cut/wooden plate over bamboo wall",
"cáththwa": "thread of banana tree",
"cathú": "wooden decorated floor",
"ceármen": "chairman",
"céc": "end/final/last",
"cectha": "trying",
"cek": "check",
"cék": "man of high caliber",
"cékayot": "complain",
"cékowa": "complain",
"cém": "tree root",
"cémbuú": "shampoo",
"ceñçi": "spy man",
"ceñth": "penis/scolding",
"cér": "loop hole/measuring pot",
"céri": "iron weight to measure weight",
"ceththá": "flat",
"cézana-fata": "a kind vegetable leaves",
"cézana-gas": "a kind of tree which leaves are used as vegetable",
"cézana-gula": "a kind of fruit",
"cézana-hark": "a kind of vegetable",
"Cíah": "another sect in Muslims particularly in Iran/steep",
"cíai": "ink",
"cíak": "complication/quarrel",
"cíal": "fox",
"cíañ": "sew/stitch",
"cíañ-bañc": "hard bamboo tree",
"cíañni": "stitch",
"cíañr": "sewing/stitching",
"cíar": "hunt",
"cíardár": "share holder",
"cíare": "of hunting",
"cíba-bañc": "hard bamboo tree",
"cícah": "lead metal",
"cícciçí-mas": "a kind of fish",
"cíçi": "stair case",
"cícirí": "tiny bottle",
"cídah": "very cool person",
"cígeréth": "cigarette",
"cígga gas": "a kind of tree",
"cíiar": "share",
"cíiargoróon": "animal hunting",
"cíiari": "for hunting/of hunting",
"cíin": "nasal liquid",
"cíirmas": "a kind of fish",
"cíkah": "teach",
"cíkkailla": "of winter",
"cíkkatá": "literate",
"cíkkitá": "literate",
"ciñçí": "letter",
"cindhi": "smallest",
"cindhifoisá": "coin of smallest value",
"cíndi": "poor feeding with open invitation",
"cíndur": "face or forehead mark for Hindu ladies",
"cíng": "horn",
"cínggat": "tunnel that thief digs for stealing",
"cínggoh": "lion",
"cíñyoon": "nose sticky fluid",
"cíñyoór": "roots",
"círab": "syrup",
"círgula": "a kind of fruit",
"cít": "winter cold",
"cíta": "hair styling",
"cítan": "head side/top side",
"cítantí": "at the head side",
"cítantú": "at the head side",
"cíte": "because of cold/by the cold",
"cithíng": "cheater",
"cítka": "drops of liquids/spray",
"cítkal": "winter",
"cítkale": "in winter",
"cítor": "of cold",
"cíyailla": "of fox/of fox cleverness",
"cíyori-gula": "a kind of fruit",
"cóbafúti": "chairman",
"cóbah": "meeting",
"cobbic": "twenty four 24",
"cóc": "true.",
"coçá": "dry, not watery land",
"cóccaiyi": "the truth",
"cóccoçar": "animal enjoying at shallow water",
"coccúl": "eye sickness",
"cocmá": "eye glass",
"coçor-fóçor": "very active person",
"códor": "traders",
"cóibboh": "of good character/peaceful",
"cóicca": "true.",
"cóiccai": "truth",
"cóinno": "followers/people that follows/without any support from below",
"cóinnor": "of having no support to keep it up",
"cóinnor-uore": "staying up without any ground support",
"coit": "“Coit” month",
"cóitan": "devil",
"cóitani": "of devil/bad behavior",
"cóith": "suffering/uneasiness",
"cóitto": "firm believing",
"cok": "chalk",
"cók": "doubt",
"cókcubá": "doubt and distrust",
"Cókkubar": "Friday",
"cokól": "shape/figure",
"cókoléith": "chocolate",
"cókti": "energy",
"cóm": "pregnant/mishap/calamity",
"Cómbar": "Monday",
"cómbotti": "property/wealth",
"comke": "flush/look bright/come rays out of",
"comker": "flushing/looking bright/coming rays out of",
"cómmosibot": "mishap/unfortunate day",
"cón": "season",
"cóncar": "the kingdom",
"cóñço": "small",
"cónconár": "abundant/too much available/too crowded",
"cóndoh": "suspect/mistrust",
"Cónibar": "Saturday",
"cóo": "fit/suit/does not harm",
"cóoc": "dare",
"cóor": "city",
"cóorgwá": "city man",
"cóouk": "wishes/wishes for grand living",
"cóppon": "dream",
"corá": "tradition",
"córa": "save other from danger/let other to give way",
"córab": "alcoholic drink",
"córabi": "person who heavily drink alcoholic drink",
"córbot": "juice",
"córboti": "orange",
"córifá": "a kind of fruit",
"córiyót": "Islamic rules",
"córkar": "government",
"cormá": "eye glass",
"córma": "feel shy",
"córman": "warm welcome/dignifying",
"córmar": "feeling shyness",
"córme": "because of shyness",
"córminda": "shameful",
"córmon": "feeling shyness",
"córo": "give way/to go away to be save from danger",
"córom": "shyness",
"córoóc": "loose/soft/not tight",
"córoon": "giving way/going away to be save from danger",
"corót": "condition/term/prerequisite",
"córr": "sailing cloth",
"cótan": "devil",
"cótani": "naughty act",
"coth": "roof top",
"cótti": "energy",
"couça": "width",
"coudóri": "chairman",
"cúaiggó": "approaching to show love with intention of getting benefit",
"cúaríc": "ask someone to help",
"cubá": "suspect/distrust",
"cúccak": "disturbance",
"cúdah": "lazy person",
"cúddoh": "of good character",
"cúddor": "line-up in queue",
"cúdin": "summer",
"cugolkúr": "telling bad of others",
"cúikkya": "being lazy worker",
"cuiththali": "cow’s top",
"cújjo": "sun",
"cúk": "prosperity/healthy",
"cúkah": "tobacco",
"cúkcak": "disturb",
"cúkcánti": "bliss bless",
"cukkáth": "close eyes/same as suk’háth",
"cúkkitá": "having easy life/non-hard worker",
"cúkkor": "of happy life",
"cúkkot": "in happier life",
"cúkor": "thanks",
"cúkorguzar": "thankful/grateful",
"cúkuria": "thanks",
"cúlhar": "action near to giving birth",
"cúlloh": "sixteen",
"cum": "kiss",
"cúm": "hair size rod",
"cuma": "kiss",
"cúmka": "black magic",
"cún": "hear/same as fún",
"cúna": "gold/female sex organ",
"cúnali": "of gold/of highest quality",
"cúnar": "made of gold /of gold/golden",
"cúnarsó": "male sex organ",
"cuñça": "cigarette",
"cúndoijja": "of beautiful",
"cúndor": "beautiful",
"cúndori": "person of beauty",
"cúne": "[he/she/they]  listen",
"cúner": "[he/she/they are] listening",
"cúngha": "blowing for cure",
"cúnir": "[I/we] listening",
"cúno": "listen",
"cúnoni": "charge for listening",
"cúnoon": "listening",
"cup": "keep quiet",
"cúr": "queue/keeping in line",
"cúrba": "soup/curry liquid",
"cúrha": "liquid of curry",
"cúrmah": "eye lit of color-blue",
"cúruh": "beginning",
"cúrum": "cave tunnel",
"cúruttú": "at the beginning",
"cút": "interest",
"cúthah": "baking power / carbonate flour",
"cúthki": "holiday",
"cuthki fiçá": "bread of eastern",
"cuththoni": "peep at/Also cukthoni",
"cúti": "of interest/related to interest",
"cúu": "styling",
"cúú": "sound to let the chicken go away",
"cúu-gula": "a kind of fruit",
"cuuñçi": "mouth",
"cúwaríc": "intercede/ask on somebody’s behalf",
"cúwoijja": "male pig",
"cúwor": "pig/scolding for misbehavior",
"cúworni": "female pig",
"cúza": "straight",
"cwá": "the e.g.  the man manúic cwá",
"daa": "harvest paddy/knife",
"dáa": "running away/escaping from danger",
"daáñc": "bottle like container usually mention in tales",
"daba": "press/push down/pressing",
"dabai": "medicine",
"dabar": "pressing",
"dábba": "attack/criticism/assault",
"dabbúc": "stapler",
"daber": "[he/she/they are] pressing",
"dabi": "getting lower due to force",
"dabigiyói": "has gone lower due to force",
"dabo": "press/push down",
"daboon": "pressing, pushing down",
"dada": "grand father",
"dadi": "grand mother",
"dáfa": "make him run away or escape",
"dahá": "show",
"daháide": "show [he/she/them]",
"daiyé": "paddy harvested",
"dáiye": "escaped",
"dákka": "a push",
"dam": "price",
"dan": "donation",
"dán": "rice",
"dana": "peanut",
"dándaah": "profécen",
"dánnwa": "of paddy rice",
"dañra": "backbone",
"dañrafóoir": "said religious people who perform activity using drums",
"dar": "ruder",
"dár": "sharp/running away",
"dará": "stick",
"dára": "sharpen",
"dáraide": "sharpen for [me/us]",
"dárair": "[I am] sharpening",
"dárar": "[he/she/they] sharpening",
"dargwá": "wooden pieces for burning",
"darí": "beard",
"darmíc": "stupid/not good in education",
"dáro": " sharpen",
"dároon": "sharpening",
"dat": "teeth",
"de": "give me/cause/do/make",
"debal": "wall",
"dec": "country",
"decci": "cooking dish",
"defá": "defend",
"dehá": "meeting/show [he/him/them]",
"deikkyé": "[he/she/they has] seen",
"deikkyí": "[I have] seen",
"deikkyó": "[you have] seen",
"dekbal": "looking after",
"dekér": "showing",
"dekíba": "will see",
"demak": "brain",
"denát": "right-hand",
"dendhák": "right-side",
"deri": "late",
"derigorí": "lately",
"dhab naijjol": "green coconut",
"dhaba": "top open floor of the building",
"dhabbáb": "pickup",
"dhabin": "diving/jumping into",
"dhaból": "double",
"dhahaic": "call him that time",
"dhahaith": "robber",
"dháhor": "from near",
"dhail": "lentil grain",
"dháille": "poured",
"dhaiththé": "scolded",
"dhák": "side",
"dhak": "butcher contract/license, Call",
"dhakfiyón": "postman",
"dhakide": "call [he/him/them]",
"dhakkwa": "informer",
"dhako": "call",
"dhakoon": "calling",
"dhákor": "from near",
"dhaksiyor": "too much pain",
"dhaktor": "doctor",
"dhaktorhána": "hospital",
"dhaku": "village lord",
"dhál": "thick paper",
"dhalúng": "“Dalung” fruit",
"dhañço": "thick",
"dhandha": "short wood for beating",
"dhang": "short wood kicker",
"dhángni": "cover",
"dheb": "cooking dish/large dish",
"dheba": "thunderstorm",
"dhebal": "wall",
"dhec": "country",
"dhecci": "dish",
"dhéfa": "natural dam",
"dhék": "air release from throat",
"dhenban": "right and left",
"dhéñi": "long wooden lever for rice milling",
"dhéñiark": "vegetable",
"dheróm": "drum container",
"dhíc": "dish",
"dhim": "egg",
"dhimán": "demand",
"dhinár": "diner money",
"Dhizni Lén": "Disney land",
"dhoc": "ten",
"dhocá": "accident",
"dhók": "style",
"dholide": "rub",
"dholo": "to grind",
"dholoin": "rice grinder",
"dhong’hol": "lever based water pumping",
"dhoóñr": "big",
"dhoóñr gori": "in bigger size",
"dhora": "afraid",
"dhorlage": "afraid of",
"dhouk": "quail",
"dhouwá": "flat piece used for stirring while cooking",
"dhuwáñ": "shoulder blade",
"dhuc": "fault/guilt",
"dhúc maroon": "attacking",
"dhucfon": "enemy",
"dhudhu": "a type of play",
"dhudhukgari": "“Du-duk” car",
"dhufer": "sinking",
"dhufiza": "[you] get sink",
"dhufóon": "sinking",
"dhuippyé": "sunk",
"dhúk": "dry swallowing",
"dhul": "rice bowl of bamboo",
"dhúl": "drum",
"dhula": "hand carry basket",
"dhúla": "swing",
"dhúldhuillá": "very loose",
"dhúloin": "swing",
"dhum": "act of diving",
"dhummar": "dive",
"dhupmar": "dive",
"dhúrr": "hollow",
"dhuwa": "plant base soil container",
"diba": "give",
"dim": "[I] will give you",
"din": "religious faith, day",
"diyoo": "bad angel",
"diyor": "brother-in-law from sister",
"do": "give [him/her]",
"do": "give [me/him/her/them]",
"dobos": "strong/fit",
"dofón": "burial",
"doi": "yogurt",
"doijja": "river/sea",
"dóijje": "captured",
"dok": "eloquence/fantastic/smart",
"dokthar": "physician doctor/Aso daktor",
"dola": "pebble",
"dóla": "white",
"dola dola": "in group",
"dómki": "frightening",
"dón": "property of very high value",
"dóndoulot": "property and possession",
"doñrá gouru": "male cow",
"doo": "knife",
"dóo": "[you] run away/run away from danger/children swinging",
"dóodo": "swinging/moving in curve",
"doóin": "south",
"doon": "giving/giving away /paddy harvesting/giving",
"dóon": "escaping /running away",
"doóñra": "male cow",
"dor": "price",
"dór": "hold",
"dóra": "waist pain/holding",
"dóre": "[he/she/they] catch",
"dorgá": "religious place where saints were buried",
"dorhoicca": "person just before grown up",
"dóri": "[I] catch",
"doria": "sea",
"doró": "hard",
"dóro": "[you] hold /catch",
"dóroni": "hand handle /holder",
"dóroon": "holding",
"doroza": "door",
"doruwan": "guard",
"doulot": "possession",
"dua": "prayer",
"duá": "two",
"dúa": "plain/nothing grown on",
"duadi": "busy",
"duái": "opposed strongly",
"duali": "belt",
"duan": "shop",
"dúañ": "smoke",
"duar": "door",
"duara": "again",
"duára": "repeat",
"duárar": "repeating",
"duárer": "[he/she/they are] repeating",
"dúb": "white",
"dubba": "a kind of sheep usually having fatty tail",
"dúbba": "fatty",
"dúbi": "laundry-man",
"dudduar": "children’s playing by running around and shouting within a confined place",
"duddufar": "vibrating roughly/children’s playing by running around and shouting within a confined place",
"dudórcére": "in bosom",
"dufa": "grinding/crunching",
"dúfi": "laundry",
"dufo": "grind/crunch/press",
"dufoni": "grinder/cruncher",
"dufoon": "grinding",
"dui": "number two/2",
"dúi": "by washing",
"duián": "two pieces",
"duinali": "gun of two barrels",
"duiyá": "milked one",
"dúiya": "washed",
"duiyán": "two pieces",
"duk": "pain, hardship",
"dúl": "dust",
"dulá": "bride",
"dulón": "bride groom",
"dum": "a kind of sheep",
"dúmbalu": "very sandy",
"dumdummyá": "wide plain",
"dúñfiça": "curry cup shaped rice bread/Also dúiñfiçá",
"duñíjja": "afternoon",
"duñirgula": "a kind of fruit",
"duniyai": "earth",
"duñr": "going away",
"duñra": "act of running/cause [him/her/them] to run",
"duñroon": "running",
"dúo": "wash",
"dura": "punishment with cane",
"duré": "far away",
"duró": "go away/go away far due to being guilty",
"durús": "chicken fry whole",
"dusára": "next one/different/not the same",
"dut": "milk",
"duti": "backbiting",
"dúti": "sarong/longyi",
"duú": "[you] milk",
"dúu": "[you] wash",
"duwá": "two quantity",
"dúwa": "plain/without anything on it",
"duwái-sárer": "being insisted strongly not to do",
"duwali": "belt",
"duwan": "shop",
"duwé": "[they/she/he] uses to milk",
"dúwe": "[they/she/he] uses to milk",
"duwó": "[you all] milk",
"dúwo": "wash",
"dúwoon": "washing",
"e": "this",
"é": "that",
"ebabote": "about this/Also ebaabote",
"ebáca": "this language/this dialect",
"ebadot": "praying to Allah/good deeds",
"ebadoti": "pious/highly religious",
"ebáfe": "like this/as if",
"ebáiyor": "of this brother",
"ebák": "this share",
"ebala": "now/so now/therefore now",
"ebar": "this time/this turn",
"ebarot": "reading a word or a sentense",
"ebazá": "this difficulty",
"ebazát": "in this difficulty",
"ebbañc": "a full bamboo length of",
"ebbar": "once",
"ebbár": "a load of",
"ebbari": "one strike or lash of punishment",
"ebbe": "at all/at the end/at last/finally",
"ebbeg": "a bag of",
"ebbéinna": "one morning",
"ebbere": "at all",
"ebbisána": "in the same mat",
"ebboitta": "in one way/somehow",
"ebborat": "a share/one of a share",
"ebbosí": "a full bowel of",
"ebbosór": "one year/a year",
"eboitta": "in relation to this/in relation to this type or category",
"ebosór": "this year",
"ebus": "with this knowledge/with this understanding",
"ebuzá": "like this understanding",
"ecá": "prayer time approximately two hour after sunset",
"éçame": "ability/capibility",
"éçammwá": "weak",
"ecarak": "prayer time half an hour after sunrise",
"éccára": "look down/careless/give no attention",
"eccér": "approximately one kilogram of weight",
"eccót": "one hundred",
"eçé": "here",
"éçe": "there",
"eçékén": "how in this place",
"éçekén": "how in that place",
"eçíyar": "people from here",
"éçiyar": "people from there",
"éckára": "look down/careless/give no attention",
"eckó": "sexual feeling",
"eckul": "school",
"ecók": "like this type of",
"ecón": "this season",
"ecóttiloi": "with its force/with its encouragement",
"ectemá": "large religious gathering of its kind by tens of thousands of people",
"ectemáyi": "in groups together",
"ecúar": "asure",
"edam": "this price",
"édam": "that price",
"edára": "office",
"eddíane": "with full concentration /with interest",
"eddin": "a day/one day",
"eddók": "half",
"eddúr": "this much distance",
"éddur": "that much distance",
"edhák": "this side",
"édhák": "that side",
"edhdhoilla": "same",
"edhdhúk": "one drink",
"edin": "this day/today",
"edín": "this much number/quanity",
"édin": "that day",
"édinnah": "recently",
"edor": "this price",
"édor": "that price",
"edóroni": "this handle",
"édóroni": "that handle",
"edoroza": "this door",
"édóroza": "that door",
"edún": "this much amount",
"édun": "that much amount",
"eduniyait": "in this world",
"ée": "calling somebody a little away to get response",
"eéc": "enjoing laxury",
"eén": "like this",
"éen": "like that",
"eénken": "why like this",
"éenken": "what a trouble making",
"éezaat": "on this departure/on this going, moving",
"effarí": "one time/one turn/one shift",
"effissán": "one generation",
"effisso": "one turn-over/one shift/one time",
"effoton": "one shift/Also ekfotón",
"efoñtót": "in this way/in this lane",
"efor": "underneath sign used in Hanif-language",
"efosón": "liked too much",
"egáar": "this infection",
"egana": "relative",
"egañtá": "trapped this way",
"egañtot": "this digging/this cave",
"egaro": "eleven",
"egaruwá": "eleventh",
"egaza": "frequently",
"egeza": "frequently",
"eggaála": "one bowel of",
"eggañtot": "in the same digging",
"eggarí": "the whole car/of full car",
"eggia": "full of this",
"eggín": "same one",
"eggóijja": "lonely home/home without neighbour",
"eggolóic": "one glass of",
"eggór": "the whole family/of full family",
"egguccí": "same family/same decendents",
"eggúilla": "alone/single/without any partner or helper",
"egóic": "twenty-one",
"eháitta": "single handed/handled or used by only one person",
"ehála": "single",
"eham": "this job/this work",
"ehana": "a penny",
"ehañsa": "this side",
"éhañsa": "that side",
"ehañsat": "in this side",
"éhañsat": "in that side",
"ehélas": "being sincere",
"ehéram": "intention for pilgrimage/the two white clothes without stitches",
"ehésán": "help",
"ehétiat": "take care",
"ehíssa": "one share",
"ehón": "now",
"éhon": "right-away",
"ehóuti": "this loss",
"éito": "woe I have pointed you before",
"ejajot": "permission",
"ek": "one",
"ekama": "residency permit",
"ekbar": "one time",
"ekboitta": "in a way/somehow",
"ekbuth": "a boat of",
"ekcalíc": "forty-one",
"ekcót": "one hundred",
"ekdak": "one mark",
"ekdhák": "one side",
"ekdhoilla": "same",
"ekéla": "single/alone",
"ekeral": "admit/accepted his fault",
"ekfarí": "one turn/one shift",
"ekfoijjal": "one dose",
"ekgúilla": "single, separated",
"ekháfta": "one week/a week",
"ekhaiñccá": "singular cough",
"ekhale": "one upon a time",
"ekhañit": "forcing to one-side only",
"ekhotá": "in same statement, same voice",
"ekin": "believe",
"ekine": "of haveing believe",
"ekisím": "like this/is like",
"ekkame": "for a work",
"ekkán": "one piece",
"ekkani": "one standard unit of land measurement in Arakan State, Burma",
"ekkánti": "in one place, together",
"ekkántu": "in one place",
"ekkena ekkena": "little by little",
"ekkená gori": "little bit",
"ekkinare": "aside",
"ekkíni": "little",
"ekkínísa": "little/vey little",
"ekkita": "one-time, separating item wise",
"ekkom": "less one",
"ekkúc": "a palm-size of",
"ekkudhoilla": "similar",
"ekkuippa": "stubborn",
"ekkule": "in one side",
"ekkuni": "a unit in measuring small land or plot",
"ekku-niáce": "in a single breath",
"ekkuri": "twenty",
"ekkurul": "10 millions",
"ekkuthí": "one billion",
"eklák": "100 thousands",
"ekmikká": "one way direction",
"ekmon": "with heartedly",
"ekname": "with a single name/famous",
"ekniáccót": "in one breath of time",
"ekorkeñçi": "taking small small from all",
"eksáñte": "together",
"eksíara": "one part of Quarn out of0 parts",
"eksóllukot": "in the same ideology, in harmony",
"eksugé": "as far as your eye sight",
"eksugór": "of one sight distance",
"eksúura": "one chapter of Quran",
"ekthal": "a pile of/a stack of",
"ektiar": "wish",
"ekuilla": "from this side of the river bank or other landmark",
"ekule": "this side of river bank or other landmark",
"ékule": "that side of river bank or other landmark",
"ekunot": "in this corner",
"ékunot": "in that corner",
"ekúti": "deep stream",
"ekzaáñs": "a boat of",
"ekzaitta": "one kind of/one type of/one category of",
"ekzák": "a crowd of/a group of",
"ekzat": "same kind/same type/same category",
"ekzúikka": "of knowing one way or one thing only",
"ekzuk": "a period of 12 years",
"elac": "treatment",
"elaj": "treatment",
"elájík": "allergic",
"elaka": "area",
"elan": "announce",
"élan": "lay against",
"elána": "pimple on face",
"elána-gula": "a kind of fruit",
"elarám": "alarm",
"elasi": "a kind of spicy",
"elástík": "elastic",
"elektrík": "electric",
"elektrisiti": "electricity",
"elmí": "educational",
"elóm": "education",
"elómdar": "educated people",
"elóme": "by education",
"elómi": "educated/educational",
"eloot": "this rare seeing of each other",
"emác": "this month",
"emanúic": "this man/this person",
"emmác": "one month",
"emmarailla": "full of a basket",
"emmikká": "one direction",
"enáac": "pine apple",
"enam": "reward/award",
"enazi-kela": "a kind of banana/Arakanese banana",
"endhila": "like this",
"endila": "like this",
"enféradi": "in single/alone",
"enkelab": "political fighting/voicing against/strike against",
"enkelabi": "of political fighting/of voicing against",
"enkwari": "enquiry",
"entezar": "waiting;",
"enzam": "case against/faulty case against",
"eocótnoó": "too much nauty",
"epparí": "one feeding",
"eppóir": "one shot of bullet",
"eppoisá": "a single penny",
"eppoizzal": "one dose of",
"eqúti": "sharply deep",
"era,": "remove skin/divide into pieces",
"erada": "intention/",
"erai": "skinned/uncovered/exposed",
"eraide": "make skinned/make uncovered/make exposed",
"erasta": "this lane/this way",
"ere": "[he/she/they] keep",
"erer": "[he/she/they are] keeping",
"eri": "[I] keep something/put down something",
"eride": "make [him/her/them] free",
"eridi": "[I] make [him/her/them] free",
"eridiya": "uncontrolled/open/without fence",
"erido": "[you] free [him/her/them]",
"eridoon": "freeing",
"ero": "[you] keep, put down or lay down",
"eroni": "thing on which to keep something",
"eroór": "[you] are keeping, putting down or laying down",
"eros": "[you] use to keep",
"err": "keep",
"esán": "help/benefiting/Also ehésan",
"esás": "experience/understanding/tasting the bitterness/Also ehésas",
"esis": "this thing",
"eskul": "school",
"essát": "a moment/a while/a short time",
"estehára": "looking for God help",
"estekfar": "praying to Allah for protect from evil",
"estekfara": "act of praying to Allah for protect from evil",
"estemal": "usage",
"estinza": "passing urine",
"etaras": "being questionable/questioning against/telling against/not in agreement/not in line",
"etekáf": "staying away from human talking and only praying to Allah",
"etim": "orphan",
"etimháñna": "hostel for orphans/Also etimhána",
"etminan": "satisfied",
"etó": "this many",
"etóbar": "this many times",
"etódhóilla": "this many different types",
"etókisím": "this many categories",
"etókkún": "this much time",
"étollah": "that is why",
"etómatta": "this many frequently",
"etómíkka": "this many ways/this many directions",
"ettailla": "of one sided/of one way thinking",
"etúkkun": "that long duration",
"etún": "that long delay/Also etúun",
"éza": "hedgehog/a kind of animal",
"ezaga": "this land",
"ézaga": "that land",
"ezaitta": "this kind of",
"ezák": "this crowd",
"ézala": "this messy watery bush",
"ezat": "this race",
"ezati": "of this race",
"ezazot": "permission",
"ezin": "permission",
"ezitulla": "of too much stuborn",
"ézo": "spelling",
"ezúk": "tendency/chance/opportunity",
"ezúkot": "in this tendency/in this chance/in this opportunity",
"ezzat": "same kind/same category",
"fa": "can obtain/can get/can find",
"fáa": "sticky material flowed from mouth",
"fáaca": "comedy",
"fáaçá": "iron plate with handle used as a tool for digging ground",
"faáfa": "thoroughly",
"fáaida": "profit/benefit",
"faám": "pump",
"faár": "mountain",
"faári": "mountainous",
"fáarot": "spacious/of being wide space",
"fáasek": "liar/making funny",
"fac": "license",
"faça": "flat rock grinder",
"fáça": "torn",
"fáçacúça": "tear and torn",
"façi": "mat made of smooth cane",
"fáçi": "tear",
"fáçoon": "tearing off",
"faga,": "cooking/making ripe",
"fagaiya": "of ripen",
"fagilé": "if ripen",
"fagol": "mad",
"faiba": "[you will] get, find",
"faibi": "[you will] get, find [rough use]",
"faibou": "[he/she/they will] get, find",
"faiddé": "release air",
"faijjé": "able",
"faik": "bird",
"faikfocú": "bird and animal",
"faikké": "ripen",
"failla": "cooking dish",
"faillé": "adopting child/looking after",
"fain": "soldering material, joining",
"faincá": "no taste",
"fainná": "dilute",
"fainná-áff": "a kind of snake",
"fainná-gula": "a kind of fruit",
"fáisela": "decision",
"fáiththe": "torn",
"faiyé": "found",
"faiyoum": "will get it",
"fak": "wing/clean",
"fák": "apart/gap",
"fáki": "smallest grains/flour",
"fakka": "strong/fixed/cemented/made stronger",
"fakkafakki": "sure/promized/without any break",
"fakkáiyi": "have gone round",
"fakkár": "going round",
"fakkáraiya": "of rounded",
"fakkó": "go round",
"fakkon fiçá": "home made bread",
"fala": "pillar",
"fála": "bowl",
"fáldo": "jump",
"falki": "bridge groom carrier",
"falong": "bed/bed support part/bed frame",
"faloon": "looking after",
"fan": "green leaves eaten with nuts",
"fán": "wire loop to hang or catch some thing",
"faná": "get shelter under someone",
"fanboro": "fan leaves cultivation",
"fáñc": "fertilizer",
"fañçá": "male sheep",
"fáñci": "hanging",
"fándha-mas": "a kind of fish that usually float on the water",
"fandhúk": "pipe",
"fangká": "fan",
"faní": "water",
"fanír": "of water",
"fánoc": "lamp",
"fañs": "five",
"far": "crossing, picking fruits from trees",
"fara": "village",
"fára": "bad omen",
"fará": "cross over",
"faráibóu": "will cross",
"fare": "able/giving egg",
"faro": "remove fruit off tree/able",
"faró": "cross",
"fárok": "apart/having a gap",
"fásela": "distance",
"fasíl": "rear part of a boat",
"fata": "leaves",
"fatá": "address",
"fatá-fatá": "search every corner",
"fatal": "deep underground",
"fath": "small seater a few centimeters high",
"fathán": "Patan from Afghanistan",
"faththa": "jute",
"faththi": "bandage/lying",
"faththwa": "jute",
"fátia": "prayer offered with food",
"fatila": "dish made of mud",
"fatol": "thin",
"fatola": "of thin/of lighter",
"fáttara": "a kind of fruit like big orange but of soar taste",
"fattarazi": "acting naughty",
"fattór": "stone",
"fecá": "work/profession",
"fecák": "urine",
"féccáh": "lung",
"fécen": "fashion",
"féda": "useless, waste/nothing",
"feén": "pant",
"felá": "support pillar to a structure",
"félah": "make to fall down",
"félaidé": "throw away",
"félido": "throw to waste bin",
"félo": "drop",
"félu": "long bean",
"fená": "trees of still water",
"féna": "foam",
"feñçoon": "picking, collecting",
"feñdá": "not brave",
"féñec": "sign of snake’s anger",
"fénizal": "a kind of fishing net",
"feñra": "squeezing for juice from sugar cane by using pressing machine",
"feñs": "wicked thought/cross bar in wooden structure",
"feñsa": "owl",
"feñsara": "skin infection/diseases",
"feñzi": "person who puts others in cross/wicked man",
"fera": "bush at the river bank",
"ferata": "not hygienic",
"ferecan": "sadness",
"feth": "abdomen/stomach",
"fethi": "box",
"fethroul": "petrol",
"fiada": "watchman/a low level serviceman",
"fiala": "cup",
"fiáñra": "ant",
"fíañrá": "bad meat among other meat",
"fiañs": "onion",
"fiañzú": "round fried fillet of bean",
"fiçá": "a kind of food made of flour",
"fiçoon": "beating",
"fiihó": "commanding to drink",
"fiinic": "plate",
"fíis": "fees",
"fiitaloon": "giving headache",
"fiiyo": "drink",
"fikír": "thinking/planning",
"fílim": "film",
"fin": "pin, put on, wear",
"finak": "nose disease",
"fiñas": "onion",
"fiñdá": "wear somebody",
"fiñdó": "wear",
"fir": "fir, religious God beloved man",
"fír": "making cane out of bamboo/turn",
"fira": "bed room",
"fíra": "turn",
"fíring": "insect",
"fis": "back/rear",
"fís": "piece",
"fisá": "at the back side",
"fisála": "glut on the skin",
"fisáli": "following behind",
"fiski": "water cannon",
"fisóttu": "at the back",
"fissá": "at the back",
"fissáb": "man of highly pious who do pray very strong every night",
"fissán": "generation",
"fit": "liver",
"fitaler": "giving trouble",
"fítana": "quarrel/disagreement between/anger between",
"fith": "back",
"fíth": "fit",
"fithdhe": "leave behind",
"fith-haim": "ruler",
"fítorot": "character of a person",
"fitta": "of great anger, silent",
"fiyá": "coin denominations in Burma",
"focú": "animal",
"fódana": "balloon",
"fohór": "proudness",
"foijjonto": "up to",
"foisá": "coins",
"foissá": "ring for water pot",
"foittou": "about to fall down",
"foittowán": "each one",
"fójor": "early morning",
"fókkor": "cheater",
"fókkorai": "cheating",
"fón": "subject/profession",
"foñíssé": "reached/arrived",
"fonná": "learning, literature",
"foñsa": "being of bad breath",
"foñt": "path",
"fooil": "short wooden piece for throwing at",
"foóila": "primary/first/beginning",
"foóir": "pond",
"fóoir": "feather/religious person",
"fool": "mad",
"foola": "mad man",
"foon": "obtain",
"foona": "ripen",
"fóoñc": "weak/not tight/loose",
"fóoñçá": "ground digging tool used by farmer",
"foóñsa": "make [it/him/them/her] reach/Also foñósa",
"fóoñtá": "not brittle/not elastic/soft/damaged",
"foór": "light",
"foóráiza-": "forget",
"fóourán": "immediately",
"for": "read",
"forá": "teach",
"foráleká": "literate",
"foran": "live",
"fórforár": "trying or struggling to go out",
"forí": "female jinn",
"foribá": "may slip",
"foríba": "will read",
"forínna fuain": "student",
"forir fílim": "angle film",
"fórmadar": "obedient",
"foró": "read",
"forók": "differ",
"fórokot": "wider",
"fórom": "form",
"foróon": "reading",
"fóroz": "compulsory",
"forr": "alien/non-relatives",
"fosím": "west",
"fosón": "he likes it",
"fossáti": "roof beyond the outermost wall",
"fot": "design",
"fotá": "making independent",
"foth": "tin can",
"fóth": "hole",
"fothú": "picture",
"fotta": "downfall",
"fottí": "every",
"fottían": "each one",
"fottízon": "every one",
"fóukir": "poor",
"fouñi": "rod used to push the boat",
"fóuni": "comb",
"fouri": "angle/head turbans",
"fóus": "army",
"fousím": "west",
"fóut": "passed away/died",
"fózor": "morning",
"fua": "baby/child",
"fuaboc": "child age",
"fúah": "make dry",
"fuain": "children",
"fúainna": "in the same level",
"fúan": "is level",
"fúañ": "larva/grub",
"fúaná": "dry",
"fúan-fúan": "same-same",
"fuañ-mas": "a kind of fish",
"fúañná": "dry/Also fúana",
"fúañti": "together",
"fucák": "dress",
"fuchorá": "of bad luck/lazy guy",
"fúdh": "mud",
"fuic": "abscess/Also fuñic",
"fúic": "needle/Also fúñic",
"fuiccón": "give the child to somebody to look after",
"fúiccoón": "pursue/Also fúñiccoón",
"fuk": "insect",
"fúk": "clip",
"fukkul": "eastern part",
"ful": "hole",
"fúl": "flower",
"fúla": "blow balloon",
"fulat": "steel",
"fúl-deikké": "girl grown-up or first menstruation",
"fúlsuañ": "straight hollow bamboo pipe",
"fun": "body part through which stool passes",
"fún": "listen",
"fúna": "hearing",
"fúñca": "quick breathing/difficult breathing",
"fúñcani": "of difficult breathing",
"fuñdor-zurí": "anal groove",
"fuñic": "bad blood",
"fúñic": "needle",
"fuñic-horá": "bad luck person",
"fúnta": "of heard before from others",
"fúoon": "dry up",
"fur": "burn/full",
"fura": "fill up",
"furan": "old",
"furana": "of old",
"furani": "of burning",
"furíkka": "insurgent",
"furo": "commanding to burn",
"fúroóin": "broom",
"furoon": "oven for making bread",
"fúrossuañ": "long bamboo pipe to thow arrow at bird to catch",
"fut": "son",
"fúta": "thread",
"futh": "additive",
"futhka": "very fatty",
"fuththóin": "glue type material used for water leaking control in boats /sealing material in wood join",
"futíla": "toy",
"futta": "cemented for strong holding of bricks",
"futú": "toddler",
"futúinna": "calling son",
"futuli": "eye ball",
"futúni": "daughter",
"fúu": "blowing air into",
"fúudon": "act of blowing air into",
"fúuinná": "father’s sister",
"fuúl": "full/no more space",
"fúuñ": "smell",
"fúuní-guilla": "a kind of fish",
"fúwu": "father’s sister",
"fwa": "baby",
"g": "the 7th character in the Rohingya Alphabets",
"gaa": "body",
"gáa": "scars",
"gaá": "sing",
"gaa’lamar": "having frequent loose motion",
"gaadú": "take shower",
"gaadúo": "[you] take bath",
"gaafira": "not feeling good in the body/feeling tired",
"gaafurer": "burning sensation in the body",
"gaág": "customer",
"gaagíñar": "attaching body on others usually father or mother",
"gaahoñrar": "pain in the body",
"gaái": "[I] sing",
"gaáido": "let [you] sing",
"gaáifare": "can sing/able to sing",
"gaáifél": "complete singing",
"gaáiféla": "have sung",
"gáail": "injured",
"gaák": "customer",
"gaála": "bowl",
"gaálu": "talkative",
"gaám": "glue/germ",
"gaamatá": "body to head/head to toe",
"gaán": "gun",
"gaár": "singing",
"gaárdh": "guard",
"gaáza": "fit to sing/suitable to sing",
"gaazzor": "fever",
"gabi": "unseen/from hidden",
"gada": "dust/dust layer/muddy layer",
"gadá": "male ass",
"gadi": "mattress",
"gadí": "female ass",
"gágguá": "dog barking",
"gaggula": "a kind of fruit",
"gai": "female cow",
"gaib": "disappeared/absent/stayed away",
"gaib’ot": "in absent",
"gaibá": "[you will] surely sing",
"gaibi": "from unseen/from unknown",
"gaif": "disappeared/absent/stayed away",
"gail": "scolding",
"gáil": "injured/Also gáail",
"gaillé": "squeezed out",
"gáimmé": "has sweated",
"gain": "become professional in singing",
"gaiñya": "person from rulral areas or villages",
"gair-": "prefix used to get negative meaning/not close or relative",
"gairázir": "absent",
"gairot": "feeling of protesting against those who mentally disturbed him",
"gairoti": "of feeling of protesting against those who mentally disturbed him",
"gáiththa": "person who help cross the river by boat or so with charge",
"gáiththéna": "insulting by pushing out of home or place",
"gaiyé": "repeating to others what was discussed or heard",
"gal": "mouth/remove water or liquid from a mixture",
"galá": "breathing parts of a fish",
"gala,": "removing water or liquid from a mixture",
"galaide": "reject/let stay behind/do not count",
"gale": "[he/she/they] remove water or liquid from a mixture",
"galén": "gallon",
"gali": "scolding;squeezing out/[I] remove water or liquid from a mixture",
"galiféloon": "squeezing out",
"galo": "[you] remove water or liquid from a mixture",
"galorsáinna": "cheek",
"galorsira": "opening of the mouth",
"galsaba": "jaw bone",
"galú": "talkative",
"galwa": "talkative",
"gám": "sweat",
"gamá": "bulky/heavy/large/fatty",
"gáma": "of being sweating",
"game": "[he/she/they] use to sweat",
"gámoon": "of being sweating",
"gan": "music",
"gana": "song",
"gáñc": "animal food/avoiding work so others do it",
"gañçá": "concentrated when in liquid form",
"gáñça": "door of the outside fence",
"gáñçer": "stirring",
"gáñcgorer": "avoid doing alone as others are not doing it",
"gáñçido": "[you] make stirring",
"gáñço": "[you] stirr",
"gáñçoon": "stirring",
"gandá": "dirty",
"gañdí": "hardened part of the animal neck due to pulling load",
"gang": "rural area/village area",
"gáni": "oil squeezing device powered by cow",
"gañittá": "with chained",
"gañr": "burry",
"gañrá": "water hole in the ground",
"gañraider": "burring",
"gañraido": "[you] burry",
"gañre": "[he/she/they] bury",
"gañri": "[I] burry",
"gañride": "[you] burry for me",
"gañrider": "burring",
"gañridi": "[I] burry",
"gañridir": "[I am] burrying/planting",
"gañrido": "[you] burry",
"gañriták": "stay seated without moving",
"gañro": "[you] burry",
"gañroon": "burrying",
"gansá": "veil",
"gansár": "of veil",
"gañt": "hole in the ground/chain together",
"gañtá": "chaining together",
"gañtér": "[you] chain things together",
"gáñth": "jetty/port",
"gáñthi": "military/police camp",
"gañtír": "[I] am chaining together",
"gañtó": "punch/tie in chain",
"garí": "car",
"garír": "of car",
"garít": "in the car",
"garuli": "snake charmer",
"gas": "wood/tree",
"gás": "game turn",
"gasá": "the dancing person in curing diseases",
"gas-kuiththani": "woodpecker",
"gasór": "made of wood/wooden",
"gaza": "narcotic items",
"gazi": "war winner",
"geés": "gas",
"gel": "gone",
"gelén": "gallon container",
"gelgói": "has/have gone",
"géñçi": "neck-behind",
"ges": "arrow or sharp item used to penetrate into",
"giár": "gear",
"giçílla": "something hard forming just below skin",
"giddá": "wooden piece used for fire",
"giga": "billion",
"gíi": "ghee",
"gil": "support platform for vegetable trees/swallow",
"gilo": "swallow",
"giloon": "swallowing",
"gilóth": "solid formation under skin",
"gilthí": "white copper",
"gín": "feeling to avoid accepting from those harmed him before",
"giñyo": "grain wheat",
"girá": "joint",
"gíra": "fence",
"girgirar": "vibrating",
"gírifeló": "close them around",
"girós": "owner",
"gisgisi": "enough done",
"git": "song",
"gita": "musical instrument",
"giya": "that, something that",
"giyé": "went",
"giyégói": "gone",
"gláss": "glass",
"goçbór": "disturbance",
"góce": "he rubs",
"gócgocár": "making a busy crowd",
"gócgoiccá": "rough",
"góco": "rub it",
"goda": "wood log",
"godal": "animals in the pond of a shrine",
"godalmas": "a kind of fish",
"goddana": "nape of the neck/back of the neck",
"godgoçar": "boiling",
"Godom Buddá": "Buddha",
"goff": "talking circle",
"goffár": "Allah’s name",
"goffúçu": "too much talker",
"gofmar": "talking tales",
"góicca": "mustard seeds",
"goir": "sea wave",
"gola": "neck",
"golgola": "water wash into the mouth",
"gólo": "enter",
"golti": "mistakes/guilt/wrong doing",
"gom": "good",
"gomgorí": "well/nicely",
"goñ": "rural area",
"gona": "counting",
"gondá": "dirty",
"góndhi": "Kate",
"goner": "counting",
"goni": "rich",
"goniyotor": "properties obtained at the end of a war",
"gonná": "eclipse",
"góno": "thick",
"gono": "count",
"gonoya": "fortune teller",
"gonzi": "under wear",
"goó": "[you] sing",
"goóná": "requesting to sing/please sing",
"goóulí": "goal person",
"goóur": "labor, worker",
"gop": "talking circle",
"gór": "home",
"gor": "do/perform/tiny water channel around house to release water",
"gora": "rejected grain of rice",
"góra": "water pot",
"gorá": "let him do/make him/her/they do",
"gorác": "a handful amount of food ready to eat or swallow",
"gorba": "guest/visitor",
"gorbór": "baby creation in the mother worm",
"gorgoijja": "can read without any difficulty",
"gorgora": "of rolling",
"gorgorai": "without difficulty",
"gorgorar": "rolling",
"górgorár": "throat sounding just before dying",
"gorila": "gorilla",
"gorír": "[I am] doing",
"gorís": "make sure [you] do it",
"gorma-gormi": "while still new, clear, known or hot",
"goró": "do",
"gorom": "hot",
"gorom-gorom": "while still new, clear, known or hot",
"gorós": "[you] usually do/selfish",
"gorr": "small channel for water",
"gos": "length measurement ruler/accept",
"gosér": "accepting",
"gosó": "let [you] accept",
"góuçi": "watch",
"gouli": "sneak",
"goulóic": "glass",
"gouppwa": "talker",
"gourib": "poor",
"gouru": "cow",
"gouzi": "water pot",
"gouzila": "godzilla",
"goyal": "deer",
"goyoum": "guava",
"goza": "biscuit type stick",
"gozgozar": "scolding due to mistakes done",
"gozi": "large water container made of mud",
"gozila": "godzilla",
"gozól": "singing competition",
"gozzónggas": "a kind of tree",
"grem": "weight unit gram",
"gubbar": "dark cold windy whether",
"gúc": "illegal offer to achieve something",
"gúca": "fist",
"guccá": "anger",
"guccí": "family tree",
"guda": "bent shaped/large sized",
"gudá": "water closed dam",
"gudguti": "back biting person",
"gudh- guiththa- gas": "famous very hard wood",
"gúggui": "a warning bird for mishaps",
"guillámas": "fish",
"gúiththah": "tree bark left over",
"gul": "round",
"gula": "fruit",
"gulá": "round piece or small piece used to be thrown at",
"gúla": "water circle in the river",
"gulaffúl": "a kind of flower",
"gulail": "tool of rubber strip and V-shaped wood to catch birds",
"gulam": "slave",
"gulguilla": "rounded",
"guli": "bullet",
"gulí": "tablet",
"gúm": "sleepiness",
"gumguimma": "rough sea",
"gumgumar": "large sea sounding/distant sounding/inner sounding",
"gumrá": "away from religious duty",
"gúmza": "sleep",
"gun": "of beneficial",
"gún": "ear waste",
"guna": "bare iron ware",
"guná": "sin",
"gúna": "farm land between mountains",
"guñar": "wicked",
"gundha": "bad people on the street",
"gundhá": "dried cow waste",
"gunguni": "head itching insect",
"gunn": "black magic",
"gúno": "fry",
"gúñra": "horse",
"gunsí": "rope tied in the waist",
"gura": "small",
"gurá": "horse power",
"gúra": "horse",
"gurbó": "fetus in the mother womb",
"gurgurar": "sounding due to fast moving round",
"guri": "smaller",
"gúri": "cover",
"gúro": "to cover/to tight cap",
"gúroni": "cover/cap",
"gúroon": "circulating",
"gusá": "bunch of rice trees",
"gusól": "shower",
"guss": "calf/rice tree bundle",
"gusso": "meat",
"gutá,": "poke",
"gútum": "cotton",
"guu": "stool",
"gúu": "stool",
"guyágaya": "in detail",
"guzaiyer": "put it in the corner",
"guzorer": "shouting",
"guzorigiyói": "in passed time",
"guzorigiyóide": "in the past",
"guzoro": "shout",
"há": "eat",
"háa": "act of eating",
"háalot": "condition/situation",
"háandani": "of royal family/of high family/of good family",
"háani": "willingness of eating",
"háañla": "bother-in-law",
"Haarún": "Prophet Haroon",
"háas": "special person/special",
"háaza": "a kind of eatable made of flour and milk",
"háazar": "good in eating",
"habil": "smart",
"hábizábi": "abnormal acts",
"hábo": "feed",
"háboon": "feeding",
"habor": "cloth --Bengali",
"habos": "paper",
"haça": "cut",
"háça": "of cutting off relation e.g suk háça",
"háçail": "bed room for newly married couple",
"haçasíra": "cutting",
"háddwa": "rough",
"háfes": "person who memorized the holy Quran",
"háfezi": "of good memorizing power",
"háff": "snake",
"hafúr": "toilet refresher",
"háic": "to eat another time",
"háiccah": "seeds of the peas",
"háil": "green",
"hailla": "tomorrow",
"háilla": "empty",
"haillazira": "a kind of spice used in the curry",
"haim": "strip of bamboo",
"háin": "turn/his turn",
"haindá": "steep river side",
"háith": "sixty",
"haiththa": "push to fit more items in a container/ready cut",
"háiththa": "carrying chair",
"haiththai haiththai": "pressing and pressing",
"háitou": "to eat",
"háiye": "have eaten",
"hák": "vegetable",
"hák hoñsu": "all types of vegetables",
"háki": "thick cotton clothing",
"hákikot": "the truth/reality/actual",
"hákim": "knowledgeable man/medical expert using natural herbs",
"hakku": "cousin brother",
"hál": "river",
"hala": "black",
"hála": "aunty/mother-in-law",
"halaáitta": "old black straws re-used for the roof of bamboo type house",
"halafainná": "KuKu Island of Burma",
"hálaga": "top end of the river",
"hálak": "killed",
"hálas": "freed/completed/done",
"hálasi": "serviceman in a ship",
"hali": "ink",
"háli": "empty",
"háli át": "empty handed",
"halia": "tomorrow",
"háligór": "empty house",
"haliisa": "black shrimp",
"hálika": "alone/Also háliga",
"hálim": "dish prepared in Ramadan for breakfast",
"halin": "carpet",
"ham": "work/job",
"hama": "earn",
"hámaká": "surely",
"hámal": "a pile/putting together on top of each other",
"hamani": "earning",
"hámbah": "pole",
"Hámboli": "a religious sect out of four main sects",
"hámicá": "always",
"hámil": "pregnant",
"hamis": "shirt",
"hammwa": "workaholic",
"hamrá": "room",
"hámuc": "shut up without voice",
"han": "ear",
"hana": "blind",
"hána": "food",
"háñara": "a wooden carrying for carrying dead body",
"háñba": "showing power against his opponents",
"hañc": "cough",
"háñc": "duck",
"háñçah": "carry",
"hañcér": "coughing",
"hañçí": "mud wall for protecting water",
"háñcih": "female sheep",
"háñcoh": "smile",
"hañda": "crying",
"hañdá": "shoulder",
"hañder": "crying",
"hándha": "piece /large piece",
"háñdhdhi": "bone",
"hañdo": "crying or weeping",
"hañdura": "crying male baby or person",
"hañduri": "crying female baby or person",
"hanfúl": "earring",
"hanfúra": "ear punching",
"hañgula": "a kind of fruit",
"hánhán": "into pieces",
"hani": "a piece of cloth for kitchen",
"hañi": "foot step/mixture of floor and water",
"hanifáça": "a piece of cloth for kitchen",
"Hánifí": "a religious sect out of main four sects",
"hañijja": "rice bowl",
"háñis": "woman period/small extension attached to house",
"háñissúratá": "beautiful sea side place south of Maundaw township",
"hañit": "lay at its side",
"háñli": "sister-in-law",
"hañn": "to cry",
"hañna": "hole/blind",
"hánnaggáne": "automatically/without any reason",
"hánnak": "for no apparent reason",
"háñr": "necklace",
"háñri": "small yogurt pot",
"háñs": "block/die block",
"hañsa": "edge",
"háñsa": "truth",
"hansaba": "sideburns/side-whiskers",
"hañsari": "court",
"hañsi": "circular cutting knife for rice field cutting",
"háñsi": "a kind of basket",
"háñsur": "swim",
"háñsuro": "do swim",
"háñsuroon": "swimming",
"háñt": "seven",
"háñtaroh": "seventeen",
"háñththa": "ladder",
"háñtiar": "tools",
"háñtih": "elephant",
"háñttwah": "seven quantity",
"háñtura": "hammer",
"hañzi": "court head/sour soap made of lemon",
"háñzigiyói": "have lost",
"háñzir": "present/available",
"háñzo": "getting prepare for going to ceremony or so",
"háñzwá-añdá": "people who are blind at day time but can see at night",
"hár": "eating",
"hárah": "quickly/urgent",
"hárai": "to lose",
"háraiféla": "get lost",
"háraifélaiyé": "has/have lost",
"háram": "illegal acts or earnings",
"hárami": "wicked man/man of no sympathy",
"hárat": "in loss",
"harbar": "business",
"harbari": "of business oriented",
"haré": "whom",
"harigor": "expert",
"haríloiyé": "taken forcefully",
"harinda": "clearly/harinda gorí foró",
"háriták": "keep yourself safe",
"hárr": "every one/all",
"háru": "bangle",
"harúl": "young cow",
"harúlla": "being young cow",
"has": "work/job : Bangáli word",
"hásenah": "please eat-used for closed friends",
"hasharbar": "business",
"Hasím-Ráza": "famous Rohingya gorilla fighter and head of the Mujahid party",
"hásin": "beautiful",
"hásiyót": "position/character/richness",
"hát": "hand",
"háta": "mistakes/wrong doing/guilty",
"hatalmas": "a kind of fish",
"hatar": "queue/line",
"háteh": "by hand",
"háthi": "confirmed",
"haththól": "jack fruit",
"haththuc": "a kind of gun/a kind of vegetable",
"hátiar": "arm",
"hattú": "with who",
"háva": "air",
"házimma": "person who cut extra skin round the penis",
"házinná": "after noon/evening",
"héçe": "there/Also éçe",
"héckarar": "neglecting",
"hékarot": "looking down",
"hékmot": "wisdom/knowledge",
"hélikopthar": "helicopter",
"hémayot": "giving value",
"héñça": "virginal",
"hér": "slight space between two partition",
"hímmot": "dare",
"híndi": "of India",
"híndu": "people of hindu religion",
"híndustán": "country of India",
"hísab": "Account",
"híssa": "share",
"hóbis": "naughty [boy]",
"hobor": "tomb",
"hóbor": "news",
"hóborgwa": "newsman",
"hoborstán": "graveyard",
"hoc": "hard: water type",
"hoçé": "where",
"hocído": "tight it",
"hodda": "large wooden part",
"hoddá": "cup",
"hodú": "curry fruit",
"hofón": "funeral clothing for the dead",
"hoicca": "youth",
"hoijja": "quarrel",
"hoiñçá": "long vegetable fruit",
"hoitor": "pigeon",
"hókkol": "all/each one/every one",
"hókkot": "in truth position",
"hókum": "command",
"hol": "machine",
"hóla": "lower part of the water pot used for heating",
"hóldi": "remains of oily grains after oil extracted",
"hólibá": "tailor",
"hóloit": "yellow",
"holom": "pen",
"hom": "less",
"homa": "make less",
"hombol": "blanket",
"homer": "becoming less",
"homikká": "how many sides/how many [directions] how many [jobs]",
"hon": "who",
"hoñc": "sticky/hard",
"hóñc": "loose",
"hoñçonggya": "curled [hair]",
"hónda": "digging tool rod",
"hone": "who is",
"hoñíkka": "to where",
"hoñla": "orange",
"honnántu": "at where",
"hóñni": "comb",
"honnót": "at where",
"honnwá": "who is his? /who?",
"hoñoijja": "blacksmith",
"hoñól": "a kind of bird",
"hoñótté": "when",
"hoñóur": "mouth piece for cattle",
"hoñra": "a kind of fruit",
"hoñrahoñri": "quarrel",
"hóñrmas": "a kind of fish",
"hoñroi": "fried rice",
"hoñsi": "lemon",
"hoñsu": "a kind of vegetable",
"hoñsurboñ": "a kind of vegetable",
"hontí": "from where",
"hontú": "from where",
"hoñya": "a kind of fruit",
"hoó": "say",
"hóo": "eat",
"hoóná": "please say",
"hóoná": "please eat-to elderly and guest",
"hooñl": "very young fruit",
"hooñla": "orange",
"hóoñlá": "flower in the pond",
"hooñr": "bite",
"hoóñr": "little tent in the rice field",
"hoor": "cloth",
"hoór": "curse",
"hoou": "where is it",
"hoóuñr": "mouth cover for cow",
"hóour": "father-in-law",
"hóourí": "mother-in-law",
"hoppa": "crane",
"hoppi": "cabbage",
"hór": "liquid muddy",
"hórab": "bad",
"hórabi": "act of being bad",
"hóraf": "bad/bad character",
"hórafi": "being bad/bad activity",
"horáh": "young/not ripen",
"hórai": "make into liquid/painful sensation in urinary track",
"hóraide": "give me by making into liquid form",
"hóraiféla": "to be done into liquid form",
"hóraifélaiyé": "have done into liquid form",
"hóran": "tiredness",
"hórguc": "a kind of animal",
"horgwa": "crushed vegetable salad",
"hórhoçi": "a small window for the bed room",
"horhora": "yesterday’s cooked rice",
"horhorar": "chicken sounding in their feeding place",
"horí": "sea shell",
"hórigas": "a kind of famous hard tree",
"hórin": "deer",
"horittamas": "a kind of fish",
"horiya": "fry pan",
"hóro": "sour",
"horola": "a kind of bitter vegetable fruit",
"hórong": "wooden slipper",
"hóros": "expenses",
"horot": "saw for cutting wood",
"hórsa": "expenditure",
"hosára": "losses",
"hosóm": "swear",
"hosora": "dirty",
"hóssa": "expenses",
"hossób": "turtle",
"hóssor": "mid animal between ass and horse/mule",
"hossura": "sea bed shells/rough surfaces",
"hosúri": "guilty",
"hot": "brown color add on to pan leave",
"hót": "book mark",
"hotá": "speak/speech",
"hóthol": "hotel/Also hóthel",
"hotó": "how much",
"hótom": "the end",
"hótómgoró": "finish it",
"hotomikká": "how many ways",
"hótora": "danger",
"hotti": "container used in the toilet",
"hotúkkún": "how much time/how long",
"houli": "young flower",
"hóuñi": "popcorn",
"houñra": "hexagonal  shaped fruit",
"hóuñrí": "pumpkin",
"hóuroi": "mustard seeds",
"hóuróiye": "lost the way",
"houróuli": "small stony grains",
"húc": "happiness",
"húci": "happy",
"húde": "nize/alone/by only alone",
"hújum": "crowded",
"húk": "hook",
"húkka": "water passed pipe smoking device",
"hún": "blood",
"húñc": "consciousness",
"húñciyar": "alert",
"húnor": "professional [job]",
"húrr": "ladies rewarded in the heaven",
"húrum": "dried rice",
"húrut-húrut": "dropping in large quantity",
"húzur": "high religious scholar",
"i": "a vowel character with soft sound",
"í": "a vowel character with hard sound",
"ibá": "this one/she: near by",
"íba": "that one/she: far away",
"ibálla": "for her: near by",
"íballa": "for her: far away",
"ibállói": "with her: near by",
"íballói": "with her: far away",
"ibár": "for her: near by",
"íbar": "for her: far away",
"ibáttu": "is her: near by",
"íbattú": "is her: far away",
"ibirot": "getting lessons",
"ibiroti": "of getting lessons",
"Iblís": "Satan",
"Ibrahím": "Prophet Abraham",
"ic": "plowing tools",
"icára": "traffic light",
"icárate": "[talking] with sign",
"Idd": "Eid holiday day",
"idgáñ": "place of Eid prayer",
"ídhiyéth": "Idiot, stupid",
"idí": "Eid day gifts",
"Idiris": "common Muslim name in Asia",
"iftar": "breakfas",
"iín": "this one",
"íin": "that one",
"iínór": "for these",
"íinór": "for those",
"ijat": "freedom",
"ikká": "this way",
"íkka": "that way",
"íkkai íkkai": "crying in deep sorrow",
"ikkár": "belong to this /from here",
"íkkar": "belong to that",
"ikkinígorí": "for a little",
"ikkinísa": "little",
"Íkra": "the first Sura revealed",
"Ikwethar": "Equator",
"Ila": "god",
"ilebile": "IA & BA degree",
"ilímmas": "a kind tasty fish",
"Iliyas": "the prophet Eliyas",
"imam": "guider for prayer",
"iman": "faith",
"imandár": "faithful",
"imandari": "in faith",
"imane-amane": "with full trust",
"imanwala": "people with faith",
"imouti": "of leading the prayer",
"ínca": "looking down others",
"Incá Allah": "by God will",
"incúaréns": "insurance",
"Indía": "India country",
"Indíde": "give/enter/push in this way",
"indila": "like this",
"Indunisía": "Indonesia",
"Ingilíc": "English",
"Ingrazi": "English language",
"inkar": "deny",
"Ínlé lake": "famous lake in Burma",
"Ínná Lillá": "to God return",
"inquiri": "inquiry",
"insáb": "justice",
"insábi": "of justice",
"insáf": "justice",
"insán": "human being",
"intán": "exam",
"intí": "in this channel",
"ínti": "in that channel",
"intú": "in this way",
"íntu": "in that way",
"Inus": "common Rohingya people’s name",
"Iran": "Iran country",
"Iraq": "Iraq country",
"írr-irr": "flowing water little by little",
"isa-árk": "a kind of vegetable",
"ísab": "account/mathematic",
"isamas": "shrimp",
"Isáq": "common Rohingya people’s name",
"isar": "no rule/no discipline",
"isarbisar": "no rule/no discipline",
"Ismail": "Prophet Ishmael",
"issá": "wishes",
"issar": "breakfast",
"issari": "breakfast food",
"istiri": "ironing",
"Isúb": "the prophet Yousub",
"Itali": "Italy country",
"ítantú": "bed head site",
"itará": "they: near by",
"ítara": "they: far away",
"itarallá": "for they: near by",
"ítarallá": "for they: far away",
"itarattú": "are they: near by",
"ítarattú": "are they: far away",
"ite": "he: near by",
"íte": "he: far away",
"ittar": "now/right now",
"íya de": "participate in collective work",
"íyal": "noticing",
"iyán": "this one",
"íyan": "that one",
"iyánot": "in here",
"íyanot": "at there",
"iyántú": "in this place/in this point",
"íyantú": "in that place/in that point",
"izab": "engagement for marriage",
"ízara": "man without fertility",
"izubizu": "deep forest",
"izzoitta": "of good dignity",
"izzot": "dignity",
"izzotdar": "people of having dignity",
"izzoti": "of good behaviors",
"izzotwala": "people of having dignity",
"jaám": "jam",
"jaba": "cover the leak or hole with mud of something",
"Jaber": "common Rohingya people name",
"jaboçai": "holding with both hands/holding firmly/holding with force",
"jadu": "magic",
"jadugor": "magician",
"jadugori": "work of magician",
"Jafan": "people of Japan",
"Jafani": "of Japan/made in Japan",
"Jafani-mas": "a kind of fish",
"Jafór": "common Rohingya people name",
"jafórani": "a kind of health tablet",
"jagir": "student staying with a family in exchange of some work or without any",
"jáhan": "universe",
"Jáhangir": "common Rohingya people name",
"jáhannam": "hell",
"jali": "fake/cotton belt used by old or ancient woman",
"jam": "busy traffic",
"jamá": "big/large/well known/famous e.g. Jamá mousóit",
"jáma": "crowded",
"Jamal": "common Rohingya people names",
"Jamarat": "evil’s points that pilgrims throw stones",
"jamgula": "a kind of fruit",
"jámila": "crowded",
"jan": "life",
"jañás": "ship",
"jáñça": "broom, scolding",
"jáñçu": "broom",
"jandár": "of life",
"jándha": "flag or sign used in strike/or in success of independence",
"jandi": "by life",
"jane": "with life",
"janfooran": "love with life",
"jáñss": "cymbals",
"januar": "animal/Also janwar",
"Januari": "January month",
"Japan": "Japan country",
"japani-mas": "a kind of fish",
"jasus": "spy",
"játhdhuañ": "a group of similar trees grown in a squeezed place",
"játhka": "jump over/jump toward",
"Java": "Java people of Indonesia",
"Jawad": "common Rohingya people name",
"jeçá": "father’s brother",
"jeçí": "wife of father’s brother",
"jeél": "jelly",
"jéth": "Jet engine or plane",
"jethí": "jetty",
"Jéw": "Jew people",
"Jibrail": "Angle Gabriel who brings messages from Allah",
"Jiddá": "port city 80km west of Makkah",
"jii": "answering call",
"jiíp": "jeep",
"jillot": "suffering/painful time/sorrowful situation",
"jilloti": "suffering/painful time/sorrowful situation",
"jílmil-jílmil": "colorful sparking",
"jin": "jinn",
"jinda": "alive",
"jindaabad": "speaking good of",
"jinís": "thing",
"jinnat": "Jins",
"joc": "relax/enjoy/benefiting",
"jog": "jug",
"joj": "judge/enjoying wealth",
"jojba": "courage",
"jojbati": "bravery",
"joldi": "quickly",
"jollat": "person who is assigned to kill persons",
"jolsa": "fun raising ceremony for religious schools such as madarasa",
"jolti": "quickly",
"joma": "group/collect/save/bring together",
"jomaát": "group",
"jonaza": "prayer for a dead person",
"jonggol": "forest",
"jonggoli": "who inhabit in forest",
"jónjath": "complication",
"jonnot": "heaven",
"jonnoti": "person who have shown enough good deeds to say he will go to heaven",
"jontís": "yellow disease",
"joribana": "fine",
"joth": "mark usually black due to continuous rubbing",
"jóthfóth": "immediately/urgently/within no time",
"jóthka": "a jolt",
"joththúáñ": "swelling due to burn or injury/pimple like",
"juab": "answer",
"juan": "youthful",
"juani": "youth",
"juari": "corn",
"juc": "bad feeling against other/inner force of a person",
"juc’hái": "swallowing bad feeling against other",
"juda": "separated",
"juddó": "war",
"julus": "strike",
"Jumá": "Friday prayer",
"júmjúm": "raining sound when heavy",
"Jun": "Month of June",
"júñça": "bun/chignon/hair ball tied at back of the head;wig",
"juniar": "junior",
"júppuçi": "small and unclean home",
"jurúm": "oppressed/punished",
"jus": "force/power/encouragement",
"júth": "lie",
"júth míl": "jute mill",
"júthabás": "liar",
"júthah": "a lie",
"juús": "juice",
"juwab": "answer",
"juwan": "adult",
"juwani": "of adult age",
"juwari": "corn",
"Kaabá": "House of Allah God in Makkah",
"kaamiab": "success",
"kaamiabi": "of success",
"kaáni": "tales/history",
"kaanun": "law/rules",
"kaár": "car",
"kaárdh": "card",
"kaárén": "current",
"kaássáli": "drought/famine",
"kaayá": "exercise: Burmese language",
"kabár": "cover/protect/siding/hiding",
"kabeliyot": "smartness/his ability",
"kabeliyoti": "of smartness",
"kabos": "paper: Bengali usages",
"kafér": "non-believer",
"kafí": "more than enough/too many",
"kafyú": "curfew",
"kaháni": "tales",
"kalam": "saying. Arabic word",
"kalár": "color",
"kalin": "carpet. see also Halin",
"kalkuleithar": "calculator",
"kalma": "blue coloring for white cloth",
"kamal": "common Rohingya people name",
"kamis": "shirt",
"kamrá": "room",
"kani": "land measurement unit",
"kap": "cup",
"Karaci": "second city of Pakistan",
"karathé": "Karate",
"karbun": "carbon",
"karhána": "factory",
"kari": "people who memorized Quran by heart",
"karthún": "cartoon",
"Kasím": "common name of Rohingya people",
"kavár": "cover",
"kazi": "judge",
"kebar": "door",
"kebel": "cable",
"keéc": "cash",
"keém": "camp",
"keén": "how",
"keén óiye": "what’s wrong",
"keénó": "how is",
"kefáya": "enough",
"kéil": "play/trick",
"keis": "court case",
"keíttóu": "for what",
"kek": "cake",
"kela": "banana",
"kelabáza": "a kind food prepared with flour and banana",
"kélah": "game",
"kélaná": "toys",
"kelar-boóuli": "banana tree inner part used in curry",
"kelar-sára": "group of bananas from banana tree",
"kelar-túr": "banana flower",
"kélkelái": "in strong argument/in strong opposed",
"kéloh": "play",
"kélouna": "toy",
"kéma": "let stop",
"kémer": "about to stop",
"kemikél": "chemical",
"kémota": "ability",
"kempás": "advertising/mouth to mouth advertising",
"kemra": "camera",
"kena": "revenge",
"keñc": "body hair",
"keñça": "nail like thing/thorn/fish bone",
"keñçi": "remainder/hardliner/hard to deal person",
"kenggóri": "how",
"keñiccá": "hairy",
"keñil": "waist",
"kenkenar": "pursuing/insisting/strongly willing",
"kens": "tighten",
"keñsa": "green/raw/green things/not ripen",
"kéñsani": "body squeezing due to aliment",
"kensar": "cancer",
"kéñsar": "body squeezing due to aliment",
"kensél": "cancel",
"keñsi": "scissors/Also kesi",
"kéñsi": "[I/we] hold tight",
"keñsimesi": "big noise of crowd",
"kéñso": "do tighten",
"kep": "cap of the gun",
"kepásiti": "capacity",
"képpa": "helper of intelligent",
"kepthin": "captain",
"kera": "a kind of bird",
"keráat": "Quran verses",
"Keraci": "Karachi city of Pakistan",
"keráh": "a kind of bird",
"Kerala": "people of India from Kerala State",
"keramot": "divine sign usually rewarded to Allah’s messengers",
"keramoti": "of divine sign",
"kerani": "officer’s helper",
"keransin": "kerosene",
"kerék": "crack people",
"kereya": "rent",
"keri": "people who carry goods on foots",
"keriya": "rent",
"kérr": "grass",
"keséth": "cassette",
"kesi": "scissors",
"kesor": "stool",
"kessú": "something",
"kesswa": "worm",
"ketá": "comforter",
"ketáfuri": "scolding",
"kétalog": "catalog",
"kéti": "agricultural field",
"ketigori": "category",
"kétigori": "[I/we] do cultivation",
"kétigoro": "[you] do cultivation",
"ketóuri": "kettle",
"kettali": "roaring/shouting/making noise",
"kétteilla": "farmer",
"kétu": "itching sensation in some part of the body when stirred",
"ketur": "white residue formation in the eye",
"Kháled": "common Rohingya people name",
"ki": "what",
"kiá": "why",
"kíal": "thinking/thoughts",
"kiálla": "why/for what",
"Kíangdong": "a village far east of Taung Bazaar, Arakan",
"kiañr": "feeling sick and a sound of suffering repeating",
"kiáñra": "crab",
"kiár": "care",
"kias": "estimate",
"kiba": "of little here and there/eg. eating little or not = Kiba háiye kiba noó há",
"Kibala": "Muslims praying direction which is Makkah",
"kibouli": "how do",
"kíbourdh": "keyboard",
"kíccoçimas": "a kind of fish usually very small types",
"kicti": "Ship of Prophet Noah",
"kigoittí": "what do you want to do",
"kihoódde": "what do you say",
"kiíttó": "for what/for what reason",
"kikkirar": "laugh too much",
"kil": "a push/a punch by hand",
"kíl": "wedge",
"kila": "two pivot pillars of rice milling lever",
"kilá": "kidney",
"kíla": "uncultivated",
"Kíladong": "a village south of Maungdaw township, Arakan",
"killa": "castle",
"kilmar": "punch",
"kilú": "kilo/1000s",
"kimot": "value",
"kimoti": "valuable",
"kin": "buy",
"kina": "of buying",
"kínafeçainna": "very thin person due to sickness or son",
"kinare": "near by",
"Kínisi": "a village in Taung bazaar area of Arakan State",
"kinkini": "elbow/hand joint between hand and arm",
"kinnaouñl": "little figure",
"kinnoul": "smallest finger",
"kino": "buy",
"kintu": "but",
"kiñyar": "acting of very hard pain",
"kiñyór": "small seed abundantly available underneath on road side",
"kír": "sticky liquid from tree",
"kíra": "a kind of fruit",
"kiris": "sword",
"kírkiçi": "windows",
"kirkirar": "teeth sound/controlled laughing usually by young ladies",
"kírkiri": "windows",
"kirmai": "grinded meat",
"kirmis": "dried grapes",
"kírr": "glue liquid from trees",
"kís": "plastic bag",
"kiskisar": "shouting",
"kiskisimas": "a kind of fish",
"kismis": "dry grapes",
"kismot": "fortune",
"kissá": "tale",
"kisso": "installment",
"kissú": "something",
"kisto": "installment",
"kitá": "referring Bangladeshi people who speak Bengali or Syilati",
"kíta": "nick name",
"kita kita": "paying or taking in successive numbers",
"kitab": "book",
"kitabi": "of holy book",
"kítabi": "of nick name",
"kiyá": "why",
"kíyal": "thinking",
"kiyam": "praying by standing",
"kiyamot": "last day of the world/judgment day in the hereafter",
"kiyas": "estimate. see also kias",
"kiyó": "somebody",
"kiyólla": "why",
"kiyór": "for somebody",
"kiyóttu": "from which",
"kláss": "class",
"kobira": "big",
"kobor": "grave.  see also hobor",
"koborstán": "graveyard. see also hoborstán",
"kobul": "accepted/said yes",
"Kodór": "Kodor night which is the night of decree and best of all nights",
"koffaara": "doing something good for the bad did",
"kofí": "coffee",
"kofón": "clothing of dead body for burial",
"kókswé": "noodle",
"koláar": "collar",
"koléij": "college",
"kolma": "faith saying",
"kombol": "blanket",
"komethí": "committee",
"kompani": "company",
"kompléin": "complain",
"komplíth": "complete",
"komputar": "computer",
"kondhul": "mark circle boundary to protect the place",
"kondícen": "condition",
"konekthar": "connector",
"konfárm": "confirm",
"konsél": "counsel",
"konthéinar": "container",
"konthróul": "control/Also kontróul",
"koóléij": "college",
"kopí": "copy",
"kosóm": "swearing",
"kosór": "prayer shortened as a privilege in journey",
"kosúri": "fault",
"koththor": "hard liner",
"kotól": "act of killing man",
"kotóli": "man killer",
"koum": "ethnic group",
"koumi": "ethnic",
"Kousor": "special river in the heaven",
"koza": "replacement for the missing or mistakes",
"kredíth": "credit",
"krein": "crane",
"krék krék": "sound",
"kreng’hal": "complexity",
"ku": "brother [in Burmese]",
"kua": "well",
"kuáccór": "deep black night",
"kúah": "snow falling",
"kuaic": "convenient",
"kuaicca": "in convenient",
"kuail": "coil",
"kual": "fore front",
"kuáñr": "people who make pots of mud",
"kuáñra": "a kind of fruit",
"kúantí": "absent",
"kubutha Injil": "“Kubuta” Engine",
"kúc": "foot step mark",
"kúcbo": "good smell, scent",
"kúci": "happy",
"kucíc": "trying",
"kuçum": "relatives",
"kuçúr": "cutting sound of mouse",
"kudal": "digging tool",
"kudorot": "miracle/power of Allah",
"kuiccól": "cane",
"kuijja": "pile of straw to feed cattle",
"kuilá": "dread bird",
"kúilla": "opened",
"kúillah": "brother middle",
"kuinna": "rice tip parts",
"kuissa": "nail",
"kuiththailoon": "pack for taking away",
"kúiththakúçi": "child fighting",
"kúiththar": "pecking pain",
"kukiss": "biscuit",
"kukkurúkuk": "chicken morning barking",
"kul": "river bank, side",
"kúl": "to open",
"kula": "rice sorting bamboo flat container/enough",
"kulá": "immigrant people in Burma/Also kolá or kollá",
"kúla": "is open",
"kúlasá": "openly",
"kuldar": "tar",
"kúldar": "wooden sheet",
"kúle": "open able",
"kuli": "washing mouth",
"kulí": "labor",
"kúli": "[I/we] open",
"kúlkuillá": "hollow",
"kullukmaijja": "closed all possible sides",
"kúllungkúla": "open and clear",
"kúlo": "[you] open",
"kúloni": "opener",
"kum": "deepest area in the river/investment",
"kumbáic": "compass",
"kumpani": "company",
"kun": "corner",
"kún": "blood",
"kuna": "related to corner",
"kuñça": "hook",
"kuñçá": "rice field block",
"kúñçah": "pole used to tie cattle",
"kuñçi": "plough tool",
"kúñdah": "cave",
"kundal": "locked jail",
"kúndar": "wooden sheet/Also kúldar",
"kundi kundi": "pieces to pieces",
"kúni": "murderer",
"kúñi": "a kind of skin disease",
"kuñiddá": "running little faster than walking",
"kuñir": "dog",
"kuñra": "rice outer dust used for animal/fold/get together",
"kuñraide": "collect/getting things together",
"kuñraiféla": "collect/get things together",
"kúñsa": "a kind of vegetable fruit",
"kuñsa": "sweep",
"kuñsani": "broom",
"kuñsar": "sweeping",
"kuñso": "sweeping",
"kúñt": "broken small pieces of rice used for animal",
"kunuçi": "people who speaks lies and true together",
"kup": "cutting as an attempt to murder",
"kúp": "a throw or a catch in fishing",
"kúr": "sharp knife usually used for shaving",
"kur": "to dig",
"kurá": "chicken/digging",
"kúrab": "rice stored for the year",
"kúrak": "food stocked for the season",
"kural": "a kind of fish",
"kuralmas": "a kind of fish",
"Kuran": "Muslims Holy Book",
"Kurani": "of Holy Book",
"Kurban": "Muslim Holiday of sacrifice",
"kurbani": "animal sacrifice on Muslim Holiday of sacrifice",
"Kúrdi": "Kurdi people in Iraq and Turkey",
"kuri": "twenty",
"kurí": "to dig",
"kuríde": "to dig",
"kuríféla": "to be dug",
"kúrih": "foot of cattle",
"kurkurar": "stirring",
"kúrkúrmater": "giving a sound of something revolving",
"kurma": "tasty preparation of rice and meat in ceremony",
"kúrma": "date",
"kuró": "dig",
"kuróil": "digging tool",
"kurosí": "chair",
"kúrr": "thin sharp knife",
"kurul": "10 millions",
"kuruta": "long shirt used by religious teacher",
"kúsar": "checking inside illegally",
"kusi": "wrestling",
"kusí": "wrestling",
"kusii": "cloth shrink folding to suit the dressing",
"kussá": "place between the two legs when seated",
"kussámossí": "kidding",
"kusúm": "private parts",
"kúsurkúsur": "whispering against others",
"kut": "loosening the soil using a farmer tool",
"kutakuitta": "tightly",
"kutdo": "loosen the soil",
"kuth": "coat",
"kuthá": "building/urinary track",
"kuthí": "1 billion",
"kúthmarer": "punching pain",
"kuththa": "box/cartoon box",
"kutta": "male dog",
"kutti": "female dog",
"kútu": "feeling funny when touching some parts of the body",
"kútulage": "feel inconvenient",
"kutuwal": "learned man",
"kuúñrí": "female chicken",
"kuwa": "well",
"kuwáccór": "deep black at night",
"kúwah": "morning snow rain",
"kuwaicca": "convenient",
"kuwal": "forehead",
"kuwálár": "pretending",
"kúwañ": "untie/unwrapped",
"kúwantí": "absent",
"kyamot": "judgment day in the hereafter",
"kyár": "caring",
"Kyat": "Burmese [Myanmar] currency",
"kyókkyó": "a kind home make eatable",
"Kyotto": "Kyauktaw township in Arakan State, Burma",
"laa": "come in Burmese language",
"laá": "plastic",
"laáith": "light",
"laánot": "curse",
"laár": "of plastic",
"laátríssa": "thunder lightening",
"laáv": "love",
"laávar": "lover",
"laázim": "a must",
"láboli": "due to/because of",
"lac": "casualty",
"lacá lacá": "soft",
"laçagáça": "of remaining and/or bad quality",
"laçí": "stick used for support or beating",
"láçung": "spinning top",
"ladhdhá": "of remaining and/or bad quality",
"ladhdhú": "small sweet ball",
"laff": "profit/benefit",
"laga": "fix/join",
"lage": "require",
"lager": "needing",
"lahouçi": "fire wood",
"lai": "basket",
"láiboli": "due to/because of",
"laiggé": "was needed",
"Lailotor kodór": "night of power/night of decreed/27th night of Ramadan",
"laimmé": "descended",
"lain": "line",
"láing": "water wave",
"laisén": "license",
"lak": "hundred thousands",
"lakkwámas": "a kind of fish",
"lal": "red",
"lali": "inner yellow part of egg",
"lalós": "greedy",
"lalsí": "greedy",
"lam": "go down",
"lamani": "frequent motion diseases",
"lamar": "bringing down",
"lamba": "tall, long, high",
"lambá": "long",
"lame": "usually come down/use to come down",
"lamer": "coming down",
"lami": "[let me/us] come down",
"lamo": "come down",
"lamoni": "ladder/staircase/something to take you down",
"laouça": "shit",
"lar": "move",
"lara": "moving",
"larái": "battle",
"lare": "used to move",
"larer": "kidding/moving",
"lari": "getting move",
"laro": "[get it] move",
"laroon": "moving",
"lasar": "very weak and sick",
"latí": "kick",
"lebas": "costumes",
"léça": "thin",
"leccái": "abandoning after saying shit",
"leccí": "shouting shit",
"leccwá": "sticky liquid leaking out of mouth",
"lefava": "envelop",
"léggi": "brave",
"lehá": "writing",
"lehader": "bumped to something",
"leham": "hooking the animal at nose",
"leikké": "written",
"leká": "writing",
"lekér": "writing",
"lekó": "write",
"lekóni": "writing instrument",
"lemun": "lemon",
"lendha": "naked",
"leng": "leg disabled",
"lenggyá": "leg disabled person",
"les": "tail",
"lesswa": "something with weak or less content/of less meat side",
"lesu": "small round red sweet fruit",
"leth": "eraser/lead of pencil",
"leth holom": "pencil",
"lethá": "slow mover/late comer/being late",
"leththwa": "spit",
"lif": "do plastering/leveling",
"lifo": "do plastering/leveling",
"lifoni": "plastering tool",
"lillirar": "playing naughty at far end of something high and shaky",
"lilliri": "small hanging piece",
"líorigula": "a kind of fruit",
"liyo": "making disgrace",
"lo": "take",
"lobbáik": "saying to Allah that I am here for you in the hajj time",
"loçí": "stick for support while walking",
"lockor": "army",
"log": "a kind of insect",
"loifarer": "can be taken",
"loilla isa": "a kind of small soft shrimp",
"loillar agat": "at very high top",
"loiththa faga": "ist the string together",
"loiththa mas": "fleshy fish tasty when dried",
"loiyé": "taken",
"loiyoum": "will take",
"lok": "a kind of insect",
"lokéth": "bracelet",
"lokkí": "lucky/luck",
"lókmari lo": "take by extending long hand",
"lolloijja": "soft and white clean",
"lombór": "number",
"lonchar": "launcher",
"lóndha": "bigger sized",
"londhi": "prostitute",
"londhón": "capital of Britain",
"lóng": "long heavy sampan",
"longgi": "sarong",
"loódhspíkar": "loud speaker",
"loók": "lock",
"loon arde doon": "give and take",
"loór": "light stream",
"loóri-gari": "truck",
"lor": "move aside",
"lorá": "being long and thin",
"lora": "cause to move/motion",
"lossí": "yogurt mixed with water and sweet",
"lota": "rope like string from tree",
"lothári": "lottery",
"lothka": "hang",
"lothkai": "by hanging",
"lothkaier": "keep hanging",
"lothkaieroni": "hanger",
"lothkaiféla,": "be hung",
"lothkairaikké": "kept hanging",
"lothkairak": "keep hanging",
"lothkairaké": "[he/she/they usually] keep hanging",
"lothkairakér": "[he/she/they] is keeping hanged",
"lothkairakí": "[I/we usually] keep hanging",
"lothkairakó": "[you all] keep it hanging",
"lothkani": "thing used for hanging",
"loti": "outside ear lower tip",
"lou": "blood",
"loufiyoni": "small animal",
"louwé": "with blood",
"louwór": "of blood",
"louwót": "in blood",
"lowa forer": "need to be taken",
"luaza": "should take it",
"luazar": "suitable to be fit",
"luça": "toilet use container",
"luçifiçá": "flat bread",
"ludh goijjé": "robbed",
"lufár": "bad person to kill or harm somebody",
"luiththé": "laid flat",
"lukkelani": "hide and seek game",
"lukkelani kéloon": "playing hide and seek game",
"luksan": "loss",
"lulluri": "hanging pieces/ear ring",
"luo": "hide",
"luoon": "hiding",
"lusalusa": "soft and soft",
"lussan": "loss",
"lutamuta": "soft in touch",
"luthi": "bread",
"luti": "eye ball",
"lutifuk": "very small insect",
"luúi": "fishing container made of bamboo",
"luúizal": "a kind of fishing net",
"luwa": "way of taking",
"luwá": "iron",
"luwair": "[I/we] are hiding/are hiding [something]",
"luwaiya": "hidden",
"luwaiyé": "hidden away",
"luwaiyer": "hide other",
"luwár": "of iron",
"luwaza": "acceptable",
"luwazar": "being acceptable",
"luwázaron": "iron based medicine",
"luwer": "[he/she/they] are hiding",
"luwo": "hide",
"luwoon": "hiding",
"maa": "mother",
"maamá": "children calling mother",
"maana": "free",
"maárk": "mark",
"maasum": "innocent",
"mác": "month",
"macthor": "master",
"madal gas": "tree of many pitch",
"madarasá": "religious teaching school",
"mádárbourd": "Computer motherboard",
"maf": "forgiveness",
"mafa": "weighing",
"mafíah": "group attacking others for one common thing",
"maga": "asking for financial help",
"magi": "prostitute",
"magoya": "beggar",
"mahér": "expert",
"maiccáya": "brown color",
"maijjá": "middle",
"maijjáli": "supervision",
"máillom": "small sour fruit",
"maiñya": "girl",
"maiththá mas": "a kind of fish",
"Makkah/Mokka": "Muslims holy city in Makkah Saudi Arabia",
"makkí": "miser",
"makóon": "stirring or mixing",
"mala": "coconut shell",
"malek": "owner",
"mali": "wooden pole at the center of ship",
"malíc": "asked to pardon him-Egyptian way",
"mamá": "mummy/mother",
"mami": "aunty",
"mamu": "uncle",
"mancárk": "a kind of vegetable leaves",
"mándara": "magic work",
"mandarazi": "black people in Burma in British time",
"mándi": "Arabic food",
"manggula": "meat solid at the back below waist/seat/bottom",
"máni-odhar": "money order",
"mano": "to be followed",
"manoc": "doing a wish",
"mánsi": "tattoo",
"manúic": "man, mankind",
"mar": "beat",
"mara": "beating",
"marailla": "large basket",
"marcel": "marshal law",
"marer": "beating",
"marhá": "mark on cargo luggage",
"maric árk": "a kind of leaves vegetable",
"marmá": "a kind of vegetable fruit",
"mas": "fish",
"masa": "support attached to the wall",
"masí": "fly",
"mat": "plain field",
"matá": "head",
"matar": "calling e.g somebody is calling hone matar",
"mater": "[he/she/they] are speaking",
"matoon": "speaking",
"mattul": "hammer",
"maya": "girl",
"mayafua": "baby girl/Also mialafua",
"maza": "central/nucleus/middle part of a tree or fruit",
"mazar": "tom of a religious person",
"mazé": "middle",
"mazí": "supervisor/head",
"mazór-ouñl": "middle finger",
"meçi": "ground",
"meçól": "medal",
"medhól": "medal",
"meéman": "guest",
"meérbani": "help",
"meiththa": "of mud, floor of mud and ground",
"meiththailla": "ground digging people",
"melá": "open",
"melaa": "feeding ceremony",
"melámar": "through it",
"melethéri": "military",
"mema": "enjoyable food",
"memori": "memory",
"mep": "map",
"mes": "table",
"Mey mác": "May month",
"miáh": "mix",
"miáiye": "mixed",
"miat": "validity/warranty/duration",
"miçá": "sweet",
"micín": "machine",
"miçíng miçíng": "twinkling twinkling",
"miís": "lady",
"miloon": "meeting",
"minara": "minaret of the mosque",
"misá": "lie",
"miskin": "very poor people",
"misúák": "misuark-natural wooden tooth brush rod",
"mitái": "sweet chocolate",
"miyóla": "cloud",
"miyondá": "darkish/dirty",
"miyóon": "mixing",
"mizzi": "helper in the mosque",
"moazzen": "iman’s helper in the mosque",
"mocá": "spider",
"mockil": "difficult",
"moçmoçar": "sounding as if to break",
"mocóri": "mosquito net",
"mod": "narcotic",
"moddani": "manhood",
"modem": "computer communication device",
"Modina": "Madina holy city",
"mohábbot": "love",
"moida": "wheat floor",
"moila": "dirty/dim/old",
"moinna": "sharp",
"moisaillé": "damaged and displaced goods/things",
"mokka gula": "corn",
"mokkón": "cream of milk",
"moktob": "office school",
"móktob": "office-Arabic",
"molai": "milk cream",
"molana": "religious teacher",
"mon": "wish",
"mondir": "Hindu temple",
"moniccó": "human being",
"monitar": "monitor",
"moóc": "drinking water container",
"moódi": "leaves for coloring hand and hair",
"moóina": "sticky mud",
"moók": "mug",
"moóngga": "expensive",
"moórana": "gift to bridge groom for marriage",
"moós": "mouse",
"moot": "death",
"moota": "funeral",
"moou": "uncle",
"moóusóm": "weather",
"moóutaj": "needy",
"morer": "dying",
"moris": "chili",
"morissa rong": "chili color",
"moris-sara": "small chili tree",
"morkos": "center for religious talks",
"mormoizza": "brittle",
"mosóit": "mosque",
"mosólla": "prayer mat",
"mot": "alcoholic drink",
"mothka": "a large pot",
"mothór": "motor car/ball shaped small bean",
"mothováik": "traffic police",
"moton": "spelling",
"motóon": "muscle pressing",
"moudú": "honey",
"mouka": "chance",
"moukamouzin": "by chance",
"mouloi": "Educated person in Religion particularly",
"mouza": "socks",
"moyor": "bird",
"moza": "tasty",
"mozaddo": "keep the mixture to stabilize",
"mubáñ": "speaking ruthlessly",
"mucá": "mosquito",
"mufót": "free",
"muftí": "religious leader",
"muháddes": "Arabic teacher",
"múhajir": "immigrant",
"muic": "jungle cow",
"muijjái": "from the very root",
"muillo": "valuable",
"muitté": "he urinated",
"muittí": "[I have] urinated",
"muizzáiféla": "cut from root",
"mujahíd": "fighting for Allah’s cause",
"mujolíc": "sitting for discussion",
"mujoza": "miracle",
"muk": "face",
"mukabela": "face to face",
"mukammel": "fully",
"mula": "carrot like vegetable but white only",
"mullúk": "country/land of under one authority",
"mum": "musical disc with a small dome at middle to hit",
"mumbatti": "candle",
"munafék": "hypocrite",
"muncí": "writer",
"muncí ark": "a kind of leaves vegetable",
"mur": "deep",
"mura": "small bamboo sitting",
"murá": "mountains",
"muráilla": "people from mountainous area",
"murala": "dust in the water",
"murali": "flute/pipe musical instrument",
"murbaila": "a kind of fish",
"murhai": "deeply",
"múruk": "person of town in charge",
"Murung": "Murung ethnic group in Arakan, Burma Myanmar",
"mus": "mustache/hair on lip",
"musa": "food bundle usually to take to farm or mountain",
"musá": "wiping above head as part of washing for prayer",
"musii": "miser/hard spender",
"mustokbol": "for the future",
"mut": "urine",
"muta": "let or cause him to urinate",
"mutá": "non-brittle",
"mutani": "feeling to urinate",
"mutha": "fatty",
"muthani": "fat woman",
"mutor sála": "bladder",
"Myanma": "Burma/Bomapye",
"ná": "no",
"naait": "Hindu people whose profession is hair cutting",
"naáitta": "unlucky, unblessed people",
"naár": "line of constant water flow",
"naari": "watch in Burmese language",
"naás": "hospital nurse",
"naástí": "unlucky",
"nac": "damaged",
"naça": "closed",
"nacáicta": "uncivilized",
"naço": "block the hole or gap",
"nadhdhe": "rolling upside-down",
"nafak": "unclean",
"nafosón": "disliked",
"naga": "person who speaks with nasal sound",
"nága": "absent",
"nagí": "navel/body’s center",
"nagin": "people who show plays with snakes",
"nagori": "native of the land",
"nahol": "ploughing tool",
"nái": "do not have",
"naijjol": "coconut",
"nailun": "nylon",
"nak": "nose",
"nakcíara": "nose and face",
"nakécta": "no handsome, ugly",
"nakéss": "low/less than normal",
"nakfúl": "nose ornament",
"nákkóro mas": "a kind of fish",
"nakúc": "unhappy",
"nal": "water line deep the ground",
"nalá": "water drainage",
"nalayek": "not of good character, non-suitable person",
"nalí": "drainage/lines of bad blood formed in the body",
"nalic": "sue",
"nam": "name",
"nana": "mother’s father",
"nañgkathai": "a kind of bread",
"nappúl": "nose ring",
"nar": "baby’s food line in mother womb",
"nara": "mass strike",
"nará": "rice straws",
"Naraingcóng": "a famous village west of Taung Bazaar, Buthidaung township, Arakan",
"naraya tokbir": "shouting with Allah’s name",
"nari": "baby’s food supply connection in the womb",
"naris": "a kind vegetable leaves",
"naruthi": "a kind of white bread",
"nas": "dance/dance ceremony",
"nasta": "snack",
"natanzá": "of very low class habit",
"nathá": "short man, miser, less fertile",
"nathok": "pretend",
"naththwa": "man dancer",
"nati": "grand son/daughter",
"nazuk": "weak, delicate, soft",
"neçahol": "wicked way",
"neço": "sleep",
"neel": "come out/go out",
"neeler": "[he/she/they are] going out/coming out",
"neelir": "[I am] going out/coming out",
"neelo": "take out/go out",
"negarani": "under the leader of",
"nehain": "thinking himself as knowing everything",
"nek": "husband-but saying in disrespect",
"neká": "marriage",
"neki": "God blessed person",
"nekkar": "pious man",
"nekthái": "necktie",
"neta": "leader in Hindu language",
"neth": "sleep",
"neví": "navy",
"niala": "take out",
"niamot": "Allah’s blessing for the sustenance",
"niáñc": "breath",
"nicá": "drug",
"nicí": "mid night",
"nidus": "not guilty",
"nif": "pen’s sharp part",
"nikac": "check for profit or loss",
"nil": "outer side of bamboo",
"nila rong": "blue color",
"nilam": "auction",
"nimfaik": "a kind of bird",
"nimgas": "a kind of tree used for shade",
"nion": "signboard neon",
"nira": "tired",
"niriccá": "without any additive for taste",
"nirittá": "weak and unhealthy person",
"niróc": "inferior/lower quality",
"nirol oiyé": "very much tired",
"nise": "below",
"niso": "lower",
"nisor": "of lower",
"nisottú": "underneath",
"nitti": "always",
"nittifitti": "always",
"niyom": "normal",
"niyóñr": "bend/lean",
"niyóro": "lean",
"niyot": "intention",
"Niyúyók": "New York city",
"nizar": "taking",
"nize": "myself",
"nizo": "take",
"nizor": "mine",
"no": "nine",
"nobab": "land lord/very rich person",
"nobazís": "do not touch",
"nobboi": "ninety",
"nobuzíba": "you respectful will not understand",
"nobuzíbi": "you will not understand",
"nobuzó": "you do not understand",
"nobuzóya": "not understanding people",
"nodi": "river/don’t give",
"nodoya": "person not willing to give",
"nofól": "voluntary prayers",
"nogol": "anchor",
"nok": "nail",
"nokcó": "map",
"nokkoni": "nail’s corner/see small job to be done",
"nokoli": "imitation",
"nola": "bone",
"noláar": "no need",
"nolaris": "no kidding",
"noleikkó": "do not write",
"noloic": "do not take",
"nombór": "number",
"noncóc": "husband’s sister",
"nonon": "husband’s brother",
"noo": "small boat",
"noó": "no/it is not",
"nóo": "not done/not completed",
"noóile": "if not",
"noón": "not to happen",
"normi": "weak, very sick, very poor",
"noroli": "throat",
"norom": "soft",
"nosíf": "luck",
"notáke": "not staying",
"nothike": "don’t last long",
"notiza": "the result",
"nottúl": "nose wearing",
"notun": "new",
"noukor": "house maid",
"nowá": "of nine in quantity",
"noya": "new",
"noya natinna": "freshly new person/novice",
"nozor": "eye catching in bad intention on something",
"nozoriya": "view/opinion",
"nuáis": "do not come",
"nuañ": "new",
"nuinna": "sea floating fish",
"numás": "Muslim prayers",
"nun": "salt",
"nuna": "salty",
"nunú": "toddler",
"nur": "brightness",
"nurani": "blessed light",
"nuwal": "handkerchief",
"nuwás": "daily five times prayers of Muslim",
"o": "prefix used to negate the meaning",
"ó": "Oh/be",
"obá": "Oh father",
"obáb": "shortage of food",
"obáf": "shortage of food",
"obáfa": "no thinking/less thinking",
"obái": "dear brother/oh brother",
"obáiggo": "unlucky",
"obáigoittá": "unlucky person",
"obar": "over",
"obari": "without shelter e.g. ogór obari  homeless shelterless",
"obus": "not matured in understanding",
"ocáir": "oh stranger",
"ocánti": "no peace",
"ocár": "mess/amazing/astonishing",
"ocárduniyai": "a great mess, amazing or astonishing",
"ocíccí": "ugly/look very bad physically",
"ocíggáta": "illiterate/uneducated",
"ocíkkáta": "illiterate/uneducated",
"ocód": "of bad character",
"ocót": "of bad character",
"ocúd": "medicine",
"ocúida": "inconvenient/difficult",
"ocúk": "sick",
"odhár": "order",
"oduniyai": "next world/other world",
"ófan": "to be sure/to be certain",
"ofát": "departed/deceased/died",
"ofís": "office",
"ofokké": "against/not sided",
"ofoñt": "no road/no walk way/unsuitable road",
"ofur": "not full",
"ofúráni": "plenty/not getting less",
"ofuron": "not completed/not filled up/not finished",
"ófut": "oh my dear son",
"ogáñth": "non existing port",
"oggolanti": "carelessness",
"ogona": "countless",
"ogoniyot": "uncountable",
"ogór": "homeless",
"ogúr": "deep/heavy/large e.g. ogúr zooñl deep forest",
"oharone": "for that reason – in pure Bengali language and not used by Rohingya",
"ohón": "right now/right away",
"ói": "yes",
"óiballá": "to be able/to be OK",
"óibar": "to be",
"óibou": "will be",
"óigiyói": "have done/completed/finished",
"óine": "is it true",
"óineé": "is it true",
"oinnai": "unjust",
"oinniai": "unjust/Also oinniyai",
"oinno": "different/other kind",
"oiththal": "pick the remaining or the abandoned",
"óito": "yes it is",
"óitou": "would be",
"oíye": "done/OK",
"óiyená": "it is enough",
"óiyené": "is it done?",
"ok": "OK/yes",
"ók": "rights",
"ókkan": "the truth",
"ókkol": "all/every one",
"okkór": "letter and numbers",
"ókkulún": "all every body/all",
"ólad": "loan",
"oliya": "highly religious person whom Allah love a lot",
"óloid": "yellow used in the curry",
"óloiddá": "yellow color",
"óloit": "yellow used in the curry",
"olomoti": "a kind of fruit",
"olor": "motionless",
"olorot": "in motionless state/in deep state e.g olorot gúm in sound sleep",
"omáñ": "Oh mother",
"omanúic": "ordinary man/man of little known/man of no value",
"omoronor": "for being not to die",
"omuk": "that person/that man/woman",
"onássi": "of bad luck",
"óñc": "loose/not tight",
"ondila": "like that",
"oñla": "kitchen",
"óñlafúl": "a kind of lake flower",
"oñne": "you/your honor",
"óñni": "comb",
"óño": "bridge/light link between two sides",
"oñóc": "skin of fish",
"oñóçá": "hook",
"oñóçí": "finger ring",
"óñola": "traditional ladies songs",
"óñorar": "whirling pain in the abdomen",
"óñormas": "a kind of fish",
"oñosá": "barrier/blockage/wall",
"oñragula": "a kind of fruit",
"oo": "filling pity in the heart for something that went wrong and was not able to be saved",
"ooin": "fire",
"ooler": "vomiting",
"óomoroni": "as if dying to get",
"óossá": "cheap",
"ooula": "kitchen",
"óour": "lost the way",
"óouri": "husband’s mother",
"oóut": "untouched/unused/unconsumed",
"or": "of",
"ór": "of",
"óran": "tired",
"óraóuri": "tsunami",
"óre": "to",
"orgen": "organ musical instrument",
"órgor": "fix/amend",
"órgwah": "a kind of oil seeds",
"Oronggi": "Oronggi people who came to Arakan with British force",
"órr": "muddy water",
"osin": "unknown/e.g. osin manúic stranger",
"osinno": "not knowing/look like not knowing",
"osinta": "no worry/less worry",
"osíyot": "last words towards his family before dying",
"ot": "at/in",
"ót": "at/in",
"oti": "much/too much",
"oticáni": "bored",
"ótin": "other wife of her husband in polygamy system",
"ótollá": "for that reason/because of/for",
"otón": "much time/too much time",
"otónot": "at that moment/at that time",
"ottú": "from this/that",
"ótu": "dear child/loving child",
"ótuwa": "there it is",
"ou": "that/those",
"óu": "Oh",
"óubaziré": "exclamation when faces something dangerous",
"óuça": "disagreeing or pursuing word with close male friend",
"ouçé": "there",
"óuçi": "disagreeing or pursuing word with close female friend",
"oucúd": "medicine",
"oucúddó": "of bad habit, character",
"oucúida": "difficult/inconvenient",
"oucúk": "sick",
"oucút": "medicine",
"oudin": "that day/the other day",
"oufúráni": "unending/un-finishing",
"óufut": "oh my child",
"oukuilla": "people staying across the river or other boundary",
"oukule": "across/in other side",
"oular": "doing things that might bring him into trouble",
"oulider": "rubbing body for relaxation",
"ouloumoti": "a kind of fruit",
"óumaaré": "exclamation when faces something dangerous",
"ouñl": "finger",
"óurin": "deer",
"óuroi": "mustard grain",
"óutin": "another wife of her husband",
"óuttoir": "seventy",
"óuzíi": "oh my daughter",
"ozad": "allergic",
"paathi": "party",
"Pakistán": "country Pakistan",
"piano": "piano",
"plein": "plane",
"program": "program/Also forugram",
"qeramot": "miracle",
"qíra": "a kind of fruit",
"qiyamot": "day of judgment",
"qosóm": "swearing",
"qúab": "dream",
"qual": "forehead",
"qúlhuwálla": "a chapter from Quran",
"qum": "deep water area",
"quna": "corner",
"quñír": "crocodile",
"Quráic": "Quraish descendent in Makkah",
"Quran": "Quran –the divine book revealed to Prophet Mohammed",
"raá": "having mercy",
"raábár": "the guide to show the way",
"raác": "rush",
"raáf": "rough",
"raáith": "right",
"raámot": "blessing",
"raátkeranifúl": "night fragrance flower",
"raátrissá": "thunderstorm",
"rab": "concentrated liquid",
"rabár": "rubber",
"rada-áñc": "a kind of duck that can fly certain distance",
"radh": "shortage of food",
"radhár": "radar",
"raf": "cane juice in big quantity",
"rafri": "referee/field judge for the football game",
"rag": "ashes after burning",
"rahá": "freeing",
"rahám": "most gracious",
"rahámot": "grace",
"rahámoti": "merciful",
"rahér": "keeping",
"rahím": "most merciful",
"rahó": "keep",
"rahóni": "support on which to keep things",
"rai": "advice/suggestion/a kind of curry leaves",
"raibá": "will keep",
"Raibanu": "ladies name used by ancient Rohingyas",
"raic": "tendency of luck of a man",
"raicén": "food stuff for daily consumption",
"raicón": "food stuff for daily consumption",
"raide": "[you] give suggestion",
"raider": "[I am] giving suggestion",
"raider": "giving suggestion",
"raidi": "[I] give suggestion",
"raido": "[you] give suggestion|",
"raifata": "a kind of leaves used for salad",
"raifól": "well known small arm",
"raijjo": "land/country",
"raikké": "[he/she/they] keep",
"raikkó": "keep it aside/save it",
"raikkúm": "will keep/will save",
"raindá": "cooked",
"rained": "already cooked",
"rait": "night",
"raitnicí": "mid night",
"raitor": "of night",
"raitta": "at night",
"rajah": "Indian prince or ruler",
"rajaztri": "kingdom",
"rak": "feeling to take revenge against another/keep",
"rake": "body swallowed and also in pain",
"raké": "usually keep",
"rakér": "[he/she/they are] is keeping",
"Rakhine": "Rakhine people of Arakan, Burma Myanmar",
"Rakí": "Hindu traditional hand wrap that is to offer to brothers",
"rakkóc": "monster",
"Rakkócpur": "old name of Arakan and now a state of Burma and currently known as Rakhine",
"rakó": "keep it",
"rakóni": "support to keep things on it",
"rakóya": "person who keeps or perform",
"raksená": "please keep this with you",
"rálaká": "village/quarter safety council",
"Ram": "Hindus God",
"rambirandhi": "Ram and Brandi wine",
"Ramú": "famous historical city in Chittagong district Bangladesh",
"ran": "thigh/cook",
"rañdá": "cooking",
"rañdér": "[he/she/they] are cooking",
"rañdír": "[I am] cooking",
"rañdó": "cook",
"rañdóni": "cooker e.g. rice cooker",
"rañdóya": "the cook",
"ranér": "[he/she/they are] cooking",
"rañfúta": "the thread believed to be deadly",
"rañga": "more whiter skin",
"rang-kuñir": "a kind of wild dog",
"rani": "queen",
"ranír": "[I am] cooking",
"ranó": "[you] cook",
"rap": "concentrated liquid",
"rari": "widow",
"raribeçi": "the widow lady",
"raridúñri": "widow and wifeless husband",
"ras": "secret",
"rasdán": "capital city of the country",
"rasdáni": "of capital city of the country",
"rasmal": "capital investment",
"rassa": "road",
"rasta": "road",
"rastri": "kingdom",
"rata": "male chicken",
"rath": "short of food",
"ratia": "at night",
"raz": "secret",
"raza": "king",
"razar": "king’s",
"razi": "agree",
"razibondi": "with agreement between",
"razirobot": "agreement",
"recóm": "silk",
"recómi": "silky",
"redhí": "ready",
"redhíméith": "ready made",
"redhu": "radio",
"refóth": "rubber band",
"refúji": "refugee/Also refúzi",
"reith": "price rate",
"rejisthar": "registration",
"rekárdh": "record disc",
"rekodhar": "recoder",
"rekórdh": "record",
"relíng": "veranda/balcony",
"rell": "rail",
"RÉM": "RAM/Random Access Memory",
"Renggun": "Rangoon, capital of Burma Myanmar",
"reni": "of very small grain/of finest grain",
"ret": "file/iron polisher",
"retbalu": "sand of bigger grain",
"rezól": "result",
"ribun": "ribbon",
"ric": "disliking others’ prosperity",
"riccá gari": "three circle passenger cart",
"ricé": "tendency of feeling bad when seeing others’ prosperity",
"rictadar": "relatives",
"ricúllá": "jealous",
"ricúwot": "bribery",
"riekcen": "reaction",
"ríel": "real",
"riénthri": "re-entry",
"rifáin": "refine",
"rifáinari": "refinery",
"rifán": "refund",
"rifíl": "refill",
"rihazel": "rehearsal",
"riís": "risk",
"rijék": "reject",
"rík": "a kind of small bird",
"ríkavar": "recover",
"rikól": "recall",
"rikomán": "recommend",
"rikwésth": "request",
"rilíf": "relief",
"rill": "photo reel for example",
"rimóut-kontróul": "remote control",
"ring": "ring pulling",
"Ringgít": "Malaysian Money unit",
"rinyú": "renew",
"ripouth": "report",
"ripouthar": "reporter",
"risévcén": "reception",
"risít": "receipt",
"risív": "to receive",
"risivar": "receiver",
"rit": "time period of influence/good and bad time",
"rithán": "return",
"ritháyar": "retire",
"riyál": "Saudi Arabian money/wooden frame for Quran reading",
"rízab": "reservation",
"rizáin": "resignation",
"rizik": "sustenance",
"rízulucén": "resolution",
"Rób": "Allah",
"robár": "rubber",
"Robiyolawal": "3rd Arabic month",
"robóth": "robot",
"roc": "juice/traffic jam",
"rocá": "juicy",
"rocágula": "juicy fruit",
"rocárocá": "more juicy",
"rocíd": "receipt",
"rocídbúk": "receipt book",
"rocógula": "sweet ball",
"rodh": "rod",
"Rohingya/Ruhingya": "Muslim minority community of Arakan, Burma",
"rohom": "kinds of/types of",
"roiccá": "man powered cart",
"rok": "nerves",
"rokthan": "hard vein",
"rokto": "blood/Also lou",
"Romzan": "Ramadan",
"ronda": "tool for leveling and smoothing wood",
"rong": "color",
"roñga": "color it",
"ronggila": "colorful",
"ronggin": "colorful",
"Ronggún": "colorful place/Rangoon/Yangon  the capital city of Burma",
"rongsoingga": "brightly colored",
"rongzaya": "color washed",
"Rooibar": "Sunday of the week",
"roón": "round",
"roóng": "wrong/false",
"roóudh": "road",
"roóun": "garlic/chives",
"Rosháng": "ancient name of Arakan once a Muslim Kingdom and now a State of Burma",
"Roshánggo/Rushánggo": "ancient name of Arakan once a Muslim Kingdom and now a State of Burma",
"rosí": "rope",
"rosúl": "prophet/Allah’s messenger",
"rot": "earning by own labor/own efforts",
"roth": "rod",
"rottani": "prosperity/fruitful/better",
"rotto": "blood/Also lou",
"rouñiththa": "brown type color",
"rowana": "start leaving",
"Ruáingga": "Rohingya people/the people of Ruáng Arakan",
"Ruáng": "old name of Arakan, once Muslim Kingdom in Burma",
"rub": "head in “tail and head coin”",
"rubáat": "guest house for pilgrims",
"rubi": "ruby stone",
"rucé": "effect",
"rucér": "being effected",
"rucni": "light",
"rucón": "gives light",
"rufa": "silver",
"rufali": "of silver",
"ruhám": "stone tiles",
"Ruháng": "ancient name of Arakan once a Muslim Kingdom and now a State of Burma",
"rui": "cotton",
"ruide": "let [him/her/them] plant",
"ruider": "[he/she/they are] planting",
"ruidi": "let me plant",
"ruido": "telling to plant",
"ruifúta": "cotton thread",
"ruir": "[I am] planting",
"ruk": "diseases/stop/block",
"rukawoth": "obstacles",
"ruké": "[he/she/they] stop or block",
"rukér": "[he/she/they] blocking",
"ruki": "patient",
"rukí": "[I] block",
"rukír": "[I am] blocking",
"rukó": "[you] block",
"rukóon": "act of blocking/forbidding",
"rukóor": "[you] are blocking",
"rukú": "bending in the Muslim prayer",
"rukún": "corner",
"rul": "rule/law",
"rulábatti": "florescent long light",
"rulágari": "vehicle used for leveling road /roller car",
"rulár": "12 inches ruler",
"rull": "roll",
"rulmaijja": "with lines drawn",
"Rum": "Rome country/room",
"rumal": "handkerchief/head cover",
"runok": "fresh leaves appear/refreshing",
"Rupi": "Rupee",
"Rupia": "unit for the Rupee money",
"russana-mas": "a kind of fish",
"ruthá": "less fertile",
"rutházobin": "unfertile land",
"ruthi": "bread",
"ruú": "life sprit in human body",
"ruui": "[I] plant",
"ruúilmas": "a kind of fish",
"ruúz": "fried meat piece",
"ruwa": "small rice plants to be planted in another place",
"ruwana": "departure",
"ruwe": "[he/she/they] plant",
"ruwer": "[he/she/they] are planting",
"ruwo": "plant",
"ruwoon": "planting",
"ruza": "fasting in Ramadan",
"ruzadar": "fasting people",
"ruzana": "daily",
"ruzar": "of fasting",
"ruzi": "sustenance/things for the living",
"ruzidar": "that who provides sustenance/God Allah",
"rwa": "village in Burmese language",
"rwaháung": "Rwa+háung=village+old",
"rwáng": "Mruhaung District/Old city district",
"Rwáng/Roáng /Rohang": "old Kingdom name of Arakan State, Burma",
"rwasígiri": "chairman of the village",
"saá": "see/tea",
"sáa": "filter",
"sáabá": "companion of the Prophet Mohammed",
"saádde": "checking/looking/same as saárde",
"saáfata": "tea leaves",
"sáafi": "net",
"sáair": "going round the world/filtering",
"sáañtí": "companion",
"saár": "seeing",
"sáará": "shelter",
"sáb": "clean",
"sab": "press",
"sába": "picture, shadow",
"sábahána": "printing press",
"sabamar": "slap/same as suarmar",
"sabar": "steady pain [mostly in the leg]",
"sabí": "key",
"sabi": "pressing",
"sabo": "grind it",
"sábon": "soap",
"sabor": "a slap/same as suar",
"sábut": "proof",
"sáda": "white",
"saddor": "bed sheet",
"sáf": "clean and tidy",
"safarikuth": "safari coat",
"sáhat": "biscuits",
"sai": "bamboo trap for fish catching",
"sái": "ashes",
"sailé": "if tried [by him/her/them]",
"sáinnafiçá": "a kind of bread ball",
"sair": "four/number 4",
"saitám": "if tried [by me]",
"saitámbóuli": "if I would have tried",
"sak": "robe loop",
"sakka": "wheel/circle",
"sakki": "a kind of bread",
"sal": "roof",
"sál": "tree bark",
"sála": "jut bag",
"salák": "clever",
"sállee": "motor boat in Burmese language",
"sállwa": "hard like tree skin",
"saloin": "sieve",
"sálon": "curry",
"salu": "quick moving",
"sam": "skin",
"sáman": "luggage/goods/things for usage",
"sambabañdor": "blind bird that fly at night using echo method",
"sambafúl": "a kind of known flower",
"samic": "spoon",
"Sammá": "hill track people/container made of cane",
"sámman": "sampan",
"samra": "skin",
"san": "moon",
"sañda": "donation",
"sañdi": "silver coin",
"sang": "group/flock/flat wide support for vegetable growing",
"sáni": "roof cover",
"sáñla": "young brother-in-law",
"sáñli": "sister of one’s wife",
"sañr": "broken pieces of mud made of pots",
"sap": "give pressure",
"sáp": "cleanness",
"sappól": "sandal",
"sara": "small plants for re-growing",
"sára": "without/divorced",
"sári": "abandoning",
"sárvis": "service",
"sáspendhar": "inner pant",
"sáta": "dust/dirt",
"sáti": "umbrella",
"sehét": "health",
"séikka": "of barbecue",
"sék": "warming",
"séko": "barbecuing",
"sékoon": "doing barbecue",
"sél": "arrow",
"selendhar": "cylinder",
"sémai": "noodle cooked differently",
"sément": "cement",
"séna": "painful suffering of sorrow",
"señdí": "cutting wood block/wedge",
"sensár": "censor",
"sép": "apple",
"sera": "liquid motion",
"sétaár": "a kind of musical instrument",
"sétar": "oppressing",
"séthi": "sittings",
"setigiyói": "septic",
"siañra": "animal of many many legs",
"siára": "car",
"sída": "straight",
"sifót": "properties",
"síkka": "hanging small basket",
"sikkoroon": "shouting",
"sil": "eagle",
"síla": "stitch",
"siling": "ceiling",
"síloin": "sea shell",
"síloith": "blackboard/slate",
"siná": "knowing",
"sínamá": "cinema",
"síndi": "cooked rice floor",
"sindoon": "introducing",
"síndur": "Hindu’s custom color circle mark at forehead",
"siní": "sugar/[I] know/[I] recognize",
"sinír sóaun": "ceramic plate",
"sinta": "worry",
"síol": "chain/wire",
"sir": "stomach born worm/operate",
"sira": "parted cut",
"síra": "alone/tearing",
"síride": "tear apart",
"siriel": "serial",
"sirihána": "postmortem room",
"síro": "take apart",
"síroon": "taking apart",
"sissiar": "blood block paining",
"sisthem": "system",
"sit": "lye upside down",
"sitolfiçá": "a kind of bread",
"siyon": "thin rod shape",
"só": "six",
"sóaun": "plate",
"sób": "long sitting que for eating",
"sóbok": "lesson",
"sobór": "patient",
"sodor bódor": "unsystematic",
"sódor sáab": "chairman",
"sóf": "long prayer mat used in mosque",
"sofór": "traveling",
"soikkal": "watchman",
"soil": "rice",
"sóiñ": "green beans",
"soiñ goró": "watch",
"sokkor": "head stirring causing unbalance",
"sokkoro-mokoro": "zebra shaped",
"sol": "move/walk",
"sola": "move/push ahead/driving",
"solafíra": "movement",
"sólam": "Salam/Muslim’s hello",
"solar": "driving",
"soler": "moving/items moving in the shop/good sales",
"solir": "[I am] moving",
"solo": "move/walk",
"sóloi": "lighter",
"soloya": "driver",
"sómuza": "three corner Somoza",
"són": "roof covering material",
"sona": "peas",
"sonabuth": "yellow beans",
"sónahá": "special wood used for face cream",
"sonardhail": "lentil beans",
"sondon": "a kind of perfume wood",
"sónduk": "safe",
"sónfúl": "a kind jungle flower",
"sóng": "chicken protection cover made of bamboo",
"soñya": "penis",
"sóo": "baby animal",
"soó": "see",
"sóol": "sheep",
"soón": "seeing",
"Soóudi": "Saudi people",
"sóppor": "open floor at the top of the building",
"sor": "ride",
"sóra": "water running channel",
"sora": "to feed cattle in the field",
"sorér": "he is riding",
"soroon": "feeding cattle in the field",
"soróon": "riding",
"sorr": "lower land/land that comes out at the river bank",
"sót": "roof top",
"sotor": "shallow",
"sotór": "private part of the body prohibited to be exposed in public",
"sóudi": "calcium",
"souiñ": "bed table",
"souñri": "job",
"sóuoun": "sworn",
"soutur": "cleverness",
"spríng": "spring",
"súan": "radar",
"súañ": "stick",
"súañfira": "dieses that cause body twisting uncontrollably",
"súap": "good deeds",
"suar": "a slap",
"súari": "small seeds like coconut",
"suarmar": "slap/slap [him/her/them]",
"suk": "eye",
"suk’hana": "blind",
"sul": "hair",
"sulá": "oven",
"súlar": "in state of dying",
"sulgirá": "knee eye",
"suna": "white paint",
"sunsuinna": "penetratingly",
"sur": "thief",
"suraa": "pressed boiled rice",
"súratá": "seeds cutting device",
"surgirá": "leg eye ball",
"suri": "stealing",
"súri": "kitchen knife",
"súrum": "snake skin changing",
"sústi": "weakness",
"súta": "wound that pain and stay longer",
"súura": "dinning table cover for eating",
"súwal": "question",
"súwan": "radar",
"suwar": "a slap",
"taákit": "make sure",
"taakot": "energy",
"tabis": "small piece of container /hanging in the neck",
"táikkoum": "will stay",
"taillamas": "a kind of fish",
"tajjub": "surprise/Also taajub",
"tákgoró": "pile them",
"tal": "music",
"tál": "plate",
"talac": "seek/look for",
"talgas": "a kind of tree",
"tali": "patch (on clothing)",
"tallwa": "last bottom part of the foot",
"talu": "vertex/top of the head",
"talufura": "bald",
"tán": "flat-roll of cloth",
"tar": "his",
"tara": "star",
"tará": "some sort of container for carrying something",
"tára": "container",
"taraing": "waterfall",
"taravi": "Muslim prayers in Ramadan month after Esha",
"tarr": "wire",
"tass": "crown",
"tátá": "giving bye bye",
"tattwa": "sticky",
"taza": "fresh",
"teikka": "cap",
"teilla": "oil seeds grinding person",
"teinna": "baby wrapping cloth",
"tel": "oil",
"telfar": "cover plastic",
"telifún": "telephone",
"teligraf": "telegraph",
"telivicén": "television",
"teloin": "dish",
"telteilla": "smooth",
"tená": "sweating due to hot and high humidity",
"ténteinná": "state of liquid showing sticky",
"tesfata": "eaves of spicy",
"tess": "strong spicy",
"tetói": "a sour seed",
"thaáim-búm": "time boom",
"thaamarer": "having air blocked",
"tháarfaiyé": "recognized",
"thaçala": "hanging piece in side the mouth",
"thaikkuom": "will hang",
"thaim": "time",
"thaimar": "timer",
"thaingki": "tank",
"thainné": "pulled",
"tháiñyamiçá": "sweet ball",
"thaith": "tight",
"thaiyár": "tire",
"thaiyon": "tomato",
"thak": "hang/some diseases on head",
"thaker": "hanging",
"thakmaro": "show taste but not confirmed",
"thakoni": "hanger",
"thal": "pile of something",
"thala": "lock",
"thalasabí": "lock and key",
"thambu": "tent",
"thamm": "another kind of manago",
"thana": "support for puling",
"thanathani": "pulling by many at the same time",
"tháñci": "tightly/too much",
"thándhah": "cold",
"thándhi": "coldness",
"tháng-tháng": "hitting sound on iron plate",
"thanoni": "thing for pulling",
"thanoon": "pulling",
"tháththa marer": "laughing and enjoying",
"thaththi": "toilet",
"thécmarer": "telling against something done undesirable",
"theés": "test",
"theéx": "tax",
"theilá": "not being plain surface",
"théila": "branch of a tree",
"theilámelá": "non-plain/ground not level",
"theka": "unit of Bangladesh money",
"théka": "contract",
"thékadar": "contracter",
"thelá": "support post against falling",
"théla": "push",
"thélagari": "pushing cart",
"théloni": "thing for pushing",
"théloon": "pushing",
"thémah": "cut short piece",
"théng": "leg",
"thep": "tape",
"therá": "not straight/zigzag",
"thethurun": "cloth of tetron",
"thícthíc": "bullet firing sound",
"thík": "right",
"thik asé": "is well/is fine",
"thíkana": "address",
"thíkgor": "fix",
"thíkgoron": "fixing",
"thíko": "do target",
"thíkoon": "targeting",
"thiñañra": "wall of bamboo",
"thinggú": "very short man",
"thinthuúñri": "small of the back",
"thiñya": "money",
"thip": "fingerprint",
"thipprim": "a kind of fruit",
"thipsóloi": "mashies",
"thiyor": "eye in-balance",
"thoin": "tin",
"thokkórgori": "quickly",
"thokthóikka": "not firm structure",
"tholtholar": "in big trouble",
"thona": "the hitting",
"thoñcá": "fair",
"thong": "high bamboo/wooden house",
"thongki": "high house",
"thonthonar": "painin",
"thoóc": "torch light",
"thoón": "town",
"thoull": "small round sitting",
"thóur": "monk",
"thousthar": "toaster",
"thrak": "truck",
"thúañ": "small swallow tip on skin due to heat",
"thúcimaro": "beating",
"thufi": "cap",
"thuic": "rice skin waste",
"thuirmas": "a kind of tasty fish",
"thúiththa-mas": "a kind of fish",
"Thukuruni": "African black people",
"thulki": "finger kick",
"thunar": "toner",
"thúñça": "peak of a land",
"thúni": "pillar",
"thuñinná thuñinní": "husband and wife in a tale",
"thunon": "amending",
"thúñth": "peak",
"thuththui": "lizard/animal crawling on wall",
"tía": "stand up/wait/stop",
"tía goroon": "make standing",
"tíagorá": "stop [him/her/them]",
"tíagorár": "stopping [him/her/them]",
"tilismá": "a miracle",
"tin": "three",
"tir": "arrow",
"tirác": "thirsty",
"tita": "bitter",
"tíya": "stand up/wait",
"tíyo": "wait/stand-up",
"tóila": "bag",
"tók": "stairs",
"tola": "bottom part",
"tóla": "very lower level ground",
"toloi": "mat of bamboo",
"tóltoillá": "state of liquid which is between liquid and solid",
"toltolar": "making noise",
"tóltolí": "a kind sweet used for breakfast",
"tóm": "pillar but very short",
"tondul": "bread fire",
"tong-gouru": "a kind of wild cow",
"toóggori": "quickly",
"toóila": "towel",
"tooitta": "temporary",
"tor": "your",
"toratori": "as quickly as possible",
"torifaroon": "surviving",
"toris": "chilli of very hot",
"tormus": "water melon",
"tosbí": "beads used to golorify Allah’s name",
"tottá": "flat wood",
"tottoza": "fresh",
"toufik": "able to do it",
"touloi": "bamboo mat",
"tozza": "broken into pieces",
"tua": "search",
"tuanggor": "rich",
"tuáñr": "yours",
"tuáñra": "you all",
"tufán": "storm",
"tui": "you",
"tuilla": "vertex of something",
"tuippá": "higher ground/hill like high place",
"tul": "balance rod used for weighing",
"tula": "measuring unit of gold",
"tulá": "lifting up",
"tulí": "vertex/top of the head",
"tulíyóum": "will take up",
"tuñí": "you [respected]",
"túr": "banana tip",
"túra": "little",
"túrung": "container carried at the back by Murung people",
"turunza": "a type of big lemon",
"turut turut": "violent jumping",
"tus marer": "piling on top of another",
"tuta": "parrot",
"túuru": "saying once disliked or inappropriate",
"tuwa": "search",
"tuwaf": "rounding",
"tuwoon": "searching",
"uác": "hunger/starvation/lack of food",
"uáiccá": "being in hunger, starvation or lack of food",
"uán": "that one/the one in question",
"uáné": "by that one/by the one in question",
"uáné ri": "that is the one that we are saying",
"uánot": "at that place/at that position",
"uántú": "in there/at that place",
"ubbiar": "talking in sleep",
"úçá": "calling as disgraces",
"úçaa": "polishing call to somebody",
"uçán": "plain open area in front of home inside the compound",
"uçér": "standing up",
"uçízargoi": "leave the seat",
"uçó": "getup",
"úda": "without anything",
"udár": "loan",
"uddár": "free from burden",
"údo": "only",
"udulfudul": "disorganized/disarranged/disturbed/confused",
"úff": "exclamation at suffer unbearable pain",
"uggwá": "one",
"ui": "small insect eating wood",
"uibá": "that one/that female/that gentleman",
"uibár": "of that one/of that gentleman",
"uijjóti": "insisting/stubborn",
"uinn": "blood sucking insect",
"uínn": "that things/the things in question",
"uit": "seal/animal in the sea",
"uitará": "them in question",
"uitaré": "to him in question",
"uite": "that man",
"ujáth": "being banged to something",
"ukil": "lawyer",
"úkka": "smoking device",
"úkkaththa": "chairman in Burmese language",
"ukkú": "sickness referred to children",
"ul": "a white short vegetable",
"ull": "a kind of vegetable",
"uluder": "sound produced from mouth for happy occasion",
"umra": "visiting holy place Makkah for Muslims",
"unáigiyói": "melted",
"unca": "higher position/qualified",
"úñcar": "breathing hardly",
"úñciar": "be careful",
"unduijja": "male mouse",
"undur": "mouse",
"undurni": "female mouse",
"úng-nú-kókswé": "noodle preparation with coconut milk",
"uñíjja": "home being 1st floor above ground",
"uñíjjá": "chicken cover in dish shaped",
"uñíjja-gór": "home where ground floor left open and unused",
"uñít": "lay face down",
"uñíththikká": "laid upside down",
"uñítór": "baby laying on face",
"uñíttól": "ground below home’s 1st floor",
"uñíttóle": "at the ground below home’s 1st floor",
"úñran": "step on for pressing",
"úñro": "press by leg",
"úñroon": "stepping on for pressing",
"uñsa": "short piece of wood attached to rice grinding lever",
"uñsol": "high",
"uñta": "grinding roll",
"uñtaijjé": "boiled",
"uñtani": "itching",
"uñtar": "itching",
"uñtarer": "boiling",
"uñth": "camel",
"úñzi": "pursuing/offering/requesting to accept",
"uore": "above",
"uormikká": "up/towards up",
"uorthak": "showing off very high to others",
"ura": "cow home",
"urer": "flying",
"urhabulá": "small snake of green color and can fly from tree to tree",
"urhan": "flight",
"Uria": "African people seen in Burma in British time",
"uriam": "a kind of mango family",
"uro": "fly",
"uroinna": "age of flying-used the bird",
"uroon": "flying",
"urr": "fly",
"urúc-fátia": "a kind of festible",
"urúic": "biting insect usually in the bed at night",
"uruinna": "of flyable state and age",
"urúli": "red small biting insect",
"úrum": "dried baked rice",
"usíla": "by means of/by the help of/through/intermediary",
"uskaide": "stir someone mentally against somebody",
"usoilla": "higher",
"usol": "high",
"usolgoijjé": "high lifted",
"usolot": "at high position",
"ustat": "teacher",
"utaltál": "making noise to someone for getting job done",
"uth": "get up/wake up",
"uthál": "tall",
"utóillé": "re-effected",
"utor": "north",
"uttom": "take care of things",
"uttor": "north/response",
"utúinna": "mother’s son called by mother lovely",
"úú": "dog’s cry seeing bad happening in the future",
"uúñi": "rice container used to crack rice",
"úúwa": "far there",
"uzal": "fire with straw rod/fire torch",
"uzan": "against the flow",
"uzani-mas": "fish racing against water current",
"uzanki": "the period favoring for becoming rich",
"uzár": "professional people/carpenter",
"úzara": "messy, uncomfortable home",
"uzir": "minister",
"uzoijja": "of noisy",
"uzón": "weight",
"uzoor": "noisy",
"uzu": "straight",
"uzúitta": "stubborn/tendency of doing things against wills of others",
"úzur": "your honor",
"vidhu": "video",
"víza": "visa",
"volónthiar": "thiañ sára maana modot goróya",
"waá": "steep",
"waábi": "two extremisms in Islamic religion Wahbi and Sunni",
"waáci": "person having least understanding",
"waada": "promise",
"waáiccá": "in empty stomach/fasting",
"waakí": "really",
"waakkán": "that is another one",
"waáláigiyói": "already rotten/decayed/decomposed",
"waán": "that thing",
"waanin": "warning",
"waapes": "returned/go back",
"waapesi": "act of returning back/in return",
"waár": "pillow",
"waarainna": "water coming from far above",
"waares": "heir",
"waás": "religious speech or sermon",
"wáawáa": "uttering voice while enjoyed good show",
"wacar": "washer",
"wáiféla": "let cooked",
"wail": "oil",
"walékúm": "reply for the Salam",
"WAMY": "World Assembly of Muslim Youth",
"wáñ wáñ hañder": "baby crying",
"wañíththá": "bad smell out of something decayed",
"wárca": "workshop",
"waring": "warring",
"wiski": "alcoholic drink",
"wite": "that person",
"witír": "the last prayer for the day",
"woijja": "the better",
"woktó": "time",
"wosíyot": "telling things to abide",
"wotón": "birth place",
"wottín": "fig fruit",
"woulia": "religious God loving man in high state",
"wóuththithí": "deadly bird",
"wúçá": "calling as disgraces",
"wuçán": "plain ground at the front of home inside the compound",
"wuçó": "getup",
"wudulfudul": "piled but mixed everything causing to sort difficult",
"wúff": "exclamation at suffer unbearable pain",
"wuijjóti": "insisting/stubborn",
"wuit": "seal/animal in the sea",
"wujáth": "being banged to something",
"wukil": "lawyer",
"wul": "a white short vegetable",
"wuluder": "sound produced from mouth for happy occasion",
"wunáigiyói": "melted",
"wuñsa": "short wooden log used to crack rice",
"wuñsol": "high",
"wuñta": "the rubbing roller used to crush on the rock plate",
"wuñtaizzé": "boiled",
"wuñth": "camel",
"wuore": "in the above",
"wuorthak": "thinking to build big home in the air",
"wuraa": "cattle house",
"wurhabulá": "small snake of green color and can fly from tree to tree",
"wuria": "people of black color worked for British army in Burma",
"wuriam": "a kind of mango family",
"wuro": "fly",
"wuroon": "flying",
"wurúic": "blood sucking insect found under and inside the bed",
"wuruinna": "of flyable state",
"wurúli": "red small biting insect",
"wúrum": "popcorn but of rice",
"wusíla": "by means of/by the help of/through/intermediary",
"wusol": "high /high lifted",
"wusolot": "in high above",
"wustat": "teacher",
"wutáltál": "crying to do something",
"wuth": "get up",
"wutóillé": "re-effected",
"wutor": "north",
"wuttor": "response",
"wutúinna": "mother’s son called by mother lovely",
"wúú": "dog’s cry seeing bad happening in the future",
"wuúçaa": "polishing call to somebody",
"wuúñi": "rice container used to crack rice",
"wuúñijja": "chicken cover in dish shaped",
"wuúñijjá gór": "home where ground floor is not used",
"wuuñíththikká": "laid upside down",
"wúuñro": "press by leg",
"wuzal": "fire torch",
"wuzan": "against the flow",
"wuzanki": "the period favoring for becoming rich",
"wuzón": "weight",
"wuzu": "straight/washing for prayer",
"xong": "very jammed or unreachable area",
"xonggol": "jungle",
"ya": "now/then",
"yá": "Oh",
"yaa": "now/at the moment",
"yaá": "he you",
"Yáallah": "Oh Allah",
"yaáni": "this means",
"yaar": "this days/now",
"yaarage": "before/previously",
"yaaragortú": "before/previously",
"yaássa": "digesting mixture flour in Burmese",
"yad": "remembrance",
"yaddac": "memory/quality of memory",
"yadgari": "the remembrance",
"yaggwá": "this is another one",
"yággwa": "that is another one",
"yakeénlage": "how is now?/how you feel now",
"yakén": "how is now?/how you feel now",
"yáki": "objection to an action",
"yállah": "joking or unwilling answer for why",
"Yaqub": "Prophet Yaqub",
"yárob": "Oh Sustainer",
"yartú": "from now onwards",
"Yasín": "A Chapter that is the heart of the holy book Quran",
"yatgoró": "remember",
"yattún": "from now onwards",
"yazuk mazuk": "horrifying creatures coming as the world approaching to the end",
"Yemán": "Yemen, the country south of Saudi Arabia",
"Yengun": "Yangon the capital city of Myanmar",
"yés": "yes",
"yiáh": "calling someone",
"yiakkán": "this is another one",
"yíakkán": "that is another one",
"yián": "this one",
"yían": "that one",
"yiánde": "give this one",
"yiándi": "near by here/close by here",
"yiánné": "is this the one?",
"yiánnoó": "not this one",
"yiánót": "in this place/here",
"yiánti": "here",
"yiántu": "from here",
"yiómmazé": "here",
"youmalkiáma": "Judgment day in the hereafter",
"Yunus": "Prophet Yonus",
"Yusúf": "Prophet Yosuf",
"zozira": "island",
"zozzal": "Person who will claim as God and he will has power to kill and make alive again",
"zózzoijjá": "discrete",
"zozzokar": "reflecting flashy light",
"zua": "gambling/game with money",
"zuab": "answer",
"zúaide": "make the animal attack [him/her/them]",
"zuaijja": "at high tide",
"zuan": "youth/adult",
"zuáñ": "Friday prayer",
"zúañ": "unorganized/scattered/of high volume",
"zuani": "of youth/of adult",
"zuañl": "coupling on the neck between two cows",
"zuap": "answer",
"zuar": "high tide",
"zuari": "corn",
"zuban": "tongue/dialect/language/words of mouth",
"zubane": "with/by tongue/dialect/language/words of mouth",
"zubani": "being words  of mouth",
"zuda": "departed",
"zuddó": "war",
"zugág": "lane/small lane",
"zuhám": "nasal congestion",
"zuhar": "arrange",
"zuhúr": "noon prayer time",
"zúikkye": "[he/she/they] bent head towards",
"zúikkyi": "[I] bent head towards",
"zúikkyo": "[you] bent head towards",
"zuinnáfuk": "a kind of insect that likes dirty water",
"zuit": "convenient",
"zúiththa": "a hilly thing on the head",
"zúiththa-faik": "a kind of bird",
"zuitta": "make ready",
"zuittaide": "make it ready/arrange",
"zuittaidoon": "making it ready/arrange",
"zuittaiyé": "work created",
"zuittar": "[he/she/they] making ready",
"zuitto": "[asking them] to make ready",
"zuizza": "of being engaged",
"zuizzé": "[he/she/they] made engagement",
"zuizzó": "[you] made engagement",
"zuk": "blood sucking animal in the water/leech",
"zúk": "bend head/energize/motivation",
"zúka": "asking another bend head in front of others",
"zukám": "sneezing",
"zúke": "[he/she/they] usually bend in front of others",
"zúker": "[he/she/they] bending head in front of others",
"zúkis": "make sure you do bend head in front of others",
"zúko": "bend head in front of others",
"zúkoon": "act of bending head in front of others",
"zúkos": "you usually do bend head in front of others",
"zúl": "liquid of curry",
"zúla": "stomach",
"zulá": "act of kidding/act of giving trouble",
"zúlaifélo": "make it extreme ripen",
"zúlaigiyói": "has become very soft",
"zuláir": "[I am] giving trouble",
"zúlaizargói": "have become very tired/have become very soft",
"zulap": "medicine for reducing constipation",
"zulár": "he is giving trouble/he is giving hard time /kidding",
"zúligiyói": "ripen extremely",
"zúlla": "food with more curry liquid",
"zulóor": "[you are] giving trouble",
"zulúm": "oppression",
"zulúmdar": "oppressor",
"zulúmhar": "oppressor",
"zulúmi": "of oppression",
"zulúmkar": "oppressor",
"zumá": "Friday afternoon prayer",
"zumm": "hillside farming",
"zumma": "people of hillside farming",
"zúmzúm": "of raining heavily",
"zun": "moon",
"zúna": "much ripen/experienced",
"zunáffór": "moon light at night",
"zunáppór": "moon light at night",
"zúñça": "wig",
"zúng’ha": "hanging thing as decoration",
"zúng’hafúl": "hanging earrings",
"zuní": "weak eyesite",
"zunífuk": "a kind of insect glow at night",
"zuñir": "rain protecting frame sheet",
"zuñwal": "yoke",
"zúnzuní": "a kind of baby toy",
"zur": "couple/small cannel for water flow/give hand/give force/put into work",
"zúr": "get sleepy",
"zura": "joint/to get cool/even",
"zurá": "small river or cannel",
"zúra": "sleepy",
"zurabar": "some responsible person forcing [him/her/them] to get somethings joined togther",
"zurade": "asking somebody of closed relation to join somethings together",
"zurader": "he/she/they is/are joining somethings together",
"zuradir": "I am joining somethings together",
"zurado": "asking somebody to join somethings together",
"zuradoon": "act of joining",
"zuradoór": "you are joining",
"zuragatá": "engagement for the marriage",
"zuraiféla": "make it cool",
"zuraiya": "cold",
"zuraiyé": "get cooled/earned",
"zuralo": "be joined",
"zuraloibar": "of joining",
"zuraloibou": "will join",
"zuraloitou": "it would have joined",
"zuraloóil": "joined in the long past",
"zuraloon": "joining",
"zuralor": "being joined",
"zuramanta": "suffering from vomiting, motion and fever",
"zúrani": "sleepiness",
"zurar": "let [him/her/they] causing to become cold",
"zurat": "at the joint",
"zurazuija": "in parallel",
"zurbóng": "eyebrow",
"zurer": "arranging or making engagement",
"zúrer": "[he/she/they are] sleepy or needy of him for help or advice",
"zurhá": "hanging stand for keeping things on it",
"zuri": "marriage partner/joining/make engagement/a musical instrument",
"zurí": "valley",
"zúri": "showing weak towards his master or guardian",
"zurifare": "[he/she/they] can achieve to own said property",
"zurifari": "[I] can achieve to own said property",
"zurifaro": "[you] can achieve to own said property",
"zurifél": "get the engagement done",
"zuriféla": "get the engagement done [strong]",
"zurifélaiye": "engagement has been done",
"zúrinna": "sick/bad condition in health",
"zúrir": "[I am] sleepy or needy of him for help or advice",
"zurmí": "binoculars",
"zuro": "let them something get cold",
"zuroni": "device which reduce the temperature",
"zuroon": "cooling",
"zúroon": "act of sleeping",
"zúroór": "[you are] sleepy or needy of him for help or advice",
"zurr": "give force/make even/set into two",
"zurzar": "going inlove two opposite sex together",
"zurzur": "male-female pair/in pair/even",
"zus": "sudden force built in the body specially when angry",
"zus’hái": "unbearable feeling against",
"zuta": "shoes",
"zuti": "eye center",
"zuu": "high tide/having good time/method/procedure",
"zuún": "who/that/which",
"zuúné": "whoever",
"zuúñr": "afternoon",
"zuúñrótto": "afternoon prayer time",
"zuwa": "game with money/gambling",
"zúwai": "pursue the animal to chase or bite",
"zuwaijja": "at the time of high tide",
"zuwan": "being age of grown up",
"zuwar": "high tide",
"zuwari": "corn",
"zuzan": "bag made of cloth for keeping Quran the holy book",
"zúzuikkyá": "of getting weaker/of being very weak",
"zuzuk": "hell",
"zuzuki": "people of hell",
"5 fañs tha": "5 o'clock"،
"ekkán": "a"،
"kessú din": "a couple of days"،
"záaiñzal": "a kind of fishing net"،
"duágori ; túragorí ; homgorí": "a little"،
"ekkená gori": "a little bit"،
"bicí": "a lot"،
"becábicí": "a lot of"،
"ho uggwá": "a number of"،
"ammúk gor": "aback"،
"abakas: ": "abacus"،
"noctho gor": "abad"،
"félai dáiai": "abandon"،
"gunári gor": "abase"،
"homa": "abate"،
"kriccen or giriza": "abbey"،
"Kriccen or fúngri": "abbot"،
"baiththá gor": "abbreviate"،
"baiththá": "abbreviation"،
"félaiai": "abdicate"،
"tolfeth ; feth ; zúla": "abdoman"،
"tolfeth": "abdomen"،
"feçor": "abdominal"،
"thani loiza": "abduct"،
"mon hóraf óla": "aberrant"،
"hórafit modot gor": "abet"،
"mano": "abide"،
"kaabeliyoti": "ability"،
"fare": "able"،
"estemal gorá zaibou ; háñsil gorá zaibou": "able to be used"،
"uzubanoon": "ablution"،
"thíkana": "abode"،
"mitháifél": "abolish"،
"asól furana manúic ; asól manúic": "aboriginal"،
"sáfgorifél": "abort"،
"baabote": "about"،
"uore": "above"،
"añsádhola": "abrasion"،
"bidecót": "abroad"،
"gair háñzir": "absence"،
"gairháñzir": "absent"،
"gair háñziri demak": "absent minded"،
"gair háñziri manúic": "absentee"،
"bilkúl": "absolute"،
"bilkúl": "absolutely"،
"thanilo": "absorb"،
"faní thainnéd": "absorbed"،
"faní thaniluwa": "absorbency"،
"faníthanoni": "absorbent"،
"suúiluwa": "absorption"،
"golot estemal goré": "abuse"،
"elómor": "academic"،
"kobulgor": "accept"،
"luwaza": "acceptable"،
"kobulgorá": "acceptance"،
"kobul goijjé": "accepted"،
"rasta": "access"،
"asási hédmot ókkol loot foon": "access to basic services"،
"gór loot foon": "access to housing"،
"zaga arde cómbotti loot foon": "access to land and property"،
"fúañti aiyéde jiníc": "accessory"،
"mosibot": "accident"،
"ótnofaiyoré": "accidentally"،
"zaga de": "accommodate"،
"zaga diyé": "accommodated"،
"zagader": "accommodating"،
"tákibar zaga": "accommodation"،
"tákar zaga ; tákibar zaga ; reháic": "accomodation"،
"fúañti": "accompanied"،
"fúañijja do": "accompany"،
"fúañti goríder": "accompanying"،
"razinoma": "accord"،
"mozin": "accordance"،
"mutabek": "according"،
"mozin": "according to"،
"mutabek": "accordingly"،
"hísaf": "account"،
"zimma": "accountability"،
"zimmadar": "accountable"،
"hísafgoróya": "accountant"،
"hísaf kitab": "accounting"،
"sóiyi": "accuracy"،
"sóiyi": "accurate"،
"sóiyigorí": "accurately"،
"háñsilgor": "achieve"،
"kaamiabi": "achievement"،
"háñsil gorér": "achieving"،
"toslimgor": "acknowledge"،
"toslimgorá": "acknowledgement"،
"akon gula": "acorn"،
"zanafúna: ": "acquaintance"،
"haçi": "across"،
"ain": "act"،
"amól goijjé": "acted"،
"amól gorír": "acting"،
"karwaiyi": "action"،
"salugor": "activate"،
"salugorá": "activation"،
"salu": "active"،
"hórkoti kensar": "active cancer"،
"hórkot hísafe": "actively"،
"lorasora": "activity"،
"ekthár": "actor"،
"ekthís": "actress"،
"asól": "actual"،
"asólot": "actually"،
"elan": "ad"،
"tooitta": "ad hoc"،
"Adom": "Adam"،
"golar dana": "adam’s apple"،
"bonefán bodole": "adapt"،
"lagerdé éndila bodoli faredé": "adaptable"،
"bonefán bodola": "adaptation"،
"zomade": "add"،
"ziyadá goijjé": "added"،
"zoma goróon": "addition"،
"aró": "additional"،
"aró": "additionally"،
"thíkana": "address"،
"huwá giye": "addressed"،
"thíkana ola": "addressee"،
"thíkana ola seróf": "addressee only"،
"hoór": "addressing"،
"furafuri": "adequate"،
"maniza": "adhere"،
"sáfsutarar uore amól goró": "adhere to hygiene"،
"lagitákede ; bazítakede": "adherent"،
"bazáiya": "adjacent"،
"sifót": "adjective"،
"bazáiya": "adjoining"،
"lar": "adjust"،
"zimmadar": "admin"،
"entezamgor": "administer"،
"entezam goijjé": "administered"،
"entezam": "administration"،
"entezami": "administrative"،
"entezam goróya": "administrator"،
"taarif gorázade": "admirable"،
"tarifgor": "admire"،
"tarif goróya": "admirer"،
"cíkar gor": "admit"،
"cíkar goijjé": "admitted"،
"foóila manúic ; Adom": "Adom"،
"feth": "adoman"،
"fal": "adopt"،
"fuiccóin": "adoption"،
"dhoóñr manúic": "adult"،
"zená ; bolotkary": "adultery"،
"age uza": "advance"،
"torki goijjé": "advanced"،
"cúuida": "advantage"،
"hímmotgor": "adventure"،
"hímmot goróya": "adventurer"،
"bahádur óla": "adventurous"،
"uldha goréde": "adverse"،
"hóraf notiza": "adverse effect"،
"mocuwara": "advice"،
"mocuwara do": "advise"،
"mocuwara diyé": "advised"،
"mocuwara douya": "adviser"،
"mocuwarati": "advisory"،
"wakaaloti ; wakalot": "advocacy"،
"ukil": "advocate"،
"hábar jaáñs": "aeroplane"،
"maamela": "affair"،
"asógore": "affect"،
"asór goijjé": "affected"،
"asór gorér": "affecting"،
"ador": "affection"،
"rucé ; ducmoni": "afflict"،
"hángama": "affray"،
"dhora": "afraid"،
"baade": "after"،
"fózor or baade": "after dawn"،
"ecáa baade": "after dusk"،
"duñíjja": "after noon"،
"mogorib baade": "after sunset"،
"yían or baade": "after that"،
"duñíjja": "afternoon"،
"yíar baade": "afterwards"،
"abbar": "again"،
"uldha": "against"،
"boc": "age"،
"ejénsi": "agency"،
"egendha": "agenda"،
"dalal": "agent"،
"bicí hóraf goijjé": "aggravated"،
"dola goróon": "aggregation"،
"dola goróya": "aggregator"،
"ducmoni gorá": "aggression"،
"ducmoni": "aggressive"،
"ocánti goijjé": "agitated"،
"age": "ago"،
"before": "agor"،
"razi": "agree"،
"raazi óiye": "agreed"،
"razinoma": "agreement"،
"kétbari": "agriculture"،
"muúntu": "ahead"،
"agortu": "ahead of"،
"modot": "aid"،
"Éids biaram": "AIDS"،
"niyot": "aim"،
"niyot goijjéde": "aimed"،
"boiyar": "air"،
"éyarlain": "airline"،
"plein": "airplane"،
"plein math": "airport"،
"kulluk maijja": "airtight"،
"plein or lain": "airway"،
"plein or lain": "airways"،
"foñt ; goldi ; guragoldi": "aisle"،
"korib": "akin"،
"elarám": "alarm"،
"elarám ól ; dhuwáñ": "alarms"،
"háire afsús": "alas"،
"elbam": "album"،
"húñciar": "alert"،
"eljibra": "algebra"،
"kíta nam": "alias"،
"ajnobi ; ouduniyair manúic ; duniyair baáror manúic": "alien"،
"fúainna gor": "align"،
"mizan": "alignment"،
"zinda": "alive"،
"beggín": "all"،
"furadin ; dinthíya ; guñça din": "all day"،
"tará beggún": "all of them"،
"añára beggún": "all of us"،
"tuáñra beggún": "all of you"،
"mujmá": "all together"،
"fura bosór": "all year round"،
"Allah": "Allah"،
"elzam": "allegation"،
"elzamlagar": "allege"،
"elzam lagaiyé": "alleged"،
"elájin": "allergen"،
"kuñír": "alligator"،
"boratgoríde": "allocate"،
"borat gorídiye": "allocated"،
"borat gorídiye": "allotted"،
"ejazot do": "allow"،
"ejazot de": "allow ; allowed ; allowing"،
"hóssa": "allowance"،
"ejazot diyé": "allowed"،
"ejazot der": "allowing"،
"badam": "almond"،
"tokoriban": "almost"،
"hoñsufúl": "alocasia lowia"،
"hálika": "alone"،
"hañsabái": "along"،
"dhoóñr abas": "aloud"،
"alpha": "alpha"،
"alifbaa": "alphabet"،
"foóila": "already"،
"yó": "also"،
"bodol": "alte"،
"ekkán baade ekkán": "alternate"،
"dusára": "alternative"،
"bodola gorí": "alternatively"،
"háñlaké": "although"،
"beggún fúañti": "altogether"،
"aluminiem": "aluminium"،
"féccar gura gura fódana": "alveolarsac"،
"hámica": "always"،
"ói": "am"،
"ammúk óiye": "amazed"،
"taajuippa": "amazing"،
"taajuippa zaga": "amazing place"،
"taajuippa vidhu , taajuippa vidhuyu": "amazing video"،
"taajuippa vidhiyu": "amazing vidhiyu"،
"taajuippa mónzor": "amazing view"،
"taajuippa abas": "amazing voice"،
"taajuippa gorí": "amazingly"،
"rooñitta lal": "amber"،
"dui haça": "ambiguity"،
"muksót": "ambition"،
"moksók óla": "ambitious"،
"biaraimma tuléde garí": "ambulance"،
"hámla gorá": "ambush"،
"aró bála goró": "ameliorate"،
"sóiyigorá": "amendment"،
"bála cúuidá": "amenities"،
"gór or sáman": "amenity"،
"Amerika": "America"،
"Amerikar manúic": "American"،
"mazé": "amid"،
"mazé": "amidst"،
"guli": "ammunition"،
"aám mafí": "amnesty"،
"bútortu": "among"،
"muth": "amount"،
"fanír maf": "amount of water"،
"tabis": "amulet"،
"háñci kúci gorá": "amusement"،
"uggwá": "an"،
"hooi mas": "anabas fish"،
"molgór or rasta": "anal canal"،
"keén óiyede cek goróon": "analysis"،
"tozziyakar": "analyst"،
"bafdada": "ancestor"،
"bafdadar": "ancestral"،
"zat": "ancestry"،
"nogol": "anchor"،
"nogol maijja": "anchored"،
"fuçí mas": "anchovy"،
"agor zobanar": "ancient"،
"ar": "and"،
"kissá dhóil gorí": "anecdotally"،
"kissá": "anecdote"،
"fírista": "angel"،
"guccá": "anger"،
"kun": "angle"،
"kunakuinna": "angled"،
"zíañ": "angled gourd"،
"zíañ": "angled gourd ; luffa acutangula"،
"guccá óiyede": "angry"،
"añár loi guccá": "angry with me"،
"janwar": "animal"،
"ducmoni": "animosity"،
"sulgirá": "ankle"،
"sulgirár zura": "ankle joint"،
"áñzaiféloon": "annihilation"،
"elangor": "announce"،
"elan goijjé": "announced"،
"elan": "announcement"،
"elan gorír": "announcing"،
"frecan gor": "annoy"،
"namsára": "anonymous"،
"oinno uggwá": "another"،
"arek zaga": "another place"،
"abbar": "another time"،
"zuab": "answer"،
"zuab diyé": "answered"،
"fiáñra": "ant"،
"ducmoni": "antagonism"،
"enthibaiothík": "antibiotic"،
"acágoijjé": "anticipated"،
"acágorá": "anticipation"،
"nofórot": "antipathy"،
"furana ; furana jiníc": "antique"،
"fukmaroni dabai": "antiseptic disinfectant"،
"fuñdor muk": "anus"،
"sinta": "anxiety"،
"sinta biaram": "anxiety disorder"،
"sinta": "anxious"،
"honó": "any"،
"zehonó sáain iín": "any of these signs"،
"zehonó ekkán": "any one of these"،
"honíkka": "anybody"،
"honíkka": "anyone"،
"zendila faros": "anyway"،
"zehonózaga": "anywhere"،
"gurudá loi lagaiya aséde rok ziyán é sáf lou óll óre gaar oinno híssat foóñsa": "aorta"،
"alok": "apart"،
"zat-bákgorá": "apartheid"،
"epáthmen": "apartment"،
"zahér": "apparent"،
"zahérgori": "apparently"،
"afil gor": "appeal"،
"daháza": "appear"،
"cokol": "appearance"،
"dahá giyé": "appeared"،
"bor añtir ahéri matár théma": "appendices"،
"bor añtir ahéri matár théma": "appendix"،
"búk": "appetite"،
"sép": "apple"،
"sáman": "appliance"،
"háçe": "applicable"،
"dorhás": "application"،
"lago": "apply"،
"epoinmént ; thaimdiya ; thaim thík goijjá ; thaim mukoror gorá": "appoinment"،
"mokoror gor": "appoint"،
"mokoror goijjé": "appointed"،
"epuainmén": "appointment"،
"híssa gorá": "apportion"،
"mozaloifari": "appreciate"،
"kimot raká": "appreciation"،
"ham cíkoon": "apprentice"،
"hañsé aiyó": "approach"،
"hañsé aiccé": "approached"،
"hañsé aiyér": "approaching"،
"munaséf": "appropriate"،
"munaséf gorí": "appropriately"،
"munaséfi": "appropriateness"،
"monzuri": "approval"،
"monzur gor": "approve"،
"monzur goijjéde": "approved"،
"tokoriban": "approximately"،
"Ipril": "April"،
"sámmor hoor hosara noóibélla": "apron"،
"faní": "aqua"،
"Arob or manúic": "Arab"،
"Arobi": "Arabic"،
"Arobi zuban": "Arabic language"،
"monzokká": "arbitrary"،
"fáiselagor": "arbitrate"،
"lesu": "arbutus"،
"arkiték": "architect"،
"arkiték or elóm": "architecture"،
"maháfuz gor": "archive"،
"dil or zoo": "ardour"،
"ói": "are"،
"zaga": "area"،
"hansaba": "area between ear and eyes"،
"elakar kóudh": "area code"،
"matamatido": "argue"،
"tokorar goijjé": "argued"،
"barábari": "argument"،
"fúaná": "arid"،
"uçé": "arise"،
"uçér": "arising"،
"dhuwáñ": "arm"،
"hátiyar óla": "armed"،
"hátiyar ola fóus": "armed force"،
"hátiar lor": "arming"،
"booñl": "armpit"،
"booñl or keñc": "armpit hair"،
"hátiyar": "arms"،
"militiri": "army"،
"tokoriban": "around"،
"mon tulé": "arouse"،
"bondubosgor": "arrange"،
"tortib diyé": "arranged"،
"entezam": "arrangement"،
"entezam gorír": "arranging"،
"dór": "arrest"،
"gereftar goijjé": "arrested"،
"foóñsá": "arrival"،
"foóñse": "arrive"،
"thaim loi foóñso": "arrive on time"،
"foóñisse": "arrived"،
"foóñsoya": "arriver"،
"foóñsér": "arriving"،
"tukabbori": "arrogance"،
"anaçi": "arrogant"،
"tir": "arrow"،
"tiror cokól": "arrow cokól"،
"tir or cokól": "arrow shape"،
"zolaidoon": "arson"،
"ooin diya hámla": "arson attack"،
"fón": "art"،
"kolób ottú lou neeledé rok": "artery"،
"ciz": "article"،
"cúndor gorí buzái zanedé": "articulate"،
"nokoli": "artificial"،
"boro gaán": "artillery"،
"sába tulóya": "artist"،
"fothú añka": "artwork"،
"hoñsur boñ": "arum-lobe"،
"éddur": "as"،
"zeddúr duréfaro éddur": "as far as"،
"zeddúr fare": "as far as possible"،
"zendila nise asé": "as follow"،
"zeén néki": "as if"،
"oinno maincór dhoilla": "as many others"،
"hísafe": "as of"،
"zeddúr toratori": "as soon as"،
"fúañti fúañti": "as well as"،
"borabor": "as..as"،
"uore uçó: ": "ascend"،
"uore uçó": "ascent"،
"bálagori cekgor": "ascertain"،
"sái": "ash"،
"sal kuáñra": "ash gourd"،
"Asía": "Asia"،
"ekdháikka": "aside"،
"fusárgor": "ask"،
"fusárgor": "ask ; asked ; asking"،
"ará": "ask to do"،
"fusár goijjé": "asked"،
"fusár gorér": "asking"،
"gúm": "asleep"،
"nozoriya": "aspect"،
"dúñna": "asphalt"،
"medicine for headache": "Aspirin"،
"Asór thaim": "Asr"،
"asór": "asr"،
"fun": "ass"،
"doró gorí barbár hoijja gor": "assail"،
"háte théng e hoijja goróya": "assailant"،
"kaatil": "assassin"،
"kotól gorá": "assassination"،
"doró maramari": "assault"،
"doró maramari diyé": "assaulted"،
"doró maramari der": "assaulting"،
"dola gor": "assemble"،
"dola gorír": "assembling"،
"monzurgoróon": "assent"،
"dawassátehoó": "assert"،
"antazlaga": "assess"،
"antazlagagiyé": "assessed"،
"andaz lagair": "assessing"،
"saáisiti fáiseladoon": "assessment"،
"mal": "asset"،
"bekuf": "asshole"،
"mokoror gor": "assign"،
"mokoror goijjé": "assigned"،
"esáinmén": "assignment"،
"musáda gor": "assist"،
"musáda": "assistance"،
"musáda": "assistant"،
"modot diyé": "assisted"،
"modot der": "assisting"،
"córik goijjé": "associated"،
"anjamon": "association"،
"tháare": "assume"،
"mani loiyé": "assumed"،
"biccácde": "assure"،
"tarafúl": "aster"،
"ammúikka": "astonished"،
"taajupgorá": "astonishing"،
"asman ot zouya": "astronaut"،
"nokcótara": "astronomy"،
"faná": "asylum"،
"faná tuoya": "asylum seeker"،
"ot": "at"،
"ebbre": "at all"،
"oinno honó thaim ot": "at any other time"،
"yaa": "at the moment"،
"ekku bare": "at the same time"،
"háiye": "ate"،
"atlas": "atlas"،
"maahóul": "atmosphere"،
"éthom": "atom"،
"koffarade": "atone"،
"uore": "atop"،
"entahá zulúm": "atrocity"،
"fúañti laga": "attach"،
"bazáiya": "attached"،
"lagaiyahabos": "attachment"،
"hámla": "attack"،
"hámala goijjé": "attacked"،
"hámala goróya": "attacker"،
"hámala gorér": "attacking"،
"kucíc": "attempt"،
"kucíc goijjé": "attempted"،
"kucíc gorér": "attempting"،
"uçí": "attend"،
"háñziri": "attendance"،
"uiththé": "attended"،
"háñzir óuya": "attendee"،
"uçér": "attending"،
"díyan": "attention"،
"moórmar": "attest"،
"lebas ; fucák ; dhrés ; hoor": "attire"،
"andazenozor": "attitude"،
"andaze nozor or": "attitudinal"،
"ukil": "attorney"،
"thane": "attract"،
"thainné": "attracted"،
"sifót": "attribute"،
"baiyon": "aubergine"،
"nilam": "auction"،
"fúnazade": "audible"،
"odhimithar": "audimeter"،
"abas": "audio"،
"abas modoti": "audio aid"،
"abas mizan gorá": "audio settings"،
"hísab cekgor": "audit"،
"Ogós mác": "August"،
"mami": "aunt"،
"mami": "aunty"،
"Australía dec": "Australia"،
"Australíar": "Australian"،
"asóli": "authentic"،
"sóiyisábutgoró": "authenticate"،
"sóiyisábut": "authentication"،
"lekóya": "author"،
"adikar diyí": "authorised"،
"adikar": "authority"،
"adikari": "authorization"،
"adikar de": "authorize"،
"garí": "auto"،
"nizefuragor": "autocomplete"،
"nizebaze": "automatic"،
"cít or cúru": "autumn"،
"asé ; faazaibou": "avaiable"،
"hamot nuaiye": "avail"،
"háli táka": "availability"،
"asé": "available"،
"mazíla": "average"،
"muk fírafél": "avert"،
"ekkisím ór háil gula": "avocado"،
"abukadu tel": "avocado oil"،
"baso": "avoid"،
"tán": "awake"،
"boccíc": "award"،
"boccíc diyagiyé": "awarded"،
"zane": "aware"،
"zanai diya": "awareness"،
"duré": "away"،
"dhorai izzot gorá": "awe"،
"ódorbaára taajuippa": "awesome"،
"dhor lage fán": "awful"،
"ekkená gorí": "awhile"،
"kuróil": "ax"،
"kuróil": "axe"،
"azan": "azan"،
"dusára nombór ór Rohingya hórof": "b"،
"leda fuain": "babies"،
"leda fua": "baby"،
"fith": "back"،
"dañrar bic": "back pain"،
"fisór dhák , fisdhák , fith dhák": "back side"،
"gibot": "backbite"،
"gibot goróya": "backbiter"،
"dañrar áñdhdhi": "backbone"،
"taaid diyé": "backed"،
"fisór-mónzor": "background"،
"fissábeg": "backpack"،
"fisór dat": "backside teeth"،
"kopí gorí rak": "backup"،
"fissá": "backward"،
"fúañná nundiya cúor or gusso": "bacon"،
"bura": "bad"،
"hóraf amól": "bad deed"،
"bodkismot": "bad luck"،
"béij": "badge"،
"buragorí": "badly"،
"bedhminton": "badminton"،
"hóilla": "bag"،
"Bogdad cóor": "Baghdad"،
"Baghdat Bogdat cóor": "Baghdat"،
"lamba ruthi": "baguette"،
"zabin": "bail"،
"borkí": "bait"،
"mizan": "balance"،
"talufura": "bald"،
"talu": "baldness"،
"boól": "ball"،
"boól pén": "ball pen"،
"fódana": "balloon"،
"bañc": "bamboo"،
"bañcór búr": "bamboo boat"،
"thiañra": "bamboo fence"،
"thala": "bamboo hat"،
"bara": "bamboo net"،
"bañcór suañ": "bamboo pipe"،
"zuñir": "bamboo rain shield"،
"bañc furoil": "bamboo root"،
"bara": "bamboo slip"،
"maná": "ban"،
"kela": "banana"،
"loilla isa": "banana prawn"،
"bandís": "bandage"،
"áina áf": "banded krait"،
"dúm dúm baijja": "bang"،
"Bangkók cóor": "Bangkok"،
"beéng": "bank"،
"sona faik": "bank myna"،
"beéng ór thiañ": "bank note"،
"dewali": "bankruptcy"،
"boutha": "banner"،
"bari": "bar"،
"nafit": "barbar"،
"raámótsára": "barbaric"،
"gusso sékoni": "barbecue grill"،
"báakodh ; lainola koudh": "barcode"،
"dorgor": "bargain"،
"bolazuri gól": "barge"،
"haiñjja": "barn"،
"kural mas": "barram undi"،
"bázah": "barren"،
"oñsá": "barrier"،
"asás": "base"،
"darmedar": "based"،
"fiçoon": "bashing"،
"buniyadi": "basic"،
"buniyadi sáñis": "basic science"،
"asási hísafe": "basically"،
"dúoni gaála": "basin"،
"asás": "basis"،
"báñir": "basket"،
"baskét boól": "basketball"،
"samba bañdor": "bat"،
"gaadúo": "bath"،
"gusólhána": "bathroom"،
"gaadúoni gaála": "bathtub"،
"meçá debellá norom ciz": "batt"،
"bethari": "battery"،
"larái": "battle"،
"laráir moidan": "battlefield"،
"doijjar góula": "bay"،
"Brithís ór hóbogwa ókkol": "BBC"،
"ó": "be"،
"kíalgoró ; zanani rakó ; húñciyar": "be aware"،
"norom ektiyar goró": "be kind"،
"sobór gor": "be patient"،
"taákitgor": "be sure"،
"doijjar sor": "beach"،
"gañtó": "bead"،
"tesfoór": "beam"،
"félur dana": "bean"،
"bálluk": "bear"،
"darí": "beard"،
"bordac gorír": "bearing"،
"mar": "beat"،
"maijjéde": "beaten"،
"mairfith": "beating"،
"cúndor": "beautiful"،
"cúndor": "beautiful ; more beautiful ; most beautiful"،
"cúndor san": "beautiful moon"،
"cúndor ; bicí cúndor ; ebbre cúndor": "beautifull"،
"cúndoijja gorí": "beautifully"،
"cúndor": "beauty"،
"óiye": "became"،
"kiállahoilé": "because"،
"duara": "because of"،
"óiai": "become"،
"ói aiyér": "becoming"،
"gadi": "bed"،
"horangfuk": "bed bug"،
"bedh kabár": "bed cover"،
"bicáni saddor": "bed sheet"،
"bedh or fúlor hañsa": "bed skirt"،
"horangfuk": "bedbuck"،
"bistára": "bedding"،
"gúm or hamrá": "bedroom"،
"balur sorot sori háde manúic": "beduin"،
"modú": "bee"،
"modúr-bahá": "bee-haive"،
"gouru gusso": "beef"،
"aiccíl": "been"،
"bálluk": "beer"،
"age": "before"،
"fuáiñtta": "before dawn"،
"yaar age": "before this"،
"foóila loti": "beforehand"،
"mag": "beg"،
"cúru goijjé": "began"،
"fuain biya": "beget"،
"hóratmoni": "beggar"،
"hórat mooni ; hórat magoya ; bíkari": "begger"،
"cúrugor": "begin"،
"cúrugor": "begin ; began ; begun ; begining"،
"cúru": "beginning"،
"torfórtu": "behalf"،
"sol": "behave"،
"soillé": "behaved"،
"soler": "behaving"،
"sólluk ; sólluk gorá ; solasol": "behavior"،
"solasol": "behaviour"،
"fisóttu": "behind"،
"wojud óir": "being"،
"zimháçi tákoon": "being patient of pain"،
"Beljiem": "Belgiem"،
"Belgium or cóor": "Belgium"،
"biccác": "belief"،
"biccác gor": "believe"،
"biccác goijjé": "believed"،
"imanwala": "believer"،
"beél": "bell"،
"dhoóñr moris": "bell pepper"،
"maramarit cámil aséde": "belligerent"،
"tolfeth": "belly"،
"zúla": "belly ; tummy"،
"taaluk": "belong"،
"ibár": "belong to her"،
"itar": "belong to him"،
"tarár": "belong to them"،
"añárar": "belong to us"،
"tuáñrar": "belong to you"،
"honíkkár óon": "belonged"،
"sáman": "belonging"،
"nise": "below"،
"duali": "belt"،
"bangkú": "bench"،
"beháñ ekkán": "bend"،
"nise": "beneath"،
"fáaidaola": "beneficial"،
"fáaida fooya": "beneficiary"،
"fáaida": "benefit"،
"norom": "benign"،
"behañ": "bent"،
"hárani ; furani": "bereavement"،
"beeri": "berry"،
"nogol maijja": "berthed"،
"Berut cóor": "Berut"،
"dháhortu": "beside"،
"baade": "besides"،
"sóbse gom": "best"،
"atáforma": "bestow"،
"zibbat": "bet"،
"fan": "betel"،
"súari": "betel nut"،
"mangni goijjé": "betrothed"،
"beétor": "better"،
"bútore": "between"،
"duré": "beyond"،
"dui": "bi"،
"macé máce": "bi-monthly"،
"háfta-háfta": "bi-weekly"،
"taasubi ; sáithlo ; ekdhéikka ; eksáiththa ; ektorfíya ; dháikkaza ; dháikkamare": "bias"،
"kriccen or dórmo kitab": "bible"،
"Kricen or kitab": "Bible"،
"dhuwáñ": "biceps"،
"théngari": "bicycle"،
"buli ; leleng": "bid"،
"dhoóñr": "big"،
"dhoóñr": "big ; bigger ; biggest"،
"boro cóor": "big city"،
"bordoo": "big knife"،
"boro dúañ": "big smoke"،
"théng or buijjá ouñl": "big toe"،
"dhoóñijja": "bigger"،
"ebbre boro": "biggest"،
"ekkuippa": "bigotry"،
"bikini": "bikini"،
"dunú sáith cámil aséde": "bilateral"،
"bil": "bill"،
"bílbudh": "billboard"،
"kuthí": "billion"،
"sátar dhabba": "bin"،
"ban": "bind"،
"bañdóni": "binder"،
"síndur": "bindi"،
"zurmí": "binoculars"،
"zati maalumat": "bio data"،
"ziboni": "biographical"،
"zivoni": "biology"،
"dui thala fak plane": "biplane"،
"faik": "bird"،
"zormo": "birth"،
"foidaci sarthifikéith": "birth certificate"،
"biya kontróul": "birth control"،
"zonomdin": "birthday"،
"zormo dak": "birthmark"،
"biskuth": "biscuit"،
"fadúri": "bishop"،
"biskuth": "biskut"،
"bison janwar": "bison"،
"tukuça": "bit"،
"ekkinísara": "bit ; a little bit"،
"kuttaya": "bitch"،
"hooñrmar": "bite"،
"tita": "bitter"،
"tita": "bitter ; bittest"،
"horola": "bitter gourd"،
"horola": "bitter melon"،
"bicí tita": "bitterer"،
"ebbre tita": "bitterest"،
"hala": "black"،
"hala beri": "black berry"،
"hala baila": "black goby"،
"halazira": "black seed"،
"hanhaça faik": "black-faced woods wallow"،
"blábbudh": "blackboard"،
"halagor": "blacken"،
"dómkidi foisá usúl gor": "blackmail"،
"mutor sála": "bladder"،
"bleith": "blade"،
"hosúri": "blame"،
"háli": "blank"،
"hombol": "blanket"،
": ": "blast"،
"thathkaça ooin": "blaze"،
"lou neeler": "bleeding"،
"miyáñ": "blend"،
"borkot de": "bless"،
"borkoti": "blessed"،
"fúu diyé": "blew"،
"añdá": "blind"،
"añdá": "blindness"،
"miçíng gor": "blink"،
"decór blók": "bloc"،
"sair faiththá": "block"،
"gulgorí bongorá": "blockade"،
"bongoijjá": "blocked"،
"blog": "blog"،
"lal óloiddá sul ola manúic": "blonde"،
"lou": "blood"،
"louwór frecar": "blood pressure"،
"lou lán goijjá": "bloodied"،
"boól fúl": "bloody lily"،
"cíyair dak": "blot"،
"blóus": "blouse"،
"fúude": "blow"،
"boiyar baár": "blow air"،
"urigiyói": "blown"،
"cúrma rong": "blue"،
"meiththa fúndora": "blue-tailed bee-eater"،
"cíyaiberi": "blueberry"،
"bútaá": "blunt"،
"añccwá": "blur"،
"miyundá dekéde": "blurred"،
"bual mas": "boal"،
"boóudh": "board"،
"buth": "boat"،
"gaa ola": "bodied"،
"fanír jisím óll": "bodies of waters"،
"jisími": "bodily"،
"gaa": "body"،
"sotór ; sotór ór hót": "body expose limit"،
"furuza": "body part"،
"jisím ór paáth óll": "body parts"،
"sóiyi noó": "bogus"،
"godhgoça": "boil"،
"godhgoçar de faní": "boiling water"،
"uzor ola": "boisterous"،
"waazé": "bold"،
"waazégoijjá": "bolded"،
"mozbutgor": "bolster"،
"bolthú": "bolt"،
"buúm": "bomb"،
"bumbari": "bombardment"،
"loiththa mas": "bombay duck"،
"sóiyi": "bona"،
"asól": "bona fide"،
"bañdá": "bond"،
"áñdhdhi": "bone"،
"fáñc": "bone marrow"،
"kitab": "book"،
"bukíng ór háwala": "booking reference"،
"kitabor hót": "bookmark"،
"boro abas": "boom"،
"borzuta": "boot"،
"tíyaibar zaga": "booth"،
"mal yá thiañ bekaanuni loifélon": "booty"،
"boóudhar": "border"،
"címanar zaga": "border area"،
"bezarlage": "bore"،
"alcílager": "bored"،
"alcí lage": "boring"،
"foida óiye": "born"،
"elaka": "borough"،
"udárlo": "borrow"،
"udár": "borrowing"،
"boro": "boss"،
"dunúwa": "both"،
"frecan gor": "bother"،
"frecani goróuya": "bothersome"،
"botol": "bottle"،
"hodú": "bottle gourd"،
"hodú fúl": "bottle gourd flower"،
"óuñri hák ; hóuñri ák": "bottle gourd leaves"،
"hodú": "bottled gourd"،
"tola": "bottom"،
"habosfúl": "bougainvillea"،
"kinné": "bought"،
"waapes fáldai uçé": "bounce"،
"gírá": "boundary"،
"bor añti": "bowel"،
"rukú": "bowing"،
"gaála": "bowl"،
"kuththa": "box"،
"kuththa bóijja": "boxed"،
"morot fua": "boy"،
"fuain": "boys"،
"louwór precar": "BP"،
"bodoli": "bra"،
"hátor cin": "bracelet"،
"gof ; gof mar": "brag"،
"sul or bini": "braid"،
"demak": "brain"،
"demakor thumar": "brain tumor"،
"demakola": "brainy"،
"híssa": "branch"،
"márha": "brand"،
"fitol": "brass"،
"baádur": "brave"،
"baáduri gorí": "bravely"،
"baáduri": "bravery"،
"caabác": "bravo"،
"báñgo": "breach"،
"báingge": "breached"،
"báñger": "breaching"،
"ruthi": "bread"،
"couça": "breadth"،
"báñgo": "break"،
"fáçe": "break ; broke ; broken ; breaking"،
"bángga": "breakage"،
"tíaigiyói": "breakdown"،
"beínnár nasta": "breakfast"،
"bánggasúra": "breaking"،
"torutaza hóbor": "breaking news"،
"dut": "breast"،
"hórina": "breast bone"،
"maar dut háboon": "breastfeeding"،
"niáñc": "breath"،
"niáñclo": "breathe"،
"niácthan": "breathing"،
"nosól": "breed"،
"neelizaa": "brexit"،
"ith": "brick"،
"ith bángga": "brickbat"،
"boou": "bride"،
"ful": "bridge"،
"visa bréijing víza": "bridging"،
"baiththá": "brief"،
"baiththá gorí hoiyé": "briefed"،
"muktosor gorí hoór": "briefing"،
"baiththá gorí": "briefly"،
"foór": "bright"،
"an": "bring"،
"fúañti anó": "bring together"،
"loianér": "bringing"،
"baiyon": "brinjal"،
"Brithíc": "Britain"،
"mormoijja": "brittle"،
"ceththá": "broad"،
"borogor": "broaden"،
"bici ceththá": "broader"،
"aám hísafe": "broadly"،
"háil hoppi": "broccoli"،
"báiñgge": "broke"،
"báñgga": "broken"،
"norolir guijja": "bronchi"،
"féccar dhoóñr noroli": "bronchioles"،
"fúroni": "broom"،
"bái": "brother"،
"zal": "brother's wife"،
"bowór bái": "brother-in-law"،
"ainné": "brought"،
"roñiththa": "brown"،
"tuai-neela": "browse"،
"tuai-neelai-douya": "browser"،
"añsá": "bruise"،
"añsá háiye": "bruised"،
"añsá hár": "bruising"،
"burus": "brush"،
"rahámsára": "brutal"،
"rahámot sára": "brutally"،
"balthí": "bucket"،
"Buddá ré fuñzoiya": "Buddhist"،
"bajéth": "budget"،
"sela muic": "buffalo"،
"horangfuk": "bug"،
"banaituló": "build"،
"bildhíng": "building"،
"boinné": "built"،
"banaiya": "built-in"،
"battir boól": "bulb"،
"bulbuli": "bulbul"،
"dhoóñr": "bulk"،
"guli": "bullet"،
"tonggoijjé": "bullied"،
"tongor": "bully"،
"gundhagiri": "bullying"،
"ail": "bund"،
"buñda": "bundle"،
"maáni sára": "bunk"،
"hórguc or sóo": "bunny"،
"fuñzá": "burden"،
"bicí mockil": "burdensome"،
"debal diya town": "burg"،
"bon": "burger"،
"suri": "burglary"،
"gañrai félaiye": "buried"،
"zola": "burn"،
"fura": "burned"،
"baás": "bus"،
"baás esthicén": "bus station"،
"zoóñl , jádh duwa": "bush"،
"hasharbar": "business"،
"duadi": "busy"،
"mogor": "but"،
"hocái": "butcher"،
"mangula": "butt"،
"bathár": "butter"،
"hoddafuti": "butterfly"،
"mangula": "buttock"،
"manggula óll": "buttocks"،
"butang": "button"،
"kin": "buy"،
"kin , kinnyé , kiner , kinifélaiye": "buy ; bought ; buying ; bought"،
"kinir": "buying"،
"besakina": "buying and selling"،
"bénbenóon": "buzz"،
"áta": "by"،
"ókkole , beggúne": "by all"،
"duñrai": "by chasing"،
"miliyóre": "by coordinating"،
"fúaiyóre": "by drying"،
"bolazuri": "by force"،
"zandi": "by giving life"،
"mili": "by meeting"،
"miníth hísafe": "by minute"،
"sekén hísafe": "by second"،
"táki": "by staying"،
"30 din nothís zoma goríyóre": "by submitting 30 day nothís"،
"tará nizebaze": "by themselves"،
"báfi": "by thinking"،
"thaim hísafe ; góndha ye": "by time"،
"báith": "byte"،
"bañdá hoppi": "cabbage"،
"kebín": "cabin"،
"almali": "cabinet"،
"kebel": "cable"،
"fizara": "cage"،
"Kairou cóor": "Cairo"،
"kek": "cake"،
"kelsiem": "calcium"،
"hísafgor , hísap goré , gono": "calculate"،
"hísaf goroní , kalkuleithar": "calculator"،
"kalendhar": "calendar"،
"kelendhar": "calender"،
"doóñra": "calf"،
"dhak": "call"،
"abbar koól gor ; dubara koól gor": "call me back"،
"waapes dhak": "callback"،
"dhaikké": "called"،
"dhaker": "calling"،
"nizám gor": "calm"،
"nizám ór": "calming"،
"hatal mas": "calta"،
"uñth": "camal"،
"vidu kemra": "camcorder"،
"aiccé": "came"،
"uñth": "camel"،
"kemera": "camera"،
"keém": "camp"،
"kempas": "campass"،
"keémor ooin": "campfire"،
"kempás ; jamíya elaka": "campus"،
"foth": "can"،
"lagai fari": "can apply"،
"faribóu": "can be"،
"foth kúloni": "can opener"،
"zurá": "canal"،
"Kenbera thoón": "Canberra"،
"kensel": "cancel"،
"kensel goijjé": "cancelled"،
"kensar": "cancer"،
"ummitwar": "candidate"،
"mumbatti": "candle"،
"girá óla gas , kuicól , kuccóil": "cane"،
"cíyaikka dat": "canine"،
"thoin": "canister"،
"maincór gusso hóuya": "cannibal"،
"nofaré": "cannot"،
"noo": "canoe"،
"kenthín": "canteen"،
"sugór hañsa": "canthus"،
"doró hóchoiccá hoor": "canvas"،
"búth thana giyé": "canvassed"،
"meçá": "cap"،
"kabeliyoti": "capability"،
"kaabel": "capable"،
"salahiyot": "capacity"،
"rasdán": "capital"،
"dhoóñr hátor hórof": "capital letter"،
"dhoóñr moris": "capsicum"،
"képca": "captcha"،
"mouzúr nam": "caption"،
"dóro": "capture"،
"dóijje": "captured"،
"garí": "car"،
"garír síth": "car seat"،
"garír cóurum": "car showroom"،
"karbun": "carbon"،
"kaádh": "card"،
"elasi": "cardamom"،
"dil or biaram": "cardiac"،
"kolób lói taaluk aséde": "cardio"،
"kolób arde fécca lói taaluk dé": "cardiopulmonary"،
"dekbal": "care"،
"dekbal , dekbal gor": "care ; do care"،
"úñciar": "careful"،
"úñciarigorí": "carefully"،
"dekbal goróya": "caregiver"،
"faththa sára": "careless"،
"dekbal goróya , kérmos goróya , soóya": "carer"،
"dekbal goróya": "caretaker"،
"bicí dukdi mariféla": "carnage"،
"gondanar cáa rok": "carotid"،
"mistíri": "carpenter"،
"bíñyor": "carpenter bee"،
"haling": "carpet"،
"boói loigiyé": "carried"،
"óloiddá mula": "carrot"،
"boói loiza": "carry"،
"loiza , loigiyé , loizar": "carry ; carried ; carrying"،
"keis": "case"،
"keis mutála gorá": "case study"،
"keis hamgoróya": "caseworker"،
"nogot": "cash"،
"tham gula": "cashew fruit"،
"thamor dana": "cashew nut"،
"tham gas": "cashew tree"،
"kecíyar": "cashier"،
"keñça gula": "cashima"،
"bekaida": "casual"،
"moota ókkol ; mora ókkol": "casualties"،
"lac": "casualty"،
"bilai": "cat"،
"bodoli bélla modot gorá": "catalyst"،
"sugór biaram": "cataract"،
"bicí boro": "catastrophic"،
"dóro": "catch"،
"kisím ókkol": "categories"،
"kisím kisím goijjá": "categorised"،
"kisím kisím goró": "categorize"،
"kisím": "category"،
"hána bondubos goróya": "caterer"،
"hána bondubos gorér": "catering"،
"bilaitimas": "catfish"،
"gouru-sóol": "cattle-shed"،
"dórat foijjé": "caught"،
"fúl hoppi": "cauliflower"،
"gor": "cause"،
"gorá": "cause to do"،
"gorágiyé": "caused"،
"gorér": "causing"،
"gañt": "cave"،
"golar sal": "cavity"،
"CCTV telivicén": "CCTV"،
"komputar or rekáadh": "CD"،
"tíaigiyó": "ceased"،
"sót": "ceiline"،
"domdoma": "ceiling"،
"sal or fangká": "ceilling fan"،
"kúcibana ; mahafil bana ; jesón": "celebrate"،
"idd": "celebration"،
"seél": "cell"،
"hoborostan": "cemetery"،
"foisá": "cent"،
"mazé": "center"،
"mazémaijja": "centered"،
"santigreidh": "centigrade"،
"santimitar": "centimetre"،
"siañra , bokcíc , dangorá , núks , zanibár jiníc": "centipede"،
"mazór": "central"،
"senthar": "centre"،
"cót bosór": "century"،
"cóbah": "ceremony"،
"sarméth": "cermet"،
"kessú": "certain"،
"hámahá gorí": "certainly"،
"sónot , sáthifikéith": "certificate"،
"tosdikgoijjá": "certified"،
"tosdikgor": "certify"،
"baicca danir doroza": "cervix"،
"cin": "chain"،
"kurusí": "chair"،
"rois": "chairman"،
"murobbiana": "chairmanship"،
"cok": "chalk"،
"celénc": "challenge"،
"sambafúl": "champak"،
"cempien": "champion"،
"mouka": "chance"،
"zúnha": "chandelier"،
"bodola": "change"،
"bodol: ": "change ; changed ; changing"،
"bodoillé": "changed"،
"bodoloni": "changer"،
"tobdili ókkol": "changes"،
"cenel": "channel"،
"fúañti guzor": "chant"،
"fúañti guzoijjé": "chanted"،
"fúañti guzorer": "chanting"،
"oulzóul": "chaos"،
"híssa": "chapter"،
"hásolot": "character"،
"húbi": "characteristic"،
"elzam": "charge"،
"elzam lagaiyé": "charged"،
"cajar": "charger"،
"elzam lagar": "charging"،
"sótkaháirat": "charity"،
"C' yor koudh lofzó": "Charlie"،
"síri ; cúndor ; comka": "charm"،
"kaanuni sónot": "charter"،
"lora": "chase"،
"sáñza": "chastisement"،
"gopmaroon": "chat"،
"óosta": "cheap"،
"dúkado": "cheat"،
"sek": "check"،
"cek goijjé": "checked"،
"cek gorér": "checking"،
"cekgoríbar liíst": "checklist"،
"galsaba": "cheek"،
"zaimor háñthdhi": "cheekbone"،
"kúcióla": "cheerful"،
"císs": "cheese"،
"císs forol": "cheese slider"،
"císs lorá": "cheese stick"،
"citabag": "cheetah"،
"rañdár masthor": "chef"،
"miala fuain dór semí": "chemise"،
"dabai banoya": "chemist"،
"xaron": "chemistry"،
"cekbuúk": "chequebook"،
"ceri gula": "cherry"،
"sínah": "chest"،
"sínar keñc": "chest chair"،
"cahbulut": "chestnut"،
"saba": "chew"،
"kurásso": "chick"،
"kurá": "chicken"،
"kurá gusso": "chicken meat"،
"sonabuth": "chickpea"،
"boro": "chief"،
"fua": "child"،
"fuain sámaloya": "childcare"،
"baicfoni": "childhood"،
"fuasiañra": "childish"،
"fuain sára": "childless"،
"fuain sára juça": "childless couple"،
"fuain": "children"،
"moris": "chilli"،
"cít": "chills"،
"gozila": "chimpanzee"،
"zaim": "chin"،
"Sina": "China"،
"cíp": "chip"،
"baçoilla dat": "chisel tooth"،
"beça cúor or añti": "chitlins"،
"cókleith": "chocolate"،
"foson": "choice"،
"kolestrol": "cholesterol"،
"basílo": "choose"،
"honó ekkán basó": "choose either one"،
"basér": "choosing"،
"hóñla": "chopstick"،
"Kríst": "Christ"،
"Kriccen": "Christian"،
"Krísmás": "Christmas"،
"tamar rong": "chromium color"،
"lamba biaram": "chronic"،
"bosór loi tortib diya": "chronological"،
"tuariki tarík ókkol ór elóm": "chronology"،
"múth": "chunk"،
"giriza": "church"،
"cuñça": "cigar"،
"sígeréth": "cigarette"،
"kétir boór fata": "cilantro leaf"،
"sínama , baickúth or hóol": "cinema"،
"daalsiní": "cinnamon"،
"gul": "circle"،
"gulguilla cokól": "circle shape"،
"gul": "circular"،
"fakkáraiya zerzobor ókkol": "circular vowels"،
"fakkái gúroon": "circulation"،
"súnnot gorá": "circumcice"،
"súnnot goijjé": "circumciced"،
"fakkáraiya": "circumference"،
"háalot": "circumstance"،
"háalot óll": "circumstances"،
"decóitta": "citizen"،
"decóittayi": "citizenship"،
"decóittayi sarthifikéith": "citizenship certificate"،
"fáttara gula": "citrus"،
"cóor": "city"،
"manúic": "civc"،
"sivík": "civic"،
"sivíl": "civil"،
"gór bañdedé injiniár": "civil engineer"،
"decóitta hókuki kaanun óll": "civil rights laws"،
"hókumotor manúic": "civil servant"،
"decóitta": "civilian"،
"cáictagiri": "civilization"،
"daawa": "claim"،
"talimar: ": "clap"،
"talimar: ": "clap ; clapped ; clapping"،
"sófaiyi": "clarification"،
"sáfgori buzáiye": "clarified"،
"waazégor": "clarify"،
"sáf": "clarity"،
"gúañguiñ": "clash"،
"kláss": "class"،
"furana": "classic"،
"tobka forók gorá": "classification"،
"cupaiya": "classified"،
"kláss or fúñaijja": "classmate"،
"kláss ór hamrá": "classroom"،
"golar keñsi": "clavicle"،
"sáf": "clean"،
"sáf goijjé": "cleaned"،
"sáf goróya": "cleaner"،
"sáfgorér": "cleaning"،
"sáfsutura": "cleanliness"،
"fúraifél": "cleanse"،
"fúraifélar": "cleansing"،
"sáf": "clear"،
"sáfsaf": "clear-cut"،
"sáfgorá ; unca": "clearance"،
"sáf goijjé": "cleared"،
"sáfgorér": "clearing"،
"sáfsáf gorí": "clearly"،
"salak": "clever"،
"kilíkgor": "click"،
"gaák": "client"،
"moóusom , abaháwa": "climate"،
"baái uçó": "climb"،
"kilínik": "clinic"،
"daktori": "clinical"،
"daktori hísafe": "clinically"،
"klipboudh , kilíp óla budh": "clipboard"،
"zagana": "clipper"،
"góuçi": "clock"،
"góuçir keña": "clock arm"،
"naçi giyói": "clogged"،
"bongor": "close"،
"bon": "closed"،
"hañsé hañsé": "closely"،
"hañsé": "closer"،
"lou wór dola": "clot"،
"asílaiya hoor": "cloth"،
"hoor or lamba tukuça": "cloth strip"،
"hoor": "clothes"،
"hoor ókkol": "clothing"،
"miyóla": "cloud"،
"abár": "cloudy weather"،
"kláb": "club"،
"araura": "clue"،
"santimitar": "cm"،
"co": "co"،
"Córik-baf": "Co-parent"،
"fattór ór añára": "coal"،
"entehát": "coalition"،
"kuth": "coat"،
"dañrar matá": "coccyx"،
"rata kurá": "cock"،
"teillasura": "cockroach"،
"ratar tassí": "cockscomb"،
"naijjol": "coconut"،
"naijjol or dut": "coconut milk"،
"naijjol tel": "coconut oil"،
"naijjol gas": "coconut tree"،
"naijjol tel": "cocunut oile"،
"koudh": "code"،
"mojbur gor ; gorífélaiye ; mojbur gorér": "coerce"،
"bolazuri": "coerced"،
"zobór": "coercion"،
"bolazuri": "coercive"،
"kofí duan": "coffe shop"،
"kofí": "coffee"،
"militáka": "cohesion"،
"ekdhoilla óde": "cohesive"،
"foisá": "coin"،
"ettefakan , ettefák or sáñte": "coincide"،
"ektefakan óiye": "coincided"،
"ektefakan": "coincidental"،
"thándhah": "cold"،
"thándha faní": "cold water"،
"thándha faní": "coldwater"،
"sáñt do": "collaboration"،
"kolár": "collar"،
"kolar , clavicle": "collar bone"،
"júiththa": "collared myna"،
"maalumat zoma goróya": "collator"،
"fúañijja": "colleague"،
"thiañ tul": "collect"،
"thiañ tuillé": "collected"،
"thiañ tulá": "collection"،
"fúañti": "collectively"،
"koóléij": "college"،
"koléij arde hamtua toiyari": "college and career ready"،
"dúc": "collision"،
"bor añti": "colon"،
"rong": "color"،
"sparking jílmil jílmil": "colorful"،
"zála": "coloring"،
"rongsára": "colorless"،
"rong ókkol": "colors"،
"rong": "colour"،
"hámba ; amút ; thúni": "colum"،
"thúni": "column"،
"óni": "comb"،
"larái": "combat"،
"larái gorér": "combating"،
"miyóon": "combination"،
"zurade": "combine"،
"milaiyé": "combined"،
"ai: ": "come"،
"ekule ai": "come acros"،
"lam": "come down"،
"age aiyó , sámme aiyó , muúmmikka aiyó , age uzo": "come forward"،
"bútore ai , bútore aiyó": "come in"،
"neeli aiza": "come off it"،
"neeli ai , neeli aiyó , baáre neelo , baáir ó": "come out"،
"zohóntohón aiyó": "come quickly"،
"uore ai": "come up"،
"galú": "comedian"،
"aram , rahát , aramiyot": "comfort"،
"aramor": "comfortable"،
"aiyér": "coming"،
"waada goijjí": "comitted"،
"koma": "comma"،
"hókum": "command"،
"komándhar": "commander"،
"cúru óon": "commence"،
"cúru goijjé": "commenced"،
"ebbre cúru": "commencement"،
"cúru gorér": "commencing"،
"nozoriya": "comment"،
"nozoriya diyé": "commented"،
"karubar": "commerce"،
"tejaroti , tejari": "commercial"،
"komicén": "commission"،
"zimma diyé": "commissioned"،
"zimma dar": "commissioner"،
"fakka eradagor": "commit"،
"waada gorá": "commitment"،
"janedile": "committed"،
"ekkán hosúri goijjé": "committed a crime"،
"komithí": "committee"،
"zuban der": "committing"،
"aám": "common"،
"thippí": "common green shark"،
"hórulla hañc": "common pochard"،
"fútha thuúní": "common tailord bird"،
"aám hísafe": "commonly"،
"aám hísafe estemal goráza": "commonly used"،
"Komónwél": "Commonwealth"،
"hotábattara hoó": "communicate"،
"taaluk gorá": "communicating"،
"taalukat": "communication"،
"córkari elan": "communique"،
"sómaj": "community"،
"sómaji sehétor hédmot": "community health service"،
"sómaji hédmot": "community service"،
"zomaiya": "compact"،
"kumpani": "company"،
"borabor": "comparable"،
"borabor gorí saá": "compare"،
"borabor gorí saiyé": "compared"،
"borabor gorí soón": "comparison"،
"hamrá": "compartment"،
"mojbur": "compel"،
"gunári ; zoribana": "compensation"،
"mukabela gor": "compete"،
"kaabeliyoti": "competence"،
"mukabela gorér": "competing"،
"zibbat": "competition"،
"maalumat dola goijjé": "compiled"،
"cékayotgor": "complain"،
"cékayot goijjé": "complained"،
"cékayot": "complaint"،
"furagor": "complete"،
"gúdhguiththa añdár": "complete dark"،
"fura goijjé": "completed"،
"furafuri gorí": "completely"،
"kule hale bon": "completely closed"،
"furafuri": "completeness"،
"hótom gorá": "completion"،
"cíak": "complex"،
"manizadé": "compliant"،
"cúkcaikká , cíakbiak , behañsúra , keñçéng meçeng , nakemuké zuggóile fán": "complicated"،
"betala": "complication"،
"taarif": "compliment"،
"manizo": "comply"،
"furuza": "component"،
"lekó": "compose"،
"milaiya": "composition"،
"kompón": "compound"،
"buzé": "comprehend"،
"buzíbar kaabel dé": "comprehension"،
"wazé goijjá": "comprehensive"،
"cámil aiccíl": "comprised"،
"cámil gorér": "comprising"،
"beec hom gor ; leenden ; homaidiya ; buzábúzi gor ; beeckom gor ; agefisé gorá": "compromise"،
"agefisé goijjé": "compromised"،
"bolazuri": "compulsion"،
"laazim": "compulsory"،
"komputar": "computer"،
"hóraf": "con"،
"mani loiyé": "conceded"،
"díyande": "concentrate"،
"gañçá": "concentrated"،
"díyan": "concentration"،
"fíkira": "concept"،
"sinta": "concern"،
"sinta goijjé": "concerned"،
"baabote": "concerning"،
"sinta ókkol": "concerns"،
"muktosor": "concise"،
"notija neela": "conclude"،
"notija neelaiyé": "concluded"،
"notija": "conclusion"،
"doró": "concrete"،
"matát barihái biyúñ óon": "concussion"،
"hóraf hoó": "condemn"،
"hóraf hoón": "condemnation"،
"háalot": "condition"،
"corót loi , coróti": "conditional"،
"háalot ot anér": "conditioning"،
"miloni fódana": "condom"،
"mafde": "condoning"،
"anjamde , solailoza , bebastágor , amólgor , murobbigor , bortabgor , bebáargor , matabulagor": "conduct"،
"goijjé": "conducted"،
"gorér": "conducting"،
"lezar cokól": "cone"،
"konferéns": "conference"،
"mocuwara goijjé": "conferred"،
"ekerar gor": "confess"،
"biccác": "confidence"،
"gufoniya": "confidential"،
"raz": "confidentiality"،
"tortibgorífare": "configurable"،
"tortib": "configuration"،
"tortibgor": "configure"،
"tosdik gor": "confirm"،
"tosdik": "confirmation"،
"tosdik goijjé": "confirmed"،
"hoijja": "conflict"،
"nobonerdé": "conflicting"،
"muámíkka mukabela": "confrontation"،
"muámíkka marami goijjé": "confronted"،
"muámíkka marami gorér": "confronting"،
"cúkcak ófan gor": "confuse"،
"behañsúra ; cúkcak ; kerénzu": "confused"،
"oulfóul": "confusion"،
"mubarek": "congratulation"،
"jomát": "congregation"،
"mila": "conjunction"،
"raabeta gor": "connect"،
"zurado , bañdó , taaluk goijjá": "connect ; taaluk goijjá"،
"juçr": "connection"،
"húñc asé , huñciyar": "conscious"،
"húñc": "consciousness"،
"ettefak rai": "consensus"،
"rezamondi": "consent"،
"notiza": "consequence"،
"notizar": "consequent"،
"héfazotdan": "conservative"،
"héfazot gor": "conserve"،
"báfo": "consider"،
"gomgori bicí": "considerable"،
"bicí gorí": "considerably"،
"gour gorá": "consideration"،
"báfa giyé": "considered"،
"báfir": "considering"،
"notiza": "consiquence"،
"cámil asé": "consist"،
"ekku niyomor": "consistant"،
"ekku dhoilla táka": "consistency"،
"musolsól": "consistent"،
"ekku dhoilla gorí": "consistently"،
"doró gor": "consolidate"،
"doró goijjé": "consolidated"،
"hóraf plan": "conspiracy"،
"fulic or hédh kuwathár": "constabulary"،
"nobodoledé": "constant"،
"lagatar nizegorá": "constant put downs"،
"lagatar": "constantly"،
"cámil asé": "constitute"،
"kaanun": "constitution"،
"kaanuni": "constitutional"،
"ain kaanun": "constitutionl law"،
"rukawoth": "constrain"،
"banaitulé": "construct"،
"banaiyé": "constructed"،
"bañdá": "construction"،
"banaituléde": "constructive"،
"banaitulóya": "constructor"،
"buijjé": "construed"،
"biasana gor": "consult"،
"mocuwara": "consultation"،
"mocuwara goréde": "consultative"،
"mocuwara goijjé": "consulted"،
"estemal goróya": "consumer"،
"hóuya ókkol": "consumers"،
"taalukat": "contact"،
"taaluki tofsil óll": "contact details"،
"táke": "contain"،
"konthinár": "container"،
"toin bóijja": "containerised"،
"bóra": "containing"،
"báfa sinta goijjé": "contemplated"،
"ehónor": "contemporary"،
"kúci": "content"،
"zibbad": "contest"،
"moton": "context"،
"mahadecór": "continental"،
"óifarede mosibot": "contingency"،
"zomát": "contingent"،
"zari ták , musolsol ták , lagatar ták , lagatar goré": "continue"،
"zari raikké": "continued"،
"lagatar gorér": "continuing"،
"lagatar": "continuous"،
"lagatar gorí": "continuously"،
"gair kaanuni mal": "contraband"،
"fua noóde dabai": "contraceptive"،
"théka": "contract"،
"konthrek goijjá": "contract goijjá"،
"théka loiye": "contracted"،
"thékadar": "contractor"،
"thékadari": "contractual"،
"habosnomaloi": "contractually"،
"uldha ó ; nobone": "contradict"،
"uldha": "contrary"،
"borabor": "contrast"،
"híssado": "contribute"،
"modot diyé": "contributed"،
"modot gorér": "contributing"،
"dan": "contribution"،
"kontróul": "control"،
"kontróul gorér": "controlling"،
"fósaitta": "controversial"،
"ektelaf": "controversy"،
"samor gussor gáa": "contusion"،
"boiçók goijjé": "convened"،
"munaséf , asán , cúuidá , aram , cúuida": "convenient"،
"boiçók": "convention"،
"hotá báttra": "conversation"،
"boiyan goijjé": "conveyed"،
"mujirim dórafore": "convicted"،
"mujrimi hosúrbon": "convicted of a crime"،
"sáñza": "conviction"،
"mana": "convince"،
"mana , manayé , manaifélaiye , manar": "convince ; convinced ; convincing"،
"ran": "cook"،
"bálagorí raindé": "cooked throughly"،
"rañdóni": "cooker"،
"háibar tel": "cooking oil"،
"bát rañdéde decci": "cooking pot"،
"háibar nun": "cooking salt"،
"zura": "cool"،
"sáañt de": "cooperate"،
"modot goróon": "cooperation"،
"modot goréde": "cooperative"،
"milizúligor": "coordinate"،
"mili modot goijjé": "coordinated"،
"mili modot gorá": "coordination"،
"tuáñr dekbal or sáñtdiya": "coordination of your care"،
"modot goróya": "coordinator"،
"ófan gor": "cope"،
"kopí": "copy"،
"kopí , copígoijjé , kopígorér , kopígorífelaiye": "copy ; copied ; coping ; copied"،
"síloin": "coral"،
"tarsára fúroni": "cordless dril"،
"maza": "core"،
"boórfata": "coriander"،
"boórfata": "coriander leaves"،
"mokka gula": "corn"،
"kuna": "corner"،
"guijjali": "cornerstone"،
"kuruna váiras": "coronavirus"،
"acanok moot óiyede": "coronial"،
"mora manúic": "corpse"،
"sóiyi": "correct"،
"sóiyi gorá": "correction"،
"sóiyigorí": "correctly"،
"ciñçí análoza": "correspondence"،
"manilo": "corroborate"،
"cúndoror": "cosmetic"،
"hóssa": "cost"،
"hóssa aiccéde": "cost incurred"،
"rui": "cotton"،
"súfa": "couch"،
"hañc": "cough"،
"hañcóon": "cough up"،
"fariyóum": "could"،
"konsil": "council"،
"nisíyot gor": "counsel"،
"mocuwara": "counselling"،
"mocuwara douya": "counselor"،
"gon": "count"،
"gon , goner , goinné , gonifélaiye": "count ; counted ; counting ; counted"،
"uldha": "counter"،
"gurimissi gor": "counteract"،
"ekkudhoilla hamgoróya": "counterpart"،
"dec": "country"،
"gangsáith": "country side"،
"juça": "couple"،
"kupon ; boucar ; dam homadé kupon": "coupon"،
"hímmot": "courage"،
"rastar lain": "course"،
"kuúth": "court"،
"adalot": "court of law"،
"ehéteram": "courtesy"،
"uçán": "courtyard"،
"sañsato bái": "cousin"،
"waada": "covenant"،
"gúroni": "cover"،
"kabár gor , kabár goijjé , kabár gorér": "cover ; covered ; covering"،
"kabáreij": "coverage"،
"gúijje": "covered"،
"záfai raikké": "covered up"،
"gúrider": "covering"،
"gouru": "cow"،
"gai , gai gouru": "cow ; female cow"،
"sélfadura": "coward"،
"sélfadura gorí": "cowardly"،
"córmade": "coy"،
"kolób arde fécca ré jan anóon ar úñc goróon": "CPR-Cardio Pulmonary Resuscitation maincór"،
"komputar or kolób": "CPU"،
"kiáñra": "crab"،
"guccá óde": "crabbed"،
"báñgo": "crack"،
"biajjabari": "crackdown"،
"biskuth": "cracker"،
"dhúloin": "cradle"،
"usol dár fattór": "crag"،
"undur uçé": "cramp"،
"kutakuitta": "cramped"،
"kerénberi": "cranberry"،
"kerein": "crane"،
"demak taaluk rakéde": "cranial"،
"matár maala": "cranium"،
"gura fáça": "cranny"،
"sóittor sán ó": "crash"،
"ámbur": "crawl"،
"bicí asté soledé jiníc , indéx banoya": "crawler"،
"foola": "crazy"،
"foola manúic": "crazy man"،
"krím": "cream"،
"kusi": "crease"،
"san or cokól": "creasent shape"،
"foidagor": "create"،
"foidagoróon": "created"،
"foida gorér": "creating"،
"toiyar gorá": "creation"،
"salu , zehén óla , zohín , harbari": "creative"،
"foidagoróya": "creator"،
"biccác gorázadé": "credible"،
"baikka": "credit"،
"kredith waapes anóon": "credit recovery"،
"din": "creed"،
"gura hál": "creek"،
"mora ré fura di sái bano": "cremate"،
"mora furi sái banoon": "cremation"،
"mora furi sái banadé micín": "crematorium"،
"san or cokol foóila arde ahéri híssat": "crescent"،
"hoppi kisím ór háte fata": "cress"،
"zaáñs ór hamgoróya": "crew"،
"gura fuaindór bisán": "crib"،
"kríkéth kélah": "cricket"،
"kríket kéloya": "cricketer"،
"guzoijjé": "cried"،
"hañdoya": "crier"،
"hórafi": "crime"،
"afarádi": "criminal"،
"sul beháñgor": "crimp"،
"théng hóraf manúic": "cripple"،
"haassáli": "crisis"،
"tongkis or hémayot": "crisis support"،
"maayár": "criteria"،
"nazuk": "critical"،
"nazukgorí": "critically"،
"hosúri tua": "criticise"،
"hosúri tuaiyé": "criticised"،
"kuñír": "crocodile"،
"korib dustó": "crony"،
"jútha hol manúic": "crook"،
"behañ": "crooked"،
"bariza": "crop"،
"bariza óll": "crops"،
"fará": "cross"،
"sal or keñsi": "cross beam"،
"haçar cokól": "cross shape"،
"luçer": "crouching"،
"hawa": "crow"،
"maincór zák": "crowd"،
"záama": "crowded"،
"jádhdhuwañ": "crowded-roots"،
"tas": "crown"،
"soktódil": "crual"،
"muhím": "crucial"،
"berahámi": "cruel"،
"zaáñs sola kúci yá laráit": "cruise"،
"fúana guri biskuth": "crumb"،
"báñgi guri óiye": "crumble"،
"tongkis": "crunch"،
"mormoijja": "crunchy"،
"Musúlman arde Kriccen or larái": "crusade"،
"báñgefan sibo": "crush"،
"hañn": "cry"،
"hañn , hañdo , guzor , gozoro": "cry ; cried ; crying"،
"hañda": "crying"،
"gufoni thiañ": "cryptocurrency"،
"anar dhóilla sáf": "crystal"،
"jisím cekgoréde micín": "CT"،
"cíngorsó": "cub"،
"kyúb": "cube"،
"dhoóñr hamrár bák": "cubical"،
"kuilá": "cuckoo"،
"fól": "cucumber"،
"bukotlo": "cuddle"،
"bazur kaff": "cuff"،
"rañdá bara": "cuisine"،
"rañdá lói taaluk dé": "culinary"،
"ahéri foóñso": "culminate"،
"matát foóñicce": "culminated"،
"matát foóñsá": "culmination"،
"hosúrir laayek dé": "culpable"،
"mujrim": "culprit"،
"manúic yá ciz óre fuñzoon": "cult"،
"álgor": "cultivate"،
"kétigoijjé": "cultivated"،
"cacór zaga": "cultivated field"،
": ": "cultivated land"،
"kétigorá": "cultivation"،
"kétigoróya": "cultivator"،
"salsoloonor": "cultural"،
"salsolan": "culture"،
"meçi bútoror lain": "culvert"،
"cúkcaikká": "cumbersome"،
"hailla zira": "cumin seed"،
"asté asté bicí ói aiccéde": "cumulative"،
"myúlar dol": "cumulus"،
"dúka diyat salák dé": "cunning"،
"feñs ola ; cótainna ; fókkorai": "cunning 1"،
"hóraf salákigorí": "cunningly"،
"fiala": "cup"،
"almali": "cupboard"،
"lalsí": "cupidity"،
"gura guñit": "cupola"،
"bekar kuñir": "cur"،
"gomgorí faredé": "curable"،
"kontróul gor": "curb"،
"dabaigor": "cure"،
"karfyú": "curfew"،
"zanibéllá moncá aséde": "curious"،
"hoñçoinga sul": "curly hair"،
"thiañ": "currency"،
"ehónor": "current"،
"ehónot": "currently"،
"ehón nái , ehón faanoza": "currently unavailable"،
"karikula": "curricula"،
"cikaibóude ciz": "curriculum"،
"sálon": "curry"،
"gozob": "curse"،
"thana leká": "cursive"،
"baiththá gor": "curtail"،
"foroda": "curtain"،
"añçú behañgorí izzot gorá": "curtsey"،
"beháñ lain": "curve"،
"gúañya": "curved"،
"dhákor balúic": "cushion"،
"atá": "custard apple"،
"sámalar hók": "custodial rights"،
"keit": "custody"،
"rit": "custom"،
"gaák": "customer"،
"háaic mozin séthgoró": "customize"،
"hath": "cut"،
"cúndor": "cute"،
"baáror sam": "cuticle"،
"záñsir baiththá súri": "cutlass"،
"haçoni thík goróya": "cutler"،
"masór hándha": "cutlet"،
"sairkel": "cycle"،
"sairkél soróya": "cyclist"،
"tuán": "cyclone"،
"beggín aséde kitab": "cyclopaedia"،
"selendhar": "cylinder"،
"záñss": "cymbal"،
"egaza hosúri dekéde manúic zartú honó insán ór torkir uore biccác nái": "cynic"،
"úde hosúri dekéde": "cynical"،
"hom , túra , túragorí , ekkena , ebbre ekkinígorí": "cóñço ; little"،
"golden color": "cúnar rong"،
"asté asté bazá": "dab"،
"fanít áte ténge mari kéloh": "dabble"،
"dhahaith": "dacoit"،
"baf": "dad"،
"baf": "daddy"،
"ek kisím ór óloiddá fúl": "daffodil"،
"baiththá moinna dui háñsa dár súri": "dagger"،
"dhelia fúl": "dahlia"،
"dhalia fúl": "dahlia flower"،
"kuna kuinna": "daigonal"،
"fortídin": "daily"،
"fottí dinna ham óll": "daily activities"،
"fottídin or hána": "daily food"،
"fottínna bazar": "daily market"،
"noromsórom": "dainty"،
"dhaiari": "dairy"،
"nuksan gor": "damage"،
"hóraf óigiyói": "damaged"،
"dhizái goijjá recóm hoor": "damask"،
"beçi": "dame"،
"hosúride": "damn"،
"bíza": "damp"،
"bíza ófan gor": "dampen"،
"hoicca maiyafua": "damsel"،
"damson gula": "damson"،
"nas": "dance"،
"nasoya": "dancer"،
"sussuri": "dandruff"،
"hoor cokól bicí kiyár goróya": "dandy"،
"hótara": "danger"،
"hótara": "dangerous"،
"hótara ola , hótata gorí": "dangerous ; dangerously"،
"hímmot gor": "dare"،
"hímmoti": "daring"،
"añdár": "dark"،
"hot rong": "dark brown"،
"hotrong": "dark-brown"،
"andár gor": "darken"،
"añdár": "darkness"،
"ador ola jiníc": "darling"،
"tali de": "darn"،
"asimbit búnggori duñre": "dart"،
"Darwin sáiñsdan": "Darwin"،
"muúmorbudh": "dashboard"،
"dhetha": "data"،
"dhethabéis": "database"،
"tarík": "date"،
"zonom tarík": "date of birth"،
"tarík diya": "dated"،
"hájur": "dates"،
"zíi": "daughter"،
"bou": "daughter-in-law"،
"dhorlaga": "daunt"،
"fuñáitta": "dawan"،
"thaim borbat de": "dawdle"،
"foóila foór fáiththe thaim": "dawn"،
"din , dinot , foórot , beil uçíaade": "day"،
"din or foór": "daylight"،
"matá gúra": "daze"،
"matá gúñaigiyói": "dazed"،
"laáith ór suk hoñra": "dazzle"،
"uldha gor": "de"،
"mora": "dead"،
"murda": "dead body"،
"lac ; muruda ; mora ; morigiyoide manúic ; maiyot": "deadbody"،
"ahéri muddot": "deadline"،
"morizaigói faredé": "deadly"،
"náfang": "deaf"،
"han náfang ófan gor": "deafen"،
"leenden": "deal"،
"befari": "dealer"،
"leenden gorér": "dealing"،
"leenden goijjé": "dealt"،
"adoijja": "dear"،
"mora , lac , moot , moota": "death"،
"barábari": "debate"،
"débith": "debit"،
"dhebíth kaádh": "debit card"،
"báñgi hóraf óiyede thukuça óll": "debris"،
"hozzo": "debt"،
"golti thíkgoroón": "debug"،
"foóila kucíc": "debut"،
"doc bosóri muddot": "decade"،
"fóut": "decease"،
"dúka": "deceit"،
"dúkabaz": "deceitful"،
"dúkabazi gorí": "deceitfully"،
"bára": "deceive"،
"bároya": "deceiver"،
"Disambor": "December"،
"córafot": "decency"،
"bála": "decent"،
"ehetiyát gorí": "decently"،
"pawar borat goríde": "decentralize"،
"dúka": "deception"،
"bárade": "deceptive"،
"dúkadi": "deceptively"،
"abas mafa": "decibel"،
"fáiselagor": "decide"،
"fáisela goijjé": "decided"،
"sáfsaf gorí": "decidedly"،
"fásela gorér": "deciding"،
"fata zórede": "deciduous"،
"doc borator ek borat": "decimal"،
"becábici nac óiye": "decimate"،
"hóraf lekáttu maáni neela": "decipher"،
"fáisela": "decision"،
"fáisela goróya": "decision maker"،
"fáisela gorá": "decision making"،
"fáiseladedé": "decisive"،
"thík zuabdi": "decisively"،
"zaáñs or bisáni": "deck"،
"dorógori hotáhoó": "declaim"،
"elangoróya": "declarant"،
"elan": "declaration"،
"elangor": "declare"،
"elan goijjé": "declared"،
"inkargor": "decline"،
"inkar goijjé": "declined"،
"luwaya lekáttu maáni tul": "decode"،
"cloth zaa hoor": "decorating"،
"homa": "decrease"،
"thaim or uore gomgorá": "decrease over time"،
"ducde": "decry"،
"háas": "dedicated"،
"homgorá ; damhoma": "deduction"،
"amól": "deed"،
"mani loiyé": "deemed"،
"mur": "deep"،
"kum": "deep water spot"،
"murgor": "deepen"،
"murhai": "deeply"،
"biaram garígiyoi": "deeply rooted"،
"órin": "deer"،
"aib aséde , hórabi , goloti": "defactive"،
"córomde": "defame"،
"foóila loti toiyar goijjá": "default"،
"hára , háraiye , háraifélaiye, hárar": "defeat"،
"hosúri , hórabi , bángga": "defect"،
"dofá": "defence"،
"dofá sára": "defenceless"،
"dofá gor": "defend"،
"militri dofá goróon": "defense"،
"dofáyi": "defensive"،
"komzuri": "deficiencey"،
"maánigoré": "define"،
"zainna": "definite"،
"taarif adát": "definite article"،
"maáni tulá , sindiya": "definition"،
"hámahá": "definitly"،
"dhigiri": "degree"،
"gaar faní fúaiza": "dehydration"،
"deri gor": "delay"،
"deri gorér , deri gorá": "delaying"،
"deri gorá ókkol": "delays"،
"nomainda gor": "delegate"،
"nomainda grúp": "delegation"،
"buzaiféla": "delete"،
"haçigiyói": "deleted"،
"zanifúni": "deliberately"،
"moza": "delicious"،
"mozar hána": "delicious food"،
"moza gorí": "deliciously"،
"moza": "deliciousness"،
"foóñsái do": "deliver"،
"foóñsái diyé": "delivered"،
"foóñsair": "delivering"،
"loizai do": "delivery"،
"niso tin kuinna zaga": "delta"،
"daabi": "demand"،
"dimukresi": "democracy"،
"muuzará gor": "demonstrate"،
"muuzará goijjé": "demonstrated"،
"muuzará": "demonstration"،
"inkargorá": "denial"،
"inkar goijjé": "denied"،
"muzaáb loiyóre": "denominational"،
"dahá": "denote"،
"daktori": "dental"،
"inkargor": "deny"،
"bac neelaiféla": "deodorize"،
"alok ó": "depart"،
"difarmén": "department"،
"difármén ór": "departmental"،
"rowana": "departure"،
"darmadar": "depend"،
"bórdi soloya": "dependent"،
"bóurusá gorér": "depending"،
"boiyangor": "depict"،
"cokól loiye": "depicted"،
"hóraf": "deplorable"،
"buwá gerá": "deploy"،
"buwá gerái diyé": "deployed"،
"buwá gerái der": "deploying"،
"buwá geráidoon": "deployment"،
"abadi homa": "depopulate"،
"decórtu neelaide": "deport"،
"tobkartú lamaifél": "depose"،
"búra": "deposit"،
"estemal manágor": "deprecate"،
"kimot homa": "depreciate"،
"than": "depress"،
"frecan óiye": "depressed"،
"frecani": "depression"،
"maárum": "deprivation"،
"maárum gor": "deprive"،
"maárum goijjá": "deprived"،
"mur": "depth"،
"naif": "deputy"،
"córom lagede": "derogatory"،
"lam": "descend"،
"fissán": "descendant"،
"émmikka lamo": "descent"،
"boiyan gor": "describe"،
"boiyan goijjé": "described"،
"boiyan gorér": "describing"،
"tofsil": "description"،
"fúana zaga": "desert"،
"laikká ói": "deserve"،
"moksót": "desier"،
"dhízain gor": "design"،
"mokoror goijjé": "designated"،
"mon": "desire"،
"mes": "desk"،
"dekcór uore": "desktop"،
"frecan": "despair"،
"betab": "desperate"،
"tóu údda": "despite"،
"monzil": "destination"،
"tokdir ; kodór": "destiny"،
"dónco gor": "destroy"،
"tobá goijje": "destroyed"،
"nacgoré zaáñs": "destroyer"،
"naáitta": "desttitute"،
"kúlifél": "detach"،
"alokgorí faredé": "detachable"،
"tofsil": "detail"،
"tofsil goijjá": "detailed"،
"tofsil": "details"،
"bongorí rak": "detain"،
"bon goijjé": "detained"،
"bondi": "detainee"،
"tuai lootfaa": "detect"،
"hoói faijé ; hótgori faijjé": "detected"،
"hótgorí faroon ; hoóifaroon": "detection"،
"hótgoréde jiníc ; hótgoroní": "detectors"،
"bon": "detention"،
"dáfoon": "deter"،
"sófaiyi goréde jiníc": "detergent"،
"hóraf óiaiyér": "deteriorate"،
"hóraf óon": "deterioration"،
"mozbut fáisela": "determination"،
"mozbut fáisela gor": "determine"،
"mozbut fáisela goijjé": "determined"،
"mozbut fáisela gorér": "determining"،
"fúça": "detonate"،
"fúçoon": "detonation"،
"barus fúçoni": "detonator"،
"behañ rasta": "detour"،
"nacgorífél": "devastate"،
"nac óigiyoide": "devastating"،
"nacgorá": "devastation"،
"torkigor": "develop"،
"torki goijjé": "developed"،
"torki gorér": "developing"،
"torki": "development"،
"hol": "device"،
"toksim gor": "devide"،
"cóitan": "devil"،
"toiyar goijjé": "devised"،
"díyandi lagitáka": "devotion"،
"siní biaram": "diabetic"،
"hotábáttra": "dialogue"،
"híra": "diamond"،
"fúl baila": "diamond fish"،
"gudúri": "diaper"،
"foroda": "diaphragm"،
"gaa lamani biaram": "diarrhea"،
"desifúl": "diasy flower"،
"kundhi": "dice"،
"dhíkcenari": "dictionary"،
"goijjé": "did"،
"tuñí zainíla né": "did you know"،
"mor ; moro ; moijjé ; morer ; morigiyói": "die"،
"mor , moro , moijjé , morer , morigiyói": "die ; died : dying ; died"،
"morigiyói": "died"،
"dhizel": "diesel"،
"forók": "difference"،
"forók": "different"،
"alok gorí": "differently"،
"mockil": "difficult"،
"mockilat": "difficulty"،
"alok ; forók; muktálif ; ardhoilla": "diffrent"،
"kur": "dig"،
"behózomi": "digestion"،
"fóoñça": "digging hoe"،
"nombóri": "digital"،
"córman": "dignity"،
"dhoóñr ói giyói": "dilated"،
"miyundá": "dim"،
"galor thep": "dimlple"،
"háibar": "dining"،
"hána háde mes": "dining table"،
"bialor hána": "dinner"،
"dhufo , dhufaido , gólaido , bura , buraide , gólaide": "dip"،
"dhipluma": "diploma"،
"dipluméthík": "diplomatic"،
"ódorbaára hótora": "dire"،
"sída": "direct"،
"rasta daháidiye": "directed"،
"icára , icára goróon , rasta dahóon , hókum goróon , mikká": "direction"،
"sída": "directly"،
"darikthar": "director"،
"kumpanir dhariktar": "director of the company"،
"gondá": "dirt"،
"hosora": "dirty"،
"maazir ; leng": "disable"،
"mazur": "disabled"،
"razi nái": "disagree"،
"ektelaf": "disagreement"،
"gaib ó": "disappear"،
"benal": "disarranged"،
"bolamosibot": "disaster"،
"mosibot or entezam gorá": "disaster management"،
"cúçide": "discard"،
"lamaide": "discharge"،
"lamaidiye": "discharged"،
"lamaider": "discharging"،
"murid ; taabe ; fisáli goróya ; fisádóroya": "disciple"،
"adob ahálak": "discipline"،
"gair mosúlia": "disclaimer"،
"zahérgor ; zanaide ; daháide ; dahá": "disclose"،
"zahérgorá ; zahér gorídiya ; kúlidiya": "disclosure"،
"tokolif": "discomfort"،
"beetminani": "discontent"،
"homgor ; homaide ; homtigor ; damhoma ; homtigor ; nágesgor ; hósom ;": "discount"،
"forókgor": "discriminate"،
"forók gorá": "discrimination"،
"mocuwara gor": "discuss"،
"mocuwara goijjé": "discussed"،
"mocuwara": "discussion"،
"cóñço buzí": "disdainfully"،
"biaram": "disease"،
"lamo ; lamizo": "disembark"،
"gondá óla": "disgusting"،
"decci , fatila , hánar decci": "dish"،
"fuk maribélla": "disinfect"،
"nafosón ; gom noláge": "dislike"،
"zaga loijjé": "dislocated"،
"neelaidiya": "dismissal"،
"baddiya giyé": "dismissed"،
"nafórman": "disobedient"،
"hóraf": "disorder"،
"betal gorá": "disorganized"،
"behañsúra óiye": "disoriented"،
"defeçáiyé": "dispatched"،
"cíñça cíthagor": "disperse"،
"síragorí félaiye": "dispersed"،
"begór manúic": "displaced person"،
"dahá": "display"،
"daháiye": "displayed"،
"ekbaijja": "disposable"،
"félaido": "disposal"،
"sáta félaidiya": "disposal of waste"،
"félaide ;  melámar": "dispose"،
"hoijja hoçi": "dispute"،
"sinta": "disquiet"،
"félaiyer": "disregard"،
"beizzoti gor": "disrespect"،
"beizzot ola": "disrespectful"،
"rukawoth dhálo": "disrupt"،
"cúkcak gorá": "disruption"،
"beetminani": "dissatisfaction"،
"áñzaifélaiye": "dissipated"،
"alok óon": "dissociation"،
"forók ; fáasela ; duré ; alok": "distance"،
"duré": "distant"،
"distíl faní": "distil water"،
"aledá": "distinct"،
"alog": "distinction"،
"guccágora ; fool bano ; ptecan gor ; tuaijju hóta ; dían hóta ; dían larifé": "distract"،
"dían lori giyói": "distracted"،
"frecani": "distress"،
"frecan óiye": "distressed"،
"baçoon": "distribution"،
"zilá , mónteka , kraing , ekkán paáth , zaga": "district"،
"nabiccáci": "distrust"،
"tong gor": "disturb"،
"tong gorá": "disturbance"،
"dhupmar , dhup maijjé , dhupmarer": "dive"،
"kisím kisím": "diverse"،
"rasta bodol ; rastalar ; rastalar": "divert"،
"bák": "division"،
"zahérgor": "divulge"،
"Do Not Resuscitate jan ar húñc nu ainnó": "DNR"،
"gor": "do"،
"gor , goijjé , gorífélaiye , gorér , goijjíl": "do ; did ; done ; doing"،
"zaáñs gáñça": "dock"،
"buthgáñça": "dockyard"،
"daktor": "doctor"،
"habosfonna": "document"،
"habosfonna thík rakóon": "documentation"،
"habosfonna goijjé": "documented"،
"kuñir": "dog"،
"gorér": "doing"،
"futíla": "doll"،
"dholár thiañ": "dollar"،
"súsummas": "dolphin"،
"súsummas": "dolphine"،
"gíra": "domain"،
"górowali": "domestic"،
"taakotwar": "dominant"،
"mullúk": "dominion"،
"dangor": "donate"،
"dan": "donation"،
"óigiyói": "done"،
"dhóngel": "dongle"،
"gadá": "donkey"،
"doroza": "door"،
"doraza soñi goróya": "doorkeeper"،
"dorozar foñt": "doorway"،
"bed bicí óla doóñr hamra": "dormitory"،
"sóbok": "dosage"،
"foijjal": "dose"،
"dabai": "dosing"،
"fúça": "dot"،
"dhaból": "double"،
"cók": "doubt"،
"hoóñl": "dove"،
"nise": "down"،
"lama": "download"،
"cúrur leká": "draft"،
"tooitta gorír": "drafting"،
"thainné": "dragged"،
"bébeni": "dragonfly"،
"naathok": "drama"،
"taajuippa": "dramatic"،
"taajuippa gorí": "dramatically"،
"nokcótul": "draw"،
"fúan-kéla ; nockcó tul ; nokcó tuillé ; nokcó tuillíl ; nokcó tulér": "draw 1"،
"fúan-kéla , nockcó tul , nokcó tuillé , nokcó tuillíl , nokcó tulér": "draw ; drew ; drawn ; drawing"،
"neelaide": "draw out"،
"durus": "drawer"،
"nokcó": "drawing"،
"átinná": "drawing-room"،
"kéñisse": "drawn"،
"cóppon": "dream"،
"fucák": "dress"،
"fulgoróni ; fulgor": "drill"،
"fúijjé": "drilled"،
"fiyo": "drink"،
"fiyo , fiiyé , fiifélaiye": "drink ; drank ; drunk ; drinking"،
"dhríf": "drip"،
"sola": "drive"،
"sola , solaiyé , solar": "drive ; drived ; driving"،
"solai lozadé": "driven"،
"soloya": "driver"،
"garír laisén": "driving licence"،
"lamaide ; lamaiyé ; lamar ; félo ; félaiye ; félaar": "drop"،
"lamaide , lamaiyé , lamar , félo , félaiye , félaar": "drop ; dropped ; dropping"،
"félaiyé": "dropped"،
"dabai": "drug"،
"nicá jiníc": "drugs"،
"doróm": "drum"،
"cézana fata ; cézana hák": "drum stick leaves"،
"fúaná": "dry"،
"fúañná ; cúañná": "dry fish"،
"fúana sul": "dry hair"،
"dhraiyar ; fúana goréde micín": "dryer"،
"duáinna": "dual"،
"cóndo aséde": "dubious"،
"áñc": "duck"،
"áñcorsó": "duckling"،
"thaim oiye": "due"،
"ótolla": "due to"،
"bútah": "dull"،
"buk": "dumb"،
"nokoli , háli jiníc": "dummy"،
"duidhák": "duplex"،
"nokoli": "duplicate"،
"ekku dhoilla arekán banoon": "duplication"،
"doró , deritáke , thóore": "durable"،
"muddot": "duration"،
"cómot": "during"،
"añdár": "dusk"،
"dúl": "dust"،
"sáta kuñsoni": "dust pan"،
"sátar gadhdhá": "dustbin"،
"búzoni , fuñsoni": "duster"،
"zimma": "duty"،
"borketá": "duvet"،
"borketár waár": "duvet cover"،
"morizar gói": "dying"،
"bicí hórkoti": "dynamic"،
"hórkot gorí": "dynamically"،
"baarus": "dynamite"،
"e-méil": "e-mail ; emáil"،
"fottí": "each"،
"fottí ekzon": "each one"،
"fottí thaim": "each time"،
"fottí bosór": "each year"،
"josba": "eagerness"،
"sil": "eagle"،
"han": "ear"،
"hanor fóñt": "ear canal"،
"hanor tali": "ear drum"،
"hanor boça": "ear flap"،
"hanor loti": "ear lobe"،
"hanor fún": "ear phone"،
"han fúl": "ear ring"،
"hansaba": "ear side"،
"han or gún": "ear wax"،
"hanor tali": "eardrum"،
"sóore": "earlier"،
"hanor luti": "earlobe"،
"hanor loti ; hanor luti": "earloob"،
"hanor loti": "earloop"،
"sóore": "early"،
"fózor ottó , subá sáadek , beínna kúbsóre , beil nouçíbar age": "early morning"،
"hama": "earn"،
"dil kúli": "earnestly"،
"hamani": "earning"،
"yíarfun": "earphone"،
"zomin": "earth"،
"búsal ; zobin lora": "earthquake"،
"gún": "earwax"،
"asán": "ease"،
"asán or sáte": "easily"،
"fuk": "east"،
"fugor": "eastern"،
"asán": "easy"،
"cúk": "easy life"،
"há": "eat"،
"há , háiye , háifelaiye , hár , hóuni": "eat ; ate ; eaten ; eating ; somethig to eat with"،
"háifelaiye": "eaten"،
"báçah": "ebb"،
"gondá dóra": "eclipse"،
"unnoti": "economic"،
"nikac": "economic analysis"،
"maali hísafe": "economically"،
"amodini": "economy"،
"hañsa": "edge"،
"asté asté loijjé": "edged"،
"dhéiñ ák ; dhéiñ hák": "edible fern"،
"bodol": "edit"،
"edhithar": "editor"،
"cíka": "educate"،
"fonná óla": "educated"،
"elóm": "education"،
"fonnár": "educational"،
"kuissa": "eel"،
"buzí nofaréde taajuippa": "eerie"،
"asórgoré": "effect"،
"asór goréde": "effective"،
"bálagóri": "effectively"،
"asórgorá": "effectiveness"،
"asór , asór óla , una , aib ola": "efficiency"،
"gorá dóra ; luwa dóra": "efficiency 1"،
"salu": "efficient"،
"loifarede": "effordable"،
"mehénnot": "effort"،
"igel faik": "egal"،
"andha": "egg"،
"andhar lali": "egg yolk"،
"baiyon": "egg-plant"،
"baiyon": "eggplant"،
"baáre zaibar rasta": "egress"،
"dóuli boga": "egret"،
"Idór din": "Eid day"،
"Qurban or dín": "Eid-ul-adha"،
"añctho": "eight"،
"añçáro": "eighteen"،
"añçáro": "Eighteen"،
"ací": "eighty"،
"ací": "Eighty"،
"yáto": "either"،
"tofsilgor": "elaborate"،
"refóth": "elastic"،
"kinkini": "elbow"،
"boro": "elder"،
"sañsa": "elder brother of father"،
"basá giyé": "elected"،
"elékcen": "election"،
"ektiyari": "elective"،
"bijili": "electric"،
"kaárobar fúroni": "electric drill"،
"kaárobar fangká": "electric fan"،
"kaárobar githa": "electric guitar"،
"bijilir": "electrical"،
"elektrík óla": "electrician"،
"bijili": "electricity"،
"elektroník": "electronic"،
"elektruník zoriya": "electronically"،
"asási ciz": "element"،
"áñti": "elephant"،
"sailla": "elephant apple"،
"uoretul": "elevate"،
"usol": "elevated"،
"egaro": "eleven"،
"egaro": "Eleven"،
"kaabeliyoti": "eligibility"،
"batde": "eliminate"،
"neelai diyé": "eliminated"،
"mootobor manúic": "elite"،
"cíng hóurin": "elk"،
"aámde": "elling baby to eat"،
"noóile": "else"،
"arhoníkka": "elsewhere"،
"lootfaite mockildé": "elusive"،
"iméil": "email"،
"e-méil goijjé": "emailed"،
"cómmosibot": "emargency"،
"noo ot uçóon": "embankment"،
"bongorá": "embargo"،
"noo ot uçó": "embark"،
"córminda óiye": "embarrassed"،
"embasi": "embassy"،
"uçíaicce": "emerge ; uormikká uçíaiccé"،
"mosibot": "emergency"،
"híjorot gor": "emigrate"،
"híjorot goijjé": "emigrated"،
"jozbati": "emotional"،
"zurde": "emphasize"،
"hamotlo": "employ"،
"ham ot loiyé": "employed"،
"soñijja": "employee"،
"hamot rakóya": "employer"،
"hamot raká": "employment"،
"paawár do": "empower"،
"pawárdiya": "empowerment"،
"háli goijjé": "emptied"،
"háli": "empty"،
"nakam , maayus": "empty-handed"،
"háli gorér": "emptying"،
"ófan gor": "enable"،
"ain kaanun bana": "enact"،
"fúañti diyé": "enclosed"،
"gírirak": "encompass"،
"mukabela gor": "encounter"،
"hímmotde": "encourage"،
"bol diyé": "encouraged"،
"ahéri": "end"،
"ahérir": "end of"،
"hótom gor": "end up"،
"talac gor": "endeavour"،
"talac goijjé": "endeavoured"،
"hótom goijje": "ended"،
"aamínn": "ending word of prayer"،
"tosdik gor": "endorse"،
"tosdik": "endorsement"،
"bordac gor": "endure"،
"ducmon": "enemy"،
"taakot": "energy"،
"taakoti tobka óll": "energy levels"،
"bolazuri gor": "enforce"،
"bolazuri gorá": "enforcement"،
"alagála goríták": "engage"،
"bazái raikké": "engaged"،
"zuragatá": "engagement"،
"bazáiya": "engaging"،
"injin": "engine"،
"injiniár": "engineer"،
"Englén": "England"،
"Ingilíc": "English"،
"ingilíc": "english"،
"bála goré": "enhance"،
"bála goijjá": "enhanced"،
"gom ottu gom gorá": "enhancement"،
"aiyacigor": "enjoy"،
"kúci óla": "enjoyable"،
"aiyaci": "enjoyment"،
"dhoóñr gor , bicí dhoóñr , ebbre dhoóñr gor": "enlarge"،
"furafuri": "enough"،
"enkuari": "enquiry"،
"bóttigor": "enrol"،
"bóttigor": "enroll"،
"bóttigora": "enrolment"،
"bóttigora , enrolment": "enrolment ; enrol"،
"tarfore fóuran": "ensuing"،
"fakkagor": "ensure"،
"biccác der": "ensuring"،
"gól": "enter"،
"góille": "entered"،
"góler": "entering"،
"dil kúcigor ; mehémandari gor ; dilfóila": "entertain"،
"nasgana": "entertainment"،
"mumúmmikka dekóon": "enticipation"،
"beggúlun": "entire"،
"fura zindigi ; fura zibon": "entire life"،
"furafuri": "entirely"،
"tonzim": "entities"،
"nam diya giyé": "entitled"،
"hókfaa": "entitlement"،
"enthithi": "entity"،
"doraza": "entrance"،
"dahála": "entry"،
"ekkán ekkán gorí liís ót tuló": "enumerate"،
"lefaba  , envolóf": "envelop"،
"ricgorá": "envious"،
"mahóuliyoti mosáil": "enviromental problem"،
"maahóul": "environment"،
"mahóuli": "environmental"،
"báfisaiyé": "envisaged"،
"thaçala , thuñçoli , alazir": "epiglottis"،
"foola biaram": "epileptic"،
"híssa": "episode"،
"borabor": "equal"،
"borabori": "equality"،
"ikwethar": "equator"،
"sáman": "equipment"،
"fith goijjé": "equipped"،
"insáf óla": "equitable"،
"fúainna": "equivalent"،
"sáfsáfnoó de": "equivocal"،
"zobana": "era"،
"búza": "erase"،
"búza , búzo , búzer , búizaiye": "erase ; erased ; erasing "،
"búzoni": "eraser"،
"tuillé": "erected"،
"golti ; golot ; goloti": "err"،
"golot": "error"،
"uormikká tulé": "escalate"،
"uormikká tuillé": "escalated"،
"bicíór": "escalatel"،
"uormikká tulér": "escalating"،
"barízoon": "escalation"،
"dáa": "escape"،
"dáiye": "escaped"،
"fúañti loigiyé": "escorted"،
"hánar lain": "esophagus"،
"háas gorí": "especially"،
"bicí zoruri": "essential"،
"zoruri jiníc": "essential stuff"،
"háas gorí": "essentially"،
"zoruri jinc ókkol": "essentials"،
"kaayem gor": "establish"،
"kaayem goijjé": "established"،
"kaayem gorér": "establishing"،
"kaayem gorá": "establishment"،
"íesteit": "estates"،
"kiyaz gor": "estimate"،
"kiyaz goijjé": "estimated"،
"kiyas": "estimation"،
"mafdiya": "estimator"،
"uskaide": "estimulate"،
"wogáira": "etc"،
"wagáira": "etc."،
"ahálaki": "ethical"،
"ahálak ókkol": "ethics"،
"zat": "ethnic"،
"zat hótom gorá": "ethnic cleansing"،
"adob": "etiquette"،
"Yurup": "Europe"،
"hanor bútoror nol": "eustachian tube"،
"háligor": "evacuate"،
"háli goijjé": "evacuated"،
"nelaidoon": "evacuation"،
"muillaiyon gorá , andaza": "evaluate"،
"hátta": "even"،
"tóu údda": "even though"،
"házinná": "evening"،
"waakia": "event"،
"aheríttu": "eventually"،
"hámica": "ever"،
"hámicá tákoya": "everlasting"،
"fottí": "every"،
"fottí dui háftat": "every fortnight"،
"agagura ; beggúla ; fottízagat": "every where"،
"fortídin": "everyday"،
"fottídin alok óon": "everyday dissociaton"،
"fottízon": "everyone"،
"hárr ciz": "everything"،
"beggúla": "everywhere"،
"neelo": "evict"،
"neelaidoon": "eviction"،
"sóbut": "evidence"،
"sáfsaf": "evident"،
"hóraf": "evil"،
"muk foijjé": "evil eye"،
"boni aiyér": "evolving"،
"túra": "ew"،
"ekzabáith": "exabyte"،
"bicí hóraf goijje": "exacerbated"،
"ebbre éndila": "exact"،
"ebbre éndila gorí": "exactly"،
"imtahán": "exam"،
"imtahán": "examination"،
"cek goijjé": "examined"،
"cek goróya": "examiner"،
"mesál": "example"،
"barér": "exceeding"،
"beétorin": "excellent"،
"seróf": "except"،
"gunjáic": "exception"،
"nuth": "excerpt"،
"hódor baára": "excess"،
"ódor baára": "excessive"،
"bodolabodoli": "exchange"،
"taajub goróon": "excite"،
"fúroti , taajup ,": "excited"،
"abbalé! , óumaaré!": "exclamation"،
"mahárum gor": "exclude"،
"mahárum gorá giyéde": "excluded"،
"háas gorí": "exclusively"،
"eskarcen": "excursion"،
"bahána": "excuse"،
"ekkená gorí": "excuse me"،
"amolgor": "execute"،
"amol goijjé": "executed"،
"amol gorá": "execution"،
"boro": "executive"،
"bicí beétor": "exellent"،
"mafdiya": "exemption"،
"prektís": "exercise"،
"prektís goijjé": "exercised"،
"hóran óigiyói": "exhausted"،
"baáre neela": "exile"،
"moujut": "exist"،
"uzud aiccíl": "existed"،
"moojud aséde": "existing"،
"neeli giyói": "exited"،
"zákzák manúic neeli zoon": "exodus"،
"bará": "expand"،
"dhoóñr goijjé": "expanded"،
"dhoóñr gorér": "expanding"،
"dhoóñr gorá": "expansion"،
"bidecóitta": "expat"،
"bidecóitta": "expatriate"،
"acágor": "expect"،
"acá": "expectation"،
"acá goijjé": "expected"،
"toratori goráide": "expedite"،
"toratori gorár": "expediting"،
"hóssa": "expenditure"،
"hóssa": "expense"،
"moóngga": "expensive"،
"ótfa": "experience"،
"tojoruba ola": "experienced"،
"expáth": "expert"،
"expáath dostur ókkol": "expert guidelines"،
"muddot giyói": "expired"،
"date ahéri tarík": "expiry"،
"buzá": "explain"،
"buzáidiyé": "explained"،
"buzáider": "explaining"،
"tofsir": "explanation"،
"bazáitou saár": "exploit"،
"barus": "explosive"،
"baáre defeçó": "export"،
"neelaidiyoum": "expose"،
"uidda gorer": "exposing"،
"hoói dahá": "express"،
"zahér goijjé": "expressed"،
"ezahár gorá": "expression"،
"neelai diya ; baáir gorídiya": "expulsion"،
"lamba gor": "extend"،
"extencén": "extension"،
"boro couça": "extensive"،
"becábicí gorí": "extensively"،
"hót": "extent"،
"lamba tar": "extention cord"،
"bútoror": "exterior"،
"áñzaiféla": "exterminate"،
"koum áñzaiféloon": "extermination"،
"baárkulor": "external"،
"baártutái": "externally"،
"thiañ neeloon": "extortion"،
"ziyadá": "extra"،
"baára hórkot": "extra-curricular"،
"thani neela": "extract"،
"thani neelaiyé": "extracted"،
"ódor baára": "extraordinary"،
"ódorbaára": "extreme"،
"ódor baára": "extremely"،
"mockil ottú fáarek ó": "extricate"،
"suk": "eye"،
"suk thées gorá": "eye test"،
"sukgór faní": "eye's water"،
"sugór furuza": "eye-anatomy"،
"suk ór futoli": "eyeball"،
"hazol": "eyebrow"،
"cocmá": "eyeglass"،
"cocmár kuththa": "eyeglass box"،
"hazol": "eyelash"،
"sugór bóng": "eyelashes"،
"sugórfata": "eyelid"،
"sukgór zuti": "eyesight"،
"egaza fusár goré jiníc": "FAC"،
"muk": "face"،
"mukór": "facial"،
"sóulot goríde": "facilitate"،
"sóulot": "facility"،
"sámma gor": "facing"،
"hákikot": "fact"،
"sóbob": "factor"،
"fékthuri , harhána": "factory"،
"hákikot cíth": "factsheet"،
"hákikoti": "factual"،
"fekálthi": "faculty"،
"Hasharbar ór Fekálthi": "Faculty of Commerce"،
"Inginiár ór Fekálthi": "Faculty of Engineering"،
"Islami Kaanun ór Fekálthi": "Faculty of Islamic Law"،
"Dabair Fekálthi": "Faculty of Medicine"،
"fél óiye": "fail"،
"fél zar": "failing"،
"nakam": "failure"،
"insáfi ; borabori": "fair"،
"munaséf andaz loi": "fair manner"،
"insáfi": "fairness"،
"fouri": "fairy"،
"iman": "faith"،
"fórmadari gorí": "faithfully"،
"Fójor thaim": "Fajr"،
"fójor": "fajr"،
"nokoli": "fake"،
"fore": "fall"،
"fémli": "family"،
"fémli bona": "family composition"،
"rath": "famine"،
"mocóur": "famous"،
"fangká": "fan"،
"fosón": "fancy"،
"fosón goróya ókkol": "fans"،
"laajuab , ódor baára gom , híyali": "fantastic"،
"duré": "far"،
"duré , bicí duré": "far ; far away"،
"duré": "far away"،
"thikéth": "fare"،
"álcaicca": "farmer"،
"duré": "farther"،
"aró duré": "farther apart"،
"aró duré": "farther more"،
"duali": "fascia"،
"tes": "fast"،
"band": "fasten"،
"mutha": "fat"،
"foranzaifaredé": "fatal"،
"mora": "fatality"،
"nosíf": "fate"،
"baf": "father"،
"bafor bái": "father's brother"،
"sañsa": "father's elder brother"،
"fúu": "father's sister"،
"zeçá , bafor cóñço bái": "father's younger brother"،
"óour": "father-in-law"،
"hóranlaga": "fatigue"،
"mutha": "fatty"،
"sorbí ésidh": "fatty acid"،
"duc": "fault"،
"náges , hóta , aib ola , hóraf , báñgga": "faulty"،
"ehésan": "favour"،
"féx": "fax"،
"dhor": "fear"،
"dhorfuk": "fearful"،
"dhorulla": "fearing"،
"húbi": "feature"،
"húbiwala": "featured"،
"Februari": "Feb"،
"Februari": "February"،
"hána hábaiye": "fed"،
"tong aái giyói": "fed up"،
"féderel": "federal"،
"hábo": "feed"،
"waapesirai": "feedback"،
"maásusgor": "feel"،
"aram maásusgor": "feel comfortable"،
"no córmaiyo": "feel free"،
"maásusgorér": "feeling"،
"théngor fata ókkol": "feet"،
"fore": "fell"،
"sáñti": "fellow"،
"maásus goijjé": "felt"،
"maiya": "female"،
"uñthni": "female camel"،
"búza bilai": "female cat"،
"gai goru": "female cow"،
"kutti": "female dog"،
"fulicni": "female police"،
"góro óla ; górgwali ; górgucci ; fémli ; fémili ; gucthí": "femily"،
"maiya": "feminine"،
"ara": "fence"،
"gíra der": "fencing"،
"bahór": "fennel seed"،
"gáñiththa , fagarái douya , kul súai douya": "ferry man"،
"fáñc óla": "fertile"،
"fáñc": "fertilizer"،
"idd": "festival"،
"iddór": "festive"،
"zor": "fever"،
"kessú": "few"،
"gláss ór tar": "fibre optic"،
"banawothi": "fictitious"،
"kéti": "field"،
"fundóro": "fifteen"،
"fundóro": "Fifteen"،
"fonjaic": "fifty"،
"fonjaic": "Fifty"،
"fáith": "fight"،
"waapes fáith goríbélla": "fight back"،
"hoijja goróya": "fighter"،
"larái goróon": "fighting"،
"nombóri": "figure"،
"fáil": "file"،
"fílim": "filim"،
"fura": "fill"،
"furagor": "fill ; filled ; filling"،
"dorhás bóri": "fill up application"،
"furaiya": "filled"،
"fílim": "film"،
"fílim goijjá": "filmed"،
"salo": "filter"،
"sailla": "filtered"،
"ceththá jiníc , fin": "fin"،
"ahéri": "final"،
"fainél gorá": "finalisation"،
"fainel goijjé": "finalised"،
"fáinel gorér": "finalising"،
"ahérittu": "finally"،
"maali": "financial"،
"maali modot": "financial assistance"،
"tuailo": "find"،
"notiza": "finding"،
"thík": "fine"،
"ouñl": "finger"،
"ouñlor girá": "finger joint"،
"ouñlor fak": "finger portion"،
"thip": "finger print"،
"ouñlor matá": "finger tip"،
"ouñlor nok": "fingernail"،
"nok": "fingernáil"،
"thulki mar": "fingerpoke"،
"ouñl óll": "fingers"،
"ouñl": "fingure"،
"fúrah": "finish"،
"hótom goijjé": "finished"،
"mukkammel": "finishing"،
"ooin": "fire"،
"ooin nifóya , ooin nifáde dhaái , ooin nifáde manúic óll": "fire brigade"،
"ooin nifóni": "fire extinguishar"،
"ooin nifóya": "fire fighter"،
"ooinor zilha": "fire flame"،
"hátiar": "firearm"،
"guli maijjé": "fired"،
"zunífuk": "firefly"،
"dargwá": "firewood"،
"guli marer": "firing"،
"kumpani": "firm"،
"jaboçai": "firmly"،
"foóila": "first"،
"hísafor": "fiscal"،
"mas": "fish"،
"masór tel": "fish oil"،
"jafanimas": "fish-Japan"،
"mas soóya": "fisher"،
"zailla": "fisherman"،
"gúca": "fist"،
"fíth": "fit"،
"fíth , fíth óiye , fíth ór": "fit ; fitted ; fitting"،
"fith gorér": "fitting"،
"fañs": "five"،
"thíkgor": "fix"،
"thíkgoijjá": "fixed"،
"boutha": "flag"،
"ooin or zilha": "flame"،
"cóçok": "flash"،
"thipbatti": "flashlight"،
"bená": "flashpoint"،
"ceththá": "flat"،
"aib": "flaw"،
"dáiyegoi": "fled"،
"dóo": "flee"،
"dárgoi": "fleeing"،
"gusso": "flesh"،
"melámar": "flick"،
"fláith": "flight"،
"fílim": "flim"،
"uldho": "flip"،
"zák": "flock"،
"fanífan": "flood"،
"meçit , tolat , zobin": "floor"،
"sola": "flow"،
"báai giyé": "flowed"،
"fúl": "flower"،
"fúlor dani": "flower pot"،
"fúlor sóra": "flower ring"،
"thándhi": "flu"،
"uçalama gorér": "fluctuating"،
"gorgoijja": "fluent"،
"fainná": "fluid"،
"masí": "fly"،
"faikfocú": "flying animal"،
"foó": "foam"،
"díyan": "focus"،
"dían diyé": "focused"،
"dían der": "focusing"،
"hókgor": "fold"،
"fóuldhar": "folder"،
"boça kursí": "folding chair"،
"fisá gor": "follow"،
"mocuwara uore amól goró": "follow the advice"،
"fiséfisé giyé": "followed"،
"fiséfisé zar": "following"،
"aiyérde súal": "following question"،
"fóñth": "font"،
"hána": "food"،
"hánar baccú": "food container"،
"hánar mal": "food product"،
"fool": "fool"،
"bekuf": "foolish"،
"théngor fata": "foot"،
"théngor sók": "footage"،
"fúthboól": "football"،
"tola": "footer"،
"ollá": "for"،
"mesál hísafe": "for example"،
"abadulabad": "for good"،
"ehón ólla": "for now"،
"maincórla": "for people"،
"keriyalla": "for the rent"،
"sobórdar": "forbearing"،
"manágor": "forbid"،
"maná": "forbidden"،
"taakot": "force"،
"bolazuru goijjé": "forced"،
"zaafoijjé": "forced to go"،
"bolazuri": "forcibly"،
"mumúmmikka dehóon ; mustakbel foré dehóon": "fore side"،
"mumúmmikka dehóon": "fore side ; inside"،
"hát": "forearm"،
"uoror": "foregoing"،
"kuwal": "forehead"،
"baáror": "foreign"،
"bidecí arang lagouya": "foreign investor"،
"ajnobi zuban ; pordecízuban ; oinno decór zuban ; oinno zuban": "foreign language"،
"bidecór uzir": "foreign minister"،
"bidecóittá": "foreigner"،
"sáiñsí taákik goréde": "forensic"،
"zooñl": "forest"،
"abadulabad": "forever"،
"cúrur hotá": "foreword"،
"foóráifel": "forget"،
"foórai zar": "forgetting"،
"banoon": "forging"،
"mafde": "forgive"،
"maf goró": "forgive me"،
"mafgorá": "forgiveness"،
"mafgorídouya": "forgiver"،
"maf gorídede": "forgiving"،
"foórái giyégói": "forgot"،
"foóra": "forgot ; forget ; forgotten"،
"keñça camic": "fork"،
"keñça samic": "fork spoon"،
"fórom": "form"،
"rósomi": "formal"،
"rósomi goijjé": "formalised"،
"rosóm": "formality"،
"rosómi hísafe": "formally"،
"cokól": "format"،
"cokól ól": "formats"،
"boinna cokól": "formatted"،
"cokól diyé": "formed"،
"agor": "former"،
"mozbut": "formidable"،
"fármulá": "formula"،
"tockil der": "formulating"،
"age": "forth"،
"calicá": "forties"،
"duiháfta": "fortnight"،
"báiggoitta": "fortunate"،
"báiggoloi": "fortunately"،
"kismot": "fortune"،
"calic": "forty"،
"calic": "Forty"،
"ectema": "forum"،
"muúmmíkka": "forward"،
"muúmmíkka foóñsái diye": "forwarded"،
"zaibar thíkana": "forwarding address"،
"West": "Fosím"،
"west": "fosím"،
"tuaifaiyé": "found"،
"guijja": "foundation"،
"bani": "founder"،
"fónthin holom": "fountain pen"،
"sair": "four"،
"soiddó": "fourteen"،
"soiddó": "Fourteen"،
"coudá": "fourth"،
"cíyal": "fox"،
"ekkisím ór nas": "foxtrot"،
"cindhi híssa": "fraction"،
"fáça": "fracture"،
"hándha": "fragment"،
"komzur ; zoyif ; biaraimma ; ocúk ; sehét gom nái ; zor": "frail"،
"féreim": "frame"،
"hamor cokól": "framework"،
"Fráns dec": "France"،
"zali goróuya ; cithíng goróya ; dúka douya": "fraud"،
"maana": "free"،
"musáda": "free service"،
"azadi": "freedom"،
"golot estemal ottú azad": "freedom from abuse"،
"solafírar azadi": "freedom of movement"،
"azadir sáñte": "freely"،
"egaza wá ; barbár wá": "frequency"،
"egaza": "frequent"،
"egaza egaza": "frequently"،
"taaza": "fresh"،
"torutaza goijjá ; fréc goijjá": "freshly"،
"taza": "freshness"،
"miçáfani": "freshwater"،
"Cúkkubar": "Friday"،
"boróffethi": "fridge"،
"búna ; féraigoijjá": "fried"،
"dustó": "friend"،
"matabula gom": "friendly"،
"doraiyé": "frightened"،
"hóuf goróon": "frightening"،
"beng": "frog"،
"ottú": "from"،
"yartú": "from now"،
"ehón ottu cúrugorí": "from now on"،
"honttú": "from where"،
"muúntu": "front"،
"muúm or demak": "front brain"،
"muúm dhák": "front side"،
"muúm ór dat ókkol": "front teeth"،
"decór címana": "frontier of a state"،
"thándha goijjá ; joma goijja": "frozen"،
"gula": "fruit"،
"théma": "fruit bud"،
"kírah gula": "fruit-kira"،
"zam gula": "fruit-zam"،
"notiza bála goréde": "fruitful"،
"fólfruth mema óll": "fruits"،
"maiyus óiye": "frustrated"،
"naummit": "frustration"،
"tel": "fuel"،
"dhéiñ holot": "fulcrum"،
"fura gor": "fulfil"،
"furaiya": "full"،
"cúddor brother": "full brother"،
"fuúr óiyede san": "full moon"،
"fúça": "full stop"،
"bicí furaiya": "fuller"،
"ebbre furaiya": "fullest"،
"furafuri": "fully"،
"moza": "fun"،
"ham": "function"،
"kabeliyoti": "functionality"،
"foisá": "fund"،
"buniyadi": "fundamental"،
"thiañ diyé": "funded"،
"thiañ der": "funding"،
"jonaza": "funeral"،
"húndura": "funnel"،
"ajiíb": "funny"،
"bóro": "fura goró"،
"meskurusí": "furniture"،
"aró": "further"،
"guccá": "fury"،
"fyús": "fuse"،
"mustokbol": "future"،
"fund ; thiañ": "fón"،
"Jibrail fírista": "Gabriel"،
"gejéth": "gadget"،
"háñsil goré": "gain"،
"háñsil goijjé": "gained"،
"fáaida gorér": "gaining"،
"fitor faní": "gall juice"،
"fit": "gallbladder"،
"galón": "gallon"،
"zuwa kéloya": "gambler"،
"kélah": "game"،
"cúwor or gusso": "gammon"،
"gandhu": "gang"،
"gáing-bolatkar": "gang-rape"،
"háli": "gap"،
"fárok gorér": "gaping"،
"féñza": "garbage"،
"bariza": "garden"،
"bariza lagoya": "gardener"،
"bariza lagar": "gardening"،
"roóun": "garlic"،
"lebas": "garment"،
"gáñthi": "garrison"،
"geés": "gas"،
"geés óll": "gases"،
"geésthík": "gastric"،
"geeith": "gate"،
"zomagor": "gather"،
"dola óiye": "gathered"،
"dola órr": "gathering"،
"mafoni": "gauge"،
"diye": "gave"،
"lamba cíng ola hórin": "gazelle"،
"giiyár": "gear"،
"morotmaiya": "gender"،
"jínn": "gene"،
"aám": "general"،
"aám manúic": "general public"،
"aam hísafe": "generally"،
"nosól": "generation"،
"genereithar": "generator"،
"sótka goréde": "generous"،
"córom zagar": "genital"،
"dola dola mariféloon": "genocide"،
"torzó": "genre"،
"bóddoro": "gentle"،
"asól": "genuine"،
"jografiya": "geography"،
"Jarmón dec": "Germany"،
"icára": "gesture"،
"fa": "get"،
"faa": "get ; got ; gotten ; getting"،
"nise lam": "get down"،
"aijja modot lo": "get help today"،
"bútore gólo": "get in"،
"homgor": "get less"،
"zanaido": "get notified"،
"bongor": "get off"،
"uore uth": "get on"،
"neel": "get out"،
"hom ó": "get smaller"،
"cúru goijjóum": "get started"،
"kontróul ót anó": "get under control"،
"uth": "get up"،
"noya taza raikkó": "get upto date"،
"uibác ; kuaic": "get use to"،
"háñsil gorér": "getting"،
"gíi": "ghee"،
"kírah": "gherkin"،
"jinn": "ghost"،
"hádiya": "gift"،
"demakdiya": "gifted"،
"gigabáith": "gigabyte"،
"ada": "ginger"،
"giráfi": "giraffe"،
"maiyafua": "girl"،
"laávar ; adoijja ; laáfua": "girlfriend"،
"de": "give"،
"deféla": "give in"،
"dorós de": "give lecture"،
"sorá": "give ride"،
"sáride": "give up"،
"diya giyé": "given"،
"der": "giving"،
"gíla": "gizzard"،
"kúci": "glad"،
"húchóbor": "glad tidings"،
"cúnarsóor matá": "glans"،
"ana": "glass"،
"injin sára plein": "glide"،
"ekcóçak": "glimpse"،
"alomi": "global"،
"duniyai": "globe"،
"añdár": "gloomy"،
"zunífuk": "glow-worm"،
"añçá": "glue"،
"za": "go"،
"fissáza": "go back"،
"neeli zagói": "go out"،
"goliza": "go through"،
"uore za": "go up"،
"zo: ": "go(s)"،
"zo: ": "go(s) ; went ; gone ; going"،
"monzil": "goal"،
"sóol": "goat"،
"sóol darí": "goatee"،
"Allah": "God"،
"maabud": "god"،
"zar": "going"،
"gola fúla": "goiter"،
"neck": "gola"،
"cúna": "gold"،
"cúnali": "golden"،
"belgula": "golden apple"،
"goólf": "golf"،
"giyégói": "gone"،
"gom": "good"،
"gom": "good ; better ; best"،
"bála ham": "good deed"،
"cúndor lager": "good looking"،
"bála manúic": "good manner"،
"mal": "goods"،
"aiccá": "goody-goody"،
"rada áñc": "goose"،
"gorila": "gorila"،
"gorila": "gorilla"،
"thándha": "gorom"،
"faiyé": "got"،
"baijjí": "got difficulty"،
"houdú": "gourd"،
"hókumot": "Goverment"،
"hókumot goríbar torika": "governance"،
"hókumot gorér": "governing"،
"hókumot": "government"،
"hókumot or": "government's"،
"hókumot goróya": "governor"،
"goón": "gown"،
"gps kumbáic": "gps"،
"sibidór": "grab"،
"sibi dóijje": "grabbed"،
"riayot ; riayot or modot": "grace"،
"tobka": "grade"،
"asté asté": "gradually"،
"grejueíth": "graduate"،
"grejuécen": "graduation"،
"reni": "grainy"،
"kaaida": "grammar"،
"nati": "grand children"،
"zíi-or-nati": "grand daughter"،
"dada": "grand father"،
"dadi": "grand mother"،
"dadadadi": "grand parent"،
"fut-or-nati": "grand son"،
"kullé mizan": "grand total"،
"grénth": "grant"،
"monzur goijé": "granted"،
"grénth fouya": "grantee"،
"dana": "granular"،
"añggur": "grape"،
"fáttara": "grape fruits"،
"anggur or túa": "grape vines"،
"turunza gula": "grapefruit"،
"anggur": "grapes"،
"sora": "grass"،
"fíring": "grasshopper"،
"añsé": "grate"،
"cúkurguzar": "grateful"،
"hobor": "grave"،
"hoborostán": "graveyard"،
"zobinor thanar taakot": "gravity"،
"góno": "gravy"،
"maiccáiya rong": "gray"،
"giris": "grease"،
"ajíib": "great"،
"boro": "greater"،
"óttu bicí": "greater than"،
"sóbse boro": "greatest"،
"dhoóñgori": "greatly"،
"azimot": "greatness"،
"Grís dec": "Greece"،
"lalós": "greed"،
"lalós óla": "greedy"،
"háil": "green"،
"keñsa kela": "green banana"،
"borhoñçi sóñi": "green bean"،
"keñsa moris": "green chili"،
"dabnaijjol": "green coconut"،
"segá": "green sandpiper"،
"sólam": "greeting"،
"Nyú Yórk óttu sólam dir": "greeting from New York"،
"dhoóñr óiye": "grew"،
"maiccáiya rong": "grey"،
"dóla sul": "grey hair"،
"precani": "grief"،
"bezar": "grievance"،
"dildukde": "grieve"،
"gril": "grill"،
"séikka": "grilled"،
"soktó": "grim"،
"dolo ; doloni": "grind"،
"dholoin": "grinding device"،
"nagír nizor zaga": "groin"،
"dulá": "groom"،
"muth ; kullé ; káamel": "gross"،
"fura tonhá": "gross pay"،
"meçi": "ground"،
"badam tel": "groundnut oil"،
"grúp": "group"،
"boro ó": "grow"،
"dhoóñr ó": "grow up"،
"dhoóñr órr": "growing"،
"baalek": "grown up"،
"torki": "growth"،
"hótornak": "gruesome"،
"geránthi": "guarantee"،
"soiñdar": "guard"،
"garjén": "guardian"،
"héfazot gorér": "guarding"،
"goyom": "guava"،
"andas": "guess"،
"gorba": "guest"،
"gorba gór ; dhak bañla": "guest house"،
"gorba hamrá": "guest room"،
"hédayot": "guidance"،
"rastadahá": "guide"،
"hédayot faiya": "guided"،
"dosture amól": "guideline"،
"rastadahá": "guidelines"،
"feñs ola , cótainna": "guile ; cunning"،
"duc": "guilt"،
"ducí": "guilty"،
"Guinea dec": "Guinea"،
"Guinean'r manúic": "Guinean"،
"githar": "guitar"،
"marír gusso": "gum"،
"bonduk": "gun"،
"gulimara": "gunshot"،
"gulir zohóm": "gunshot wound"،
"añti": "gut"،
"manúic": "guy"،
"jim": "gym"،
"mar": "gúca maro"،
"adot": "habit"،
"sorihá": "habitat"،
"táká": "habitation"،
"adoti": "habitual"،
"barimar": "hack"،
"aiccíl": "had"،
"lou zoma": "haematoma"،
"lou bicí neeler": "haemorrhaging"،
"zóror fúça": "hail"،
"sul": "hair"،
"sul or brac": "hair brush"،
"sulor júñça": "hair bun"،
"sul fúoni": "hair dryer"،
"sul zórer": "hair falling"،
"keñc": "hair on body"،
"matár sul": "hair on head"،
"sul bañdóni": "hair ties"،
"adá": "half"،
"hóol": "hall"،
"hóol ór rasta": "hallway"،
"cúwor or ran or gusso": "ham"،
"earned": "hamaiyéde"،
"hámbagár": "hamburger"،
"mattul": "hammer"،
"ruikké": "hampered"،
"át": "hand"،
"ronda": "hand plane"،
"hát sáman ; hátor sáman": "hand tool"،
"át dúwoní": "hand wash container"،
"át fisé rak": "handback"،
"át or beg": "handbag"،
"hátkitab": "handbook"،
"dóroni": "handdle"،
"háwala goijjé": "handed"،
"át théng bañdá": "handicap"،
"nuwal": "handkerchief"،
"dóroni": "handle"،
"sóñillé": "handled"،
"gosáidiye": "handover"،
"cúndor": "handsome"،
"hátor leikká": "handwritten"،
"fáñcide": "hang"،
"lothka": "hang ; hang ; hanging ; hanger"،
"lothkani": "hanger"،
"óo": "happen"،
"óiye": "happened"،
"órr": "happening"،
"kúci": "happiness"،
"kúci": "happy"،
"tonggor": "harass"،
"tonggoróya": "harasser"،
"frecangoróon": "harassment"،
"zaáñs gáñça": "harbor"،
"doró": "hard"،
"cíba bañc": "hard bamboo"،
"galor doró sal": "hard palate"،
"hoc faní": "hard water"،
"bicí doró": "harder"،
"tongkis ; dukkót": "hardship"،
"doró ciz": "hardware"،
"duk goréde": "hardworking"،
"hórguc": "hare"،
"nuksangor": "harm"،
"nuksan goijjé": "harmed"،
"baza": "harmonica"،
"ektalor": "harmonious"،
"militáka": "harmony"،
"duadi gór ; joldigor ; toratori gor": "harry up"،
"asé": "has"،
"háa foribóu": "has to come"،
"precani sára": "hassel free"،
"héth": "hat"،
"hossób ór sóo": "hatchling"،
"íncagor": "hate"،
"ínca": "hatred"،
"asé": "have"،
"táker": "having"،
"sil": "hawk"،
"rastar duan": "hawker"،
"hótora": "hazard"،
"hazel dana": "hazelnut"،
"te": "he"،
"ite nú aiyé": "he did not come"،
"ite nu aiyé": "he does not come"،
"itartú": "he has"،
"ite age honódin nú aiyé": "he never came before"،
"ze": "he who"،
"ite ebbre nu aibóu": "he will come at all"،
"ite honódin nu aibóu": "he will never come"،
"nu aibóu": "he will not come ite"،
"yaá": "He You"،
"matá": "head"،
"matá tulí nofare": "head cannot move up"،
"matá gúañr": "head dazzling"،
"matár sul zóra": "head hair fall"،
"matá gorom ór": "head heated up"،
"matá fakká": "head imbalance"،
"matár uinn": "head lice"،
"decór royis": "head of state"،
"matá sisia": "head panic"،
"matá thonthonar": "head poking"،
"matá dóra": "head tightening"،
"matá hoñrani": "headache"،
"mukdiya": "headed"،
"matá": "header"،
"hédhar baár": "header bar"،
"hédhmasthor": "headmaster"،
"hédhfun": "headphone"،
"hédh kwathar": "headquarter"،
"morkos": "headquater"،
"matár séth": "headset"،
"fúanagor ; dabai gor": "heal"،
"zohom fúaiyé": "healed"،
"sehét": "health"،
"sehéti dekbal": "healthcare"،
"sehéti": "healthy"،
"fún": "hear"،
"fúinne": "heard"،
"fúnani": "hearing"،
"fúna komzur": "hearing impaired"،
"fúna mockil": "hearing problem"،
"fúnta hotá": "hearsay"،
"kolób": "heart"،
"hoilla dudduwar ; hoilla duddufar": "heart beat"،
"kolób fél úwa": "heart failure"،
"dilor cúr": "heart rate"،
"dil or cokól": "heart shape"،
"dilorthip": "heartbeat"،
"hoilla báñigiyói": "heartbroken"،
"gormi": "heat"،
"goromdiya": "heated"،
"hithar": "heater"،
"goromgorá": "heating"،
"asman": "heaven"،
"bicí bári": "heavier"،
"ebbre bór": "heaviest"،
"bicí gorí": "heavily"،
"bári ; bári óla": "heaviness"،
"bór": "heavy"،
"bári": "heavy ; heavier ; heaviest"،
"dhoor": "heavy rain"،
"kúduk": "hedgehog"،
"forbasára": "heedless"،
"forba": "heedlessness"،
"foolmurí": "heel"،
"harúl": "heifer"،
"usol": "height"،
"usol goré": "heighten"،
"usol goijjé": "heightened"،
"hóraf": "heinous"،
"dóijje": "held"،
"zuzuk": "hell"،
"keén asó": "hello"،
"doró thufi": "helmet"،
"modot": "help"،
"modot goijjé": "helped"،
"modot goróya": "helper"،
"modot goréde": "helpful"،
"modot gorér": "helping"،
"tórsára": "helpless"،
"hañsa": "hem"،
"kuúñri kura": "hen"،
"yián ólla bouli": "hence"،
"háñt kuinna cokól": "heptagon shape"،
"ibár": "her"،
"eçé": "here"،
"ótiya": "here it is"،
"Ahérot": "hereafter"،
"miras": "heritage"،
"fisála": "hernia"،
"ibár": "hers"،
"íba nize": "herself"،
"córma": "hesitate"،
"jonnot": "heven"،
"sókuinna": "hexagon"،
"sókuinna cokól": "hexagon shape"،
"hello": "hi"،
"forifúl": "hibiscus"،
"híkkani": "hiccups"،
"luwaiya": "hidden"،
"luwa": "hide"،
"lukkelani kéla": "hide and seek"،
"luwar": "hiding"،
"usol": "high"،
"usol": "high ; higher ; hight"،
"barík ; uttom ; unca ; bála ; gom ; beétor ; mozbut ; aála doroja ; pakka ; fakka ; uoror tobka": "high quality"،
"bocí hótara": "high-risk"،
"usoilla": "higher"،
"ebbre usol": "highest"،
"foórgor": "highlight"،
"waazá goijjá": "highlighted"،
"foór goróni": "highlighter"،
"bicí gorí": "highly"،
"faár uçéde zuta": "hiking boots"،
"murá": "hill"،
"ilímmas": "hilsa"،
"taré": "him"،
"te nize": "himself"،
"keñil or zura": "hip"،
"híppu janwar": "hippo"،
"keriya gor": "hire"،
"tar": "his"،
"tiarik": "histori"،
"tuariki manúic: ": "historian"،
"tuariki": "historical"،
"tuariki hísafe": "historically"،
"tuwarik": "history"،
"mar": "hit"،
"bari marer": "hitting"،
"biaram fáith gorá komzur óizagóide biaram": "HIV"،
"maincór dofágorá komzur goréde fuk": "HIV Human Immune Deficiency Virus"،
"cóouk": "hobby"،
"fáñça": "hoe"،
"thanitul": "hoist"،
"trap": "hol"،
"dór": "hold"،
"dóro": "hold ; held ; holding"،
"uormikká dóro": "hold up"،
"dóriraker": "holding"،
"ful": "hole"،
"cúthkir din": "holiday"،
"kúlkuillá": "hollow"،
"gór": "home"،
"góror thíkana ; góror sinno": "home address"،
"gór maamela": "home affairs"،
"begór": "homeless"،
"górsára manúic": "homeless people"،
"góror maalek": "homeowner"،
"górsófa": "homepage"،
"zagir": "homing student"،
"ekí kisím óon": "homogeneous"،
"Mohótorom": "Hon"،
"imandar": "honest"،
"imandari": "honesty"،
"modú": "honey"،
"córman": "honor"،
"izzoti ; izzotwala ; izzoitta": "honorable"،
"kuñça": "hook"،
"gundha": "hooligan"،
"fálmar": "hop"،
"acá": "hope"،
"acá gorídde": "hopefully"،
"acá gorír": "hoping"،
"asman or guijja": "horizon"،
"fattóijja": "horizontal"،
"cíng": "horn"،
"dhorlágede": "horrible"،
"dhorlagedé": "horrifying"،
"ódor baára dhor": "horror"،
"gúra": "horse"،
"gúñra súari ; gúñra soróya ; gúñra soréde manúic": "horseman"،
"fanír páip": "hose"،
"hóspital": "hospital"،
"hósptal tuillé": "hospitalize"،
"girós": "host"،
"óosta hóthel": "hostel"،
"ducmoni": "hostile"،
"ducconi": "hostility"،
"gorom ; bicí gorom ; ebbre gorom ; sóbse gorom": "hot"،
"gorom": "hot ; hotter ; hottest"،
"gorom cókeleith": "hot chocolate"،
"gorom tab": "hot tub"،
"gorom faní": "hot water"،
"gómor bag": "hot water bag"،
"hóthel": "hotel"،
"bicí gorom": "hotter"،
"ebbre gorom": "hottest"،
"góndha": "hour"،
"góndhaye ; góndha hísafe": "hourly"،
"gór": "house"،
"boóñra": "house beetle"،
"górbari": "household"،
"górbari": "housing"،
"gór hóssa": "housing subsidies"،
"kengóri": "how"،
"kengóri": "how come"،
"yaa keén lager": "how do you feel now"،
"hoddúr duré": "how far"،
"yaa keén": "how is now"،
"hotódin": "how long"،
"howá": "how many"،
"hodún": "how much"،
"boc hoddúr": "how old"،
"mogor": "however"،
"mazdáli": "hub"،
"uzara uzori": "hubbub"،
"bicí boro": "huge"،
"manúic": "human"،
"insán zati": "human being"،
"insáni hók ókkol": "human rights"،
"Insáni Hók ókkol ór Boro": "Human Rights Chief"،
"Insáni Hók ókkol ór Komisen": "Human Rights Commission"،
"insániyoti": "humanitarian"،
"insániyoti": "humanity"،
"uñáiththa": "humid"،
"córomde": "humiliate"،
"zilloti gorá ; beizzoti gorá ; córom diya ; nisegorá": "humiliating"،
"córomdiya": "humiliation"،
"ekcót": "hundred"،
"cót ; ekcót": "Hundred"،
"lak": "hundred thousand"،
"ekcó-ek": "hundred-one"،
"cóte cóte": "hundreds"،
"búke": "hunger"،
"búkah": "hungry"،
"cíarigor": "hunt"،
"cíkari ; cíkar goróya": "hunter"،
"cíyar gorá": "hunting"،
"dukde": "hurt"،
"beça": "husband"،
"hálatou zamai": "husband of mother's sister"،
"bacá": "hut"،
"haidrujan háwa": "hydrogen"،
"rang kuñir": "hyena"،
"sehét or sófaiyi": "hygiene"،
"hamad / munajat / boinji": "hymann"،
"hamad ; munajat ; boinji": "Hymn"،
"munafék": "hypocrite"،
"Hójj": "háijj"،
"barimar": "hít"،
"hósthel": "hóstel"،
"gorom": "hót"،
"añí": "I"،
"añí": "i"،
"añí": "I am"،
"añí gom así": "I am fine"،
"añí azur así": "I am free"،
"añáre faazaibou ; añí toiyar así ; añí moujud así ; añí azur así": "I available"،
"añártu": "I have"،
"Añí tuáñre icára goijjóum ; Añí tuáñre rasta daháiyoum": "I will direct you"،
"boróf": "ice"،
"áiskrim": "ice cream"،
"boróf krím banoni": "ice cream maker"،
"áiskrim": "ice-cream"،
"áiskrim": "icecream"،
"boróf diya saá": "iced tea"،
"aikon": "icon"،
"Entahá Kérmosor Hána": "ICU Intensive Care Unit"،
"sinnor kaádh": "ID"،
"aidhía": "idea"،
"sinno": "identification"،
"sinágiye": "identified"،
"sinnogor": "identify"،
"sinno": "identity"،
"boiçá": "idle"،
"bút fuñza": "idolatry"،
"mesál": "ie"،
"zodi": "if"،
"ar noóile": "if not"،
"agór mumkin óile": "if possible"،
"zodi éndila ó": "if so"،
"sailé": "if we want"،
"zodi tuñí": "if you"،
"zodi tuñí soó": "if you want"،
"zodi tuñí yián soó": "if you want this"،
"zodi tuñí yián soó": "if you yián soó"،
"jahél": "ignorant"،
"badde": "ignore"،
"IHMS kompani": "IHMS"،
"Alomi Sehét arde Daktori Hédmot ókkol": "IHMS International Health and Medical Services"،
"biaram lager": "ill"،
"uldha-mocuwaradiya": "ill-advised"،
"bekaanuni": "illegal"،
"bekaanuni": "illegally"،
"bimari": "illness"،
"maáni sára": "illogical"،
"bura sólluk": "illtreat"،
"fothú": "image"،
"báfo": "imagine"،
"imam": "imam"،
"fóuran": "immediate"،
"fóuran hísafe": "immediately"،
"bicí dhoóñr": "immense"،
"dufa": "immerse"،
"dufaiya": "immersed"،
"immigiricén": "immigration"،
"matár uore aiyérde": "imminent"،
"omoroni ; ómoroni": "immortal"،
"imyún ; imyuni": "immune"،
"gaa ye nize fáithgoréde nezám": "immune system"،
"biaram héfazot or taakot": "immunity"،
"biaram rukíbella dabai diyagiyéde": "immunized"،
"imuni sippa": "immunosuppressed"،
"taásir": "impact"،
"foróksára": "impartial"،
"maasum": "impeccable"،
"ofuron": "imperfect"،
"lagazaibou": "implement"،
"furagoróon": "implementation"،
"fura goijjé": "implemented"،
"fura gorér": "implementing"،
"bazátáka": "implication"،
"musollot goijjé": "implied"،
"biaddob ; tomis nái": "impolite"،
"baártugólo": "import"،
"ahámiyot": "importance"،
"zoruri": "important"،
"zoruri gorí": "importantly"،
"namumkin": "impossible"،
"asór": "impression"،
"sibi sókbana": "imprint"،
"ziyól": "imprisonment"،
"torkigor": "improve"،
"torki goijjé": "improved"،
"torkigorá": "improvement"،
"beétor gorér": "improving"،
"éñte hoiyé": "improvised"،
"sáñza maf": "impunity"،
"nafak": "impure"،
"miál": "impurity"،
"imuni": "imune"،
"bútore": "in"،
"áagoijjá": "in a state of open mouth"،
"yíar baade yó": "in addition"،
"baiththát": "in brief"،
"zodi": "in case"،
"nogoti": "in cash"،
"baikka": "in credit"،
"hákikot ot": "in fact"،
"sámme": "in front"،
"sámmor tú": "in front of"،
"mustokbel ot": "in future"،
"moótaj óla": "in need"،
"taáke": "in order"،
"nize ; nizebaze": "in person"،
"ettefák ot": "in solidarity"،
"thaim ibát": "in the meantime"،
"mazé": "in the middle"،
"edin ot": "in this day"،
"kullé jomá": "in total"،
"behar": "in vain"،
"golot": "inaccurate"،
"gairsalu": "inactive"،
"kafí noóde": "inadequate"،
"gair munaséf": "inappropriate"،
"húcbodiya": "incensed"،
"lalsí": "incentive"،
"waakia": "incidence"،
"maamela": "incident"،
"siroon": "incision"،
"uskaider": "inciting"،
"leth hadíra": "inclined chair"،
"cámilgoré": "include"،
"cámilgorágiye": "included"،
"éçe cámil aséde": "including"،
"cámil": "inclusion"،
"cámilgoijjá": "inclusive"،
"amodoni": "income"،
"aiyérde": "incoming"،
"adáadi": "incomplete"،
"agafísa no bonedé": "inconsistent"،
"akuaicca": "inconvenience"،
"ocúida": "inconvenient"،
"bará": "increase"،
"baráidiye": "increased"،
"bráider": "increasing"،
"bicí gorí": "increasingly"،
"taajuippa gorí": "incredibly"،
"luksan goijjé": "incurred"،
"waakí": "indeed"،
"nozaná": "indefinite"،
"nokir adát": "indefinite article"،
"muddot sára gorí": "indefinitely"،
"asól bácinda": "indegenous"،
"lain góla": "indentation"،
"azadi": "independence"،
"azad": "independent"،
"azadir sáate": "independently"،
"thík gorí zana náide": "indeterminate"،
"liís": "index"،
"icára ouñl": "index finger"،
"Índhia": "India"،
"Indiar dec": "India country"،
"índhíyár ; índhiyar manúic": "indian"،
"dahá": "indicate"،
"daháiye": "indicated"،
"dahár": "indicating"،
"icára": "indication"،
"icára": "indicator"،
"asól bácinda": "indigenous"،
"behózomi": "indigestion"،
"íncagorí": "indiscriminately"،
"forógorá nozadé": "indistinguishable"،
"ekála": "individual"،
"alok alok gorí": "individually"،
"Indonesia dec": "Indonesia"،
"bíra": "induce"،
"taarif": "induction"،
"meél harhána": "industry"،
"meél harhánat díyandiya": "industry-focused"،
"gonzi": "iner shirt"،
"fóila kontroul": "infaction control"،
"ledafua ; dudór fua": "infant"،
"obabiaram": "infecitious"،
"fukgóille": "infected"،
"gáa": "infection"،
"nisor grudá loi lagaiya rok": "inferior vena cava"،
"uskaidiyé": "inflamed"،
"dukde": "inflict"،
"dukdiyé": "inflicted"،
"asór goijjé": "influenced"،
"hóbordo": "inform"،
"gair rosómi": "informal"،
"behóbor taalukat": "informant relationship"،
"maalumat": "information"،
"hóbor diyé": "informed"،
"tabbé": "informer"،
"asási hák": "infrastructure"،
"sárme": "infront"،
"futh": "ingredient"،
"abadi": "inhabitant"،
"mirasfaa": "inherit"،
"miras": "inheritance"،
"omanúic": "inhuman"،
"sáain": "initial"،
"cúru gor": "initialize"،
"cúru gorér": "initializing"،
"cúrut": "initially"،
"cúrugoró": "initiate"،
"cúru goijjé": "initiated"،
"cúruwat": "initiative"،
"fúkmara ; thíka": "injection"،
"dukfai de": "injure"،
"dukfaiyé": "injured"،
"zohóm": "injury"،
"zohóm ruká": "injury prevention"،
"zohóm óifaredé": "injury prone"،
"zohómor thaim": "injury time"،
"nainsáfi": "injustice"،
"cíyai": "ink"،
"bútoror han": "inner ear"،
"akkoli dat": "inner row teeth"،
"maasum": "innocent"،
"noya banaiyéd jiníc": "innovation"،
"noya toiyar gorá": "innovative"،
"inpúth": "input"،
"tahákik gor": "inquest"،
"enkuari": "inquiry"،
"fuk": "insect"،
"dhaló": "insert"،
"gólaide": "insert ; inserted ; inserting"،
"gólaidyé": "inserted"،
"bútore": "inside"،
"tahákik goijjé": "inspected"،
"tuai soón": "inspection"،
"inspekthar": "inspector"،
"fíthgoró": "install"،
"inestóll gorá": "installation"،
"fíthgoijjá": "installed"،
"fíthgoróya": "installer"،
"kistodiya": "installment"،
"nommuna": "instance"،
"fóuran ; tesgorí": "instant"،
"bodola": "instead"،
"théngor uortú gúañya zaga": "instep"،
"tuláder": "instigating"،
"fonnálla banar": "instituting"،
"hédayotgor": "instruct"،
"hoóidiyé": "instructed"،
"hédayot": "instruction"،
"taalimat ; hédayot ; icárat": "instructions"،
"jontoro": "instrument"،
"kucindiya": "insulated"،
"insulín": "insulin"،
"beizzonti gor": "insult"،
"beizzonti goijjé": "insulted"،
"thana": "intake"،
"beggún": "integral"،
"milaido": "integrate"،
"milaidiyé": "integrated"،
"imandari": "integrity"،
"demaki ; demak tes ; demak bála ; sotur ; salák": "inteligent"،
"zanoya": "intelligence"،
"akolola": "intelligent"،
"niyotgor": "intend"،
"niyot goijjé": "intended"،
"hora gor": "intensify"،
"ódor baáre": "intensive"،
"moksót": "intent"،
"erada": "intention"،
"zanifúni": "intentionally"،
"súal zuab gor": "interact"،
"súal zuab gorír": "interacting"،
"súal zuab goróon": "interaction"،
"súal zuab gorá": "interactive"،
"ruké": "intercept"،
"rukágiye": "intercepted"،
"intarkontinéntel": "intercontinental"،
"bouloi miloon": "intercourse"،
"maná goré": "interdict"،
"díyan": "interest"،
"dilcobí óla": "interesting"،
"intharféis": "interface"،
"mudahelat gor": "interfere"،
"mudahelat": "interferea"،
"dohól doon": "interference"،
"dohól der": "interfering"،
"tooitta": "interim"،
"bútorgwa": "internal"،
"bútoror": "internally"،
"alomi": "international"،
"intharneth": "internet"،
"hotá buzáide": "interpret"،
"hotá buzáide": "interprete"،
"torjuma goijjé": "interpreted"،
"hotá báñgidoya": "interpreter"،
"ruké": "interrupt"،
"rukawoth": "interruption"،
"waqfa": "interval"،
"théng gólaidiye": "intervened"،
"théng gólaidoon": "intervention"،
"intarbyu": "interview"،
"intarbyu goijjé": "interviewed"،
"intarbyu douya": "interviewee"،
"añti": "intestine"،
"añti ókkol": "intestines ; gut"،
"ettefák": "intigrity"،
"korib": "intimate"،
"dhor laga": "intimidate"،
"dhor lagaiyé": "intimidated"،
"dhor lagoon": "intimidating"،
"dhor lagoon": "intimidation"،
"éçe": "into"،
"matár bútoror": "intracranial"،
"elakar intharneth": "intranet"،
"rok ór bútore": "intravenous"،
"sinno do": "introduce"،
"sinno goráidiye": "introduced"،
"taarif": "introduction"،
"bolazuri góloya": "intruders"،
"niác ólla nol góla": "intubate"،
"gairkaanuni": "invalid"،
"bicí moillo ola": "invaluable"،
"inventhori": "inventory"،
"kumdo": "invest"،
"tadarotgor": "investigate"،
"tahákik goijjé": "investigated"،
"tadarot": "investigation"،
"arang": "investment"،
"félai zai nofaréde": "invincible"،
"dahá nozade": "invisible"،
"dawot": "invitation"،
"dawot do": "invite"،
"doot diyé": "invited"،
"bil": "invoice"،
"waapes loi": "invoke"،
"bolazuri gorí": "involuntarily"،
"bolazuri": "involuntary"،
"cámil ó": "involve"،
"cámil goijjé": "involved"،
"cámil táka": "involvement"،
"cámil gorér": "involving"،
"ip thíkana": "ip address"،
"iPod": "iPod"،
"Iran or manúic": "Iranian"،
"Irak": "Iraq"،
"Iraqor manúic": "Iraqi"،
"sugór futoli": "iris"،
"luwá": "iron"،
"luwár bim": "iron beam"،
"síyol or rosí": "iron rope"،
"dubara diya nozadé": "irredeemable"،
"ebbre inkar gorí nofaréde": "irrefutable"،
"behañsúra": "irregular"،
"nogorí": "irrespective"،
"honó kiár sára": "irresponsible"،
"ói": "is"،
"yián né?": "is it"،
"Isahák": "Isaac"،
"Ecár thaim": "Isha"،
"ecár": "isha"،
"Islám": "Islam"،
"Islami": "Islamic"،
"dhiya": "island"،
"ekála goré": "isolate"،
"ekála raikké": "isolated"،
"maamela": "issue"،
"neelaidiyé": "issued"،
"maamela ókkol": "issues"،
"Istanbul cóor": "Istanbul"،
"Komputar teknoloji": "IT"،
"yían": "it"،
"bole": "it is said"،
"uñta": "itch"،
"uñtani": "itching"،
"sáman": "item"،
"yián ór": "its"،
"yían nize": "itself"،
"Intrauterine Device Fuain noóibélla Rukéde Ziníc": "IUD"،
"binipfúl": "ixora red"،
"Rohingyar maincór aám nam": "Jaber"،
"cíyal": "jackal"،
"jakéth": "jacket"،
"haththól": "jackfruit"،
"miçá": "jaggery"،
"gendha bag": "jaguar"،
"Jáhangir - Rohingya maincór nam": "Jahangir"،
"jaám": "jam"،
"Jamal - Rohingya maincór aám nam": "Jamal"،
"jamgoijjá": "jammed"،
"Januari": "January"،
"Japan or dec": "Japan"،
"Jafani": "Japanese"،
"japani": "japanese"،
"zok": "jar"،
"homboiccá fúl": "jasmine"،
"gal or keñsi": "jaw"،
"hásoroti": "jealous"،
"hásorot": "jealousy"،
"jínhoor": "jeans"،
"Jiddá cóor": "Jeddah"،
"jiíp garí": "jeep"،
"Jeffrey": "Jeffrey"،
"jeél": "jelly"،
"nuinna": "jellyfish"،
"poigambor Isá": "Jesus"،
"jéth injin": "jet engine"،
"jethí": "jetty"،
"Juú": "Jew"،
"cúna sañdi ; guñána ; zebor ; guána hati ; zebor zati": "jewelry"،
"jihád": "jihad"،
"jim": "jim ; gym"،
"jin": "jinn"،
"ham": "job"،
"hamor zaga": "job title"،
"hamsára": "jobless"،
"kuñirdá duñra": "jog"،
"milo": "join"،
"zura diyé": "joined"،
"zura": "joint"،
"miliyoré": "jointly"،
"fáaca": "joke"،
"jarnel": "journal"،
"sofór": "journey"،
"kuruta": "jubba"،
"kazi": "judge"،
"day kiyamot": "judgment"،
"zok": "jug"،
"roc": "juice"،
"rocsára": "juiceless"،
"rocola": "juicy"،
"Julia": "Julia"،
"Julai": "July"،
"Jumá": "Juma"،
"fálmar": "jump"،
"zámmar": "jump ; jumped ; jumping"،
"zámmaijjé": "jumped"،
"zámaroya": "jumper"،
"goldi": "junction"،
"somóni": "junctions"،
"Jun": "June"،
"jonggol": "jungle"،
"cíyari kurá": "junglefowl"،
"hosora": "junk"،
"Jupitar": "Jupiter"،
"fáisela goríbar ejajot": "jurisdiction"،
"úde": "just"،
"seróf húñciyar táko": "just be aware"،
"ebbre ehón": "just now"،
"éhon hoiyé": "just said"،
"insáf": "justice"،
"cáróiye": "justified"،
"faththwa": "jute"،
"naricák": "jute leaves"،
"naric ák": "jute spinach"،
"fuaindór": "juvenile"،
"Kabá córif": "Kaba"،
"kengurú": "kangaroo"،
"rak": "keep"،
"konțroul rakó": "keep control"،
"epuainmén thík rakó": "keep to the appointment"،
"goóuli": "keeper"،
"rakágiye": "kept"،
"nuwal": "kerchief"،
"something": "kessú"،
"thaiyon ficcá": "ketchup"،
"ketóri": "kettle"،
"sabí": "key"،
"ahám hákikot ; asól hákikot": "key facts"،
"ahám síth óll": "key seats"،
"kíibudh": "keyboard"،
"kilogram": "kg"،
"what": "ki"،
"latímar": "kick"،
"latí gúca": "kick and punch"،
"latí maijjé": "kicked"،
"gura fua": "kid"،
"larer": "kidding"،
"kitni": "kidney"،
"grudá fél óon": "kidney failure"،
"fuain": "kids"،
"haçifél": "kill"،
"kotol goijjé": "killed"،
"kotól goróya": "killer"،
"kotól goróon": "killing"،
"kilubáith": "kilobyte"،
"thousand gram": "kilogram"،
"rictadar": "kin"،
"noromdil ola": "kind"،
"ehéterám izzotgorí": "kind regards"،
"dilnorom ola": "kindhearted"،
"uzal": "kindle"،
"mehérbani gorí": "kindly"،
"raza": "king"،
"déssurú": "king crow"،
"maiccárana": "kingfisher"،
"appáde": "kiss"،
"sónduk": "kit"،
"ooñla": "kitchen"،
"góndhi": "kite"،
"undur thígoroni": "kite faik"،
"bilairsó": "kitten"،
"kiwi": "kiwi"،
"añçú": "knee"،
"zainné": "knew"،
"súri": "knife"،
"sílai": "knit"،
"dóroni": "knob"،
"baijja": "knock"،
"baijja": "knock on"،
"zane": "know"،
"zanoya": "knower"،
"zaner": "knowing"،
"elóm": "knowledge"،
"zanagiyé": "known"،
"ouñl or girá": "knuckle"،
"ouñlor girá óll": "knuckles"،
"kuilá": "koel"،
": "kuaic"،
"Kuwéit dec": "Kuwait"،
"nam or faththi": "label"،
"goóur": "labor"،
"mozduri gorá": "laboring"،
"goóur": "labour"،
"gaa fáça": "laceration"،
"homi": "lack"،
"homi": "lacking"،
"cíçih": "ladder"،
"bóraiya": "laden"،
"maiyafua": "lady"،
"béra": "lady finger"،
"beçi profesar": "lady professor"،
"masthorni": "lady teacher"،
"zunífuk": "ladybird"،
"bisáiye": "laid"،
"dhií": "lake"،
"lak , ek lák": "Lakh"،
"béra sóol": "lamb"،
"lengaçá": "lame"،
"batti": "lamp"،
"zaga": "land"،
"laimmé": "landed"،
"lamer": "landing"،
"keriyadar": "landlord"،
"zomidar": "landowner"،
"gura rasta": "lane"،
"zuban": "language"،
"fánoc": "lantern"،
"kul": "lap"،
"dhoóñr": "large"،
"dhoóñr": "large ; larger ; largest"،
"dhul": "large basket"،
"dhoóñr añti": "large intestine"،
"boro gorí": "largely"،
"beecdhoóñr": "larger"،
"ebbre dhoóñr": "largest"،
"abasor fethi": "larynx"،
"lezar": "laser"،
"súañloi mar ; loçíloi mar": "lash"،
"ahéri": "last"،
"háñcoroddin": "last day"،
"thikkyé": "lasted"،
"deri": "late"،
"Ogós ór ahéri": "late August"،
"fore": "later"،
"dhákor": "lateral"،
"ahéri": "latest"،
"taza hóbor": "latest news"،
"háñc": "laugh"،
"dúwoni": "laundry"،
"dúoni dhula ; dúwede dhula": "laundry basket"،
"ain": "law"،
"kaanuni koóuth": "law court"،
"kaanun zarigorár ejénsi": "law enforcement agency"،
"kaanuni": "lawfully"،
"kérzobin": "lawn"،
"fúañ": "lawn beetle"،
"kér haçoni": "lawn mower"،
"ukil": "lawyer"،
"bia": "lay"،
"neelai de": "lay off"،
"forol": "layer"،
"háka bondi": "layout"،
"alcí": "lazy"،
"thiyor": "lazy eye"،
"pound": "lb"،
"lídgor": "lead"،
"liídhar": "leader"،
"liídhari": "leadership"،
"sóddari gorér": "leading"،
"fata": "leaf"،
"habosfata": "leaflet"،
"fanícocá": "leak"،
"élande": "lean"،
"cík": "learn"،
"elómóla": "learned"،
"aalem": "learned man"،
"cíkkye ; cíkifélaiye": "learnet"،
"cíkar tojruba ókkol": "learning experiences"،
"cíkkye": "learnt"،
"keriyar habos": "lease"،
"homashom": "least"،
"samra": "leather"،
"neel": "leave"،
"fata": "leaves"،
"neelizar": "leaving"،
"dorós": "lecture"،
"sóddari goijjé": "led"،
"zuk": "leech"،
"bandhák": "left"،
"ban dhákor féccwa": "left lung"،
"baáñt": "left side"،
"baáñitta": "left-handed"،
"théng": "leg"،
"miras": "legacy"،
"mirasi jútha": "legacy of lies"،
"mirasi hémayot": "legacy support"،
"mirasi nezám": "legacy system"،
"kaanuni": "legal"،
"kaanuni ettefáki": "legal contract"،
"kaanuni habos": "legal paper"،
"kaanuni gorí": "legally"،
"alamot": "legend"،
"lehá kaanun": "legislation"،
"kaanuni": "legit"،
"kaanuni": "legitimate"،
"write ; writing ; written ; things to write with": "lek"،
"write": "lek ; lekó ; lekér ; leká ; lekóni ; leikká"،
"hoñsi lemu": "lemon"،
"lemujiníc": "lemonade"،
"udár douya ; thiañ udár douya": "lender"،
"lambayi": "length"،
"lambagor": "lengthen"،
"lamba": "lengthy"،
"dhail": "lentil"،
"lamba bag": "leopard"،
"hom": "less"،
"óttu hom": "less than"،
"homar": "lessening"،
"bicí hom": "lesser"،
"komzur ; zoyif ; norom ; lower quality ; niróc": "lesser quality"،
"sóbok": "lesson"،
"ejazot de": "let"،
"góla": "let some one enter it"،
"añára zai": "let us go"،
"añárare zanaido": "let us know"،
"morizaigói faradé": "lethal"،
"ciñçí": "letter"،
"ciñçír buúm": "letter bomb"،
"ciñçír fethi": "letter box"،
"roisi hédh": "letterhead"،
"hórof lekóon": "lettering"،
"tobka": "level"،
"haláng": "lever"،
"mosulía": "liability"،
"zimmadar": "liable"،
"taaluk goríde": "liaise"،
"taaluk goráider": "liaising"،
"taaluk goróon": "liaison"،
"misáhoya": "liar"،
"laibreri": "library"،
"uinn ókkol": "lice"،
"laisén": "licence"،
"gúroni": "lid"،
"misáho": "lie"،
"misá houya": "lier"،
"lefthinen": "lieutenant"،
"zindigi": "life"،
"ahérot": "life after death"،
"zanforan": "life and heart"،
"solasol": "life style"،
"zindigi basadé karwaiyi ókkol": "life-sustaining procedures"،
"torzó zendegi": "lifestyles"،
"tul": "lift"،
"foór": "light"،
"bijili": "lightening"،
"ooin doráni": "lighter"،
"bijilir foór": "lighthing"،
"baárbatti": "lighthouse"،
"rucni": "lighting"،
"tháçal": "lighting bold"،
"fosóngor": "like"،
"éndila": "like that"،
"emkan": "likelihood"،
"óit farede": "likely"،
"foddafúl": "lily"،
"hát théng": "limb"،
"nó edor nó udór": "limbo"،
"houñsi": "lime"،
"hód": "limit"،
"hót": "limitation"،
"hódud or bútore": "limited"،
"cúr": "line"،
"cúrbáñgga": "linebreak"،
"zubani": "lingual"،
"zuban or mahéri manúic": "linguist"،
"rabeta": "link"،
"lagaiya": "linked"،
"cínggo": "lion"،
"uñth": "lip"،
"rocfaní": "liquid"،
"liís": "list"،
"liís goijjé": "listed"،
"fún": "listen"،
"fún: ": "listen ; listened ; listening"،
"fúnoya": "listener"،
"fúna": "listening"،
"lesu": "litchi"،
"fonná": "literacy"،
"fonná óla": "literate"،
"adob": "literature"،
"cippuçísa": "little"،
"cícirí": "little bottle"،
"faní hóuri": "little cormorant"،
"kinnoul": "little fingure"،
"théngor cóñço ouñl ókkol": "little toes"،
"ziañta": "live"،
"zindigi": "livelihood"،
"hoilla": "liver"،
"jan ókkol": "lives"،
"táker": "living"،
"háibar arde tákibar hóssa": "living allowance"،
"tákode gór": "living quarter"،
"thuththéng": "lizard"،
"fuñzá": "load"،
"mal tulér": "loading"،
"horza": "loan"،
"boiçókhána": "lobby"،
"súañ isamas": "lobster"،
"elakar": "local"،
"mokami": "locale"،
"elaka": "locality"،
"mokamigoróon": "localization"،
"zagat": "locally"،
"talasgor ; hót": "locate"،
"zaga ókkol": "location"،
"thala": "lock"،
"thala": "lock ; locker ; story"،
"thala marifare de": "lockable"،
"bon raká": "lockdown"،
"thala mari raikké": "locked"،
"thala ola almali": "locker"،
"tooitta tákede zaga": "lodge"،
"gura góror geith": "lodge ; tulído"،
"tooitta táker": "lodging"،
"loóggor": "log"،
"góille": "logged in"،
"dhatha zomagoró": "logging"،
"monteki": "logical"،
"monteki tortif": "logical order"،
"bútore gól": "login"،
"bútore gólibór id": "login id"،
"mal análiozar ham": "logistic"،
"márha fothú": "logo"،
"baárkule neeiló": "logout"،
"cúor or ran": "loin"،
"mithái": "lolly"،
"Háilla gaa; háliga ; eháilla ; háliga ; ekála ; ehála ; eháilla ; gaga ; ekélaiyi ; ekéla ; háli gaga ; háliga háliga ; háliga": "loneliness"،
"ekála ; ekzoinna ; háliga ; hálika ; fúaijja sára": "lonely"،
"lamba": "long"،
"mokka sóñi": "long beans"،
"bilati boór fata": "long leaf coriander"،
"lamba balúic": "long pillow"،
"dar": "long strong oar"،
"dui hórof vawel e.g. “aa”": "long vowel"،
"deri thikedé": "long-lasting"،
"lamba feén": "long-pant"،
"bicí lamba": "longer"،
"ebbre lamba": "longest"،
"lamba hadíra": "longue"،
"saá": "look"،
"íkka saá": "look at"،
"íncagor": "look down"،
"to acágore": "look forward"،
"tuáñr loi hára mili bélla saáir": "look forward to seeing you soon"،
"uormikká soó": "look up"،
"saiyé": "looked"،
"saár": "looking"،
"bílbilar": "looking here there"،
"óñc": "loose"،
"luthgor": "loot"،
"luçífélar": "looting"،
"Rób": "Lord"،
"loóri garí": "lorry"،
"áro": "lose"،
"uzón homgor": "lose weight"،
"árouya ; hárouya": "loser"،
"gunáari": "loss"،
"háñzigiyói": "lost"،
"thal": "lot"،
"bízani tel": "lotion"،
"thal ókkol": "lots"،
"letharí": "lottery"،
"usol abas": "loud"،
"dhoóñr": "loud ; loudly"،
"matár uinn": "louse"،
"ador": "love"،
"adoijja ókkol": "loved ones"،
"adoijja": "lovely"،
"acék": "lover"،
"niso": "low"،
"nise ; bicí nise ; ebbre nise": "low 1"،
"nise": "low ; lower ; lowest"،
"lobe": "lower"،
"nisor uñth": "lower lip"،
"cóñçohát or leká": "lowercase"،
"ebbreniso": "lowest"،
"zolázaga": "lowland"،
"fórmadar": "loyal"،
"limíth goijjá kumpani": "ltd"،
"báiggo": "luck"،
"báiggoitta": "lucky"،
"month san dor mac": "lunar"،
"fool": "lunatic"،
"duñíjjar hána": "lunch"،
"duñíjja hánar kuththa": "lunch box"،
"féccwa": "lung"،
"longgi": "lungi"،
"fécca": "lungs"،
"Rukawoth Sára Zindigi": "LWB Life without Barriers"،
"lesu": "lychee"،
"misá hoór": "lying"،
"lamba doo": "machete"،
"micín": "machine"،
"boro": "macro"،
"fool": "mad"،
"madám": "madam"،
"banaiyé": "made"،
"magazín": "magazine"،
"Mogorib thaim": "Maghrib"،
"mogorib": "maghrib"،
"zadu": "magic"،
"zadugor": "magician"،
"keñsaluwá": "magnet"،
"dhoóñr gorí saáde ana": "magnification glass"،
"thaiyá": "magpie robin"،
"ciñçír fethi": "mailbox"،
"maáim boom ot duk faiyéde manúic": "maimed"،
"hótara zohómi gorá arde át théng behañ gorífélla": "maiming"،
"meéin": "main"،
"asól karon": "main factor"،
"meéin zaga": "mainland"،
"háas gorí": "mainly"،
"sóñli raké": "maintain"،
"sóñli raikké": "maintained"،
"sóñli rakér": "maintaining"،
"thíkrakóon": "maintenance"،
"mokka gula": "maize"،
"dhoóñr": "major"،
"beec híssa": "majority"،
"bana": "make"،
"bana": "make ; made ; making"،
"taákit gor": "make certain"،
"dustígor": "make friend"،
"ódode gor": "make same"،
"moza dahó": "make some one taste"،
"taákit gor": "make sure"،
"buzó": "make understand"،
"banoya": "maker"،
"tooitta": "makeshift"،
"banar": "making"،
"toiyar gorér": "making ready"،
"aabad": "making the land free"،
"maléria": "malaria"،
"Malésia": "Malaysia"،
"morot": "male"،
"bolot goru": "male cow"،
"kutta": "male dog"،
"fañçá sóol": "male goat"،
"façá sóol": "male sheep"،
"toksim gor": "maltiply"،
"manúic": "man"،
"anjamde": "manage"،
"anjam diyé": "managed"،
"entezamiya": "management"،
"menéjar": "manager"،
"menéjing dharekthar": "managing"،
"goríbar ejajot": "mandate"،
"laazim": "mandatory"،
"amm": "mango"،
"zahér": "manifest"،
"insán": "mankind"،
"adot ahálak": "manner"،
"monzokká": "manner less"،
"adob ; adob ahálak ; cóibbota": "manners"،
"manúic der": "manning"،
"hátot rakéde kitab": "manual"،
"gáni": "manual oil-press"،
"hátegor": "manually"،
"mal neelar": "manufacturing"،
"Manús dec": "Manus"،
"Manús ór manúic": "Manusian"،
"bicí": "many"،
"nokcó": "map"،
"bolád": "marble"،
"Maarec": "March"،
"uzo ; sámme uzo ; ageboçó": "march"،
"sódorok fúl": "marigold"،
"doijjar": "marine"،
"beça beçir": "marital"،
"biyátar háalot": "marital status"،
"doijjar": "maritime"،
"nicána": "mark"،
"nicán lagaiyé": "marked"،
"markár": "marker"،
"bazar": "market"،
"bazar goróya": "marketer"،
"maárk lagoon": "marking"،
"thambu": "marquee"،
"cádi": "marriage"،
"biyáta": "married"،
"biá gor": "marry"،
"Márs": "Mars"،
"cóhid": "martyr"،
"alubátta": "mash"،
"mukzáfani": "mask"،
"mukzáifaiye": "masked"،
"dola": "mass"،
"haçahaçi": "massacre"،
"maz": "massage"،
"masthor": "master"،
"masthar kaádh": "master card"،
"caça": "mat"،
"bone": "match"،
"millé": "matched"،
"sóloi": "matches"،
"mal": "material"،
"mami": "maternal aunt"،
"maar sehét ; maar tondurustí": "maternal health"،
"mamu": "maternal uncle"،
"fuabia debal": "maternity care"،
"fuain óde hóspital": "maternity hospital"،
"hísab": "math"،
"gonit": "mathematics"،
"mosólla": "matter"،
"yián buzár maamela": "matter of making intelligence"،
"alfaz or maamela ; lofzór maamela": "matter of words"،
"gadi": "mattress"،
"bicíttu bicí gor": "maximise"،
"bicíttu bicí gorér": "maximising"،
"bicíttu bicí": "maximum"،
"Mee": "May"،
"óitfare": "may be"،
"expáath ór dostur ókkol amól goríth fare": "may follow expert guidelines"،
"añáre háwala difaribóu": "may quote me"،
"óitfare ; cayét": "maybe"،
"meyór": "mayor"،
"behañsúra rasta": "maze"،
"añáre": "me"،
"hána": "meal"،
"uná": "mealt"،
"maáni uçé": "mean"،
"maáni": "meaning"،
"maáni aséde": "meaningful"،
"zoriya": "means"،
"murat": "meant"،
"thaim or bútore": "meantime"،
"thaim ibát": "meanwhile"،
"bebastá": "measure"،
"maf": "measurement"،
"bebastá": "measures"،
"gusso": "meat"،
"midhia": "media"،
"daktori": "medical"،
"sehétor háalot": "medical condition"،
"daktori rai": "medical opinion"،
"daktori kúlasa": "medical summary"،
"daktori hísafe": "medically"،
"dabai": "medication"،
"dabai": "medicine"،
"mazilá": "medium"،
"mazé máijja gorí": "mediumly"،
"dola ó": "meet"،
"mithíng": "meeting"،
"megabáith": "megabyte"،
"futtifúl": "melastoma flower"،
"hoijja": "melee"،
"talgana": "melody"،
"baki": "melon"،
"miligiyói": "melt"،
"membór": "member"،
"membórcíp": "membership"،
"yiad dac": "memo"،
"yaadgar": "memorable"،
"yiaddác": "memorandum"،
"yiadgor": "memorize"،
"yiad dac": "memory"،
"manúic ókkol": "men"،
"demaki": "mental"،
"demaki ham": "mental function"،
"demaki sehét": "mental health"،
"demaki sehéti mockil ól": "mental health crisis"،
"demaki hísafe": "mentally"،
"hoóider": "mentioning"،
"gurú": "mentor"،
"mocuwarader": "mentoring"،
"minu": "menu"،
"códoor": "merchant"،
"dóni ; taajer ; tuangor ; foicá óla ; tujjar ókkol": "merchent"،
"rahámot óla": "merciful"،
"maakuiri": "mercury"،
"rahámot": "mercy"،
"Rahámot or nobi ; rahám": "Mercy of Prophet"،
"seróf": "merely"،
"milaiféla": "merge"،
"kaabiliyoti": "merit"،
"meés": "mess"،
"méseij": "message"،
"poigam defeçár": "messaging"،
"Rosúl": "Messenger"،
"seder béder ; beháñ súra": "messy"،
"dola óiye": "met"،
"uoror": "meta"،
"uoror dhatha": "metadata"،
"methél": "metal"،
"mithár": "meter"،
"torika": "method"،
"zuu": "methodology"،
"mithár": "metre"،
"undor ókkol": "mice"،
"cóñço": "micro"،
"zunímúni": "microflora ; gutflora ; microbiota"،
"dhoóñr daháde hol": "microscope"،
"maikrusulá": "microwave"،
"mazé": "mid"،
"mazé": "middle"،
"mazór han": "middle ear"،
"mazór ouñl": "middle finger"،
"mazór ouñl": "middle fingure"،
"dúddui": "middle head top"،
"mazór fak": "middle lobe lung"،
"rait nicí": "middle of the night"،
"mazór eskul": "middle school"،
"rait nicí": "midnight"،
"fuadóroni": "midwife"،
"óitfaittou": "might"،
"óitfare": "might be"،
"taakotwala": "mighty"،
"hijirot gor": "migrate"،
"híjorot": "migration"،
"hijirot or ain": "migration act"،
"maik": "mike"،
"ekkená": "mild"،
"milithíri": "military"،
"dut": "milk"،
"dutgáñça": "milkshake"،
"atha ficóni": "mill"،
"doc lák": "million"،
"házar théingga": "millipede"،
"minaara": "minaret"،
"demak": "mind"،
"eésas": "mindful"،
"añár": "mine"،
"súp - bóut kisím ór torhari loi banaiyé": "minestrone"،
"cóñço baás": "minibus"،
"homot": "minimal"،
"homgor": "minimise"،
"ebbre homot": "minimum"،
"miçikurí neeloon": "mining"،
"uzir": "minister"،
"uziri": "ministerial"،
"uit": "mink"،
"cóñço": "minor"،
"akoliyot": "minority"،
"akkoli grúp": "minority group"،
"fudina fata": "mint leaf"،
"náges": "minus"،
"miníth": "minute"،
"keramot": "miracle"،
"gaibi hísafe": "miraculously"،
"balur comka faní táafan lage": "mirage"،
"ana": "mirror"،
"hórafi": "mischief"،
"gura hosúri": "misdemeanour"،
"bohíl": "miser"،
"dukkoítta": "miserable"،
"samar gorí": "miserably"،
"dile dukfar": "misery"،
"fára": "misfortune"،
"golot hóbor": "misinformation"،
"golot torjuma goijjé": "misinterpreted"،
"gumrá goróon": "misleading"،
"maiya": "miss"،
"áraiyi": "missed"،
"mizail": "missile"،
"áñzigiyói": "missing"،
"moksót": "mission"،
"golot": "mistake"،
"jonab": "mister"،
"búl buzá": "misunderstanding"،
"búl buijjé": "misunderstood"،
"golot estemal gorá": "misuse"،
"homaide": "mitigate"،
"homaider": "mitigating"،
"homgorá": "mitigation"،
"mosólla": "mix of spices"،
"zák": "mob"،
"mubáil": "mobile"،
"técera": "mock"،
"mockari": "mockery"،
"torika": "mode"،
"modhél": "model"،
"dormiani": "moderate"،
"niyom gorí": "moderately"،
"noya goróon": "moderation"،
"noya": "modern"،
"noyahoró": "modernization"،
"tobdili": "modification"،
"tobdil goijjé": "modified"،
"bodol": "modify"،
"mogosi": "modular"،
"modhúl": "module"،
"bízabiza": "moist"،
"marír dat ókkol": "molar teeth"،
"marír dat": "molar tooth"،
"zaasus": "mole"،
"mother": "mom"،
"ekkená thaim": "moment"،
"fúngri kiyan": "monastery"،
"Cómbar": "Monday"،
"thiñya": "money"،
"thiañ zoma goróon": "money collection"،
"bizi": "mongoose"،
"monithar": "monitor"،
"negarani goijjé": "monitored"،
"negerani gorér": "monitoring"،
"thóur": "monk"،
"bañdor": "monkey"،
"zórborsat": "monsoon"،
"mac": "month"،
"macharbari": "monthly"،
"muúdh": "mood"،
"san": "moon"،
"san uillé": "moon appeared"،
"san neele": "moon comes out"،
"san cóñço órr": "moon decreasing"،
"san oré gonná dóijje": "moon eclipse"،
"san dhoóñr órr": "moon increasing"،
"san or foór": "moon light"،
"fundimaiccá rait": "moonless night"،
"san or foór": "moonlight"،
"sun ula": "moonrise"،
"san dhufá": "moonset"،
"jáñçu": "mop"،
"ahálak": "moral"،
"ahálak ; adob": "morality"،
"beec": "more"،
"honó ciz ottú áro bicí": "more than anything else"،
"yíar baade": "moreover"،
"beínna": "morning"،
"rehín ; módhgéij ; gérwi": "mortage"،
"mosóit": "mosque"،
"mucá": "mosquito"،
"mucóri": "mosquito net"،
"mucár dabai": "mosquito repellent"،
"aksér": "most"،
"beec bála": "most of the time"،
"becbák": "mostly"،
"maa": "mother"،
"madari zuban ; maar zuban ; maabafor hotá": "mother tongue"،
"mou": "mother's brother"،
"nana": "mother's father"،
"hála": "mother's sister"،
"óouri": "mother-in-law"،
"maa-bóin": "mother-sister"،
"méinbudh": "motherboard"،
"hímmot diyé": "motivated"،
"théladoon": "motivation"،
"sóbob": "motive"،
"MOU": "MOU"،
"faár": "mountain"،
"undur": "mouse"،
"mus": "moustache"،
"gal": "mouth"،
"lor": "move"،
"lor": "move ; moved ; moving"،
"loijjé": "moved"،
"lorasora": "movement"،
"filim": "movie"،
"lorer": "moving"،
"Paalimen Membór": "MP"،
"prayer calling person": "muadhdhin"،
"muazzen ; azan douya": "muazzen"،
"muazzin": "muazzin"،
"bicí": "much"،
"fúth": "mud"،
"muazzin": "muezzin"،
"moók": "mug"،
"Rosúl ór nam": "Muhammad"،
"mujahíd": "mujahid"،
"baçá mas": "mullet"،
"bicí": "multi"،
"bicí zubanwala": "multilingual"،
"bicí": "multiple"،
"bicí goróon": "multiplication"،
"bicí gor": "multiply"،
"bóut dhoilla lalói aiccéde alamot": "multisystem inflammatory syndrome"،
"munisipel ; myunisipél": "municipal"،
"mariféla": "murder"،
"marifélaiye": "murdered"،
"gaa hoñra": "muscle pain"،
"ul": "mushroom"،
"muzík": "music"،
"baki gula: ": "musk-melon"،
"Musúlman": "Muslim"،
"hámahá": "must"،
"óforibóu": "must be"،
"óre dahá foribóu": "must be presented"،
"mus": "mustache"،
"hóurittel": "mustard"،
"hóroit tel": "mustard oil"،
"haçiféloon": "mutilation"،
"sóol or gusso": "mutton"،
"apósi": "mutual"،
"dunítoróf ór izzot": "mutual respect"،
"azan douya": "muzzen"،
"añár": "my"،
"Bormár dec ; Mollúk": "Myanmar"،
"báttwa": "myna"،
"añínize": "myself"،
"buzí nofaréde": "mysterious"،
"guillá mas": "mystus gulio"،
"nan ruthi": "naan"،
"bongor": "nab"،
"nok": "nail"،
"nok haçoni": "nailcutter"،
"lendha ; hoor sára ; hoor nái": "naked"،
"nam": "name"،
"nam diyé": "named"،
"yáni": "namely"،
"fakíth": "napkin"،
"kaháni": "narration"،
"sisijja": "narrow"،
"nakor": "nasal"،
"nakor doró háñthdhi": "nasal bone"،
"nakor norom háñthdhi": "nasal cartilage"،
"nakor cór": "nasal cavity"،
"nak bonúwa": "nasal congestion"،
"cíin": "nasal mucus"،
"finak": "nasal polyps"،
"koum": "nation"،
"koumi": "national"،
"wotóni asól ; koumi asól": "national origin"،
"koumi amóni komithí": "national security committee"،
"koumiyot": "nationalism"،
"koumiyoti": "nationalist"،
"decóittayi": "nationality"،
"decóitta ókkol": "nationals"،
"koum ókkol": "nations"،
"mokami": "native"،
"kuduroti": "natural"،
"kudoroti tobá/dónco/borbadi/nac/afát": "natural disaster"،
"lota": "natural string"،
"kuduroti hísafe": "naturally"،
"kudurot": "nature"،
"cótan": "naughty"،
"Neerú dec": "Nauru"،
"óiccani ; óiccani": "nausea"،
"dhúlade": "nauseating"،
"doijjar": "naval"،
"nagí": "navel"،
"ikkáttu ikká solizana": "navigation"،
"neví": "navy"،
"noó": "nay"،
"hañsé": "near"،
"hañsé": "near ; nearer ; nearest"،
"atehañsé": "nearby"،
"hañsé háñicca": "nearer"،
"ebbre hañsé": "nearest"،
"sáf , sáfsutura": "neat"،
"zoruri gorí": "necessarily"،
"zoruri": "necessary"،
"zoruriyoti": "necessity (n.)"،
"gola": "neck"،
"goddana": "neck back part"،
"golar góndha": "neck bell"،
"nekthár": "necktie"،
"dorhar": "need"،
"arekzon ottu lage": "need it"،
"zorurot óiye": "needed"،
"fúñic": "needle"،
"moótáj óla": "needy"،
"uldha": "negative"،
"félai raikké": "neglect"،
"laaforbayi": "negligence"،
"forbasára": "negligent"،
"biasana goré": "negotiate"،
"biasana goijjé": "negotiated"،
"biasana goróon": "negotiation"،
"Neguru koum": "Negros"،
"ziran": "neighborhood"،
"ziran": "neighbour"،
"aspas": "neighbourhood"،
"góror dhákor": "neighbouring"،
"noó": "neither"،
"Nepal dec": "Nepal"،
"Nepthún": "Neptune"،
"demakor rok": "nerve"،
"dhoradé": "nervous"،
"bahá": "nest"،
"zal": "net"،
"sáafi gunári": "net lost"،
"sáafi tonhár gunári": "net lost wages"،
"hamorzal": "network"،
"demaki rok or operécen ór": "neurosurgical"،
"mazétákoya": "neutral"،
"honódin no": "never"،
"baháral": "nevertheless"،
"noya": "new"،
"noya": "new ; newer ; newest"،
"noiya óiyede": "new born child"،
"noya gorí": "newly"،
"bou ; noya bou": "newly married"،
"hóbor": "news"،
"nyús ejensi": "news agency"،
"hóborihabos": "newspaper"،
"tarfor": "next"،
"tarfor fisá dóra ; tarfor fisá gorá ; tarfor fisáli gorá": "next follow up"،
"agorbar": "next time"،
"fore": "next to"،
"agor háftat": "next week"،
"agor bosór": "next year"،
"Hókumot Noóde Tonzim": "NGO"،
"cúndor": "nice"،
"tuáñre mili kúci laiggé": "nice to meet you"،
"tuáñre miliyó kúci laiggé": "nice to meet you too"،
"Nicholas fadúri": "Nicholas"،
"gura jiníc loi matá hár": "niggling"،
"rait": "night"،
"hóraf cóppon": "nightmare"،
"matár tuli": "nimbus (halo)"،
"no": "nine"،
"unnúic": "nineteen"،
"unnúic": "Nineteen (19)"،
"nobboi": "ninety"،
"nobboi": "Ninety (90)"،
"dut dór bath": "nipple"،
"jonnot": "nirvana"،
"naitrujan háwa": "nitrogen"،
"uinn or boda": "nits"،
"noó": "no"،
"thíkana ola thíkana yián ót nái": "no longer at this address"،
"honíkka nái": "no one"،
"ocánti": "no peace"،
"honó mockil nái": "no problem"،
"córif": "noble"،
"honíkka": "nobody"،
"háñ ; háñ hoó": "nod"،
"kókswé": "noddle"،
"girá": "node"،
"uzor ; uzoijja ; uzor der": "noice"،
"uzor": "noice ; making noice"،
"abas": "noise"،
"uzor ola": "noisy"،
"gair": "non"،
"waapes nogoríbar kaanun": "non-refoulement"،
"no kuinna cokól": "nonagon"،
"nokuinna cokól": "nonagon shape"،
"kessú nái": "none"،
"tóu údda": "nonetheless"،
"atá": "noni"،
"akol sára , biakkol , biakkoilla": "nonsens"،
"beil thík": "noon"،
"dóroni": "nop"،
"noó..naá": "nor"،
"aám": "normal"،
"aám nun": "normal saline"،
"dormiani háalot": "normality"،
"dormian hísafe": "normally"،
"uttor": "north"،
"uttore arde fuge": "north east"،
"uttore arde fosíme": "north west"،
"uttoror": "northern"،
"nak": "nose"،
"náfa": "nose rope"،
"nakor matá": "nose tip"،
"nakor fóth": "nostril"،
"noó": "not"،
"ebbre noó": "not at all"،
"goijjá nóo": "not done"،
"estemal ot nái": "not in use"،
"nasotur": "not smart"،
"aijó nóo": "not yet"،
"nuth": "note"،
"boói": "notebook"،
"nuth goijjé": "noted"،
"nuth óll , nuth ókkol": "notes"،
"kessú nái": "nothing"،
"nothís": "notice"،
"dahá zade": "noticeable"،
"sábgorí": "noticeably"،
"kíal goijjí": "noticed"،
"ettála": "notification"،
"zana": "notify"،
"nuth gorér": "noting"،
"tóu údda": "notwithstanding"،
"nam": "noun"،
"kissá": "novel"،
"Nowambor": "November"،
"Nowambor ; 11 mác ór mac": "Novembor"،
"Nowambor": "Novembor (eleven month)"،
"ehón": "now"،
"ackail": "nowadays"،
"sára": "null"،
"besút": "numb"،
"nombór": "number"،
"nombór pleith": "number plate"،
"nombór diya liís": "numbering"،
"bicí": "numbers of"،
"besút": "numbness"،
"thóurni": "nun"،
"naás": "nurse"،
"naáth": "nut"،
"zaifól": "nutmeg"،
"geca": "nutrition"،
"gaar fáaida ola": "nutritious"،
"dana ókkol": "nuts"،
"foñí": "oar"،
"háñlic": "oar long"،
"hosóm": "oath"،
"fuabiya arde dekbal gorá": "OB"،
"fórmadari": "obedience"،
"mano": "obey"،
"ciz": "object"،
"moksót": "objective"،
"zimma asé ; waajib gor ; mojbur óiba": "obligate"،
"zimma buzír": "obligated"،
"zimmadari": "obligation"،
"fóroz": "obligatory"،
"mojbur goré": "oblige"،
"behúda": "obscene"،
"añdár goijjé": "obscured"،
"mani zoon": "observance"،
"saásita": "observation"،
"gour goré": "observe"،
"gour goijjé": "observed"،
"soóuya": "observer"،
"gour gorér": "observing"،
"mon góilloi": "obsessed"،
"bazá": "obstacle"،
"maiyafuain dór daktor": "obstetrician"،
"ooñsádi raká": "obstruct"،
"háñsilgor": "obtain"،
"háñsil goijjé": "obtained"،
"háñsil gorír": "obtaining"،
"sáf sáf": "obvious"،
"sáf gorí": "obviously"،
"emouka": "occasion"،
"faile foroke": "occasionally"،
"kobza goróya": "occupant"،
"ham": "occupation"،
"kobza goijjé": "occupied"،
"kobza goré": "occupy"،
"ó": "occur"،
"óiye": "occurred"،
"óon": "occurrence"،
"órr": "occurring"،
"sómondor": "ocean"،
"añcthokuinna": "octagon"،
"Oktubor": "Octobar"،
"oktubor ; 9 mác": "October"،
"añctho kuinna cokól": "octogon shape"،
"bézura": "odd"،
"or": "of"،
"decór": "of country"،
"bilkúl": "of course"،
"Jafani": "of Japan"،
"jandár": "of life"،
"yaar": "of now"،
"zilloti": "of suffering"،
"tarár bútottu": "of them"،
"bon": "off"،
"hosúri": "offence"،
"bezar goijjé": "offended"،
"mujirim ókkol": "offender"،
"beizzontide": "offensive"،
"zañs": "offer"،
"homai tomai peecgoró": "offer in compromise"،
"peec goijjé": "offered"،
"ofís": "office"،
"ofísor theból": "office table"،
"ofísar": "officer"،
"córkari": "official"،
"habosfonna": "official paper"،
"úde córkari estemal": "official use only"،
"córkari": "officially"،
"córkari manúic": "officials"،
"lainor baáre": "offline"،
"agefisé ó": "offset"،
"doijjar": "offshore"،
"fuain": "offspring"،
"egaza": "often"،
"Yá Allah": "Oh Allah"،
"Yáarob": "Oh Sustainer"،
"tel": "oil"،
"teilla": "oily"،
"thíkasé": "okey"،
"béra": "okra"،
"burá": "old"،
"furan": "old ; older ; oldest"،
"burá manúic": "old man"،
"burá maiyafua": "old woman"،
"bicí furan": "older"،
"sóbse furan": "oldest"،
"zaitun": "olive"،
"zaitun tel": "olive oil"،
"zaitun": "olives"،
"ombudsman": "ombudsman"،
"badde": "omit"،
"uore": "on"،
"soler": "on going"،
"zari aséde kaamiyabi": "on going success"،
"jari tortib": "on going training"،
"jari vólonthiar": "on going volunteer"،
"sitot": "on its back"،
"édin": "on that day"،
"ekbar": "once"،
"ek": "one"،
"ek ; ekkán ; uggwá": "one (1)"،
"Ek kurul": "One Crore"،
"ekku dhoilla hána": "one kind of food"،
"arekzon": "one other person"،
"ekzon": "one person"،
"ábaitá": "one who eats a lot"،
"demak ola": "one who is brainy"،
"elóm óla": "one who is educated"،
"guccá óla": "one who is of angry mood"،
"ahálak óla": "one who is of good manner"،
"foisá óla": "one who is wealthy"،
"dekóya": "one who sees"،
"mujahíd": "one who struggles"،
"ek-kuthí": "one-billion"،
"ek-lák": "one-hundred-thousand"،
"doc-lák": "one-million"،
"ek-házar-ek": "one-thousand-one"،
"ek ókkol": "ones"،
"solerdé": "ongoing"،
"fiañs": "onion"،
"fiañs fata": "onion leaves"،
"intharnéthot": "online"،
"seróf": "only"،
"ekí ; seróf ; seríf": "only one"،
"ekí": "only one ; unique"،
"kulot": "onshore"،
"uore": "onto"،
"óh": "oops"،
"kúl": "open"،
"kúla , kúl , kúille , kúlifélaiye , kúler": "open ; open ; opened ; openning ; opened"،
"mela": "open feeding"،
"melaa": "open invitation"،
"kúla zaga": "open space"،
"áagoró": "open the mouth widely"،
"kúille": "opened"،
"kúler": "opening"،
"kúli": "openly"،
"kúlahála": "openness"،
"sola": "operate"،
"solaiyé": "operated"،
"soler": "operating"،
"operécen": "operation"،
"solibélla redhí": "operational"،
"soloya": "operator"،
"rai": "opinion"،
"mouka": "opportunity"،
"uldha gor": "oppose"،
"uldha": "opposite"،
"zala": "oppress"،
"zulúm": "oppression"،
"zulúm goróya": "oppressor"،
"Yáki": "Ops!"،
"sugór": "optic"،
"ektiyar": "option"،
"ektiyari": "optional"،
"suk cek goróya": "optometrist"،
"yáto": "or"،
"córboti": "orange"،
"córboti rong": "orange color"،
"guldair or": "orbital"،
"rasnafúl": "orchid"،
"hokúm": "order"،
"hókumdiyé": "ordered"،
"tortif gorí": "orderly"،
"ahakamat": "orders"،
"hókum": "ordinance"،
"maamuli": "ordinary"،
"aam": "ordinary people"،
"tortif or sáate": "ordinate"،
"jisím": "organ"،
"tonzim": "organisation"،
"tortif de": "organise"،
"tonzim": "organization"،
"entezam gor": "organize"،
"asól": "origin"،
"asól": "original"،
"asólot": "originally"،
"cúnacadi": "ornament"،
"etim": "orphan"،
"etimi": "orphanage"،
"dat sóiyigora": "orthodontic"،
"lekónor": "orthographic"،
"Oskar": "Oscar"،
"uore nise laro": "oscillate"،
"osmosís": "osmosis"،
"oinno": "other"،
"oinno formáth ól": "other formats"،
"oinno manúic ókkol": "others"،
"ootóba": "otherwise"،
"añárar": "our"،
"añárar waapesi": "our comeback"،
"añárár nizor": "ours"،
"añára nize": "ourselves"،
"baáre": "out"،
"fólizoon": "outbreak"،
"notiza": "outcome"،
"sikkara": "outcry"،
"furana ; thaim giyóide jiníc": "outdated"،
"baáror han": "outer ear"،
"háka": "outline"،
"boiyan gorágiye": "outlined"،
"baártu saá": "outlook"،
"bordac gorí nofaréde": "outrageous"،
"cúrut": "outset"،
"baárkule": "outside"،
"candár": "outstanding"،
"baártu": "outward"،
"andhar cokólola": "oval"،
"andha cokól": "oval shape"،
"fúlgor": "ovary"،
"furon": "oven"،
"uore": "over"،
"kulehale": "overall"،
"bicí zámilade": "overcrowding"،
"uore uçé": "overlap"،
"noódeke": "overlook"،
"raitbór": "overnight"،
"félaiagezoon": "override"،
"saáitáikke": "oversaw"،
"bidecí": "overseas"،
"bidecí tonzim ókkol": "overseas entities"،
"saáitáke": "oversee"،
"bicí gorí gum zoon": "oversleeping"،
"aám nozoriya": "overview"،
"bicíbór": "overweight"،
"dufígiyói": "overwhelm"،
"ódorbaára": "overwhelmin"،
"lekár uore lek": "overwrite"،
"fúlgor ór fáik": "oviduct"،
"diya foribóu": "owe"،
"feñsa": "owl"،
"nizor": "own"،
"nizor zaga": "own place"،
"girós": "owner"،
"maaleki": "ownership"،
"nizebaze": "ownself"،
"bolod goru": "ox"،
"bolod goru": "ox ; male cow"،
"tongoru": "oxen"،
"oksijan háwa": "oxygen"،
"síloin": "oyster"،
"Pesifík": "Pacific"،
"pek goré": "pack"،
"pedh": "pad"،
"zaba": "padding"،
"théng e sola": "paddle"،
"dán": "paddy"،
"fuaindór": "paediatric"،
"sófa": "page"،
"zadi": "pagoda"،
"bic": "pain"،
"hooñrar": "pain suffering"،
"doród goréde": "painful"،
"sábatul": "paint"،
"sábatulóon": "painting"،
"zurzur": "pair"،
"Fakistán": "Pakistan"،
"galor sal": "palate"،
"hátor tallwa": "palm"،
"átor tallwa": "palm of the hand"،
"talgas ór tel": "palm oil"،
"tal gas": "palm tree"،
"taari": "palm wine"،
"horiya": "pan"،
"pankarias": "pancreas"،
"pandha": "panda"،
"budh": "panel"،
"kúduk": "pangolin"،
"dhór góloon": "panic"،
"dhor laiggé": "panicked"،
"úñcoon": "panting"،
"hoiñya": "papaya"،
"habos": "paper"،
"Papua Gunea dec": "Papua"،
"mesál": "parable"،
"gaat zoror dabai": "paracetamol"،
"bíssoó": "paradise"،
"paragaráf": "paragraph"،
"boraboijja": "parallel"،
"paramithar": "parameter"،
"adámilitiri": "paramilitary"،
"mafgoríde": "pardon"،
"maabaf": "parent"،
"faloon": "parenting"،
"thíagorá": "park"،
"tíade zaga": "parking"،
"palimen": "parliament"،
"tuta": "parrot"،
"boórfata": "parsley"،
"furuza": "part"،
"rukú ; solár híssa": "part of prayer"،
"cámil óuya": "participant"،
"báklo": "participate"،
"bákloiyé": "participated"،
"báklor": "participating"،
"bákloon": "participation"،
"hórof": "particle"،
"háasgorí": "particular"،
"háas gorí": "particularly"،
"kessú híssa": "partly"،
"cíiardár": "partner"،
"cíiardar": "partnership"،
"faathi": "party"،
"fac": "pass"،
"rasta": "passage"،
"rasta": "passageway"،
"fas óiye": "passed"،
"súwari": "passenger"،
"paásgorér": "passing"،
"anar": "passion fruit"،
"dilmon kúcigori": "passionately"،
"paáspóuth": "passport"،
"húfiawaádh": "password"،
"guzori giyóide": "past"،
"Italir kókswé": "pasta"،
"baiththa ciz": "paste"،
"tali": "patch"،
"añçúr maala": "patella"،
"fúu": "paternal aunt"،
"jeçá [dhoóñba]": "paternal uncle"،
"rasta": "path"،
"doyalu": "pathetic"،
"áñçede rasta": "pathway"،
"sobór": "patience"،
"ruki": "patient"،
"rukír bebáar or kóuth": "patient code of conduct"،
"soñigor": "patrol"،
"faára diyé ; soñigoijjé": "patrolled"،
"cokól": "pattern"،
"sitara mitara": "patterned color"،
"tíagorá": "pause"،
"fattór ór rasta": "pavement"،
"tolob": "pay"،
"hóssa": "payment"،
"zati komputar": "PC"،
"mothór": "pea"،
"cánti": "peace"،
"cánti lagedé": "peaceful"،
"cántir hotá": "peaceful talk"،
"cánti gorí": "peacefully"،
"píc gula": "peach"،
"moiyor": "peacock"،
"badam": "peanut"،
"badam tel": "peanut oil"،
"nasfoti gula": "pear"،
"cóñço fattór ; cóñço fattór ; kongkor": "pebbles"،
"áñçede manúic": "pedestrian"،
"era": "peel"،
"bal súl": "peel of"،
"erani": "peeler"،
"erar": "peeling"،
"eraiya kela": "peelings"،
"kíl": "peg"،
"gulguilla gulá": "pellet"،
"melá maijjé": "pelted"،
"keñil or háñdhdhi": "pelvis"،
"holom": "pen"،
"kaanuni torfóttu sáñza": "penality by law"،
"zoribana": "penalty"،
"holom": "pencil"،
"baakiaséde": "pending"،
"bútore goillé": "penetrated"،
"pengui": "penguin"،
"cúnarsó": "penis"،
"foicá": "penny"،
"pencín": "pension"،
"fañskuinna": "pentagon"،
"fañs kuinna cokól": "pentagon shape"،
"fúraibár agortú": "penultimate"،
"manúic": "people"،
"gulmoris": "pepper"،
"hísafe": "per"،
"dine": "per day"،
"ótnofar": "perceive"،
"fisót": "percent"،
"cótkara": "percentage"،
"híyal": "perception"،
"bilkúl sóiyi": "perfect"،
"adagor": "perform"،
"adagorá": "performance"،
"anjamdiyé": "performed"،
"óitfare": "perhaps"،
"hotornák": "perilous"،
"fakkáraiya": "perimeter"،
"Fua óibar agor fosór mejaz": "perinatal mood"،
"muddot": "period"،
"miyadi": "periodic"،
"waada mozin": "permandate"،
"mustokil": "permanent"،
"mustokil hísafe": "permanently"،
"ejazot": "permission"،
"ejazot": "permit"،
"ejazot diyé": "permitted"،
"uwá": "perpendicular"،
"jrúmgor": "perpetrate"،
"mujrim": "perpetrator"،
"zulúm séta gor": "persecute"،
"zulúm séta": "persecution"،
"zidgor": "persist"،
"bolazuri goijjé": "persisted"،
"musolsól": "persistent"،
"lagatar zor": "persistent fever"،
"manúic": "person"،
"zati": "personal"،
"zati sáman": "personal belonging"،
"zati sáman óll": "personal belongings"،
"zati sinno": "personal identification"،
"zati sinno nombór": "personal identification number"،
"nize": "personally"،
"zati": "personnel"،
"nozoria": "perspective"،
"foór daházar dé plástík": "Perspex"،
"bíra": "persuade"،
"díandi foróon": "perusal"،
"fuk óll": "pests"،
"falok janwar": "pet"،
"pethabáith": "petabyte"،
"koumi dorót ; koumi josbat ; koumi dorót óla ; koumi josba ola": "petriotic"،
"petroul": "petrol"،
"ouñlor ahéri girá": "phalanges"،
"dabair mahér ; dabair expáth": "pharmacist"،
"fármesi ; dabair duan ; dabair mahéri": "pharmacy"،
"bar": "phase"،
"Filipin": "Philippine"،
"fólsofi": "philosophy"،
"leththwa": "phlegm"،
"fún": "phone"،
"fothú": "photo"،
"jumla": "phrase"،
"jisími": "physical"،
"gaafiçé hísafe": "physically"،
"jinís": "physics"،
"pianu": "piano"،
"ebbre asán": "pice of cake"،
"feñçailo": "pick"،
"thani tuló": "pick up"،
"tuillé": "picked"،
"feñçaian": "pickup"،
"fothú": "picture"،
"thukuça": "piece"،
"gáñth": "pier"،
"dindarwala": "piety"،
"cúwor": "pig"،
"hoitor": "pigeon"،
"cúorsó": "piglet"،
"januar or sam": "pigmented"،
"dui dhákor tu sul or buñda": "pigtails hair"،
"bás": "pile"،
"háji": "pilgrim"،
"Jamarat - háji ókkol é fattór maredé zaga": "pilgrim's stoning point"،
"thiañ mal bekaanuni loiféla": "pillage"،
"thúnih": "pillar"،
"balúic": "pillow"،
"balúic ór waár": "pillow cover"،
"pailót": "pilot"،
"fin": "pin"،
"enáac": "pine apple"،
"enác": "pineapple"،
"ringoró": "ping"،
"gulabi": "pink"،
"kinouñl": "pinkie"،
"kinouñl": "pinky finger"،
"kinnoul": "pinky finger ; pinkie ; little finger ; baby finger"،
"hanor baár dhák": "pinna"،
"moinna fattór": "pinnacle"،
"kirmifuk": "pinworm"،
"dindar": "pious"،
"súbi": "pious person"،
"fáik": "pipe"،
"pistol": "pistol"،
"gañt": "pit"،
"fiçá": "pita"،
"abas or usol niso": "pitch"،
"rahám": "pity"،
"tuáñr uore afsús": "pity you"،
"zaga": "place"،
"ebadot goréde zaga": "place of worship"،
"aára": "place of worship with drums"،
"zagazaga": "place to place"،
"rakké": "placed"،
"fúainna": "plain"،
"plan": "plan"،
"plein": "plane"،
"sétara": "planet"،
"plan goijjé": "planned"،
"plan gorér": "planning"،
"gas": "plant"،
"kelar túr": "plantain flower"،
"flasthik": "plastic"،
"botton": "plate"،
"fúainna gorére": "plateauing"،
"flathfóom": "platform"،
"kélaá": "play"،
"kélah": "play ; played ; playing"،
"kélah": "play ; played ; playing ; played"،
"kéloya": "player"،
"kélai kélai tákede": "playful"،
"soliborliís": "playlist"،
"dorhás gor": "plea"،
"meérbanigorí": "please"،
"meérbani gorí thikdo": "please tick"،
"kúci óiye": "pleased"،
"dilcocbíola": "pleasing"،
"kúci": "pleasure"،
"kusi": "pleat"،
"becá bicí": "plentiful"،
"flánthi": "plenty"،
"torifarefán goridiyé": "plied"،
"gorib dukkíta": "plight"،
"bíñçaá": "plot"،
"nahol": "plough"،
"nahol": "plough grip"،
"nahol or ic": "plough shaft"،
"nahol or fál": "plough wedge"،
"plág": "plug"،
"plág gólo": "plugin"،
"borói": "plum"،
"harílor": "plundering"،
"jomá": "plural"،
"zoma": "plus"،
"thippír lora": "pluse"،
"at": "pm"،
"sálim óiye": "pneumonia"،
"png": "png"،
"zep": "pocket"،
"hóssa bisar thiañ": "pocket-money"،
"notiza neeledé": "poductive"،
"ceér": "poem"،
"cáyer": "poet"،
"cáayeri": "poetry"،
"kitaabi cóba": "poetry festival"،
"nuktá": "point"،
"nozoriyar nuktá": "point of view"،
"icára gor": "point to"،
"icára gorí daháiye": "pointed"،
"pothol": "pointed gourd"،
"icára ouñl": "pointer finger"،
"bic": "poison"،
"gutá mar": "poke"،
"dóla bálluk": "polar bear"،
"polar bálluk": "polar beer"،
"hámbaá": "pole"،
"fulic": "police"،
"fulicca": "police man"،
"fulic or tána ; fulic esthéicen": "police station"،
"morot fulic": "policeman"،
"beçi fulic": "policewoman"،
"fulic soikkal der": "policing"،
"folósi": "policy"،
"cóibbotá": "polite"،
"cáictagorí": "politely"،
"cáictagorí": "politeness"،
"síyasi": "political"،
"síyasi morzi": "political will"،
"síyasi hísafe": "politically"،
"síyasotdan": "politician"،
"rai diyar sónduk": "poll"،
"gondá": "pollution"،
"uggwáttu áro bicí ré manoya": "polytheism"،
"uggwáttu áro bicí manoya": "polytheist"،
"dhalúng gula": "pomegranate"،
"foóir": "pond"،
"hani boga": "pond heron"،
"hóous": "pool"،
"gorib": "poor"،
"hóñí": "popcorn"،
"fosón goréde": "popular"،
"abadi goijjéde": "populated"،
"abadi": "population"،
"abaadi boçá": "population growth"،
"cúwor or gusso": "pork"،
"poóuth": "port"،
"portfulio": "portfolio"،
"híssa ; júju": "portion"،
"súal fusárgor": "pose"،
"hóran goijjé": "posed"،
"mumkin ; cómbob ; óitfare": "posibility"،
"tobka": "position"،
"zagaloiyé": "positioned"،
"zagarhót": "positioning"،
"gom": "positive"،
"kobzat": "possession"،
"girós": "possessor"،
"mumkin": "possibility"،
"mumkin": "possible"،
"caayét , óitfare , múmkin": "possibly"،
"poigam": "post"،
"baador karwaiyi": "post rocedure"،
"puús ofís ór fethi": "postbox"،
"pousthar": "poster"،
"pousthín": "posting"،
"dhakfiyún": "postman"،
"fisédiya": "postpaid"،
"góra": "pot"،
"alugula": "potato"،
"mormoijja alugula": "potato chips"،
"óitfarede": "potential"،
"óitfarede hótara ókkol": "potential risks"،
"fattór or kúñdaá ókkol": "potholes"،
"gura bag": "pouch"،
"poón thiañ": "pound"،
"poundh hísafe ; poundh hísafe": "poundage"،
"dháille": "poured"،
"goribi ; tong háalot": "poverty"،
"goribi tobka ; goribi hót": "poverty level"،
"taakot": "power"،
"taakot or guijja": "power source"،
"paawárdiya": "powered"،
"taakotola": "powerful"،
"tojurubakari": "practical"،
"pretís gor": "practice"،
"pretís goré": "practise"،
"pretís goijjé": "practised"،
"pretís gorér": "practising"،
"pretís goróya": "practitioner"،
"taarif": "praise"،
"tarifdar": "praiseworthy"،
"goffúçu": "prattler"،
"dua gor": "pray"،
"numás": "prayer"،
"kiblar darikcen": "prayer direction"،
"mosólla": "prayer mat"،
"age": "pre"،
"agori-daiabíthis": "pre-diabetes"،
"daayi": "preacher"،
"eétiyati": "precautionary"،
"foóila": "preceding"،
"thík": "precise"،
"ebbre borabori": "precision"،
"hóbor": "predicate"،
"agori hoó": "predict"،
"agori hoiyé": "predicted"،
"aksér": "predominantly"،
"cúrur hotá": "preface"،
"torjide": "prefer"،
"fosón goráza": "preferable"،
"taaidgorí": "preferably"،
"torji": "preference"،
"agediya ; sámmediya": "preferential"،
"fosóni báca": "preferred language"،
"prifíx": "prefix"،
"ageloti cokól boinna": "preformatted"،
"hámil": "pregnancy"،
"háamil": "pregnant"،
"cómola": "pregnent"،
"monzokká": "prejudice"،
"cúrur": "preliminary"،
"adinna": "premature"،
"bildhíng ór zaga": "premise"،
"marír dator bazáiya dat": "premolar"،
"agoridiya": "prepaid"،
"toiyari": "preparation"،
"toiyargor": "prepare"،
"toiyar goijjé": "prepared"،
"toiyer gorér": "preparing"،
"ageloti plangoijjá": "preplanned"،
"agorihórof": "preposition"،
"parca lekí de": "prescribe"،
"daktoror habos": "prescription"،
"háñziri": "presence"،
"dahá": "present"،
"prezenthéicen": "presentation"،
"peec goijjé": "presented"،
"ehón ót": "presently"،
"rois": "president"،
"sódaroti": "presidential"،
"press": "press"،
"precar": "pressure"،
"frecar kukar": "pressure cooker"،
"bahána gorer": "pretending"،
"cúndoijja": "pretty"،
"ruké": "prevent"،
"ruikké": "prevented"،
"rukér": "preventing"،
"agorisoó": "preview"،
"fisór": "previous"،
"age": "previously"،
"dam": "price"،
"fohór": "pride"،
"cúrut": "primarily"،
"foóila": "primary"،
"buniyadi dekbal goróiya": "primary caregiver"،
"cúrur eskul": "primary school"،
"asól": "prime"،
"uzir e azom": "prime-minister"،
"cékzada ; razar fua": "prince"،
"eskulor boro": "principal"،
"asól gobíla": "principal tribe"،
"usúul": "principle"،
"sába": "print"،
"leikká": "printed"،
"lekéde micín": "printer"،
"foóilar": "prior"،
"ageraká": "priority"،
"kimoti": "prised"،
"hodi ; kodi": "prision"،
"hodi ; kodi": "prisoner"،
"gufoniyot": "privacy"،
"hósusi": "private"،
"hósusi kumpani": "private company"،
"bal": "private hair"،
"bokcíc": "prize"،
"salu": "proactive"،
"mumkin": "probable"،
"óitfare": "probably"،
"mockil": "problem"،
"maamela hólgoroya": "problem solver"،
"mockil ola": "problematic"،
"torikakar": "procedural"،
"karwaiyi": "procedure"،
"ageza": "proceed"،
"karwaiyi": "process"،
"karwaiyi goijjé": "processed"،
"karwaiyi": "processing"،
"julus": "procession"،
"karwai goróya": "processor"،
"foidagor": "produce"،
"mal": "product"،
"mal neela": "production"،
"notizabála": "productive"،
"fecá": "profession"،
"fecá óla": "professional"،
"mahérgiri": "professionalism"،
"fecá hísafe": "professionally"،
"profésar": "professor"،
"profáil": "profile"،
"fáaida ; nofá ; munafá": "profit"،
"ebbre bicí gorí": "profoundly"،
"furgram": "program"،
"furgram goróya": "programmer"،
"furgram goróon": "programming"،
"torki": "progress"،
"muúmmikka uzaiyé": "progressed"،
"muúmmikka uzar": "progressing"،
"manágor": "prohibit"،
"manágoijjá": "prohibited"،
"maná": "prohibition"،
"monsuba": "project"،
"peec goijjé": "projected"،
"duré félade hátiyar": "projectile"،
"duré mari félaár": "projecting"،
"thaim lambagor": "prolong"،
"mocóur": "prominent"،
"waada": "promise"،
"uore tulíde": "promote"،
"fóuran": "prompt"،
"setengoríder": "prompting"،
"fóuran": "promptly"،
"sóbut": "proof"،
"munaséf": "proper"،
"munaséf gorí": "properly"،
"hósusiyot": "properties"،
"cómbotti": "property"،
"Rosúl": "Prophet"،
"poikambor": "prophet"،
"nobuwot": "prophet hood"،
"Poikambor Ibrahím": "Prophet Ibrahim"،
"nobi muhammad": "prophet muhammad"،
"híssa": "proportion"،
"hotá": "proposal"،
"hota hoiyé": "proposed"،
"hotá de": "proposes"،
"baçidiya giyé": "prorated"،
"muúmmikka gorídiye": "prorogued"،
"gom": "pros"،
"férferi fatol haiththa nundiya cúor or gusso": "prosciutto"،
"mukotdama goijjé": "prosecuted"،
"ukil": "prosecutor"،
"acá": "prospect"،
"torki": "prosperity"،
"prosthéth": "prostate"،
"prosthi granti": "prostate gland"،
"sóoida gor": "prostrate"،
"sóoida": "prostration"،
"baso": "protect"،
"basaiyé": "protected"،
"héfazot": "protection"،
"mal arde dóncombotir héfazot": "protection of wealth"،
"mal arde dóncombotir héfazot": "protection of wealth (1st)"،
"héfazoti": "protective"،
"héfazoti lebas": "protective clothing"،
"héfazot goróya": "protector"،
"hórotal": "protest"،
"etaras gorér": "protesting"،
"prothukol": "protocol"،
"lamba": "protracted"،
"fohór óla": "proud"،
"tuáñr uore fohór": "proud of you"،
"fokhór": "proudness"،
"sóbut goijjé": "proved"،
"sábetgoijjá": "proven"،
"boson": "proverb"،
"de": "provide"،
"diyé": "provided"،
"gorídouya": "provider"،
"der": "providing"،
"súba": "province"،
"elakayi": "provincial"،
"rizík": "provision"،
"tooitta": "provisional"،
"ducmoni cúru goróon": "provocation"،
"ducmoni cúru gor": "provoke"،
"ducmoni cúru gorér": "provoking"،
"dilor elaj goróya": "psychiatrist"،
"demaki": "psychological"،
"nofsíya emtahán": "psychological examination"،
"dil or mahéri": "psychologist"،
"nofsíyot": "psychology"،
"Pty": "Pty"،
"awam": "public"،
"pabilík é fulic oré modot gorí fare hosúri tuai faibellá": "public can help the police to detect crime"،
"córom zagar keñc": "public háir"،
"kitab magazín sáboon": "publication"،
"elan": "publicity"،
"aámfaám": "publicly"،
"sába": "publish"،
"sábai baáir goijje": "published"،
"sábai baáigorér": "publishing"،
"ekkisím ór kuñir": "pug"،
"than": "pull"،
"than: ": "pull ; pulled ; pulling"،
"thainné": "pulled"،
"thanoni": "puller"،
"thaner": "pulling"،
"fécca lói taaluk": "pulmonary"،
"dhoçkón": "pulse"،
"hóuñri ; óuñri": "pumkin"،
"paám": "pump"،
"hóuñri": "pumpkin"،
"hóñri fúl": "pumpkin flower"،
"óuñri fata ; hóuri fata": "pumpkin leaves"،
"hóuñrir dana": "pumpkin seed"،
"gúcamar": "punch"،
"fulgoróni": "punch machine"،
"gúca maijjé": "punched"،
"gúca marer": "punching"،
"nuktár niyom": "punctuation"،
"fangrés mas": "pungas"،
"sáñza de": "punish"،
"sáñza": "punishment"،
"kuñir só": "pup"،
"eskuilla fua": "pupil"،
"kuñirsó": "puppy"،
"kino": "purchase"،
"pyúr": "pure"،
"úde": "purely"،
"baiyoinna": "purple"،
"moksót": "purpose"،
"bíra": "pursue"،
"bíra": "pursuit"،
"thél": "push"،
"thél , théille , théler": "push ; pushed ; pushing"،
"théille": "pushed"،
"théloni": "pusher"،
"théler": "pushing"،
"rak": "put"،
"badde": "put away"،
"eroo": "put down"،
"peec gor": "put forward"،
"fiñdó , gaardo": "put on"،
"rakér": "putting"،
"péramid": "pyramid"،
"dhouk": "quail"،
"kabiliyoti": "qualification"،
"laayek": "qualified"،
"húbi": "quality"،
"gonti": "quantity"،
"alok raké": "quarantine"،
"hoijja": "quarel"،
"hoijja": "quarrel"،
"guccá óla": "quarrelsome"،
"sair borat or ekborat": "quarter"،
"sair-borat-or-ekborat gorí: ": "quarterly"،
"sairbáki": "quartery"،
"hótom goré": "quash"،
"buth gáñça": "quay"،
"rani": "queen"،
"ranifúl": "queen of night"،
"hótom gor": "quell"،
"hótom goijjé": "quelled"،
"hótom gorér": "quelling"،
"súal": "query"،
"súal": "question"،
"súal goróya": "questioner"،
"lain": "queue"،
"toratori": "quick"،
"toratori": "quickly"،
"nizám": "quiet"،
"nizám gorí": "quietly"،
"fóuir": "quill"،
"tucúk": "quilt"،
"neeli giyói": "quit"،
"ebbre": "quite"،
"bicí hom": "quite a few"،
"bicí gom": "quite good"،
"kafí gom": "quite well"،
"háwala do": "quote"،
"Quraici": "Quraish"،
"Kuran": "Quran"،
"Quranor": "Quranic"،
"hórguc": "rabbit"،
"zat": "race"،
"duñroya": "racer"،
"naththwa baila": "racer goby"،
"zati": "racial"،
"forókgorá": "racism"،
"koumifosón": "racist"،
"tabakar": "radiation"،
"rediethar": "radiator"،
"redhu": "radio"،
"lalmula": "radish"،
"mula hák": "radish leaves"،
"mula ák ; mula hák": "radish spinach"،
"guccá": "rage"،
"acanok hámla": "raid"،
"rell": "rail"،
"rel or bim": "rail beam"،
"zór": "rain"،
"dóuni": "rainbow"،
"baricá": "rainy season"،
"tul": "raise"،
"tuillé": "raised"،
"numás or rokáat": "rakah"،
"Rakhine people": "Rakhine"،
"komputhar or memori": "RAM"،
"keñça lesu": "rambutan"،
"usolfál": "ramp"،
"duñijjé": "ran"،
"góndhi baijjé": "rang"،
"húdud": "range"،
"góndhi bazer": "ranging"،
"Rengun": "Rangoon"،
"tobka": "rank"،
"réip": "rape"،
"toratori": "rapid"،
"bicí toratori": "rapidly"،
"bicí hom ; omil ; bicí hom faaza": "rare"،
"razberi": "rasberi"،
"bormac": "rascal"،
"rasberi": "raspberry"،
"undur": "rat"،
"reith": "rate"،
"bólke": "rather"،
"sóiyiman": "ratify"،
"dorja mafa": "rating"،
"usúl": "rationale"،
"keñsa": "raw"،
"loór": "ray"،
"prefix": "re"،
"foóñse": "reach"،
"foóñicce": "reached"،
"uldha asór goré": "react"،
"uldha asór gorá": "reaction"،
"toratori ham sole": "reaction times"،
"for": "read"،
"for , foijjé , forífélaiye , forér": "read ; read ; read ; reading"،
"foráza": "readable"،
"foróya": "reader"،
"asán ór sáñte": "readily"،
"toiyari": "readiness"،
"forá": "reading"،
"toiyar": "ready"،
"hakikot": "real"،
"jaifator karubar": "real estate"،
"hákiki zindigi": "real life"،
"ehésás goijjé": "realised"،
"hákikot": "realistic"،
"hákikot": "reality"،
"ehésasgor": "realize"،
"hakikí": "really"،
"fis": "rear"،
"wojá": "reason"،
"munaséf": "reasonable"،
"munaséf hísafe": "reasonably"،
"abbar soón": "reassessment"،
"bagi": "rebel"،
"dubara bana": "rebuild"،
"yiadgoré": "recall"،
"yiad goijjé": "recalled"،
"gosífaa": "receipt"،
"gosílo": "receive"،
"gosífaiyé": "received"،
"gosífouya": "receiver"،
"gosífair": "receiving"،
"taza": "recent"،
"édinna": "recently"،
"cúthki": "recess"،
"usúl goróya": "recipient"،
"telawot": "recitation"،
"telawot gor": "recite"،
"hadíra": "recliner"،
"siné": "recognise"،
"maniloon": "recognition"،
"sinílo": "recognize"،
"cúaricnama": "recommandation"،
"dubara cúru goijjé": "recommenced"،
"mocuwarade": "recommend"،
"cúwaric": "recommendation"،
"mocuwaradiyé": "recommended"،
"mocuwarader": "recommending"،
"bodola": "recompense"،
"dubara milaide": "reconcile"،
"dubara milizoon": "reconciliation"،
"dubara fakka gor": "reconfirm"،
"rekódh": "record"،
"rekódh , rekódh gor , rekódh goijjé , rekódh gorér": "record ; recorded ; recording"،
"rekódh goijjé": "recorded"،
"rekódh gorér": "recording"،
"dubara háñsil gor": "recover"،
"waapes ainné": "recovered"،
"céfa ; aram ; gomlager ; aram óiye ; waapes aná": "recovery"،
"aram goróon": "recreation"،
"aram goríbar": "recreational"،
"noya bórti gorá": "recruitment"،
"mustotil": "rectangle"،
"sair kuinna lamba cokól": "rectangle shape"،
"fuñdor fóoñçi": "rectum"،
"barbár óon": "recurrence"،
"barbar óde": "recurrent"،
"barbar óde": "recurring"،
"barbar óde": "recursive"،
"dubara estemal goró ; abbar estemal gor": "recycle"،
"lal": "red"،
"lal moris": "red chili"،
"lal rong": "red color"،
"rédh króss": "red cross"،
"lal dak": "red mark"،
"lal cák": "red spinach"،
"lalaissa": "reddish"،
"kaabel kobul": "redeemable"،
"hamorzagalaroon": "redeployment"،
"abbar gor": "redo"،
"hom gor": "reduce"،
"hom goijjé": "reduced"،
"hom gorér": "reducing"،
"hom gorá": "reduction"،
"háwala goré": "refer"،
"háwala": "reference"،
"háwala goijjé": "referenced"،
"háwala diya": "referred"،
"háwala der": "referring"،
"beétor goró": "refine"،
"sáf goijjá": "refined"،
"gour gor": "reflect"،
"gour goijjé": "reflected"،
"bodoloon": "reform"،
"wapes goróon": "refoulement"،
"ruké": "refrain"،
"fírij": "refrigerator"،
"faná": "refuge"،
"refúji": "refugee"،
"refújir keém": "refugee camp"،
"múhajer or estekbal ; refújire óll estekbal": "refugees welcome"،
"inkar gor": "refuse"،
"inkar goijjé": "refused"،
"inkar gorá": "refúsal"،
"dubara háñsil goré": "regain"،
"izzot": "regard"،
"kíal goijjé": "regarded"،
"baabote": "regarding"،
"kiyár nogorí": "regardless"،
"izzot gorá": "regards"،
"hókumot": "regime"،
"elaka": "region"،
"elakar": "regional"،
"rejisthar gor": "register"،
"rejisthar goijjá": "registered"،
"rejisthar goróon": "registration"،
"afsús háir": "regret"،
"afsús gorázade": "regrettable"،
"dubara gurúp banaiyé": "regrouped"،
"bakaida": "regular"،
"kaayem goijjé": "regularised"،
"musolsól": "regularity"،
"musolsól gorí": "regularly"،
"beechom thíkgor": "regulate"،
"kaanun": "regulation"،
"dubara thík óon": "rehabilitation"،
"thiañ neelaido": "reimburse"،
"thiañ adaigorá": "reimbursement"،
"mozbut bana": "reinforce"،
"mozbut banaiyé": "reinforced"،
"mozbut banoon": "reinforcement"،
"ódode goride ; foóila aiccíl de éndila goríde": "reinstate"،
"dubara milaide": "reintegrate"،
"dubara milaidiyé": "reintegrated"،
"barbar goijjé": "reiterated"،
"inkargor": "reject"،
"inkar goijjé": "rejected"،
"inkar gorá": "rejection"،
"dubara cámelgor , dubara juáin gor": "rejoin"،
"mutalek": "relate"،
"taaluk goijjá": "related"،
"taaluk gorér": "relating"،
"fúna yá abas loi taaluk aséde": "relating to hearing or sound"،
"taaluk": "relation"،
"egana": "relationship"،
"zaa aá gorá": "relationship building"،
"egana": "relative"،
"hísafe": "relatively"،
"aramgor": "relax"،
"aram": "relaxation"،
"aram": "relaxed"،
"háte háte foóñsáiye": "relayed"،
"eride": "release"،
"súijja": "released"،
"nozirai": "relentlessly"،
"taaluk goijjá": "relevant"،
"bórusa gorífarede": "reliable"،
"bórusa": "reliance"،
"bórusá goijjé": "relied"،
"rafáyi": "relief"،
"aramfa": "relieve"،
"din": "religion"،
"dini": "religious"،
"dini azadi": "religious freedom"،
"mozahábi nofórot": "religious hatred"،
"dindórmor pretís": "religious practice"،
"rel": "rell"،
"zagalare": "relocate"،
"zaga laragiyé": "relocated"،
"zagalarer": "relocating"،
"zagalara": "relocation"،
"bórusá goré": "rely"،
"baki táke": "remain"،
"lagaiya tákibou , asór tákibou": "remain in effect"،
"lagatar dóri táikke": "remain strong"،
"baki": "remainder"،
"basi asé": "remained"،
"baki aséde": "remaining"،
"rai": "remark"،
"nize elaj goréde": "remedial"،
"nize elaj goróon": "remediation"،
"yadgor": "remember"،
"yad": "remembrance"،
"yiad goráide": "remind"،
"yiadgoráidiya": "reminder"،
"thiañ defeçá": "remittance"،
"durór": "remote"،
"hóthaiféloon": "removal"،
"neelaiféla": "remove"،
"neelai féliaye": "removed"،
"larifélar": "removing"،
"noyagor": "renew"،
"muddot baráiye": "renewed"،
"keriya": "rent"،
"keriyadar ; keriya douya": "renter"،
"dubara kúle": "reopen"،
"dubar kúille": "reopened"،
"dubara kúler": "reopening"،
"thíkgor": "repair"،
"órgoijjé": "repaired"،
"wotón waapesdiya": "repatriation"،
"dubaragor": "repeat"،
"dubara goijjé": "repeated"،
"touba gor , mafsoón , kémasoón": "repent"،
"tobdilgor": "replace"،
"nokol gor": "replicate"،
"zuab diyé": "replied"،
"juab ókkol": "replies"،
"juab": "reply"،
"repouth": "report"،
"repouth diyé": "reported"،
"repoutar": "reporter"،
"repouth gorér": "reporting"،
"hosúri diyazade": "reprehensible"،
"nomaindagor": "represent"،
"dubara dahóon": "representation"،
"nomainda": "representative"،
"nomainda goijjé": "represented"،
"nomainda gorér": "representing"،
"jomúuri": "republic"،
"izzot": "reputation"،
"aros": "request"،
"dorhás goijjé": "requested"،
"dorhás gorér": "requesting"،
"lager": "require"،
"laiggé": "required"،
"zorurot": "requirement"،
"zorurot gorér": "requiring"،
"zoruri ; lazemi": "requirment"،
"rasta bodolo ; rastáfíro ; dhairekcen bodol": "reroute"،
"lari diyagiyé": "rescheduled"،
"basa": "rescue"،
"ricác": "research"،
"ekku dhoilla óiye": "resembled"،
"nafosón goijjé": "resented"،
"nafórot": "resentment"،
"bukíng": "reservation"،
"hók asé": "reserve the right"،
"dubara séthgor": "reset"،
"boicóti goráiye": "resettled"،
"boicótigorá": "resettlement"،
"táko": "reside"،
"tákede zaga": "residence"،
"táka": "residency"،
"tákoya": "resident"،
"manúic tákede": "residential"،
"táker": "residing"،
"gada baijjé": "residue"،
"bordaci ; dukbordac goréde": "resilient"،
"boddac": "resistance"،
"fáisela": "resolute"،
"fáisela": "resolution"،
"hólgor": "resolve"،
"hól goijjé": "resolved"،
"hól gorér": "resolving"،
"zoriya": "resource"،
"wasál óll": "resources"،
"izzot": "respect"،
"izzot goijjé": "respected"،
"izzot gorér": "respecting"،
"nizor nizor": "respective"،
"zonfisé zonfisé": "respectively"،
"zuab de": "respond"،
"zuab diyé": "responded"،
"zuab der": "responding"،
"zuab": "response"،
"zimma óll": "responsibilities"،
"zimma arde fóroz": "responsibilities and obligations"،
"zimma": "responsibility"،
"zimmadar": "responsible"،
"aramgor": "rest"،
"dubara cúrugorér": "restarting"،
"hóthel": "restaurant"،
"hánar zaga": "restaurent"،
"aram goijjé": "rested"،
"waapes an": "restore"،
"waapes ainné": "restored"،
"waapes loi anér": "restoring"،
"pabondi gorér": "restraining"،
"pabondi goré": "restrict"،
"pabondi goijjé": "restricted"،
"paabondi": "restriction"،
"notiza": "result"،
"notiza neeillé": "resulted"،
"notiza neeler": "resulting"،
"abbar cúru goré": "resume"،
"dubaratul": "resurrect"،
"abbar zinda óon": "resurrection"،
"manúic uggwá ré jan anóon ar úñc goróon": "resuscitation"،
"báñra besa": "retail sale"،
"bodola loiyé": "retaliated"،
"nokol": "retro"،
"waapesi": "return"،
"douyar íkka waapesdo": "return to sender"،
"waapes aiccé": "returned"،
"waapes aiyér": "returning"،
"dubara milo": "reunite"،
"dubara ettefák óiye": "reunited"،
"waapes oóuya": "reurnee"،
"abbar estemal gor": "reuse"،
"zahérgoró": "reveal"،
"zahér goijjé": "revealed"،
"nazil": "revelation"،
"bodola": "revenge"،
"bodola louya": "revenger"،
"bodola ; bodolalo ; bodola loiyé ; bodola loifélaiye ; bodolalor": "revengre"،
"ruúb": "reverence"،
"fissá aiyé": "reverse"،
"wapes aá": "revert"،
"nozorsáni": "review"،
"nozorsáni goijjé": "reviewed"،
"nozorsáni gorér": "reviewing"،
"uldhai saiyé": "revised"،
"dubarasoón": "revision"،
"dubara ziñata goijjé": "revived"،
"enkelab": "revolution"،
"bokcíc": "reward"،
"goiyal": "rhinoceros"،
"cáiththana": "rib"،
"dán": "rice"،
"bát rañdóni": "rice cooker"،
"dúñi fiçá": "rice cup snack"،
"zala": "rice tree small"،
"fén ; fanír fén": "rice water"،
"tuangor": "rich"،
"riccá": "rickshaw"،
"fáldai uçá": "ricochet"،
"fáldai uiththé": "ricocheted"،
"duré tákibellá": "rid"،
"zíñya": "ridge"،
"zíañ": "ridge gourd"،
"furoil": "ridged gourd"،
"tel tulóni sang": "rig"،
"sóiyi": "right"،
"uzu kun": "right angle"،
"den át": "right hand"،
"dhen dhákor féccwa": "right lung"،
"ehón ehón": "right now"،
"den dák": "right side"،
"modot ollá hók": "right to assistance"،
"hóyat ólla hók": "right to life"،
"decóittayi hók": "right to nationality"،
"dhenháitta": "right-handed"،
"sóiyi óla": "righteous"،
"hók": "righteousness"،
"hókuk ókkol": "rights"،
"soktó": "rigid"،
"soktí": "rigidity"،
"fakka dorómóro": "rigorous"،
"oóñçi": "ring"،
"oóñçi": "ring ; rang ; rung ; ringing"،
"oóñçi ouñl": "ring finger"،
"fósad": "riot"،
"maramari douya": "rioter"،
"maramari der": "rioting"،
"súli félaiye": "ripped off"،
"siri fáçiféler": "ripping"،
"ule": "rise"،
"uillé": "rised"،
"uçér": "rising"،
"hótara": "risk"،
"hótornak": "risky"،
"rosóm": "rite"،
"wuzu": "ritual washing"،
"hál": "river"،
"Riyál": "Riyal"،
"riyál thiañ": "riyál"،
"roóudh": "road"،
"zaáñl": "road across open area"،
"gúre": "roam"،
"gúrer": "roaming"،
"áimmar": "roaring"،
"búinna": "roasted"،
"dhahaithi goijjé": "robbed"،
"dhahait": "robber"،
"dhaiti": "robbery"،
"luthmath goróon": "robbing"،
"micínor manúic": "robot"،
"fattór": "rock"،
"fattóri": "rocky"،
"dhandha": "rod"،
"Ruáingga": "Rohingya"،
"ruúith mas": "rohu"،
"rul": "role"،
"gorgorar": "rolled"،
"rulár": "roller"،
"sal": "roof"،
"hamrá": "room"،
"ek hamrát tákoya": "roommate"،
"ratarkurá": "rooster"،
"guijja": "root"،
"rosí": "rope"،
"gulaffúl": "rose"،
"ratakurá": "roster"،
"foñsa": "rot"،
"fakkáró": "rotate"،
"foiñssedé": "rotted"،
"foñsa": "rotten"،
"hóchoiccá": "rough"،
"gul": "round"،
"fakkáraiya": "rounded"،
"sir": "roundworm"،
"rasta": "route"،
"ruthín": "routine"،
"cúr": "row"،
"cáhi": "royal"،
"dorbar": "royal court"،
"Really Simple Syndication": "RSS"،
"dhol )v.) , dholo": "rub"،
"refóth": "rubber"،
"robár ór rosí": "rubber band"،
"foñsa gola": "rubbish"،
"biadob": "rude"،
"haling": "rug"،
"borbadi": "rugby"،
"hókumot gor": "rule"،
"kaanun or paáwar": "rule of law"،
"hókumotgoijjé": "ruled"،
"fíth-haim": "ruler"،
"fíth haim , raza , kaanun soloya": "ruler ; king"،
"rul ; kaanun": "rules"،
"afua hotá": "rumour"،
"duñr": "run"،
"duñr": "run ; ran ; run ; runing"،
"dáadai": "runaway"،
"duñroya": "runner"،
"duñra": "running"،
"faní zórerde nak": "running nose"،
"duñredé rasta": "runway"،
"gang": "rural"،
"zam óiye": "rushed"،
"zooñr": "rust"،
"tobágoré": "sabotage"،
"kurbani": "sacrifice"،
"ferecan": "sad"،
"frecani gorí": "sadly"،
"frecani": "sadness"،
"héfazot asé": "safe"،
"héfazot ; bicí héfszot ; sóbse héfazot": "safe ; safer ; safest"،
"mahafúz faná": "safe haven"،
"héfazoti gaáth": "safeguard"،
"héfazot gorí": "safely"،
"héfazot óla": "safer"،
"héfazot": "safety"،
"héfazot óla elaka": "safety zone"،
"hoiyé": "said"،
"sola": "sail"،
"buzurgó manúic": "saint"،
"waasté": "sake"،
"tolob": "salary"،
"besa": "sale"،
"leccwá": "saliva"،
"nun": "salt"،
"nun sura suri kélah": "salt stealing game"،
"nuinna faní": "salt water"،
"nun ola": "salted"،
"nun": "saltiness"،
"anuni": "saltless"،
"nunfaní": "saltwater"،
"nuna": "salty"،
"salami": "salute"،
"leccwá": "salva"،
"basoon": "salvation"،
"ekku dhoilla": "same"،
"ebbre ekku dhoilla": "same same"،
"sámman": "sampan"،
"nommuna": "sample"،
"monzuri": "sanction"،
"monzuri diyagiyé": "sanctioned"،
"pabodigorá ; bogorá": "sanctions"،
"balu": "sand"،
"centhár": "sandal"،
"telteilla goréde habos": "sandpaper"،
"sendúic": "sandwich"،
"gana gaiyé": "sang"،
"moilar nezám": "sanitation"،
"longgi": "sarong"،
"boiccé": "sat"،
"cóitan": "satan"،
"etminan": "satisfaction"،
"etminan or sáñte": "satisfactorily"،
"etminan ola": "satisfactory"،
"etminan óiye ; monmozin óiye ; mutmayín óiye ; kúci óiye": "satisfied"،
"etminan diyé": "satisfy"،
"Cónibar": "Saturday"،
"Satan grudhú": "Saturn"،
"ficcá": "sauce"،
"suna ; gorom yá gorom báf loi gaa dúa": "saunas"،
"sóséij": "sausage"،
"haiwani": "savage"،
"basa": "save"،
"añáre basa": "save me"،
"foisá basa": "save money"،
"basaiyé": "saved"،
"deikké": "saw"،
"hoó": "say"،
"hoór": "saying"،
"falda": "scale"،
"maippé": "scaled"،
"matár maala": "scalp"،
"misá": "scam"،
"jútha goijjé": "scammed"،
"misákúr": "scammer"،
"dúkabazi": "scams"،
"eskén gor": "scan"،
"eskén gorér": "scanning"،
"dak": "scar"،
"dhorlaga": "scare"،
"dhorlagaiyé": "scared"،
"matár nual": "scarf"،
"cíñçaciththa gor": "scatter"،
"cíñçaciththa": "scattered"،
"sínari n.) , sín": "scene"،
"thaim theból": "schedule"،
"thaimtheból goijjé": "scheduled"،
"eskím": "scheme"،
"aalem": "scholar"،
"eskul": "school"،
"sammwá isa": "school prawn"،
"eskuilla fua": "schoolboy"،
"eskul ot diyé": "schooled"،
"eskuilla maiyafua": "schoolgirl"،
"sáñis": "science"،
"keñsi": "scissor"،
"keñsi": "scissors"،
"gail": "scold"،
"eskoup": "scope"،
"bissú": "scorpion"،
"eskothelen dec": "scotlandland"،
"eskrabol": "scrabble"،
"kiskiso": "scream"،
"foroda": "screen"،
"eskru": "screw"،
"eskrudraibar": "screwdriver"،
"baila mas": "scribbled goby"،
"lek": "scribe"،
"leká": "script"،
"leikké": "scripted"،
"Allahr kitab": "scripture"،
"boda": "scrotum"،
"zora zora cekgorá": "scrutiny"،
"dholadholi": "scuffle"،
"doijja": "sea"،
"uit": "seal"،
"doijjar gáñth": "seaport"،
"tua": "search"،
"mousóm": "season"،
"boiyóni": "seat"،
"dusára": "second"،
"furan": "second hand"،
"dusára dorjar": "secondary"،
"midhél eskul": "secondary school"،
"arekbar": "secondly"،
"luwaiya": "secret"،
"ségethari": "secretary"،
"híssa": "section"،
"gótah": "sector"،
"mahafúz": "secure"،
"mahafúz goijjé": "secured"،
"amón": "security"،
"amón arde rafáyi": "security and welfare"،
"bíra": "seduce"،
"deké": "see"،
"deké , deikké , dekéfélaiye , dekér , deikkíl": "see ; saw ; seen ; seeing"،
"dana": "seed"،
"dehér": "seeing"،
"talacgor": "seek"،
"modot tuo": "seek help"،
"tuoya": "seeker"،
"tuar": "seeking"،
"lagerdé": "seem"،
"deikké": "seen"،
"tobka": "segment"،
"alokgor": "segregate"،
"gíriféla": "seige"،
"súañfirani": "seizure"،
"atíkka utíkka": "seldom"،
"basílo": "select"،
"basíloiyá": "selected"،
"basíloon": "selection"،
"nize": "self"،
"húd-erada": "self-determination"،
"húdgoros ; samar": "selfish"،
"bes": "sell"،
"bes": "sell ; sold"،
"besa": "selling"،
"besakina": "selling and buying"،
"moni": "semen"،
"simisthar": "semester"،
"siminar": "seminar"،
"síneth": "senate"،
"defeçá": "send"،
"oinno rasta lo defeçó": "send by different way"،
"lamai de": "send down"،
"honíkka ré defeçó": "send someone"،
"kessú defeçó": "send something"،
"furana": "senior"،
"boromiya konsil": "senior council"،
"akol": "sense"،
"akolmondi": "sensible"،
"samfatol ola": "sensitive"،
"defeçáiye": "sent"،
"lamai diyé": "sent down"،
"hóta": "sentence"،
"júmla bana": "sentence construction"،
"jozbadi": "sentiment"،
"alok": "separate"،
"alok goijjé": "separated"،
"alok gorí": "separately"،
"alok goróon": "separation"،
"alog goróya": "separator"،
"Séptambor": "September"،
"sílsila": "serial"،
"sílsila": "series"،
"sóngin": "serious"،
"sóngin gorí": "seriously"،
"sóngin gorá": "seriousness"،
"hútba": "sermon"،
"boro háf": "serpent"،
"siram": "serum"،
"goróni": "servant"،
"hédmot gor ; modot gor ; hémayot gór ; bolde": "serve"،
"hédmot goróya": "server"،
"hédmot goréde": "servery"،
"hédmot": "service"،
"añára peec goríde hédmot ókkol": "services we offer"،
"hédmot gorér": "serving"،
"góicca": "sesame"،
"góiccar tel": "sesame oil"،
"góicca": "sesame óil"،
"jolsa": "session"،
"séth": "set"،
"tai gor": "set gor"،
"ooin dória diye": "set on fire"،
"baindí": "set up"،
"séthín": "setting"،
"séthel gor": "settle"،
"séthel óiye": "settled"،
"séthel gorá": "settlement"،
"háñt": "seven"،
"háñtaro": "seventeen"،
"hañtaro": "Seventeen"،
"óittoir": "seventy"،
"óttoir": "Seventy"،
"becábicí": "several"،
"soktó": "severe"،
"soktó gorí": "severely"،
"soktó gorér": "severing"،
"soktí": "severity"،
"hosora fanír lain": "sewerage"،
"sílaiya": "sewn"،
"jinsí": "sex"،
"jinsí": "sexual"،
"jíns ór tuaijjo": "sexual orientation"،
"moddani": "sexuality"،
"sábaa": "shade"،
"sáma": "shadowy"،
"caháda": "shahada"،
"lar ; laro , laroon ; héila": "shake"،
"laijja": "shaken"،
"saá": "shall"،
"sotor": "shallow"،
"córom": "shame"،
"córmohotá": "shameful"،
"cémpu": "shampoo"،
"cokól": "shape"،
"cíyar": "share"،
"cíiar goijjé": "shared"،
"cári": "sharee"،
"córifa": "sharifa"،
"óoñr mas": "shark"،
"dár": "sharp"،
"dáraiye": "sharpened"،
"tesgorí": "sharply"،
"bazu": "shart"،
"báñi kuru óigiyoi": "shattered"،
"cál": "shawl"،
"ibá": "she"،
"uñthni": "she camel"،
"fañçí sóol": "she goat"،
"ibártu": "she has"،
"façí sóol": "she sheep"،
"maiyañ uñth": "she-camel"،
"dubba sóol": "sheep"،
"saddor": "sheet"،
"célf": "shelf"،
"háth": "shell"،
"thuwala ola mas": "shell fish"،
"sáiya": "shelter"،
"sáiyadiya": "sheltered"،
"janwar soroya": "shepherd"،
"soraiyé": "shepherded"،
"dhál de": "shield"،
"zaga bodole": "shift"،
"zaga bodoillé": "shifted"،
"somok": "shine"،
"sosoikka": "shiny"،
"zaáñs": "ship"،
"zaáñs loi defeçá": "ships"،
"bazu": "shirt"،
"hañfer": "shivering"،
"sótma": "shock"،
"sótma laiggé": "shocked"،
"sótma ola": "shocking"،
"zuta": "shoe"،
"zuta": "shoes"،
"eskuillafua": "shoolchild"،
"eskulor masthor": "shoolmaster"،
"guli mar": "shoot"،
"guli marer": "shooting"،
"duan": "shop"،
"duan or muúm": "shopfront"،
"bazar goróon": "shopping"،
"doijjar hañsa": "shore"،
"hándani": "shorif"،
"baiththá": "short"،
"baiththá manúic": "short man"،
"baiththá feén": "short-pant"،
"baiththát": "shortcut"،
"baiththá gor": "shorten"،
"ekkená gorí": "shortly"،
"guli": "shot"،
"cóñço bonduk": "shotgun"،
"saá": "should"،
"modot goróon saá": "should help"،
"hañdá": "shoulder"،
"silla": "shout"،
"uzoor diyé": "shouted"،
"uzoor der": "shouting"،
"dahá": "show"،
"daháwa ; dekáwa": "show off"،
"daháiye": "showed"،
"zónna": "shower"،
"dahár": "showing"،
"dahágiye": "shown"،
"cóurum": "showroom"،
"isamas": "shrimp"،
"bon": "shut"،
"bongor": "shutdown"،
"cathel": "shuttle"،
"córom": "shy"،
"ocúkóiye": "sick"،
"biaraimma manúic": "sick man"،
"biaraimma": "sickening"،
"biaram": "sickness"،
"hañsa": "side"،
"nuksani asór ; hórafi asór": "side effect"،
"dháke dhák bazáiya": "side to side"،
"sáidh lain": "sidebar"،
"dhákor hañsa": "sidestep"،
"dhákor sáith loiye": "sidesteped"،
"hañsaloi áñça ; dhák áñça": "sidewalk"،
"gírifél": "siege"،
"deká": "sight"،
"nozor": "sight ; deká ; sight"،
"saiyé": "sighted"،
"soón": "sighting"،
"sáain": "sign"،
"dostokgor": "sign 1"،
"sáainbudh": "sign board"،
"rejisthar gor": "sign up"،
"icára": "signal"،
"dostok goróya": "signatory"،
"sáain": "signature"،
"sáinbudh": "signboard"،
"dostok goijjé": "signed"،
"ahámiyot": "significance"،
"luwazadé": "significant"،
"háasgorí": "significantly"،
"nizám": "silent"،
"ahálak adob": "silent and chracters"،
"recóm": "silk"،
"goddainna": "sill"،
"bekuf": "silly"،
"rufa": "silver"،
"hoiñ fuçí mas": "silver barb"،
"cíca rong": "silver color"،
"ekku dhoilla": "similar"،
"ekku dhoilla": "similarity"،
"índila gorí": "similarly"،
"Amerikar gana goóuya": "Simon"،
"uzu": "simple"،
"asán goijjá": "simplified"،
"asán gorí": "simply"،
"guná": "sin"،
"loti": "since"،
"muhéles ; háales": "sincere"،
"cóiccayir sáñte": "sincerely"،
"gaá": "sing"،
"gana gaá": "sing ; sang ; sung ; singing"،
"gana goóuya": "singer"،
"ehála": "single"،
"ek gúilla rasta": "single track road"،
"bicí hóraf hosoradé": "sinister"،
"dhufé": "sink"،
"dhuippé": "sinked"،
"zuhám": "sinus"،
"dhúk": "sip"،
"jii": "sir"،
"sáiren": "siren"،
"bóin": "sister"،
"bácur": "sister-in-law"،
"boi: ": "sit"،
"boi: ": "sit ; sat ; sat ; sítting"،
"boi": "sit down"،
"boi": "sitdown"،
"sáith": "site"،
"boiyér": "sitting"،
"asé": "situated"،
"háalot": "situation"،
"só": "six"،
"cúlloh": "sixteen"،
"háith": "sixty"،
"maf": "size"،
"cókola": "skeptical"،
"nokcó": "sketch"،
"théça goré": "skew"،
"mahéri": "skill"،
"bidda": "skill ; skilled"،
"mahér óla": "skilled"،
"hamzanoya": "skillful"،
"sam": "skin"،
"súilla": "skinned"،
"cúçidó": "skip"،
"goón": "skirt"،
"matár mala": "skull"،
"asman": "sky"،
"asmani rong": "sky blue"،
"asmani rong": "sky color"،
"bodnami": "slander"،
"bodnamigoróya": "slanderer"،
"máail , hélandiya": "slant"،
"suar mar": "slap"،
"suar maijjé": "slapped"،
"bicí homa": "slash"،
"bicí gorí homaiyé": "slashed"،
"síloith": "slate"،
"zorá": "slaughter"،
"gulam": "slave"،
"gulami": "slavery"،
"gúm": "sleep"،
"gúmza , gúmgiye , gumzar": "sleep ; slept ; sleeping"،
"gúm zar": "sleeping"،
"zúrar": "sleepy"،
"astin": "sleeve"،
"fatola": "slender"،
"gúm giyé": "slept"،
"sak": "slice"،
"haçi félaye": "sliced"،
"sláidh": "slide"،
"fatola": "slim"،
"cuppe cuppe zoo": "slink"،
"sossora ; sossoraiyé ; sossorar": "slip"،
"sossora": "slip ; slipped ; slipping"،
"centhár": "slipper"،
"sossoraiya": "slippy"،
"fáçe": "slit"،
"fáçer": "slitting"،
"sép": "sliva"،
"nara": "slogan"،
"asté ; asté asté ; bicí asté": "slow"،
"asté": "slow ; slower ; slowest"،
"asté": "slowly"،
"asté asté": "slowlyslowly"،
"lok": "slug"،
"cíyailla salák": "sly"،
"háte maijjé": "smacked"،
"cóñço": "small"،
"cóñço": "small ; smaller ; smallest"،
"kuththa": "small box"،
"cóñço añti": "small intestine"،
"cóñço hátor leká": "small letter"،
"thuinná murá": "small mountain"،
"háçail": "small room"،
"sisizza rasta": "small street"،
"beec cóñço": "smaller"،
"ebbre cóñço": "smallest"،
"sotur": "smart"،
"báñgi thukuça goijjé": "smashed"،
"bac": "smell"،
"fuñwér": "smelling"،
"áñco": "smile"،
"dúañ": "smoke"،
"dúañ-sára": "smoke-free"،
"cuñça thanoya": "smoker"،
"dúañr dhoil": "smokey"،
"cuñça hóon": "smoking"،
"kúwa kúwa": "smoky"،
"telteilla": "smooth"،
"telteilla gorí": "smoothly"،
"blék goróya": "smuggler"،
"blék gorér": "smuggling"،
"fiçá": "snack"،
"hóuñk": "snail"،
"áf": "snake"،
"hoiñçá": "snake gourd"،
"hoiñiçá": "snake gourd (trichodanthes cucumerina)"،
"hólimmas": "snake head"،
"hoñiçá": "snakegourd"،
"bor hoñrisóñi": "snap beans"،
"súli loiféla ; harí loféla": "snatch"،
"cuppe cuppe zaa": "sneak"،
"salák": "sneaky"،
"górgorá": "snore"،
"górgorár": "snoring"،
"cíin": "snot"،
"boróf": "snow"،
"boróf fora": "snow fall"،
"boróf fora óll": "snow falls"،
"borófor fúl": "snowflake"،
"borófor tuán": "snowstorm"،
"borófi": "snowy"،
"tóile": "so"،
"fólana": "so and so person"،
"bicí hañsé": "so close"،
"taáke": "so that"،
"bóli hoóde": "so-called"،
"sábon": "soap"،
"sábon neelai doni": "soap dispenser"،
"sábon or dani": "soapdish container"،
"hóro": "soar"،
"boól kéla": "soccer"،
"cómaji": "social"،
"cómaji hásiyot": "social status"،
"cómaji hamgoróya": "social worker"،
"sómaj": "society"،
"mouza": "sock"،
"sokéth": "socket"،
"sufa": "sofa"،
"norom": "soft"،
"galor norom sal": "soft palate"،
"norom pleith": "soft plate"،
"norom uoror matá": "soft tip"،
"sófthwear": "software"،
"frugram banoya": "software developer"،
"meçi": "soil"،
"meiththailla": "soil digger"،
"beilor": "solar"،
"fóus": "solder"،
"fóus": "soldier"،
"théngor tallwa": "sole"،
"súfi ; dini": "solemann"،
"súfi ; dini": "solemn"،
"ukil": "solicitor"،
"doró jiníc": "solid"،
"ettefáki": "solidarity"،
"doró goijjé": "solidified"،
"hól": "solution"،
"kessú": "some"،
"kessú aám súal ókkol": "some common questions"،
"ar honíkka": "some one else"،
"kessú thaim": "some time"،
"baás hotá": "some word"،
"honíkka": "somebody"،
"oinno honíkka": "somebody else"،
"honíkka": "someone"،
"oinno honíkka": "someone else"،
"háas honíkka": "someone special"،
"tuñí fosón goróde manúic": "someone you like"،
"tuñí ador goróde manúic": "someone you loved"،
"kessú": "something"،
"kessúthaim": "sometime"،
"buzu motta": "sometimes"،
"honó bóte": "somewhat"،
"morot fua": "son"،
"futor bou": "son's wife"،
"zamai": "son-in-law"،
"gana": "song"،
"hára": "soon"،
"joldi": "sooner"،
"jolti yá baade": "sooner or later"،
"zohóm": "sore"،
"dhuwáñ bic": "sore arm"،
"golar bic": "sore throat"،
"hórofata gula": "sorrel"،
"afsús": "sorrow"،
"maf saáir": "sorry"،
"tortib gor": "sort"،
"tortif goró": "sort out"،
"kisím forók gorá": "sorting"،
"tuaiyé": "sought"،
"ruú": "soul"،
"abas": "sound"،
"bála arde sehéti": "sound and healthy"،
"bááng": "sound for puch"،
"mula hoóñt": "sound of eating"،
"dháág gorí": "sound of falling"،
"bóçor gorí": "sound of knife trust"،
"kóóñt kóóñt": "sound of male chicken"،
"hóóñt gorí": "sound of tree falling"،
"hóro": "sour"،
"zoriya": "source"،
"hórodiya": "soured"،
"hóror dok": "sourness"،
"doóin": "south"،
"doóine arde fuge": "south eat"،
"doóine arde fosíme": "south west"،
"doóinor": "southern"،
"maalek": "sovereign"،
"badcáiyi": "sovereignty"،
"soya dana": "soy"،
"háli zaga": "space"،
"fárokot": "spacious"،
"kudal": "spade"،
"espain or dec": "spain"،
"fózul": "spam"،
"lamba": "span"،
"espánic": "spanish"،
"fiñaijja": "sparrow"،
"bicí hom gorí": "sparsely"،
"demaki": "spatial"،
"hotáhoó": "speak"،
"hoói yóre fúno": "speak and listen"،
"dilor bútortu hoó": "speak from the heart"،
"hotáhoiya": "speaker"،
"hotáhoór": "speaking"،
"dhoóñr gorí hoó ; abas dhoóñr gorí hoó": "speakout"،
"sél óla ; sél manúic": "spearman"،
"háas": "special"،
"hósusi fáaida ; espicél fáaida": "special benefit"،
"espicél fáaidar thiañ diya": "special beneft payment"،
"háas goijjé": "specialised"،
"mahéri": "specialist"،
"mahéri dekbal gorá": "specialist care"،
"háas gor": "specialize"،
"háas": "specific"،
"háas gorí": "specifically"،
"waazé goijjá": "specified"،
"waazé gor": "specify"،
"nommuna": "specimen"،
"kias goijjé": "speculated"،
"kias": "speculation"،
"boktita": "speech"،
"spíith": "speed"،
"espídh bicí gor": "speed up"،
"tezi": "speedy"،
"hóssa gor": "spend"،
"hóros goijjé": "spent"،
"moni": "sperm"،
"gulguilla": "sphere"،
"gulguilla mikká": "spherical"،
"ebbre sáf sútara": "spic"،
"mosólla": "spice"،
"mosólla": "spices"،
"zál": "spicy"،
"moccá": "spider"،
"moccár zal": "spider web"،
"gúr ; gúra": "spin"،
"dañra": "spine"،
"fakkáraiya": "spiral"،
"ruháni": "spiritual"،
"sép": "spit"،
"teli": "spleen"،
"alokgor": "split"،
"hotá hoiyé": "spoke"،
"hotá huwágiyé": "spoken"،
"espónsar": "sponsor"،
"nizebaze ói aiyedé": "spontaneous"،
"samic": "spoon"،
"kélaá": "sport"،
"nuktá": "spot"،
"laáith ór fúça": "spotlight"،
"thaái mas": "spotted snake head"،
"beçabeçi ; bouzamai": "spouse"،
"espré": "spray"،
"séra": "spread"،
"séragiye": "spreaded"،
"sérar": "spreading"،
"espríng": "spring"،
"dóla fiañs": "spring onion"،
"ruháni": "spritual"،
"leththwa": "sputum"،
"zaasus": "spy"،
"thiím": "squad"،
"sairkunola": "square"،
"sair kuinna cokól": "square shape"،
"sibi hoñcoçifélo": "squash"،
"sulhaça": "squirrel"،
"sibilo": "squiz"،
"súrimar": "stab"،
"súrimara": "stabbing"،
"tímtáka": "stability"،
"tímot": "stable"،
"tákgor": "stack"،
"hamgoróya": "staff"،
"ham goróya raikké": "staffed"،
"gous órin": "stag"،
"esthéij": "stage"،
"cíçir tók": "stair"،
"cíçi": "staircase"،
"zuakélar thiañ dhála": "stake"،
"esthéikhóuldhar": "stakeholder"،
"tooitta duan ; ek sáitta duan": "stall"،
"tooitta duan": "stall ; vendor"،
"moór": "stamp"،
"tíade jiníc": "stand"،
"toyar": "stand by"،
"tíya": "stand up"،
"miyar": "standard"،
"tíai táker": "standing"،
"tíya táikke": "standing up"،
"esthepol mar": "staple"،
"steplar": "stapler"،
"tara": "star"،
"houñra gula": "star fruit"،
"tarar cokól": "star shape"،
"suk dhoóñr gorí saá": "stare"،
"tara mas": "starfish"،
"hoñra gula": "starfruit"،
"hawa": "starling"،
"cúrugor": "start"،
"cúru goijjé": "started"،
"cúru gorér": "starting"،
"estéith": "state"،
"boiyan goijjé": "stated"،
"dec sára manúic": "stateless person"،
"boiyan": "statement"،
"mizanor boiyan": "statement balance"،
"hísaf cekgorá": "statement of account"،
"noloredé": "static"،
"boiyan gorér": "stating"،
"estécen": "station"،
"thóoijje": "stationed"،
"hásiyot": "status"،
"kaanuni": "statutory"،
"táke": "stay"،
"taaluk raikkó": "stay in touch"،
"zugazuk táko ; taaluk táko": "stay informed"،
"táikke": "stayed"،
"place tór": "staying"،
"kaayemták": "steadfast"،
"surgor": "steal"،
"báf": "steam"،
"esthíil": "steel"،
"súan": "steering"،
"hóriná": "stemum"،
"tók": "step"،
"átaibaf": "stepfather"،
"átaimaa": "stepmother"،
"topka óll ; tobka óll": "steps"،
"hórina": "sternum"،
"súañ": "stick"،
"añçá": "sticky"،
"aijó": "still"،
"mutá": "stingy"،
"gúço ; gúijje ; gúçer": "stir"،
"gúço": "stir ; stirred ; stirring"،
"sílaiye": "stitched"،
"zoma goijjá maal": "stock"،
"cíiar bazar": "stock exchange"،
"thal mar": "stockpile"،
"thal marer": "stockpiling"،
"sur goijjé": "stole"،
"sure loigiyói": "stolen"،
"feth": "stomach"،
"feth hoñrani": "stomach pain"،
"feth hoñrar": "stomach-upset"،
"fattór": "stone"،
"tíaiyé": "stood"،
"thoul": "stool"،
"tíya": "stop"،
"hórotal gori ham bon gorá": "stoppage"،
"tíaigiyói": "stopped"،
"gudam": "storage"،
"gudam": "store"،
"thala": "storey"،
"tuán": "storm"،
"kissá": "story"،
"kissá , kissá óll , kissá kaháni": "story ; stories"،
"kissá hoóiya": "storyteller"،
"kissá hoón": "storytelling"،
"sulá": "stove"،
"uzu": "straight"،
"uzuzu": "straightaway"،
"bazígiyoi": "stranded"،
"taajub": "strange"،
"ajnobi": "stranger"،
"sail ola": "strategic"،
"sail": "strategy"،
"esthrorberi": "strawberry"،
"sórah": "stream"،
"cóhoc goríder": "streamline"،
"rasta": "street"،
"taakot": "strength"،
"mozbut goré": "strengthen"،
"mozbut gorér": "strengthening"،
"bodiyafore": "strenuous"،
"sab": "stress"،
"zur diyé": "stressed"،
"sabdiya": "stressful"،
"than": "stretch"،
"háiththa": "stretcher"،
"góuçi baijjé ; mar": "strick"،
"hora": "strict"،
"hora gorí": "strictly"،
"barimar": "strike"،
"bari marer": "striking"،
"rosí": "string"،
"kucúc gor": "strive"،
"doró": "strong"،
"bicí doró": "stronger"،
"ebbre soktó": "strongest"،
"soktógorí": "strongly"،
"maijjé , barimaijjé , guli maijjé , zanifúni bari maijjé , mara": "struck"،
"hák": "structure"،
"mehénnot goré": "struggle"،
"juddo jihá gorér": "struggling"،
"zittulla": "stubborn"،
"forínna fua": "student"،
"dorása ; mutála": "studies"،
"estudhiou": "studio"،
"fonnáfor": "study"،
"jiníc": "stuff"،
"bóijja": "stuffed"،
"taajuippa ham goijjé": "stunned"،
"hóraf": "stupid"،
"esthail": "style"،
"nisor": "sub"،
"muth-théila": "sub-total"،
"kontherék or bák": "subcontract"،
"kontherék or bák loiyé": "subcontracted"،
"sibi raikké": "subdued"،
"mouzú": "subject"،
"goráza": "subject to"،
"mojbur goijjé": "subjected"،
"háwalagoróon": "submission"،
"háwalagor": "submit"،
"toslim goijjé": "submitted"،
"fore": "subsequent"،
"fore fore gorí": "subsequently"،
"ciz": "substance"،
"jiníc tua": "substance detection"،
"jiníc ókkol": "substances"،
"thóka": "substandard"،
"kaafí": "substantial"،
"doró móro gorí": "substantially"،
"bodola bodoli gor": "substitute"،
"gura thaithél": "subtitle"،
"homai": "subtracting"،
"neelai féloon": "subtraction"،
"kamiyap ; kamiya óiye ; kaamiyapór": "succeed"،
"kamiyap": "succeed ; succeeded ; succeeding"،
"kaamiyabi": "success"،
"kamiyab": "successful"،
"kaamiyabir sáñte": "successfully"،
"endila": "such"،
"zeén néki": "such as"،
"éndila": "such that"،
"atíkka": "suddenly"،
"dukfar": "suffer"،
"bordac goijjé": "suffered"،
"zillot far": "suffering"،
"kaafí": "suffice"،
"siní": "sugar"،
"kuiccól": "sugarcane"،
"siní ; know": "suger"،
"mocuwara do": "suggest"،
"mocuwara diya giyé": "suggested"،
"mocuwara der": "suggesting"،
"mocuwara": "suggestion"،
"húdhúci": "suicide"،
"súth cuth arde feén ekku rong or": "suit"،
"munaséf": "suitability"،
"munaséf": "suitable"،
"hóthel or hamra": "suite"،
"súzi hálawa": "suji sweet"،
"hair": "sul"،
"muktosor goré": "summarise"،
"húlasa": "summary"،
"goromhal": "summer"،
"beil": "sun"،
"beil thík óiye": "sun at it's zenith"،
"beil oré gonná dóijje": "sun eclipse"،
"cújjofúl": "sun flower"،
"beil dhufígiyói": "sun has sunk"،
"beil uçé": "sun rises"،
"beil uçér": "sun rising"،
"beil góler": "sun setting"،
"beilor cóçok": "sun's rays"،
"Rooibar": "Sunday"،
"cújjofúl": "sunflower"،
"cújjofúlor dana": "sunflower seed"،
"roidor cocmá": "sunglasses"،
"beil or foór": "sunlight"،
"beiluçá": "sunrise"،
"beilor cocmá": "sunscreen"،
"beil gólile": "sunset"،
"beilor foór": "sunshine"،
"ódor baára": "super"،
"afzól": "superior"،
"gaar nisor híssartu hosora lou óll grudár úzu anéde rok": "superior vena cava"،
"borobazar": "supermarket"،
"bodoli diyé": "superseded"،
"suparvaizar": "supervisor"،
"ziyadá gorídiya": "supplement"،
"ziyadá gorídiyé": "supplemented"،
"fóriyat gor": "supplicate"،
"fóriyat": "supplication"،
"mal foóñsáidiyé": "supplied"،
"mal de": "supply"،
"mal der": "supplying"،
"hémayot": "support"،
"hémayot or group": "support group"،
"hémayot goijjé": "supported"،
"hémayot goróya": "supporter"،
"hémayot gorér": "supporting"،
"hémayot gorérde éndila": "supportive"،
"manilodé": "suppose"،
"sibe": "suppress"،
"siber": "suppressing"،
"boro": "supreme"،
"fakka": "sure"،
"fakka gorí": "surely"،
"zobin": "surface"،
"sót ókkol ; sót ól": "surfaces"،
"izafá": "surge"،
"ziyadá": "surplus"،
"taajub": "surprise"،
"taajup lager": "surprised"،
"sárendhar": "surrender"،
"gíriféla": "surround"،
"atehañsé": "surrounding"،
"soñigorá": "surveillance"،
"tadarot gor": "survey"،
"zobin mafoya": "surveyor"،
"zinda táká": "survival"،
"basitáko": "survive"،
"zinda táikke": "survived"،
"jenusáit óttu basi táikke": "survived genocide"،
"basitákoya": "survivor"،
"cók": "suspect"،
"cókgoijjé": "suspected"،
"neelaide": "suspense"،
"cók": "suspicion"،
"modot fa": "sustain"،
"zari táikke": "sustained"،
"faloya": "sustainer"،
"zari táker": "sustaining"،
"rizík ; háafiya": "sustenance"،
"gilo": "swallow"،
"boga": "swan"،
"dháikka ; tessá": "sway"،
"kosóm háa": "swear"،
"kosómgor": "swear ; swore ; sworn ; swearing"،
"kosóm": "swearing"،
"gám": "sweat"،
"gám neeler": "sweating"،
"gáme rocé": "sweaty"،
"fúureh": "sweep"،
"kuñsoya": "sweeper"،
"miçá": "sweet"،
"miçá": "sweet ; sweeter ; sweetest"،
"kiáñra gula": "sweet gourd"،
"lal alu": "sweet potato"،
"miçádiya": "sweetened"،
"gorom bazu": "sweeter"،
"miçá": "sweetness"،
"fúl": "swell"،
"fúille": "swelled"،
"fúler": "swelling"،
"áñsur": "swim"،
"háñsur": "swim ; swimed ; swiming"،
"áñsurer": "swimming"،
"áñsurede kuwa": "swimming pool"،
"cúwor": "swine"،
"dhúloya": "swinger"،
"dhúler": "swinging"،
"bodol": "switch"،
"Swizarlen": "Switzerland"،
"gúrede kursí": "swivel chair"،
"fúilla": "swollen"،
"lamba súri": "sword"،
"bor sóñi": "sword bean"،
"Sydney": "Sydney"،
"nisab": "syllabus"،
"nicán óla": "symbolic"،
"hámdorodi": "sympathy"،
"alaamot": "symptom"،
"yohúdir dórmohána": "synagogue"،
"ekdhoilla goró": "synchronize"،
"ekkudhoilla ageloiza": "syndicate"،
"síndhroum": "syndrome"،
"borabor ; ekkui ; hañsé háiñcca": "synonym"،
"Siríya": "Syria"،
"nezam": "system"،
"nezami": "systematic"،
"nezámi polósi": "systematic policy"،
"sisthemétík gorí": "systemetically"،
"boói táikke": "sítting down"،
"norom ; bicí norom ; ebbre norom ; sóbse": "sóft"،
"T-cáth": "T-shirt"،
"téb": "tab"،
"mes": "table"،
"theból thenís": "table tennis"،
"fissá gorágiye": "tabled"،
"hól gor": "tackle"،
"hól goijjé": "tackled"،
"sail": "tactic"،
"hót": "tag"،
"Taif cóor": "Taif"،
"les": "tail"،
"dorzi": "tailor"،
"dorzi banaiya": "tailor made"،
"ódodé banaiyé ; bonofán banaiyé": "tailored"،
"hoorsíla": "tailoring"،
"lo": "take"،
"lo": "take ; took ; taken ; taking"،
"karwaiyi gor": "take action"،
"loiza": "take away"،
"nizoré nize bála kíyal rakó": "take good care of yourself"،
"kúliféla": "take off"،
"zimma lo": "take resonsibility"،
"hodom ókkol lo": "take steps"،
"loifélaiye": "taken"،
"lor": "taking"،
"dhandhari": "tale"،
"salák": "talent"،
"salák ; demaki ; sotur": "talented"،
"hotáhoó": "talk"،
"hotábas": "talkative"،
"lamba": "tall"،
"lamba": "tall ; taller ; tallest"،
"lamba hoicca manúic": "tall youn man"،
"tetói": "tamarind"،
"banaya": "tamed"،
"afándhi": "tangerine"،
"dórifaredé": "tangible"،
"thaingki": "tank"،
"theip": "tape"،
"monzil": "target"،
"thíki kotólgorá": "targeted killing"،
"zooñr": "tarnish"،
"hoñsufata": "taro leves"،
"hoñsu ák ; hoñsu hák": "taro-stem"،
"ham": "task"،
"háas ham or grúp": "taskforce"،
"moza": "taste"،
"mozaola": "tasteful"،
"mozagorí": "tastefully"،
"mozasára": "tasteless"،
"moza": "tasty"،
"cíkaiyé": "taught"،
"técera": "taunt"،
"técerar": "taunting"،
"háñsil tulá": "tax diya"،
"lofzórzák": "taxonomy"،
"TB biaram": "TB"،
"saá": "tea"،
"saá fata": "tea leave"،
"sáarfinic": "tea plate"،
"saár-fiala": "tea-cup"،
"forá": "teach"،
"masthor": "teacher"،
"cíkardé": "teaching"،
"háil cúrma róng": "teal"،
"thiím": "team"،
"thiím menéjar": "team manager"،
"saár ketóri": "teapot"،
"fáçe": "tear"،
"sukfuredé geés": "tear gas"،
"hañdani": "tearful"،
"hañdani": "tears"،
"hañ horola": "teasel gourd"،
"dudór bath": "teat"،
"dudór bath": "teat ; nipple"،
"theknikel": "technical"،
"thekník": "technique"،
"baicfon": "teenage"،
"nojuan": "teenager"،
"dat ókkol": "teeth"،
"cockroach": "teillasura"،
"telifún": "telephone"،
"telivicén": "television"،
"thelifún": "teliphone"،
"telivicén": "telivision"،
"hoó": "tell"،
"hoór": "telling"،
"gorom sórot": "temperature"،
"nomuna": "template"،
"kualor dhák óll": "temple"،
"tooitta": "temporary"،
"tooitta ; essát ólla ; ekenálla": "temporay"،
"doc": "ten"،
"ek-kurul": "ten million"،
"doc lák 10,00,000": "Ten-lakh"،
"keriyadar": "tenant"،
"soñi goijjé": "tended"،
"norom": "tender"،
"théngor gus": "tendon"،
"thenís": "tennis"،
"zobana": "tense"،
"sinta": "tension"،
"sómaji ókkol ór bútore thanathani": "tensions between communities"،
"thambu": "tent"،
"demak há": "tention"،
"therabaith": "terabyte"،
"muddot": "term"،
"neelaide": "terminate"،
"hótom gorágiye": "terminated"،
"ui": "termite"،
"corót arde háalot óll * niyom ar corót * sikeng & tsmekcá*": "terms and condition"،
"niyom arde corót ókkol": "terms and conditions"،
"hótornak": "terrible"،
"ebbre dhoraigiyói": "terrified"،
"elaka": "territory"،
"teés": "test"،
"testhar": "tester"،
"teés gorér": "testing"،
"boda": "testis"،
"leká": "text"،
"eskulor kitab": "textbook"،
"lekíbórzaga": "textfield"،
"cómo ; thaim": "thaim"،
"áttu áro": "than"،
"cúkuria gor": "thank"،
"cúkuria": "thank you"،
"cúkuria goijjé": "thanked"،
"cúkuria": "thanks"،
"uiyán": "that"،
"yággwa": "that is another one"،
"yían óilde": "that's"،
"són": "thatch"،
"kuruta": "thawb"،
"wá": "the"،
"duniyai yián ór háiyat": "the life of this world"،
"Rojob or mac": "the month of Rajab"،
"baána douya": "the one who makes excuses"،
"sobór goróya": "the patient one"،
"zadthía": "the whole descendent"،
"thiyéthar": "theater"،
"tarár": "their"،
"tarár": "theirs"،
"tará nize": "theirself"،
"taráre": "them"،
"daháibór torika": "theme"،
"taránize": "themselves"،
"tarfore": "then"،
"elaj": "therapy"،
"éçe": "there"،
"asé": "there is"،
"ótolla": "therefore"،
"éçe bútore": "therein"،
"felas": "thermos"،
"iín": "these"،
"tará": "they"،
"tará": "they ; those"،
"tarártu": "they have"،
"dhañço": "thick"،
"dhañço gor": "thicken"،
"sur": "thief"،
"suri": "thievery"،
"ran": "thigh"،
"fatol": "thin"،
"fatol": "thin ; thinner ; thinnest"،
"ciz": "thing"،
"góloni": "thing with which to enter"،
"atehañsór jiníc": "things around"،
"ábazabá": "things of no value or use"،
"báf": "think"،
"báfa": "thinking"،
"tuáñralla báfir": "thinking of you"،
"tesára": "third"،
"tesára hísafe": "thirdly"،
"tin borat or": "thirds"،
"fanír tirác laiggéde": "thirsty"،
"teró": "thirteen"،
"tiríc": "thirty"،
"yián": "this"،
"yaggwá": "this is another one"،
"yaáni": "this means"،
"aijja beínna": "this morning"،
"kuruta": "thobe"،
"keñça": "thorn"،
"keñça ola": "thorny"،
"káamel": "thorough"،
"bálagorí": "thoroughly"،
"úun": "those"،
"zará": "those who"،
"óileyo": "though"،
"kiyál": "thought"،
"báfizanede": "thoughtful"،
"házar , ekházar 1,000": "thousand"،
"házar ; ekházar": "Thousand"،
"añc": "thread"،
"dómki": "threat"،
"dómkide": "threaten"،
"dómki diyé": "threatened"،
"dómki der": "threatening"،
"tin": "three"،
"mela maijjé": "threw"،
"thuñçala": "throat"،
"hañfa": "throb"،
"Allahr arcó ; kursí ; tottó": "throne"،
"duara": "through"،
"uggwá zanafúna maincórtu": "through an acquaintance"،
"beggúla": "through out"،
"ahéri foijjonto": "throughout"،
"melámar": "throw"،
"melá marer": "throwing"،
"melá mara giyé": "thrown"،
"théla": "thrust"،
"súri théli gólaide": "thrust a knife"،
"buijjá ouñl": "thumb"،
"nok ór matá": "thumbnail"،
"Bicíbbar": "Thursday"،
"endila": "thus"،
"gilíth": "thyroid gland"،
"thikóth": "ticket"،
"sáfsaf": "tidy"،
"ban": "tie"،
"ban , baindé , bañdér , bañdifélaiye": "tie ; tied ; tying ; tied"،
"bañdó": "tie-up"،
"bañdá": "tied"،
"bañdí raikké": "tied up"،
"forol": "tiered"،
"bak": "tiger"،
"hailla isa": "tiger prawn"،
"thaith": "tight"،
"morá": "tighten"،
"baíggani": "tigress"،
"jafani mas": "tilapia"،
"fojjonto": "till"،
"yaa fojjonto": "till now"،
"thaim": "time"،
"thaim or hót": "time frame"،
"thaime thaime ; woktó woktó": "time to time"،
"thaim lain": "timeline"،
"thaim mozin": "timely"،
"tháimcíth": "timesheet"،
"thaim or moór": "timestamp"،
"thaim theból": "timetable"،
"thaim or": "timing"،
"foth": "tin"،
"besún": "tingiling"،
"bicí cóñço": "tinier"،
"ebbre cóñço": "tiniest"،
"cóñço": "tiny"،
"nosíyot": "tips"،
"hóran óiye": "tire"،
"hónran óiye": "tired"،
"hóranlaga": "tiredness"،
"hóran/komzuri": "tireness"،
"gaar gusso": "tissue"،
"lokób": "title"،
"torjuma yaatraká": "TM translation memory"،
"ot": "to"،
"kobulgoríbellá": "to accept"،
"óibella": "to be"،
"fari bélla": "to be able"،
"mani bélla": "to comply"،
"tuai dóribélla": "to detect"،
"gorí bélla": "to do"،
"hái bella": "to eat"،
"ekin goráibella": "to ensure"،
"tuai faibellá": "to find"،
"baicca dibelá": "to give birth"،
"zaibellá": "to go"،
"baríbélla": "to increase"،
"zani bélla": "to know"،
"tuáñre zanai bélla": "to let you know"،
"cánti gorí tákibellá": "to live peacefully"،
"asán goríbélla": "to make easy"،
"candár púain banai bélla": "to make up outstanding point"،
"añáre": "to me"،
"age neelíbélla": "to overtake"،
"nuksan oré rukíbélla": "to prevent harm"،
"tulíbélla": "to raise"،
"gufoniya tákibellá": "to remain anonymous"،
"hasharbar solaibélla": "to run business"،
"tuai bélla": "to search"،
"séth goríbélla": "to set"،
"buzíbélla": "to understand"،
"zar loi taaluk óitfare": "to whom it may concern"،
"tuáñre": "to you"،
"kuna beng": "toad"،
"séikka ruthu": "toast"،
"tousthar": "toaster"،
"cuñça fata": "tobacco"،
"aijja": "today"،
"théng or ouñl": "toe"،
"théngor nok": "toenail"،
"théngor ouñl óll": "toes"،
"théngor nok": "toes nail"،
"fuañti": "together"،
"thaththi": "toilet"،
"gusól hánar jiníc": "toiletry"،
"hoiyé": "told"،
"boddac": "tolerance"،
"boddacgor": "tolerate"،
"gáñth fan": "toll"،
"thaiyon": "tomato"،
"hórothaiyon": "tomatoe"،
"hoboror fattór": "tombstone"،
"hailla": "tomorrow"،
"zir": "tongue"،
"aijja raitta": "tonight"،
"maf hísafe": "tonnage"،
"tonsel": "tonsil"،
"bicí": "too"،
"bouhóut": "too much"،
"loiyé": "took"،
"hamor sáman": "tool"،
"sámanorfethi": "toolkit"،
"sáman": "tools"،
"dat": "tooth"،
"dat": "tooth ; teeth"،
"datdholoni": "toothbrush"،
"dat dholoni dabai": "toothpaste"،
"uore": "top"،
"matár tuli": "top of head"،
"mouzú": "topic"،
"matá ókkol": "tops"،
"tibbatti": "torch"،
"ooin zolaidoon": "torching"،
"azab": "torment"،
"fáça": "torn"،
"madala": "torso"،
"hossób": "tortoise"،
"toziya": "torture"،
"toziyadiyé": "tortured"،
"muth": "total"،
"muth amodoni": "total income"،
"furafuri": "totality"،
"bilkúl": "totally"،
"súu": "touch"،
"íkka": "toward"،
"toóila": "towel"،
"thawar": "tower"،
"thoón": "town"،
"thoón hóol": "town hall"،
"kélouná": "toy"،
"noroli": "trachea"،
"rasta": "track"،
"foóñsa": "tracking"،
"tejaarot": "trade"،
"códor": "trader"،
"códori": "trading"،
"rosóm": "tradition"،
"rosómi": "traditional"،
"sótma": "tragedy"،
"han ot uçéde keñc": "tragi hairs"،
"precani": "tragic"،
"lesá": "trail"،
"rel": "train"،
"threnín diyé": "trained"،
"torbiyot": "training"،
"trejekthori": "trajectory"،
"ek híssa": "tranche"،
"tin kuinna cokól": "trangle shape"،
"behúñc goréde dabai": "tranquilizer"،
"leendén": "transaction"،
"leikká , leikká rekódh": "transcript"،
"fargará": "transfer"،
"farí": "transferee"،
"fargaráiye": "transferred"،
"bodolede zaga": "transfield"،
"hótdhiyoñya": "transgressor"،
"zaga bodola": "transit"،
"bodola": "transition"،
"torjumagor": "translate"،
"torjuma goijjé": "translated"،
"torjuma": "translation"،
"torjuma goróya": "translator"،
"faróon": "transmission"،
"kúllunghála": "transparent"،
"baráido": "transport"،
"garígúra": "transportation"،
"foóñsáiye": "transported"،
"fán": "trap"،
"holot baijjé": "trapped"،
"hoñsrar dhabba": "trash"،
"sótma": "trauma"،
"sótma óla": "traumatic"،
"sofór": "travel"،
"rastar hóssa": "travel allowance"،
"uzu faráiyé": "traversed"،
"tál": "tray"،
"bebáar": "treat"،
"gomgorí farede": "treatable"،
"bebaár gorágiye": "treated"،
"bebáar gorér": "treating"،
"elaj": "treatment"،
"gas": "tree"،
"elaji tortib": "triage"،
"elaji tortib diyé": "triaged"،
"kucíc ; kucíc gorá": "trial"،
"tinkuinna": "triangle"،
"kobila": "tribe"،
"sail": "trick"،
"kucíc goijjé": "tried"،
"cúru": "trigger"،
"cúru goijjé": "triggered"،
"ek million million": "trillion"،
"cáço": "trim"،
"caçídiyé": "trimmed"،
"sofór": "trip"،
"fóus": "troop"،
"thropi": "trophy"،
"gormi": "tropical"،
"cúor or théng": "trotter (pork)"،
"mockil": "trouble"،
"guccá lager": "troublesome"،
"lamba feén": "trouser"،
"trak garí": "truck"،
"sóiyi": "true"،
"sóiyi": "true."،
"sóiyigori": "truely"،
"maikfúl": "trumpet flower"،
"siañra garí": "trunk"،
"biccáci": "trust"،
"biccác gorázade": "trusted"،
"amanot dar": "trustee"،
"amanot ola": "trustworthy"،
"háñsa": "truth"،
"háñsa": "truthful"،
"cóiccagorí": "truthfully"،
"háñsa ; cóicca": "truthfulness"،
"kucícgor": "try"،
"kucíc gor , kucíc goijjé , kucíc gorífélaiye , kucíc gorér": "try ; tried ; trying"،
"fiñdí soó": "try on"،
"kucícgorír": "trying"،
"gaála": "tub"،
"nol": "tube"،
"Mongolbar": "Tuesday"،
"rosí thana thani": "tug-war"،
"feth": "tummy"،
"uzara uzori gorí": "tumultuously"،
"budda": "tunnel"،
"fouri": "turban"،
"réeik": "turkey"،
"óloid": "turmeric"،
"thoolmol": "turmoil"،
"fíre": "turn"،
"fithdo": "turn away"،
"bongor": "turn off"،
"kúlo": "turn on"،
"sit gorá": "turn over"،
"neeli accé ; neeli aiyó": "turn up"،
"fírzye": "turned"،
"cál gom": "turnip"،
"hossób": "turtle"،
"cuthar": "tutor"،
"sóbok": "tutorial"،
"tucin dahóon": "tutoring"،
"telivícen": "TV"،
"baró": "twelve"،
"kuri": "twenty"،
"ekkuri-añctho": "twenty-eight"،
"ekkuri-fañs": "twenty-five"،
"ekkuri-sair": "twenty-four"،
"ekkuri-sair": "Twenty-four"،
"ekkuri-no": "twenty-nine"،
"ekkuri-ek": "twenty-one"،
"ekkuri-háñt": "twenty-seven"،
"ekkuri-só": "twenty-six"،
"ekkuri-tin": "twenty-three"،
"ekkuri-dui": "twenty-two"،
"dui motta": "twice"،
"duifoór": "twilight"،
"zoñikka": "twin"،
"zura zuijja": "twine"،
"zoiñikka fuain ; zura juijja fuain": "twins"،
"musor": "twist"،
"mosoijja": "twisted"،
"baró": "twleve"،
"dui": "two"،
"kisím": "type"،
"kisím": "type ; type gor"،
"aám ; áaidi ; mesáli": "typical"،
"nakosúr": "ugly"،
"ahérittu": "ultimately"،
"bicí siyon abas": "ultrasound"،
"bicí siyon abas loi gaa cekgorá": "ultrasound scan"،
"nagí": "umbilicus"،
"sáti": "umbrella"،
"ummot": "umma"،
"Bainela Koum": "UN"،
"nofaré": "unable"،
"fúañijja sára": "unaccompanied"،
"ejazot sára": "unauthorised"،
"biccácgorá nozadé": "unbelievable"،
"kisímgoijjá sára": "uncategorized"،
"gair ekini": "uncertain"،
"gair ekin": "uncertainty"،
"acek goijjá": "unchecked"،
"bottomis": "uncivil"،
"mamu": "uncle"،
"fura nóo": "uncomplete"،
"nóo": "uncomplete ; not complete"،
"aguijjá": "uncovered"،
"nise": "under"،
"negaranir andhár ot": "under supervision"،
"hair boñl or tolor keñc": "underarm"،
"niselain": "underline"،
"niselain maijjá": "underlined"،
"fakkáraiya": "underlying"،
"nuksan foóñso": "undermining"،
"fisóttu modot gorér": "underpinning"،
"nisottu laindo": "underscore"،
"buz": "understand"،
"buzá zade": "understandable"،
"akolbondir sáñte": "understandably"،
"buzá": "understanding"،
"buzé": "understood"،
"zimma lo": "undertake"،
"zimma luwa giye": "undertaken"،
"zimma lor": "undertaking"،
"zimma loiyé": "undertook"،
"soler": "underway"،
"gonzi": "underwear"،
"hom uzón": "underweight"،
"amanot diyé": "underwritten"،
"waapesgoró": "undo"،
"agoijjá": "undone"،
"cók nogorí": "undoubtedly"،
"hamsára": "unemployed"،
"sáfsáf": "unequivocal"،
"zurzur noó ; bézura": "uneven"،
"atíkka": "unexpected"،
"beinsáfi": "unfair"،
"fíth noóde": "unfit"،
"aboiththa": "unfolded"،
"loot faazar": "unfolding"،
"hoói nofaréde": "unforeseeable"،
"bodkismoti": "unfortunate"،
"bodkismotor sáñte": "unfortunately"،
"abúinna": "unfried"،
"nacúkuria": "ungrateful"،
"frecani": "unhappiness"،
"frecani": "unhappyness"،
"UNHCR": "UNHCR"،
"nasehéti": "unhealthy"،
"ferot": "unhygienic person"،
"yunikúdh": "unicode"،
"sinno nofadé": "unidentifiable"،
"asínna": "unidentified"،
"yunifórm": "uniform"،
"yunifórm findá": "uniformed"،
"ekdháikka": "unilateral"،
"neelai félo": "uninstall"،
"neelai félaiye": "uninstalled"،
"jomúuri": "union"،
"ekí": "unique"،
"yuníth": "unit"،
"ek ó": "unite"،
"ekkaththa": "united"،
"Bainela Koum": "United Nations"،
"ettefáki": "unity"،
"jáhan": "universe"،
"yunivarsiti": "university"،
"zulúm": "unjust"،
"anjan": "unknown"،
"gair kaanuni": "unlawful"،
"no..lé": "unless"،
"zetún foijjonto tuñí oinno dhoilla aros noógoró": "unless you request otherwise"،
"dhoilla noó": "unlike"،
"cómbob noó": "unlikely"،
"hótsára": "unlimited"،
"abanaiya": "unmade"،
"gora": "unmatured"،
"abodoilla": "unmodified"،
"zurorot noodé": "unnecessary"،
"akúilla": "unopened"،
"gom noláde": "unpleasant"،
"bemesál": "unprecedented"،
"héfazot sára": "unprotected"،
"luwairakó": "unpublish"،
"rejísthar sára": "unregistered"،
"bóurusa sára": "unreliable"،
"hórotal": "unrest"،
"héfazot sára": "unsafe"،
"anuni": "unsalted"،
"adeikká": "unseen"،
"ódot notákede": "unstable"،
"nakaam": "unsuccessful"،
"foijjonto": "until"،
"raitor 9 wá fán": "until 9 pm"،
"ite aiyé fán foijjonto": "until he comes"،
"etékkal": "until now"،
"asúiya": "untouched"،
"abanaiya": "untrained"،
"gair estemal goijjá": "unused"،
"gair estemal goijjá": "unused ; a estemal goijjá"،
"gair maamuli": "unusual"،
"gom nái": "unwell"،
"golitr sáate": "unwittingly"،
"uore": "up"،
"foijjonto": "up to"،
"noyatazagor": "update"،
"noyagoijjé": "updated"،
"dorja uore goré": "upgrade"،
"sámali raké": "uphold"،
"uncá gor": "uplift"،
"uorefoóñsa": "upload"،
"goríbiccot": "upon"،
"uoror": "upper"،
"uoror uñth": "upper lip"،
"uoror fak": "upper lobe lung"،
"borhát ór leká": "uppercase"،
"hángama": "uproar"،
"precan": "upset"،
"uldha ; uore nise": "upside down"،
"uoror thala": "upstair"،
"tazagor , torutaza goró": "upto date"،
"uormikká": "upward"،
"uranás": "uranus"،
"cóorgwá": "urban"،
"urdu zuban ; pakistán ór zuban": "urdu"،
"uoror mutor fáik": "ureter"،
"nisor mutor fáik": "urethra"،
"arosgor": "urge"،
"fóuran": "urgency"،
"fóuran": "urgent"،
"fóuri": "urgently"،
"fecákor hóro": "uric acid"،
"fecákor": "urinal"،
"mutor sála": "urinary bladder"،
"mut": "urinate"،
"mut": "urine"،
"fecákor sála": "urine bladder"،
"intarnéth ór rabeta": "URL"،
"añárare": "us"،
"estemal gorázade": "usable"،
"estemal": "usage"،
"estemalgor": "use"،
"estemal": "use ; useful"،
"estemal goijjé": "used"،
"hazor": "useful"،
"behar": "useless"،
"estemal goróya": "user"،
"estemal gorér": "using"،
"hámicar dhóilla": "usual"،
"aámhísafe": "usually"،
"sulár estemali": "utensils"،
"baicca danir gór": "uterus"،
"fecák ór rastat gáa óiye": "UTI Urinary Track Infection"،
"estemal goijjé": "utilised"،
"estemal or ciz": "utility"،
"estemalgor": "utilize"،
"entahá": "utmost"،
"bilkúl": "utter"،
"furafuri": "utterly"،
"alazir": "uvula"،
"háli": "vacant"،
"hálizaga": "vacant land"،
"háligor": "vacate"،
"háli goijjé": "vacated"،
"veksín": "vaccine"،
"córom zaga": "vagina"،
"sáf noó": "vague"،
"bekar": "vain"،
"behar hotá": "vain talk"،
"kaanuni": "valid"،
"hókbouli sóiyigor": "validate"،
"gúna": "valley"،
"kimot": "value"،
"lamba garí": "van"،
"báf": "vapour"،
"bodola zadé": "variable"،
"dhoilla bodhoilla": "variation"،
"kisím kisím": "variety"،
"dhoilla bodhoilla": "various"،
"bodole": "vary"،
"bodoler": "varying"،
"wosí": "vast"،
"vidhuyu": "vedio"،
"sobzí": "vegetable"،
"báza": "vegetable crush"،
"garí": "vehicle"،
"matár hoór": "veil"،
"kolób íkka lou soledé rok": "vein"،
"boro izzot": "veneration"،
"hasharbar": "venture"،
"Vénas grudhú": "Venus"،
"háñsa": "veracity"،
"barandha": "verandah"،
"ham": "verb"،
"gale": "verbal"،
"gale taaluk gorá": "verbal communication"،
"gale": "verbally"،
"tosdik gorá": "verification"،
"tosdik goijjá": "verified"،
"tosdikgor": "verify"،
"ayat": "verse"،
"núsha": "version"،
"uor mikká": "vertical"،
"bicí": "very"،
"bicí hóraf": "very bad"،
"bicí asór goré": "very effective"،
"bicí usol": "very high"،
"abbúci": "very little (in Magh language)"،
"bicí niso": "very low"،
"bicí burá , bicí boc ola": "very old"،
"bicí bicí": "very very"،
"kicthi": "vessel"،
"booñl hath gonzi": "vest"،
"janwar or daktor": "veterinarian"،
"zoriya": "via"،
"kabiliyoti": "viable"،
"ate hañsé": "vicinity"،
"iságorí hoijjagoréde": "vicious"،
"cíkar": "victim"،
"jit": "victory"،
"kaamiyabir din": "victory day"،
"vidu": "video"،
"nozoriya": "view"،
"saiyé": "viewed"،
"soóuya": "viewer"،
"negarani": "vigilance"،
"nize kaanun átot lodé manúic": "vigilante"،
"fara": "village"،
"farar manúic": "villager"،
"kaanun báñga": "violation"،
"maramari ; dóradóri ; ottisar gorá ; zulúm": "violece"،
"maramari": "violence"،
"sóngin": "violent"،
"dhónga fósat gorí": "violently"،
"bela": "violin"،
"milsára ; cóicca ; miálsára ; hákiki ; honó beça loi noó miledé maiyafua": "virgin"،
"zahiri": "virtual"،
"zahiri haqiqót": "virtual reality"،
"fuk": "virus"،
"víza": "visa"،
"daházade": "visible"،
"nozoria": "vision"،
"ziyarot": "visit"،
"ziyarot goijjé": "visited"،
"ziyarot goróya": "visitor"،
"saibár": "visual"،
"bera": "visít"،
"bicí zoruri ; ódor baára zoruri": "vital"،
"lofzó ókkol": "vocabulary"،
"fecár": "vocational"،
"abas": "voice"،
"abas or fethi": "voice box"،
"baatel gor ; kensel gor": "void"،
"fúçi zagóifarede": "volatile"،
"zurgorí mare": "volley"،
"abas dhoóñr cóñço": "volume"،
"nizormorzi": "voluntary"،
"bólonthiyar ; maana hamgorídouya": "volunteer"،
"issá ; moncá ; ektiyari": "voluntry"،
"oolo": "vomit"،
"ooloon": "vomiting"،
"búth": "vote"،
"búth": "vote ; voted ; voting"،
"voucar": "voucher"،
"waada": "vow"،
"zerzobor": "vowel"،
"nuksan hámla óifaroon": "vulnerabilities"،
"komzur": "vulnerable"،
"hóoun": "vulture"،
"cúnar muk": "vulva"،
"no báñge fán mazóttú dedé norom jiníc": "wad"،
"muzzuri": "wage"،
"bilag dóri hañda": "wail"،
"keñil": "waist"،
"tíyo": "wait"،
"soñi goijjé": "waited"،
"wéithar ; hédmot gar ; hédmot goróya": "waiter"،
"soñi gorér": "waiting"،
"mes lagouya": "waitress"،
"batde ; cúçide": "waive"،
"cúçide": "waiver"،
"gúmortu tuillé": "wake"،
"tán ó": "wake up"،
"welamas": "wale"،
"Wales zaga": "Wales"،
"áñço": "walk"،
"áñiththe": "walked"،
"áñçer": "walking"،
"debal": "wall"،
"debal or góuçi": "wall clock"،
"debal diyé": "walled"،
"thiañr beg": "wallet"،
"debalor habos": "wallpaper"،
"ahuruth": "walnut"،
"monehoór": "want"،
"monehoiyé": "wanted"،
"monehoór": "wanting"،
"monehoór": "wants"،
"larái": "war"،
"daktor hánar bedh": "ward"،
"luwár ciz": "ware"،
"gudam": "warehouse"،
"kuúm kuúm gorom": "warm"،
"gormi": "warmth"،
"húñciar goijjé": "warned"،
"dhorlagoya": "warner"،
"warnín": "warning"،
"waarin": "warrant"،
"joth": "wart"،
"óoil": "was"،
"aiccíl": "was there"،
"dúu": "wash"،
"dúiye": "washed"،
"hoor dúwede micín": "washing machine"،
"Washington cóor": "Washington"،
"sáta": "waste"،
"góuçi": "watch"،
"soñi goijjé": "watched"،
"soñi gorér": "watching"،
"faní": "water"،
"fanír bag": "water bag"،
"luça": "water bodna"،
"taraing": "water fall"،
"naffúra": "water fountain"،
"gorom fanídouni": "water heater"،
"luça": "water jug"،
"hóñlafúl": "water lily"،
"tormus": "water melon"،
"fanír fáik": "water pipe"،
"hormi ák ; hormi hák": "water spinach"،
"fanír loór": "water stream"،
"fanír thaingki": "water tank"،
"fanír fathkuwa": "water well"،
"fanír zónna": "waterfall"،
"tormus": "watermelon"،
"fainná": "watery"،
"láing": "wave"،
"boiyar ot urer": "waving"،
"rasta": "way"،
"añára": "we"،
"añára lekír": "we are writing"،
"añárattu": "we have"،
"añára adorgorí": "we love"،
"añára taré adorgorí": "we love him"،
"komzur": "weak"،
"nimatura": "weak-like"،
"norom gor": "weaken"،
"niróc": "weaker"،
"komzuri": "weakness"،
"mal": "wealth"،
"tuanggor": "wealthy"،
"hátiyar": "weapon"،
"fin": "wear"،
"fin": "wear ; wore ; worn ; wearing"،
"fiñdér": "wearing"،
"hóran óiya": "weary"،
"moóusom": "weather"،
"moóusómi": "weathering"،
"zal ; nét ; mucár zal": "web"،
"wébsáith banoya": "web developer"،
"wéber": "weber"،
"wébsáith": "website"،
"kíl": "wedge"،
"Buidbar": "Wednesday"،
"kérkuñça": "weeds"،
"háfta": "week"،
"ahéri háftar": "weekend"،
"háfta ye": "weekly"،
"bosóre háfta ókkol": "weeks per year"،
"hañder": "weeping"،
"maf": "weigh"،
"maippé": "weighed"،
"uzón": "weight"،
"uzón bará ; uzón boçá": "weight gain"،
"uzón homi": "weight loss"،
"maippé": "weighted"،
"hábazába": "weird"،
"estekbal": "welcome"،
"estekbal goijjé": "welcomed"،
"join goijjá zal": "weldmesh"،
"rafáyi": "welfare"،
"bála": "well"،
"bála soler": "well under way"،
"bálaiyi": "well-being"،
"giyí": "went"،
"baárkule neeillé": "went out"،
"óoil": "were"،
"fosím": "west"،
"fosímor": "western"،
"bíza": "wet"،
"wela mas": "whale"،
"zaáñs gáñçar ful": "wharf"،
"ki": "what"،
"kiálla": "what for"،
"ziyán añí báippi": "what I thought"،
"zaáñ": "whatever"،
"giñyu": "wheat"،
"sakka": "wheel"،
"sakkadiya boiyóni": "wheelchair"،
"sakka diya sátar gadhdhá": "wheelie bin"،
"zehón": "when"،
"hoçé": "where"،
"hontú": "where from"،
"zeçé": "whereby"،
"zeçéhoéçe": "wherever"،
"ouk": "whether"،
"honnán": "which"،
"zecómot": "while"،
"yó": "whilst"،
"fakkó": "whirl"،
"wosuwasa dhál": "whisper"،
"wosuwasa dháloya": "whisperer"،
"bacímata": "whistle"،
"dóla": "white"،
"dóla budh": "whiteboard"،
"dhouk": "whitegbreasted waterhen"،
"dólagor": "whiten"،
"hon": "who"،
"zibá óibou óuk": "whoever"،
"guñça": "whole"،
"fura fémli ; fura háandan": "whole family"،
"thíya besa": "whole sale"،
"sehét óla": "wholesome"،
"zaré": "whom"،
"zar": "whose"،
"kiyá": "why"،
"kiálla no": "why don't"،
"noká mater": "why not speaking up"،
"hóraf": "wicked"،
"couça": "wide"،
"couça gorí": "widely"،
"couça ; couça gor": "widen"،
"couça ; boro ; fáarot": "wider"،
"wíjeth": "widget"،
"rari": "widow"،
"beça sára": "widowed"،
"dúñri": "widower"،
"fatári": "width"،
"bou": "wife"،
"sañsi": "wife of father's elder brother"،
"zeçú": "wife of father's younger brother"،
"mami": "wife of mother's brother"،
"nokoli sul": "wig"،
"jonggoli": "wild"،
"jonggoli ooin": "wildfire"،
"jonggoli háiyat": "wildlife"،
"saá": "will"،
"óibou": "will be"،
"bon gorá zaibou": "will be banned"،
"aiccóum": "will come"،
"goijjóum": "will do"،
"noóibou": "will not be"،
"saiyóum": "will see"،
"mon asé": "willing"،
"monká": "willingness"،
"gúrai diyat mahér": "wily"،
"zit": "win"،
"boiyar": "wind"،
"beráiya": "winding"،
"kírkiri": "window"،
"kírkiri": "windows"،
"córab": "wine"،
"suk thonimar": "wink"،
"cíthal": "winter"،
"thándha asórgoijjá dana óll": "winter affected crops"،
"sal kuáñra": "winter melon"،
"fuñsífél": "wipe"،
"tar": "wire"،
"síyol or gíra": "wire fence"،
"tarsára": "wireless"،
"buddí": "wisdom"،
"akkoli dat": "wisdom teeth"،
"buddíola": "wise"،
"azzu": "wish"،
"arzu goijjé": "wished"،
"loi": "with"،
"zardi": "with whom"،
"waapeslo": "withdraw"،
"waapesluwa": "withdrawal"،
"waapes lor": "withdrawing"،
"waapes loifélaiye": "withdrawn"،
"waapes loiyé": "withdrew"،
"dibellá inkkar goijjé": "withhold"،
"bútore": "within"،
"sára": "without"،
"forók nogorí": "without discrimination"،
"ziran sára": "without gap"،
"nam sára": "without name"،
"abazá": "without touching"،
"cóoifare": "withstand"،
"gobá": "witness"،
"gobá diyé": "witnessed"،
"zaniyóre": "wittingly"،
"húwaic": "wlllingness"،
"dhóldholár": "wobble"،
"afsús": "woe"،
"afsúsór": "woeful"،
"uth": "woke up"،
"rañgkuñir": "wolf"،
"beçi": "woman"،
"baicca dani": "womb"،
"beçiáin ókkol": "women"،
"taajub gor": "wonder"،
"ábbud": "wondered"،
"ajíib": "wonderful"،
"gas": "wood"،
"dargwá haçoya": "woodcutter"،
"gasór": "wooden"،
"gas kúiththoni faik": "woodpecker"،
"lofzó": "word"،
"CMS nezam zibá loi wébsáith banai fare": "wordpress"،
"hamgor": "work"،
"ham-buniyadi": "work-based"،
"ham goijjé": "worked"،
"ham goróya": "worker"،
"ham solar lain": "workflow"،
"hamgoróyar kuwot": "workforce"،
"hamorfóus or hédmot ókkol": "workforce services"،
"ham gorér": "working"،
"ham or fuñzá": "workload"،
"waákcóp": "workshop"،
"duniyai": "world"،
"duniyai beggúla": "worldwide"،
"lok": "worm"،
"sinta gorír ": "worried"،
"sinta ola ; sinta wala": "worried person"،
"frecani goróya": "worrier"،
"sintagoríbár": "worrisome"،
"sinta": "worry"،
"frecan ola": "worrying"،
"bicí hóraf": "worse"،
"ebaadot gor": "worship"،
"ebaadot goróya": "worshipper"،
"ebbre hóraf": "worst"،
"kimot": "worth"،
"bekar ; kimot sára": "worthless"،
"bekar manúic": "worthless people"،
"saá": "would"،
"gáa": "wound"،
"sílaiya": "woven"،
"berá": "wrap"،
"berá": "wrap ; wrapped ; wrapping"،
"berár": "wrapping"،
"gozob": "wrath"،
"báñgiza": "wreck"،
"báñggasura": "wreckage"،
"gura gara faik": "wren"،
"bolidór": "wrestle"،
"boli doijjé": "wrestled"،
"musori neel": "wriggle"،
"hoisa": "wrist"،
"átor góñçi": "wrist watch"،
"lek": "write"،
"lek: ": "write ; wrote ; written ; writing"،
"lekóya": "writer"،
"leká": "writing"،
"lekéde boóudh": "writing board"،
"leká forá": "writing reading"،
"lekéde mes": "writing table"،
"hókum noma": "writs"،
"leikká": "written"،
"golot": "wrong"،
"hórafi goróya": "wrongdoer"،
"hórafi gorá": "wrongdoing"،
"zulúm goijjé": "wronged"،
"golot gorí ; goltigorí": "wrongly"،
"sóbse hóraf": "wrost"،
"leikké": "wrote"،
"kricen or dórmogas": "x-mas"،
"x-rée fothú": "x-ray"،
"gura tin thúni óla zaáñs": "xebec"،
"ajnobi yá bidecí ré dhoroon yá nafórot goróon": "xenophobia"،
"fothu kopí goróon": "Xerox"،
"fothú sábani micín": "xerox"،
"xré ; exséra": "xray"،
"muzíki bazana": "xylophone"،
"25 nombór ór Ingilíc hórof": "Y"،
"maincór DNA't aséde jiníc": "Y-chromosome"،
"zibbat kélade fatol cór-ola buth": "yacht"،
"córr diya buth loi zibbat doon yá kúci gorí kéloon": "yachting"،
"zibbat douya": "yachtsman"،
"zongoli manúic": "yahoo"،
"keñc lambá mazór Asíar tibbet gouru": "yak"،
"Yéil sabí": "Yale"،
"hoñsu": "yam"،
"hoñsu fata": "yam leaves"،
"cékayot gor": "yammer"،
"rong bicí ói modda maredé gun": "yang"،
"Rengun - Bormár sóbse boro cóor": "Yangon"،
"játhka mari thane": "yank"،
"Amerikar uttor or manúic": "Yankee"،
"kuñir or gágguani": "yap"،
"Yaqub poikambor": "Yaqub"،
"gíra": "yard"،
"fíth haim": "yard stick"،
"hoor sílade fúta": "yarn"،
"dóla rong, gulafi rong kúcbo bicí fúl fúçede gas": "yarrow"،
"Musúlman maiya fuain muk gúroni": "yashmak"،
"Yasín súura - Quran ottú": "Yasin"،
"zaáñs arde plein or rastar lain eçé oçé óiye": "yaw"،
"dui hámba óla córr diya buth": "yawl"،
"áimma": "yawn"،
"lal gula neeledé samor biaram": "yaws"،
"gos mafa": "yd"،
"furana cokól ór you": "ye"،
"ói": "yea"،
"ói": "yeah"،
"bosór": "year"،
"bosóri jarnel kitab": "yearbook"،
"gúra/hóssor or sóo": "yearling"،
"bosór harbari": "yearly"،
"yad goré": "yearn"،
"biár arde ruthi banaibélla estemal goréde jinís.": "yeast"،
"guzor": "yell"،
"sillaiyé": "yelled"،
"guzora": "yelling"،
"óloiddá": "yellow"،
"fiñaijja yá gura faik": "yellowhammer"،
"kuñir or baiththá sinsinna guzora": "yelp"،
"Yomón": "Yemen"،
"nize álgoróya": "yeoman"،
"ói": "yes"،
"goto hailla": "yesterday"،
"agor bosór ókkol": "yesteryear"،
"aijó": "yet"،
"{Himawendha} boróf ór manúic": "yeti"،
"hamicá hora háil tákede dhebboth gas ór dhóilla gas": "yew"،
"Juan Hósthel ókkol Faathi": "YHA"،
"Yohúdi manúic": "yid"،
"Yohúdi hotá": "yiddish"،
"dóre": "yield"،
"rong myundá miala asór aséde thándha jiníc": "yin"،
"bicí kúci arde jozbat daháde asimbit hotá": "yippee"،
"Hoicca Maincór Kriccen Jomát": "YMCA"،
"siyon mur zúrah aséde sakka beráiya rosít lama niso gorí fakkáde ekkisím kélah": "yo-yo"،
"{also yobbo} gáañr gorí hoijja tuadé hoicca fua": "yob"،
"gana ré abas ahéri tulí abbar félaide": "yodel"،
"ekkisím ór sehéti worjis": "yoga"،
"doi": "yoghurt"،
"yoga masthor": "yogi"،
"gourur zuañl": "yoke"،
"gañya": "yokel"،
"andhar lali": "yolk"،
"Yohúdi ókkol ór bosóri ruza": "Yom Kippur"،
"malsáman loi hóraf rasta bái za": "yomp"،
"duré mogor daházade eddur ór bútore": "yon"،
"úu oçé": "yonder"،
"bicí agor zobana": "yore"،
"Yókcáyar ór futhin": "Yorkshire pudding"،
"yóttabaith memori": "yottabyte"،
"tui": "you"،
"tuáñra": "you (all)"،
"tuñí faribá": "you could"،
"tuñí beggín faribá": "you could  get all"،
"tuáñrtu": "you have"،
"tuñí báfit faro": "you might thínk"،
"tuáñrtu goróon saá": "you should"،
"tuñí hárr lehás ót mojbur óiba": "you will be obligated"،
"you had": "you'd"،
"you will": "you'll"،
"tui": "you're"،
"tuáñrtu": "you've"،
"nojuan": "young"،
"gura fua": "young boy"،
"jeçá": "young brother of father"،
"gura maiyafua": "young girl"،
"hoicca zíi": "young lady"،
"hoicca fua": "young man"،
"bicí cóço": "younger"،
"ebbre cóñço": "youngest"،
"tuáñr": "your"،
"tuáñr taaluk": "your contact"،
"tuáñr inpúth é uggwá forók banaibou": "your input will make a difference"،
"tuañr hósusi ; tuáñr zati": "your privacy"،
"tuáñrár": "yours"،
"tuñí nize": "yourself"،
"nojuan": "youth"،
"uggwá bicí boro guzora": "yowl"،
"bosór": "yr"،
"tuáñr": "yrs"،
"Youth Training Scheme": "YTS"،
"Cinar thiañ": "yuan"،
"gónthir dhoilla fúl fúçedé gas": "yucca"،
"ínca nafórot dhor lagai estemal goréde hotá": "yuck"،
"Yuguslavia": "Yugoslavia"،
"Kriccen or 25 tarík ór muúsom": "yule"،
"taarif arde mozar hánar taajub": "yum-yum"،
"mozadé": "yummy"،
"Yunus poikambor": "Yunus"،
"gura boc ót thiañ hamai zanedé hamgoróya elómdar": "yuppie"،
"Yusúf poikambor": "Yusuf"،
"Young Women's Kriccen Association": "YWCA"،
"become aware of it": "yían ót faiyó"،
"ahéri Rohingya hórof": "Z"،
"Zafór - aám Ruáinga maincór name": "Zafor"،
"zokát": "zakat"،
"Zomzom faní": "Zamzam"،
"ebbre ardhoilla": "zany"،
"marífél": "zap"،
"galor keñsi": "zaw"،
"jus": "zeal"،
"síasi": "zealot"،
"jusola": "zealous"،
"jusgorí": "zealously"،
"zibra gúñra": "zebra"،
"zibra-far": "zebra crossing"،
"tuariki zobana ekkán ór báfani - bicác wagáira ókkol ór taajuippa alaamot": "Zeitgeist"،
"Zen Búddhá dórmo": "Zen"،
"matátuli asman": "zenith"،
"írr írr boyar": "zephyr"،
"foóila duniyair laráit Japan e estemal goijjéde zaáns": "zeppelin"،
"sifír": "zero"،
"fúroti arde jus": "zest"،
"zétta baith": "zettabyte"،
"Zuhúr thaim": "Zhur"،
"zuhúr": "zhur"،
"behañsúra": "zigzag"،
"zillion": "zillion"،
"zínk": "zinc"،
"moza gorá": "zing"،
"Juú ókkol ór kaanun": "Zionism"،
"zíp": "zip"،
"puús ofís nombór": "zip code"،
"taaluk": "zipper"،
"gasór muzík bazana": "zither"،
"zodiák": "zodiac"،
"Zom zom faní": "Zom zom"،
"morar dóilla nira óiyede manúic": "zombie"،
"elaka": "zone"،
"bicí dómerdé": "zonked"،
"sirihána": "zoo"،
"háiwaniyat": "zoology"،
"dhoóñr cóñço gor": "zoom"،
"dhoóñr gorí saá": "zoom in"،
"cóñço gorí saá": "zoom out"،
"abodola": "zucchini"،
"Zuhúr thaim": "Zuhur thaim"،
"Zulu koum": "Zulu"،
"gaat gom nái ; gom noláger": "íll"،


};

// Split text into words and translate each word
let words = text.split(" ");
let translatedText = words.map(word => translations[word.toLowerCase()] || word).join(" ");

return translatedText;
}

</script>
