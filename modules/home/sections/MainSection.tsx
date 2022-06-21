import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import clsx from 'clsx';
import Container from 'components/ui/atoms/Container';
import LinkButton from 'components/ui/atoms/LinkButton/LinkButton';
import useWindowSize, { WidthSizesProps } from 'hooks/useWindowSize';
import CsdevIcon from 'components/Icons/CsdevIcon';
import { useTranslation } from 'react-i18next';

const devNamePerSize: WidthSizesProps<string> = {
  extrasmall: 'Cristian',
  small: 'Cristian',
  medium: 'Cristian Sotomayor',
  large: 'Cristian Sotomayor',
  extralarge: 'Cristian Sotomayor',
};

const MainSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();

  const urlCV =
    'https://drive.google.com/file/d/1E0d-lYcgep7aTTuixgdBh9ifwdqeX7KJ/view?usp=sharing';

  const [devName, setDevName] = useState('Cristian Sotomayor');

  const [size, widthStates] = useWindowSize();

  useEffect(() => {
    setDevName(devNamePerSize[widthStates]);
  }, [size]);

  return (
    <section>
      <Container>
        <div
          className={clsx(
            'grid',
            'grid-cols-1',
            'md:grid-cols-12',
            'sm:mt-0',
            'xl:mt-4',
            'md:h-screen',
          )}
        >
          <div
            className={clsx(
              'relative',
              'flex',
              'flex-col',
              'justify-center',
              'mt-8',
              'md:mt-0',
              'order-last',
              'md:order-first',
              'md:col-span-7',
            )}
          >
            <div className="text-lg">{t('main.greeting')}</div>

            <div className="flex">
              <div className="typing-effect">
                <h1 className="my-4 text-2xl lg:text-2xl font-bold word-break">
                  &#60;
                  {devName}
                  /&#62;
                </h1>
              </div>
            </div>

            <p className="text-lg mb-2">
              <span>{t('main.introduction')} &#128293;</span>
            </p>

            <LinkButton type="external" href={urlCV}>
              {t('main.button')}
            </LinkButton>
          </div>
          <div
            className={clsx(
              'w-4/5',
              'flex',
              'xl:w-4/5',
              'm-auto',
              'sm:my-auto',
              'md:mr-0',
              'md:col-span-5',
            )}
          >
            <CsdevIcon width="100%" height="100%" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainSection;
