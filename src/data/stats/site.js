import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/dheeraj-2645/personal-website
 */
const data = [
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/dheeraj-2645/personal-website/stargazers',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/dheeraj-2645/personal-website/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
