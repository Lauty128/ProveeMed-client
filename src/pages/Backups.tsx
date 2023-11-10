//-------> Dependencies
import { useState, useEffect } from "react";

//-------> Components
import { Link } from "react-router-dom";

//-------> Services
import { download, getAll, submitOldBackup } from "../services/backups.service"


export default function Backups(){
    //----> States
    const [backups, setBackups] = useState<null | string[]>(null);
    
    useEffect(() =>{
        (async()=>{
            if(backups == null){
                const response = await getAll();
                setBackups(response);
            }
        })()
    },[]);

    //----> Functions
    function loadOldBackup(name:string){
        const response = window.confirm("Estas seguro de cargar este backup. \nRecuerda que los datos actuales seran reemplazados por los datos del backup");
        if(response){
            submitOldBackup(name);
        }
    }

    //----> Styles
    const buttonStyle = {
        backgroundColor:'#044c84',
        color:'#ffff',
        padding:'.5em',
        outline:'none',
        textDecoration: 'none',
        border:'none',
        cursor:'pointer'
    }


    return <>
        <div style={{ marginLeft:'2em', marginRight:'1em', marginBottom:'3em' }}>
            <h2>Sección de Backups</h2>
            <p style={{color:'#505050', fontSize:'1.2em', maxWidth:'1100px'}}>
                Explora nuestra sección de backups para gestionar y respaldar tu información 
                de manera segura. Descarga plantillas, carga actualizaciones y revisa el historial 
                de cambios para mantener tus datos siempre actualizados y protegidos.
            </p>
            <p style={{ marginTop:'2em', color:'#505050', fontSize:'1.2em', maxWidth:'1100px' }}>
                <Link to={'/manual'}>Leer manual</Link>{' '} 
                para manipular la informacion correctamente
            </p>

            <div style={{ display:'flex', flexWrap: 'wrap', gap:'1em' }}>
                <button onClick={()=> download() } style={buttonStyle}>
                    Descargar template
                </button>
                <Link to={'/backups/subir'} style={buttonStyle}>
                    Actualizar base de datos
                </Link>
            </div>

            <div className="BackupsTable">
                <h3 className="BackupsTable__h3">Ultimos backups</h3>
                <div className="BackupsTable__table">
                    <div className="BackupsTable__row BackupsTable__header">
                        <span>Fecha</span>
                        <span>Acciones</span>
                    </div>    
                    {
                        backups == null
                        ? 'No hay backups viejos'
                        : backups.map((backup,index)=>{
                            const name = backup.split('__')[0]
                            return <div key={`${index}`} className="BackupsTable__row">
                                <span>{name}</span>
                                <div className="BackupsTable__actions">
                                    <span className="BackupsTable__action"
                                    title="Descargar archivo xlsx para visualizar los datos" 
                                    onClick={()=> download(name)} >
                                        Descargar
                                    </span>
                                    <span className="BackupsTable__action"
                                    title="Cargar datos de este backup en la base de datos" 
                                    onClick={()=> loadOldBackup(name)} >
                                        Cargar
                                    </span>
                                    <span className="BackupsTable__action"
                                    title="Eliminar este backup para limpiar servidor">
                                        Eliminar
                                    </span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    </>
}