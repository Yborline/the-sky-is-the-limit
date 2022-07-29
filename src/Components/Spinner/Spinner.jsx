import { TailSpin } from 'react-loader-spinner';
import s from './Spinner.module.css'

 const Spinner = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div className={s.spinner}>
        <TailSpin
          height="60px"
          width="60px"
          color="#28A745"
          ariaLabel="loading"
        />
      </div>
    </div>
  );
};


export default Spinner