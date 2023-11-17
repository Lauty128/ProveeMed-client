//----> Dependencies
//import axios from "axios";
import { FormEvent, useState } from "react";

//----> Components
import { ChangeEvent } from "react";
import { Link } from "react-router-dom"

//----> Services
import { submitTemplateFile } from "../services/backups.service";

export default function SubmitBackup(){
    //----> State
    const [ file, setFile ] = useState<null | File>(null)
    const [select, setSelect] = useState<boolean>(false)
    
    //----> Functions
    function fileHandler(e:ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files[0]){
            setFile(e.target.files[0])
            if(!select){
                setSelect(true)
            }
        }
    }

    function submitFile(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', file as File);

        submitTemplateFile(formData);
        // Finalizar subida de datos
        (document.getElementById('SubmitFile-form') as HTMLFormElement).reset()

        setFile(null)
        setSelect(false)
    }

    //----> Styles
    const goBackButtonStyles = {
        textDecoration: 'none',
        color: '#044c84',
        fontSize: 18
    }

    return(
        <div style={{ marginLeft:'2em', marginRight:'1em', marginBottom:'3em' }}>
            <Link to={'/backups'} style={goBackButtonStyles}>⬅ Volver</Link>
            <h2>Actualizar la base de datos</h2>
            <p style={{color:'#505050', fontSize:'1.2em', maxWidth:'1100px'}}>
                Esta sección se encarga de actualizar la base de datos, a través de la información contenido en el archivo recibido. También, un backup será almacenado en el servidor en caso de querer volver a utilizarlo
            </p>
            <p style={{ marginTop:'1em', color:'#505050', fontSize:'1.2em', maxWidth:'1100px' }}>
                Recuerda que el archivo debe tener un formato <i>xlsx</i> y seguir las reglas
                mencionadas en el <Link to={'/manual'}>manual</Link>{' '}
            </p>

            <form action="/proyecto-fio/api/backups/update" id="SubmitFile-form" className="SubmitBackup" onSubmit={(e)=> submitFile(e)}>
                <div className={`SubmitBackup__div ${(select) ? ' SubmitBackup__div--select' : ''}`}>
                    {
                        (file !== null)
                        ? <span className="SubmitBackup__span">{ file.name }</span>
                        : ''
                    }
                    <input  type="file" 
                            name="file"
                            id="file_input" 
                            className={`SubmitBackup__input ${(select) ? 'SubmitBackup__input--select' : ''}`}
                            onChange={(e)=> fileHandler(e) } />
                </div>
                <input type="submit" value="Subir" className="SubmitBackup__submit" />
            </form>

        </div>
    ) 
}