import { makeStyles, fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(1),
    },
    tableContainer: {
        height: 'calc(100vh - 168px)',
        marginBottom: theme.spacing(2),
        overflow: 'auto',
    },
    titleBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    openStatus: {
        width: '150px',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#ededed', 0.4),
        '&:hover': {
          backgroundColor: fade('#ededed', 0.6),
        },
        marginRight: '8px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: '11px 0',
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
    opacity70: {
        opacity: .7
    },
    my1: {
        marginTop: '8px',
        marginBottom: '8px',
    },
    mx1: {
        marginLeft: '4px',
        marginRight: '4px',
    },
    py1: {
        paddingTop: '8px',
        paddingBottom: '8px',
    }
}))