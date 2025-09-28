import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-4 split-left">
          <a className="brand" href="/">
            <span className="brand-logo">🎓</span>
            <span className="brand-text">RUMBIA</span>
          </a>

          <div className="login-box">
            <h2 className="mb-4 text-center">Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Ingrese su usuario"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Iniciar Sesión
              </button>

              <div className="text-center mt-3">
                <a href="/register" className="register-link">
                  ¡Regístrate aquí!
                </a>
              </div>
            </form>
            
          </div>
          
        </div>
        <div className="col-md-8 split-right d-none d-md-block">
          <img src="/descarga.jpeg" alt="Carlos · Innovación" />
        </div>
        
      </div>
      
    </div>
  );
}
