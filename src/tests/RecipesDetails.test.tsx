import { screen } from '@testing-library/react';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';
import { renderWithRouter } from './helpers/renderWith';
import App from '../App';

describe('Testes referentes ao componente RecipesDetails', () => {
  renderWithRouter(<RecipeDetails />);
  test('Verifica se o componente contém um heading h2', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    
  });
});
