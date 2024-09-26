import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton( {parentAlignment}:any) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    parentAlignment(newAlignment)
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      
    >
      <ToggleButton style={{color:"white"}} value="1d">1d</ToggleButton>
      <ToggleButton style={{color:"white"}} value="3d">3d</ToggleButton>
      <ToggleButton style={{color:"white"}} value="1w">1w</ToggleButton>
      <ToggleButton style={{color:"white"}} value="1m">1m</ToggleButton>
      <ToggleButton style={{color:"white"}} value="1y">1y</ToggleButton>
      <ToggleButton style={{color:"white"}} value="all">all</ToggleButton>
    </ToggleButtonGroup>
  );
}