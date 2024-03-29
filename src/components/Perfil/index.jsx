import styles from './Perfil.module.css'
import PropTypes from 'prop-types';


const Perfil = ({ nomeUsuario }) => {

    return (
      <header className={styles.header}>
        <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Foto perfil" />
        <h1 className={styles.name}>
          {nomeUsuario}
          </h1>
      </header>  
    )
}

Perfil.propTypes = {
  nomeUsuario: PropTypes.string.isRequired,
};

export default Perfil;