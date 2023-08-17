import { useState } from 'react'
import Card from './Card'

const Formulario = () => {
  
    const [nombre, setNombre] = useState('')
    const [equipo, setEquipo] = useState('')
    const [mensajeError, setMensajeError] = useState('');
    const [mensajeExito, setMensajeExito] = useState(false);

    const validarNombre = (nombre) => {

        const sinEspacio = nombre.trim();

        if (sinEspacio.length > 2) {
            return true;
        } else {
            return false;
        }
    };

    const validarEquipo = (equipo) => {

        if (equipo.length > 5) {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const esNombreValido = validarNombre(nombre);
        const esEquipoValido = validarEquipo(equipo);

        if (!esNombreValido || !esEquipoValido) {
            setMensajeError('Por favor chequea que la información sea correcta');
            setMensajeExito(false);
        } else {
            setMensajeError('');
            setMensajeExito(true);
        }

    }

    return (
    <>
        <h2 className='h2'>Ingresá los datos requeridos</h2>
        <form
            className='formulario'
            onSubmit={handleSubmit}
            >
                <div className='div-input'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Ingresar nombre'
                        value={nombre}
                        onChange={e=>setNombre(e.target.value)}
                    />
                </div>

                <div className='div-input'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Ingresar equipo'
                        value={equipo}
                        onChange={e=>setEquipo(e.target.value)}
                    />
                </div>
                <div className='div-input'>
                    <input
                        className='button'
                        type='submit'
                        value="ENVIAR"
                    />
                </div>       

        </form>

        {mensajeError && <p className='error'>{mensajeError}</p>}
        {mensajeExito && <Card nombre={nombre} equipo={equipo} />}
    </>
  )
}

export default Formulario