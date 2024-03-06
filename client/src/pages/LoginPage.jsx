import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const onLogin = (e)=> {
    e.preventDefault();
    navigate('/empresas', {
      replace: true,
      state: {
        logged: true,
        name
      }
      })
      onResetForm();
  }

  return (
    <div className='flex  items-center justify-center h-screen bg-slate-200 rounded-xl'>

      <form className='py-8 px-6 rounded-xl max-w-sm ' onSubmit={onLogin}>
        <h1 className='text-4xl'>Iniciar Sesion</h1>

        <div className="input-group">
          <input
            type="text"
            name='name'
            id='name'
            value={name}
            onChange={onInputChange}
            required />
          <label htmlFor='name'>Nombre: </label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name='email'
            id='email'
            value={email}
            onChange={onInputChange}
            required />
          <label htmlFor='email'>Email: </label>
        </div>

        <div className="input-group">
          <input
            type="password"
            name='password'
            id='password'
            value={password}
            onChange={onInputChange}
            required />
          <label htmlFor='password'>Contraseña: </label>
        </div>

        <button 
        className='bg-stone-500 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-stone-800 cursor-pointer' 
        
        >Entrar</button>
      </form>
    </div>
  )
}

export default LoginPage