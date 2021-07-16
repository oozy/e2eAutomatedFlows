import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import { generateTestAction } from './actionUtils/utils.js';

const getTestJson = async () => {
  const data = await fetch(
    'https://danielad37.wixsite.com/oozy-test/_functions/oozy_the_king',
  )
    .then((response) => response.json())
    .then((data) => data);
  // return data;
  return {
    pageUrl: 'http://localhost:3001/search',
    tests: [
      {
        element: 'a',
        action: 'click',
        dataHook: false,
        value: 'Collections',
        time: 1626458355708,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'add-collection-input',
        value: '',
        time: 1626458356487,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'input',
        action: 'click',
        dataHook: 'add-collection-input',
        value: '',
        time: 1626458356689,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1626458358983,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'input',
        action: 'change',
        dataHook: 'add-collection-input',
        value: 'Oozy',
        time: 1626458358996,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'svg',
        action: 'click',
        dataHook: 'add-collection-icon',
        time: 1626458359119,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'add-collection-input',
        value: '',
        time: 1626458359300,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'input',
        action: 'click',
        dataHook: 'add-collection-input',
        value: '',
        time: 1626458359682,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1626458361394,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1626458362022,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'input',
        action: 'change',
        dataHook: 'add-collection-input',
        value: 'Mani',
        time: 1626458362125,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'svg',
        action: 'click',
        dataHook: 'add-collection-icon',
        time: 1626458362207,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1626458362507,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'a',
        action: 'click',
        dataHook: false,
        value: 'Search Books',
        time: 1626458363153,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'search-input',
        value: '',
        time: 1626458363652,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'input',
        action: 'click',
        dataHook: 'search-input',
        value: '',
        time: 1626458364047,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'input',
        action: 'change',
        dataHook: 'search-input',
        value: '2pac',
        time: 1626458366313,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'img',
        action: 'mouseover',
        dataHook: 'loader-spinner',
        value: '',
        time: 1626458367209,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458379785,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-4',
        value: 'select collection\nOozy\nMani',
        time: 1626458379797,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-4',
        value: 'select collection\nOozy\nMani',
        time: 1626458379799,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-5',
        value: 'select collection\nOozy\nMani',
        time: 1626458379821,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-5',
        value: 'select collection\nOozy\nMani',
        time: 1626458379823,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-6',
        value: 'select collection\nOozy\nMani',
        time: 1626458379845,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-6',
        value: 'select collection\nOozy\nMani',
        time: 1626458379847,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-7',
        value: 'select collection\nOozy\nMani',
        time: 1626458379864,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-7',
        value: 'select collection\nOozy\nMani',
        time: 1626458379866,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'mouseover',
        dataHook: 'select-book-7',
        id: 'oozy',
        value: 'Oozy',
        time: 1626458379898,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-7',
        value: 'select collection\nOozy\nMani',
        time: 1626458379931,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458380114,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-8',
        value: 'select collection\nOozy\nMani',
        time: 1626458380123,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-8',
        value: 'select collection\nOozy\nMani',
        time: 1626458380125,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458380213,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-8',
        value: 'select collection\nOozy\nMani',
        time: 1626458380448,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-8',
        value: 'select collection\nOozy\nMani',
        time: 1626458380458,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'mouseover',
        dataHook: 'select-book-8',
        id: 'oozy',
        value: 'Oozy',
        time: 1626458380516,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-8',
        value: 'select collection\nOozy\nMani',
        time: 1626458380709,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'mouseover',
        dataHook: 'select-book-8',
        id: 'oozy',
        value: 'Oozy',
        time: 1626458380967,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'click',
        dataHook: 'select-book-8',
        id: 'oozy',
        value: 'Oozy',
        time: 1626458381094,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'change',
        dataHook: 'select-book-8',
        id: 'oozy',
        value: 'Mani',
        time: 1626458383482,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-8',
        value: 'select collection\nOozy\nMani',
        time: 1626458383521,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-7',
        value: 'select collection\nOozy\nMani',
        time: 1626458383568,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-7',
        value: 'select collection\nOozy\nMani',
        time: 1626458383576,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-6',
        value: 'select collection\nOozy\nMani',
        time: 1626458383588,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-6',
        value: 'select collection\nOozy\nMani',
        time: 1626458383592,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-5',
        value: 'select collection\nOozy\nMani',
        time: 1626458383599,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-5',
        value: 'select collection\nOozy\nMani',
        time: 1626458383610,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458383611,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-4',
        value: 'select collection\nOozy\nMani',
        time: 1626458383622,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-4',
        value: 'select collection\nOozy\nMani',
        time: 1626458383625,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458383633,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-3',
        value: 'select collection\nOozy\nMani',
        time: 1626458383643,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-3',
        value: 'select collection\nOozy\nMani',
        time: 1626458383655,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-2',
        value: 'select collection\nOozy\nMani',
        time: 1626458383692,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-2',
        value: 'select collection\nOozy\nMani',
        time: 1626458383694,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458384004,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: 'select collection\nOozy\nMani',
        time: 1626458384016,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: 'select collection\nOozy\nMani',
        time: 1626458384026,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: 'select collection\nOozy\nMani',
        time: 1626458384106,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458384140,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458384152,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458384173,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: 'select collection\nOozy\nMani',
        time: 1626458384252,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: 'select collection\nOozy\nMani',
        time: 1626458384259,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458384263,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: 'select collection\nOozy\nMani',
        time: 1626458384275,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: 'select collection\nOozy\nMani',
        time: 1626458384277,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'mouseover',
        dataHook: 'select-book-1',
        id: 'oozy',
        value: 'Oozy',
        time: 1626458384680,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'click',
        dataHook: 'select-book-1',
        id: 'oozy',
        value: 'Oozy',
        time: 1626458385699,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'change',
        dataHook: 'select-book-1',
        id: 'oozy',
        value: 'Mani',
        time: 1626458387074,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: 'select collection\nOozy\nMani',
        time: 1626458387999,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458388179,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: 'select collection\nOozy\nMani',
        time: 1626458388222,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: 'select collection\nOozy\nMani',
        time: 1626458388224,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'mouseover',
        dataHook: 'select-book-0',
        id: 'oozy',
        value: 'Oozy',
        time: 1626458388595,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'click',
        dataHook: 'select-book-0',
        id: 'oozy',
        value: 'Oozy',
        time: 1626458388802,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'change',
        dataHook: 'select-book-0',
        id: 'oozy',
        value: 'Mani',
        time: 1626458390410,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: 'select collection\nOozy\nMani',
        time: 1626458390645,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458390709,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458390722,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391259,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391275,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391282,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391293,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391308,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391325,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391341,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391350,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391361,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391378,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391392,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391407,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391417,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value:
          "Dear 2pac\n\nJosh Sims\n\n1999\n\nDear 2 Pac\n\nHerbert D., Sr. Daughtry\n\n2001\n\n2pac v. Biggie\n\nEvan McGarvey\n\n2013\n\n2pac 1971-1996 Rip\n\nMiRo Publishing\n\n2020\n\nMaximum 2 Pac: The Unauthorised Biography of Tupack Shakur\n\nDarren Brooks\n\n2004\n\nTupac Shakur, (2-Pac) in the studio : the studio years (1989-1996)\n\n2Pac Lives The Death of Makaveli / The Resurrection of Tupac Amaru (Volume 1)\n\nTUPAC AMARU SHAKUR Notebook 90' Rap , 2pac the Legend, King of Rap, Notebook, Journal, Diary, Organizer, Gift\n\nArtdesign brand\n\n2020\n\nTupac Shakur\n\nJake Brown\n\n2005\n\nJesus and the Hip-Hop Prophets\n\nJohn TeterAlex Gee\n\n2003\n\nTupac assassination\n\nBond, Richard (Director)Michael Douglas Carlin\n\n2017",
        time: 1626458391429,
        pageUrl: 'http://localhost:3001/search',
      },
    ],
  };
};

(async function() {
  const { pageUrl = '', tests = [] } = await getTestJson();
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 10,
    args: [
      '--no-sandbox', // I needed these args for it to run on my machine, you probably don't need them.
      '--disable-setuid-sandbox',
      '--window-size=1000,900',
    ],
  });
  try {
    console.log('Start', new Date());
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
    });
    await forLoop(tests, page, pageUrl);
    await browser.close();
    console.log('End', new Date());
  } catch (err) {
    console.log(err);
  }
})();

const forLoop = async (tests, page) => {
  for (let index = 0; index < tests.length; index++) {
    const test = tests[index];
    const nextTest = tests[index] || null;

    if (nextTest) {
      console.time('start waiting ...');
      const timeToWait =
        new Date(nextTest.time - test.time).getSeconds() * 1000;
      await delay(timeToWait);
      console.timeEnd('start waiting ...');
    }

    if (index === 0) {
      await page.goto(test.pageUrl, { waitUntil: 'networkidle0' });
    }
    const data = { page, ...test };
    await generateTestAction({ ...data });
  }
};

export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
