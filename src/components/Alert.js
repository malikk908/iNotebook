import React, {useContext} from 'react'
import alertContext from '../context/alert/alertContext';

export default function Alert() {

    const capitalize = (word)=>{
        // const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const context = useContext(alertContext);
    const {alert, setAlert, showAlert} = context;

    return (
        alert && <div>
            <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(alert.type)}</strong>: {alert.msg}
                
            </div>
        </div>
    )
}