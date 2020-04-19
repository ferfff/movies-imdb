import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = '5016d990'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {}}

    _fetchMovie({movieId}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
        .then(res => res.json())
        .then(movie => {
            console.log('_fetchMovie',{movie});
            this.setState({movie})
        })
    }

    _goBack () {
        window.history.back()
    }

    componentDidMount() {
        console.log(this.props);
        const { movieId } = this.props.match.params
        this._fetchMovie({ movieId })
    }

    render(){
        const { Title, Poster, Actors, Metascore, Plot, Production } = this.state.movie
        return (
            <div>
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img alt={Production} src={Poster} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}
