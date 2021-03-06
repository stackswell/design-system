// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FormField } from './../components/FormField';
import { TextField } from './TextField';

export default {
    title: 'Elements|Form/Text Input',
    component: TextField
};

export const field = () => (
    <>
        <FormField label="Label" labelFor="story_field_input_00">
            <TextField id="story_field_input_00" name="story_field_input_00" />
        </FormField>
    </>
);

field.story = {
    name: 'Overview'
};
