import { Tost } from "../Components";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TostProps } from "../Components";

export default {
    title: 'Design System/Atoms/Tost input',
    Component: Tost,
    argTypes :{
        status:{
            options:["success","warning","error"],
            control: { type: "select"}
        },
    },
} as ComponentMeta<typeof Tost>;

const Template: ComponentStory<typeof Tost> = (props) => <Tost {...props} />;

export const Instance = Template.bind({});

const default_props = {
    status: "success",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam praesentium obcaecati iste soluta, facilis, itaque iure qui, nobis ullam inventore explicabo accusantium fugiat temporibus voluptates debitis illo odit aut. A!"
} as TostProps

Instance.args = default_props;