import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SearchBar.css';


const SearchBar = () => {

    const {setSearchTerm, setResultTitle} = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    // .focus to focus the input field in the handleClick function
    useEffect(() => searchText.current.focus(), []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // .trim => removes whitespace
        let tempSearchTerm = searchText.current.value.trim();
        // \w => find a word character 
        // \s => find a whitespace character
        //  g => perform a global match 
        //  i => perform case-insenitive matching
        if((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0){
            setSearchTerm('Book Title');
            setResultTitle('Please Enter a Book Title');
        } else {
            setSearchTerm(searchText.current.value);
        }
        navigate('/book');
     }

    return (
        <div className="search-form">
            <div className='container'>
                <div className = 'search-form-content'>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className = 'search-form-elem flex flex-sb bg-white'>
                            <input type = 'text' className = 'form-control' placeholder = 'Book Title' ref = {searchText}/>
                            <button type = 'submit' className = 'flex flex-c' onClick ={handleSubmit}>
                                <FaSearch className = 'text-purple' size={32}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar