import './styles.scss';

import Typography from '..';
import { ITypography } from '..';

const typographyInfo = {
  headline: {
    large: {
      title: 'Headline Large',
      size: 'Size: 44px',
      weight: 'Weight: 700',
      lineHeight: 'Line height: 56px',
    },
    medium: {
      title: 'Headline Medium',
      size: 'Size: 32px',
      weight: 'Weight: 700',
      lineHeight: 'Line height: 44px',
    },
    small: {
      title: 'Headline Small',
      size: 'Size: 24px',
      weight: 'Weight: 700',
      lineHeight: 'Line height: 32px',
    },
  },
  title: {
    large: {
      title: 'Title Large',
      size: 'Size: 34px',
      weight: 'Weight: 600',
      lineHeight: 'Line height: 40px',
    },
    medium: {
      title: 'Title Medium',
      size: 'Size: 24px',
      weight: 'Weight: 600',
      lineHeight: 'Line height: 32px',
    },
    small: {
      title: 'Title Small',
      size: 'Size: 20px',
      weight: 'Weight: 600',
      lineHeight: 'Line height: 24px',
    },
  },
  label: {
    large: {
      title: 'Label Large',
      size: 'Size: 20px',
      weight: 'Weight: 600',
      lineHeight: 'Line height: 24px',
    },
    medium: {
      title: 'Label Medium',
      size: 'Size: 16px',
      weight: 'Weight: 600',
      lineHeight: 'Line height: 20px',
    },
    small: {
      title: 'Label Small',
      size: 'Size: 14px',
      weight: 'Weight: 600',
      lineHeight: 'Line height: 16px',
    },
  },
  body: {
    large: {
      title: 'Body Large',
      size: 'Size: 16px',
      weight: 'Weight: 400',
      lineHeight: 'Line height: 24px',
    },
    medium: {
      title: 'Body Medium',
      size: 'Size: 14px',
      weight: 'Weight: 400',
      lineHeight: 'Line height: 20px',
    },
    small: {
      title: 'Body Small',
      size: 'Size: 12px',
      weight: 'Weight: 400',
      lineHeight: 'Line height: 16px',
    },
  },
};

export const TypographyItem = ({ children, ...args }: ITypography) => {
  if (args.type === undefined || args.size === undefined) {
    return;
  }

  return (
    <div className='item stories-typography__item'>
      <div className='details'>
        <Typography type='title' size='medium'>
          {typographyInfo[args.type][args.size].title}
        </Typography>
        <div>
          <Typography type='body' size='medium'>
            {typographyInfo[args.type][args.size].size}
          </Typography>
          <Typography type='body' size='medium'>
            {typographyInfo[args.type][args.size].weight}
          </Typography>
          <Typography type='body' size='medium'>
            {typographyInfo[args.type][args.size].lineHeight}
          </Typography>
        </div>
      </div>
      <div className='representation'>
        <Typography {...args}>{children}</Typography>
      </div>
    </div>
  );
};
