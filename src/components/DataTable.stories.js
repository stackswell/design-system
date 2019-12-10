// eslint-disable-next-line no-unused-vars
import React from 'react';

import { DataTable } from './DataTable';

export default {
    title: 'Components|Tables',
    component: DataTable
};
export const dataTable = () => {
    const DataTableSampleData = {
        columns: React.useMemo(
            () => [
                {
                    Header: `Specification Added?`,
                    accessor: `specAdded`
                },
                {
                    Header: `Nationally Notifiable?`,
                    accessor: `notifyNationally`
                },
                {
                    Header: `Specification Name`,
                    accessor: `name`
                },
                {
                    Header: `Version`,
                    accessor: `version`
                },
                {
                    Header: `Category`,
                    accessor: `category`
                },
                {
                    Header: `Status`,
                    accessor: `status`
                },
                {
                    Header: `Last Updated`,
                    accessor: `updated`
                },
                {
                    Header: ``,
                    accessor: `controls`
                }
            ],
            []
        ),
        data: React.useMemo(
            () => [
                {
                    name: `Campylobacteriosis`,
                    version: `0.0`,
                    category: `Enteric Diseases`,
                    status: `Published to Production`,
                    updated: ``,
                    specAdded: true,
                    notifyNationally: `Y`
                },
                {
                    name: `Carbon Monoxide Poisoning`,
                    version: `1.0`,
                    category: `Toxic Effects of Non-Medicinal Substances`,
                    status: `In Progress`,
                    updated: ``,
                    specAdded: true,
                    notifyNationally: `Y`
                },
                {
                    name: `Chlamydia`,
                    version: `2.0`,
                    category: `Sexually Transmitted Infections`,
                    status: `Published to Production`,
                    updated: ``,
                    specAdded: true,
                    notifyNationally: `Y`
                }
            ],
            []
        )
    };

    return (
        <>
            <DataTable
                columns={DataTableSampleData.columns}
                data={DataTableSampleData.data}
                id="story_datatable_00"
                label="Sample Table"
            />
        </>
    );
};

dataTable.story = {
    name: 'Data Table'
};