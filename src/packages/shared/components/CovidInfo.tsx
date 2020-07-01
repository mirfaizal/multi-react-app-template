import React from 'react';
import { useEffect, useState } from 'react';
import { getCovidInfo } from '../api';
import { ICovidSummary } from '../types/Covid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CovidByCountry from './CovidByCountry';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CovidCard = ({ globalData, showByCountry, setShowByCountry }: any) => {
  const classes = useStyles();
  const handleClickByCountry = () => {
    if (!showByCountry) {
      setShowByCountry(true);
    } else {
      setShowByCountry(false);
    }
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h6' component='h2'>
          COVID-19 Coronavirus Pandemic
        </Typography>
        <br />
        <Typography className={classes.pos} color='textSecondary'>
          Coronavirus Cases : {globalData.TotalConfirmed}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Deaths : {globalData.TotalDeaths}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Recovered : {globalData.NewRecovered}
        </Typography>
        <CardActions>
          <Button size='small' onClick={handleClickByCountry}>
            Cases by Country
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

const CovidInfo = ({ context }: any) => {
  const [covidSummary, setCovidSummary] = useState<ICovidSummary | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showByCountry, setShowByCountry] = React.useState(false);
  useEffect(() => {
    getCovidInfo()
      .then((responseData: any) => {
        setCovidSummary(responseData.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        if (e.message.includes('404')) {
          setErrorMessage(`No data found`);
        } else {
          setErrorMessage('Error occured while fetching covid summary');
        }
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <div className='p-datatable-globalfilter-container'>
          {covidSummary && covidSummary.Global ? (
            <>
              <CovidCard
                globalData={covidSummary.Global}
                setShowByCountry={setShowByCountry}
                showByCountry={showByCountry}
              />{' '}
              <br />
              {showByCountry && <CovidByCountry rows={covidSummary.Countries} />}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
export default CovidInfo;
