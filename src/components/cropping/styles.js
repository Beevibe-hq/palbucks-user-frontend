export const styles = theme => ({
    cropContainer: {
      position: 'relative',   
      width:'100%',   
      background: '#333',
      marginInline: 'auto',
      [theme.breakpoints.up('sm')]: {
        height: 400,
        width:550
      },
    },
    cropButton: {
      flexShrink: 0,
      background:"#37BCF7",
      color:"white",
      fontWeight:"600"
    },
    controls: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap:'10px',
      marginInline:"auto",
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'column',
        gap:'20px',
        alignItems: '',
      },
    },
    sliderContainer: {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
    },
    sliderLabel: {
      [theme.breakpoints.down('xs')]: {
        minWidth: 65,
      },
    },
    slider: {
      padding: '22px 0px',
      marginLeft: 16,
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 16px',
      },
    },
  })
  