import React, { VoidFunctionComponent } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import LinkButton from 'atoms/LinkButton/LinkButton';
import CsdevIcon from 'shared/Icons/CsdevIcon';
import GithubIcon from 'shared/Icons/GithubIcon';
import LinkedinIcon from 'shared/Icons/LinkedinIcon';
import YoutubeIcon from 'shared/Icons/YoutubeIcon';

const FooterSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();
  const urlCV =
    'https://drive.google.com/file/d/1E0d-lYcgep7aTTuixgdBh9ifwdqeX7KJ/view?usp=sharing';

  return (
    <footer
      className={clsx(
        'w-full',
        'min-h-screen',
        'flex',
        'items-center',
        'justify-center',
        'bg-cs-hard-black',
        'dark:bg-cs-hard-black',
        'w-full',
      )}
    >
      <div className="container mx-auto flex-wrap items-center text-white flex flex-col w-full">
        <div className="w-full text-6xl font-bold mt-8">
          <h2 className="w-full md:w-2/3 break-words">{t('footer.contact')}</h2>
        </div>
        <div className="w-full flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            {t('footer.contact.text')}
            <br />
            {t('footer.contact.text2')}
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <LinkButton type="external" href={urlCV} className="text-lg w-full">
              {t('main.button')}
            </LinkButton>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex mt-24 mb-12 flex-row justify-between items-center">
            <div className="">
              <CsdevIcon height={40} width={40} />
            </div>
            <Link href="/">
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                {t('link.home')}
              </a>
            </Link>
            <Link href="/contact">
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                {t('link.contact')}
              </a>
            </Link>

            <div className="flex flex-row space-x-8 items-center justify-between">
              <a
                target="_blank"
                href="https://github.com/cristiandev19"
                className="bg-white border rounded"
              >
                <GithubIcon />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/cristian-sotomayor19/"
              >
                <LinkedinIcon />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCbcKdTfx7bE4bim6yynimZw"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-gray-600">
            Copyright © 2021 Cristian Sotomayor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
