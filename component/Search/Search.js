import React, {useRef,useState} from 'react';
import style from './style';
import {TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';
import { PropTypes } from 'prop-types';

const Search = props => {
  const InputRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const handelFocus = () => {
    InputRef.current.focus();
  };
  const handleSearch = (value) => {
    setSearchValue(value);
    props.onSearch(value);
  };
  return (
    <Pressable style={style.searchInputeContainer} onPress={handelFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={InputRef}
        style={style.searchInput}
        value={searchValue}
        onChangeText={handleSearch}
        placeholder={props.placeholder}
      />
    </Pressable>
  );
};

Search.default = {
    onSearch: ()=>{},
    placeholder: 'Search',
}

Search.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
}

export default Search;
