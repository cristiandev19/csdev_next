import React, { VoidFunctionComponent } from 'react';
import LinkButton from 'components/ui/atoms/LinkButton/LinkButton';
import Container from 'components/ui/atoms/Container';

const ExperienceSection: VoidFunctionComponent = () => {
  return (
    <section>
      <Container>
        <div className="w-full md:w-4/6 m-auto shadow-2xl dark:drop-shadow-none	 rounded-2xl my-12 overflow-auto">
          <div className="p-8">
            <div className="flex items-center">
              <div className="h-14 w-14">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQEcGrPK0CQBXg/company-logo_100_100/0/1620939348609?e=1642636800&v=beta&t=yHFJ4JCtYhorgBO-MzGWP6qRsw5ad_iC8VUPg4au4ak"
                  alt="pamer"
                />
              </div>
              <h3 className="ml-2">Software Developer</h3>
            </div>

            <div className="ml-16">
              <div>
                <span>
                  Desarrollador de software parte del laboratorio de innovación
                  CREEK12 en Pamer. Usando tecnologias como:
                </span>
                <br />
                <span>- NestJS</span>
                <br />
                <span>- NextJS + Tailwind + TS + ESlint + Prettier + Jest</span>
                <br />
                <span>- AWS CDK</span>
                <br />
                <span>- Amazon AppRunner</span>
                <br />
                <span>- Github + Github Actions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/6 m-auto shadow-2xl dark:drop-shadow-none	 rounded-2xl my-12 overflow-auto">
          <div className="p-8">
            <div className="flex items-center">
              <div className="h-14 w-14">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQGfg6H64MDYTQ/company-logo_100_100/0/1631738746829?e=1642636800&v=beta&t=C_RbWjcoQg7lpAIHuS1-z2HkiPQlu5yio5cwEoMv9EE"
                  alt="cedhinet"
                />
              </div>
              <h3 className="ml-2">Cedhinfo</h3>
            </div>

            <div className="ml-16">
              <div>
                <span>Estuve encargado de:</span>
                <br />
                <span>
                  - Traducir los requerimientos del stakeholder hacia el equipo
                  de desarrollo
                </span>
                <br />
                <span>
                  - Dar guia tecnica en cuanto a practicas de desarrollo para un
                  mejor producto
                </span>
                <br />
                <span>
                  - Mentoria y capacitacion al equipo de desarrollo tanto front
                  como backend
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/6 m-auto shadow-2xl dark:drop-shadow-none	 rounded-2xl my-12 overflow-auto">
          <div className="p-8">
            <div className="flex items-center">
              <div className="h-14 w-14">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQHOTJw5u64m3Q/company-logo_100_100/0/1619474234761?e=1642636800&v=beta&t=sG5JdnZEbArA5mPvJ2i3n54oNk2rUMh6CKDMoO_JDug"
                  alt="smiledu"
                />
              </div>
              <h3 className="ml-2">Smiledu</h3>
            </div>

            <div className="ml-16">
              <div>
                <span>
                  Me desempeñé como desarrollador fullstack con un stack
                  conformado por:
                </span>
                <br />
                <span>- Angular + Angular Material</span>
                <br />
                <span>- Express</span>
                <br />
                <span>- PostgreSQL</span>
                <br />
                <span>- AWS Lambda</span>
                <br />
                <span>
                  A su vez me desemepeñé como líder de uno de los módulos
                  principales encargándome de gestionar a un grupo de personas
                  para llegar a metas establecidas y liderar los estandares de
                  codigo.
                </span>
                <br />
                <span>
                  Tambien me vi involucrado en el proceso de prueba, selección,
                  capacitación e inducción de los nuevos integrantes que
                  entrarian a mi area
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex">
          <LinkButton
            href="/experience"
            className="m-auto px-8"
            type="internal"
          >
            Ver mas
          </LinkButton>
        </div> */}
      </Container>
    </section>
  );
};

export default ExperienceSection;
