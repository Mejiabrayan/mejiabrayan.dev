export default function GradientBlur(): JSX.Element {
  return (
    <div className='absolute -z-10 opacity-50 lg:opacity-30'>
      <div
        className=' -z-30 w-[800px] h-[100px] backdrop-blur-lg from-blue-300 to-indigo-700 blur-[150px] transform -translate-x-1/2 -translate-y-1/2 rounded-full'
        style={{ top: '50%', left: '50%' }}
      />
    </div>
  );
}
