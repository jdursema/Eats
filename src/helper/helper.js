import { apiKey } from './.apiKey';

export const apiFetch = async () =>{
  try {
    const initialFetch = await fetch (`https://developers.zomato.com/${apiKey}/v2.1/cities?q=denver
    `)
    const parsedData = await initialFetch.json()
    console.log(parsedData)
    }
};

export const resturantFetch = async () => {
  const initialFetch = await fetch (`https://developers.zomato.com/api/v2.1/establishments?city_id=305
  `)
  const parsedData = await initialFetch.json()
  console.log(parsedData)
}
  
