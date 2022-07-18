import './App.css';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import TopBar from './TopBar';
import CardGrid from './CardGrid';



const wishList = [
  "https://www.girlfriend.com/collections/best-sellers/products/cypress-compressive-rib-paloma-bra?variant=39452417556543",
  "https://www.amazon.com/dp/B07TT9XH98/?coliid=I1UT3YIVK2KFHY&colid=3NEUDSR244ZEU&psc=1&ref_=gv_ov_lig_pi_dp",
  "https://www.amazon.com/dp/B07FF6LVMB/?coliid=I29JFZZULL49IY&colid=3NEUDSR244ZEU&psc=1&ref_=gv_ov_lig_pi_dp",
  "https://www.amazon.com/dp/B097B2HQ5R/?coliid=I1KK1PEFZV8NZA&colid=3NEUDSR244ZEU&psc=1&ref_=gv_ov_lig_pi_dp",
  "https://www.bestbuy.com/site/samsung-galaxy-watch4-aluminum-smartwatch-40mm-bt-silver/6464606.p?skuId=6464606",  
  "https://lilsimsieshop.com/collections/frontpage/products/sensitive-hoodie-black?variant=41252608508067",
  "https://www.rei.com/gift-card/purchase",
  "https://www.rei.com/product/890608/kahtoola-microspikes-traction-system?CAWELAID=120217890003774027&CAGPSPN=pla&CAAGID=103601996129&CATCI=pla-451719466267&cm_mmc=PLA_Google%7C21700000001700551_8906080006%7C92700053575996263%7CTOF%7C71700000062146909&gclid=Cj0KCQjw-4SLBhCVARIsACrhWLXzJjK63rHiJtjlO2HZCYrAlw2aJ215Z3X-84Qqc3PZeCKN9up3L-oaAiFAEALw_wcB&gclsrc=aw.ds",
  "https://selfcareisforeveryone.com/collections/sweatshirts-and-hoodies/products/i-may-cry-but-i-can-still-get-things-done-sweatshirt?variant=34190851211400",
  "https://www.girlfriend.com/products/cypress-compressive-rib-high-rise-legging?variant=39452449800255",
  "https://www.bestbuy.com/site/logitech-c922-pro-stream-webcam/5579380.p?skuId=5579380",
  "https://purple.com/pillows/purple-pillow?",
  "https://www.target.com/p/true-co-true-everybody-women-s-adjustable-strap-triangle-bra/-/A-79655096?preselect=78141517#lnk=sametab",
  "https://www.girlfriend.com/collections/r-r-collection/products/rosehip-r-r-lightweight-jogger?variant=39373289029695",
  "https://www.audible.com/ep/giftcenter",
  "https://www.amazon.com/Verilux-HappyLight-Adjustable-Brightness-Countdown/dp/B07TBCFL6B?ref_=ast_sto_dp",
  "https://www.morphe.com/collections/new-arrival-collab-palettes/products/morphe-x-jaclyn-hill-divine-neutrals",
]

function App() {
  const [data, setData] = useState([])
  const [fullLinksList, setFullLinksList] = useState([])


  const makeFullUrls = (wishList) => {
    let linkArray = [];
    let apiKey = process.env.REACT_APP_API_KEY
    const baseUrl = `https://api.linkpreview.net/?key=${apiKey}&q=`
    wishList.map((link) => {
      let newFullLink = baseUrl + link
      linkArray.push(newFullLink);
      setFullLinksList(linkArray);
    })
  }

  const fetchResults = async () => {
    const jsonArray = [];
    fullLinksList.map(async (queryLink) => {
      const linkInfoResponse = await fetch(queryLink).then(res => res.json())
      jsonArray.push(linkInfoResponse);
      setData([...jsonArray]);
    }) 
  } 

  useEffect(() => {
    makeFullUrls(wishList);
  }, [])

  useEffect(() => {
    fetchResults();
  }, [fullLinksList])


  return (
    <div className="App">

     <TopBar />

      <div className="headerText">
        <Typography>
          This application represents presents Jennifer Wagoner would be so very grateful for.
          NOTE: this application is in BETA. It currently does not support marking items purchased.
          You will need to manually communicate with family and friends to ensure no duplicates are purchased.
          This feature will be included on next year's release.
        </Typography>
      </div>
      
      {data.length !== 0 ? 
      <CardGrid data={data} />
      : 
      <p>Loading....</p>}

    </div>
  );
}

export default App;
