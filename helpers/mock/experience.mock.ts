import { ShortExperience } from 'helpers/interfaces/experience.interfaces';

export const experienceMock: ShortExperience[] = [
  {
    title: 'Software Developer at Pamer',
    description: `
    Desarrollador de software parte del laboratorio de innovación CREEK12 en Pamer. Usando tecnologias como:
    - NestJS
    - NextJS + Tailwind + TS + ESlint + Prettier + Jest
    - AWS CDK
    - Amazon AppRunner
    - Github + Github Actions`,
    endStart: new Date(),
    startDate: new Date(),
    image:
      'https://media-exp1.licdn.com/dms/image/C4E0BAQEcGrPK0CQBXg/company-logo_100_100/0/1620939348609?e=1642636800&v=beta&t=yHFJ4JCtYhorgBO-MzGWP6qRsw5ad_iC8VUPg4au4ak',
    provisionalDate: 'Jul 2021 - Actualidad (4 meses)',
  },
  {
    title: 'Tech Lead at Cedhinfo',
    description: `
    Estuve encargado de:
    - Traducir los requerimientos del stakeholder hacia el equipo de desarrollo
    - Dar guia tecnica en cuanto a practicas de desarrollo para un mejor producto
    - Mentoria y capacitacion al equipo de desarrollo tanto front como backend`,
    endStart: new Date(),
    startDate: new Date(),
    image:
      'https://media-exp1.licdn.com/dms/image/C560BAQGfg6H64MDYTQ/company-logo_100_100/0/1631738746829?e=1642636800&v=beta&t=C_RbWjcoQg7lpAIHuS1-z2HkiPQlu5yio5cwEoMv9EE',
    provisionalDate: 'Ene 2021 - Jul 2021 (7 meses)',
  },
  {
    title: 'Fullstack Developer at Smiledu',
    description: `
    Me desempeñé como desarrollador fullstack con un stack conformado por:
    - Angular + Angular Material
    - Express
    - PostgreSQL
    - AWS Lambda

    A su vez me desemepeñé como líder de uno de los módulos principales encargándome de gestionar a un grupo de personas para llegar a metas establecidas y liderar los estandares de codigo.
    Tambien me vi involucrado en el proceso de prueba, selección, capacitación e inducción de los nuevos integrantes que entrarian a mi area`,
    endStart: new Date(),
    startDate: new Date(),
    image:
      'https://media-exp1.licdn.com/dms/image/C560BAQHOTJw5u64m3Q/company-logo_100_100/0/1619474234761?e=1642636800&v=beta&t=sG5JdnZEbArA5mPvJ2i3n54oNk2rUMh6CKDMoO_JDug',
    provisionalDate: 'Dic 2018 - Dic 2020 (2 años y 1 mes)',
  },
];
