import './Card.css';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useQuery, gql } from '@apollo/client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const asalist = gql`
  query GET_ASALIST {
    asalist {
      results {
        assetId
        available
        logo
        name
      }
    }
  }
`;

const CardContainer = () => {
  // const { loading, data, error } = useQuery(GET_ASALIST);
  const { loading, data, error } = useQuery(asalist);
  if (loading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  if (error) return <p>Error :(</p>;
  return (
    <>
      {!loading &&
        !error &&
        data.asalist.results.map((item: any) => (
          <CardContent className="card--container" key={item.assetId}>
            <img
              src={item.logo}
              alt="logo"
              style={{ width: '30px', height: '57.39px' }}
            />
            <Typography className="text">{item.name}</Typography>

            {item.available ? (
              <Button
                size="small"
                variant="contained"
                className="card--btn--green"
              >
                Available
              </Button>
            ) : (
              <Button
                size="small"
                variant="contained"
                className="card--btn--red"
              >
                Unavailable
              </Button>
            )}
          </CardContent>
        ))}
    </>
  );
};

export default CardContainer;
