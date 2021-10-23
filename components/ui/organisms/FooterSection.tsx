import React, { VoidFunctionComponent } from 'react';
import CsdevIcon from '../../Icons/CsdevIcon';
import GithubIcon from '../../Icons/GithubIcon';
import LinkedinIcon from '../../Icons/LinkedinIcon';
import YoutubeIcon from '../../Icons/YoutubeIcon';
import LinkButton from '../atoms/LinkButton/LinkButton';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const FooterSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();
  const urlCV =
    'https://drive.google.com/file/d/1Wy9OrjhQmzAfKWnj9tbkgcsPcuQAXsxa/view?usp=sharing';

  return (
    <footer className="w-full min-h-screen flex items-center justify-center bg-cs-hard-black dark:bg-cs-hard-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-6xl font-bold mt-8">
          <h2 className="w-full md:w-2/3 break-words">{t('footer.contact')}</h2>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            {t('footer.contact.text')}
            <br />
            {t('footer.contact.text2')}
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <LinkButton type="external" href={urlCV}>
              {t('main.button')}
            </LinkButton>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between">
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
