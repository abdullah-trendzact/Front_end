// // /* eslint-disable prettier/prettier */
// // import { useMemo, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { toAbsoluteUrl } from '@/utils';
// // import { DataGrid, DataGridColumnHeader, KeenIcon, useDataGrid, DataGridRowSelectAll, DataGridRowSelect } from '@/components';
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // import { UsersData } from './';
// // import { toast } from 'sonner';
// // import { Input } from '@/components/ui/input';
// // const Users = () => {
// //   const ColumnInputFilter = ({
// //     column
// //   }) => {
// //     return <Input placeholder="Filter..." value={column.getFilterValue() ?? ''} onChange={event => column.setFilterValue(event.target.value)} className="h-9 w-full max-w-40" />;
// //   };
// //   const columns = useMemo(() => [{
// //     accessorKey: 'id',
// //     header: () => <DataGridRowSelectAll />,
// //     cell: ({
// //       row
// //     }) => <DataGridRowSelect row={row} />,
// //     enableSorting: false,
// //     enableHiding: false,
// //     meta: {
// //       headerClassName: 'w-0'
// //     }
// //   }, {
// //     accessorFn: row => row.user,
// //     id: 'users',
// //     header: ({
// //       column
// //     }) => <DataGridColumnHeader title="Member" filter={<ColumnInputFilter column={column} />} column={column} />,
// //     enableSorting: true,
// //     cell: ({
// //       row
// //     }) => {
// //       // 'row' argumentini cell funksiyasiga qo'shdik
// //       return <div className="flex items-center gap-4">
// //               <img src={toAbsoluteUrl(`/media/avatars/${row.original.user.avatar}`)} className="rounded-full size-9 shrink-0" alt={`${row.original.user.userName}`} />

// //               <div className="flex flex-col gap-0.5">
// //                 <Link to="#" className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px">
// //                   {row.original.user.userName}
// //                 </Link>
                
// //                 <Link to="#" className="text-2sm text-gray-700 font-normal hover:text-primary-active">
// //                   {row.original.user.userGmail}
// //                 </Link> 
// //               </div>
// //             </div>;
// //     },
// //     meta: {
// //       className: 'min-w-[300px]',
// //       cellClassName: 'text-gray-800 font-normal'
// //     }
// //   }, {
// //     accessorFn: row => row.role,
// //     id: 'role',
// //     header: ({
// //       column
// //     }) => <DataGridColumnHeader title="Pole" column={column} />,
// //     enableSorting: true,
// //     cell: info => {
// //       return info.row.original.role;
// //     },
// //     meta: {
// //       headerClassName: 'min-w-[180px]'
// //     }
// //   }, {
// //     accessorFn: row => row.status,
// //     id: 'status',
// //     header: ({
// //       column
// //     }) => <DataGridColumnHeader title="Status" column={column} />,
// //     enableSorting: true,
// //     cell: info => {
// //       return <span className={`badge badge-${info.row.original.status.color} shrink-0 badge-outline rounded-[30px]`}>
// //               <span className={`size-1.5 rounded-full bg-${info.row.original.status.color} me-1.5`}></span>
// //               {info.row.original.status.label}
// //             </span>;
// //     },
// //     meta: {
// //       headerClassName: 'min-w-[180px]'
// //     }
// //   }, {
// //     accessorFn: row => row.location,
// //     id: 'location',
// //     header: ({
// //       column
// //     }) => <DataGridColumnHeader title="Location" column={column} />,
// //     enableSorting: true,
// //     cell: info => {
// //       return <div className="flex items-center text-gray-800 font-normal gap-1.5">
// //               <img src={toAbsoluteUrl(`/media/flags/${info.row.original.flag}`)} className="rounded-full size-4 shrink-0" alt={`${info.row.original.user.userName}`} />
// //               {info.row.original.location}
// //             </div>;
// //     },
// //     meta: {
// //       headerClassName: 'min-w-[180px]'
// //     }
// //   }, {
// //     accessorFn: row => row.activity,
// //     id: 'activity',
// //     header: ({
// //       column
// //     }) => <DataGridColumnHeader title="Activity" column={column} />,
// //     enableSorting: true,
// //     cell: info => {
// //       return info.row.original.activity;
// //     },
// //     meta: {
// //       headerClassName: 'min-w-[180px]',
// //       cellClassName: 'text-gray-800 font-normal'
// //     }
// //   }, {
// //     id: 'edit',
// //     header: () => '',
// //     enableSorting: false,
// //     cell: () => {
// //       return <button className="btn btn-sm btn-icon btn-clear btn-light">
// //               <KeenIcon icon="dots-vertical" /> 
// //             </button>;
// //     },
// //     meta: {
// //       headerClassName: 'w-[60px]'
// //     }
// //   }], []);
// //   const data = useMemo(() => UsersData, []);
// //   const handleRowSelection = state => {
// //     const selectedRowIds = Object.keys(state);
// //     if (selectedRowIds.length > 0) {
// //       toast(`Total ${selectedRowIds.length} are selected.`, {
// //         description: `Selected row IDs: ${selectedRowIds}`,
// //         action: {
// //           label: 'Undo',
// //           onClick: () => console.log('Undo')
// //         }
// //       });
// //     }
// //   };
// //   const Toolbar = () => {
// //     const {
// //       table
// //     } = useDataGrid();
// //     const [searchInput, setSearchInput] = useState('');
// //     return <div className="card-header flex-wrap gap-2 border-b-0 px-5">
// //         <h3 className="card-title font-medium text-sm">Showing 20 of 68 users</h3>

// //         <div className="flex flex-wrap gap-2 lg:gap-5">
// //         <div className="flex">
// //             <label className="input input-sm">
// //               <KeenIcon icon="magnifier" />
// //               <input type="text" placeholder="Search users" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
// //             </label>
// //           </div>

// //           <div className="flex flex-wrap gap-2.5">
// //             <Select defaultValue="active">
// //               <SelectTrigger className="w-28" size="sm">
// //                 <SelectValue placeholder="Select" />
// //               </SelectTrigger>
// //               <SelectContent className="w-32">
// //                 <SelectItem value="active">Active</SelectItem>
// //                 <SelectItem value="disabled">Disabled</SelectItem>
// //                 <SelectItem value="pending">Pending</SelectItem>
// //               </SelectContent>
// //             </Select>

// //             <Select defaultValue="latest">
// //               <SelectTrigger className="w-28" size="sm">
// //                 <SelectValue placeholder="Select" />
// //               </SelectTrigger>
// //               <SelectContent className="w-32">
// //                 <SelectItem value="latest">Latest</SelectItem>
// //                 <SelectItem value="older">Older</SelectItem>
// //                 <SelectItem value="oldest">Oldest</SelectItem>
// //               </SelectContent>
// //             </Select>

// //             <button className="btn btn-sm btn-outline btn-primary">
// //               <KeenIcon icon="setting-4" /> Filters
// //             </button>
// //           </div> 
// //         </div>
// //       </div>;
// //   };
// //   return <DataGrid columns={columns} data={data} rowSelection={true} onRowSelectionChange={handleRowSelection} pagination={{
// //     size: 5
// //   }} sorting={[{
// //     id: 'users',
// //     desc: false
// //   }]} toolbar={<Toolbar />} layout={{
// //     card: true
// //   }} />;
// // };
// // export { Users };

// /* eslint-disable prettier/prettier */

// import { useMemo, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { DataGrid, DataGridColumnHeader, KeenIcon, useDataGrid, DataGridRowSelectAll, DataGridRowSelect } from '@/components';
// import { Input } from '@/components/ui/input';
// import { toast } from 'sonner';
// import { UsersData } from './';

// const Users = () => {
//   const ColumnInputFilter = ({ column }) => (
//     <Input
//       placeholder="Filter..."
//       value={column.getFilterValue() ?? ''}
//       onChange={(event) => column.setFilterValue(event.target.value)}
//       className="h-9 w-full max-w-40"
//     />
//   );

//   const columns = useMemo(() => [
//     {
//       accessorKey: 'Id',
//       header: () => <DataGridRowSelectAll />,
//       cell: ({ row }) => <DataGridRowSelect row={row} />,
//       enableSorting: false,
//       enableHiding: false,
//       meta: { headerClassName: 'w-0' },
//     },
//     {
//       accessorFn: (row) => `${row.FirstName} ${row.LastName}`,
//       id: 'fullName',
//       header: ({ column }) => <DataGridColumnHeader title="Full Name" column={column} />,
//       cell: (info) => <span>{info.row.original.FirstName} {info.row.original.LastName}</span>,
//       meta: { headerClassName: 'min-w-[200px]' },
//     },
//     {
//       accessorFn: (row) => row.PrimaryEmail,
//       id: 'email',
//       header: ({ column }) => <DataGridColumnHeader title="Email" column={column} />,
//       cell: (info) => (
//         <a href={`mailto:${info.row.original.PrimaryEmail}`} className="text-blue-600 hover:underline">
//           {info.row.original.PrimaryEmail}
//         </a>
//       ),
//       meta: { headerClassName: 'min-w-[250px]' },
//     },
//     {
//       accessorFn: (row) => row.RoleName,
//       id: 'role',
//       header: ({ column }) => <DataGridColumnHeader title="Role" column={column} />,
//       cell: (info) => <span>{info.row.original.RoleName}</span>,
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//     {
//       accessorFn: (row) => row.GroupName,
//       id: 'groupName',
//       header: ({ column }) => <DataGridColumnHeader title="Group Name" column={column} />,
//       cell: (info) => <span>{info.row.original.GroupName}</span>,
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//     {
//       accessorFn: (row) => row.TeamName,
//       id: 'teamName',
//       header: ({ column }) => <DataGridColumnHeader title="Team Name" column={column} />,
//       cell: (info) => <span>{info.row.original.TeamName}</span>,
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//     {
//       accessorFn: (row) => row.GroupRole,
//       id: 'groupRole',
//       header: ({ column }) => <DataGridColumnHeader title="Group Role" column={column} />,
//       cell: (info) => <span>{info.row.original.GroupRole}</span>,
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//     {
//       accessorFn: (row) => row.CreatedDate,
//       id: 'createdDate',
//       header: ({ column }) => <DataGridColumnHeader title="Created Date" column={column} />,
//       cell: (info) => {
//         const date = info.row.original.CreatedDate;
//         return <span>{date ? new Date(date).toLocaleDateString() : 'N/A'}</span>;
//       },
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//     {
//       accessorFn: (row) => row.LastActivity,
//       id: 'lastActivity',
//       header: ({ column }) => <DataGridColumnHeader title="Last Activity" column={column} />,
//       cell: (info) => {
//         const date = info.row.original.LastActivity;
//         return <span>{date ? new Date(date).toLocaleString() : 'N/A'}</span>;
//       },
//       meta: { headerClassName: 'min-w-[200px]' },
//     },
//     {
//       accessorFn: (row) => row.AvatarUrl,
//       id: 'avatar',
//       header: ({ column }) => <DataGridColumnHeader title="Avatar" column={column} />,
//       cell: (info) =>
//         info.row.original.AvatarUrl ? (
//           <img src={info.row.original.AvatarUrl} alt="Avatar" className="rounded-full size-9" />
//         ) : (
//           <span>No Avatar</span>
//         ),
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//     {
//       accessorFn: (row) => row.TeamLeaderFirstName || 'N/A',
//       id: 'teamLeaderFirstName',
//       header: ({ column }) => <DataGridColumnHeader title="Team Leader First Name" column={column} />,
//       cell: (info) => <span>{info.row.original.TeamLeaderFirstName || 'N/A'}</span>,
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//     {
//       accessorFn: (row) => row.TeamLeaderLastName || 'N/A',
//       id: 'teamLeaderLastName',
//       header: ({ column }) => <DataGridColumnHeader title="Team Leader Last Name" column={column} />,
//       cell: (info) => <span>{info.row.original.TeamLeaderLastName || 'N/A'}</span>,
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//     {
//       accessorFn: (row) => row.LegacyUserId || 'N/A',
//       id: 'legacyUserId',
//       header: ({ column }) => <DataGridColumnHeader title="Legacy User ID" column={column} />,
//       cell: (info) => <span>{info.row.original.LegacyUserId || 'N/A'}</span>,
//       meta: { headerClassName: 'min-w-[150px]' },
//     },
//   ], []);

//   const data = useMemo(() => UsersData, []);

//   const handleRowSelection = (state) => {
//     const selectedRowIds = Object.keys(state);
//     if (selectedRowIds.length > 0) {
//       toast(`Total ${selectedRowIds.length} rows are selected.`, {
//         description: `Selected row IDs: ${selectedRowIds}`,
//         action: { label: 'Undo', onClick: () => console.log('Undo') },
//       });
//     }
//   };

//   const Toolbar = () => {
//     const [searchInput, setSearchInput] = useState('');
//     return (
//       <div className="card-header flex-wrap gap-2 border-b-0 px-5">
//         <h3 className="card-title font-medium text-sm">Showing {data.length} users</h3>
//         <div className="flex flex-wrap gap-2 lg:gap-5">
//           <div className="flex">
//             <label className="input input-sm">
//               <KeenIcon icon="magnifier" />
//               <input
//                 type="text"
//                 placeholder="Search users"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//               />
//             </label>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={{ overflowX: 'auto' }}>
//       <DataGrid
//         columns={columns}
//         data={data}
//         rowSelection={true}
//         onRowSelectionChange={handleRowSelection}
//         pagination={{ size: 5 }}
//         sorting={[{ id: 'fullName', desc: false }]}
//         toolbar={<Toolbar />}
//         layout={{ card: true }}
//       />
//     </div>
//   );
// };

// export { Users };


import { useMemo, useState } from 'react';
import { DataGrid, DataGridColumnHeader, KeenIcon, useDataGrid, DataGridRowSelectAll, DataGridRowSelect } from '@/components';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { UsersData } from './';

const Users = () => {
  const ColumnInputFilter = ({ column }) => (
    <Input
      placeholder="Filter..."
      value={column.getFilterValue() ?? ''}
      onChange={(event) => column.setFilterValue(event.target.value)}
      className="h-9 w-full max-w-40"
    />
  );

  const columns = useMemo(() => [
    {
      accessorKey: 'Id',
      header: () => <DataGridRowSelectAll />,
      cell: ({ row }) => <DataGridRowSelect row={row} />,
      enableSorting: false,
      enableHiding: false,
      meta: { headerClassName: 'w-0' },
    },
    {
      accessorKey: 'AvatarUrl',
      header: ({ column }) => <DataGridColumnHeader title="Avatar" column={column} />,
      cell: (info) =>
        info.row.original.AvatarUrl ? (
          <img src={info.row.original.AvatarUrl} alt="Avatar" className="rounded-full size-9" />
        ) : (
          <span></span>
        ),
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'FirstName',
      header: ({ column }) => <DataGridColumnHeader title="First Name" column={column} />,
      cell: (info) => <span>{info.row.original.FirstName}</span>,
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'LastName',
      header: ({ column }) => <DataGridColumnHeader title="Last Name" column={column} />,
      cell: (info) => <span>{info.row.original.LastName}</span>,
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'PrimaryEmail',
      header: ({ column }) => <DataGridColumnHeader title="Primary Email" column={column} />,
      cell: (info) => (
        <a href={`mailto:${info.row.original.PrimaryEmail}`} className="text-blue-600 hover:underline">
          {info.row.original.PrimaryEmail}
        </a>
      ),
      meta: { headerClassName: 'min-w-[200px]' },
    },
    {
      accessorKey: 'RoleName',
      header: ({ column }) => <DataGridColumnHeader title="Role Name" column={column} />,
      cell: (info) => <span>{info.row.original.RoleName}</span>,
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'GroupName',
      header: ({ column }) => <DataGridColumnHeader title="Group Name" column={column} />,
      cell: (info) => <span>{info.row.original.GroupName}</span>,
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'TeamId',
      header: ({ column }) => <DataGridColumnHeader title="Team ID" column={column} />,
      cell: (info) => <span>{info.row.original.TeamId}</span>,
      meta: { headerClassName: 'min-w-[100px]' },
    },
    {
      accessorKey: 'TeamName',
      header: ({ column }) => <DataGridColumnHeader title="Team Name" column={column} />,
      cell: (info) => <span>{info.row.original.TeamName}</span>,
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'GroupRole',
      header: ({ column }) => <DataGridColumnHeader title="Group Role" column={column} />,
      cell: (info) => <span>{info.row.original.GroupRole}</span>,
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'CreatedDate',
      header: ({ column }) => <DataGridColumnHeader title="Created Date" column={column} />,
      cell: (info) => {
        const date = info.row.original.CreatedDate;
        return <span>{date ? new Date(date).toLocaleDateString() : 'null'}</span>;
      },
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'LegacyUserId',
      header: ({ column }) => <DataGridColumnHeader title="Legacy User ID" column={column} />,
      cell: (info) => <span>{info.row.original.LegacyUserId || 'null'}</span>,
      meta: { headerClassName: 'min-w-[150px]' },
    },
    {
      accessorKey: 'TeamLeaderFirstName',
      header: ({ column }) => <DataGridColumnHeader title="Team Leader First Name" column={column} />,
      cell: (info) => <span>{info.row.original.TeamLeaderFirstName || 'null'}</span>,
      meta: { headerClassName: 'min-w-[200px]' },
    },
    {
      accessorKey: 'TeamLeaderLastName',
      header: ({ column }) => <DataGridColumnHeader title="Team Leader Last Name" column={column} />,
      cell: (info) => <span>{info.row.original.TeamLeaderLastName || 'null'}</span>,
      meta: { headerClassName: 'min-w-[200px]' },
    },
    // {
    //   accessorKey: 'AvatarUrl',
    //   header: ({ column }) => <DataGridColumnHeader title="Avatar" column={column} />,
    //   cell: (info) =>
    //     info.row.original.AvatarUrl ? (
    //       <img src={info.row.original.AvatarUrl} alt="Avatar" className="rounded-full size-9" />
    //     ) : (
    //       <span>No Avatar</span>
    //     ),
    //   meta: { headerClassName: 'min-w-[150px]' },
    // },
    {
      accessorKey: 'LastActivity',
      header: ({ column }) => <DataGridColumnHeader title="Last Activity" column={column} />,
      cell: (info) => {
        const date = info.row.original.LastActivity;
        return <span>{date ? new Date(date).toLocaleString() : 'null'}</span>;
      },
      meta: { headerClassName: 'min-w-[200px]' },
    },
    
  ], []);

  const data = useMemo(() => UsersData, []);

  const handleRowSelection = (state) => {
    const selectedRowIds = Object.keys(state);
    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} rows are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: { label: 'Undo', onClick: () => console.log('Undo') },
      });
    }
  };

  const Toolbar = () => {
    const [searchInput, setSearchInput] = useState('');
    return (
      <div className="card-header flex-wrap gap-2 border-b-0 px-5">
        <h3 className="card-title font-medium text-sm">Showing {data.length} users</h3>
        <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex">
            <label className="input input-sm">
              <KeenIcon icon="magnifier" />
              <input
                type="text"
                placeholder="Search users"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <DataGrid
        columns={columns}
        data={data}
        rowSelection={true}
        onRowSelectionChange={handleRowSelection}
        pagination={{ size: 5 }}
        sorting={[{ id: 'FirstName', desc: false }]}
        toolbar={<Toolbar />}
        layout={{ card: true }}
      />
    </div>
  );
};

export { Users };
