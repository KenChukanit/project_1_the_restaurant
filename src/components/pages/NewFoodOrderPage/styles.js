import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme)=>({
    
    container: {
        padding: '5%',
        width: '100%',
        margin: '0'
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
      padding: theme.spacing(3),
      fontFamily: 'Roboto Slab',
      backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
    display: "flex",   
        flexDirection: 'column',
        justifyContent: "center",
        marginTop: "100px",
      width: "100%",
      height: '100%',
    
    
    },
    header: {
        fontFamily: "Bungee",
        fontSize: "22px"
    },
    tableHeadCell: {
        fontFamily: "Bungee",
        fontSize: "22px", 
        backgroundColor:"#d1fdff",
    }
}
));

