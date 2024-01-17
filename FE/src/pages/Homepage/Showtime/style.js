import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: 'none',
    justifyContent: 'center',
    alignItem: 'center',
    marginBottom: 30,
  },
  tabBar: {
    height: 50,
    display: "flex",
    alignItem: "center",
    justifyContent : "center",
  },
  flexContainer: {
    display: 'block'
  },
  indicator: {
    backgroundColor: "transparent",
    transition: 'none',
  },
  tabButton: {
    opacity: 1,
    lineHeight: "24px",
    height: "24px",
    boxShadow: 'none',
    justifyContent: 'center',
    alignItem: 'center',
    transition: "all 0.2s",
    fontWeight: 500,
    textTransform: "none",
    fontFamily: '"Arial", "Helvetica", "sans-serif"',

    '& > span': {
      transition: "all 0.2s",
      '&:hover': {
        fontSize: "24px",
      },
    }
  },
  tabDangChieu: {
    color: props => props.notDelay ? "#000" : "#fa5238",
    fontSize: props => props.notDelay ? "20px" : "22px",
  },
  tabSapChieu: {
    color: props => props.notDelay ? "#fa5238" : "#000",
    fontSize: props => props.notDelay ? "22px" : "20px",
  },

  Arrow: {
    position: "absolute",
    top: "48%",
    transform: "translateY(-50%)",

    zIndex: 2,
    width: "50px",
    height: "100px",
    color: "#d8d8d8 !important",
    cursor: "pointer",
    transition: "all .2s",
    '&:hover': { color: 'rgb(238, 130, 59) !important' },
  },

  listMovie: {
    opacity: props => props.fade ? 1 : 0,
    transition: "opacity .1s linear",
  },
}))

export default useStyles
