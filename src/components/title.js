import React from 'react';
import { withTheme } from './context';

export default withTheme(({ title, theme }) => (
  <div
    style={{
      width: '100%',
      textAlign: 'center',
      color: theme.text2,
      textTransform: 'uppercase',
      height: 20,
      marginBottom: 4,
    }}
  >
    {title}
  </div>
));
