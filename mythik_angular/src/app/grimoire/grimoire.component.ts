import { Component, ViewEncapsulation } from '@angular/core';
import { Book, PageType } from '@labsforge/flipbook';
import { CreatureService } from '../creature/creature.service';
import { Creature } from '../model';

@Component({
  selector: 'app-grimoire',
  templateUrl: './grimoire.component.html',
  styleUrls: ['./grimoire.component.css'],
  encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})
export class GrimoireComponent {
creatures?: Creature[];
  constructor(private creatureService: CreatureService){
this.creatureService.findAll().subscribe(resp => {this.creatures = resp})
  }
  book: Book = {
      width: 900*1.2,
      height: 600*1.2,
      zoom: 0.9,
      cover: {
        front: {
          // FRONT COVER
          imageUrl: 'assets/flipbook-textures/grimoire-cover2.jpeg',
          opacity: 1
        },
        back: {
          // BACK COVER
          imageUrl: 'assets/flipbook-textures/grimoire-cover2.jpeg',
        }
      },
      pages: [
        {
          // BACKSIDE OF FRONT COVER
          imageUrl: 'assets/flipbook-textures/leather-texture.jpeg',
          backgroundColor: '#41473A' // don't use if want to see front-cover inverted image
        },
        //////////////////////////////
        // TRANSPARENT-SHEET SECTION: ADDED AT THE BEGINNING
        { // start transparent-sheet section
          imageUrl: '../../assets/flipbook-textures/natural-paper.png',
          opacity: 1
        },
        {
          imageUrl: '../../assets/flipbook-textures/natural-paper.png',
          opacity: 1,
          // end transparent-sheet section
        },
        ////////////////////////////////////////////////////////////
        // START OF CONTENTS
        ///////////////////////////////////////////////////////////
        ///// COVER PAGE ==========================
        {//SIDE A
          imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png',
        },
        {//SIDE B
          imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png',
        },
        ///// CREATURE PAGES ==========================
        //////////
        {//SIDE A
          imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
        },
        {//SIDE B CREATURE PAGE (first)
          imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
          backgroundColor: "rgba(0,0,0,0)" // /!\ NE CHANGER SAUF SI STRICTMENT NECESSAIRE
        },
        {//SIDE A CREATURE PAGE (second)
          imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
          backgroundColor: "rgba(0,0,0,0)" // /!\ NE CHANGER SAUF SI STRICTMENT NECESSAIRE
        },
        {//SIDE B
          imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
        },
        ///// FILLER PAGES ==========================
        {//SIDE A
          imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png',
        },
        {//SIDE B
          imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png',
        },
        /////
        {//SIDE A
          imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
        },
        {//SIDE B
          imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
        },
        /////
        {//SIDE A
          imageUrl: '../../assets/flipbook-textures/old-paper-texture3.png',
        },
        {//SIDE B
          imageUrl: '../../assets/flipbook-textures/old-paper-texture3.png',
        },
        {//SIDE A
          imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png',
        },
        {//SIDE B
          imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png',
        },
        /////
        {//SIDE A
          imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
        },
        {//SIDE B
          imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
        },
        /////
        ////////////////////////////////////////////////////////////
        // END OF CONTENTS
        ///////////////////////////////////////////////////////////
        // TRANSPARENT-SHEET SECTION: ADDED AT THE END
        { // start transparent-sheet section
          imageUrl: '../../assets/flipbook-textures/natural-paper.png',
          opacity: 1,
        },
        {
          imageUrl: '../../assets/flipbook-textures/natural-paper.png',
          opacity: 1,
          // end transparent-sheet section
        },
        {
          // BACKSIDE OF BACK COVER
          imageUrl: 'assets/flipbook-textures/leather-texture.jpeg',
          backgroundColor: '#41473A', // don't use if want to see back-cover inverted image
        },
      ],
      pageWidth: 585,
      pageHeight: 780,
      startPageType: PageType.Double,
      endPageType: PageType.Double
  }
}



//// ADDITIONAL CODE TO MANIPULATE DOM
setTimeout(()=>{
  // ALL PAGES EXCEPT COVERS
  let pages = document.querySelectorAll<HTMLElement>("flipbook-page .page:not(.cover)") ;
  let sheets = document.querySelectorAll<HTMLElement>("flipbook-page") ;
  for (let i = 1; i < pages.length-1; i=i+2){
    // console.log(i);
    let randomizer= 20
    let random_adjustment =  (randomizer - Math.floor(Math.random() * randomizer*2))
    for (let p=0; p <=1; p++){
      pages[i+p].style.transform ="scale(-1, 0.98)";
      // pages[i+p].innerHTML = "<div style='background:red'> PAGE NUMBER: \n\n\t " + i + "<div/>";
      pages[i+p].style.backgroundPositionY= random_adjustment +"px";
      // console.log( pages[i+p].style.getPropertyValue("background-position-y"));

      // ADD STAINS
      pages[i+p].innerHTML="<div class='stain'></div>";
      let stain = pages[i+p].querySelector(".stain") as HTMLElement;
      stain.style.opacity= `${Math.random()}`;
      stain.style.transform= `rotate(${  Math.floor(Math.random() * 360) }deg)`;
      stain.style.width= `${  Math.floor(Math.random() * 25) }%`;
      stain.style.background= `url(../../assets/flipbook-textures/stain${Math.floor(Math.random() * 5)}.png)`;
      // console.log(stain.style.background);

      // ADD MOCK CONTENTS
      if (i > 2 && i < pages.length-3){

        // let nouveauContenu = "<div><p>{{creatures[i]}}</p><img [src]='creatures[i].image'/></div>";
        // pages[i].innerHTML = nouveauContenu;

        // let iframe = document.createElement("iframe");
        // iframe.src = "creature-page-a/creature-page-a.component.html";
        // iframe.style.width = "100%";
        // iframe.style.height = "100%";

        // //pages[i].innerHTML = ""; // Efface le contenu existant
        // pages[i].appendChild(iframe);

        // skip transparent sheets (first and last pages)
       let rnd = Math.floor(Math.random() * lorem_array.length) // generate random number
       let lorem = lorem_array[rnd]; // random text
      lorem_array.splice(rnd, 1); // remove from array
      pages[i+p].innerHTML= "<div class='mocktext " + "side" + p +  "'>" + lorem + "</div>";
      }
    }
  }

  // ADD CLASS TO SPECIFIC PAGES TO SIMPLIFY CSS SELECTION
  const bookStart = sheets.length - 3 // actually corresponds to last page in DOM, excluding covers/transparent sheet
  // COVER PAGE
  const cover = sheets[sheets.length-1];
  cover.classList.add("bookCover");
  console.log(cover.getAttribute("ng-reflect-rotation"))
  // trigger event on cover rotation
  cover.addEventListener("mousemove", ()=>{
    console.log(cover.getAttribute("ng-reflect-rotation"))
    let coverRotation:any = cover.getAttribute("ng-reflect-rotation");
    if (parseInt(coverRotation) < 0){
      console.log(document.querySelector<HTMLElement>("#firewall")!);
      document.querySelector<HTMLElement>("#firewall")!.style.visibility = "visible";
    };
  })

  // FIRST PAGE
  const firstPage = sheets[bookStart];
  const firstPageFront = firstPage.querySelector<HTMLElement>(".page")!;
  firstPageFront.classList.add("first-page");
  firstPageFront.innerHTML = "<div id=firstPage>" +
  "<h1>Mythik</h1>"+
  "<h2>Grimoire</h2>"+
  "<p>Project final SOPRA2023 Groupe 1</p>" +
  "<img src='assets/loader.png'/>" +
  "</div>";
  const firstPageBack = firstPage.querySelector<HTMLElement>(".back")!;
  firstPageBack.innerHTML = ""
  // LAST PAGE
  const lastPage = sheets[2]; // excludes back cover and transparent sheet
  const lastPageFront = lastPage.querySelector<HTMLElement>(".page")!;
  lastPageFront.classList.add("first-page");
  lastPageFront.style.backgroundColor ="green !important";
  lastPageFront.innerHTML = "";
  const lastPageBack = lastPage.querySelector<HTMLElement>(".back")!;
  lastPageBack.innerHTML = "<div id=lastPage>" +
  "<div>  Est-ce que c’est bon pour vous ? </div>" +
  "<img src='assets/flipbook-textures/duck.png'/>" +
  "</div>"
}, 0 )

var lorem_array = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Volutpat lacus laoreet non curabitur. Nec dui nunc mattis enim. Nulla facilisi nullam vehicula ipsum a. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. At consectetur lorem donec massa.",
 "Habitant morbi tristique senectus et netus. Ultrices in iaculis nunc sed augue lacus viverra. Auctor neque vitae tempus quam pellentesque. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nisl purus in mollis nunc sed id semper. Varius sit amet mattis vulputate enim nulla aliquet. A diam maecenas sed enim ut sem. Leo duis ut diam quam. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Ut faucibus pulvinar elementum integer enim neque volutpat. Cum sociis natoque penatibus et magnis dis parturient. Lacus vestibulum sed arcu non odio euismod lacinia./\n Sapien pellentesque habitant morbi tristique senectus et netus. Urna neque viverra justo nec ultrices dui sapien eget mi. Curabitur vitae nunc sed velit. Dignissim suspendisse in est ante in nibh mauris. Fringilla ut morbi tincidunt augue interdum velit. Ultrices in iaculis nunc sed augue lacus viverra vitae. Eu augue ut lectus arcu bibendum at varius. Venenatis lectus magna fringilla urna.",
 " Habitant morbi tristique senectus et netus et. Cursus turpis massa tincidunt dui ut ornare. Sit amet risus nullam eget. Eu ultrices vitae auctor eu augue ut lectus arcu. Pellentesque id nibh tortor id aliquet.\n Semper feugiat nibh sed pulvinar. Congue eu consequat ac felis. Enim ut tellus elementum sagittis. Vivamus at augue eget arcu dictum varius duis. Adipiscing bibendum est ultricies integer. Tempor commodo ullamcorper a lacus.",
 " Sociis natoque penatibus et magnis. Vulputate odio ut enim blandit volutpat. Nisi lacus sed viverra tellus in hac habitasse platea. Odio morbi quis commodo odio aenean sed adipiscing. Purus in mollis nunc sed id.\n Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lorem ipsum dolor sit amet consectetur adipiscing elit. Dui accumsan sit amet nulla facilisi morbi tempus. Libero justo laoreet sit amet cursus. Elementum nisi quis eleifend quam. Facilisis gravida neque convallis a cras semper. Gravida neque convallis a cras semper auctor neque. Magna fermentum iaculis eu non diam phasellus. Est velit egestas dui id ornare arcu odio. Donec enim diam vulputate ut pharetra sit amet.",
 " Elementum pulvinar etiam non quam lacus suspendisse faucibus. In pellentesque massa placerat duis ultricies lacus sed. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend.\n Egestas sed sed risus pretium quam vulputate dignissim. Dui id ornare arcu odio ut sem nulla pharetra diam. Scelerisque viverra mauris in aliquam. Faucibus nisl tincidunt eget nullam non nisi est. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Imperdiet dui accumsan sit amet nulla facilisi morbi.",
 " Tristique risus nec feugiat in fermentum. Felis imperdiet proin fermentum leo vel orci. Et molestie ac feugiat sed. Condimentum lacinia quis vel eros donec. Integer malesuada nunc vel risus commodo. Sed elementum tempus egestas sed sed. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Id diam vel quam elementum. Venenatis a condimentum vitae sapien pellentesque. Leo integer malesuada nunc vel risus commodo viverra. Posuere morbi leo urna molestie at. Pulvinar proin gravida hendrerit lectus a. Et malesuada fames ac turpis egestas sed tempus.",
"Λορεμ ιπσθμ δολορ σιτ αμετ, ατ μεα εξερcι ιθvαρετ ρεφορμιδανσ, ανιμαλ ορνατθσ δισσεντιθντ εθ σεα. Ομνεσqθε λεγενδοσ ρεφερρεντθρ cθ vελ, νε ιισqθε αδμοδθμ δολορεσ δθο, ετ νεc διαμ σαδιπσcινγ. Θσθ εξ νθλλαμ ιγνοτα, γραεcισ επιcθρει νεγλεγεντθρ ηισ θτ, ει δθο φαcερ ζριλ σολεατ. Πρι vιvενδο ηονεστατισ αδ, μεα δεcορε ινερμισ cονcλθσιονεμqθε cθ. Ηασ τιμεαμ σινγθλισ cονσεqθατ ει, θτ μελ cλιτα cονσθλ. Ιδ πρι θτιναμ αδvερσαριθμ, εα σολθμ σολθτα δισcερε vισ, αν σεδ λοβορτισ ιντελλεγεβατ. Εθ πραεσεντ εvερτιτθρ ηασ, σθμο cετερο μινιμθμ σεα αν. Vιμ ετ ετιαμ σαλθτατθσ cορρθμπιτ. Ετ cθμ προβο περσιθσ νεγλεγεντθρ. Ατ ηασ προβο ελιτρ βλανδιτ. Μελ νε qθεμ τατιον. Μελ εα σανcτθσ σαλθτανδι δεφινιτιονεμ, vιξ αετερνο απεριαμ ιντελλεγεβατ τε, vελ vιρισ δεβιτισ ει. Vελιτ λαθδεμ βονορθμ ηισ εθ, τε λορεμ μολλισ cιvιβθσ σιτ, σεα qθοδ σενσεριτ ιν. Εστ αφφερτ cομμοδο μεδιοcρεμ αν. ",
"Προ λιβερ δετερρθισσετ αδ, ιν σιτ cαθσαε ιριθρε αccθσατα. Ιθσ θτ qθανδο σcριπτορεμ, εθριπιδισ περτιναcια vολθπταρια cθμ cθ. Cονγθε σανcτθσ λιβεραvισσε ιδ ιθσ, vολθτπατ ηονεστατισ ετ νεc. Θτ φεθγαιτ τραcτατοσ εθμ, θτ ιθσ αμετ πετεντιθμ, μαλισ νοστρθδ ηασ αν. Πθτεντ ηαβεμθσ μελ ετ, δετραcτο μνεσαρcηθμ νο cθμ, μοδο ιδqθε νοστρθμ vισ ιδ.Σεδ cθ vθλπθτατε vολθπταρια, τε διαμ δετερρθισσετ cονσεcτετθερ μεα, νθσqθαμ σαδιπσcινγ vιμ εθ. Εqθιδεμ δελεcτθσ λεγενδοσ νο προ. Δολορ qθανδο ιντερπρεταρισ εθ vελ. Νοστρο τορqθατοσ ετ qθο, γραεcο νεμορε ασσεντιορ qθι νε, ιθσ θλλθμ φαcετε ρεφορμιδανσ εξ. Ηαβεο εξερcι αccθσαμθσ θτ θσθ, λαθδεμ ιθδιcαβιτ vιμ ιν. Προπριαε ομνεσqθε νεc ετ, ποσσε λιβερ μεα ιν, προβο cοτιδιεqθε vιξ ατ.",
"Ηισ αμετ νοστρο εα. Εθ φερρι νοστρθμ ποσιδονιθμ ηισ, αδ εθμ ιραcθνδια ιντερπρεταρισ. Ομνεσ τιμεαμ cοτιδιεqθε εξ περ. Αδηθc τατιον τεμπορ δθο αδ, μθνερε μεντιτθμ εξ σεδ. Ορνατθσ νομιναvι εα qθο, ταλε vιδε ιμπεδιτ qθι εα. Σθμο πορρο περτιναcια ετ qθι, τε ιλλθμ μαλθισσετ εαμ, εραντ σcριπτορεμ θτ προ. Ιλλθμ δεβιτισ θτ vελ. Cιβο νεμορε σεα τε, ιδ cορπορα ιθδιcαβιτ ηασ, εθ προ θτιναμ μθcιθσ ινιμιcθσ. Ταντασ ινιμιcθσ vελ θτ. Εαμ νο περσιθσ πετεντιθμ. Vισ λεγιμθσ νονθμεσ cονcλθδατθρqθε νο, δθο εθ ωισι δετραξιτ φορενσιβθσ, ει cθμ μινιμ ινσολενσ. Θτ ετιαμ cονστιτθτο δελιcατισσιμι εαμ. Αν θσθ διcθντ σανcτθσ σαπερετ, cθμ cθ διcατ οβλιqθε σαλθτανδι, προ ετ νοβισ λαθδεμ. Vιξ διcαντ ινσολενσ ετ, νο αλιι λιβρισ vιμ, ιδ vιξ λιβρισ vολθμθσ αλβθcιθσ. Εθ δθο σθμο ηομερο λιβρισ, μθνερε θτροqθε περφεcτο ει σεα. Εξ ιθvαρετ αλιqθαμ αccθσαμθσ περ, δθο εα δολορθμ δελενιτι προδεσσετ.",
"Μει λθδθσ λαβορε τιμεαμ θτ. Ποπθλο βλανδιτ cονσθλατθ ατ vιξ, προβατθσ cονσεqθατ αδ νεc, ερατ δελεcτθσ ρεφορμιδανσ qθι νο. Εξ vιδιτ σθμμο δολορ vιμ, ηομερο ινσολενσ cθ ηισ, δθο ιν ηαβεο λεγιμθσ επιcθρι. Νοστρο vοcεντ τε μεα, νο ηαρθμ πθταντ λαβορεσ εαμ. Δθο ταλε αγαμ λεγιμθσ θτ, αμετ προβο αccθσαμ τε προ. Vερι θβιqθε αλιqθαμ vελ εξ. Ει ιπσθμ παθλο μεντιτθμ εοσ. Cασε σαλε vιτθπερατα εστ εα, σεα γθβεργρεν ινcορρθπτε.",
"լոռեմ իպսում դոլոռ սիթ ամեթ, ունում ռեքուե մնեսառծհում քուո եխ, ագամ ինսթռուծթիոռ պռի իդ. սիմուլ ոմիթթամ եխպլիծառի նեծ նե. սապիենթեմ ծոռռումպիթ ծոնսթիթուամ եու պռի, թե պռի սադիպսծինգ պեռսեքուեռիս. թե նեծ ալիենում ծոնծեպթամ, ան եսթ դեթռածթո մենանդռի սծռիպսեռիթ. լիբեռ հառում ելոքուենթիամ նե սիթ, լաբիթուռ վիվենդո գլոռիաթուռ եթ եում. նո մոդո ինանի ուսու. իուսթո ապպառեաթ ածծոմմոդառե եամ նո, նամ եու նոսթեռ վեռեառ իմպեթուս. մել եթ սիմիլիքուե ծոնսեքուունթուռ մեդիոծռիթաթեմ, քուի ան դիծթաս մեդիոծռեմ, իդ նամ ֆեուգիաթ ինսթռուծթիոռ. եու պոսթեա ինիմիծուս թհեոպհռասթուս նեծ. եա թռիթանի ծոնսեթեթուռ դուո.",
"իուվառեթ անծիլլաե ադ մեա, ալիքուիպ ռեպուդիառե նե ուսու. իդ քուո ադհուծ ուռբանիթաս. ան ծոնգուե ֆուիսսեթ եոս, նամ ութ ինեռմիս պռոբաթուս. սալութանդի ինթելլեգեբաթ հաս ծու. թե պեռ սաեպե ֆածիլիսիս սուսծիպիանթուռ, մել թե հոմեռո աեթեռնո. մել ութ դենիքուե ինդոծթում, աթ սուսծիպիթ ոմիթթանթուռ սեդ, ան հաս նոմինաթի քուաեսթիո պառթիենդո. ուռբանիթաս դեֆինիեբաս քուո եու, դոմինգ պռոբաթուս պեթենթիում հիս ին, լոռեմ ծհոռո քուանդո իդ նամ. մեի դիծթա սինգուլիս ան. ան պեռ ֆուգիթ ինթելլեգաթ դեֆինիթիոնես. վիմ նո թռիթանի ծոռռումպիթ, ոռաթիո դելենիթ դիսսենթիունթ ին մել. մինիմ ռեծթեքուե ռեֆոռմիդանս նե մեա. պռի աթոմոռում պոսիդոնիում ծու. եա նոնումես ֆոռենսիբուս վիս, սեդ եու ծաուսաե քուաեսթիո. նամ մագնա ինեռմիս ադիպիսծի եխ, եսթ սումո լոռեմ ածծուսամուս թե, նիհիլ դիծթաս դեթռախիթ դուո եթ. պեռ ադ թիբիքուե դեթռախիթ, աթ վիմ վեռո մոլեսթիե լաբոռամուս. ութ եում վիդե ծոնսուլաթու վիթուպեռաթոռիբուս. նամ նո թածիմաթես գլոռիաթուռ. եխ լաբիթուռ լուպթաթում վիս, ութ ոմնիս դելիծաթա մել.",
"ծու եռանթ ֆիեռենթ պեռծիպիթուռ հիս, աթ իուս ռեքուե սինգուլիս դիգնիսսիմ, ադ ալթեռում ոֆֆիծիիս ռեֆոռմիդանս եում. ալիքուամ դելեծթուս նեծ ան, ան դիծիթ հաբեմուս դոծենդի սիթ. մել ադ թեմպոռ ապպառեաթ. պռի գռաեծի պոսիդոնիում եթ, ծում վոլուպթուա ծոմպլեծթիթուռ ան, սոլութա ֆածիլիս ասսենթիոռ ուսու ին. մագնա վիռթութե եուիսմոդ պռի եա, ադ հաս իդքուե ֆաբուլաս վիվենդո. ութ հինծ պռոբո եքուիդեմ ուսու, իդ նիբհ եռոս ածծուսամ մեա, եռուդիթի պլածեռաթ եամ իդ. պոնդեռում ածծուսաթա սեդ թե, եում եռուդիթի իմպեդիթ մելիոռե եա, դիծո քուաս եու եում. եռոս նեգլեգենթուռ մել եու, թեմպոռիբուս ծոմպլեծթիթուռ եա մեա. եոս քուոդսի թոռքուաթոս եու, ելիթռ մոլլիս աեթեռնո պեռ նո, ան սինթ իուդիծո իուս. ծլիթա սծաեվոլա ինսոլենս նե եում. ֆուգիթ ռեգիոնե ոմիթթամ ադ վել, եպիծուռի մենանդռի եսթ իդ. իուսթո իռածունդիա դեմոծռիթում թե հաս. ութ հաբեո իպսում իուվառեթ ուսու, մոդո եռոս մնեսառծհում թե սեա.",
"եի ուսու վիդե լիբռիս սծռիբենթուռ. մեա քուաեքուե ռեպուդիառե պռոդեսսեթ ծու. դոլոռ վիվենդում ան սեա, եում նո ֆուիսսեթ դեսեռունթ. աթ եամ դեծոռե պեռպեթուա, պոռռո պեռիծուլիս դիսսենթիունթ դուո թե, մել ութ պառթեմ վոլուպթաթում ծոնծլուսիոնեմքուե. նո մել վոծենթ ապեռիամ ինեռմիս, նո վիխ ոմնիում թածիմաթես, պռո ան հաբեո ֆեուգաիթ. իդ պռո ոպթիոն սծռիպթա, ալիի վիվենդո ադ վել, դուո եի ոդիո ուբիքուե ոֆֆենդիթ. մեի ադ իլլում սալութաթուս թեմպոռիբուս. մեի ադ դիծիթ իուդիծաբիթ սուսծիպիանթուռ. ան ջուսթո լաբոռե ալիքուիդ.",
"禄風成記最本変止旨浩携巻探。記用禁下転組禁効特者以細好押。戻審乗所断社外族米在夜指岡月入並室裏申。減際年掲弟方変見道糖前換棋作古特著祐果。九細見出図入者沈世行催強世取東記自人空長。人情関給毎際期遠聴鳴川続神賞。体当提南役沢覧暮学響度療形国小。打安社周健株強中問形和京願通鶏産済族方。歩陵参田相阪経彰辺害平制。文問情提品武所身裁道覧将室読者南毎半風襲。間新針薬前真写統犯商岐層物余。今向陣国均戒佐妙止済圧額指万触。容開年前策高氷城必真窓異。抑直眺間産人事落性会及上中均末意。候言政虫考転好合級羽無線下。初員間村会響日選機殴世組併考選茶佐必夕。程隣春本周質党涯意気記建惑化。円間規清社発必以受査監企案気別掲子光。 申小天幹記柴敵的周覧著険理新各否。唯球環第切困能展幕鈴兵売読系盗伴解。土戦導極属裁止稿色母兵内止著言針債役。野論面戦選党際未返力無急里色住京業読済。加決栄連達記作欲顔職点添算知西株転合。念得別暮曜直件発合代広少句必割。索院読消六編他後悔慮校雲終隆速出伝個。索差信展昨毎需回発形高必件者。勤夕産水稿覧協近写禁胚長上言分。 北回園記遠芸本応治方竹治玲載入子健。刊幼投低指会秘苦相郎全選新真工断毎障方。国定東勧際来師和沼般事出品。最動覧文貧禁杯行家誌違腕削。芸新隊受直層速経経生舎新時導会。然読更勝通雪返的数肇供所乳必。員万載必力及年出用活下楽。戦肉必利央中応備化横置右事目。華載転断西下登成首音集阿監接認村型東広。筆題題読少余者合賢女夏経必美。",
"省進長可由観報仕完投守況。灰説今文面係囲週属門決方割。水務紀久大根益沖庭後当確判取。年成献副聞碑式茨弔公捕退。総止踊毛公謙運分米日治念職前石芸月改周長。件覧掲自詳責情部厘正同法。何職陽渡茶造住神死催億校団。写分様岡茨役容盟済中社済家。子歳田経中受民川漏稿夜図月。際民転総円界能基王玲銀実関。区根刊気重金校芸能約新安祭。毎多業断聞長故相有道大内戻落書芸会。形前西害覧区民朝人引代女詳紙条。遺能掲治負月藤掲江王総後過子材。守属特敵肉能欠切港番利救出省胆需西刊民征。本面毎購週情候胸紙成表宿切案共小掲。画務応女国演印一率手載秀。行並断月信係権身意医合容。毎動破身励望文勝諌請妻社無体聞。正伊供載止句芸港割毎係相走約査前生徳育利。繁区限強現券外津表転動任実棋兜出業録政。著決道絡密稿会戦無自回抽査試致強。医社覧転明準知観金属優釧約古合景。的合刊講降告毎界外婚輸左。条照本集中右聞規仲英携告勢。銀会特際境太資野権欠量演人新川。時揚回川内辞担狙通判型栄着誇。圧転納流部書略嘘使期愛円写局平住真率投透。震局判棋介電有入持帯堺左合。考未今了工雪止一烹態開責。仁安導府聖応者様済惑戻陵結済夜後行。暮名婦与下和朝発目竹言奈属焼切。竹防権攻中術報記季順利命地納正見。会曙相染大質造大投暮隣日米水存海自投星。府至連碁資降込平上転考議。刻憲審鎌訪覇授外開順価済。類普若穂外金得雑番事度委。資生載断真聴仮幅処後片誉無。転顧棋送野際聞造史賛判名選芸。洋今転提鹿朝岩紹朝都詳話獲料立外権法女医。",
"季掲半意内善掲性問写日立。枚象主夏禁揺著在氏汚連念読務。指済替浮高調場碁改化児示稿幸読際年止人。里鋭奮玉芸供無定覧導要毎近損米法響失吉。製測地帯権点去陳援連武右。請今特院万就前了情安野閣検参紙。同陛化会置落明五体鈴現利交禁幸政表者算合。写政届場験録旅業暮宮氏放支価理情載通康。準供度江力悲世資画青戦禁場追影加運提渡対。全能車未文月旧辺録真調国級事中泳藤。際政職国早外著埋彦懲月異売暮差。義屋帰治問玲少安再戦持歌目給。毎掲起情仕安初観選能部裁豊待民置強芸心族。福加例社読躊身引撤師企本測戒地世古話。信示大成事情女刊厳頭祭敬全沼体実自科難。理前賀字然護相和動原供掲理稿述入力前。北政翼子術青装拓政薬生断球断判。業藤描井学展弁松重南問更麻美",
"働並スろり過値れ未応書ヌヱサ勝多どやひ技特るぐけ年作ネ澤思載ノツウニ工図オ連起テ部書ノフ情玲念ドかー更導げぱ患上ろリ稿優シ実生らぽ害発逮久些けね。市き銀作ずぱぴお荷載寄じけ式講ウワセム輪作ケ局全ヒレ連仕ょ文近ぜド首綱老び都今ッゃ。輩コセイ思五いか下品イ周想効ミラニ臓任テフマハ夫閣ぶざゆく倉江べざず針視セクマロ経知容検サ要込津装に。重写きら満際ハヲマ長咋投ヒキ外沖げろッ語提碁う液豊ヘエ朗島カテ遺信ナヱ区川ドれク白族クざ文証五成クノ早門は無進誕ぜひ細政田働ざのめト。体ッずな入八車だわ済偉塔履捕レチフ若宮まい世支る豪他スヒコノ倒本は国小男シア旅須き込政チクタロ性書かぴけば筋子ヨケ京実ヒユロ写企範へルょ刊樹幕浩よぴ。",
" 田タ出異くてめぐ著後み特孝テ渡京行ラレへそ主由京る未出えべクこ経応を稼匂内わくろえ女飛ルメセサ育博及司深ぞ。要泉告チ軒続ド白初意えべしり楽川土ユワヨ失辞いで団界稿コスモセ供写こゅげ治価モ車努禁シ兵残ぜずクそ再鉄ぼレぐ患漏頂交ぽ。庭ラえやか謙皇ヤノヌス島春ヌ人人ンぶ人化ハ今政こンわぐ教担ヨト表替レ総相ヲ今雑ヌミテ軟健マテツ属剛さ券聴う。 万こをつっ生問ろ済労スンえぜ論告れべいま受京フユテス世年ナワオ之化らぱ残塁ざきん画北ネミア屋倶宰挿栖年めぞ禁実挙計や形的ヘ汗員へぼ際普えはゆ。可ツヘマ作事アホフ海問客いー要雇図ル済結加タラ際起ルーぞと無境ノマ来早前国がべど稿季最練ょッ。展チホツ亡社訪は波準セチイ整連リツメヤ持然どごト圏見午や一将ニシル何割カメチ野一すぼ図後ゆンへ情景ツヱ記国レコヲ脱村浮絵ぎぶゃ。村テ前日ノタ拠全禁ワモ教車せょ倍村逮めッほリ険止ぴびうき次労メ定去るざえ堂加れちト拡女禁観ドびね稿年仁借ざり。船り気口メ堀球そおぐ確指レウヘマ東限チ中改レラ応量物や元楽ケコク日走ざて逃准ぱして経消コキク放理執ノヘ講県挑リレセミ農話むべ中圧しリ年悩織兄ぽもむぐ。",
"建ゆび発乳ヒユ員問ヤウケ本囲アルニ少政レツロフ金航質チ観認告残ケウ打成無ぞも紙子ヘワタリ丸前ケラヘキ選決セコ込報エナヌ期当ぼ接電づひ首妹廷護測ょ。幸カ伝面タ宮教えラ店督ぞ秋数探メ指転功広ら排企フナミマ報全た報破持じを並下右ネキ駅曜ひばク。危ぐイなゅ知近フすきま情手ルひた心済けつ来署む中社たやげは安新ちまよず義善すべッ脱際げ情研逃づふば。 意用こむえめ問調マ市勝ろ断本ホ京父所企ぞざ断内き異解ラレイワ画線ラぞび戦知択トヒス万定設イにぶか応稿哥因セ売週火違反ゃ。願ん急配ラアニメ県正ケア例竹シ賞仲ルレウヱ想全む側説んひ審高便ねかんス署鉄ツエセ温獲ねらぱざ数同リえ紹後ユ課道ぐこ兆企ごふで之学妻阜倶ぴめる。 私たぶだぼ局印ハ図佐エウタヱ市再発並ねひ解国ワ楽統トリフ無業ヘホソ海個ヤレイヲ産多こっゅン教連青省トだうん。投ホメエナ属毎関ぞぽ旅法スるらば容生ごく東情ロキ言教ふ奪人モテト備録ーづぶ暮軽健につどふ九活いれ題投ぴぞぶ説休サチヨレ郎芸ンリさや全本ラヌ覚語っじ補重だ行上扱息レぞ。天ルメヌリ詳聞ニホワカ号遊知意並捜ホコネウ争東はぼ文来寿がめこ議会ぜょラん通協サツヒス定拡フマヌ化客販正で。",
"象候ハセ島初ひがほつ辞速ンーり図田キ気選めで盗応ょぐク図時ヱコツ作社ニ氷一ぴドイが治取サトソテ子新スフレマ続怠殊ちくが。夕飾なつさ万季シチ確噴やたね事忠ッ動済す催護ラセ法旧東成とすラ圧思ネソ聞世ょねづせ政改ラ得港防青種るふじか。住サ演謙分クンおん組療ロタナハ箱精ら施終ワフ際験ぱび制産療こわの隠楽ホウオ示課海ぞぶ草会作べわンう大初儀レに材卒ホケサス全明ふだ。断付ぼ終井しずもわ因慮トケア集多み事暮ロウ劣事つく常界掲起ヘツ場議マチヱケ来歓血貢らょ。器ヘハ阪新ゅびほイ持学が宿社よちね月恐ぼ及連西フ覧者ろち健戦ちい碁止ムヌタマ権扱ラ繰君サ際世ぽぶぱれ治告よごち界点医ルち ゃ作禁対否ぼ業捜げねく。書与スソリヒ難最るレばッ機気ケホ暮門ロコミ存米国どぴぱ材愛ウニ球議コネシ以転むし公喜スレサマ説前ラホタ路留好術びぐひ。",
"강화조약. 국가는 대외무역을 육성하며. 종교와 정치는 분리된다. 헌법재판소에서 법률의 위헌결정. 헌법재판소에서 법률의 위헌결정, 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 사형을 선고한 경우에는 그러하지 아니하다. 국가는 모성의 보호를 위하여 노력하여야 한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 국무회의는 대통령·국무총리와 인 이상 인 이하의 국무위원으로 구성한다. 대한민국은 민주공화국이다. 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 정당은 헌법재판소의 심판에 의하여 해산된다, 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 정당의 설립은 자유이며, 대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다.",
"재판관은 대통령이 임명한다, 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다. 행정각부의 설치·조직과 직무범위는 법률로 정한다, 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다, 공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 대통령의 선거에 관한 사항은 법률로 정한다.",
"제항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 대통령은 즉시 이를 공포하여야 한다. 일반사면을 명하려면 국회의 동의를 얻어야 한다, 균등한 기회가 보장되어야 한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 모든 국민은 고문을 받지 아니하며. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다.",
"대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 일 이내에 후임자를 선거한다. 국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 제항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 정기회의 회기는 일을. 사회적 특수계급의 제도는 인정되지 아니하며. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 중임할 수 없다.",
"حادثة العالم ان إيو. أمّا الشرق، العالمية مكن ما, بـ قام كنقطة اللازمة. انه عل جسيمة عالمية الرئيسية.للسيطرة والفرنسي و أسر. أضف ودول الشتاء الخاطفة مع, شرسة الفرنسي ٣٠ تحت. عل تنفّس بقيادة لها, عن يكن سكان بزمام مقاطعة. ما ولم الولايات الإتفاقية.مع فسقط أدنى الاندونيسية ضرب, تم ذلك فرنسية واُسدل, فعل تمهيد الأراضي هو. بحث وعُرفت التاريخ، المتاخمة من, جمعت والنرويج تعد أن. سقطت أمّا أطراف ما تحت, كل إيو تعداد النزاع. كل لغزو بالحرب التكاليف على. شمال إعلان رجوعهم فصل لم, حول عملية التجارية ثم, حاول القوى السيطرة إيو عل.",
"قد لكل بفرض أحكم الوزراء. الخاسر الإحتفاظ مع بال, دون هو لعدم الفرنسي الشّعبين. الى رئيس محاولات وبالتحديد، هو, جُل ان ٢٠٠٤ أوروبا استدعى, تحت أي وإقامة السيطرة. تحرّك سليمان، للإتحاد بـ الا. دفّة الشتاء انه من, في وقوعها، والإتحاد كلا. الى ٣٠ بقعة ارتكبها الثقيلة, مكن ووصف وحلفاؤها أن, الا لعدم العالم، بالمحور من.",
"ذلك أمدها اسبوعين إذ, الحكم اليابان، ما حدى. والكساد بالسيطرة المؤلّفة أما في, وتم كل يذكر شدّت وصافرات. و بتحدّي العمليات بحث, ثم بتخصيص الأراضي وباستثناء لكل. الساحل مسؤولية هو جُل, إيو عل اللا لأداء.به، حقول كردة حكومة ٣٠. بالرّد انتباه المبرمة أما كل, عُقر جزيرتي نفس بـ. عرض إبّان بالمحور بل, عن جهة لعدم لمحاكم والفرنسي, شيء للأراضي وبريطانيا مع. واحدة اوروبا من عرض, هامش وبولندا والروسية يتم أي.",
"تسمّى ليركز وحلفاؤها بعض كل, حصدت وسوء لبولندا، عل بعد, عل قام والنرويج بريطانيا-فرنسا. لمّ إنطلاق مواقعها بل, شيء ثم شواطيء وبولندا تزامناً, لها بسبب وكسبت عن. بها بينما الإقتصادي ان, من غير دفّة فشكّل. غير فهرست وحرمان بمباركة و, كل صفحة قررت دون. هو صفحة جسيمة ومن. و سليمان، المتاخمة المشتّتون دنو, لم الخارجية الأمريكية هذا.","","لم تلك طوكيو الأخذ الأرضية. و جُل إعادة المضي وبعدما. أمّا الأوضاع بل بها, في لكون بمعارضة تحت. تطوير مشروط البرية وفي بل, إذ واُسدل للسيطرة تزامناً فصل, أي أوزار مهمّات فصل.",
"شيء ٣٠ بولندا، الكونجرس استطاعوا. لغزو والديون تم كلا, ما حين تمهيد الأرض واقتصار. جزيرتي وتنصيب الا لم. السادس بمحاولة تلك أم. و لكل الصفحات وباستثناء, ٣٠ الأوروبية ويكيبيديا، هذه.٢٠٠٤ الذود أن بحث. إعلان يتبقّ الخارجية قد غير, انتباه الأرواح ضرب ثم. جدول وقبل العالمية في حيث. بقصف حلّت بل كان, مكن هو إعلان مقاومة, بعد لم وبعد أسابيع ا."]
