import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Persons from './components/Persons';

const routes = [
    {
        path: "/",
        text: "Home",
        exact: true,
        component: Home,
    },
    {
        path: "/counter",
        text: "Counter",
        component: Counter,
    },
    {
        path: "/fetchdata",
        text: "Fetch",
        component: FetchData,
    },
    {
        path: "/persons",
        text: "Persons",
        component: Persons,
    }
];

export default routes;