// import React, { useState } from 'react';
// import styled from 'styled-components';
// import bookshopImage from '../../assets/books/imagebook2.jpg';
// import { FaSearch } from 'react-icons/fa';

// const Container = styled.div`
//   width: 100%;
//   text-align: center;
// `;

// const SearchSection = styled.div`
//   background: #f8f8f8;
//   padding: 20px 0;
// `;

// const SearchInput = styled.input`
//   width: 60%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-right: 10px;
// `;

// const SearchButton = styled.button`
//   padding: 10px 20px;
//   background-color: green;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: darkgreen;
//   }
// `;

// const TagsSection = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin: 20px 0;
// `;

// const TagButton = styled.button`
//   background-color: ${(props) => (props.active ? 'green' : '#f0f0f0')};
//   color: ${(props) => (props.active ? 'white' : 'black')};
//   border: none;
//   border-radius: 20px;
//   padding: 10px 15px;
//   cursor: pointer;

//   &:hover {
//     background-color: green;
//     color: white;
//   }
// `;

// const Banner = styled.div`
//   background: url(${bookshopImage}) no-repeat center center;
//   background-size: cover;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   text-align: center;
// `;

// const BannerText = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
//   padding: 20px;
//   border-radius: 10px;
// `;

// const MapSection = styled.div`
//   margin: 20px 0;
// `;

// const MapInput = styled.input`
//   width: 60%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-right: 10px;
// `;

// const MapButton = styled.button`
//   padding: 10px 20px;
//   background-color: green;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: darkgreen;
//   }
// `;

// const BookshopsSection = styled.div`
//   background: #f8f8f8;
//   padding: 20px 0;
// `;

// const BookshopsTitle = styled.h2`
//   margin: 20px 0;
// `;

// const Background = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = () => {
//     // Implement your search functionality here
//     console.log('Search Query:', searchQuery);
//   };

//   return (
//     <Container>
//       <SearchSection>
//         <SearchInput
//           type="text"
//           placeholder="Search by property e.g., name, reg no etc."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <SearchButton onClick={handleSearchSubmit}>
//           <FaSearch /> Search
//         </SearchButton>
//       </SearchSection>

//       <TagsSection>
//         {['All', 'State', 'University', 'Poly', 'College', 'Secondary', 'Primary', 'Course', 'Science', 'Price', 'Commerce', 'Fiction', 'Business', 'Music', 'Engineering', 'Agric', 'Art', 'PhD', 'Masters', 'Bachelors', 'Diploma', 'Abroad', 'Date'].map((tag) => (
//           <TagButton key={tag}>{tag}</TagButton>
//         ))}
//       </TagsSection>

//       <Banner>
//         <BannerText>
//           <h1>BOOK RELEASE EVENT</h1>
//           <p>Main Event: Book Signing & Reading</p>
//           <p>Saturday, August 21</p>
//         </BannerText>
//       </Banner>

//       <MapSection>
//         <MapInput type="text" placeholder="Input your location" />
//         <MapButton>Map out</MapButton>
//       </MapSection>

//       <BookshopsSection>
//         <BookshopsTitle>Bookshops around you</BookshopsTitle>
//       </BookshopsSection>
//     </Container>
//   );
// };

// export default Background;

import React, { useState } from 'react';
import styled from 'styled-components';
import bookshopImage from '../../assets/books/cover.jfif';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const SearchSection = styled.div`
  background: #f8f8f8;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  margin-right: 0;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

const TagsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`;

const TagButton = styled.button`
  background-color: ${(props) => (props.active ? 'green' : '#f0f0f0')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: green;
    color: white;
  }
`;

const Banner = styled.div`
  background: url(${bookshopImage}) no-repeat center center;
  background-size: cover;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const BannerText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

const MapSection = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const MapInput = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  margin-right: 0;
`;

const MapButton = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

const SuggestionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background: white;
  border: 1px solid #ccc;
  width: 60%;
  margin: 0 auto;
  text-align: left;
  position: absolute;
  z-index: 1000;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const BookshopsSection = styled.div`
  background: #f8f8f8;
  padding: 20px 0;
`;

const BookshopsTitle = styled.h2`
  margin: 20px 0;
`;

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const BookCard = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  text-align: left;
`;

const booksData = [
  { id: 1, name: 'Book One', tags: ['Fiction', 'Business'] },
  { id: 2, name: 'Book Two', tags: ['Science', 'Engineering'] },
  { id: 3, name: 'Book Three', tags: ['Art', 'Music'] },
  // Add more books as needed
];

const locationSuggestions = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'
  // Add more locations as needed
];

const Background = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [selectedTag, setSelectedTag] = useState('All');
  const [locationQuery, setLocationQuery] = useState('');
  const [locationMatches, setLocationMatches] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterBooks(e.target.value, selectedTag);
  };

  const handleSearchSubmit = () => {
    filterBooks(searchQuery, selectedTag);
  };

  const filterBooks = (query, tag) => {
    let books = booksData;
    if (tag !== 'All') {
      books = books.filter((book) => book.tags.includes(tag));
    }
    if (query) {
      books = books.filter((book) => book.name.toLowerCase().includes(query.toLowerCase()));
    }
    setFilteredBooks(books);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setSearchQuery(tag);
    filterBooks(tag, tag);
  };

  const handleLocationChange = (e) => {
    setLocationQuery(e.target.value);
    if (e.target.value.length > 0) {
      const matches = locationSuggestions.filter((location) =>
        location.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setLocationMatches(matches);
    } else {
      setLocationMatches([]);
    }
  };

  const handleLocationSelect = (location) => {
    setLocationQuery(location);
    setLocationMatches([]);
  };

  return (
    <Container>
      <SearchSection>
        <SearchInput
          type="text"
          placeholder="Search by property e.g., name, reg no etc."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SearchButton onClick={handleSearchSubmit}>
          <Link style={{color:"white", textDecoration:"none"}} to='/searchbook'> search</Link>
          {/* <FaSearch style={{color: 'white'}} /> */}
        </SearchButton>
      </SearchSection>

      <TagsSection>
        {['All', 'State', 'University', 'Poly', 'College', 'Secondary', 'Primary', 'Course', 'Science', 'Price', 'Commerce', 'Fiction', 'Business', 'Music', 'Engineering', 'Agric', 'Art', 'PhD', 'Masters', 'Bachelors', 'Diploma', 'Abroad', 'Date'].map((tag) => (
          <TagButton key={tag} active={selectedTag === tag} onClick={() => handleTagClick(tag)}>
            {tag}
          </TagButton>
        ))}
      </TagsSection>

      <Banner>
        <BannerText>
          <h1>BOOK RELEASE EVENT</h1>
          <p>Main Event: Book Signing & Reading</p>
          <p>Saturday, August 21</p>
        </BannerText>
      </Banner>

      <MapSection>
        <MapInput
          type="text"
          placeholder="Input your location"
          value={locationQuery}
          onChange={handleLocationChange}
        />
        <MapButton>Map out</MapButton>
        {locationMatches.length > 0 && (
          <SuggestionsList>
            {locationMatches.map((location, index) => (
              <SuggestionItem key={index} onClick={() => handleLocationSelect(location)}>
                {location}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </MapSection>

      <BookshopsSection>
        <BookshopsTitle>Bookshops around you</BookshopsTitle>
        <BookList>
          {filteredBooks.map((book) => (
            <BookCard key={book.id}>
              <h3>{book.name}</h3>
              <p>Tags: {book.tags.join(', ')}</p>
            </BookCard>
          ))}
        </BookList>
      </BookshopsSection>
    </Container>
  );
};

export default Background;
