import { Input1 } from "../Components/Input1/Input1";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IProps } from "../Components";

export default{
    title:'Design System/Atoms/Input1',
    Component: Input1
} as ComponentMeta <typeof Input1>;

const Template: ComponentStory<typeof Input1> = (props) => <Input1 {...props} />;

export const Instance = Template.bind({});

const default_props = {
    is_required: true,
    error_massage : false,
    text: "Error massage"
  } as IProps

Instance.args = default_props;