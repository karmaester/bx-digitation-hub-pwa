import IconPropsT from './IconPropsT';

type ChevronIcopPropsT = {
  angle?: number;
} & IconPropsT;

export const ChevronIcon = ({ size = '1em', angle = 0 }: ChevronIcopPropsT) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      transform={`rotate(${angle})`}
    >
      <path
          d='M2.3 17.66c.41.453 1.058.453 1.468 0l8.065-8.915 8.422 8.927a.951.951 0 0 0 1.457-.036c.39-.465.39-1.181-.032-1.611l-9.145-9.703A.998.998 0 0 0 11.812 6c-.27 0-.53.107-.734.334L2.3 16.037c-.4.453-.4 1.17 0 1.623Z'
        />
    </svg>
  );
};
