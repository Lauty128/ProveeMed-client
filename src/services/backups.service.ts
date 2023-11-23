//-----> Dependencies
import axios from 'axios';
import { toast  } from 'react-toastify';

//-----> Interfaces
import { backupsResponse } from '../models';

//-----> Utils
import { downloadFile } from '../utils/download.util';

//-----> Variables
    const URL =  import.meta.env.VITE_API_URL;
    const TOKEN = import.meta.env.VITE_API_TOKEN;

//-----> Configurations
    const instance = axios.create({
        baseURL: URL,
        headers: {
            'Authorization': TOKEN
        }
    })

export async function submitTemplateFile(form:FormData):Promise<void>{
    await instance.post('/backups/update',form)
    .then(() => {
        toast.success('Base de datos actualizada correctamente');
    })
    .catch(err => {
        if(err.response.status === 401){
            toast.error('No estas authorizado para acceder a este contenido');
        }
        else{
            toast.error('Ocurrio un error durante la carga del backup');
        }
        console.log(err);
    })
}

export async function download(date?:string):Promise<void>{
    
    const url =  (date !== undefined)
        ? '/backups/template/' + date 
        : '/backups/template' 

    // Exucuting of the query
    await instance(url, { 
        responseType:'blob' /* Important the response type */ 
    }) 
    .then((response) =>{ 
        const blobFile = new Blob([response.data]);
        downloadFile(blobFile);
    })
    .then(()=> { toast.success('Archivo descargado correctamente') } )
    .catch(response => {
        if(response.response.status === 401){
            toast.error('No estas authorizado para acceder a este contenido');
        }
        else{
            toast.error('Ocurrio un error durante la descarga del archivo');
        }
    })
}

export async function submitOldBackup(date:string):Promise<boolean>{
    const response = instance('/backups/update/file/'+date)
        .then(() => {
            toast.success('Base de datos actualizada correctamente');
            return true
        })
        .catch(err => {
            if(err.response.status === 401){
                toast.error('No estas authorizado para acceder a este contenido');
            }
            else{
                toast.error('Ocurrio un error durante la carga del backup');
            }
            return false;
        })
    return response;
}

export async function deleteBackup(date:string):Promise<boolean>{
    const response = instance('/backups/delete/'+date)
        .then(response => {
            toast.info(response.data.message);
            return true;
        })
        .catch(err => {
            if(err.response.status === 401){
                toast.error('No estas authorizado para acceder a este contenido');
            }
            else{
                toast.error('Ocurrio un error durante la eliminación del backup');
            }
            return false;
        })
    return response;
}

export async function getAll():Promise<backupsResponse>{
    // Exucuting of the query
    const response = await instance('/backups') 
    .then((response) => response.data)
    .catch(response => {
        // The error response is in distint path that the success response
        const message = (response.response)
            ? response.response.data
            : response.message as string;

        // An error message is created in the screen
        if(typeof message != 'string'){
            toast.error(message.user_error_title.es);
        }
        else{
            toast.error(message);
        }
    })

    return response;
}