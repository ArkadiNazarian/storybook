import { TextInput } from "../Components/Text Input/TextInput";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IProps } from "../Components";

export default {
  title: 'Design System/Atoms/TextInput',
  Component: TextInput
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (props) => <TextInput {...props} />;

export const Instance = Template.bind({});

const default_props = {
  is_required: true,
  has_error_message: false,
  error_message: "Error message"
} as IProps

Instance.args = default_props;