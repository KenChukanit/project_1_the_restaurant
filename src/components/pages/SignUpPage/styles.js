import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({

    container: {
        padding: '5%',
        width: '100%',
        margin: '0',
        
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginLeft: "20"
    },
    media: {
        height: 220
    },
    border: {
        boder: 'solid'
    },
    fullHeightCard: {
        height: '100%'
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottom: "10px solid white"
    },
    activeCard: {
        borderBottom: '10px solid #22289a'
    },
    grid: {
        display: "flex"
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    title: {
        padding: '0 16px'
    },
    cardActions: {
        display: 'flex',
        padding: "0px 16px 8px 16px",
        justifyContent: "space-between"
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundImage: "linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);",
      padding: theme.spacing(3),
      width: "100vw",
      height: "100vh"
    
    },
}
));

