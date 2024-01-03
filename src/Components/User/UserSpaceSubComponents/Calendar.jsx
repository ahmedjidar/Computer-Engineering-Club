import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

const Calendar = () => {
    return(
        <div className="bg-white p-4 w-full h-screen">
            <p className="text-3xl font-bold">My Date Picker</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker orientation="vertical"/>
            </LocalizationProvider>
        </div>
    )
}

export default Calendar;