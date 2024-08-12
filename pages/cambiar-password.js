import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CambiarPassword() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSave = () => {
    if (newPassword === repeatPassword) {
      // Lógica para cambiar la contraseña (placeholder)
      alert('Contraseña cambiada con éxito');
      router.push('/login');
    } else {
      alert('Las contraseñas no coinciden');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Cambiar Contraseña</h1>
      <div className="form-group mt-3">
        <label>Ingrese Contraseña Actual</label>
        <input
          type="password"
          className="form-control"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label>Ingrese Nueva Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label>Repita Nueva Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={handleSave}>
        Guardar
      </button>
      <button className="btn btn-secondary mt-3" onClick={() => router.push('/login')}>
        Volver
      </button>
    </div>
  );
}
