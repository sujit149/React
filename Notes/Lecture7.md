import { useParams } from "react-router-dom";

useParams ===  
              is used when 
              {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }


      when we are passing this parameter in :resId in route 

      it can get that parameter dynamically using the useParams

      ex. const {resId } = useParams();

      the above is example