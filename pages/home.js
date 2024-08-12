import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Dirección de Turismo Tapalqué</h1>
      <div className="text-center mt-3">
        <Image src="/tapalque-enamora.jpg" alt="Tapalqué Enamora" width={300} height={200} />
      </div>
      <div className="text-center mt-3">
        <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
        <a href="#" className="social-icon"><i className="bi bi-whatsapp"></i></a>
        <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
      </div>
      <h2 className="text-center mt-3">TURISMO TAPALQUÉ</h2>
      <Carousel className="mt-3">
        <Carousel.Item>
          <Image className="d-block w-100" src="/imagen1.jpg" alt="Imagen 1" width={800} height={400} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src="/imagen2.jpg" alt="Imagen 2" width={800} height={400} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src="/imagen3.jpg" alt="Imagen 3" width={800} height={400} />
        </Carousel.Item>
      </Carousel>
      <p className="text-center mt-3">
        "Tapalqué Enamora" no es un destino, es una experiencia que te invita a ser parte de nuestra historia y a crear recuerdos inolvidables.
      </p>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Topónimo</h3>
          <p>Texto a designar...</p>
        </div>
        <div className="col-md-6">
          <h3>Cómo llegar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10697.75060250295!2d-60.0012748!3d-36.3655005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bdbf0b5f0e933d%3A0x144e8bd4d03f8b!2sTapalqu%C3%A9%2C%20Buenos%20Aires%20Province%2C%20Argentina!5e0!3m2!1sen!2s!4v1646774416567!5m2!1sen!2s"
            width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            title="Cómo llegar a Tapalqué">
          </iframe>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Eventos</h3>
          <Image src="/eventos.jpg" alt="Eventos" width={300} height={200} />
        </div>
        <div className="col-md-6">
          <h3>Texto del Evento</h3>
          <p>Texto a designar...</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Hotelería</h3>
          <div className="row">
            <div className="col-md-6">
              <Image src="/hotel1.jpg" alt="Hotel 1" width={150} height={100} />
              <p>Hotel 1</p>
            </div>
            <div className="col-md-6">
              <Image src="/hotel2.jpg" alt="Hotel 2" width={150} height={100} />
              <p>Hotel 2</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3>Gastronomía</h3>
          <div className="row">
            <div className="col-md-6">
              <Image src="/gastronomia1.jpg" alt="Gastronomía 1" width={150} height={100} />
              <p>Gastronomía 1</p>
            </div>
            <div className="col-md-6">
              <Image src="/gastronomia2.jpg" alt="Gastronomía 2" width={150} height={100} />
              <p>Gastronomía 2</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5">
        <h3 className="text-center">Sitios de Interés</h3>
        <div className="text-center footer-links">
          <ul>
            <li>Termas</li>
            <li>Municipalidad de Tapalqué</li>
          </ul>
        </div>
        <div className="text-center social-links mt-3">
          <a href="#" aria-label="Instagram" className="social-icon"><i className="bi bi-instagram"></i></a>
          <a href="#" aria-label="WhatsApp" className="social-icon"><i className="bi bi-whatsapp"></i></a>
          <a href="#" aria-label="Correo Electrónico" className="social-icon"><i className="bi bi-envelope"></i></a>
        </div>
      </footer>
    </div>
  );
}
