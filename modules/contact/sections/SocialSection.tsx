import clsx from 'clsx';
import GithubIcon from 'components/Icons/GithubIcon';
import LinkedinIcon from 'components/Icons/LinkedinIcon';
import TwitterIcon from 'components/Icons/TwitterIcon';
import YoutubeIcon from 'components/Icons/YoutubeIcon';
import HoveredCard from 'components/ui/atoms/HoveredCard';
import React, { VoidFunctionComponent } from 'react';

const SocialSection: VoidFunctionComponent = () => {
  const handleClick = (url): void => {
    window.open(url, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
      <HoveredCard onClick={() => handleClick('https://github.com/csdev19')}>
        <div className="flex items-center	flex-col p-10">
          <GithubIcon width={40} height={40} />
          <div className="text-cs-white">Github</div>
        </div>
      </HoveredCard>

      <HoveredCard
        onClick={() =>
          handleClick('https://www.linkedin.com/in/cristian-sotomayor19/')
        }
      >
        <div className="flex items-center	flex-col p-10">
          <LinkedinIcon width={40} height={40} />
          <div className="text-cs-white">Linkedin</div>
        </div>
      </HoveredCard>

      <HoveredCard
        onClick={() =>
          handleClick(
            'https://www.youtube.com/channel/UCbcKdTfx7bE4bim6yynimZw',
          )
        }
      >
        <div className="flex items-center	flex-col p-10">
          <YoutubeIcon width={40} height={40} />
          <div className="text-cs-white">Youtube</div>
        </div>
      </HoveredCard>

      <HoveredCard onClick={() => handleClick('https://twitter.com/csdev19')}>
        <div className="flex items-center	flex-col p-10">
          <TwitterIcon width={40} height={40} />
          <div className="text-cs-white">Twitter</div>
        </div>
      </HoveredCard>
    </div>
  );
};

export default SocialSection;
