import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import coverImg from '../../images/cover_not_found.jpeg';
import './BookDetails.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const URL = "https://openlibrary.org/works/"

const BookDetails = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        async function getBookDetails(){
            try{
                const response = await fetch(`${URL}${id}.json`);
                const data = await response.json();

                if(data){
                    const {description, title, covers, subject_places, subject_times, subjects} = data;
                    const newBook = {
                        description: description ? description.value : 'No description found',
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
                        subject_places: subject_places ? subject_places.join(', ') : 'No subject places found',
                        subject_times: subject_times ? subject_times.join(', ') : 'No subject items found',
                        subjects: subjects ? subjects.join(', ') : 'No subjects found'
                    }
                    setBook(newBook);
                } else {
                    setBook(null);
                }
                setLoading(false);
            }
            catch (error){
                console.log(error);
                setLoading(false);
            }
        } 
        getBookDetails();
    }, [id]);
    return (
        <div>
            <section className='book-details'>
                <div className='container'>
                    <button type ='button' className='flex flex-c back-btn' onClick={() => navigate('/book')}><FaArrowLeft size = {22}/>
                    <span className='fs-18 fw-6'>Go Back</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default BookDetails