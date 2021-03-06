import { ISpinnerStyleProps, ISpinnerStyles, SpinnerSize } from './Spinner.types';
import { hiddenContentStyle, keyframes, HighContrastSelector, getGlobalClassNames } from '../../Styling';

const GlobalClassNames = {
  root: 'ms-Spinner',
  circle: 'ms-Spinner-circle',
  label: 'ms-Spinner-label'
};

const spinAnimation: string = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const getStyles = (props: ISpinnerStyleProps): ISpinnerStyles => {
  const { theme, size, className, labelPosition } = props;

  const { palette } = theme;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      labelPosition === 'top' && {
        flexDirection: 'column-reverse'
      },
      labelPosition === 'right' && {
        flexDirection: 'row'
      },
      labelPosition === 'left' && {
        flexDirection: 'row-reverse'
      },
      className
    ],
    circle: [
      classNames.circle,
      {
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '1.5px solid ' + palette.themeLight,
        borderTopColor: palette.themePrimary,
        animationName: spinAnimation,
        animationDuration: '1.3s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(.53,.21,.29,.67)',
        selectors: {
          [HighContrastSelector]: {
            borderTopColor: 'Highlight'
          }
        }
      },
      size === SpinnerSize.xSmall && [
        'ms-Spinner--xSmall',
        {
          width: 12,
          height: 12
        }
      ],
      size === SpinnerSize.small && [
        'ms-Spinner--small',
        {
          width: 16,
          height: 16
        }
      ],
      size === SpinnerSize.medium && [
        'ms-Spinner--medium',
        {
          width: 20,
          height: 20
        }
      ],
      size === SpinnerSize.large && [
        'ms-Spinner--large',
        {
          width: 28,
          height: 28
        }
      ]
    ],
    label: [
      classNames.label,
      {
        color: palette.themePrimary,
        margin: '10px 0 0',
        textAlign: 'center'
      },
      labelPosition === 'top' && {
        margin: '0 0 10px'
      },
      labelPosition === 'right' && {
        margin: '0 0 0 10px'
      },
      labelPosition === 'left' && {
        margin: '0 10px 0 0'
      }
    ],
    screenReaderText: hiddenContentStyle
  };
};
