import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if(country){
      changeableUrl = `${url}/countries/${country}`;
  }  
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(country ? changeableUrl : url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const dailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((daily) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const apiCountries = async () => {
  try {
    const {data : {countries}} = await axios.get(`${url}/countries`);
    console.log(countries);
    return countries;
  } catch (error) {
    console.log(error);
  }
};
