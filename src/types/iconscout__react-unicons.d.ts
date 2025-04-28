declare module '@iconscout/react-unicons' {
  import { FC, SVGProps } from 'react';

  interface IconProps extends SVGProps<SVGElement> {
    size?: string | number;
    color?: string;
  }

  export const UilMediumM: FC<IconProps>;
} 