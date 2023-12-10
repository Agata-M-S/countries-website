import axios from "axios";

const api = axios.create({baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo"})

export const config = {
  headers: {
    'X-RapidAPI-Key': 'f8ecc58742msh886faa935beb7d3p1dd9b5jsn3f91370de4aa',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  },
  params: {
    limit: 10,
    offset: 0
  }
}

// export const getAdminDivisions = ()=>{
//   return api.get("/adminDivisions", config)
//   .then((res)=>{
//     return res.data})
// }

export const getAllCountries = (id) =>{
  if (id){
    return api.get(`/countries/${id}`, config)
    .then((res)=>{
      return res.data
    })
  }
  return api.get("/countries", config)
  .then((res)=>{
    return res.data
  })
}
