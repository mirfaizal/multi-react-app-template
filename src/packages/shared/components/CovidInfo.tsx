import React from 'react';
import { useEffect, useState } from 'react';
import { getCovidInfo } from '../api';
import { ICovidSummary } from '../types/Covid';

const CovidInfo = ({ context }: any) => {
  const [covidSummary, setCovidSummary] = useState<ICovidSummary | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
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

  if (covidSummary && covidSummary.Global) {
    console.log(JSON.stringify(covidSummary.Global));
  }

  return (
    <>
      <div>Hello</div>
    </>
  );
};
export default CovidInfo;
