import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let jeux=[
      { id: 6, nom: "Resident Evil VII ",prix:70,info:"Editeur(s) / Développeur(s) : Capcom \nSortie France : 24 Janvier 2017\nGenre(s) : Action  |  Survival-Horror\nClassification : +18 ans\nMode(s) : Jouable en solo",
        img_profil:"http://www.residentevilfr.com/v3/wp-content/uploads/2016/06/resident_evil_7.png",img1:"http://www.journaldugamer.com/files/2017/01/Resident_Evil_7_00.jpg",img2:"http://reho.st/https://image.jeuxvideo.com/medias/146587/1465871358-1870-capture-d-ecran.jpg",
        img3:"http://www.dlcompare.fr/upload/gameimage/file/20185.jpeg"
    },
      { id: 7,nom:"ghost recon wildlands",prix:39.99,info:"Date de sortie initiale : 7 mars 2017\nGenres : Jeu de tir tactique\nConcepteur : Dominic Butler\nÉditeur : Ubisoft\nDéveloppeurs : Ubisoft Paris, Ubisoft Reflections, Ubisoft Romania, Ubisoft Annecy, Ubisoft Milan, Ubisoft Montpellier\nPlates-formes : PlayStation 4, Xbox One, Microsoft Windows",img_profil:"http://static3.gamespot.com/uploads/screen_kubrick/536/5360430/3068461-embargotrailer_ghostreconwildlands_20160525.jpg",
        img1:"https://media.playstation.com/is/image/SCEA/tom-clancys-ghost-recon-wildlands-listing-thumb-01-ps4-us-25may16?$Icon$",img2:"https://ubistatic9-a.akamaihd.net/ubicomstatic/fr-FR/global/media/GRW_SCREENSHOT_E3_2015_9_211742.jpg",img3:"https://c4.staticflickr.com/9/8344/28973846851_b2e6a4138c_z.jpg"
      },
      {
        id:8,nom:"Mount & Blade II: Bannerlord",prix:80,info:"Éditeur : TaleWorlds\nDéveloppeur : TaleWorlds\nSérie : Mount and Blade\nGenres : Action-RPG\nPlates-formes : PlayStation 4, Xbox One, Microsoft Windows",img_profil:"http://cdn4.dualshockers.com/wp-content/uploads/2016/08/MountAndBlade.jpg",img1:"http://cdn3.dualshockers.com/wp-content/uploads/2016/08/5-1.jpg",img2:"http://cdn4.dualshockers.com/wp-content/uploads/2016/08/7-1.jpg",img3:"http://cdn4.dualshockers.com/wp-content/uploads/2016/08/1-1.jpg"
      }
  ];
    let ordis = [
  { id: 1, nom: "MSI - GT80S 6QE-060FR Titan SLI HOS Edition Heroes of the Storm Noir",prix:2449,info:"18,4'' Full HD - Intel Core i7-6820HK - HDD 1 To + 2 x SSD 128 Go - RAM 32 Go - 2 x NVIDIA GeForce GTX 980M SLI 8 Go - Graveur Blu-ray - Windows 10 - Noir",
    img_profil:"http://media.ldlc.com/ld/products/00/03/41/78/LD0003417820_2.jpg",img1:"http://media.ldlc.com/ld/products/00/03/41/78/LD0003417830_2.jpg",img2:"http://media.ldlc.com/ld/products/00/03/41/78/LD0003417835_2.jpg",
    img3:"http://www.rueducommerce.fr/ordinateur/images/produits/screenshots/MSI-GT80-11.jpg"
 },
  { id: 2,nom:"LENOVO - IdeaPad 710s-13ISK - Argent",prix:719,info:"13,3'' Full HD - Intel Core i5-6200U - SSD 256 Go - RAM 4 Go - Intel HD Graphics - Windows 10 - Argent",img_profil:"http://dam-static.rueducommerce.fr/medias/a09095b5c94d338d81ea0a4d1c83e515/ideapad-710s-illu.jpg",
    img1:"http://www.laptopspirit.fr/wp-content/uploads/new/Lenovo-IdeaPad-710S-13ISK-plat.jpg",img2:"https://images.grosbill.com/imagesproduitnew/imagesgallery/BIG/306059.jpg",img3:"http://www.infovision.fr/185224-thickbox_default/lenovo-ideapad-710s-13isk-2-3ghz-i5-6200u-13-3-argent.jpg"
  },
  {
    id:3,nom:"Dell Inspiron 17 5767 ",prix:746,info:"Core i7 7500U / 2.7 GHz : Win 10 Pro 64 bits, 8 Go RAM, 1 To HDD, graveur de DVD, 17.3\" 1920 x 1080 ( Full HD ), Radeon R7 M445, Wi-Fi, Bluetooth, noir, BTP, avec 1 Year Dell Collect and Return Service",img_profil:"http://www.pc21.fr/img-prod/petit/67ED8AEC-C753-44C7-BE08-C072594DEA71.jpg",img1:"http://www.pc21.fr/img-prod/petit/A4DD4BD5-17FE-4BB0-9877-2CD54F2E63FF.jpg",img2:"http://www.pc21.fr/img-prod/petit/1D984551-7B85-4E44-B6B7-647090F5C711.jpg",img3:"http://www.pc21.fr/img-prod/petit/9D563AC1-5333-4E27-8E26-29B5D318A67C.jpg"
  },
  {
    id:4,nom:"ASUS - ROG G702VM-GC054T - Noir",prix:1469,info:"17,3'' Full HD - Intel Core i7-6700HQ - HDD 1 To + SSD 512 Go - RAM 8 Go - NVIDIA GeForce GTX 1060 6 Go - Windows 10 - Noir",img_profil:"https://www.topachat.com/boutique/img/in/in1010/in10100997/in1010099702@2x.jpg",img1:"http://cdn.comparez-malin.fr/img/asus/2016/58120be0f84140a2558b4572/asus-rog-g702-6.jpg?v6",img2:"http://www.laptopspirit.fr/wp-content/uploads/new/Asus-G702VM-GC054T-3.jpg",img3:"https://www.topachat.com/boutique/img/in/in1010/in10100997/r35.jpg"
  },
  {
    id:5,nom:"APPLE - MacBook Pro 13 - 256 Go - Gris sidéral",prix:1579,info:"13,3'' Retina IPS - Intel Core i5 (2,0 GHz) - SSD 256 Go - RAM 8 Go - Intel Iris Graphics 540 - macOS Sierra - Gris sidéral",img_profil:"https://www.topachat.com/boutique/img/in/in1010/in10101050/in1010105002@2x.jpg",
    img1:"http://media.ldlc.com/ld/products/00/02/98/37/LD0002983741_2.jpg",img2:"http://dam-static.rueducommerce.fr/medias/41bd2c8f95883b8c87a71cdd12554731/macbook-pro-2016-01.jpg",img3:"https://www.topachat.com/boutique/img/in/in1009/in10097464/r33.jpg"
  },
  
];

let chauss = [
   { id: 9, nom: "nike flyknit racer oreo",prix:160,info:"Marque: Nike\nStyle: Baskets, Chaussure active\nGamme: Homme",
    img_profil:"http://www.lesitedelasneaker.com/wp-content/images/2016/10/nike-flyknit-racer-blue-tint-white-862713-401-4.jpg",img1:"http://www.footpatrol.co.uk/templates/footpatrol.co.uk/_images//blog/_2013/Nike_Flyknit_Racer_OBL/Nike-Flyknit-Racer-OBL-2.jpg",img2:"https://images.sneakersaddict.com/images/nike-flyknit-racer-oreo-1-0-retro-01-1010x752.jpg",
    img3:"http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/nike-flyknit-racer-oreo-bait_pxwqpg.jpg"
 },
  { id: 10,nom:"AIR JORDAN XXXI",prix:200,info:"Câbles Flywire enveloppant le milieu du pied pour garantir un maintien absolu\nSemelle extérieure en caoutchouc durable et résistant\nMotifs à chevrons pour une adhérence multidirectionnelle\nÉléments de design inspirés des premières Air Jordan",img_profil:"http://www.basketusa.com/wp-content/uploads/2016/08/Jordan-XXXI-Croatie-2.jpg",
    img1:"http://www.lesitedelasneaker.com/wp-content/images/2016/10/air-jordan-31-chicago-3-1024x683.jpg",img2:"http://www.lesitedelasneaker.com/wp-content/images/2016/10/air-jordan-31-chicago-1-1024x683.jpg",img3:"http://www.youngcalifornia.com/wp-content/uploads/2016/09/air-jordan-xxxi-banned-lookbook-4.jpg"
    }
];
let panier=[];
let commentaire=[{id:1000,id_produit:1,text:"fmddlsfùsddlssùdldlmlfdlùmsfdmldùlsmsdùldùsùsldmfpf"}];
    return {ordis,chauss,jeux,panier,commentaire};
  }
}
