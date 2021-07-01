
import { 
  Kookai, 
  Cloudeasier,
  Cloud,
  AirFrance, 
  Enedis,
  Integration,
  Python,
  Ruby,
  Typescript,
  VueJS,
} from 'assets/img'

export interface Techno {
  frameworks: string[]
  bgColor: string
  icon: string
}

export interface TechnicalStackInterface {
  [key: string]: Techno
}

export enum TechnicalStackKeys {
  TYPESCRIPT = 1,
  PYTHON = 2,
  INTEGRATION = 3,
  CLOUD = 4,
  RUBY = 5,
}

export const TechnicalStack: TechnicalStackInterface = {
  typescript: {
    frameworks: ['ReactJS', 'React Native', 'VueJS'],
    bgColor: '#3178c6',
    icon: Typescript,
  },
  python: {
    frameworks: ['Django', 'Flask', 'SciKit-Learn'],
    bgColor: '#1E3264',
    icon: Python,
  },
  integration: {
    frameworks: ['HTML5', 'CSS', 'SASS', 'LESS'],
    bgColor: '#f1662b',
    icon: Integration,
  },
  cloud: {
    frameworks: ['AWS', 'GCP'],
    bgColor: '#ffcb05',
    icon: Cloud,

  },
  ruby: {
    frameworks: ['Liquid', 'Rails', 'Sidekiq'],
    bgColor: '#901212',
    icon: Ruby,
  },
 
}


export const experiences: ExperienceType[] = [
  {
    job: 'Frontend Engineer',
    bgColor: '#003371',
    company: 'Enedis',
    date: 'May - Jun 20',
    stack: 'CSS | JS | C++',
    source: Enedis,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.
  
  𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  ➤ Modification des labels constituants les graphiques (React, Chart JS).
  ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
  ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
  ➤ Mise en place de tests unitaires Back-End (Pytest).
  ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

  𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
  𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
  𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
  `,
    mainTechno: [TechnicalStackKeys.PYTHON]
  },
  {
    job: 'Frontend Engineer',
    bgColor: '#092D32',
    company: 'Kookaï',
    stack: 'CSS | JS | C++',
    date: 'Jul - Sep 20',
    source: Kookai,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

  𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  ➤ Modification des labels constituants les graphiques (React, Chart JS).
  ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
  ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
  ➤ Mise en place de tests unitaires Back-End (Pytest).
  ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

  𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
  𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
  𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
  `,
    mainTechno: [TechnicalStackKeys.TYPESCRIPT, TechnicalStackKeys.RUBY]
  },
  {
    job: 'Lead tech integration',
    bgColor: '#000E23',
    stack: 'CSS | JS | C++',
    company: 'Air France',
    date: 'Oct 20 - Jan 21',
    source: AirFrance,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

  𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  ➤ Modification des labels constituants les graphiques (React, Chart JS).
  ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
  ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
  ➤ Mise en place de tests unitaires Back-End (Pytest).
  ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

  𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
  𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
  𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
  `,
    mainTechno: [TechnicalStackKeys.INTEGRATION]
  },
  {
    job: 'Backend Engineer',
    bgColor: '#42004A',
    stack: 'CSS | JS | C++',
    date: 'Feb 20 - May 21',
    company: 'Cloudeasieer',
    source: Cloudeasier,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

  𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  ➤ Modification des labels constituants les graphiques (React, Chart JS).
  ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
  ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
  ➤ Mise en place de tests unitaires Back-End (Pytest).
  ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

  𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
  𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
  𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
  `,
    mainTechno: [TechnicalStackKeys.CLOUD, TechnicalStackKeys.PYTHON]
  },
]

export interface ExperienceType {
job: string
stack: string
bgColor: string
date: string
company: string
mainTechno: TechnicalStackKeys[]
source: string
location: string
text: string
}
