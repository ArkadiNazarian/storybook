import { TextInput } from "../Components/Text Input/TextInput";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IProps } from "../Components";

export default{
    title:'Design System/Atoms/TextInput',
    Component: TextInput
} as ComponentMeta <typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (props) => <TextInput {...props} />;

export const Instance = Template.bind({});

const default_props = {
    is_required: true,
    error_message : false,
    text: "Error message"
  } as IProps

Instance.args = default_props;