import React from 'react';
import s from '../styles/Moadl.module.scss'
interface MlProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}
export const Modal = ({children,title,onClose}:MlProps) => {
    return (
        <div className={s.Modal} onClick={onClose}>
            <div className={s.Modal_child}>

                <h3>{title}</h3>

                {children}


            </div>
        </div>
    );
};

