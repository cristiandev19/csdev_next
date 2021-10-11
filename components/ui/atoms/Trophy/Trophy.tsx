import React, { FunctionComponent } from 'react';

type TrophyProps = {
  row: number;
  col: number;
};

const Trophy: FunctionComponent<TrophyProps> = ({ row, col }) => (
  <>
    <a href="https://github.com/ryo-ma/github-profile-trophy">
      <img
        className="w-full"
        src={`https://github-profile-trophy.vercel.app/?username=cristiandev19&row=${row}&column=${col}`}
        alt="cristiandev19"
      />
    </a>
  </>
);

export default Trophy;
