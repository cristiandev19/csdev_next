import React, { VoidFunctionComponent } from 'react';
import GithubIcon from '../../../Icons/GithubIcon';
import LinkedinIcon from '../../../Icons/LinkedinIcon';
import TwitterIcon from '../../../Icons/TwitterIcon';
import YoutubeIcon from '../../../Icons/YoutubeIcon';

const SocialSection: VoidFunctionComponent = () => (
  <div>
    <a
      target="_blank"
      href="https://github.com/cristiandev19"
      className="flex w-full items-center justify-center rounded-xl my-2 py-2"
      style={{ backgroundColor: '#4078c0' }}
      rel="noreferrer"
    >
      <GithubIcon width={40} height={40} />
      <div className="ml-4 text-cs-white">Github</div>
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/cristian-sotomayor19/"
      className="flex w-full items-center justify-center rounded-xl my-2 py-2"
      style={{ backgroundColor: '#002e46' }}
      rel="noreferrer"
    >
      <LinkedinIcon width={40} height={40} />
      <div className="ml-4 text-cs-white">Linkedin</div>
    </a>
    <a
      target="_blank"
      href="https://www.youtube.com/channel/UCbcKdTfx7bE4bim6yynimZw"
      className="flex w-full items-center justify-center rounded-xl my-2 py-2"
      style={{ backgroundColor: '#ea4335' }}
      rel="noreferrer"
    >
      <YoutubeIcon width={40} height={40} />
      <div className="ml-4 text-cs-white">Youtube</div>
    </a>
    <a
      target="_blank"
      href="https://twitter.com/csdev19"
      className="flex w-full items-center justify-center rounded-xl my-2 py-2"
      rel="noreferrer"
      style={{ backgroundColor: '#319bf0' }}
    >
      <TwitterIcon width={40} height={40} />
      <div className="ml-4 text-cs-white">Twitter</div>
    </a>
  </div>
);

export default SocialSection;
