import { useState, useContext, useEffect, createContext, useRef } from "react";
import axios from "axios";
import { Badge,Icon } from "@shopify/polaris";
import moment from "moment";
import {
  CodeMajor
} from '@shopify/polaris-icons';

const AppContext = createContext();
const AppProviderContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const effectRan = useRef(false)
  let row = data.map((item) => [
    <div className="task-type">
      <Icon
  source={CodeMajor}
  color="base"
/>
    <Badge>
                <div style={{ color: "#00a0ac" }}>{item.type}</div>
    </Badge>
    </div>,
    <span className="task-id">
    {item.id}
    </span>,
    <div className="task-name__container">
      <div style={{color:'#00a0ac'}}>{item.name}</div>
      <div style={{color:'#c7c5c5'}} className="task-n">{item.description}</div>
    
    </div>
    ,
    item.status ? (
      <Badge status="success" progress="complete">Active</Badge>
    ) : (
      <Badge status="warning">Unactive</Badge>
    ),
    moment(item.first_deliverable).format("DD MMM YYYY"),
    moment(item.closed).format("DD MMM YYYY"),
  ]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(!showSkeleton);
    }, 900);
  }, []);
 
  useEffect(() => {
    if(effectRan.current === false){
      const fetchData = async () => {
        console.log("djf");
        setLoading(true);
        try {
          axios
            .get(
              "https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks?page=1&limit=5"
            )
            .then((response) => {
              setTimeout(() => {
                setData(response.data);
                setLoading(false);
              }, 500);
            })
            .catch(function (error) {
              console.log(error);
            });
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
    
  return () => {
    console.log('kdfmekfkm')
    effectRan.current = true
  }
  }, []);

  return (
    <AppContext.Provider
      value={{
        showSkeleton,
        row,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { useGlobalContext, AppProviderContext, AppContext };
