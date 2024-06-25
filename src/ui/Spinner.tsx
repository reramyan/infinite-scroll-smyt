import { ThreeDots } from 'react-loader-spinner';

interface SpinnerProps {
  width?: number;
  height?: number;
  color?: string;
}

const Spinner = ({ width = 16, height = 16, color = '#1A5EE5' }: SpinnerProps) => (
  <ThreeDots height={height} width={width} color={color} />
);

export default Spinner;
