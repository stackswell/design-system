// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Dialog } from './../components/Dialog';
import { DialogBody } from './DialogBody';
import { DialogHeader } from './DialogHeader';

const CloseDialog = () => null;

export default {
    title: 'Elements|Dialog/Dialog Header',
    component: DialogHeader
};

export const header = () => (
    <div style={{ height: `30rem` }}>
        <Dialog close={CloseDialog} visible>
            <DialogHeader close={() => null}>Header with Close</DialogHeader>
            <DialogBody />
        </Dialog>
    </div>
);

header.story = {
    name: 'Default'
};

export const headerWithoutClose = () => (
    <div style={{ height: `30rem` }}>
        <Dialog close={CloseDialog} visible>
            <DialogHeader>Header without Close</DialogHeader>
            <DialogBody />
        </Dialog>
    </div>
);

headerWithoutClose.story = {
    name: 'Without Close'
};
