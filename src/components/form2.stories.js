import React from 'react';

import { Form2 } from './form2';

export default {
  title: 'Example/Form',
  component: Form2,
};

const Template = () => <Form2 size={"big"} />;
const TemplateTwo = () => <Form2 size={"small"} />;

export const Primary = Template.bind({});
export const Secondary = TemplateTwo.bind({});

