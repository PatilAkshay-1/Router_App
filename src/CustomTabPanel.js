import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, List, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NestedGrid from './NestedGrid';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleList = () => {
    setOpen(!open);
  }

  return (
    <Box sx={{ width: '100%', marginTop: '30px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Product Portfolio" {...a11yProps(0)} />
          <Tab label="My Configurations" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{display : "flex", height: '69vh'}}>
            <div style={{width: '18%', overflowY: 'auto' , overflowX: 'hidden'}}>
                {open ? <ExpandMoreIcon onClick={handleList} /> : <ExpandLessIcon onClick={handleList} />} <FormControlLabel control={<Checkbox />} label="Business" /> <br />
                {open && (
                    <List style={{right: '-25px'}}>
                        <ListItem style={{maxWidth : '50px'}}><FormControlLabel control={<Checkbox />} label="IGT Fixed Sytems Equipments" /></ListItem>
                        <ListItem style={{maxWidth : '50px'}}><FormControlLabel control={<Checkbox />} label="Computer Tomography Service" /></ListItem>
                        <ListItem style={{maxWidth : '50px'}}><FormControlLabel control={<Checkbox />} label="Ultrasonic Equipments" /></ListItem>
                        <ListItem style={{maxWidth : '50px'}}><FormControlLabel control={<Checkbox />} label="Enterprise Hospital Monitoring Equipments" /></ListItem>
                        <ListItem style={{maxWidth : '50px'}}><FormControlLabel control={<Checkbox />} label="Clinical Applications" /></ListItem>
                        <ListItem style={{maxWidth : '50px'}}><FormControlLabel control={<Checkbox />} label="Radiology Informetics" /></ListItem>
                        <ListItem style={{maxWidth : '50px'}}><FormControlLabel control={<Checkbox />} label="PM Service Parts Domestic Appliances" />
                        </ListItem>
                    </List>
                )}
            </div>
            <div style={{width: "82%", paddingLeft: '10px'}}>
                <NestedGrid />
            </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>

    </Box>
  );
}
