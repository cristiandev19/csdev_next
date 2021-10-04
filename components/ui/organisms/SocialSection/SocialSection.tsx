import clsx from 'clsx';
import React, { useContext, VoidFunctionComponent } from 'react';
import ThemeContext from '../../../../contexts/theme/theme.context';
import GithubIcon from '../../../Icons/GithubIcon';
import LinkedinIcon from '../../../Icons/LinkedinIcon';
import YoutubeIcon from '../../../Icons/YoutubeIcon';

const SocialSection: VoidFunctionComponent = () => {
  const { themeState } = useContext(ThemeContext);

  return (
    <div className={clsx(themeState?.theme === 'dark' && 'pt-36')}>

      <a target="_blank" href="https://github.com/cristiandev19" className="flex w-full items-center justify-center rounded-xl my-2 py-2" style={{ backgroundColor: '#4078c0' }} rel="noreferrer">
        <GithubIcon width={40} height={40} />
        <div className="ml-4 text-cs-white">Github</div>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/cristian-sotomayor19/" className="flex w-full items-center justify-center rounded-xl my-2 py-2" style={{ backgroundColor: '#002e46' }} rel="noreferrer">
        <LinkedinIcon width={40} height={40} />
        <div className="ml-4 text-cs-white">Linkedin</div>
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UCbcKdTfx7bE4bim6yynimZw" className="flex w-full items-center justify-center rounded-xl my-2 py-2" style={{ backgroundColor: '#ea4335' }} rel="noreferrer">
        <YoutubeIcon width={40} height={40} />
        <div className="ml-4 text-cs-white">Youtube</div>
      </a>
    </div>
  );
};

export default SocialSection;
