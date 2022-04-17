import React, { useContext } from 'react';

//* Components
import { Spinner } from '@/components';

//* Styled
import { ListStyled, ListContainer, Item, ItemImage, ItemDescription, ItemLink } from './styles';

//* Context
import { SearchContext } from '@/context';

export const List = () => {
  const { isLoading, images } = useContext(SearchContext);

  if (isLoading) return <Spinner />;

  return (
    <ListStyled>
      <ListContainer>
        {images.map(({ id, links, urls, description, alt_description }) => (
          <ItemLink href={links.html} target="__blank">
            <Item key={id}>
              <ItemImage src={urls.regular} alt={alt_description || id} />
              {description && <ItemDescription> {description} </ItemDescription>}
            </Item>
          </ItemLink>
        ))}
      </ListContainer>
    </ListStyled>
  );
};
