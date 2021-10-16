import Container from 'components/ui/atoms/Container';
import React, { VoidFunctionComponent } from 'react';

const ShortInformation: VoidFunctionComponent = () => {
  return (
    <section className="relative flex h-screen">
      <Container className="m-auto z-10">
        <div className="shadow-2xl p-3 rounded-xl	relative flex justify-center items-center bg-white dark:bg-cs-black">
          <h2 className="rotating-headline">
            <p className="text-lg rotating-headline-span flex items-center">
              <span style={{ fontSize: '50px' }}>&#128640;</span>
              <span className="pl-3">
                Soy un desarrollador de software por pasión, vocación y
                profesión
              </span>
            </p>
            <p className="text-lg rotating-headline-span flex items-center">
              <span style={{ fontSize: '50px' }}>&#128588;</span>
              <span className="pl-3">
                Me encanta aprender y me gusta compartir conocimiento
              </span>
            </p>
            <p className="text-lg rotating-headline-span flex items-center">
              <span style={{ fontSize: '50px' }}>&#127939;</span>
              <span className="pl-3">
                Amo trabajar en ambientes agiles donde puedo crecer junto al
                equipo
              </span>
            </p>
            <p className="text-lg rotating-headline-span flex items-center">
              <span style={{ fontSize: '50px' }}>&#128170;</span>
              <span className="pl-3">
                Me gusta ayudar a las personas a entrar al mundo del desarrollo
              </span>
            </p>
            <p className="text-lg rotating-headline-span flex items-center">
              <span style={{ fontSize: '50px' }}>&#129331;</span>
              <span className="pl-3">
                Suelo escribir y hacer videos sobre tecnología en mi tiempo
                libre
              </span>
            </p>
          </h2>
        </div>
      </Container>
      <div className="absolute w-full h-full m-auto">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2427 943"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2426.61 151V363.5L1306.49 942.391L1211.01 747.95L2426.61 151Z"
            fill="url(#paint0_linear_113:35)"
          />
          <path
            d="M0.113281 229L0.120544 0L1405.95 751.414L1306.49 942.391L0.113281 229Z"
            fill="url(#paint1_linear_113:35)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_113:35"
              x1="0.11324"
              y1="724.288"
              x2="779.763"
              y2="-651.238"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF338F" />
              <stop offset="1" stop-color="#F6AE13" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_113:35"
              x1="0.11324"
              y1="724.288"
              x2="779.763"
              y2="-651.238"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF338F" />
              <stop offset="1" stop-color="#F6AE13" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ShortInformation;
