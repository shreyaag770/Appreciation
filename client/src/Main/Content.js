
import React, {useState, useEffect} from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Buttons from './buttons';
import axios from 'axios'
import Hidden from '@material-ui/core/Hidden';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
            
const newStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  alpha: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  alphabet: {
    margin: '5px'
  },
  root1: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    // width: 400,
    maxWidth: 378,
    borderRadius: 30,
    background: "#ECECEC",
    boxShadow: "none",
    opacity: 0.9,
    height: 120,
    margin: '4px'
  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
    fontSize: '20px'

  },
  iconButton: {
    padding: 10,
  },
  
}));

const Content = () => {
  const [SearchKey, setSearchKey] = useState("");

  const alphabets = [
    '#','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
const clickHandler = (regEx) => {
  console.log(regEx);
  axios
    .get(`/users/displaySearch/${regEx}`)
    .then((res) => {
      console.log(res);
      setProfiles(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

  const [currentData, setCurrentData]= useState({
    persons: [
      {praises: null, highfives:null, id:1}
    ]
  });

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
		axios
			.get('/users/display')
			.then(res => {
        setProfiles(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

  const switchDataHandler = (coffeMakerObj)=> {
    const praises=coffeMakerObj.praise;
    const highfives=coffeMakerObj.highFive;
    const id = coffeMakerObj._id;
    setCurrentData({
      persons: [
        {praises: praises, highfives:highfives, id:id}
      ]
    })
  }

  const getCoffeMakerCard = coffeMakerObj => {
    return (
      <Grid item xs={6} sm={6} md={2}>
        <CoffeCard titles={coffeMakerObj.name}
        image={coffeMakerObj.photo}
        clicked={()=>switchDataHandler(coffeMakerObj)} 
        />
      </Grid>
    );
  };

  const printAlphabets = (alpha=> {
    return (
    <div className={classes.alphabet} >
        <Typography onClick={()=>clickHandler(alpha)}>
        {alpha}
        </Typography>
    </div>)
    
}
);



  const submitHandler = (e) => {
    
    e.preventDefault();
    console.log(SearchKey);
    axios
      .get(`/users/displaySearch/${SearchKey}`)
      .then((res) => {
        console.log(res);
        setProfiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  };
  const classes=newStyles();

  return (
    <Grid  container className={classes.paper} spacing={2} xs={12} sm={12}>
      <Grid item xs={12} sm={12} md={12}>
    

         
        <div className={classes.alpha}>
          {/* <Typography > */}
        {alphabets.map(alpha => printAlphabets(alpha)) }
               
               
          {/* </Typography> */}
          </div>
       

      </Grid>
      <Grid xs={6} sm={6} md={4}>
      <Paper component="form" className={classes.root1}>
     
      <InputBase 
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
        value={SearchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        

      />
      <IconButton  className={classes.iconButton} aria-label="search"
      onClick={submitHandler}>
        <SearchIcon />
      </IconButton>
     
    </Paper>
      </Grid>
      <Grid item xs={6} sm={6} md={2}>


        <Buttons 
        appreciation ={currentData.persons[0].praises}
        highfives={currentData.persons[0].highfives}
         id = {currentData.persons[0].id}/>
      </Grid>
      
      {profiles.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;
