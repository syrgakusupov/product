import React, {useState} from 'react';
import s from '../styles/Moadl.module.scss'

interface ModalCreateProps{
    onCreate: () => void
}
export const ModalCreate = ({onCreate}:ModalCreateProps) => {

    const submitHundler =  (event: React.FormEvent) =>{
        event.preventDefault()

        onCreate()
    }



    return (
        <form className={s.ModalCreate} onSubmit={submitHundler}>
            <input
                type="text"
                placeholder='Enter product title...'

            />

            <button type="submit">
                X

            </button>

        </form>
    );
};

export default ModalCreate;