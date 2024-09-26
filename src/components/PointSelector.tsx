import React, { SetStateAction, useEffect, useState } from 'react';

import PointService from '../services/PointService';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Point } from '../models/Point';




export default function PointSelector( { onChange }: any) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)
    setAge(event.target.value);
  };

  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    PointService.getAllPoints().then((resp) => {
      setPoints(resp.data);
    });
  }, []);

  return (
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={age} // Установка значения Select компонента
      onChange={handleChange}
      label="Select Point"
      sx={{color:"white"}} 
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {points.map((point) => (
        <MenuItem key={point.id} value={point.id}>
          
          {point.full_name}
        </MenuItem>
      ))}
    </Select>
  );
}