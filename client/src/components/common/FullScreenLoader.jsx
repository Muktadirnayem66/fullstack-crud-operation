import Loader from '../../assets/img/loader.svg'

const FullScreenLoader = () => {
    return (
        <div className='flex items-center'>
            <img src={Loader} alt="loader_image" />
        </div>
    );
};

export default FullScreenLoader;