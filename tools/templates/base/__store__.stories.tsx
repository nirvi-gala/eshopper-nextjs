import { ComponentMeta, ComponentStory } from '@storybook/react';
import __store__, { I__store__ } from '.';
import { mock__store__Props } from './__store__.mocks';

export default {
  title: 'templates/__store__',
  component: __store__,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof __store__>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof __store__> = (args) => (
  <__store__ {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mock__store__Props.base,
} as I__store__;