import React from 'react';

import { storiesOf } from '@storybook/react';
import { Component } from './Component';

storiesOf('Component.stories', module)
  .add('view', () => (
    <Component/>
  ))
;