import {
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGolang,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
} from '@tabler/icons-react';

const LOGOS = [
  <IconBrandReact width={54} height={54} className='text-accents-6' />,
  <IconBrandTailwind width={54} height={54} className='text-accents-6' />,
  <IconBrandCss3 width={54} height={54} className='text-accents-6' />,
  <IconBrandFigma width={54} height={54} className='text-accents-6' />,
  <IconBrandGolang width={54} height={54} className='text-accents-6' />,
  <IconBrandHtml5 width={54} height={54} className='text-accents-6' />,
  <IconBrandTypescript width={54} height={54} className='text-accents-6' />,
  <IconBrandJavascript width={54} height={54} className='text-accents-6' />,
  <IconBrandSupabase width={54} height={54} className='text-accents-6' />,
  <IconBrandReactNative width={54} height={54} className='text-accents-6' />,
  <IconBrandPython width={54} height={54} className='text-accents-6' />,
];

export const InfiniteSlider = ({ className }: { className?: string }) => {
  return (
    <div className="relative m-auto w-full overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className='animate-infinite-slider flex w-[calc(250px*10)]'>
        {LOGOS.map((logo, index) => (
          <span
            className='slide flex w-[125px] items-center justify-center'
            key={index}
          >
            {logo}
          </span>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className='slide flex w-[125px] items-center justify-center'
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
