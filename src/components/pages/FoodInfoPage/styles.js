import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({

    container: {
        padding: '5%',
        width: '100vw',
        margin: '0',
       
    },
    foodButton: {
      
        border: 0,
        borderRadius: 3,
        color: 'white',
        padding: ' 1%',
        cursor: "pointer",
        alignContent: "center",
        textAlign: "center",
        verticalAlign: "middle",
        marginRight: "5px",
        marginBottom: "5px",
        
        display: "flex-inline",
        justifyContent: "space-between"
     
    },
    media: {
        height: '280px',
        width: "280px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px"   
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
        justifyContent: "center",
        borderBottom: "10px solid white",
        width: '100vh',
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

    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: 'pink',
        padding: theme.spacing(3),
        width: "100%",
        height: "100%",
        marginRight: "auto",
        marginLeft: "auto",
        alignItems: "center",
        fontFamily: "Open Sans"
    },
    contentCard: {
        flexGrow: 1,
        backgroundColor: "#96e6a1",
        padding: theme.spacing(3),
        width: "100%",
        height: "100%",
        marginRight: "auto",
        marginLeft: "auto",
        alignItems: "center"
    },
    instructionText: {
            marginBottom: "15px",
            fontSize: "15px",
            fontFamily: 'Shadows Into Light Two',
            textAlign: "start"
    }

}
));

