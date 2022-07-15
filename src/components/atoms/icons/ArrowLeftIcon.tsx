type ArrowLeftPropsT = {
  size?: { width: number; height: number };
};

export const ArrowLeftIcon = ({size = { width: 16, height: 8 }}: ArrowLeftPropsT) => {
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox='0 0 16 8'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      stroke='currentColor'
    >
      <path
        d='M15.2245 3.24759H2.66992L4.62866 1.26903C4.9228 0.971604 4.91611 0.49313 4.6086 0.208632C4.30109 -0.0758662 3.80639 -0.0694003 3.51224 0.22803L0.216493 3.54502C-0.0776508 3.84245 -0.0709658 4.30799 0.229863 4.59896L3.51893 7.78016C3.67269 7.92888 3.86655 8 4.06711 8C4.26766 8 4.46153 7.92888 4.61529 7.78016C4.91611 7.4892 4.91611 7.01072 4.61529 6.71976L2.5897 4.75414H15.2245C15.6524 4.75414 16 4.41791 16 4.0041C16 3.59028 15.6524 3.24759 15.2245 3.24759Z'
      />
    </svg>
  );
};
