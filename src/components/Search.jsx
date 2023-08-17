import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("./searched/"+input)
        console.log(input);
    };
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input 
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                value={input}
                onBlur={submitHandler}
                />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.div`
/* margin: 0rem 20rem; */
div {
width: 80%;
margin: auto;
position: relative;
}
input {
    border: none;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 1rem;
    outline: none;
    width: 100%;
}
svg {
position: absolute;
color: white;
top: 50%;
left: 0%;
transform: translate(100%, -50%);

}
`;
export default Search;