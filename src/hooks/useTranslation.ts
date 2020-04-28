import { useIntl } from 'gatsby-plugin-intl';

export const useTranslation = (namespace: string) => {
  const { formatMessage, ...rest } = useIntl();

  const t = (id: string) => formatMessage({ id: `${namespace}.${id}` });

  return { t, ...rest };
};
