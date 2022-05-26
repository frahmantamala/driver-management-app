import { ComponentMeta, ComponentStory } from '@storybook/react';
import DriverCard, { IDriverCard } from './DriverCard';
import { mockDriverCardProps } from './DriverCard.mocks';

export default {
  title: 'cards/DriverCard',
  component: DriverCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DriverCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DriverCard> = (args) => (
  <DriverCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDriverCardProps.base,
} as IDriverCard;
