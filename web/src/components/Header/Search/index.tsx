import { FaSearch } from 'react-icons/fa';

import { useStyles } from './styles';

function Search() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <input type="text" placeholder="Buscar na plataforma" />
      <FaSearch size={24} color="#a7a7a7" />
    </div>
  );
}

export default Search;
