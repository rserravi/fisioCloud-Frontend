import axios from "axios";

const rootUrl = "http://localhost:3001/v1";
const customerUrl = rootUrl + "/customer";

export const addCustomer = (frmData) =>{
    console.log("frmdata en ADD CUSTOMER", frmData)
    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(customerUrl, frmData);
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    })
}

export const getAllCustomers= ()=>{

    return new Promise( async(resolve, reject)=>{
        try {

            const accessJWT = sessionStorage.getItem("accessJWT");
            if (!accessJWT){
                reject("Token not found!");
            }
            
            const res = await axios.get(customerUrl, {
                headers: {
                    Authorization :accessJWT,
                }
            });
            resolve(res.data);
            
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    })
}

export const GetCustomer = (id) =>{
   
    const url = customerUrl + "/"+id;
    //console.log("ID en GETCUSTOMER API", id, "URL:"+url)
    return new Promise( async(resolve, reject)=>{
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");
            if (!accessJWT){
                reject("Token not found!");
            }
            
            const res = await axios.get(url, {
                headers: {
                    Authorization :accessJWT,
                }
            });
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    })
}