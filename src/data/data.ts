/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import {
  Cloudeasier,
  Cloud,
  Enedis,
  Python,
  Epitech,
  TVShows as TVShowsImages,
  Kuruko,
  KurukoThumb,
  ErenThumb,
  Goku,
  DragonBallThumb,
  Gon,
  GonThumb,
  LaCasaDePapel,
  LeagueOfLegend,
  Levi,
  MrRobot,
  LifeIsStrange,
  BreakingBad,
  Got,
  Abbana,
  GRDF,
  IPAG,
  SFUni,
  React,
  Database,
  IIM,
  DevOps,
  Lilibow,
  WalkingDead,
  WorldOfWarcraft,
  HotlineMiami
} from 'assets/img'
import { RickAndMorty, Thirteen } from 'assets/img/tvshows'
import {
  TwoOfUs,
  RickAstley,
  Dharma,
  Beautiful,
  DigitalLove,
  Everyday,
  NowOrNever,
  Rebenga,
  TakeOver
} from 'assets/sounds'
import { SNKVideo, KurokoVideo, DBZVideo, HXHVideo } from 'assets/videos'

const s3BucketURL = 'https://d2y5iacgdowiek.cloudfront.net/'

export const getVideoUrl = (assetName: string): string => {
  return (s3BucketURL + 'videos/' + assetName)
}

export const getSoundUrl = (assetName: string): string => {
  return (s3BucketURL + 'sounds/' + assetName)
}

export interface Techno {
  frameworks: string[]
  bgColor: string
  icon: string
}

export interface TechnicalStackInterface {
  [key: string]: Techno
}

export const TechnicalStack: TechnicalStackInterface = {
  Python: {
    frameworks: ['Flask', 'Django', 'Numpy', 'Pandas', 'Matplotlib', 'SciKit-Learn'],
    bgColor: '#1E3264',
    icon: Python,
  },
  Cloud: {
    frameworks: ['AWS', 'GCP'],
    bgColor: '#ffcb05',
    icon: Cloud,
    
  },
  DevOps: {
    frameworks: ['Docker', 'Terraform', 'Git', 'Gitlab'],
    bgColor: '#009942',
    icon: DevOps,
    
  },
  Database: {
    frameworks: ['MySQL', 'PostgreSQL', 'MSSQL', 'MongoDB'],
    bgColor: '#901212',
    icon: Database,
  },
  React: {
    frameworks: ['HTML5', 'CSS', 'Typescript', 'Material UI'],
    bgColor: '#43a0b7',
    icon: React,
  },
}

export enum TechnicalStackKeys {
  PYTHON = 1,
  CLOUD = 2,
  DEVOPS = 3,
  DATABASE = 4,
  REACT = 5,
}

export const SongsInformations: PlaylistProps[] = [
  {
    title: 'Digital Love',
    artist: 'Daft Punk',
    src: DigitalLove
  },
  {
    title: 'Dharma',
    artist: 'KSHMR',
    src: Dharma
  },
  {
    title: 'Take Over',
    artist: 'League of Legends',
    src: TakeOver
  },
  {
    title: 'Beautiful',
    artist: 'Eminem',
    src: Beautiful
  },
  {
    title: 'Now Or Never',
    artist: 'Kendrick Lamar',
    src: NowOrNever
  },
  {
    title: 'Rebenga',
    artist: 'PNL',
    src: Rebenga
  },
  {
    title: 'Every day',
    artist: 'Ninho',
    src: Everyday
  },
  {
    title: 'Never Gonna Give You Up',
    artist: 'Rick Astley',
    src: RickAstley
  },
  {
    title: 'Grover Washington',
    artist: 'Just The Two of Us',
    src: TwoOfUs
  },
]

export const experiences: ModalPropsType[] = [
  {
    title: 'Software Engineer',
    bgColor: '#42004A',
    stack: 'Python | AWS | GCP',
    date: 'Feb 2021 - Aug 2021',
    subtitle: 'Cloudeasier',
    source: Cloudeasier,
    location: 'Paris - France',
    description: `⇨ 𝑴𝒀 𝑴𝑰𝑺𝑺𝑰𝑶𝑵: Develop solutions that allow companies to reduce the financial costs of their Cloud infrastructures and build tools to facilitate infrastructure analysis for consultants.

  𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧:
    ➤ Retrieving prices for compute instances from AWS and GCP (Python, AWS, GCP).
    ➤ Development of a Python script deployed that update compute instance prices of AWS and GCP in a database (Python, PGSQL, AWS, GCP).
    ➤ Development of a Python script deployed on a Google Cloud Function to schedule compute engines to be turned on and off. (Python, GCP)
    ➤ Deployment of a Lambda function triggered by a CloudWatch Event via Terraform. (Terraform, AWS)
    ➤ Deployment of a google scheduler and a google function via Terraform. (Terraform, GCP)
    ➤ Configuring a Gitlab Webhook to make an API call to an AWS API Gateway during a push event. (Gitlab, AWS)
    ➤ Implementation of backend unit tests (Pytest).

  𝐁𝐚𝐜𝐤𝐄𝐧𝐝: Python
  𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: MySQL, PGSQL
  𝐂𝐥𝐨𝐮𝐝: AWS, GCP
  𝐓𝐞𝐬𝐭𝐢𝐧𝐠: Pytest
  𝐃𝐞𝐯𝐎𝐩𝐬: Terraform, Gitlab, Docker
  𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧: ClickUp
  𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠: Git
  `,
    mainTechno: [TechnicalStackKeys.CLOUD, TechnicalStackKeys.PYTHON, TechnicalStackKeys.DEVOPS, TechnicalStackKeys.DATABASE]
  },
  {
    title: 'Instructor',
    bgColor: '#c96800',
    stack: 'SQL | MySQL | UML',
    subtitle: 'IIM Digital School',
    date: 'Dec 2020 - Dec 2020',
    source: IIM,
    location: 'Paris - France',
    description: `⇨ 𝑴𝒀 𝑴𝑰𝑺𝑺𝑰𝑶𝑵: Teach a class of 4th year students in web development specialization on database concepts, MySQL language and how to design a database with UML.

    𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧:
      ➤ Design database courses.
      ➤ Design database exercises.
      ➤ Design a database exam.
      ➤ Present real datasets to students (Kaggle).
      ➤ Provide professional training.
      ➤ Provide practical information that can be used immediately by students.
      ➤ Monitor students and evaluate knowledge acquisition.
  `,
    mainTechno: [TechnicalStackKeys.DATABASE]
  },
  {
    title: 'Full stack Developer',
    bgColor: '#003371',
    subtitle: 'Enedis',
    date: 'May 2020 - Aug 2020',
    stack: 'Python | Django | React',
    source: Enedis,
    location: 'Paris - France',
    description: `⇨ 𝐌𝐘 𝐌𝐈𝐒𝐒𝐈𝐎𝐍: Add and update data on a monitoring tool consisting of a map and several graphs displaying all the data related to power cuts and technician interventions in France.

    𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧:
      ➤ Modification of the labels constituting the graphs (React, Chart JS).
      ➤ Retrieving required data from a database (Django, PGSQL).
      ➤ Editing the graphs to have a rendering more adapted to Enedis needs (Chart JS).
      ➤ Implementation of unit tests Back-End (Pytest).

    𝐅𝐫𝐨𝐧𝐭𝐄𝐧𝐝: HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤𝐄𝐧𝐝: Python, Django
    𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠: Pytest
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧: Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠: Git
`,
    mainTechno: [TechnicalStackKeys.PYTHON, TechnicalStackKeys.REACT, TechnicalStackKeys.DATABASE]
  },
  // {
  //   title: 'Backend Developer',
  //   bgColor: '#092D32',
  //   subtitle: 'Praetorium',
  //   stack: 'CSS | JS | C++',
  //   date: 'Jul - Sep 20',
  //   source: Praetorium,
  //   location: 'Paris - France',
  //   description: `⇨ 𝐌𝐘 𝐌𝐈𝐒𝐒𝐈𝐎𝐍 : Build an artificial intelligence that detect furniture in multiple photos and videos. Build a Flask API to deploy the model online. Create a Gitlab pipeline that trigger code analysis with SonarQube and repository management with Nexus3

  //   𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
  //   ➤ Creation of a convolutional neural network (CNN).
  //   ➤ Use of the Darknet framework allowing the training of artificial intelligence.
  //   ➤ Retrieving labeled images from google dataset v5 in order to build a dataset made of furniture images.
  //   ➤ Application of the YOLO object detector on photos and videos using OpenCV.
  //   ➤ Design of the architecture of an API.
  //   ➤ Integration of artificial intelligence in a Flask API.
  //   ➤ Formatting of a JSON indicating the positions of each object on an image.
    
  //   𝐁𝐚𝐜𝐤 𝐄𝐧𝐝: Python, Flask
  //   𝐃𝐚𝐭𝐚: Pandas, Numpy, Matplotlib, Seaborn
  //   𝐃𝐞𝐯𝐨𝐩𝐬 : Docker, Gitlab, SonarQube, Nexus3
  //   𝐃𝐞𝐞𝐩 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠 : Keras, Scikit-learn, Darknet
  //   𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐯𝐢𝐬𝐢𝐨𝐧 : OpenCV
  //   𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠 : Git
  // `,
  //   mainTechno: [TechnicalStackKeys.PYTHON, TechnicalStackKeys.DEVOPS]
  // },
  {
    title: 'Full stack Developer',
    bgColor: '#c48b8b',
    stack: 'Python | Django | React',
    date: 'Apr 2020 - Jun 2020',
    subtitle: 'Lilibow-Creation',
    source: Lilibow,
    location: 'Paris - France',
    description: `⇨ 𝐌𝐘 𝐌𝐈𝐒𝐒𝐈𝐎𝐍: Develop a clothing configurator on an e-commerce website. The configurator allows the user to customize the selected dress. The user could configure dresses, skirt or accessories.

    𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧:
    ➤ Creating of a configurator for dresses, skirts, bags and accessories. (React, Python)
    ➤ Getting articles stored in database (Python, ORM).
    ➤ Formatting of a JSON allowing the restitution of information from articles to the front. (Python)
    ➤ Fetching information of the different articles from the Front-End via API calls (Axios)
    ➤ Display of the different configuration possibilities according to the possible combinations (React).
    ➤ Implementation of a responsive design using the Bootstrap framework.
    ➤ Implementation of Front-End unit tests (Cypress).
    ➤ Implementation of unit tests Back-End (Pytest).
    ➤ Documentation of the implemented solutions.
    ➤ Agile sprint SCRUM (Trello).
    
    𝐅𝐫𝐨𝐧𝐭 𝐄𝐧𝐝: HTML, CSS (Bootstrap), Javascript (React)
    𝐁𝐚𝐜𝐤 𝐄𝐧𝐝: Python, Django
    𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: SQL (MySQL)
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠: Cypress, Pytest
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧: Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠: Git
  `,
    mainTechno: [TechnicalStackKeys.PYTHON, TechnicalStackKeys.REACT, TechnicalStackKeys.DATABASE]
  },
  {
    title: 'Frontend Developer',
    bgColor: '#61c2d8',
    stack: 'HTML | CSS | React',
    date: 'Mar 2020 - Mar 2020',
    subtitle: 'IPAG Business School',
    source: IPAG,
    location: 'Paris - France',
    description: `⇨ 𝐌𝐘 𝐌𝐈𝐒𝐒𝐈𝐎𝐍: Create a showcase website to promote the sports office to IPAG Business School students. All the events of the sports office must be directly managed on the website

    𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧:
      ➤ Designing several interface mock-ups for the application.
      ➤ Creation of the component architecture.
      ➤ Creation and routing of pages (MPA).
      ➤ Responsive design using the Bootstrap framework.
      ➤ Implementation of unit tests (Cypress).
      ➤ Documentation of implemented solutions.
      ➤ Agile sprint SCRUM (Trello).
    
    𝐅𝐫𝐨𝐧𝐭 𝐄𝐧𝐝: HTML, CSS (Bootstrap), Javascript (React)
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠: Cypress
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧: Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠: Git
  `,
    mainTechno: [TechnicalStackKeys.REACT]
  },
  {
    title: 'Software Developer',
    bgColor: '#007cf9',
    stack: 'Python | Electron JS | SQL',
    date: 'Oct 19 - Mar 20',
    subtitle: 'Abbana',
    source: Abbana,
    location: 'Paris - France',
    description: `⇨ 𝐌𝐘 𝐌𝐈𝐒𝐒𝐈𝐎𝐍: Develop software for the sales administration department to make it easier for them to manage the various contracts, invoices and estimates made by the company.

    𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧:
      ➤ Getting from the database the orders, invoices and quotes made by the company (MSSQL).
      ➤ Creation of a software allowing to search in database the estimates, invoices and orders in order to visualize them in a spreadsheet format (Python).
      ➤ Adding a feature allowing the export of a search in Excel or CSV format (Python).
      ➤ Creation of a software allowing to search in a database for a quote and to create a tree structure of the quotes.
      ➤ Documentation of the solutions which were implemented.
    
    𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞: Python, Electron JS, Node JS
    𝐆𝐔𝐈: PyQT, HTML, CSS, Javascript (Jquery)
    𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: SQL (MSSQL)
    𝐃𝐚𝐭𝐚: Numpy, Pandas
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠: Git, Gitlab
  `,
    mainTechno: [TechnicalStackKeys.PYTHON, TechnicalStackKeys.DATABASE]
  },
  {
    title: 'Full Stack Developer',
    bgColor: '#007773',
    stack: 'Python | Electron JS | SQL',
    date: 'Feb 2019 - May 2019',
    subtitle: 'GRDF',
    source: GRDF,
    location: 'Paris - France',
    description: `⇨ 𝐌𝐘 𝐌𝐈𝐒𝐒𝐈𝐎𝐍: Help GRDF's back-up service to increase the number of gas consumption returns by developing a web-based solution.

    𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧:
      ➤ Building a web page with a contact form to help index retrieval (HTML, CSS, Python).
      ➤ Integration of a UX strategy to facilitate the return of gas consumption as much as possible.
      ➤ Sending users feedbacks to a generic mailbox using APIs.
      ➤ Implementation of a UX strategy to simplify the return of consumption indexes as much as possible.
      ➤ Implementation of Back-End unit tests (Pytest).
    
    𝐅𝐫𝐨𝐧𝐭 𝐄𝐧𝐝: HTML, CSS (Bootstrap), Javascript
    𝐁𝐚𝐜𝐤 𝐄𝐧𝐝: Python, Flask
    𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲: PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠: Pytest
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠: Git
  `,
    mainTechno: [TechnicalStackKeys.PYTHON, TechnicalStackKeys.REACT, TechnicalStackKeys.DATABASE]
  },
  {
    title: 'Full Stack Developer',
    bgColor: '#003371',
    subtitle: 'Enedis',
    date: 'Aug 2018 - Jan 2019',
    stack: 'Python | Django | React',
    source: Enedis,
    location: 'Paris - France',
    description: `⇨ 𝐌𝐘 𝐌𝐈𝐒𝐒𝐈𝐎𝐍: Help the Enedis back-up service to increase the number of consumer index returns by offering a web-based solution.

    𝐀𝐫𝐞𝐚 𝐨𝐟 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧:
      ➤ Building a web page with a contact form to help index retrieval (HTML, CSS, Python).
      ➤ Store users responses in a database (Python, PGSQL).
      ➤ Sending users responses to a mailbox using APIs.
      ➤ Integration of a UX strategy to simplify the return of consumption indexes as much as possible.
      ➤ Retrieving client data stored in Excel format from a C# script.
      ➤ Use of APIs in C# to send emails and sms to Enedis customers to promote the web solution.
      ➤ Implementation of Back-End unit tests (Pytest).
    
    𝐅𝐫𝐨𝐧𝐭 𝐄𝐧𝐝: HTML, CSS, Javascript
    𝐁𝐚𝐜𝐤 𝐄𝐧𝐝: Python, Flask
    𝐒𝐜𝐫𝐢𝐩𝐭𝐢𝐧𝐠: C#
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠: Pytest
    𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: PGSQL
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠: Git
    `,
    mainTechno: [TechnicalStackKeys.PYTHON, TechnicalStackKeys.REACT, TechnicalStackKeys.DATABASE]
  },
]

export const schools = [
  {
    title: 'Master’s degree in Computer Science',
    subtitle: 'Epitech Paris',
    description: `Epitech is a computer science school created in 1999 which trains experts in the sector in 5 years after graduation. It allows to transform a passion into expertise through a resolutely innovative pedagogy.
It is designed to encourage open-mindedness, meetings with influencers and experts, in order to find the problem they are looking to solve.
    
    ➤ Diagnose the company's current situation and anticipate changes.
    ➤ Analyze external growth targets and meet financing needs.
    ➤ Forward: Inspired by the Canvas business model (generating value).
    ➤ Expertise in object-oriented development
    ➤ Full Stack Web Development: HTML, CSS, JavaScript (React JS), PHP, Python (Flask, Django),
    ➤ Machine and software development: C, C++.`,
    source: Epitech,
    location: 'Paris - France',
    date: '2017 - 2022',
    bgColor: '#122767'
  },
  {
    title: 'Certificate in Software Engineering',
    subtitle: 'San Francisco State University',
    location: 'San Francisco - USA',
    date: '2020 - 2021',
    description: `San Francisco State University prepares students for careers as software professionals. The school develops and works with a wide variety of technologies to build systems and applications that help solve today's problems.

    ➤ Study of software architectures and design patterns.
    ➤ Study of usability, design, development, evaluation and principles of graphical user interfaces.
    ➤ Practice of several project organization methodologies.
    ➤ Acquisition of theoretical and practical skills in network programming.
    ➤ Study of the conception, design, documentation and implementation of a database application.`,
    source: SFUni,
    bgColor: '#231161'
  }
]

export const Mangas = [
  {
    src: getVideoUrl(SNKVideo),
    icon: Levi,
    thumb: ErenThumb,
    title: 'Attack on Titans',
  },
  {
    src: getVideoUrl(KurokoVideo),
    icon: Kuruko,
    thumb: KurukoThumb,
    title: 'Kuroko\'s Basket',
  },
  {
    src: getVideoUrl(DBZVideo),
    icon: Goku,
    thumb: DragonBallThumb,
    title: 'Dragon Ball Z',
  },
  {
    src: getVideoUrl(HXHVideo),
    icon: GonThumb,
    thumb: Gon,
    title: 'Hunter x Hunter',
  }
]

export const VideoGames: VideoGameType[] = [
  {
    title: 'League of legends',
    img: LeagueOfLegend,
    type: 'Favorite Game'
  },
  {
    title: 'Life Is Strange',
    img: LifeIsStrange,
    type: 'Best Story'
  },
  {
    title: 'The Walking Dead A New Frontier',
    img: WalkingDead,
    type: 'Favorite Art Style'
  },
  {
    title: 'World of Warcraft',
    img: WorldOfWarcraft,
    type: 'Best Soundtrack'
  },
  {
    title: 'Hotline Miami',
    img: HotlineMiami,
    type: 'Hardest Game'
  },
]

export interface VideoGameType {
  title: string
  img: string
  type: string
}

export interface ModalPropsType {
  title: string
  stack?: string
  bgColor: string
  date: string
  subtitle: string
  mainTechno?: TechnicalStackKeys[]
  source: string
  location: string
  description: string
}

export const TVShowsData = [
  {
    name: 'Mr.Robot',
    image: MrRobot
  },
  {
    name: 'La casa de papel',
    image: LaCasaDePapel
  },
  {
    name: 'Breaking Bad',
    image: BreakingBad
  },
  {
    name: 'Game of thrones',
    image: Got
  },
  {
    name: '13 Reasons why',
    image: Thirteen
  },
  {
    name: 'Rick & Morty',
    image: RickAndMorty
  },
]

export interface TVShowInterface {
  name: string
  image: string
}
export interface PlaylistProps {
  title: string
  artist: string
  src: string
}