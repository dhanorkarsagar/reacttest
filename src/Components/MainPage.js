import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useEffect,useState } from 'react';
  const columns = [
    { field: 'ID', headerName: 'ID', width: 70 },
  { field: 'Description', headerName: 'Description', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Price', headerName: 'Price', width: 130 },
  {
    field: 'Unit', headerName: 'Unit', width: 90,
  },
  {
    field: 'Tax',
    headerName: 'Tax',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,    
  },
  {
    field: 'ExchangeRate',
    headerName: 'ExchangeRate',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,    
  },
  {
    field: 'FinalPayment',
    headerName: 'FinalPayment',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.getValue('FinalPayment') || ''} ${params.getValue('FinalPayment') || ''}`
  }
];

const rows = [
  { ID:1, Description: "Freight", Name: 'Freight', Price: "USD 1781", Unit: "Per Container" , Tax: "-", ExchangeRate: 1.00, FinalPayment: "INR 2000" },
  { ID:2,Description: "Free In", Name: 'Free In', Price: "USD 160", Unit: "Per Container" , Tax: "-", ExchangeRate: 1.00, FinalPayment: "INR 2000" },
  { ID:3,Description: "BI Fee", Name: 'BI Fee', Price: "TI 175", Unit: "Per BI" , Tax: "18%", ExchangeRate: 1.00, FinalPayment: "INR 2000" },
  { ID:4,Description: "Temparary", Name: 'Temparary Accept', Price: "USD 140", Unit: "Per Container" , Tax: "18%", ExchangeRate: 1.00, FinalPayment: "INR 2000" },
  
];

function MainPage() {
    const state = useSelector(state => state.loginDetails.state)

    const [visibilitySetting, setVisibility] = useState(true)

    useEffect(() => {
      console.log(state.loginType)
      if(state.loginType=="google")
      {
          setVisibility(false)
      }
    }, [])   
    

    return (
      <div style={{ height: 400, width: '100%' }}>
        {visibilitySetting &&<Button color="primary" variant="contained">
          Group
        </Button>}
        &nbsp;
        {visibilitySetting && <Button color="primary" variant="contained">
         UnGroup
        </Button>}
        {visibilitySetting &&
      <DataGrid getRowId={(rows) => rows.ID} rows={rows} columns={columns}  checkboxSelection />
}
{!visibilitySetting &&
      <DataGrid getRowId={(rows) => rows.ID} rows={rows} columns={columns}   />
}
        
      {visibilitySetting && <Link component="button" variant="body2" style={{fontWeight:'bold'}}>
      + More Changes
    </Link>}
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Button variant="outlined" color="primary" href="#outlined-buttons">
  Cancel
</Button>
&nbsp;&nbsp;
        <Button color="primary" variant="contained">
          Submit
        </Button>
    </div>
      );
}

export default MainPage
