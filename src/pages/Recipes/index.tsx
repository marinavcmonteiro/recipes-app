import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import RecipesList from '../../components/RecipesList/RecipesList';
import { CONTEXT_INITIAL_STATE,
  RecipeContext,
  RecipeContextProvider } from '../../contexts/recipes.context';
import { capitalize } from '../../helpers/capitalize';
import { FoodService } from '../../services/services';
import { Recipe, RecipeScope } from '../../types/recipe';

export type RecipesProps = {
  scope: RecipeScope;
};

function Recipes({ scope }: RecipesProps) {
  return (
    <RecipeContextProvider
      value={ {
        ...CONTEXT_INITIAL_STATE,
        ...{ state: {
          ...CONTEXT_INITIAL_STATE.state,
          scope,
        } },
      } }
    >
      <Header pageTitle={ `Recipes - ${capitalize(scope)}` } />
      <RecipesList />
    </RecipeContextProvider>
  );
}

export default Recipes;
