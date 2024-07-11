import React from 'react';
import useScrambleText from './use-scramble-text';

type Props = {
  title: string;
  animationDelay: number;
  paused?: boolean;
  once?: boolean;

};

const ScrambleTitle: React.FC<Props> = ({ title, animationDelay, paused, once }) => {
  const letters = useScrambleText({ title, animationDelay, paused, once });

  return <div className="text-base lg:text-xl xl:text-2xl text-accents-7">{letters}</div>;
};

export default ScrambleTitle;