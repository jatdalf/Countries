import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { getCountries } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const Home = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries())
    },[])

    return(
        <>            
            <CardContainer></CardContainer>
        </>
    )
}

export default Home;