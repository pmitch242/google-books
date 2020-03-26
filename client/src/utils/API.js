import axios from 'axios';

export default {
    // search google book api 
    google: function(search){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
    }
}