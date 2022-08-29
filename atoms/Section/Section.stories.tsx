import { ComponentStory } from '@storybook/react';
import Section from './Section';

export default {
  title: 'Atoms/Section',
  component: Section,
};

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Normal: ComponentStory<typeof Section> = Template.bind({});

Normal.args = {
  children: 'Normal section',
};
