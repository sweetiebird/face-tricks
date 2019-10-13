import { NavigationActions } from 'react-navigation';


let _nav = undefined;


export const setTopLevelNavigator = (navigatorRef) => {
  _nav = navigatorRef;
};

export const navigate = (routeName, params) => {
  _nav.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
