import React, { useContext } from 'react'
import { UsersContext } from '../context/userContext';
import { AlertContext } from '../context/alertContext';
const Search =() => {

    const {displayUsers,showclrbtn,clearUsers} = useContext(UsersContext);
    const { displayAlert } = useContext(AlertContext);

    const onSubmit = (e) =>{
        e.preventDefault(); //sayfanın yenilenmesini engellemek için
        const inputBox =e.target.elements[0];
        if (inputBox.value === "") {
            displayAlert("Lütfen Kelime Giriniz","danger")
        }else{
            displayUsers(inputBox.value);
            inputBox.value="";
        }   
    }

    
    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-1">
                    <input type="text" className='form-control' placeholder='profil ara...'/>
                    <button className="btn btn-primary" type='submit'>Ara</button>
                </div>
            </form>
            {showclrbtn && <button onClick={clearUsers} className="btn btn-outline-danger btn-block">Sonuçları Temizle</button>}
        </div>
    )
    
}

export default Search