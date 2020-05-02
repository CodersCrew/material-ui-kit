import { useEffect } from 'react';
import { navigate } from 'gatsby-plugin-intl';

export default () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
};
