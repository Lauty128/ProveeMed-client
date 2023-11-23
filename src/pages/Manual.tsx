//----> Dependencies
import Markdown from "react-markdown";

//----> Assets
import equipmentsExample from '../assets/manual/equipments_example.png';

//----> Componentes
import { Link } from "react-router-dom";


export default function Manual(){

    const manualData = `
# Manual - BackUp y actualización de datos

Este manual está diseñado para proporcionarte una guía clara y práctica sobre cómo realizar backups y actualizaciones de datos en ProveeMed, utilizando una interfaz intuitiva. A continuación, encontrarás pasos sencillos para aprovechar al máximo estas funciones.

### Uso de Backups:

1. Dirígete a la sección "Backups".

2. Aquí se encontrará una lista con todos los Backups realizados hasta la fecha.

3. Selecciona la opción de "Descargar Template" y elige la ubicación deseada para almacenar la copia de seguridad, donde es generado en tiempo real.

4. También podrá eliminar "Backups", en caso que estos sean muy antiguos.

5. Con solo dar un click, se podrá descargar el template (Archivo Excel) para tener una copia en su dispositivo por seguridad.

6. ProveeMed se encargará de respaldar todos tus datos de manera rápida y eficiente, creando una lista de todos los BackUps hasta el momento.

### Actualizaciones sin Complicaciones con Excel:

1. Accede a la sección "Actualizar Base de datos" en la interfaz principal de ProveeMed.

2. Selecciona "Actualizar Base de datos" y carga el archivo con la información actualizada.

3. Mapea los campos correspondientes y confirma la actualización.

4. ProveeMed procesa automáticamente los datos, manteniendo tu información al día.

### Archivo Excel

1. El sistema maneja formato de "ID", que queremos decir con esto, que los registros se organizan en base a estos "ID".

2. Al momento de realizar modificaciones también tendremos que actualizar las relaciones entre los registros. Esto lo haremos colocando solo "ID" del registro "A" en la columna correspondiente del registro "B".

> EJ : En la conexión de proveedor y equipos (solo en estas conexiones), siempre se debe respetar la escritura respectiva entre los dos, la cual es una separación usando ",".

![](${equipmentsExample})

En esta imagen hacemos referencia a algunas conexiones de ID desde la tabla de Proveedores con los ID de Equipos

3. Los ID deberán ser auto incrementables, por ejemplo "34,35,36,37". Esto lleva a evitar errores de repetición de ID, como también inconsistencia de datos.

4. En caso de tener problemas con ingresar datos del Template (Archivo Excel), como sería el caso de no tener datos para completar en las páginas de equipos y categoría, se los puede dejar en blanco.

5. En caso de la página de proveedores que se presente el mismo problema con ingresar y completar datos (teléfono, correo,etc), se tendrá dos opciones se puede agregar colocar N/A o dejar el campo en blanco.

### Consejos:

- Frecuencia de Backups: Programa backups automáticos para garantizar la seguridad constante de tus datos.

- Excel Compatible: Asegúrate de que el archivo Excel esté formateado correctamente para una actualización sin problemas.

¡Y Listo! Ahora puedes aprovechar al máximo ProveeMed, respaldando tus datos con facilidad y manteniendo toda tu información actualizada. ¡Optimiza tu experiencia con ProveeMed de manera simple y eficiente!
    `
    //----> Styles
    const goBackButtonStyles = {
        textDecoration: 'none',
        color: '#044c84',
        fontSize: 18
    }
    
    return <>   
        <div className="Manual">
            <Link to={'/backups'} style={goBackButtonStyles}>⬅ Volver</Link>
            <Markdown>
                { manualData }
            </Markdown>
        </div>
    </>
}