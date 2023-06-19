import axios from 'axios';

const url = "http://proteinium.iroidtechnologies.in/api/v1/"

export const getUrl = async () => {
  const Data = await axios.post(url+'login',{'email':"shak@gmail.com",'password':"123456",'lang_id':"en",'device_token':"sss"});
  console.log("this is the api response",Data);
  return Data.data;
};