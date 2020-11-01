import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Search, Block, PauseCircleOutline } from '@material-ui/icons';

// OTHER IMPORTS
import { useStyles } from '../../assets/styles/PageStyle';
import { merchantColumns } from '../../helper/StaticData';

// THEME
const theme = createMuiTheme({
    palette: {
      secondary: {
          main: '#11cb5f',
      },
    },
})


const MerchantsPage = () => {
    // VARIABLES
    const classes = useStyles()
    const options = ['All', 'Open', 'Closed']
    const data = [
        {
            id: 1,
            name: "Nasi Kulit Bude Sari",
            open_time: "09:00",
            close_time: "23:00",
            open_status: true,
        },
        {
            id: 2,
            name: "Kopi Yor",
            open_time: "10:00",
            close_time: "20:00",
            open_status: false,
        },
        {
            id: 3,
            name: "KFC Alam Sutera",
            open_time: "00:00",
            close_time: "23:59",
            open_status: true,
        },
        {
            id: 4,
            name: "Pizza Hut Sudirman",
            open_time: "08:00",
            close_time: "22:00",
            open_status: true,
        },
        {
            id: 5,
            name: "Nasi Campur Apeng",
            open_time: "08:00",
            close_time: "17:00",
            open_status: false,
        },
        {
            id: 6,
            name: "Nasi Goreng Bang Ipul",
            open_time: "08:00",
            close_time: "22:00",
            open_status: true,
        },
        {
            id: 7,
            name: "Ayam Geprek Bensu",
            open_time: "09:00",
            close_time: "21:00",
            open_status: true,
        },
        {
            id: 8,
            name: "Kopi Kenangan",
            open_time: "10:00",
            close_time: "22:00",
            open_status: true,
        },
        {
            id: 9,
            name: "Penyetan Bang Ali",
            open_time: "07:00",
            close_time: "23:00",
            open_status: true,
        },
        {
            id: 10,
            name: "Kopi Daripada Gading Serpong",
            open_time: "09:00",
            close_time: "22:00",
            open_status: true,
        },
        {
            id: 11,
            name: "Burger Bros",
            open_time: "08:00",
            close_time: "22:00",
            open_status: true,
        },
        {
            id: 12,
            name: "Ayam Gepuk Mak Icih",
            open_time: "06:00",
            close_time: "20:00",
            open_status: true,
        },
    ]

    // RENDER
    return (
        <Paper className={classes.root}>
            
            <div className={classes.titleBar}>
                <h2 className={classes.opacity70}>
                    MERCHANTS
                </h2>
                <div className={classes.flexRow}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Autocomplete
                        id="status"
                        size="small"
                        options={options}
                        defaultValue="All"
                        className={classes.openStatus}
                        getOptionLabel={option => option}
                        renderInput={params => <TextField {...params} variant="outlined" label="Status" />}
                    />
                </div>
            </div>

            <TableContainer className={classes.tableContainer}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {merchantColumns.map(column => (
                                <TableCell
                                    size="small"
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontWeight: 'bold', color: '#4c4c4c' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row,idx) => (
                            <TableRow hover tabIndex={-1} key={idx}>
                                <TableCell>
                                    {idx + 1}
                                </TableCell>
                                <TableCell>
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {row.open_time}
                                </TableCell>
                                <TableCell>
                                    {row.close_time}
                                </TableCell>
                                <TableCell align="center">
                                    <ThemeProvider theme={theme}>
                                    {
                                        row.open_status
                                        ? <Badge badgeContent={""} color="secondary" />
                                        : <Badge badgeContent={""} color="error" />
                                    }
                                    </ThemeProvider>
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip className={classes.mx1} title="Ban">
                                        <IconButton size="small">
                                            <Block fontSize="small" color="error" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip className={classes.mx1} title="Suspend">
                                        <IconButton size="small">
                                            <PauseCircleOutline fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination
                count={6}
                size="small"
                color="primary"
                showFirstButton
                showLastButton
            />
            
        </Paper>
    );
};

export default MerchantsPage;