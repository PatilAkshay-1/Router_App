import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicCard from './BasicCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow({cardsData}) {
  return (
    <React.Fragment>
      {cardsData.map((singleCard) => (
        <Grid item xs={4}>
        <BasicCard id={singleCard.id} title={singleCard.title} />
      </Grid>
      ))}
    </React.Fragment>
  );
}

export default function NestedGrid() {
    const rowData= [
        [
            { id: '100008', title: 'CT Clinical Education' },
            { id: '123456', title: 'Sample PM' },
            { id: '718096', title: 'Zenitiion 50' },
        ],
    ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {rowData.map((cardsData) => (
            <Grid container item spacing={3}>
                <FormRow cardsData={cardsData}/>
            </Grid>
        ))}
      </Grid>
    </Box>
  );
}
