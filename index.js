import puppeteer from 'puppeteer'
import fetch from 'node-fetch'
import { generateTestAction } from './actionUtils/utils.js'

const getTestJson = async () => {
  const data = await fetch(
    'https://danielad37.wixsite.com/oozy-test/_functions/oozy_the_king'
  )
    .then((response) => response.json())
    .then((data) => data)
  // return data;
  return {
    pageUrl: 'http://localhost:3001/search',
    tests: [
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'search-input',
        value: '',
        time: 1625941352664,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'a',
        action: 'click',
        dataHook: '',
        value: 'Collections',
        time: 1625941354293,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'add-collection-input',
        value: '',
        time: 1625941354687,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'input',
        action: 'click',
        dataHook: 'add-collection-input',
        value: '',
        time: 1625941354912,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1625941357194,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1625941357373,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'input',
        action: 'change',
        dataHook: 'add-collection-input',
        value: 'daniel',
        time: 1625941357396,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'click',
        dataHook: 'add-collection-icon',
        time: 1625941357539,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1625941357542,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'add-collection-input',
        value: '',
        time: 1625941357587,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'input',
        action: 'click',
        dataHook: 'add-collection-input',
        value: '',
        time: 1625941357925,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1625941359307,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1625941359318,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1625941359329,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'add-collection-icon',
        time: 1625941359623,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'input',
        action: 'change',
        dataHook: 'add-collection-input',
        value: 'dbz',
        time: 1625941359769,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'svg',
        action: 'click',
        dataHook: 'add-collection-icon',
        time: 1625941359897,
        pageUrl: 'http://localhost:3001/collections'
      },
      {
        element: 'a',
        action: 'click',
        dataHook: '',
        value: 'Search Books',
        time: 1625941360830,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'search-input',
        value: '',
        time: 1625941361871,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'input',
        action: 'click',
        dataHook: 'search-input',
        value: '',
        time: 1625941362084,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'input',
        action: 'change',
        dataHook: 'search-input',
        value: 'dbz',
        time: 1625941362901,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'from-input',
        value: '',
        time: 1625941364390,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'input',
        action: 'mouseover',
        dataHook: 'to-input',
        value: '',
        time: 1625941364400,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: '',
        time: 1625941364425,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: '',
        time: 1625941364434,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'imageIcon-book-0',
        time: 1625941364705,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'imageIcon-book-0',
        time: 1625941364963,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'click',
        dataHook: 'imageIcon-book-0',
        time: 1625941365113,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'imageIcon-book-0',
        time: 1625941365389,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'select',
        action: 'mouseover',
        dataHook: 'select-book-0',
        value: 'baf2601b-2486-42fd-97d1-42b7344a4806',
        time: 1625941365459,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: 'select collection\ndaniel\ndbz',
        time: 1625941365660,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'click',
        dataHook: 'book-0',
        value: 'select collection\ndaniel\ndbz',
        time: 1625941365783,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'select',
        action: 'mouseover',
        dataHook: 'select-book-0',
        value: 'baf2601b-2486-42fd-97d1-42b7344a4806',
        time: 1625941366077,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'select',
        action: 'click',
        dataHook: 'select-book-0',
        value: 'baf2601b-2486-42fd-97d1-42b7344a4806',
        time: 1625941366190,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'select',
        action: 'change',
        dataHook: 'select-book-0',
        value: '6ac90902-0328-4084-885e-dcbed5cc2b50',
        time: 1625941367184,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-0',
        value: '',
        time: 1625941367185,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: '',
        time: 1625941367194,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'imageIcon-book-1',
        time: 1625941367207,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'imageIcon-book-1',
        time: 1625941367515,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'click',
        dataHook: 'imageIcon-book-1',
        time: 1625941367644,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'imageIcon-book-1',
        time: 1625941367876,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: 'select collection\ndaniel\ndbz',
        time: 1625941368066,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'select',
        action: 'mouseover',
        dataHook: 'select-book-1',
        value: 'baf2601b-2486-42fd-97d1-42b7344a4806',
        time: 1625941368088,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'select',
        action: 'click',
        dataHook: 'select-book-1',
        value: 'baf2601b-2486-42fd-97d1-42b7344a4806',
        time: 1625941368239,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'select',
        action: 'change',
        dataHook: 'select-book-1',
        value: '6ac90902-0328-4084-885e-dcbed5cc2b50',
        time: 1625941369310,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'svg',
        action: 'mouseover',
        dataHook: 'imageIcon-book-1',
        time: 1625941369312,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-1',
        value: '',
        time: 1625941369359,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value: 'DBZ Battle Boardgame\n\nLicensed\n\n2003\n\nComposition Notebook\n\nStephan Werfel\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 100 Pages\n\nRay Kon\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 110 Pages\n\nRay Kon\n\n2020\n\nUthingo lwenkosazana\n\nD.B.Z. Ntuli\n\n1978\n\nKuyosala izibongo\n\nJ. C. Dlamini\n\n2003\n\nUgqozi\n\nD.B.Z. Ntuli\n\n2004\n\nIthemba\n\nD.B.Z. Ntuli\n\n2004\n\nIshashalazi\n\nN. F. Mbhele\n\n1988\n\nIngcamu\n\n1989\n\nYihlathi Leli\n\nB. D. Khawula\n\n2012\n\nIdubukele\n\n1987\n\nIzimpande\n\nD.B.Z. NtuliM. Makhambeni\n\nImicibisholo\n\nD. B. Z. Ntuli\n\n1970\n\nImilando YakwaZulu (Zulu History)\n\nHubert Sishi\n\n2000\n\nIzimpande\n\nD.B.Z. NtuliMn Makhambeni\n\n1998\n\nMetal Architecture\n\nBurkhard Frohlich\n\n2003\n\nIzikhwili, izindatshana\n\nD. B. Z. Ntuli\n\n1972\n\nColoring Book and Poster Collection\n\nDragonzy ColoringDragonzy Coloring\n\n2019\n\nNgamafuphi\n\nD. B. Z. Ntuli\n\n1985\n\nLalela-ke\n\nD. B. Z. Ntuli\n\n1991\n\nIndoni yamanzi\n\nD. B. Z. Ntuli\n\n1992\n\nThe poetry of B.W. Vilakazi\n\nD. B. Z. Ntuli\n\n1984\n\nArchitektur-Details\n\n1958\n\nInduku\n\nD. B. Z. Ntuli\n\n1992\n\nImidlalo kaZakes Mda\n\nZakes Mda\n\n2002\n\nThe rainbow flute\n\nModison Salayedvwa MagagulaD. B. Z. Ntuli\n\n1997',
        time: 1625941369427,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-2',
        value: '',
        time: 1625941369438,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'book-2',
        value: '',
        time: 1625941369442,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value: 'DBZ Battle Boardgame\n\nLicensed\n\n2003\n\nComposition Notebook\n\nStephan Werfel\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 100 Pages\n\nRay Kon\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 110 Pages\n\nRay Kon\n\n2020\n\nUthingo lwenkosazana\n\nD.B.Z. Ntuli\n\n1978\n\nKuyosala izibongo\n\nJ. C. Dlamini\n\n2003\n\nUgqozi\n\nD.B.Z. Ntuli\n\n2004\n\nIthemba\n\nD.B.Z. Ntuli\n\n2004\n\nIshashalazi\n\nN. F. Mbhele\n\n1988\n\nIngcamu\n\n1989\n\nYihlathi Leli\n\nB. D. Khawula\n\n2012\n\nIdubukele\n\n1987\n\nIzimpande\n\nD.B.Z. NtuliM. Makhambeni\n\nImicibisholo\n\nD. B. Z. Ntuli\n\n1970\n\nImilando YakwaZulu (Zulu History)\n\nHubert Sishi\n\n2000\n\nIzimpande\n\nD.B.Z. NtuliMn Makhambeni\n\n1998\n\nMetal Architecture\n\nBurkhard Frohlich\n\n2003\n\nIzikhwili, izindatshana\n\nD. B. Z. Ntuli\n\n1972\n\nColoring Book and Poster Collection\n\nDragonzy ColoringDragonzy Coloring\n\n2019\n\nNgamafuphi\n\nD. B. Z. Ntuli\n\n1985\n\nLalela-ke\n\nD. B. Z. Ntuli\n\n1991\n\nIndoni yamanzi\n\nD. B. Z. Ntuli\n\n1992\n\nThe poetry of B.W. Vilakazi\n\nD. B. Z. Ntuli\n\n1984\n\nArchitektur-Details\n\n1958\n\nInduku\n\nD. B. Z. Ntuli\n\n1992\n\nImidlalo kaZakes Mda\n\nZakes Mda\n\n2002\n\nThe rainbow flute\n\nModison Salayedvwa MagagulaD. B. Z. Ntuli\n\n1997',
        time: 1625941369494,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value: 'DBZ Battle Boardgame\n\nLicensed\n\n2003\n\nComposition Notebook\n\nStephan Werfel\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 100 Pages\n\nRay Kon\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 110 Pages\n\nRay Kon\n\n2020\n\nUthingo lwenkosazana\n\nD.B.Z. Ntuli\n\n1978\n\nKuyosala izibongo\n\nJ. C. Dlamini\n\n2003\n\nUgqozi\n\nD.B.Z. Ntuli\n\n2004\n\nIthemba\n\nD.B.Z. Ntuli\n\n2004\n\nIshashalazi\n\nN. F. Mbhele\n\n1988\n\nIngcamu\n\n1989\n\nYihlathi Leli\n\nB. D. Khawula\n\n2012\n\nIdubukele\n\n1987\n\nIzimpande\n\nD.B.Z. NtuliM. Makhambeni\n\nImicibisholo\n\nD. B. Z. Ntuli\n\n1970\n\nImilando YakwaZulu (Zulu History)\n\nHubert Sishi\n\n2000\n\nIzimpande\n\nD.B.Z. NtuliMn Makhambeni\n\n1998\n\nMetal Architecture\n\nBurkhard Frohlich\n\n2003\n\nIzikhwili, izindatshana\n\nD. B. Z. Ntuli\n\n1972\n\nColoring Book and Poster Collection\n\nDragonzy ColoringDragonzy Coloring\n\n2019\n\nNgamafuphi\n\nD. B. Z. Ntuli\n\n1985\n\nLalela-ke\n\nD. B. Z. Ntuli\n\n1991\n\nIndoni yamanzi\n\nD. B. Z. Ntuli\n\n1992\n\nThe poetry of B.W. Vilakazi\n\nD. B. Z. Ntuli\n\n1984\n\nArchitektur-Details\n\n1958\n\nInduku\n\nD. B. Z. Ntuli\n\n1992\n\nImidlalo kaZakes Mda\n\nZakes Mda\n\n2002\n\nThe rainbow flute\n\nModison Salayedvwa MagagulaD. B. Z. Ntuli\n\n1997',
        time: 1625941369506,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value: 'DBZ Battle Boardgame\n\nLicensed\n\n2003\n\nComposition Notebook\n\nStephan Werfel\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 100 Pages\n\nRay Kon\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 110 Pages\n\nRay Kon\n\n2020\n\nUthingo lwenkosazana\n\nD.B.Z. Ntuli\n\n1978\n\nKuyosala izibongo\n\nJ. C. Dlamini\n\n2003\n\nUgqozi\n\nD.B.Z. Ntuli\n\n2004\n\nIthemba\n\nD.B.Z. Ntuli\n\n2004\n\nIshashalazi\n\nN. F. Mbhele\n\n1988\n\nIngcamu\n\n1989\n\nYihlathi Leli\n\nB. D. Khawula\n\n2012\n\nIdubukele\n\n1987\n\nIzimpande\n\nD.B.Z. NtuliM. Makhambeni\n\nImicibisholo\n\nD. B. Z. Ntuli\n\n1970\n\nImilando YakwaZulu (Zulu History)\n\nHubert Sishi\n\n2000\n\nIzimpande\n\nD.B.Z. NtuliMn Makhambeni\n\n1998\n\nMetal Architecture\n\nBurkhard Frohlich\n\n2003\n\nIzikhwili, izindatshana\n\nD. B. Z. Ntuli\n\n1972\n\nColoring Book and Poster Collection\n\nDragonzy ColoringDragonzy Coloring\n\n2019\n\nNgamafuphi\n\nD. B. Z. Ntuli\n\n1985\n\nLalela-ke\n\nD. B. Z. Ntuli\n\n1991\n\nIndoni yamanzi\n\nD. B. Z. Ntuli\n\n1992\n\nThe poetry of B.W. Vilakazi\n\nD. B. Z. Ntuli\n\n1984\n\nArchitektur-Details\n\n1958\n\nInduku\n\nD. B. Z. Ntuli\n\n1992\n\nImidlalo kaZakes Mda\n\nZakes Mda\n\n2002\n\nThe rainbow flute\n\nModison Salayedvwa MagagulaD. B. Z. Ntuli\n\n1997',
        time: 1625941369517,
        pageUrl: 'http://localhost:3001/search'
      },
      {
        element: 'div',
        action: 'mouseover',
        dataHook: 'all-books',
        value: 'DBZ Battle Boardgame\n\nLicensed\n\n2003\n\nComposition Notebook\n\nStephan Werfel\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 100 Pages\n\nRay Kon\n\n2020\n\nComposition Notebook : DBZ Son Goku Dragon Ball Super Z Soft Glossy Cover College Ruled Lined Pages Book for Boys 6 X 9 Inches 110 Pages\n\nRay Kon\n\n2020\n\nUthingo lwenkosazana\n\nD.B.Z. Ntuli\n\n1978\n\nKuyosala izibongo\n\nJ. C. Dlamini\n\n2003\n\nUgqozi\n\nD.B.Z. Ntuli\n\n2004\n\nIthemba\n\nD.B.Z. Ntuli\n\n2004\n\nIshashalazi\n\nN. F. Mbhele\n\n1988\n\nIngcamu\n\n1989\n\nYihlathi Leli\n\nB. D. Khawula\n\n2012\n\nIdubukele\n\n1987\n\nIzimpande\n\nD.B.Z. NtuliM. Makhambeni\n\nImicibisholo\n\nD. B. Z. Ntuli\n\n1970\n\nImilando YakwaZulu (Zulu History)\n\nHubert Sishi\n\n2000\n\nIzimpande\n\nD.B.Z. NtuliMn Makhambeni\n\n1998\n\nMetal Architecture\n\nBurkhard Frohlich\n\n2003\n\nIzikhwili, izindatshana\n\nD. B. Z. Ntuli\n\n1972\n\nColoring Book and Poster Collection\n\nDragonzy ColoringDragonzy Coloring\n\n2019\n\nNgamafuphi\n\nD. B. Z. Ntuli\n\n1985\n\nLalela-ke\n\nD. B. Z. Ntuli\n\n1991\n\nIndoni yamanzi\n\nD. B. Z. Ntuli\n\n1992\n\nThe poetry of B.W. Vilakazi\n\nD. B. Z. Ntuli\n\n1984\n\nArchitektur-Details\n\n1958\n\nInduku\n\nD. B. Z. Ntuli\n\n1992\n\nImidlalo kaZakes Mda\n\nZakes Mda\n\n2002\n\nThe rainbow flute\n\nModison Salayedvwa MagagulaD. B. Z. Ntuli\n\n1997',
        time: 1625941369528,
        pageUrl: 'http://localhost:3001/search'
      }
    ]
  }
};

(async function () {
  const { pageUrl = '', tests = [] } = await getTestJson()
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    args: [
      '--no-sandbox', // I needed these args for it to run on my machine, you probably don't need them.
      '--disable-setuid-sandbox'
      // ,'--window-size=1000,900'
    ]
  })
  try {
    console.log('Start', new Date())
    const page = await browser.newPage()
    await forLoop(tests, page, pageUrl)
    await browser.close()
    console.log('End', new Date())
  } catch (err) {
    console.log(err)
  }
})()

const forLoop = async (tests, page) => {
  for (let index = 0; index < tests.length; index++) {
    const test = tests[index]
    const nextTest = tests[index] || null

    if (nextTest) {
      console.time('start waiting ...')
      const timeToWait =
        new Date(nextTest.time - test.time).getSeconds() * 1000
      await delay(timeToWait)
      console.timeEnd('start waiting ...')
    }
    // if (page.url() !== test.pageUrl)
    //   await page.goto(test.pageUrl, { waitUntil: 'networkidle0' });
    if (index === 0) { await page.goto(test.pageUrl, { waitUntil: 'networkidle0' }) }
    const data = { page, ...test }
    await generateTestAction({ ...data })
  }
}

export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}
