import { useSelector } from 'react-redux';
import './loading.css';

export interface RootState {
    status: { isLoading: boolean };
}

const Loader = () => {
    const { isLoading } = useSelector((state: RootState) => state.status);

    return <div className={`loader ${isLoading ? '' : 'inactive'}`}></div>;
};

export default Loader;
