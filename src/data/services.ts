export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Used to select Lucide icons dynamically
}

export const servicesData: Service[] = [
  {
    id: "implanturi-dentare",
    title: "Implanturi Dentare",
    shortDesc: "Zâmbet funcțional și estetic.",
    longDesc: "Implantul dentar este soluția ideală pentru înlocuirea dinților lipsă. Lucrăm cu implanturi de înaltă calitate, din titan biocompatibil, care oferă stabilitate maximă, durabilitate pe viață și restabilesc 100% funcția masticatorie și estetica zâmbetului dumneavoastră.",
    iconName: "Stethoscope"
  },
  {
    id: "cerec-3d-cad-cam",
    title: "CEREC 3D CAD/CAM",
    shortDesc: "Coroane și fațete dentare într-o oră.",
    longDesc: "Datorită tehnologiei revoluționare CEREC CAD/CAM, putem realiza coroane dentare din ceramică integrală și fațete premium într-o singură ședință de doar o oră. Fără amprente clasice neplăcute, fără lucrări provizorii de lungă durată, cu precizie microscopică computerizată.",
    iconName: "Cpu"
  },
  {
    id: "stomatologie-copii",
    title: "Stomatologie Copii",
    shortDesc: "Tot ce este mai bun pentru copilul tău!",
    longDesc: "Pedodonția reprezintă o prioritate pentru noi. Oferim tratamente minim invazive, adaptate sensibilității celor mici, într-o atmosferă primitoare și caldă care elimină frica de dentist. De la profilaxie și sigilări, la tratarea cariilor pe dinții temporari.",
    iconName: "Baby"
  },
  {
    id: "aparate-dentare",
    title: "Aparate Dentare",
    shortDesc: "Pentru toate vârstele.",
    longDesc: "Ortodonția modernă nu mai cunoaște limite de vârstă. Corectăm anomaliile dento-maxilare și aliniem dinții folosind aparate dentare de ultimă generație (metalice, ceramice, safir sau aparate mobilizabile) pentru a obține o ocluzie funcțională și un zâmbet spectaculos.",
    iconName: "Sparkles"
  },
  {
    id: "fatete-dentare",
    title: "Fațete Dentare",
    shortDesc: "Zâmbet nou, 100% personalizat.",
    longDesc: "Fațetele dentare reprezintă secretul zâmbetelor perfecte de tip Hollywood. Aplicăm fațete ceramice ultrasubțiri (Emax) cu o precizie excepțională, corectând imperfecțiunile de formă, culoare, spațiere sau uzură ale dinților, cu o șlefuire minimă sau chiar zero (No-Prep).",
    iconName: "Sparkle"
  },
  {
    id: "coroane-dentare",
    title: "Coroane Dentare",
    shortDesc: "Calitate și durabilitate.",
    longDesc: "Atunci când un dinte este puternic afectat de carii sau traumatisme, coroanele dentare îi redau rezistența și aspectul natural. Realizăm coroane metalo-ceramice, din zirconiu premium sau ceramică integrală de o estetică impecabilă și o rezistență de lungă durată.",
    iconName: "ShieldAlert"
  },
  {
    id: "chirurgie-orala",
    title: "Chirurgie Orală",
    shortDesc: "Rezolvarea complicaţiilor dentare, ușor și fără durere.",
    longDesc: "Efectuăm intervenții chirurgicale de la cele simple (extracții dinți monoradiculari, pluriradiculari, molari de minte incluși sau semiincluși) până la intervenții complexe de sinus lift, chistectomii, frenectomii și adiții osoase. Totul se desfășoară sub anestezie completă, fără niciun disconfort.",
    iconName: "Scissors"
  },
  {
    id: "proteze-dentare",
    title: "Proteze Dentare",
    shortDesc: "Zâmbești din nou cu încredere.",
    longDesc: "Redăm bucuria de a zâmbi și de a mânca normal pacienților edentați. Realizăm o gamă largă de lucrări protetice mobile sau mobilizabile: proteze acrilice clasice, proteze scheletate ultra-rezistente, proteze Kemmeny pentru înlocuiri rapide și sisteme moderne de supraprotezare pe mini-implanturi.",
    iconName: "Heart"
  },
  {
    id: "tratament-parodontal",
    title: "Tratament Parodontal",
    shortDesc: "Dinți rezistenți și gingii sănătoase.",
    longDesc: "Parodontoza netratată duce la pierderea dinților. Diagnosticăm și tratăm afecțiunile gingivale și parodontale folosind protocoale moderne de terapie, curățare subgingivală profundă și tehnologii regenerative pentru a stabiliza dinții și a menține sănătatea țesuturilor de susținere.",
    iconName: "Activity"
  },
  {
    id: "tratament-canal",
    title: "Tratament de Canal",
    shortDesc: "100% sigur, inclusiv în afecțiuni de mare finețe.",
    longDesc: "Endodonția modernă ne permite salvarea dinților care în trecut ar fi fost extrași. Folosim digă pentru izolare sterilă, instrumentar rotativ modern, sterilizare ultrasonică și tehnici avansate de obturație tridimensională a canalelor radiculare.",
    iconName: "Wrench"
  },
  {
    id: "detartraj-ultrasunete",
    title: "Detartraj cu Ultrasunete",
    shortDesc: "Păstrează dantura sănătoasă.",
    longDesc: "Profilaxia reprezintă baza sănătății orale. Îndepărtăm eficient tartrul și placa bacteriană prin detartraj cu ultrasunete de înaltă frecvență, urmat de finisare profesională cu Air Flow și fluorizare locală pentru protecția smalțului împotriva cariilor.",
    iconName: "Layers"
  },
  {
    id: "tratament-urgenta",
    title: "Tratament Stomatologic de Urgență",
    shortDesc: "Te doare măseaua, pulsează sau ai un abces care „refuză” să treacă? În doar 30 de minute, specialiştii noștri au grijă de tine.",
    longDesc: "Durerea dentară intensă nu poate aștepta. Cabinetul nostru oferă asistență stomatologică rapidă pentru urgențe: drenaj endodontic pentru reducerea presiunii, tratamentul abceselor prin incizii și drenaj, cimentări provizorii de urgență și pansamente calmante.",
    iconName: "Clock"
  },
  {
    id: "prgf-endoret",
    title: "PRGF ENDORET Implant Dentar",
    shortDesc: "Vindecare fără durere, de 7 ori mai repede.",
    longDesc: "Suntem mândri să oferim tehnologia revoluționară PRGF (Plasma Rich in Growth Factors) - Endoret. Folosind plasma proprie a pacientului, bogată în factori de creștere, accelerăm procesul natural de vindecare osoasă și gingivală de până la 7 ori, minimizând inflamațiile, durerea post-operatorie și riscurile de respingere a implanturilor.",
    iconName: "Zap"
  },
  {
    id: "punti-dentare",
    title: "Punți Dentare",
    shortDesc: "Dacă ai unul sau mai mulți dinți lipsă, te ajutăm prin punți dentare pe implanturi!",
    longDesc: "Punțile dentare reprezintă o metodă consacrată și extrem de eficientă pentru restabilirea integrității arcadelor dentare. Realizăm punți dentare premium pe dinți naturali sau pe implanturi, folosind materiale biocompatibile de ultimă generație pentru a garanta o rezistență optimă și un aspect identic cu cel al dinților naturali.",
    iconName: "Link"
  },
  {
    id: "depistare-cancer-oral",
    title: "Depistare Cancer Oral",
    shortDesc: "Depistarea timpurie este extrem de importantă și poate salva vieți.",
    longDesc: "Cancerul oral poate evolua fără simptome clare la început. Efectuăm screening-uri detaliate și examene clinice riguroase ale mucoasei bucale pentru a depista precoce orice leziuni suspecte. Această investigație simplă și complet nedureroasă reprezintă un pas vital în prevenție.",
    iconName: "Search"
  },
  {
    id: "aparat-spark",
    title: "Aparat Dentar SPARK",
    shortDesc: "Ultima inovație în materie de gutiere de aliniere (alignere).",
    longDesc: "Sistemul SPARK reprezintă apogeul tratamentelor ortodontice invizibile. Gutierele transparente SPARK sunt realizate dintr-un material patentat inovator, TruGEN™, mult mai clar, mai confortabil și mai rezistent la pătare decât alte sisteme. Proiectate computerizat 3D pentru a vă oferi o aliniere rapidă și estetică perfectă.",
    iconName: "Eye"
  }
];
