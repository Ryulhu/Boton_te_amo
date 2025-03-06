// Frases aleatorias
const phrases = [
    "te amo", "I love you", "je t'aime", "ti amo","ich liebe dich", "ai shiteru", "wo ai ni","saranghaeyo", "te dua", "te quiero", "eu te amo",
    "ik hou van jou", "ngo oi nei","01010100 01100101 00100000 01000001 01101101 01101111","- . / .- -- ---", "mi amas vin", "nakupenda", "jeg elsker dig",
    "t'estimo", "volim te", "maite zaitut", "rakastan sinua","Waan ku jeclahay", "Saya cinta padamu", "Mahal kita", "Te iubesc","Jag älskar dig", "Kocham cię",
    "Я тебя люблю", "Ndagukunda","Ndinokuda", "Szeretlek", "Ljubim te", "Jagnu", "Bengali", "Valdet","Ek het jou liefe","te dua te dashuroj","Ich hoan dich gear",
    "Ana Behibek","Qanta munani","rohangku di horohangku di ho","Namumutan ta ka","Obicham te","Chit pa de","Bon sro lanh oon","Sh'teme","Moi oiy neya","T'estim molt T'estimo",
    "Gihigugma ko ikaw","Go pyar zi","Ja volim tebe","Miluji te","Jeg elsker dig","Ik hou van jou","Mina armastan sind","Tora dust midaram","Doostat dAram",
    "Mahal ka ta","rakastan sinua","Ik zie oe geerne","Ik hald fan dei","Ta gra agam ort","Σ'αγαπο","Asavakit Gujrati","Mwen renmen'w","Ina sonki","Aloha I'a Au Oe",
    "Main Tumse Prem Karta Hoon","Wa ai lu","Nu' umi unangwa'ta","Szeretlek","Eg elska thig","Saya cinta padamu","Mahn doostaht doh-rahm","Taim i' ngra leat","Kulo tresno",
    "Naanu Ninnanu Preethisuthene","Nakupenda","Tangshin-i cho-a-yo","Ez te hezdikhem","Koi muk jao","(Ego) amo te","Es milu tevi","Bahibak","Ech hunn dech gär","Nalingi yo",
    "TAVE MYLIU","mi do prami Luo Aheri",,"SAKAM TE!","Me molas, tronca","Saya cintakan mu","Saya Cinta Kamu","Wo ai ni","me tujhashi prem karto","In Yakumech","Konoronhkwa",
    "Ayor anosh'ni","Niyakutanda","Eg elskar deg","Op Lopveop Yopuop","Mun tumaku bhala pae","Aez dae warzyn","Mujhe Tumse Muhabbat Hai","Tora dost daram","Kocham Cie","Amo-te",
    "Eu te amo","Mai taunu pyar karda","Tye-mela'ne","Te iubesc","Te Ador","Ya vas liubliu","Tvayi snihyaami","Tha gra\dh agam ort","ljubim te","Volim te","Ndinokuda",
    "Mama oyata adarei","Techihhila","lubim ta","Mama Oyata Arderyi","Naku penda","BHEBBEK","Mahal kita","Ua Here Vau Ia Oe","n^An unnaik kAthalikkinREn","MILUJI TE^",
    "Neenu ninnu pra'mistu'nnanu","Khao Raak Thoe","Ha eh bak","Seni seviyo*rum","ja tebe koKHAju","Anh ye^u em","Ik hou van je","Löfob oli","Ya te volim","Ezhele hezdege",
    "Mena Tanda Wena","Tom ho' ichema","gramo-te bue', chavalinha"

  ];

  function showRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById("phrase").textContent = phrases[randomIndex];
  }



  createDecorations();
