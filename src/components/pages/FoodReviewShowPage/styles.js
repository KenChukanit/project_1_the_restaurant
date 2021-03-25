import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    
    sendReview: {
        background: '#66a6ff',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      fontFamily: 'Bungee',
      color: "#453a94",
        fontSize: "22px",
        width: "100vw",
        height: "100vh",
    },
    headBG: {
          backgroundColor: '#e0e0e0'
      },
      borderRight500: {
          borderRight: '1px solid #e0e0e0'
      },
     
      blockquote:{
          padding: "0",
          margin: "0"
      },
      quoteQuote:{
        position: 'relative',
        width: '100vw',
        padding: '15 25 20',
        margin: '30 auto',
        color: 'black',
        background: '#ffff',
        textAlign: 'center',
      },
      bubble: {
            boxSizing: 'border-box',
            display: 'flex',
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginRight: 'auto',
            marginLeft: 'auto',
            width: 'auto',
            maxWidth: '90%',
            position: 'relative',
            clear: 'both',
            background: 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);',
            marginBottom: '20px',
            padding: '6px 20px',
            color: '#000',
            textShadow: '0 1px 1px rgba(255,255,255,0.8)'
          }
          
      
}
));