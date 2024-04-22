import axios from "axios";
import { useState } from "react"

const useCrud = (base) => {
    const [apiData, setApiData] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    //Read Data
    const getApi = (path) =>{
        const url = `${base}${path}/`
        axios.get(url)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err));
    }   
    //Create Data
    const postApi = (path, data) =>{
        const url = `${base}${path}/`
        axios.post(url, data)
            .then(res => {
                setApiData([...apiData, res.data]);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    //Delete Data
    const deleteApi = (path, id) =>{
        const url = `${base}${path}/${id}/`
        axios.delete(url, id)
            .then(() => {
                setApiData(apiData.filter((user) => user.id!==id));
                console.log('delete success');
            })
            .catch(err => console.log(err));
    }
    //Patch Data
    const patchApi = (path, data, id) => {
        const url = `${base}${path}/${id}/`
        axios.patch(url, data)
            .then(res => {
                setApiData(apiData.map((user) => user.id===id ? res.data  : user));
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    
    return [apiData, getApi, postApi, deleteApi, patchApi];
}

export default useCrud