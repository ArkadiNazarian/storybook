import { Input } from "../Components";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Inputprops } from "../Components";

export default{
    title:'Design System/Atoms/Input',
    Component: Input
} as ComponentMeta <typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => <Input {...props} />;

export const Instance = Template.bind({});

const default_props = {
    status: "optional",
    text : "The field is required"
  } as Inputprops

Instance.args = default_props;

