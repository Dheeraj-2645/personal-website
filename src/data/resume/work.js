/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'ALLEN Digital',
    position: 'Software Engineer',
    url: 'https://www.linkedin.com/company/weareallendigital',
    startDate: '2023-10-07',
    endDate: '2024-07-31',
    summary: `ALLEN Digital is the digital wing of ALLEN Career Institute, a leading educational organization in India known 
    for its test preparation programs, particularly for engineering (JEE), medical (NEET), and other competitive exams. 
    This platform supports millions of users by offering services like digital classrooms, personalized learning paths, test analytics, 
    and content distribution.`,
    highlights: [
      'Streamlined the design and implementation of database schemas for the authorization service backend using GoLang and MySQL, handling data for over 10 million users, ensuring optimal storage and quick retrieval of access information.',
      'Implemented a sidecar for a BFF service using Casbin for RBAC and ABAC authorization, loading 100k+ policies into local memory at startup to reduce network latency and improve performance.',
      'Built comprehensive CRUD APIs for user access management, covering diverse resources, and ensured code reliability with rigorous unit and integration testing, consistently maintaining over 90% test coverage.',
      'Designed and developed asynchronous batch processing with Temporal, creating workflows to efficiently handle more than 10k batch changes per request while ensuring optimal system performance.',
    ],
  },
  {
    name: 'Zomato',
    position: 'Software Development Engineer',
    url: 'https://www.linkedin.com/company/zomato',
    startDate: '2022-07-04',
    endDate: '2023-08-11',
    summary: `Zomato is a global food delivery and restaurant discovery platform based in India. 
    It connects customers with local restaurants for online ordering and dining experiences. 
    The platform offers services like real-time order tracking, customer feedback collection, and delivery 
    optimization, serving millions of users daily. Zomato leverages advanced technology to 
    streamline operations, enhance user experience, and support restaurant partners in scaling their businesses.`,
    highlights: [
      'Designed and executed a system for rider performance tracking and geofence monitoring, reducing live order support tickets by 3% and saving $20,000 monthly through automated order verification.',
      'Integrated a weekly rider survey using AWS SQS and event-driven architecture, optimizing feedback collection and preventing survey spam through strategically scheduled notifications, handling over 100k notifications per week.',
      'Developed comprehensive order lifecycle tracking using AWS DynamoDB and a pub-sub architecture, maintaining action histories for live orders to enable detailed data analysis and future insights.',
    ],
  },
  {
    name: 'Spur.fit',
    position: 'Deep Learning Engineer Intern',
    url: 'https://www.linkedin.com/company/spur-fit',
    startDate: '2021-06-01',
    endDate: '2021-08-31',
    summary: `Spur.fit is a fitness technology platform that leverages advanced computer vision and AI techniques
    to deliver personalized workout experiences. It focuses on enabling users to track their fitness goals with 
    innovative solutions like real-time motion analysis, repetition counting, and privacy-enhanced live video processing.`,
    highlights: [
      'Evaluated existing Deep learning solutions and implemented a versatile solution for repetition count tracking with Movenet and Posenet, applicable to various workout types.',
      'Integrated human background segmentation in live videos using OpenCV for enhanced user privacy',
      'Developed a CNN model for workout detection, conducting analysis and testing of diverse Deep Learning architectures.',
    ],
  },
  {
    name: 'The 10x Academy',
    position: 'Mentor',
    url: 'https://www.linkedin.com/company/the-10x-academy',
    startDate: '2021-12-01',
    endDate: '2022-06-30',
    summary: `The 10x Academy is an intensive coding bootcamp designed to transform individuals into industry-ready software developers. 
    It offers hands-on training in data structures, algorithms, and full-stack development through real-world projects and personalized mentorship.`,
    highlights: [
      'Mentored around 150 students in improving their problem solving skills and conceptual clarifications on DSA and full stack development.',
      'Lectured solutions regularly and conducted one-to-one interactive sessions to effectively facilitate their learning and growth.',
    ],
  },
  {
    name: 'IIT Roorkee Motorsports',
    position: 'Accumulator Lead',
    url: 'https://motorsports.iitr.ac.in',
    startDate: '2018-12-01',
    endDate: '2022-05-01',
    summary: `IIT Roorkee Motorsports is a student-led team at the Indian Institute of Technology Roorkee, 
    dedicated to designing, building, and competing with high-performance electric race cars in 
    national and international Formula Student competitions. `,
    highlights: [
      'Led a 12-member team for the accumulator subsystem, overseeing the design and development of the energy storage unit of the cars.',
      'Designed multiple PCB boards for voltage and current sensing of the battery pack, contributing to the determination of the battery box’s state of charge.',
    ],
  },
];

export default work;
