import { useState, useContext, useEffect, createContext} from "react";

import axios from "axios";
import {Badge} from '@shopify/polaris';
import moment from "moment";

const AppContext = createContext()
const AppProviderContext = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [data,setData]= useState([])
    let  row  = data.map(item=>[item.type,item.id,item.name,item.status?<Badge status="success">Active</Badge>:<Badge status="warning">Unactive</Badge>,moment(item.first_deliverable).format('DD MMM YYYY'),moment(item.closed).format('DD MMM YYYY')])
    const [showSkeleton, setShowSkeleton] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setShowSkeleton(!showSkeleton)
      },900)
    },[])
    const fetchData = async () =>{
        setLoading(true)
        try{
            axios.get('https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks?page=1&limit=5')
            .then((response) =>{
                setTimeout(()=>{setData(response.data) 
                      setLoading(false)},500)
                
             })
             .catch(function (error) {
                console.log(error);
              });

        
        }catch(err) {
            console.log(err)
            
        }
      
    }
    useEffect(()=>{
        fetchData()
    },[])

    return(
        <AppContext.Provider
            value={{
              showSkeleton,
                row,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export {useGlobalContext,AppProviderContext,AppContext}