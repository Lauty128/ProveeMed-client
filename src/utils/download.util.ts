
export function downloadFile(blob: Blob){
    // Crear un enlace para descargar el archivo
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    // Especificar el nombre del archivo (puedes extraerlo de la respuesta si es dinámico)
    link.setAttribute('download', 'ProveeMed.xlsx');
    //link.href = url;

    // Añadir el enlace al DOM y hacer clic para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Limpiar después de la descarga
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}