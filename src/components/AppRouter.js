import React from 'react'
import { Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodeList';
import WelcomePage from './WelcomePage';



export default function AppRouter() {
    return (
        <>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
            <Route path="/episodes" component={EpisodesList} />

        </>
    )
}