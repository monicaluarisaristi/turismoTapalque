import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación (puede ser un placeholder)
    if (user && password) {
      router.push('/home');
    } else {
      alert('Por favor, complete todos los campos');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Bienvenidos</h1>
      <div className="text-center">
        <Image src="/tapalque-enamora.jpg" alt="Tapalqué Enamora" width={300} height={200} />
      </div>
      <div className="form-group mt-3">
        <label>Usuario</label>
        <input
          type="text"
          className="form-control"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Login
      </button>
      <button className="btn btn-link mt-3" onClick={() => router.push('/cambiar-password')}>
        Cambiar Contraseña
      </button>
    </div>
  );
}
