export interface Procedure {
  name: string;
  details: string;
  price: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  iconName: string;
  procedures: Procedure[];
}

export const pricingData: PricingCategory[] = [
  {
    id: "consultatii",
    title: "Consultații",
    iconName: "FileText",
    procedures: [
      { name: "Consultație primară", details: "Stomatologie generală", price: "0 RON" },
      { name: "Consultație de protetică", details: "Specialitate", price: "0 RON" },
      { name: "Modele de studiu", details: "Studiu caz", price: "60 RON" },
      { name: "Tratament de urgență", details: "Drenaj endodontic, pansament calmant, cimentare provizorie", price: "150 RON" }
    ]
  },
  {
    id: "profilaxie",
    title: "Profilaxie",
    iconName: "Shield",
    procedures: [
      { name: "Detartraj cu ultrasunete", details: "Eliminare tartru și placă bacteriană (ambele arcade)", price: "255 RON" },
      { name: "Air Flow (ambele arcade)", details: "Eliminare placă bacteriană (ambele arcade)", price: "150 RON" },
      { name: "Fluorizare în cabinet", details: "Tratament chimic (o arcadă)", price: "150 RON" },
      { name: "Gutiere bruxism", details: "Gutieră individuală (o arcadă)", price: "300 RON" },
      { name: "Sigilare șanțuri și fosete", details: "Tratament chimic standard (per dinte)", price: "100 RON" }
    ]
  },
  {
    id: "pedodontie",
    title: "Pedodonție (Stomatologie Copii)",
    iconName: "Baby",
    procedures: [
      { name: "Extracție dinte temporar + anestezie", details: "Per dinte", price: "150 RON" },
      { name: "Drenaj dinte temporar", details: "Per dinte", price: "100 RON" },
      { name: "Fluorizare în cabinet, o arcadă", details: "Per arcadă", price: "150 RON" },
      { name: "Obturație compozit mică copil", details: "Per dinte", price: "100 RON" },
      { name: "Obturație compozit mare", details: "Per dinte", price: "150 RON" },
      { name: "Pulpectomie vitală + obturație copil", details: "Per dinte", price: "200 RON" }
    ]
  },
  {
    id: "endodontie",
    title: "Endodonție (Tratament de Canal)",
    iconName: "Activity",
    procedures: [
      { name: "Extirpare vitală 1 canal", details: "Izolare cu digă, aplicare diga, tratament mecanico-antiseptic", price: "150 RON" },
      { name: "Extirpare vitală 2 canale", details: "Tratament mecanico-antiseptic, sterilizare ultrasonică, tratament cu antibiotic/Ca(OH)2", price: "200 RON" },
      { name: "Extirpare vitală 3-4 canale", details: "Izolare diga, tratament mecanico-antiseptic, sterilizare ultrasonică, antibiotic/Ca(OH)2", price: "300 RON" },
      { name: "Obturație de canal (1 canal)", details: "Metoda condensării laterale la rece, aplicare digă", price: "150 RON" },
      { name: "Obturație de canal (2 canale)", details: "Metoda condensării laterale la rece, aplicare digă", price: "200 RON" },
      { name: "Obturație de canal (3-4 canale)", details: "Metoda condensării laterale la rece, aplicare digă", price: "270 RON" },
      { name: "Dezobturare cu instrumente rotative Kafile (1 canal)", details: "Tratament mecanico-antiseptic, sterilizare ultrasonică, aplicare digă", price: "200 RON" },
      { name: "Dezobturare cu instrumente rotative Kafile (2 canale)", details: "Tratament mecanico-antiseptic, sterilizare ultrasonică, aplicare digă", price: "250 RON" },
      { name: "Dezobturare cu instrumente rotative Kafile (3 canale)", details: "Tratament mecanico-antiseptic, sterilizare ultrasonică, aplicare digă", price: "340 RON" },
      { name: "Refacere pereți coronari distruși / perete + Știft", details: "Reconstrucție coronară per dinte", price: "100 RON" }
    ]
  },
  {
    id: "protetica",
    title: "Protetică",
    iconName: "Sparkles",
    procedures: [
      { name: "Coroană metalo-ceramică semifizionomică", details: "Pe suport metalic, per dinte", price: "400 RON" },
      { name: "Coroană metalo-ceramică total fizionomică", details: "Pe suport metalic, per dinte", price: "650 RON" },
      { name: "Coroană ceramică pe suport zirconiu", details: "Premium, rezistență maximă și estetică, per dinte", price: "1200 RON" },
      { name: "Coroană ceramică integral ceramică (Emax)", details: "Estetică de Hollywood, per dinte", price: "1500 RON" },
      { name: "Fațetă ceramică", details: "Premium Emax, per dinte", price: "1500 RON" },
      { name: "Coroană provizorie în cabinet", details: "Realizată direct de medicul dentist, per dinte", price: "200 RON" },
      { name: "Coroană provizorie în laborator", details: "Realizată în laboratorul tehnic, per dinte", price: "200 RON" },
      { name: "Proteză scheletată", details: "Cu sisteme speciale de menținere, per lucrare", price: "2700 RON" },
      { name: "Proteză KEMMENY", details: "Proteză provizorie mică, per dinte", price: "450 RON" },
      { name: "Proteză acrilică", details: "Totală sau parțială, per arcadă", price: "1500 RON" },
      { name: "Supraprotezare 4 mini implanturi", details: "Sistem complet cu capse/bile pentru stabilitate", price: "2.500 €" },
      { name: "Reparație proteze", details: "Recondiționare sau adăugare dinte/clemă, per lucrare", price: "400 RON" },
      { name: "Wax-Up", details: "Modelare ceară diagnostică în laborator, per dinte", price: "100 RON" },
      { name: "Mock-Up", details: "Simulare directă în cavitatea bucală, per dinte", price: "100 RON" }
    ]
  },
  {
    id: "cariilor",
    title: "Tratamentul Cariilor",
    iconName: "Smile",
    procedures: [
      { name: "Obturație compozit fotopolimerizabil mică", details: "Cariă simplă superficială, per dinte", price: "150 RON" },
      { name: "Obturație compozit fotopolimerizabil medie", details: "Cariă medie cu izolare, per dinte", price: "200 RON" },
      { name: "Obturație compozit medie cu distrucție masivă", details: "Cu bază de ciment ionomer (CI), per dinte", price: "250 RON" }
    ]
  },
  {
    id: "implantologie",
    title: "Implantologie",
    iconName: "Stethoscope",
    procedures: [
      { name: "Miniimplant cu bilă și capsă", details: "Sistem de stabilizare proteză, per implant", price: "400 €" },
      { name: "Implant Dentar Titan", details: "Bază premium biocompatibilă, per implant", price: "500 €" },
      { name: "Fast and Fixed Mandibulă (4 implanturi)", details: "Protezare imediată în aceeași zi + 4 implanturi mandibulare + proteză înșurubată + lucrare provizorie", price: "3.700 €" },
      { name: "Fast and Fixed Sistem Complet (6 implanturi)", details: "Protezare imediată în aceeași zi + 6 implanturi + proteză premium înșurubată", price: "4.700 €" }
    ]
  },
  {
    id: "chirurgie",
    title: "Chirurgie Dentară",
    iconName: "Scissors",
    procedures: [
      { name: "Frenectomie / Frenoplastie", details: "Corectare chirurgicală fren lingual/labial, per lucrare", price: "350 RON" },
      { name: "Rezecție apicală incisiv/canin", details: "Îndepărtarea vârfului rădăcinii infectate, per dinte", price: "900 RON" },
      { name: "Rezecție apicală premolar", details: "Per dinte", price: "900 RON" },
      { name: "Rezecție apicală molar", details: "Intervenție complexă, per dinte", price: "1500 RON" },
      { name: "Extracție dinte monoradicular", details: "Extracție standard cu anestezie, per dinte", price: "200 RON" },
      { name: "Extracție dinte pluriradicular", details: "Extracție complexă molar/premolar, per dinte", price: "300 RON" },
      { name: "Extracție dinte parodontic", details: "Dinte mobil afectat de parodontoză, per dinte", price: "100 RON" },
      { name: "Extracție molar de minte erupt", details: "Molar de minte vizibil pe arcadă, per dinte", price: "350 RON" },
      { name: "Extracție molar de minte semiinclus", details: "Erupt parțial în gingie, per dinte", price: "500 RON" },
      { name: "Extracție molar de minte inclus", details: "Complet inclus în os, intervenție chirurgicală complexă, per dinte", price: "700 RON" },
      { name: "Extracție canin / premolar inclus", details: "Per dinte", price: "600 RON" },
      { name: "Gingivectomie", details: "Plastie gingivală estetică, per lucrare", price: "100 RON" },
      { name: "Sinus lift", details: "Elevare membrană sinus și adiție os, per lucrare", price: "550 €" },
      { name: "Chistectomie", details: "Îndepărtarea chistului maxilar/mandibular, per lucrare", price: "450 RON" },
      { name: "Adiție de os după extracție sau chistectomie", details: "Grefă osoasă premium biocompatibilă, per lucrare", price: "100-300 €" },
      { name: "Sutură chirurgicală", details: "Aplicare fire de sutură, per lucrare", price: "100 RON" },
      { name: "Drenaj abces", details: "Eliminare secreții purulente, per lucrare", price: "100 RON" },
      { name: "Tratament alveolită", details: "Tratare inflamație post-extracțională, per dinte", price: "100 RON" },
      { name: "Incizie abces", details: "Intervenție rapidă de urgență, per lucrare", price: "100 RON" }
    ]
  },
  {
    id: "ortodontie",
    title: "Ortodonție",
    iconName: "Eye",
    procedures: [
      { name: "Plan de tratament și deviz ortodonție", details: "Analiză amănunțită radiografii și amprentă digitală, per studiu", price: "150 RON" },
      { name: "Model de studiu", details: "Modelare ghips de diagnostic, per studiu", price: "60 RON" },
      { name: "Aparat fix metalic", details: "O arcadă, per arcadă", price: "800 €" },
      { name: "Aparat fix ceramic", details: "Fizionomic premium, o arcadă, per arcadă", price: "950 €" },
      { name: "Aparat fix safir", details: "Complet invizibil din cristal, o arcadă, per arcadă", price: "1.000 €" },
      { name: "Aparat mobilizabil", details: "Pentru copii și adolescenți, o arcadă, per arcadă", price: "1200 RON" },
      { name: "Implanturi ortodontice", price: "450 RON", details: "Mini-implant de ancoraj, per implant" },
      { name: "Recimentare bracket", details: "Repoziționare și cimentare bracket detașat, per bracket", price: "70 RON" },
      { name: "Activare aparat metalic", details: "Reglaj periodic lunar, per arcadă", price: "100 RON" }
    ]
  }
];
