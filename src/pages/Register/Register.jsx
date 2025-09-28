/* Register.jsx */
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

export default function Register() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Lado Izquierdo */}
        <div className="col-md-4 split-left">
          <a className="brand" href="/">
            <span className="brand-logo" aria-hidden="true">🎓</span>
            <span className="brand-text">RUMBIA</span>
          </a>

          <div className="register-box">
            <h2 className="mb-4 text-center">Registrarse</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" required />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">Confirmar Contraseña</label>
                <input type="password" className="form-control" id="confirm-password" placeholder="Confirme su contraseña" required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Registrarse</button>
              <div className="text-center mt-3">
                <a href="/login" className="login-link">¿Ya tienes cuenta? Inicia sesión</a>
              </div>
            </form>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="col-md-8 split-right d-none d-md-block">
          <img src="/descarga.jpeg" alt="imagen" />
        </div>
      </div>
    </div>
  );
}
