import { useState, useEffect } from 'react';
import Searchbar from './component/Searchbar/Searchbar';
import ImageGallery from './component/ImageGallery/ImageGallery';
import Button from './component/Button/Button';
import Modal from './component/Modal/Modal';
import apiService from './Services/apiService';
import Loader from './component/Loader/Loader';

const App = () => {
  const [stateImages, setStateImages] = useState([]);
  const [stateQuery, setStateQuery] = useState('');
  const [statePage, setStatePage] = useState(1);
  const [stateShowModal, setStateShowModal] = useState(false);
  const [stateLargeimageurl, setStateLargeimageurl] = useState('');
  const [stateIsLoading, setStateIsLoading] = useState(false);

  const formSubmitHandler = searchQuery => {
    setStateQuery(searchQuery);
    setStatePage(1);
    setStateImages([]);
  };

  useEffect(() => {
    if (stateQuery === '') {
      return;
    }

    setStateIsLoading(true);
    setTimeout(() => {
      apiService(stateQuery, statePage)
        .then(response => {
          setStateImages(prevState => [...prevState, ...response.data.hits]);
        })
        .finally(
          setStateIsLoading(false),
          setTimeout(() => {
            scrollToButton();
          }, 500),
        );
    }, 400);
  }, [stateQuery, statePage]); // eslint-disable-line react-hooks/exhaustive-deps

  const openModal = e => {
    setStateIsLoading(true);

    setTimeout(() => {
      setStateShowModal(true);
      setStateLargeimageurl(e.target.getAttribute('largeimageurl'));
      setStateIsLoading(false);
    }, 300);
  };

  const closeModal = () => {
    setStateShowModal(false);
    setStateLargeimageurl('');
  };

  const incremenpPage = () => {
    setStatePage(prevState => prevState + 1);
  };

  const scrollToButton = () => {
    if (statePage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Searchbar onSubmit={formSubmitHandler} />
      <ImageGallery openModal={openModal} images={stateImages} />
      {stateImages.length > 0 && <Button onClick={incremenpPage}></Button>}
      {stateShowModal && (
        <Modal
          closeModal={closeModal}
          largeimageurl={stateLargeimageurl}
        ></Modal>
      )}
      {stateIsLoading && <Loader class={'Loader'}></Loader>}
    </>
  );
};

export default App;