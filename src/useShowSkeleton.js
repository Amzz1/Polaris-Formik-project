import {useEffect,useState } from "react";


  const useShowSkeleton = () => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setShowSkeleton(!showSkeleton);
      }, 900);
    }, []);
    return [showSkeleton]
  }
  
  export default useShowSkeleton