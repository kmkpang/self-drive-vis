// component
import userStore from 'stores/user.store';
import { BarChart, Create } from '@mui/icons-material';
// ----------------------------------------------------------------------

const useNavConfig = () => [
  {
    title: 'View Test Scenarios',
    path: '/',
    icon: <BarChart />,
  },
  {
    title: 'Generate Test Scenarios',
    path: '/form',
    icon: <Create />,
  },
];

export default useNavConfig;
