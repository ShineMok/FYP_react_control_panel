import React from 'react';
import isstring from 'is-string';
import { withState } from 'recompose';

import themes from './themes';
import Title from './components/title';
import ControlPanelContext from './components/context';

export { default as Button } from './components/button';
export { default as Checkbox } from './components/checkbox';
export { default as Multibox } from './components/multibox';
export { default as Select } from './components/select';
export { default as Text } from './components/text';
// TODO: Color
// TODO: Range

import './components/styles/base.css';
import './components/styles/color.css';

const ControlPanel = ({
  width = 300,
  theme: suppliedTheme = 'dark',
  position,
  title,
  children,
  state,
  setState,
}) => {
  const theme = isstring(suppliedTheme) ? themes[suppliedTheme] : suppliedTheme;

  const styles = {
    box: {
      background: theme.background1,
      width,
      padding: 14,
      paddingBottom: 8,
      opacity: 0.95,
      position: ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(position)
        ? 'absolute'
        : undefined,
      right: ['top-right', 'bottom-right'].includes(position) ? 8 : undefined,
      bottom: ['top-right', 'top-left'].includes(position) ? 8 : undefined,
    },
  };

  console.log(children);
  return (
    <ControlPanelContext.Provider value={{ state, setState, theme }}>
      <div className="control-panel" style={styles.box}>
        {title ? <Title title={title} /> : null}
        {children}
      </div>
    </ControlPanelContext.Provider>
  );
};

export default withState('state', 'setState', {})(ControlPanel);