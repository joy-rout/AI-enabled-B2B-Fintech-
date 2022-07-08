// import * as React from 'react';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import {getData} from './Data';
// const columns: GridColDef[] = [
//   // { field: 'Customer Name', headerName: 'Customer Name', width: 70 },
  
//   { field: 'sl_no', headerName: 'sl_no', type: 'number', width: 70 },
//   { field: 'business_code', headerName: 'business_code', type: 'number',width: 130 },
//   { field: 'business_name', headerName: 'business_name', width: 130 },
//   { field: 'cust_number', headerName: 'cust_number', type: 'number', width: 130 },
//   {
//     field: 'name_customer',
//     headerName: 'name_customer',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
//   { field: 'clear_date', headerName: 'clear_date',type:'date', width: 130 },
//   { field: 'business_year', headerName: 'business_year', width: 130 },
//   { field: 'doc_id', headerName: 'document id', width: 130 },
//   { field: 'posting_date', headerName: 'posting_date',type:'date', width: 130 },
//   { field: 'document_create_date', headerName: 'document_create_date',type:'date', width: 130 },
//   { field: 'document_create_date.1', headerName: 'document_create_date.1',type:'date', width: 130 },
//   { field: 'due_in_date', headerName: 'due_in_date',type:'date', width: 130 },
//   { field: 'invoice_currency', headerName: 'invoice_currency', width: 130 },
//   { field: 'document type', headerName: 'document type', width: 130 },
//   { field: 'posting_id', headerName: 'posting_id', width: 130 },
//   { field: 'area_business', headerName: 'area_business', width: 130 },
//   { field: 'total_open_amount', headerName: 'total_open_amount', width: 130 },

//   { field: 'business_create_date', headerName: 'business_create_date',type:'date', width: 130 },
//   { field: 'cust_payment_terms', headerName: 'cust_payment_terms', width: 130 },
//   { field: 'invoice_id', headerName: 'invoice_id', width: 130 },
//   { field: 'is_open', headerName: 'is_open', width: 130 },
//   { field: 'aging_bucket', headerName: 'aging_bucket', width: 130 },
//   { field: 'is_deleted', headerName: 'is_deleted', width: 130 },
// ];

// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];


// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={getData}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }



import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { getData } from './Data';

function Table() {
  const [Data, setData] = React.useState([]);
  const [columns, setColumns] = React.useState([{field:"s_no", label: "s_no"}, 
  {field: "businessCode", label: "businessCode"}, 
  {field: "custNumber", label: "custNumber"}, 
  {field: "clearDate", label: "clearDate"}, 
  {field: "businessYear", label: "businessYear"}, 
  {field: "docID", label: "docID"}, 
  {field: "postingDate", label: "postingDate"}, 
  {field: "documentCreateDate", label:"documentCreateDate"}, 
  {field: "documentCreateDate1", label: "documentCreateDate1"}, 
  {field: "dueInDate", label: "dueInDate"}, 
  {field: "invoiceCurrency", label: "invoiceCurrency"}, 
  {field: "documentType", label: "documentType"}, 
  {field: "postingID", label: "postingID"}, 
  {field: "areaBusiness", label: "areaBusiness"}, 
  {field: "totalOpenAmount", label: "totalOpenAmount"},
  {field: "baselineCreateDate", label: "baselineCreateDate"}, 
  {field: "custPaymentTerms", label: "custPaymentTerms"}, 
  {field: "invoiceID", label: "invoiceID"}, 
  {field: "isOpen", label: "isOpen"}, 
  {field: "agingBucket", label: "agingBucket"}, 
  {field: "isDeleted", label: "isDeleted"}]);
  React.useEffect(async () =>{
    setData(await getData())
  }, []);


  return <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={Data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId = {(rows) => rows.s_no}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
}

export default Table