import { Button } from "../Components";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Myprops } from "../Components";


// export const Primary = () =>  <Button variant="Primary" text="create"/>;
// export const Secondary = () =>  <Button variant="Secondary" text="create"/>;

export default {
    title: 'Design System/Atoms/Button',
    component: Button
} as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (props) => <Button variant={props.variant} text={props.text}/>;

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />;


  
export const Instance = Template.bind({});

const default_props = {
    variant: "Primary",
    text : "create"
  } as Myprops

Instance.args = default_props;