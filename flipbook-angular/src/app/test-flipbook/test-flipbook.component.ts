import { Component , ViewEncapsulation} from '@angular/core';
import { Book, PageType } from '@labsforge/flipbook';

@Component({
  selector: 'app-test-flipbook',
  templateUrl: './test-flipbook.component.html',
  styleUrl: './test-flipbook.component.scss',
  encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})
export class TestFlipbookComponent {

  book: Book = {
    width: 900,
      height: 600,
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
        { // start guard section
          // BACKSIDE OF FRONT COVER
          imageUrl: 'assets/flipbook-textures/leather-texture.jpeg',
          backgroundColor: '#41473A' // don't use if want to see front-cover inverted image
        },
        {
          imageUrl: '',
        }, // end guard section

        // TRANSPARENT-SHEET SECTION: ADDED AT THE BEGINNING
        { // start transparent-sheet section
          imageUrl: '../../assets/flipbook-textures/natural-paper.png',
          opacity: 1,
        },
        {
          imageUrl: 'assets/demo/blank.jpg',
          opacity: 1,
          // end transparent-sheet section
        },
        ////////////////////////////////////////////////////////////
        // START OF CONTENTS
        ///////////////////////////////////////////////////////////
        {
          imageUrl: '../../assets/flipbook-textures/old-paper-texture.webp',
        },
        {
          imageUrl: '../../assets/flipbook-textures/old-paper-texture.webp',
        },
        {
          imageUrl: '../../assets/flipbook-textures/old-paper-texture.webp',
        },
        ////////////////////////////////////////////////////////////
        // END OF CONTENTS
        ///////////////////////////////////////////////////////////
        // TRANSPARENT-SHEET SECTION: ADDED AT THE END
        { // start transparent-sheet section
          imageUrl: '../../assets/flipbook-textures/natural-paper.png',
          opacity: 1,
        },
        {
          imageUrl: 'assets/demo/blank.jpg',
          opacity: 1,
          // end transparent-sheet section
        },
        {
          // BACKSIDE OF BACK COVER
          imageUrl: 'assets/flipbook-textures/leather-texture.jpeg',
          backgroundColor: '#41473A', // don't use if want to see back-cover inverted image
        }, // end guard section
      ],
      pageWidth: 585,
      pageHeight: 780,
      startPageType: PageType.Double,
      endPageType: PageType.Double
  }

}
