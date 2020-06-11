import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Landing from '../packages/landing/src/App';
import Student from '../packages/student/src/App';
import Teacher from '../packages/teacher/src/App';
import Admin from '../packages/admin/src/App';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const landingPage = () => <><Landing/></>; 
export const student = () => <><Student/></>; 
export const teacher = () => <><Teacher/></>; 
export const admin = () => <><Admin/></>; 
