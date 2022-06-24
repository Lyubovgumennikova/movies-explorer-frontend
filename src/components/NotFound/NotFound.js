import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewInput from '../NewInput/NewInput'
import "./NotFound.css"

// const FOPM_STYLES = {

// }

function NotFound() {
  let navigate = useNavigate();
    return (
        <div className='notFound'>
            <h1 className='notFound__title'>404</h1>
            <p className='notFound__subtitle'>Страница не найдена</p>
            <button className='notFound__button' onClick={() => navigate(-1)}>Назад</button>
            {/* <NewInput
        styleSettings={FOPM_STYLES}
        linkText="Выйти из аккаунта"
        linkPath="navigate.goBack()"
        // onClick={browserHistory.goBack}

      /> */}
        </div>
    )
}
export default NotFound
