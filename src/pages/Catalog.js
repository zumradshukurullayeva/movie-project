import { useParams } from "react-router";
import Jenreslist from "../components/Jenreslist";
import MovieGrid from "../components/MovieGrid";

 const MY_API_KEY = '3b62cbd3019cef6ea3bcc5ecce56c01c';

const Catalog = () => {

    const { genreid  } = useParams()

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Jenreslist />

            <MovieGrid genre={genreid}/>

            </div>
            
        </div>
    )
}

export default Catalog;