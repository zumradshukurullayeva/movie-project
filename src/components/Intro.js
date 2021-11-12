import { useState } from 'react';
import Back from '../assets/smash-3.jpg'
import styled from 'styled-components'
const MY_API_KEY = '3b62cbd3019cef6ea3bcc5ecce56c01c';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&language=en-US&include_adult=false`;
    

const BackImg = styled.div`



 height: 40vh;
 background-position: center;
 background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items:center;
justify-content: center;
`
const Input = styled.input`
width: 60%;
border: none;
color: black;
padding: 25px;
border-radius: 30px;
`
const Intro = ({ doRequest }) => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        if(e.target.value.length > 2) {
            fetch(SEARCH_API + `&query=${e.target.value}`).then(res => res.json()).then( data => {
                doRequest(data.results)
            });
        }
    };

    return (
      <BackImg className="search-page" style={{backgroundImage:`url(${Back})`}}>
          <Input type="text" placeholder="Search..." value={searchText} onChange={handleSearch} />
      </BackImg>
    );
}
  
export default Intro;