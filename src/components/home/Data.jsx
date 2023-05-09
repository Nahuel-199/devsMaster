import { useContext } from "react";
import { ThemeContext } from "../../context";

const Data = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="home__data">
      <h2 style={{ color: darkMode && "#fff" }} className="home__title">
        Realizamos tu pagina web
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
        >
          <path
            d="M5.08569 10.6172H10.8343L7.06855 1.71436L18.9143 13.3829H13.1657L16.9314 22.2858L5.08569 10.6172Z"
            fill="url(#paint0_radial)"
          />
          <path
            d="M6.03418 11.0057L15.8056 20.6343L12.5713 12.9943H17.9599L8.18847 3.36572L11.4228 11.0057H6.03418Z"
            fill="url(#paint1_radial)"
          />
          <path
            d="M18.9143 13.3829L7.06855 1.71436L10.84 10.6172H5.08569L16.9314 22.2858L13.16 13.3829H18.9143ZM15.8114 20.6344L6.03998 11.0058H11.4285L8.18855 3.36578L17.96 12.9944H12.5714L15.8114 20.6344Z"
            fill="url(#paint2_radial)"
          />
          <path
            opacity="0.24"
            d="M5.08569 10.6172H10.8343L7.06855 1.71436L18.9143 13.3829H13.1657L16.9314 22.2858L5.08569 10.6172Z"
            fill="url(#paint3_radial)"
          />
          <path
            d="M5.08569 10.6172H10.8343L7.06855 1.71436L18.9143 13.3829H13.1657L16.9314 22.2858L5.08569 10.6172Z"
            fill="url(#paint4_radial)"
          />
          <path
            d="M5.08569 10.6172H10.8343L7.06855 1.71436L18.9143 13.3829H13.1657L16.9314 22.2858L5.08569 10.6172Z"
            fill="url(#paint5_radial)"
          />
          <path
            opacity="0.24"
            d="M5.08569 10.6172H10.8343L7.06855 1.71436L18.9143 13.3829H13.1657L16.9314 22.2858L5.08569 10.6172Z"
            fill="url(#paint6_radial)"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(7.64003 5.61185) scale(12.9107 12.9184)"
            >
              <stop stopColor="#FFE343" />
              <stop offset="0.5492" stopColor="#FFE241" />
              <stop offset="0.7469" stopColor="#FFDF3A" />
              <stop offset="0.8874" stopColor="#FEDA2F" />
              <stop offset="1" stopColor="#FED31E" />
            </radialGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.0946 5.6507) scale(15.1161 15.1252)"
            >
              <stop stopColor="#FFEC5F" />
              <stop offset="1" stopColor="#FFEC5F" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint2_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(28.5966 19.7977) scale(35.0717 35.0928)"
            >
              <stop stopColor="#D86D00" />
              <stop offset="0.3292" stopColor="#DC6C0A" stopOpacity="0.6708" />
              <stop offset="0.8792" stopColor="#E86823" stopOpacity="0.1208" />
              <stop offset="1" stopColor="#EB672A" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(11.4258 1.47305) rotate(71.7336) scale(27.0963 11.2853)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint4_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(18.5501 2.18091) scale(19.3495 19.3611)"
            >
              <stop stopColor="#FF8000" stopOpacity="0" />
              <stop offset="0.5434" stopColor="#FD7F00" stopOpacity="0.5434" />
              <stop offset="0.7391" stopColor="#F67C00" stopOpacity="0.7391" />
              <stop offset="0.8781" stopColor="#EB7600" stopOpacity="0.8781" />
              <stop offset="0.9903" stopColor="#DA6E00" stopOpacity="0.9903" />
              <stop offset="1" stopColor="#D86D00" />
            </radialGradient>
            <radialGradient
              id="paint5_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12.1859 14.0065) rotate(58.3384) scale(6.92754 3.30027)"
            >
              <stop stopColor="#FFEC5F" />
              <stop offset="1" stopColor="#FFEC5F" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint6_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.4845 7.00215) rotate(58.3384) scale(6.92754 3.30027)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </h2>
      <div className="home__container-titles">
        <div className="home_wrapper-title">
          <h3 style={{ color: darkMode && "#fff" }} className="home__subtitle">
            Landing Page
          </h3>
          <h3 style={{ color: darkMode && "#fff" }} className="home__subtitle">
            Tienda virtuales
          </h3>
          <h3 style={{ color: darkMode && "#fff" }} className="home__subtitle">
            Paginas publicitarias
          </h3>
          <h3 style={{ color: darkMode && "#fff" }} className="home__subtitle">
            Aumenta tu visibilidad
          </h3>
        </div>
      </div>
      <p className="home__description">
        Aprovecha todo el potencial de tu negocio en línea con nuestro servicio
        especializado en desarrollo web
      </p>
      <a
        href="https://walink.co/332257"
        target="_blank"
        rel="noreferrer"
        className="button button--flex"
      >
        Contactanos
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
            fill="var(--container-color)"
          ></path>
          <path
            d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
            fill="var(--container-color)"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Data;
